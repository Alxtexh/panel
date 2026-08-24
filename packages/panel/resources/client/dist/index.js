import './ui.css';
import { defineComponent as O, useSlots as Nt, openBlock as t, createElementBlock as n, normalizeClass as P, unref as x, renderSlot as U, createElementVNode as o, toDisplayString as c, createCommentVNode as w, computed as b, normalizeStyle as se, Fragment as z, renderList as V, ref as R, watch as me, useId as nn, withModifiers as he, createTextVNode as N, createVNode as D, createStaticVNode as Rt, createBlock as T, createSlots as st, withCtx as L, nextTick as Te, onBeforeUnmount as ke, Teleport as dt, Transition as Ye, onMounted as ve, withDirectives as pe, vModelText as Ae, resolveDynamicComponent as _e, resolveComponent as Ut, vModelSelect as Ge, vModelDynamic as ln, mergeProps as re, normalizeProps as Oe, guardReactiveProps as Fe, defineAsyncComponent as sa, inject as ht, vShow as Ue, onUnmounted as on, isRef as sn, useTemplateRef as rn, onErrorCaptured as dn, provide as Lt, markRaw as ka, withKeys as un, reactive as rt, useModel as ut, mergeModels as Ie, shallowRef as cn, watchEffect as fn } from "vue";
import { useForwardPropsEmits as be, DialogRoot as $a, DialogOverlay as Ht, DialogPortal as Kt, DialogContent as qt, DialogClose as Qe, CheckboxRoot as mn, CheckboxIndicator as pn, SwitchRoot as vn, SwitchThumb as gn, DialogDescription as wa, DialogTitle as Ca, DialogTrigger as Sa, createContext as hn, Primitive as et, TooltipRoot as bn, TooltipPortal as yn, TooltipContent as xn, TooltipArrow as kn, TooltipProvider as Ma, TooltipTrigger as $n, Separator as wn, DropdownMenuRoot as Cn, DropdownMenuCheckboxItem as Sn, DropdownMenuItemIndicator as Ba, DropdownMenuPortal as Mn, DropdownMenuContent as Bn, DropdownMenuGroup as _n, useForwardProps as Le, DropdownMenuItem as An, DropdownMenuLabel as Pn, DropdownMenuRadioGroup as zn, DropdownMenuRadioItem as On, DropdownMenuSeparator as Ln, DropdownMenuSub as Vn, DropdownMenuSubContent as jn, DropdownMenuSubTrigger as Tn, DropdownMenuTrigger as Dn, AvatarRoot as En, AvatarFallback as In, AvatarImage as Fn, NavigationMenuViewport as Nn, NavigationMenuRoot as Rn, NavigationMenuContent as Un, NavigationMenuIndicator as Hn, NavigationMenuItem as Kn, NavigationMenuLink as qn, NavigationMenuList as Gn, NavigationMenuTrigger as Wn, Label as Zn } from "reka-ui";
import { DropdownMenuPortal as I8 } from "reka-ui";
import { X as Gt, Check as _a, AlertCircle as Jn, EyeOff as Yn, Eye as Xn, PanelLeftOpen as Qn, PanelLeftClose as el, Circle as tl, ChevronRight as Aa, MoreHorizontal as al, ChevronDown as nl, Loader2Icon as ll } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as Pa, useMediaQuery as ol, useEventListener as sl, defaultDocument as rl } from "@vueuse/core";
import { clsx as il } from "clsx";
import { twMerge as dl } from "tailwind-merge";
import { cva as Wt } from "class-variance-authority";
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
function lt(e) {
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
}, Vt = /* @__PURE__ */ O({
  __name: "PkEmptyState",
  props: {
    title: {},
    description: {},
    icon: { default: "package" },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = Nt();
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
        }, c(e.title), 3),
        e.description ? (t(), n("p", gl, c(e.description), 1)) : w("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", hl, [
        U(a.$slots, "actions")
      ])) : w("", !0)
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
    }, r = b(() => a[l.variant] ?? a.text), s = b(() => Math.max(1, Math.min(l.count, 50)));
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
    function p(W) {
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
    const h = R(null), C = R(null);
    function k(W, te) {
      h.value = W, te.dataTransfer?.setData("text/plain", String(W)), te.dataTransfer && (te.dataTransfer.effectAllowed = "move");
    }
    function $() {
      h.value = null, C.value = null;
    }
    function S(W) {
      return h.value === null || C.value !== W ? "" : h.value > W ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function M(W, te) {
      h.value !== null && (te.preventDefault(), C.value = W);
    }
    function _(W) {
      const te = h.value;
      if (h.value = null, C.value = null, te === null || te === W)
        return;
      const X = a.rows.map((ie) => ie[a.rowKey]), [de] = X.splice(te, 1);
      X.splice(W, 0, de), m("reorder", X);
    }
    const m = l;
    function v(W, te) {
      !a.rowClickable || a.reordering || te.button !== 0 || te.metaKey || te.ctrlKey || te.shiftKey || te.altKey || te.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || m("row-click", W);
    }
    const y = R(null), A = nn(), E = b(() => a.columns.filter((W) => !a.hidden?.has(W.key))), I = b(() => {
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
      function He(at) {
        const Bt = de + (at.clientX - X);
        m("resize", W.key, Math.min(1200, Math.max(48, Bt)));
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
    const Z = b(() => E.value.some((W) => !!W.group)), G = b(() => {
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
          const at = Math.min(He, Ne), Bt = Math.max(He, Ne), an = !ie;
          for (let pt = at; pt <= Bt; pt++) {
            if (!p(pt))
              continue;
            const _t = B(a.rows[pt]);
            if (_t === null)
              continue;
            !!a.selected?.has(_t) !== an && m("toggle-row", _t);
          }
          j.value = X;
          return;
        }
      }
      m("toggle-row", X), j.value = X;
    }
    const ye = b(
      () => a.rows.map((W) => B(W)).filter((W) => W !== null)
    ), le = b(
      () => ye.value.length > 0 && ye.value.every((W) => a.selected?.has(W))
    ), Y = b(
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
        await navigator.clipboard.writeText(String(X)), y.value = `${W}-${te.key}`, setTimeout(() => y.value = null, 1200);
      } catch {
      }
    }
    const en = b(
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
            e.reordering ? (t(), n("th", $l)) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("th", wl)) : w("", !0),
            (t(!0), n(z, null, V(G.value, (X) => (t(), n("th", {
              key: X.key,
              colspan: X.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, c(X.label ?? ""), 9, Cl))), 128)),
            W.$slots.actions ? (t(), n("th", Sl)) : w("", !0)
          ])) : w("", !0),
          o("tr", Ml, [
            e.reordering ? (t(), n("th", Bl)) : w("", !0),
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
            ], 2)) : w("", !0),
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
                Ce(X) ? (t(), n("span", Pl, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", zl, "↕"))
              ], 8, Al)) : (t(), n("span", Ol, c(X.label), 1)),
              oe(X) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${X.label}`,
                onPointerdown: (de) => ne(X, de)
              }, null, 40, Ll)) : w("", !0)
            ], 6))), 128)),
            W.$slots.actions ? (t(), n("th", Vl, [...te[2] || (te[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : w("", !0)
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
            ])) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("td", Dl, [
              D(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
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
            ])) : w("", !0)
          ])), 64))
        ])) : (t(), n("tbody", {
          key: 1,
          class: P(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, V(e.rows, (X, de) => (t(), n(z, {
            key: B(X) ?? `row-${de}`
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
                  "aria-expanded": !f(r(X)),
                  dusk: `group-header-${r(X) || "none"}`,
                  onClick: (ie) => g(r(X))
                }, [
                  o("span", Rl, c(f(r(X)) ? "▸" : "▾"), 1),
                  N(" " + c(i(X)), 1)
                ], 8, Nl)) : (t(), n("span", Ul, c(i(X)), 1))
              ], 8, Fl)
            ])) : w("", !0),
            p(de) ? (t(), n("tr", {
              key: 1,
              class: P(["group pk-row border-b transition-colors hover:bg-muted/50", [
                F(X) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && de % 2 === 1 ? "bg-muted/20" : "",
                h.value === de ? "opacity-40" : "",
                S(de),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => k(de, ie),
              onDragover: (ie) => M(de, ie),
              onDrop: he((ie) => _(de), ["prevent"]),
              onDragend: $,
              onContextmenu: (ie) => m("row-contextmenu", X, ie),
              onClick: (ie) => v(X, ie)
            }, [
              e.reordering ? (t(), n("td", Kl, [...te[3] || (te[3] = [
                Rt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : w("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: P(["px-3 py-2", I.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${x(A)}-row-${B(X) ?? de}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: B(X) ?? void 0,
                  checked: F(X),
                  disabled: B(X) === null,
                  "aria-label": B(X) === null ? "This row has no id and cannot be selected" : `Select row ${B(X)}`,
                  onClick: he((ie) => ge(X, ie), ["stop"])
                }, null, 8, ql)
              ], 2)) : w("", !0),
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
                    N(c(X[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (He) => la(String(X[e.rowKey]), ie, X[ie.key])
                    }, [
                      o("span", Zl, c(y.value === `${X[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Wl)
                  ])) : X[ie.key] == null || X[ie.key] === "" ? (t(), n("span", Jl, "None")) : (t(), n("span", Yl, c(X[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              W.$slots.actions ? (t(), n("td", Xl, [
                U(W.$slots, "actions", { row: X }, void 0, !0)
              ])) : w("", !0)
            ], 42, Hl)) : w("", !0)
          ], 64))), 128))
        ], 2)),
        en.value ? (t(), n("tfoot", Ql, [
          o("tr", null, [
            e.selectable ? (t(), n("td", eo)) : w("", !0),
            (t(!0), n(z, null, V(e.columns, (X) => (t(), n(z, {
              key: `s-${X.key}`
            }, [
              e.hidden?.has(X.key) ? w("", !0) : (t(), n("td", {
                key: 0,
                class: P(["px-3 py-2 align-top text-sm whitespace-nowrap", X.cellClass])
              }, [
                oa(X.key) ? (t(), n(z, { key: 0 }, [
                  o("span", to, c(oa(X.key).label), 1),
                  o("span", ao, c(tn(X.key)), 1)
                ], 64)) : w("", !0)
              ], 2))
            ], 64))), 128)),
            W.$slots.actions ? (t(), n("td", no)) : w("", !0)
          ])
        ])) : w("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), T(Vt, {
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
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), T(Vt, {
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
      ]), 1032, ["icon", "title", "description"])) : w("", !0)
    ], 2));
  }
}), wt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, so = /* @__PURE__ */ wt(oo, [["__scopeId", "data-v-c0f7d40f"]]), qe = "w-full min-w-0 px-4 py-6 sm:px-6", O5 = "w-full min-w-0 p-3 sm:p-4", L5 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", ro = "w-full max-w-7xl", io = "px-4 py-4", Oa = "w-full min-w-0", uo = {
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
    const d = R(!1), u = b(() => a.size === "form" ? fo : co);
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
      const C = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (C.length === 0)
        return;
      const k = C[0], $ = C[C.length - 1];
      h.shiftKey && document.activeElement === k ? (h.preventDefault(), $.focus()) : !h.shiftKey && document.activeElement === $ && (h.preventDefault(), k.focus());
    }
    return me(
      () => a.open,
      (h) => {
        h ? (i = document.activeElement, document.addEventListener("keydown", p), Te(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", p), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", p)), (h, C) => (t(), T(dt, { to: "body" }, [
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
              o("div", po, [
                o("h2", vo, c(e.title), 1),
                e.description ? (t(), n("p", go, c(e.description), 1)) : w("", !0)
              ]),
              o("div", {
                class: P(["min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4", x(Oa)])
              }, [
                U(h.$slots, "default")
              ], 2),
              h.$slots.footer ? (t(), n("div", ho, [
                U(h.$slots, "footer")
              ])) : w("", !0)
            ], 10, mo)
          ], 32)) : w("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), bo = 160, Ze = /* @__PURE__ */ O({
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
    function g(v) {
      !a.dismissOnPanelClick || v.target?.closest("input, select, textarea, label, [data-keep-open]") || $();
    }
    async function p() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await Te(), S());
    }
    function h() {
      f = setTimeout($, 180);
    }
    async function C() {
      u.value = null, r.value = !r.value, r.value && (await Te(), S());
    }
    async function k(v, y) {
      u.value = { x: v, y }, r.value = !0, await Te(), S();
    }
    function $() {
      r.value = !1, u.value = null;
    }
    function S() {
      const v = s.value, y = i.value;
      if (!v || !y)
        return;
      const A = y.getBoundingClientRect(), E = 8, I = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : v.getBoundingClientRect();
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
    function M(v) {
      if (!r.value)
        return;
      const y = v.target;
      s.value?.contains(y) || i.value?.contains(y) || (y instanceof Element ? y : y.parentElement)?.closest("[data-pk-overlay]") || $();
    }
    function _(v) {
      v.key === "Escape" && r.value && (v.stopPropagation(), $());
    }
    function m() {
      if (r.value) {
        if (u.value) {
          $();
          return;
        }
        S();
      }
    }
    return ve(() => {
      document.addEventListener("pointerdown", M), document.addEventListener("keydown", _), window.addEventListener("scroll", m, !0), window.addEventListener("resize", m);
    }), ke(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", M), document.removeEventListener("keydown", _), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
    }), l({ close: $, openAt: k }), (v, y) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: y[2] || (y[2] = (A) => e.hoverable && p()),
      onPointerleave: y[3] || (y[3] = (A) => e.hoverable && h())
    }, [
      o("div", { onClick: C }, [
        U(v.$slots, "trigger", { open: r.value })
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
              onPointerenter: y[0] || (y[0] = (A) => e.hoverable && p()),
              onPointerleave: y[1] || (y[1] = (A) => e.hoverable && h()),
              onClick: g
            }, [
              U(v.$slots, "panel", { close: $ })
            ], 38)) : w("", !0)
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
}, Fo = ["disabled"], V5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), d = b(() => a.allMatching ? a.total : a.count), u = b(() => d.value !== void 0), f = b(() => u.value && d.value === 0), g = b(() => a.actions.filter((_) => !_.destructive)), p = b(() => a.actions.filter((_) => _.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function C(_) {
      return h[_.color ?? "gray"] ?? h.gray;
    }
    function k(_) {
      if (_.confirmation) {
        s.value = _;
        return;
      }
      r("run", _.key);
    }
    function $() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function S() {
      i.value = !1, r("export");
    }
    const M = (_) => new Intl.NumberFormat().format(_);
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
          ])], 8, yo)
        ]),
        panel: L(() => [
          o("div", xo, [
            (t(!0), n(z, null, V(g.value, (v) => (t(), n("button", {
              key: v.key,
              type: "button",
              role: "menuitem",
              class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(v)]),
              disabled: e.busy,
              onClick: (y) => k(v)
            }, [
              (t(), n("svg", $o, [
                o("path", {
                  d: x(lt)(v)
                }, null, 8, wo)
              ])),
              o("span", Co, c(v.label), 1)
            ], 10, ko))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: m[0] || (m[0] = (v) => i.value = !0)
            }, [
              (t(), n("svg", Mo, [
                o("path", {
                  d: x(ce)("download")
                }, null, 8, Bo)
              ])),
              m[6] || (m[6] = N(" Export CSV ", -1))
            ], 8, So)) : w("", !0),
            p.value.length ? (t(), n("div", _o, [
              (t(!0), n(z, null, V(p.value, (v) => (t(), n("button", {
                key: v.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (y) => k(v)
              }, [
                (t(), n("svg", Po, [
                  o("path", {
                    d: x(lt)({ ...v, destructive: !0 })
                  }, null, 8, zo)
                ])),
                o("span", Oo, c(v.label), 1)
              ], 8, Ao))), 128))
            ])) : w("", !0)
          ])
        ]),
        _: 1
      }),
      D(it, {
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
            onClick: $
          }, c(s.value?.label), 11, To)
        ]),
        default: L(() => [
          o("p", Lo, [
            m[7] || (m[7] = N(" This will affect ", -1)),
            o("span", Vo, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(c(M(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            m[8] || (m[8] = N(" . ", -1))
          ]),
          f.value ? (t(), n("p", jo, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : w("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(it, {
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
          }, " Export CSV ", 8, Fo)
        ]),
        default: L(() => [
          o("p", Do, [
            m[9] || (m[9] = N(" This will export ", -1)),
            o("span", Eo, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(c(M(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            m[10] || (m[10] = N(" . ", -1))
          ]),
          f.value ? (t(), n("p", Io, " Nothing matches the current filters - there is nothing to export. ")) : w("", !0)
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
      ])) : w("", !0),
      l.$slots.title ? (t(), n("div", Uo, [
        U(l.$slots, "title")
      ])) : w("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: P(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        U(l.$slots, "toolbar")
      ], 2)) : w("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Ho, [
        U(l.$slots, "pagination")
      ])) : w("", !0)
    ]));
  }
}), Se = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", da = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", j5 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", qo = ["aria-expanded"], Go = ["aria-label", "onClick"], Wo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Zo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Jo = {
  key: 0,
  class: "border-b p-1"
}, Yo = ["placeholder"], Xo = { class: "max-h-60 overflow-y-auto p-1" }, Qo = ["aria-selected", "onMouseenter", "onClick"], es = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Zt = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), d = R(null), u = R(!1), f = R(""), g = R(0), p = R({ top: 0, left: 0, width: 0 }), h = b(
      () => a.modelValue.map(
        (H) => a.options.find((K) => K.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), C = b(() => a.searchable ?? a.options.length > 6), k = b(() => {
      const H = new Set(a.modelValue), K = f.value.trim().toLowerCase();
      return a.options.filter((q) => !H.has(q.value)).filter((q) => K ? q.label.toLowerCase().includes(K) : !0);
    }), $ = b(() => a.max !== null && a.modelValue.length >= a.max);
    function S() {
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
    async function M() {
      a.disabled || u.value || (u.value = !0, f.value = "", g.value = 0, await Te(), S(), d.value?.focus());
    }
    function _() {
      u.value = !1, f.value = "";
    }
    function m() {
      u.value ? _() : M();
    }
    function v(H) {
      $.value || (r("update:modelValue", [...a.modelValue, H.value]), f.value = "", g.value = 0, Te(() => {
        S(), d.value?.focus();
      }));
    }
    function y(H) {
      r(
        "update:modelValue",
        a.modelValue.filter((K) => K !== H)
      ), Te(S);
    }
    function A() {
      r("update:modelValue", []), Te(S);
    }
    function E(H) {
      if (!a.disabled) {
        if (H.key === "Escape" && u.value) {
          H.stopPropagation(), _();
          return;
        }
        if (H.key === "Backspace" && f.value === "" && a.modelValue.length > 0) {
          y(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!u.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), M();
          return;
        }
        if (u.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), g.value = Math.min(g.value + 1, k.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), g.value = Math.max(g.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const K = k.value[g.value];
            K && v(K);
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
      u.value && S();
    }
    return me(k, (H) => {
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
            onClick: he((oe) => y(q.value), ["stop"])
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
        h.value.length === 0 ? (t(), n("span", Wo, c(e.placeholder), 1)) : w("", !0),
        o("span", Zo, [
          h.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: he(A, ["stop"])
          }, " Clear ")) : w("", !0),
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
                  "onUpdate:modelValue": K[0] || (K[0] = (q) => f.value = q),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: E
                }, null, 40, Yo), [
                  [Ae, f.value]
                ])
              ])) : w("", !0),
              o("div", Xo, [
                (t(!0), n(z, null, V(k.value, (q, oe) => (t(), n("button", {
                  key: q.value,
                  type: "button",
                  class: P(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", oe === g.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": oe === g.value,
                  onMouseenter: (ne) => g.value = oe,
                  onClick: (ne) => v(q)
                }, c(q.label), 43, Qo))), 128)),
                k.value.length === 0 ? (t(), n("p", es, [
                  $.value ? (t(), n(z, { key: 0 }, [
                    N("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), n(z, { key: 1 }, [
                    N("Nothing matches “" + c(f.value) + "”.", 1)
                  ], 64)) : (t(), n(z, { key: 2 }, [
                    N("Everything is selected.")
                  ], 64))
                ])) : w("", !0)
              ])
            ], 4)) : w("", !0)
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
function ot(e = {}) {
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
    const l = e, a = b(
      () => ot({ variant: l.variant, size: l.size, class: l.class })
    ), r = b(() => l.as === "button" ? l.type : void 0);
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
    const d = (m) => "rules" in m, u = b(() => Object.keys(a.fields));
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
    function C() {
      i.value.rules.push(s()), p();
    }
    function k(m) {
      i.value.rules.splice(m, 1), p();
    }
    function $(m) {
      m.operator = f(m.field)[0], m.value = void 0, p();
    }
    const S = b(() => a.depth + 1 < a.maxDepth);
    function M() {
      i.value = s(), p(), r("apply", null);
    }
    function _() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (m, v) => {
      const y = Ut("PkQueryBuilder", !0);
      return t(), n("div", {
        class: P(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", ls, [
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
        (t(!0), n(z, null, V(i.value.rules, (A, E) => (t(), n("div", {
          key: E,
          class: "flex items-start gap-2"
        }, [
          d(A) ? (t(), T(y, {
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
              onChange: (I) => $(A)
            }, [
              (t(!0), n(z, null, V(u.value, (I) => (t(), n("option", {
                key: I,
                value: I
              }, c(e.fields[I].label), 9, ss))), 128))
            ], 40, os), [
              [Ge, A.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (I) => A.operator = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(z, null, V(f(A.field), (I) => (t(), n("option", {
                key: I,
                value: I
              }, c(g[I] ?? I), 9, is))), 128))
            ], 40, rs), [
              [Ge, A.operator]
            ]),
            A.field && e.fields[A.field]?.kind === "boolean" ? pe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (I) => A.value = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...v[3] || (v[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, ds)), [
              [Ge, A.value]
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
              }, c(I), 9, cs))), 128))
            ], 40, us)), [
              [Ge, A.value]
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
            onClick: (I) => k(E)
          }, " × ", 8, ms)
        ]))), 128)),
        o("div", ps, [
          D(ue, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: L(() => [...v[4] || (v[4] = [
              N("Add rule", -1)
            ])]),
            _: 1
          }),
          S.value ? (t(), T(ue, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: C
          }, {
            default: L(() => [...v[5] || (v[5] = [
              N(" Add group ", -1)
            ])]),
            _: 1
          })) : w("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            v[8] || (v[8] = o("span", { class: "flex-1" }, null, -1)),
            D(ue, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: M
            }, {
              default: L(() => [...v[6] || (v[6] = [
                N(" Clear ", -1)
              ])]),
              _: 1
            }),
            D(ue, {
              type: "button",
              size: "sm",
              onClick: _
            }, {
              default: L(() => [...v[7] || (v[7] = [
                N(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : w("", !0)
        ])
      ], 2);
    };
  }
}), Jt = /* @__PURE__ */ O({
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
function T5(e) {
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
    return (r, s) => (t(), T(x(Ht), re({
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
}), Yt = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(Kt), null, {
      default: L(() => [
        D(gs),
        D(x(qt), re({
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
            D(x(Qe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                D(x(Gt), { class: "size-4" }),
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
    const f = b(
      () => a.filterSchema.filter(
        (G) => a.filters[G.key] !== null && a.filters[G.key] !== void 0
      ).length
    ), g = b(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), p = b(() => a.search !== "" || f.value > 0), h = b(() => a.indicators.length ? a.indicators : a.filterSchema.filter((G) => a.filters[G.key] !== null && a.filters[G.key] !== void 0).map((G) => ({
      key: G.key,
      label: `${G.label}: ${String(a.filters[G.key])}`,
      removable: !0
    })));
    function C(G) {
      r("group", G);
    }
    function k(G) {
      r("clear-filter", G);
    }
    function $(G) {
      return G.type === "multiselect";
    }
    function S(G) {
      const B = u.value[G.key];
      return Array.isArray(B) ? B : B == null ? [] : [B];
    }
    function M(G) {
      return S(G).filter(
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
    function v(G, B) {
      const F = u.value[G.key];
      if (typeof F != "string" || !F.includes(".."))
        return "";
      const [j, J] = F.split("..");
      return B === "from" ? j ?? "" : J ?? "";
    }
    function y(G, B, F) {
      const j = B === "from" ? F : v(G, "from"), J = B === "to" ? F : v(G, "to");
      u.value = {
        ...u.value,
        [G.key]: j && J ? `${j}..${J}` : null
      };
    }
    function A(G, B, F) {
      const j = B === "from" ? F : v(G, "from"), J = B === "to" ? F : v(G, "to");
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
    return (G, B) => (t(), n("div", hs, [
      o("div", bs, [
        o("div", ys, [
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
            class: P(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Se)])
          }, null, 10, xs), [
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
          f.value ? (t(), n("span", ks, c(f.value), 1)) : w("", !0)
        ]),
        D(Jt, {
          open: s.value,
          "onUpdate:open": B[4] || (B[4] = (F) => s.value = F)
        }, {
          default: L(() => [
            D(Yt, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: L(() => [
                o("div", $s, [
                  B[16] || (B[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", ws, [
                    e.filterSchema.length ? (t(), n("div", Cs, [
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
                        o("label", Ss, c(F.label), 1),
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
                          }, c(j.label), 9, Bs))), 128))
                        ], 40, Ms)) : w("", !0)
                      ]))), 128))
                    ])) : w("", !0),
                    o("div", _s, [
                      B[14] || (B[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", As, [
                        (t(!0), n(z, null, V(e.columns, (F) => (t(), n("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (j) => q(F.key)
                        }, [
                          o("span", null, c(F.label), 1),
                          K.value.has(F.key) ? w("", !0) : (t(), n("span", zs, "On"))
                        ], 8, Ps))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", Os, [
                      B[15] || (B[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", Ls, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: B[2] || (B[2] = (F) => {
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
                        }, c(F.label), 9, Vs))), 128))
                      ])
                    ])) : w("", !0)
                  ]),
                  o("div", js, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !g.value,
                      onClick: ne
                    }, " Apply filters ", 8, Ts)) : w("", !0),
                    p.value ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: B[3] || (B[3] = (F) => {
                        Z(), s.value = !1;
                      })
                    }, " Clear search and filters ")) : w("", !0)
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
            class: P(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Se)])
          }, null, 10, Is), [
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
          ])])) : w("", !0)
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
              f.value ? (t(), n("span", Ns, c(f.value), 1)) : w("", !0)
            ], 10, Fs)
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
            o("div", Rs, [
              (t(!0), n(z, null, V(e.filterSchema, (j) => (t(), n("div", {
                key: j.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Us, c(j.label), 1),
                $(j) ? (t(), T(Zt, {
                  key: 0,
                  "model-value": M(j),
                  options: _(j),
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
                    B[21] || (B[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, V(H(j), (J) => (t(), n("option", {
                      key: String(J.value),
                      value: J.value
                    }, c(J.label), 9, Ks))), 128))
                  ], 40, Hs),
                  o("div", qs, [
                    o("input", {
                      type: "date",
                      value: v(j, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => y(
                        j,
                        "from",
                        J.target.value
                      )
                    }, null, 40, Gs),
                    o("input", {
                      type: "date",
                      value: v(j, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => y(
                        j,
                        "to",
                        J.target.value
                      )
                    }, null, 40, Ws)
                  ])
                ], 64)) : j.type === "numberrange" ? (t(), n("div", Zs, [
                  o("input", {
                    type: "number",
                    value: v(j, "from"),
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
                    value: v(j, "to"),
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
                  o("span", er, c(j.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: P([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[j.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (J) => m(j, u.value[j.key] === !1 ? null : !1)
                  }, c(j.falseLabel ?? "No") + " only ", 11, tr)
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
                  }, c(J.label), 9, nr))), 128))
                ], 40, ar))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !g.value,
              onClick: (j) => E(F)
            }, " Apply filters ", 8, lr)
          ]),
          _: 1
        })) : w("", !0),
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
            o("div", or, [
              (t(!0), n(z, null, V(e.columns, (F) => (t(), n("button", {
                key: F.key,
                type: "button",
                class: P(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (j) => q(F.key)
              }, [
                K.value.has(F.key) ? (t(), n("span", ir)) : (t(), n("svg", rr, [...B[25] || (B[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + c(F.label), 1)
              ], 10, sr))), 128))
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
            F === "table" ? (t(), n("svg", cr, [...B[28] || (B[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", fr, [...B[29] || (B[29] = [
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
        ])) : w("", !0),
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
        ])], 10, mr)) : w("", !0),
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
              }, c(j.label), 11, hr))), 128))
            ])
          ]),
          _: 1
        })) : w("", !0),
        p.value ? (t(), n("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: Z
        }, " Clear ")) : w("", !0),
        e.loading ? (t(), n("span", br, "Loading…")) : w("", !0)
      ]),
      h.value.length ? (t(), n("div", yr, [
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
            onClick: (j) => k(F.key)
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
          ])], 8, kr)) : w("", !0)
        ], 8, xr))), 128)),
        h.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: B[8] || (B[8] = (F) => r("clear-filters"))
        }, " Clear all ")) : w("", !0)
      ])) : w("", !0)
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
}, Tr = ["href"], D5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = Nt(), i = b(() => a.columns.filter((C) => C.type !== "image")), d = b(() => !!s.actions), u = b(() => !!a.title || d.value), f = b(() => a.filterSchema.length > 0), g = b(
      () => a.columns.map((C) => ({ key: C.key, label: C.label, locked: !0 }))
    );
    function p(C, k) {
      return k == null || k === "" ? "None" : C.type === "date" || C.type === "datetime" ? new Date(String(k)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...C.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof k == "number" ? new Intl.NumberFormat().format(k) : String(k);
    }
    function h(C) {
      return C == null || C === "";
    }
    return (C, k) => (t(), T(Ko, null, st({
      default: L(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", Mr, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(Vt, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, st({ _: 2 }, [
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
                (t(!0), n(z, null, V(i.value, ($) => (t(), n("th", {
                  key: $.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, c($.label), 1))), 128))
              ])
            ]),
            o("tbody", Pr, [
              (t(!0), n(z, null, V(e.rows, ($, S) => (t(), n("tr", {
                key: $.id ?? S,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(z, null, V(i.value, (M) => (t(), n("td", {
                  key: M.key,
                  class: P(["px-3 whitespace-nowrap", [
                    M.mono ? "font-mono text-xs" : "",
                    M.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  U(C.$slots, `cell:${M.key}`, {
                    row: $,
                    value: $[M.key],
                    column: M
                  }, () => [
                    e.recordBase && $.id != null && M === i.value[0] ? (t(), n("a", {
                      key: 0,
                      href: `${e.recordBase}/${$.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, c(p(M, $[M.key])), 9, zr)) : h($[M.key]) ? (t(), n("span", Or, " None ")) : (t(), n(z, { key: 2 }, [
                      N(c(p(M, $[M.key])), 1)
                    ], 64))
                  ])
                ], 2))), 128))
              ]))), 128))
            ])
          ])
        ])) : w("", !0)
      ]),
      _: 2
    }, [
      u.value ? {
        name: "title",
        fn: L(() => [
          o("div", wr, [
            e.title ? (t(), n("h3", Cr, c(e.title), 1)) : w("", !0)
          ]),
          d.value ? (t(), n("div", Sr, [
            U(C.$slots, "actions")
          ])) : w("", !0)
        ]),
        key: "0"
      } : void 0,
      f.value ? {
        name: "toolbar",
        fn: L(() => [
          D($r, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: g.value,
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
          e.nextCursor ? (t(), n("div", Lr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: k[6] || (k[6] = ($) => r("load", e.nextCursor))
            }, c(e.loading ? "Loading…" : "Load more"), 9, Vr)
          ])) : e.capped ? (t(), n("p", jr, [
            N(" Showing the first " + c(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Tr)) : (t(), n(z, { key: 1 }, [
              N("Open the full list to search or filter the rest.")
            ], 64))
          ])) : w("", !0)
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
    return (f, g) => (t(), n("ol", Dr, [
      (t(!0), n(z, null, V(e.steps, (p, h) => (t(), n("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(_e(e.interactive ? "button" : "div"), re({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(h)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: h > e.activeStep } : {}, {
          onClick: (C) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: L(() => [
            o("span", {
              class: P(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              u(h) ? (t(), n("svg", Er, [...g[0] || (g[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), n("svg", Ir, [...g[1] || (g[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                N(c(h + 1), 1)
              ], 64))
            ], 2),
            o("span", Fr, [
              o("span", null, c(p.label), 1),
              p.description ? (t(), n("span", Nr, c(p.description), 1)) : w("", !0)
            ]),
            e.hasError(h) ? (t(), n("span", Rr)) : w("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), n("span", Ur)) : w("", !0)
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
function E5(e) {
  return ct.has(e);
}
function I5() {
  return [...ct.keys()].sort();
}
function F5() {
  ct.clear();
}
class qr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function N5(e) {
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
const R5 = "text-sm text-muted-foreground font-normal", U5 = "text-xs text-muted-foreground font-normal", vt = "text-xs text-muted-foreground font-normal leading-snug", Zr = "text-foreground font-normal", Jr = "placeholder:text-muted-foreground placeholder:font-normal", Re = `${Zr} ${Jr}`, Yr = {
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
          e.generalError ? (t(), n("p", Yr, c(e.generalError), 1)) : w("", !0),
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
      default: L((f) => [
        D(x(pn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            U(d.$slots, "default", Oe(Fe(f)), () => [
              D(x(_a), { class: "size-3.5" })
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
    const a = e, r = l, s = R(null), i = R(!1), d = R(null), u = R(null), f = R(null), g = b(() => a.accept.map((v) => `.${v}`).join(",")), p = b(() => f.value ?? a.modelValue?.url ?? null), h = b(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(a.maxKilobytes * 1024)}`);
    function C(v) {
      if (!v)
        return "";
      const y = ["B", "KB", "MB", "GB"];
      let A = v, E = 0;
      for (; A >= 1024 && E < y.length - 1; )
        A /= 1024, E++;
      return `${A.toFixed(A < 10 && E > 0 ? 1 : 0)} ${y[E]}`;
    }
    function k(v) {
      return v.split(".").pop()?.toLowerCase() ?? "";
    }
    function $(v) {
      return a.accept.length && !a.accept.includes(k(v.name)) ? `${k(v.name).toUpperCase() || "That"} files are not accepted here.` : v.size > a.maxKilobytes * 1024 ? `That file is ${C(v.size)}; the limit is ${C(a.maxKilobytes * 1024)}.` : null;
    }
    async function S(v) {
      const y = v?.[0];
      if (!(!y || a.disabled) && (u.value = $(y), !u.value)) {
        M(), a.image && y.type.startsWith("image/") && (f.value = URL.createObjectURL(y)), d.value = 0;
        try {
          const A = await a.upload(y, (E) => {
            d.value = E;
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
    return (v, y) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", si, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ri)) : (t(), n("span", ii, c(k(e.modelValue.name) || "file"), 1)),
        o("span", di, [
          o("span", ui, c(e.modelValue.name), 1),
          o("span", ci, [
            N(c(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              y[4] || (y[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, fi)
            ], 64)) : (t(), n(z, { key: 1 }, [
              N(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: _
        }, [...y[5] || (y[5] = [
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
        onDragover: y[1] || (y[1] = he((A) => i.value = !0, ["prevent"])),
        onDragleave: y[2] || (y[2] = he((A) => i.value = !1, ["prevent"])),
        onDrop: he(m, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: g.value,
          disabled: e.disabled,
          onChange: y[0] || (y[0] = (A) => S(A.target.files))
        }, null, 40, ei),
        y[3] || (y[3] = o("svg", {
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
        o("span", li, c(h.value), 1),
        d.value !== null ? (t(), n("span", oi, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${d.value}%` })
          }, null, 4)
        ])) : w("", !0)
      ], 34)),
      u.value ? (t(), n("p", mi, c(u.value), 1)) : w("", !0)
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
    const p = b(() => {
      const S = /* @__PURE__ */ new Map();
      for (const M of d.value) {
        const _ = M.key.trim();
        _ !== "" && S.set(_, (S.get(_) ?? 0) + 1);
      }
      return new Set([...S.entries()].filter(([, M]) => M > 1).map(([M]) => M));
    }), h = b(
      () => new Set(
        d.value.map((S) => S.key.trim()).filter((S) => S !== "" && !s.test(S))
      )
    ), C = b(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function k() {
      C.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function $(S) {
      d.value = d.value.filter((M) => M.uid !== S), g();
    }
    return (S, M) => (t(), n("div", pi, [
      d.value.length ? (t(), n("div", vi, [
        o("div", gi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          M[0] || (M[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, V(d.value, (_) => (t(), n("div", {
          key: _.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", hi, [
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
            }, null, 42, bi), [
              [Ae, _.key]
            ]),
            h.value.has(_.key.trim()) ? (t(), n("p", yi, " Letters, numbers, underscores and dashes only. ")) : p.value.has(_.key.trim()) ? (t(), n("p", xi, " Used twice - only the last value will be saved. ")) : w("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (m) => _.value = m,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: g
          }, null, 40, ki), [
            [Ae, _.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${_.key || "this entry"}`,
            onClick: (m) => $(_.uid)
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
          ])], 8, $i)
        ]))), 128))
      ])) : (t(), n("p", wi, " Nothing here yet. ")),
      o("div", Ci, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || C.value,
          onClick: k
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
          N(" Add " + c(e.keyLabel.toLowerCase()), 1)
        ], 8, Si),
        e.maxPairs !== null ? (t(), n("p", Mi, c(d.value.length) + " of " + c(e.maxPairs), 1)) : w("", !0)
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
    ], u = b(() => d.filter(($) => a.toolbar.includes($.id))), f = b(() => a.toolbar.includes("link")), g = R(0);
    function p() {
      const $ = s.value?.innerHTML ?? "", S = (s.value?.innerText ?? "").trim();
      g.value = S.length;
      const M = S === "" ? null : $;
      i = M, r("update:modelValue", M);
    }
    function h($) {
      a.disabled || (s.value?.focus(), document.execCommand($.command, !1, $.argument), p());
    }
    function C() {
      if (a.disabled)
        return;
      const $ = window.prompt("Link address");
      $ && (s.value?.focus(), document.execCommand("createLink", !1, $), p());
    }
    function k($) {
      $.preventDefault();
      const S = $.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, S), p();
    }
    return ve(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", g.value = s.value.innerText.trim().length);
    }), me(
      () => a.modelValue,
      ($) => {
        $ !== i && s.value && (s.value.innerHTML = $ ?? "", g.value = s.value.innerText.trim().length);
      }
    ), ($, S) => (t(), n("div", _i, [
      o("div", Ai, [
        (t(!0), n(z, null, V(u.value, (M) => (t(), n("button", {
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
          (t(), n("svg", zi, [
            o("path", {
              d: M.path
            }, null, 8, Oi)
          ]))
        ], 40, Pi))), 128)),
        f.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: S[1] || (S[1] = he(() => {
          }, ["prevent"])),
          onClick: C
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
        ])], 40, Li)) : w("", !0)
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
        onPaste: k
      }, null, 42, Vi),
      e.maxLength !== null ? (t(), n("div", ji, c(g.value) + " / " + c(e.maxLength), 1)) : w("", !0)
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
    const a = e, r = l, s = b(() => !!a.field.multiple), i = b(() => !!a.field.grouped), d = b(() => !!a.field.hiddenLabels), u = b(() => a.field.inline !== !1), f = b(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    );
    function g(v) {
      return s.value ? f.value.some((y) => y == v.value) : a.modelValue != null && v.value == a.modelValue;
    }
    function p(v) {
      if (!a.disabled) {
        if (s.value) {
          r(
            "update:modelValue",
            g(v) ? f.value.filter((y) => y != v.value) : [...f.value, v.value]
          );
          return;
        }
        r("update:modelValue", v.value);
      }
    }
    function h(v) {
      return a.field.colors?.[String(v.value)] ?? "primary";
    }
    function C(v) {
      const y = a.field.icons?.[String(v.value)];
      return y ? ce(y) : null;
    }
    function k(v) {
      return a.field.tooltips?.[String(v.value)] ?? v.label;
    }
    const $ = {
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
      const y = h(v), A = g(v);
      return [
        Se,
        "inline-flex items-center justify-center gap-1.5 border px-3 py-1.5 text-sm font-medium transition-colors",
        i.value ? "rounded-none first:rounded-l-md last:rounded-r-md -ml-px first:ml-0" : "rounded-md",
        A ? $[y] ?? $.primary : S[y] ?? S.primary,
        a.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ].join(" ");
    }
    const _ = b(() => {
      if (!(u.value || i.value) && a.field.columns && a.field.columns > 1)
        return { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` };
    }), m = b(() => i.value ? "inline-flex flex-wrap" : u.value ? "flex flex-wrap gap-2" : "grid gap-2");
    return (v, y) => (t(), n("div", {
      role: s.value ? "group" : "radiogroup",
      class: P(m.value),
      style: se(_.value),
      "data-test": "toggle-buttons-field"
    }, [
      (t(!0), n(z, null, V(e.options, (A) => (t(), n("label", {
        key: String(A.value),
        class: P(M(A)),
        title: k(A)
      }, [
        o("input", {
          class: "sr-only",
          type: s.value ? "checkbox" : "radio",
          name: s.value ? void 0 : `f-${e.field.key}`,
          value: A.value,
          checked: g(A),
          disabled: e.disabled,
          "aria-label": d.value ? A.label : void 0,
          onChange: (E) => p(A)
        }, null, 40, Fi),
        C(A) ? (t(), n("svg", Ni, [
          o("path", {
            d: C(A)
          }, null, 8, Ri)
        ])) : w("", !0),
        d.value ? w("", !0) : (t(), n("span", Ui, c(A.label), 1))
      ], 10, Ii))), 128)),
      e.options.length === 0 ? (t(), n("p", Hi, " Nothing to choose from yet. ")) : w("", !0)
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
    const a = sa(() => import("./PkRepeater-J84jGe3T.js")), r = sa(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = R(!1), u = R(""), f = R([]), g = R(!1), p = R(null);
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
    function k(le) {
      p.value = le.label, i("change", le.value), d.value = !1, u.value = "";
    }
    function $() {
      p.value = null, i("change", null);
    }
    const S = ht("panelPicker", null), M = ht("panelCreateOption", null), _ = R(!1), m = R(!1), v = R({}), y = R(null), A = b(() => Gr(s.field)), E = b(() => Wr(s.field));
    function I() {
      v.value = {}, y.value = null, _.value = !0, d.value = !1;
    }
    function ae() {
      m.value || (_.value = !1, v.value = {}, y.value = null);
    }
    async function H(le) {
      if (M) {
        m.value = !0, v.value = {}, y.value = null;
        try {
          const Y = await M.run(s.field.key, { ...le });
          k(Y), _.value = !1;
        } catch (Y) {
          Y instanceof qr ? (v.value = Y.fieldErrors, y.value = Object.keys(Y.fieldErrors).length === 0 ? Y.message : null) : y.value = Y instanceof Error ? Y.message : "Could not create that option.";
        } finally {
          m.value = !1;
        }
      }
    }
    const K = b(() => {
      if (!s.field.tableSelect || !S?.base)
        return;
      const le = S.returnUrl || "/";
      return `${S.base}/pick/${s.field.key}?return=${encodeURIComponent(le)}`;
    }), q = b(() => s.field.morphTo ?? []), oe = b(() => {
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
    ke(() => clearTimeout(h));
    const B = b(() => Kr(s.field.type)), F = b(
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
            N(c(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", Wi, "*")) : w("", !0)
          ], 10, Gi),
          e.field.hint ? (t(), n("span", {
            key: 0,
            class: P(["flex items-center gap-1", x(vt)])
          }, [
            N(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: Y[0] || (Y[0] = (ee) => j(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, Zi)) : w("", !0)
          ], 2)) : w("", !0)
        ]),
        B.value ? (t(), T(_e(B.value), {
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
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Zt, {
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
            }, c(ee.label), 9, Xi))), 128))
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
              }, c(p.value ?? (oe.value.id ? String(oe.value.id) : "Search…")), 3)
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
                (t(!0), n(z, null, V(f.value, (ee) => (t(), n("button", {
                  key: String(ee.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => G(ee)
                }, c(ee.label), 9, nd))), 128))
              ])
            ])) : w("", !0),
            d.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: Y[11] || (Y[11] = (ee) => d.value = !1)
            })) : w("", !0)
          ])) : w("", !0)
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
            }, c(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he($, ["stop"])
            }, " ✕ ")) : w("", !0)
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
              g.value ? (t(), n("p", id, " Searching… ")) : f.value.length === 0 ? (t(), n("p", dd, " No matches ")) : w("", !0),
              (t(!0), n(z, null, V(f.value, (ee) => (t(), n("button", {
                key: String(ee.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => k(ee)
              }, c(ee.label), 9, ud))), 128)),
              e.field.createOption && x(M) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: I
              }, [
                Y[26] || (Y[26] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + c(E.value), 1)
              ])) : w("", !0)
            ])
          ])) : w("", !0),
          d.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: Y[13] || (Y[13] = (ee) => d.value = !1)
          })) : w("", !0)
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
          }, c(ee.label), 9, fd))), 128))
        ], 42, cd)) : e.field.type === "toggle" ? (t(), n("label", md, [
          D(x(We), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Y[15] || (Y[15] = (ee) => i("change", ee))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(x(vt))
          }, c(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", pd, [
          D(x(Qr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Y[16] || (Y[16] = (ee) => i("change", ee === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(x(vt))
          }, c(e.field.help ?? e.field.label), 3)
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
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", gd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: Y[18] || (Y[18] = (ee) => j(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, hd)) : w("", !0),
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
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", yd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Y[20] || (Y[20] = (ee) => j(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, xd)) : w("", !0)
        ], 2)) : F.value ? (t(), n("div", {
          key: 15,
          class: P([
            "border-input flex h-9 overflow-hidden rounded-md border",
            x(da),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", $d, c(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: Y[22] || (Y[22] = (ee) => j(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, wd)) : w("", !0),
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
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Sd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Y[24] || (Y[24] = (ee) => j(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Md)) : w("", !0)
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
          }, c(ee), 11, _d))), 128))
        ])) : w("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", Ad, [
          (t(!0), n(z, null, V(e.field.chips, (ee, Ce) => (t(), n("button", {
            key: Ce,
            type: "button",
            title: ee,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (la) => ye(String(Ce))
          }, c(Ce), 9, Pd))), 128))
        ])) : w("", !0),
        K.value ? (t(), n("a", {
          key: 18,
          href: K.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, zd)) : w("", !0),
        e.error ? (t(), n("p", Od, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: P(x(vt))
        }, c(e.field.help), 3)) : w("", !0)
      ])),
      e.field.createOption && x(M) ? (t(), T(Xr, {
        key: 2,
        open: _.value,
        title: A.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: m.value,
        errors: v.value,
        "general-error": y.value,
        onClose: ae,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : w("", !0)
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
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), d = R(0), u = b(
      () => (a.node.children ?? []).map((_) => ({
        label: _.label ?? "",
        description: _.description
      }))
    ), f = b(() => a.depth === 0), g = b(() => {
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
    }), p = b(() => {
      const _ = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return _[a.node.tone ?? "info"] ?? _.info;
    }), h = b(() => {
      const _ = a.node.columns ?? 1;
      return _ >= 3 ? "sm:grid-cols-3" : _ === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function C(_) {
      const m = _.children?.length ?? 1;
      return m >= 3 ? "md:grid-cols-3" : m === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function k(_ = 1) {
      return _ >= 4 ? "md:col-span-4" : _ === 3 ? "md:col-span-3" : _ === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function $(_) {
      const m = [], v = (y) => {
        y.component === "field" && y.key && m.push(y.key), y.children?.forEach(v);
      };
      return v(_), m.some((y) => a.errors[y]);
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
      const v = Ut("SchemaNode", !0);
      return e.node.component === "field" && S(e.node) ? (t(), T(Xe, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (y) => e.searchOptions(e.node.key, y) : void 0,
        upload: M(e.node.key),
        discard: e.discard,
        onChange: m[0] || (m[0] = (y) => r("change", e.node.key, y)),
        onAffixAction: m[1] || (m[1] = (y) => r("affix-action", e.node.key, y))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && S(e.node) ? (t(), n("section", {
        key: 1,
        class: P(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: P(["flex items-start justify-between gap-3", [
            f.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: m[2] || (m[2] = (y) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", Ld, [
            e.node.icon ? (t(), n("div", Vd, [
              (t(), n("svg", jd, [
                o("path", {
                  d: x(ce)(e.node.icon)
                }, null, 8, Td)
              ]))
            ])) : w("", !0),
            o("div", Dd, [
              o("h3", Ed, c(e.node.label), 1),
              e.node.description ? (t(), n("p", Id, c(e.node.description), 1)) : w("", !0)
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
          ])], 2)) : w("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: P(["grid grid-cols-1 gap-4", [h.value, f.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (y, A) => (t(), T(v, {
            key: A,
            node: y,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: P(y.span && y.span >= 2 ? "sm:col-span-2" : ""),
            onChange: m[3] || (m[3] = (E, I) => r("change", E, I)),
            onAffixAction: m[4] || (m[4] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "card" && S(e.node) ? (t(), n("section", Fd, [
        o("header", Nd, [
          o("h3", Rd, c(e.node.title), 1),
          e.node.description ? (t(), n("p", Ud, c(e.node.description), 1)) : w("", !0)
        ]),
        o("div", {
          class: P(["grid grid-cols-1 gap-4 px-4 py-4", h.value])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (y, A) => (t(), T(v, {
            key: A,
            node: y,
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
      ])) : e.node.component === "columns" && S(e.node) ? (t(), n("div", {
        key: 3,
        class: P(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (y, A) => (t(), T(v, {
          key: A,
          node: y,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: P(y.component === "column" ? k(y.span) : ""),
          onChange: m[7] || (m[7] = (E, I) => r("change", E, I)),
          onAffixAction: m[8] || (m[8] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && S(e.node) ? (t(), n("div", Hd, [
        (t(!0), n(z, null, V(e.node.children ?? [], (y, A) => (t(), T(v, {
          key: A,
          node: y,
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
        (t(!0), n(z, null, V(e.node.children ?? [], (y, A) => (t(), T(v, {
          key: A,
          node: y,
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
        (t(!0), n(z, null, V(e.node.children ?? [], (y, A) => (t(), T(v, {
          key: A,
          node: y,
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
        o("legend", qd, c(e.node.label), 1),
        e.node.description ? (t(), n("p", Gd, c(e.node.description), 1)) : w("", !0),
        o("div", {
          class: P(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (y, A) => (t(), T(v, {
            key: A,
            node: y,
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
        e.node.title ? (t(), n("p", Wd, c(e.node.title), 1)) : w("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: P(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (y, A) => (t(), n("button", {
            key: A,
            type: "button",
            class: P([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === A ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (E) => i.value = A
          }, [
            N(c(y.label) + " ", 1),
            $(y) ? (t(), n("span", Jd)) : w("", !0)
          ], 10, Zd))), 128))
        ], 2),
        (t(!0), n(z, null, V(e.node.children ?? [], (y, A) => pe((t(), n("div", {
          key: A,
          class: P(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(y.children ?? [], (E, I) => (t(), T(v, {
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
        D(Hr, {
          class: P(["p-4", f.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (y) => $((e.node.children ?? [])[y]),
          "onUpdate:activeStep": m[19] || (m[19] = (y) => d.value = y)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, V(e.node.children ?? [], (y, A) => pe((t(), n("div", {
          key: A,
          class: P(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(y.children ?? [], (E, I) => (t(), T(v, {
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
        o("div", Yd, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: m[22] || (m[22] = (y) => d.value--)
          }, " Back ", 8, Xd),
          d.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: m[23] || (m[23] = (y) => d.value++)
          }, " Next ")) : w("", !0)
        ])
      ], 2)) : w("", !0);
    };
  }
}), H5 = /* @__PURE__ */ O({
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
          (t(!0), n(z, null, V(e.form?.nodes ?? [], (f, g) => (t(), T(ja, {
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
    }, s = b(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = b(() => l.icons[s.value] ?? l.defaultIcon), d = b(() => a[i.value] ?? a.dot), u = b(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), f = b(() => l.labels[s.value] ?? String(l.value ?? "-"));
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
        o("path", { d: d.value }, null, 8, tu)
      ], 10, eu)),
      o("span", au, c(f.value), 1)
    ], 8, Qd));
  }
}), lu = ["aria-label"], ou = ["fill"], K5 = /* @__PURE__ */ O({
  __name: "RatingCell",
  props: {
    value: {},
    max: { default: 5 }
  },
  setup(e) {
    const l = e, a = b(() => Math.max(1, Math.min(10, Number(l.max ?? 5)))), r = b(() => {
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
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = b(() => {
      const d = typeof l.src == "string" ? l.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = b(() => {
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
      }, null, 40, su)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        N(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", ru, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : w("", !0)
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
    const l = e, a = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = b(() => {
      const s = (l.value ?? "").trim();
      return a.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), n("span", du, "-")) : (t(), n("span", uu, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", cu, c(r.value), 1)) : (t(), n("span", fu, c(r.value), 1))
    ]));
  }
}), pu = { class: "inline-flex items-center" }, vu = ["checked", "aria-label"], gu = { class: "sr-only" }, q5 = /* @__PURE__ */ O({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const l = e, a = b(() => {
      const s = l.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = b(
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
      o("span", gu, c(r.value), 1)
    ]));
  }
}), hu = {
  key: 0,
  class: "text-muted-foreground"
}, bu = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, G5 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = b(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", bu, c(a.value), 1)) : (t(), n("span", hu, "—"));
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
}, W5 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = b(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", yu, c(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", xu, "—")) : (t(), n("span", ku, c(a.value.length) + " " + c(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), $u = ["data-variant"], wu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ke = /* @__PURE__ */ O({
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
    }, r = b(
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
}, Z5 = /* @__PURE__ */ O({
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
    const r = b(() => a(l.value, l.separator)), s = b(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = b(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), n("span", Cu, "None")) : (t(), n("span", Su, [
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
      })) : w("", !0)
    ]));
  }
}), Mu = ["aria-checked", "aria-label", "title", "disabled"], Bu = ["value", "disabled"], _u = ["value"], J5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = b(() => a.value === !0 || a.value === 1 || a.value === "1"), i = b(() => a.busy || a.disabled), d = b(
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
      onChange: f
    }, [
      (t(!0), n(z, null, V(e.options, (h, C) => (t(), n("option", {
        key: C,
        value: C
      }, c(h), 9, _u))), 128))
    ], 40, Bu));
  }
}), Xt = {
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
function Y5(e) {
  const l = b(
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
  ), a = b(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = a.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), f = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return Xt[f] ?? "outline";
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
}, X5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = b(() => a.busy || a.disabled), i = b(() => String(a.value ?? "")), d = b(() => `Select ${(a.label || "value").trim().toLowerCase()}`);
    function u(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function f(h) {
      const C = a.colors[u(h)] ?? a.defaultColor ?? "neutral";
      return Xt[C] ?? "outline";
    }
    function g(h) {
      return a.options[h] ?? h;
    }
    function p(h, C) {
      if (s.value || h === i.value) {
        C();
        return;
      }
      r("change", h), C();
    }
    return (h, C) => (t(), n("div", {
      onClick: C[0] || (C[0] = he(() => {
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
            (t(), n("svg", Ou, [
              o("path", {
                d: x(ce)("chevron-down")
              }, null, 8, Lu)
            ]))
          ], 8, zu)
        ]),
        panel: L(({ close: k }) => [
          o("div", Vu, c(d.value), 1),
          (t(!0), n(z, null, V(e.options, ($, S) => (t(), n("button", {
            key: S,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (M) => p(String(S), k)
          }, [
            D(Ke, {
              variant: f(S),
              class: "capitalize"
            }, {
              default: L(() => [
                N(c($), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(S) === i.value ? (t(), n("svg", Tu, [
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
}, Qu = ["d"], ec = { class: "min-w-0 flex-1 truncate" }, Q5 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(null), d = R(null), u = b(() => r.groups.flatMap((M) => M.actions)), f = b(() => u.value.filter((M) => !M.destructive)), g = b(() => u.value.filter((M) => M.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h(M) {
      return p[M.color ?? "gray"] ?? p.gray;
    }
    const C = b(() => u.value.length === 0);
    function k(M) {
      s("run", M);
    }
    function $(M) {
      C.value || (M.preventDefault(), i.value?.openAt(M.clientX, M.clientY));
    }
    function S(M) {
      if (M.key !== "ArrowDown" && M.key !== "ArrowUp")
        return;
      const _ = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (_.length === 0)
        return;
      M.preventDefault();
      const m = _.indexOf(document.activeElement), v = M.key === "ArrowDown" ? 1 : -1, y = (m + v + _.length) % _.length;
      _[y]?.focus();
    }
    return l({ openContextMenu: $ }), (M, _) => (t(), n("div", Iu, [
      C.value ? w("", !0) : (t(), T(Ze, {
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
            onKeydown: S
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
                (t(), n("svg", Hu, [
                  o("path", {
                    d: x(lt)(m)
                  }, null, 8, Ku)
                ])),
                o("span", qu, c(m.label), 1)
              ], 10, Uu)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(m)]),
                disabled: e.busy === m.key,
                onClick: (v) => k(m)
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
                    d: x(lt)(m)
                  }, null, 8, Wu)
                ], 2)),
                o("span", Zu, c(m.label), 1)
              ], 10, Gu))
            ], 64))), 128)),
            g.value.length ? (t(), n("div", Ju, [
              (t(!0), n(z, null, V(g.value, (m) => (t(), n("button", {
                key: m.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === m.key,
                onClick: (v) => k(m)
              }, [
                (t(), n("svg", Xu, [
                  o("path", {
                    d: x(lt)({ ...m, destructive: !0 })
                  }, null, 8, Qu)
                ])),
                o("span", ec, c(m.label), 1)
              ], 8, Yu))), 128))
            ])) : w("", !0)
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
}, Tt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, bt = 12, yt = 20, tc = [0, 0.25, 0.5, 0.75, 1], Qt = "alxtexhpanel.appearance", Be = {
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
let Je = !1;
const Ta = "alxtexhpanel.appearance.vars", Dt = "pk-appearance";
function tt() {
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
  const l = tt();
  l && (l.__panelAppearance = { ...e });
}
function ac(e) {
  if (typeof document > "u")
    return;
  let l = document.getElementById(Dt);
  l || (l = document.createElement("style"), l.id = Dt, document.head.appendChild(l));
  const a = Object.entries(e).map(([r, s]) => `${r}: ${s};`).join(" ");
  l.textContent = `:root { ${a} }`;
}
function e3() {
  Je = !1, xt = null, je.value = { ...Be };
  const e = tt();
  e && (e.__panelAppearanceApplied = !1), typeof document < "u" && document.getElementById(Dt)?.remove();
}
function ea(e) {
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
  const l = jt[e.primary] ?? jt.slate, a = Tt[e.surface] ?? Tt.neutral, r = a.chroma, s = a.hue, d = ea(e) ? {
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
    dark: ea(e),
    theme: e.theme,
    vars: Ia(e),
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
}
function ta() {
  if (typeof window > "u")
    return { ...Be };
  try {
    const e = localStorage.getItem(Qt);
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
function Fa(e) {
  const l = ta(), a = e ? { ...Be, ...l, ...e } : { ...Be, ...l }, r = !Je, s = Da(a);
  if (je.value = a, Je = !0, e) {
    Ea(a);
    try {
      localStorage.setItem(Qt, JSON.stringify(a));
    } catch {
    }
  }
  const d = tt()?.__panelAppearanceApplied === !0;
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
    Et(a);
  }
}
function t3() {
  Fa(lc());
}
function a3(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Fa(l);
}
let Na = null;
function n3(e) {
  Na = e;
}
let Ra = {};
function oc(e) {
  if (Ra = e, !(typeof document > "u") && !ta().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Et(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = Ia(e), r = { ...a, ...e.primaryChosen ? {} : Ra }, s = {
    dark: ea(e),
    theme: e.theme,
    vars: r,
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
  l.classList.toggle("dark", s.dark);
  for (const [d, u] of Object.entries(r))
    l.style.setProperty(d, u);
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, ac(a), Ea(e), xt = Da(e);
  const i = tt();
  i && (i.__panelAppearanceApplied = !0);
  try {
    localStorage.setItem(Ta, JSON.stringify(s));
  } catch {
  }
}
function Ua() {
  function e(r) {
    Et(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    je.value = { ...je.value, ...r, ...s };
    try {
      localStorage.setItem(Qt, JSON.stringify(je.value));
    } catch {
    }
    e(je.value), Na?.({ ...r, ...s });
  }
  function a() {
    l({ ...Be });
  }
  return ve(() => {
    if (Je || tt()?.__panelAppearanceApplied) {
      Je = !0;
      return;
    }
    Je = !0, je.value = ta(), Et(je.value);
  }), {
    appearance: b(() => je.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: jt,
    SURFACE_TINTS: Tt,
    FONT_SIZE_MIN: bt,
    FONT_SIZE_MAX: yt,
    RADIUS_OPTIONS: tc
  };
}
const sc = ["aria-busy", "aria-label"], rc = { class: "bg-background flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3" }, ic = { class: "min-w-0" }, dc = { class: "text-base font-semibold" }, uc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, cc = { class: "flex shrink-0 items-center gap-2" }, fc = ["disabled"], mc = { class: "min-h-0 flex-1 overflow-y-auto overscroll-contain" }, pc = {
  key: 0,
  class: "bg-muted/30 flex shrink-0 items-center justify-end gap-2 border-t px-4 py-3"
}, Ct = /* @__PURE__ */ O({
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
    const u = R(!1), f = b(() => a.width ?? uo[a.size]), g = b(
      () => [Oa, a.padded ? io : ""].filter(Boolean).join(" ")
    );
    function p(k) {
      u.value = k.target === k.currentTarget;
    }
    function h(k) {
      u.value && k.target === k.currentTarget && !a.busy && r("close"), u.value = !1;
    }
    function C(k) {
      if (!a.open)
        return;
      if (k.key === "Escape") {
        if (a.busy)
          return;
        k.stopPropagation(), r("close");
        return;
      }
      if (k.key !== "Tab" || !s.value)
        return;
      const $ = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if ($.length === 0)
        return;
      const S = $[0], M = $[$.length - 1];
      k.shiftKey && document.activeElement === S ? (k.preventDefault(), M.focus()) : !k.shiftKey && document.activeElement === M && (k.preventDefault(), S.focus());
    }
    return me(
      () => a.open,
      async (k) => {
        if (k) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", C), await Te(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", C), i?.focus?.(), i = null;
      }
    ), ke(() => {
      document.removeEventListener("keydown", C), document.body.style.overflow = d;
    }), (k, $) => (t(), T(dt, { to: "body" }, [
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
            onPointerdown: p,
            onPointerup: h
          }, null, 32)) : w("", !0)
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
            o("header", rc, [
              o("div", ic, [
                o("h2", dc, c(e.title), 1),
                e.description ? (t(), n("p", uc, c(e.description), 1)) : w("", !0)
              ]),
              o("div", cc, [
                U(k.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground disabled:opacity-50",
                  "aria-label": "Close",
                  disabled: e.busy,
                  onClick: $[0] || ($[0] = (S) => r("close"))
                }, [...$[1] || ($[1] = [
                  o("svg", {
                    viewBox: "0 0 24 24",
                    class: "size-4",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    o("path", { d: "M18 6 6 18M6 6l12 12" })
                  ], -1)
                ])], 8, fc)
              ])
            ]),
            o("div", mc, [
              o("div", {
                class: P(g.value)
              }, [
                U(k.$slots, "default")
              ], 2)
            ]),
            k.$slots.footer ? (t(), n("footer", pc, [
              U(k.$slots, "footer")
            ])) : w("", !0)
          ], 10, sc)) : w("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
}), vc = { class: "flex flex-col gap-5 px-4 py-4" }, gc = { class: "flex flex-col gap-2" }, hc = { class: "grid grid-cols-8 gap-2" }, bc = ["title", "aria-label", "aria-pressed", "onClick"], yc = { class: "flex flex-col gap-2" }, xc = { class: "grid grid-cols-8 gap-2" }, kc = ["title", "aria-label", "aria-pressed", "onClick"], $c = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, wc = { class: "flex flex-col gap-2" }, Cc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Sc = ["aria-pressed", "aria-label", "onClick"], Mc = { class: "text-sm font-semibold" }, Bc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, _c = ["onClick"], Ac = { class: "flex flex-col gap-2" }, Pc = { class: "flex items-center justify-between" }, zc = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Oc = { class: "flex items-center gap-2" }, Lc = ["disabled"], Vc = ["min", "max", "value"], jc = ["disabled"], l3 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Ua(), u = R(!1), f = b(() => l.value.sidebarSide === "right"), g = b(() => f.value ? "left" : "right"), p = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], h = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], C = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], k = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], $ = [
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
        Rt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      D(Ct, {
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
            (...v) => x(r) && x(r)(...v))
          }, " Reset ")
        ]),
        default: L(() => [
          o("div", vc, [
            o("section", gc, [
              m[8] || (m[8] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
              o("div", hc, [
                (t(!0), n(z, null, V(x(s), (v, y) => (t(), n("button", {
                  key: y,
                  type: "button",
                  class: "relative size-7 rounded-md transition-transform hover:scale-110",
                  style: se({ background: v.value }),
                  title: v.label,
                  "aria-label": v.label,
                  "aria-pressed": x(l).primary === y,
                  onClick: (A) => x(a)({ primary: y })
                }, [
                  x(l).primary === y ? (t(), n("svg", {
                    key: 0,
                    viewBox: "0 0 24 24",
                    class: "absolute inset-0 m-auto size-4",
                    style: se({ color: v.foreground }),
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "3.5"
                  }, [...m[7] || (m[7] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])], 4)) : w("", !0)
                ], 12, bc))), 128))
              ])
            ]),
            o("section", yc, [
              m[10] || (m[10] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
              o("div", xc, [
                (t(!0), n(z, null, V(x(i), (v, y) => (t(), n("button", {
                  key: y,
                  type: "button",
                  class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                  style: se({ background: M(v.hue, v.chroma) }),
                  title: v.label,
                  "aria-label": v.label,
                  "aria-pressed": x(l).surface === y,
                  onClick: (A) => x(a)({ surface: y })
                }, [
                  x(l).surface === y ? (t(), n("svg", $c, [...m[9] || (m[9] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])])) : w("", !0)
                ], 12, kc))), 128))
              ])
            ]),
            o("section", wc, [
              m[11] || (m[11] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
              o("div", Cc, [
                (t(!0), n(z, null, V(x(d), (v) => (t(), n("button", {
                  key: v,
                  type: "button",
                  class: P([
                    "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                    x(l).radius === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  "aria-pressed": x(l).radius === v,
                  "aria-label": `${v}rem radius`,
                  onClick: (y) => x(a)({ radius: v })
                }, [
                  o("span", {
                    class: "border-foreground/50 block size-4 border-2",
                    style: se({ borderRadius: `${Math.min(v, 0.5)}rem` })
                  }, null, 4),
                  N(" " + c(v), 1)
                ], 10, Sc))), 128))
              ])
            ]),
            (t(!0), n(z, null, V([
              { label: "Color scheme", key: "theme", options: p },
              { label: "Card style", key: "cardStyle", options: C },
              { label: "Density", key: "density", options: h },
              { label: "Sidebar", key: "sidebarSide", options: k },
              { label: "Content layout", key: "contentLayout", options: $ },
              { label: "Menu style", key: "menuStyle", options: S }
            ], (v) => (t(), n("section", {
              key: v.key,
              class: "flex flex-col gap-2"
            }, [
              o("h3", Mc, c(v.label), 1),
              o("div", Bc, [
                (t(!0), n(z, null, V(v.options, (y) => (t(), n("button", {
                  key: String(y.value),
                  type: "button",
                  class: P([
                    "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                    x(l)[v.key] === y.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  onClick: (A) => x(a)({ [v.key]: y.value })
                }, c(y.label), 11, _c))), 128))
              ])
            ]))), 128)),
            o("section", Ac, [
              o("div", Pc, [
                m[12] || (m[12] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                o("span", zc, c(x(l).fontSize) + "px", 1)
              ]),
              o("div", Oc, [
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: x(l).fontSize <= x(bt),
                  "aria-label": "Decrease font size",
                  onClick: m[2] || (m[2] = (v) => x(a)({ fontSize: x(l).fontSize - 1 }))
                }, " − ", 8, Lc),
                o("input", {
                  type: "range",
                  class: "accent-primary flex-1",
                  min: x(bt),
                  max: x(yt),
                  value: x(l).fontSize,
                  "aria-label": "Font size in pixels",
                  onInput: m[3] || (m[3] = (v) => x(a)({
                    fontSize: Number(v.target.value)
                  }))
                }, null, 40, Vc),
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: x(l).fontSize >= x(yt),
                  "aria-label": "Increase font size",
                  onClick: m[4] || (m[4] = (v) => x(a)({ fontSize: x(l).fontSize + 1 }))
                }, " + ", 8, jc)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["open", "side"])
    ], 64));
  }
}), Tc = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Dc = { class: "flex items-stretch" }, Ec = ["href", "aria-current"], Ic = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fc = ["d"], Nc = { class: "w-full truncate text-center" }, Rc = {
  key: 0,
  class: "flex-1"
}, Uc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Hc = ["d"], Kc = { class: "w-full truncate text-center" }, At = 5, o3 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = b(
      () => a.items.length <= At ? a.items : a.items.slice(0, At - 1)
    ), i = b(() => a.items.length > At);
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, f) => (t(), n("nav", Tc, [
      o("ul", Dc, [
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
            (t(), n("svg", Ic, [
              o("path", {
                d: x(ce)(g.icon)
              }, null, 8, Fc)
            ])),
            o("span", Nc, c(g.title), 1)
          ], 10, Ec)
        ]))), 128)),
        i.value ? (t(), n("li", Rc, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (g) => r("more"))
          }, [
            (t(), n("svg", Uc, [
              o("path", {
                d: x(ce)("more-horizontal")
              }, null, 8, Hc)
            ])),
            o("span", Kc, c(e.moreLabel), 1)
          ])
        ])) : w("", !0)
      ])
    ]));
  }
}), qc = ["value"], $e = /* @__PURE__ */ O({
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
    }, null, 42, qc));
  }
}), Gc = ["for"], Pe = /* @__PURE__ */ O({
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
    ], 10, Gc));
  }
}), s3 = /* @__PURE__ */ O({
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
}), Wc = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Zc = ["id", "name", "value", "disabled", "maxlength"], Jc = ["data-active"], Yc = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Xc = /* @__PURE__ */ O({
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
    const u = b(
      () => Array.from({ length: a.length }, (_, m) => a.modelValue[m] ?? "")
    ), f = b(() => Math.min(a.modelValue.length, a.length - 1));
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
    function C(_) {
      h(_.target.value);
    }
    function k(_) {
      h(_.target.value);
    }
    function $() {
      h(i.value?.value ?? "");
    }
    function S(_) {
      _.animationName === "pkOtpAutofillStart" && $();
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
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && $();
      }, 250);
    }), on(() => {
      M !== void 0 && window.clearInterval(M);
    }), (_, m) => (t(), n("div", Wc, [
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
        onAnimationstart: S,
        onFocus: m[0] || (m[0] = (v) => s.value = !0),
        onBlur: m[1] || (m[1] = (v) => s.value = !1)
      }, null, 40, Zc),
      (t(!0), n(z, null, V(u.value, (v, y) => (t(), n("div", {
        key: y,
        "data-slot": "input-otp-slot",
        "data-active": s.value && y === f.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(c(v) + " ", 1),
        s.value && y === f.value && v === "" ? (t(), n("div", Yc, [...m[2] || (m[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : w("", !0)
      ], 8, Jc))), 128))
    ]));
  }
}), r3 = /* @__PURE__ */ wt(Xc, [["__scopeId", "data-v-560616ac"]]), Qc = {
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
      e.description ? (t(), n("p", Qc, c(e.description), 1)) : w("", !0)
    ], 2));
  }
}), ef = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, tf = { class: "min-w-0 space-y-1" }, af = { class: "flex flex-wrap items-center gap-2.5" }, nf = { class: "text-2xl font-semibold tracking-tight" }, lf = {
  key: 0,
  class: "flex items-center gap-2"
}, of = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, sf = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, i3 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", ef, [
      o("div", tf, [
        o("div", af, [
          o("h1", nf, c(e.title), 1),
          l.$slots.status ? (t(), n("div", lf, [
            U(l.$slots, "status")
          ])) : w("", !0)
        ]),
        e.purpose ? (t(), n("p", of, c(e.purpose), 1)) : w("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", sf, [
        U(l.$slots, "actions")
      ])) : w("", !0)
    ]));
  }
}), rf = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: P(x(Q)(x(cf)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), df = /* @__PURE__ */ O({
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
}), uf = /* @__PURE__ */ O({
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
}), cf = Wt(
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
), ff = { class: "list-inside list-disc text-sm" }, d3 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = b(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(x(rf), { variant: "destructive" }, {
      default: L(() => [
        D(x(Jn), { class: "size-4" }),
        D(x(uf), null, {
          default: L(() => [
            N(c(e.title), 1)
          ]),
          _: 1
        }),
        D(x(df), null, {
          default: L(() => [
            o("ul", ff, [
              (t(!0), n(z, null, V(a.value, (i, d) => (t(), n("li", { key: d }, c(i), 1))), 128))
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
}), mf = { class: "relative" }, pf = ["aria-label"], u3 = /* @__PURE__ */ O({
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
    }), (i, d) => (t(), n("div", mf, [
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
      ], 10, pf)
    ]));
  }
}), Ka = "@container min-w-0", vf = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", c3 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", gf = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
function f3(e, l) {
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
function m3(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function It(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function p3(e, l, a, r) {
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
      span: It(f.span),
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
        span: It(g.span),
        hidden: !1,
        source: g
      });
    }
  return d;
}
function v3(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: It(l.span),
      hidden: !!l.hidden
    }))
  };
}
const qa = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", hf = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", bf = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function yf(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function xf(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function kf(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await $f(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function $f(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function wf(e) {
  if (yf(e))
    throw new Error(bf);
  if (!xf(e))
    throw new Error(qa);
  if (!await kf(e))
    throw new Error(hf);
}
const g3 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Qe), re({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cf = /* @__PURE__ */ O({
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
}), h3 = /* @__PURE__ */ O({
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
}), Sf = /* @__PURE__ */ O({
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
}), Mf = /* @__PURE__ */ O({
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
}), b3 = /* @__PURE__ */ O({
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
}), ma = "sidebar_state", Bf = 3600 * 24 * 7, _f = "16rem", Af = "18rem", Pf = "3rem", zf = "b", [St, Of] = hn("Sidebar"), Lf = { class: "flex h-full w-full flex-col" }, Vf = ["data-state", "data-collapsible", "data-variant", "data-side"], jf = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, y3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = St();
    return (d, u) => e.collapsible === "none" ? (t(), n("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: x(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      U(d.$slots, "default")
    ], 16)) : x(a) ? (t(), T(x(Jt), re({
      key: 1,
      open: x(s)
    }, d.$attrs, { "onUpdate:open": x(i) }), {
      default: L(() => [
        D(x(Yt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": x(Af)
          })
        }, {
          default: L(() => [
            D(Sf, { class: "sr-only" }, {
              default: L(() => [
                D(Mf, null, {
                  default: L(() => [...u[0] || (u[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(Cf, null, {
                  default: L(() => [...u[1] || (u[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", Lf, [
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
        o("div", jf, [
          U(d.$slots, "default")
        ])
      ], 16)
    ], 8, Vf));
  }
}), x3 = /* @__PURE__ */ O({
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
}), k3 = /* @__PURE__ */ O({
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
}), $3 = /* @__PURE__ */ O({
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
}), w3 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(et), {
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
}), C3 = /* @__PURE__ */ O({
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
}), S3 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(et), {
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
}), M3 = /* @__PURE__ */ O({
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
}), B3 = /* @__PURE__ */ O({
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
}), _3 = /* @__PURE__ */ O({
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
}), A3 = /* @__PURE__ */ O({
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
}), P3 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(et), {
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
}), z3 = /* @__PURE__ */ O({
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
}), Tf = /* @__PURE__ */ O({
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
}), Df = /* @__PURE__ */ O({
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
}), O3 = /* @__PURE__ */ O({
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
}), Ef = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(et), re({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(Q)(x(Ff)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), L3 = /* @__PURE__ */ O({
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
    const l = e, { isMobile: a, state: r } = St(), s = fe(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), T(x(Tf), { key: 1 }, {
      default: L(() => [
        D(x(Ef), { "as-child": "" }, {
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
        D(x(Df), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(a)
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
    })) : (t(), T(pa, Oe(re({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), V3 = /* @__PURE__ */ O({
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
}), va = "animate-pulse rounded-md bg-primary/10", j3 = /* @__PURE__ */ O({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = b(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), n("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: P(x(Q)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: P(x(Q)(va, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : w("", !0),
      o("div", {
        class: P(x(Q)(va, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), T3 = /* @__PURE__ */ O({
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
}), D3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(et), {
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
}), E3 = /* @__PURE__ */ O({
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
}), I3 = /* @__PURE__ */ O({
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
    function u(h) {
      d.value = h, document.cookie = `${ma}=${d.value}; path=/; max-age=${Bf}`;
    }
    function f(h) {
      i.value = h;
    }
    function g() {
      return s.value ? f(!i.value) : u(!d.value);
    }
    sl("keydown", (h) => {
      h.key === zf && (h.metaKey || h.ctrlKey) && (h.preventDefault(), g());
    });
    const p = b(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return Of({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: g
    }), (h, C) => (t(), T(x(Ma), { "delay-duration": 0 }, {
      default: L(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(_f),
            "--sidebar-width-icon": x(Pf)
          },
          class: x(Q)(
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
}), F3 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = St();
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
}), If = /* @__PURE__ */ O({
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
}), N3 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(If), {
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
}), R3 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = St();
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
}), Ff = Wt(
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
), U3 = /* @__PURE__ */ O({
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
}), Nf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, H3 = /* @__PURE__ */ O({
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
        o("span", Nf, [
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
}), K3 = /* @__PURE__ */ O({
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
}), q3 = /* @__PURE__ */ O({
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
}), G3 = /* @__PURE__ */ O({
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
}), W3 = /* @__PURE__ */ O({
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
}), Z3 = /* @__PURE__ */ O({
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
}), Rf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, J3 = /* @__PURE__ */ O({
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
        o("span", Rf, [
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
}), Y3 = /* @__PURE__ */ O({
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
}), X3 = /* @__PURE__ */ O({
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
}), Q3 = /* @__PURE__ */ O({
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
}), eC = /* @__PURE__ */ O({
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
}), tC = /* @__PURE__ */ O({
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
}), aC = /* @__PURE__ */ O({
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
}), nC = /* @__PURE__ */ O({
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
}), lC = /* @__PURE__ */ O({
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
}), oC = /* @__PURE__ */ O({
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
}), sC = /* @__PURE__ */ O({
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
}), rC = /* @__PURE__ */ O({
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
}), iC = /* @__PURE__ */ O({
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
}), dC = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(et), {
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
}), uC = /* @__PURE__ */ O({
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
}), cC = /* @__PURE__ */ O({
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
}), fC = /* @__PURE__ */ O({
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
}), Uf = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Hf = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Uf, [
      D(x(Nn), re({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), mC = /* @__PURE__ */ O({
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
      default: L((f) => [
        U(d.$slots, "default", Oe(Fe(f))),
        e.viewport ? (t(), T(Hf, { key: 0 })) : w("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), pC = /* @__PURE__ */ O({
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
}), vC = /* @__PURE__ */ O({
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
}), gC = /* @__PURE__ */ O({
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
}), hC = /* @__PURE__ */ O({
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
}), bC = /* @__PURE__ */ O({
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
}), yC = /* @__PURE__ */ O({
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
      class: x(Q)(x(Kf)(), "group", l.class)
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
}), Kf = Wt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), xC = /* @__PURE__ */ O({
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
}), kC = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Qe), re({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qf = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(Ht), re({ "data-slot": "dialog-overlay" }, x(a), {
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
}), $C = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(Kt), null, {
      default: L(() => [
        D(qf),
        D(x(qt), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: L(() => [
            U(d.$slots, "default"),
            e.showCloseButton ? (t(), T(x(Qe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                D(x(Gt)),
                u[0] || (u[0] = o("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : w("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), wC = /* @__PURE__ */ O({
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
}), CC = /* @__PURE__ */ O({
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
      e.showCloseButton ? (t(), T(x(Qe), {
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
      })) : w("", !0)
    ], 2));
  }
}), SC = /* @__PURE__ */ O({
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
}), MC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(Kt), null, {
      default: L(() => [
        D(x(Ht), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            D(x(qt), re({
              class: x(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...x(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (f) => {
                const g = f.detail.originalEvent, p = g.target;
                (g.offsetX > p.clientWidth || g.offsetY > p.clientHeight) && f.preventDefault();
              })
            }), {
              default: L(() => [
                U(d.$slots, "default"),
                D(x(Qe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    D(x(Gt), { class: "w-4 h-4" }),
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
}), BC = /* @__PURE__ */ O({
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
}), _C = /* @__PURE__ */ O({
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
}), AC = /* @__PURE__ */ O({
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
}), PC = /* @__PURE__ */ O({
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
}), zC = /* @__PURE__ */ O({
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
}), OC = /* @__PURE__ */ O({
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
}), LC = /* @__PURE__ */ O({
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
}), VC = /* @__PURE__ */ O({
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
}), jC = /* @__PURE__ */ O({
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
}), TC = /* @__PURE__ */ O({
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
}), DC = /* @__PURE__ */ O({
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
}), Gf = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Wf = { class: "flex items-start gap-3" }, Zf = { class: "min-w-0 flex-1" }, Jf = { class: "text-foreground text-sm font-medium" }, Yf = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, EC = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(!1), d = R(null), u = R(0);
    dn((g) => (console.error(`[PkBoundary] ${r.label} failed to render`, g), i.value = !0, d.value = g instanceof Error ? g.message : null, s("error", g), !1));
    function f() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: f }), (g, p) => (t(), n("div", {
      class: P(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Gf, [
        o("div", Wf, [
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
          o("div", Zf, [
            o("p", Jf, c(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", Yf, c(d.value), 1)) : w("", !0),
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
      ])) : i.value ? w("", !0) : U(g.$slots, "default", { key: u.value })
    ], 2));
  }
}), Xf = { class: "bg-card rounded-lg border" }, Qf = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, em = { class: "min-w-0" }, tm = {
  key: 0,
  class: "truncate text-sm font-medium"
}, am = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, nm = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, lm = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, IC = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Xf, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Qf, [
        o("div", em, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", tm, c(e.title), 1)) : w("", !0),
            e.description ? (t(), n("p", am, c(e.description), 1)) : w("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", nm, [
          U(l.$slots, "actions")
        ])) : w("", !0)
      ])) : w("", !0),
      o("div", {
        class: P(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", lm, [
        U(l.$slots, "footer")
      ])) : w("", !0)
    ]));
  }
}), Ga = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function FC() {
  const e = za(), l = b(() => e.props.panel?.pageFooter === !0);
  return Lt(Ga, l), l;
}
const om = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, sm = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, rm = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, NC = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = za(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = b(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = b(() => {
      const f = a.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), d = ht(Ga, b(() => !1)), u = b(() => !l.host && x(d) === !0);
    return (f, g) => u.value ? w("", !0) : (t(), n("footer", om, [
      o("div", sm, [
        o("p", null, "© " + c(x(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), n("nav", rm, [
          (t(!0), n(z, null, V(i.value, (p) => (t(), T(x(ul), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: L(() => [
              N(c(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : w("", !0)
      ])
    ]));
  }
}), im = { class: "flex shrink-0 flex-col items-center" }, dm = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, RC = /* @__PURE__ */ O({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const l = e, a = b(() => l.kind === "laptop"), r = b(
      () => a.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = b(() => a.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), n("div", im, [
      o("div", {
        class: P(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", dm)) : w("", !0),
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
      ], 64)) : w("", !0)
    ]));
  }
}), um = { class: "flex flex-col gap-2" }, cm = { class: "min-w-0 flex-1" }, fm = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, mm = ["disabled", "aria-label", "onClick"], pm = ["disabled", "aria-label", "onClick"], vm = ["disabled", "title", "aria-label", "onClick"], gm = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, hm = ["disabled"], UC = /* @__PURE__ */ O({
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
        const v = {};
        let y = !1;
        for (const A of a.children) {
          const E = m.data[A.key] ?? null;
          v[A.key] = E, E !== null && E !== "" && !(Array.isArray(E) && E.length === 0) && (y = !0);
        }
        y && _.push(v);
      }
      return _.length ? _ : null;
    }
    function f() {
      r("update:modelValue", u());
    }
    const g = b(() => a.maxItems !== null && i.value.length >= a.maxItems), p = b(() => a.minItems !== null && i.value.length <= a.minItems), h = b(() => a.children.length === 1);
    function C() {
      if (g.value || a.disabled)
        return;
      const _ = {};
      for (const m of a.children)
        _[m.key] = null;
      i.value.push({ uid: s++, data: _ });
    }
    function k(_) {
      i.value = i.value.filter((m) => m.uid !== _), f();
    }
    function $(_, m) {
      const v = _ + m;
      if (v < 0 || v >= i.value.length)
        return;
      const y = [...i.value], [A] = y.splice(_, 1);
      y.splice(v, 0, A), i.value = y, f();
    }
    function S(_, m, v) {
      const y = i.value.find((A) => A.uid === _);
      y && (y.data[m] = v, f());
    }
    function M(_, m) {
      return a.errors[`${a.fieldKey}.${_}.${m}`];
    }
    return (_, m) => (t(), n("div", um, [
      (t(!0), n(z, null, V(i.value, (v, y) => (t(), n("div", {
        key: v.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: P(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, c(y + 1), 3),
        o("div", cm, [
          h.value ? (t(), T(Xe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: v.data[e.children[0].key],
            error: M(y, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (A) => S(v.uid, e.children[0].key, A)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", fm, [
            (t(!0), n(z, null, V(e.children, (A) => (t(), T(Xe, {
              key: A.key,
              field: { ...A, disabled: A.disabled || e.disabled },
              value: v.data[A.key],
              error: M(y, A.key),
              options: e.childOptions[A.key] ?? [],
              onChange: (E) => S(v.uid, A.key, E)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: P(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || y === 0,
            "aria-label": `Move ${e.itemLabel} ${y + 1} up`,
            onClick: (A) => $(y, -1)
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
          ])], 8, mm),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || y === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${y + 1} down`,
            onClick: (A) => $(y, 1)
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
          ])], 8, pm),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${y + 1}`,
            onClick: (A) => k(v.uid)
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
          ])], 8, vm)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", gm, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : w("", !0),
      g.value ? w("", !0) : (t(), n("button", {
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
      ], 8, hm))
    ]));
  }
}), bm = { class: "space-y-1" }, ym = { class: "flex items-center gap-1" }, xm = ["disabled", "title", "aria-label", "onClick"], km = ["aria-pressed"], $m = ["id", "value", "rows", "disabled"], wm = ["innerHTML"], Cm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!1), i = b(() => a.modelValue ?? "");
    function d(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = b(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(h, C = h) {
      const k = document.getElementById(a.id ?? "");
      if (k === null)
        return;
      const $ = k.selectionStart, S = k.selectionEnd, M = i.value.slice($, S);
      r(
        "update:modelValue",
        `${i.value.slice(0, $)}${h}${M}${C}${i.value.slice(S)}`
      );
    }
    const g = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, p = b(
      () => (a.toolbar ?? Object.keys(g)).filter((h) => h in g)
    );
    return (h, C) => (t(), n("div", bm, [
      o("div", ym, [
        (t(!0), n(z, null, V(p.value, (k) => (t(), n("button", {
          key: k,
          type: "button",
          disabled: e.disabled,
          title: k,
          "aria-label": k,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: ($) => g[k].run()
        }, c(g[k].label), 9, xm))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (k) => s.value = !s.value)
        }, " Preview ", 8, km)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, wm)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = (k) => r("update:modelValue", k.target.value))
      }, null, 40, $m))
    ]));
  }
}), Sm = { class: "space-y-1" }, Mm = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Bm = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, _m = ["id", "value", "rows", "disabled"], Am = { class: "text-muted-foreground text-xs font-normal" }, Pm = {
  key: 0,
  class: "text-destructive text-xs"
}, zm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!0), d = b(() => a.modelValue ?? ""), u = b(() => Math.max(d.value.split(`
`).length, 1)), f = b(() => {
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
      const C = h.target, k = C.selectionStart, $ = C.selectionEnd, S = `${d.value.slice(0, k)}    ${d.value.slice($)}`;
      r("update:modelValue", S), requestAnimationFrame(() => {
        C.selectionStart = C.selectionEnd = k + 4;
      });
    }
    return (h, C) => (t(), n("div", Sm, [
      o("div", Mm, [
        o("div", Bm, [
          (t(!0), n(z, null, V(u.value, (k) => (t(), n("div", { key: k }, c(k), 1))), 128))
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
        }, null, 40, _m)
      ]),
      o("p", Am, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), n("p", Pm, c(f.value), 1)) : w("", !0)
    ]));
  }
}), Om = { class: "space-y-3" }, Lm = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Vm = { class: "text-sm font-medium" }, jm = { class: "flex items-center gap-1" }, Tm = ["disabled", "onClick"], Dm = ["disabled", "onClick"], Em = ["disabled", "onClick"], Im = { class: "space-y-3 p-3" }, Fm = { class: "flex flex-wrap items-center gap-2" }, Nm = ["disabled", "onClick"], Rm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, HC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = b(() => a.modelValue ?? []), i = b(
      () => Object.fromEntries(a.blocks.map((C) => [C.type, C]))
    ), d = b(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function u(C) {
      r("update:modelValue", C);
    }
    function f(C) {
      d.value || u([...s.value, { type: C, data: {} }]);
    }
    function g(C) {
      u(s.value.filter((k, $) => $ !== C));
    }
    function p(C, k) {
      const $ = C + k;
      if ($ < 0 || $ >= s.value.length)
        return;
      const S = [...s.value], [M] = S.splice(C, 1);
      S.splice($, 0, M), u(S);
    }
    function h(C, k, $) {
      u(
        s.value.map(
          (S, M) => M === C ? { ...S, data: { ...S.data, [k]: $ } } : S
        )
      );
    }
    return (C, k) => (t(), n("div", Om, [
      (t(!0), n(z, null, V(s.value, ($, S) => (t(), n("div", {
        key: `${$.type}-${S}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Lm, [
          o("span", Vm, c(i.value[$.type]?.label ?? $.type), 1),
          o("div", jm, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === 0,
              "aria-label": "Move up",
              onClick: (M) => p(S, -1)
            }, " ↑ ", 8, Tm),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (M) => p(S, 1)
            }, " ↓ ", 8, Dm),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (M) => g(S)
            }, " Remove ", 8, Em)
          ])
        ]),
        o("div", Im, [
          (t(!0), n(z, null, V(i.value[$.type]?.fields ?? [], (M) => (t(), T(Xe, {
            key: M.key,
            field: M,
            value: $.data[M.key] ?? null,
            error: e.errors?.[M.key],
            processing: e.disabled,
            onChange: (_) => h(S, M.key, _)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Fm, [
        (t(!0), n(z, null, V(e.blocks, ($) => (t(), n("button", {
          key: $.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (S) => f($.type)
        }, " + " + c($.label), 9, Nm))), 128)),
        d.value ? (t(), n("span", Rm, c(e.maxBlocks) + " is the maximum here. ", 1)) : w("", !0)
      ])
    ]));
  }
}), Um = ["name", "value", "checked", "disabled", "onChange"], Hm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Km = /* @__PURE__ */ O({
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
        }, null, 40, Um),
        N(" " + c(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Hm, " Nothing to choose from yet. ")) : w("", !0)
    ], 2));
  }
}), qm = ["value", "checked", "disabled", "onChange"], Gm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Wm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = b(
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
    const u = b(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, g) => (t(), n("div", {
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
          onChange: (h) => d(p)
        }, null, 40, qm),
        N(" " + c(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Gm, " Nothing to choose from yet. ")) : w("", !0)
    ], 4));
  }
}), Zm = { class: "flex flex-col gap-1.5" }, Jm = ["aria-label", "onClick"], Ym = ["placeholder", "disabled", "maxlength"], Xm = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Qm = ["onClick"], ep = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, tp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = b(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    ), d = b(() => i.value.length >= (a.field.max ?? 25)), u = b(
      () => (a.field.suggestions ?? []).filter(
        (h) => !i.value.some((C) => C.toLowerCase() === h.toLowerCase())
      )
    );
    function f(h) {
      const C = h.trim().slice(0, a.field.maxLength ?? 40);
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
    function g(h) {
      r(
        "update:modelValue",
        i.value.filter((C, k) => k !== h)
      );
    }
    function p(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), f(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && g(i.value.length - 1);
    }
    return (h, C) => (t(), n("div", Zm, [
      o("div", {
        class: P(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, V(i.value, (k, $) => (t(), n("span", {
          key: `${k}-${$}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(c(k) + " ", 1),
          e.disabled ? w("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${k}`,
            onClick: (S) => g($)
          }, " × ", 8, Jm))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (k) => s.value = k),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: C[1] || (C[1] = (k) => f(s.value))
        }, null, 40, Ym), [
          [Ae, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", Xm, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(z, null, V(u.value, (k) => (t(), n("button", {
          key: k,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: ($) => f(k)
        }, c(k), 9, Qm))), 128))
      ])) : w("", !0),
      d.value ? (t(), n("p", ep, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : w("", !0)
    ]));
  }
}), ap = 4.5, ga = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Wa(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function Pt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Ft(e) {
  const [l, a, r] = Wa(e);
  return 0.2126 * Pt(l) + 0.7152 * Pt(a) + 0.0722 * Pt(r);
}
function Za(e, l) {
  const a = Ft(e), r = Ft(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function np(e, l, a) {
  if (!ga.test(e) || !ga.test(l))
    return e;
  const r = Ft(l) > 0.5, s = r ? 0 : 255;
  let i = Wa(e);
  for (let d = 0; d <= 20; d++) {
    const u = lp(i);
    if (Za(u, l) >= a)
      return u;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function lp(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const op = { class: "flex flex-col gap-2" }, sp = { class: "flex items-center gap-2" }, rp = {
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
}, ip = ["value", "disabled", "aria-label"], dp = ["value", "disabled", "placeholder"], up = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, cp = ["aria-label", "title", "onClick"], fp = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, mp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = b(() => typeof a.modelValue == "string" ? a.modelValue : ""), d = b(() => s.test(i.value));
    function u(k) {
      const $ = k.trim();
      if ($ === "")
        return "";
      const S = $.startsWith("#") ? $ : `#${$}`;
      return s.test(S) ? S.toLowerCase() : $;
    }
    function f(k) {
      r("update:modelValue", u(k.target.value));
    }
    const g = b(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Za(i.value, a.field.contrastBackground)), p = b(() => a.field.contrastMinRatio ?? ap), h = b(() => g.value !== null && g.value < p.value);
    function C() {
      a.field.contrastBackground && r(
        "update:modelValue",
        np(i.value, a.field.contrastBackground, p.value)
      );
    }
    return (k, $) => (t(), n("div", op, [
      o("div", sp, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: $[0] || ($[0] = (S) => r("update:modelValue", S.target.value))
        }, null, 40, ip)) : (t(), n("span", rp)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, dp)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", up, [
        (t(!0), n(z, null, V(e.field.presets, (S) => (t(), n("button", {
          key: S,
          type: "button",
          class: P(["size-6 rounded border", i.value.toLowerCase() === S.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: S }),
          "aria-label": S,
          title: S,
          onClick: (M) => r("update:modelValue", S.toLowerCase())
        }, null, 14, cp))), 128))
      ])) : w("", !0),
      h.value ? (t(), n("p", fp, [
        o("span", null, " This fails contrast at " + c(g.value.toFixed(1)) + ":1 - it needs at least " + c(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : w("", !0)
    ]));
  }
}), pp = ["aria-disabled"], vp = /* @__PURE__ */ O({
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
    const f = b(() => {
      const C = a.modelValue?.[a.latKey], k = a.modelValue?.[a.lngKey];
      return typeof C == "number" && typeof k == "number" ? { lat: C, lng: k } : a.center ? a.center : a.markers.length > 0 ? { lat: a.markers[0].lat, lng: a.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function g() {
      if (!s.value || i)
        return;
      const C = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = C, i = C.map(s.value).setView([f.value.lat, f.value.lng], a.zoom), C.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), p(), h(), a.pickable && !a.disabled && i.on("click", (k) => {
        r("update:modelValue", {
          [a.latKey]: Number(k.latlng.lat.toFixed(6)),
          [a.lngKey]: Number(k.latlng.lng.toFixed(6))
        });
      });
    }
    function p() {
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
    function h() {
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
      g();
    }), ke(() => {
      i?.remove(), i = null, d = null;
    }), me(
      () => a.modelValue,
      () => h(),
      { deep: !0 }
    ), (C, k) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: se({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, pp));
  }
}), gp = { class: "flex flex-col gap-2" }, hp = { class: "text-muted-foreground text-xs font-normal" }, bp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkMapField",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = b(() => a.modelValue && typeof a.modelValue == "object" ? a.modelValue : null), i = b(() => a.field.latKey ?? "lat"), d = b(() => a.field.lngKey ?? "lng");
    return (u, f) => (t(), n("div", gp, [
      D(vp, {
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
      o("p", hp, [
        N(" Click the map to set " + c(i.value) + " / " + c(d.value) + " ", 1),
        s.value ? (t(), n(z, { key: 0 }, [
          N(" (" + c(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + c(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : w("", !0)
      ])
    ]));
  }
}), yp = { class: "flex flex-col gap-2" }, xp = ["width", "height"], kp = ["value", "disabled"], $p = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, wp = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = b(() => {
      if (a.field.from) {
        const f = a.values?.[a.field.from];
        return f == null ? "" : String(f);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), d = b(() => a.field.size ?? 160);
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
    }), (f, g) => (t(), n("div", yp, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, xp),
      e.field.from ? (t(), n("p", $p, "From " + c(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: g[0] || (g[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, kp))
    ]));
  }
}), Cp = { class: "flex flex-col gap-2" }, Sp = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, Mp = ["aria-label"], Bp = {
  key: 0,
  class: "text-destructive text-xs"
}, _p = ["value", "disabled"], Ap = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, Pp = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), d = b(() => {
      if (a.field.from) {
        const g = a.values?.[a.field.from];
        return g == null ? "" : String(g);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), u = b(() => (a.field.format ?? "CODE128").toUpperCase());
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
    }), (g, p) => (t(), n("div", Cp, [
      o("div", Sp, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, Mp))
      ]),
      i.value ? (t(), n("p", Bp, c(i.value), 1)) : w("", !0),
      e.field.from ? (t(), n("p", Ap, "From " + c(e.field.from) + " (" + c(u.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, _p))
    ]));
  }
}), zp = { class: "mr-2 inline-block w-3 opacity-60" }, Op = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Lp = /* @__PURE__ */ O({
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
    const r = b(() => {
      if (l.field.originalKey)
        return a(l.values?.[l.field.originalKey]);
      const d = l.modelValue;
      return a(d?.original);
    }), s = b(() => {
      if (l.field.modifiedKey)
        return a(l.values?.[l.field.modifiedKey]);
      const d = l.modelValue;
      return a(d?.modified);
    }), i = b(() => {
      const d = r.value.split(`
`), u = s.value.split(`
`), f = Math.max(d.length, u.length), g = [];
      for (let p = 0; p < f; p++) {
        const h = d[p], C = u[p];
        if (h === C) {
          h !== void 0 && g.push({ kind: "same", text: h });
          continue;
        }
        h !== void 0 && g.push({ kind: "del", text: h }), C !== void 0 && g.push({ kind: "add", text: C });
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
        o("span", zp, c(f.kind === "add" ? "+" : f.kind === "del" ? "-" : " "), 1),
        N(" " + c(f.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", Op, "No differences.")) : w("", !0)
    ], 4));
  }
}), Vp = { class: "flex flex-col gap-3" }, jp = { class: "flex items-center justify-between gap-2" }, Tp = { class: "text-sm font-medium" }, Dp = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, Ep = { class: "grid grid-cols-7 gap-1" }, Ip = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, Fp = ["title"], KC = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = R(/* @__PURE__ */ new Date()), r = b(() => a.value.getFullYear()), s = b(() => a.value.getMonth()), i = b(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = b(() => {
      const p = /* @__PURE__ */ new Map();
      for (const h of l.events ?? []) {
        const C = p.get(h.date) ?? [];
        C.push(h), p.set(h.date, C);
      }
      return p;
    }), u = b(() => {
      const h = new Date(r.value, s.value, 1).getDay(), C = new Date(r.value, s.value + 1, 0).getDate(), k = [];
      for (let $ = 0; $ < h; $++)
        k.push({ day: null, key: `pad-${$}`, events: [] });
      for (let $ = 1; $ <= C; $++) {
        const S = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String($).padStart(2, "0")}`;
        k.push({ day: $, key: S, events: d.value.get(S) ?? [] });
      }
      return k;
    });
    function f() {
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function g() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, h) => (t(), n("div", Vp, [
      o("div", jp, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: f
        }, " Prev "),
        o("p", Tp, c(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: g
        }, " Next ")
      ]),
      o("div", Dp, [
        (t(), n(z, null, V(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, c(C), 1)), 64))
      ]),
      o("div", Ep, [
        (t(!0), n(z, null, V(u.value, (C) => (t(), n("div", {
          key: C.key,
          class: P(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), n("p", Ip, c(C.day), 1)) : w("", !0),
          (t(!0), n(z, null, V(C.events.slice(0, 3), (k, $) => (t(), n("p", {
            key: `${C.key}-${$}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: k.label
          }, c(k.label), 9, Fp))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Np = { class: "flex items-center gap-3" }, Rp = ["min", "max", "step", "value", "disabled", "aria-label"], Up = { class: "flex shrink-0 items-center gap-1" }, Hp = ["min", "max", "step", "value", "disabled"], Kp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, qp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = b(() => a.field.min ?? 0), i = b(() => a.field.max ?? 100), d = b(() => a.field.step ?? 1), u = b(() => {
      const p = Number(a.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), f = b(
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
    return (p, h) => (t(), n("div", Np, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (C) => g(C.target.value))
      }, null, 40, Rp),
      o("div", Up, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: f.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (C) => g(C.target.value))
        }, null, 40, Hp),
        e.field.unit ? (t(), n("span", Kp, c(e.field.unit), 1)) : w("", !0)
      ])
    ]));
  }
}), ft = /* @__PURE__ */ new Map();
function zt(e, l) {
  ft.set(e, l);
}
function Gp(e) {
  return ft.get(e);
}
function qC(e) {
  return ft.has(e);
}
function Wp() {
  return [...ft.keys()].sort();
}
function GC() {
  ft.clear();
}
const Zp = ["name", "value", "checked", "disabled", "onChange"], Jp = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Yp = { class: "whitespace-nowrap" }, Xp = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Qp = ["name", "value", "checked", "disabled", "onChange"], ev = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, tv = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, av = { class: "text-center text-xs font-medium" }, nv = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, lv = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, ov = /* @__PURE__ */ O({
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
    const a = e, r = l, s = b(
      () => a.field.preview ? Gp(a.field.preview) : void 0
    ), i = b(() => !!a.field.preview && !s.value), d = b(() => a.field.layout === "segmented"), u = b(() => {
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
          onChange: (C) => r("update:modelValue", h.value)
        }, null, 40, Zp),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", Jp, [
          (t(), T(_e(s.value), {
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : w("", !0),
        o("span", Yp, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Xp, " Nothing to choose from yet. ")) : w("", !0)
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
          onChange: (C) => r("update:modelValue", h.value)
        }, null, 40, Qp),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", ev, [
          s.value ? (t(), T(_e(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", tv, " no preview ")) : w("", !0)
        ]),
        o("span", av, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", nv, " Nothing to choose from yet. ")) : w("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", lv, [
        p[2] || (p[2] = N(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        N(". Registered: " + c(x(Wp)().join(", ") || "none") + ". ", 1)
      ])) : w("", !0)
    ], 2));
  }
}), sv = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, rv = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", sv, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), iv = { class: "flex flex-col items-center gap-1 text-center" }, dv = {
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
    const l = e, a = b(() => l.mono ? "#000000" : l.accent), r = b(() => {
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
    return (s, i) => (t(), n("div", iv, [
      o("div", {
        class: P(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: a.value, color: a.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", dv, c(e.caption), 1)) : w("", !0)
    ]));
  }
}), uv = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, cv = { class: "flex items-center gap-3" }, fv = ["src"], mv = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, pv = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, vv = {
  key: 0,
  class: "text-right text-sm"
}, gv = { class: "text-neutral-500" }, hv = { class: "tabular-nums" }, bv = { key: 1 }, yv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, xv = { class: "mt-2 font-medium" }, kv = { key: 2 }, $v = { class: "w-full text-sm" }, wv = { class: "w-full py-3 pr-2" }, Cv = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Sv = { key: 0 }, Mv = ["colspan"], Bv = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, _v = { class: "w-64 text-sm" }, Av = { class: "tabular-nums" }, Pv = {
  key: 3,
  class: "py-2"
}, zv = { key: 4 }, Ov = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Lv = { class: "mt-2 flex flex-col gap-1 text-sm" }, Vv = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, jv = { key: 0 }, Tv = {
  key: 1,
  class: "mt-1"
}, Dv = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Ev = /* @__PURE__ */ O({
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
    return (f, g) => (t(), n("article", uv, [
      o("div", cv, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, fv)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: a() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, V(e.document.blocks, (p, h) => (t(), n(z, { key: h }, [
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
            p.subtitle ? (t(), n("p", mv, c(p.subtitle), 1)) : w("", !0),
            p.reference ? (t(), n("p", pv, c(p.reference), 1)) : w("", !0)
          ]),
          r(p).length ? (t(), n("dl", vv, [
            (t(!0), n(z, null, V(r(p), (C, k) => (t(), n("div", {
              key: k,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", gv, c(C.label), 1),
              o("dd", hv, c(C.value), 1)
            ]))), 128))
          ])) : w("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", bv, [
          o("h2", yv, c(p.heading), 1),
          o("p", xv, c(p.name), 1),
          (t(!0), n(z, null, V(d(p.lines), (C, k) => (t(), n("p", {
            key: k,
            class: "text-sm text-neutral-600"
          }, c(C), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", kv, [
          o("table", $v, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: a() })
              }, [
                (t(!0), n(z, null, V(d(p.columns), (C, k) => (t(), n("th", {
                  key: k,
                  class: P(["pb-2 font-medium", k > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, V(s(p), (C, k) => (t(), n("tr", {
                key: k,
                class: "border-b border-neutral-200"
              }, [
                o("td", wv, [
                  o("p", null, c(C.description), 1),
                  C.detail ? (t(), n("p", Cv, c(C.detail), 1)) : w("", !0)
                ]),
                (t(!0), n(z, null, V(C.cells, ($, S) => (t(), n("td", {
                  key: S,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c($), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", Sv, [
                o("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(p.empty), 9, Mv)
              ])) : w("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", Bv, [
            o("dl", _v, [
              (t(!0), n(z, null, V(i(p), (C, k) => (t(), n("div", {
                key: k,
                class: P([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(C.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: P(C.strong ? "" : "text-neutral-600")
                }, c(C.label), 3),
                o("dd", Av, c(C.value), 1)
              ], 6))), 128))
            ])
          ])) : w("", !0)
        ])) : p.type === "code" ? (t(), n("section", Pv, [
          D(Ja, {
            code: u(p.code),
            caption: u(p.caption),
            style: se(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", zv, [
          o("h2", Ov, c(p.heading), 1),
          o("ol", Lv, [
            (t(!0), n(z, null, V(d(p.items), (C, k) => (t(), n("li", {
              key: k,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: se({ color: a() })
              }, c(k + 1) + ".", 5),
              o("span", null, c(C), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: P(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(p.emphasis ? { color: a() } : void 0)
        }, c(p.text), 7)) : p.type === "footer" ? (t(), n("footer", Vv, [
          p.text ? (t(), n("p", jv, c(p.text), 1)) : w("", !0),
          d(p.contacts).length ? (t(), n("p", Tv, c(d(p.contacts).join(" · ")), 1)) : w("", !0)
        ])) : (t(), n("p", Dv, " This document contains a “" + c(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Iv = ["aria-label", "title"], Fv = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nv = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, WC = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Ua(), r = b(() => l.value.theme === "dark");
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
      (t(), n("svg", Fv, [
        r.value ? (t(), n(z, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", Nv))
      ]))
    ], 8, Iv));
  }
}), Rv = ["width", "height"], Uv = { key: 0 }, Hv = ["x1", "x2", "y1", "y2"], Kv = ["x", "y"], qv = ["x1", "x2", "y1", "y2"], Gv = ["x", "y"], Wv = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Zv = ["x", "y", "width", "height", "fill", "fill-opacity"], Jv = ["x", "y"], Yv = ["x", "y"], Xv = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Qv = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, eg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, tg = { class: "text-xs font-semibold tabular-nums" }, ag = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, ng = { class: "text-muted-foreground" }, ha = 5.6, ZC = /* @__PURE__ */ O({
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
    ], p = b(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, j) => ({
      ...F,
      color: F.color ?? g[j % g.length]
    }))), h = b(() => p.value[0]?.points.map((B) => B.label) ?? []), C = b(() => h.value.length), k = b(() => l.orientation === "horizontal"), $ = b(() => Math.max(0, ...h.value.map((B) => B.length))), S = b(() => {
      if (!k.value)
        return l.showAxis ? 44 : 8;
      const B = $.value * ha + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), M = b(() => Math.max(4, Math.floor((S.value - 16) / ha)));
    function _(B) {
      return B.length <= M.value ? B : `${B.slice(0, M.value - 1)}…`;
    }
    const m = b(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: S.value
    })), v = b(() => ({
      w: Math.max(1, d.value - m.value.left - m.value.right),
      h: Math.max(1, l.height - m.value.top - m.value.bottom)
    })), y = (B) => l.format ? l.format(B) : A(B);
    function A(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const E = b(() => {
      const B = h.value.map(
        (ge, ye) => l.stacked ? p.value.reduce((le, Y) => le + Math.max(0, Y.points[ye]?.value ?? 0), 0) : Math.max(...p.value.map((le) => le.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const F = Math.max(...B, 0);
      if (F <= 0)
        return 1;
      const j = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * j) ?? 10) * j;
    }), I = b(
      () => (k.value ? v.value.h : v.value.w) / Math.max(1, C.value)
    ), ae = b(() => I.value * 0.68), H = b(
      () => l.stacked || p.value.length <= 1 ? ae.value : ae.value / p.value.length
    ), K = b(() => {
      const B = [], F = new Array(C.value).fill(0);
      return p.value.forEach((j, J) => {
        j.points.forEach((ge, ye) => {
          const Y = Math.max(0, ge.value) / E.value * (k.value ? v.value.w : v.value.h), ee = (k.value ? m.value.top : m.value.left) + ye * I.value + (I.value - ae.value) / 2, Ce = l.stacked ? 0 : J * H.value;
          B.push(
            k.value ? {
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
              y: m.value.top + v.value.h - Y - F[ye],
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
    }), q = b(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: E.value * (k.value ? B : 1 - B),
        x: m.value.left + v.value.w * B,
        y: m.value.top + v.value.h * B
      }))
    ), oe = b(() => Math.max(1, Math.ceil(C.value / (k.value ? 14 : 10))));
    function ne(B) {
      return B === C.value - 1 || B % oe.value === 0;
    }
    function Z(B) {
      return (k.value ? m.value.top : m.value.left) + B * I.value + I.value / 2;
    }
    const G = b(() => u.value === null ? null : {
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
          e.showAxis ? (t(), n("g", Uv, [
            k.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("line", {
                key: `g-${j.x}`,
                x1: j.x,
                x2: j.x,
                y1: m.value.top,
                y2: m.value.top + v.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Hv))), 128)),
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("text", {
                key: `gt-${j.x}`,
                x: j.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(A(j.value)), 9, Kv))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("line", {
                key: `g-${j.y}`,
                x1: m.value.left,
                x2: d.value - m.value.right,
                y1: j.y,
                y2: j.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, qv))), 128)),
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("text", {
                key: `gt-${j.y}`,
                x: m.value.left - 8,
                y: j.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(A(j.value)), 9, Gv))), 128))
            ], 64))
          ])) : w("", !0),
          (t(!0), n(z, null, V(h.value, (j, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: k.value ? m.value.left : m.value.left + J * I.value,
            y: k.value ? m.value.top + J * I.value : m.value.top,
            width: k.value ? v.value.w : I.value,
            height: k.value ? I.value : v.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === J ? 0.4 : 0,
            onMouseenter: (ge) => u.value = J
          }, null, 40, Wv))), 128)),
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
          }, null, 8, Zv))), 128)),
          k.value ? (t(!0), n(z, { key: 1 }, V(h.value, (j, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: m.value.left - 8,
            y: Z(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(c(_(j)) + " ", 1),
            o("title", null, c(j), 1)
          ], 8, Jv)), [
            [Ue, ne(J)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, V(h.value, (j, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: Z(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(j), 9, Yv)), [
            [Ue, ne(J)]
          ])), 128))
        ], 40, Rv)),
        G.value ? (t(), n("div", Xv, [
          o("p", Qv, c(G.value.label), 1),
          (t(!0), n(z, null, V(G.value.rows, (j, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", eg, c(j.name || "Value"), 1),
            o("span", tg, c(y(j.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", ag, [
          (t(!0), n(z, null, V(p.value, (j, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", ng, c(j.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), lg = ["width", "height"], og = ["id"], sg = ["stop-color"], rg = ["stop-color"], ig = { key: 0 }, dg = ["x1", "x2", "y1", "y2"], ug = ["x", "y"], cg = ["x", "y"], fg = ["x1", "x2", "y1", "y2"], mg = ["d", "fill"], pg = ["d", "stroke", "stroke-dasharray"], vg = ["cx", "cy", "fill"], gg = { key: 1 }, hg = ["x1", "x2", "y1", "y2"], bg = ["cx", "cy", "fill"], yg = ["x", "y"], xg = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, kg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, $g = { class: "text-xs font-semibold tabular-nums" }, wg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Cg = { class: "text-muted-foreground" }, Sg = /* @__PURE__ */ O({
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
    const l = e, a = b(() => g.value.some((B) => B.axis === "right")), r = R(null), s = R(560), i = R(null);
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
    ], f = Math.random().toString(36).slice(2, 9), g = b(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, j) => ({
      ...F,
      color: F.color ?? u[j % u.length]
    }))), p = b(() => g.value[0]?.points.map((B) => B.label) ?? []), h = b(() => p.value.length), C = b(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), k = (B) => l.format ? l.format(B) : $(B);
    function $(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    function S(B) {
      const F = Math.max(...B, 0);
      if (F <= 0)
        return 1;
      const j = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * j) ?? 10) * j;
    }
    const M = b(
      () => S(
        g.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((F) => F.value))
      )
    ), _ = b(
      () => S(
        g.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((F) => F.value))
      )
    ), m = b(() => ({
      w: Math.max(1, s.value - C.value.left - C.value.right),
      h: Math.max(1, l.height - C.value.top - C.value.bottom)
    }));
    function v(B) {
      return C.value.left + (h.value <= 1 ? 0 : B / (h.value - 1) * m.value.w);
    }
    function y(B, F = "left") {
      const j = F === "right" ? _.value : M.value;
      return C.value.top + m.value.h - B / j * m.value.h;
    }
    const A = b(
      () => g.value.map((B) => {
        const F = B.points.map((J, ge) => ({
          ...J,
          x: v(ge),
          y: y(J.value, B.axis ?? "left")
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
      const j = C.value.top + m.value.h;
      return `${B} L${F[F.length - 1].x.toFixed(2)},${j} L${F[0].x.toFixed(2)},${j} Z`;
    }
    const H = b(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: C.value.top + m.value.h * B,
        value: M.value * (1 - B)
      }))
    ), K = b(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: C.value.top + m.value.h * B,
        value: _.value * (1 - B)
      }))
    ), q = b(() => Math.max(1, Math.ceil(h.value / 8)));
    function oe(B) {
      return B === h.value - 1 || B % q.value === 0;
    }
    function ne(B) {
      const F = B.currentTarget.getBoundingClientRect(), j = B.clientX - F.left - C.value.left, J = h.value <= 1 ? 1 : m.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(j / J)));
    }
    const Z = b(() => {
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
    }), G = b(() => {
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
              id: `pk-fill-${x(f)}-${J}`,
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
              }, null, 8, sg),
              o("stop", {
                offset: "100%",
                "stop-color": j.color,
                "stop-opacity": "0.01"
              }, null, 8, rg)
            ], 8, og))), 128))
          ]),
          e.showAxis ? (t(), n("g", ig, [
            (t(!0), n(z, null, V(H.value, (j) => (t(), n("line", {
              key: j.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: j.y,
              y2: j.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, dg))), 128)),
            (t(!0), n(z, null, V(H.value, (j) => (t(), n("text", {
              key: `t-${j.y}`,
              x: C.value.left - 8,
              y: j.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c($(j.value)), 9, ug))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, V(K.value, (j) => (t(), n("text", {
              key: `rt-${j.y}`,
              x: s.value - C.value.right + 8,
              y: j.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c($(j.value)), 9, cg))), 128)) : w("", !0)
          ])) : w("", !0),
          (t(!0), n(z, null, V(p.value, (j, J) => pe((t(), n("line", {
            key: `v-${J}`,
            x1: v(J),
            x2: v(J),
            y1: C.value.top,
            y2: C.value.top + m.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, fg)), [
            [Ue, oe(J)]
          ])), 128)),
          (t(!0), n(z, null, V(A.value, (j, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            j.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: j.area,
              fill: `url(#pk-fill-${x(f)}-${J})`
            }, null, 8, mg)) : w("", !0),
            o("path", {
              d: j.line,
              fill: "none",
              stroke: j.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": j.dashed ? "6 4" : void 0
            }, null, 8, pg),
            j.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: j.pts[0].x,
              cy: j.pts[0].y,
              r: "3",
              fill: j.color
            }, null, 8, vg)) : w("", !0)
          ]))), 128)),
          Z.value ? (t(), n("g", gg, [
            o("line", {
              x1: Z.value.x,
              x2: Z.value.x,
              y1: C.value.top,
              y2: C.value.top + m.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, hg),
            (t(!0), n(z, null, V(Z.value.rows, (j, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: Z.value.x,
              cy: j.y,
              r: "4",
              fill: j.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, bg))), 128))
          ])) : w("", !0),
          (t(!0), n(z, null, V(p.value, (j, J) => pe((t(), n("text", {
            key: `x-${J}`,
            x: v(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(j), 9, yg)), [
            [Ue, oe(J)]
          ])), 128))
        ], 40, lg)),
        Z.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(G.value)
        }, [
          o("p", xg, c(Z.value.label), 1),
          (t(!0), n(z, null, V(Z.value.rows, (j, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", kg, c(j.name || "Value"), 1),
            o("span", $g, c(k(j.value)), 1)
          ]))), 128))
        ], 4)) : w("", !0),
        e.showLegend && g.value.length > 1 ? (t(), n("div", wg, [
          (t(!0), n(z, null, V(A.value, (j, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", Cg, c(j.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Mg = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Bg = { class: "text-muted-foreground text-[11px] capitalize" }, _g = { class: "text-sm font-semibold tabular-nums" }, Ag = {
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
    return (l, a) => (t(), n("div", Mg, [
      o("p", Bg, c(e.label), 1),
      o("p", _g, [
        N(c(e.value) + " ", 1),
        e.share ? (t(), n("span", Ag, " (" + c(e.share) + ") ", 1)) : w("", !0)
      ])
    ]));
  }
}), Pg = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, zg = ["width", "height", "viewBox", "aria-label"], Og = ["d", "fill", "fill-opacity", "onMouseenter"], Lg = ["x", "y"], Vg = ["x", "y"], jg = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Tg = ["onMouseenter"], Dg = { class: "min-w-0 flex-1 truncate capitalize" }, Eg = { class: "tabular-nums font-medium" }, Ig = { class: "text-muted-foreground w-9 text-right tabular-nums" }, JC = /* @__PURE__ */ O({
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
    ], r = b(() => l.data.reduce((M, _) => M + _.value, 0)), s = R(null), i = b(() => l.height), d = b(() => i.value / 2 - 4), u = b(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function f(M) {
      return a[M % a.length];
    }
    function g(M) {
      return 1 - Math.min(0.55, Math.floor(M / a.length) * 0.28);
    }
    const p = b(() => {
      if (r.value <= 0)
        return [];
      const M = i.value / 2;
      let _ = -Math.PI / 2;
      return l.data.map((m, v) => {
        const y = m.value / r.value, A = y * Math.PI * 2, E = _, I = _ + A;
        return _ = I, {
          ...m,
          share: y,
          colour: f(v),
          opacity: g(v),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: y >= 0.9999 ? k(M) : C(M, E, I, d.value, u.value)
        };
      });
    });
    function h(M, _, m) {
      return `${(M + Math.cos(_) * m).toFixed(2)},${(M + Math.sin(_) * m).toFixed(2)}`;
    }
    function C(M, _, m, v, y) {
      const A = m - _ > Math.PI ? 1 : 0;
      return y <= 0 ? `M${M},${M} L${h(M, _, v)} A${v},${v} 0 ${A} 1 ${h(M, m, v)} Z` : [
        `M${h(M, _, v)}`,
        `A${v},${v} 0 ${A} 1 ${h(M, m, v)}`,
        `L${h(M, m, y)}`,
        `A${y},${y} 0 ${A} 0 ${h(M, _, y)}`,
        "Z"
      ].join(" ");
    }
    function k(M) {
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
    const $ = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M), S = (M) => `${(M * 100).toFixed(M < 0.01 ? 2 : 0)}%`;
    return (M, _) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Pg, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${$(r.value)}`
      }, [
        (t(!0), n(z, null, V(p.value, (m, v) => (t(), n("path", {
          key: v,
          d: m.path,
          fill: m.colour,
          "fill-opacity": s.value === null || s.value === v ? m.opacity : m.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (y) => s.value = v,
          onMouseleave: _[0] || (_[0] = (y) => s.value = null)
        }, null, 40, Og))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c($(s.value === null ? r.value : p.value[s.value].value)), 9, Lg),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : p.value[s.value].label), 9, Vg)
        ], 64)) : w("", !0)
      ], 8, zg)),
      o("ul", jg, [
        (t(!0), n(z, null, V(p.value, (m, v) => (t(), n("li", {
          key: v,
          class: P(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === v ? "bg-muted" : ""]),
          onMouseenter: (y) => s.value = v,
          onMouseleave: _[1] || (_[1] = (y) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: m.colour, opacity: m.opacity })
          }, null, 4),
          o("span", Dg, c(m.label), 1),
          o("span", Eg, c($(m.value)), 1),
          o("span", Ig, c(S(m.share)), 1)
        ], 42, Tg))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(mt, {
        key: 0,
        label: p.value[s.value].label,
        value: $(p.value[s.value].value),
        share: S(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), Fg = ["width", "height", "viewBox", "aria-label"], Ng = { class: "text-border" }, Rg = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Ug = { class: "fill-muted-foreground text-[10px]" }, Hg = ["x", "y"], Kg = ["x", "y"], qg = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Gg = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, YC = /* @__PURE__ */ O({
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
    const u = b(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (q, oe) => oe.color ?? a[q % a.length], g = b(() => u.value.flatMap((q) => q.points)), p = b(() => g.value.some((q) => typeof q.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, C = b(() => Math.max(10, s.value - h.left - h.right)), k = b(() => Math.max(10, l.height - h.top - h.bottom));
    function $(q) {
      if (q.length === 0)
        return [0, 1];
      const oe = Math.min(...q), ne = Math.max(...q), Z = ne - oe || Math.abs(ne) || 1;
      return [oe - Z * 0.08, ne + Z * 0.08];
    }
    const S = b(() => $(g.value.map((q) => q.x))), M = b(() => $(g.value.map((q) => q.y))), _ = (q) => {
      const [oe, ne] = S.value;
      return h.left + (q - oe) / (ne - oe) * C.value;
    }, m = (q) => {
      const [oe, ne] = M.value;
      return h.top + k.value - (q - oe) / (ne - oe) * k.value;
    }, v = b(() => Math.max(...g.value.map((q) => q.r ?? 0), 0));
    function y(q) {
      if (!p.value || !v.value)
        return 4;
      const oe = Math.max(0, q.r ?? 0) / v.value;
      return 3 + Math.sqrt(oe) * (l.maxRadius - 3);
    }
    function A([q, oe]) {
      return Array.from({ length: 5 }, (ne, Z) => q + (oe - q) / 4 * Z);
    }
    const E = b(() => A(S.value)), I = b(() => A(M.value)), ae = (q) => l.formatX?.(q) ?? String(Math.round(q * 100) / 100), H = (q) => l.formatY?.(q) ?? String(Math.round(q * 100) / 100), K = b(() => {
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
        o("g", Ng, [
          (t(!0), n(z, null, V(I.value, (ne, Z) => (t(), n("line", {
            key: `gy-${Z}`,
            x1: h.left,
            x2: h.left + C.value,
            y1: m(ne),
            y2: m(ne),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Z === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Rg))), 128))
        ]),
        o("g", Ug, [
          (t(!0), n(z, null, V(I.value, (ne, Z) => (t(), n("text", {
            key: `ty-${Z}`,
            x: h.left - 8,
            y: m(ne) + 3,
            "text-anchor": "end"
          }, c(H(ne)), 9, Hg))), 128)),
          (t(!0), n(z, null, V(E.value, (ne, Z) => (t(), n("text", {
            key: `tx-${Z}`,
            x: _(ne),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(ae(ne)), 9, Kg))), 128))
        ]),
        (t(!0), n(z, null, V(u.value, (ne, Z) => (t(), n("g", {
          key: `s-${Z}`
        }, [
          (t(!0), n(z, null, V(ne.points, (G, B) => (t(), n("circle", {
            key: `p-${Z}-${B}`,
            cx: _(G.x),
            cy: m(G.y),
            r: y(G),
            fill: f(Z, ne),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: f(Z, ne),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== Z || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (F) => i.value = { s: Z, p: B },
            onMouseleave: oe[0] || (oe[0] = (F) => i.value = null)
          }, null, 40, qg))), 128))
        ]))), 128))
      ], 8, Fg)),
      K.value ? (t(), T(mt, {
        key: 0,
        label: K.value.point.label ?? K.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ae(K.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(K.value.point.y)}`,
        share: p.value && K.value.point.r != null ? String(K.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : w("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", Gg, [
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
      ])) : w("", !0)
    ], 512));
  }
}), Wg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Zg = ["width", "height", "viewBox"], Jg = ["points"], Yg = ["x1", "y1", "x2", "y2"], Xg = ["points", "fill", "stroke"], Qg = ["cx", "cy", "fill", "onMouseenter"], eh = ["x", "y", "text-anchor"], th = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, ah = { class: "truncate" }, XC = /* @__PURE__ */ O({
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
    ], r = b(
      () => l.series.map((m, v) => ({
        ...m,
        color: m.color ?? a[v % a.length]
      }))
    ), s = b(() => r.value[0]?.points.map((m) => m.label) ?? []), i = b(() => s.value.length), d = b(() => l.height), u = b(() => d.value / 2), f = b(() => d.value / 2 - 34), g = b(() => {
      const m = Math.max(...r.value.flatMap((A) => A.points.map((E) => E.value)), 0);
      if (m <= 0)
        return 1;
      const v = 10 ** Math.floor(Math.log10(m));
      return ([1, 2, 2.5, 5, 10].find((A) => m <= A * v) ?? 10) * v;
    });
    function p(m) {
      return m / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(m, v) {
      const y = p(m);
      return {
        x: u.value + Math.cos(y) * f.value * v,
        y: u.value + Math.sin(y) * f.value * v
      };
    }
    function C(m) {
      return Array.from({ length: i.value }, (v, y) => {
        const A = h(y, m);
        return `${A.x.toFixed(2)},${A.y.toFixed(2)}`;
      }).join(" ");
    }
    const k = b(() => [0.25, 0.5, 0.75, 1].map((m) => ({ f: m, points: C(m) }))), $ = b(
      () => r.value.map((m) => {
        const v = m.points.map((y) => Math.max(0, y.value) / g.value);
        return {
          name: m.name,
          color: m.color,
          values: m.points,
          outline: v.map((y, A) => {
            const E = h(A, y);
            return `${E.x.toFixed(2)},${E.y.toFixed(2)}`;
          }).join(" "),
          dots: v.map((y, A) => h(A, y))
        };
      })
    ), S = b(
      () => s.value.map((m, v) => {
        const y = p(v), A = u.value + Math.cos(y) * (f.value + 14), E = u.value + Math.sin(y) * (f.value + 14), I = Math.cos(y);
        return {
          label: m,
          x: A,
          y: E + 3,
          anchor: Math.abs(I) < 0.2 ? "middle" : I > 0 ? "start" : "end"
        };
      })
    ), M = R(null), _ = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, v) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", Wg, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, V(k.value, (y) => (t(), n("polygon", {
          key: y.f,
          points: y.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Jg))), 128)),
        (t(!0), n(z, null, V(s.value, (y, A) => (t(), n("line", {
          key: `spoke-${A}`,
          x1: u.value,
          y1: u.value,
          x2: h(A, 1).x,
          y2: h(A, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Yg))), 128)),
        (t(!0), n(z, null, V($.value, (y, A) => (t(), n("g", {
          key: `s-${A}`
        }, [
          o("polygon", {
            points: y.outline,
            fill: y.color,
            "fill-opacity": "0.16",
            stroke: y.color,
            "stroke-width": "2"
          }, null, 8, Xg),
          (t(!0), n(z, null, V(y.dots, (E, I) => (t(), n("circle", {
            key: I,
            cx: E.x,
            cy: E.y,
            r: "3",
            fill: y.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ae) => M.value = {
              series: y.name,
              axis: s.value[I],
              value: y.values[I]?.value ?? 0
            },
            onMouseleave: v[0] || (v[0] = (ae) => M.value = null)
          }, null, 40, Qg))), 128))
        ]))), 128)),
        (t(!0), n(z, null, V(S.value, (y, A) => (t(), n("text", {
          key: `l-${A}`,
          x: y.x,
          y: y.y,
          "text-anchor": y.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(y.label), 9, eh))), 128))
      ], 8, Zg)),
      e.showLegend ? (t(), n("ul", th, [
        (t(!0), n(z, null, V(r.value, (y, A) => (t(), n("li", {
          key: A,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: y.color })
          }, null, 4),
          o("span", ah, c(y.name), 1)
        ]))), 128))
      ])) : w("", !0),
      M.value ? (t(), T(mt, {
        key: 1,
        label: `${M.value.series} — ${M.value.axis}`,
        value: _(M.value.value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), nh = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, lh = ["width", "height", "viewBox"], oh = ["cx", "cy", "r"], sh = ["d", "fill", "fill-opacity", "onMouseenter"], rh = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, ih = { class: "min-w-0 flex-1 truncate capitalize" }, dh = { class: "font-medium tabular-nums" }, QC = /* @__PURE__ */ O({
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
    ], r = R(null), s = b(() => l.height), i = b(() => s.value / 2), d = b(() => s.value / 2 - 6), u = b(() => Math.max(...l.data.map((C) => Math.max(0, C.value)), 0)), f = b(() => {
      const C = l.data.length;
      if (C === 0 || u.value <= 0)
        return [];
      const k = Math.PI * 2 / C;
      return l.data.map(($, S) => {
        const M = Math.sqrt(Math.max(0, $.value) / u.value), _ = d.value * M, m = S * k - Math.PI / 2, v = m + k;
        return {
          ...$,
          color: a[S % a.length],
          share: u.value === 0 ? 0 : $.value / u.value,
          path: g(i.value, m, v, _)
        };
      });
    });
    function g(C, k, $, S) {
      if (S <= 0)
        return "";
      if ($ - k >= Math.PI * 2 - 1e-6)
        return `M${C - S},${C} A${S},${S} 0 1 1 ${C + S},${C} A${S},${S} 0 1 1 ${C - S},${C} Z`;
      const M = $ - k > Math.PI ? 1 : 0, _ = C + Math.cos(k) * S, m = C + Math.sin(k) * S, v = C + Math.cos($) * S, y = C + Math.sin($) * S;
      return `M${C},${C} L${_.toFixed(2)},${m.toFixed(2)} A${S.toFixed(2)},${S.toFixed(2)} 0 ${M} 1 ${v.toFixed(2)},${y.toFixed(2)} Z`;
    }
    const p = b(() => [0.5, 0.75, 1].map((C) => d.value * C)), h = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, k) => f.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", nh, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, V(p.value, ($) => (t(), n("circle", {
          key: $,
          cx: i.value,
          cy: i.value,
          r: $,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, oh))), 128)),
        (t(!0), n(z, null, V(f.value, ($, S) => (t(), n("path", {
          key: S,
          d: $.path,
          fill: $.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === S ? 0.75 : 0.3,
          onMouseenter: (M) => r.value = S,
          onMouseleave: k[0] || (k[0] = (M) => r.value = null)
        }, null, 40, sh))), 128))
      ], 8, lh)),
      e.showLegend ? (t(), n("ul", rh, [
        (t(!0), n(z, null, V(f.value, ($, S) => (t(), n("li", {
          key: S,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: $.color })
          }, null, 4),
          o("span", ih, c($.label), 1),
          o("span", dh, c(h($.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      r.value !== null ? (t(), T(mt, {
        key: 1,
        label: f.value[r.value].label,
        value: h(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), uh = ["width", "height"], ch = ["x1", "x2", "y1", "y2"], fh = ["x", "y"], mh = ["x", "y"], ph = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], vh = ["x", "y", "width", "height", "fill", "fill-opacity"], gh = ["d", "stroke"], hh = ["cx", "cy", "fill"], bh = ["x", "y"], yh = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, xh = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, kh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, $h = { class: "text-xs font-semibold tabular-nums" }, wh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Ch = { class: "text-muted-foreground" }, e8 = /* @__PURE__ */ O({
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
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], f = b(
      () => l.bars.map((Z, G) => ({
        ...Z,
        color: Z.color ?? d[G % d.length]
      }))
    ), g = b(
      () => l.lines.map((Z, G) => ({
        ...Z,
        color: Z.color ?? u[G % u.length]
      }))
    ), p = b(
      () => f.value[0]?.points.map((Z) => Z.label) ?? g.value[0]?.points.map((Z) => Z.label) ?? []
    ), h = b(() => p.value.length), C = b(() => l.lineAxis === "right"), k = b(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), $ = b(() => ({
      w: Math.max(1, r.value - k.value.left - k.value.right),
      h: Math.max(1, l.height - k.value.top - k.value.bottom)
    }));
    function S(Z) {
      const G = Math.max(...Z, 0);
      if (G <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(G));
      return ([1, 2, 2.5, 5, 10].find((j) => G <= j * B) ?? 10) * B;
    }
    const M = b(
      () => S([
        ...f.value.flatMap((Z) => Z.points.map((G) => G.value)),
        ...C.value ? [] : g.value.flatMap((Z) => Z.points.map((G) => G.value))
      ])
    ), _ = b(
      () => C.value ? S(g.value.flatMap((Z) => Z.points.map((G) => G.value))) : M.value
    ), m = b(() => $.value.w / Math.max(1, h.value)), v = b(() => m.value * 0.6), y = b(() => v.value / Math.max(1, f.value.length));
    function A(Z) {
      return k.value.left + Z * m.value + m.value / 2;
    }
    const E = b(
      () => f.value.flatMap(
        (Z, G) => Z.points.map((B, F) => {
          const j = Math.max(0, B.value) / M.value * $.value.h;
          return {
            x: A(F) - v.value / 2 + G * y.value,
            y: k.value.top + $.value.h - j,
            w: Math.max(0, y.value - 2),
            h: j,
            color: Z.color,
            index: F,
            name: Z.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), I = b(
      () => g.value.map((Z) => {
        const G = Z.points.map((B, F) => ({
          x: A(F),
          y: k.value.top + $.value.h - Math.max(0, B.value) / _.value * $.value.h,
          value: B.value
        }));
        return {
          ...Z,
          pts: G,
          d: G.map((B, F) => `${F === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), ae = b(
      () => [0, 0.25, 0.5, 0.75, 1].map((Z) => ({
        y: k.value.top + $.value.h * Z,
        left: M.value * (1 - Z),
        right: _.value * (1 - Z)
      }))
    ), H = b(() => Math.max(1, Math.ceil(h.value / 10)));
    function K(Z) {
      return Z === h.value - 1 || Z % H.value === 0;
    }
    const q = (Z) => l.format ? l.format(Z) : oe(Z);
    function oe(Z) {
      return Math.abs(Z) >= 1e6 ? `${(Z / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(Z) >= 1e3 ? `${(Z / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(Z * 100) / 100);
    }
    const ne = b(() => {
      if (s.value === null)
        return null;
      const Z = s.value;
      return {
        label: p.value[Z],
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
            x1: k.value.left,
            x2: r.value - k.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, ch))), 128)),
          (t(!0), n(z, null, V(ae.value, (B) => (t(), n("text", {
            key: `lt-${B.y}`,
            x: k.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(oe(B.left)), 9, fh))), 128)),
          C.value ? (t(!0), n(z, { key: 0 }, V(ae.value, (B) => (t(), n("text", {
            key: `rt-${B.y}`,
            x: r.value - k.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(oe(B.right)), 9, mh))), 128)) : w("", !0),
          (t(!0), n(z, null, V(p.value, (B, F) => (t(), n("rect", {
            key: `hit-${F}`,
            x: k.value.left + F * m.value,
            y: k.value.top,
            width: m.value,
            height: $.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (j) => s.value = F
          }, null, 40, ph))), 128)),
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
          }, null, 8, vh))), 128)),
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
            }, null, 8, gh),
            s.value !== null && B.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, hh)) : w("", !0)
          ]))), 128)),
          (t(!0), n(z, null, V(p.value, (B, F) => pe((t(), n("text", {
            key: `x-${F}`,
            x: A(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(B), 9, bh)), [
            [Ue, K(F)]
          ])), 128))
        ], 40, uh)),
        ne.value ? (t(), n("div", yh, [
          o("p", xh, c(ne.value.label), 1),
          (t(!0), n(z, null, V(ne.value.rows, (B, F) => (t(), n("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: B.color })
            }, null, 4),
            o("span", kh, c(B.name), 1),
            o("span", $h, c(q(B.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend ? (t(), n("div", wh, [
          (t(!0), n(z, null, V([...f.value, ...g.value], (B, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: B.color })
            }, null, 4),
            o("span", Ch, c(B.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Sh = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Mh = { class: "text-muted-foreground" }, Bh = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, _h = ["width", "height"], Ah = ["x", "y"], Ph = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], zh = ["x", "y"], Oh = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Lh = { class: "text-[11px] font-medium capitalize" }, Vh = { class: "text-muted-foreground text-[11px] capitalize" }, jh = { class: "text-sm font-semibold tabular-nums" }, Th = { class: "text-muted-foreground text-xs font-normal" }, t8 = /* @__PURE__ */ O({
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
      i = new ResizeObserver((v) => {
        r.value = Math.max(160, v[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const d = b(() => l.series[0]?.points.map((v) => v.label) ?? []), u = b(() => l.series.length), f = b(() => d.value.length), g = b(() => Math.min(140, Math.max(60, r.value * 0.16))), p = b(() => Math.max(1, r.value - g.value - 8)), h = b(() => p.value / Math.max(1, f.value)), C = b(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function k(v) {
      if (v === 0)
        return "var(--muted)";
      const y = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(v / y * 100)}%, var(--muted))`;
    }
    function $(v) {
      for (let y = 0; y < l.buckets.length; y++) {
        const A = l.buckets[y].max;
        if (A === void 0 || v < A)
          return y;
      }
      return l.buckets.length - 1;
    }
    const S = b(
      () => l.series.flatMap(
        (v, y) => v.points.map((A, E) => {
          const I = $(A.value);
          return {
            row: y,
            col: E,
            x: g.value + E * h.value,
            y: 4 + y * C.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, C.value - 4),
            colour: k(I),
            label: A.label,
            value: A.value,
            rowName: v.name,
            bucketLabel: l.buckets[I].label
          };
        })
      )
    ), M = b(() => h.value < 2), _ = b(() => s.value ? S.value.find((v) => v.row === s.value.row && v.col === s.value.col) ?? null : null), m = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v);
    return (v, y) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      u.value === 0 || f.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        o("div", Sh, [
          (t(!0), n(z, null, V(e.buckets, (A, E) => (t(), n("span", {
            key: E,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: k(E) })
            }, null, 4),
            o("span", Mh, c(A.label), 1)
          ]))), 128))
        ]),
        M.value ? (t(), n("p", Bh, c(f.value) + " columns - too many to label individually ", 1)) : w("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: y[0] || (y[0] = (A) => s.value = null)
        }, [
          (t(!0), n(z, null, V(e.series, (A, E) => (t(), n("text", {
            key: `r-${E}`,
            x: g.value - 10,
            y: 4 + E * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(A.name), 9, Ah))), 128)),
          (t(!0), n(z, null, V(S.value, (A, E) => (t(), n("rect", {
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
          }, null, 40, Ph))), 128)),
          e.showColumnLabels && !M.value ? (t(!0), n(z, { key: 0 }, V(d.value, (A, E) => (t(), n("text", {
            key: `c-${E}`,
            x: g.value + E * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(A), 9, zh))), 128)) : w("", !0)
        ], 40, _h)),
        _.value ? (t(), n("div", Oh, [
          o("p", Lh, c(_.value.label), 1),
          o("p", Vh, c(_.value.rowName), 1),
          o("p", jh, [
            N(c(m(_.value.value)) + " ", 1),
            o("span", Th, "(" + c(_.value.bucketLabel) + ")", 1)
          ])
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Dh = ["viewBox"], Eh = { key: 0 }, Ih = ["id"], Fh = ["stop-color"], Nh = ["stop-color"], Rh = ["d", "fill"], Uh = ["d", "stroke"], ba = 100, nt = 30, Mt = /* @__PURE__ */ O({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = Math.random().toString(36).slice(2, 9), r = b(() => {
      const u = l.data.map((h) => h.value);
      if (u.length < 2)
        return [];
      const f = Math.min(...u), p = Math.max(...u) - f || 1;
      return u.map((h, C) => ({
        x: C / (u.length - 1) * ba,
        y: nt - (h - f) / p * (nt - 4) - 2
      }));
    });
    function s(u) {
      const f = u.length;
      if (f < 2)
        return "";
      const g = [], p = [];
      for (let k = 0; k < f - 1; k++)
        g[k] = u[k + 1].x - u[k].x, p[k] = g[k] === 0 ? 0 : (u[k + 1].y - u[k].y) / g[k];
      const h = [p[0]];
      for (let k = 1; k < f - 1; k++)
        if (p[k - 1] * p[k] <= 0)
          h[k] = 0;
        else {
          const $ = 2 * g[k] + g[k - 1], S = g[k] + 2 * g[k - 1];
          h[k] = ($ + S) / ($ / p[k - 1] + S / p[k]);
        }
      h[f - 1] = p[f - 2];
      let C = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let k = 0; k < f - 1; k++) {
        const $ = g[k] / 3;
        C += ` C${(u[k].x + $).toFixed(2)},${(u[k].y + h[k] * $).toFixed(2)} ${(u[k + 1].x - $).toFixed(2)},${(u[k + 1].y - h[k + 1] * $).toFixed(2)} ${u[k + 1].x.toFixed(2)},${u[k + 1].y.toFixed(2)}`;
      }
      return C;
    }
    const i = b(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? s(u) : u.map((f, g) => `${g === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), d = b(() => {
      const u = r.value;
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${nt} L${u[0].x.toFixed(2)},${nt} Z`;
    });
    return (u, f) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${ba} ${nt}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", Eh, [
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
          }, null, 8, Fh),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Nh)
        ], 8, Ih)
      ])) : w("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${x(a)})`
      }, null, 8, Rh)) : w("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Uh)
    ], 12, Dh)) : w("", !0);
  }
}), Hh = { class: "flex items-center gap-1 text-xs" }, Kh = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, qh = {
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
    const l = e, a = b(() => l.direction === "flat" ? null : l.direction === "new" ? !l.inverted : l.inverted ? l.direction === "down" : l.direction === "up"), r = b(
      () => a.value === null ? "text-muted-foreground" : a.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = b(
      () => l.direction === "flat" ? "→" : l.direction === "down" ? "▼" : "▲"
    ), i = b(() => l.direction === "new" ? "New" : l.percentage === null ? "-" : `${Math.abs(l.percentage)}%`);
    return (d, u) => (t(), n("span", Hh, [
      o("span", {
        class: P(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Kh, c(s.value), 1),
        N(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", qh, c(e.comparison), 1)) : w("", !0)
    ]));
  }
}), Gh = ["data-collapsed"], Wh = { class: "flex flex-wrap items-start justify-between gap-2" }, Zh = { class: "flex min-w-0 items-start gap-2" }, Jh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yh = ["d"], Xh = { class: "min-w-0" }, Qh = { class: "text-sm font-medium" }, eb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, tb = { class: "flex shrink-0 items-center gap-1.5" }, ab = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, nb = ["aria-pressed", "onClick"], lb = ["aria-expanded", "aria-label", "title"], ob = ["aria-label"], sb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, rb = ["d"], ib = /* @__PURE__ */ O({
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
    const l = e, a = Nt(), r = R(l.defaultCollapsed), s = b(() => !!l.icon && !a.icon), i = b(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), n("div", {
      class: P(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Wh, [
        o("div", Zh, [
          U(d.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", Jh, [
              o("path", {
                d: x(ce)(e.icon)
              }, null, 8, Yh)
            ])) : w("", !0)
          ]),
          o("div", Xh, [
            o("p", Qh, c(e.label), 1),
            e.description ? (t(), n("p", eb, c(e.description), 1)) : w("", !0),
            U(d.$slots, "trend")
          ])
        ]),
        o("div", tb, [
          U(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", ab, [
            (t(!0), n(z, null, V(e.periods, (f) => (t(), n("button", {
              key: f.value,
              type: "button",
              class: P([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (g) => d.$emit("update:period", f.value)
            }, c(f.label), 11, nb))), 128))
          ])) : w("", !0),
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
          ], 8, lb)) : w("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (f) => d.$emit("hide"))
          }, [
            (t(), n("svg", sb, [
              o("path", {
                d: x(ce)("eye-off")
              }, null, 8, rb)
            ]))
          ], 8, ob)) : w("", !0)
        ])
      ]),
      r.value ? w("", !0) : (t(), n("div", {
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
    ], 10, Gh));
  }
}), db = ["aria-pressed", "aria-label", "title"], ub = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, cb = ["d"], fb = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, mb = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, pb = ["href"], vb = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gb = ["d"], hb = ["aria-label", "onClick"], bb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yb = ["d"], xb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, kb = ["d"], $b = {
  key: 0,
  class: "flex flex-col gap-1"
}, wb = ["onClick"], Cb = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Sb = ["d"], Mb = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Bb = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!1), i = R(!1), d = b(
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
      D(ib, {
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
            (t(), n("svg", ub, [
              o("path", {
                d: x(ce)(s.value ? "check" : "pencil")
              }, null, 8, cb)
            ]))
          ], 8, db)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), n("div", fb, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            D(ue, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (h) => i.value = !0)
            }, {
              default: L(() => [...p[6] || (p[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", mb, [
            (t(!0), n(z, null, V(e.items, (h) => (t(), n("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", vb, [
                  o("path", {
                    d: x(ce)(h.icon)
                  }, null, 8, gb)
                ])),
                N(" " + c(h.label), 1)
              ], 8, pb),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (C) => u(h.id)
              }, [
                (t(), n("svg", bb, [
                  o("path", {
                    d: x(ce)("x")
                  }, null, 8, yb)
                ]))
              ], 8, hb)) : w("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (h) => i.value = !0)
            }, [
              (t(), n("svg", xb, [
                o("path", {
                  d: x(ce)("plus")
                }, null, 8, kb)
              ])),
              p[8] || (p[8] = N(" Add ", -1))
            ])) : w("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      D(it, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (h) => i.value = !1)
      }, {
        footer: L(() => [
          D(ue, {
            variant: "outline",
            onClick: p[4] || (p[4] = (h) => i.value = !1)
          }, {
            default: L(() => [...p[9] || (p[9] = [
              N("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          d.value.length ? (t(), n("ul", $b, [
            (t(!0), n(z, null, V(d.value, (h) => (t(), n("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => f(h)
              }, [
                (t(), n("svg", Cb, [
                  o("path", {
                    d: x(ce)(h.icon)
                  }, null, 8, Sb)
                ])),
                N(" " + c(h.label), 1)
              ], 8, wb)
            ]))), 128))
          ])) : (t(), n("p", Mb, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), _b = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Ab = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Pb = { class: "relative w-full max-w-xl" }, zb = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ob = ["d"], Lb = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Vb = ["data-slot"], jb = { class: "px-5 py-4" }, Tb = { class: "mb-3 text-sm font-semibold" }, Db = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Eb = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ib = ["d"], Fb = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, a8 = /* @__PURE__ */ O({
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
    const l = e, a = R(""), r = b(() => {
      const u = l.linkComponent;
      return typeof u == "string" ? u : ka(u);
    }), s = ot({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(u) {
      return u.external === !0 || /^https?:\/\//.test(u.href);
    }
    const d = b(() => {
      const u = a.value.trim().toLowerCase();
      return l.sections.map((f) => ({
        ...f,
        links: u ? f.links.filter((g) => g.label.toLowerCase().includes(u)) : f.links
      })).filter((f) => f.links.length > 0);
    });
    return (u, f) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : x(qe)])
    }, [
      o("header", null, [
        o("h1", _b, c(e.title), 1),
        e.description ? (t(), n("p", Ab, c(e.description), 1)) : w("", !0)
      ]),
      o("div", Pb, [
        (t(), n("svg", zb, [
          o("path", {
            d: x(ce)("search")
          }, null, 8, Ob)
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
      d.value.length ? (t(), n("div", Lb, [
        (t(!0), n(z, null, V(d.value, (g) => (t(), n("section", {
          key: g.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${g.key}`
        }, [
          o("div", jb, [
            o("h2", Tb, c(g.title), 1),
            o("div", Db, [
              (t(!0), n(z, null, V(g.links, (p) => (t(), T(_e(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: P(x(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: L(() => [
                  (t(), n("svg", Eb, [
                    o("path", {
                      d: x(ce)(p.icon)
                    }, null, 8, Ib)
                  ])),
                  N(" " + c(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Vb))), 128))
      ])) : (t(), n("p", Fb, ' Nothing matches "' + c(a.value) + '". ', 1))
    ], 2));
  }
}), Nb = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Rb = { class: "flex flex-1 flex-col gap-1 p-4" }, Ub = { class: "text-muted-foreground relative text-xs font-medium" }, Hb = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Kb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, qb = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Gb = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, n8 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", Nb, [
      o("div", Rb, [
        o("p", Ub, c(e.label), 1),
        e.loading ? (t(), T(ze, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", Hb, " Could not load ")) : (t(), n("span", Kb, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Ya, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", qb, c(e.description), 1)) : w("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", Gb, [
        D(Mt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : w("", !0)
    ]));
  }
}), Wb = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Zb = { class: "flex flex-col gap-1 p-4" }, Jb = { class: "flex items-start justify-between gap-2" }, Yb = { class: "text-sm font-medium" }, Xb = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Qb = { class: "mt-1 flex flex-wrap items-center gap-2" }, e1 = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, t1 = {
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
    const l = e, a = b(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = b(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = b(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, d) => (t(), n("div", Wb, [
      o("div", Zb, [
        o("div", Jb, [
          o("p", Yb, c(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", Xb, c(e.caption), 1)) : w("", !0),
        o("div", Qb, [
          e.loading ? (t(), T(ze, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", e1, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: P(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : w("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", t1, [
        D(Mt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : w("", !0)
    ]));
  }
}), a1 = { class: "relative flex flex-col gap-2" }, n1 = ["aria-label"], l1 = ["onMouseenter"], o1 = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, s1 = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, r1 = { class: "truncate" }, i1 = { class: "text-sm font-semibold tabular-nums" }, l8 = /* @__PURE__ */ O({
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
    ], r = b(() => l.segments.reduce((g, p) => g + Math.max(0, p.value), 0)), s = b(() => Math.max(l.total ?? r.value, r.value, 1)), i = b(
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
    ), d = (g) => l.format ? l.format(g) : new Intl.NumberFormat().format(g), u = R(null), f = (g) => `${(g * 100).toFixed(g > 0 && g < 0.01 ? 1 : 0)}%`;
    return (g, p) => (t(), n("div", a1, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, V(i.value, (h, C) => (t(), n("span", {
          key: C,
          class: P(["h-full transition-all", [
            C === 0 ? "rounded-l-full" : "",
            C === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: se({
            width: h.width,
            background: h.color,
            opacity: u.value === null || u.value === C ? 1 : 0.4
          }),
          onMouseenter: (k) => u.value = C,
          onMouseleave: p[0] || (p[0] = (k) => u.value = null)
        }, null, 46, l1))), 128))
      ], 12, n1),
      e.showLegend ? (t(), n("div", o1, [
        (t(!0), n(z, null, V(i.value, (h, C) => (t(), n("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", s1, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: h.color })
            }, null, 4),
            o("span", r1, c(h.label), 1)
          ]),
          o("span", i1, c(d(h.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      u.value !== null ? (t(), T(mt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: f(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), d1 = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, u1 = ["data-heading"], c1 = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, f1 = { class: "text-muted-foreground truncate" }, m1 = ["aria-label"], o8 = /* @__PURE__ */ O({
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
    }, s = b(
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
    return (i, d) => (t(), n("div", d1, [
      (t(!0), n(z, null, V(s.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: P(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, c(u.label), 3)) : (t(), n("div", c1, [
          o("span", f1, c(u.label), 1),
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
        ], 8, m1)) : w("", !0)
      ], 8, u1))), 128))
    ]));
  }
}), p1 = {
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
}, v1 = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function g1(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function h1(e, l) {
  return l || (e ? p1[g1(e)] ?? "neutral" : "neutral");
}
function b1(e, l) {
  return v1[h1(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = b(() => b1(l.status, l.tone));
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
}), y1 = ["data-layout"], x1 = ["src", "alt"], k1 = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, $1 = ["src"], w1 = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, C1 = ["onMouseenter"], S1 = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, M1 = { class: "min-w-0" }, B1 = { class: "truncate text-sm font-medium" }, _1 = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, A1 = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, P1 = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, z1 = { class: "min-w-0" }, O1 = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, L1 = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, V1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, j1 = ["d"], T1 = ["aria-label"], D1 = /* @__PURE__ */ O({
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
    function d(S) {
      if (typeof S != "string")
        return null;
      const M = S.trim();
      return M === "" ? null : /^(https?:)?\/\//i.test(M) ? M : null;
    }
    const u = b(() => {
      const S = [r.item.image, ...r.item.images ?? []].map(d).filter((M) => M !== null);
      return [...new Set(S)];
    }), f = b(() => u.value[i.value] ?? u.value[0] ?? null), g = b(
      () => r.item.label.split(/\s+/).slice(0, 2).map((S) => S[0]?.toUpperCase() ?? "").join("")
    ), p = b(() => {
      const S = r.item.progress;
      if (!S)
        return null;
      const M = Math.max(S.total ?? 100, S.value, 1);
      return `${Math.min(100, Math.max(0, S.value / M * 100)).toFixed(2)}%`;
    }), h = b(() => u.value.length > 1 ? u.value[1] : null), C = b(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), k = b(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function $(S) {
      S.stopPropagation(), s("cart", r.item.key);
    }
    return (S, M) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: P(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: M[0] || (M[0] = (_) => s("select", e.item.key)),
      onKeydown: M[1] || (M[1] = un(he((_) => s("select", e.item.key), ["prevent"]), ["enter"])),
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
        }, null, 8, x1)) : (t(), n("span", k1, c(g.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, $1)) : w("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", w1, [
          (t(!0), n(z, null, V(u.value, (_, m) => (t(), n("span", {
            key: m,
            class: P(["size-1.5 rounded-full", m === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (v) => i.value = m
          }, null, 42, C1))), 128))
        ])) : w("", !0)
      ], 2),
      o("div", {
        class: P(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", S1, [
          o("div", M1, [
            o("p", B1, c(e.item.label), 1),
            e.item.caption ? (t(), n("p", _1, c(e.item.caption), 1)) : w("", !0),
            e.item.facts?.length ? (t(), n("p", A1, c(e.item.facts.join(" · ")), 1)) : w("", !0)
          ]),
          e.item.status ? (t(), T(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : w("", !0)
        ]),
        o("div", P1, [
          o("div", z1, [
            e.item.price ? (t(), n("p", O1, c(e.item.price), 1)) : w("", !0),
            k.value ? (t(), n("p", L1, c(k.value), 1)) : w("", !0)
          ]),
          C.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: $
          }, [
            (t(), n("svg", V1, [
              o("path", {
                d: x(ce)("cart")
              }, null, 8, j1)
            ]))
          ])) : w("", !0)
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
        ], 8, T1)) : w("", !0)
      ], 2)
    ], 42, y1));
  }
});
function E1(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function I1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function F1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const N1 = ["data-featured", "data-recommended"], R1 = { class: "flex flex-col gap-1" }, U1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, H1 = { key: 0 }, K1 = { key: 1 }, q1 = { key: 2 }, G1 = { key: 3 }, W1 = { class: "text-sm font-semibold" }, Z1 = { class: "flex items-baseline gap-1" }, J1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Y1 = { class: "text-muted-foreground text-sm font-normal" }, X1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, Q1 = { class: "text-muted-foreground mt-1 text-xs" }, ey = { class: "flex flex-1 flex-col gap-2 text-sm" }, ty = { class: "flex min-w-0 items-start gap-2" }, ay = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ny = ["d"], ly = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, oy = ["d"], sy = { class: "capitalize" }, ry = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, iy = { class: "text-foreground font-medium" }, dy = { class: "mt-auto flex gap-2 pt-2" }, uy = /* @__PURE__ */ O({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = b(
      () => a.plan.priceFormatted ?? String(a.plan.price)
    ), i = b(
      () => !!(a.plan.featured || a.plan.recommended)
    ), d = b(() => {
      const f = a.plan.perks ?? {};
      return Object.entries(f).map(([g, p]) => ({
        key: g,
        label: g.replace(/_/g, " "),
        granted: F1(p.value),
        display: I1(p.value)
      }));
    }), u = b(() => a.plan.extraPerks ?? []);
    return (f, g) => (t(), n("article", {
      class: P(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", R1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", U1, [
          e.plan.recommended ? (t(), n("span", H1, "Recommended")) : e.plan.featured ? (t(), n("span", K1, "Featured")) : w("", !0),
          e.plan.trial ? (t(), n("span", q1, "Trial")) : w("", !0),
          e.plan.active === !1 ? (t(), n("span", G1, "Inactive")) : w("", !0)
        ])) : w("", !0),
        o("h3", W1, c(e.plan.name), 1),
        o("p", Z1, [
          o("span", J1, c(s.value), 1),
          o("span", Y1, c(x(E1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", X1, c(e.plan.shortDescription), 1)) : w("", !0),
        o("p", Q1, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", ey, [
        (t(!0), n(z, null, V(d.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", ty, [
            o("span", {
              class: P(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", ay, [
                o("path", {
                  d: x(ce)("check")
                }, null, 8, ny)
              ])) : (t(), n("svg", ly, [
                o("path", {
                  d: x(ce)("x")
                }, null, 8, oy)
              ]))
            ], 2),
            o("span", sy, c(p.label), 1)
          ]),
          p.display ? (t(), n("span", ry, c(p.display), 1)) : w("", !0)
        ]))), 128)),
        (t(!0), n(z, null, V(u.value, (p, h) => (t(), n("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(p.key), 1),
          o("span", iy, c(p.value), 1)
        ]))), 128))
      ]),
      o("footer", dy, [
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
    ], 10, N1));
  }
}), cy = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, fy = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, my = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, py = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, vy = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, s8 = /* @__PURE__ */ O({
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
      class: P(["w-full space-y-6", e.embedded ? "" : x(qe)]),
      "data-slot": "plan-grid"
    }, [
      o("header", cy, [
        o("div", null, [
          e.title ? (t(), n("h1", fy, c(e.title), 1)) : w("", !0),
          e.description ? (t(), n("p", my, c(e.description), 1)) : w("", !0)
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
      e.plans.length === 0 ? (t(), n("p", py, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", vy, [
        (t(!0), n(z, null, V(e.plans, (i) => (t(), T(uy, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => a("edit", d)),
          onDelete: s[2] || (s[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), gy = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, hy = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, by = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, yy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, xy = { class: "space-y-1.5" }, ky = { class: "space-y-1.5" }, $y = { class: "space-y-1.5" }, wy = { class: "space-y-1.5" }, Cy = { class: "space-y-1.5" }, Sy = { class: "flex items-center gap-3 text-sm" }, My = { class: "flex items-center gap-3 text-sm" }, By = { class: "flex items-center gap-3 text-sm" }, _y = {
  key: 0,
  class: "space-y-1.5"
}, Ay = { class: "flex items-center gap-3 text-sm" }, Py = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, zy = { class: "space-y-1.5" }, Oy = ["value"], Ly = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Vy = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, jy = ["id", "value", "onInput"], Ty = { class: "space-y-2" }, Dy = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Ey = ["d"], r8 = /* @__PURE__ */ O({
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
    function d(m, v) {
      const y = i.perks?.[m]?.value;
      return y ?? v;
    }
    function u(m, v, y) {
      const A = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: v,
          overview: y ?? A?.overview ?? ""
        }
      };
    }
    function f(m, v) {
      const y = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: y?.value ?? (m === "modules" ? [] : 0),
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
    const p = b({
      get: () => {
        const m = d("modules", []);
        return Array.isArray(m) ? m.map(String) : [];
      },
      set: (m) => {
        u("modules", C(m.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), h = b(
      () => r.modules.map((m) => ({ value: m.key, label: m.label }))
    );
    function C(m) {
      const v = Object.fromEntries(r.modules.map((E) => [E.key, E])), y = new Set(m);
      for (const E of r.modules)
        if (!y.has(E.key))
          for (const I of E.children ?? [])
            y.delete(I);
      let A = !0;
      for (; A; ) {
        A = !1;
        for (const E of [...y])
          for (const I of v[E]?.requires ?? [])
            y.has(I) || (y.add(I), A = !0);
      }
      return [...y];
    }
    function k() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function $(m) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, y) => y !== m);
    }
    function S() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((m) => m.key.trim() !== "")
      });
    }
    const M = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`, _ = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`;
    return (m, v) => (t(), n("form", {
      class: P(["w-full space-y-6", e.embedded ? "" : x(qe)]),
      "data-slot": "plan-editor",
      onSubmit: he(S, ["prevent"])
    }, [
      o("header", gy, [
        o("div", null, [
          o("h1", hy, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          v[13] || (v[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        D(ue, {
          type: "button",
          variant: "outline",
          onClick: v[0] || (v[0] = (y) => s("cancel"))
        }, {
          default: L(() => [...v[14] || (v[14] = [
            N("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", by, [
        o("section", yy, [
          v[26] || (v[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", xy, [
            D(Pe, { for: "plan-name" }, {
              default: L(() => [...v[15] || (v[15] = [
                N("Plan name", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": v[1] || (v[1] = (y) => i.name = y),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", ky, [
            D(Pe, { for: "plan-short" }, {
              default: L(() => [...v[16] || (v[16] = [
                N("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": v[2] || (v[2] = (y) => i.shortDescription = y),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", $y, [
            D(Pe, { for: "plan-description" }, {
              default: L(() => [...v[17] || (v[17] = [
                N("Plan description", -1)
              ])]),
              _: 1
            }),
            pe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": v[3] || (v[3] = (y) => i.description = y),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: P(_)
            }, null, 512), [
              [Ae, i.description]
            ])
          ]),
          o("div", wy, [
            D(Pe, { for: "plan-days" }, {
              default: L(() => [...v[18] || (v[18] = [
                N("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (y) => i.days = y),
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
          o("div", Cy, [
            D(Pe, { for: "plan-price" }, {
              default: L(() => [...v[20] || (v[20] = [
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
              "onUpdate:modelValue": v[5] || (v[5] = (y) => i.price = Number(y))
            }, null, 8, ["model-value"])
          ]),
          o("label", Sy, [
            D(x(We), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (y) => i.featured = y)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = N(" Featured ", -1))
          ]),
          o("label", My, [
            D(x(We), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (y) => i.recommended = y)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = N(" Recommended ", -1))
          ]),
          o("label", By, [
            D(x(We), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (y) => i.trial = y)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", _y, [
            D(Pe, { for: "plan-trial-days" }, {
              default: L(() => [...v[24] || (v[24] = [
                N("Trial days", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": v[9] || (v[9] = (y) => i.trialDays = Number(y))
            }, null, 8, ["model-value"])
          ])) : w("", !0),
          o("label", Ay, [
            D(x(We), {
              checked: i.active !== !1,
              "onUpdate:checked": v[10] || (v[10] = (y) => i.active = y)
            }, null, 8, ["checked"]),
            v[25] || (v[25] = N(" Active ", -1))
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
        o("section", Py, [
          v[33] || (v[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", zy, [
            D(Pe, null, {
              default: L(() => [...v[27] || (v[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Zt, {
              modelValue: p.value,
              "onUpdate:modelValue": v[11] || (v[11] = (y) => p.value = y),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            D(Pe, { for: "plan-modules-overview" }, {
              default: L(() => [...v[28] || (v[28] = [
                N("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: P(_),
              onInput: v[12] || (v[12] = (y) => f(
                "modules",
                y.target.value
              ))
            }, null, 40, Oy)
          ]),
          (t(!0), n(z, null, V(e.limits, (y) => (t(), n("div", {
            key: y.key,
            class: "space-y-1.5"
          }, [
            y.kind === "toggle" ? (t(), n("label", Ly, [
              D(x(We), {
                checked: !!d(y.key, !1),
                "onUpdate:checked": (A) => u(
                  y.key,
                  A,
                  i.perks?.[y.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              N(" " + c(y.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              D(Pe, {
                for: `plan-limit-${y.key}`
              }, {
                default: L(() => [
                  N(c(y.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              y.hint ? (t(), n("p", Vy, c(y.hint), 1)) : w("", !0),
              D($e, {
                id: `plan-limit-${y.key}`,
                "model-value": Number(d(y.key, 0)),
                type: "number",
                step: y.step ?? 1,
                required: "",
                "onUpdate:modelValue": (A) => u(
                  y.key,
                  Number(A),
                  i.perks?.[y.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              v[29] || (v[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            D(Pe, {
              for: `plan-overview-${y.key}`
            }, {
              default: L(() => [...v[30] || (v[30] = [
                N("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${y.key}`,
              value: i.perks?.[y.key]?.overview ?? "",
              class: P(_),
              onInput: (A) => f(
                y.key,
                A.target.value
              )
            }, null, 40, jy)
          ]))), 128)),
          o("div", Ty, [
            v[32] || (v[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, V(i.extraPerks ?? [], (y, A) => (t(), n("div", {
              key: A,
              class: "flex items-center gap-2"
            }, [
              D($e, {
                modelValue: y.key,
                "onUpdate:modelValue": (E) => y.key = E,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D($e, {
                modelValue: y.value,
                "onUpdate:modelValue": (E) => y.value = E,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D(ue, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (E) => $(A)
              }, {
                default: L(() => [
                  (t(), n("svg", Dy, [
                    o("path", {
                      d: x(ce)("x")
                    }, null, 8, Ey)
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
              default: L(() => [...v[31] || (v[31] = [
                N(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Iy = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Fy = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Ny = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Ry = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Uy = ["d"], Hy = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Ky = ["aria-pressed"], qy = ["aria-pressed"], Gy = {
  key: 0,
  class: "flex flex-col gap-2"
}, Wy = ["aria-label"], Zy = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Jy = ["aria-pressed", "onClick"], Yy = ["aria-label"], Xy = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Qy = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, ex = ["data-slot"], tx = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, ax = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, nx = { class: "flex items-center gap-2" }, lx = ["disabled"], ox = ["disabled"], aa = /* @__PURE__ */ O({
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
    function p() {
      return { query: s.value, selected: { ...d }, ranges: g() };
    }
    function h() {
      r("filter", p());
    }
    function C(I, ae) {
      d[I] = d[I] === ae ? null : ae, h();
    }
    function k(I) {
      return u[I] ?? { min: "", max: "" };
    }
    function $(I, ae, H) {
      const K = u[I] ?? { min: "", max: "" };
      u[I] = { ...K, [ae]: H }, h();
    }
    function S(I) {
      I.key === "Enter" && (I.preventDefault(), r("scan", s.value.trim()));
    }
    const M = b(() => a.facets.filter((I) => (I.kind ?? "chips") === "chips")), _ = b(() => a.facets.filter((I) => I.kind === "range")), m = b(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), v = R(1);
    me(
      () => a.items.map((I) => I.key).join(","),
      () => {
        v.value = 1;
      }
    );
    const y = b(() => {
      const I = a.pageSize;
      return !I || I < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / I));
    }), A = b(() => {
      const I = a.pageSize;
      if (!I || I < 1)
        return a.items;
      const ae = (v.value - 1) * I;
      return a.items.slice(ae, ae + I);
    });
    function E(I) {
      v.value = Math.min(y.value, Math.max(1, I));
    }
    return (I, ae) => (t(), n("div", {
      class: P(["flex flex-col gap-4", x(Ka)])
    }, [
      m.value ? (t(), n("div", Iy, [
        o("div", Fy, [
          e.searchable ? (t(), n("div", Ny, [
            (t(), n("svg", Ry, [
              o("path", {
                d: x(ce)("search")
              }, null, 8, Uy)
            ])),
            D($e, {
              modelValue: s.value,
              "onUpdate:modelValue": ae[0] || (ae[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: S
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : w("", !0),
          U(I.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", Hy, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ae[1] || (ae[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, Ky),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ae[2] || (ae[2] = (H) => i.value = "list")
            }, " List ", 10, qy)
          ])) : w("", !0)
        ]),
        M.value.length || _.value.length ? (t(), n("div", Gy, [
          (t(!0), n(z, null, V(M.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", Zy, c(H.label), 1)) : w("", !0),
            (t(!0), n(z, null, V(H.options ?? [], (K) => (t(), n("button", {
              key: K.value,
              type: "button",
              class: P([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === K.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === K.value ? "true" : "false",
              onClick: (q) => C(H.key, K.value)
            }, c(K.label), 11, Jy))), 128))
          ], 8, Wy))), 128)),
          (t(!0), n(z, null, V(_.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Xy, c(H.label ?? H.key), 1),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": k(H.key).min,
              "onUpdate:modelValue": (K) => $(H.key, "min", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ae[7] || (ae[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": k(H.key).max,
              "onUpdate:modelValue": (K) => $(H.key, "max", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Yy))), 128))
        ])) : w("", !0)
      ])) : w("", !0),
      e.items.length === 0 ? (t(), n("p", Qy, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: P(
          i.value === "list" ? "flex flex-col gap-3" : x(gf)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, V(A.value, (H) => (t(), T(D1, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ae[3] || (ae[3] = (K) => r("select", K)),
          onCart: ae[4] || (ae[4] = (K) => r("cart", K))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, ex)),
      e.pageSize && y.value > 1 ? (t(), n("div", tx, [
        o("p", ax, " Page " + c(v.value) + " of " + c(y.value), 1),
        o("div", nx, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: v.value <= 1,
            onClick: ae[5] || (ae[5] = (H) => E(v.value - 1))
          }, " Previous ", 8, lx),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: v.value >= y.value,
            onClick: ae[6] || (ae[6] = (H) => E(v.value + 1))
          }, " Next ", 8, ox)
        ])
      ])) : w("", !0)
    ], 2));
  }
});
function Ee() {
  return { query: "", selected: {}, ranges: {} };
}
function sx(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function rx(e, l) {
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
    if (!rx(sx(e, r), s))
      return !1;
  return !0;
}
function ix(e, l) {
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
const dx = { class: "flex flex-col gap-6" }, ux = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, cx = { class: "text-sm font-semibold" }, fx = { class: "flex flex-wrap items-center gap-1.5" }, mx = ["aria-pressed", "onClick"], px = { class: "text-sm font-semibold" }, vx = { class: "flex flex-wrap items-center gap-1.5" }, gx = { key: 0 }, Xa = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = rt({}), d = rt({}), u = b(
      () => a.facets.filter((y) => (y.kind ?? "chips") === "chips")
    ), f = b(() => a.facets.filter((y) => y.kind === "range"));
    function g(y) {
      return y == null ? "" : String(y);
    }
    function p() {
      s.value = a.applied.query ?? "";
      for (const y of Object.keys(i))
        delete i[y];
      for (const [y, A] of Object.entries(a.applied.selected ?? {}))
        i[y] = A;
      for (const y of Object.keys(d))
        delete d[y];
      for (const [y, A] of Object.entries(a.applied.ranges ?? {}))
        d[y] = { min: g(A.min), max: g(A.max) };
    }
    me(
      () => a.open,
      (y) => {
        y && p();
      }
    );
    function h(y) {
      const A = y.trim();
      if (A === "")
        return null;
      const E = Number(A);
      return Number.isFinite(E) ? E : null;
    }
    function C() {
      const y = {};
      for (const [A, E] of Object.entries(d))
        y[A] = { min: h(E.min), max: h(E.max) };
      return y;
    }
    function k() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const $ = b(() => {
      let y = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const A of Object.values(i))
        A && (y += 1);
      for (const A of Object.values(C()))
        (A.min !== null || A.max !== null) && (y += 1);
      return y;
    });
    function S(y, A) {
      i[y] = i[y] === A ? null : A;
    }
    function M(y) {
      return d[y] ?? { min: "", max: "" };
    }
    function _(y, A, E) {
      const I = d[y] ?? { min: "", max: "" };
      d[y] = { ...I, [A]: E };
    }
    function m() {
      r("apply", k());
    }
    function v() {
      s.value = "";
      for (const y of Object.keys(i))
        i[y] = null;
      for (const y of Object.keys(d))
        d[y] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Ee(), query: a.applied.query } : Ee()
      );
    }
    return (y, A) => (t(), T(Ct, {
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
          onClick: v
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
            $.value ? (t(), n("span", gx, " (" + c($.value) + ")", 1)) : w("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        o("div", dx, [
          e.hideSearch ? w("", !0) : (t(), n("label", ux, [
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
            o("h3", cx, c(E.label ?? E.key), 1),
            o("div", fx, [
              (t(!0), n(z, null, V(E.options ?? [], (I) => (t(), n("button", {
                key: I.value,
                type: "button",
                class: P([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[E.key] === I.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[E.key] === I.value ? "true" : "false",
                onClick: (ae) => S(E.key, I.value)
              }, c(I.label), 11, mx))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, V(f.value, (E) => (t(), n("section", {
            key: E.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", px, c(E.label ?? E.key), 1),
            o("div", vx, [
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${E.label ?? E.key} from`,
                "model-value": M(E.key).min,
                "onUpdate:modelValue": (I) => _(E.key, "min", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              A[4] || (A[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${E.label ?? E.key} to`,
                "model-value": M(E.key).max,
                "onUpdate:modelValue": (I) => _(E.key, "max", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), hx = ["aria-disabled"], bx = ["disabled"], yx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, xx = ["d"], kx = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, $x = ["disabled"], wx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Cx = ["d"], Sx = /* @__PURE__ */ O({
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
    const a = ut(e, "modelValue"), r = l, s = b(() => a.value <= e.min), i = b(() => e.max !== null && a.value >= e.max);
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
        (t(), n("svg", yx, [
          o("path", {
            d: x(ce)("minus")
          }, null, 8, xx)
        ]))
      ], 8, bx),
      o("span", kx, c(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (g) => d(1))
      }, [
        (t(), n("svg", wx, [
          o("path", {
            d: x(ce)("plus")
          }, null, 8, Cx)
        ]))
      ], 8, $x)
    ], 8, hx));
  }
}), Mx = { class: "divide-border flex flex-col divide-y" }, Bx = { class: "min-w-0" }, _x = { class: "truncate text-sm font-medium" }, Ax = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Px = { class: "flex shrink-0 items-center gap-2 text-sm" }, zx = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Ox = {
  key: 2,
  class: "font-medium tabular-nums"
}, Lx = ["aria-label", "onClick"], Vx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, jx = ["d"], Tx = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Mx, [
      (t(!0), n(z, null, V(e.items, (d) => (t(), n("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Bx, [
          o("p", _x, c(d.label), 1),
          d.detail ? (t(), n("p", Ax, c(d.detail), 1)) : w("", !0)
        ]),
        o("div", Px, [
          e.editable ? (t(), T(Sx, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", zx, " ×" + c(d.qty), 1)) : w("", !0),
          d.amount ? (t(), n("span", Ox, c(d.amount), 1)) : w("", !0),
          d.status ? (t(), T(we, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : w("", !0),
          e.editable ? (t(), n("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => a("remove", d.key)
          }, [
            (t(), n("svg", Vx, [
              o("path", {
                d: x(ce)("trash")
              }, null, 8, jx)
            ]))
          ], 8, Lx)) : w("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Dx = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Ex = { class: "border-b px-4 py-3" }, Ix = { class: "text-sm font-medium" }, Fx = { class: "flex-1 px-4 py-3" }, Nx = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Rx = { class: "text-foreground block font-medium" }, Ux = { class: "mt-1 block" }, Hx = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Kx = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, qx = { class: "tabular-nums" }, Gx = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Wx = { class: "text-muted-foreground" }, Zx = {
  key: 0,
  class: "tabular-nums"
}, Jx = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Yx = { class: "text-muted-foreground" }, Xx = { class: "tabular-nums" }, Qx = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, e0 = { class: "tabular-nums" }, t0 = {
  key: 4,
  class: "pt-1"
}, a0 = /* @__PURE__ */ O({
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
    return (r, s) => (t(), n("aside", Dx, [
      o("header", Ex, [
        o("h2", Ix, c(e.title), 1)
      ]),
      o("div", Fx, [
        e.items.length === 0 ? (t(), n("p", Nx, [
          o("span", Rx, c(e.emptyTitle), 1),
          o("span", Ux, c(e.emptyDescription), 1)
        ])) : (t(), T(Tx, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => a("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", Hx, [
        e.subtotal ? (t(), n("div", Kx, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", qx, c(e.subtotal), 1)
        ])) : w("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Gx, [
          o("span", Wx, c(e.discountLabel), 1),
          e.discount ? (t(), n("span", Zx, c(e.discount), 1)) : w("", !0),
          U(r.$slots, "discount")
        ])) : w("", !0),
        e.tax ? (t(), n("div", Jx, [
          o("span", Yx, c(e.taxLabel), 1),
          o("span", Xx, c(e.tax), 1)
        ])) : w("", !0),
        e.total ? (t(), n("div", Qx, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", e0, c(e.total), 1)
        ])) : w("", !0),
        r.$slots.pay ? (t(), n("div", t0, [
          U(r.$slots, "pay")
        ])) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), n0 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, l0 = { class: "flex flex-col gap-4" }, o0 = { class: "flex flex-wrap items-start justify-between gap-3" }, s0 = { class: "flex items-center gap-2" }, r0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, i8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Ee()), i = R(!1), d = ut(e, "cart"), u = R(!1), f = b(
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
    function h(H) {
      return H ? a.parsePrice(H) : 0;
    }
    function C(H, K, q) {
      return {
        ...H,
        qty: K,
        amount: a.formatMoney(q * K)
      };
    }
    function k(H) {
      const K = ix(a.items, H);
      K && $(K.key);
    }
    function $(H) {
      const K = a.items.find((ne) => ne.key === H);
      if (!K || K.status === "out-of-stock")
        return;
      u.value = !1;
      const q = h(K);
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
    function S(H, K) {
      const q = a.items.find((ne) => ne.key === H), oe = h(q);
      d.value = d.value.map(
        (ne) => ne.key === H ? C(ne, K, oe) : ne
      );
    }
    function M(H) {
      d.value = d.value.filter((K) => K.key !== H);
    }
    const _ = b(
      () => d.value.reduce((H, K) => {
        const q = a.items.find((oe) => oe.key === K.key);
        return H + h(q) * Number(K.qty ?? 1);
      }, 0)
    ), m = b(
      () => a.discountRate > 0 ? Math.round(_.value * a.discountRate) : 0
    ), v = b(
      () => Math.round((_.value - m.value) * a.taxRate)
    ), y = b(
      () => d.value.length ? a.formatMoney(_.value) : null
    ), A = b(
      () => d.value.length && m.value > 0 ? `−${a.formatMoney(m.value)}` : null
    ), E = b(
      () => d.value.length && a.taxRate > 0 ? a.formatMoney(v.value) : null
    ), I = b(
      () => d.value.length ? a.formatMoney(
        _.value - m.value + v.value
      ) : null
    );
    function ae() {
      u.value = !0, r("pay", d.value);
    }
    return (H, K) => (t(), n(z, null, [
      o("div", n0, [
        o("section", l0, [
          o("div", o0, [
            D(De, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", s0, [
              x($t)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: K[0] || (K[0] = (q) => s.value = {
                  ...x(Ee)(),
                  query: s.value.query
                })
              }, " Clear ")) : w("", !0),
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
                x($t)(s.value) ? (t(), n("span", r0, " on ")) : w("", !0)
              ])) : w("", !0)
            ])
          ]),
          D(aa, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: g,
            onSelect: K[2] || (K[2] = (q) => r("select", q)),
            onCart: $,
            onScan: k
          }, null, 8, ["search-placeholder", "items"])
        ]),
        D(a0, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: y.value,
          "discount-label": e.discountLabel,
          discount: A.value,
          "tax-label": e.taxLabel,
          tax: E.value,
          total: I.value,
          onQty: S,
          onRemove: M
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
}), i0 = {
  key: 0,
  class: "flex flex-col gap-5"
}, d0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, u0 = ["src", "alt"], c0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, f0 = ["src"], m0 = { class: "flex items-start justify-between gap-3" }, p0 = { class: "text-lg font-semibold tabular-nums" }, v0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, g0 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, h0 = { class: "grid grid-cols-2 gap-3" }, b0 = { class: "flex flex-col gap-2" }, y0 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, d8 = /* @__PURE__ */ O({
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
      for (const C of p)
        h = h * 31 + C.charCodeAt(0) >>> 0;
      return h;
    }
    function i(p, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((k, $) => ({
        label: k,
        value: Math.max(0, Math.round(p + Math.sin($ + h) * p * 0.18))
      }));
    }
    const d = b(() => a.item?.kind === "unit"), u = b(() => {
      const p = a.item;
      if (!p)
        return [];
      const h = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(p.key) % 7);
    }), f = b(() => {
      const p = a.item;
      if (!p)
        return [];
      const h = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(p.key) % 5 + 1);
    }), g = b(
      () => !!a.item && !d.value && a.item?.status !== "out-of-stock"
    );
    return (p, h) => (t(), T(Ct, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      size: "md",
      onClose: h[1] || (h[1] = (C) => r("close"))
    }, st({
      default: L(() => [
        e.item ? (t(), n("div", i0, [
          o("div", d0, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, u0)) : w("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", c0, [
            (t(!0), n(z, null, V(e.item.images, (C, k) => (t(), n("img", {
              key: k,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, f0))), 128))
          ])) : w("", !0),
          o("div", m0, [
            o("div", null, [
              o("p", p0, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", v0, c(e.item.stock) + " in stock ", 1)) : w("", !0)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", g0, c(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("div", h0, [
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
          o("div", b0, [
            o("p", y0, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(Mt, {
              data: d.value ? f.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : w("", !0)
      ]),
      _: 2
    }, [
      g.value && e.item ? {
        name: "footer",
        fn: L(() => [
          o("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: h[0] || (h[0] = (C) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), x0 = { class: "flex flex-col gap-10" }, k0 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, $0 = { class: "flex flex-col gap-3" }, w0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, C0 = ["src", "alt"], S0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, M0 = ["aria-label", "aria-pressed", "onClick"], B0 = ["src"], _0 = { class: "flex flex-col gap-5" }, A0 = { class: "flex flex-wrap items-start justify-between gap-3" }, P0 = { class: "min-w-0" }, z0 = { class: "text-2xl font-semibold tracking-tight" }, O0 = { class: "text-muted-foreground mt-1 text-sm" }, L0 = { class: "text-2xl font-semibold tabular-nums" }, V0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, j0 = { class: "grid grid-cols-2 gap-3 text-sm" }, T0 = {
  key: 0,
  class: "rounded-lg border p-3"
}, D0 = { class: "mt-1 font-medium" }, E0 = { class: "rounded-lg border p-3" }, I0 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, F0 = { class: "mt-1 font-medium" }, N0 = { class: "flex flex-col gap-4" }, R0 = { class: "grid gap-4 sm:grid-cols-2" }, U0 = { class: "bg-card rounded-lg border p-4" }, H0 = { class: "mb-3 text-sm font-medium" }, K0 = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(k) {
      let $ = 0;
      for (const S of k)
        $ = $ * 31 + S.charCodeAt(0) >>> 0;
      return $;
    }
    function i(k, $) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((M, _) => ({
        label: M,
        value: Math.max(0, Math.round(k + Math.sin(_ + $) * k * 0.18))
      }));
    }
    const d = b(() => a.item.kind === "unit"), u = b(() => {
      const k = [a.item.image, ...a.item.images ?? []].filter(
        ($) => typeof $ == "string" && $ !== ""
      );
      return [...new Set(k)];
    }), f = R(0), g = b(() => {
      const k = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(k) || 12, s(a.item.key) % 7);
    }), p = b(() => {
      const k = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(k) || 20, s(a.item.key) % 5 + 1);
    }), h = b(() => d.value ? p.value : g.value), C = b(() => !d.value && a.item.status !== "out-of-stock");
    return (k, $) => (t(), n("div", x0, [
      o("div", k0, [
        o("div", $0, [
          o("div", w0, [
            u.value[f.value] ? (t(), n("img", {
              key: 0,
              src: u.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, C0)) : w("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", S0, [
            (t(!0), n(z, null, V(u.value, (S, M) => (t(), n("button", {
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
              }, null, 8, B0)
            ], 10, M0))), 128))
          ])) : w("", !0)
        ]),
        o("div", _0, [
          o("div", A0, [
            o("div", P0, [
              o("h1", z0, c(e.item.label), 1),
              o("p", O0, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          o("p", L0, c(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", V0, c(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("dl", j0, [
            e.item.sku ? (t(), n("div", T0, [
              $[1] || ($[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", D0, c(e.item.sku), 1)
            ])) : w("", !0),
            o("div", E0, [
              o("dt", I0, c(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", F0, c(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          C.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: $[0] || ($[0] = (S) => r("cart", e.item.key))
          }, " Add to cart ")) : w("", !0)
        ])
      ]),
      o("section", N0, [
        $[2] || ($[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", R0, [
          D(kt, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          D(kt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: g.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", U0, [
          o("p", H0, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(Sg, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), q0 = ["href"], u8 = /* @__PURE__ */ O({
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
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : x(qe)])
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
      ], 8, q0),
      D(K0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), G0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, W0 = ["aria-selected", "onClick"], Z0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, J0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, Y0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, X0 = ["aria-pressed"], Q0 = ["aria-pressed"], c8 = /* @__PURE__ */ O({
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
      () => a.tabs.map((S) => S.key).join(","),
      (S) => {
        S.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function f(S) {
      return d.value[S] ?? Ee();
    }
    const g = b(
      () => a.tabs.find((S) => S.key === s.value) ?? a.tabs[0] ?? null
    ), p = b(
      () => g.value ? f(g.value.key) : Ee()
    ), h = b(() => {
      const S = g.value;
      return S ? S.items.filter((M) => na(M, f(S.key))) : [];
    });
    function C(S) {
      const M = g.value?.key;
      M && (d.value = {
        ...d.value,
        [M]: { ...f(M), query: S }
      });
    }
    function k() {
      const S = g.value?.key;
      S && (d.value = { ...d.value, [S]: Ee() });
    }
    function $(S) {
      const M = g.value?.key;
      M && (d.value = { ...d.value, [M]: S }, u.value = !1);
    }
    return (S, M) => (t(), n(z, null, [
      o("div", {
        class: P(["flex w-full flex-col gap-8", e.embedded ? "" : x(qe)])
      }, [
        D(De, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", G0, [
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
          }, c(_.label), 11, W0))), 128))
        ])) : w("", !0),
        o("div", Z0, [
          D($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: g.value?.searchPlaceholder ?? "Search…",
            "aria-label": g.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": M[0] || (M[0] = (_) => C(String(_)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x($t)(p.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: k
          }, " Clear ")) : w("", !0),
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
            M[9] || (M[9] = N(" Filters ", -1)),
            x($t)(p.value) ? (t(), n("span", J0, " on ")) : w("", !0)
          ])) : w("", !0),
          o("div", Y0, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: M[2] || (M[2] = (_) => i.value = "grid")
            }, " Tiles ", 10, X0),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: M[3] || (M[3] = (_) => i.value = "list")
            }, " List ", 10, Q0)
          ])
        ]),
        D(aa, {
          layout: i.value,
          "onUpdate:layout": M[4] || (M[4] = (_) => i.value = _),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: M[5] || (M[5] = (_) => r("select", _)),
          onCart: M[6] || (M[6] = (_) => r("cart", _))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(Xa, {
        open: u.value,
        title: g.value?.filterTitle ?? "Filters",
        "search-placeholder": g.value?.searchPlaceholder ?? "Search…",
        facets: g.value?.facets ?? [],
        applied: p.value,
        onClose: M[7] || (M[7] = (_) => u.value = !1),
        onApply: $,
        onReset: k
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), ek = { class: "flex flex-col gap-4" }, tk = { class: "flex flex-col gap-4" }, f8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Ee()), i = b(
      () => a.cards.filter((d) => na(d, s.value))
    );
    return (d, u) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : x(qe)])
    }, [
      D(De, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", ek, [
        D(De, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(aa, {
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
      o("section", tk, [
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
}), ak = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, nk = { class: "text-sm font-medium" }, lk = ["width", "height", "aria-label"], ok = { class: "flex items-center gap-2" }, sk = /* @__PURE__ */ O({
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
    function C() {
      const S = s.value, M = u();
      !S || !M || (M.clearRect(0, 0, S.width, S.height), r("clear"));
    }
    function k() {
      const S = s.value;
      S && r("save", S.toDataURL("image/png"));
    }
    function $() {
      const S = s.value, M = u();
      !S || !M || (M.fillStyle = "#ffffff", M.fillRect(0, 0, S.width, S.height));
    }
    return ve($), ke(() => {
      i.value = !1;
    }), (S, M) => (t(), n("div", ak, [
      o("p", nk, c(e.label), 1),
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
      }, null, 42, lk),
      o("div", ok, [
        D(ue, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: L(() => [...M[0] || (M[0] = [
            N(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          size: "sm",
          disabled: e.disabled,
          onClick: k
        }, {
          default: L(() => [...M[1] || (M[1] = [
            N("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), rk = { class: "grid gap-8 lg:grid-cols-2" }, ik = { class: "flex flex-col gap-3" }, dk = { class: "text-muted-foreground text-xs font-normal" }, uk = {
  key: 0,
  class: "flex flex-col gap-3"
}, ck = { class: "flex flex-wrap gap-3" }, fk = ["onClick"], mk = ["src", "alt"], pk = {
  key: 1,
  class: "flex flex-col gap-3"
}, vk = { class: "flex flex-wrap gap-3" }, gk = ["onClick"], hk = ["src", "alt"], bk = {
  key: 2,
  class: "flex flex-col gap-4"
}, yk = { class: "flex flex-wrap items-center gap-2" }, xk = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, kk = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, $k = { class: "flex flex-col gap-2" }, wk = ["src"], Ck = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Sk = ["src"], m8 = /* @__PURE__ */ O({
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
      await wf(S), M(40);
      const _ = await new Promise((m, v) => {
        const y = new FileReader();
        y.onload = () => m(String(y.result)), y.onerror = () => v(new Error("Could not read the file")), y.readAsDataURL(S);
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
    const C = b(
      () => a.value.find((S) => S.id === s.value)?.dataUrl ?? null
    ), k = b(
      () => r.value.find((S) => S.id === i.value)?.dataUrl ?? null
    ), $ = b(() => {
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
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : x(qe)])
    }, [
      D(De, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", rk, [
        D(sk, {
          label: "Draw a signature",
          onSave: g
        }),
        o("div", ik, [
          M[2] || (M[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", dk, c(x(qa)), 1),
          D(La, {
            modelValue: d.value,
            "onUpdate:modelValue": M[0] || (M[0] = (_) => d.value = _),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          D(ue, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: h
          }, {
            default: L(() => [...M[1] || (M[1] = [
              N(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", uk, [
        D(De, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", ck, [
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
            }, null, 8, mk)
          ], 10, fk))), 128))
        ])
      ])) : w("", !0),
      r.value.length ? (t(), n("section", pk, [
        D(De, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", vk, [
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
            }, null, 8, hk)
          ], 10, gk))), 128))
        ])
      ])) : w("", !0),
      e.documents.length ? (t(), n("section", bk, [
        o("div", yk, [
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
        o("div", xk, [
          D(Ev, {
            document: $.value
          }, null, 8, ["document"]),
          o("div", kk, [
            o("div", $k, [
              M[3] || (M[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), n("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, wk)) : (t(), n("p", Ck, "Draw and save a signature"))
            ]),
            k.value ? (t(), n("img", {
              key: 0,
              src: k.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Sk)) : w("", !0)
          ])
        ])
      ])) : w("", !0)
    ], 2));
  }
}), p8 = "panel.dashboard.hiddenWidgets", Mk = /* @__PURE__ */ Symbol("dashboardHide"), Bk = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, v8 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = ht(Mk, null), r = R(
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
    const i = b(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? w("", !0) : (t(), n("div", Bk, [
      D(Bb, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (f) => r.value = f),
        onHide: u[1] || (u[1] = (f) => x(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), _k = { class: "flex flex-col gap-3" }, Ak = ["data-slot"], Pk = ["aria-pressed", "aria-label", "title"], zk = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ok = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Lk = { class: "flex h-8 items-center" }, Vk = ["aria-label", "title", "onClick"], jk = ["aria-label", "title", "onClick"], Tk = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Dk = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, g8 = /* @__PURE__ */ O({
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
    const f = b(() => a.segments.some(u)), g = b(() => a.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = b(() => p[a.columns] ?? p[4]), C = b(() => {
      const m = a.columns ?? 4, v = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(0, v);
    }), k = b(() => {
      const m = a.columns ?? 4, v = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(v);
    }), $ = b(() => {
      const m = [];
      return C.value.length > 0 && m.push({ key: "packed", joined: !0, segments: C.value }), k.value.length > 0 && m.push({ key: "leftover", joined: !1, segments: k.value }), m;
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
        for (const y of a.segments)
          y.key !== m.key && d(y) && v.add(y.key);
      }
      i.value = v, r("toggle", f.value);
    }
    function _(m) {
      return typeof m == "number" ? new Intl.NumberFormat().format(m) : m;
    }
    return (m, v) => (t(), n("div", _k, [
      (t(!0), n(z, null, V($.value, (y) => (t(), n("div", {
        key: y.key,
        class: P(["relative shrink-0", y.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": y.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && g.value && y.key === $.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: S
        }, [
          (t(), n("svg", zk, [
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
        ], 8, Pk)) : w("", !0),
        o("div", {
          class: P(["grid", [y.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), n(z, null, V(y.segments, (A) => (t(), n("div", {
            key: A.key,
            class: P(["bg-card flex flex-col gap-2 p-4", y.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", Ok, c(A.label), 1),
            o("div", Lk, [
              e.loading ? (t(), T(ze, {
                key: 0,
                variant: "number"
              })) : u(A) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${A.label} hidden. Show it.`,
                title: `Show ${A.label}`,
                onClick: (E) => M(A)
              }, [
                (t(), n(z, null, V(5, (E) => o("span", {
                  key: E,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, Vk)) : d(A) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${A.label}, ${_(A.value)}. Hide it.`,
                title: `Hide ${A.label}`,
                onClick: (E) => M(A)
              }, c(_(A.value)), 9, jk)) : (t(), n("span", Tk, c(_(A.value)), 1)),
              A.trend && !e.loading && !u(A) ? (t(), T(Ya, {
                key: 4,
                direction: A.trend.direction,
                percentage: A.trend.percentage,
                inverted: A.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : w("", !0)
            ]),
            A.sparkline?.length && !e.loading && !u(A) ? (t(), T(Mt, {
              key: 0,
              data: A.sparkline,
              height: 24
            }, null, 8, ["data"])) : w("", !0),
            A.caption || A.comparison && A.trend ? (t(), n("p", Dk, c(A.caption ?? A.comparison), 1)) : w("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, Ak))), 128))
    ]));
  }
}), Ek = ["aria-label"], Ik = ["aria-valuenow", "aria-label"], Fk = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Nk = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, Rk = ["title"], Uk = { class: "font-medium" }, Hk = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, Kk = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, qk = { class: "flex items-center justify-between gap-2" }, Gk = { class: "text-sm font-semibold" }, Wk = { class: "flex items-center gap-3" }, Zk = ["href"], Jk = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Yk = { class: "flex min-w-0 flex-col gap-0.5" }, Xk = { class: "text-sm font-medium" }, Qk = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, e2 = {
  key: 1,
  class: "flex flex-col gap-2"
}, t2 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, a2 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, n2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, h8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = b(() => a.items.find(($) => !$.done) ?? null), i = b(() => a.items.filter(($) => $.key !== s.value?.key)), d = b(() => a.items.length), u = b(() => a.items.filter(($) => $.done).length), f = b(() => {
      if (!s.value)
        return d.value;
      const $ = a.items.findIndex((S) => S.key === s.value?.key);
      return $ >= 0 ? $ + 1 : 1;
    }), g = b(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = b(() => {
      const $ = a.linkComponent;
      return typeof $ == "string" ? $ : ka($);
    }), h = ot({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = ot({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), k = ot({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return ($, S) => e.items.length && e.variant === "onboarding" ? (t(), n("section", {
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
      ], 8, Ik),
      o("div", Fk, [
        o("span", Nk, " Step " + c(f.value) + " of " + c(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", Uk, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", Hk, c(": " + s.value.detail), 1)) : w("", !0)
        ], 8, Rk),
        s.value?.href ? (t(), T(_e(p.value), {
          key: 0,
          href: s.value.href,
          class: P(x(C))
        }, {
          default: L(() => [
            N(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : w("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: S[0] || (S[0] = (M) => r("skip"))
        }, c(e.skipLabel), 1)) : w("", !0)
      ])
    ], 8, Ek)) : e.items.length ? (t(), n("section", Kk, [
      o("div", qk, [
        o("h2", Gk, c(e.heading), 1),
        o("div", Wk, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: S[1] || (S[1] = (M) => r("skip"))
          }, c(e.skipLabel), 1)) : w("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, Zk)) : w("", !0)
        ])
      ]),
      s.value ? (t(), n("div", Jk, [
        S[2] || (S[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Yk, [
          o("p", Xk, c(s.value.title), 1),
          s.value.detail ? (t(), n("p", Qk, c(s.value.detail), 1)) : w("", !0),
          s.value.href ? (t(), T(_e(p.value), {
            key: 1,
            href: s.value.href,
            class: P(x(h))
          }, {
            default: L(() => [
              N(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : w("", !0)
        ])
      ])) : w("", !0),
      i.value.length ? (t(), n("ul", e2, [
        (t(!0), n(z, null, V(i.value, (M) => (t(), n("li", {
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
            M.done ? (t(), n("svg", t2, [...S[3] || (S[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : w("", !0)
          ], 2),
          o("div", a2, [
            o("p", {
              class: P(["text-sm", M.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(M.title), 3),
            !M.done && M.detail ? (t(), n("p", n2, c(M.detail), 1)) : w("", !0)
          ]),
          !M.done && M.href ? (t(), T(_e(p.value), {
            key: 0,
            href: M.href,
            class: P(x(k))
          }, {
            default: L(() => [
              N(c(M.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : w("", !0)
        ]))), 128))
      ])) : w("", !0)
    ])) : w("", !0);
  }
}), l2 = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, o2 = { class: "hidden items-center gap-2 md:flex" }, s2 = { class: "md:hidden" }, r2 = { class: "border-b px-4 py-3" }, i2 = { class: "text-muted-foreground text-xs font-normal" }, d2 = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, u2 = { class: "font-medium tabular-nums" }, c2 = { class: "ml-auto flex items-center gap-3" }, b8 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = R(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), n("div", l2, [
      o("div", o2, [
        U(i.$slots, "actions")
      ]),
      o("div", s2, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        D(Jt, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: L(() => [
            D(Yt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: L(() => [
                o("div", r2, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", i2, c(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", d2, [
                  U(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", u2, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          N(" All " + c(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          N(c(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", c2, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => a("select-all-matching"))
        }, " Select all " + c(s(e.total)), 1)) : w("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), f2 = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, m2 = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, p2 = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, v2 = ["value"], g2 = ["value"], h2 = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, b2 = ["disabled"], y2 = ["disabled"], x2 = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, k2 = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, $2 = ["disabled"], y8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = (f) => new Intl.NumberFormat().format(f), i = b(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), d = b(() => (a.page - 1) * a.perPage + a.rowsOnPage), u = b(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (f, g) => (t(), n("div", f2, [
      o("p", m2, [
        N(" Showing " + c(s(i.value)) + "-" + c(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          N("of " + c(s(e.total)), 1)
        ], 64)) : w("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", p2, [
        g[4] || (g[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: g[0] || (g[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(z, null, V(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, c(p), 9, g2))), 128))
        ], 40, v2)
      ])) : w("", !0),
      o("nav", h2, [
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
        ])], 8, b2),
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
        ])], 8, y2),
        o("span", x2, c(e.page), 1),
        u.value !== null ? (t(), n("span", k2, " of " + c(s(u.value)), 1)) : w("", !0),
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
        ])], 8, $2)
      ])
    ]));
  }
}), w2 = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, C2 = ["aria-current"], S2 = ["title"], M2 = ["aria-current", "onClick"], B2 = ["title"], _2 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", w2, [
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
        }, c(r(e.counts.all ?? 0)), 11, S2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, C2),
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
        }, c(r(e.counts[d] ?? 0)), 11, B2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, M2))), 128))
    ]));
  }
}), x8 = /* @__PURE__ */ wt(_2, [["__scopeId", "data-v-3967c945"]]), A2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, P2 = { class: "grid gap-2" }, z2 = {
  key: 0,
  class: "text-destructive text-sm"
}, O2 = { class: "flex gap-2" }, k8 = /* @__PURE__ */ O({
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
      ].find(({ pattern: S }) => S.test(C))?.name, $ = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: S }) => S.test(C))?.name;
      return [k, $].filter(Boolean).join(" on ") || "";
    })()), i = R(!1), d = cn(null), u = b(() => d.value?.isLoading.value ?? !1), f = b(() => d.value?.error.value ?? null), g = b(() => d.value?.isSupported.value ?? !1);
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
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return (C, k) => g.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", P2, [
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
      f.value ? (t(), n("p", z2, c(f.value), 1)) : w("", !0),
      o("div", O2, [
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
    })) : (t(), n("p", A2, " Passkeys are not supported in this browser. "));
  }
}), L2 = { class: "pk-form-stack" }, V2 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, $8 = /* @__PURE__ */ O({
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
    Lt("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), Lt("panelCreateOption", {
      run(f, g) {
        return a.createOption ? a.createOption(f, g) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = b(() => a.nodes.length > 0), i = b(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = b(() => a.errors._conflict);
    function u(f) {
      if (a.upload)
        return (g, p) => a.upload(f, g, p);
    }
    return (f, g) => (t(), n("div", L2, [
      d.value ? (t(), n("p", V2, c(d.value), 1)) : w("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, V(e.nodes, (p, h) => (t(), T(ja, {
        key: h,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: g[0] || (g[0] = (C, k) => r("change", C, k)),
        onAffixAction: g[1] || (g[1] = (C, k) => r("affix-action", C, k))
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
}), j2 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, T2 = ["disabled"], D2 = ["disabled"], E2 = ["disabled"], w8 = /* @__PURE__ */ O({
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
    const a = b(() => l.value ? "#pk-main" : "body"), r = b(() => !l.value), s = b(
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
              o("span", j2, c(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[0] || (d[0] = (u) => i.$emit("discard"))
              }, c(e.discardLabel), 9, T2)) : w("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[1] || (d[1] = (u) => i.$emit("cancel"))
              }, c(e.cancelLabel), 9, D2),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: d[2] || (d[2] = (u) => i.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, E2)
            ], 2)
          ], 2)) : w("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function C8(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = R(Ot(e.value)), s = b(() => Ot(e.value) !== r.value);
  function i() {
    r.value = Ot(e.value);
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
function Ot(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const I2 = {
  key: 0,
  class: "flex flex-col gap-1"
}, F2 = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, N2 = { class: "text-foreground text-sm font-medium" }, R2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, U2 = {
  key: 5,
  class: "max-w-full font-normal"
}, H2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, K2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, q2 = {
  key: 6,
  class: "font-normal"
}, G2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, W2 = { class: "text-muted-foreground truncate font-medium" }, Z2 = { class: "text-foreground col-span-2 break-words" }, J2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, Y2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, X2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, Q2 = ["href"], e$ = { class: "flex min-w-0 items-start gap-2.5" }, t$ = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, a$ = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, n$ = ["d"], l$ = { class: "min-w-0" }, o$ = { class: "flex flex-wrap items-center gap-2" }, s$ = { class: "text-sm font-semibold" }, r$ = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, i$ = ["onClick"], S8 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), d = b(() => a.depth === 0), u = b(() => {
      const $ = a.node.columns ?? (a.node.component === "section" ? 2 : 1);
      return $ >= 3 ? "sm:grid-cols-3" : $ === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), f = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, g = b(() => a.node.key ? a.record[a.node.key] : null), p = b(() => {
      const $ = g.value;
      return $ == null || $ === "";
    }), h = b(() => {
      if (p.value)
        return "None";
      const $ = Number(g.value);
      if (Number.isNaN($))
        return "None";
      const S = a.node.divideBy ?? 100, M = $ / S, _ = a.node.currency ?? "USD";
      try {
        return new Intl.NumberFormat(void 0, { style: "currency", currency: _ }).format(M);
      } catch {
        return `${_} ${M.toFixed(2)}`;
      }
    }), C = b(() => {
      if (p.value)
        return "None";
      const $ = g.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String($)).toLocaleDateString(void 0, f[a.node.type]);
      if (a.node.type === "money")
        return h.value;
      let S = String($);
      return a.node.transform === "upper" && (S = S.toUpperCase()), a.node.transform === "lower" && (S = S.toLowerCase()), [a.node.prefix, S, a.node.suffix].filter(Boolean).join(" ");
    }), k = b(() => {
      const $ = typeof g.value == "boolean" ? g.value ? "1" : "" : String(g.value), S = a.node.colors?.[$] ?? a.node.defaultColor ?? "neutral";
      return Xt[S] ?? "outline";
    });
    return ($, S) => {
      const M = Ut("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", I2, [
        o("dt", F2, c(e.node.label), 1),
        o("dd", N2, [
          e.node.type === "badge" && x(Au)(g.value) ? (t(), T(Ke, {
            key: 0,
            variant: k.value,
            class: "capitalize"
          }, {
            default: L(() => [
              N(c(g.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", R2, "None")) : e.node.type === "icon" ? (t(), T(nu, {
            key: 2,
            value: g.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(iu, {
            key: 3,
            src: g.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(mu, {
            key: 4,
            value: typeof g.value == "string" ? g.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", U2, [
            e.node.language ? (t(), n("p", H2, c(e.node.language), 1)) : w("", !0),
            o("pre", K2, [
              o("code", null, c(g.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", q2, [
            g.value && typeof g.value == "object" && !Array.isArray(g.value) && Object.keys(g.value).length ? (t(), n("dl", G2, [
              (t(!0), n(z, null, V(g.value, (_, m) => (t(), n("div", {
                key: m,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", W2, c(m), 1),
                o("dd", Z2, c(_), 1)
              ]))), 128))
            ])) : (t(), n("span", J2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", Y2, [
            (t(!0), n(z, null, V(Array.isArray(g.value) ? g.value : [], (_, m) => (t(), n("div", {
              key: m,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, V(e.node.entries ?? [], (v, y) => (t(), T(M, {
                key: y,
                node: v,
                record: _,
                depth: e.depth + 1,
                onAction: S[0] || (S[0] = (A) => r("action", A))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(g.value) || g.value.length === 0 ? (t(), n("span", X2, "None")) : w("", !0)
          ])) : e.node.type === "money" ? (t(), n("span", {
            key: 8,
            class: P(p.value ? "text-muted-foreground font-normal" : "")
          }, c(h.value), 3)) : e.node.url && !p.value ? (t(), n("a", {
            key: 9,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, c(C.value), 9, Q2)) : (t(), n("span", {
            key: 10,
            class: P([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, c(C.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 11,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: S[1] || (S[1] = (_) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : w("", !0)
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
          onClick: S[2] || (S[2] = (_) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", e$, [
            e.node.icon ? (t(), n("div", t$, [
              (t(), n("svg", a$, [
                o("path", {
                  d: x(ce)(e.node.icon)
                }, null, 8, n$)
              ]))
            ])) : w("", !0),
            o("div", l$, [
              o("div", o$, [
                o("h3", s$, c(e.node.label), 1),
                e.node.status ? (t(), T(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : w("", !0)
              ]),
              e.node.description ? (t(), n("p", r$, c(e.node.description), 1)) : w("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: P(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (_, m) => (t(), T(M, {
            key: m,
            node: _,
            record: e.record,
            depth: e.depth + 1,
            onAction: S[3] || (S[3] = (v) => r("action", v))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: P(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (_, m) => (t(), T(M, {
          key: m,
          node: _,
          record: e.record,
          depth: e.depth + 1,
          onAction: S[4] || (S[4] = (v) => r("action", v))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: P(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (_, m) => (t(), n("button", {
            key: m,
            type: "button",
            class: P([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (v) => i.value = m
          }, c(_.label), 11, i$))), 128))
        ], 2),
        (t(!0), n(z, null, V(e.node.children ?? [], (_, m) => pe((t(), n("div", {
          key: m,
          class: P(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(_.children ?? [], (v, y) => (t(), T(M, {
            key: y,
            node: v,
            record: e.record,
            depth: e.depth + 1,
            onAction: S[5] || (S[5] = (A) => r("action", A))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ue, i.value === m]
        ])), 128))
      ], 2)) : w("", !0);
    };
  }
}), d$ = { class: "text-muted-foreground text-sm font-normal" }, u$ = { class: "flex items-start gap-3" }, c$ = { class: "min-w-0 flex-1" }, f$ = { class: "flex flex-wrap items-center gap-2" }, m$ = { class: "truncate text-sm font-medium" }, p$ = { class: "text-muted-foreground mt-0.5 text-xs" }, v$ = { class: "text-muted-foreground text-xs font-normal" }, g$ = { class: "mt-auto flex items-center gap-2" }, h$ = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = b(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), n("div", {
      class: P(["flex flex-col gap-4", x(Ka)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", d$, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: P(x(vf))
      }, [
        (t(!0), n(z, null, V(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", u$, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, c(u.mark), 5),
            o("div", c$, [
              o("div", f$, [
                o("h3", m$, c(u.label), 1),
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
                })) : w("", !0),
                u.isDefault ? (t(), T(we, {
                  key: 2,
                  status: "default"
                }, {
                  default: L(() => [...d[2] || (d[2] = [
                    N(" Default ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                u.connected && u.mode ? (t(), T(we, {
                  key: 3,
                  status: u.mode
                }, {
                  default: L(() => [
                    N(c(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : w("", !0)
              ]),
              o("p", p$, c(u.caption), 1)
            ])
          ]),
          o("p", v$, c(u.methods.join(" · ")), 1),
          o("div", g$, [
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
}), b$ = { class: "flex flex-col gap-6" }, y$ = { class: "relative" }, x$ = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, k$ = ["d"], $$ = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, w$ = {
  key: 0,
  class: "flex flex-col gap-4"
}, C$ = { class: "flex flex-wrap items-center gap-2" }, S$ = { class: "text-muted-foreground text-sm font-normal" }, M$ = { class: "flex flex-col gap-1 text-sm" }, B$ = ["value"], _$ = {
  key: 0,
  class: "flex flex-col gap-2"
}, A$ = { class: "flex flex-wrap items-center gap-2" }, P$ = {
  key: 1,
  class: "flex items-center gap-2"
}, M8 = /* @__PURE__ */ O({
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
    const l = ut(e, "gateways"), a = R(null), r = R(""), s = b(
      () => l.value.find((k) => k.key === a.value) ?? null
    ), i = b(() => {
      const k = r.value.trim().toLowerCase();
      return k === "" ? l.value : l.value.filter(($) => [$.key, $.label, $.caption, ...$.methods].join(" ").toLowerCase().includes(k));
    });
    function d(k) {
      return k.connected && k.enabled !== !1;
    }
    function u(k, $) {
      l.value = l.value.map(
        (S) => S.key === k ? { ...S, ...$ } : S
      );
    }
    function f(k) {
      a.value = k;
    }
    function g(k) {
      const $ = l.value.find((M) => M.key === k);
      if (!$)
        return;
      const S = !$.connected;
      u(k, {
        connected: S,
        mode: S ? $.mode ?? "test" : null,
        enabled: S,
        isDefault: !1
      });
    }
    function p(k, $) {
      const S = l.value.find((M) => M.key === k);
      S?.connected && u(k, { enabled: $, isDefault: $ ? S.isDefault : !1 });
    }
    function h(k) {
      const $ = l.value.find((S) => S.key === k);
      !$ || !d($) || (l.value = l.value.map((S) => ({
        ...S,
        isDefault: S.key === k
      })));
    }
    function C(k) {
      const $ = a.value;
      !$ || !l.value.find((M) => M.key === $)?.connected || u($, { mode: k });
    }
    return (k, $) => (t(), n(z, null, [
      o("div", b$, [
        D(De, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", y$, [
          (t(), n("svg", x$, [
            o("path", {
              d: x(ce)("search")
            }, null, 8, k$)
          ])),
          D($e, {
            modelValue: r.value,
            "onUpdate:modelValue": $[0] || ($[0] = (S) => r.value = S),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(h$, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: g
        }, null, 8, ["gateways"])) : (t(), n("p", $$, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      D(Ct, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        size: "md",
        onClose: $[8] || ($[8] = (S) => a.value = null)
      }, {
        footer: L(() => [
          D(ue, {
            variant: "outline",
            size: "sm",
            onClick: $[6] || ($[6] = (S) => a.value = null)
          }, {
            default: L(() => [...$[21] || ($[21] = [
              N("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(ue, {
            key: 0,
            size: "sm",
            onClick: $[7] || ($[7] = (S) => g(s.value.key))
          }, {
            default: L(() => [
              N(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : w("", !0)
        ]),
        default: L(() => [
          s.value ? (t(), n("div", w$, [
            o("div", C$, [
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
              })) : w("", !0),
              s.value.isDefault ? (t(), T(we, {
                key: 2,
                status: "default"
              }, {
                default: L(() => [...$[11] || ($[11] = [
                  N(" Default ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.connected && s.value.mode ? (t(), T(we, {
                key: 3,
                status: s.value.mode
              }, {
                default: L(() => [
                  N(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : w("", !0)
            ]),
            o("p", S$, c(s.value.caption), 1),
            o("label", M$, [
              $[12] || ($[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, B$)
            ]),
            $[20] || ($[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", _$, [
              $[16] || ($[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              $[17] || ($[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", A$, [
                D(ue, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: $[1] || ($[1] = (S) => p(s.value.key, !0))
                }, {
                  default: L(() => [...$[13] || ($[13] = [
                    N(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(ue, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: $[2] || ($[2] = (S) => p(s.value.key, !1))
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
                  onClick: $[3] || ($[3] = (S) => h(s.value.key))
                }, {
                  default: L(() => [...$[15] || ($[15] = [
                    N(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : w("", !0),
            s.value.connected ? (t(), n("div", P$, [
              D(ue, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: $[4] || ($[4] = (S) => C("test"))
              }, {
                default: L(() => [...$[18] || ($[18] = [
                  N(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              D(ue, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: $[5] || ($[5] = (S) => C("live"))
              }, {
                default: L(() => [...$[19] || ($[19] = [
                  N(" Live ", -1)
                ])]),
                _: 1
              }, 8, ["variant"])
            ])) : w("", !0)
          ])) : w("", !0)
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
function B8(e) {
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
function _8(e) {
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
function A8(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = R(
    l.driver === "none" ? "off" : "connecting"
  ), f = R(/* @__PURE__ */ new Set());
  let g = /* @__PURE__ */ new Map(), p, h, C, k = (/* @__PURE__ */ new Date()).toISOString(), $ = null;
  function S(K, q) {
    g.set(K, { ...g.get(K) ?? {}, ...q }), !p && (p = setTimeout(() => {
      p = void 0, M();
    }, l.batchMs));
  }
  function M() {
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
      C?.abort(), C = new AbortController();
      try {
        const K = a.value.map((ne) => ne[r]), { records: q, at: oe } = await s(K, k);
        k = oe, u.value = "live";
        for (const ne of q)
          S(ne[r], ne);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function m() {
    v(), u.value = "live", h = setInterval(_, l.intervalMs);
  }
  function v() {
    clearInterval(h), h = void 0, C?.abort();
  }
  function y() {
    return window.Echo ?? null;
  }
  function A() {
    const K = y();
    if (!K || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    $ = l.channel;
    const q = K.private(l.channel);
    for (const oe of l.events)
      q.listen(oe, (ne) => {
        ne?.[r] !== void 0 && S(ne[r], ne);
      });
    u.value = "live", K.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), K.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function E() {
    $ && (y()?.leave($), $ = null);
  }
  function I() {
    l.driver === "poll" && m(), l.driver === "broadcast" && A();
  }
  function ae() {
    v(), E(), clearTimeout(p), p = void 0, g = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (ae(), u.value = "paused") : (k = (/* @__PURE__ */ new Date()).toISOString(), I(), i?.()));
  }
  return ve(() => {
    l.driver !== "none" && (I(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), ae();
  }), { status: u, recentlyChanged: f, applyPatch: S, flush: M, pollOnce: _ };
}
const z$ = /^[a-z0-9-]+$/, O$ = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function P8(e) {
  fn(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !z$.test(a) || typeof r != "string" || !O$.test(r) || (l[`--${a}`] = r);
    oc(l);
  });
}
const L$ = { class: "flex items-center gap-0.5" }, V$ = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", L$, [
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
}), j$ = /* @__PURE__ */ O({
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
}), T$ = { class: "flex flex-col gap-2" }, D$ = { class: "bg-card rounded-lg border p-4" }, E$ = { class: "text-muted-foreground truncate text-xs" }, I$ = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, F$ = /* @__PURE__ */ O({
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
    }, r = b(() => ({ ...a, ...l.field.limits ?? {} })), s = b(
      () => String(l.values[l.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = b(
      () => String(l.values[l.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = b(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = b(() => {
      const $ = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return $ === "" ? d.value : `${d.value} › ${$.split("/").join(" › ")}`;
    });
    function f($, S) {
      return $.length <= S ? $ : `${$.slice(0, S - 1).trimEnd()}…`;
    }
    const g = b(() => f(s.value, r.value.titleMax)), p = b(() => f(i.value, r.value.descriptionMax));
    function h($, S, M) {
      return $ === 0 ? { tone: "text-muted-foreground", note: "empty" } : $ > M ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : $ < S ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = b(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), k = b(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return ($, S) => (t(), n("div", T$, [
      o("div", D$, [
        o("p", E$, c(u.value), 1),
        o("p", {
          class: P(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", g.value === "" ? "text-muted-foreground italic" : ""])
        }, c(g.value || "Untitled page"), 3),
        o("p", {
          class: P(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, c(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", I$, [
        o("span", {
          class: P(C.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(C.value.note), 3),
        o("span", {
          class: P(k.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(k.value.note), 3)
      ]),
      S[0] || (S[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), N$ = ["value", "placeholder", "disabled"], R$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPhone",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = b(() => typeof a.modelValue == "string" ? a.modelValue : "");
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
    }, null, 42, N$));
  }
}), U$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, H$ = ["aria-selected", "disabled", "title", "onClick"], K$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkIconPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = b(() => a.field.icons ?? []), i = b(() => typeof a.modelValue == "string" ? a.modelValue : "");
    function d(u) {
      a.disabled || r("update:modelValue", u === i.value ? null : u);
    }
    return (u, f) => (t(), n("div", U$, [
      (t(!0), n(z, null, V(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        role: "option",
        class: P(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [x(Se), i.value === g ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === g,
        disabled: e.disabled,
        title: g,
        onClick: (p) => d(g)
      }, c(g), 11, H$))), 128))
    ]));
  }
}), q$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, G$ = ["disabled"], W$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, Z$ = ["onClick"], J$ = ["onClick"], Y$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = R(!1), d = b(() => a.field.options ?? []);
    function u(h, C) {
      return !C || h.label.toLowerCase().includes(C) ? !0 : (h.children ?? []).some((k) => u(k, C));
    }
    const f = b(() => {
      const h = s.value.trim().toLowerCase();
      return h ? d.value.filter((C) => u(C, h)) : d.value;
    }), g = b(() => {
      const h = (C) => {
        for (const k of C) {
          if (k.value === a.modelValue)
            return k.label;
          const $ = h(k.children ?? []);
          if ($)
            return $;
        }
        return null;
      };
      return h(d.value);
    });
    function p(h) {
      a.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, C) => (t(), n("div", q$, [
      o("button", {
        type: "button",
        class: P(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Se)]),
        disabled: e.disabled,
        onClick: C[0] || (C[0] = (k) => i.value = !i.value)
      }, [
        o("span", {
          class: P(g.value ? "" : "text-muted-foreground")
        }, c(g.value ?? "Select…"), 3),
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, G$),
      i.value ? (t(), n("div", W$, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": C[1] || (C[1] = (k) => s.value = k),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Ae, s.value]
        ]) : w("", !0),
        (t(!0), n(z, null, V(f.value, (k) => (t(), n(z, {
          key: String(k.value)
        }, [
          o("button", {
            type: "button",
            class: P(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === k.value ? "bg-accent" : ""]),
            onClick: ($) => p(k.value)
          }, c(k.label), 11, Z$),
          (t(!0), n(z, null, V(k.children ?? [], ($) => (t(), n("button", {
            key: String($.value),
            type: "button",
            class: P(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === $.value ? "bg-accent text-foreground" : ""]),
            onClick: (S) => p($.value)
          }, c($.label), 11, J$))), 128))
        ], 64))), 128))
      ])) : w("", !0)
    ]));
  }
}), X$ = ["aria-label"], Q$ = ["disabled", "aria-label", "aria-pressed", "onClick"], ew = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, tw = { key: 0 }, aw = ["id"], nw = ["fill"], lw = ["disabled"], ow = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkRating",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = b(() => Math.max(1, Math.min(10, Number(a.field.max ?? 5)))), i = b(() => !!a.field.allowHalf), d = b(() => {
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
      (t(!0), n(z, null, V(s.value, (h) => (t(), n("button", {
        key: h,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${h} of ${s.value}`,
        "aria-pressed": d.value >= h,
        onClick: (C) => u(h)
      }, [
        (t(), n("svg", ew, [
          f(h) === "half" ? (t(), n("defs", tw, [
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
            ])], 8, aw)
          ])) : w("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: f(h) === "full" ? "currentColor" : f(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, nw)
        ]))
      ], 8, Q$))), 128)),
      d.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (h) => u(0))
      }, " Clear ", 8, lw)) : w("", !0)
    ], 8, X$));
  }
});
function sw() {
  xe("radio", Km), xe("toggle-buttons", Va), xe("checkboxlist", Wm), xe("tags", tp), xe("colour", mp), xe("slider", qp), xe("rating", ow), xe("phone", R$), xe("icon-picker", K$), xe("tree-select", Y$), xe("visual-select", ov), xe("markdown", Cm), xe("code", zm), xe("map", bp), xe("qrcode", wp), xe("barcode", Pp), xe("diff", Lp), xe("seo-preview", F$), zt("swatch", rv), zt("voucher-code-box", j$), zt("document-colour-mode", V$);
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
const rw = /* @__PURE__ */ O({
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
}), iw = ["id"], Me = /* @__PURE__ */ O({
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
        D(rw, null, {
          default: L(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, iw));
  }
}), dw = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, uw = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, cw = {
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
      e.eyebrow ? (t(), n("p", dw, c(e.eyebrow), 1)) : w("", !0),
      e.title ? (t(), n("h2", uw, c(e.title), 1)) : w("", !0),
      e.body ? (t(), n("p", cw, c(e.body), 1)) : w("", !0)
    ], 2)) : w("", !0);
  }
}), fw = { class: "flex flex-col gap-10" }, mw = { class: "grid gap-4 md:grid-cols-3" }, pw = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, vw = { class: "text-sm font-semibold text-balance" }, gw = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, hw = /* @__PURE__ */ O({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", fw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", mw, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", { key: s }, [
              (t(), T(_e(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: L(() => [
                  r.meta ? (t(), n("p", pw, c(r.meta), 1)) : w("", !0),
                  o("h3", vw, c(r.title), 1),
                  r.body ? (t(), n("p", gw, c(r.body), 1)) : w("", !0)
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
function bw() {
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
const yw = { class: "pk-tilt-inner relative h-full" }, xw = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = bw();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", yw, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), kw = { class: "flex flex-col gap-10" }, $w = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, ww = { class: "text-base font-semibold" }, Cw = { class: "text-sm text-pretty text-muted-foreground" }, Sw = /* @__PURE__ */ O({
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
        o("div", kw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", $w, [
            (t(!0), n(z, null, V(e.items ?? [], (s, i) => (t(), T(xw, {
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
                  o("h3", ww, c(s.title), 1),
                  o("p", Cw, c(s.body), 1)
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
}), Mw = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, Bw = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, _w = { class: "grid gap-4 text-sm" }, Aw = {
  key: 0,
  class: "grid gap-1"
}, Pw = ["href"], zw = {
  key: 1,
  class: "grid gap-1"
}, Ow = ["href"], Lw = {
  key: 2,
  class: "grid gap-1"
}, Vw = { class: "text-pretty text-muted-foreground" }, jw = ["href"], Tw = /* @__PURE__ */ O({
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
        o("div", Mw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Bw, [
            o("dl", _w, [
              e.email ? (t(), n("div", Aw, [
                a[0] || (a[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.email), 9, Pw)
                ])
              ])) : w("", !0),
              e.phone ? (t(), n("div", zw, [
                a[1] || (a[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.phone), 9, Ow)
                ])
              ])) : w("", !0),
              e.address ? (t(), n("div", Lw, [
                a[2] || (a[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", Vw, c(e.address), 1)
              ])) : w("", !0)
            ]),
            e.label ? (t(), n("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.label), 9, jw)) : w("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Dw = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, Ew = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Iw = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, Fw = ["href"], Nw = /* @__PURE__ */ O({
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
        o("div", Dw, [
          o("h2", Ew, c(e.title), 1),
          e.body ? (t(), n("p", Iw, c(e.body), 1)) : w("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, Fw)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Rw = { class: "flex flex-col gap-8" }, Uw = { class: "divide-y rounded-lg border" }, Hw = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Kw = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, qw = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, { narrow: "" }, {
      default: L(() => [
        o("div", Rw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Uw, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", Hw, [
                N(c(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", Kw, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Gw = { class: "flex flex-col gap-10" }, Ww = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, Zw = { class: "text-sm font-semibold" }, Jw = { class: "text-sm text-pretty text-muted-foreground" }, Yw = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", Gw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Ww, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", Zw, c(r.title), 1),
              o("p", Jw, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Xw = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, Qw = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, e4 = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, t4 = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, a4 = ["href"], n4 = ["href"], l4 = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, o4 = /* @__PURE__ */ O({
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
          e.brand ? (t(), n("p", Xw, c(e.brand), 1)) : w("", !0),
          e.eyebrow ? (t(), n("p", Qw, c(e.eyebrow), 1)) : w("", !0),
          o("h1", {
            class: P([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, c(e.title), 3),
          e.body ? (t(), n("p", e4, c(e.body), 1)) : w("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", t4, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, a4)) : w("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, n4)) : w("", !0)
          ])) : w("", !0),
          e.note ? (t(), n("p", l4, c(e.note), 1)) : w("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), s4 = { class: "flex flex-col items-center gap-6" }, r4 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, i4 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, d4 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, { muted: "" }, {
      default: L(() => [
        o("div", s4, [
          e.title ? (t(), n("p", r4, c(e.title), 1)) : w("", !0),
          o("ul", i4, [
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
}), u4 = { class: "flex flex-col gap-10" }, c4 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, f4 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, m4 = ["aria-pressed"], p4 = ["aria-pressed"], v4 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, g4 = { class: "grid gap-4 md:grid-cols-3" }, h4 = { class: "flex flex-col gap-1" }, b4 = { class: "text-sm font-semibold" }, y4 = { class: "flex items-baseline gap-1" }, x4 = { class: "text-3xl font-semibold tracking-tight" }, k4 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, $4 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, w4 = { class: "flex flex-col gap-2 text-sm" }, C4 = { class: "text-muted-foreground" }, S4 = ["href"], M4 = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, a = R(!1), r = b(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), T(Me, { muted: "" }, {
      default: L(() => [
        o("div", u4, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", c4, [
            o("div", f4, [
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, m4),
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, p4)
            ]),
            e.annualNote ? (t(), n("p", v4, c(e.annualNote), 1)) : w("", !0)
          ])) : w("", !0),
          o("ul", g4, [
            (t(!0), n(z, null, V(e.items ?? [], (u, f) => (t(), n("li", {
              key: f,
              class: P(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", h4, [
                o("h3", b4, c(u.name), 1),
                o("p", y4, [
                  o("span", x4, c(s(u)), 1),
                  u.period ? (t(), n("span", k4, c(u.period), 1)) : w("", !0)
                ]),
                u.body ? (t(), n("p", $4, c(u.body), 1)) : w("", !0)
              ]),
              o("ul", w4, [
                (t(!0), n(z, null, V(u.features ?? [], (g, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", C4, c(g.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: P([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(u.label), 11, S4)) : w("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function B4() {
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
const _4 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, A4 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, P4 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, z4 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, O4 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, L4 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, V4 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, j4 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, T4 = { class: "ml-3 truncate text-xs text-muted-foreground" }, D4 = { class: "flex" }, E4 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, I4 = { class: "min-w-0 flex-1 p-4" }, F4 = { class: "flex flex-col divide-y rounded-md border" }, N4 = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = B4();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", _4, [
        o("div", A4, [
          o("div", P4, [
            o("h2", z4, c(e.title), 1),
            e.body ? (t(), n("p", O4, c(e.body), 1)) : w("", !0)
          ]),
          o("div", L4, [
            o("div", V4, [
              o("div", j4, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", T4, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", D4, [
                o("div", E4, [
                  (t(), n(z, null, V(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", I4, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", F4, [
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
}), R4 = /* @__PURE__ */ O({
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
}), U4 = { class: "flex flex-col gap-10" }, H4 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, K4 = { class: "order-2 text-sm text-muted-foreground" }, q4 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, G4 = /* @__PURE__ */ O({
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
        o("div", U4, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", H4, [
            (t(!0), n(z, null, V(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", K4, c(s.label), 1),
              o("dd", q4, [
                l(s.value) ? (t(), T(R4, {
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
}), W4 = { class: "flex flex-col gap-10" }, Z4 = { class: "grid gap-6 md:grid-cols-3" }, J4 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, Y4 = { class: "text-sm font-semibold" }, X4 = { class: "text-sm text-pretty text-muted-foreground" }, Q4 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", W4, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", Z4, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", J4, c(s + 1), 1),
              o("h3", Y4, c(r.title), 1),
              o("p", X4, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), e5 = { class: "flex flex-col gap-10" }, t5 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, a5 = ["src"], n5 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, l5 = { class: "min-w-0" }, o5 = { class: "truncate text-sm font-semibold" }, s5 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, r5 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, i5 = /* @__PURE__ */ O({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", e5, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", t5, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), n("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, a5)) : (t(), n("span", n5, c((r.name ?? "?").slice(0, 1)), 1)),
              o("div", l5, [
                o("h3", o5, c(r.name), 1),
                r.role ? (t(), n("p", s5, c(r.role), 1)) : w("", !0)
              ]),
              r.bio ? (t(), n("p", r5, c(r.bio), 1)) : w("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), d5 = { class: "flex flex-col gap-10" }, u5 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, c5 = { class: "text-pretty text-sm leading-relaxed" }, f5 = { class: "mt-auto flex items-center gap-3" }, m5 = ["src"], p5 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, v5 = { class: "min-w-0" }, g5 = { class: "block truncate text-sm font-medium" }, h5 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, b5 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", d5, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", u5, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", c5, " “" + c(r.quote) + "” ", 1),
              o("figcaption", f5, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, m5)) : (t(), n("span", p5, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", v5, [
                  o("span", g5, c(r.name), 1),
                  r.role ? (t(), n("span", h5, c(r.role), 1)) : w("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), z8 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: o4,
      logos: d4,
      features: Yw,
      bento: Sw,
      showcase: N4,
      steps: Q4,
      stats: G4,
      testimonials: b5,
      team: i5,
      articles: hw,
      contact: Tw,
      pricing: M4,
      faq: qw,
      cta: Nw
    }, s = b(
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
}), y5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, O8 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", y5, [
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
}), x5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, L8 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", x5, [...a[0] || (a[0] = [
      Rt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), k5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, V8 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", k5, [...a[0] || (a[0] = [
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
}), $5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, j8 = /* @__PURE__ */ O({
  __name: "PkStudioBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", $5, [...a[0] || (a[0] = [
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
sw();
const T8 = "0.0.1";
export {
  ra as ACTION_KEY_ICONS,
  Dt as APPEARANCE_STYLE_ID,
  a8 as AdminDirectory,
  rf as Alert,
  df as AlertDescription,
  uf as AlertTitle,
  NC as AppPageFooter,
  l3 as AppearanceDrawer,
  nC as Avatar,
  lC as AvatarFallback,
  oC as AvatarImage,
  Xt as BADGE_VARIANTS,
  X5 as BadgeResolver,
  ZC as BarChart,
  sC as Breadcrumb,
  rC as BreadcrumbEllipsis,
  iC as BreadcrumbItem,
  dC as BreadcrumbLink,
  uC as BreadcrumbList,
  cC as BreadcrumbPage,
  fC as BreadcrumbSeparator,
  V5 as BulkActions,
  Ka as CATALOGUE_CONTAINER,
  vf as CATALOGUE_GRID,
  c3 as CATALOGUE_GRID_TIGHT,
  gf as CATALOGUE_GRID_TILES,
  zC as Card,
  OC as CardAction,
  LC as CardContent,
  VC as CardDescription,
  jC as CardFooter,
  TC as CardHeader,
  DC as CardTitle,
  a0 as CartPanel,
  c8 as CatalogBrowser,
  D1 as CatalogCard,
  Xa as CatalogFilterSheet,
  aa as CatalogGrid,
  d8 as CatalogInspect,
  K0 as CatalogItemDetail,
  u8 as CatalogItemView,
  f8 as CatalogRegister,
  i8 as CatalogTill,
  ib as ChartCard,
  mt as ChartTooltip,
  Qr as Checkbox,
  q5 as CheckboxCell,
  G5 as CodeCell,
  mu as ColourCell,
  e8 as ComboChart,
  Xr as CreateOptionDialog,
  qr as CreateOptionError,
  p8 as DASHBOARD_HIDDEN_STORAGE_KEY,
  Mk as DASHBOARD_HIDE_KEY,
  v8 as DashboardShortcuts,
  so as DataTable,
  xC as Dialog,
  kC as DialogClose,
  $C as DialogContent,
  wC as DialogDescription,
  CC as DialogFooter,
  SC as DialogHeader,
  qf as DialogOverlay,
  MC as DialogScrollContent,
  BC as DialogTitle,
  _C as DialogTrigger,
  a8 as DirectoryPage,
  U3 as DropdownMenu,
  H3 as DropdownMenuCheckboxItem,
  K3 as DropdownMenuContent,
  q3 as DropdownMenuGroup,
  G3 as DropdownMenuItem,
  W3 as DropdownMenuLabel,
  I8 as DropdownMenuPortal,
  Z3 as DropdownMenuRadioGroup,
  J3 as DropdownMenuRadioItem,
  Y3 as DropdownMenuSeparator,
  X3 as DropdownMenuShortcut,
  Q3 as DropdownMenuSub,
  eC as DropdownMenuSubContent,
  tC as DropdownMenuSubTrigger,
  aC as DropdownMenuTrigger,
  J5 as EditableCell,
  Se as FOCUS_RING,
  j5 as FOCUS_RING_SOFT,
  da as FOCUS_RING_WITHIN,
  ro as FORM_MEASURE,
  Xe as FormFieldControl,
  t8 as HeatmapChart,
  cl as ICON_ALIASES,
  gt as ICON_PATHS,
  Re as INPUT_COPY,
  Jr as INPUT_PLACEHOLDER,
  Zr as INPUT_TEXT,
  nu as IconCell,
  iu as ImageCell,
  S8 as InfoNode,
  bf as JPEG_IMAGE_ERROR,
  W5 as KeyValueCell,
  AC as Label,
  Sg as LineChart,
  Tx as LineItems,
  co as MODAL_PANEL,
  fo as MODAL_PANEL_FORM,
  R5 as MUTED_COPY,
  vt as MUTED_COPY_SNUG,
  U5 as MUTED_COPY_XS,
  kt as MiniStatCard,
  mC as NavigationMenu,
  pC as NavigationMenuContent,
  vC as NavigationMenuIndicator,
  gC as NavigationMenuItem,
  hC as NavigationMenuLink,
  bC as NavigationMenuList,
  yC as NavigationMenuTrigger,
  Hf as NavigationMenuViewport,
  hf as OPAQUE_IMAGE_ERROR,
  Oa as OVERLAY_FORM_MEASURE,
  qe as PAGE_SHELL,
  O5 as PAGE_SHELL_COMPACT,
  L5 as PAGE_SHELL_STACK,
  M8 as PaymentGatewaySettings,
  h$ as PaymentGateways,
  JC as PieChart,
  d3 as PkAlertError,
  hw as PkArticles,
  O8 as PkAuroraBackdrop,
  Ke as PkBadge,
  Pp as PkBarcode,
  Sw as PkBento,
  o3 as PkBottomNav,
  EC as PkBoundary,
  HC as PkBuilder,
  ue as PkButton,
  KC as PkCalendar,
  IC as PkCard,
  Wm as PkCheckboxList,
  Ja as PkCodeBox,
  zm as PkCodeInput,
  mp as PkColourPicker,
  V8 as PkConsoleBackdrop,
  Tw as PkContact,
  R4 as PkCountUp,
  Nw as PkCta,
  RC as PkDeviceFrame,
  Lp as PkDiff,
  Ev as PkDocument,
  Ze as PkDropdown,
  L8 as PkEditorialBackdrop,
  Vt as PkEmptyState,
  qw as PkFaq,
  Yw as PkFeatureGrid,
  Pe as PkFieldLabel,
  La as PkFileUpload,
  De as PkHeading,
  o4 as PkHero,
  Bi as PkKeyValue,
  z8 as PkLandingSections,
  d4 as PkLogoCloud,
  vp as PkMap,
  bp as PkMapField,
  Cm as PkMarkdownInput,
  it as PkModal,
  Zt as PkMultiSelect,
  r3 as PkOtpInput,
  i3 as PkPageHeader,
  k8 as PkPasskeyRegister,
  u3 as PkPasswordInput,
  M4 as PkPricing,
  wp as PkQrCode,
  Sx as PkQtyStepper,
  vs as PkQueryBuilder,
  Km as PkRadioGroup,
  UC as PkRepeater,
  rw as PkReveal,
  Di as PkRichEditor,
  Me as PkSection,
  Ve as PkSectionHeading,
  N4 as PkShowcase,
  sk as PkSignaturePad,
  ze as PkSkeleton,
  Ct as PkSlideover,
  qp as PkSlider,
  s3 as PkSpinner,
  G4 as PkStats,
  we as PkStatusBadge,
  Hr as PkStepIndicator,
  Q4 as PkSteps,
  j8 as PkStudioBackdrop,
  rv as PkSwatchPreview,
  tp as PkTagsInput,
  i5 as PkTeam,
  b5 as PkTestimonials,
  $e as PkTextInput,
  xw as PkTiltCard,
  Va as PkToggleButtons,
  ov as PkVisualSelect,
  uy as PlanCard,
  r8 as PlanEditor,
  s8 as PlanGrid,
  QC as PolarAreaChart,
  XC as RadarChart,
  K5 as RatingCell,
  Q5 as RecordActions,
  $8 as RecordForm,
  H5 as RelationCreateDialog,
  D5 as RelationPanel,
  io as SLIDEOVER_BODY,
  uo as SLIDEOVER_WIDTH,
  p1 as STATUS_TONES,
  YC as ScatterChart,
  ja as SchemaNode,
  l8 as SegmentedBar,
  b8 as SelectionBar,
  If as Separator,
  h8 as SetupChecklist,
  Ha as ShadcnInput,
  Jt as Sheet,
  g3 as SheetClose,
  Yt as SheetContent,
  Cf as SheetDescription,
  h3 as SheetFooter,
  Sf as SheetHeader,
  Mf as SheetTitle,
  b3 as SheetTrigger,
  Bb as ShortcutsWidget,
  y3 as Sidebar,
  x3 as SidebarContent,
  k3 as SidebarFooter,
  $3 as SidebarGroup,
  w3 as SidebarGroupAction,
  C3 as SidebarGroupContent,
  S3 as SidebarGroupLabel,
  M3 as SidebarHeader,
  B3 as SidebarInput,
  _3 as SidebarInset,
  A3 as SidebarMenu,
  P3 as SidebarMenuAction,
  z3 as SidebarMenuBadge,
  L3 as SidebarMenuButton,
  V3 as SidebarMenuItem,
  j3 as SidebarMenuSkeleton,
  T3 as SidebarMenuSub,
  D3 as SidebarMenuSubButton,
  E3 as SidebarMenuSubItem,
  I3 as SidebarProvider,
  F3 as SidebarRail,
  N3 as SidebarSeparator,
  R3 as SidebarTrigger,
  m8 as SignatureStudio,
  Mt as Sparkline,
  PC as Spinner,
  n8 as StatCard,
  o8 as StatListChart,
  g8 as StatStrip,
  We as Switch,
  qa as TRANSPARENT_IMAGE_HELP,
  y8 as TablePagination,
  Ko as TableShell,
  x8 as TableTabs,
  $r as TableToolbar,
  Z5 as TagsCell,
  WC as ThemeToggle,
  Tf as Tooltip,
  Df as TooltipContent,
  O3 as TooltipProvider,
  Ef as TooltipTrigger,
  Ya as TrendBadge,
  w8 as UnsavedBar,
  cf as alertVariants,
  nc as appearancePayload,
  Ia as appearanceVars,
  Et as applyAppearance,
  wf as assertTransparentImage,
  t3 as bootstrapAppearance,
  ot as buttonClasses,
  $t as catalogFiltersActive,
  Q as cn,
  Wr as createOptionActionLabel,
  Gr as createOptionTitle,
  E1 as cycleLabel,
  Ee as emptyCatalogFilters,
  Kr as fieldControl,
  N5 as fieldErrorsFromPayload,
  ix as findExactSku,
  I1 as formatPerkValue,
  Au as hasBadgeValue,
  E5 as hasFieldControl,
  qC as hasOptionPreview,
  ce as iconPath,
  kf as imageHasTransparency,
  Fa as initializeAppearance,
  ea as isDark,
  na as matchCatalogItem,
  p3 as mergeLayoutItems,
  Kf as navigationMenuTriggerStyle,
  Gp as optionPreview,
  f3 as packWidgetColumns,
  m3 as parseWidgetId,
  F1 as perkGranted,
  ta as readAppearance,
  lc as readServerAppearance,
  sw as registerBuiltInFieldControls,
  xe as registerFieldControl,
  zt as registerOptionPreview,
  I5 as registeredFieldTypes,
  Wp as registeredOptionPreviews,
  e3 as resetAppearanceBootstrapForTests,
  F5 as resetFieldControls,
  GC as resetOptionPreviews,
  lt as resolveActionIcon,
  n3 as setAppearancePersister,
  Ff as sidebarMenuButtonVariants,
  b1 as statusBadgeVariant,
  h1 as statusTone,
  a3 as syncAppearanceFromInertiaPage,
  v3 as toPersistedLayout,
  T5 as toUrl,
  Ua as useAppearance,
  B8 as useColumnVisibility,
  _8 as useColumnWidths,
  A8 as useLiveUpdates,
  bw as usePointer,
  Qa as useReveal,
  Y5 as useSchemaColumns,
  B4 as useScrollProgress,
  FC as useShellPageFooter,
  St as useSidebar,
  P8 as useTenantTheme,
  C8 as useUnsavedChanges,
  T8 as version,
  fa as widgetId
};
//# sourceMappingURL=index.js.map
