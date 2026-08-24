import './ui.css';
import { defineComponent as O, useSlots as Ft, openBlock as t, createElementBlock as n, normalizeClass as A, unref as b, renderSlot as U, createElementVNode as o, toDisplayString as f, createCommentVNode as x, computed as y, normalizeStyle as se, Fragment as z, renderList as j, ref as R, watch as me, useId as tn, withModifiers as he, createTextVNode as N, createVNode as D, createStaticVNode as Nt, createBlock as T, createSlots as rt, withCtx as L, nextTick as Te, onBeforeUnmount as ke, Teleport as Qe, Transition as Ue, onMounted as ve, withDirectives as pe, vModelText as Ae, resolveDynamicComponent as _e, resolveComponent as Rt, vModelSelect as We, vModelDynamic as an, mergeProps as re, normalizeProps as Oe, guardReactiveProps as Fe, defineAsyncComponent as sa, inject as ht, vShow as He, onUnmounted as nn, isRef as ln, useTemplateRef as on, onErrorCaptured as sn, provide as Ot, markRaw as ka, withKeys as rn, reactive as it, useModel as ut, mergeModels as Ee, shallowRef as dn, watchEffect as un } from "vue";
import { useForwardPropsEmits as be, DialogRoot as $a, DialogOverlay as Ut, DialogPortal as Ht, DialogContent as Kt, DialogClose as et, CheckboxRoot as cn, CheckboxIndicator as fn, SwitchRoot as mn, SwitchThumb as pn, DialogDescription as wa, DialogTitle as Ca, DialogTrigger as Sa, createContext as vn, Primitive as tt, TooltipRoot as gn, TooltipPortal as hn, TooltipContent as bn, TooltipArrow as yn, TooltipProvider as Ma, TooltipTrigger as xn, Separator as kn, DropdownMenuRoot as $n, DropdownMenuCheckboxItem as wn, DropdownMenuItemIndicator as Ba, DropdownMenuPortal as Cn, DropdownMenuContent as Sn, DropdownMenuGroup as Mn, useForwardProps as Le, DropdownMenuItem as Bn, DropdownMenuLabel as _n, DropdownMenuRadioGroup as An, DropdownMenuRadioItem as Pn, DropdownMenuSeparator as zn, DropdownMenuSub as On, DropdownMenuSubContent as Ln, DropdownMenuSubTrigger as jn, DropdownMenuTrigger as Vn, AvatarRoot as Tn, AvatarFallback as Dn, AvatarImage as In, NavigationMenuViewport as En, NavigationMenuRoot as Fn, NavigationMenuContent as Nn, NavigationMenuIndicator as Rn, NavigationMenuItem as Un, NavigationMenuLink as Hn, NavigationMenuList as Kn, NavigationMenuTrigger as qn, Label as Gn } from "reka-ui";
import { DropdownMenuPortal as M8 } from "reka-ui";
import { X as qt, Check as _a, AlertCircle as Wn, EyeOff as Zn, Eye as Jn, PanelLeftOpen as Yn, PanelLeftClose as Xn, Circle as Qn, ChevronRight as Aa, MoreHorizontal as el, ChevronDown as tl, Loader2Icon as al } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as Pa, useMediaQuery as nl, useEventListener as ll, defaultDocument as ol } from "@vueuse/core";
import { clsx as sl } from "clsx";
import { twMerge as rl } from "tailwind-merge";
import { cva as Gt } from "class-variance-authority";
import { usePage as za, Link as il } from "@inertiajs/vue3";
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
}, dl = {
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
  const l = dl[e] ?? e;
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
  const a = ul(e.label);
  if (a)
    return ce(a);
  if (e.destructive)
    return ce("trash");
  const r = e.color ?? "";
  return r && ia[r] ? ce(ia[r]) : ce("circle");
}
function ul(e) {
  if (!e)
    return null;
  const l = e.toLowerCase();
  return /\b(delete|remove|destroy|trash)\b/.test(l) ? "trash" : /\b(log\s*in|impersonat|sign\s*in\s+as)\b/.test(l) ? "log-in" : /\b(recharge|credit|wallet|top\s*up|topup)\b/.test(l) ? "coins" : /\b(edit|update)\b/.test(l) ? "pencil" : /\b(view|open|show)\b/.test(l) ? "eye" : /\b(restore|undo)\b/.test(l) ? "undo" : /\b(copy|replicate|duplicate)\b/.test(l) ? "copy" : /\b(export|download)\b/.test(l) ? "download" : /\b(suspend|ban|block)\b/.test(l) ? "ban" : /\b(activate|resume|enable)\b/.test(l) ? "play" : null;
}
const cl = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, fl = ["d"], ml = { class: "flex max-w-sm flex-col gap-1" }, pl = {
  key: 0,
  class: "text-sm font-normal"
}, vl = {
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
      b(l).illustration ? (t(), n("div", cl, [
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
              d: b(ce)(e.icon)
            }, null, 8, fl)
          ], 2))
        ])
      ], 2)),
      o("div", ml, [
        o("p", {
          class: A(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), n("p", pl, f(e.description), 1)) : x("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", vl, [
        U(a.$slots, "actions")
      ])) : x("", !0)
    ], 2));
  }
}), gl = ["aria-label"], ze = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, j(s.value, (c) => (t(), n("span", {
        key: c,
        "aria-hidden": "true",
        class: A(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: se({
          width: i(c - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, gl));
  }
}), hl = { class: "w-full border-collapse text-sm" }, bl = { class: "bg-background sticky top-0 z-10" }, yl = {
  key: 0,
  class: "bg-muted/40"
}, xl = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, kl = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, $l = ["colspan"], wl = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Cl = { class: "bg-muted/50" }, Sl = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Ml = ["id", "checked", "indeterminate"], Bl = ["onClick"], _l = {
  key: 0,
  class: "text-xs"
}, Al = {
  key: 1,
  class: "text-xs opacity-40"
}, Pl = { key: 1 }, zl = ["aria-label", "onPointerdown"], Ol = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Ll = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, jl = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, Vl = {
  key: 1,
  class: "px-3 py-2.5"
}, Tl = {
  key: 2,
  class: "px-2 py-2.5"
}, Dl = {
  key: 0,
  class: "bg-muted/40"
}, Il = ["colspan"], El = ["aria-expanded", "dusk", "onClick"], Fl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Nl = {
  key: 1,
  dusk: "group-header"
}, Rl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Ul = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Hl = ["id", "value", "checked", "disabled", "aria-label", "onClick"], Kl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, ql = ["aria-label", "onClick"], Gl = { class: "text-xs" }, Wl = {
  key: 1,
  class: "text-muted-foreground"
}, Zl = { key: 2 }, Jl = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Yl = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, Xl = { key: 0 }, Ql = { class: "text-muted-foreground block text-[10px] font-medium" }, eo = { class: "font-semibold tabular-nums" }, to = { key: 1 }, ao = 40, no = /* @__PURE__ */ O({
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
    function c(W) {
      return a.groupBy?.collapsible ? d.value.has(W) : !1;
    }
    function v(W) {
      if (!a.groupBy?.collapsible)
        return;
      const ee = new Set(u.value);
      ee.add(W), u.value = ee;
      const Y = new Set(d.value);
      Y.has(W) ? Y.delete(W) : Y.add(W), d.value = Y;
    }
    function m(W) {
      return a.groupBy?.collapsible ? !c(r(a.rows[W])) : !0;
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
    const g = R(null), C = R(null);
    function k(W, ee) {
      g.value = W, ee.dataTransfer?.setData("text/plain", String(W)), ee.dataTransfer && (ee.dataTransfer.effectAllowed = "move");
    }
    function $() {
      g.value = null, C.value = null;
    }
    function M(W) {
      return g.value === null || C.value !== W ? "" : g.value > W ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function S(W, ee) {
      g.value !== null && (ee.preventDefault(), C.value = W);
    }
    function B(W) {
      const ee = g.value;
      if (g.value = null, C.value = null, ee === null || ee === W)
        return;
      const Y = a.rows.map((ie) => ie[a.rowKey]), [de] = Y.splice(ee, 1);
      Y.splice(W, 0, de), p("reorder", Y);
    }
    const p = l;
    function h(W, ee) {
      !a.rowClickable || a.reordering || ee.button !== 0 || ee.metaKey || ee.ctrlKey || ee.shiftKey || ee.altKey || ee.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || p("row-click", W);
    }
    const w = R(null), P = tn(), E = y(() => a.columns.filter((W) => !a.hidden?.has(W.key))), I = y(() => {
      const W = E.value.find((ee) => ee.sticky);
      return W ? W.key : a.stickyFirst && E.value.length > 0 ? E.value[0].key : null;
    });
    function te(W) {
      return I.value === W.key;
    }
    function H() {
      return a.selectable && !a.reordering ? `${ao}px` : "0";
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
        p("resize", W.key, Math.min(1200, Math.max(48, Mt)));
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
    const Z = y(() => E.value.some((W) => !!W.group)), q = y(() => {
      const W = [];
      for (const ee of E.value) {
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
          const nt = Math.min(Ke, Ne), Mt = Math.max(Ke, Ne), en = !ie;
          for (let pt = nt; pt <= Mt; pt++) {
            if (!m(pt))
              continue;
            const Bt = _(a.rows[pt]);
            if (Bt === null)
              continue;
            !!a.selected?.has(Bt) !== en && p("toggle-row", Bt);
          }
          V.value = Y;
          return;
        }
      }
      p("toggle-row", Y), V.value = Y;
    }
    const ye = y(
      () => a.rows.map((W) => _(W)).filter((W) => W !== null)
    ), le = y(
      () => ye.value.length > 0 && ye.value.every((W) => a.selected?.has(W))
    ), X = y(
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
    const Xa = y(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function oa(W) {
      return a.summaries?.[W] ?? null;
    }
    function Qa(W) {
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
      o("table", hl, [
        o("thead", bl, [
          Z.value ? (t(), n("tr", yl, [
            e.reordering ? (t(), n("th", xl)) : x("", !0),
            e.selectable && !e.reordering ? (t(), n("th", kl)) : x("", !0),
            (t(!0), n(z, null, j(q.value, (Y) => (t(), n("th", {
              key: Y.key,
              colspan: Y.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, f(Y.label ?? ""), 9, $l))), 128)),
            W.$slots.actions ? (t(), n("th", wl)) : x("", !0)
          ])) : x("", !0),
          o("tr", Cl, [
            e.reordering ? (t(), n("th", Sl)) : x("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: A(["w-10 border-b px-3 py-2.5", I.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
            }, [
              o("input", {
                id: `${b(P)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: le.value,
                indeterminate: X.value,
                "aria-label": "Select all rows on this page",
                onClick: ee[0] || (ee[0] = he(() => {
                }, ["stop"])),
                onChange: ee[1] || (ee[1] = he((Y) => p("toggle-page", !le.value), ["stop"]))
              }, null, 40, Ml)
            ], 2)) : x("", !0),
            (t(!0), n(z, null, j(E.value, (Y) => (t(), n("th", {
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
                onClick: (de) => p("sort", ne(Y))
              }, [
                N(f(Y.label) + " ", 1),
                Ce(Y) ? (t(), n("span", _l, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", Al, "↕"))
              ], 8, Bl)) : (t(), n("span", Pl, f(Y.label), 1)),
              oe(Y) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${Y.label}`,
                onPointerdown: (de) => ae(Y, de)
              }, null, 40, zl)) : x("", !0)
            ], 6))), 128)),
            W.$slots.actions ? (t(), n("th", Ol, [...ee[2] || (ee[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : x("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", Ll, [
          (t(), n(z, null, j(6, (Y) => o("tr", {
            key: `skel-${Y}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", jl, [
              D(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : x("", !0),
            e.selectable && !e.reordering ? (t(), n("td", Vl, [
              D(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : x("", !0),
            (t(!0), n(z, null, j(E.value, (de) => (t(), n("td", {
              key: de.key,
              class: "px-3 py-2.5"
            }, [
              D(ze, { variant: "text" })
            ]))), 128)),
            W.$slots.actions ? (t(), n("td", Tl, [
              D(ze, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : x("", !0)
          ])), 64))
        ])) : (t(), n("tbody", {
          key: 1,
          class: A(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, j(e.rows, (Y, de) => (t(), n(z, {
            key: _(Y) ?? `row-${de}`
          }, [
            e.groupBy && s(de) ? (t(), n("tr", Dl, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), n("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !c(r(Y)),
                  dusk: `group-header-${r(Y) || "none"}`,
                  onClick: (ie) => v(r(Y))
                }, [
                  o("span", Fl, f(c(r(Y)) ? "▸" : "▾"), 1),
                  N(" " + f(i(Y)), 1)
                ], 8, El)) : (t(), n("span", Nl, f(i(Y)), 1))
              ], 8, Il)
            ])) : x("", !0),
            m(de) ? (t(), n("tr", {
              key: 1,
              class: A(["group pk-row border-b transition-colors hover:bg-muted/50", [
                F(Y) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && de % 2 === 1 ? "bg-muted/20" : "",
                g.value === de ? "opacity-40" : "",
                M(de),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => k(de, ie),
              onDragover: (ie) => S(de, ie),
              onDrop: he((ie) => B(de), ["prevent"]),
              onDragend: $,
              onContextmenu: (ie) => p("row-contextmenu", Y, ie),
              onClick: (ie) => h(Y, ie)
            }, [
              e.reordering ? (t(), n("td", Ul, [...ee[3] || (ee[3] = [
                Nt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : x("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: A(["px-3 py-2", I.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${b(P)}-row-${_(Y) ?? de}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: _(Y) ?? void 0,
                  checked: F(Y),
                  disabled: _(Y) === null,
                  "aria-label": _(Y) === null ? "This row has no id and cannot be selected" : `Select row ${_(Y)}`,
                  onClick: he((ie) => ge(Y, ie), ["stop"])
                }, null, 8, Hl)
              ], 2)) : x("", !0),
              (t(!0), n(z, null, j(E.value, (ie) => (t(), n("td", {
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
                  ie.copyable ? (t(), n("span", Kl, [
                    N(f(Y[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (Ke) => la(String(Y[e.rowKey]), ie, Y[ie.key])
                    }, [
                      o("span", Gl, f(w.value === `${Y[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, ql)
                  ])) : Y[ie.key] == null || Y[ie.key] === "" ? (t(), n("span", Wl, "None")) : (t(), n("span", Zl, f(Y[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              W.$slots.actions ? (t(), n("td", Jl, [
                U(W.$slots, "actions", { row: Y }, void 0, !0)
              ])) : x("", !0)
            ], 42, Rl)) : x("", !0)
          ], 64))), 128))
        ], 2)),
        Xa.value ? (t(), n("tfoot", Yl, [
          o("tr", null, [
            e.selectable ? (t(), n("td", Xl)) : x("", !0),
            (t(!0), n(z, null, j(e.columns, (Y) => (t(), n(z, {
              key: `s-${Y.key}`
            }, [
              e.hidden?.has(Y.key) ? x("", !0) : (t(), n("td", {
                key: 0,
                class: A(["px-3 py-2 align-top text-sm whitespace-nowrap", Y.cellClass])
              }, [
                oa(Y.key) ? (t(), n(z, { key: 0 }, [
                  o("span", Ql, f(oa(Y.key).label), 1),
                  o("span", eo, f(Qa(Y.key)), 1)
                ], 64)) : x("", !0)
              ], 2))
            ], 64))), 128)),
            W.$slots.actions ? (t(), n("td", to)) : x("", !0)
          ])
        ])) : x("", !0)
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
      ]), 1032, ["icon", "title", "description"])) : x("", !0)
    ], 2));
  }
}), wt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, lo = /* @__PURE__ */ wt(no, [["__scopeId", "data-v-c0f7d40f"]]), oo = ["aria-label"], so = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, ro = { class: "text-base font-semibold" }, io = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, uo = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, co = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, dt = /* @__PURE__ */ O({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(null);
    let i = null;
    const d = R(!1);
    function u(m) {
      d.value = m.target === m.currentTarget;
    }
    function c(m) {
      d.value && m.target === m.currentTarget && !a.busy && r("close"), d.value = !1;
    }
    function v(m) {
      if (!a.open)
        return;
      if (m.key === "Escape" && !a.busy) {
        m.stopPropagation(), r("close");
        return;
      }
      if (m.key !== "Tab" || !s.value)
        return;
      const g = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (g.length === 0)
        return;
      const C = g[0], k = g[g.length - 1];
      m.shiftKey && document.activeElement === C ? (m.preventDefault(), k.focus()) : !m.shiftKey && document.activeElement === k && (m.preventDefault(), C.focus());
    }
    return me(
      () => a.open,
      (m) => {
        m ? (i = document.activeElement, document.addEventListener("keydown", v), Te(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", v), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", v)), (m, g) => (t(), T(Qe, { to: "body" }, [
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
            onPointerdown: u,
            onPointerup: c
          }, [
            o("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground flex w-full max-w-lg max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl"
            }, [
              o("div", so, [
                o("h2", ro, f(e.title), 1),
                e.description ? (t(), n("p", io, f(e.description), 1)) : x("", !0)
              ]),
              o("div", uo, [
                U(m.$slots, "default")
              ]),
              o("div", co, [
                U(m.$slots, "footer")
              ])
            ], 8, oo)
          ], 32)) : x("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), fo = 160, Je = /* @__PURE__ */ O({
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
      !a.dismissOnPanelClick || h.target?.closest("input, select, textarea, label, [data-keep-open]") || $();
    }
    async function m() {
      c && (clearTimeout(c), c = null), !r.value && (r.value = !0, await Te(), M());
    }
    function g() {
      c = setTimeout($, 180);
    }
    async function C() {
      u.value = null, r.value = !r.value, r.value && (await Te(), M());
    }
    async function k(h, w) {
      u.value = { x: h, y: w }, r.value = !0, await Te(), M();
    }
    function $() {
      r.value = !1, u.value = null;
    }
    function M() {
      const h = s.value, w = i.value;
      if (!h || !w)
        return;
      const P = w.getBoundingClientRect(), E = 8, I = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : h.getBoundingClientRect();
      let te, H;
      if (a.placement === "bottom")
        te = I.bottom + a.offset, te + P.height > window.innerHeight - E && I.top - P.height - a.offset > E && (te = I.top - P.height - a.offset), H = a.align === "end" && !u.value ? I.right - P.width : I.left;
      else {
        te = I.top;
        const K = a.placement === "right", G = I.right + a.offset + P.width < window.innerWidth - E, oe = I.left - a.offset - P.width > E;
        H = (K ? G || !oe : !oe && G) ? I.right + a.offset : I.left - a.offset - P.width;
      }
      H = Math.min(Math.max(E, H), window.innerWidth - P.width - E), te = Math.min(Math.max(E, te), window.innerHeight - P.height - E), d.value = { top: te, left: H, minWidth: Math.max(I.width, fo) };
    }
    function S(h) {
      if (!r.value)
        return;
      const w = h.target;
      s.value?.contains(w) || i.value?.contains(w) || (w instanceof Element ? w : w.parentElement)?.closest("[data-pk-overlay]") || $();
    }
    function B(h) {
      h.key === "Escape" && r.value && (h.stopPropagation(), $());
    }
    function p() {
      if (r.value) {
        if (u.value) {
          $();
          return;
        }
        M();
      }
    }
    return ve(() => {
      document.addEventListener("pointerdown", S), document.addEventListener("keydown", B), window.addEventListener("scroll", p, !0), window.addEventListener("resize", p);
    }), ke(() => {
      c && clearTimeout(c), document.removeEventListener("pointerdown", S), document.removeEventListener("keydown", B), window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
    }), l({ close: $, openAt: k }), (h, w) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: w[2] || (w[2] = (P) => e.hoverable && m()),
      onPointerleave: w[3] || (w[3] = (P) => e.hoverable && g())
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
              onPointerenter: w[0] || (w[0] = (P) => e.hoverable && m()),
              onPointerleave: w[1] || (w[1] = (P) => e.hoverable && g()),
              onClick: v
            }, [
              U(h.$slots, "panel", { close: $ })
            ], 38)) : x("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), mo = ["disabled"], po = { class: "py-0.5" }, vo = ["disabled", "onClick"], go = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ho = ["d"], bo = { class: "min-w-0 flex-1 truncate" }, yo = ["disabled"], xo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ko = ["d"], $o = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, wo = ["disabled", "onClick"], Co = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, So = ["d"], Mo = { class: "min-w-0 flex-1 truncate" }, Bo = { class: "text-muted-foreground text-sm font-normal" }, _o = { class: "text-foreground font-medium tabular-nums" }, Ao = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Po = ["disabled"], zo = { class: "text-muted-foreground text-sm font-normal" }, Oo = { class: "text-foreground font-medium tabular-nums" }, Lo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, jo = ["disabled"], x5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), d = y(() => a.allMatching ? a.total : a.count), u = y(() => d.value !== void 0), c = y(() => u.value && d.value === 0), v = y(() => a.actions.filter((B) => !B.destructive)), m = y(() => a.actions.filter((B) => B.destructive)), g = {
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
    function k(B) {
      if (B.confirmation) {
        s.value = B;
        return;
      }
      r("run", B.key);
    }
    function $() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function M() {
      i.value = !1, r("export");
    }
    const S = (B) => new Intl.NumberFormat().format(B);
    return (B, p) => (t(), n(z, null, [
      D(Je, null, {
        trigger: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...p[5] || (p[5] = [
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
          ])], 8, mo)
        ]),
        panel: L(() => [
          o("div", po, [
            (t(!0), n(z, null, j(v.value, (h) => (t(), n("button", {
              key: h.key,
              type: "button",
              role: "menuitem",
              class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(h)]),
              disabled: e.busy,
              onClick: (w) => k(h)
            }, [
              (t(), n("svg", go, [
                o("path", {
                  d: b(ot)(h)
                }, null, 8, ho)
              ])),
              o("span", bo, f(h.label), 1)
            ], 10, vo))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: p[0] || (p[0] = (h) => i.value = !0)
            }, [
              (t(), n("svg", xo, [
                o("path", {
                  d: b(ce)("download")
                }, null, 8, ko)
              ])),
              p[6] || (p[6] = N(" Export CSV ", -1))
            ], 8, yo)) : x("", !0),
            m.value.length ? (t(), n("div", $o, [
              (t(!0), n(z, null, j(m.value, (h) => (t(), n("button", {
                key: h.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (w) => k(h)
              }, [
                (t(), n("svg", Co, [
                  o("path", {
                    d: b(ot)({ ...h, destructive: !0 })
                  }, null, 8, So)
                ])),
                o("span", Mo, f(h.label), 1)
              ], 8, wo))), 128))
            ])) : x("", !0)
          ])
        ]),
        _: 1
      }),
      D(dt, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: p[2] || (p[2] = (h) => s.value = null)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: p[1] || (p[1] = (h) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: A([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || c.value,
            onClick: $
          }, f(s.value?.label), 11, Po)
        ]),
        default: L(() => [
          o("p", Bo, [
            p[7] || (p[7] = N(" This will affect ", -1)),
            o("span", _o, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(f(S(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            p[8] || (p[8] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", Ao, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : x("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(dt, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: p[4] || (p[4] = (h) => i.value = !1)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: p[3] || (p[3] = (h) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || c.value,
            onClick: M
          }, " Export CSV ", 8, jo)
        ]),
        default: L(() => [
          o("p", zo, [
            p[9] || (p[9] = N(" This will export ", -1)),
            o("span", Oo, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(f(S(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            p[10] || (p[10] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", Lo, " Nothing matches the current filters - there is nothing to export. ")) : x("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Vo = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, To = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, Do = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, Io = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, Eo = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Vo, [
      l.$slots.tabs ? (t(), n("div", To, [
        U(l.$slots, "tabs")
      ])) : x("", !0),
      l.$slots.title ? (t(), n("div", Do, [
        U(l.$slots, "title")
      ])) : x("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: A(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        U(l.$slots, "toolbar")
      ], 2)) : x("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Io, [
        U(l.$slots, "pagination")
      ])) : x("", !0)
    ]));
  }
}), Me = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", da = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", k5 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Fo = ["aria-expanded"], No = ["aria-label", "onClick"], Ro = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Uo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Ho = {
  key: 0,
  class: "border-b p-1"
}, Ko = ["placeholder"], qo = { class: "max-h-60 overflow-y-auto p-1" }, Go = ["aria-selected", "onMouseenter", "onClick"], Wo = {
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
    const a = e, r = l, s = R(null), i = R(null), d = R(null), u = R(!1), c = R(""), v = R(0), m = R({ top: 0, left: 0, width: 0 }), g = y(
      () => a.modelValue.map(
        (H) => a.options.find((K) => K.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), C = y(() => a.searchable ?? a.options.length > 6), k = y(() => {
      const H = new Set(a.modelValue), K = c.value.trim().toLowerCase();
      return a.options.filter((G) => !H.has(G.value)).filter((G) => K ? G.label.toLowerCase().includes(K) : !0);
    }), $ = y(() => a.max !== null && a.modelValue.length >= a.max);
    function M() {
      const H = s.value, K = i.value;
      if (!H || !K)
        return;
      const G = H.getBoundingClientRect(), oe = K.getBoundingClientRect(), ae = 8;
      let Z = G.bottom + 4;
      Z + oe.height > window.innerHeight - ae && G.top - oe.height - 4 > ae && (Z = G.top - oe.height - 4), m.value = {
        top: Z,
        left: Math.min(Math.max(ae, G.left), window.innerWidth - G.width - ae),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: G.width
      };
    }
    async function S() {
      a.disabled || u.value || (u.value = !0, c.value = "", v.value = 0, await Te(), M(), d.value?.focus());
    }
    function B() {
      u.value = !1, c.value = "";
    }
    function p() {
      u.value ? B() : S();
    }
    function h(H) {
      $.value || (r("update:modelValue", [...a.modelValue, H.value]), c.value = "", v.value = 0, Te(() => {
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
            H.preventDefault(), v.value = Math.min(v.value + 1, k.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), v.value = Math.max(v.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const K = k.value[v.value];
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
    function te() {
      u.value && M();
    }
    return me(k, (H) => {
      v.value > H.length - 1 && (v.value = Math.max(0, H.length - 1));
    }), ve(() => {
      document.addEventListener("pointerdown", I), window.addEventListener("scroll", te, !0), window.addEventListener("resize", te);
    }), ke(() => {
      document.removeEventListener("pointerdown", I), window.removeEventListener("scroll", te, !0), window.removeEventListener("resize", te);
    }), (H, K) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: E
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
        onClick: p
      }, [
        (t(!0), n(z, null, j(g.value, (G) => (t(), n("span", {
          key: G.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          N(f(G.label) + " ", 1),
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
          ])], 8, No)
        ]))), 128)),
        g.value.length === 0 ? (t(), n("span", Ro, f(e.placeholder), 1)) : x("", !0),
        o("span", Uo, [
          g.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: he(P, ["stop"])
          }, " Clear ")) : x("", !0),
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
      ], 10, Fo),
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
                top: `${m.value.top}px`,
                left: `${m.value.left}px`,
                width: `${m.value.width}px`
              }),
              role: "listbox"
            }, [
              C.value ? (t(), n("div", Ho, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": K[0] || (K[0] = (G) => c.value = G),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: E
                }, null, 40, Ko), [
                  [Ae, c.value]
                ])
              ])) : x("", !0),
              o("div", qo, [
                (t(!0), n(z, null, j(k.value, (G, oe) => (t(), n("button", {
                  key: G.value,
                  type: "button",
                  class: A(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", oe === v.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": oe === v.value,
                  onMouseenter: (ae) => v.value = oe,
                  onClick: (ae) => h(G)
                }, f(G.label), 43, Go))), 128)),
                k.value.length === 0 ? (t(), n("p", Wo, [
                  $.value ? (t(), n(z, { key: 0 }, [
                    N("You have selected the maximum.")
                  ], 64)) : c.value ? (t(), n(z, { key: 1 }, [
                    N("Nothing matches “" + f(c.value) + "”.", 1)
                  ], 64)) : (t(), n(z, { key: 2 }, [
                    N("Everything is selected.")
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
}), Zo = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Jo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, Yo = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function st(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Zo, Jo[l], Yo[a], e.class].filter(Boolean).join(" ");
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
      class: A(a.value)
    }, {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), Xo = { class: "flex items-center gap-2" }, Qo = ["onUpdate:modelValue", "onChange"], es = ["value"], ts = ["onUpdate:modelValue"], as = ["value"], ns = ["onUpdate:modelValue"], ls = ["onUpdate:modelValue", "multiple"], os = ["value"], ss = ["onUpdate:modelValue", "type"], rs = ["aria-label", "onClick"], is = { class: "flex items-center gap-2" }, ds = /* @__PURE__ */ O({
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
      (p) => {
        i.value = p ? structuredClone(p) : s();
      }
    );
    const d = (p) => "rules" in p, u = y(() => Object.keys(a.fields));
    function c(p) {
      const h = p ? a.fields[p]?.kind : void 0;
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
    function m() {
      r("update:modelValue", i.value);
    }
    function g() {
      const p = u.value[0];
      i.value.rules.push({
        field: p,
        operator: c(p)[0],
        value: void 0
      }), m();
    }
    function C() {
      i.value.rules.push(s()), m();
    }
    function k(p) {
      i.value.rules.splice(p, 1), m();
    }
    function $(p) {
      p.operator = c(p.field)[0], p.value = void 0, m();
    }
    const M = y(() => a.depth + 1 < a.maxDepth);
    function S() {
      i.value = s(), m(), r("apply", null);
    }
    function B() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (p, h) => {
      const w = Rt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: A(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", Xo, [
          pe(o("select", {
            "onUpdate:modelValue": h[0] || (h[0] = (P) => i.value.logic = P),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: m
          }, [...h[1] || (h[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [We, i.value.logic]
          ]),
          h[2] || (h[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, j(i.value.rules, (P, E) => (t(), n("div", {
          key: E,
          class: "flex items-start gap-2"
        }, [
          d(P) ? (t(), T(w, {
            key: 0,
            modelValue: i.value.rules[E],
            "onUpdate:modelValue": [(I) => i.value.rules[E] = I, m],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(z, { key: 1 }, [
            pe(o("select", {
              "onUpdate:modelValue": (I) => P.field = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (I) => $(P)
            }, [
              (t(!0), n(z, null, j(u.value, (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(e.fields[I].label), 9, es))), 128))
            ], 40, Qo), [
              [We, P.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (I) => P.operator = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: m
            }, [
              (t(!0), n(z, null, j(c(P.field), (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(v[I] ?? I), 9, as))), 128))
            ], 40, ts), [
              [We, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? pe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (I) => P.value = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [...h[3] || (h[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, ns)), [
              [We, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? pe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (I) => P.value = I,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [
              (t(!0), n(z, null, j(e.fields[P.field].options, (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(I), 9, os))), 128))
            ], 40, ls)), [
              [We, P.value]
            ]) : pe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (I) => P.value = I,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, null, 40, ss)), [
              [an, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(P) ? "group" : "rule"}`,
            onClick: (I) => k(E)
          }, " × ", 8, rs)
        ]))), 128)),
        o("div", is, [
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
          })) : x("", !0),
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
          ], 64)) : x("", !0)
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
    return (i, d) => (t(), T(b($a), re({ "data-slot": "sheet" }, b(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
});
function Q(...e) {
  return rl(sl(e));
}
function $5(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const us = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Ut), re({
      "data-slot": "sheet-overlay",
      class: b(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, b(a)), {
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
    return (d, u) => (t(), T(b(Ht), null, {
      default: L(() => [
        D(us),
        D(b(Kt), re({
          "data-slot": "sheet-content",
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...d.$attrs, ...b(i) }), {
          default: L(() => [
            U(d.$slots, "default"),
            D(b(et), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                D(b(qt), { class: "size-4" }),
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
}), cs = { class: "flex flex-col gap-2" }, fs = { class: "flex items-center gap-2 md:hidden" }, ms = { class: "relative min-w-0 flex-1" }, ps = ["placeholder", "title", "aria-label"], vs = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, gs = { class: "flex max-h-[85vh] flex-col" }, hs = { class: "flex-1 overflow-y-auto px-4 py-3" }, bs = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, ys = { class: "text-xs font-medium" }, xs = ["value", "onChange"], ks = ["value"], $s = { class: "mb-4" }, ws = { class: "flex flex-col gap-1" }, Cs = ["disabled", "onClick"], Ss = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, Ms = {
  key: 1,
  class: "mb-4"
}, Bs = { class: "flex flex-col gap-1" }, _s = ["onClick"], As = { class: "border-t p-4" }, Ps = ["disabled"], zs = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Os = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Ls = ["placeholder", "title", "aria-label"], js = ["aria-label"], Vs = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Ts = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Ds = { class: "text-xs font-medium" }, Is = ["value", "onChange"], Es = ["value"], Fs = { class: "grid grid-cols-2 gap-2" }, Ns = ["value", "onChange"], Rs = ["value", "onChange"], Us = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Hs = ["value", "onChange"], Ks = ["value", "onChange"], qs = {
  key: 4,
  class: "flex items-center gap-2"
}, Gs = ["aria-checked", "onClick"], Ws = { class: "text-xs" }, Zs = ["onClick"], Js = ["value", "onChange"], Ys = ["value"], Xs = ["disabled", "onClick"], Qs = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, er = ["disabled", "onClick"], tr = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ar = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, nr = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, lr = ["aria-pressed", "aria-label", "title", "onClick"], or = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, sr = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, rr = ["aria-pressed", "aria-label", "title"], ir = ["aria-label", "title"], dr = { class: "flex flex-col gap-0.5 p-1" }, ur = ["onClick"], cr = ["onClick"], fr = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, mr = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, pr = ["dusk"], vr = ["aria-label", "onClick"], gr = /* @__PURE__ */ O({
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
    const c = y(
      () => a.filterSchema.filter(
        (q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0
      ).length
    ), v = y(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), m = y(() => a.search !== "" || c.value > 0), g = y(() => a.indicators.length ? a.indicators : a.filterSchema.filter((q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0).map((q) => ({
      key: q.key,
      label: `${q.label}: ${String(a.filters[q.key])}`,
      removable: !0
    })));
    function C(q) {
      r("group", q);
    }
    function k(q) {
      r("clear-filter", q);
    }
    function $(q) {
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
    function p(q, _) {
      u.value = { ...u.value, [q.key]: _ === "" ? null : _ };
    }
    function h(q, _) {
      const F = u.value[q.key];
      if (typeof F != "string" || !F.includes(".."))
        return "";
      const [V, J] = F.split("..");
      return _ === "from" ? V ?? "" : J ?? "";
    }
    function w(q, _, F) {
      const V = _ === "from" ? F : h(q, "from"), J = _ === "to" ? F : h(q, "to");
      u.value = {
        ...u.value,
        [q.key]: V && J ? `${V}..${J}` : null
      };
    }
    function P(q, _, F) {
      const V = _ === "from" ? F : h(q, "from"), J = _ === "to" ? F : h(q, "to");
      u.value = {
        ...u.value,
        [q.key]: V || J ? `${V}..${J}` : null
      };
    }
    function E(q) {
      r("apply-filters", { ...u.value }), q();
    }
    function I(q, _) {
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
    return (q, _) => (t(), n("div", cs, [
      o("div", fs, [
        o("div", ms, [
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
            class: A(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", b(Me)])
          }, null, 10, ps), [
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
          c.value ? (t(), n("span", vs, f(c.value), 1)) : x("", !0)
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
                o("div", gs, [
                  _[16] || (_[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", hs, [
                    e.filterSchema.length ? (t(), n("div", bs, [
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
                        o("label", ys, f(F.label), 1),
                        F.type !== "multiselect" && F.type !== "querybuilder" && F.type !== "daterange" && F.type !== "numberrange" && F.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: u.value[F.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (V) => p(F, V.target.value)
                        }, [
                          _[13] || (_[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(z, null, j(H(F), (V) => (t(), n("option", {
                            key: String(V.value),
                            value: V.value
                          }, f(V.label), 9, ks))), 128))
                        ], 40, xs)) : x("", !0)
                      ]))), 128))
                    ])) : x("", !0),
                    o("div", $s, [
                      _[14] || (_[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", ws, [
                        (t(!0), n(z, null, j(e.columns, (F) => (t(), n("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (V) => G(F.key)
                        }, [
                          o("span", null, f(F.label), 1),
                          K.value.has(F.key) ? x("", !0) : (t(), n("span", Ss, "On"))
                        ], 8, Cs))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", Ms, [
                      _[15] || (_[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", Bs, [
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
                        }, f(F.label), 9, _s))), 128))
                      ])
                    ])) : x("", !0)
                  ]),
                  o("div", As, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !v.value,
                      onClick: ae
                    }, " Apply filters ", 8, Ps)) : x("", !0),
                    m.value ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: _[3] || (_[3] = (F) => {
                        Z(), s.value = !1;
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
      o("div", zs, [
        o("div", Os, [
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
            class: A(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", b(Me)])
          }, null, 10, Ls), [
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
          ])])) : x("", !0)
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
              class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", c.value ? "border-primary text-primary" : ""]),
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
              c.value ? (t(), n("span", Vs, f(c.value), 1)) : x("", !0)
            ], 10, js)
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
            o("div", Ts, [
              (t(!0), n(z, null, j(e.filterSchema, (V) => (t(), n("div", {
                key: V.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Ds, f(V.label), 1),
                $(V) ? (t(), T(Wt, {
                  key: 0,
                  "model-value": S(V),
                  options: B(V),
                  placeholder: `Any ${V.label.toLowerCase()}`,
                  "onUpdate:modelValue": (J) => u.value[V.key] = J.length ? J : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : V.type === "querybuilder" ? (t(), T(ds, {
                  key: 1,
                  "model-value": u.value[V.key] ?? null,
                  fields: V.fields ?? {},
                  operators: V.operators ?? {},
                  "max-depth": V.maxDepth ?? 5,
                  onApply: (J) => I(V.key, J)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : V.type === "daterange" ? (t(), n(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[V.key] == "string" && !String(u.value[V.key]).includes("..") ? u.value[V.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (J) => p(V, J.target.value)
                  }, [
                    _[21] || (_[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, j(H(V), (J) => (t(), n("option", {
                      key: String(J.value),
                      value: J.value
                    }, f(J.label), 9, Es))), 128))
                  ], 40, Is),
                  o("div", Fs, [
                    o("input", {
                      type: "date",
                      value: h(V, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => w(
                        V,
                        "from",
                        J.target.value
                      )
                    }, null, 40, Ns),
                    o("input", {
                      type: "date",
                      value: h(V, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => w(
                        V,
                        "to",
                        J.target.value
                      )
                    }, null, 40, Rs)
                  ])
                ], 64)) : V.type === "numberrange" ? (t(), n("div", Us, [
                  o("input", {
                    type: "number",
                    value: h(V, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => P(
                      V,
                      "from",
                      J.target.value
                    )
                  }, null, 40, Hs),
                  o("input", {
                    type: "number",
                    value: h(V, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => P(
                      V,
                      "to",
                      J.target.value
                    )
                  }, null, 40, Ks)
                ])) : V.type === "boolean" ? (t(), n("div", qs, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[V.key] === !0,
                    class: A([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[V.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (J) => p(V, u.value[V.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: A(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[V.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, Gs),
                  o("span", Ws, f(V.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: A([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[V.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (J) => p(V, u.value[V.key] === !1 ? null : !1)
                  }, f(V.falseLabel ?? "No") + " only ", 11, Zs)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[V.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (J) => p(V, J.target.value)
                }, [
                  _[22] || (_[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, j(H(V), (J) => (t(), n("option", {
                    key: String(J.value),
                    value: J.value
                  }, f(J.label), 9, Ys))), 128))
                ], 40, Js))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !v.value,
              onClick: (V) => E(F)
            }, " Apply filters ", 8, Xs)
          ]),
          _: 1
        })) : x("", !0),
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
            o("div", Qs, [
              (t(!0), n(z, null, j(e.columns, (F) => (t(), n("button", {
                key: F.key,
                type: "button",
                class: A(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (V) => G(F.key)
              }, [
                K.value.has(F.key) ? (t(), n("span", ar)) : (t(), n("svg", tr, [..._[25] || (_[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + f(F.label), 1)
              ], 10, er))), 128))
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
        e.layouts.length > 1 ? (t(), n("div", nr, [
          (t(!0), n(z, null, j(e.layouts, (F) => (t(), n("button", {
            key: F,
            type: "button",
            class: A(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === F ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === F,
            "aria-label": F === "cards" ? "Card layout" : "Table layout",
            title: F === "cards" ? "Cards" : "Table",
            onClick: (V) => r("layout", F)
          }, [
            F === "table" ? (t(), n("svg", or, [..._[28] || (_[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", sr, [..._[29] || (_[29] = [
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
          ], 10, lr))), 128))
        ])) : x("", !0),
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
        ])], 10, rr)) : x("", !0),
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
            ])], 10, ir)
          ]),
          panel: L(({ close: F }) => [
            o("div", dr, [
              o("button", {
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (V) => {
                  C(null), F();
                }
              }, " No grouping ", 10, ur),
              (t(!0), n(z, null, j(e.groups, (V) => (t(), n("button", {
                key: V.key,
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === V.key ? "text-primary font-medium" : ""]),
                onClick: (J) => {
                  C(V.key), F();
                }
              }, f(V.label), 11, cr))), 128))
            ])
          ]),
          _: 1
        })) : x("", !0),
        m.value ? (t(), n("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: Z
        }, " Clear ")) : x("", !0),
        e.loading ? (t(), n("span", fr, "Loading…")) : x("", !0)
      ]),
      g.value.length ? (t(), n("div", mr, [
        (t(!0), n(z, null, j(g.value, (F) => (t(), n("span", {
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
            onClick: (V) => k(F.key)
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
          ])], 8, vr)) : x("", !0)
        ], 8, pr))), 128)),
        g.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: _[8] || (_[8] = (F) => r("clear-filters"))
        }, " Clear all ")) : x("", !0)
      ])) : x("", !0)
    ]));
  }
}), hr = { class: "min-w-0" }, br = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, yr = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, xr = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, kr = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, $r = { class: "w-full border-collapse text-sm" }, wr = { class: "bg-muted/40" }, Cr = { class: "divide-y" }, Sr = ["href"], Mr = {
  key: 1,
  class: "text-muted-foreground"
}, Br = {
  key: 0,
  class: "flex justify-center"
}, _r = ["disabled"], Ar = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Pr = ["href"], w5 = /* @__PURE__ */ O({
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
    function m(C, k) {
      return k == null || k === "" ? "None" : C.type === "date" || C.type === "datetime" ? new Date(String(k)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...C.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof k == "number" ? new Intl.NumberFormat().format(k) : String(k);
    }
    function g(C) {
      return C == null || C === "";
    }
    return (C, k) => (t(), T(Eo, null, rt({
      default: L(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", xr, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(Lt, {
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
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", kr, [
          o("table", $r, [
            o("thead", wr, [
              o("tr", null, [
                (t(!0), n(z, null, j(i.value, ($) => (t(), n("th", {
                  key: $.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f($.label), 1))), 128))
              ])
            ]),
            o("tbody", Cr, [
              (t(!0), n(z, null, j(e.rows, ($, M) => (t(), n("tr", {
                key: $.id ?? M,
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
                    row: $,
                    value: $[S.key],
                    column: S
                  }, () => [
                    e.recordBase && $.id != null && S === i.value[0] ? (t(), n("a", {
                      key: 0,
                      href: `${e.recordBase}/${$.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, f(m(S, $[S.key])), 9, Sr)) : g($[S.key]) ? (t(), n("span", Mr, " None ")) : (t(), n(z, { key: 2 }, [
                      N(f(m(S, $[S.key])), 1)
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
        fn: L(() => [
          o("div", hr, [
            e.title ? (t(), n("h3", br, f(e.title), 1)) : x("", !0)
          ]),
          d.value ? (t(), n("div", yr, [
            U(C.$slots, "actions")
          ])) : x("", !0)
        ]),
        key: "0"
      } : void 0,
      c.value ? {
        name: "toolbar",
        fn: L(() => [
          D(gr, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: v.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": k[0] || (k[0] = ($) => r("update:search", $)),
            onApplyFilters: k[1] || (k[1] = ($) => r("apply-filters", $)),
            onClearFilters: k[2] || (k[2] = ($) => r("clear-filters")),
            onClearFilter: k[3] || (k[3] = ($) => r("clear-filter", $)),
            onClear: k[4] || (k[4] = ($) => r("clear-filters")),
            onApplyColumns: k[5] || (k[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: L(() => [
          e.nextCursor ? (t(), n("div", Br, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: k[6] || (k[6] = ($) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, _r)
          ])) : e.capped ? (t(), n("p", Ar, [
            N(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Pr)) : (t(), n(z, { key: 1 }, [
              N("Open the full list to search or filter the rest.")
            ], 64))
          ])) : x("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), zr = { class: "flex items-center gap-2 overflow-x-auto" }, Or = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jr = { class: "flex flex-col" }, Vr = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Tr = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Dr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Ir = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("ol", zr, [
      (t(!0), n(z, null, j(e.steps, (m, g) => (t(), n("li", {
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
              class: A(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(g)])
            }, [
              u(g) ? (t(), n("svg", Or, [...v[0] || (v[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(g) ? (t(), n("svg", Lr, [...v[1] || (v[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                N(f(g + 1), 1)
              ], 64))
            ], 2),
            o("span", jr, [
              o("span", null, f(m.label), 1),
              m.description ? (t(), n("span", Vr, f(m.description), 1)) : x("", !0)
            ]),
            e.hasError(g) ? (t(), n("span", Tr)) : x("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        g < e.steps.length - 1 ? (t(), n("span", Dr)) : x("", !0)
      ]))), 128))
    ]));
  }
}), ct = /* @__PURE__ */ new Map();
function xe(e, l) {
  ct.set(e, l);
}
function Er(e) {
  return ct.get(e);
}
function C5(e) {
  return ct.has(e);
}
function S5() {
  return [...ct.keys()].sort();
}
function M5() {
  ct.clear();
}
class Fr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function B5(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function Nr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function Rr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const _5 = "text-sm text-muted-foreground font-normal", A5 = "text-xs text-muted-foreground font-normal", vt = "text-xs text-muted-foreground font-normal leading-snug", Ur = "text-foreground font-normal", Hr = "placeholder:text-muted-foreground placeholder:font-normal", Re = `${Ur} ${Hr}`, Kr = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, qr = /* @__PURE__ */ O({
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
          e.generalError ? (t(), n("p", Kr, f(e.generalError), 1)) : x("", !0),
          (t(!0), n(z, null, j(e.fields, (c) => (t(), T(Xe, {
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
}), Gr = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(cn), re({ "data-slot": "checkbox" }, b(i), {
      class: b(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L((c) => [
        D(b(fn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            U(d.$slots, "default", Oe(Fe(c)), () => [
              D(b(_a), { class: "size-3.5" })
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
    return (i, d) => (t(), T(b(mn), re({ "data-slot": "switch" }, b(s), {
      class: b(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L(() => [
        D(b(pn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Wr = ["accept", "disabled"], Zr = { class: "text-sm font-medium" }, Jr = { key: 0 }, Yr = { key: 1 }, Xr = { class: "text-muted-foreground text-xs font-normal" }, Qr = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, ei = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, ti = ["src"], ai = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, ni = { class: "min-w-0 flex-1" }, li = { class: "block truncate text-sm font-medium" }, oi = { class: "text-muted-foreground text-xs font-normal" }, si = ["href"], ri = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, Oa = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), d = R(null), u = R(null), c = R(null), v = y(() => a.accept.map((h) => `.${h}`).join(",")), m = y(() => c.value ?? a.modelValue?.url ?? null), g = y(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(a.maxKilobytes * 1024)}`);
    function C(h) {
      if (!h)
        return "";
      const w = ["B", "KB", "MB", "GB"];
      let P = h, E = 0;
      for (; P >= 1024 && E < w.length - 1; )
        P /= 1024, E++;
      return `${P.toFixed(P < 10 && E > 0 ? 1 : 0)} ${w[E]}`;
    }
    function k(h) {
      return h.split(".").pop()?.toLowerCase() ?? "";
    }
    function $(h) {
      return a.accept.length && !a.accept.includes(k(h.name)) ? `${k(h.name).toUpperCase() || "That"} files are not accepted here.` : h.size > a.maxKilobytes * 1024 ? `That file is ${C(h.size)}; the limit is ${C(a.maxKilobytes * 1024)}.` : null;
    }
    async function M(h) {
      const w = h?.[0];
      if (!(!w || a.disabled) && (u.value = $(w), !u.value)) {
        S(), a.image && w.type.startsWith("image/") && (c.value = URL.createObjectURL(w)), d.value = 0;
        try {
          const P = await a.upload(w, (E) => {
            d.value = E;
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
      c.value && URL.revokeObjectURL(c.value), c.value = null;
    }
    async function B() {
      const h = a.modelValue;
      S(), u.value = null, r("update:modelValue", null), h && !h.url && a.discard && await a.discard(h.value).catch(() => {
      });
    }
    function p(h) {
      i.value = !1, M(h.dataTransfer?.files ?? null);
    }
    return (h, w) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", ei, [
        e.image && m.value ? (t(), n("img", {
          key: 0,
          src: m.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ti)) : (t(), n("span", ai, f(k(e.modelValue.name) || "file"), 1)),
        o("span", ni, [
          o("span", li, f(e.modelValue.name), 1),
          o("span", oi, [
            N(f(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              w[4] || (w[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, si)
            ], 64)) : (t(), n(z, { key: 1 }, [
              N(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? x("", !0) : (t(), n("button", {
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
        onDrop: he(p, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: v.value,
          disabled: e.disabled,
          onChange: w[0] || (w[0] = (P) => M(P.target.files))
        }, null, 40, Wr),
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
        o("span", Zr, [
          d.value === null ? (t(), n("span", Jr, "Drop a file or click to choose")) : (t(), n("span", Yr, "Uploading…"))
        ]),
        o("span", Xr, f(g.value), 1),
        d.value !== null ? (t(), n("span", Qr, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${d.value}%` })
          }, null, 4)
        ])) : x("", !0)
      ], 34)),
      u.value ? (t(), n("p", ri, f(u.value), 1)) : x("", !0)
    ]));
  }
}), ii = { class: "flex flex-col gap-2" }, di = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, ui = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, ci = { class: "flex flex-col gap-1" }, fi = ["onUpdate:modelValue", "disabled", "aria-label"], mi = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, pi = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, vi = ["onUpdate:modelValue", "disabled", "aria-label"], gi = ["disabled", "aria-label", "onClick"], hi = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, bi = { class: "flex items-center gap-3" }, yi = ["disabled"], xi = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, ki = /* @__PURE__ */ O({
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
    const m = y(() => {
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
    function k() {
      C.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function $(M) {
      d.value = d.value.filter((S) => S.uid !== M), v();
    }
    return (M, S) => (t(), n("div", ii, [
      d.value.length ? (t(), n("div", di, [
        o("div", ui, [
          o("span", null, f(e.keyLabel), 1),
          o("span", null, f(e.valueLabel), 1),
          S[0] || (S[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, j(d.value, (B) => (t(), n("div", {
          key: B.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", ci, [
            pe(o("input", {
              "onUpdate:modelValue": (p) => B.key = p,
              type: "text",
              class: A([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                m.value.has(B.key.trim()) || g.value.has(B.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: v
            }, null, 42, fi), [
              [Ae, B.key]
            ]),
            g.value.has(B.key.trim()) ? (t(), n("p", mi, " Letters, numbers, underscores and dashes only. ")) : m.value.has(B.key.trim()) ? (t(), n("p", pi, " Used twice - only the last value will be saved. ")) : x("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (p) => B.value = p,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: v
          }, null, 40, vi), [
            [Ae, B.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${B.key || "this entry"}`,
            onClick: (p) => $(B.uid)
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
          ])], 8, gi)
        ]))), 128))
      ])) : (t(), n("p", hi, " Nothing here yet. ")),
      o("div", bi, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || C.value,
          onClick: k
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
        ], 8, yi),
        e.maxPairs !== null ? (t(), n("p", xi, f(d.value.length) + " of " + f(e.maxPairs), 1)) : x("", !0)
      ])
    ]));
  }
}), $i = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, wi = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Ci = ["disabled", "title", "aria-label", "onClick"], Si = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Mi = ["d"], Bi = ["disabled"], _i = ["contenteditable", "data-placeholder"], Ai = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Pi = /* @__PURE__ */ O({
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
    ], u = y(() => d.filter(($) => a.toolbar.includes($.id))), c = y(() => a.toolbar.includes("link")), v = R(0);
    function m() {
      const $ = s.value?.innerHTML ?? "", M = (s.value?.innerText ?? "").trim();
      v.value = M.length;
      const S = M === "" ? null : $;
      i = S, r("update:modelValue", S);
    }
    function g($) {
      a.disabled || (s.value?.focus(), document.execCommand($.command, !1, $.argument), m());
    }
    function C() {
      if (a.disabled)
        return;
      const $ = window.prompt("Link address");
      $ && (s.value?.focus(), document.execCommand("createLink", !1, $), m());
    }
    function k($) {
      $.preventDefault();
      const M = $.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, M), m();
    }
    return ve(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", v.value = s.value.innerText.trim().length);
    }), me(
      () => a.modelValue,
      ($) => {
        $ !== i && s.value && (s.value.innerHTML = $ ?? "", v.value = s.value.innerText.trim().length);
      }
    ), ($, M) => (t(), n("div", $i, [
      o("div", wi, [
        (t(!0), n(z, null, j(u.value, (S) => (t(), n("button", {
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
          (t(), n("svg", Si, [
            o("path", {
              d: S.path
            }, null, 8, Mi)
          ]))
        ], 40, Ci))), 128)),
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
        ])], 40, Bi)) : x("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: A(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: m,
        onBlur: m,
        onPaste: k
      }, null, 42, _i),
      e.maxLength !== null ? (t(), n("div", Ai, f(v.value) + " / " + f(e.maxLength), 1)) : x("", !0)
    ]));
  }
}), zi = /* @__PURE__ */ wt(Pi, [["__scopeId", "data-v-32c63bc7"]]), Oi = {
  key: 1,
  class: "flex flex-col gap-2"
}, Li = { class: "flex items-center justify-between gap-2" }, ji = ["for"], Vi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Ti = ["aria-label", "disabled"], Di = {
  key: 7,
  class: "flex flex-col gap-2"
}, Ii = ["id", "value", "disabled"], Ei = ["value"], Fi = {
  key: 0,
  class: "relative"
}, Ni = ["disabled"], Ri = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Ui = { class: "max-h-56 overflow-y-auto p-1" }, Hi = ["onClick"], Ki = {
  key: 8,
  class: "relative"
}, qi = ["disabled", "aria-invalid"], Gi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Wi = { class: "max-h-56 overflow-y-auto p-1" }, Zi = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Ji = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Yi = ["onClick"], Xi = ["id", "value", "disabled", "aria-invalid"], Qi = ["value"], ed = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, td = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, ad = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], nd = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, ld = ["aria-label", "disabled"], od = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], sd = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, rd = ["aria-label", "disabled"], id = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], dd = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, ud = ["aria-label", "disabled"], cd = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], fd = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, md = ["aria-label", "disabled"], pd = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, vd = ["disabled", "aria-pressed", "onClick"], gd = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, hd = ["title", "disabled", "onClick"], bd = ["href"], yd = {
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
    const a = sa(() => import("./PkRepeater-J84jGe3T.js")), r = sa(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = R(!1), u = R(""), c = R([]), v = R(!1), m = R(null);
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
    function k(le) {
      m.value = le.label, i("change", le.value), d.value = !1, u.value = "";
    }
    function $() {
      m.value = null, i("change", null);
    }
    const M = ht("panelPicker", null), S = ht("panelCreateOption", null), B = R(!1), p = R(!1), h = R({}), w = R(null), P = y(() => Nr(s.field)), E = y(() => Rr(s.field));
    function I() {
      h.value = {}, w.value = null, B.value = !0, d.value = !1;
    }
    function te() {
      p.value || (B.value = !1, h.value = {}, w.value = null);
    }
    async function H(le) {
      if (S) {
        p.value = !0, h.value = {}, w.value = null;
        try {
          const X = await S.run(s.field.key, { ...le });
          k(X), B.value = !1;
        } catch (X) {
          X instanceof Fr ? (h.value = X.fieldErrors, w.value = Object.keys(X.fieldErrors).length === 0 ? X.message : null) : w.value = X instanceof Error ? X.message : "Could not create that option.";
        } finally {
          p.value = !1;
        }
      }
    }
    const K = y(() => {
      if (!s.field.tableSelect || !M?.base)
        return;
      const le = M.returnUrl || "/";
      return `${M.base}/pick/${s.field.key}?return=${encodeURIComponent(le)}`;
    }), G = y(() => s.field.morphTo ?? []), oe = y(() => {
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
      m.value = le.label, Z(le.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(g));
    const _ = y(() => Er(s.field.type)), F = y(
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
      e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", Oi, [
        o("div", Li, [
          o("label", {
            for: `f-${e.field.key}`,
            class: A(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            N(f(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", Vi, "*")) : x("", !0)
          ], 10, ji),
          e.field.hint ? (t(), n("span", {
            key: 0,
            class: A(["flex items-center gap-1", b(vt)])
          }, [
            N(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: X[0] || (X[0] = (ne) => V(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, Ti)) : x("", !0)
          ], 2)) : x("", !0)
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
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(Oa, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": X[2] || (X[2] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), T(b(a), {
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
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(b(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": X[4] || (X[4] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(zi, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[5] || (X[5] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(ki, {
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
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : G.value.length ? (t(), n("div", Di, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: oe.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: A(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", b(Me)]),
            onChange: X[8] || (X[8] = (ne) => ae(ne.target.value))
          }, [
            X[24] || (X[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(z, null, j(G.value, (ne) => (t(), n("option", {
              key: ne.value,
              value: ne.value
            }, f(ne.label), 9, Ei))), 128))
          ], 42, Ii),
          oe.value.type && e.searchOptions ? (t(), n("div", Fi, [
            o("button", {
              type: "button",
              class: A(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Me)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: A(m.value || oe.value.id ? "" : "text-muted-foreground")
              }, f(m.value ?? (oe.value.id ? String(oe.value.id) : "Search…")), 3)
            ], 10, Ni),
            d.value ? (t(), n("div", Ri, [
              pe(o("input", {
                "onUpdate:modelValue": X[9] || (X[9] = (ne) => u.value = ne),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Ae, u.value]
              ]),
              o("div", Ui, [
                (t(!0), n(z, null, j(c.value, (ne) => (t(), n("button", {
                  key: String(ne.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => q(ne)
                }, f(ne.label), 9, Hi))), 128))
              ])
            ])) : x("", !0),
            d.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: X[10] || (X[10] = (ne) => d.value = !1)
            })) : x("", !0)
          ])) : x("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Ki, [
          o("button", {
            type: "button",
            class: A(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Me)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: C
          }, [
            o("span", {
              class: A(m.value || e.value ? "" : "text-muted-foreground")
            }, f(m.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he($, ["stop"])
            }, " ✕ ")) : x("", !0)
          ], 10, qi),
          d.value ? (t(), n("div", Gi, [
            pe(o("input", {
              "onUpdate:modelValue": X[11] || (X[11] = (ne) => u.value = ne),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Ae, u.value]
            ]),
            o("div", Wi, [
              v.value ? (t(), n("p", Zi, " Searching… ")) : c.value.length === 0 ? (t(), n("p", Ji, " No matches ")) : x("", !0),
              (t(!0), n(z, null, j(c.value, (ne) => (t(), n("button", {
                key: String(ne.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => k(ne)
              }, f(ne.label), 9, Yi))), 128)),
              e.field.createOption && b(S) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: I
              }, [
                X[25] || (X[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + f(E.value), 1)
              ])) : x("", !0)
            ])
          ])) : x("", !0),
          d.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: X[12] || (X[12] = (ne) => d.value = !1)
          })) : x("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: A(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", b(Me)]),
          onChange: X[13] || (X[13] = (ne) => i("change", ne.target.value || null))
        }, [
          X[26] || (X[26] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(z, null, j(e.options, (ne) => (t(), n("option", {
            key: String(ne.value),
            value: ne.value
          }, f(ne.label), 9, Qi))), 128))
        ], 42, Xi)) : e.field.type === "toggle" ? (t(), n("label", ed, [
          D(b(Ze), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[14] || (X[14] = (ne) => i("change", ne))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: A(b(vt))
          }, f(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", td, [
          D(b(Gr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[15] || (X[15] = (ne) => i("change", ne === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: A(b(vt))
          }, f(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !F.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: A(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", b(Re), b(Me)]),
          onInput: X[16] || (X[16] = (ne) => i("change", ne.target.value))
        }, null, 42, ad)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: A([
            "border-input flex overflow-hidden rounded-md border",
            b(da),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", nd, f(e.field.prefix ?? e.field.prefixIcon), 1)) : x("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[17] || (X[17] = (ne) => V(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, ld)) : x("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: A(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", b(Re)]),
            onInput: X[18] || (X[18] = (ne) => i("change", ne.target.value))
          }, null, 42, od),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", sd, f(e.field.suffix ?? e.field.suffixIcon), 1)) : x("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[19] || (X[19] = (ne) => V(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, rd)) : x("", !0)
        ], 2)) : F.value ? (t(), n("div", {
          key: 15,
          class: A([
            "border-input flex h-9 overflow-hidden rounded-md border",
            b(da),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", dd, f(e.field.prefix ?? e.field.prefixIcon), 1)) : x("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[21] || (X[21] = (ne) => V(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, ud)) : x("", !0),
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
          }, null, 40, cd),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", fd, f(e.field.suffix ?? e.field.suffixIcon), 1)) : x("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[23] || (X[23] = (ne) => V(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, md)) : x("", !0)
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
        }, null, 40, id)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", pd, [
          (t(!0), n(z, null, j(e.field.presets, (ne) => (t(), n("button", {
            key: ne,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: A([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              b(Me),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ne ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ne
            ),
            onClick: (Ce) => i("change", String(ne))
          }, f(ne), 11, vd))), 128))
        ])) : x("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", gd, [
          (t(!0), n(z, null, j(e.field.chips, (ne, Ce) => (t(), n("button", {
            key: Ce,
            type: "button",
            title: ne,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (la) => ye(String(Ce))
          }, f(Ce), 9, hd))), 128))
        ])) : x("", !0),
        K.value ? (t(), n("a", {
          key: 18,
          href: K.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, bd)) : x("", !0),
        e.error ? (t(), n("p", yd, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: A(b(vt))
        }, f(e.field.help), 3)) : x("", !0)
      ])),
      e.field.createOption && b(S) ? (t(), T(qr, {
        key: 2,
        open: B.value,
        title: P.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: p.value,
        errors: h.value,
        "general-error": w.value,
        onClose: te,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : x("", !0)
    ], 64));
  }
}), xd = { class: "flex min-w-0 items-start gap-2.5" }, kd = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, $d = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, wd = ["d"], Cd = { class: "min-w-0" }, Sd = { class: "text-sm font-semibold" }, Md = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Bd = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, _d = { class: "border-b px-4 py-3.5 sm:px-5" }, Ad = { class: "text-sm font-semibold" }, Pd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, zd = {
  key: 4,
  class: "min-w-0 space-y-4"
}, Od = {
  key: 7,
  class: "flex flex-col gap-3"
}, Ld = { class: "text-sm font-medium" }, jd = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Vd = {
  key: 0,
  class: "mb-1 font-medium"
}, Td = ["onClick"], Dd = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Id = { class: "flex items-center justify-between gap-3 border-t p-4" }, Ed = ["disabled"], La = /* @__PURE__ */ O({
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
      }, p = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        B[a.node.align ?? "start"] ?? "items-start",
        p[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), m = y(() => {
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
      const p = B.children?.length ?? 1;
      return p >= 3 ? "md:grid-cols-3" : p === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function k(B = 1) {
      return B >= 4 ? "md:col-span-4" : B === 3 ? "md:col-span-3" : B === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function $(B) {
      const p = [], h = (w) => {
        w.component === "field" && w.key && p.push(w.key), w.children?.forEach(h);
      };
      return h(B), p.some((w) => a.errors[w]);
    }
    function M(B) {
      if (B.hidden)
        return !1;
      const p = B.visibleWhen;
      return p ? a.values[p.field] == p.value : !0;
    }
    function S(B) {
      if (a.upload)
        return (p, h) => a.upload(B, p, h);
    }
    return (B, p) => {
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
        onChange: p[0] || (p[0] = (w) => r("change", e.node.key, w)),
        onAffixAction: p[1] || (p[1] = (w) => r("affix-action", e.node.key, w))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && M(e.node) ? (t(), n("section", {
        key: 1,
        class: A(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: A(["flex items-start justify-between gap-3", [
            c.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: p[2] || (p[2] = (w) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", xd, [
            e.node.icon ? (t(), n("div", kd, [
              (t(), n("svg", $d, [
                o("path", {
                  d: b(ce)(e.node.icon)
                }, null, 8, wd)
              ]))
            ])) : x("", !0),
            o("div", Cd, [
              o("h3", Sd, f(e.node.label), 1),
              e.node.description ? (t(), n("p", Md, f(e.node.description), 1)) : x("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...p[24] || (p[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : x("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [g.value, c.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(h, {
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
            onChange: p[3] || (p[3] = (E, I) => r("change", E, I)),
            onAffixAction: p[4] || (p[4] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : x("", !0)
      ], 2)) : e.node.component === "card" && M(e.node) ? (t(), n("section", Bd, [
        o("header", _d, [
          o("h3", Ad, f(e.node.title), 1),
          e.node.description ? (t(), n("p", Pd, f(e.node.description), 1)) : x("", !0)
        ]),
        o("div", {
          class: A(["grid grid-cols-1 gap-4 px-4 py-4", g.value])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(h, {
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
            onChange: p[5] || (p[5] = (E, I) => r("change", E, I)),
            onAffixAction: p[6] || (p[6] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && M(e.node) ? (t(), n("div", {
        key: 3,
        class: A(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(h, {
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
          class: A(w.component === "column" ? k(w.span) : ""),
          onChange: p[7] || (p[7] = (E, I) => r("change", E, I)),
          onAffixAction: p[8] || (p[8] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && M(e.node) ? (t(), n("div", zd, [
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(h, {
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
          onChange: p[9] || (p[9] = (E, I) => r("change", E, I)),
          onAffixAction: p[10] || (p[10] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), n("div", {
        key: 5,
        class: A(["grid grid-cols-1 gap-4", g.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(h, {
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
          onChange: p[11] || (p[11] = (E, I) => r("change", E, I)),
          onAffixAction: p[12] || (p[12] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 6,
        class: A(["flex", v.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(h, {
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
          onChange: p[13] || (p[13] = (E, I) => r("change", E, I)),
          onAffixAction: p[14] || (p[14] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", Od, [
        o("legend", Ld, f(e.node.label), 1),
        e.node.description ? (t(), n("p", jd, f(e.node.description), 1)) : x("", !0),
        o("div", {
          class: A(["grid grid-cols-1 gap-4", g.value])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(h, {
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
            onChange: p[15] || (p[15] = (E, I) => r("change", E, I)),
            onAffixAction: p[16] || (p[16] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 8,
        role: "note",
        class: A(["rounded-lg border px-4 py-3 text-sm", m.value])
      }, [
        e.node.title ? (t(), n("p", Vd, f(e.node.title), 1)) : x("", !0),
        o("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: A(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", c.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), n("button", {
            key: P,
            type: "button",
            class: A([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === P ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (E) => i.value = P
          }, [
            N(f(w.label) + " ", 1),
            $(w) ? (t(), n("span", Dd)) : x("", !0)
          ], 10, Td))), 128))
        ], 2),
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => pe((t(), n("div", {
          key: P,
          class: A(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(w.children ?? [], (E, I) => (t(), T(h, {
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
            onChange: p[17] || (p[17] = (te, H) => r("change", te, H)),
            onAffixAction: p[18] || (p[18] = (te, H) => r("affix-action", te, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, i.value === P]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 10,
        class: A(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        D(Ir, {
          class: A(["p-4", c.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (w) => $((e.node.children ?? [])[w]),
          "onUpdate:activeStep": p[19] || (p[19] = (w) => d.value = w)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => pe((t(), n("div", {
          key: P,
          class: A(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(w.children ?? [], (E, I) => (t(), T(h, {
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
            onChange: p[20] || (p[20] = (te, H) => r("change", te, H)),
            onAffixAction: p[21] || (p[21] = (te, H) => r("affix-action", te, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, d.value === P]
        ])), 128)),
        o("div", Id, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: p[22] || (p[22] = (w) => d.value--)
          }, " Back ", 8, Ed),
          d.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: p[23] || (p[23] = (w) => d.value++)
          }, " Next ")) : x("", !0)
        ])
      ], 2)) : x("", !0);
    };
  }
}), P5 = /* @__PURE__ */ O({
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
          (t(!0), n(z, null, j(e.form?.nodes ?? [], (c, v) => (t(), T(La, {
            key: v,
            node: c,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: u[0] || (u[0] = (m, g) => s.value[m] = g)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), Fd = ["title"], Nd = ["aria-label"], Rd = ["d"], Ud = { class: "sr-only" }, Hd = /* @__PURE__ */ O({
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
    return (v, m) => (t(), n("span", {
      class: "inline-flex items-center",
      title: c.value
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
        "aria-label": c.value
      }, [
        o("path", { d: d.value }, null, 8, Rd)
      ], 10, Nd)),
      o("span", Ud, f(c.value), 1)
    ], 8, Fd));
  }
}), Kd = ["aria-label"], qd = ["fill"], z5 = /* @__PURE__ */ O({
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
        }, null, 8, qd)
      ]))), 128))
    ], 8, Kd));
  }
}), Gd = ["src"], Wd = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Zd = /* @__PURE__ */ O({
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
      class: A(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (c) => a.value = !0)
      }, null, 40, Gd)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        N(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Wd, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : x("", !0)
    ], 2));
  }
}), Jd = {
  key: 0,
  class: "text-muted-foreground"
}, Yd = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Xd = {
  key: 0,
  class: "font-mono text-xs"
}, Qd = {
  key: 1,
  class: "sr-only"
}, eu = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), n("span", Jd, "-")) : (t(), n("span", Yd, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Xd, f(r.value), 1)) : (t(), n("span", Qd, f(r.value), 1))
    ]));
  }
}), tu = { class: "inline-flex items-center" }, au = ["checked", "aria-label"], nu = { class: "sr-only" }, O5 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("span", tu, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, au),
      o("span", nu, f(r.value), 1)
    ]));
  }
}), lu = {
  key: 0,
  class: "text-muted-foreground"
}, ou = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, L5 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", ou, f(a.value), 1)) : (t(), n("span", lu, "—"));
  }
}), su = {
  key: 0,
  class: "font-mono text-xs"
}, ru = {
  key: 1,
  class: "text-muted-foreground"
}, iu = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, j5 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", su, f(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", ru, "—")) : (t(), n("span", iu, f(a.value.length) + " " + f(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), du = ["data-variant"], uu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", qe = /* @__PURE__ */ O({
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
      () => [uu, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: A(r.value)
    }, [
      U(s.$slots, "default")
    ], 10, du));
  }
}), cu = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, fu = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, V5 = /* @__PURE__ */ O({
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
    return (d, u) => r.value.length === 0 ? (t(), n("span", cu, "None")) : (t(), n("span", fu, [
      (t(!0), n(z, null, j(s.value, (c) => (t(), T(qe, {
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
      })) : x("", !0)
    ]));
  }
}), mu = ["aria-checked", "aria-label", "title", "disabled"], pu = ["value", "disabled"], vu = ["value"], T5 = /* @__PURE__ */ O({
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
      const m = v.target.value;
      m !== String(a.value ?? "") && r("change", m);
    }
    return (v, m) => e.type === "toggle" ? (t(), n("button", {
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
    ], 10, mu)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: m[0] || (m[0] = he(() => {
      }, ["stop"])),
      onChange: c
    }, [
      (t(!0), n(z, null, j(e.options, (g, C) => (t(), n("option", {
        key: C,
        value: C
      }, f(g), 9, vu))), 128))
    ], 40, pu));
  }
}), Yt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function gu(e) {
  return e != null && e !== "";
}
function hu(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function D5(e) {
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
      cellClass: hu(s),
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
const bu = ["disabled", "aria-label", "aria-busy"], yu = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xu = ["d"], ku = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, $u = ["disabled", "onClick"], wu = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Cu = ["d"], Su = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, I5 = /* @__PURE__ */ O({
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
    function m(g, C) {
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
            (t(), n("svg", yu, [
              o("path", {
                d: b(ce)("chevron-down")
              }, null, 8, xu)
            ]))
          ], 8, bu)
        ]),
        panel: L(({ close: k }) => [
          o("div", ku, f(d.value), 1),
          (t(!0), n(z, null, j(e.options, ($, M) => (t(), n("button", {
            key: M,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (S) => m(String(M), k)
          }, [
            D(qe, {
              variant: c(M),
              class: "capitalize"
            }, {
              default: L(() => [
                N(f($), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(M) === i.value ? (t(), n("svg", wu, [
              o("path", {
                d: b(ce)("check")
              }, null, 8, Cu)
            ])) : (t(), n("span", Su))
          ], 8, $u))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Mu = { class: "flex items-center justify-end" }, Bu = ["aria-label"], _u = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Au = ["d"], Pu = ["href"], zu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ou = ["d"], Lu = { class: "min-w-0 flex-1 truncate" }, ju = ["disabled", "onClick"], Vu = ["d"], Tu = { class: "min-w-0 flex-1 truncate" }, Du = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Iu = ["disabled", "onClick"], Eu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fu = ["d"], Nu = { class: "min-w-0 flex-1 truncate" }, E5 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(null), d = R(null), u = y(() => r.groups.flatMap((S) => S.actions)), c = y(() => u.value.filter((S) => !S.destructive)), v = y(() => u.value.filter((S) => S.destructive)), m = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function g(S) {
      return m[S.color ?? "gray"] ?? m.gray;
    }
    const C = y(() => u.value.length === 0);
    function k(S) {
      s("run", S);
    }
    function $(S) {
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
      const p = B.indexOf(document.activeElement), h = S.key === "ArrowDown" ? 1 : -1, w = (p + h + B.length) % B.length;
      B[w]?.focus();
    }
    return l({ openContextMenu: $ }), (S, B) => (t(), n("div", Mu, [
      C.value ? x("", !0) : (t(), T(Je, {
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
            (t(), n("svg", _u, [
              o("path", {
                d: b(ce)("more-vertical")
              }, null, 8, Au)
            ]))
          ], 8, Bu)
        ]),
        panel: L(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: M
          }, [
            (t(!0), n(z, null, j(c.value, (p) => (t(), n(z, {
              key: p.key
            }, [
              p.link ? (t(), n("a", {
                key: 0,
                href: p.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g(p)])
              }, [
                (t(), n("svg", zu, [
                  o("path", {
                    d: b(ot)(p)
                  }, null, 8, Ou)
                ])),
                o("span", Lu, f(p.label), 1)
              ], 10, Pu)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", g(p)]),
                disabled: e.busy === p.key,
                onClick: (h) => k(p)
              }, [
                (t(), n("svg", {
                  class: A(["size-4 shrink-0", e.busy === p.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: b(ot)(p)
                  }, null, 8, Vu)
                ], 2)),
                o("span", Tu, f(p.label), 1)
              ], 10, ju))
            ], 64))), 128)),
            v.value.length ? (t(), n("div", Du, [
              (t(!0), n(z, null, j(v.value, (p) => (t(), n("button", {
                key: p.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === p.key,
                onClick: (h) => k(p)
              }, [
                (t(), n("svg", Eu, [
                  o("path", {
                    d: b(ot)({ ...p, destructive: !0 })
                  }, null, 8, Fu)
                ])),
                o("span", Nu, f(p.label), 1)
              ], 8, Iu))), 128))
            ])) : x("", !0)
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
}, bt = 12, yt = 20, Ru = [0, 0.25, 0.5, 0.75, 1], Xt = "alxtexhpanel.appearance", Be = {
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
const ja = "alxtexhpanel.appearance.vars", Tt = "pk-appearance";
function at() {
  return typeof window > "u" ? null : window;
}
let xt = null;
function Va(e) {
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
function Ta(e) {
  const l = at();
  l && (l.__panelAppearance = { ...e });
}
function Uu(e) {
  if (typeof document > "u")
    return;
  let l = document.getElementById(Tt);
  l || (l = document.createElement("style"), l.id = Tt, document.head.appendChild(l));
  const a = Object.entries(e).map(([r, s]) => `${r}: ${s};`).join(" ");
  l.textContent = `:root { ${a} }`;
}
function F5() {
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
function Da(e) {
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
function Hu(e) {
  return {
    dark: Qt(e),
    theme: e.theme,
    vars: Da(e),
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
function Ku() {
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
  const l = ea(), a = e ? { ...Be, ...l, ...e } : { ...Be, ...l }, r = !Ye, s = Va(a);
  if (Ve.value = a, Ye = !0, e) {
    Ta(a);
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
        const u = Hu(a);
        localStorage.setItem(ja, JSON.stringify(u));
      } catch {
      }
      return;
    }
    Dt(a);
  }
}
function N5() {
  Ia(Ku());
}
function R5(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Ia(l);
}
let Ea = null;
function U5(e) {
  Ea = e;
}
let Fa = {};
function qu(e) {
  if (Fa = e, !(typeof document > "u") && !ea().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Dt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = Da(e), r = { ...a, ...e.primaryChosen ? {} : Fa }, s = {
    dark: Qt(e),
    theme: e.theme,
    vars: r,
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
  l.classList.toggle("dark", s.dark);
  for (const [d, u] of Object.entries(r))
    l.style.setProperty(d, u);
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, Uu(a), Ta(e), xt = Va(e);
  const i = at();
  i && (i.__panelAppearanceApplied = !0);
  try {
    localStorage.setItem(ja, JSON.stringify(s));
  } catch {
  }
}
function Na() {
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
    e(Ve.value), Ea?.({ ...r, ...s });
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
    appearance: y(() => Ve.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: jt,
    SURFACE_TINTS: Vt,
    FONT_SIZE_MIN: bt,
    FONT_SIZE_MAX: yt,
    RADIUS_OPTIONS: Ru
  };
}
const Gu = { class: "flex items-center justify-between border-b px-4 py-3" }, Wu = { class: "flex items-center gap-2" }, Zu = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Ju = { class: "flex flex-col gap-2" }, Yu = { class: "grid grid-cols-8 gap-2" }, Xu = ["title", "aria-label", "aria-pressed", "onClick"], Qu = { class: "flex flex-col gap-2" }, ec = { class: "grid grid-cols-8 gap-2" }, tc = ["title", "aria-label", "aria-pressed", "onClick"], ac = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, nc = { class: "flex flex-col gap-2" }, lc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, oc = ["aria-pressed", "aria-label", "onClick"], sc = { class: "text-sm font-semibold" }, rc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, ic = ["onClick"], dc = { class: "flex flex-col gap-2" }, uc = { class: "flex items-center justify-between" }, cc = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, fc = { class: "flex items-center gap-2" }, mc = ["disabled"], pc = ["min", "max", "value"], vc = ["disabled"], H5 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Na(), u = R(!1), c = y(() => l.value.sidebarSide === "right"), v = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], m = [
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
    ], k = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], $ = [
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
        onClick: B[0] || (B[0] = (p) => u.value = !0)
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
              onClick: B[1] || (B[1] = (p) => u.value = !1)
            })) : x("", !0)
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
              class: A(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", c.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", Gu, [
                B[9] || (B[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", Wu, [
                  o("button", {
                    class: "text-muted-foreground text-xs font-normal hover:underline",
                    onClick: B[2] || (B[2] = //@ts-ignore
                    (...p) => b(r) && b(r)(...p))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: B[3] || (B[3] = (p) => u.value = !1)
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
              o("div", Zu, [
                o("section", Ju, [
                  B[11] || (B[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", Yu, [
                    (t(!0), n(z, null, j(b(s), (p, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: se({ background: p.value }),
                      title: p.label,
                      "aria-label": p.label,
                      "aria-pressed": b(l).primary === h,
                      onClick: (w) => b(a)({ primary: h })
                    }, [
                      b(l).primary === h ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: se({ color: p.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...B[10] || (B[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : x("", !0)
                    ], 12, Xu))), 128))
                  ])
                ]),
                o("section", Qu, [
                  B[13] || (B[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", ec, [
                    (t(!0), n(z, null, j(b(i), (p, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: se({ background: M(p.hue, p.chroma) }),
                      title: p.label,
                      "aria-label": p.label,
                      "aria-pressed": b(l).surface === h,
                      onClick: (w) => b(a)({ surface: h })
                    }, [
                      b(l).surface === h ? (t(), n("svg", ac, [...B[12] || (B[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : x("", !0)
                    ], 12, tc))), 128))
                  ])
                ]),
                o("section", nc, [
                  B[14] || (B[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", lc, [
                    (t(!0), n(z, null, j(b(d), (p) => (t(), n("button", {
                      key: p,
                      type: "button",
                      class: A([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l).radius === p ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": b(l).radius === p,
                      "aria-label": `${p}rem radius`,
                      onClick: (h) => b(a)({ radius: p })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: se({ borderRadius: `${Math.min(p, 0.5)}rem` })
                      }, null, 4),
                      N(" " + f(p), 1)
                    ], 10, oc))), 128))
                  ])
                ]),
                (t(!0), n(z, null, j([
                  { label: "Color scheme", key: "theme", options: v },
                  { label: "Card style", key: "cardStyle", options: g },
                  { label: "Density", key: "density", options: m },
                  { label: "Sidebar", key: "sidebarSide", options: C },
                  { label: "Content layout", key: "contentLayout", options: k },
                  { label: "Menu style", key: "menuStyle", options: $ }
                ], (p) => (t(), n("section", {
                  key: p.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", sc, f(p.label), 1),
                  o("div", rc, [
                    (t(!0), n(z, null, j(p.options, (h) => (t(), n("button", {
                      key: String(h.value),
                      type: "button",
                      class: A([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l)[p.key] === h.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (w) => b(a)({ [p.key]: h.value })
                    }, f(h.label), 11, ic))), 128))
                  ])
                ]))), 128)),
                o("section", dc, [
                  o("div", uc, [
                    B[15] || (B[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", cc, f(b(l).fontSize) + "px", 1)
                  ]),
                  o("div", fc, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize <= b(bt),
                      "aria-label": "Decrease font size",
                      onClick: B[4] || (B[4] = (p) => b(a)({ fontSize: b(l).fontSize - 1 }))
                    }, " − ", 8, mc),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: b(bt),
                      max: b(yt),
                      value: b(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: B[5] || (B[5] = (p) => b(a)({
                        fontSize: Number(p.target.value)
                      }))
                    }, null, 40, pc),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize >= b(yt),
                      "aria-label": "Increase font size",
                      onClick: B[6] || (B[6] = (p) => b(a)({ fontSize: b(l).fontSize + 1 }))
                    }, " + ", 8, vc)
                  ])
                ])
              ])
            ], 2)) : x("", !0)
          ]),
          _: 1
        }, 8, ["enter-from-class", "leave-to-class"])
      ]))
    ], 64));
  }
}), gc = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, hc = { class: "flex items-stretch" }, bc = ["href", "aria-current"], yc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xc = ["d"], kc = { class: "w-full truncate text-center" }, $c = {
  key: 0,
  class: "flex-1"
}, wc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Cc = ["d"], Sc = { class: "w-full truncate text-center" }, _t = 5, K5 = /* @__PURE__ */ O({
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
    return (u, c) => (t(), n("nav", gc, [
      o("ul", hc, [
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
            (t(), n("svg", yc, [
              o("path", {
                d: b(ce)(v.icon)
              }, null, 8, xc)
            ])),
            o("span", kc, f(v.title), 1)
          ], 10, bc)
        ]))), 128)),
        i.value ? (t(), n("li", $c, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: c[0] || (c[0] = (v) => r("more"))
          }, [
            (t(), n("svg", wc, [
              o("path", {
                d: b(ce)("more-horizontal")
              }, null, 8, Cc)
            ])),
            o("span", Sc, f(e.moreLabel), 1)
          ])
        ])) : x("", !0)
      ])
    ]));
  }
}), Mc = ["value"], $e = /* @__PURE__ */ O({
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
    }, null, 42, Mc));
  }
}), Bc = ["for"], Pe = /* @__PURE__ */ O({
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
    ], 10, Bc));
  }
}), q5 = /* @__PURE__ */ O({
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
}), _c = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Ac = ["id", "name", "value", "disabled", "maxlength"], Pc = ["data-active"], zc = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Oc = /* @__PURE__ */ O({
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
      () => Array.from({ length: a.length }, (B, p) => a.modelValue[p] ?? "")
    ), c = y(() => Math.min(a.modelValue.length, a.length - 1));
    function v(B) {
      return B.replace(/\D/g, "").slice(0, a.length);
    }
    function m(B) {
      a.disabled || B.length !== a.length || d.value !== B && (d.value = B, r("complete", B));
    }
    function g(B) {
      const p = v(B);
      p !== a.modelValue && r("update:modelValue", p), m(p);
    }
    function C(B) {
      g(B.target.value);
    }
    function k(B) {
      g(B.target.value);
    }
    function $() {
      g(i.value?.value ?? "");
    }
    function M(B) {
      B.animationName === "pkOtpAutofillStart" && $();
    }
    me(
      () => a.modelValue,
      (B) => {
        B.length < a.length ? d.value = "" : m(B);
      }
    );
    let S;
    return ve(() => {
      S = window.setInterval(() => {
        if (a.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && $();
      }, 250);
    }), nn(() => {
      S !== void 0 && window.clearInterval(S);
    }), (B, p) => (t(), n("div", _c, [
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
        onChange: k,
        onAnimationstart: M,
        onFocus: p[0] || (p[0] = (h) => s.value = !0),
        onBlur: p[1] || (p[1] = (h) => s.value = !1)
      }, null, 40, Ac),
      (t(!0), n(z, null, j(u.value, (h, w) => (t(), n("div", {
        key: w,
        "data-slot": "input-otp-slot",
        "data-active": s.value && w === c.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(f(h) + " ", 1),
        s.value && w === c.value && h === "" ? (t(), n("div", zc, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : x("", !0)
      ], 8, Pc))), 128))
    ]));
  }
}), G5 = /* @__PURE__ */ wt(Oc, [["__scopeId", "data-v-560616ac"]]), Lc = {
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
      }, f(e.title), 3),
      e.description ? (t(), n("p", Lc, f(e.description), 1)) : x("", !0)
    ], 2));
  }
}), jc = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, Vc = { class: "min-w-0 space-y-1" }, Tc = { class: "flex flex-wrap items-center gap-2.5" }, Dc = { class: "text-2xl font-semibold tracking-tight" }, Ic = {
  key: 0,
  class: "flex items-center gap-2"
}, Ec = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Fc = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, W5 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", jc, [
      o("div", Vc, [
        o("div", Tc, [
          o("h1", Dc, f(e.title), 1),
          l.$slots.status ? (t(), n("div", Ic, [
            U(l.$slots, "status")
          ])) : x("", !0)
        ]),
        e.purpose ? (t(), n("p", Ec, f(e.purpose), 1)) : x("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", Fc, [
        U(l.$slots, "actions")
      ])) : x("", !0)
    ]));
  }
}), Nc = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: A(b(Q)(b(Hc)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Rc = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: A(b(Q)("col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Uc = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: A(b(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Hc = Gt(
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
), Kc = { class: "list-inside list-disc text-sm" }, Z5 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(b(Nc), { variant: "destructive" }, {
      default: L(() => [
        D(b(Wn), { class: "size-4" }),
        D(b(Uc), null, {
          default: L(() => [
            N(f(e.title), 1)
          ]),
          _: 1
        }),
        D(b(Rc), null, {
          default: L(() => [
            o("ul", Kc, [
              (t(!0), n(z, null, j(a.value, (i, d) => (t(), n("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ra = /* @__PURE__ */ O({
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
      "onUpdate:modelValue": d[0] || (d[0] = (u) => ln(s) ? s.value = u : null),
      "data-slot": "input",
      class: A(
        b(Q)(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          b(Re),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [Ae, b(s)]
    ]);
  }
}), qc = { class: "relative" }, Gc = ["aria-label"], J5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = R(!1), s = on("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), n("div", qc, [
      D(b(Ra), re({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: b(Q)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: A(
          b(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), T(b(Zn), {
          key: 0,
          class: "size-4"
        })) : (t(), T(b(Jn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Gc)
    ]));
  }
}), Ua = "@container min-w-0", Wc = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", Y5 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", Zc = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3", Ge = "w-full min-w-0 px-4 py-6 sm:px-6", X5 = "w-full min-w-0 p-3 sm:p-4", Q5 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", Jc = "w-full max-w-7xl";
function e3(e, l) {
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
function t3(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function It(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function a3(e, l, a, r) {
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
    const v = c.id.toLowerCase(), m = i.get(v);
    m && (u.add(v), d.push({
      id: v,
      kind: m.kind,
      key: m.source.key,
      span: It(c.span),
      hidden: !!c.hidden,
      source: m.source
    }));
  }
  for (const c of s)
    for (const v of c.items) {
      const m = fa(c.kind, v.key);
      u.has(m) || d.push({
        id: m,
        kind: c.kind,
        key: v.key,
        span: It(v.span),
        hidden: !1,
        source: v
      });
    }
  return d;
}
function n3(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: It(l.span),
      hidden: !!l.hidden
    }))
  };
}
const Ha = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Yc = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Xc = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Qc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function ef(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function tf(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await af(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function af(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function nf(e) {
  if (Qc(e))
    throw new Error(Xc);
  if (!ef(e))
    throw new Error(Ha);
  if (!await tf(e))
    throw new Error(Yc);
}
const l3 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(et), re({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lf = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(wa), re({
      "data-slot": "sheet-description",
      class: b(Q)("text-sm text-muted-foreground font-normal", l.class)
    }, b(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o3 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: A(b(Q)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), of = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: A(b(Q)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), sf = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Ca), re({
      "data-slot": "sheet-title",
      class: b(Q)("text-foreground font-semibold", l.class)
    }, b(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s3 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Sa), re({ "data-slot": "sheet-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ma = "sidebar_state", rf = 3600 * 24 * 7, df = "16rem", uf = "18rem", cf = "3rem", ff = "b", [Ct, mf] = vn("Sidebar"), pf = { class: "flex h-full w-full flex-col" }, vf = ["data-state", "data-collapsible", "data-variant", "data-side"], gf = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, r3 = /* @__PURE__ */ O({
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
      class: b(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      U(d.$slots, "default")
    ], 16)) : b(a) ? (t(), T(b(Zt), re({
      key: 1,
      open: b(s)
    }, d.$attrs, { "onUpdate:open": b(i) }), {
      default: L(() => [
        D(b(Jt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": b(uf)
          })
        }, {
          default: L(() => [
            D(of, { class: "sr-only" }, {
              default: L(() => [
                D(sf, null, {
                  default: L(() => [...u[0] || (u[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(lf, null, {
                  default: L(() => [...u[1] || (u[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", pf, [
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
      "data-state": b(r),
      "data-collapsible": b(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: A(
          b(Q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", re({
        class: b(Q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        o("div", gf, [
          U(d.$slots, "default")
        ])
      ], 16)
    ], 8, vf));
  }
}), i3 = /* @__PURE__ */ O({
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
        b(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), d3 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: A(b(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), u3 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: A(b(Q)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), c3 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(tt), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        b(Q)(
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
}), f3 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: A(b(Q)("w-full text-sm", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), m3 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(tt), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        b(Q)(
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
}), p3 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: A(b(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), v3 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Ra), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: A(b(Q)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), g3 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: A(
        b(Q)(
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
}), h3 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: A(b(Q)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), b3 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(tt), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: A(
        b(Q)(
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
}), y3 = /* @__PURE__ */ O({
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
        b(Q)(
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
}), hf = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(gn), re({ "data-slot": "tooltip" }, b(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), bf = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(hn), null, {
      default: L(() => [
        D(b(bn), re({ "data-slot": "tooltip-content" }, { ...b(i), ...d.$attrs }, {
          class: b(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: L(() => [
            U(d.$slots, "default"),
            D(b(yn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), x3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(Ma), Oe(Fe(l)), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yf = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(xn), re({ "data-slot": "tooltip-trigger" }, l), {
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
    return (a, r) => (t(), T(b(tt), re({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: b(Q)(b(kf)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), k3 = /* @__PURE__ */ O({
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
    return (i, d) => e.tooltip ? (t(), T(b(hf), { key: 1 }, {
      default: L(() => [
        D(b(yf), { "as-child": "" }, {
          default: L(() => [
            D(pa, Oe(Fe({ ...b(s), ...i.$attrs })), {
              default: L(() => [
                U(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(b(bf), {
          side: "right",
          align: "center",
          hidden: b(r) !== "collapsed" || b(a)
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
    })) : (t(), T(pa, Oe(re({ key: 0 }, { ...b(s), ...i.$attrs })), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $3 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: A(b(Q)("group/menu-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), va = "animate-pulse rounded-md bg-primary/10", w3 = /* @__PURE__ */ O({
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
      class: A(b(Q)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: A(b(Q)(va, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : x("", !0),
      o("div", {
        class: A(b(Q)(va, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), C3 = /* @__PURE__ */ O({
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
        b(Q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), S3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(tt), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: A(
        b(Q)(
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
}), M3 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: A(b(Q)("group/menu-sub-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), B3 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !ol?.cookie.includes(`${ma}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = nl("(max-width: 767px)"), i = R(!1), d = Pa(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(g) {
      d.value = g, document.cookie = `${ma}=${d.value}; path=/; max-age=${rf}`;
    }
    function c(g) {
      i.value = g;
    }
    function v() {
      return s.value ? c(!i.value) : u(!d.value);
    }
    ll("keydown", (g) => {
      g.key === ff && (g.metaKey || g.ctrlKey) && (g.preventDefault(), v());
    });
    const m = y(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return mf({
      state: m,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: c,
      toggleSidebar: v
    }), (g, C) => (t(), T(b(Ma), { "delay-duration": 0 }, {
      default: L(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(df),
            "--sidebar-width-icon": b(cf)
          },
          class: b(Q)(
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
}), _3 = /* @__PURE__ */ O({
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
        b(Q)(
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
      (...i) => b(a) && b(a)(...i))
    }, [
      U(r.$slots, "default")
    ], 2));
  }
}), xf = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(b(kn), re({ "data-slot": "separator" }, b(a), {
      class: b(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), A3 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(xf), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: A(b(Q)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), P3 = /* @__PURE__ */ O({
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
      class: A(b(Q)("h-7 w-7", l.class)),
      onClick: b(s)
    }, {
      default: L(() => [
        b(a) || b(r) === "collapsed" ? (t(), T(b(Yn), { key: 0 })) : (t(), T(b(Xn), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), kf = Gt(
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
), z3 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b($n), re({ "data-slot": "dropdown-menu" }, b(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), $f = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, O3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(wn), re({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", $f, [
          D(b(Ba), null, {
            default: L(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(b(_a), { class: "size-4" })
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
}), L3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Cn), null, {
      default: L(() => [
        D(b(Sn), re({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...b(i) }, {
          class: b(Q)(
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
}), j3 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Mn), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), V3 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(b(Bn), re({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, b(r), {
      class: b(Q)(
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
}), T3 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fe(l, "class", "inset"), r = Le(a);
    return (s, i) => (t(), T(b(_n), re({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, b(r), {
      class: b(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), D3 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(b(An), re({ "data-slot": "dropdown-menu-radio-group" }, b(s)), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, I3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Pn), re({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", wf, [
          D(b(Ba), null, {
            default: L(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(b(Qn), { class: "size-2 fill-current" })
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
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(zn), re({ "data-slot": "dropdown-menu-separator" }, b(a), {
      class: b(Q)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), F3 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: A(b(Q)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), N3 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(b(On), re({ "data-slot": "dropdown-menu-sub" }, b(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), R3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Ln), re({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
      class: b(Q)(
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
}), U3 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(b(jn), re({ "data-slot": "dropdown-menu-sub-trigger" }, b(r), {
      "data-inset": e.inset ? "" : void 0,
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: L(() => [
        U(s.$slots, "default"),
        D(b(Aa), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), H3 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Le(e);
    return (r, s) => (t(), T(b(Vn), re({ "data-slot": "dropdown-menu-trigger" }, b(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), K3 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Tn), {
      "data-slot": "avatar",
      class: A(b(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), q3 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Dn), re({ "data-slot": "avatar-fallback" }, b(a), {
      class: b(Q)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(In), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), W3 = /* @__PURE__ */ O({
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
}), Z3 = /* @__PURE__ */ O({
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
      class: A(b(Q)("flex size-9 items-center justify-center", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(b(el), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), J3 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: A(b(Q)("inline-flex items-center gap-1.5", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Y3 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(tt), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: A(b(Q)("hover:text-foreground transition-colors", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), X3 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: A(
        b(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Q3 = /* @__PURE__ */ O({
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
      class: A(b(Q)("text-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), eC = /* @__PURE__ */ O({
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
      class: A(b(Q)("[&>svg]:size-3.5", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(b(Aa))
      ])
    ], 2));
  }
}), Cf = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Sf = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Cf, [
      D(b(En), re({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), tC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Fn), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: L((c) => [
        U(d.$slots, "default", Oe(Fe(c))),
        e.viewport ? (t(), T(Sf, { key: 0 })) : x("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), aC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Nn), re({ "data-slot": "navigation-menu-content" }, b(i), {
      class: b(Q)(
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
}), nC = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(b(Rn), re({ "data-slot": "navigation-menu-indicator" }, b(r), {
      class: b(Q)(
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
}), lC = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Un), re({ "data-slot": "navigation-menu-item" }, b(a), {
      class: b(Q)("relative", l.class)
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Hn), re({ "data-slot": "navigation-menu-link" }, b(i), {
      class: b(Q)(
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
}), sC = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(b(Kn), re({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(Q)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rC = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(b(qn), re({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(Q)(b(Mf)(), "group", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default"),
        D(b(tl), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mf = Gt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), iC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b($a), re({ "data-slot": "dialog" }, b(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), dC = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(et), re({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bf = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Ut), re({ "data-slot": "dialog-overlay" }, b(a), {
      class: b(Q)(
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
}), uC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Ht), null, {
      default: L(() => [
        D(Bf),
        D(b(Kt), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...b(i) }, {
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: L(() => [
            U(d.$slots, "default"),
            e.showCloseButton ? (t(), T(b(et), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                D(b(qt)),
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
}), cC = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(b(wa), re({ "data-slot": "dialog-description" }, b(r), {
      class: b(Q)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fC = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: A(b(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      U(a.$slots, "default"),
      e.showCloseButton ? (t(), T(b(et), {
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
      })) : x("", !0)
    ], 2));
  }
}), mC = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: A(b(Q)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), pC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Ht), null, {
      default: L(() => [
        D(b(Ut), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            D(b(Kt), re({
              class: b(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...b(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (c) => {
                const v = c.detail.originalEvent, m = v.target;
                (v.offsetX > m.clientWidth || v.offsetY > m.clientHeight) && c.preventDefault();
              })
            }), {
              default: L(() => [
                U(d.$slots, "default"),
                D(b(et), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    D(b(qt), { class: "w-4 h-4" }),
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
}), vC = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(b(Ca), re({ "data-slot": "dialog-title" }, b(r), {
      class: b(Q)("text-lg leading-none font-semibold", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gC = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Sa), re({ "data-slot": "dialog-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hC = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Gn), re({ "data-slot": "label" }, b(a), {
      class: b(Q)(
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
}), bC = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(al), {
      role: "status",
      "aria-label": "Loading",
      class: A(b(Q)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), yC = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: A(
        b(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), xC = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: A(b(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), kC = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: A(b(Q)("px-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), $C = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: A(b(Q)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), wC = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: A(b(Q)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), CC = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: A(
        b(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), SC = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: A(b(Q)("leading-none font-semibold", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), _f = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Af = { class: "flex items-start gap-3" }, Pf = { class: "min-w-0 flex-1" }, zf = { class: "text-foreground text-sm font-medium" }, Of = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, MC = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(!1), d = R(null), u = R(0);
    sn((v) => (console.error(`[PkBoundary] ${r.label} failed to render`, v), i.value = !0, d.value = v instanceof Error ? v.message : null, s("error", v), !1));
    function c() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: c }), (v, m) => (t(), n("div", {
      class: A(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", _f, [
        o("div", Af, [
          m[1] || (m[1] = o("svg", {
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
          o("div", Pf, [
            o("p", zf, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", Of, f(d.value), 1)) : x("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: c
            }, [...m[0] || (m[0] = [
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
      ])) : i.value ? x("", !0) : U(v.$slots, "default", { key: u.value })
    ], 2));
  }
}), Lf = { class: "bg-card rounded-lg border" }, jf = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Vf = { class: "min-w-0" }, Tf = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Df = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, If = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Ef = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, BC = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Lf, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", jf, [
        o("div", Vf, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Tf, f(e.title), 1)) : x("", !0),
            e.description ? (t(), n("p", Df, f(e.description), 1)) : x("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", If, [
          U(l.$slots, "actions")
        ])) : x("", !0)
      ])) : x("", !0),
      o("div", {
        class: A(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", Ef, [
        U(l.$slots, "footer")
      ])) : x("", !0)
    ]));
  }
}), Ka = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function _C() {
  const e = za(), l = y(() => e.props.panel?.pageFooter === !0);
  return Ot(Ka, l), l;
}
const Ff = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Nf = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Rf = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, AC = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = za(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = y(() => {
      const c = a.props.panel;
      return Array.isArray(c?.footerLinks) ? c.footerLinks : [];
    }), d = ht(Ka, y(() => !1)), u = y(() => !l.host && b(d) === !0);
    return (c, v) => u.value ? x("", !0) : (t(), n("footer", Ff, [
      o("div", Nf, [
        o("p", null, "© " + f(b(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), n("nav", Rf, [
          (t(!0), n(z, null, j(i.value, (m) => (t(), T(b(il), {
            key: m.href,
            href: m.href,
            class: "hover:text-foreground"
          }, {
            default: L(() => [
              N(f(m.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : x("", !0)
      ])
    ]));
  }
}), Uf = { class: "flex shrink-0 flex-col items-center" }, Hf = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, PC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", Uf, [
      o("div", {
        class: A(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Hf)) : x("", !0),
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
      ], 64)) : x("", !0)
    ]));
  }
}), Kf = { class: "flex flex-col gap-2" }, qf = { class: "min-w-0 flex-1" }, Gf = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Wf = ["disabled", "aria-label", "onClick"], Zf = ["disabled", "aria-label", "onClick"], Jf = ["disabled", "title", "aria-label", "onClick"], Yf = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Xf = ["disabled"], zC = /* @__PURE__ */ O({
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
      return Array.isArray(B) ? B.map((p) => ({ uid: s++, data: { ...p } })) : [];
    }
    me(
      () => a.modelValue,
      (B) => {
        JSON.stringify(B ?? null) !== JSON.stringify(u()) && (i.value = d(B));
      }
    );
    function u() {
      const B = [];
      for (const p of i.value) {
        const h = {};
        let w = !1;
        for (const P of a.children) {
          const E = p.data[P.key] ?? null;
          h[P.key] = E, E !== null && E !== "" && !(Array.isArray(E) && E.length === 0) && (w = !0);
        }
        w && B.push(h);
      }
      return B.length ? B : null;
    }
    function c() {
      r("update:modelValue", u());
    }
    const v = y(() => a.maxItems !== null && i.value.length >= a.maxItems), m = y(() => a.minItems !== null && i.value.length <= a.minItems), g = y(() => a.children.length === 1);
    function C() {
      if (v.value || a.disabled)
        return;
      const B = {};
      for (const p of a.children)
        B[p.key] = null;
      i.value.push({ uid: s++, data: B });
    }
    function k(B) {
      i.value = i.value.filter((p) => p.uid !== B), c();
    }
    function $(B, p) {
      const h = B + p;
      if (h < 0 || h >= i.value.length)
        return;
      const w = [...i.value], [P] = w.splice(B, 1);
      w.splice(h, 0, P), i.value = w, c();
    }
    function M(B, p, h) {
      const w = i.value.find((P) => P.uid === B);
      w && (w.data[p] = h, c());
    }
    function S(B, p) {
      return a.errors[`${a.fieldKey}.${B}.${p}`];
    }
    return (B, p) => (t(), n("div", Kf, [
      (t(!0), n(z, null, j(i.value, (h, w) => (t(), n("div", {
        key: h.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: A(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", g.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(w + 1), 3),
        o("div", qf, [
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
            onChange: (P) => M(h.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", Gf, [
            (t(!0), n(z, null, j(e.children, (P) => (t(), T(Xe, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: h.data[P.key],
              error: S(w, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (E) => M(h.uid, P.key, E)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: A(["flex shrink-0 items-center gap-0.5", g.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || w === 0,
            "aria-label": `Move ${e.itemLabel} ${w + 1} up`,
            onClick: (P) => $(w, -1)
          }, [...p[0] || (p[0] = [
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
          ])], 8, Wf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || w === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${w + 1} down`,
            onClick: (P) => $(w, 1)
          }, [...p[1] || (p[1] = [
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
          ])], 8, Zf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || m.value,
            title: m.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${w + 1}`,
            onClick: (P) => k(h.uid)
          }, [...p[2] || (p[2] = [
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
          ])], 8, Jf)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", Yf, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : x("", !0),
      v.value ? x("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: C
      }, [
        p[3] || (p[3] = o("svg", {
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
      ], 8, Xf))
    ]));
  }
}), Qf = { class: "space-y-1" }, em = { class: "flex items-center gap-1" }, tm = ["disabled", "title", "aria-label", "onClick"], am = ["aria-pressed"], nm = ["id", "value", "rows", "disabled"], lm = ["innerHTML"], om = /* @__PURE__ */ O({
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
      const k = document.getElementById(a.id ?? "");
      if (k === null)
        return;
      const $ = k.selectionStart, M = k.selectionEnd, S = i.value.slice($, M);
      r(
        "update:modelValue",
        `${i.value.slice(0, $)}${g}${S}${C}${i.value.slice(M)}`
      );
    }
    const v = {
      bold: { label: "B", run: () => c("**") },
      italic: { label: "I", run: () => c("*") },
      code: { label: "</>", run: () => c("`") },
      heading: { label: "H", run: () => c("## ", "") },
      list: { label: "•", run: () => c("- ", "") },
      link: { label: "🔗", run: () => c("[", "](https://)") }
    }, m = y(
      () => (a.toolbar ?? Object.keys(v)).filter((g) => g in v)
    );
    return (g, C) => (t(), n("div", Qf, [
      o("div", em, [
        (t(!0), n(z, null, j(m.value, (k) => (t(), n("button", {
          key: k,
          type: "button",
          disabled: e.disabled,
          title: k,
          "aria-label": k,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: ($) => v[k].run()
        }, f(v[k].label), 9, tm))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (k) => s.value = !s.value)
        }, " Preview ", 8, am)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, lm)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = (k) => r("update:modelValue", k.target.value))
      }, null, 40, nm))
    ]));
  }
}), sm = { class: "space-y-1" }, rm = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, im = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, dm = ["id", "value", "rows", "disabled"], um = { class: "text-muted-foreground text-xs font-normal" }, cm = {
  key: 0,
  class: "text-destructive text-xs"
}, fm = /* @__PURE__ */ O({
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
    function m(g) {
      if (g.key === "Escape") {
        i.value = !1;
        return;
      }
      if (g.key !== "Tab" && (i.value = !0), g.key !== "Tab" || !i.value)
        return;
      g.preventDefault();
      const C = g.target, k = C.selectionStart, $ = C.selectionEnd, M = `${d.value.slice(0, k)}    ${d.value.slice($)}`;
      r("update:modelValue", M), requestAnimationFrame(() => {
        C.selectionStart = C.selectionEnd = k + 4;
      });
    }
    return (g, C) => (t(), n("div", sm, [
      o("div", rm, [
        o("div", im, [
          (t(!0), n(z, null, j(u.value, (k) => (t(), n("div", { key: k }, f(k), 1))), 128))
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
          onKeydown: m
        }, null, 40, dm)
      ]),
      o("p", um, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      c.value ? (t(), n("p", cm, f(c.value), 1)) : x("", !0)
    ]));
  }
}), mm = { class: "space-y-3" }, pm = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, vm = { class: "text-sm font-medium" }, gm = { class: "flex items-center gap-1" }, hm = ["disabled", "onClick"], bm = ["disabled", "onClick"], ym = ["disabled", "onClick"], xm = { class: "space-y-3 p-3" }, km = { class: "flex flex-wrap items-center gap-2" }, $m = ["disabled", "onClick"], wm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, OC = /* @__PURE__ */ O({
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
      u(s.value.filter((k, $) => $ !== C));
    }
    function m(C, k) {
      const $ = C + k;
      if ($ < 0 || $ >= s.value.length)
        return;
      const M = [...s.value], [S] = M.splice(C, 1);
      M.splice($, 0, S), u(M);
    }
    function g(C, k, $) {
      u(
        s.value.map(
          (M, S) => S === C ? { ...M, data: { ...M.data, [k]: $ } } : M
        )
      );
    }
    return (C, k) => (t(), n("div", mm, [
      (t(!0), n(z, null, j(s.value, ($, M) => (t(), n("div", {
        key: `${$.type}-${M}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", pm, [
          o("span", vm, f(i.value[$.type]?.label ?? $.type), 1),
          o("div", gm, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === 0,
              "aria-label": "Move up",
              onClick: (S) => m(M, -1)
            }, " ↑ ", 8, hm),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (S) => m(M, 1)
            }, " ↓ ", 8, bm),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (S) => v(M)
            }, " Remove ", 8, ym)
          ])
        ]),
        o("div", xm, [
          (t(!0), n(z, null, j(i.value[$.type]?.fields ?? [], (S) => (t(), T(Xe, {
            key: S.key,
            field: S,
            value: $.data[S.key] ?? null,
            error: e.errors?.[S.key],
            processing: e.disabled,
            onChange: (B) => g(M, S.key, B)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", km, [
        (t(!0), n(z, null, j(e.blocks, ($) => (t(), n("button", {
          key: $.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (M) => c($.type)
        }, " + " + f($.label), 9, $m))), 128)),
        d.value ? (t(), n("span", wm, f(e.maxBlocks) + " is the maximum here. ", 1)) : x("", !0)
      ])
    ]));
  }
}), Cm = ["name", "value", "checked", "disabled", "onChange"], Sm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Mm = /* @__PURE__ */ O({
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
          onChange: (c) => r("update:modelValue", u.value)
        }, null, 40, Cm),
        N(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Sm, " Nothing to choose from yet. ")) : x("", !0)
    ], 2));
  }
}), Bm = ["value", "checked", "disabled", "onChange"], _m = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Am = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, j(e.options, (m) => (t(), n("label", {
        key: String(m.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: m.value,
          checked: i(m),
          disabled: e.disabled,
          onChange: (g) => d(m)
        }, null, 40, Bm),
        N(" " + f(m.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", _m, " Nothing to choose from yet. ")) : x("", !0)
    ], 4));
  }
}), Pm = { class: "flex flex-col gap-1.5" }, zm = ["aria-label", "onClick"], Om = ["placeholder", "disabled", "maxlength"], Lm = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, jm = ["onClick"], Vm = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Tm = /* @__PURE__ */ O({
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
      if (i.value.some((k) => k.toLowerCase() === C.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, C]), s.value = "";
    }
    function v(g) {
      r(
        "update:modelValue",
        i.value.filter((C, k) => k !== g)
      );
    }
    function m(g) {
      if (g.key === "Enter" || g.key === ",") {
        g.preventDefault(), c(s.value);
        return;
      }
      g.key === "Backspace" && s.value === "" && i.value.length > 0 && v(i.value.length - 1);
    }
    return (g, C) => (t(), n("div", Pm, [
      o("div", {
        class: A(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, j(i.value, (k, $) => (t(), n("span", {
          key: `${k}-${$}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(f(k) + " ", 1),
          e.disabled ? x("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${k}`,
            onClick: (M) => v($)
          }, " × ", 8, zm))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (k) => s.value = k),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: m,
          onBlur: C[1] || (C[1] = (k) => c(s.value))
        }, null, 40, Om), [
          [Ae, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", Lm, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(z, null, j(u.value, (k) => (t(), n("button", {
          key: k,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: ($) => c(k)
        }, f(k), 9, jm))), 128))
      ])) : x("", !0),
      d.value ? (t(), n("p", Vm, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : x("", !0)
    ]));
  }
}), Dm = 4.5, ga = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function qa(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function At(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Et(e) {
  const [l, a, r] = qa(e);
  return 0.2126 * At(l) + 0.7152 * At(a) + 0.0722 * At(r);
}
function Ga(e, l) {
  const a = Et(e), r = Et(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function Im(e, l, a) {
  if (!ga.test(e) || !ga.test(l))
    return e;
  const r = Et(l) > 0.5, s = r ? 0 : 255;
  let i = qa(e);
  for (let d = 0; d <= 20; d++) {
    const u = Em(i);
    if (Ga(u, l) >= a)
      return u;
    i = i.map((c) => c + (s - c) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Em(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Fm = { class: "flex flex-col gap-2" }, Nm = { class: "flex items-center gap-2" }, Rm = {
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
}, Um = ["value", "disabled", "aria-label"], Hm = ["value", "disabled", "placeholder"], Km = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, qm = ["aria-label", "title", "onClick"], Gm = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Wm = /* @__PURE__ */ O({
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
    function u(k) {
      const $ = k.trim();
      if ($ === "")
        return "";
      const M = $.startsWith("#") ? $ : `#${$}`;
      return s.test(M) ? M.toLowerCase() : $;
    }
    function c(k) {
      r("update:modelValue", u(k.target.value));
    }
    const v = y(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Ga(i.value, a.field.contrastBackground)), m = y(() => a.field.contrastMinRatio ?? Dm), g = y(() => v.value !== null && v.value < m.value);
    function C() {
      a.field.contrastBackground && r(
        "update:modelValue",
        Im(i.value, a.field.contrastBackground, m.value)
      );
    }
    return (k, $) => (t(), n("div", Fm, [
      o("div", Nm, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: $[0] || ($[0] = (M) => r("update:modelValue", M.target.value))
        }, null, 40, Um)) : (t(), n("span", Rm)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: c
        }, null, 40, Hm)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", Km, [
        (t(!0), n(z, null, j(e.field.presets, (M) => (t(), n("button", {
          key: M,
          type: "button",
          class: A(["size-6 rounded border", i.value.toLowerCase() === M.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: M }),
          "aria-label": M,
          title: M,
          onClick: (S) => r("update:modelValue", M.toLowerCase())
        }, null, 14, qm))), 128))
      ])) : x("", !0),
      g.value ? (t(), n("p", Gm, [
        o("span", null, " This fails contrast at " + f(v.value.toFixed(1)) + ":1 - it needs at least " + f(m.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? x("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : x("", !0)
    ]));
  }
}), Zm = ["aria-disabled"], Jm = /* @__PURE__ */ O({
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
      const C = a.modelValue?.[a.latKey], k = a.modelValue?.[a.lngKey];
      return typeof C == "number" && typeof k == "number" ? { lat: C, lng: k } : a.center ? a.center : a.markers.length > 0 ? { lat: a.markers[0].lat, lng: a.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function v() {
      if (!s.value || i)
        return;
      const C = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = C, i = C.map(s.value).setView([c.value.lat, c.value.lng], a.zoom), C.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), m(), g(), a.pickable && !a.disabled && i.on("click", (k) => {
        r("update:modelValue", {
          [a.latKey]: Number(k.latlng.lat.toFixed(6)),
          [a.lngKey]: Number(k.latlng.lng.toFixed(6))
        });
      });
    }
    function m() {
      if (!(!i || !u))
        for (const C of a.markers) {
          const k = u.circleMarker([C.lat, C.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (C.label || C.popup) && k.bindPopup(`<strong>${C.label ?? ""}</strong>${C.popup ? `<br>${C.popup}` : ""}`);
        }
    }
    function g() {
      if (!i || !u)
        return;
      const C = a.modelValue?.[a.latKey], k = a.modelValue?.[a.lngKey];
      if (typeof C != "number" || typeof k != "number") {
        d && (i.removeLayer(d), d = null);
        return;
      }
      d ? d.setLatLng([C, k]) : d = u.circleMarker([C, k], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([C, k], i.getZoom());
    }
    return ve(() => {
      v();
    }), ke(() => {
      i?.remove(), i = null, d = null;
    }), me(
      () => a.modelValue,
      () => g(),
      { deep: !0 }
    ), (C, k) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: se({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, Zm));
  }
}), Ym = { class: "flex flex-col gap-2" }, Xm = { class: "text-muted-foreground text-xs font-normal" }, Qm = /* @__PURE__ */ O({
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
    return (u, c) => (t(), n("div", Ym, [
      D(Jm, {
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
      o("p", Xm, [
        N(" Click the map to set " + f(i.value) + " / " + f(d.value) + " ", 1),
        s.value ? (t(), n(z, { key: 0 }, [
          N(" (" + f(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + f(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : x("", !0)
      ])
    ]));
  }
}), ep = { class: "flex flex-col gap-2" }, tp = ["width", "height"], ap = ["value", "disabled"], np = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, lp = /* @__PURE__ */ O({
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
    }), (c, v) => (t(), n("div", ep, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, tp),
      e.field.from ? (t(), n("p", np, "From " + f(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: v[0] || (v[0] = (m) => r("update:modelValue", m.target.value))
      }, null, 40, ap))
    ]));
  }
}), op = { class: "flex flex-col gap-2" }, sp = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, rp = ["aria-label"], ip = {
  key: 0,
  class: "text-destructive text-xs"
}, dp = ["value", "disabled"], up = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, cp = /* @__PURE__ */ O({
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
        } catch (m) {
          i.value = m instanceof Error ? m.message : "Could not render barcode";
        }
    }
    return ve(() => {
      c();
    }), me([d, u], () => {
      c();
    }), (v, m) => (t(), n("div", op, [
      o("div", sp, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, rp))
      ]),
      i.value ? (t(), n("p", ip, f(i.value), 1)) : x("", !0),
      e.field.from ? (t(), n("p", up, "From " + f(e.field.from) + " (" + f(u.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: m[0] || (m[0] = (g) => r("update:modelValue", g.target.value))
      }, null, 40, dp))
    ]));
  }
}), fp = { class: "mr-2 inline-block w-3 opacity-60" }, mp = {
  key: 0,
  class: "text-muted-foreground p-3"
}, pp = /* @__PURE__ */ O({
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
      for (let m = 0; m < c; m++) {
        const g = d[m], C = u[m];
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
      (t(!0), n(z, null, j(i.value, (c, v) => (t(), n("div", {
        key: v,
        class: A(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": c.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": c.kind === "add",
          "text-muted-foreground": c.kind === "same"
        }])
      }, [
        o("span", fp, f(c.kind === "add" ? "+" : c.kind === "del" ? "-" : " "), 1),
        N(" " + f(c.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", mp, "No differences.")) : x("", !0)
    ], 4));
  }
}), vp = { class: "flex flex-col gap-3" }, gp = { class: "flex items-center justify-between gap-2" }, hp = { class: "text-sm font-medium" }, bp = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, yp = { class: "grid grid-cols-7 gap-1" }, xp = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, kp = ["title"], LC = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = R(/* @__PURE__ */ new Date()), r = y(() => a.value.getFullYear()), s = y(() => a.value.getMonth()), i = y(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = y(() => {
      const m = /* @__PURE__ */ new Map();
      for (const g of l.events ?? []) {
        const C = m.get(g.date) ?? [];
        C.push(g), m.set(g.date, C);
      }
      return m;
    }), u = y(() => {
      const g = new Date(r.value, s.value, 1).getDay(), C = new Date(r.value, s.value + 1, 0).getDate(), k = [];
      for (let $ = 0; $ < g; $++)
        k.push({ day: null, key: `pad-${$}`, events: [] });
      for (let $ = 1; $ <= C; $++) {
        const M = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String($).padStart(2, "0")}`;
        k.push({ day: $, key: M, events: d.value.get(M) ?? [] });
      }
      return k;
    });
    function c() {
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function v() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (m, g) => (t(), n("div", vp, [
      o("div", gp, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: c
        }, " Prev "),
        o("p", hp, f(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: v
        }, " Next ")
      ]),
      o("div", bp, [
        (t(), n(z, null, j(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, f(C), 1)), 64))
      ]),
      o("div", yp, [
        (t(!0), n(z, null, j(u.value, (C) => (t(), n("div", {
          key: C.key,
          class: A(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), n("p", xp, f(C.day), 1)) : x("", !0),
          (t(!0), n(z, null, j(C.events.slice(0, 3), (k, $) => (t(), n("p", {
            key: `${C.key}-${$}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: k.label
          }, f(k.label), 9, kp))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), $p = { class: "flex items-center gap-3" }, wp = ["min", "max", "step", "value", "disabled", "aria-label"], Cp = { class: "flex shrink-0 items-center gap-1" }, Sp = ["min", "max", "step", "value", "disabled"], Mp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Bp = /* @__PURE__ */ O({
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
      const m = Number(a.modelValue);
      return Number.isFinite(m) ? m : s.value;
    }), c = y(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function v(m) {
      if (m === "") {
        r("update:modelValue", null);
        return;
      }
      const g = Number(m);
      r("update:modelValue", Number.isFinite(g) ? g : null);
    }
    return (m, g) => (t(), n("div", $p, [
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
      }, null, 40, wp),
      o("div", Cp, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: c.value ? "" : u.value,
          disabled: e.disabled,
          onInput: g[1] || (g[1] = (C) => v(C.target.value))
        }, null, 40, Sp),
        e.field.unit ? (t(), n("span", Mp, f(e.field.unit), 1)) : x("", !0)
      ])
    ]));
  }
}), ft = /* @__PURE__ */ new Map();
function Pt(e, l) {
  ft.set(e, l);
}
function _p(e) {
  return ft.get(e);
}
function jC(e) {
  return ft.has(e);
}
function Ap() {
  return [...ft.keys()].sort();
}
function VC() {
  ft.clear();
}
const Pp = ["name", "value", "checked", "disabled", "onChange"], zp = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Op = { class: "whitespace-nowrap" }, Lp = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, jp = ["name", "value", "checked", "disabled", "onChange"], Vp = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Tp = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Dp = { class: "text-center text-xs font-medium" }, Ip = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Ep = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Fp = /* @__PURE__ */ O({
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
      () => a.field.preview ? _p(a.field.preview) : void 0
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
    return (v, m) => d.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: A(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, j(e.options, (g) => (t(), n("label", {
        key: String(g.value),
        class: A(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
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
        }, null, 40, Pp),
        m[0] || (m[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", zp, [
          (t(), T(_e(s.value), {
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"]))
        ])) : x("", !0),
        o("span", Op, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Lp, " Nothing to choose from yet. ")) : x("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: A(["grid gap-3", u.value])
    }, [
      (t(!0), n(z, null, j(e.options, (g) => (t(), n("label", {
        key: String(g.value),
        class: A(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
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
        }, null, 40, jp),
        m[1] || (m[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Vp, [
          s.value ? (t(), T(_e(s.value), {
            key: 0,
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Tp, " no preview ")) : x("", !0)
        ]),
        o("span", Dp, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Ip, " Nothing to choose from yet. ")) : x("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Ep, [
        m[2] || (m[2] = N(" No preview registered for ", -1)),
        o("code", null, f(e.field.preview), 1),
        N(". Registered: " + f(b(Ap)().join(", ") || "none") + ". ", 1)
      ])) : x("", !0)
    ], 2));
  }
}), Np = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Rp = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Np, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Up = { class: "flex flex-col items-center gap-1 text-center" }, Hp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Wa = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Up, [
      o("div", {
        class: A(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: a.value, color: a.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Hp, f(e.caption), 1)) : x("", !0)
    ]));
  }
}), Kp = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, qp = { class: "flex items-center gap-3" }, Gp = ["src"], Wp = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Zp = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Jp = {
  key: 0,
  class: "text-right text-sm"
}, Yp = { class: "text-neutral-500" }, Xp = { class: "tabular-nums" }, Qp = { key: 1 }, ev = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, tv = { class: "mt-2 font-medium" }, av = { key: 2 }, nv = { class: "w-full text-sm" }, lv = { class: "w-full py-3 pr-2" }, ov = {
  key: 0,
  class: "text-xs text-neutral-500"
}, sv = { key: 0 }, rv = ["colspan"], iv = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, dv = { class: "w-64 text-sm" }, uv = { class: "tabular-nums" }, cv = {
  key: 3,
  class: "py-2"
}, fv = { key: 4 }, mv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, pv = { class: "mt-2 flex flex-col gap-1 text-sm" }, vv = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, gv = { key: 0 }, hv = {
  key: 1,
  class: "mt-1"
}, bv = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, yv = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("article", Kp, [
      o("div", qp, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Gp)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: a() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, j(e.document.blocks, (m, g) => (t(), n(z, { key: g }, [
        m.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: se({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: se({ color: a() })
            }, f(m.title), 5),
            m.subtitle ? (t(), n("p", Wp, f(m.subtitle), 1)) : x("", !0),
            m.reference ? (t(), n("p", Zp, f(m.reference), 1)) : x("", !0)
          ]),
          r(m).length ? (t(), n("dl", Jp, [
            (t(!0), n(z, null, j(r(m), (C, k) => (t(), n("div", {
              key: k,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Yp, f(C.label), 1),
              o("dd", Xp, f(C.value), 1)
            ]))), 128))
          ])) : x("", !0)
        ], 4)) : m.type === "party" ? (t(), n("section", Qp, [
          o("h2", ev, f(m.heading), 1),
          o("p", tv, f(m.name), 1),
          (t(!0), n(z, null, j(d(m.lines), (C, k) => (t(), n("p", {
            key: k,
            class: "text-sm text-neutral-600"
          }, f(C), 1))), 128))
        ])) : m.type === "lines" ? (t(), n("section", av, [
          o("table", nv, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: a() })
              }, [
                (t(!0), n(z, null, j(d(m.columns), (C, k) => (t(), n("th", {
                  key: k,
                  class: A(["pb-2 font-medium", k > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, j(s(m), (C, k) => (t(), n("tr", {
                key: k,
                class: "border-b border-neutral-200"
              }, [
                o("td", lv, [
                  o("p", null, f(C.description), 1),
                  C.detail ? (t(), n("p", ov, f(C.detail), 1)) : x("", !0)
                ]),
                (t(!0), n(z, null, j(C.cells, ($, M) => (t(), n("td", {
                  key: M,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f($), 1))), 128))
              ]))), 128)),
              s(m).length === 0 ? (t(), n("tr", sv, [
                o("td", {
                  colspan: d(m.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(m.empty), 9, rv)
              ])) : x("", !0)
            ])
          ]),
          i(m).length ? (t(), n("div", iv, [
            o("dl", dv, [
              (t(!0), n(z, null, j(i(m), (C, k) => (t(), n("div", {
                key: k,
                class: A([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(C.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: A(C.strong ? "" : "text-neutral-600")
                }, f(C.label), 3),
                o("dd", uv, f(C.value), 1)
              ], 6))), 128))
            ])
          ])) : x("", !0)
        ])) : m.type === "code" ? (t(), n("section", cv, [
          D(Wa, {
            code: u(m.code),
            caption: u(m.caption),
            style: se(u(m.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : m.type === "steps" ? (t(), n("section", fv, [
          o("h2", mv, f(m.heading), 1),
          o("ol", pv, [
            (t(!0), n(z, null, j(d(m.items), (C, k) => (t(), n("li", {
              key: k,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: se({ color: a() })
              }, f(k + 1) + ".", 5),
              o("span", null, f(C), 1)
            ]))), 128))
          ])
        ])) : m.type === "note" ? (t(), n("p", {
          key: 5,
          class: A(["text-sm", m.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(m.emphasis ? { color: a() } : void 0)
        }, f(m.text), 7)) : m.type === "footer" ? (t(), n("footer", vv, [
          m.text ? (t(), n("p", gv, f(m.text), 1)) : x("", !0),
          d(m.contacts).length ? (t(), n("p", hv, f(d(m.contacts).join(" · ")), 1)) : x("", !0)
        ])) : (t(), n("p", bv, " This document contains a “" + f(m.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), xv = ["aria-label", "title"], kv = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $v = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, TC = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Na(), r = y(() => l.value.theme === "dark");
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
      (t(), n("svg", kv, [
        r.value ? (t(), n(z, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", $v))
      ]))
    ], 8, xv));
  }
}), wv = ["width", "height"], Cv = { key: 0 }, Sv = ["x1", "x2", "y1", "y2"], Mv = ["x", "y"], Bv = ["x1", "x2", "y1", "y2"], _v = ["x", "y"], Av = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Pv = ["x", "y", "width", "height", "fill", "fill-opacity"], zv = ["x", "y"], Ov = ["x", "y"], Lv = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, jv = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Vv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Tv = { class: "text-xs font-semibold tabular-nums" }, Dv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Iv = { class: "text-muted-foreground" }, ha = 5.6, DC = /* @__PURE__ */ O({
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
    ], m = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, V) => ({
      ...F,
      color: F.color ?? v[V % v.length]
    }))), g = y(() => m.value[0]?.points.map((_) => _.label) ?? []), C = y(() => g.value.length), k = y(() => l.orientation === "horizontal"), $ = y(() => Math.max(0, ...g.value.map((_) => _.length))), M = y(() => {
      if (!k.value)
        return l.showAxis ? 44 : 8;
      const _ = $.value * ha + 16;
      return Math.round(Math.min(Math.max(60, _), d.value * 0.4));
    }), S = y(() => Math.max(4, Math.floor((M.value - 16) / ha)));
    function B(_) {
      return _.length <= S.value ? _ : `${_.slice(0, S.value - 1)}…`;
    }
    const p = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: M.value
    })), h = y(() => ({
      w: Math.max(1, d.value - p.value.left - p.value.right),
      h: Math.max(1, l.height - p.value.top - p.value.bottom)
    })), w = (_) => l.format ? l.format(_) : P(_);
    function P(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    const E = y(() => {
      const _ = g.value.map(
        (ge, ye) => l.stacked ? m.value.reduce((le, X) => le + Math.max(0, X.points[ye]?.value ?? 0), 0) : Math.max(...m.value.map((le) => le.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * V) ?? 10) * V;
    }), I = y(
      () => (k.value ? h.value.h : h.value.w) / Math.max(1, C.value)
    ), te = y(() => I.value * 0.68), H = y(
      () => l.stacked || m.value.length <= 1 ? te.value : te.value / m.value.length
    ), K = y(() => {
      const _ = [], F = new Array(C.value).fill(0);
      return m.value.forEach((V, J) => {
        V.points.forEach((ge, ye) => {
          const X = Math.max(0, ge.value) / E.value * (k.value ? h.value.w : h.value.h), ne = (k.value ? p.value.top : p.value.left) + ye * I.value + (I.value - te.value) / 2, Ce = l.stacked ? 0 : J * H.value;
          _.push(
            k.value ? {
              x: p.value.left + F[ye],
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
              y: p.value.top + h.value.h - X - F[ye],
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
    }), G = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        value: E.value * (k.value ? _ : 1 - _),
        x: p.value.left + h.value.w * _,
        y: p.value.top + h.value.h * _
      }))
    ), oe = y(() => Math.max(1, Math.ceil(C.value / (k.value ? 14 : 10))));
    function ae(_) {
      return _ === C.value - 1 || _ % oe.value === 0;
    }
    function Z(_) {
      return (k.value ? p.value.top : p.value.left) + _ * I.value + I.value / 2;
    }
    const q = y(() => u.value === null ? null : {
      label: g.value[u.value],
      rows: m.value.map((_) => ({
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
          e.showAxis ? (t(), n("g", Cv, [
            k.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, j(G.value, (V) => (t(), n("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: p.value.top,
                y2: p.value.top + h.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Sv))), 128)),
              (t(!0), n(z, null, j(G.value, (V) => (t(), n("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(V.value)), 9, Mv))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, j(G.value, (V) => (t(), n("line", {
                key: `g-${V.y}`,
                x1: p.value.left,
                x2: d.value - p.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Bv))), 128)),
              (t(!0), n(z, null, j(G.value, (V) => (t(), n("text", {
                key: `gt-${V.y}`,
                x: p.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(V.value)), 9, _v))), 128))
            ], 64))
          ])) : x("", !0),
          (t(!0), n(z, null, j(g.value, (V, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: k.value ? p.value.left : p.value.left + J * I.value,
            y: k.value ? p.value.top + J * I.value : p.value.top,
            width: k.value ? h.value.w : I.value,
            height: k.value ? I.value : h.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === J ? 0.4 : 0,
            onMouseenter: (ge) => u.value = J
          }, null, 40, Av))), 128)),
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
          }, null, 8, Pv))), 128)),
          k.value ? (t(!0), n(z, { key: 1 }, j(g.value, (V, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: p.value.left - 8,
            y: Z(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(f(B(V)) + " ", 1),
            o("title", null, f(V), 1)
          ], 8, zv)), [
            [He, ae(J)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, j(g.value, (V, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: Z(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(V), 9, Ov)), [
            [He, ae(J)]
          ])), 128))
        ], 40, wv)),
        q.value ? (t(), n("div", Lv, [
          o("p", jv, f(q.value.label), 1),
          (t(!0), n(z, null, j(q.value.rows, (V, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Vv, f(V.name || "Value"), 1),
            o("span", Tv, f(w(V.value)), 1)
          ]))), 128))
        ])) : x("", !0),
        e.showLegend && m.value.length > 1 ? (t(), n("div", Dv, [
          (t(!0), n(z, null, j(m.value, (V, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Iv, f(V.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), Ev = ["width", "height"], Fv = ["id"], Nv = ["stop-color"], Rv = ["stop-color"], Uv = { key: 0 }, Hv = ["x1", "x2", "y1", "y2"], Kv = ["x", "y"], qv = ["x", "y"], Gv = ["x1", "x2", "y1", "y2"], Wv = ["d", "fill"], Zv = ["d", "stroke", "stroke-dasharray"], Jv = ["cx", "cy", "fill"], Yv = { key: 1 }, Xv = ["x1", "x2", "y1", "y2"], Qv = ["cx", "cy", "fill"], eg = ["x", "y"], tg = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, ag = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, ng = { class: "text-xs font-semibold tabular-nums" }, lg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, og = { class: "text-muted-foreground" }, sg = /* @__PURE__ */ O({
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
    ], c = Math.random().toString(36).slice(2, 9), v = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, V) => ({
      ...F,
      color: F.color ?? u[V % u.length]
    }))), m = y(() => v.value[0]?.points.map((_) => _.label) ?? []), g = y(() => m.value.length), C = y(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), k = (_) => l.format ? l.format(_) : $(_);
    function $(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    function M(_) {
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * V) ?? 10) * V;
    }
    const S = y(
      () => M(
        v.value.filter((_) => _.axis !== "right").flatMap((_) => _.points.map((F) => F.value))
      )
    ), B = y(
      () => M(
        v.value.filter((_) => _.axis === "right").flatMap((_) => _.points.map((F) => F.value))
      )
    ), p = y(() => ({
      w: Math.max(1, s.value - C.value.left - C.value.right),
      h: Math.max(1, l.height - C.value.top - C.value.bottom)
    }));
    function h(_) {
      return C.value.left + (g.value <= 1 ? 0 : _ / (g.value - 1) * p.value.w);
    }
    function w(_, F = "left") {
      const V = F === "right" ? B.value : S.value;
      return C.value.top + p.value.h - _ / V * p.value.h;
    }
    const P = y(
      () => v.value.map((_) => {
        const F = _.points.map((J, ge) => ({
          ...J,
          x: h(ge),
          y: w(J.value, _.axis ?? "left")
        })), V = _.stepped ? E(F) : I(F);
        return { ..._, pts: F, line: V, area: te(V, F) };
      })
    );
    function E(_) {
      if (_.length === 0)
        return "";
      let F = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let V = 1; V < _.length; V++)
        F += ` L${_[V].x.toFixed(2)},${_[V - 1].y.toFixed(2)} L${_[V].x.toFixed(2)},${_[V].y.toFixed(2)}`;
      return F;
    }
    function I(_) {
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
      const V = C.value.top + p.value.h;
      return `${_} L${F[F.length - 1].x.toFixed(2)},${V} L${F[0].x.toFixed(2)},${V} Z`;
    }
    const H = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: C.value.top + p.value.h * _,
        value: S.value * (1 - _)
      }))
    ), K = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: C.value.top + p.value.h * _,
        value: B.value * (1 - _)
      }))
    ), G = y(() => Math.max(1, Math.ceil(g.value / 8)));
    function oe(_) {
      return _ === g.value - 1 || _ % G.value === 0;
    }
    function ae(_) {
      const F = _.currentTarget.getBoundingClientRect(), V = _.clientX - F.left - C.value.left, J = g.value <= 1 ? 1 : p.value.w / (g.value - 1);
      i.value = Math.min(g.value - 1, Math.max(0, Math.round(V / J)));
    }
    const Z = y(() => {
      if (i.value === null || g.value === 0)
        return null;
      const _ = i.value;
      return {
        i: _,
        x: h(_),
        label: m.value[_],
        rows: P.value.map((F) => ({
          name: F.name,
          color: F.color,
          value: F.points[_]?.value ?? 0,
          y: F.pts[_]?.y ?? 0
        }))
      };
    }), q = y(() => {
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
          onMousemove: ae,
          onMouseleave: F[0] || (F[0] = (V) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(z, null, j(P.value, (V, J) => (t(), n("linearGradient", {
              id: `pk-fill-${b(c)}-${J}`,
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
              }, null, 8, Nv),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, Rv)
            ], 8, Fv))), 128))
          ]),
          e.showAxis ? (t(), n("g", Uv, [
            (t(!0), n(z, null, j(H.value, (V) => (t(), n("line", {
              key: V.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Hv))), 128)),
            (t(!0), n(z, null, j(H.value, (V) => (t(), n("text", {
              key: `t-${V.y}`,
              x: C.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(V.value)), 9, Kv))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, j(K.value, (V) => (t(), n("text", {
              key: `rt-${V.y}`,
              x: s.value - C.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(V.value)), 9, qv))), 128)) : x("", !0)
          ])) : x("", !0),
          (t(!0), n(z, null, j(m.value, (V, J) => pe((t(), n("line", {
            key: `v-${J}`,
            x1: h(J),
            x2: h(J),
            y1: C.value.top,
            y2: C.value.top + p.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Gv)), [
            [He, oe(J)]
          ])), 128)),
          (t(!0), n(z, null, j(P.value, (V, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            V.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${b(c)}-${J})`
            }, null, 8, Wv)) : x("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, Zv),
            V.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, Jv)) : x("", !0)
          ]))), 128)),
          Z.value ? (t(), n("g", Yv, [
            o("line", {
              x1: Z.value.x,
              x2: Z.value.x,
              y1: C.value.top,
              y2: C.value.top + p.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Xv),
            (t(!0), n(z, null, j(Z.value.rows, (V, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: Z.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Qv))), 128))
          ])) : x("", !0),
          (t(!0), n(z, null, j(m.value, (V, J) => pe((t(), n("text", {
            key: `x-${J}`,
            x: h(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(V), 9, eg)), [
            [He, oe(J)]
          ])), 128))
        ], 40, Ev)),
        Z.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(q.value)
        }, [
          o("p", tg, f(Z.value.label), 1),
          (t(!0), n(z, null, j(Z.value.rows, (V, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", ag, f(V.name || "Value"), 1),
            o("span", ng, f(k(V.value)), 1)
          ]))), 128))
        ], 4)) : x("", !0),
        e.showLegend && v.value.length > 1 ? (t(), n("div", lg, [
          (t(!0), n(z, null, j(P.value, (V, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", og, f(V.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), rg = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, ig = { class: "text-muted-foreground text-[11px] capitalize" }, dg = { class: "text-sm font-semibold tabular-nums" }, ug = {
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
    return (l, a) => (t(), n("div", rg, [
      o("p", ig, f(e.label), 1),
      o("p", dg, [
        N(f(e.value) + " ", 1),
        e.share ? (t(), n("span", ug, " (" + f(e.share) + ") ", 1)) : x("", !0)
      ])
    ]));
  }
}), cg = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, fg = ["width", "height", "viewBox", "aria-label"], mg = ["d", "fill", "fill-opacity", "onMouseenter"], pg = ["x", "y"], vg = ["x", "y"], gg = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, hg = ["onMouseenter"], bg = { class: "min-w-0 flex-1 truncate capitalize" }, yg = { class: "tabular-nums font-medium" }, xg = { class: "text-muted-foreground w-9 text-right tabular-nums" }, IC = /* @__PURE__ */ O({
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
    const m = y(() => {
      if (r.value <= 0)
        return [];
      const S = i.value / 2;
      let B = -Math.PI / 2;
      return l.data.map((p, h) => {
        const w = p.value / r.value, P = w * Math.PI * 2, E = B, I = B + P;
        return B = I, {
          ...p,
          share: w,
          colour: c(h),
          opacity: v(h),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: w >= 0.9999 ? k(S) : C(S, E, I, d.value, u.value)
        };
      });
    });
    function g(S, B, p) {
      return `${(S + Math.cos(B) * p).toFixed(2)},${(S + Math.sin(B) * p).toFixed(2)}`;
    }
    function C(S, B, p, h, w) {
      const P = p - B > Math.PI ? 1 : 0;
      return w <= 0 ? `M${S},${S} L${g(S, B, h)} A${h},${h} 0 ${P} 1 ${g(S, p, h)} Z` : [
        `M${g(S, B, h)}`,
        `A${h},${h} 0 ${P} 1 ${g(S, p, h)}`,
        `L${g(S, p, w)}`,
        `A${w},${w} 0 ${P} 0 ${g(S, B, w)}`,
        "Z"
      ].join(" ");
    }
    function k(S) {
      const B = d.value, p = u.value, h = [
        `M${S - B},${S}`,
        `A${B},${B} 0 1 1 ${S + B},${S}`,
        `A${B},${B} 0 1 1 ${S - B},${S}`,
        "Z"
      ];
      return p <= 0 ? h.join(" ") : [
        ...h,
        `M${S - p},${S}`,
        `A${p},${p} 0 1 0 ${S + p},${S}`,
        `A${p},${p} 0 1 0 ${S - p},${S}`,
        "Z"
      ].join(" ");
    }
    const $ = (S) => l.format ? l.format(S) : new Intl.NumberFormat().format(S), M = (S) => `${(S * 100).toFixed(S < 0.01 ? 2 : 0)}%`;
    return (S, B) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", cg, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${$(r.value)}`
      }, [
        (t(!0), n(z, null, j(m.value, (p, h) => (t(), n("path", {
          key: h,
          d: p.path,
          fill: p.colour,
          "fill-opacity": s.value === null || s.value === h ? p.opacity : p.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (w) => s.value = h,
          onMouseleave: B[0] || (B[0] = (w) => s.value = null)
        }, null, 40, mg))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f($(s.value === null ? r.value : m.value[s.value].value)), 9, pg),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : m.value[s.value].label), 9, vg)
        ], 64)) : x("", !0)
      ], 8, fg)),
      o("ul", gg, [
        (t(!0), n(z, null, j(m.value, (p, h) => (t(), n("li", {
          key: h,
          class: A(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === h ? "bg-muted" : ""]),
          onMouseenter: (w) => s.value = h,
          onMouseleave: B[1] || (B[1] = (w) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: p.colour, opacity: p.opacity })
          }, null, 4),
          o("span", bg, f(p.label), 1),
          o("span", yg, f($(p.value)), 1),
          o("span", xg, f(M(p.share)), 1)
        ], 42, hg))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(mt, {
        key: 0,
        label: m.value[s.value].label,
        value: $(m.value[s.value].value),
        share: M(m.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : x("", !0)
    ]));
  }
}), kg = ["width", "height", "viewBox", "aria-label"], $g = { class: "text-border" }, wg = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Cg = { class: "fill-muted-foreground text-[10px]" }, Sg = ["x", "y"], Mg = ["x", "y"], Bg = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], _g = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, EC = /* @__PURE__ */ O({
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
    const u = y(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), c = (G, oe) => oe.color ?? a[G % a.length], v = y(() => u.value.flatMap((G) => G.points)), m = y(() => v.value.some((G) => typeof G.r == "number")), g = { top: 12, right: 16, bottom: 32, left: 48 }, C = y(() => Math.max(10, s.value - g.left - g.right)), k = y(() => Math.max(10, l.height - g.top - g.bottom));
    function $(G) {
      if (G.length === 0)
        return [0, 1];
      const oe = Math.min(...G), ae = Math.max(...G), Z = ae - oe || Math.abs(ae) || 1;
      return [oe - Z * 0.08, ae + Z * 0.08];
    }
    const M = y(() => $(v.value.map((G) => G.x))), S = y(() => $(v.value.map((G) => G.y))), B = (G) => {
      const [oe, ae] = M.value;
      return g.left + (G - oe) / (ae - oe) * C.value;
    }, p = (G) => {
      const [oe, ae] = S.value;
      return g.top + k.value - (G - oe) / (ae - oe) * k.value;
    }, h = y(() => Math.max(...v.value.map((G) => G.r ?? 0), 0));
    function w(G) {
      if (!m.value || !h.value)
        return 4;
      const oe = Math.max(0, G.r ?? 0) / h.value;
      return 3 + Math.sqrt(oe) * (l.maxRadius - 3);
    }
    function P([G, oe]) {
      return Array.from({ length: 5 }, (ae, Z) => G + (oe - G) / 4 * Z);
    }
    const E = y(() => P(M.value)), I = y(() => P(S.value)), te = (G) => l.formatX?.(G) ?? String(Math.round(G * 100) / 100), H = (G) => l.formatY?.(G) ?? String(Math.round(G * 100) / 100), K = y(() => {
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
        "aria-label": m.value ? "Bubble chart" : "Scatter chart"
      }, [
        o("g", $g, [
          (t(!0), n(z, null, j(I.value, (ae, Z) => (t(), n("line", {
            key: `gy-${Z}`,
            x1: g.left,
            x2: g.left + C.value,
            y1: p(ae),
            y2: p(ae),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Z === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, wg))), 128))
        ]),
        o("g", Cg, [
          (t(!0), n(z, null, j(I.value, (ae, Z) => (t(), n("text", {
            key: `ty-${Z}`,
            x: g.left - 8,
            y: p(ae) + 3,
            "text-anchor": "end"
          }, f(H(ae)), 9, Sg))), 128)),
          (t(!0), n(z, null, j(E.value, (ae, Z) => (t(), n("text", {
            key: `tx-${Z}`,
            x: B(ae),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(te(ae)), 9, Mg))), 128))
        ]),
        (t(!0), n(z, null, j(u.value, (ae, Z) => (t(), n("g", {
          key: `s-${Z}`
        }, [
          (t(!0), n(z, null, j(ae.points, (q, _) => (t(), n("circle", {
            key: `p-${Z}-${_}`,
            cx: B(q.x),
            cy: p(q.y),
            r: w(q),
            fill: c(Z, ae),
            "fill-opacity": m.value ? 0.55 : 0.85,
            stroke: c(Z, ae),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== Z || i.value.p !== _) ? 0.35 : 1,
            onMouseenter: (F) => i.value = { s: Z, p: _ },
            onMouseleave: oe[0] || (oe[0] = (F) => i.value = null)
          }, null, 40, Bg))), 128))
        ]))), 128))
      ], 8, kg)),
      K.value ? (t(), T(mt, {
        key: 0,
        label: K.value.point.label ?? K.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(K.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(K.value.point.y)}`,
        share: m.value && K.value.point.r != null ? String(K.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : x("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", _g, [
        (t(!0), n(z, null, j(u.value, (ae, Z) => (t(), n("span", {
          key: `l-${Z}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: se({ backgroundColor: c(Z, ae) }),
            "aria-hidden": "true"
          }, null, 4),
          N(" " + f(ae.name), 1)
        ]))), 128))
      ])) : x("", !0)
    ], 512));
  }
}), Ag = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Pg = ["width", "height", "viewBox"], zg = ["points"], Og = ["x1", "y1", "x2", "y2"], Lg = ["points", "fill", "stroke"], jg = ["cx", "cy", "fill", "onMouseenter"], Vg = ["x", "y", "text-anchor"], Tg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Dg = { class: "truncate" }, FC = /* @__PURE__ */ O({
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
      () => l.series.map((p, h) => ({
        ...p,
        color: p.color ?? a[h % a.length]
      }))
    ), s = y(() => r.value[0]?.points.map((p) => p.label) ?? []), i = y(() => s.value.length), d = y(() => l.height), u = y(() => d.value / 2), c = y(() => d.value / 2 - 34), v = y(() => {
      const p = Math.max(...r.value.flatMap((P) => P.points.map((E) => E.value)), 0);
      if (p <= 0)
        return 1;
      const h = 10 ** Math.floor(Math.log10(p));
      return ([1, 2, 2.5, 5, 10].find((P) => p <= P * h) ?? 10) * h;
    });
    function m(p) {
      return p / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function g(p, h) {
      const w = m(p);
      return {
        x: u.value + Math.cos(w) * c.value * h,
        y: u.value + Math.sin(w) * c.value * h
      };
    }
    function C(p) {
      return Array.from({ length: i.value }, (h, w) => {
        const P = g(w, p);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const k = y(() => [0.25, 0.5, 0.75, 1].map((p) => ({ f: p, points: C(p) }))), $ = y(
      () => r.value.map((p) => {
        const h = p.points.map((w) => Math.max(0, w.value) / v.value);
        return {
          name: p.name,
          color: p.color,
          values: p.points,
          outline: h.map((w, P) => {
            const E = g(P, w);
            return `${E.x.toFixed(2)},${E.y.toFixed(2)}`;
          }).join(" "),
          dots: h.map((w, P) => g(P, w))
        };
      })
    ), M = y(
      () => s.value.map((p, h) => {
        const w = m(h), P = u.value + Math.cos(w) * (c.value + 14), E = u.value + Math.sin(w) * (c.value + 14), I = Math.cos(w);
        return {
          label: p,
          x: P,
          y: E + 3,
          anchor: Math.abs(I) < 0.2 ? "middle" : I > 0 ? "start" : "end"
        };
      })
    ), S = R(null), B = (p) => l.format ? l.format(p) : new Intl.NumberFormat().format(p);
    return (p, h) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", Ag, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, j(k.value, (w) => (t(), n("polygon", {
          key: w.f,
          points: w.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, zg))), 128)),
        (t(!0), n(z, null, j(s.value, (w, P) => (t(), n("line", {
          key: `spoke-${P}`,
          x1: u.value,
          y1: u.value,
          x2: g(P, 1).x,
          y2: g(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Og))), 128)),
        (t(!0), n(z, null, j($.value, (w, P) => (t(), n("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: w.outline,
            fill: w.color,
            "fill-opacity": "0.16",
            stroke: w.color,
            "stroke-width": "2"
          }, null, 8, Lg),
          (t(!0), n(z, null, j(w.dots, (E, I) => (t(), n("circle", {
            key: I,
            cx: E.x,
            cy: E.y,
            r: "3",
            fill: w.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (te) => S.value = {
              series: w.name,
              axis: s.value[I],
              value: w.values[I]?.value ?? 0
            },
            onMouseleave: h[0] || (h[0] = (te) => S.value = null)
          }, null, 40, jg))), 128))
        ]))), 128)),
        (t(!0), n(z, null, j(M.value, (w, P) => (t(), n("text", {
          key: `l-${P}`,
          x: w.x,
          y: w.y,
          "text-anchor": w.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(w.label), 9, Vg))), 128))
      ], 8, Pg)),
      e.showLegend ? (t(), n("ul", Tg, [
        (t(!0), n(z, null, j(r.value, (w, P) => (t(), n("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: w.color })
          }, null, 4),
          o("span", Dg, f(w.name), 1)
        ]))), 128))
      ])) : x("", !0),
      S.value ? (t(), T(mt, {
        key: 1,
        label: `${S.value.series} — ${S.value.axis}`,
        value: B(S.value.value)
      }, null, 8, ["label", "value"])) : x("", !0)
    ]));
  }
}), Ig = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Eg = ["width", "height", "viewBox"], Fg = ["cx", "cy", "r"], Ng = ["d", "fill", "fill-opacity", "onMouseenter"], Rg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Ug = { class: "min-w-0 flex-1 truncate capitalize" }, Hg = { class: "font-medium tabular-nums" }, NC = /* @__PURE__ */ O({
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
      const k = Math.PI * 2 / C;
      return l.data.map(($, M) => {
        const S = Math.sqrt(Math.max(0, $.value) / u.value), B = d.value * S, p = M * k - Math.PI / 2, h = p + k;
        return {
          ...$,
          color: a[M % a.length],
          share: u.value === 0 ? 0 : $.value / u.value,
          path: v(i.value, p, h, B)
        };
      });
    });
    function v(C, k, $, M) {
      if (M <= 0)
        return "";
      if ($ - k >= Math.PI * 2 - 1e-6)
        return `M${C - M},${C} A${M},${M} 0 1 1 ${C + M},${C} A${M},${M} 0 1 1 ${C - M},${C} Z`;
      const S = $ - k > Math.PI ? 1 : 0, B = C + Math.cos(k) * M, p = C + Math.sin(k) * M, h = C + Math.cos($) * M, w = C + Math.sin($) * M;
      return `M${C},${C} L${B.toFixed(2)},${p.toFixed(2)} A${M.toFixed(2)},${M.toFixed(2)} 0 ${S} 1 ${h.toFixed(2)},${w.toFixed(2)} Z`;
    }
    const m = y(() => [0.5, 0.75, 1].map((C) => d.value * C)), g = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, k) => c.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Ig, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, j(m.value, ($) => (t(), n("circle", {
          key: $,
          cx: i.value,
          cy: i.value,
          r: $,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Fg))), 128)),
        (t(!0), n(z, null, j(c.value, ($, M) => (t(), n("path", {
          key: M,
          d: $.path,
          fill: $.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === M ? 0.75 : 0.3,
          onMouseenter: (S) => r.value = M,
          onMouseleave: k[0] || (k[0] = (S) => r.value = null)
        }, null, 40, Ng))), 128))
      ], 8, Eg)),
      e.showLegend ? (t(), n("ul", Rg, [
        (t(!0), n(z, null, j(c.value, ($, M) => (t(), n("li", {
          key: M,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: $.color })
          }, null, 4),
          o("span", Ug, f($.label), 1),
          o("span", Hg, f(g($.value)), 1)
        ]))), 128))
      ])) : x("", !0),
      r.value !== null ? (t(), T(mt, {
        key: 1,
        label: c.value[r.value].label,
        value: g(c.value[r.value].value)
      }, null, 8, ["label", "value"])) : x("", !0)
    ]));
  }
}), Kg = ["width", "height"], qg = ["x1", "x2", "y1", "y2"], Gg = ["x", "y"], Wg = ["x", "y"], Zg = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Jg = ["x", "y", "width", "height", "fill", "fill-opacity"], Yg = ["d", "stroke"], Xg = ["cx", "cy", "fill"], Qg = ["x", "y"], eh = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, th = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, ah = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, nh = { class: "text-xs font-semibold tabular-nums" }, lh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, oh = { class: "text-muted-foreground" }, RC = /* @__PURE__ */ O({
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
      () => l.bars.map((Z, q) => ({
        ...Z,
        color: Z.color ?? d[q % d.length]
      }))
    ), v = y(
      () => l.lines.map((Z, q) => ({
        ...Z,
        color: Z.color ?? u[q % u.length]
      }))
    ), m = y(
      () => c.value[0]?.points.map((Z) => Z.label) ?? v.value[0]?.points.map((Z) => Z.label) ?? []
    ), g = y(() => m.value.length), C = y(() => l.lineAxis === "right"), k = y(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), $ = y(() => ({
      w: Math.max(1, r.value - k.value.left - k.value.right),
      h: Math.max(1, l.height - k.value.top - k.value.bottom)
    }));
    function M(Z) {
      const q = Math.max(...Z, 0);
      if (q <= 0)
        return 1;
      const _ = 10 ** Math.floor(Math.log10(q));
      return ([1, 2, 2.5, 5, 10].find((V) => q <= V * _) ?? 10) * _;
    }
    const S = y(
      () => M([
        ...c.value.flatMap((Z) => Z.points.map((q) => q.value)),
        ...C.value ? [] : v.value.flatMap((Z) => Z.points.map((q) => q.value))
      ])
    ), B = y(
      () => C.value ? M(v.value.flatMap((Z) => Z.points.map((q) => q.value))) : S.value
    ), p = y(() => $.value.w / Math.max(1, g.value)), h = y(() => p.value * 0.6), w = y(() => h.value / Math.max(1, c.value.length));
    function P(Z) {
      return k.value.left + Z * p.value + p.value / 2;
    }
    const E = y(
      () => c.value.flatMap(
        (Z, q) => Z.points.map((_, F) => {
          const V = Math.max(0, _.value) / S.value * $.value.h;
          return {
            x: P(F) - h.value / 2 + q * w.value,
            y: k.value.top + $.value.h - V,
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
    ), I = y(
      () => v.value.map((Z) => {
        const q = Z.points.map((_, F) => ({
          x: P(F),
          y: k.value.top + $.value.h - Math.max(0, _.value) / B.value * $.value.h,
          value: _.value
        }));
        return {
          ...Z,
          pts: q,
          d: q.map((_, F) => `${F === 0 ? "M" : "L"}${_.x.toFixed(2)},${_.y.toFixed(2)}`).join(" ")
        };
      })
    ), te = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((Z) => ({
        y: k.value.top + $.value.h * Z,
        left: S.value * (1 - Z),
        right: B.value * (1 - Z)
      }))
    ), H = y(() => Math.max(1, Math.ceil(g.value / 10)));
    function K(Z) {
      return Z === g.value - 1 || Z % H.value === 0;
    }
    const G = (Z) => l.format ? l.format(Z) : oe(Z);
    function oe(Z) {
      return Math.abs(Z) >= 1e6 ? `${(Z / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(Z) >= 1e3 ? `${(Z / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(Z * 100) / 100);
    }
    const ae = y(() => {
      if (s.value === null)
        return null;
      const Z = s.value;
      return {
        label: m.value[Z],
        rows: [
          ...c.value.map((q) => ({
            name: q.name,
            color: q.color,
            value: q.points[Z]?.value ?? 0
          })),
          ...v.value.map((q) => ({
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
      g.value === 0 ? (t(), n("div", {
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
            x1: k.value.left,
            x2: r.value - k.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, qg))), 128)),
          (t(!0), n(z, null, j(te.value, (_) => (t(), n("text", {
            key: `lt-${_.y}`,
            x: k.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.left)), 9, Gg))), 128)),
          C.value ? (t(!0), n(z, { key: 0 }, j(te.value, (_) => (t(), n("text", {
            key: `rt-${_.y}`,
            x: r.value - k.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.right)), 9, Wg))), 128)) : x("", !0),
          (t(!0), n(z, null, j(m.value, (_, F) => (t(), n("rect", {
            key: `hit-${F}`,
            x: k.value.left + F * p.value,
            y: k.value.top,
            width: p.value,
            height: $.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (V) => s.value = F
          }, null, 40, Zg))), 128)),
          (t(!0), n(z, null, j(E.value, (_, F) => (t(), n("rect", {
            key: `b-${F}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Jg))), 128)),
          (t(!0), n(z, null, j(I.value, (_, F) => (t(), n("g", {
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
            }, null, 8, Yg),
            s.value !== null && _.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Xg)) : x("", !0)
          ]))), 128)),
          (t(!0), n(z, null, j(m.value, (_, F) => pe((t(), n("text", {
            key: `x-${F}`,
            x: P(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(_), 9, Qg)), [
            [He, K(F)]
          ])), 128))
        ], 40, Kg)),
        ae.value ? (t(), n("div", eh, [
          o("p", th, f(ae.value.label), 1),
          (t(!0), n(z, null, j(ae.value.rows, (_, F) => (t(), n("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", ah, f(_.name), 1),
            o("span", nh, f(G(_.value)), 1)
          ]))), 128))
        ])) : x("", !0),
        e.showLegend ? (t(), n("div", lh, [
          (t(!0), n(z, null, j([...c.value, ...v.value], (_, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", oh, f(_.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), sh = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, rh = { class: "text-muted-foreground" }, ih = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, dh = ["width", "height"], uh = ["x", "y"], ch = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], fh = ["x", "y"], mh = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, ph = { class: "text-[11px] font-medium capitalize" }, vh = { class: "text-muted-foreground text-[11px] capitalize" }, gh = { class: "text-sm font-semibold tabular-nums" }, hh = { class: "text-muted-foreground text-xs font-normal" }, UC = /* @__PURE__ */ O({
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
    const d = y(() => l.series[0]?.points.map((h) => h.label) ?? []), u = y(() => l.series.length), c = y(() => d.value.length), v = y(() => Math.min(140, Math.max(60, r.value * 0.16))), m = y(() => Math.max(1, r.value - v.value - 8)), g = y(() => m.value / Math.max(1, c.value)), C = y(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function k(h) {
      if (h === 0)
        return "var(--muted)";
      const w = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(h / w * 100)}%, var(--muted))`;
    }
    function $(h) {
      for (let w = 0; w < l.buckets.length; w++) {
        const P = l.buckets[w].max;
        if (P === void 0 || h < P)
          return w;
      }
      return l.buckets.length - 1;
    }
    const M = y(
      () => l.series.flatMap(
        (h, w) => h.points.map((P, E) => {
          const I = $(P.value);
          return {
            row: w,
            col: E,
            x: v.value + E * g.value,
            y: 4 + w * C.value,
            w: Math.max(1, g.value - 1),
            h: Math.max(1, C.value - 4),
            colour: k(I),
            label: P.label,
            value: P.value,
            rowName: h.name,
            bucketLabel: l.buckets[I].label
          };
        })
      )
    ), S = y(() => g.value < 2), B = y(() => s.value ? M.value.find((h) => h.row === s.value.row && h.col === s.value.col) ?? null : null), p = (h) => l.format ? l.format(h) : new Intl.NumberFormat().format(h);
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
        o("div", sh, [
          (t(!0), n(z, null, j(e.buckets, (P, E) => (t(), n("span", {
            key: E,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: k(E) })
            }, null, 4),
            o("span", rh, f(P.label), 1)
          ]))), 128))
        ]),
        S.value ? (t(), n("p", ih, f(c.value) + " columns - too many to label individually ", 1)) : x("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: w[0] || (w[0] = (P) => s.value = null)
        }, [
          (t(!0), n(z, null, j(e.series, (P, E) => (t(), n("text", {
            key: `r-${E}`,
            x: v.value - 10,
            y: 4 + E * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(P.name), 9, uh))), 128)),
          (t(!0), n(z, null, j(M.value, (P, E) => (t(), n("rect", {
            key: E,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.colour,
            "fill-opacity": s.value === null || s.value.row === P.row && s.value.col === P.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (I) => s.value = { row: P.row, col: P.col }
          }, null, 40, ch))), 128)),
          e.showColumnLabels && !S.value ? (t(!0), n(z, { key: 0 }, j(d.value, (P, E) => (t(), n("text", {
            key: `c-${E}`,
            x: v.value + E * g.value + g.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(P), 9, fh))), 128)) : x("", !0)
        ], 40, dh)),
        B.value ? (t(), n("div", mh, [
          o("p", ph, f(B.value.label), 1),
          o("p", vh, f(B.value.rowName), 1),
          o("p", gh, [
            N(f(p(B.value.value)) + " ", 1),
            o("span", hh, "(" + f(B.value.bucketLabel) + ")", 1)
          ])
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), bh = ["viewBox"], yh = { key: 0 }, xh = ["id"], kh = ["stop-color"], $h = ["stop-color"], wh = ["d", "fill"], Ch = ["d", "stroke"], ba = 100, lt = 30, St = /* @__PURE__ */ O({
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
      const c = Math.min(...u), m = Math.max(...u) - c || 1;
      return u.map((g, C) => ({
        x: C / (u.length - 1) * ba,
        y: lt - (g - c) / m * (lt - 4) - 2
      }));
    });
    function s(u) {
      const c = u.length;
      if (c < 2)
        return "";
      const v = [], m = [];
      for (let k = 0; k < c - 1; k++)
        v[k] = u[k + 1].x - u[k].x, m[k] = v[k] === 0 ? 0 : (u[k + 1].y - u[k].y) / v[k];
      const g = [m[0]];
      for (let k = 1; k < c - 1; k++)
        if (m[k - 1] * m[k] <= 0)
          g[k] = 0;
        else {
          const $ = 2 * v[k] + v[k - 1], M = v[k] + 2 * v[k - 1];
          g[k] = ($ + M) / ($ / m[k - 1] + M / m[k]);
        }
      g[c - 1] = m[c - 2];
      let C = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let k = 0; k < c - 1; k++) {
        const $ = v[k] / 3;
        C += ` C${(u[k].x + $).toFixed(2)},${(u[k].y + g[k] * $).toFixed(2)} ${(u[k + 1].x - $).toFixed(2)},${(u[k + 1].y - g[k + 1] * $).toFixed(2)} ${u[k + 1].x.toFixed(2)},${u[k + 1].y.toFixed(2)}`;
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
      e.filled ? (t(), n("defs", yh, [
        o("linearGradient", {
          id: `pk-spark-${b(a)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, kh),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, $h)
        ], 8, xh)
      ])) : x("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${b(a)})`
      }, null, 8, wh)) : x("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Ch)
    ], 12, bh)) : x("", !0);
  }
}), Sh = { class: "flex items-center gap-1 text-xs" }, Mh = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Bh = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Za = /* @__PURE__ */ O({
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
    return (d, u) => (t(), n("span", Sh, [
      o("span", {
        class: A(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Mh, f(s.value), 1),
        N(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", Bh, f(e.comparison), 1)) : x("", !0)
    ]));
  }
}), _h = ["data-collapsed"], Ah = { class: "flex flex-wrap items-start justify-between gap-2" }, Ph = { class: "flex min-w-0 items-start gap-2" }, zh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Oh = ["d"], Lh = { class: "min-w-0" }, jh = { class: "text-sm font-medium" }, Vh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Th = { class: "flex shrink-0 items-center gap-1.5" }, Dh = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Ih = ["aria-pressed", "onClick"], Eh = ["aria-expanded", "aria-label", "title"], Fh = ["aria-label"], Nh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rh = ["d"], Uh = /* @__PURE__ */ O({
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
      class: A(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Ah, [
        o("div", Ph, [
          U(d.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", zh, [
              o("path", {
                d: b(ce)(e.icon)
              }, null, 8, Oh)
            ])) : x("", !0)
          ]),
          o("div", Lh, [
            o("p", jh, f(e.label), 1),
            e.description ? (t(), n("p", Vh, f(e.description), 1)) : x("", !0),
            U(d.$slots, "trend")
          ])
        ]),
        o("div", Th, [
          U(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Dh, [
            (t(!0), n(z, null, j(e.periods, (c) => (t(), n("button", {
              key: c.value,
              type: "button",
              class: A([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === c.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === c.value,
              onClick: (v) => d.$emit("update:period", c.value)
            }, f(c.label), 11, Ih))), 128))
          ])) : x("", !0),
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
          ], 8, Eh)) : x("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (c) => d.$emit("hide"))
          }, [
            (t(), n("svg", Nh, [
              o("path", {
                d: b(ce)("eye-off")
              }, null, 8, Rh)
            ]))
          ], 8, Fh)) : x("", !0)
        ])
      ]),
      r.value ? x("", !0) : (t(), n("div", {
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
    ], 10, _h));
  }
}), Hh = ["aria-pressed", "aria-label", "title"], Kh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qh = ["d"], Gh = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Wh = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Zh = ["href"], Jh = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yh = ["d"], Xh = ["aria-label", "onClick"], Qh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, e1 = ["d"], t1 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, a1 = ["d"], n1 = {
  key: 0,
  class: "flex flex-col gap-1"
}, l1 = ["onClick"], o1 = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, s1 = ["d"], r1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, i1 = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!1), i = R(!1), d = y(
      () => a.catalog.filter((v) => !a.items.some((m) => m.id === v.id))
    );
    function u(v) {
      r(
        "update:items",
        a.items.filter((m) => m.id !== v)
      );
    }
    function c(v) {
      r("update:items", [...a.items, v]), i.value = !1;
    }
    return (v, m) => (t(), n(z, null, [
      D(Uh, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: m[3] || (m[3] = (g) => r("hide"))
      }, {
        actions: L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: m[0] || (m[0] = (g) => s.value = !s.value)
          }, [
            (t(), n("svg", Kh, [
              o("path", {
                d: b(ce)(s.value ? "check" : "pencil")
              }, null, 8, qh)
            ]))
          ], 8, Hh)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), n("div", Gh, [
            m[7] || (m[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            D(ue, {
              size: "sm",
              variant: "outline",
              onClick: m[1] || (m[1] = (g) => i.value = !0)
            }, {
              default: L(() => [...m[6] || (m[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", Wh, [
            (t(!0), n(z, null, j(e.items, (g) => (t(), n("div", {
              key: g.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: g.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Jh, [
                  o("path", {
                    d: b(ce)(g.icon)
                  }, null, 8, Yh)
                ])),
                N(" " + f(g.label), 1)
              ], 8, Zh),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${g.label}`,
                onClick: (C) => u(g.id)
              }, [
                (t(), n("svg", Qh, [
                  o("path", {
                    d: b(ce)("x")
                  }, null, 8, e1)
                ]))
              ], 8, Xh)) : x("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: m[2] || (m[2] = (g) => i.value = !0)
            }, [
              (t(), n("svg", t1, [
                o("path", {
                  d: b(ce)("plus")
                }, null, 8, a1)
              ])),
              m[8] || (m[8] = N(" Add ", -1))
            ])) : x("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      D(dt, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: m[5] || (m[5] = (g) => i.value = !1)
      }, {
        footer: L(() => [
          D(ue, {
            variant: "outline",
            onClick: m[4] || (m[4] = (g) => i.value = !1)
          }, {
            default: L(() => [...m[9] || (m[9] = [
              N("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          d.value.length ? (t(), n("ul", n1, [
            (t(!0), n(z, null, j(d.value, (g) => (t(), n("li", {
              key: g.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => c(g)
              }, [
                (t(), n("svg", o1, [
                  o("path", {
                    d: b(ce)(g.icon)
                  }, null, 8, s1)
                ])),
                N(" " + f(g.label), 1)
              ], 8, l1)
            ]))), 128))
          ])) : (t(), n("p", r1, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), d1 = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, u1 = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, c1 = { class: "relative w-full max-w-xl" }, f1 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, m1 = ["d"], p1 = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, v1 = ["data-slot"], g1 = { class: "px-5 py-4" }, h1 = { class: "mb-3 text-sm font-semibold" }, b1 = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, y1 = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, x1 = ["d"], k1 = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, HC = /* @__PURE__ */ O({
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
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ge)])
    }, [
      o("header", null, [
        o("h1", d1, f(e.title), 1),
        e.description ? (t(), n("p", u1, f(e.description), 1)) : x("", !0)
      ]),
      o("div", c1, [
        (t(), n("svg", f1, [
          o("path", {
            d: b(ce)("search")
          }, null, 8, m1)
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
      d.value.length ? (t(), n("div", p1, [
        (t(!0), n(z, null, j(d.value, (v) => (t(), n("section", {
          key: v.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${v.key}`
        }, [
          o("div", g1, [
            o("h2", h1, f(v.title), 1),
            o("div", b1, [
              (t(!0), n(z, null, j(v.links, (m) => (t(), T(_e(i(m) ? "a" : r.value), {
                key: m.href + m.label,
                href: m.href,
                class: A(b(s)),
                target: i(m) ? "_blank" : void 0,
                rel: i(m) ? "noopener noreferrer" : void 0
              }, {
                default: L(() => [
                  (t(), n("svg", y1, [
                    o("path", {
                      d: b(ce)(m.icon)
                    }, null, 8, x1)
                  ])),
                  N(" " + f(m.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, v1))), 128))
      ])) : (t(), n("p", k1, ' Nothing matches "' + f(a.value) + '". ', 1))
    ], 2));
  }
}), $1 = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, w1 = { class: "flex flex-1 flex-col gap-1 p-4" }, C1 = { class: "text-muted-foreground relative text-xs font-medium" }, S1 = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, M1 = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, B1 = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, _1 = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, KC = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", $1, [
      o("div", w1, [
        o("p", C1, f(e.label), 1),
        e.loading ? (t(), T(ze, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", S1, " Could not load ")) : (t(), n("span", M1, f(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Za, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", B1, f(e.description), 1)) : x("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", _1, [
        D(St, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : x("", !0)
    ]));
  }
}), A1 = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, P1 = { class: "flex flex-col gap-1 p-4" }, z1 = { class: "flex items-start justify-between gap-2" }, O1 = { class: "text-sm font-medium" }, L1 = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, j1 = { class: "mt-1 flex flex-wrap items-center gap-2" }, V1 = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, T1 = {
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
    return (i, d) => (t(), n("div", A1, [
      o("div", P1, [
        o("div", z1, [
          o("p", O1, f(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", L1, f(e.caption), 1)) : x("", !0),
        o("div", j1, [
          e.loading ? (t(), T(ze, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", V1, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: A(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : x("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", T1, [
        D(St, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : x("", !0)
    ]));
  }
}), D1 = { class: "relative flex flex-col gap-2" }, I1 = ["aria-label"], E1 = ["onMouseenter"], F1 = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, N1 = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, R1 = { class: "truncate" }, U1 = { class: "text-sm font-semibold tabular-nums" }, qC = /* @__PURE__ */ O({
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
    ], r = y(() => l.segments.reduce((v, m) => v + Math.max(0, m.value), 0)), s = y(() => Math.max(l.total ?? r.value, r.value, 1)), i = y(
      () => l.segments.map((v, m) => {
        const g = Math.max(0, v.value) / s.value;
        return {
          ...v,
          color: v.color ?? a[m % a.length],
          share: g,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: v.value > 0 ? `max(2px, ${(g * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), u = R(null), c = (v) => `${(v * 100).toFixed(v > 0 && v < 0.01 ? 1 : 0)}%`;
    return (v, m) => (t(), n("div", D1, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((g) => `${g.label} ${d(g.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, j(i.value, (g, C) => (t(), n("span", {
          key: C,
          class: A(["h-full transition-all", [
            C === 0 ? "rounded-l-full" : "",
            C === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: se({
            width: g.width,
            background: g.color,
            opacity: u.value === null || u.value === C ? 1 : 0.4
          }),
          onMouseenter: (k) => u.value = C,
          onMouseleave: m[0] || (m[0] = (k) => u.value = null)
        }, null, 46, E1))), 128))
      ], 12, I1),
      e.showLegend ? (t(), n("div", F1, [
        (t(!0), n(z, null, j(i.value, (g, C) => (t(), n("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", N1, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: g.color })
            }, null, 4),
            o("span", R1, f(g.label), 1)
          ]),
          o("span", U1, f(d(g.value)), 1)
        ]))), 128))
      ])) : x("", !0),
      u.value !== null ? (t(), T(mt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: c(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : x("", !0)
    ]));
  }
}), H1 = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, K1 = ["data-heading"], q1 = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, G1 = { class: "text-muted-foreground truncate" }, W1 = ["aria-label"], GC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", H1, [
      (t(!0), n(z, null, j(s.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: A(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), n("div", q1, [
          o("span", G1, f(u.label), 1),
          o("span", {
            class: A(["shrink-0 font-medium tabular-nums", u.tone ? a[u.tone] : "text-foreground"])
          }, f(u.value), 3)
        ])),
        u.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((c) => `${c.label} ${c.value}`).join(", ")
        }, [
          (t(!0), n(z, null, j(u.segments, (c, v) => (t(), n("span", {
            key: v,
            class: A(["h-full transition-all", r[c.tone ?? "neutral"]]),
            style: se({ width: c.width })
          }, null, 6))), 128))
        ], 8, W1)) : x("", !0)
      ], 8, K1))), 128))
    ]));
  }
}), Z1 = {
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
}, J1 = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Y1(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function X1(e, l) {
  return l || (e ? Z1[Y1(e)] ?? "neutral" : "neutral");
}
function Q1(e, l) {
  return J1[X1(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = y(() => Q1(l.status, l.tone));
    return (r, s) => (t(), T(qe, {
      variant: a.value,
      class: A(l.class)
    }, {
      default: L(() => [
        U(r.$slots, "default", {}, () => [
          N(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), eb = ["data-layout"], tb = ["src", "alt"], ab = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, nb = ["src"], lb = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, ob = ["onMouseenter"], sb = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, rb = { class: "min-w-0" }, ib = { class: "truncate text-sm font-medium" }, db = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, ub = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, cb = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, fb = { class: "min-w-0" }, mb = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, pb = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, vb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gb = ["d"], hb = ["aria-label"], bb = /* @__PURE__ */ O({
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
    ), m = y(() => {
      const M = r.item.progress;
      if (!M)
        return null;
      const S = Math.max(M.total ?? 100, M.value, 1);
      return `${Math.min(100, Math.max(0, M.value / S * 100)).toFixed(2)}%`;
    }), g = y(() => u.value.length > 1 ? u.value[1] : null), C = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), k = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function $(M) {
      M.stopPropagation(), s("cart", r.item.key);
    }
    return (M, S) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: A(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: S[0] || (S[0] = (B) => s("select", e.item.key)),
      onKeydown: S[1] || (S[1] = rn(he((B) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: S[2] || (S[2] = (B) => i.value = 0)
    }, [
      o("div", {
        class: A([
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
        }, null, 8, tb)) : (t(), n("span", ab, f(v.value), 1)),
        e.layout === "grid" && g.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: g.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, nb)) : x("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", lb, [
          (t(!0), n(z, null, j(u.value, (B, p) => (t(), n("span", {
            key: p,
            class: A(["size-1.5 rounded-full", p === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (h) => i.value = p
          }, null, 42, ob))), 128))
        ])) : x("", !0)
      ], 2),
      o("div", {
        class: A(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", sb, [
          o("div", rb, [
            o("p", ib, f(e.item.label), 1),
            e.item.caption ? (t(), n("p", db, f(e.item.caption), 1)) : x("", !0),
            e.item.facts?.length ? (t(), n("p", ub, f(e.item.facts.join(" · ")), 1)) : x("", !0)
          ]),
          e.item.status ? (t(), T(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : x("", !0)
        ]),
        o("div", cb, [
          o("div", fb, [
            e.item.price ? (t(), n("p", mb, f(e.item.price), 1)) : x("", !0),
            k.value ? (t(), n("p", pb, f(k.value), 1)) : x("", !0)
          ]),
          C.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: $
          }, [
            (t(), n("svg", vb, [
              o("path", {
                d: b(ce)("cart")
              }, null, 8, gb)
            ]))
          ])) : x("", !0)
        ]),
        m.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: A(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: m.value })
          }, null, 6)
        ], 8, hb)) : x("", !0)
      ], 2)
    ], 42, eb));
  }
});
function yb(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function xb(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function kb(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const $b = ["data-featured", "data-recommended"], wb = { class: "flex flex-col gap-1" }, Cb = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Sb = { key: 0 }, Mb = { key: 1 }, Bb = { key: 2 }, _b = { key: 3 }, Ab = { class: "text-sm font-semibold" }, Pb = { class: "flex items-baseline gap-1" }, zb = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Ob = { class: "text-muted-foreground text-sm font-normal" }, Lb = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, jb = { class: "text-muted-foreground mt-1 text-xs" }, Vb = { class: "flex flex-1 flex-col gap-2 text-sm" }, Tb = { class: "flex min-w-0 items-start gap-2" }, Db = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ib = ["d"], Eb = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Fb = ["d"], Nb = { class: "capitalize" }, Rb = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Ub = { class: "text-foreground font-medium" }, Hb = { class: "mt-auto flex gap-2 pt-2" }, Kb = /* @__PURE__ */ O({
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
      return Object.entries(c).map(([v, m]) => ({
        key: v,
        label: v.replace(/_/g, " "),
        granted: kb(m.value),
        display: xb(m.value)
      }));
    }), u = y(() => a.plan.extraPerks ?? []);
    return (c, v) => (t(), n("article", {
      class: A(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", wb, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", Cb, [
          e.plan.recommended ? (t(), n("span", Sb, "Recommended")) : e.plan.featured ? (t(), n("span", Mb, "Featured")) : x("", !0),
          e.plan.trial ? (t(), n("span", Bb, "Trial")) : x("", !0),
          e.plan.active === !1 ? (t(), n("span", _b, "Inactive")) : x("", !0)
        ])) : x("", !0),
        o("h3", Ab, f(e.plan.name), 1),
        o("p", Pb, [
          o("span", zb, f(s.value), 1),
          o("span", Ob, f(b(yb)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", Lb, f(e.plan.shortDescription), 1)) : x("", !0),
        o("p", jb, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", Vb, [
        (t(!0), n(z, null, j(d.value, (m) => (t(), n("li", {
          key: m.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", Tb, [
            o("span", {
              class: A(["mt-0.5 shrink-0", m.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              m.granted ? (t(), n("svg", Db, [
                o("path", {
                  d: b(ce)("check")
                }, null, 8, Ib)
              ])) : (t(), n("svg", Eb, [
                o("path", {
                  d: b(ce)("x")
                }, null, 8, Fb)
              ]))
            ], 2),
            o("span", Nb, f(m.label), 1)
          ]),
          m.display ? (t(), n("span", Rb, f(m.display), 1)) : x("", !0)
        ]))), 128)),
        (t(!0), n(z, null, j(u.value, (m, g) => (t(), n("li", {
          key: `extra-${g}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, f(m.key), 1),
          o("span", Ub, f(m.value), 1)
        ]))), 128))
      ]),
      o("footer", Hb, [
        D(ue, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: v[0] || (v[0] = (m) => r("edit", e.plan.id))
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
          onClick: v[1] || (v[1] = (m) => r("delete", e.plan.id))
        }, {
          default: L(() => [...v[3] || (v[3] = [
            N(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, $b));
  }
}), qb = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Gb = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Wb = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Zb = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Jb = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, WC = /* @__PURE__ */ O({
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
      class: A(["w-full space-y-6", e.embedded ? "" : b(Ge)]),
      "data-slot": "plan-grid"
    }, [
      o("header", qb, [
        o("div", null, [
          e.title ? (t(), n("h1", Gb, f(e.title), 1)) : x("", !0),
          e.description ? (t(), n("p", Wb, f(e.description), 1)) : x("", !0)
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
      e.plans.length === 0 ? (t(), n("p", Zb, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", Jb, [
        (t(!0), n(z, null, j(e.plans, (i) => (t(), T(Kb, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => a("edit", d)),
          onDelete: s[2] || (s[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), Yb = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Xb = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Qb = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, ey = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, ty = { class: "space-y-1.5" }, ay = { class: "space-y-1.5" }, ny = { class: "space-y-1.5" }, ly = { class: "space-y-1.5" }, oy = { class: "space-y-1.5" }, sy = { class: "flex items-center gap-3 text-sm" }, ry = { class: "flex items-center gap-3 text-sm" }, iy = { class: "flex items-center gap-3 text-sm" }, dy = {
  key: 0,
  class: "space-y-1.5"
}, uy = { class: "flex items-center gap-3 text-sm" }, cy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, fy = { class: "space-y-1.5" }, my = ["value"], py = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, vy = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, gy = ["id", "value", "onInput"], hy = { class: "space-y-2" }, by = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, yy = ["d"], ZC = /* @__PURE__ */ O({
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
    function d(p, h) {
      const w = i.perks?.[p]?.value;
      return w ?? h;
    }
    function u(p, h, w) {
      const P = i.perks?.[p];
      i.perks = {
        ...i.perks ?? {},
        [p]: {
          value: h,
          overview: w ?? P?.overview ?? ""
        }
      };
    }
    function c(p, h) {
      const w = i.perks?.[p];
      i.perks = {
        ...i.perks ?? {},
        [p]: {
          value: w?.value ?? (p === "modules" ? [] : 0),
          overview: h
        }
      };
    }
    function v(p) {
      const h = p ? { ...a(), ...p } : a();
      i.id = h.id, i.name = h.name, i.shortDescription = h.shortDescription ?? "", i.description = h.description ?? "", i.days = h.days, i.price = h.price, i.featured = h.featured ?? !1, i.recommended = h.recommended ?? !1, i.trial = h.trial ?? !1, i.trialDays = h.trialDays ?? 0, i.active = h.active ?? !0, i.perks = { ...h.perks ?? {} }, i.extraPerks = [...h.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    v(r.plan), me(
      () => r.plan,
      (p) => v(p),
      { deep: !0 }
    );
    const m = y({
      get: () => {
        const p = d("modules", []);
        return Array.isArray(p) ? p.map(String) : [];
      },
      set: (p) => {
        u("modules", C(p.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), g = y(
      () => r.modules.map((p) => ({ value: p.key, label: p.label }))
    );
    function C(p) {
      const h = Object.fromEntries(r.modules.map((E) => [E.key, E])), w = new Set(p);
      for (const E of r.modules)
        if (!w.has(E.key))
          for (const I of E.children ?? [])
            w.delete(I);
      let P = !0;
      for (; P; ) {
        P = !1;
        for (const E of [...w])
          for (const I of h[E]?.requires ?? [])
            w.has(I) || (w.add(I), P = !0);
      }
      return [...w];
    }
    function k() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function $(p) {
      i.extraPerks = (i.extraPerks ?? []).filter((h, w) => w !== p);
    }
    function M() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((p) => p.key.trim() !== "")
      });
    }
    const S = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`, B = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`;
    return (p, h) => (t(), n("form", {
      class: A(["w-full space-y-6", e.embedded ? "" : b(Ge)]),
      "data-slot": "plan-editor",
      onSubmit: he(M, ["prevent"])
    }, [
      o("header", Yb, [
        o("div", null, [
          o("h1", Xb, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
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
      o("div", Qb, [
        o("section", ey, [
          h[26] || (h[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", ty, [
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
          o("div", ay, [
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
          o("div", ny, [
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
              class: A(B)
            }, null, 512), [
              [Ae, i.description]
            ])
          ]),
          o("div", ly, [
            D(Pe, { for: "plan-days" }, {
              default: L(() => [...h[18] || (h[18] = [
                N("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": h[4] || (h[4] = (w) => i.days = w),
              class: A(S)
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
          o("div", oy, [
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
          o("label", sy, [
            D(b(Ze), {
              checked: !!i.featured,
              "onUpdate:checked": h[6] || (h[6] = (w) => i.featured = w)
            }, null, 8, ["checked"]),
            h[21] || (h[21] = N(" Featured ", -1))
          ]),
          o("label", ry, [
            D(b(Ze), {
              checked: !!i.recommended,
              "onUpdate:checked": h[7] || (h[7] = (w) => i.recommended = w)
            }, null, 8, ["checked"]),
            h[22] || (h[22] = N(" Recommended ", -1))
          ]),
          o("label", iy, [
            D(b(Ze), {
              checked: !!i.trial,
              "onUpdate:checked": h[8] || (h[8] = (w) => i.trial = w)
            }, null, 8, ["checked"]),
            h[23] || (h[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", dy, [
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
          ])) : x("", !0),
          o("label", uy, [
            D(b(Ze), {
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
        o("section", cy, [
          h[33] || (h[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", fy, [
            D(Pe, null, {
              default: L(() => [...h[27] || (h[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Wt, {
              modelValue: m.value,
              "onUpdate:modelValue": h[11] || (h[11] = (w) => m.value = w),
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
              class: A(B),
              onInput: h[12] || (h[12] = (w) => c(
                "modules",
                w.target.value
              ))
            }, null, 40, my)
          ]),
          (t(!0), n(z, null, j(e.limits, (w) => (t(), n("div", {
            key: w.key,
            class: "space-y-1.5"
          }, [
            w.kind === "toggle" ? (t(), n("label", py, [
              D(b(Ze), {
                checked: !!d(w.key, !1),
                "onUpdate:checked": (P) => u(
                  w.key,
                  P,
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
              w.hint ? (t(), n("p", vy, f(w.hint), 1)) : x("", !0),
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
              class: A(B),
              onInput: (P) => c(
                w.key,
                P.target.value
              )
            }, null, 40, gy)
          ]))), 128)),
          o("div", hy, [
            h[32] || (h[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, j(i.extraPerks ?? [], (w, P) => (t(), n("div", {
              key: P,
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
                onClick: (E) => $(P)
              }, {
                default: L(() => [
                  (t(), n("svg", by, [
                    o("path", {
                      d: b(ce)("x")
                    }, null, 8, yy)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            D(ue, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: k
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
}), xy = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, ky = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, $y = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, wy = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Cy = ["d"], Sy = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, My = ["aria-pressed"], By = ["aria-pressed"], _y = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ay = ["aria-label"], Py = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, zy = ["aria-pressed", "onClick"], Oy = ["aria-label"], Ly = { class: "text-muted-foreground mr-1 text-xs font-medium" }, jy = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Vy = ["data-slot"], Ty = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Dy = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Iy = { class: "flex items-center gap-2" }, Ey = ["disabled"], Fy = ["disabled"], ta = /* @__PURE__ */ O({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Ee({
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
  emits: /* @__PURE__ */ Ee(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = ut(e, "modelValue"), d = it({}), u = it({});
    me(s, () => g());
    function c(I) {
      const te = I.trim();
      if (te === "")
        return null;
      const H = Number(te);
      return Number.isFinite(H) ? H : null;
    }
    function v() {
      const I = {};
      for (const [te, H] of Object.entries(u))
        I[te] = { min: c(H.min), max: c(H.max) };
      return I;
    }
    function m() {
      return { query: s.value, selected: { ...d }, ranges: v() };
    }
    function g() {
      r("filter", m());
    }
    function C(I, te) {
      d[I] = d[I] === te ? null : te, g();
    }
    function k(I) {
      return u[I] ?? { min: "", max: "" };
    }
    function $(I, te, H) {
      const K = u[I] ?? { min: "", max: "" };
      u[I] = { ...K, [te]: H }, g();
    }
    function M(I) {
      I.key === "Enter" && (I.preventDefault(), r("scan", s.value.trim()));
    }
    const S = y(() => a.facets.filter((I) => (I.kind ?? "chips") === "chips")), B = y(() => a.facets.filter((I) => I.kind === "range")), p = y(
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
    }), P = y(() => {
      const I = a.pageSize;
      if (!I || I < 1)
        return a.items;
      const te = (h.value - 1) * I;
      return a.items.slice(te, te + I);
    });
    function E(I) {
      h.value = Math.min(w.value, Math.max(1, I));
    }
    return (I, te) => (t(), n("div", {
      class: A(["flex flex-col gap-4", b(Ua)])
    }, [
      p.value ? (t(), n("div", xy, [
        o("div", ky, [
          e.searchable ? (t(), n("div", $y, [
            (t(), n("svg", wy, [
              o("path", {
                d: b(ce)("search")
              }, null, 8, Cy)
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
          ])) : x("", !0),
          U(I.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", Sy, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, My),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (H) => i.value = "list")
            }, " List ", 10, By)
          ])) : x("", !0)
        ]),
        S.value.length || B.value.length ? (t(), n("div", _y, [
          (t(!0), n(z, null, j(S.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", Py, f(H.label), 1)) : x("", !0),
            (t(!0), n(z, null, j(H.options ?? [], (K) => (t(), n("button", {
              key: K.value,
              type: "button",
              class: A([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === K.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === K.value ? "true" : "false",
              onClick: (G) => C(H.key, K.value)
            }, f(K.label), 11, zy))), 128))
          ], 8, Ay))), 128)),
          (t(!0), n(z, null, j(B.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Ly, f(H.label ?? H.key), 1),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": k(H.key).min,
              "onUpdate:modelValue": (K) => $(H.key, "min", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            te[7] || (te[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": k(H.key).max,
              "onUpdate:modelValue": (K) => $(H.key, "max", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Oy))), 128))
        ])) : x("", !0)
      ])) : x("", !0),
      e.items.length === 0 ? (t(), n("p", jy, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: A(
          i.value === "list" ? "flex flex-col gap-3" : b(Zc)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, j(P.value, (H) => (t(), T(bb, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: te[3] || (te[3] = (K) => r("select", K)),
          onCart: te[4] || (te[4] = (K) => r("cart", K))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Vy)),
      e.pageSize && w.value > 1 ? (t(), n("div", Ty, [
        o("p", Dy, " Page " + f(h.value) + " of " + f(w.value), 1),
        o("div", Iy, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value <= 1,
            onClick: te[5] || (te[5] = (H) => E(h.value - 1))
          }, " Previous ", 8, Ey),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value >= w.value,
            onClick: te[6] || (te[6] = (H) => E(h.value + 1))
          }, " Next ", 8, Fy)
        ])
      ])) : x("", !0)
    ], 2));
  }
}), Ny = ["aria-label"], Ry = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Uy = { class: "min-w-0" }, Hy = { class: "text-base font-semibold" }, Ky = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, qy = { class: "flex shrink-0 items-center gap-2" }, Gy = { class: "min-h-0 flex-1 overflow-y-auto" }, Wy = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, aa = /* @__PURE__ */ O({
  __name: "PkSlideover",
  props: {
    open: { type: Boolean },
    title: {},
    description: { default: null },
    side: { default: "right" },
    width: { default: "w-96" }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(null);
    let i = null, d = "";
    function u(c) {
      if (!a.open)
        return;
      if (c.key === "Escape") {
        c.stopPropagation(), r("close");
        return;
      }
      if (c.key !== "Tab" || !s.value)
        return;
      const v = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (v.length === 0)
        return;
      const m = v[0], g = v[v.length - 1];
      c.shiftKey && document.activeElement === m ? (c.preventDefault(), g.focus()) : !c.shiftKey && document.activeElement === g && (c.preventDefault(), m.focus());
    }
    return me(
      () => a.open,
      async (c) => {
        if (c) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", u), await Te(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", u), i?.focus?.();
      }
    ), ke(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = d;
    }), (c, v) => (t(), T(Qe, { to: "body" }, [
      D(Ue, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: v[0] || (v[0] = (m) => r("close"))
          })) : x("", !0)
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
            class: A(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", Ry, [
              o("div", Uy, [
                o("h2", Hy, f(e.title), 1),
                e.description ? (t(), n("p", Ky, f(e.description), 1)) : x("", !0)
              ]),
              o("div", qy, [
                U(c.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: v[1] || (v[1] = (m) => r("close"))
                }, [...v[2] || (v[2] = [
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
            o("div", Gy, [
              U(c.$slots, "default")
            ]),
            c.$slots.footer ? (t(), n("footer", Wy, [
              U(c.$slots, "footer")
            ])) : x("", !0)
          ], 10, Ny)) : x("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Ie() {
  return { query: "", selected: {}, ranges: {} };
}
function Zy(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Jy(e, l) {
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
    if (!Jy(Zy(e, r), s))
      return !1;
  return !0;
}
function Yy(e, l) {
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
const Xy = { class: "flex flex-col gap-6 p-4" }, Qy = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, ex = { class: "text-sm font-semibold" }, tx = { class: "flex flex-wrap items-center gap-1.5" }, ax = ["aria-pressed", "onClick"], nx = { class: "text-sm font-semibold" }, lx = { class: "flex flex-wrap items-center gap-1.5" }, ox = { key: 0 }, Ja = /* @__PURE__ */ O({
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
    function m() {
      s.value = a.applied.query ?? "";
      for (const w of Object.keys(i))
        delete i[w];
      for (const [w, P] of Object.entries(a.applied.selected ?? {}))
        i[w] = P;
      for (const w of Object.keys(d))
        delete d[w];
      for (const [w, P] of Object.entries(a.applied.ranges ?? {}))
        d[w] = { min: v(P.min), max: v(P.max) };
    }
    me(
      () => a.open,
      (w) => {
        w && m();
      }
    );
    function g(w) {
      const P = w.trim();
      if (P === "")
        return null;
      const E = Number(P);
      return Number.isFinite(E) ? E : null;
    }
    function C() {
      const w = {};
      for (const [P, E] of Object.entries(d))
        w[P] = { min: g(E.min), max: g(E.max) };
      return w;
    }
    function k() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const $ = y(() => {
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
    function B(w, P, E) {
      const I = d[w] ?? { min: "", max: "" };
      d[w] = { ...I, [P]: E };
    }
    function p() {
      r("apply", k());
    }
    function h() {
      s.value = "";
      for (const w of Object.keys(i))
        i[w] = null;
      for (const w of Object.keys(d))
        d[w] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Ie(), query: a.applied.query } : Ie()
      );
    }
    return (w, P) => (t(), T(aa, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (E) => r("close"))
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
          onClick: P[1] || (P[1] = (E) => r("close"))
        }, {
          default: L(() => [...P[5] || (P[5] = [
            N("Cancel", -1)
          ])]),
          _: 1
        }),
        D(ue, {
          size: "sm",
          onClick: p
        }, {
          default: L(() => [
            P[6] || (P[6] = N(" Apply", -1)),
            $.value ? (t(), n("span", ox, " (" + f($.value) + ")", 1)) : x("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        o("div", Xy, [
          e.hideSearch ? x("", !0) : (t(), n("label", Qy, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            D($e, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (E) => s.value = E),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, j(u.value, (E) => (t(), n("section", {
            key: E.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", ex, f(E.label ?? E.key), 1),
            o("div", tx, [
              (t(!0), n(z, null, j(E.options ?? [], (I) => (t(), n("button", {
                key: I.value,
                type: "button",
                class: A([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[E.key] === I.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[E.key] === I.value ? "true" : "false",
                onClick: (te) => M(E.key, I.value)
              }, f(I.label), 11, ax))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, j(c.value, (E) => (t(), n("section", {
            key: E.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", nx, f(E.label ?? E.key), 1),
            o("div", lx, [
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${E.label ?? E.key} from`,
                "model-value": S(E.key).min,
                "onUpdate:modelValue": (I) => B(E.key, "min", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              P[4] || (P[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
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
}), sx = ["aria-disabled"], rx = ["disabled"], ix = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, dx = ["d"], ux = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, cx = ["disabled"], fx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, mx = ["d"], px = /* @__PURE__ */ O({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ Ee({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ee(["decrease", "increase"], ["update:modelValue"]),
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
        (t(), n("svg", ix, [
          o("path", {
            d: b(ce)("minus")
          }, null, 8, dx)
        ]))
      ], 8, rx),
      o("span", ux, f(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: c[1] || (c[1] = (v) => d(1))
      }, [
        (t(), n("svg", fx, [
          o("path", {
            d: b(ce)("plus")
          }, null, 8, mx)
        ]))
      ], 8, cx)
    ], 8, sx));
  }
}), vx = { class: "divide-border flex flex-col divide-y" }, gx = { class: "min-w-0" }, hx = { class: "truncate text-sm font-medium" }, bx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, yx = { class: "flex shrink-0 items-center gap-2 text-sm" }, xx = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, kx = {
  key: 2,
  class: "font-medium tabular-nums"
}, $x = ["aria-label", "onClick"], wx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Cx = ["d"], Sx = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", vx, [
      (t(!0), n(z, null, j(e.items, (d) => (t(), n("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", gx, [
          o("p", hx, f(d.label), 1),
          d.detail ? (t(), n("p", bx, f(d.detail), 1)) : x("", !0)
        ]),
        o("div", yx, [
          e.editable ? (t(), T(px, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", xx, " ×" + f(d.qty), 1)) : x("", !0),
          d.amount ? (t(), n("span", kx, f(d.amount), 1)) : x("", !0),
          d.status ? (t(), T(we, {
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
            (t(), n("svg", wx, [
              o("path", {
                d: b(ce)("trash")
              }, null, 8, Cx)
            ]))
          ], 8, $x)) : x("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Mx = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Bx = { class: "border-b px-4 py-3" }, _x = { class: "text-sm font-medium" }, Ax = { class: "flex-1 px-4 py-3" }, Px = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, zx = { class: "text-foreground block font-medium" }, Ox = { class: "mt-1 block" }, Lx = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, jx = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Vx = { class: "tabular-nums" }, Tx = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Dx = { class: "text-muted-foreground" }, Ix = {
  key: 0,
  class: "tabular-nums"
}, Ex = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Fx = { class: "text-muted-foreground" }, Nx = { class: "tabular-nums" }, Rx = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, Ux = { class: "tabular-nums" }, Hx = {
  key: 4,
  class: "pt-1"
}, Kx = /* @__PURE__ */ O({
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
    return (r, s) => (t(), n("aside", Mx, [
      o("header", Bx, [
        o("h2", _x, f(e.title), 1)
      ]),
      o("div", Ax, [
        e.items.length === 0 ? (t(), n("p", Px, [
          o("span", zx, f(e.emptyTitle), 1),
          o("span", Ox, f(e.emptyDescription), 1)
        ])) : (t(), T(Sx, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => a("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", Lx, [
        e.subtotal ? (t(), n("div", jx, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", Vx, f(e.subtotal), 1)
        ])) : x("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Tx, [
          o("span", Dx, f(e.discountLabel), 1),
          e.discount ? (t(), n("span", Ix, f(e.discount), 1)) : x("", !0),
          U(r.$slots, "discount")
        ])) : x("", !0),
        e.tax ? (t(), n("div", Ex, [
          o("span", Fx, f(e.taxLabel), 1),
          o("span", Nx, f(e.tax), 1)
        ])) : x("", !0),
        e.total ? (t(), n("div", Rx, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", Ux, f(e.total), 1)
        ])) : x("", !0),
        r.$slots.pay ? (t(), n("div", Hx, [
          U(r.$slots, "pay")
        ])) : x("", !0)
      ])) : x("", !0)
    ]));
  }
}), qx = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Gx = { class: "flex flex-col gap-4" }, Wx = { class: "flex flex-wrap items-start justify-between gap-3" }, Zx = { class: "flex items-center gap-2" }, Jx = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, JC = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Ee({
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
  emits: /* @__PURE__ */ Ee(["select", "pay"], ["update:cart"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(Ie()), i = R(!1), d = ut(e, "cart"), u = R(!1), c = y(
      () => a.items.filter((H) => na(H, s.value))
    );
    function v(H) {
      s.value = { ...s.value, query: H.query };
    }
    function m(H) {
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
    function C(H, K, G) {
      return {
        ...H,
        qty: K,
        amount: a.formatMoney(G * K)
      };
    }
    function k(H) {
      const K = Yy(a.items, H);
      K && $(K.key);
    }
    function $(H) {
      const K = a.items.find((ae) => ae.key === H);
      if (!K || K.status === "out-of-stock")
        return;
      u.value = !1;
      const G = g(K);
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
      const G = a.items.find((ae) => ae.key === H), oe = g(G);
      d.value = d.value.map(
        (ae) => ae.key === H ? C(ae, K, oe) : ae
      );
    }
    function S(H) {
      d.value = d.value.filter((K) => K.key !== H);
    }
    const B = y(
      () => d.value.reduce((H, K) => {
        const G = a.items.find((oe) => oe.key === K.key);
        return H + g(G) * Number(K.qty ?? 1);
      }, 0)
    ), p = y(
      () => a.discountRate > 0 ? Math.round(B.value * a.discountRate) : 0
    ), h = y(
      () => Math.round((B.value - p.value) * a.taxRate)
    ), w = y(
      () => d.value.length ? a.formatMoney(B.value) : null
    ), P = y(
      () => d.value.length && p.value > 0 ? `−${a.formatMoney(p.value)}` : null
    ), E = y(
      () => d.value.length && a.taxRate > 0 ? a.formatMoney(h.value) : null
    ), I = y(
      () => d.value.length ? a.formatMoney(
        B.value - p.value + h.value
      ) : null
    );
    function te() {
      u.value = !0, r("pay", d.value);
    }
    return (H, K) => (t(), n(z, null, [
      o("div", qx, [
        o("section", Gx, [
          o("div", Wx, [
            D(De, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", Zx, [
              b($t)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: K[0] || (K[0] = (G) => s.value = {
                  ...b(Ie)(),
                  query: s.value.query
                })
              }, " Clear ")) : x("", !0),
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
                b($t)(s.value) ? (t(), n("span", Jx, " on ")) : x("", !0)
              ])) : x("", !0)
            ])
          ]),
          D(ta, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: c.value,
            onFilter: v,
            onSelect: K[2] || (K[2] = (G) => r("select", G)),
            onCart: $,
            onScan: k
          }, null, 8, ["search-placeholder", "items"])
        ]),
        D(Kx, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: w.value,
          "discount-label": e.discountLabel,
          discount: P.value,
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
              pay: te
            }, () => [
              D(ue, {
                class: "w-full",
                disabled: d.value.length === 0,
                onClick: te
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
      D(Ja, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: K[3] || (K[3] = (G) => i.value = !1),
        onApply: m,
        onReset: K[4] || (K[4] = (G) => s.value = { ...b(Ie)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Yx = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Xx = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Qx = ["src", "alt"], e0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, t0 = ["src"], a0 = { class: "flex items-start justify-between gap-3" }, n0 = { class: "text-lg font-semibold tabular-nums" }, l0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, o0 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, s0 = { class: "grid grid-cols-2 gap-3" }, r0 = { class: "flex flex-col gap-2" }, i0 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, YC = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(m) {
      let g = 0;
      for (const C of m)
        g = g * 31 + C.charCodeAt(0) >>> 0;
      return g;
    }
    function i(m, g) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((k, $) => ({
        label: k,
        value: Math.max(0, Math.round(m + Math.sin($ + g) * m * 0.18))
      }));
    }
    const d = y(() => a.item?.kind === "unit"), u = y(() => {
      const m = a.item;
      if (!m)
        return [];
      const g = m.stock ?? m.progress?.value ?? m.metrics?.price ?? m.metrics?.rent ?? 12;
      return i(Number(g) || 12, s(m.key) % 7);
    }), c = y(() => {
      const m = a.item;
      if (!m)
        return [];
      const g = m.progress?.value ?? (m.status === "occupied" ? 80 : 20);
      return i(Number(g) || 20, s(m.key) % 5 + 1);
    }), v = y(
      () => !!a.item && !d.value && a.item?.status !== "out-of-stock"
    );
    return (m, g) => (t(), T(aa, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: g[1] || (g[1] = (C) => r("close"))
    }, rt({
      default: L(() => [
        e.item ? (t(), n("div", Yx, [
          o("div", Xx, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Qx)) : x("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", e0, [
            (t(!0), n(z, null, j(e.item.images, (C, k) => (t(), n("img", {
              key: k,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, t0))), 128))
          ])) : x("", !0),
          o("div", a0, [
            o("div", null, [
              o("p", n0, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", l0, f(e.item.stock) + " in stock ", 1)) : x("", !0)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : x("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", o0, f(e.item.facts.join(" · ")), 1)) : x("", !0),
          o("div", s0, [
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
          o("div", r0, [
            o("p", i0, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(St, {
              data: d.value ? c.value : u.value,
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
}), d0 = { class: "flex flex-col gap-10" }, u0 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, c0 = { class: "flex flex-col gap-3" }, f0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, m0 = ["src", "alt"], p0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, v0 = ["aria-label", "aria-pressed", "onClick"], g0 = ["src"], h0 = { class: "flex flex-col gap-5" }, b0 = { class: "flex flex-wrap items-start justify-between gap-3" }, y0 = { class: "min-w-0" }, x0 = { class: "text-2xl font-semibold tracking-tight" }, k0 = { class: "text-muted-foreground mt-1 text-sm" }, $0 = { class: "text-2xl font-semibold tabular-nums" }, w0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, C0 = { class: "grid grid-cols-2 gap-3 text-sm" }, S0 = {
  key: 0,
  class: "rounded-lg border p-3"
}, M0 = { class: "mt-1 font-medium" }, B0 = { class: "rounded-lg border p-3" }, _0 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, A0 = { class: "mt-1 font-medium" }, P0 = { class: "flex flex-col gap-4" }, z0 = { class: "grid gap-4 sm:grid-cols-2" }, O0 = { class: "bg-card rounded-lg border p-4" }, L0 = { class: "mb-3 text-sm font-medium" }, j0 = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(k) {
      let $ = 0;
      for (const M of k)
        $ = $ * 31 + M.charCodeAt(0) >>> 0;
      return $;
    }
    function i(k, $) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((S, B) => ({
        label: S,
        value: Math.max(0, Math.round(k + Math.sin(B + $) * k * 0.18))
      }));
    }
    const d = y(() => a.item.kind === "unit"), u = y(() => {
      const k = [a.item.image, ...a.item.images ?? []].filter(
        ($) => typeof $ == "string" && $ !== ""
      );
      return [...new Set(k)];
    }), c = R(0), v = y(() => {
      const k = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(k) || 12, s(a.item.key) % 7);
    }), m = y(() => {
      const k = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(k) || 20, s(a.item.key) % 5 + 1);
    }), g = y(() => d.value ? m.value : v.value), C = y(() => !d.value && a.item.status !== "out-of-stock");
    return (k, $) => (t(), n("div", d0, [
      o("div", u0, [
        o("div", c0, [
          o("div", f0, [
            u.value[c.value] ? (t(), n("img", {
              key: 0,
              src: u.value[c.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, m0)) : x("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", p0, [
            (t(!0), n(z, null, j(u.value, (M, S) => (t(), n("button", {
              key: M,
              type: "button",
              class: A(["size-16 shrink-0 overflow-hidden rounded-md border", S === c.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${S + 1}`,
              "aria-pressed": S === c.value ? "true" : "false",
              onClick: (B) => c.value = S
            }, [
              o("img", {
                src: M,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, g0)
            ], 10, v0))), 128))
          ])) : x("", !0)
        ]),
        o("div", h0, [
          o("div", b0, [
            o("div", y0, [
              o("h1", x0, f(e.item.label), 1),
              o("p", k0, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : x("", !0)
          ]),
          o("p", $0, f(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", w0, f(e.item.facts.join(" · ")), 1)) : x("", !0),
          o("dl", C0, [
            e.item.sku ? (t(), n("div", S0, [
              $[1] || ($[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", M0, f(e.item.sku), 1)
            ])) : x("", !0),
            o("div", B0, [
              o("dt", _0, f(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", A0, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          C.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: $[0] || ($[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")) : x("", !0)
        ])
      ]),
      o("section", P0, [
        $[2] || ($[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", z0, [
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
        o("div", O0, [
          o("p", L0, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(sg, {
            data: g.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), V0 = ["href"], XC = /* @__PURE__ */ O({
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
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ge)])
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
      ], 8, V0),
      D(j0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), T0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, D0 = ["aria-selected", "onClick"], I0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, E0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, F0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, N0 = ["aria-pressed"], R0 = ["aria-pressed"], QC = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Ee({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Ee(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(a.tabs[0]?.key ?? ""), i = ut(e, "layout"), d = R({}), u = R(!1);
    me(
      () => a.tabs.map((M) => M.key).join(","),
      (M) => {
        M.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function c(M) {
      return d.value[M] ?? Ie();
    }
    const v = y(
      () => a.tabs.find((M) => M.key === s.value) ?? a.tabs[0] ?? null
    ), m = y(
      () => v.value ? c(v.value.key) : Ie()
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
    function k() {
      const M = v.value?.key;
      M && (d.value = { ...d.value, [M]: Ie() });
    }
    function $(M) {
      const S = v.value?.key;
      S && (d.value = { ...d.value, [S]: M }, u.value = !1);
    }
    return (M, S) => (t(), n(z, null, [
      o("div", {
        class: A(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ge)])
      }, [
        D(De, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", T0, [
          (t(!0), n(z, null, j(e.tabs, (B) => (t(), n("button", {
            key: B.key,
            type: "button",
            class: A([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === B.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === B.key ? "true" : "false",
            onClick: (p) => s.value = B.key
          }, f(B.label), 11, D0))), 128))
        ])) : x("", !0),
        o("div", I0, [
          D($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": m.value.query,
            type: "search",
            placeholder: v.value?.searchPlaceholder ?? "Search…",
            "aria-label": v.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": S[0] || (S[0] = (B) => C(String(B)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          b($t)(m.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: k
          }, " Clear ")) : x("", !0),
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
            b($t)(m.value) ? (t(), n("span", E0, " on ")) : x("", !0)
          ])) : x("", !0),
          o("div", F0, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: S[2] || (S[2] = (B) => i.value = "grid")
            }, " Tiles ", 10, N0),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: S[3] || (S[3] = (B) => i.value = "list")
            }, " List ", 10, R0)
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
      D(Ja, {
        open: u.value,
        title: v.value?.filterTitle ?? "Filters",
        "search-placeholder": v.value?.searchPlaceholder ?? "Search…",
        facets: v.value?.facets ?? [],
        applied: m.value,
        onClose: S[7] || (S[7] = (B) => u.value = !1),
        onApply: $,
        onReset: k
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), U0 = { class: "flex flex-col gap-4" }, H0 = { class: "flex flex-col gap-4" }, e8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Ie()), i = y(
      () => a.cards.filter((d) => na(d, s.value))
    );
    return (d, u) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : b(Ge)])
    }, [
      D(De, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", U0, [
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
      o("section", H0, [
        D(De, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(lo, {
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
}), K0 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, q0 = { class: "text-sm font-medium" }, G0 = ["width", "height", "aria-label"], W0 = { class: "flex items-center gap-2" }, Z0 = /* @__PURE__ */ O({
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
      const B = S.getBoundingClientRect(), p = S.width / B.width, h = S.height / B.height;
      return {
        x: (M.clientX - B.left) * p,
        y: (M.clientY - B.top) * h
      };
    }
    function v(M) {
      a.disabled || (i.value = !0, d = c(M), s.value?.setPointerCapture(M.pointerId));
    }
    function m(M) {
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
    function k() {
      const M = s.value;
      M && r("save", M.toDataURL("image/png"));
    }
    function $() {
      const M = s.value, S = u();
      !M || !S || (S.fillStyle = "#ffffff", S.fillRect(0, 0, M.width, M.height));
    }
    return ve($), ke(() => {
      i.value = !1;
    }), (M, S) => (t(), n("div", K0, [
      o("p", q0, f(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: A(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(v, ["prevent"]),
        onPointermove: he(m, ["prevent"]),
        onPointerup: he(g, ["prevent"]),
        onPointerleave: he(g, ["prevent"])
      }, null, 42, G0),
      o("div", W0, [
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
          onClick: k
        }, {
          default: L(() => [...S[1] || (S[1] = [
            N("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), J0 = { class: "grid gap-8 lg:grid-cols-2" }, Y0 = { class: "flex flex-col gap-3" }, X0 = { class: "text-muted-foreground text-xs font-normal" }, Q0 = {
  key: 0,
  class: "flex flex-col gap-3"
}, ek = { class: "flex flex-wrap gap-3" }, tk = ["onClick"], ak = ["src", "alt"], nk = {
  key: 1,
  class: "flex flex-col gap-3"
}, lk = { class: "flex flex-wrap gap-3" }, ok = ["onClick"], sk = ["src", "alt"], rk = {
  key: 2,
  class: "flex flex-col gap-4"
}, ik = { class: "flex flex-wrap items-center gap-2" }, dk = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, uk = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, ck = { class: "flex flex-col gap-2" }, fk = ["src"], mk = {
  key: 1,
  class: "text-sm text-neutral-400"
}, pk = ["src"], t8 = /* @__PURE__ */ O({
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
    async function m(M, S) {
      await nf(M), S(40);
      const B = await new Promise((p, h) => {
        const w = new FileReader();
        w.onload = () => p(String(w.result)), w.onerror = () => h(new Error("Could not read the file")), w.readAsDataURL(M);
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
    ), k = y(
      () => r.value.find((M) => M.id === i.value)?.dataUrl ?? null
    ), $ = y(() => {
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
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : b(Ge)])
    }, [
      D(De, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", J0, [
        D(Z0, {
          label: "Draw a signature",
          onSave: v
        }),
        o("div", Y0, [
          S[2] || (S[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", X0, f(b(Ha)), 1),
          D(Oa, {
            modelValue: d.value,
            "onUpdate:modelValue": S[0] || (S[0] = (B) => d.value = B),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: m
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
      a.value.length ? (t(), n("section", Q0, [
        D(De, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", ek, [
          (t(!0), n(z, null, j(a.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: A(["rounded-md border p-2", B.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => s.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, ak)
          ], 10, tk))), 128))
        ])
      ])) : x("", !0),
      r.value.length ? (t(), n("section", nk, [
        D(De, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", lk, [
          (t(!0), n(z, null, j(r.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: A(["rounded-md border p-2", B.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => i.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, sk)
          ], 10, ok))), 128))
        ])
      ])) : x("", !0),
      e.documents.length ? (t(), n("section", rk, [
        o("div", ik, [
          (t(!0), n(z, null, j(e.documents, (B) => (t(), T(ue, {
            key: B.key,
            size: "sm",
            variant: u.value === B.key ? "default" : "outline",
            onClick: (p) => u.value = B.key
          }, {
            default: L(() => [
              N(f(B.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", dk, [
          D(yv, {
            document: $.value
          }, null, 8, ["document"]),
          o("div", uk, [
            o("div", ck, [
              S[3] || (S[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), n("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, fk)) : (t(), n("p", mk, "Draw and save a signature"))
            ]),
            k.value ? (t(), n("img", {
              key: 0,
              src: k.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, pk)) : x("", !0)
          ])
        ])
      ])) : x("", !0)
    ], 2));
  }
}), a8 = "panel.dashboard.hiddenWidgets", vk = /* @__PURE__ */ Symbol("dashboardHide"), gk = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, n8 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = ht(vk, null), r = R(
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
    return (d, u) => i.value ? x("", !0) : (t(), n("div", gk, [
      D(i1, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (c) => r.value = c),
        onHide: u[1] || (u[1] = (c) => b(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), hk = { class: "flex flex-col gap-3" }, bk = ["data-slot"], yk = ["aria-pressed", "aria-label", "title"], xk = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, kk = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, $k = { class: "flex h-8 items-center" }, wk = ["aria-label", "title", "onClick"], Ck = ["aria-label", "title", "onClick"], Sk = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Mk = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, l8 = /* @__PURE__ */ O({
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
    function d(p) {
      return a.maskable && (p.sensitive ?? !0);
    }
    function u(p) {
      return d(p) && !s.value && !i.value.has(p.key);
    }
    const c = y(() => a.segments.some(u)), v = y(() => a.segments.some(d)), m = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, g = y(() => m[a.columns] ?? m[4]), C = y(() => {
      const p = a.columns ?? 4, h = Math.floor(a.segments.length / p) * p;
      return a.segments.slice(0, h);
    }), k = y(() => {
      const p = a.columns ?? 4, h = Math.floor(a.segments.length / p) * p;
      return a.segments.slice(h);
    }), $ = y(() => {
      const p = [];
      return C.value.length > 0 && p.push({ key: "packed", joined: !0, segments: C.value }), k.value.length > 0 && p.push({ key: "leftover", joined: !1, segments: k.value }), p;
    });
    function M() {
      const p = c.value === !1;
      s.value = !p, i.value = /* @__PURE__ */ new Set(), r("toggle", p);
    }
    function S(p) {
      if (!d(p))
        return;
      const h = new Set(i.value);
      if (u(p))
        h.add(p.key);
      else if (h.delete(p.key), s.value) {
        s.value = !1;
        for (const w of a.segments)
          w.key !== p.key && d(w) && h.add(w.key);
      }
      i.value = h, r("toggle", c.value);
    }
    function B(p) {
      return typeof p == "number" ? new Intl.NumberFormat().format(p) : p;
    }
    return (p, h) => (t(), n("div", hk, [
      (t(!0), n(z, null, j($.value, (w) => (t(), n("div", {
        key: w.key,
        class: A(["relative shrink-0", w.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": w.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && v.value && w.key === $.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": c.value,
          "aria-label": c.value ? "Show all values" : "Hide all values",
          title: c.value ? "Show all values" : "Hide all values",
          onClick: M
        }, [
          (t(), n("svg", xk, [
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
        ], 8, yk)) : x("", !0),
        o("div", {
          class: A(["grid", [w.joined ? "gap-px" : "gap-3", g.value]])
        }, [
          (t(!0), n(z, null, j(w.segments, (P) => (t(), n("div", {
            key: P.key,
            class: A(["bg-card flex flex-col gap-2 p-4", w.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", kk, f(P.label), 1),
            o("div", $k, [
              e.loading ? (t(), T(ze, {
                key: 0,
                variant: "number"
              })) : u(P) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (E) => S(P)
              }, [
                (t(), n(z, null, j(5, (E) => o("span", {
                  key: E,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, wk)) : d(P) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${B(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (E) => S(P)
              }, f(B(P.value)), 9, Ck)) : (t(), n("span", Sk, f(B(P.value)), 1)),
              P.trend && !e.loading && !u(P) ? (t(), T(Za, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : x("", !0)
            ]),
            P.sparkline?.length && !e.loading && !u(P) ? (t(), T(St, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : x("", !0),
            P.caption || P.comparison && P.trend ? (t(), n("p", Mk, f(P.caption ?? P.comparison), 1)) : x("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, bk))), 128))
    ]));
  }
}), Bk = ["aria-label"], _k = ["aria-valuenow", "aria-label"], Ak = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Pk = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, zk = ["title"], Ok = { class: "font-medium" }, Lk = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, jk = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, Vk = { class: "flex items-center justify-between gap-2" }, Tk = { class: "text-sm font-semibold" }, Dk = { class: "flex items-center gap-3" }, Ik = ["href"], Ek = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Fk = { class: "flex min-w-0 flex-col gap-0.5" }, Nk = { class: "text-sm font-medium" }, Rk = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, Uk = {
  key: 1,
  class: "flex flex-col gap-2"
}, Hk = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Kk = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, qk = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, o8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = y(() => a.items.find(($) => !$.done) ?? null), i = y(() => a.items.filter(($) => $.key !== s.value?.key)), d = y(() => a.items.length), u = y(() => a.items.filter(($) => $.done).length), c = y(() => {
      if (!s.value)
        return d.value;
      const $ = a.items.findIndex((M) => M.key === s.value?.key);
      return $ >= 0 ? $ + 1 : 1;
    }), v = y(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), m = y(() => {
      const $ = a.linkComponent;
      return typeof $ == "string" ? $ : ka($);
    }), g = st({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = st({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), k = st({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return ($, M) => e.items.length && e.variant === "onboarding" ? (t(), n("section", {
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
      ], 8, _k),
      o("div", Ak, [
        o("span", Pk, " Step " + f(c.value) + " of " + f(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", Ok, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", Lk, f(": " + s.value.detail), 1)) : x("", !0)
        ], 8, zk),
        s.value?.href ? (t(), T(_e(m.value), {
          key: 0,
          href: s.value.href,
          class: A(b(C))
        }, {
          default: L(() => [
            N(f(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : x("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: M[0] || (M[0] = (S) => r("skip"))
        }, f(e.skipLabel), 1)) : x("", !0)
      ])
    ], 8, Bk)) : e.items.length ? (t(), n("section", jk, [
      o("div", Vk, [
        o("h2", Tk, f(e.heading), 1),
        o("div", Dk, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: M[1] || (M[1] = (S) => r("skip"))
          }, f(e.skipLabel), 1)) : x("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, Ik)) : x("", !0)
        ])
      ]),
      s.value ? (t(), n("div", Ek, [
        M[2] || (M[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Fk, [
          o("p", Nk, f(s.value.title), 1),
          s.value.detail ? (t(), n("p", Rk, f(s.value.detail), 1)) : x("", !0),
          s.value.href ? (t(), T(_e(m.value), {
            key: 1,
            href: s.value.href,
            class: A(b(g))
          }, {
            default: L(() => [
              N(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : x("", !0)
        ])
      ])) : x("", !0),
      i.value.length ? (t(), n("ul", Uk, [
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
            S.done ? (t(), n("svg", Hk, [...M[3] || (M[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : x("", !0)
          ], 2),
          o("div", Kk, [
            o("p", {
              class: A(["text-sm", S.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(S.title), 3),
            !S.done && S.detail ? (t(), n("p", qk, f(S.detail), 1)) : x("", !0)
          ]),
          !S.done && S.href ? (t(), T(_e(m.value), {
            key: 0,
            href: S.href,
            class: A(b(k))
          }, {
            default: L(() => [
              N(f(S.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : x("", !0)
        ]))), 128))
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), Gk = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, Wk = { class: "hidden items-center gap-2 md:flex" }, Zk = { class: "md:hidden" }, Jk = { class: "border-b px-4 py-3" }, Yk = { class: "text-muted-foreground text-xs font-normal" }, Xk = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, Qk = { class: "font-medium tabular-nums" }, e2 = { class: "ml-auto flex items-center gap-3" }, s8 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = R(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), n("div", Gk, [
      o("div", Wk, [
        U(i.$slots, "actions")
      ]),
      o("div", Zk, [
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
                o("div", Jk, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", Yk, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", Xk, [
                  U(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", Qk, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          N(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          N(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", e2, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => a("select-all-matching"))
        }, " Select all " + f(s(e.total)), 1)) : x("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), t2 = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, a2 = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, n2 = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, l2 = ["value"], o2 = ["value"], s2 = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, r2 = ["disabled"], i2 = ["disabled"], d2 = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, u2 = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, c2 = ["disabled"], r8 = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("div", t2, [
      o("p", a2, [
        N(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          N("of " + f(s(e.total)), 1)
        ], 64)) : x("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", n2, [
        v[4] || (v[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: v[0] || (v[0] = (m) => r("update:perPage", Number(m.target.value)))
        }, [
          (t(!0), n(z, null, j(e.perPageOptions, (m) => (t(), n("option", {
            key: m,
            value: m
          }, f(m), 9, o2))), 128))
        ], 40, l2)
      ])) : x("", !0),
      o("nav", s2, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: v[1] || (v[1] = (m) => r("first"))
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
        ])], 8, r2),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: v[2] || (v[2] = (m) => r("previous"))
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
        ])], 8, i2),
        o("span", d2, f(e.page), 1),
        u.value !== null ? (t(), n("span", u2, " of " + f(s(u.value)), 1)) : x("", !0),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: v[3] || (v[3] = (m) => r("next"))
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
        ])], 8, c2)
      ])
    ]));
  }
}), f2 = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, m2 = ["aria-current"], p2 = ["title"], v2 = ["aria-current", "onClick"], g2 = ["title"], h2 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", f2, [
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
        }, f(r(e.counts.all ?? 0)), 11, p2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, m2),
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
        N(f(d) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, g2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, v2))), 128))
    ]));
  }
}), i8 = /* @__PURE__ */ wt(h2, [["__scopeId", "data-v-3967c945"]]), b2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, y2 = { class: "grid gap-2" }, x2 = {
  key: 0,
  class: "text-destructive text-sm"
}, k2 = { class: "flex gap-2" }, d8 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = R((() => {
      const C = navigator.userAgent, k = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: M }) => M.test(C))?.name, $ = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: M }) => M.test(C))?.name;
      return [k, $].filter(Boolean).join(" on ") || "";
    })()), i = R(!1), d = dn(null), u = y(() => d.value?.isLoading.value ?? !1), c = y(() => d.value?.error.value ?? null), v = y(() => d.value?.isSupported.value ?? !1);
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
    const m = async (C) => {
      C.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, g = () => {
      i.value = !1, s.value = "";
    };
    return (C, k) => v.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: m
    }, [
      o("div", y2, [
        k[3] || (k[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        pe(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": k[1] || (k[1] = ($) => s.value = $),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [Ae, s.value]
        ]),
        k[4] || (k[4] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " A name helps you identify this passkey later. ", -1))
      ]),
      c.value ? (t(), n("p", x2, f(c.value), 1)) : x("", !0),
      o("div", k2, [
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
          default: L(() => [...k[5] || (k[5] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(ue, {
      key: 1,
      variant: "outline",
      onClick: k[0] || (k[0] = ($) => i.value = !0)
    }, {
      default: L(() => [...k[2] || (k[2] = [
        N(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", b2, " Passkeys are not supported in this browser. "));
  }
}), $2 = { class: "pk-form-stack" }, w2 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, u8 = /* @__PURE__ */ O({
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
        return (v, m) => a.upload(c, v, m);
    }
    return (c, v) => (t(), n("div", $2, [
      d.value ? (t(), n("p", w2, f(d.value), 1)) : x("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, j(e.nodes, (m, g) => (t(), T(La, {
        key: g,
        node: m,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: v[0] || (v[0] = (C, k) => r("change", C, k)),
        onAffixAction: v[1] || (v[1] = (C, k) => r("affix-action", C, k))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, j(e.fields, (m) => (t(), T(Xe, {
          key: m.key,
          field: m,
          value: e.modelValue[m.key],
          error: e.errors[m.key],
          errors: e.errors,
          options: e.options[m.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": m.searchable && e.searchOptions ? (g) => e.searchOptions(m.key, g) : void 0,
          upload: u(m.key),
          discard: e.discard,
          class: A(m.span && m.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (g) => r("change", m.key, g),
          onAffixAction: (g) => r("affix-action", m.key, g)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), C2 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, S2 = ["disabled"], M2 = ["disabled"], B2 = ["disabled"], c8 = /* @__PURE__ */ O({
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
            class: A(s.value),
            role: "status",
            "aria-live": "polite",
            "data-slot": "unsaved-bar"
          }, [
            o("div", {
              class: A([
                b(Jc),
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
              o("span", C2, f(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[0] || (d[0] = (u) => i.$emit("discard"))
              }, f(e.discardLabel), 9, S2)) : x("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[1] || (d[1] = (u) => i.$emit("cancel"))
              }, f(e.cancelLabel), 9, M2),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: d[2] || (d[2] = (u) => i.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, B2)
            ], 2)
          ], 2)) : x("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function f8(e, l = {}) {
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
const _2 = {
  key: 0,
  class: "flex flex-col gap-1"
}, A2 = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, P2 = { class: "text-foreground text-sm font-medium" }, z2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, O2 = {
  key: 5,
  class: "max-w-full font-normal"
}, L2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, j2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, V2 = {
  key: 6,
  class: "font-normal"
}, T2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, D2 = { class: "text-muted-foreground truncate font-medium" }, I2 = { class: "text-foreground col-span-2 break-words" }, E2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, F2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, N2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, R2 = ["href"], U2 = { class: "flex min-w-0 items-start gap-2.5" }, H2 = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, K2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, q2 = ["d"], G2 = { class: "min-w-0" }, W2 = { class: "flex flex-wrap items-center gap-2" }, Z2 = { class: "text-sm font-semibold" }, J2 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Y2 = ["onClick"], m8 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), d = y(() => a.depth === 0), u = y(() => {
      const k = a.node.columns ?? (a.node.component === "section" ? 2 : 1);
      return k >= 3 ? "sm:grid-cols-3" : k === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), c = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, v = y(() => a.node.key ? a.record[a.node.key] : null), m = y(() => {
      const k = v.value;
      return k == null || k === "";
    }), g = y(() => {
      if (m.value)
        return "None";
      const k = v.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(k)).toLocaleDateString(void 0, c[a.node.type]);
      let $ = String(k);
      return a.node.transform === "upper" && ($ = $.toUpperCase()), a.node.transform === "lower" && ($ = $.toLowerCase()), [a.node.prefix, $, a.node.suffix].filter(Boolean).join(" ");
    }), C = y(() => {
      const k = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), $ = a.node.colors?.[k] ?? a.node.defaultColor ?? "neutral";
      return Yt[$] ?? "outline";
    });
    return (k, $) => {
      const M = Rt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", _2, [
        o("dt", A2, f(e.node.label), 1),
        o("dd", P2, [
          e.node.type === "badge" && b(gu)(v.value) ? (t(), T(qe, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: L(() => [
              N(f(v.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", z2, "None")) : e.node.type === "icon" ? (t(), T(Hd, {
            key: 2,
            value: v.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(Zd, {
            key: 3,
            src: v.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(eu, {
            key: 4,
            value: typeof v.value == "string" ? v.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", O2, [
            e.node.language ? (t(), n("p", L2, f(e.node.language), 1)) : x("", !0),
            o("pre", j2, [
              o("code", null, f(v.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", V2, [
            v.value && typeof v.value == "object" && !Array.isArray(v.value) && Object.keys(v.value).length ? (t(), n("dl", T2, [
              (t(!0), n(z, null, j(v.value, (S, B) => (t(), n("div", {
                key: B,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", D2, f(B), 1),
                o("dd", I2, f(S), 1)
              ]))), 128))
            ])) : (t(), n("span", E2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", F2, [
            (t(!0), n(z, null, j(Array.isArray(v.value) ? v.value : [], (S, B) => (t(), n("div", {
              key: B,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, j(e.node.entries ?? [], (p, h) => (t(), T(M, {
                key: h,
                node: p,
                record: S,
                depth: e.depth + 1,
                onAction: $[0] || ($[0] = (w) => r("action", w))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(v.value) || v.value.length === 0 ? (t(), n("span", N2, "None")) : x("", !0)
          ])) : e.node.url && !m.value ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(g.value), 9, R2)) : (t(), n("span", {
            key: 9,
            class: A([
              m.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, f(g.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: $[1] || ($[1] = (S) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : x("", !0)
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
          onClick: $[2] || ($[2] = (S) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", U2, [
            e.node.icon ? (t(), n("div", H2, [
              (t(), n("svg", K2, [
                o("path", {
                  d: b(ce)(e.node.icon)
                }, null, 8, q2)
              ]))
            ])) : x("", !0),
            o("div", G2, [
              o("div", W2, [
                o("h3", Z2, f(e.node.label), 1),
                e.node.status ? (t(), T(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : x("", !0)
              ]),
              e.node.description ? (t(), n("p", J2, f(e.node.description), 1)) : x("", !0)
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
            onAction: $[3] || ($[3] = (p) => r("action", p))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : x("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: A(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (S, B) => (t(), T(M, {
          key: B,
          node: S,
          record: e.record,
          depth: e.depth + 1,
          onAction: $[4] || ($[4] = (p) => r("action", p))
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
            onClick: (p) => i.value = B
          }, f(S.label), 11, Y2))), 128))
        ], 2),
        (t(!0), n(z, null, j(e.node.children ?? [], (S, B) => pe((t(), n("div", {
          key: B,
          class: A(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(S.children ?? [], (p, h) => (t(), T(M, {
            key: h,
            node: p,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[5] || ($[5] = (w) => r("action", w))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [He, i.value === B]
        ])), 128))
      ], 2)) : x("", !0);
    };
  }
}), X2 = { class: "text-muted-foreground text-sm font-normal" }, Q2 = { class: "flex items-start gap-3" }, e$ = { class: "min-w-0 flex-1" }, t$ = { class: "flex flex-wrap items-center gap-2" }, a$ = { class: "truncate text-sm font-medium" }, n$ = { class: "text-muted-foreground mt-0.5 text-xs" }, l$ = { class: "text-muted-foreground text-xs font-normal" }, o$ = { class: "mt-auto flex items-center gap-2" }, s$ = /* @__PURE__ */ O({
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
      class: A(["flex flex-col gap-4", b(Ua)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", X2, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: A(b(Wc))
      }, [
        (t(!0), n(z, null, j(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", Q2, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            o("div", e$, [
              o("div", t$, [
                o("h3", a$, f(u.label), 1),
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
                })) : x("", !0),
                u.isDefault ? (t(), T(we, {
                  key: 2,
                  status: "default"
                }, {
                  default: L(() => [...d[2] || (d[2] = [
                    N(" Default ", -1)
                  ])]),
                  _: 1
                })) : x("", !0),
                u.connected && u.mode ? (t(), T(we, {
                  key: 3,
                  status: u.mode
                }, {
                  default: L(() => [
                    N(f(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : x("", !0)
              ]),
              o("p", n$, f(u.caption), 1)
            ])
          ]),
          o("p", l$, f(u.methods.join(" · ")), 1),
          o("div", o$, [
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
}), r$ = { class: "flex flex-col gap-6" }, i$ = { class: "relative" }, d$ = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, u$ = ["d"], c$ = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, f$ = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, m$ = { class: "flex flex-wrap items-center gap-2" }, p$ = { class: "text-muted-foreground text-sm font-normal" }, v$ = { class: "flex flex-col gap-1 text-sm" }, g$ = ["value"], h$ = {
  key: 0,
  class: "flex flex-col gap-2"
}, b$ = { class: "flex flex-wrap items-center gap-2" }, y$ = {
  key: 1,
  class: "flex items-center gap-2"
}, p8 = /* @__PURE__ */ O({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Ee({
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
      () => l.value.find((k) => k.key === a.value) ?? null
    ), i = y(() => {
      const k = r.value.trim().toLowerCase();
      return k === "" ? l.value : l.value.filter(($) => [$.key, $.label, $.caption, ...$.methods].join(" ").toLowerCase().includes(k));
    });
    function d(k) {
      return k.connected && k.enabled !== !1;
    }
    function u(k, $) {
      l.value = l.value.map(
        (M) => M.key === k ? { ...M, ...$ } : M
      );
    }
    function c(k) {
      a.value = k;
    }
    function v(k) {
      const $ = l.value.find((S) => S.key === k);
      if (!$)
        return;
      const M = !$.connected;
      u(k, {
        connected: M,
        mode: M ? $.mode ?? "test" : null,
        enabled: M,
        isDefault: !1
      });
    }
    function m(k, $) {
      const M = l.value.find((S) => S.key === k);
      M?.connected && u(k, { enabled: $, isDefault: $ ? M.isDefault : !1 });
    }
    function g(k) {
      const $ = l.value.find((M) => M.key === k);
      !$ || !d($) || (l.value = l.value.map((M) => ({
        ...M,
        isDefault: M.key === k
      })));
    }
    function C(k) {
      const $ = a.value;
      !$ || !l.value.find((S) => S.key === $)?.connected || u($, { mode: k });
    }
    return (k, $) => (t(), n(z, null, [
      o("div", r$, [
        D(De, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", i$, [
          (t(), n("svg", d$, [
            o("path", {
              d: b(ce)("search")
            }, null, 8, u$)
          ])),
          D($e, {
            modelValue: r.value,
            "onUpdate:modelValue": $[0] || ($[0] = (M) => r.value = M),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(s$, {
          key: 0,
          gateways: i.value,
          onConfigure: c,
          onToggle: v
        }, null, 8, ["gateways"])) : (t(), n("p", c$, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      D(aa, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: $[8] || ($[8] = (M) => a.value = null)
      }, {
        footer: L(() => [
          D(ue, {
            variant: "outline",
            size: "sm",
            onClick: $[6] || ($[6] = (M) => a.value = null)
          }, {
            default: L(() => [...$[21] || ($[21] = [
              N("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(ue, {
            key: 0,
            size: "sm",
            onClick: $[7] || ($[7] = (M) => v(s.value.key))
          }, {
            default: L(() => [
              N(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : x("", !0)
        ]),
        default: L(() => [
          s.value ? (t(), n("div", f$, [
            o("div", m$, [
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
                default: L(() => [...$[9] || ($[9] = [
                  N(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(we, {
                key: 1,
                status: "disabled"
              }, {
                default: L(() => [...$[10] || ($[10] = [
                  N(" Disabled ", -1)
                ])]),
                _: 1
              })) : x("", !0),
              s.value.isDefault ? (t(), T(we, {
                key: 2,
                status: "default"
              }, {
                default: L(() => [...$[11] || ($[11] = [
                  N(" Default ", -1)
                ])]),
                _: 1
              })) : x("", !0),
              s.value.connected && s.value.mode ? (t(), T(we, {
                key: 3,
                status: s.value.mode
              }, {
                default: L(() => [
                  N(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : x("", !0)
            ]),
            o("p", p$, f(s.value.caption), 1),
            o("label", v$, [
              $[12] || ($[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, g$)
            ]),
            $[20] || ($[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", h$, [
              $[16] || ($[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              $[17] || ($[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", b$, [
                D(ue, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: $[1] || ($[1] = (M) => m(s.value.key, !0))
                }, {
                  default: L(() => [...$[13] || ($[13] = [
                    N(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(ue, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: $[2] || ($[2] = (M) => m(s.value.key, !1))
                }, {
                  default: L(() => [...$[14] || ($[14] = [
                    N(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(ue, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: $[3] || ($[3] = (M) => g(s.value.key))
                }, {
                  default: L(() => [...$[15] || ($[15] = [
                    N(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : x("", !0),
            s.value.connected ? (t(), n("div", y$, [
              D(ue, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: $[4] || ($[4] = (M) => C("test"))
              }, {
                default: L(() => [...$[18] || ($[18] = [
                  N(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              D(ue, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: $[5] || ($[5] = (M) => C("live"))
              }, {
                default: L(() => [...$[19] || ($[19] = [
                  N(" Live ", -1)
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
function v8(e) {
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
function g8(e) {
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
function h8(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = R(
    l.driver === "none" ? "off" : "connecting"
  ), c = R(/* @__PURE__ */ new Set());
  let v = /* @__PURE__ */ new Map(), m, g, C, k = (/* @__PURE__ */ new Date()).toISOString(), $ = null;
  function M(K, G) {
    v.set(K, { ...v.get(K) ?? {}, ...G }), !m && (m = setTimeout(() => {
      m = void 0, S();
    }, l.batchMs));
  }
  function S() {
    if (v.size === 0)
      return;
    const K = v;
    v = /* @__PURE__ */ new Map();
    const G = /* @__PURE__ */ new Set();
    for (const [oe, ae] of K) {
      const Z = a.value.find((q) => q[r] === oe);
      if (!Z) {
        d?.(oe, ae);
        continue;
      }
      Object.assign(Z, ae), G.add(oe);
    }
    G.size !== 0 && (c.value = /* @__PURE__ */ new Set([...c.value, ...G]), setTimeout(() => {
      const oe = new Set(c.value);
      G.forEach((ae) => oe.delete(ae)), c.value = oe;
    }, 1500));
  }
  async function B() {
    if (!(!s || a.value.length === 0)) {
      C?.abort(), C = new AbortController();
      try {
        const K = a.value.map((ae) => ae[r]), { records: G, at: oe } = await s(K, k);
        k = oe, u.value = "live";
        for (const ae of G)
          M(ae[r], ae);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function p() {
    h(), u.value = "live", g = setInterval(B, l.intervalMs);
  }
  function h() {
    clearInterval(g), g = void 0, C?.abort();
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
    $ = l.channel;
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
  function E() {
    $ && (w()?.leave($), $ = null);
  }
  function I() {
    l.driver === "poll" && p(), l.driver === "broadcast" && P();
  }
  function te() {
    h(), E(), clearTimeout(m), m = void 0, v = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (te(), u.value = "paused") : (k = (/* @__PURE__ */ new Date()).toISOString(), I(), i?.()));
  }
  return ve(() => {
    l.driver !== "none" && (I(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), te();
  }), { status: u, recentlyChanged: c, applyPatch: M, flush: S, pollOnce: B };
}
const x$ = /^[a-z0-9-]+$/, k$ = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function b8(e) {
  un(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !x$.test(a) || typeof r != "string" || !k$.test(r) || (l[`--${a}`] = r);
    qu(l);
  });
}
const $$ = { class: "flex items-center gap-0.5" }, w$ = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", $$, [
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
}), C$ = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(Wa, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), S$ = { class: "flex flex-col gap-2" }, M$ = { class: "bg-card rounded-lg border p-4" }, B$ = { class: "text-muted-foreground truncate text-xs" }, _$ = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, A$ = /* @__PURE__ */ O({
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
      const $ = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return $ === "" ? d.value : `${d.value} › ${$.split("/").join(" › ")}`;
    });
    function c($, M) {
      return $.length <= M ? $ : `${$.slice(0, M - 1).trimEnd()}…`;
    }
    const v = y(() => c(s.value, r.value.titleMax)), m = y(() => c(i.value, r.value.descriptionMax));
    function g($, M, S) {
      return $ === 0 ? { tone: "text-muted-foreground", note: "empty" } : $ > S ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : $ < M ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = y(
      () => g(s.value.length, r.value.titleMin, r.value.titleMax)
    ), k = y(
      () => g(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return ($, M) => (t(), n("div", S$, [
      o("div", M$, [
        o("p", B$, f(u.value), 1),
        o("p", {
          class: A(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", v.value === "" ? "text-muted-foreground italic" : ""])
        }, f(v.value || "Untitled page"), 3),
        o("p", {
          class: A(["text-muted-foreground mt-1 line-clamp-2 text-sm", m.value === "" ? "italic" : ""])
        }, f(m.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", _$, [
        o("span", {
          class: A(C.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(C.value.note), 3),
        o("span", {
          class: A(k.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(k.value.note), 3)
      ]),
      M[0] || (M[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), P$ = ["value", "placeholder", "disabled"], z$ = /* @__PURE__ */ O({
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
      class: A(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", b(Me)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, P$));
  }
}), O$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, L$ = ["aria-selected", "disabled", "title", "onClick"], j$ = /* @__PURE__ */ O({
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
    return (u, c) => (t(), n("div", O$, [
      (t(!0), n(z, null, j(s.value, (v) => (t(), n("button", {
        key: v,
        type: "button",
        role: "option",
        class: A(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [b(Me), i.value === v ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === v,
        disabled: e.disabled,
        title: v,
        onClick: (m) => d(v)
      }, f(v), 11, L$))), 128))
    ]));
  }
}), V$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, T$ = ["disabled"], D$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, I$ = ["onClick"], E$ = ["onClick"], F$ = /* @__PURE__ */ O({
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
      return !C || g.label.toLowerCase().includes(C) ? !0 : (g.children ?? []).some((k) => u(k, C));
    }
    const c = y(() => {
      const g = s.value.trim().toLowerCase();
      return g ? d.value.filter((C) => u(C, g)) : d.value;
    }), v = y(() => {
      const g = (C) => {
        for (const k of C) {
          if (k.value === a.modelValue)
            return k.label;
          const $ = g(k.children ?? []);
          if ($)
            return $;
        }
        return null;
      };
      return g(d.value);
    });
    function m(g) {
      a.disabled || (r("update:modelValue", g), i.value = !1);
    }
    return (g, C) => (t(), n("div", V$, [
      o("button", {
        type: "button",
        class: A(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Me)]),
        disabled: e.disabled,
        onClick: C[0] || (C[0] = (k) => i.value = !i.value)
      }, [
        o("span", {
          class: A(v.value ? "" : "text-muted-foreground")
        }, f(v.value ?? "Select…"), 3),
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, T$),
      i.value ? (t(), n("div", D$, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": C[1] || (C[1] = (k) => s.value = k),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Ae, s.value]
        ]) : x("", !0),
        (t(!0), n(z, null, j(c.value, (k) => (t(), n(z, {
          key: String(k.value)
        }, [
          o("button", {
            type: "button",
            class: A(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === k.value ? "bg-accent" : ""]),
            onClick: ($) => m(k.value)
          }, f(k.label), 11, I$),
          (t(!0), n(z, null, j(k.children ?? [], ($) => (t(), n("button", {
            key: String($.value),
            type: "button",
            class: A(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === $.value ? "bg-accent text-foreground" : ""]),
            onClick: (M) => m($.value)
          }, f($.label), 11, E$))), 128))
        ], 64))), 128))
      ])) : x("", !0)
    ]));
  }
}), N$ = ["aria-label"], R$ = ["disabled", "aria-label", "aria-pressed", "onClick"], U$ = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, H$ = { key: 0 }, K$ = ["id"], q$ = ["fill"], G$ = ["disabled"], W$ = /* @__PURE__ */ O({
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
    return (v, m) => (t(), n("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), n(z, null, j(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${g} of ${s.value}`,
        "aria-pressed": d.value >= g,
        onClick: (C) => u(g)
      }, [
        (t(), n("svg", U$, [
          c(g) === "half" ? (t(), n("defs", H$, [
            o("linearGradient", {
              id: `half-${e.field.key}-${g}`,
              x1: "0",
              x2: "1",
              y1: "0",
              y2: "0"
            }, [...m[1] || (m[1] = [
              o("stop", {
                offset: "50%",
                "stop-color": "currentColor"
              }, null, -1),
              o("stop", {
                offset: "50%",
                "stop-color": "transparent",
                "stop-opacity": "1"
              }, null, -1)
            ])], 8, K$)
          ])) : x("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: c(g) === "full" ? "currentColor" : c(g) === "half" ? `url(#half-${e.field.key}-${g})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, q$)
        ]))
      ], 8, R$))), 128)),
      d.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: m[0] || (m[0] = (g) => u(0))
      }, " Clear ", 8, G$)) : x("", !0)
    ], 8, N$));
  }
});
function Z$() {
  xe("radio", Mm), xe("checkboxlist", Am), xe("tags", Tm), xe("colour", Wm), xe("slider", Bp), xe("rating", W$), xe("phone", z$), xe("icon-picker", j$), xe("tree-select", F$), xe("visual-select", Fp), xe("markdown", om), xe("code", fm), xe("map", Qm), xe("qrcode", lp), xe("barcode", cp), xe("diff", pp), xe("seo-preview", A$), Pt("swatch", Rp), Pt("voucher-code-box", C$), Pt("document-colour-mode", w$);
}
function Ya() {
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
const J$ = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = Ya();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: A(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", b(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      U(r.$slots, "default")
    ], 6));
  }
}), Y$ = ["id"], Se = /* @__PURE__ */ O({
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
        D(J$, null, {
          default: L(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Y$));
  }
}), X$ = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, Q$ = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, ew = {
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
      e.eyebrow ? (t(), n("p", X$, f(e.eyebrow), 1)) : x("", !0),
      e.title ? (t(), n("h2", Q$, f(e.title), 1)) : x("", !0),
      e.body ? (t(), n("p", ew, f(e.body), 1)) : x("", !0)
    ], 2)) : x("", !0);
  }
}), tw = { class: "flex flex-col gap-10" }, aw = { class: "grid gap-4 md:grid-cols-3" }, nw = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, lw = { class: "text-sm font-semibold text-balance" }, ow = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, sw = /* @__PURE__ */ O({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", tw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", aw, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", { key: s }, [
              (t(), T(_e(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: L(() => [
                  r.meta ? (t(), n("p", nw, f(r.meta), 1)) : x("", !0),
                  o("h3", lw, f(r.title), 1),
                  r.body ? (t(), n("p", ow, f(r.body), 1)) : x("", !0)
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
function rw() {
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
const iw = { class: "pk-tilt-inner relative h-full" }, dw = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = rw();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", iw, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), uw = { class: "flex flex-col gap-10" }, cw = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, fw = { class: "text-base font-semibold" }, mw = { class: "text-sm text-pretty text-muted-foreground" }, pw = /* @__PURE__ */ O({
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
        o("div", uw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", cw, [
            (t(!0), n(z, null, j(e.items ?? [], (s, i) => (t(), T(dw, {
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
                  o("h3", fw, f(s.title), 1),
                  o("p", mw, f(s.body), 1)
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
}), vw = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, gw = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, hw = { class: "grid gap-4 text-sm" }, bw = {
  key: 0,
  class: "grid gap-1"
}, yw = ["href"], xw = {
  key: 1,
  class: "grid gap-1"
}, kw = ["href"], $w = {
  key: 2,
  class: "grid gap-1"
}, ww = { class: "text-pretty text-muted-foreground" }, Cw = ["href"], Sw = /* @__PURE__ */ O({
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
        o("div", vw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", gw, [
            o("dl", hw, [
              e.email ? (t(), n("div", bw, [
                a[0] || (a[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, f(e.email), 9, yw)
                ])
              ])) : x("", !0),
              e.phone ? (t(), n("div", xw, [
                a[1] || (a[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, f(e.phone), 9, kw)
                ])
              ])) : x("", !0),
              e.address ? (t(), n("div", $w, [
                a[2] || (a[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", ww, f(e.address), 1)
              ])) : x("", !0)
            ]),
            e.label ? (t(), n("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.label), 9, Cw)) : x("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Mw = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, Bw = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, _w = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, Aw = ["href"], Pw = /* @__PURE__ */ O({
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
        o("div", Mw, [
          o("h2", Bw, f(e.title), 1),
          e.body ? (t(), n("p", _w, f(e.body), 1)) : x("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, Aw)) : x("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), zw = { class: "flex flex-col gap-8" }, Ow = { class: "divide-y rounded-lg border" }, Lw = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, jw = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, Vw = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, { narrow: "" }, {
      default: L(() => [
        o("div", zw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Ow, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", Lw, [
                N(f(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", jw, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Tw = { class: "flex flex-col gap-10" }, Dw = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, Iw = { class: "text-sm font-semibold" }, Ew = { class: "text-sm text-pretty text-muted-foreground" }, Fw = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", Tw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Dw, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", Iw, f(r.title), 1),
              o("p", Ew, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Nw = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, Rw = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, Uw = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Hw = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, Kw = ["href"], qw = ["href"], Gw = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, Ww = /* @__PURE__ */ O({
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
          e.brand ? (t(), n("p", Nw, f(e.brand), 1)) : x("", !0),
          e.eyebrow ? (t(), n("p", Rw, f(e.eyebrow), 1)) : x("", !0),
          o("h1", {
            class: A([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, f(e.title), 3),
          e.body ? (t(), n("p", Uw, f(e.body), 1)) : x("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", Hw, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, Kw)) : x("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, qw)) : x("", !0)
          ])) : x("", !0),
          e.note ? (t(), n("p", Gw, f(e.note), 1)) : x("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), Zw = { class: "flex flex-col items-center gap-6" }, Jw = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, Yw = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, Xw = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, { muted: "" }, {
      default: L(() => [
        o("div", Zw, [
          e.title ? (t(), n("p", Jw, f(e.title), 1)) : x("", !0),
          o("ul", Yw, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Qw = { class: "flex flex-col gap-10" }, e4 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, t4 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, a4 = ["aria-pressed"], n4 = ["aria-pressed"], l4 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, o4 = { class: "grid gap-4 md:grid-cols-3" }, s4 = { class: "flex flex-col gap-1" }, r4 = { class: "text-sm font-semibold" }, i4 = { class: "flex items-baseline gap-1" }, d4 = { class: "text-3xl font-semibold tracking-tight" }, u4 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, c4 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, f4 = { class: "flex flex-col gap-2 text-sm" }, m4 = { class: "text-muted-foreground" }, p4 = ["href"], v4 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(Se, { muted: "" }, {
      default: L(() => [
        o("div", Qw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", e4, [
            o("div", t4, [
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, a4),
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, n4)
            ]),
            e.annualNote ? (t(), n("p", l4, f(e.annualNote), 1)) : x("", !0)
          ])) : x("", !0),
          o("ul", o4, [
            (t(!0), n(z, null, j(e.items ?? [], (u, c) => (t(), n("li", {
              key: c,
              class: A(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", s4, [
                o("h3", r4, f(u.name), 1),
                o("p", i4, [
                  o("span", d4, f(s(u)), 1),
                  u.period ? (t(), n("span", u4, f(u.period), 1)) : x("", !0)
                ]),
                u.body ? (t(), n("p", c4, f(u.body), 1)) : x("", !0)
              ]),
              o("ul", f4, [
                (t(!0), n(z, null, j(u.features ?? [], (v, m) => (t(), n("li", {
                  key: m,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", m4, f(v.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: A([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, p4)) : x("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function g4() {
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
const h4 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, b4 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, y4 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, x4 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, k4 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, $4 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, w4 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, C4 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, S4 = { class: "ml-3 truncate text-xs text-muted-foreground" }, M4 = { class: "flex" }, B4 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, _4 = { class: "min-w-0 flex-1 p-4" }, A4 = { class: "flex flex-col divide-y rounded-md border" }, P4 = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = g4();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", h4, [
        o("div", b4, [
          o("div", y4, [
            o("h2", x4, f(e.title), 1),
            e.body ? (t(), n("p", k4, f(e.body), 1)) : x("", !0)
          ]),
          o("div", $4, [
            o("div", w4, [
              o("div", C4, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", S4, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", M4, [
                o("div", B4, [
                  (t(), n(z, null, j(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", _4, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", A4, [
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
}), z4 = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = Ya(), s = R(0);
    return me(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const u = performance.now(), c = (v) => {
        const m = Math.min((v - u) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - m, 3)), m < 1 ? requestAnimationFrame(c) : s.value = l.to;
      };
      requestAnimationFrame(c);
    }), (i, d) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), O4 = { class: "flex flex-col gap-10" }, L4 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, j4 = { class: "order-2 text-sm text-muted-foreground" }, V4 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, T4 = /* @__PURE__ */ O({
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
        o("div", O4, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", L4, [
            (t(!0), n(z, null, j(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", j4, f(s.label), 1),
              o("dd", V4, [
                l(s.value) ? (t(), T(z4, {
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
}), D4 = { class: "flex flex-col gap-10" }, I4 = { class: "grid gap-6 md:grid-cols-3" }, E4 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, F4 = { class: "text-sm font-semibold" }, N4 = { class: "text-sm text-pretty text-muted-foreground" }, R4 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", D4, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", I4, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", E4, f(s + 1), 1),
              o("h3", F4, f(r.title), 1),
              o("p", N4, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), U4 = { class: "flex flex-col gap-10" }, H4 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, K4 = ["src"], q4 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, G4 = { class: "min-w-0" }, W4 = { class: "truncate text-sm font-semibold" }, Z4 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, J4 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, Y4 = /* @__PURE__ */ O({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", U4, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", H4, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), n("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, K4)) : (t(), n("span", q4, f((r.name ?? "?").slice(0, 1)), 1)),
              o("div", G4, [
                o("h3", W4, f(r.name), 1),
                r.role ? (t(), n("p", Z4, f(r.role), 1)) : x("", !0)
              ]),
              r.bio ? (t(), n("p", J4, f(r.bio), 1)) : x("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), X4 = { class: "flex flex-col gap-10" }, Q4 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, e5 = { class: "text-pretty text-sm leading-relaxed" }, t5 = { class: "mt-auto flex items-center gap-3" }, a5 = ["src"], n5 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, l5 = { class: "min-w-0" }, o5 = { class: "block truncate text-sm font-medium" }, s5 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, r5 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", X4, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Q4, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", e5, " “" + f(r.quote) + "” ", 1),
              o("figcaption", t5, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, a5)) : (t(), n("span", n5, f((r.name ?? "?").slice(0, 1)), 1)),
                o("span", l5, [
                  o("span", o5, f(r.name), 1),
                  r.role ? (t(), n("span", s5, f(r.role), 1)) : x("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), y8 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: Ww,
      logos: Xw,
      features: Fw,
      bento: pw,
      showcase: P4,
      steps: R4,
      stats: T4,
      testimonials: r5,
      team: Y4,
      articles: sw,
      contact: Sw,
      pricing: v4,
      faq: Vw,
      cta: Pw
    }, s = y(
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
}), i5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, x8 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", i5, [
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
}), d5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, k8 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", d5, [...a[0] || (a[0] = [
      Nt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), u5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, $8 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", u5, [...a[0] || (a[0] = [
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
Z$();
const w8 = "0.0.1";
export {
  ra as ACTION_KEY_ICONS,
  Tt as APPEARANCE_STYLE_ID,
  HC as AdminDirectory,
  Nc as Alert,
  Rc as AlertDescription,
  Uc as AlertTitle,
  AC as AppPageFooter,
  H5 as AppearanceDrawer,
  K3 as Avatar,
  q3 as AvatarFallback,
  G3 as AvatarImage,
  Yt as BADGE_VARIANTS,
  I5 as BadgeResolver,
  DC as BarChart,
  W3 as Breadcrumb,
  Z3 as BreadcrumbEllipsis,
  J3 as BreadcrumbItem,
  Y3 as BreadcrumbLink,
  X3 as BreadcrumbList,
  Q3 as BreadcrumbPage,
  eC as BreadcrumbSeparator,
  x5 as BulkActions,
  Ua as CATALOGUE_CONTAINER,
  Wc as CATALOGUE_GRID,
  Y5 as CATALOGUE_GRID_TIGHT,
  Zc as CATALOGUE_GRID_TILES,
  yC as Card,
  xC as CardAction,
  kC as CardContent,
  $C as CardDescription,
  wC as CardFooter,
  CC as CardHeader,
  SC as CardTitle,
  Kx as CartPanel,
  QC as CatalogBrowser,
  bb as CatalogCard,
  Ja as CatalogFilterSheet,
  ta as CatalogGrid,
  YC as CatalogInspect,
  j0 as CatalogItemDetail,
  XC as CatalogItemView,
  e8 as CatalogRegister,
  JC as CatalogTill,
  Uh as ChartCard,
  mt as ChartTooltip,
  Gr as Checkbox,
  O5 as CheckboxCell,
  L5 as CodeCell,
  eu as ColourCell,
  RC as ComboChart,
  qr as CreateOptionDialog,
  Fr as CreateOptionError,
  a8 as DASHBOARD_HIDDEN_STORAGE_KEY,
  vk as DASHBOARD_HIDE_KEY,
  n8 as DashboardShortcuts,
  lo as DataTable,
  iC as Dialog,
  dC as DialogClose,
  uC as DialogContent,
  cC as DialogDescription,
  fC as DialogFooter,
  mC as DialogHeader,
  Bf as DialogOverlay,
  pC as DialogScrollContent,
  vC as DialogTitle,
  gC as DialogTrigger,
  HC as DirectoryPage,
  z3 as DropdownMenu,
  O3 as DropdownMenuCheckboxItem,
  L3 as DropdownMenuContent,
  j3 as DropdownMenuGroup,
  V3 as DropdownMenuItem,
  T3 as DropdownMenuLabel,
  M8 as DropdownMenuPortal,
  D3 as DropdownMenuRadioGroup,
  I3 as DropdownMenuRadioItem,
  E3 as DropdownMenuSeparator,
  F3 as DropdownMenuShortcut,
  N3 as DropdownMenuSub,
  R3 as DropdownMenuSubContent,
  U3 as DropdownMenuSubTrigger,
  H3 as DropdownMenuTrigger,
  T5 as EditableCell,
  Me as FOCUS_RING,
  k5 as FOCUS_RING_SOFT,
  da as FOCUS_RING_WITHIN,
  Jc as FORM_MEASURE,
  Xe as FormFieldControl,
  UC as HeatmapChart,
  dl as ICON_ALIASES,
  gt as ICON_PATHS,
  Re as INPUT_COPY,
  Hr as INPUT_PLACEHOLDER,
  Ur as INPUT_TEXT,
  Hd as IconCell,
  Zd as ImageCell,
  m8 as InfoNode,
  Xc as JPEG_IMAGE_ERROR,
  j5 as KeyValueCell,
  hC as Label,
  sg as LineChart,
  Sx as LineItems,
  _5 as MUTED_COPY,
  vt as MUTED_COPY_SNUG,
  A5 as MUTED_COPY_XS,
  kt as MiniStatCard,
  tC as NavigationMenu,
  aC as NavigationMenuContent,
  nC as NavigationMenuIndicator,
  lC as NavigationMenuItem,
  oC as NavigationMenuLink,
  sC as NavigationMenuList,
  rC as NavigationMenuTrigger,
  Sf as NavigationMenuViewport,
  Yc as OPAQUE_IMAGE_ERROR,
  Ge as PAGE_SHELL,
  X5 as PAGE_SHELL_COMPACT,
  Q5 as PAGE_SHELL_STACK,
  p8 as PaymentGatewaySettings,
  s$ as PaymentGateways,
  IC as PieChart,
  Z5 as PkAlertError,
  sw as PkArticles,
  x8 as PkAuroraBackdrop,
  qe as PkBadge,
  cp as PkBarcode,
  pw as PkBento,
  K5 as PkBottomNav,
  MC as PkBoundary,
  OC as PkBuilder,
  ue as PkButton,
  LC as PkCalendar,
  BC as PkCard,
  Am as PkCheckboxList,
  Wa as PkCodeBox,
  fm as PkCodeInput,
  Wm as PkColourPicker,
  $8 as PkConsoleBackdrop,
  Sw as PkContact,
  z4 as PkCountUp,
  Pw as PkCta,
  PC as PkDeviceFrame,
  pp as PkDiff,
  yv as PkDocument,
  Je as PkDropdown,
  k8 as PkEditorialBackdrop,
  Lt as PkEmptyState,
  Vw as PkFaq,
  Fw as PkFeatureGrid,
  Pe as PkFieldLabel,
  Oa as PkFileUpload,
  De as PkHeading,
  Ww as PkHero,
  ki as PkKeyValue,
  y8 as PkLandingSections,
  Xw as PkLogoCloud,
  Jm as PkMap,
  Qm as PkMapField,
  om as PkMarkdownInput,
  dt as PkModal,
  Wt as PkMultiSelect,
  G5 as PkOtpInput,
  W5 as PkPageHeader,
  d8 as PkPasskeyRegister,
  J5 as PkPasswordInput,
  v4 as PkPricing,
  lp as PkQrCode,
  px as PkQtyStepper,
  ds as PkQueryBuilder,
  Mm as PkRadioGroup,
  zC as PkRepeater,
  J$ as PkReveal,
  zi as PkRichEditor,
  Se as PkSection,
  je as PkSectionHeading,
  P4 as PkShowcase,
  Z0 as PkSignaturePad,
  ze as PkSkeleton,
  aa as PkSlideover,
  Bp as PkSlider,
  q5 as PkSpinner,
  T4 as PkStats,
  we as PkStatusBadge,
  Ir as PkStepIndicator,
  R4 as PkSteps,
  Rp as PkSwatchPreview,
  Tm as PkTagsInput,
  Y4 as PkTeam,
  r5 as PkTestimonials,
  $e as PkTextInput,
  dw as PkTiltCard,
  Fp as PkVisualSelect,
  Kb as PlanCard,
  ZC as PlanEditor,
  WC as PlanGrid,
  NC as PolarAreaChart,
  FC as RadarChart,
  z5 as RatingCell,
  E5 as RecordActions,
  u8 as RecordForm,
  P5 as RelationCreateDialog,
  w5 as RelationPanel,
  Z1 as STATUS_TONES,
  EC as ScatterChart,
  La as SchemaNode,
  qC as SegmentedBar,
  s8 as SelectionBar,
  xf as Separator,
  o8 as SetupChecklist,
  Ra as ShadcnInput,
  Zt as Sheet,
  l3 as SheetClose,
  Jt as SheetContent,
  lf as SheetDescription,
  o3 as SheetFooter,
  of as SheetHeader,
  sf as SheetTitle,
  s3 as SheetTrigger,
  i1 as ShortcutsWidget,
  r3 as Sidebar,
  i3 as SidebarContent,
  d3 as SidebarFooter,
  u3 as SidebarGroup,
  c3 as SidebarGroupAction,
  f3 as SidebarGroupContent,
  m3 as SidebarGroupLabel,
  p3 as SidebarHeader,
  v3 as SidebarInput,
  g3 as SidebarInset,
  h3 as SidebarMenu,
  b3 as SidebarMenuAction,
  y3 as SidebarMenuBadge,
  k3 as SidebarMenuButton,
  $3 as SidebarMenuItem,
  w3 as SidebarMenuSkeleton,
  C3 as SidebarMenuSub,
  S3 as SidebarMenuSubButton,
  M3 as SidebarMenuSubItem,
  B3 as SidebarProvider,
  _3 as SidebarRail,
  A3 as SidebarSeparator,
  P3 as SidebarTrigger,
  t8 as SignatureStudio,
  St as Sparkline,
  bC as Spinner,
  KC as StatCard,
  GC as StatListChart,
  l8 as StatStrip,
  Ze as Switch,
  Ha as TRANSPARENT_IMAGE_HELP,
  r8 as TablePagination,
  Eo as TableShell,
  i8 as TableTabs,
  gr as TableToolbar,
  V5 as TagsCell,
  TC as ThemeToggle,
  hf as Tooltip,
  bf as TooltipContent,
  x3 as TooltipProvider,
  yf as TooltipTrigger,
  Za as TrendBadge,
  c8 as UnsavedBar,
  Hc as alertVariants,
  Hu as appearancePayload,
  Da as appearanceVars,
  Dt as applyAppearance,
  nf as assertTransparentImage,
  N5 as bootstrapAppearance,
  st as buttonClasses,
  $t as catalogFiltersActive,
  Q as cn,
  Rr as createOptionActionLabel,
  Nr as createOptionTitle,
  yb as cycleLabel,
  Ie as emptyCatalogFilters,
  Er as fieldControl,
  B5 as fieldErrorsFromPayload,
  Yy as findExactSku,
  xb as formatPerkValue,
  gu as hasBadgeValue,
  C5 as hasFieldControl,
  jC as hasOptionPreview,
  ce as iconPath,
  tf as imageHasTransparency,
  Ia as initializeAppearance,
  Qt as isDark,
  na as matchCatalogItem,
  a3 as mergeLayoutItems,
  Mf as navigationMenuTriggerStyle,
  _p as optionPreview,
  e3 as packWidgetColumns,
  t3 as parseWidgetId,
  kb as perkGranted,
  ea as readAppearance,
  Ku as readServerAppearance,
  Z$ as registerBuiltInFieldControls,
  xe as registerFieldControl,
  Pt as registerOptionPreview,
  S5 as registeredFieldTypes,
  Ap as registeredOptionPreviews,
  F5 as resetAppearanceBootstrapForTests,
  M5 as resetFieldControls,
  VC as resetOptionPreviews,
  ot as resolveActionIcon,
  U5 as setAppearancePersister,
  kf as sidebarMenuButtonVariants,
  Q1 as statusBadgeVariant,
  X1 as statusTone,
  R5 as syncAppearanceFromInertiaPage,
  n3 as toPersistedLayout,
  $5 as toUrl,
  Na as useAppearance,
  v8 as useColumnVisibility,
  g8 as useColumnWidths,
  h8 as useLiveUpdates,
  rw as usePointer,
  Ya as useReveal,
  D5 as useSchemaColumns,
  g4 as useScrollProgress,
  _C as useShellPageFooter,
  Ct as useSidebar,
  b8 as useTenantTheme,
  f8 as useUnsavedChanges,
  w8 as version,
  fa as widgetId
};
//# sourceMappingURL=index.js.map
