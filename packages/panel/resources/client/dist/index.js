import './ui.css';
import { defineComponent as O, useSlots as qt, openBlock as t, createElementBlock as a, normalizeClass as P, unref as k, renderSlot as K, createElementVNode as o, toDisplayString as c, createCommentVNode as $, computed as x, normalizeStyle as se, Fragment as z, renderList as V, ref as U, watch as me, useId as ra, withModifiers as he, createTextVNode as R, createVNode as E, createStaticVNode as Mt, createBlock as D, createSlots as st, withCtx as L, nextTick as De, onBeforeUnmount as ke, Teleport as ut, Transition as Ye, onMounted as ve, withDirectives as pe, vModelText as Ae, resolveDynamicComponent as _e, resolveComponent as Gt, vModelSelect as We, vModelDynamic as ia, mergeProps as re, normalizeProps as Oe, guardReactiveProps as Ne, defineAsyncComponent as cn, inject as yt, vShow as He, withKeys as Tt, onUnmounted as ua, isRef as da, useTemplateRef as ca, onErrorCaptured as fa, provide as Et, reactive as rt, useModel as dt, mergeModels as Fe, markRaw as ma, shallowRef as pa, watchEffect as va } from "vue";
import { useForwardPropsEmits as be, DialogRoot as Mn, DialogOverlay as Wt, DialogPortal as Zt, DialogContent as Jt, DialogClose as Qe, CheckboxRoot as ga, CheckboxIndicator as ha, SwitchRoot as ba, SwitchThumb as ya, DialogDescription as Bn, DialogTitle as _n, DialogTrigger as An, createContext as xa, Primitive as et, TooltipRoot as ka, TooltipPortal as $a, TooltipContent as wa, TooltipArrow as Ca, TooltipProvider as Pn, TooltipTrigger as Sa, Separator as Ma, DropdownMenuRoot as Ba, DropdownMenuCheckboxItem as _a, DropdownMenuItemIndicator as zn, DropdownMenuPortal as Aa, DropdownMenuContent as Pa, DropdownMenuGroup as za, useForwardProps as Le, DropdownMenuItem as Oa, DropdownMenuLabel as La, DropdownMenuRadioGroup as ja, DropdownMenuRadioItem as Va, DropdownMenuSeparator as Da, DropdownMenuSub as Ta, DropdownMenuSubContent as Ea, DropdownMenuSubTrigger as Ia, DropdownMenuTrigger as Fa, AvatarRoot as Na, AvatarFallback as Ra, AvatarImage as Ua, NavigationMenuViewport as Ha, NavigationMenuRoot as Ka, NavigationMenuContent as qa, NavigationMenuIndicator as Ga, NavigationMenuItem as Wa, NavigationMenuLink as Za, NavigationMenuList as Ja, NavigationMenuTrigger as Ya, Label as Xa } from "reka-ui";
import { DropdownMenuPortal as S6 } from "reka-ui";
import { X as Yt, Check as On, AlertCircle as Qa, EyeOff as el, Eye as tl, PanelLeftOpen as nl, PanelLeftClose as al, Circle as ll, ChevronRight as Ln, MoreHorizontal as ol, ChevronDown as sl, Loader2Icon as rl } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as jn, useMediaQuery as il, useEventListener as ul, defaultDocument as dl } from "@vueuse/core";
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
      class: P(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      k(l).illustration ? (t(), a("div", gl, [
        K(n.$slots, "illustration")
      ])) : (t(), a("div", {
        key: 1,
        class: P(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
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
        e.description ? (t(), a("p", yl, c(e.description), 1)) : $("", !0)
      ]),
      n.$slots.actions ? (t(), a("div", xl, [
        K(n.$slots, "actions")
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
    const l = e, n = {
      text: "h-4 w-full",
      number: "h-6 w-24",
      badge: "h-4 w-7",
      block: "h-full w-full",
      row: "h-9 w-full",
      circle: "size-8 rounded-full"
    }, r = x(() => n[l.variant] ?? n.text), s = x(() => Math.max(1, Math.min(l.count, 50)));
    function i(u) {
      if (!(l.variant !== "text" || s.value === 1))
        return u === s.value - 1 ? "60%" : void 0;
    }
    return (u, d) => (t(), a("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: se(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), a(z, null, V(s.value, (f) => (t(), a("span", {
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
    function r(Y) {
      if (!Y || !n.groupBy)
        return "";
      if (Y.__group !== void 0 && Y.__group !== null)
        return String(Y.__group);
      const le = Y[n.groupBy.key];
      return le == null || le === "" ? "" : String(le);
    }
    function s(Y) {
      return n.groupBy ? Y === 0 ? !0 : r(n.rows[Y]) !== r(n.rows[Y - 1]) : !1;
    }
    function i(Y) {
      if (Y.__groupTitle)
        return String(Y.__groupTitle);
      const le = n.groupBy ? Y[n.groupBy.key] : null, ee = le == null || le === "" ? "None" : String(le);
      return !n.groupBy || n.groupBy.titlePrefixed === !1 ? ee : `${n.groupBy.label}: ${ee}`;
    }
    const u = U(/* @__PURE__ */ new Set()), d = U(/* @__PURE__ */ new Set());
    function f(Y) {
      return n.groupBy?.collapsible ? u.value.has(Y) : !1;
    }
    function b(Y) {
      if (!n.groupBy?.collapsible)
        return;
      const le = new Set(d.value);
      le.add(Y), d.value = le;
      const ee = new Set(u.value);
      ee.has(Y) ? ee.delete(Y) : ee.add(Y), u.value = ee;
    }
    function g(Y) {
      return n.groupBy?.collapsible ? !f(r(n.rows[Y])) : !0;
    }
    me(
      () => n.rows,
      (Y) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
          return;
        const le = new Set(u.value);
        for (const ee of Y) {
          const de = r(ee);
          de !== "" && !d.value.has(de) && le.add(de);
        }
        u.value = le;
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
      const ee = n.rows.map((ie) => ie[n.rowKey]), [de] = ee.splice(le, 1);
      ee.splice(Y, 0, de), p("reorder", ee);
    }
    const p = l;
    function m(Y, le) {
      !n.rowClickable || n.reordering || le.button !== 0 || le.metaKey || le.ctrlKey || le.shiftKey || le.altKey || le.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || p("row-click", Y);
    }
    const v = U(null), A = ra(), I = x(() => n.columns.filter((Y) => !n.hidden?.has(Y.key))), T = x(() => {
      const Y = I.value.find((le) => le.sticky);
      return Y ? Y.key : n.stickyFirst && I.value.length > 0 ? I.value[0].key : null;
    });
    function te(Y) {
      return T.value === Y.key;
    }
    function H() {
      return n.selectable && !n.reordering ? `${ro}px` : "0";
    }
    function Z(Y) {
      const le = n.columnWidths?.[Y.key];
      return typeof le == "number" ? le : Y.width;
    }
    function N(Y) {
      const le = Z(Y), ee = te(Y), de = {};
      return le !== void 0 && (de.width = `${le}px`, de.minWidth = `${le}px`, de.maxWidth = `${le}px`), ee && (de.left = H()), Object.keys(de).length ? de : void 0;
    }
    function W(Y) {
      return n.resizable ? Y.resizable !== !1 : !1;
    }
    function J(Y, le) {
      if (!W(Y))
        return;
      le.preventDefault(), le.stopPropagation();
      const ee = le.clientX, de = Z(Y) ?? 160, ie = le.currentTarget;
      try {
        ie.setPointerCapture(le.pointerId);
      } catch {
      }
      function Ke(at) {
        const zt = de + (at.clientX - ee);
        p("resize", Y.key, Math.min(1200, Math.max(48, zt)));
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
    const G = x(() => I.value.some((Y) => !!Y.group)), q = x(() => {
      const Y = [];
      for (const le of I.value) {
        const ee = le.group ?? null, de = Y[Y.length - 1];
        de && de.label === ee ? de.span += 1 : Y.push({ label: ee, span: 1, key: `${ee ?? "loose"}-${le.key}` });
      }
      return Y;
    });
    function B(Y) {
      const le = Y[n.rowKey];
      return le == null || le === "" ? null : le;
    }
    function F(Y) {
      const le = B(Y);
      return le !== null && !!n.selected?.has(le);
    }
    const j = U(null);
    function X(Y) {
      return n.rows.findIndex((le) => {
        const ee = B(le);
        return ee !== null && ee === Y;
      });
    }
    function ge(Y, le) {
      const ee = B(Y);
      if (ee === null)
        return;
      const de = le.shiftKey, ie = !!n.selected?.has(ee);
      if (de && j.value !== null && j.value !== ee) {
        const Ke = X(j.value), Re = X(ee);
        if (Ke !== -1 && Re !== -1) {
          const at = Math.min(Ke, Re), zt = Math.max(Ke, Re), sa = !ie;
          for (let vt = at; vt <= zt; vt++) {
            if (!g(vt))
              continue;
            const Ot = B(n.rows[vt]);
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
      () => n.rows.map((Y) => B(Y)).filter((Y) => Y !== null)
    ), oe = x(
      () => ye.value.length > 0 && ye.value.every((Y) => n.selected?.has(Y))
    ), Q = x(
      () => !oe.value && ye.value.some((Y) => n.selected?.has(Y))
    );
    function ae(Y) {
      return Y.sortKey ?? Y.key;
    }
    function Ce(Y) {
      return n.sort === ae(Y);
    }
    async function un(Y, le, ee) {
      try {
        await navigator.clipboard.writeText(String(ee)), v.value = `${Y}-${le.key}`, setTimeout(() => v.value = null, 1200);
      } catch {
      }
    }
    const la = x(
      () => !!n.summaries && !!n.summaryValues && Object.keys(n.summaries).length > 0
    );
    function dn(Y) {
      return n.summaries?.[Y] ?? null;
    }
    function oa(Y) {
      const le = n.summaries?.[Y], ee = n.summaryValues?.[Y];
      if (!le)
        return "";
      if (ee == null)
        return "None";
      const de = le.divideBy ? ee / le.divideBy : ee, ie = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: le.decimals,
        maximumFractionDigits: le.decimals
      }).format(de);
      return `${le.prefix ?? ""}${ie}${le.suffix ?? ""}`;
    }
    return (Y, le) => (t(), a("div", {
      class: P(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", $l, [
        o("thead", wl, [
          G.value ? (t(), a("tr", Cl, [
            e.reordering ? (t(), a("th", Sl)) : $("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Ml)) : $("", !0),
            (t(!0), a(z, null, V(q.value, (ee) => (t(), a("th", {
              key: ee.key,
              colspan: ee.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, c(ee.label ?? ""), 9, Bl))), 128)),
            Y.$slots.actions ? (t(), a("th", _l)) : $("", !0)
          ])) : $("", !0),
          o("tr", Al, [
            e.reordering ? (t(), a("th", Pl)) : $("", !0),
            e.selectable && !e.reordering ? (t(), a("th", {
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
                onChange: le[1] || (le[1] = he((ee) => p("toggle-page", !oe.value), ["stop"]))
              }, null, 40, zl)
            ], 2)) : $("", !0),
            (t(!0), a(z, null, V(I.value, (ee) => (t(), a("th", {
              key: ee.key,
              class: P([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                te(ee) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: se(N(ee))
            }, [
              ee.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (de) => p("sort", ae(ee))
              }, [
                R(c(ee.label) + " ", 1),
                Ce(ee) ? (t(), a("span", Ll, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", jl, "↕"))
              ], 8, Ol)) : (t(), a("span", Vl, c(ee.label), 1)),
              W(ee) ? (t(), a("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${ee.label}`,
                onPointerdown: (de) => J(ee, de)
              }, null, 40, Dl)) : $("", !0)
            ], 6))), 128)),
            Y.$slots.actions ? (t(), a("th", Tl, [...le[2] || (le[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", El, [
          (t(), a(z, null, V(6, (ee) => o("tr", {
            key: `skel-${ee}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), a("td", Il, [
              E(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            e.selectable && !e.reordering ? (t(), a("td", Fl, [
              E(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            (t(!0), a(z, null, V(I.value, (de) => (t(), a("td", {
              key: de.key,
              class: "px-3 py-2.5"
            }, [
              E(ze, { variant: "text" })
            ]))), 128)),
            Y.$slots.actions ? (t(), a("td", Nl, [
              E(ze, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : $("", !0)
          ])), 64))
        ])) : (t(), a("tbody", {
          key: 1,
          class: P(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(z, null, V(e.rows, (ee, de) => (t(), a(z, {
            key: B(ee) ?? `row-${de}`
          }, [
            e.groupBy && s(de) ? (t(), a("tr", Rl, [
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
            g(de) ? (t(), a("tr", {
              key: 1,
              class: P(["group pk-row border-b transition-colors hover:bg-muted/50", [
                F(ee) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && de % 2 === 1 ? "bg-muted/20" : "",
                h.value === de ? "opacity-40" : "",
                S(de),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => y(de, ie),
              onDragover: (ie) => M(de, ie),
              onDrop: he((ie) => _(de), ["prevent"]),
              onDragend: C,
              onContextmenu: (ie) => p("row-contextmenu", ee, ie),
              onClick: (ie) => m(ee, ie)
            }, [
              e.reordering ? (t(), a("td", Wl, [...le[3] || (le[3] = [
                Mt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), a("td", {
                key: 1,
                class: P(["px-3 py-2", T.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${k(A)}-row-${B(ee) ?? de}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: B(ee) ?? void 0,
                  checked: F(ee),
                  disabled: B(ee) === null,
                  "aria-label": B(ee) === null ? "This row has no id and cannot be selected" : `Select row ${B(ee)}`,
                  onClick: he((ie) => ge(ee, ie), ["stop"])
                }, null, 8, Zl)
              ], 2)) : $("", !0),
              (t(!0), a(z, null, V(I.value, (ie) => (t(), a("td", {
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
                  ie.copyable ? (t(), a("span", Jl, [
                    R(c(ee[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (Ke) => un(String(ee[e.rowKey]), ie, ee[ie.key])
                    }, [
                      o("span", Xl, c(v.value === `${ee[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Yl)
                  ])) : ee[ie.key] == null || ee[ie.key] === "" ? (t(), a("span", Ql, "None")) : (t(), a("span", eo, c(ee[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              Y.$slots.actions ? (t(), a("td", to, [
                K(Y.$slots, "actions", { row: ee }, void 0, !0)
              ])) : $("", !0)
            ], 42, Gl)) : $("", !0)
          ], 64))), 128))
        ], 2)),
        la.value ? (t(), a("tfoot", no, [
          o("tr", null, [
            e.selectable ? (t(), a("td", ao)) : $("", !0),
            (t(!0), a(z, null, V(e.columns, (ee) => (t(), a(z, {
              key: `s-${ee.key}`
            }, [
              e.hidden?.has(ee.key) ? $("", !0) : (t(), a("td", {
                key: 0,
                class: P(["px-3 py-2 align-top text-sm whitespace-nowrap", ee.cellClass])
              }, [
                dn(ee.key) ? (t(), a(z, { key: 0 }, [
                  o("span", lo, c(dn(ee.key).label), 1),
                  o("span", oo, c(oa(ee.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            Y.$slots.actions ? (t(), a("td", so)) : $("", !0)
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
      }, st({ _: 2 }, [
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
  const n = e.__vccOpts || e;
  for (const [r, s] of l)
    n[r] = s;
  return n;
}, uo = /* @__PURE__ */ Bt(io, [["__scopeId", "data-v-c0f7d40f"]]), tt = "w-full min-w-0 px-4 py-6 sm:px-6", m3 = "w-full min-w-0 p-3 sm:p-4", p3 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", co = "w-full max-w-7xl", fo = "px-4 py-4", Dn = "w-full min-w-0", mo = {
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
}, v3 = xt.confirm, g3 = xt.form, po = ["aria-busy", "aria-label"], vo = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, go = { class: "text-base font-semibold" }, ho = {
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
    const u = U(!1), d = x(() => xt[n.size] ?? xt.confirm);
    function f(h) {
      u.value = h.target === h.currentTarget;
    }
    function b(h) {
      u.value && h.target === h.currentTarget && !n.busy && r("close"), u.value = !1;
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
    ), ke(() => document.removeEventListener("keydown", g)), (h, w) => (t(), D(ut, { to: "body" }, [
      E(Ye, {
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
              class: P(d.value)
            }, [
              o("div", vo, [
                o("h2", go, c(e.title), 1),
                e.description ? (t(), a("p", ho, c(e.description), 1)) : $("", !0)
              ]),
              o("div", {
                class: P(["min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4", k(Dn)])
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
    const n = e, r = U(!1), s = U(null), i = U(null), u = U({ top: 0, left: 0, minWidth: 0 }), d = U(null);
    let f = null;
    function b(m) {
      !n.dismissOnPanelClick || m.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function g() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await De(), S());
    }
    function h() {
      f = setTimeout(C, 180);
    }
    async function w() {
      d.value = null, r.value = !r.value, r.value && (await De(), S());
    }
    async function y(m, v) {
      d.value = { x: m, y: v }, r.value = !0, await De(), S();
    }
    function C() {
      r.value = !1, d.value = null;
    }
    function S() {
      const m = s.value, v = i.value;
      if (!m || !v)
        return;
      const A = v.getBoundingClientRect(), I = 8, T = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : m.getBoundingClientRect();
      let te, H;
      if (n.placement === "bottom")
        te = T.bottom + n.offset, te + A.height > window.innerHeight - I && T.top - A.height - n.offset > I && (te = T.top - A.height - n.offset), H = n.align === "end" && !d.value ? T.right - A.width : T.left;
      else {
        te = T.top;
        const Z = n.placement === "right", N = T.right + n.offset + A.width < window.innerWidth - I, W = T.left - n.offset - A.width > I;
        H = (Z ? N || !W : !W && N) ? T.right + n.offset : T.left - n.offset - A.width;
      }
      H = Math.min(Math.max(I, H), window.innerWidth - A.width - I), te = Math.min(Math.max(I, te), window.innerHeight - A.height - I), u.value = { top: te, left: H, minWidth: Math.max(T.width, yo) };
    }
    function M(m) {
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
        if (d.value) {
          C();
          return;
        }
        S();
      }
    }
    return ve(() => {
      document.addEventListener("pointerdown", M), document.addEventListener("keydown", _), window.addEventListener("scroll", p, !0), window.addEventListener("resize", p);
    }), ke(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", M), document.removeEventListener("keydown", _), window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
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
      (t(), D(ut, { to: "body" }, [
        E(Ye, {
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
              class: P([
                "bg-popover text-popover-foreground fixed z-[100] w-max overflow-hidden rounded-md border p-1.5 shadow-lg",
                e.width
              ]),
              style: se({
                top: `${u.value.top}px`,
                left: `${u.value.left}px`,
                /*
                 * AT LEAST AS WIDE AS WHAT OPENED IT. A menu narrower
                 * than its own trigger reads as a different control
                 * belonging to something else.
                 *
                 * This was computed on every open and never applied -
                 * the template set only `top` and `left` - so the
                 * measurement existed and did nothing.
                 */
                minWidth: `${u.value.minWidth}px`
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
}, Po = ["disabled", "onClick"], zo = {
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
}, No = ["disabled"], h3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null), i = U(!1), u = x(() => n.allMatching ? n.total : n.count), d = x(() => u.value !== void 0), f = x(() => d.value && u.value === 0), b = x(() => n.actions.filter((_) => !_.destructive)), g = x(() => n.actions.filter((_) => _.destructive)), h = {
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
    return (_, p) => (t(), a(z, null, [
      E(qe, null, {
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
            (t(!0), a(z, null, V(b.value, (m) => (t(), a("button", {
              key: m.key,
              type: "button",
              role: "menuitem",
              class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", w(m)]),
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
              (t(!0), a(z, null, V(g.value, (m) => (t(), a("button", {
                key: m.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (v) => y(m)
              }, [
                (t(), a("svg", zo, [
                  o("path", {
                    d: k(Te)({ ...m, destructive: !0 })
                  }, null, 8, Oo)
                ])),
                o("span", Lo, c(m.label), 1)
              ], 8, Po))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      E(it, {
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
            class: P([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || f.value,
            onClick: C
          }, c(s.value?.label), 11, To)
        ]),
        default: L(() => [
          o("p", jo, [
            p[7] || (p[7] = R(" This will affect ", -1)),
            o("span", Vo, [
              d.value ? (t(), a(z, { key: 1 }, [
                R(c(M(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            p[8] || (p[8] = R(" . ", -1))
          ]),
          f.value ? (t(), a("p", Do, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      E(it, {
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
            disabled: !d.value || f.value,
            onClick: S
          }, " Export CSV ", 8, No)
        ]),
        default: L(() => [
          o("p", Eo, [
            p[9] || (p[9] = R(" This will export ", -1)),
            o("span", Io, [
              d.value ? (t(), a(z, { key: 1 }, [
                R(c(M(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            p[10] || (p[10] = R(" . ", -1))
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
        class: P(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        K(l.$slots, "toolbar")
      ], 2)) : $("", !0),
      K(l.$slots, "default"),
      l.$slots.pagination ? (t(), a("div", Ko, [
        K(l.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), Se = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", pn = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", b3 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Go = ["aria-expanded"], Wo = ["aria-label", "onClick"], Zo = {
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
    const n = e, r = l, s = U(null), i = U(null), u = U(null), d = U(!1), f = U(""), b = U(0), g = U({ top: 0, left: 0, width: 0 }), h = x(
      () => n.modelValue.map(
        (H) => n.options.find((Z) => Z.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), w = x(() => n.searchable ?? n.options.length > 6), y = x(() => {
      const H = new Set(n.modelValue), Z = f.value.trim().toLowerCase();
      return n.options.filter((N) => !H.has(N.value)).filter((N) => Z ? N.label.toLowerCase().includes(Z) : !0);
    }), C = x(() => n.max !== null && n.modelValue.length >= n.max);
    function S() {
      const H = s.value, Z = i.value;
      if (!H || !Z)
        return;
      const N = H.getBoundingClientRect(), W = Z.getBoundingClientRect(), J = 8;
      let G = N.bottom + 4;
      G + W.height > window.innerHeight - J && N.top - W.height - 4 > J && (G = N.top - W.height - 4), g.value = {
        top: G,
        left: Math.min(Math.max(J, N.left), window.innerWidth - N.width - J),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: N.width
      };
    }
    async function M() {
      n.disabled || d.value || (d.value = !0, f.value = "", b.value = 0, await De(), S(), u.value?.focus());
    }
    function _() {
      d.value = !1, f.value = "";
    }
    function p() {
      d.value ? _() : M();
    }
    function m(H) {
      C.value || (r("update:modelValue", [...n.modelValue, H.value]), f.value = "", b.value = 0, De(() => {
        S(), u.value?.focus();
      }));
    }
    function v(H) {
      r(
        "update:modelValue",
        n.modelValue.filter((Z) => Z !== H)
      ), De(S);
    }
    function A() {
      r("update:modelValue", []), De(S);
    }
    function I(H) {
      if (!n.disabled) {
        if (H.key === "Escape" && d.value) {
          H.stopPropagation(), _();
          return;
        }
        if (H.key === "Backspace" && f.value === "" && n.modelValue.length > 0) {
          v(n.modelValue[n.modelValue.length - 1]);
          return;
        }
        if (!d.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), M();
          return;
        }
        if (d.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), b.value = Math.min(b.value + 1, y.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), b.value = Math.max(b.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const Z = y.value[b.value];
            Z && m(Z);
          }
        }
      }
    }
    function T(H) {
      if (!d.value)
        return;
      const Z = H.target;
      s.value?.contains(Z) || i.value?.contains(Z) || _();
    }
    function te() {
      d.value && S();
    }
    return me(y, (H) => {
      b.value > H.length - 1 && (b.value = Math.max(0, H.length - 1));
    }), ve(() => {
      document.addEventListener("pointerdown", T), window.addEventListener("scroll", te, !0), window.addEventListener("resize", te);
    }), ke(() => {
      document.removeEventListener("pointerdown", T), window.removeEventListener("scroll", te, !0), window.removeEventListener("resize", te);
    }), (H, Z) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: I
    }, [
      o("div", {
        class: P(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          d.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": d.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: p
      }, [
        (t(!0), a(z, null, V(h.value, (N) => (t(), a("span", {
          key: N.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          R(c(N.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${N.label}`,
            onClick: he((W) => v(N.value), ["stop"])
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
            class: P(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
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
            d.value ? (t(), a("div", {
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
                  ref: u,
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
                (t(!0), a(z, null, V(y.value, (N, W) => (t(), a("button", {
                  key: N.value,
                  type: "button",
                  class: P(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", W === b.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": W === b.value,
                  onMouseenter: (J) => b.value = W,
                  onClick: (J) => m(N)
                }, c(N.label), 43, es))), 128)),
                y.value.length === 0 ? (t(), a("p", ts, [
                  C.value ? (t(), a(z, { key: 0 }, [
                    R("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), a(z, { key: 1 }, [
                    R("Nothing matches “" + c(f.value) + "”.", 1)
                  ], 64)) : (t(), a(z, { key: 2 }, [
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
      class: P(n.value)
    }, {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), os = { class: "flex items-center gap-2" }, ss = ["onUpdate:modelValue", "onChange"], rs = ["value"], is = ["onUpdate:modelValue"], us = ["value"], ds = ["onUpdate:modelValue"], cs = ["onUpdate:modelValue", "multiple"], fs = ["value"], ms = ["onUpdate:modelValue", "type"], ps = ["aria-label", "onClick"], vs = { class: "flex items-center gap-2" }, gs = /* @__PURE__ */ O({
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
    const u = (p) => "rules" in p, d = x(() => Object.keys(n.fields));
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
      const p = d.value[0];
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
    const S = x(() => n.depth + 1 < n.maxDepth);
    function M() {
      i.value = s(), g(), r("apply", null);
    }
    function _() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (p, m) => {
      const v = Gt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: P(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
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
        (t(!0), a(z, null, V(i.value.rules, (A, I) => (t(), a("div", {
          key: I,
          class: "flex items-start gap-2"
        }, [
          u(A) ? (t(), D(v, {
            key: 0,
            modelValue: i.value.rules[I],
            "onUpdate:modelValue": [(T) => i.value.rules[I] = T, g],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(z, { key: 1 }, [
            pe(o("select", {
              "onUpdate:modelValue": (T) => A.field = T,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (T) => C(A)
            }, [
              (t(!0), a(z, null, V(d.value, (T) => (t(), a("option", {
                key: T,
                value: T
              }, c(e.fields[T].label), 9, rs))), 128))
            ], 40, ss), [
              [We, A.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (T) => A.operator = T,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: g
            }, [
              (t(!0), a(z, null, V(f(A.field), (T) => (t(), a("option", {
                key: T,
                value: T
              }, c(b[T] ?? T), 9, us))), 128))
            ], 40, is), [
              [We, A.operator]
            ]),
            A.field && e.fields[A.field]?.kind === "boolean" ? pe((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (T) => A.value = T,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: g
            }, [...m[3] || (m[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, ds)), [
              [We, A.value]
            ]) : A.field && e.fields[A.field]?.options?.length ? pe((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (T) => A.value = T,
              multiple: e.fields[A.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: g
            }, [
              (t(!0), a(z, null, V(e.fields[A.field].options, (T) => (t(), a("option", {
                key: T,
                value: T
              }, c(T), 9, fs))), 128))
            ], 40, cs)), [
              [We, A.value]
            ]) : pe((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (T) => A.value = T,
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
            "aria-label": `Remove ${u(A) ? "group" : "rule"}`,
            onClick: (T) => y(I)
          }, " × ", 8, ps)
        ]))), 128)),
        o("div", vs, [
          E(ue, {
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
          S.value ? (t(), D(ue, {
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
          e.root ? (t(), a(z, { key: 1 }, [
            m[8] || (m[8] = o("span", { class: "flex-1" }, null, -1)),
            E(ue, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: M
            }, {
              default: L(() => [...m[6] || (m[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            E(ue, {
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
    return (i, u) => (t(), D(k(Mn), re({ "data-slot": "sheet" }, k(s)), {
      default: L((d) => [
        K(i.$slots, "default", Oe(Ne(d)))
      ]),
      _: 3
    }, 16));
  }
});
function ne(...e) {
  return fl(cl(e));
}
function y3(e) {
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
    return (u, d) => (t(), D(k(Zt), null, {
      default: L(() => [
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
        }, { ...u.$attrs, ...k(i) }), {
          default: L(() => [
            K(u.$slots, "default"),
            E(k(Qe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                E(k(Yt), { class: "size-4" }),
                d[0] || (d[0] = o("span", { class: "sr-only" }, "Close", -1))
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
}, ur = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, dr = {
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
      (q) => {
        q !== i.value && (i.value = q);
      }
    );
    let u;
    me(i, (q) => {
      clearTimeout(u), u = setTimeout(() => {
        q !== n.search && r("update:search", q);
      }, 250);
    });
    const d = U({ ...n.filters });
    me(
      () => n.filters,
      (q) => {
        d.value = { ...q };
      },
      { deep: !0 }
    );
    const f = x(
      () => n.filterSchema.filter(
        (q) => n.filters[q.key] !== null && n.filters[q.key] !== void 0
      ).length
    ), b = x(() => JSON.stringify(d.value) !== JSON.stringify(n.filters)), g = x(() => n.search !== "" || f.value > 0), h = x(() => n.indicators.length ? n.indicators : n.filterSchema.filter((q) => n.filters[q.key] !== null && n.filters[q.key] !== void 0).map((q) => ({
      key: q.key,
      label: `${q.label}: ${String(n.filters[q.key])}`,
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
      const B = d.value[q.key];
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
    function p(q, B) {
      d.value = { ...d.value, [q.key]: B === "" ? null : B };
    }
    function m(q, B) {
      const F = d.value[q.key];
      if (typeof F != "string" || !F.includes(".."))
        return "";
      const [j, X] = F.split("..");
      return B === "from" ? j ?? "" : X ?? "";
    }
    function v(q, B, F) {
      const j = B === "from" ? F : m(q, "from"), X = B === "to" ? F : m(q, "to");
      d.value = {
        ...d.value,
        [q.key]: j && X ? `${j}..${X}` : null
      };
    }
    function A(q, B, F) {
      const j = B === "from" ? F : m(q, "from"), X = B === "to" ? F : m(q, "to");
      d.value = {
        ...d.value,
        [q.key]: j || X ? `${j}..${X}` : null
      };
    }
    function I(q) {
      r("apply-filters", { ...d.value }), q();
    }
    function T(q, B) {
      d.value[q] = B, r("apply-filters", { ...d.value });
    }
    function te() {
      d.value = Object.fromEntries(n.filterSchema.map((q) => [q.key, null]));
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
    const Z = U(new Set(n.hidden));
    me(
      () => n.hidden,
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
      r("apply-filters", { ...d.value }), s.value = !1;
    }
    function G() {
      i.value = "", r("clear");
    }
    return (q, B) => (t(), a("div", bs, [
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
          f.value ? (t(), a("span", $s, c(f.value), 1)) : $("", !0)
        ]),
        E(en, {
          open: s.value,
          "onUpdate:open": B[4] || (B[4] = (F) => s.value = F)
        }, {
          default: L(() => [
            E(tn, {
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
                    e.filterSchema.length ? (t(), a("div", Ss, [
                      o("div", { class: "flex items-center justify-between" }, [
                        B[12] || (B[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: te
                        }, " Reset ")
                      ]),
                      (t(!0), a(z, null, V(e.filterSchema, (F) => (t(), a("div", {
                        key: `mobile-${F.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", Ms, c(F.label), 1),
                        F.type !== "multiselect" && F.type !== "querybuilder" && F.type !== "daterange" && F.type !== "numberrange" && F.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: d.value[F.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (j) => p(F, j.target.value)
                        }, [
                          B[13] || (B[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), a(z, null, V(H(F), (j) => (t(), a("option", {
                            key: String(j.value),
                            value: j.value
                          }, c(j.label), 9, _s))), 128))
                        ], 40, Bs)) : $("", !0)
                      ]))), 128))
                    ])) : $("", !0),
                    o("div", As, [
                      B[14] || (B[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", Ps, [
                        (t(!0), a(z, null, V(e.columns, (F) => (t(), a("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (j) => N(F.key)
                        }, [
                          o("span", null, c(F.label), 1),
                          Z.value.has(F.key) ? $("", !0) : (t(), a("span", Os, "On"))
                        ], 8, zs))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", Ls, [
                      B[15] || (B[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", js, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: B[2] || (B[2] = (F) => {
                            w(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), a(z, null, V(e.groups, (F) => (t(), a("button", {
                          key: F.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (j) => {
                            w(F.key), s.value = !1;
                          }
                        }, c(F.label), 9, Vs))), 128))
                      ])
                    ])) : $("", !0)
                  ]),
                  o("div", Ds, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !b.value,
                      onClick: J
                    }, " Apply filters ", 8, Ts)) : $("", !0),
                    g.value ? (t(), a("button", {
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
          i.value ? (t(), a("button", {
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
        e.filterSchema.length ? (t(), D(qe, {
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
              f.value ? (t(), a("span", Rs, c(f.value), 1)) : $("", !0)
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
              (t(!0), a(z, null, V(e.filterSchema, (j) => (t(), a("div", {
                key: j.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Hs, c(j.label), 1),
                C(j) ? (t(), D(Qt, {
                  key: 0,
                  "model-value": M(j),
                  options: _(j),
                  placeholder: `Any ${j.label.toLowerCase()}`,
                  "onUpdate:modelValue": (X) => d.value[j.key] = X.length ? X : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : j.type === "querybuilder" ? (t(), D(gs, {
                  key: 1,
                  "model-value": d.value[j.key] ?? null,
                  fields: j.fields ?? {},
                  operators: j.operators ?? {},
                  "max-depth": j.maxDepth ?? 5,
                  onApply: (X) => T(j.key, X)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : j.type === "daterange" ? (t(), a(z, { key: 2 }, [
                  o("select", {
                    value: typeof d.value[j.key] == "string" && !String(d.value[j.key]).includes("..") ? d.value[j.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (X) => p(j, X.target.value)
                  }, [
                    B[21] || (B[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(z, null, V(H(j), (X) => (t(), a("option", {
                      key: String(X.value),
                      value: X.value
                    }, c(X.label), 9, qs))), 128))
                  ], 40, Ks),
                  o("div", Gs, [
                    o("input", {
                      type: "date",
                      value: m(j, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (X) => v(
                        j,
                        "from",
                        X.target.value
                      )
                    }, null, 40, Ws),
                    o("input", {
                      type: "date",
                      value: m(j, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (X) => v(
                        j,
                        "to",
                        X.target.value
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
                    onChange: (X) => A(
                      j,
                      "from",
                      X.target.value
                    )
                  }, null, 40, Ys),
                  o("input", {
                    type: "number",
                    value: m(j, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (X) => A(
                      j,
                      "to",
                      X.target.value
                    )
                  }, null, 40, Xs)
                ])) : j.type === "boolean" ? (t(), a("div", Qs, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": d.value[j.key] === !0,
                    class: P([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      d.value[j.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (X) => p(j, d.value[j.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: P(["bg-background absolute top-0.5 size-4 rounded-full transition-all", d.value[j.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, er),
                  o("span", tr, c(j.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: P([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      d.value[j.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (X) => p(j, d.value[j.key] === !1 ? null : !1)
                  }, c(j.falseLabel ?? "No") + " only ", 11, nr)
                ])) : (t(), a("select", {
                  key: 5,
                  value: d.value[j.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (X) => p(j, X.target.value)
                }, [
                  B[22] || (B[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), a(z, null, V(H(j), (X) => (t(), a("option", {
                    key: String(X.value),
                    value: X.value
                  }, c(X.label), 9, lr))), 128))
                ], 40, ar))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !b.value,
              onClick: (j) => I(F)
            }, " Apply filters ", 8, or)
          ]),
          _: 1
        })) : $("", !0),
        E(qe, { "dismiss-on-panel-click": !1 }, {
          trigger: L(() => [...B[24] || (B[24] = [
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
            B[27] || (B[27] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", sr, [
              (t(!0), a(z, null, V(e.columns, (F) => (t(), a("button", {
                key: F.key,
                type: "button",
                class: P(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (j) => N(F.key)
              }, [
                Z.value.has(F.key) ? (t(), a("span", ur)) : (t(), a("svg", ir, [...B[25] || (B[25] = [
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
        e.layouts.length > 1 ? (t(), a("div", dr, [
          (t(!0), a(z, null, V(e.layouts, (F) => (t(), a("button", {
            key: F,
            type: "button",
            class: P(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === F ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === F,
            "aria-label": F === "cards" ? "Card layout" : "Table layout",
            title: F === "cards" ? "Cards" : "Table",
            onClick: (j) => r("layout", F)
          }, [
            F === "table" ? (t(), a("svg", fr, [...B[28] || (B[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), a("svg", mr, [...B[29] || (B[29] = [
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
        e.groups.length ? (t(), D(qe, {
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
              (t(!0), a(z, null, V(e.groups, (j) => (t(), a("button", {
                key: j.key,
                type: "button",
                class: P(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === j.key ? "text-primary font-medium" : ""]),
                onClick: (X) => {
                  w(j.key), F();
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
          onClick: G
        }, " Clear ")) : $("", !0),
        e.loading ? (t(), a("span", yr, "Loading…")) : $("", !0)
      ]),
      h.value.length ? (t(), a("div", xr, [
        (t(!0), a(z, null, V(h.value, (F) => (t(), a("span", {
          key: F.key + F.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${F.key}`
        }, [
          R(c(F.label) + " ", 1),
          F.removable !== !1 ? (t(), a("button", {
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
        h.value.length > 1 ? (t(), a("button", {
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
}, jr = {
  key: 0,
  class: "flex justify-center"
}, Vr = ["disabled"], Dr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Tr = ["href"], x3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = qt(), i = x(() => n.columns.filter((w) => w.type !== "image")), u = x(() => !!s.actions), d = x(() => !!n.title || u.value), f = x(() => n.filterSchema.length > 0), b = x(
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
            o("thead", Pr, [
              o("tr", null, [
                (t(!0), a(z, null, V(i.value, (C) => (t(), a("th", {
                  key: C.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, c(C.label), 1))), 128))
              ])
            ]),
            o("tbody", zr, [
              (t(!0), a(z, null, V(e.rows, (C, S) => (t(), a("tr", {
                key: C.id ?? S,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), a(z, null, V(i.value, (M) => (t(), a("td", {
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
                    e.recordBase && C.id != null && M === i.value[0] ? (t(), a("a", {
                      key: 0,
                      href: `${e.recordBase}/${C.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, c(g(M, C[M.key])), 9, Or)) : h(C[M.key]) ? (t(), a("span", Lr, " None ")) : (t(), a(z, { key: 2 }, [
                      R(c(g(M, C[M.key])), 1)
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
      d.value ? {
        name: "title",
        fn: L(() => [
          o("div", Cr, [
            e.title ? (t(), a("h3", Sr, c(e.title), 1)) : $("", !0)
          ]),
          u.value ? (t(), a("div", Mr, [
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
            }, " Open the full list ", 8, Tr)) : (t(), a(z, { key: 1 }, [
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
    function u(f) {
      return n.failedStep !== null ? f < n.failedStep : f < n.activeStep;
    }
    function d(f) {
      return n.failedStep === f;
    }
    return (f, b) => (t(), a("ol", Er, [
      (t(!0), a(z, null, V(e.steps, (g, h) => (t(), a("li", {
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
              class: P(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              d(h) ? (t(), a("svg", Ir, [...b[0] || (b[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(h) ? (t(), a("svg", Fr, [...b[1] || (b[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(z, { key: 2 }, [
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
function k3(e) {
  return ct.has(e);
}
function $3() {
  return [...ct.keys()].sort();
}
function w3() {
  ct.clear();
}
class Gr extends Error {
  fieldErrors;
  constructor(l, n = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function C3(e) {
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
const S3 = "text-sm text-muted-foreground font-normal", M3 = "text-xs text-muted-foreground font-normal", gt = "text-xs text-muted-foreground font-normal leading-snug", Jr = "text-foreground font-normal", Yr = "placeholder:text-muted-foreground placeholder:font-normal", Ue = `${Jr} ${Yr}`, Xr = {
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
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), D(it, {
      open: e.open,
      title: e.title,
      description: e.description,
      size: "form",
      busy: e.processing,
      onClose: d[1] || (d[1] = (f) => r("close"))
    }, {
      footer: L(() => [
        E(ue, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: d[0] || (d[0] = (f) => r("close"))
        }, {
          default: L(() => [...d[2] || (d[2] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(ue, {
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
          (t(!0), a(z, null, V(e.fields, (f) => (t(), D(Xe, {
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
    return (u, d) => (t(), D(k(ga), re({ "data-slot": "checkbox" }, k(i), {
      class: k(ne)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: L((f) => [
        E(k(ha), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            K(u.$slots, "default", Oe(Ne(f)), () => [
              E(k(On), { class: "size-3.5" })
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
    return (i, u) => (t(), D(k(ba), re({ "data-slot": "switch" }, k(s), {
      class: k(ne)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: L(() => [
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
}, ii = ["src"], ui = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, di = { class: "min-w-0 flex-1" }, ci = { class: "block truncate text-sm font-medium" }, fi = { class: "text-muted-foreground text-xs font-normal" }, mi = ["href"], pi = {
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
    const n = e, r = l, s = U(null), i = U(!1), u = U(null), d = U(null), f = U(null), b = x(() => n.accept.map((m) => `.${m}`).join(",")), g = x(() => f.value ?? n.modelValue?.url ?? null), h = x(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${w(n.maxKilobytes * 1024)}`);
    function w(m) {
      if (!m)
        return "";
      const v = ["B", "KB", "MB", "GB"];
      let A = m, I = 0;
      for (; A >= 1024 && I < v.length - 1; )
        A /= 1024, I++;
      return `${A.toFixed(A < 10 && I > 0 ? 1 : 0)} ${v[I]}`;
    }
    function y(m) {
      return m.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(m) {
      return n.accept.length && !n.accept.includes(y(m.name)) ? `${y(m.name).toUpperCase() || "That"} files are not accepted here.` : m.size > n.maxKilobytes * 1024 ? `That file is ${w(m.size)}; the limit is ${w(n.maxKilobytes * 1024)}.` : null;
    }
    async function S(m) {
      const v = m?.[0];
      if (!(!v || n.disabled) && (d.value = C(v), !d.value)) {
        M(), n.image && v.type.startsWith("image/") && (f.value = URL.createObjectURL(v)), u.value = 0;
        try {
          const A = await n.upload(v, (I) => {
            u.value = I;
          });
          r("update:modelValue", A);
        } catch (A) {
          d.value = A instanceof Error ? A.message : "The upload failed.", M();
        } finally {
          u.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function M() {
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function _() {
      const m = n.modelValue;
      M(), d.value = null, r("update:modelValue", null), m && !m.url && n.discard && await n.discard(m.value).catch(() => {
      });
    }
    function p(m) {
      i.value = !1, S(m.dataTransfer?.files ?? null);
    }
    return (m, v) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", ri, [
        e.image && g.value ? (t(), a("img", {
          key: 0,
          src: g.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ii)) : (t(), a("span", ui, c(y(e.modelValue.name) || "file"), 1)),
        o("span", di, [
          o("span", ci, c(e.modelValue.name), 1),
          o("span", fi, [
            R(c(w(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(z, { key: 0 }, [
              v[4] || (v[4] = R(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, mi)
            ], 64)) : (t(), a(z, { key: 1 }, [
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
        class: P(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
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
          onChange: v[0] || (v[0] = (A) => S(A.target.files))
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
          u.value === null ? (t(), a("span", ai, "Drop a file or click to choose")) : (t(), a("span", li, "Uploading…"))
        ]),
        o("span", oi, c(h.value), 1),
        u.value !== null ? (t(), a("span", si, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${u.value}%` })
          }, null, 4)
        ])) : $("", !0)
      ], 34)),
      d.value ? (t(), a("p", pi, c(d.value), 1)) : $("", !0)
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
    const u = U(d(n.modelValue));
    function d(S) {
      return S ? Object.entries(S).map(([M, _]) => ({
        uid: i++,
        key: M,
        value: _ ?? ""
      })) : [];
    }
    me(
      () => n.modelValue,
      (S) => {
        JSON.stringify(S ?? null) !== JSON.stringify(f()) && (u.value = d(S));
      }
    );
    function f() {
      const S = {};
      for (const M of u.value) {
        const _ = M.key.trim();
        _ !== "" && (S[_] = M.value);
      }
      return Object.keys(S).length ? S : null;
    }
    function b() {
      r("update:modelValue", f());
    }
    const g = x(() => {
      const S = /* @__PURE__ */ new Map();
      for (const M of u.value) {
        const _ = M.key.trim();
        _ !== "" && S.set(_, (S.get(_) ?? 0) + 1);
      }
      return new Set([...S.entries()].filter(([, M]) => M > 1).map(([M]) => M));
    }), h = x(
      () => new Set(
        u.value.map((S) => S.key.trim()).filter((S) => S !== "" && !s.test(S))
      )
    ), w = x(() => n.maxPairs !== null && u.value.length >= n.maxPairs);
    function y() {
      w.value || n.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function C(S) {
      u.value = u.value.filter((M) => M.uid !== S), b();
    }
    return (S, M) => (t(), a("div", vi, [
      u.value.length ? (t(), a("div", gi, [
        o("div", hi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          M[0] || (M[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(z, null, V(u.value, (_) => (t(), a("div", {
          key: _.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", bi, [
            pe(o("input", {
              "onUpdate:modelValue": (p) => _.key = p,
              type: "text",
              class: P([
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
        e.maxPairs !== null ? (t(), a("p", Bi, c(u.value.length) + " of " + c(e.maxPairs), 1)) : $("", !0)
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
    const u = [
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
    ], d = x(() => u.filter((C) => n.toolbar.includes(C.id))), f = x(() => n.toolbar.includes("link")), b = U(0);
    function g() {
      const C = s.value?.innerHTML ?? "", S = (s.value?.innerText ?? "").trim();
      b.value = S.length;
      const M = S === "" ? null : C;
      i = M, r("update:modelValue", M);
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
      const S = C.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, S), g();
    }
    return ve(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", b.value = s.value.innerText.trim().length);
    }), me(
      () => n.modelValue,
      (C) => {
        C !== i && s.value && (s.value.innerHTML = C ?? "", b.value = s.value.innerText.trim().length);
      }
    ), (C, S) => (t(), a("div", Ai, [
      o("div", Pi, [
        (t(!0), a(z, null, V(d.value, (M) => (t(), a("button", {
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
          (t(), a("svg", Oi, [
            o("path", {
              d: M.path
            }, null, 8, Li)
          ]))
        ], 40, zi))), 128)),
        f.value ? (t(), a("button", {
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
        ])], 40, ji)) : $("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: P(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
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
    const n = e, r = l, s = x(() => !!n.field.multiple), i = x(() => !!n.field.grouped), u = x(() => !!n.field.hiddenLabels), d = x(() => n.field.inline !== !1), f = x(
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
    }, S = {
      primary: "border-input hover:border-primary/60 hover:bg-primary/5",
      success: "border-input hover:border-success/60 hover:bg-success/5",
      warning: "border-input hover:border-warning/60 hover:bg-warning/5",
      danger: "border-input hover:border-destructive/60 hover:bg-destructive/5",
      info: "border-input hover:border-info/60 hover:bg-info/5",
      neutral: "border-input hover:border-foreground/40 hover:bg-muted"
    };
    function M(m) {
      const v = h(m), A = b(m);
      return [
        Se,
        "inline-flex items-center justify-center gap-1.5 border px-3 py-1.5 text-sm font-medium transition-colors",
        i.value ? "rounded-none first:rounded-l-md last:rounded-r-md -ml-px first:ml-0" : "rounded-md",
        A ? C[v] ?? C.primary : S[v] ?? S.primary,
        n.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ].join(" ");
    }
    const _ = x(() => {
      if (!(d.value || i.value) && n.field.columns && n.field.columns > 1)
        return { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` };
    }), p = x(() => i.value ? "inline-flex flex-wrap" : d.value ? "flex flex-wrap gap-2" : "grid gap-2");
    return (m, v) => (t(), a("div", {
      role: s.value ? "group" : "radiogroup",
      class: P(p.value),
      style: se(_.value),
      "data-test": "toggle-buttons-field"
    }, [
      (t(!0), a(z, null, V(e.options, (A) => (t(), a("label", {
        key: String(A.value),
        class: P(M(A)),
        title: y(A)
      }, [
        o("input", {
          class: "sr-only",
          type: s.value ? "checkbox" : "radio",
          name: s.value ? void 0 : `f-${e.field.key}`,
          value: A.value,
          checked: b(A),
          disabled: e.disabled,
          "aria-label": u.value ? A.label : void 0,
          onChange: (I) => g(A)
        }, null, 40, Ni),
        w(A) ? (t(), a("svg", Ri, [
          o("path", {
            d: w(A)
          }, null, 8, Ui)
        ])) : $("", !0),
        u.value ? $("", !0) : (t(), a("span", Hi, c(A.label), 1))
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
}, Xi = ["id", "value", "disabled"], Qi = ["value"], eu = {
  key: 2,
  class: "relative"
}, tu = ["disabled"], nu = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, au = { class: "max-h-56 overflow-y-auto p-1" }, lu = ["onClick"], ou = {
  key: 8,
  class: "relative"
}, su = ["disabled", "aria-invalid"], ru = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, iu = { class: "max-h-56 overflow-y-auto p-1" }, uu = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, du = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, cu = ["onClick"], fu = ["id", "value", "disabled", "aria-invalid"], mu = ["value"], pu = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, vu = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, gu = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], hu = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, bu = ["aria-label", "disabled"], yu = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], xu = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, ku = ["aria-label", "disabled"], $u = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], wu = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Cu = ["aria-label", "disabled"], Su = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Mu = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Bu = ["aria-label", "disabled"], _u = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Au = ["disabled", "aria-pressed", "onClick"], Pu = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, zu = ["title", "disabled", "onClick"], Ou = ["href"], Lu = {
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
    const n = cn(() => import("./PkRepeater-J84jGe3T.js")), r = cn(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = U(!1), d = U(""), f = U([]), b = U(!1), g = U(null);
    let h;
    me(d, (oe) => {
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
      if (!(s.processing || s.field.disabled) && (u.value = !0, f.value.length === 0 && s.searchOptions)) {
        b.value = !0;
        try {
          f.value = await s.searchOptions("");
        } finally {
          b.value = !1;
        }
      }
    }
    function y(oe) {
      g.value = oe.label, i("change", oe.value), u.value = !1, d.value = "";
    }
    function C() {
      g.value = null, i("change", null);
    }
    const S = yt("panelPicker", null), M = yt("panelCreateOption", null), _ = U(!1), p = U(!1), m = U({}), v = U(null), A = x(() => Wr(s.field)), I = x(() => Zr(s.field));
    function T() {
      m.value = {}, v.value = null, _.value = !0, u.value = !1;
    }
    function te() {
      p.value || (_.value = !1, m.value = {}, v.value = null);
    }
    async function H(oe) {
      if (M) {
        p.value = !0, m.value = {}, v.value = null;
        try {
          const Q = await M.run(s.field.key, { ...oe });
          y(Q), _.value = !1;
        } catch (Q) {
          Q instanceof Gr ? (m.value = Q.fieldErrors, v.value = Object.keys(Q.fieldErrors).length === 0 ? Q.message : null) : v.value = Q instanceof Error ? Q.message : "Could not create that option.";
        } finally {
          p.value = !1;
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
      g.value = oe.label, G(oe.value), u.value = !1, d.value = "";
    }
    ke(() => clearTimeout(h));
    const B = x(() => qr(s.field.type)), F = x(
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
    const X = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Ue} ${Se}`, ge = `bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 ${Ue}`;
    function ye(oe) {
      const Q = document.getElementById(`f-${s.field.key}`);
      if (!(Q instanceof HTMLTextAreaElement) && !(Q instanceof HTMLInputElement))
        return;
      const ae = Q.selectionStart ?? Q.value.length, Ce = Q.selectionEnd ?? ae;
      Q.setRangeText(oe, ae, Ce, "end"), Q.dispatchEvent(new Event("input", { bubbles: !0 })), Q.focus();
    }
    return (oe, Q) => (t(), a(z, null, [
      e.field.type === "hidden" ? (t(), a(z, { key: 0 }, [], 64)) : (t(), a("div", qi, [
        o("div", Gi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: P(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            R(c(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", Zi, "*")) : $("", !0)
          ], 10, Wi),
          e.field.hint ? (t(), a("span", {
            key: 0,
            class: P(["flex items-center gap-1", k(gt)])
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
        B.value ? (t(), D(_e(B.value), {
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
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "child-options": e.childOptions,
          "onUpdate:modelValue": Q[3] || (Q[3] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "collapsible", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(k(r), {
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
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : N.value.length ? (t(), a("div", Yi, [
          e.field.morphTypeSelect === "toggle-buttons" ? (t(), D(En, {
            key: 0,
            field: { key: `${e.field.key}-type`, grouped: !0, inline: !0 },
            "model-value": W.value.type ?? null,
            options: N.value.map((ae) => ({ value: ae.value, label: ae.label })),
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Q[8] || (Q[8] = (ae) => J(ae == null ? "" : String(ae)))
          }, null, 8, ["field", "model-value", "options", "disabled"])) : (t(), a("select", {
            key: 1,
            id: `f-${e.field.key}-type`,
            value: W.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", k(Se)]),
            onChange: Q[9] || (Q[9] = (ae) => J(ae.target.value))
          }, [
            Q[25] || (Q[25] = o("option", { value: "" }, "Type", -1)),
            (t(!0), a(z, null, V(N.value, (ae) => (t(), a("option", {
              key: ae.value,
              value: ae.value
            }, c(ae.label), 9, Qi))), 128))
          ], 42, Xi)),
          W.value.type && e.searchOptions ? (t(), a("div", eu, [
            o("button", {
              type: "button",
              class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
              disabled: e.field.disabled || e.processing,
              onClick: w
            }, [
              o("span", {
                class: P(g.value || W.value.id ? "" : "text-muted-foreground")
              }, c(g.value ?? (W.value.id ? String(W.value.id) : "Search…")), 3)
            ], 10, tu),
            u.value ? (t(), a("div", nu, [
              pe(o("input", {
                "onUpdate:modelValue": Q[10] || (Q[10] = (ae) => d.value = ae),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Ae, d.value]
              ]),
              o("div", au, [
                (t(!0), a(z, null, V(f.value, (ae) => (t(), a("button", {
                  key: String(ae.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => q(ae)
                }, c(ae.label), 9, lu))), 128))
              ])
            ])) : $("", !0),
            u.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: Q[11] || (Q[11] = (ae) => u.value = !1)
            })) : $("", !0)
          ])) : $("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", ou, [
          o("button", {
            type: "button",
            class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: w
          }, [
            o("span", {
              class: P(g.value || e.value ? "" : "text-muted-foreground")
            }, c(g.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he(C, ["stop"])
            }, " ✕ ")) : $("", !0)
          ], 10, su),
          u.value ? (t(), a("div", ru, [
            pe(o("input", {
              "onUpdate:modelValue": Q[12] || (Q[12] = (ae) => d.value = ae),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Ae, d.value]
            ]),
            o("div", iu, [
              b.value ? (t(), a("p", uu, " Searching… ")) : f.value.length === 0 ? (t(), a("p", du, " No matches ")) : $("", !0),
              (t(!0), a(z, null, V(f.value, (ae) => (t(), a("button", {
                key: String(ae.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => y(ae)
              }, c(ae.label), 9, cu))), 128)),
              e.field.createOption && k(M) ? (t(), a("button", {
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
          u.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: Q[13] || (Q[13] = (ae) => u.value = !1)
          })) : $("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", k(Se)]),
          onChange: Q[14] || (Q[14] = (ae) => i("change", ae.target.value || null))
        }, [
          Q[27] || (Q[27] = o("option", { value: "" }, "-", -1)),
          (t(!0), a(z, null, V(e.options, (ae) => (t(), a("option", {
            key: String(ae.value),
            value: ae.value
          }, c(ae.label), 9, mu))), 128))
        ], 42, fu)) : e.field.type === "toggle" ? (t(), a("label", pu, [
          E(k(Ze), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Q[15] || (Q[15] = (ae) => i("change", ae))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(k(gt))
          }, c(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), a("label", vu, [
          E(k(ei), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Q[16] || (Q[16] = (ae) => i("change", ae === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(k(gt))
          }, c(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !F.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: P(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", k(Ue), k(Se)]),
          onInput: Q[17] || (Q[17] = (ae) => i("change", ae.target.value))
        }, null, 42, gu)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: P([
            "border-input flex overflow-hidden rounded-md border",
            k(pn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", hu, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: Q[18] || (Q[18] = (ae) => j(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, bu)) : $("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: P(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", k(Ue)]),
            onInput: Q[19] || (Q[19] = (ae) => i("change", ae.target.value))
          }, null, 42, yu),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", xu, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Q[20] || (Q[20] = (ae) => j(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, ku)) : $("", !0)
        ], 2)) : F.value ? (t(), a("div", {
          key: 15,
          class: P([
            "border-input flex h-9 overflow-hidden rounded-md border",
            k(pn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", wu, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: Q[22] || (Q[22] = (ae) => j(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Cu)) : $("", !0),
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
            onInput: Q[23] || (Q[23] = (ae) => i("change", ae.target.value))
          }, null, 40, Su),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Mu, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Q[24] || (Q[24] = (ae) => j(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Bu)) : $("", !0)
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
          class: P(X),
          onInput: Q[21] || (Q[21] = (ae) => i("change", ae.target.value))
        }, null, 40, $u)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", _u, [
          (t(!0), a(z, null, V(e.field.presets, (ae) => (t(), a("button", {
            key: ae,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: P([
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
          }, c(ae), 11, Au))), 128))
        ])) : $("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", Pu, [
          (t(!0), a(z, null, V(e.field.chips, (ae, Ce) => (t(), a("button", {
            key: Ce,
            type: "button",
            title: ae,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (un) => ye(String(Ce))
          }, c(Ce), 9, zu))), 128))
        ])) : $("", !0),
        Z.value ? (t(), a("a", {
          key: 18,
          href: Z.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Ou)) : $("", !0),
        e.error ? (t(), a("p", Lu, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", {
          key: 20,
          class: P(k(gt))
        }, c(e.field.help), 3)) : $("", !0)
      ])),
      e.field.createOption && k(M) ? (t(), D(Qr, {
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
}), ju = { class: "flex min-w-0 items-start gap-2.5" }, Vu = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, Du = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, Tu = ["d"], Eu = { class: "min-w-0" }, Iu = { class: "text-sm font-semibold" }, Fu = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Nu = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, Ru = { class: "border-b px-4 py-3.5 sm:px-5" }, Uu = { class: "text-sm font-semibold" }, Hu = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ku = {
  key: 4,
  class: "min-w-0 space-y-4"
}, qu = {
  key: 7,
  class: "flex flex-col gap-3"
}, Gu = { class: "text-sm font-medium" }, Wu = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Zu = {
  key: 0,
  class: "mb-1 font-medium"
}, Ju = ["onClick"], Yu = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Xu = { class: "flex items-center justify-between gap-3 border-t p-4" }, Qu = ["disabled"], In = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(!n.node.collapsed), i = U(0), u = U(0), d = x(
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
    function S(_) {
      if (_.hidden)
        return !1;
      const p = _.visibleWhen;
      return p ? n.values[p.field] == p.value : !0;
    }
    function M(_) {
      if (n.upload)
        return (p, m) => n.upload(_, p, m);
    }
    return (_, p) => {
      const m = Gt("SchemaNode", !0);
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
        "search-options": e.node.searchable && e.searchOptions ? (v) => e.searchOptions(e.node.key, v) : void 0,
        upload: M(e.node.key),
        discard: e.discard,
        onChange: p[0] || (p[0] = (v) => r("change", e.node.key, v)),
        onAffixAction: p[1] || (p[1] = (v) => r("affix-action", e.node.key, v))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && S(e.node) ? (t(), a("section", {
        key: 1,
        class: P(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: P(["flex items-start justify-between gap-3", [
            f.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: p[2] || (p[2] = (v) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", ju, [
            e.node.icon ? (t(), a("div", Vu, [
              (t(), a("svg", Du, [
                o("path", {
                  d: k(ce)(e.node.icon)
                }, null, 8, Tu)
              ]))
            ])) : $("", !0),
            o("div", Eu, [
              o("h3", Iu, c(e.node.label), 1),
              e.node.description ? (t(), a("p", Fu, c(e.node.description), 1)) : $("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), a("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: P(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...p[24] || (p[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : $("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: P(["grid grid-cols-1 gap-4", [h.value, f.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(z, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
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
            class: P(v.span && v.span >= 2 ? "sm:col-span-2" : ""),
            onChange: p[3] || (p[3] = (I, T) => r("change", I, T)),
            onAffixAction: p[4] || (p[4] = (I, T) => r("affix-action", I, T))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "card" && S(e.node) ? (t(), a("section", Nu, [
        o("header", Ru, [
          o("h3", Uu, c(e.node.title), 1),
          e.node.description ? (t(), a("p", Hu, c(e.node.description), 1)) : $("", !0)
        ]),
        o("div", {
          class: P(["grid grid-cols-1 gap-4 px-4 py-4", h.value])
        }, [
          (t(!0), a(z, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
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
            onChange: p[5] || (p[5] = (I, T) => r("change", I, T)),
            onAffixAction: p[6] || (p[6] = (I, T) => r("affix-action", I, T))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && S(e.node) ? (t(), a("div", {
        key: 3,
        class: P(["grid grid-cols-1 gap-4", w(e.node)])
      }, [
        (t(!0), a(z, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
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
          class: P(v.component === "column" ? y(v.span) : ""),
          onChange: p[7] || (p[7] = (I, T) => r("change", I, T)),
          onAffixAction: p[8] || (p[8] = (I, T) => r("affix-action", I, T))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && S(e.node) ? (t(), a("div", Ku, [
        (t(!0), a(z, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
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
          onChange: p[9] || (p[9] = (I, T) => r("change", I, T)),
          onAffixAction: p[10] || (p[10] = (I, T) => r("affix-action", I, T))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" && S(e.node) ? (t(), a("div", {
        key: 5,
        class: P(["grid grid-cols-1 gap-4", h.value])
      }, [
        (t(!0), a(z, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
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
          onChange: p[11] || (p[11] = (I, T) => r("change", I, T)),
          onAffixAction: p[12] || (p[12] = (I, T) => r("affix-action", I, T))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" && S(e.node) ? (t(), a("div", {
        key: 6,
        class: P(["flex", b.value])
      }, [
        (t(!0), a(z, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
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
          onChange: p[13] || (p[13] = (I, T) => r("change", I, T)),
          onAffixAction: p[14] || (p[14] = (I, T) => r("affix-action", I, T))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" && S(e.node) ? (t(), a("fieldset", qu, [
        o("legend", Gu, c(e.node.label), 1),
        e.node.description ? (t(), a("p", Wu, c(e.node.description), 1)) : $("", !0),
        o("div", {
          class: P(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), a(z, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
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
            onChange: p[15] || (p[15] = (I, T) => r("change", I, T)),
            onAffixAction: p[16] || (p[16] = (I, T) => r("affix-action", I, T))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" && S(e.node) ? (t(), a("div", {
        key: 8,
        role: "note",
        class: P(["rounded-lg border px-4 py-3 text-sm", g.value])
      }, [
        e.node.title ? (t(), a("p", Zu, c(e.node.title), 1)) : $("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" && S(e.node) ? (t(), a("div", {
        key: 9,
        class: P(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(z, null, V(e.node.children ?? [], (v, A) => (t(), a("button", {
            key: A,
            type: "button",
            class: P([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === A ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (I) => i.value = A
          }, [
            R(c(v.label) + " ", 1),
            C(v) ? (t(), a("span", Yu)) : $("", !0)
          ], 10, Ju))), 128))
        ], 2),
        (t(!0), a(z, null, V(e.node.children ?? [], (v, A) => pe((t(), a("div", {
          key: A,
          class: P(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, V(v.children ?? [], (I, T) => (t(), D(m, {
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
            onChange: p[17] || (p[17] = (te, H) => r("change", te, H)),
            onAffixAction: p[18] || (p[18] = (te, H) => r("affix-action", te, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, i.value === A]
        ])), 128))
      ], 2)) : e.node.component === "wizard" && S(e.node) ? (t(), a("div", {
        key: 10,
        class: P(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        E(Kr, {
          class: P(["p-4", f.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (v) => C((e.node.children ?? [])[v]),
          "onUpdate:activeStep": p[19] || (p[19] = (v) => u.value = v)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(z, null, V(e.node.children ?? [], (v, A) => pe((t(), a("div", {
          key: A,
          class: P(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, V(v.children ?? [], (I, T) => (t(), D(m, {
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
            onChange: p[20] || (p[20] = (te, H) => r("change", te, H)),
            onAffixAction: p[21] || (p[21] = (te, H) => r("affix-action", te, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, u.value === A]
        ])), 128)),
        o("div", Xu, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: p[22] || (p[22] = (v) => u.value--)
          }, " Back ", 8, Qu),
          u.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: p[23] || (p[23] = (v) => u.value++)
          }, " Next ")) : $("", !0)
        ])
      ], 2)) : $("", !0);
    };
  }
}), B3 = /* @__PURE__ */ O({
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
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), D(it, {
      open: e.open,
      title: e.title,
      size: "form",
      busy: e.processing,
      onClose: d[2] || (d[2] = (f) => r("close"))
    }, {
      footer: L(() => [
        E(ue, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: d[1] || (d[1] = (f) => r("close"))
        }, {
          default: L(() => [...d[3] || (d[3] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(ue, {
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
          (t(!0), a(z, null, V(e.form?.nodes ?? [], (f, b) => (t(), D(In, {
            key: b,
            node: f,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: d[0] || (d[0] = (g, h) => s.value[g] = h)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), ed = ["title"], td = ["aria-label"], nd = ["d"], ad = { class: "sr-only" }, ld = /* @__PURE__ */ O({
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
    }, s = x(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = x(() => l.icons[s.value] ?? l.defaultIcon), u = x(() => n[i.value] ?? n.dot), d = x(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), f = x(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (b, g) => (t(), a("span", {
      class: "inline-flex items-center",
      title: f.value
    }, [
      (t(), a("svg", {
        viewBox: "0 0 24 24",
        class: P(["size-4", d.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": f.value
      }, [
        o("path", { d: u.value }, null, 8, nd)
      ], 10, td)),
      o("span", ad, c(f.value), 1)
    ], 8, ed));
  }
}), od = ["aria-label"], sd = ["fill"], _3 = /* @__PURE__ */ O({
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
      (t(!0), a(z, null, V(n.value, (u) => (t(), a("svg", {
        key: u,
        class: "size-3.5",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
      }, [
        o("path", {
          d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
          fill: r.value >= u ? "currentColor" : "none",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linejoin": "round"
        }, null, 8, sd)
      ]))), 128))
    ], 8, od));
  }
}), rd = ["src"], id = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, ud = /* @__PURE__ */ O({
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
      const u = typeof l.src == "string" ? l.src.trim() : "";
      return u === "" ? null : /^(https?:)?\/\//i.test(u) ? u : null;
    }), i = x(() => {
      const u = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return u === "" ? "?" : u.split(/\s+/).slice(0, 2).map((d) => d[0]?.toUpperCase() ?? "").join("");
    });
    return (u, d) => (t(), a("span", {
      class: P(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (f) => n.value = !0)
      }, null, 40, rd)) : e.fallback === "initials" ? (t(), a(z, { key: 1 }, [
        R(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", id, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : $("", !0)
    ], 2));
  }
}), dd = {
  key: 0,
  class: "text-muted-foreground"
}, cd = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, fd = {
  key: 0,
  class: "font-mono text-xs"
}, md = {
  key: 1,
  class: "sr-only"
}, pd = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), a("span", dd, "-")) : (t(), a("span", cd, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", fd, c(r.value), 1)) : (t(), a("span", md, c(r.value), 1))
    ]));
  }
}), vd = { class: "inline-flex items-center" }, gd = ["checked", "aria-label"], hd = { class: "sr-only" }, A3 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("span", vd, [
      o("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, gd),
      o("span", hd, c(r.value), 1)
    ]));
  }
}), bd = {
  key: 0,
  class: "text-muted-foreground"
}, yd = {
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
    return (r, s) => n.value ? (t(), a("code", yd, c(n.value), 1)) : (t(), a("span", bd, "—"));
  }
}), xd = {
  key: 0,
  class: "font-mono text-xs"
}, kd = {
  key: 1,
  class: "text-muted-foreground"
}, $d = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, z3 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = x(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", xd, c(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", kd, "—")) : (t(), a("span", $d, c(n.value.length) + " " + c(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), wd = ["data-variant"], Cd = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ge = /* @__PURE__ */ O({
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
      () => [Cd, n[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: P(r.value)
    }, [
      K(s.$slots, "default")
    ], 10, wd));
  }
}), Sd = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Md = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, O3 = /* @__PURE__ */ O({
  __name: "TagsCell",
  props: {
    value: {},
    limit: { default: null },
    separator: { default: "," }
  },
  setup(e) {
    const l = e;
    function n(u, d) {
      if (u == null || u === "")
        return [];
      if (Array.isArray(u))
        return u.map((f) => f == null ? "" : String(f).trim()).filter((f) => f !== "");
      if (typeof u == "string") {
        const f = u.trim();
        if (f.startsWith("["))
          try {
            const b = JSON.parse(f);
            if (Array.isArray(b))
              return n(b, d);
          } catch {
          }
        return f.split(d).map((b) => b.trim()).filter((b) => b !== "");
      }
      return [String(u)];
    }
    const r = x(() => n(l.value, l.separator)), s = x(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = x(() => Math.max(0, r.value.length - s.value.length));
    return (u, d) => r.value.length === 0 ? (t(), a("span", Sd, "None")) : (t(), a("span", Md, [
      (t(!0), a(z, null, V(s.value, (f) => (t(), D(Ge, {
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
}), Bd = ["aria-checked", "aria-label", "title", "disabled"], _d = ["value", "placeholder", "disabled"], Ad = ["value", "disabled"], Pd = ["value"], L3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = x(() => n.value === !0 || n.value === 1 || n.value === "1"), i = x(() => n.busy || n.disabled), u = x(
      () => s.value ? n.onLabel ?? "Enabled" : n.offLabel ?? "Disabled"
    );
    function d() {
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
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: P(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: he(d, ["stop"])
    }, [
      o("span", {
        class: P(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Bd)) : e.type === "text" ? (t(), a("input", {
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
    }, null, 40, _d)) : (t(), a("select", {
      key: 2,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: y[1] || (y[1] = he(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), a(z, null, V(e.options, (C, S) => (t(), a("option", {
        key: S,
        value: S
      }, c(C), 9, Pd))), 128))
    ], 40, Ad));
  }
}), nn = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function zd(e) {
  return e != null && e !== "";
}
function Od(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function j3(e) {
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
      cellClass: Od(s),
      group: s.group
    }))
  ), n = x(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = n.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), f = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return nn[f] ?? "outline";
  }
  return { columns: l, byKey: n, badgeVariant: r };
}
const Ld = ["disabled", "aria-label", "aria-busy"], jd = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vd = ["d"], Dd = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Td = ["disabled", "onClick"], Ed = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Id = ["d"], Fd = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, V3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = x(() => n.busy || n.disabled), i = x(() => String(n.value ?? "")), u = x(() => `Select ${(n.label || "value").trim().toLowerCase()}`);
    function d(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function f(h) {
      const w = n.colors[d(h)] ?? n.defaultColor ?? "neutral";
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
            "aria-label": u.value,
            "aria-busy": e.busy
          }, [
            E(Ge, {
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: L(() => [
                R(c(b(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", jd, [
              o("path", {
                d: k(ce)("chevron-down")
              }, null, 8, Vd)
            ]))
          ], 8, Ld)
        ]),
        panel: L(({ close: y }) => [
          o("div", Dd, c(u.value), 1),
          (t(!0), a(z, null, V(e.options, (C, S) => (t(), a("button", {
            key: S,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (M) => g(String(S), y)
          }, [
            E(Ge, {
              variant: f(S),
              class: "capitalize"
            }, {
              default: L(() => [
                R(c(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(S) === i.value ? (t(), a("svg", Ed, [
              o("path", {
                d: k(ce)("check")
              }, null, 8, Id)
            ])) : (t(), a("span", Fd))
          ], 8, Td))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Nd = { class: "flex items-center justify-end" }, Rd = ["aria-label"], Ud = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Hd = ["d"], Kd = ["href"], qd = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gd = ["d"], Wd = { class: "min-w-0 flex-1 truncate" }, Zd = ["disabled", "onClick"], Jd = ["d"], Yd = { class: "min-w-0 flex-1 truncate" }, Xd = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Qd = ["disabled", "onClick"], ec = {
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
    const r = e, s = n, i = U(null), u = U(null), d = x(() => r.groups.flatMap((p) => p.actions)), f = x(() => d.value.filter((p) => !p.destructive)), b = x(() => d.value.filter((p) => p.destructive)), g = {
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
    const w = x(() => d.value.length === 0);
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
    function S(p, m) {
      const v = m.toLowerCase().split("+").map((T) => T.trim()), A = v.at(-1);
      return !A || p.key.toLowerCase() !== A ? !1 : (p.ctrlKey || p.metaKey) === v.includes("mod") && p.shiftKey === v.includes("shift") && p.altKey === v.includes("alt");
    }
    function M(p) {
      w.value || (p.preventDefault(), i.value?.openAt(p.clientX, p.clientY));
    }
    function _(p) {
      const m = d.value.find(
        (te) => (te.keyBindings ?? []).some((H) => S(p, H))
      );
      if (m) {
        p.preventDefault(), C(m);
        return;
      }
      if (p.key !== "ArrowDown" && p.key !== "ArrowUp")
        return;
      const v = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (v.length === 0)
        return;
      p.preventDefault();
      const A = v.indexOf(document.activeElement), I = p.key === "ArrowDown" ? 1 : -1, T = (A + I + v.length) % v.length;
      v[T]?.focus();
    }
    return l({ openContextMenu: M }), (p, m) => (t(), a("div", Nd, [
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
            (t(), a("svg", Ud, [
              o("path", {
                d: k(ce)("more-vertical")
              }, null, 8, Hd)
            ]))
          ], 8, Rd)
        ]),
        panel: L(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: _
          }, [
            (t(!0), a(z, null, V(f.value, (v) => (t(), a(z, {
              key: v.key
            }, [
              v.link ? (t(), a("a", {
                key: 0,
                href: v.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(v)])
              }, [
                (t(), a("svg", qd, [
                  o("path", {
                    d: k(Te)(v)
                  }, null, 8, Gd)
                ])),
                o("span", Wd, c(v.label), 1)
              ], 10, Kd)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(v)]),
                disabled: e.busy === v.key,
                onClick: (A) => y(v)
              }, [
                (t(), a("svg", {
                  class: P(["size-4 shrink-0", e.busy === v.key && "animate-pulse"]),
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
                  }, null, 8, Jd)
                ], 2)),
                o("span", Yd, c(v.label), 1)
              ], 10, Zd))
            ], 64))), 128)),
            b.value.length ? (t(), a("div", Xd, [
              (t(!0), a(z, null, V(b.value, (v) => (t(), a("button", {
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
              ], 8, Qd))), 128))
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
}, ic = ["d"], uc = ["disabled", "onClick"], dc = ["d"], cc = {
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
}, hc = ["d"], bc = { class: "min-w-0 flex-1 truncate" }, yc = ["disabled", "onClick"], xc = ["d"], kc = { class: "min-w-0 flex-1 truncate" }, D3 = /* @__PURE__ */ O({
  __name: "InlineRecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = U(null), u = x(() => r.groups.filter((_) => !_.label)), d = x(() => r.groups.filter((_) => _.label)), f = x(() => u.value.flatMap((_) => _.actions)), b = x(() => f.value.filter((_) => !_.destructive)), g = x(() => f.value.filter((_) => _.destructive)), h = x(() => r.groups.every((_) => _.actions.length === 0)), w = {
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
    function S(_) {
      r.busy !== _.key && C(_);
    }
    function M(_) {
      h.value || i.value?.openContextMenu(_);
    }
    return l({ openContextMenu: M }), (_, p) => (t(), a("div", lc, [
      o("div", oc, [
        (t(!0), a(z, null, V([...b.value, ...g.value], (m) => (t(), a(z, {
          key: m.key
        }, [
          m.link ? (t(), a("a", {
            key: 0,
            href: m.url ?? "#",
            class: P(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors", y(m)])
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
            class: P(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50", y(m)]),
            disabled: e.busy === m.key,
            onClick: (v) => S(m)
          }, [
            (t(), a("svg", {
              class: P(["size-3.5 shrink-0", e.busy === m.key && "animate-pulse"]),
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
              }, null, 8, dc)
            ], 2)),
            o("span", null, c(m.label), 1)
          ], 10, uc))
        ], 64))), 128)),
        (t(!0), a(z, null, V(d.value, (m) => (t(), D(qe, {
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
              (t(!0), a(z, null, V([
                ...m.actions.filter((v) => !v.destructive),
                ...m.actions.filter((v) => v.destructive)
              ], (v) => (t(), a(z, {
                key: v.key
              }, [
                v.link ? (t(), a("a", {
                  key: 0,
                  href: v.url ?? "#",
                  role: "menuitem",
                  class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", v.destructive ? "text-destructive" : y(v)])
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
                  class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", v.destructive ? "text-destructive hover:bg-destructive/10 focus:bg-destructive/10" : y(v)]),
                  disabled: e.busy === v.key,
                  onClick: (A) => C(v)
                }, [
                  (t(), a("svg", {
                    class: P(["size-4 shrink-0", e.busy === v.key && "animate-pulse"]),
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
      E(ac, {
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
function T3() {
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
  const l = Ft[e.primary] ?? Ft.slate, n = Nt[e.surface] ?? Nt.neutral, r = n.chroma, s = n.hue, u = ln(e) ? {
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
    ...u,
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
  const u = nt()?.__panelAppearanceApplied === !0;
  if (wt !== s) {
    if (r && u && e) {
      wt = s;
      try {
        const d = Cc(n);
        localStorage.setItem(Fn, JSON.stringify(d));
      } catch {
      }
      return;
    }
    Ut(n);
  }
}
function E3() {
  Hn(Sc());
}
function I3(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Hn(l);
}
let Kn = null;
function F3(e) {
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
  for (const [u, d] of Object.entries(r))
    l.style.setProperty(u, d);
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
const Bc = ["aria-busy", "aria-label"], _c = { class: "bg-background flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3" }, Ac = { class: "min-w-0" }, Pc = { class: "text-base font-semibold" }, zc = {
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
    let i = null, u = "";
    const d = U(!1), f = x(() => n.width ?? mo[n.size]), b = x(
      () => [Dn, n.padded ? fo : ""].filter(Boolean).join(" ")
    );
    function g(y) {
      d.value = y.target === y.currentTarget;
    }
    function h(y) {
      d.value && y.target === y.currentTarget && !n.busy && r("close"), d.value = !1;
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
      const S = C[0], M = C[C.length - 1];
      y.shiftKey && document.activeElement === S ? (y.preventDefault(), M.focus()) : !y.shiftKey && document.activeElement === M && (y.preventDefault(), S.focus());
    }
    return me(
      () => n.open,
      async (y) => {
        if (y) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", w), await De(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", w), i?.focus?.(), i = null;
      }
    ), ke(() => {
      document.removeEventListener("keydown", w), document.body.style.overflow = u;
    }), (y, C) => (t(), D(ut, { to: "body" }, [
      E(Ye, {
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
      E(Ye, {
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
            class: P(["bg-background fixed inset-y-0 z-50 flex h-dvh max-h-dvh max-w-full flex-col shadow-2xl", [f.value, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-busy": e.busy ? "true" : void 0,
            "aria-label": e.title
          }, [
            o("header", _c, [
              o("div", Ac, [
                o("h2", Pc, c(e.title), 1),
                e.description ? (t(), a("p", zc, c(e.description), 1)) : $("", !0)
              ]),
              o("div", Oc, [
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
                ])], 8, Lc)
              ])
            ]),
            o("div", jc, [
              o("div", {
                class: P(b.value)
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
}, Hc = { class: "flex flex-col gap-2" }, Kc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, qc = ["aria-pressed", "aria-label", "onClick"], Gc = { class: "text-sm font-semibold" }, Wc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Zc = ["onClick"], Jc = { class: "flex flex-col gap-2" }, Yc = { class: "flex items-center justify-between" }, Xc = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Qc = { class: "flex items-center gap-2" }, ef = ["disabled"], tf = ["min", "max", "value"], nf = ["disabled"], N3 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = Gn(), d = U(!1), f = x(() => l.value.sidebarSide === "right"), b = x(() => f.value ? "left" : "right"), g = [
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
    function M(_, p) {
      return `oklch(0.72 ${p * 3} ${_})`;
    }
    return (_, p) => (t(), a(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: p[0] || (p[0] = (m) => d.value = !0)
      }, [...p[6] || (p[6] = [
        Mt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      E(_t, {
        open: d.value,
        title: "Settings",
        side: b.value,
        width: "w-80",
        padded: !1,
        onClose: p[5] || (p[5] = (m) => d.value = !1)
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
                (t(!0), a(z, null, V(k(s), (m, v) => (t(), a("button", {
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
                (t(!0), a(z, null, V(k(i), (m, v) => (t(), a("button", {
                  key: v,
                  type: "button",
                  class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                  style: se({ background: M(m.hue, m.chroma) }),
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
                (t(!0), a(z, null, V(k(u), (m) => (t(), a("button", {
                  key: m,
                  type: "button",
                  class: P([
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
            (t(!0), a(z, null, V([
              { label: "Color scheme", key: "theme", options: g },
              { label: "Card style", key: "cardStyle", options: w },
              { label: "Density", key: "density", options: h },
              { label: "Sidebar", key: "sidebarSide", options: y },
              { label: "Content layout", key: "contentLayout", options: C },
              { label: "Menu style", key: "menuStyle", options: S }
            ], (m) => (t(), a("section", {
              key: m.key,
              class: "flex flex-col gap-2"
            }, [
              o("h3", Gc, c(m.label), 1),
              o("div", Wc, [
                (t(!0), a(z, null, V(m.options, (v) => (t(), a("button", {
                  key: String(v.value),
                  type: "button",
                  class: P([
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
}, rf = ["d"], uf = { class: "w-full truncate text-center" }, df = {
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
}, ff = ["d"], mf = { class: "w-full truncate text-center" }, Lt = 5, R3 = /* @__PURE__ */ O({
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
    function u(d) {
      return d === "/" ? n.current === "/" : n.current === d || n.current.startsWith(`${d}/`);
    }
    return (d, f) => (t(), a("nav", af, [
      o("ul", lf, [
        (t(!0), a(z, null, V(s.value, (b) => (t(), a("li", {
          key: b.key,
          class: "flex-1"
        }, [
          o("a", {
            href: b.href,
            class: P([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(b.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(b.href) ? "page" : void 0
          }, [
            (t(), a("svg", sf, [
              o("path", {
                d: k(ce)(b.icon)
              }, null, 8, rf)
            ])),
            o("span", uf, c(b.title), 1)
          ], 10, of)
        ]))), 128)),
        i.value ? (t(), a("li", df, [
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
    return (i, u) => (t(), a("input", {
      "data-slot": "input",
      value: n.modelValue ?? n.defaultValue,
      class: P([s, n.class]),
      onInput: u[0] || (u[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, pf));
  }
}), vf = ["for"], Pe = /* @__PURE__ */ O({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, n) => (t(), a("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: P([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      K(l.$slots, "default")
    ], 10, vf));
  }
}), U3 = /* @__PURE__ */ O({
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
      class: P(["size-4 animate-spin", l.$props.class])
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
    const n = e, r = l, s = U(!1), i = U(null), u = U("");
    ve(() => {
      n.autofocus && i.value?.focus();
    });
    const d = x(
      () => Array.from({ length: n.length }, (_, p) => n.modelValue[p] ?? "")
    ), f = x(() => Math.min(n.modelValue.length, n.length - 1));
    function b(_) {
      return _.replace(/\D/g, "").slice(0, n.length);
    }
    function g(_) {
      n.disabled || _.length !== n.length || u.value !== _ && (u.value = _, r("complete", _));
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
    function S(_) {
      _.animationName === "pkOtpAutofillStart" && C();
    }
    me(
      () => n.modelValue,
      (_) => {
        _.length < n.length ? u.value = "" : g(_);
      }
    );
    let M;
    return ve(() => {
      M = window.setInterval(() => {
        if (n.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && C();
      }, 250);
    }), ua(() => {
      M !== void 0 && window.clearInterval(M);
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
        onAnimationstart: S,
        onFocus: p[0] || (p[0] = (m) => s.value = !0),
        onBlur: p[1] || (p[1] = (m) => s.value = !1)
      }, null, 40, hf),
      (t(!0), a(z, null, V(d.value, (m, v) => (t(), a("div", {
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
}), H3 = /* @__PURE__ */ Bt(xf, [["__scopeId", "data-v-560616ac"]]), kf = {
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
      class: P(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: P(
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
}, K3 = /* @__PURE__ */ O({
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
      class: P(k(ne)(k(Of)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Pf = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: P(k(ne)("col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), zf = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: P(k(ne)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
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
), Lf = { class: "list-inside list-disc text-sm" }, q3 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, n = x(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), D(k(Af), { variant: "destructive" }, {
      default: L(() => [
        E(k(Qa), { class: "size-4" }),
        E(k(zf), null, {
          default: L(() => [
            R(c(e.title), 1)
          ]),
          _: 1
        }),
        E(k(Pf), null, {
          default: L(() => [
            o("ul", Lf, [
              (t(!0), a(z, null, V(n.value, (i, u) => (t(), a("li", { key: u }, c(i), 1))), 128))
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
    return (i, u) => pe((t(), a("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => da(s) ? s.value = d : null),
      "data-slot": "input",
      class: P(
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
}), jf = { class: "relative" }, Vf = ["aria-label"], G3 = /* @__PURE__ */ O({
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
    }), (i, u) => (t(), a("div", jf, [
      E(k(Wn), re({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: k(ne)("pr-10", n.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: P(
          k(ne)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
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
}), Zn = "@container min-w-0", Df = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", W3 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", Tf = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
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
function Z3(e, l) {
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
    const u = Array.from({ length: n }, () => []);
    s.forEach((d, f) => {
      u[f % n].push(d);
    }), r.push({ type: "columns", columns: u }), s = [];
  };
  for (const u of e)
    Ef(u.span) >= 2 ? (i(), r.push({ type: "wide", item: u })) : s.push(u);
  return i(), r;
}
function hn(e, l) {
  return `${e}:${l}`;
}
function J3(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Ht(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function Y3(e, l, n, r) {
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
  const u = [], d = /* @__PURE__ */ new Set();
  for (const f of r?.widgets ?? []) {
    const b = f.id.toLowerCase(), g = i.get(b);
    g && (d.add(b), u.push({
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
      d.has(g) || u.push({
        id: g,
        kind: f.kind,
        key: b.key,
        span: Ht(b.span),
        hidden: !1,
        source: b
      });
    }
  return u;
}
function X3(e) {
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
    const u = r.getContext("2d", { willReadFrequently: !0 });
    if (!u)
      return !1;
    u.drawImage(n, 0, 0);
    const { data: d } = u.getImageData(0, 0, s, i);
    for (let f = 3; f < d.length; f += 4)
      if ((d[f] ?? 255) < 255)
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
const Q3 = /* @__PURE__ */ O({
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
}), eC = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: P(k(ne)("mt-auto flex flex-col gap-2 p-4", l.class))
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
      class: P(k(ne)("flex flex-col gap-1.5 p-4", l.class))
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
}), tC = /* @__PURE__ */ O({
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
}, nC = /* @__PURE__ */ O({
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
    return (u, d) => e.collapsible === "none" ? (t(), a("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: k(ne)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      K(u.$slots, "default")
    ], 16)) : k(n) ? (t(), D(k(en), re({
      key: 1,
      open: k(s)
    }, u.$attrs, { "onUpdate:open": k(i) }), {
      default: L(() => [
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
          default: L(() => [
            E(Gf, { class: "sr-only" }, {
              default: L(() => [
                E(Wf, null, {
                  default: L(() => [...d[0] || (d[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                E(qf, null, {
                  default: L(() => [...d[1] || (d[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", tm, [
              K(u.$slots, "default")
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
        class: P(
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
      }, u.$attrs), [
        o("div", am, [
          K(u.$slots, "default")
        ])
      ], 16)
    ], 8, nm));
  }
}), aC = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: P(
        k(ne)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), lC = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: P(k(ne)("flex flex-col gap-2 p-2", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), oC = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: P(k(ne)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), sC = /* @__PURE__ */ O({
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
      class: P(
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
}), rC = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: P(k(ne)("w-full text-sm", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), iC = /* @__PURE__ */ O({
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
      class: P(
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
      class: P(k(ne)("flex flex-col gap-2 p-2", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), dC = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Wn), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: P(k(ne)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cC = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("main", {
      "data-slot": "sidebar-inset",
      class: P(
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
}), fC = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: P(k(ne)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), mC = /* @__PURE__ */ O({
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
      class: P(
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
}), pC = /* @__PURE__ */ O({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: P(
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
    return (i, u) => (t(), D(k(ka), re({ "data-slot": "tooltip" }, k(s)), {
      default: L((d) => [
        K(i.$slots, "default", Oe(Ne(d)))
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
    return (u, d) => (t(), D(k($a), null, {
      default: L(() => [
        E(k(wa), re({ "data-slot": "tooltip-content" }, { ...k(i), ...u.$attrs }, {
          class: k(ne)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: L(() => [
            K(u.$slots, "default"),
            E(k(Ca), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), vC = /* @__PURE__ */ O({
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
    return (n, r) => (t(), D(k(Pn), Oe(Ne(l)), {
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
}), gC = /* @__PURE__ */ O({
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
    return (i, u) => e.tooltip ? (t(), D(k(lm), { key: 1 }, {
      default: L(() => [
        E(k(sm), { "as-child": "" }, {
          default: L(() => [
            E(yn, Oe(Ne({ ...k(s), ...i.$attrs })), {
              default: L(() => [
                K(i.$slots, "default")
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
          default: L(() => [
            typeof e.tooltip == "string" ? (t(), a(z, { key: 0 }, [
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
}), hC = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: P(k(ne)("group/menu-item relative", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), xn = "animate-pulse rounded-md bg-primary/10", bC = /* @__PURE__ */ O({
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
      class: P(k(ne)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: P(k(ne)(xn, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: P(k(ne)(xn, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), yC = /* @__PURE__ */ O({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: P(
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
}), xC = /* @__PURE__ */ O({
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
      class: P(
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
}), kC = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: P(k(ne)("group/menu-sub-item relative", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), $C = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !dl?.cookie.includes(`${bn}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = il("(max-width: 767px)"), i = U(!1), u = jn(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function d(h) {
      u.value = h, document.cookie = `${bn}=${u.value}; path=/; max-age=${Zf}`;
    }
    function f(h) {
      i.value = h;
    }
    function b() {
      return s.value ? f(!i.value) : d(!u.value);
    }
    ul("keydown", (h) => {
      h.key === Qf && (h.metaKey || h.ctrlKey) && (h.preventDefault(), b());
    });
    const g = x(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return em({
      state: g,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: b
    }), (h, w) => (t(), D(k(Pn), { "delay-duration": 0 }, {
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
}), wC = /* @__PURE__ */ O({
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
      class: P(
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
}), CC = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(rm), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: P(k(ne)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), SC = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, toggleSidebar: s } = At();
    return (i, u) => (t(), D(ue, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: P(k(ne)("h-7 w-7", l.class)),
      onClick: k(s)
    }, {
      default: L(() => [
        k(n) || k(r) === "collapsed" ? (t(), D(k(nl), { key: 0 })) : (t(), D(k(al), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
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
), MC = /* @__PURE__ */ O({
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
    return (i, u) => (t(), D(k(Ba), re({ "data-slot": "dropdown-menu" }, k(s)), {
      default: L((d) => [
        K(i.$slots, "default", Oe(Ne(d)))
      ]),
      _: 3
    }, 16));
  }
}), um = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, BC = /* @__PURE__ */ O({
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
    return (u, d) => (t(), D(k(_a), re({ "data-slot": "dropdown-menu-checkbox-item" }, k(i), {
      class: k(ne)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: L(() => [
        o("span", um, [
          E(k(zn), null, {
            default: L(() => [
              K(u.$slots, "indicator-icon", {}, () => [
                E(k(On), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _C = /* @__PURE__ */ O({
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
    return (u, d) => (t(), D(k(Aa), null, {
      default: L(() => [
        E(k(Pa), re({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...k(i) }, {
          class: k(ne)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: L(() => [
            K(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), AC = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(za), re({ "data-slot": "dropdown-menu-group" }, l), {
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
}), zC = /* @__PURE__ */ O({
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
}), OC = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, u) => (t(), D(k(ja), re({ "data-slot": "dropdown-menu-radio-group" }, k(s)), {
      default: L(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, LC = /* @__PURE__ */ O({
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
    return (u, d) => (t(), D(k(Va), re({ "data-slot": "dropdown-menu-radio-item" }, k(i), {
      class: k(ne)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: L(() => [
        o("span", dm, [
          E(k(zn), null, {
            default: L(() => [
              K(u.$slots, "indicator-icon", {}, () => [
                E(k(ll), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jC = /* @__PURE__ */ O({
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
}), VC = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: P(k(ne)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), DC = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, u) => (t(), D(k(Ta), re({ "data-slot": "dropdown-menu-sub" }, k(s)), {
      default: L((d) => [
        K(i.$slots, "default", Oe(Ne(d)))
      ]),
      _: 3
    }, 16));
  }
}), TC = /* @__PURE__ */ O({
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
    return (u, d) => (t(), D(k(Ea), re({ "data-slot": "dropdown-menu-sub-content" }, k(i), {
      class: k(ne)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: L(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), EC = /* @__PURE__ */ O({
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
        E(k(Ln), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), IC = /* @__PURE__ */ O({
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
}), FC = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Na), {
      "data-slot": "avatar",
      class: P(k(ne)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), NC = /* @__PURE__ */ O({
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
}), RC = /* @__PURE__ */ O({
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
}), UC = /* @__PURE__ */ O({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: P(l.class)
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), HC = /* @__PURE__ */ O({
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
      class: P(k(ne)("flex size-9 items-center justify-center", l.class))
    }, [
      K(n.$slots, "default", {}, () => [
        E(k(ol), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), KC = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: P(k(ne)("inline-flex items-center gap-1.5", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), qC = /* @__PURE__ */ O({
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
      class: P(k(ne)("hover:text-foreground transition-colors", l.class))
    }, {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), GC = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: P(
        k(ne)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), WC = /* @__PURE__ */ O({
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
      class: P(k(ne)("text-foreground font-normal", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), ZC = /* @__PURE__ */ O({
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
      class: P(k(ne)("[&>svg]:size-3.5", l.class))
    }, [
      K(n.$slots, "default", {}, () => [
        E(k(Ln))
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
      E(k(Ha), re({ "data-slot": "navigation-menu-viewport" }, k(r), {
        class: k(ne)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), JC = /* @__PURE__ */ O({
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
    return (u, d) => (t(), D(k(Ka), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, k(i), {
      class: k(ne)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: L((f) => [
        K(u.$slots, "default", Oe(Ne(f))),
        e.viewport ? (t(), D(fm, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), YC = /* @__PURE__ */ O({
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
    return (u, d) => (t(), D(k(qa), re({ "data-slot": "navigation-menu-content" }, k(i), {
      class: k(ne)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: L(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), XC = /* @__PURE__ */ O({
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
}), QC = /* @__PURE__ */ O({
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
}), e8 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), D(k(Za), re({ "data-slot": "navigation-menu-link" }, k(i), {
      class: k(ne)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: L(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t8 = /* @__PURE__ */ O({
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
}), n8 = /* @__PURE__ */ O({
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
        E(k(sl), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mm = Xt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), a8 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), D(k(Mn), re({ "data-slot": "dialog" }, k(s)), {
      default: L((d) => [
        K(i.$slots, "default", Oe(Ne(d)))
      ]),
      _: 3
    }, 16));
  }
}), l8 = /* @__PURE__ */ O({
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
}), o8 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), D(k(Zt), null, {
      default: L(() => [
        E(pm),
        E(k(Jt), re({ "data-slot": "dialog-content" }, { ...u.$attrs, ...k(i) }, {
          class: k(ne)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: L(() => [
            K(u.$slots, "default"),
            e.showCloseButton ? (t(), D(k(Qe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                E(k(Yt)),
                d[0] || (d[0] = o("span", { class: "sr-only" }, "Close", -1))
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
}), s8 = /* @__PURE__ */ O({
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
}), r8 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: P(k(ne)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      K(n.$slots, "default"),
      e.showCloseButton ? (t(), D(k(Qe), {
        key: 0,
        "as-child": ""
      }, {
        default: L(() => [
          E(ue, { variant: "outline" }, {
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
}), i8 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: P(k(ne)("flex flex-col gap-2 text-center sm:text-left", l.class))
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
    return (u, d) => (t(), D(k(Zt), null, {
      default: L(() => [
        E(k(Wt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            E(k(Jt), re({
              class: k(ne)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...u.$attrs, ...k(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (f) => {
                const b = f.detail.originalEvent, g = b.target;
                (b.offsetX > g.clientWidth || b.offsetY > g.clientHeight) && f.preventDefault();
              })
            }), {
              default: L(() => [
                K(u.$slots, "default"),
                E(k(Qe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    E(k(Yt), { class: "w-4 h-4" }),
                    d[1] || (d[1] = o("span", { class: "sr-only" }, "Close", -1))
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
}), d8 = /* @__PURE__ */ O({
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
}), c8 = /* @__PURE__ */ O({
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
}), f8 = /* @__PURE__ */ O({
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
}), m8 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(rl), {
      role: "status",
      "aria-label": "Loading",
      class: P(k(ne)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), p8 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: P(
        k(ne)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), v8 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: P(k(ne)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), g8 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: P(k(ne)("px-6", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), h8 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: P(k(ne)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), b8 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: P(k(ne)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), y8 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: P(
        k(ne)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), x8 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: P(k(ne)("leading-none font-semibold", l.class))
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
}, k8 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = U(!1), u = U(null), d = U(0);
    fa((b) => (console.error(`[PkBoundary] ${r.label} failed to render`, b), i.value = !0, u.value = b instanceof Error ? b.message : null, s("error", b), !1));
    function f() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: f }), (b, g) => (t(), a("div", {
      class: P(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
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
            u.value ? (t(), a("p", ym, c(u.value), 1)) : $("", !0),
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
      ])) : i.value ? $("", !0) : K(b.$slots, "default", { key: d.value })
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
}, $8 = /* @__PURE__ */ O({
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
        class: P(e.padded ? "p-4" : "")
      }, [
        K(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), a("footer", Mm, [
        K(l.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), Yn = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function w8() {
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
}, C8 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, n = Vn(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = x(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = x(() => {
      const f = n.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), u = yt(Yn, x(() => !1)), d = x(() => !l.host && k(u) === !0);
    return (f, b) => d.value ? $("", !0) : (t(), a("footer", Bm, [
      o("div", _m, [
        o("p", null, "© " + c(k(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), a("nav", Am, [
          (t(!0), a(z, null, V(i.value, (g) => (t(), D(k(ml), {
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
}), Pm = { class: "flex shrink-0 flex-col items-center" }, zm = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, S8 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), a("div", Pm, [
      o("div", {
        class: P(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", zm)) : $("", !0),
        o("div", {
          class: P(["size-full overflow-hidden bg-white", s.value])
        }, [
          K(i.$slots, "default")
        ], 2)
      ], 6),
      n.value ? (t(), a(z, { key: 0 }, [
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
}, Nm = ["aria-label", "onClick"], Rm = ["disabled", "aria-label", "onClick"], Um = ["disabled", "aria-label", "onClick"], Hm = ["disabled", "title", "aria-label", "onClick"], Km = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, qm = ["disabled"], M8 = /* @__PURE__ */ O({
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
    const n = e, r = l;
    let s = 0;
    const i = U(u(n.modelValue));
    function u(N) {
      return Array.isArray(N) ? N.map((W) => ({ uid: s++, data: { ...W } })) : [];
    }
    me(
      () => n.modelValue,
      (N) => {
        JSON.stringify(N ?? null) !== JSON.stringify(d()) && (i.value = u(N));
      }
    );
    function d() {
      const N = [];
      for (const W of i.value) {
        const J = {};
        let G = !1;
        for (const q of n.children) {
          const B = W.data[q.key] ?? null;
          J[q.key] = B, B !== null && B !== "" && !(Array.isArray(B) && B.length === 0) && (G = !0);
        }
        G && N.push(J);
      }
      return N.length ? N : null;
    }
    function f() {
      r("update:modelValue", d());
    }
    const b = x(() => n.maxItems !== null && i.value.length >= n.maxItems), g = x(() => n.minItems !== null && i.value.length <= n.minItems), h = x(() => n.children.length === 1);
    function w() {
      if (b.value || n.disabled)
        return;
      const N = {};
      for (const W of n.children)
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
      return n.errors[`${n.fieldKey}.${N}.${W}`];
    }
    const _ = U(/* @__PURE__ */ new Set());
    function p(N) {
      return n.collapsible && _.value.has(N);
    }
    function m(N) {
      const W = new Set(_.value);
      W.has(N) ? W.delete(N) : W.add(N), _.value = W;
    }
    const v = x(
      () => i.value.length > 0 && i.value.every((N) => _.value.has(N.uid))
    );
    function A() {
      _.value = v.value ? /* @__PURE__ */ new Set() : new Set(i.value.map((N) => N.uid));
    }
    function I(N) {
      const W = n.children[0];
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
      if (n.disabled) {
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
      if (T.value = null, n.disabled || J === null || J === N)
        return;
      const G = [...i.value], q = G.findIndex((j) => j.uid === J), B = G.findIndex((j) => j.uid === N);
      if (q < 0 || B < 0)
        return;
      const [F] = G.splice(q, 1);
      G.splice(B, 0, F), i.value = G, f();
    }
    return (N, W) => (t(), a(z, null, [
      e.collapsible && i.value.length > 1 ? (t(), a("div", Om, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs font-medium",
          onClick: A
        }, c(v.value ? "Expand all" : "Collapse all"), 1)
      ])) : $("", !0),
      o("div", Lm, [
        (t(!0), a(z, null, V(i.value, (J, G) => (t(), a("div", {
          key: J.uid,
          class: P(["flex items-start gap-2", T.value === J.uid ? "opacity-40" : ""]),
          onDragover: W[0] || (W[0] = he(() => {
          }, ["prevent"])),
          onDrop: (q) => Z(J.uid, q)
        }, [
          e.disabled ? $("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: P(["text-muted-foreground/60 hover:text-muted-foreground flex size-6 shrink-0 cursor-grab items-center justify-center active:cursor-grabbing", h.value ? "mt-1.5" : "mt-0.5"]),
            draggable: "true",
            "aria-label": `Drag to reorder ${e.itemLabel} ${G + 1}`,
            onDragstart: (q) => te(J.uid, q),
            onDragend: H
          }, [...W[1] || (W[1] = [
            Mt('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
          ])], 42, Vm)),
          o("span", {
            class: P(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
            "aria-hidden": "true"
          }, c(G + 1), 3),
          p(J.uid) ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "hover:bg-accent min-w-0 flex-1 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
            onClick: (q) => m(J.uid)
          }, [
            o("span", Tm, c(e.itemLabel) + " " + c(G + 1), 1),
            I(J) ? (t(), a("span", Em, c(I(J)), 1)) : $("", !0)
          ], 8, Dm)) : (t(), a("div", Im, [
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
            }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", Fm, [
              (t(!0), a(z, null, V(e.children, (q) => (t(), D(Xe, {
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
            e.collapsible ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors",
              "aria-label": p(J.uid) ? `Expand ${e.itemLabel} ${G + 1}` : `Collapse ${e.itemLabel} ${G + 1}`,
              onClick: (q) => m(J.uid)
            }, [
              (t(), a("svg", {
                class: P(["size-3.5 transition-transform", p(J.uid) ? "" : "rotate-180"]),
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
            ], 8, Nm)) : $("", !0),
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
            ])], 8, Rm),
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
            ])], 8, Um),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || g.value,
              title: g.value ? `At least ${e.minItems} required` : void 0,
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
            ])], 8, Hm)
          ], 2)
        ], 42, jm))), 128)),
        i.value.length === 0 ? (t(), a("p", Km, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
        b.value ? $("", !0) : (t(), a("button", {
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
        ], 8, qm))
      ])
    ], 64));
  }
}), Gm = { class: "space-y-1" }, Wm = { class: "flex items-center gap-1" }, Zm = ["disabled", "title", "aria-label", "onClick"], Jm = ["aria-pressed"], Ym = ["id", "value", "rows", "disabled"], Xm = ["innerHTML"], Qm = /* @__PURE__ */ O({
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
    function u(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = x(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(h, w = h) {
      const y = document.getElementById(n.id ?? "");
      if (y === null)
        return;
      const C = y.selectionStart, S = y.selectionEnd, M = i.value.slice(C, S);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${h}${M}${w}${i.value.slice(S)}`
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
    return (h, w) => (t(), a("div", Gm, [
      o("div", Wm, [
        (t(!0), a(z, null, V(g.value, (y) => (t(), a("button", {
          key: y,
          type: "button",
          disabled: e.disabled,
          title: y,
          "aria-label": y,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => b[y].run()
        }, c(b[y].label), 9, Zm))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: w[0] || (w[0] = (y) => s.value = !s.value)
        }, " Preview ", 8, Jm)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, Xm)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: w[1] || (w[1] = (y) => r("update:modelValue", y.target.value))
      }, null, 40, Ym))
    ]));
  }
}), ep = { class: "space-y-1" }, tp = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, np = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, ap = ["id", "value", "rows", "disabled"], lp = { class: "text-muted-foreground text-xs font-normal" }, op = {
  key: 0,
  class: "text-destructive text-xs"
}, sp = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null), i = U(!0), u = x(() => n.modelValue ?? ""), d = x(() => Math.max(u.value.split(`
`).length, 1)), f = x(() => {
      if (n.language !== "json" || u.value.trim() === "")
        return null;
      try {
        return JSON.parse(u.value), null;
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
      const w = h.target, y = w.selectionStart, C = w.selectionEnd, S = `${u.value.slice(0, y)}    ${u.value.slice(C)}`;
      r("update:modelValue", S), requestAnimationFrame(() => {
        w.selectionStart = w.selectionEnd = y + 4;
      });
    }
    return (h, w) => (t(), a("div", ep, [
      o("div", tp, [
        o("div", np, [
          (t(!0), a(z, null, V(d.value, (y) => (t(), a("div", { key: y }, c(y), 1))), 128))
        ]),
        o("textarea", {
          id: e.id,
          ref_key: "area",
          ref: s,
          value: u.value,
          rows: e.rows,
          disabled: e.disabled,
          spellcheck: "false",
          autocapitalize: "off",
          autocomplete: "off",
          autocorrect: "off",
          class: "w-full resize-y bg-transparent px-3 py-2 leading-5 outline-none",
          onInput: b,
          onKeydown: g
        }, null, 40, ap)
      ]),
      o("p", lp, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), a("p", op, c(f.value), 1)) : $("", !0)
    ]));
  }
}), rp = { class: "space-y-3" }, ip = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, up = { class: "text-sm font-medium" }, dp = { class: "flex items-center gap-1" }, cp = ["disabled", "onClick"], fp = ["disabled", "onClick"], mp = ["disabled", "onClick"], pp = { class: "space-y-3 p-3" }, vp = { class: "flex flex-wrap items-center gap-2" }, gp = ["disabled", "onClick"], hp = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, B8 = /* @__PURE__ */ O({
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
    ), u = x(() => n.maxBlocks !== null && s.value.length >= n.maxBlocks);
    function d(w) {
      r("update:modelValue", w);
    }
    function f(w) {
      u.value || d([...s.value, { type: w, data: {} }]);
    }
    function b(w) {
      d(s.value.filter((y, C) => C !== w));
    }
    function g(w, y) {
      const C = w + y;
      if (C < 0 || C >= s.value.length)
        return;
      const S = [...s.value], [M] = S.splice(w, 1);
      S.splice(C, 0, M), d(S);
    }
    function h(w, y, C) {
      d(
        s.value.map(
          (S, M) => M === w ? { ...S, data: { ...S.data, [y]: C } } : S
        )
      );
    }
    return (w, y) => (t(), a("div", rp, [
      (t(!0), a(z, null, V(s.value, (C, S) => (t(), a("div", {
        key: `${C.type}-${S}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", ip, [
          o("span", up, c(i.value[C.type]?.label ?? C.type), 1),
          o("div", dp, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === 0,
              "aria-label": "Move up",
              onClick: (M) => g(S, -1)
            }, " ↑ ", 8, cp),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (M) => g(S, 1)
            }, " ↓ ", 8, fp),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (M) => b(S)
            }, " Remove ", 8, mp)
          ])
        ]),
        o("div", pp, [
          (t(!0), a(z, null, V(i.value[C.type]?.fields ?? [], (M) => (t(), D(Xe, {
            key: M.key,
            field: M,
            value: C.data[M.key] ?? null,
            error: e.errors?.[M.key],
            processing: e.disabled,
            onChange: (_) => h(S, M.key, _)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", vp, [
        (t(!0), a(z, null, V(e.blocks, (C) => (t(), a("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (S) => f(C.type)
        }, " + " + c(C.label), 9, gp))), 128)),
        u.value ? (t(), a("span", hp, c(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), bp = ["name", "value", "checked", "disabled", "onChange"], yp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, xp = /* @__PURE__ */ O({
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
    return (i, u) => (t(), a("div", {
      role: "radiogroup",
      class: P(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(z, null, V(e.options, (d) => (t(), a("label", {
        key: String(d.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: d.value,
          checked: s(d),
          disabled: e.disabled,
          onChange: (f) => r("update:modelValue", d.value)
        }, null, 40, bp),
        R(" " + c(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", yp, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), kp = ["value", "checked", "disabled", "onChange"], $p = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, wp = /* @__PURE__ */ O({
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
    function u(f) {
      r(
        "update:modelValue",
        i(f) ? s.value.filter((b) => b != f.value) : [...s.value, f.value]
      );
    }
    const d = x(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, b) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: se(d.value)
    }, [
      (t(!0), a(z, null, V(e.options, (g) => (t(), a("label", {
        key: String(g.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: g.value,
          checked: i(g),
          disabled: e.disabled,
          onChange: (h) => u(g)
        }, null, 40, kp),
        R(" " + c(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", $p, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), Cp = { class: "flex flex-col gap-1.5" }, Sp = ["aria-label", "onClick"], Mp = ["placeholder", "disabled", "maxlength"], Bp = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, _p = ["onClick"], Ap = {
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
    ), u = x(() => i.value.length >= (n.field.max ?? 25)), d = x(
      () => (n.field.suggestions ?? []).filter(
        (h) => !i.value.some((w) => w.toLowerCase() === h.toLowerCase())
      )
    );
    function f(h) {
      const w = h.trim().slice(0, n.field.maxLength ?? 40);
      if (w === "" || u.value) {
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
    return (h, w) => (t(), a("div", Cp, [
      o("div", {
        class: P(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(z, null, V(i.value, (y, C) => (t(), a("span", {
          key: `${y}-${C}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          R(c(y) + " ", 1),
          e.disabled ? $("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${y}`,
            onClick: (S) => b(C)
          }, " × ", 8, Sp))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": w[0] || (w[0] = (y) => s.value = y),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: g,
          onBlur: w[1] || (w[1] = (y) => f(s.value))
        }, null, 40, Mp), [
          [Ae, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), a("div", Bp, [
        w[2] || (w[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), a(z, null, V(d.value, (y) => (t(), a("button", {
          key: y,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => f(y)
        }, c(y), 9, _p))), 128))
      ])) : $("", !0),
      u.value ? (t(), a("p", Ap, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), zp = 4.5, kn = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
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
function Op(e, l, n) {
  if (!kn.test(e) || !kn.test(l))
    return e;
  const r = Kt(l) > 0.5, s = r ? 0 : 255;
  let i = Xn(e);
  for (let u = 0; u <= 20; u++) {
    const d = Lp(i);
    if (Qn(d, l) >= n)
      return d;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Lp(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const jp = { class: "flex flex-col gap-2" }, Vp = { class: "flex items-center gap-2" }, Dp = {
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
}, Tp = ["value", "disabled", "aria-label"], Ep = ["value", "disabled", "placeholder"], Ip = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Fp = ["aria-label", "title", "onClick"], Np = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Rp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = x(() => typeof n.modelValue == "string" ? n.modelValue : ""), u = x(() => s.test(i.value));
    function d(y) {
      const C = y.trim();
      if (C === "")
        return "";
      const S = C.startsWith("#") ? C : `#${C}`;
      return s.test(S) ? S.toLowerCase() : C;
    }
    function f(y) {
      r("update:modelValue", d(y.target.value));
    }
    const b = x(() => !u.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : Qn(i.value, n.field.contrastBackground)), g = x(() => n.field.contrastMinRatio ?? zp), h = x(() => b.value !== null && b.value < g.value);
    function w() {
      n.field.contrastBackground && r(
        "update:modelValue",
        Op(i.value, n.field.contrastBackground, g.value)
      );
    }
    return (y, C) => (t(), a("div", jp, [
      o("div", Vp, [
        u.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (S) => r("update:modelValue", S.target.value))
        }, null, 40, Tp)) : (t(), a("span", Dp)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, Ep)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", Ip, [
        (t(!0), a(z, null, V(e.field.presets, (S) => (t(), a("button", {
          key: S,
          type: "button",
          class: P(["size-6 rounded border", i.value.toLowerCase() === S.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: S }),
          "aria-label": S,
          title: S,
          onClick: (M) => r("update:modelValue", S.toLowerCase())
        }, null, 14, Fp))), 128))
      ])) : $("", !0),
      h.value ? (t(), a("p", Np, [
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
}), Up = ["aria-disabled"], Hp = /* @__PURE__ */ O({
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
    let i = null, u = null, d = null;
    const f = x(() => {
      const w = n.modelValue?.[n.latKey], y = n.modelValue?.[n.lngKey];
      return typeof w == "number" && typeof y == "number" ? { lat: w, lng: y } : n.center ? n.center : n.markers.length > 0 ? { lat: n.markers[0].lat, lng: n.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function b() {
      if (!s.value || i)
        return;
      const w = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), d = w, i = w.map(s.value).setView([f.value.lat, f.value.lng], n.zoom), w.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
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
      if (!(!i || !d))
        for (const w of n.markers) {
          const y = d.circleMarker([w.lat, w.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (w.label || w.popup) && y.bindPopup(`<strong>${w.label ?? ""}</strong>${w.popup ? `<br>${w.popup}` : ""}`);
        }
    }
    function h() {
      if (!i || !d)
        return;
      const w = n.modelValue?.[n.latKey], y = n.modelValue?.[n.lngKey];
      if (typeof w != "number" || typeof y != "number") {
        u && (i.removeLayer(u), u = null);
        return;
      }
      u ? u.setLatLng([w, y]) : u = d.circleMarker([w, y], {
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
      i?.remove(), i = null, u = null;
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
    }, null, 12, Up));
  }
}), Kp = { class: "flex flex-col gap-2" }, qp = { class: "text-muted-foreground text-xs font-normal" }, Gp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkMapField",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(() => n.modelValue && typeof n.modelValue == "object" ? n.modelValue : null), i = x(() => n.field.latKey ?? "lat"), u = x(() => n.field.lngKey ?? "lng");
    return (d, f) => (t(), a("div", Kp, [
      E(Hp, {
        "model-value": s.value,
        center: e.field.defaultCenter ?? null,
        zoom: e.field.zoom ?? 12,
        height: e.field.height ?? 280,
        "lat-key": i.value,
        "lng-key": u.value,
        disabled: e.disabled,
        pickable: "",
        "onUpdate:modelValue": f[0] || (f[0] = (b) => r("update:modelValue", b))
      }, null, 8, ["model-value", "center", "zoom", "height", "lat-key", "lng-key", "disabled"]),
      o("p", qp, [
        R(" Click the map to set " + c(i.value) + " / " + c(u.value) + " ", 1),
        s.value ? (t(), a(z, { key: 0 }, [
          R(" (" + c(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + c(s.value[u.value]?.toFixed?.(5) ?? s.value[u.value]) + ") ", 1)
        ], 64)) : $("", !0)
      ])
    ]));
  }
}), Wp = { class: "flex flex-col gap-2" }, Zp = ["width", "height"], Jp = ["value", "disabled"], Yp = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Xp = /* @__PURE__ */ O({
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
    }), u = x(() => n.field.size ?? 160);
    async function d() {
      if (!s.value)
        return;
      const f = i.value;
      if (f === "") {
        s.value.getContext("2d")?.clearRect(0, 0, u.value, u.value);
        return;
      }
      await (await import("qrcode")).toCanvas(s.value, f, {
        width: u.value,
        margin: 1,
        color: { dark: "#0f172a", light: "#ffffff" }
      });
    }
    return ve(() => {
      d();
    }), me(i, () => {
      d();
    }), (f, b) => (t(), a("div", Wp, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: u.value,
        height: u.value
      }, null, 8, Zp),
      e.field.from ? (t(), a("p", Yp, "From " + c(e.field.from), 1)) : (t(), a("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: b[0] || (b[0] = (g) => r("update:modelValue", g.target.value))
      }, null, 40, Jp))
    ]));
  }
}), Qp = { class: "flex flex-col gap-2" }, ev = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, tv = ["aria-label"], nv = {
  key: 0,
  class: "text-destructive text-xs"
}, av = ["value", "disabled"], lv = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, ov = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null), i = U(null), u = x(() => {
      if (n.field.from) {
        const b = n.values?.[n.field.from];
        return b == null ? "" : String(b);
      }
      return n.modelValue == null ? "" : String(n.modelValue);
    }), d = x(() => (n.field.format ?? "CODE128").toUpperCase());
    async function f() {
      if (!s.value)
        return;
      const b = u.value.trim();
      for (i.value = null; s.value.firstChild; )
        s.value.removeChild(s.value.firstChild);
      if (b !== "")
        try {
          const h = (await import("jsbarcode")).default;
          h(s.value, b, {
            format: d.value,
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
    }), me([u, d], () => {
      f();
    }), (b, g) => (t(), a("div", Qp, [
      o("div", ev, [
        (t(), a("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${d.value}`
        }, null, 8, tv))
      ]),
      i.value ? (t(), a("p", nv, c(i.value), 1)) : $("", !0),
      e.field.from ? (t(), a("p", lv, "From " + c(e.field.from) + " (" + c(d.value) + ")", 1)) : (t(), a("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: g[0] || (g[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, av))
    ]));
  }
}), sv = { class: "mr-2 inline-block w-3 opacity-60" }, rv = {
  key: 0,
  class: "text-muted-foreground p-3"
}, iv = /* @__PURE__ */ O({
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
    function n(u) {
      if (u == null)
        return "";
      if (typeof u == "string")
        return u;
      if (typeof u == "object")
        try {
          return JSON.stringify(u, null, 2);
        } catch {
          return String(u);
        }
      return String(u);
    }
    const r = x(() => {
      if (l.field.originalKey)
        return n(l.values?.[l.field.originalKey]);
      const u = l.modelValue;
      return n(u?.original);
    }), s = x(() => {
      if (l.field.modifiedKey)
        return n(l.values?.[l.field.modifiedKey]);
      const u = l.modelValue;
      return n(u?.modified);
    }), i = x(() => {
      const u = r.value.split(`
`), d = s.value.split(`
`), f = Math.max(u.length, d.length), b = [];
      for (let g = 0; g < f; g++) {
        const h = u[g], w = d[g];
        if (h === w) {
          h !== void 0 && b.push({ kind: "same", text: h });
          continue;
        }
        h !== void 0 && b.push({ kind: "del", text: h }), w !== void 0 && b.push({ kind: "add", text: w });
      }
      return b;
    });
    return (u, d) => (t(), a("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: se({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), a(z, null, V(i.value, (f, b) => (t(), a("div", {
        key: b,
        class: P(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": f.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": f.kind === "add",
          "text-muted-foreground": f.kind === "same"
        }])
      }, [
        o("span", sv, c(f.kind === "add" ? "+" : f.kind === "del" ? "-" : " "), 1),
        R(" " + c(f.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), a("p", rv, "No differences.")) : $("", !0)
    ], 4));
  }
}), uv = { class: "flex flex-col gap-3" }, dv = { class: "flex items-center justify-between gap-2" }, cv = { class: "text-sm font-medium" }, fv = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, mv = { class: "grid grid-cols-7 gap-1" }, pv = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, vv = ["title"], _8 = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, n = U(/* @__PURE__ */ new Date()), r = x(() => n.value.getFullYear()), s = x(() => n.value.getMonth()), i = x(
      () => n.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), u = x(() => {
      const g = /* @__PURE__ */ new Map();
      for (const h of l.events ?? []) {
        const w = g.get(h.date) ?? [];
        w.push(h), g.set(h.date, w);
      }
      return g;
    }), d = x(() => {
      const h = new Date(r.value, s.value, 1).getDay(), w = new Date(r.value, s.value + 1, 0).getDate(), y = [];
      for (let C = 0; C < h; C++)
        y.push({ day: null, key: `pad-${C}`, events: [] });
      for (let C = 1; C <= w; C++) {
        const S = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(C).padStart(2, "0")}`;
        y.push({ day: C, key: S, events: u.value.get(S) ?? [] });
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
      o("div", dv, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: f
        }, " Prev "),
        o("p", cv, c(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: b
        }, " Next ")
      ]),
      o("div", fv, [
        (t(), a(z, null, V(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (w) => o("span", { key: w }, c(w), 1)), 64))
      ]),
      o("div", mv, [
        (t(!0), a(z, null, V(d.value, (w) => (t(), a("div", {
          key: w.key,
          class: P(["border-border/60 min-h-16 rounded-md border p-1", w.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          w.day ? (t(), a("p", pv, c(w.day), 1)) : $("", !0),
          (t(!0), a(z, null, V(w.events.slice(0, 3), (y, C) => (t(), a("p", {
            key: `${w.key}-${C}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: y.label
          }, c(y.label), 9, vv))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), gv = { class: "flex items-center gap-3" }, hv = ["min", "max", "step", "value", "disabled", "aria-label"], bv = { class: "flex shrink-0 items-center gap-1" }, yv = ["min", "max", "step", "value", "disabled"], xv = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, kv = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(() => n.field.min ?? 0), i = x(() => n.field.max ?? 100), u = x(() => n.field.step ?? 1), d = x(() => {
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
    return (g, h) => (t(), a("div", gv, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (w) => b(w.target.value))
      }, null, 40, hv),
      o("div", bv, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: f.value ? "" : d.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (w) => b(w.target.value))
        }, null, 40, yv),
        e.field.unit ? (t(), a("span", xv, c(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), ft = /* @__PURE__ */ new Map();
function Vt(e, l) {
  ft.set(e, l);
}
function $v(e) {
  return ft.get(e);
}
function A8(e) {
  return ft.has(e);
}
function wv() {
  return [...ft.keys()].sort();
}
function P8() {
  ft.clear();
}
const Cv = ["name", "value", "checked", "disabled", "onChange"], Sv = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Mv = { class: "whitespace-nowrap" }, Bv = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, _v = ["name", "value", "checked", "disabled", "onChange"], Av = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Pv = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, zv = { class: "text-center text-xs font-medium" }, Ov = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Lv = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, jv = /* @__PURE__ */ O({
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
      () => n.field.preview ? $v(n.field.preview) : void 0
    ), i = x(() => !!n.field.preview && !s.value), u = x(() => n.field.layout === "segmented"), d = x(() => {
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
    return (b, g) => u.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: P(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(z, null, V(e.options, (h) => (t(), a("label", {
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
        }, null, 40, Cv),
        g[0] || (g[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", Sv, [
          (t(), D(_e(s.value), {
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", Mv, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Bv, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: P(["grid gap-3", d.value])
    }, [
      (t(!0), a(z, null, V(e.options, (h) => (t(), a("label", {
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
        }, null, 40, _v),
        g[1] || (g[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Av, [
          s.value ? (t(), D(_e(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", Pv, " no preview ")) : $("", !0)
        ]),
        o("span", zv, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Ov, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", Lv, [
        g[2] || (g[2] = R(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        R(". Registered: " + c(k(wv)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), Vv = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Dv = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", Vv, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Tv = { class: "flex flex-col items-center gap-1 text-center" }, Ev = {
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
    return (s, i) => (t(), a("div", Tv, [
      o("div", {
        class: P(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: n.value, color: n.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", Ev, c(e.caption), 1)) : $("", !0)
    ]));
  }
}), Iv = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Fv = { class: "flex items-center gap-3" }, Nv = ["src"], Rv = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Uv = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Hv = {
  key: 0,
  class: "text-right text-sm"
}, Kv = { class: "text-neutral-500" }, qv = { class: "tabular-nums" }, Gv = { key: 1 }, Wv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Zv = { class: "mt-2 font-medium" }, Jv = { key: 2 }, Yv = { class: "w-full text-sm" }, Xv = { class: "w-full py-3 pr-2" }, Qv = {
  key: 0,
  class: "text-xs text-neutral-500"
}, eg = { key: 0 }, tg = ["colspan"], ng = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, ag = { class: "w-64 text-sm" }, lg = { class: "tabular-nums" }, og = {
  key: 3,
  class: "py-2"
}, sg = { key: 4 }, rg = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, ig = { class: "mt-2 flex flex-col gap-1 text-sm" }, ug = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, dg = { key: 0 }, cg = {
  key: 1,
  class: "mt-1"
}, fg = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, mg = /* @__PURE__ */ O({
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
    function u(f) {
      return f ?? [];
    }
    function d(f) {
      return f ?? "";
    }
    return (f, b) => (t(), a("article", Iv, [
      o("div", Fv, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Nv)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: n() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), a(z, null, V(e.document.blocks, (g, h) => (t(), a(z, { key: h }, [
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
            g.subtitle ? (t(), a("p", Rv, c(g.subtitle), 1)) : $("", !0),
            g.reference ? (t(), a("p", Uv, c(g.reference), 1)) : $("", !0)
          ]),
          r(g).length ? (t(), a("dl", Hv, [
            (t(!0), a(z, null, V(r(g), (w, y) => (t(), a("div", {
              key: y,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Kv, c(w.label), 1),
              o("dd", qv, c(w.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : g.type === "party" ? (t(), a("section", Gv, [
          o("h2", Wv, c(g.heading), 1),
          o("p", Zv, c(g.name), 1),
          (t(!0), a(z, null, V(u(g.lines), (w, y) => (t(), a("p", {
            key: y,
            class: "text-sm text-neutral-600"
          }, c(w), 1))), 128))
        ])) : g.type === "lines" ? (t(), a("section", Jv, [
          o("table", Yv, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: n() })
              }, [
                (t(!0), a(z, null, V(u(g.columns), (w, y) => (t(), a("th", {
                  key: y,
                  class: P(["pb-2 font-medium", y > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(w), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), a(z, null, V(s(g), (w, y) => (t(), a("tr", {
                key: y,
                class: "border-b border-neutral-200"
              }, [
                o("td", Xv, [
                  o("p", null, c(w.description), 1),
                  w.detail ? (t(), a("p", Qv, c(w.detail), 1)) : $("", !0)
                ]),
                (t(!0), a(z, null, V(w.cells, (C, S) => (t(), a("td", {
                  key: S,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(C), 1))), 128))
              ]))), 128)),
              s(g).length === 0 ? (t(), a("tr", eg, [
                o("td", {
                  colspan: u(g.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(g.empty), 9, tg)
              ])) : $("", !0)
            ])
          ]),
          i(g).length ? (t(), a("div", ng, [
            o("dl", ag, [
              (t(!0), a(z, null, V(i(g), (w, y) => (t(), a("div", {
                key: y,
                class: P([
                  "flex justify-between py-1",
                  w.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(w.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                o("dt", {
                  class: P(w.strong ? "" : "text-neutral-600")
                }, c(w.label), 3),
                o("dd", lg, c(w.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : g.type === "code" ? (t(), a("section", og, [
          E(ea, {
            code: d(g.code),
            caption: d(g.caption),
            style: se(d(g.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : g.type === "steps" ? (t(), a("section", sg, [
          o("h2", rg, c(g.heading), 1),
          o("ol", ig, [
            (t(!0), a(z, null, V(u(g.items), (w, y) => (t(), a("li", {
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
          class: P(["text-sm", g.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(g.emphasis ? { color: n() } : void 0)
        }, c(g.text), 7)) : g.type === "footer" ? (t(), a("footer", ug, [
          g.text ? (t(), a("p", dg, c(g.text), 1)) : $("", !0),
          u(g.contacts).length ? (t(), a("p", cg, c(u(g.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), a("p", fg, " This document contains a “" + c(g.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), pg = ["aria-label", "title"], vg = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gg = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, z8 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: n } = Gn(), r = x(() => l.value.theme === "dark");
    function s() {
      n({ theme: r.value ? "light" : "dark" });
    }
    return (i, u) => (t(), a("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: s
    }, [
      (t(), a("svg", vg, [
        r.value ? (t(), a(z, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", gg))
      ]))
    ], 8, pg));
  }
}), hg = ["width", "height"], bg = { key: 0 }, yg = ["x1", "x2", "y1", "y2"], xg = ["x", "y"], kg = ["x1", "x2", "y1", "y2"], $g = ["x", "y"], wg = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Cg = ["x", "y", "width", "height", "fill", "fill-opacity"], Sg = ["x", "y"], Mg = ["x", "y"], Bg = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, _g = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Ag = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Pg = { class: "text-xs font-semibold tabular-nums" }, zg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Og = { class: "text-muted-foreground" }, $n = 5.6, O8 = /* @__PURE__ */ O({
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
    function r(B) {
      return n[B] ?? B;
    }
    function s(B, F) {
      if (!l.thresholds?.length)
        return F;
      const j = l.thresholds.find((X) => B < X.max);
      return r(j ? j.color : l.aboveColor);
    }
    const i = U(null), u = U(560), d = U(null);
    let f = null;
    ve(() => {
      f = new ResizeObserver((B) => {
        u.value = Math.max(160, B[0].contentRect.width);
      }), i.value && f.observe(i.value);
    }), ke(() => f?.disconnect());
    const b = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], g = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, j) => ({
      ...F,
      color: F.color ?? b[j % b.length]
    }))), h = x(() => g.value[0]?.points.map((B) => B.label) ?? []), w = x(() => h.value.length), y = x(() => l.orientation === "horizontal"), C = x(() => Math.max(0, ...h.value.map((B) => B.length))), S = x(() => {
      if (!y.value)
        return l.showAxis ? 44 : 8;
      const B = C.value * $n + 16;
      return Math.round(Math.min(Math.max(60, B), u.value * 0.4));
    }), M = x(() => Math.max(4, Math.floor((S.value - 16) / $n)));
    function _(B) {
      return B.length <= M.value ? B : `${B.slice(0, M.value - 1)}…`;
    }
    const p = x(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: S.value
    })), m = x(() => ({
      w: Math.max(1, u.value - p.value.left - p.value.right),
      h: Math.max(1, l.height - p.value.top - p.value.bottom)
    })), v = (B) => l.format ? l.format(B) : A(B);
    function A(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const I = x(() => {
      const B = h.value.map(
        (ge, ye) => l.stacked ? g.value.reduce((oe, Q) => oe + Math.max(0, Q.points[ye]?.value ?? 0), 0) : Math.max(...g.value.map((oe) => oe.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const F = Math.max(...B, 0);
      if (F <= 0)
        return 1;
      const j = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * j) ?? 10) * j;
    }), T = x(
      () => (y.value ? m.value.h : m.value.w) / Math.max(1, w.value)
    ), te = x(() => T.value * 0.68), H = x(
      () => l.stacked || g.value.length <= 1 ? te.value : te.value / g.value.length
    ), Z = x(() => {
      const B = [], F = new Array(w.value).fill(0);
      return g.value.forEach((j, X) => {
        j.points.forEach((ge, ye) => {
          const Q = Math.max(0, ge.value) / I.value * (y.value ? m.value.w : m.value.h), ae = (y.value ? p.value.top : p.value.left) + ye * T.value + (T.value - te.value) / 2, Ce = l.stacked ? 0 : X * H.value;
          B.push(
            y.value ? {
              x: p.value.left + F[ye],
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
              y: p.value.top + m.value.h - Q - F[ye],
              w: Math.max(0, H.value - 2),
              h: Q,
              color: s(ge.value, j.color),
              label: ge.label,
              name: j.name,
              value: ge.value,
              index: ye
            }
          ), l.stacked && (F[ye] += Q);
        });
      }), B;
    }), N = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: I.value * (y.value ? B : 1 - B),
        x: p.value.left + m.value.w * B,
        y: p.value.top + m.value.h * B
      }))
    ), W = x(() => Math.max(1, Math.ceil(w.value / (y.value ? 14 : 10))));
    function J(B) {
      return B === w.value - 1 || B % W.value === 0;
    }
    function G(B) {
      return (y.value ? p.value.top : p.value.left) + B * T.value + T.value / 2;
    }
    const q = x(() => d.value === null ? null : {
      label: h.value[d.value],
      rows: g.value.map((B) => ({
        name: B.name,
        color: B.color,
        value: B.points[d.value]?.value ?? 0
      }))
    });
    return (B, F) => (t(), a("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      w.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: F[0] || (F[0] = (j) => d.value = null)
        }, [
          e.showAxis ? (t(), a("g", bg, [
            y.value ? (t(), a(z, { key: 0 }, [
              (t(!0), a(z, null, V(N.value, (j) => (t(), a("line", {
                key: `g-${j.x}`,
                x1: j.x,
                x2: j.x,
                y1: p.value.top,
                y2: p.value.top + m.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, yg))), 128)),
              (t(!0), a(z, null, V(N.value, (j) => (t(), a("text", {
                key: `gt-${j.x}`,
                x: j.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(A(j.value)), 9, xg))), 128))
            ], 64)) : (t(), a(z, { key: 1 }, [
              (t(!0), a(z, null, V(N.value, (j) => (t(), a("line", {
                key: `g-${j.y}`,
                x1: p.value.left,
                x2: u.value - p.value.right,
                y1: j.y,
                y2: j.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, kg))), 128)),
              (t(!0), a(z, null, V(N.value, (j) => (t(), a("text", {
                key: `gt-${j.y}`,
                x: p.value.left - 8,
                y: j.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(A(j.value)), 9, $g))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), a(z, null, V(h.value, (j, X) => (t(), a("rect", {
            key: `hit-${X}`,
            x: y.value ? p.value.left : p.value.left + X * T.value,
            y: y.value ? p.value.top + X * T.value : p.value.top,
            width: y.value ? m.value.w : T.value,
            height: y.value ? T.value : m.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === X ? 0.4 : 0,
            onMouseenter: (ge) => d.value = X
          }, null, 40, wg))), 128)),
          (t(!0), a(z, null, V(Z.value, (j, X) => (t(), a("rect", {
            key: `b-${X}`,
            x: j.x,
            y: j.y,
            width: j.w,
            height: j.h,
            fill: j.color,
            "fill-opacity": d.value === null || d.value === j.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Cg))), 128)),
          y.value ? (t(!0), a(z, { key: 1 }, V(h.value, (j, X) => pe((t(), a("text", {
            key: `c-${X}`,
            x: p.value.left - 8,
            y: G(X) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(c(_(j)) + " ", 1),
            o("title", null, c(j), 1)
          ], 8, Sg)), [
            [He, J(X)]
          ])), 128)) : (t(!0), a(z, { key: 2 }, V(h.value, (j, X) => pe((t(), a("text", {
            key: `c-${X}`,
            x: G(X),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(j), 9, Mg)), [
            [He, J(X)]
          ])), 128))
        ], 40, hg)),
        q.value ? (t(), a("div", Bg, [
          o("p", _g, c(q.value.label), 1),
          (t(!0), a(z, null, V(q.value.rows, (j, X) => (t(), a("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", Ag, c(j.name || "Value"), 1),
            o("span", Pg, c(v(j.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && g.value.length > 1 ? (t(), a("div", zg, [
          (t(!0), a(z, null, V(g.value, (j, X) => (t(), a("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", Og, c(j.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Lg = ["width", "height"], jg = ["id"], Vg = ["stop-color"], Dg = ["stop-color"], Tg = { key: 0 }, Eg = ["x1", "x2", "y1", "y2"], Ig = ["x", "y"], Fg = ["x", "y"], Ng = ["x1", "x2", "y1", "y2"], Rg = ["d", "fill"], Ug = ["d", "stroke", "stroke-dasharray"], Hg = ["cx", "cy", "fill"], Kg = { key: 1 }, qg = ["x1", "x2", "y1", "y2"], Gg = ["cx", "cy", "fill"], Wg = ["x", "y"], Zg = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Jg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Yg = { class: "text-xs font-semibold tabular-nums" }, Xg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Qg = { class: "text-muted-foreground" }, eh = /* @__PURE__ */ O({
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
    const l = e, n = x(() => b.value.some((B) => B.axis === "right")), r = U(null), s = U(560), i = U(null);
    let u = null;
    ve(() => {
      u = new ResizeObserver((B) => {
        s.value = Math.max(160, B[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), ke(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], f = Math.random().toString(36).slice(2, 9), b = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, j) => ({
      ...F,
      color: F.color ?? d[j % d.length]
    }))), g = x(() => b.value[0]?.points.map((B) => B.label) ?? []), h = x(() => g.value.length), w = x(() => ({
      top: 12,
      right: l.showAxis && n.value ? 44 : 12,
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
      const j = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * j) ?? 10) * j;
    }
    const M = x(
      () => S(
        b.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((F) => F.value))
      )
    ), _ = x(
      () => S(
        b.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((F) => F.value))
      )
    ), p = x(() => ({
      w: Math.max(1, s.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function m(B) {
      return w.value.left + (h.value <= 1 ? 0 : B / (h.value - 1) * p.value.w);
    }
    function v(B, F = "left") {
      const j = F === "right" ? _.value : M.value;
      return w.value.top + p.value.h - B / j * p.value.h;
    }
    const A = x(
      () => b.value.map((B) => {
        const F = B.points.map((X, ge) => ({
          ...X,
          x: m(ge),
          y: v(X.value, B.axis ?? "left")
        })), j = B.stepped ? I(F) : T(F);
        return { ...B, pts: F, line: j, area: te(j, F) };
      })
    );
    function I(B) {
      if (B.length === 0)
        return "";
      let F = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let j = 1; j < B.length; j++)
        F += ` L${B[j].x.toFixed(2)},${B[j - 1].y.toFixed(2)} L${B[j].x.toFixed(2)},${B[j].y.toFixed(2)}`;
      return F;
    }
    function T(B) {
      const F = B.length;
      if (F === 0)
        return "";
      if (F === 1)
        return `M${B[0].x},${B[0].y}`;
      const j = [], X = [];
      for (let oe = 0; oe < F - 1; oe++)
        j[oe] = B[oe + 1].x - B[oe].x, X[oe] = j[oe] === 0 ? 0 : (B[oe + 1].y - B[oe].y) / j[oe];
      const ge = [X[0]];
      for (let oe = 1; oe < F - 1; oe++)
        if (X[oe - 1] * X[oe] <= 0)
          ge[oe] = 0;
        else {
          const Q = 2 * j[oe] + j[oe - 1], ae = j[oe] + 2 * j[oe - 1];
          ge[oe] = (Q + ae) / (Q / X[oe - 1] + ae / X[oe]);
        }
      ge[F - 1] = X[F - 2];
      let ye = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let oe = 0; oe < F - 1; oe++) {
        const Q = j[oe] / 3;
        ye += ` C${(B[oe].x + Q).toFixed(2)},${(B[oe].y + ge[oe] * Q).toFixed(2)} ${(B[oe + 1].x - Q).toFixed(2)},${(B[oe + 1].y - ge[oe + 1] * Q).toFixed(2)} ${B[oe + 1].x.toFixed(2)},${B[oe + 1].y.toFixed(2)}`;
      }
      return ye;
    }
    function te(B, F) {
      if (F.length === 0)
        return "";
      const j = w.value.top + p.value.h;
      return `${B} L${F[F.length - 1].x.toFixed(2)},${j} L${F[0].x.toFixed(2)},${j} Z`;
    }
    const H = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: w.value.top + p.value.h * B,
        value: M.value * (1 - B)
      }))
    ), Z = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: w.value.top + p.value.h * B,
        value: _.value * (1 - B)
      }))
    ), N = x(() => Math.max(1, Math.ceil(h.value / 8)));
    function W(B) {
      return B === h.value - 1 || B % N.value === 0;
    }
    function J(B) {
      const F = B.currentTarget.getBoundingClientRect(), j = B.clientX - F.left - w.value.left, X = h.value <= 1 ? 1 : p.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(j / X)));
    }
    const G = x(() => {
      if (i.value === null || h.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: m(B),
        label: g.value[B],
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
    return (B, F) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: J,
          onMouseleave: F[0] || (F[0] = (j) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), a(z, null, V(A.value, (j, X) => (t(), a("linearGradient", {
              id: `pk-fill-${k(f)}-${X}`,
              key: X,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": j.color,
                "stop-opacity": "0.25"
              }, null, 8, Vg),
              o("stop", {
                offset: "100%",
                "stop-color": j.color,
                "stop-opacity": "0.01"
              }, null, 8, Dg)
            ], 8, jg))), 128))
          ]),
          e.showAxis ? (t(), a("g", Tg, [
            (t(!0), a(z, null, V(H.value, (j) => (t(), a("line", {
              key: j.y,
              x1: w.value.left,
              x2: s.value - w.value.right,
              y1: j.y,
              y2: j.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Eg))), 128)),
            (t(!0), a(z, null, V(H.value, (j) => (t(), a("text", {
              key: `t-${j.y}`,
              x: w.value.left - 8,
              y: j.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(j.value)), 9, Ig))), 128)),
            n.value ? (t(!0), a(z, { key: 0 }, V(Z.value, (j) => (t(), a("text", {
              key: `rt-${j.y}`,
              x: s.value - w.value.right + 8,
              y: j.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(j.value)), 9, Fg))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), a(z, null, V(g.value, (j, X) => pe((t(), a("line", {
            key: `v-${X}`,
            x1: m(X),
            x2: m(X),
            y1: w.value.top,
            y2: w.value.top + p.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Ng)), [
            [He, W(X)]
          ])), 128)),
          (t(!0), a(z, null, V(A.value, (j, X) => (t(), a("g", {
            key: `s-${X}`
          }, [
            j.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: j.area,
              fill: `url(#pk-fill-${k(f)}-${X})`
            }, null, 8, Rg)) : $("", !0),
            o("path", {
              d: j.line,
              fill: "none",
              stroke: j.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": j.dashed ? "6 4" : void 0
            }, null, 8, Ug),
            j.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: j.pts[0].x,
              cy: j.pts[0].y,
              r: "3",
              fill: j.color
            }, null, 8, Hg)) : $("", !0)
          ]))), 128)),
          G.value ? (t(), a("g", Kg, [
            o("line", {
              x1: G.value.x,
              x2: G.value.x,
              y1: w.value.top,
              y2: w.value.top + p.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, qg),
            (t(!0), a(z, null, V(G.value.rows, (j, X) => (t(), a("circle", {
              key: `d-${X}`,
              cx: G.value.x,
              cy: j.y,
              r: "4",
              fill: j.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Gg))), 128))
          ])) : $("", !0),
          (t(!0), a(z, null, V(g.value, (j, X) => pe((t(), a("text", {
            key: `x-${X}`,
            x: m(X),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(j), 9, Wg)), [
            [He, W(X)]
          ])), 128))
        ], 40, Lg)),
        G.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(q.value)
        }, [
          o("p", Zg, c(G.value.label), 1),
          (t(!0), a(z, null, V(G.value.rows, (j, X) => (t(), a("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", Jg, c(j.name || "Value"), 1),
            o("span", Yg, c(y(j.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && b.value.length > 1 ? (t(), a("div", Xg, [
          (t(!0), a(z, null, V(A.value, (j, X) => (t(), a("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", Qg, c(j.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), th = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, nh = { class: "text-muted-foreground text-[11px] capitalize" }, ah = { class: "text-sm font-semibold tabular-nums" }, lh = {
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
    return (l, n) => (t(), a("div", th, [
      o("p", nh, c(e.label), 1),
      o("p", ah, [
        R(c(e.value) + " ", 1),
        e.share ? (t(), a("span", lh, " (" + c(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), oh = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, sh = ["width", "height", "viewBox", "aria-label"], rh = ["d", "fill", "fill-opacity", "onMouseenter"], ih = ["x", "y"], uh = ["x", "y"], dh = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, ch = ["onMouseenter"], fh = { class: "min-w-0 flex-1 truncate capitalize" }, mh = { class: "tabular-nums font-medium" }, ph = { class: "text-muted-foreground w-9 text-right tabular-nums" }, L8 = /* @__PURE__ */ O({
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
    ], r = x(() => l.data.reduce((M, _) => M + _.value, 0)), s = U(null), i = x(() => l.height), u = x(() => i.value / 2 - 4), d = x(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function f(M) {
      return n[M % n.length];
    }
    function b(M) {
      return 1 - Math.min(0.55, Math.floor(M / n.length) * 0.28);
    }
    const g = x(() => {
      if (r.value <= 0)
        return [];
      const M = i.value / 2;
      let _ = -Math.PI / 2;
      return l.data.map((p, m) => {
        const v = p.value / r.value, A = v * Math.PI * 2, I = _, T = _ + A;
        return _ = T, {
          ...p,
          share: v,
          colour: f(m),
          opacity: b(m),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: v >= 0.9999 ? y(M) : w(M, I, T, u.value, d.value)
        };
      });
    });
    function h(M, _, p) {
      return `${(M + Math.cos(_) * p).toFixed(2)},${(M + Math.sin(_) * p).toFixed(2)}`;
    }
    function w(M, _, p, m, v) {
      const A = p - _ > Math.PI ? 1 : 0;
      return v <= 0 ? `M${M},${M} L${h(M, _, m)} A${m},${m} 0 ${A} 1 ${h(M, p, m)} Z` : [
        `M${h(M, _, m)}`,
        `A${m},${m} 0 ${A} 1 ${h(M, p, m)}`,
        `L${h(M, p, v)}`,
        `A${v},${v} 0 ${A} 0 ${h(M, _, v)}`,
        "Z"
      ].join(" ");
    }
    function y(M) {
      const _ = u.value, p = d.value, m = [
        `M${M - _},${M}`,
        `A${_},${_} 0 1 1 ${M + _},${M}`,
        `A${_},${_} 0 1 1 ${M - _},${M}`,
        "Z"
      ];
      return p <= 0 ? m.join(" ") : [
        ...m,
        `M${M - p},${M}`,
        `A${p},${p} 0 1 0 ${M + p},${M}`,
        `A${p},${p} 0 1 0 ${M - p},${M}`,
        "Z"
      ].join(" ");
    }
    const C = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M), S = (M) => `${(M * 100).toFixed(M < 0.01 ? 2 : 0)}%`;
    return (M, _) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", oh, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${C(r.value)}`
      }, [
        (t(!0), a(z, null, V(g.value, (p, m) => (t(), a("path", {
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
        }, null, 40, rh))), 128)),
        e.type === "doughnut" ? (t(), a(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(C(s.value === null ? r.value : g.value[s.value].value)), 9, ih),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : g.value[s.value].label), 9, uh)
        ], 64)) : $("", !0)
      ], 8, sh)),
      o("ul", dh, [
        (t(!0), a(z, null, V(g.value, (p, m) => (t(), a("li", {
          key: m,
          class: P(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === m ? "bg-muted" : ""]),
          onMouseenter: (v) => s.value = m,
          onMouseleave: _[1] || (_[1] = (v) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: p.colour, opacity: p.opacity })
          }, null, 4),
          o("span", fh, c(p.label), 1),
          o("span", mh, c(C(p.value)), 1),
          o("span", ph, c(S(p.share)), 1)
        ], 42, ch))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(mt, {
        key: 0,
        label: g.value[s.value].label,
        value: C(g.value[s.value].value),
        share: S(g.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), vh = ["width", "height", "viewBox", "aria-label"], gh = { class: "text-border" }, hh = ["x1", "x2", "y1", "y2", "stroke-dasharray"], bh = { class: "fill-muted-foreground text-[10px]" }, yh = ["x", "y"], xh = ["x", "y"], kh = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], $h = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, j8 = /* @__PURE__ */ O({
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
    let u = null;
    ve(() => {
      u = new ResizeObserver((N) => {
        const W = N[0]?.contentRect.width ?? 0;
        W > 0 && (s.value = W);
      }), r.value && u.observe(r.value);
    }), ke(() => u?.disconnect());
    const d = x(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (N, W) => W.color ?? n[N % n.length], b = x(() => d.value.flatMap((N) => N.points)), g = x(() => b.value.some((N) => typeof N.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, w = x(() => Math.max(10, s.value - h.left - h.right)), y = x(() => Math.max(10, l.height - h.top - h.bottom));
    function C(N) {
      if (N.length === 0)
        return [0, 1];
      const W = Math.min(...N), J = Math.max(...N), G = J - W || Math.abs(J) || 1;
      return [W - G * 0.08, J + G * 0.08];
    }
    const S = x(() => C(b.value.map((N) => N.x))), M = x(() => C(b.value.map((N) => N.y))), _ = (N) => {
      const [W, J] = S.value;
      return h.left + (N - W) / (J - W) * w.value;
    }, p = (N) => {
      const [W, J] = M.value;
      return h.top + y.value - (N - W) / (J - W) * y.value;
    }, m = x(() => Math.max(...b.value.map((N) => N.r ?? 0), 0));
    function v(N) {
      if (!g.value || !m.value)
        return 4;
      const W = Math.max(0, N.r ?? 0) / m.value;
      return 3 + Math.sqrt(W) * (l.maxRadius - 3);
    }
    function A([N, W]) {
      return Array.from({ length: 5 }, (J, G) => N + (W - N) / 4 * G);
    }
    const I = x(() => A(S.value)), T = x(() => A(M.value)), te = (N) => l.formatX?.(N) ?? String(Math.round(N * 100) / 100), H = (N) => l.formatY?.(N) ?? String(Math.round(N * 100) / 100), Z = x(() => {
      if (!i.value)
        return null;
      const N = d.value[i.value.s], W = N?.points[i.value.p];
      return W ? { series: N, point: W } : null;
    });
    return (N, W) => (t(), a("div", {
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
        o("g", gh, [
          (t(!0), a(z, null, V(T.value, (J, G) => (t(), a("line", {
            key: `gy-${G}`,
            x1: h.left,
            x2: h.left + w.value,
            y1: p(J),
            y2: p(J),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": G === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, hh))), 128))
        ]),
        o("g", bh, [
          (t(!0), a(z, null, V(T.value, (J, G) => (t(), a("text", {
            key: `ty-${G}`,
            x: h.left - 8,
            y: p(J) + 3,
            "text-anchor": "end"
          }, c(H(J)), 9, yh))), 128)),
          (t(!0), a(z, null, V(I.value, (J, G) => (t(), a("text", {
            key: `tx-${G}`,
            x: _(J),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(te(J)), 9, xh))), 128))
        ]),
        (t(!0), a(z, null, V(d.value, (J, G) => (t(), a("g", {
          key: `s-${G}`
        }, [
          (t(!0), a(z, null, V(J.points, (q, B) => (t(), a("circle", {
            key: `p-${G}-${B}`,
            cx: _(q.x),
            cy: p(q.y),
            r: v(q),
            fill: f(G, J),
            "fill-opacity": g.value ? 0.55 : 0.85,
            stroke: f(G, J),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== G || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (F) => i.value = { s: G, p: B },
            onMouseleave: W[0] || (W[0] = (F) => i.value = null)
          }, null, 40, kh))), 128))
        ]))), 128))
      ], 8, vh)),
      Z.value ? (t(), D(mt, {
        key: 0,
        label: Z.value.point.label ?? Z.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(Z.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(Z.value.point.y)}`,
        share: g.value && Z.value.point.r != null ? String(Z.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && d.value.length > 1 ? (t(), a("div", $h, [
        (t(!0), a(z, null, V(d.value, (J, G) => (t(), a("span", {
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
}), wh = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Ch = ["width", "height", "viewBox"], Sh = ["points"], Mh = ["x1", "y1", "x2", "y2"], Bh = ["points", "fill", "stroke"], _h = ["cx", "cy", "fill", "onMouseenter"], Ah = ["x", "y", "text-anchor"], Ph = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, zh = { class: "truncate" }, V8 = /* @__PURE__ */ O({
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
    ), s = x(() => r.value[0]?.points.map((p) => p.label) ?? []), i = x(() => s.value.length), u = x(() => l.height), d = x(() => u.value / 2), f = x(() => u.value / 2 - 34), b = x(() => {
      const p = Math.max(...r.value.flatMap((A) => A.points.map((I) => I.value)), 0);
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
        x: d.value + Math.cos(v) * f.value * m,
        y: d.value + Math.sin(v) * f.value * m
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
            const I = h(A, v);
            return `${I.x.toFixed(2)},${I.y.toFixed(2)}`;
          }).join(" "),
          dots: m.map((v, A) => h(A, v))
        };
      })
    ), S = x(
      () => s.value.map((p, m) => {
        const v = g(m), A = d.value + Math.cos(v) * (f.value + 14), I = d.value + Math.sin(v) * (f.value + 14), T = Math.cos(v);
        return {
          label: p,
          x: A,
          y: I + 3,
          anchor: Math.abs(T) < 0.2 ? "middle" : T > 0 ? "start" : "end"
        };
      })
    ), M = U(null), _ = (p) => l.format ? l.format(p) : new Intl.NumberFormat().format(p);
    return (p, m) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", wh, [
      (t(), a("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(z, null, V(y.value, (v) => (t(), a("polygon", {
          key: v.f,
          points: v.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Sh))), 128)),
        (t(!0), a(z, null, V(s.value, (v, A) => (t(), a("line", {
          key: `spoke-${A}`,
          x1: d.value,
          y1: d.value,
          x2: h(A, 1).x,
          y2: h(A, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Mh))), 128)),
        (t(!0), a(z, null, V(C.value, (v, A) => (t(), a("g", {
          key: `s-${A}`
        }, [
          o("polygon", {
            points: v.outline,
            fill: v.color,
            "fill-opacity": "0.16",
            stroke: v.color,
            "stroke-width": "2"
          }, null, 8, Bh),
          (t(!0), a(z, null, V(v.dots, (I, T) => (t(), a("circle", {
            key: T,
            cx: I.x,
            cy: I.y,
            r: "3",
            fill: v.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (te) => M.value = {
              series: v.name,
              axis: s.value[T],
              value: v.values[T]?.value ?? 0
            },
            onMouseleave: m[0] || (m[0] = (te) => M.value = null)
          }, null, 40, _h))), 128))
        ]))), 128)),
        (t(!0), a(z, null, V(S.value, (v, A) => (t(), a("text", {
          key: `l-${A}`,
          x: v.x,
          y: v.y,
          "text-anchor": v.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(v.label), 9, Ah))), 128))
      ], 8, Ch)),
      e.showLegend ? (t(), a("ul", Ph, [
        (t(!0), a(z, null, V(r.value, (v, A) => (t(), a("li", {
          key: A,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: v.color })
          }, null, 4),
          o("span", zh, c(v.name), 1)
        ]))), 128))
      ])) : $("", !0),
      M.value ? (t(), D(mt, {
        key: 1,
        label: `${M.value.series} — ${M.value.axis}`,
        value: _(M.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Oh = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Lh = ["width", "height", "viewBox"], jh = ["cx", "cy", "r"], Vh = ["d", "fill", "fill-opacity", "onMouseenter"], Dh = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Th = { class: "min-w-0 flex-1 truncate capitalize" }, Eh = { class: "font-medium tabular-nums" }, D8 = /* @__PURE__ */ O({
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
    ], r = U(null), s = x(() => l.height), i = x(() => s.value / 2), u = x(() => s.value / 2 - 6), d = x(() => Math.max(...l.data.map((w) => Math.max(0, w.value)), 0)), f = x(() => {
      const w = l.data.length;
      if (w === 0 || d.value <= 0)
        return [];
      const y = Math.PI * 2 / w;
      return l.data.map((C, S) => {
        const M = Math.sqrt(Math.max(0, C.value) / d.value), _ = u.value * M, p = S * y - Math.PI / 2, m = p + y;
        return {
          ...C,
          color: n[S % n.length],
          share: d.value === 0 ? 0 : C.value / d.value,
          path: b(i.value, p, m, _)
        };
      });
    });
    function b(w, y, C, S) {
      if (S <= 0)
        return "";
      if (C - y >= Math.PI * 2 - 1e-6)
        return `M${w - S},${w} A${S},${S} 0 1 1 ${w + S},${w} A${S},${S} 0 1 1 ${w - S},${w} Z`;
      const M = C - y > Math.PI ? 1 : 0, _ = w + Math.cos(y) * S, p = w + Math.sin(y) * S, m = w + Math.cos(C) * S, v = w + Math.sin(C) * S;
      return `M${w},${w} L${_.toFixed(2)},${p.toFixed(2)} A${S.toFixed(2)},${S.toFixed(2)} 0 ${M} 1 ${m.toFixed(2)},${v.toFixed(2)} Z`;
    }
    const g = x(() => [0.5, 0.75, 1].map((w) => u.value * w)), h = (w) => l.format ? l.format(w) : new Intl.NumberFormat().format(w);
    return (w, y) => f.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Oh, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(z, null, V(g.value, (C) => (t(), a("circle", {
          key: C,
          cx: i.value,
          cy: i.value,
          r: C,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, jh))), 128)),
        (t(!0), a(z, null, V(f.value, (C, S) => (t(), a("path", {
          key: S,
          d: C.path,
          fill: C.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === S ? 0.75 : 0.3,
          onMouseenter: (M) => r.value = S,
          onMouseleave: y[0] || (y[0] = (M) => r.value = null)
        }, null, 40, Vh))), 128))
      ], 8, Lh)),
      e.showLegend ? (t(), a("ul", Dh, [
        (t(!0), a(z, null, V(f.value, (C, S) => (t(), a("li", {
          key: S,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: C.color })
          }, null, 4),
          o("span", Th, c(C.label), 1),
          o("span", Eh, c(h(C.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), D(mt, {
        key: 1,
        label: f.value[r.value].label,
        value: h(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Ih = ["width", "height"], Fh = ["x1", "x2", "y1", "y2"], Nh = ["x", "y"], Rh = ["x", "y"], Uh = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Hh = ["x", "y", "width", "height", "fill", "fill-opacity"], Kh = ["d", "stroke"], qh = ["cx", "cy", "fill"], Gh = ["x", "y"], Wh = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Zh = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Jh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Yh = { class: "text-xs font-semibold tabular-nums" }, Xh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Qh = { class: "text-muted-foreground" }, T8 = /* @__PURE__ */ O({
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
      i = new ResizeObserver((G) => {
        r.value = Math.max(160, G[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ke(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], f = x(
      () => l.bars.map((G, q) => ({
        ...G,
        color: G.color ?? u[q % u.length]
      }))
    ), b = x(
      () => l.lines.map((G, q) => ({
        ...G,
        color: G.color ?? d[q % d.length]
      }))
    ), g = x(
      () => f.value[0]?.points.map((G) => G.label) ?? b.value[0]?.points.map((G) => G.label) ?? []
    ), h = x(() => g.value.length), w = x(() => l.lineAxis === "right"), y = x(() => ({
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
      return ([1, 2, 2.5, 5, 10].find((j) => q <= j * B) ?? 10) * B;
    }
    const M = x(
      () => S([
        ...f.value.flatMap((G) => G.points.map((q) => q.value)),
        ...w.value ? [] : b.value.flatMap((G) => G.points.map((q) => q.value))
      ])
    ), _ = x(
      () => w.value ? S(b.value.flatMap((G) => G.points.map((q) => q.value))) : M.value
    ), p = x(() => C.value.w / Math.max(1, h.value)), m = x(() => p.value * 0.6), v = x(() => m.value / Math.max(1, f.value.length));
    function A(G) {
      return y.value.left + G * p.value + p.value / 2;
    }
    const I = x(
      () => f.value.flatMap(
        (G, q) => G.points.map((B, F) => {
          const j = Math.max(0, B.value) / M.value * C.value.h;
          return {
            x: A(F) - m.value / 2 + q * v.value,
            y: y.value.top + C.value.h - j,
            w: Math.max(0, v.value - 2),
            h: j,
            color: G.color,
            index: F,
            name: G.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), T = x(
      () => b.value.map((G) => {
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
        label: g.value[G],
        rows: [
          ...f.value.map((q) => ({
            name: q.name,
            color: q.color,
            value: q.points[G]?.value ?? 0
          })),
          ...b.value.map((q) => ({
            name: q.name,
            color: q.color,
            value: q.points[G]?.value ?? 0
          }))
        ]
      };
    });
    return (G, q) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: q[0] || (q[0] = (B) => s.value = null)
        }, [
          (t(!0), a(z, null, V(te.value, (B) => (t(), a("line", {
            key: `g-${B.y}`,
            x1: y.value.left,
            x2: r.value - y.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Fh))), 128)),
          (t(!0), a(z, null, V(te.value, (B) => (t(), a("text", {
            key: `lt-${B.y}`,
            x: y.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(W(B.left)), 9, Nh))), 128)),
          w.value ? (t(!0), a(z, { key: 0 }, V(te.value, (B) => (t(), a("text", {
            key: `rt-${B.y}`,
            x: r.value - y.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(W(B.right)), 9, Rh))), 128)) : $("", !0),
          (t(!0), a(z, null, V(g.value, (B, F) => (t(), a("rect", {
            key: `hit-${F}`,
            x: y.value.left + F * p.value,
            y: y.value.top,
            width: p.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (j) => s.value = F
          }, null, 40, Uh))), 128)),
          (t(!0), a(z, null, V(I.value, (B, F) => (t(), a("rect", {
            key: `b-${F}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Hh))), 128)),
          (t(!0), a(z, null, V(T.value, (B, F) => (t(), a("g", {
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
            }, null, 8, Kh),
            s.value !== null && B.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, qh)) : $("", !0)
          ]))), 128)),
          (t(!0), a(z, null, V(g.value, (B, F) => pe((t(), a("text", {
            key: `x-${F}`,
            x: A(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(B), 9, Gh)), [
            [He, Z(F)]
          ])), 128))
        ], 40, Ih)),
        J.value ? (t(), a("div", Wh, [
          o("p", Zh, c(J.value.label), 1),
          (t(!0), a(z, null, V(J.value.rows, (B, F) => (t(), a("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: B.color })
            }, null, 4),
            o("span", Jh, c(B.name), 1),
            o("span", Yh, c(N(B.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), a("div", Xh, [
          (t(!0), a(z, null, V([...f.value, ...b.value], (B, F) => (t(), a("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: B.color })
            }, null, 4),
            o("span", Qh, c(B.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), eb = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, tb = { class: "text-muted-foreground" }, nb = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, ab = ["width", "height"], lb = ["x", "y"], ob = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], sb = ["x", "y"], rb = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, ib = { class: "text-[11px] font-medium capitalize" }, ub = { class: "text-muted-foreground text-[11px] capitalize" }, db = { class: "text-sm font-semibold tabular-nums" }, cb = { class: "text-muted-foreground text-xs font-normal" }, E8 = /* @__PURE__ */ O({
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
    const u = x(() => l.series[0]?.points.map((m) => m.label) ?? []), d = x(() => l.series.length), f = x(() => u.value.length), b = x(() => Math.min(140, Math.max(60, r.value * 0.16))), g = x(() => Math.max(1, r.value - b.value - 8)), h = x(() => g.value / Math.max(1, f.value)), w = x(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
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
    const S = x(
      () => l.series.flatMap(
        (m, v) => m.points.map((A, I) => {
          const T = C(A.value);
          return {
            row: v,
            col: I,
            x: b.value + I * h.value,
            y: 4 + v * w.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, w.value - 4),
            colour: y(T),
            label: A.label,
            value: A.value,
            rowName: m.name,
            bucketLabel: l.buckets[T].label
          };
        })
      )
    ), M = x(() => h.value < 2), _ = x(() => s.value ? S.value.find((m) => m.row === s.value.row && m.col === s.value.col) ?? null : null), p = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, v) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      d.value === 0 || f.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        o("div", eb, [
          (t(!0), a(z, null, V(e.buckets, (A, I) => (t(), a("span", {
            key: I,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: y(I) })
            }, null, 4),
            o("span", tb, c(A.label), 1)
          ]))), 128))
        ]),
        M.value ? (t(), a("p", nb, c(f.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: v[0] || (v[0] = (A) => s.value = null)
        }, [
          (t(!0), a(z, null, V(e.series, (A, I) => (t(), a("text", {
            key: `r-${I}`,
            x: b.value - 10,
            y: 4 + I * w.value + w.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(A.name), 9, lb))), 128)),
          (t(!0), a(z, null, V(S.value, (A, I) => (t(), a("rect", {
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
          }, null, 40, ob))), 128)),
          e.showColumnLabels && !M.value ? (t(!0), a(z, { key: 0 }, V(u.value, (A, I) => (t(), a("text", {
            key: `c-${I}`,
            x: b.value + I * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(A), 9, sb))), 128)) : $("", !0)
        ], 40, ab)),
        _.value ? (t(), a("div", rb, [
          o("p", ib, c(_.value.label), 1),
          o("p", ub, c(_.value.rowName), 1),
          o("p", db, [
            R(c(p(_.value.value)) + " ", 1),
            o("span", cb, "(" + c(_.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), fb = ["viewBox"], mb = { key: 0 }, pb = ["id"], vb = ["stop-color"], gb = ["stop-color"], hb = ["d", "fill"], bb = ["d", "stroke"], wn = 100, ot = 30, Pt = /* @__PURE__ */ O({
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
      const d = l.data.map((h) => h.value);
      if (d.length < 2)
        return [];
      const f = Math.min(...d), g = Math.max(...d) - f || 1;
      return d.map((h, w) => ({
        x: w / (d.length - 1) * wn,
        y: ot - (h - f) / g * (ot - 4) - 2
      }));
    });
    function s(d) {
      const f = d.length;
      if (f < 2)
        return "";
      const b = [], g = [];
      for (let y = 0; y < f - 1; y++)
        b[y] = d[y + 1].x - d[y].x, g[y] = b[y] === 0 ? 0 : (d[y + 1].y - d[y].y) / b[y];
      const h = [g[0]];
      for (let y = 1; y < f - 1; y++)
        if (g[y - 1] * g[y] <= 0)
          h[y] = 0;
        else {
          const C = 2 * b[y] + b[y - 1], S = b[y] + 2 * b[y - 1];
          h[y] = (C + S) / (C / g[y - 1] + S / g[y]);
        }
      h[f - 1] = g[f - 2];
      let w = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let y = 0; y < f - 1; y++) {
        const C = b[y] / 3;
        w += ` C${(d[y].x + C).toFixed(2)},${(d[y].y + h[y] * C).toFixed(2)} ${(d[y + 1].x - C).toFixed(2)},${(d[y + 1].y - h[y + 1] * C).toFixed(2)} ${d[y + 1].x.toFixed(2)},${d[y + 1].y.toFixed(2)}`;
      }
      return w;
    }
    const i = x(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((f, b) => `${b === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), u = x(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${ot} L${d[0].x.toFixed(2)},${ot} Z`;
    });
    return (d, f) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${wn} ${ot}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", mb, [
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
          }, null, 8, vb),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, gb)
        ], 8, pb)
      ])) : $("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${k(n)})`
      }, null, 8, hb)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, bb)
    ], 12, fb)) : $("", !0);
  }
}), yb = { class: "flex items-center gap-1 text-xs" }, xb = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, kb = {
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
    return (u, d) => (t(), a("span", yb, [
      o("span", {
        class: P(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", xb, c(s.value), 1),
        R(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", kb, c(e.comparison), 1)) : $("", !0)
    ]));
  }
}), $b = ["data-collapsed"], wb = { class: "flex flex-wrap items-start justify-between gap-2" }, Cb = { class: "flex min-w-0 items-start gap-2" }, Sb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Mb = ["d"], Bb = { class: "min-w-0" }, _b = { class: "text-sm font-medium" }, Ab = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Pb = { class: "flex shrink-0 items-center gap-1.5" }, zb = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Ob = ["aria-pressed", "onClick"], Lb = ["aria-expanded", "aria-label", "title"], jb = ["aria-label"], Vb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Db = ["d"], Tb = /* @__PURE__ */ O({
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
    return (u, d) => (t(), a("div", {
      class: P(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", wb, [
        o("div", Cb, [
          K(u.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", Sb, [
              o("path", {
                d: k(ce)(e.icon)
              }, null, 8, Mb)
            ])) : $("", !0)
          ]),
          o("div", Bb, [
            o("p", _b, c(e.label), 1),
            e.description ? (t(), a("p", Ab, c(e.description), 1)) : $("", !0),
            K(u.$slots, "trend")
          ])
        ]),
        o("div", Pb, [
          K(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", zb, [
            (t(!0), a(z, null, V(e.periods, (f) => (t(), a("button", {
              key: f.value,
              type: "button",
              class: P([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (b) => u.$emit("update:period", f.value)
            }, c(f.label), 11, Ob))), 128))
          ])) : $("", !0),
          e.collapsible ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: d[0] || (d[0] = (f) => r.value = !r.value)
          }, [
            (t(), a("svg", {
              class: P(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [...d[2] || (d[2] = [
              o("path", { d: "m6 9 6 6 6-6" }, null, -1)
            ])], 2))
          ], 8, Lb)) : $("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (f) => u.$emit("hide"))
          }, [
            (t(), a("svg", Vb, [
              o("path", {
                d: k(ce)("eye-off")
              }, null, 8, Db)
            ]))
          ], 8, jb)) : $("", !0)
        ])
      ]),
      r.value ? $("", !0) : (t(), a("div", {
        key: 0,
        style: se(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), D(ze, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), a("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: se({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : K(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, $b));
  }
}), Eb = ["aria-pressed", "aria-label", "title"], Ib = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fb = ["d"], Nb = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Rb = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Ub = ["href"], Hb = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Kb = ["d"], qb = ["aria-label", "onClick"], Gb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wb = ["d"], Zb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Jb = ["d"], Yb = {
  key: 0,
  class: "flex flex-col gap-1"
}, Xb = ["onClick"], Qb = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, e1 = ["d"], t1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, n1 = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = U(!1), i = U(!1), u = x(
      () => n.catalog.filter((b) => !n.items.some((g) => g.id === b.id))
    );
    function d(b) {
      r(
        "update:items",
        n.items.filter((g) => g.id !== b)
      );
    }
    function f(b) {
      r("update:items", [...n.items, b]), i.value = !1;
    }
    return (b, g) => (t(), a(z, null, [
      E(Tb, {
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
            (t(), a("svg", Ib, [
              o("path", {
                d: k(ce)(s.value ? "check" : "pencil")
              }, null, 8, Fb)
            ]))
          ], 8, Eb)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), a("div", Nb, [
            g[7] || (g[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            E(ue, {
              size: "sm",
              variant: "outline",
              onClick: g[1] || (g[1] = (h) => i.value = !0)
            }, {
              default: L(() => [...g[6] || (g[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", Rb, [
            (t(!0), a(z, null, V(e.items, (h) => (t(), a("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", Hb, [
                  o("path", {
                    d: k(ce)(h.icon)
                  }, null, 8, Kb)
                ])),
                R(" " + c(h.label), 1)
              ], 8, Ub),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (w) => d(h.id)
              }, [
                (t(), a("svg", Gb, [
                  o("path", {
                    d: k(ce)("x")
                  }, null, 8, Wb)
                ]))
              ], 8, qb)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: g[2] || (g[2] = (h) => i.value = !0)
            }, [
              (t(), a("svg", Zb, [
                o("path", {
                  d: k(ce)("plus")
                }, null, 8, Jb)
              ])),
              g[8] || (g[8] = R(" Add ", -1))
            ])) : $("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      E(it, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: g[5] || (g[5] = (h) => i.value = !1)
      }, {
        footer: L(() => [
          E(ue, {
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
          u.value.length ? (t(), a("ul", Yb, [
            (t(!0), a(z, null, V(u.value, (h) => (t(), a("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (w) => f(h)
              }, [
                (t(), a("svg", Qb, [
                  o("path", {
                    d: k(ce)(h.icon)
                  }, null, 8, e1)
                ])),
                R(" " + c(h.label), 1)
              ], 8, Xb)
            ]))), 128))
          ])) : (t(), a("p", t1, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), a1 = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, l1 = { class: "flex flex-1 flex-col gap-1 p-4" }, o1 = { class: "text-muted-foreground relative text-xs font-medium" }, s1 = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, r1 = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, i1 = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, u1 = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, I8 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), a("div", a1, [
      o("div", l1, [
        o("p", o1, c(e.label), 1),
        e.loading ? (t(), D(ze, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", s1, " Could not load ")) : (t(), a("span", r1, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(ta, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", i1, c(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", u1, [
        E(Pt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), d1 = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, c1 = { class: "flex flex-col gap-1 p-4" }, f1 = { class: "flex items-start justify-between gap-2" }, m1 = { class: "text-sm font-medium" }, p1 = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, v1 = { class: "mt-1 flex flex-wrap items-center gap-2" }, g1 = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, h1 = {
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
    return (i, u) => (t(), a("div", d1, [
      o("div", c1, [
        o("div", f1, [
          o("p", m1, c(e.label), 1),
          K(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", p1, c(e.caption), 1)) : $("", !0),
        o("div", v1, [
          e.loading ? (t(), D(ze, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", g1, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: P(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", h1, [
        E(Pt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), b1 = { class: "relative flex flex-col gap-2" }, y1 = ["aria-label"], x1 = ["onMouseenter"], k1 = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, $1 = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, w1 = { class: "truncate" }, C1 = { class: "text-sm font-semibold tabular-nums" }, F8 = /* @__PURE__ */ O({
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
    ), u = (b) => l.format ? l.format(b) : new Intl.NumberFormat().format(b), d = U(null), f = (b) => `${(b * 100).toFixed(b > 0 && b < 0.01 ? 1 : 0)}%`;
    return (b, g) => (t(), a("div", b1, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${u(h.value)}`).join(", ")
      }, [
        (t(!0), a(z, null, V(i.value, (h, w) => (t(), a("span", {
          key: w,
          class: P(["h-full transition-all", [
            w === 0 ? "rounded-l-full" : "",
            w === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: se({
            width: h.width,
            background: h.color,
            opacity: d.value === null || d.value === w ? 1 : 0.4
          }),
          onMouseenter: (y) => d.value = w,
          onMouseleave: g[0] || (g[0] = (y) => d.value = null)
        }, null, 46, x1))), 128))
      ], 12, y1),
      e.showLegend ? (t(), a("div", k1, [
        (t(!0), a(z, null, V(i.value, (h, w) => (t(), a("div", {
          key: w,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", $1, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: h.color })
            }, null, 4),
            o("span", w1, c(h.label), 1)
          ]),
          o("span", C1, c(u(h.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      d.value !== null ? (t(), D(mt, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: f(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), S1 = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, M1 = ["data-heading"], B1 = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, _1 = { class: "text-muted-foreground truncate" }, A1 = ["aria-label"], N8 = /* @__PURE__ */ O({
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
        const u = i.bar.segments.reduce((f, b) => f + Math.max(0, b.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
        return {
          ...i,
          segments: i.bar.segments.map((f) => ({
            ...f,
            // A visible sliver rather than nothing, for a non-zero value
            // too small to round to a pixel - see `SegmentedBar`.
            width: f.value > 0 ? `max(2px, ${(Math.max(0, f.value) / d * 100).toFixed(2)}%)` : "0px"
          }))
        };
      })
    );
    return (i, u) => (t(), a("div", S1, [
      (t(!0), a(z, null, V(s.value, (d) => (t(), a("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), a("div", {
          key: 0,
          class: P(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? n[d.tone] : "text-muted-foreground"])
        }, c(d.label), 3)) : (t(), a("div", B1, [
          o("span", _1, c(d.label), 1),
          o("span", {
            class: P(["shrink-0 font-medium tabular-nums", d.tone ? n[d.tone] : "text-foreground"])
          }, c(d.value), 3)
        ])),
        d.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((f) => `${f.label} ${f.value}`).join(", ")
        }, [
          (t(!0), a(z, null, V(d.segments, (f, b) => (t(), a("span", {
            key: b,
            class: P(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: se({ width: f.width })
          }, null, 6))), 128))
        ], 8, A1)) : $("", !0)
      ], 8, M1))), 128))
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
}, z1 = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function O1(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function L1(e, l) {
  return l || (e ? P1[O1(e)] ?? "neutral" : "neutral");
}
function j1(e, l) {
  return z1[L1(e, l)];
}
const $e = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, n = x(() => j1(l.status, l.tone));
    return (r, s) => (t(), D(Ge, {
      variant: n.value,
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
}), V1 = ["data-layout"], D1 = ["src", "alt"], T1 = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, E1 = ["src"], I1 = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, F1 = ["onMouseenter"], N1 = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, R1 = { class: "min-w-0" }, U1 = { class: "truncate text-sm font-medium" }, H1 = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, K1 = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, q1 = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, G1 = { class: "min-w-0" }, W1 = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Z1 = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, J1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Y1 = ["d"], X1 = ["aria-label"], Q1 = /* @__PURE__ */ O({
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
    function u(S) {
      if (typeof S != "string")
        return null;
      const M = S.trim();
      return M === "" ? null : /^(https?:)?\/\//i.test(M) ? M : null;
    }
    const d = x(() => {
      const S = [r.item.image, ...r.item.images ?? []].map(u).filter((M) => M !== null);
      return [...new Set(S)];
    }), f = x(() => d.value[i.value] ?? d.value[0] ?? null), b = x(
      () => r.item.label.split(/\s+/).slice(0, 2).map((S) => S[0]?.toUpperCase() ?? "").join("")
    ), g = x(() => {
      const S = r.item.progress;
      if (!S)
        return null;
      const M = Math.max(S.total ?? 100, S.value, 1);
      return `${Math.min(100, Math.max(0, S.value / M * 100)).toFixed(2)}%`;
    }), h = x(() => d.value.length > 1 ? d.value[1] : null), w = x(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), y = x(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(S) {
      S.stopPropagation(), s("cart", r.item.key);
    }
    return (S, M) => (t(), a("article", {
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
        f.value ? (t(), a("img", {
          key: 0,
          src: f.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, D1)) : (t(), a("span", T1, c(b.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, E1)) : $("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), a("div", I1, [
          (t(!0), a(z, null, V(d.value, (_, p) => (t(), a("span", {
            key: p,
            class: P(["size-1.5 rounded-full", p === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (m) => i.value = p
          }, null, 42, F1))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: P(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", N1, [
          o("div", R1, [
            o("p", U1, c(e.item.label), 1),
            e.item.caption ? (t(), a("p", H1, c(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), a("p", K1, c(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), D($e, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", q1, [
          o("div", G1, [
            e.item.price ? (t(), a("p", W1, c(e.item.price), 1)) : $("", !0),
            y.value ? (t(), a("p", Z1, c(y.value), 1)) : $("", !0)
          ]),
          w.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), a("svg", J1, [
              o("path", {
                d: k(ce)("cart")
              }, null, 8, Y1)
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
            class: P(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: g.value })
          }, null, 6)
        ], 8, X1)) : $("", !0)
      ], 2)
    ], 42, V1));
  }
});
function ey(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function ty(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function ny(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const ay = ["data-featured", "data-recommended"], ly = { class: "flex flex-col gap-1" }, oy = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, sy = { key: 0 }, ry = { key: 1 }, iy = { key: 2 }, uy = { key: 3 }, dy = { class: "text-sm font-semibold" }, cy = { class: "flex items-baseline gap-1" }, fy = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, my = { class: "text-muted-foreground text-sm font-normal" }, py = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, vy = { class: "text-muted-foreground mt-1 text-xs" }, gy = { class: "flex flex-1 flex-col gap-2 text-sm" }, hy = { class: "flex min-w-0 items-start gap-2" }, by = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, yy = ["d"], xy = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ky = ["d"], $y = { class: "capitalize" }, wy = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Cy = { class: "text-foreground font-medium" }, Sy = { class: "mt-auto flex gap-2 pt-2" }, My = /* @__PURE__ */ O({
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
    ), u = x(() => {
      const f = n.plan.perks ?? {};
      return Object.entries(f).map(([b, g]) => ({
        key: b,
        label: b.replace(/_/g, " "),
        granted: ny(g.value),
        display: ty(g.value)
      }));
    }), d = x(() => n.plan.extraPerks ?? []);
    return (f, b) => (t(), a("article", {
      class: P(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", ly, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", oy, [
          e.plan.recommended ? (t(), a("span", sy, "Recommended")) : e.plan.featured ? (t(), a("span", ry, "Featured")) : $("", !0),
          e.plan.trial ? (t(), a("span", iy, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), a("span", uy, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", dy, c(e.plan.name), 1),
        o("p", cy, [
          o("span", fy, c(s.value), 1),
          o("span", my, c(k(ey)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", py, c(e.plan.shortDescription), 1)) : $("", !0),
        o("p", vy, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", gy, [
        (t(!0), a(z, null, V(u.value, (g) => (t(), a("li", {
          key: g.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", hy, [
            o("span", {
              class: P(["mt-0.5 shrink-0", g.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              g.granted ? (t(), a("svg", by, [
                o("path", {
                  d: k(ce)("check")
                }, null, 8, yy)
              ])) : (t(), a("svg", xy, [
                o("path", {
                  d: k(ce)("x")
                }, null, 8, ky)
              ]))
            ], 2),
            o("span", $y, c(g.label), 1)
          ]),
          g.display ? (t(), a("span", wy, c(g.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), a(z, null, V(d.value, (g, h) => (t(), a("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(g.key), 1),
          o("span", Cy, c(g.value), 1)
        ]))), 128))
      ]),
      o("footer", Sy, [
        E(ue, {
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
        E(ue, {
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
    ], 10, ay));
  }
}), By = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, _y = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Ay = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Py = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, zy = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, R8 = /* @__PURE__ */ O({
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
      class: P(["w-full space-y-6", e.embedded ? "" : k(tt)]),
      "data-slot": "plan-grid"
    }, [
      o("header", By, [
        o("div", null, [
          e.title ? (t(), a("h1", _y, c(e.title), 1)) : $("", !0),
          e.description ? (t(), a("p", Ay, c(e.description), 1)) : $("", !0)
        ]),
        E(ue, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => n("create"))
        }, {
          default: L(() => [...s[3] || (s[3] = [
            R("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", Py, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", zy, [
        (t(!0), a(z, null, V(e.plans, (i) => (t(), D(My, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => n("edit", u)),
          onDelete: s[2] || (s[2] = (u) => n("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), Oy = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Ly = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, jy = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Vy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Dy = { class: "space-y-1.5" }, Ty = { class: "space-y-1.5" }, Ey = { class: "space-y-1.5" }, Iy = { class: "space-y-1.5" }, Fy = { class: "space-y-1.5" }, Ny = { class: "flex items-center gap-3 text-sm" }, Ry = { class: "flex items-center gap-3 text-sm" }, Uy = { class: "flex items-center gap-3 text-sm" }, Hy = {
  key: 0,
  class: "space-y-1.5"
}, Ky = { class: "flex items-center gap-3 text-sm" }, qy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Gy = { class: "space-y-1.5" }, Wy = ["value"], Zy = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Jy = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Yy = ["id", "value", "onInput"], Xy = { class: "space-y-2" }, Qy = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, ex = ["d"], U8 = /* @__PURE__ */ O({
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
    function u(p, m) {
      const v = i.perks?.[p]?.value;
      return v ?? m;
    }
    function d(p, m, v) {
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
      i.id = m.id, i.name = m.name, i.shortDescription = m.shortDescription ?? "", i.description = m.description ?? "", i.days = m.days, i.price = m.price, i.featured = m.featured ?? !1, i.recommended = m.recommended ?? !1, i.trial = m.trial ?? !1, i.trialDays = m.trialDays ?? 0, i.active = m.active ?? !0, i.perks = { ...m.perks ?? {} }, i.extraPerks = [...m.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    b(r.plan), me(
      () => r.plan,
      (p) => b(p),
      { deep: !0 }
    );
    const g = x({
      get: () => {
        const p = u("modules", []);
        return Array.isArray(p) ? p.map(String) : [];
      },
      set: (p) => {
        d("modules", w(p.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), h = x(
      () => r.modules.map((p) => ({ value: p.key, label: p.label }))
    );
    function w(p) {
      const m = Object.fromEntries(r.modules.map((I) => [I.key, I])), v = new Set(p);
      for (const I of r.modules)
        if (!v.has(I.key))
          for (const T of I.children ?? [])
            v.delete(T);
      let A = !0;
      for (; A; ) {
        A = !1;
        for (const I of [...v])
          for (const T of m[I]?.requires ?? [])
            v.has(T) || (v.add(T), A = !0);
      }
      return [...v];
    }
    function y() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function C(p) {
      i.extraPerks = (i.extraPerks ?? []).filter((m, v) => v !== p);
    }
    function S() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((p) => p.key.trim() !== "")
      });
    }
    const M = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ue}`, _ = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ue}`;
    return (p, m) => (t(), a("form", {
      class: P(["w-full space-y-6", e.embedded ? "" : k(tt)]),
      "data-slot": "plan-editor",
      onSubmit: he(S, ["prevent"])
    }, [
      o("header", Oy, [
        o("div", null, [
          o("h1", Ly, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          m[13] || (m[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        E(ue, {
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
      o("div", jy, [
        o("section", Vy, [
          m[26] || (m[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", Dy, [
            E(Pe, { for: "plan-name" }, {
              default: L(() => [...m[15] || (m[15] = [
                R("Plan name", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": m[1] || (m[1] = (v) => i.name = v),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", Ty, [
            E(Pe, { for: "plan-short" }, {
              default: L(() => [...m[16] || (m[16] = [
                R("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": m[2] || (m[2] = (v) => i.shortDescription = v),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", Ey, [
            E(Pe, { for: "plan-description" }, {
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
              class: P(_)
            }, null, 512), [
              [Ae, i.description]
            ])
          ]),
          o("div", Iy, [
            E(Pe, { for: "plan-days" }, {
              default: L(() => [...m[18] || (m[18] = [
                R("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": m[4] || (m[4] = (v) => i.days = v),
              class: P(M)
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
          o("div", Fy, [
            E(Pe, { for: "plan-price" }, {
              default: L(() => [...m[20] || (m[20] = [
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
              "onUpdate:modelValue": m[5] || (m[5] = (v) => i.price = Number(v))
            }, null, 8, ["model-value"])
          ]),
          o("label", Ny, [
            E(k(Ze), {
              checked: !!i.featured,
              "onUpdate:checked": m[6] || (m[6] = (v) => i.featured = v)
            }, null, 8, ["checked"]),
            m[21] || (m[21] = R(" Featured ", -1))
          ]),
          o("label", Ry, [
            E(k(Ze), {
              checked: !!i.recommended,
              "onUpdate:checked": m[7] || (m[7] = (v) => i.recommended = v)
            }, null, 8, ["checked"]),
            m[22] || (m[22] = R(" Recommended ", -1))
          ]),
          o("label", Uy, [
            E(k(Ze), {
              checked: !!i.trial,
              "onUpdate:checked": m[8] || (m[8] = (v) => i.trial = v)
            }, null, 8, ["checked"]),
            m[23] || (m[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", Hy, [
            E(Pe, { for: "plan-trial-days" }, {
              default: L(() => [...m[24] || (m[24] = [
                R("Trial days", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": m[9] || (m[9] = (v) => i.trialDays = Number(v))
            }, null, 8, ["model-value"])
          ])) : $("", !0),
          o("label", Ky, [
            E(k(Ze), {
              checked: i.active !== !1,
              "onUpdate:checked": m[10] || (m[10] = (v) => i.active = v)
            }, null, 8, ["checked"]),
            m[25] || (m[25] = R(" Active ", -1))
          ]),
          E(ue, {
            type: "submit",
            disabled: e.processing
          }, {
            default: L(() => [
              R(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", qy, [
          m[33] || (m[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Gy, [
            E(Pe, null, {
              default: L(() => [...m[27] || (m[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            E(Qt, {
              modelValue: g.value,
              "onUpdate:modelValue": m[11] || (m[11] = (v) => g.value = v),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            E(Pe, { for: "plan-modules-overview" }, {
              default: L(() => [...m[28] || (m[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: P(_),
              onInput: m[12] || (m[12] = (v) => f(
                "modules",
                v.target.value
              ))
            }, null, 40, Wy)
          ]),
          (t(!0), a(z, null, V(e.limits, (v) => (t(), a("div", {
            key: v.key,
            class: "space-y-1.5"
          }, [
            v.kind === "toggle" ? (t(), a("label", Zy, [
              E(k(Ze), {
                checked: !!u(v.key, !1),
                "onUpdate:checked": (A) => d(
                  v.key,
                  A,
                  i.perks?.[v.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              R(" " + c(v.label), 1)
            ])) : (t(), a(z, { key: 1 }, [
              E(Pe, {
                for: `plan-limit-${v.key}`
              }, {
                default: L(() => [
                  R(c(v.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              v.hint ? (t(), a("p", Jy, c(v.hint), 1)) : $("", !0),
              E(we, {
                id: `plan-limit-${v.key}`,
                "model-value": Number(u(v.key, 0)),
                type: "number",
                step: v.step ?? 1,
                required: "",
                "onUpdate:modelValue": (A) => d(
                  v.key,
                  Number(A),
                  i.perks?.[v.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              m[29] || (m[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            E(Pe, {
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
              class: P(_),
              onInput: (A) => f(
                v.key,
                A.target.value
              )
            }, null, 40, Yy)
          ]))), 128)),
          o("div", Xy, [
            m[32] || (m[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(z, null, V(i.extraPerks ?? [], (v, A) => (t(), a("div", {
              key: A,
              class: "flex items-center gap-2"
            }, [
              E(we, {
                modelValue: v.key,
                "onUpdate:modelValue": (I) => v.key = I,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(we, {
                modelValue: v.value,
                "onUpdate:modelValue": (I) => v.value = I,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(ue, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (I) => C(A)
              }, {
                default: L(() => [
                  (t(), a("svg", Qy, [
                    o("path", {
                      d: k(ce)("x")
                    }, null, 8, ex)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            E(ue, {
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
}), tx = ["data-current", "data-recommended"], nx = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
}, ax = {
  key: 1,
  class: "bg-primary/10 text-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
}, lx = { class: "text-sm font-semibold" }, ox = { class: "flex items-baseline gap-1" }, sx = { class: "text-4xl font-bold tracking-tight tabular-nums" }, rx = { class: "text-muted-foreground text-sm font-normal" }, ix = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, ux = {
  key: 2,
  class: "flex flex-1 flex-col gap-2 text-sm"
}, dx = {
  class: "text-success mt-0.5 shrink-0",
  "aria-hidden": "true"
}, cx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, fx = ["d"], mx = { class: "text-muted-foreground" }, px = {
  key: 3,
  class: "flex-1"
}, vx = {
  key: 4,
  class: "mt-auto pt-2"
}, H8 = /* @__PURE__ */ O({
  __name: "PlanPurchaseCard",
  props: {
    plan: {},
    annual: { type: Boolean, default: !1 },
    processing: { type: Boolean, default: !1 }
  },
  emits: ["choose"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(() => n.annual && n.plan.annualPrice !== void 0 ? n.plan.annualPriceFormatted ?? String(n.plan.annualPrice) : n.plan.priceFormatted ?? String(n.plan.price)), i = x(() => n.annual && n.plan.annualPrice !== void 0 ? "year" : n.plan.interval ?? "month"), u = x(() => !!n.plan.recommended && !n.plan.current);
    return (d, f) => (t(), a("article", {
      class: P([
        "bg-card text-card-foreground relative flex flex-col gap-4 rounded-xl border p-6 transition-shadow",
        u.value ? "border-primary shadow-lg ring-1 ring-primary/20" : e.plan.current ? "border-primary/40" : ""
      ]),
      "data-slot": "plan-purchase-card",
      "data-current": e.plan.current ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      u.value ? (t(), a("span", nx, " Most popular ")) : e.plan.current ? (t(), a("span", ax, " Current plan ")) : $("", !0),
      o("header", {
        class: P(["flex flex-col gap-1", u.value || e.plan.current ? "pt-2" : ""])
      }, [
        o("h3", lx, c(e.plan.name), 1),
        o("p", ox, [
          o("span", sx, c(s.value), 1),
          o("span", rx, "/ " + c(i.value), 1)
        ]),
        e.plan.description ? (t(), a("p", ix, c(e.plan.description), 1)) : $("", !0)
      ], 2),
      e.plan.features?.length ? (t(), a("ul", ux, [
        (t(!0), a(z, null, V(e.plan.features, (b, g) => (t(), a("li", {
          key: g,
          class: "flex items-start gap-2"
        }, [
          o("span", dx, [
            (t(), a("svg", cx, [
              o("path", {
                d: k(ce)("check")
              }, null, 8, fx)
            ]))
          ]),
          o("span", mx, c(b), 1)
        ]))), 128))
      ])) : (t(), a("div", px)),
      e.plan.current ? $("", !0) : (t(), a("footer", vx, [
        E(ue, {
          class: "w-full",
          variant: u.value ? "default" : "outline",
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
    ], 10, tx));
  }
}), gx = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, hx = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, bx = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, yx = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, xx = ["d"], kx = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, $x = ["aria-pressed"], wx = ["aria-pressed"], Cx = {
  key: 0,
  class: "flex flex-col gap-2"
}, Sx = ["aria-label"], Mx = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Bx = ["aria-pressed", "onClick"], _x = ["aria-label"], Ax = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Px = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, zx = ["data-slot"], Ox = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Lx = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, jx = { class: "flex items-center gap-2" }, Vx = ["disabled"], Dx = ["disabled"], sn = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(""), i = dt(e, "modelValue"), u = rt({}), d = rt({});
    me(s, () => h());
    function f(T) {
      const te = T.trim();
      if (te === "")
        return null;
      const H = Number(te);
      return Number.isFinite(H) ? H : null;
    }
    function b() {
      const T = {};
      for (const [te, H] of Object.entries(d))
        T[te] = { min: f(H.min), max: f(H.max) };
      return T;
    }
    function g() {
      return { query: s.value, selected: { ...u }, ranges: b() };
    }
    function h() {
      r("filter", g());
    }
    function w(T, te) {
      u[T] = u[T] === te ? null : te, h();
    }
    function y(T) {
      return d[T] ?? { min: "", max: "" };
    }
    function C(T, te, H) {
      const Z = d[T] ?? { min: "", max: "" };
      d[T] = { ...Z, [te]: H }, h();
    }
    function S(T) {
      T.key === "Enter" && (T.preventDefault(), r("scan", s.value.trim()));
    }
    const M = x(() => n.facets.filter((T) => (T.kind ?? "chips") === "chips")), _ = x(() => n.facets.filter((T) => T.kind === "range")), p = x(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), m = U(1);
    me(
      () => n.items.map((T) => T.key).join(","),
      () => {
        m.value = 1;
      }
    );
    const v = x(() => {
      const T = n.pageSize;
      return !T || T < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / T));
    }), A = x(() => {
      const T = n.pageSize;
      if (!T || T < 1)
        return n.items;
      const te = (m.value - 1) * T;
      return n.items.slice(te, te + T);
    });
    function I(T) {
      m.value = Math.min(v.value, Math.max(1, T));
    }
    return (T, te) => (t(), a("div", {
      class: P(["flex flex-col gap-4", k(Zn)])
    }, [
      p.value ? (t(), a("div", gx, [
        o("div", hx, [
          e.searchable ? (t(), a("div", bx, [
            (t(), a("svg", yx, [
              o("path", {
                d: k(ce)("search")
              }, null, 8, xx)
            ])),
            E(we, {
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
          e.layoutToggle ? (t(), a("div", kx, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, $x),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (H) => i.value = "list")
            }, " List ", 10, wx)
          ])) : $("", !0)
        ]),
        M.value.length || _.value.length ? (t(), a("div", Cx, [
          (t(!0), a(z, null, V(M.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), a("span", Mx, c(H.label), 1)) : $("", !0),
            (t(!0), a(z, null, V(H.options ?? [], (Z) => (t(), a("button", {
              key: Z.value,
              type: "button",
              class: P([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[H.key] === Z.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[H.key] === Z.value ? "true" : "false",
              onClick: (N) => w(H.key, Z.value)
            }, c(Z.label), 11, Bx))), 128))
          ], 8, Sx))), 128)),
          (t(!0), a(z, null, V(_.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Ax, c(H.label ?? H.key), 1),
            E(we, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": y(H.key).min,
              "onUpdate:modelValue": (Z) => C(H.key, "min", String(Z))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            te[7] || (te[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            E(we, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": y(H.key).max,
              "onUpdate:modelValue": (Z) => C(H.key, "max", String(Z))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, _x))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), a("p", Px, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: P(
          i.value === "list" ? "flex flex-col gap-3" : k(Tf)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(z, null, V(A.value, (H) => (t(), D(Q1, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: te[3] || (te[3] = (Z) => r("select", Z)),
          onCart: te[4] || (te[4] = (Z) => r("cart", Z))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, zx)),
      e.pageSize && v.value > 1 ? (t(), a("div", Ox, [
        o("p", Lx, " Page " + c(m.value) + " of " + c(v.value), 1),
        o("div", jx, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: m.value <= 1,
            onClick: te[5] || (te[5] = (H) => I(m.value - 1))
          }, " Previous ", 8, Vx),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: m.value >= v.value,
            onClick: te[6] || (te[6] = (H) => I(m.value + 1))
          }, " Next ", 8, Dx)
        ])
      ])) : $("", !0)
    ], 2));
  }
});
function Ie() {
  return { query: "", selected: {}, ranges: {} };
}
function Tx(e, l) {
  const n = e.metrics?.[l];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Ex(e, l) {
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
    if (!Ex(Tx(e, r), s))
      return !1;
  return !0;
}
function Ix(e, l) {
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
const Fx = { class: "flex flex-col gap-6" }, Nx = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Rx = { class: "text-sm font-semibold" }, Ux = { class: "flex flex-wrap items-center gap-1.5" }, Hx = ["aria-pressed", "onClick"], Kx = { class: "text-sm font-semibold" }, qx = { class: "flex flex-wrap items-center gap-1.5" }, Gx = { key: 0 }, na = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(""), i = rt({}), u = rt({}), d = x(
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
      for (const v of Object.keys(u))
        delete u[v];
      for (const [v, A] of Object.entries(n.applied.ranges ?? {}))
        u[v] = { min: b(A.min), max: b(A.max) };
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
      const I = Number(A);
      return Number.isFinite(I) ? I : null;
    }
    function w() {
      const v = {};
      for (const [A, I] of Object.entries(u))
        v[A] = { min: h(I.min), max: h(I.max) };
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
    function S(v, A) {
      i[v] = i[v] === A ? null : A;
    }
    function M(v) {
      return u[v] ?? { min: "", max: "" };
    }
    function _(v, A, I) {
      const T = u[v] ?? { min: "", max: "" };
      u[v] = { ...T, [A]: I };
    }
    function p() {
      r("apply", y());
    }
    function m() {
      s.value = "";
      for (const v of Object.keys(i))
        i[v] = null;
      for (const v of Object.keys(u))
        u[v] = { min: "", max: "" };
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
      onClose: A[2] || (A[2] = (I) => r("close"))
    }, {
      footer: L(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: m
        }, " Reset all "),
        E(ue, {
          variant: "outline",
          size: "sm",
          onClick: A[1] || (A[1] = (I) => r("close"))
        }, {
          default: L(() => [...A[5] || (A[5] = [
            R("Cancel", -1)
          ])]),
          _: 1
        }),
        E(ue, {
          size: "sm",
          onClick: p
        }, {
          default: L(() => [
            A[6] || (A[6] = R(" Apply", -1)),
            C.value ? (t(), a("span", Gx, " (" + c(C.value) + ")", 1)) : $("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        o("div", Fx, [
          e.hideSearch ? $("", !0) : (t(), a("label", Nx, [
            A[3] || (A[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            E(we, {
              modelValue: s.value,
              "onUpdate:modelValue": A[0] || (A[0] = (I) => s.value = I),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(z, null, V(d.value, (I) => (t(), a("section", {
            key: I.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Rx, c(I.label ?? I.key), 1),
            o("div", Ux, [
              (t(!0), a(z, null, V(I.options ?? [], (T) => (t(), a("button", {
                key: T.value,
                type: "button",
                class: P([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[I.key] === T.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[I.key] === T.value ? "true" : "false",
                onClick: (te) => S(I.key, T.value)
              }, c(T.label), 11, Hx))), 128))
            ])
          ]))), 128)),
          (t(!0), a(z, null, V(f.value, (I) => (t(), a("section", {
            key: I.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Kx, c(I.label ?? I.key), 1),
            o("div", qx, [
              E(we, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${I.label ?? I.key} from`,
                "model-value": M(I.key).min,
                "onUpdate:modelValue": (T) => _(I.key, "min", String(T))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              A[4] || (A[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              E(we, {
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
}), Wx = ["aria-disabled"], Zx = ["disabled"], Jx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Yx = ["d"], Xx = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Qx = ["disabled"], e0 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, t0 = ["d"], n0 = /* @__PURE__ */ O({
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
    const n = dt(e, "modelValue"), r = l, s = x(() => n.value <= e.min), i = x(() => e.max !== null && n.value >= e.max);
    function u(d) {
      if (e.disabled)
        return;
      const f = n.value + d;
      f < e.min || e.max !== null && f > e.max || (n.value = f, d < 0 ? r("decrease", f) : r("increase", f));
    }
    return (d, f) => (t(), a("div", {
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
        onClick: f[0] || (f[0] = (b) => u(-1))
      }, [
        (t(), a("svg", Jx, [
          o("path", {
            d: k(ce)("minus")
          }, null, 8, Yx)
        ]))
      ], 8, Zx),
      o("span", Xx, c(n.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (b) => u(1))
      }, [
        (t(), a("svg", e0, [
          o("path", {
            d: k(ce)("plus")
          }, null, 8, t0)
        ]))
      ], 8, Qx)
    ], 8, Wx));
  }
}), a0 = { class: "divide-border flex flex-col divide-y" }, l0 = { class: "min-w-0" }, o0 = { class: "truncate text-sm font-medium" }, s0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, r0 = { class: "flex shrink-0 items-center gap-2 text-sm" }, i0 = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, u0 = {
  key: 2,
  class: "font-medium tabular-nums"
}, d0 = ["aria-label", "onClick"], c0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, f0 = ["d"], m0 = /* @__PURE__ */ O({
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
      const u = Number(i);
      return Number.isFinite(u) && u > 0 ? u : 1;
    }
    return (s, i) => (t(), a("div", a0, [
      (t(!0), a(z, null, V(e.items, (u) => (t(), a("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", l0, [
          o("p", o0, c(u.label), 1),
          u.detail ? (t(), a("p", s0, c(u.detail), 1)) : $("", !0)
        ]),
        o("div", r0, [
          e.editable ? (t(), D(n0, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => n("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), a("span", i0, " ×" + c(u.qty), 1)) : $("", !0),
          u.amount ? (t(), a("span", u0, c(u.amount), 1)) : $("", !0),
          u.status ? (t(), D($e, {
            key: 3,
            status: u.status,
            tone: u.tone
          }, null, 8, ["status", "tone"])) : $("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${u.label}`,
            onClick: (d) => n("remove", u.key)
          }, [
            (t(), a("svg", c0, [
              o("path", {
                d: k(ce)("trash")
              }, null, 8, f0)
            ]))
          ], 8, d0)) : $("", !0)
        ])
      ]))), 128))
    ]));
  }
}), p0 = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, v0 = { class: "border-b px-4 py-3" }, g0 = { class: "text-sm font-medium" }, h0 = { class: "flex-1 px-4 py-3" }, b0 = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, y0 = { class: "text-foreground block font-medium" }, x0 = { class: "mt-1 block" }, k0 = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, $0 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, w0 = { class: "tabular-nums" }, C0 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, S0 = { class: "text-muted-foreground" }, M0 = {
  key: 0,
  class: "tabular-nums"
}, B0 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, _0 = { class: "text-muted-foreground" }, A0 = { class: "tabular-nums" }, P0 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, z0 = { class: "tabular-nums" }, O0 = {
  key: 4,
  class: "pt-1"
}, L0 = /* @__PURE__ */ O({
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
    return (r, s) => (t(), a("aside", p0, [
      o("header", v0, [
        o("h2", g0, c(e.title), 1)
      ]),
      o("div", h0, [
        e.items.length === 0 ? (t(), a("p", b0, [
          o("span", y0, c(e.emptyTitle), 1),
          o("span", x0, c(e.emptyDescription), 1)
        ])) : (t(), D(m0, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => n("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", k0, [
        e.subtotal ? (t(), a("div", $0, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", w0, c(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", C0, [
          o("span", S0, c(e.discountLabel), 1),
          e.discount ? (t(), a("span", M0, c(e.discount), 1)) : $("", !0),
          K(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), a("div", B0, [
          o("span", _0, c(e.taxLabel), 1),
          o("span", A0, c(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), a("div", P0, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", z0, c(e.total), 1)
        ])) : $("", !0),
        r.$slots.pay ? (t(), a("div", O0, [
          K(r.$slots, "pay")
        ])) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), j0 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, V0 = { class: "flex flex-col gap-4" }, D0 = { class: "flex flex-wrap items-start justify-between gap-3" }, T0 = { class: "flex items-center gap-2" }, E0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, K8 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(Ie()), i = U(!1), u = dt(e, "cart"), d = U(!1), f = x(
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
    function w(H, Z, N) {
      return {
        ...H,
        qty: Z,
        amount: n.formatMoney(N * Z)
      };
    }
    function y(H) {
      const Z = Ix(n.items, H);
      Z && C(Z.key);
    }
    function C(H) {
      const Z = n.items.find((J) => J.key === H);
      if (!Z || Z.status === "out-of-stock")
        return;
      d.value = !1;
      const N = h(Z);
      if (u.value.find((J) => J.key === H)) {
        u.value = u.value.map(
          (J) => J.key === H ? w(J, Number(J.qty ?? 1) + 1, N) : J
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: Z.key,
          label: Z.label,
          detail: Z.caption ?? null,
          qty: 1,
          amount: n.formatMoney(N)
        }
      ];
    }
    function S(H, Z) {
      const N = n.items.find((J) => J.key === H), W = h(N);
      u.value = u.value.map(
        (J) => J.key === H ? w(J, Z, W) : J
      );
    }
    function M(H) {
      u.value = u.value.filter((Z) => Z.key !== H);
    }
    const _ = x(
      () => u.value.reduce((H, Z) => {
        const N = n.items.find((W) => W.key === Z.key);
        return H + h(N) * Number(Z.qty ?? 1);
      }, 0)
    ), p = x(
      () => n.discountRate > 0 ? Math.round(_.value * n.discountRate) : 0
    ), m = x(
      () => Math.round((_.value - p.value) * n.taxRate)
    ), v = x(
      () => u.value.length ? n.formatMoney(_.value) : null
    ), A = x(
      () => u.value.length && p.value > 0 ? `−${n.formatMoney(p.value)}` : null
    ), I = x(
      () => u.value.length && n.taxRate > 0 ? n.formatMoney(m.value) : null
    ), T = x(
      () => u.value.length ? n.formatMoney(
        _.value - p.value + m.value
      ) : null
    );
    function te() {
      d.value = !0, r("pay", u.value);
    }
    return (H, Z) => (t(), a(z, null, [
      o("div", j0, [
        o("section", V0, [
          o("div", D0, [
            E(Ee, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", T0, [
              k(St)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: Z[0] || (Z[0] = (N) => s.value = {
                  ...k(Ie)(),
                  query: s.value.query
                })
              }, " Clear ")) : $("", !0),
              e.facets.length > 0 ? (t(), a("button", {
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
                k(St)(s.value) ? (t(), a("span", E0, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          E(sn, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: b,
            onSelect: Z[2] || (Z[2] = (N) => r("select", N)),
            onCart: C,
            onScan: y
          }, null, 8, ["search-placeholder", "items"])
        ]),
        E(L0, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: v.value,
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
              cart: u.value,
              paid: d.value,
              pay: te
            }, () => [
              E(ue, {
                class: "w-full",
                disabled: u.value.length === 0,
                onClick: te
              }, {
                default: L(() => [
                  R(c(d.value ? "Paid" : "Pay"), 1)
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
        onClose: Z[3] || (Z[3] = (N) => i.value = !1),
        onApply: g,
        onReset: Z[4] || (Z[4] = (N) => s.value = { ...k(Ie)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), I0 = {
  key: 0,
  class: "flex flex-col gap-5"
}, F0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, N0 = ["src", "alt"], R0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, U0 = ["src"], H0 = { class: "flex items-start justify-between gap-3" }, K0 = { class: "text-lg font-semibold tabular-nums" }, q0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, G0 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, W0 = { class: "grid grid-cols-2 gap-3" }, Z0 = { class: "flex flex-col gap-2" }, J0 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, q8 = /* @__PURE__ */ O({
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
    const u = x(() => n.item?.kind === "unit"), d = x(() => {
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
      () => !!n.item && !u.value && n.item?.status !== "out-of-stock"
    );
    return (g, h) => (t(), D(_t, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      size: "md",
      onClose: h[1] || (h[1] = (w) => r("close"))
    }, st({
      default: L(() => [
        e.item ? (t(), a("div", I0, [
          o("div", F0, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, N0)) : $("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", R0, [
            (t(!0), a(z, null, V(e.item.images, (w, y) => (t(), a("img", {
              key: y,
              src: w,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, U0))), 128))
          ])) : $("", !0),
          o("div", H0, [
            o("div", null, [
              o("p", K0, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", q0, c(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", G0, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", W0, [
            E(Ct, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? f.value : d.value
            }, null, 8, ["label", "value", "series"]),
            E(Ct, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", Z0, [
            o("p", J0, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            E(Pt, {
              data: u.value ? f.value : d.value,
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
}), Y0 = { class: "flex flex-col gap-10" }, X0 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Q0 = { class: "flex flex-col gap-3" }, ek = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, tk = ["src", "alt"], nk = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, ak = ["aria-label", "aria-pressed", "onClick"], lk = ["src"], ok = { class: "flex flex-col gap-5" }, sk = { class: "flex flex-wrap items-start justify-between gap-3" }, rk = { class: "min-w-0" }, ik = { class: "text-2xl font-semibold tracking-tight" }, uk = { class: "text-muted-foreground mt-1 text-sm" }, dk = { class: "text-2xl font-semibold tabular-nums" }, ck = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, fk = { class: "grid grid-cols-2 gap-3 text-sm" }, mk = {
  key: 0,
  class: "rounded-lg border p-3"
}, pk = { class: "mt-1 font-medium" }, vk = { class: "rounded-lg border p-3" }, gk = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, hk = { class: "mt-1 font-medium" }, bk = { class: "flex flex-col gap-4" }, yk = { class: "grid gap-4 sm:grid-cols-2" }, xk = { class: "bg-card rounded-lg border p-4" }, kk = { class: "mb-3 text-sm font-medium" }, $k = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
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
    const u = x(() => n.item.kind === "unit"), d = x(() => {
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
    }), h = x(() => u.value ? g.value : b.value), w = x(() => !u.value && n.item.status !== "out-of-stock");
    return (y, C) => (t(), a("div", Y0, [
      o("div", X0, [
        o("div", Q0, [
          o("div", ek, [
            d.value[f.value] ? (t(), a("img", {
              key: 0,
              src: d.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, tk)) : $("", !0)
          ]),
          d.value.length > 1 ? (t(), a("div", nk, [
            (t(!0), a(z, null, V(d.value, (S, M) => (t(), a("button", {
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
              }, null, 8, lk)
            ], 10, ak))), 128))
          ])) : $("", !0)
        ]),
        o("div", ok, [
          o("div", sk, [
            o("div", rk, [
              o("h1", ik, c(e.item.label), 1),
              o("p", uk, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", dk, c(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", ck, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", fk, [
            e.item.sku ? (t(), a("div", mk, [
              C[1] || (C[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", pk, c(e.item.sku), 1)
            ])) : $("", !0),
            o("div", vk, [
              o("dt", gk, c(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", hk, c(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          w.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (S) => r("cart", e.item.key))
          }, " Add to cart ")) : $("", !0)
        ])
      ]),
      o("section", bk, [
        C[2] || (C[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", yk, [
          E(Ct, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          E(Ct, {
            label: "Price",
            value: e.item.price ?? "-",
            series: b.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", xk, [
          o("p", kk, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          E(eh, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), wk = ["href"], G8 = /* @__PURE__ */ O({
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
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : k(tt)])
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
      ], 8, wk),
      E($k, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), Ck = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, Sk = ["aria-selected", "onClick"], Mk = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, Bk = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, _k = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, Ak = ["aria-pressed"], Pk = ["aria-pressed"], W8 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(n.tabs[0]?.key ?? ""), i = dt(e, "layout"), u = U({}), d = U(!1);
    me(
      () => n.tabs.map((S) => S.key).join(","),
      (S) => {
        S.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function f(S) {
      return u.value[S] ?? Ie();
    }
    const b = x(
      () => n.tabs.find((S) => S.key === s.value) ?? n.tabs[0] ?? null
    ), g = x(
      () => b.value ? f(b.value.key) : Ie()
    ), h = x(() => {
      const S = b.value;
      return S ? S.items.filter((M) => rn(M, f(S.key))) : [];
    });
    function w(S) {
      const M = b.value?.key;
      M && (u.value = {
        ...u.value,
        [M]: { ...f(M), query: S }
      });
    }
    function y() {
      const S = b.value?.key;
      S && (u.value = { ...u.value, [S]: Ie() });
    }
    function C(S) {
      const M = b.value?.key;
      M && (u.value = { ...u.value, [M]: S }, d.value = !1);
    }
    return (S, M) => (t(), a(z, null, [
      o("div", {
        class: P(["flex w-full flex-col gap-8", e.embedded ? "" : k(tt)])
      }, [
        E(Ee, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", Ck, [
          (t(!0), a(z, null, V(e.tabs, (_) => (t(), a("button", {
            key: _.key,
            type: "button",
            class: P([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === _.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === _.key ? "true" : "false",
            onClick: (p) => s.value = _.key
          }, c(_.label), 11, Sk))), 128))
        ])) : $("", !0),
        o("div", Mk, [
          E(we, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": g.value.query,
            type: "search",
            placeholder: b.value?.searchPlaceholder ?? "Search…",
            "aria-label": b.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": M[0] || (M[0] = (_) => w(String(_)))
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
            onClick: M[1] || (M[1] = (_) => d.value = !0)
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
            k(St)(g.value) ? (t(), a("span", Bk, " on ")) : $("", !0)
          ])) : $("", !0),
          o("div", _k, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: M[2] || (M[2] = (_) => i.value = "grid")
            }, " Tiles ", 10, Ak),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: M[3] || (M[3] = (_) => i.value = "list")
            }, " List ", 10, Pk)
          ])
        ]),
        E(sn, {
          layout: i.value,
          "onUpdate:layout": M[4] || (M[4] = (_) => i.value = _),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: M[5] || (M[5] = (_) => r("select", _)),
          onCart: M[6] || (M[6] = (_) => r("cart", _))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      E(na, {
        open: d.value,
        title: b.value?.filterTitle ?? "Filters",
        "search-placeholder": b.value?.searchPlaceholder ?? "Search…",
        facets: b.value?.facets ?? [],
        applied: g.value,
        onClose: M[7] || (M[7] = (_) => d.value = !1),
        onApply: C,
        onReset: y
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), zk = { class: "flex flex-col gap-4" }, Ok = { class: "flex flex-col gap-4" }, Z8 = /* @__PURE__ */ O({
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
      () => n.cards.filter((u) => rn(u, s.value))
    );
    return (u, d) => (t(), a("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : k(tt)])
    }, [
      E(Ee, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", zk, [
        E(Ee, {
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
          onFilter: d[0] || (d[0] = (f) => s.value = f),
          onSelect: d[1] || (d[1] = (f) => r("select", f)),
          onCart: d[2] || (d[2] = (f) => r("cart", f))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", Ok, [
        E(Ee, {
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
            E($e, {
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
}), Lk = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, jk = { class: "text-sm font-medium" }, Vk = ["width", "height", "aria-label"], Dk = { class: "flex items-center gap-2" }, Tk = /* @__PURE__ */ O({
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
    let u = null;
    function d() {
      return s.value?.getContext("2d") ?? null;
    }
    function f(S) {
      const M = s.value;
      if (!M)
        return null;
      const _ = M.getBoundingClientRect(), p = M.width / _.width, m = M.height / _.height;
      return {
        x: (S.clientX - _.left) * p,
        y: (S.clientY - _.top) * m
      };
    }
    function b(S) {
      n.disabled || (i.value = !0, u = f(S), s.value?.setPointerCapture(S.pointerId));
    }
    function g(S) {
      if (!i.value || n.disabled)
        return;
      const M = d(), _ = f(S);
      !M || !_ || !u || (M.strokeStyle = "#111827", M.lineWidth = 2.4, M.lineCap = "round", M.lineJoin = "round", M.beginPath(), M.moveTo(u.x, u.y), M.lineTo(_.x, _.y), M.stroke(), u = _);
    }
    function h() {
      i.value = !1, u = null;
    }
    function w() {
      const S = s.value, M = d();
      !S || !M || (M.clearRect(0, 0, S.width, S.height), r("clear"));
    }
    function y() {
      const S = s.value;
      S && r("save", S.toDataURL("image/png"));
    }
    function C() {
      const S = s.value, M = d();
      !S || !M || (M.fillStyle = "#ffffff", M.fillRect(0, 0, S.width, S.height));
    }
    return ve(C), ke(() => {
      i.value = !1;
    }), (S, M) => (t(), a("div", Lk, [
      o("p", jk, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: P(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(b, ["prevent"]),
        onPointermove: he(g, ["prevent"]),
        onPointerup: he(h, ["prevent"]),
        onPointerleave: he(h, ["prevent"])
      }, null, 42, Vk),
      o("div", Dk, [
        E(ue, {
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
        E(ue, {
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
}), Ek = { class: "grid gap-8 lg:grid-cols-2" }, Ik = { class: "flex flex-col gap-3" }, Fk = { class: "text-muted-foreground text-xs font-normal" }, Nk = {
  key: 0,
  class: "flex flex-col gap-3"
}, Rk = { class: "flex flex-wrap gap-3" }, Uk = ["onClick"], Hk = ["src", "alt"], Kk = {
  key: 1,
  class: "flex flex-col gap-3"
}, qk = { class: "flex flex-wrap gap-3" }, Gk = ["onClick"], Wk = ["src", "alt"], Zk = {
  key: 2,
  class: "flex flex-col gap-4"
}, Jk = { class: "flex flex-wrap items-center gap-2" }, Yk = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Xk = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Qk = { class: "flex flex-col gap-2" }, e2 = ["src"], t2 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, n2 = ["src"], J8 = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = U([]), r = U([]), s = U(null), i = U(null), u = U(null), d = U(l.documents[0]?.key ?? "");
    function f(S) {
      try {
        const M = localStorage.getItem(S), _ = M ? JSON.parse(M) : [];
        return Array.isArray(_) ? _ : [];
      } catch {
        return [];
      }
    }
    ve(() => {
      !l.storageKey || typeof localStorage > "u" || (n.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), me(
      n,
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
    function b(S) {
      const M = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: S
      };
      n.value = [M, ...n.value].slice(0, 8), s.value = M.id;
    }
    async function g(S, M) {
      await Kf(S), M(40);
      const _ = await new Promise((p, m) => {
        const v = new FileReader();
        v.onload = () => p(String(v.result)), v.onerror = () => m(new Error("Could not read the file")), v.readAsDataURL(S);
      });
      return M(100), { value: _, name: S.name, size: S.size, url: _ };
    }
    function h() {
      const S = u.value?.url ?? u.value?.value;
      if (!S)
        return;
      const M = {
        id: `stamp-${Date.now()}`,
        name: u.value?.name ?? "Stamp",
        dataUrl: S
      };
      r.value = [M, ...r.value].slice(0, 8), i.value = M.id;
    }
    const w = x(
      () => n.value.find((S) => S.id === s.value)?.dataUrl ?? null
    ), y = x(
      () => r.value.find((S) => S.id === i.value)?.dataUrl ?? null
    ), C = x(() => {
      const S = l.documents.find((_) => _.key === d.value)?.document ?? l.documents[0]?.document ?? {}, M = {
        ...S?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...S,
        branding: M
      };
    });
    return (S, M) => (t(), a("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : k(tt)])
    }, [
      E(Ee, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", Ek, [
        E(Tk, {
          label: "Draw a signature",
          onSave: b
        }),
        o("div", Ik, [
          M[2] || (M[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", Fk, c(k(Jn)), 1),
          E(Tn, {
            modelValue: u.value,
            "onUpdate:modelValue": M[0] || (M[0] = (_) => u.value = _),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: g
          }, null, 8, ["modelValue"]),
          E(ue, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: h
          }, {
            default: L(() => [...M[1] || (M[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", Nk, [
        E(Ee, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", Rk, [
          (t(!0), a(z, null, V(n.value, (_) => (t(), a("button", {
            key: _.id,
            type: "button",
            class: P(["rounded-md border p-2", _.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => s.value = _.id
          }, [
            o("img", {
              src: _.dataUrl,
              alt: _.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, Hk)
          ], 10, Uk))), 128))
        ])
      ])) : $("", !0),
      r.value.length ? (t(), a("section", Kk, [
        E(Ee, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", qk, [
          (t(!0), a(z, null, V(r.value, (_) => (t(), a("button", {
            key: _.id,
            type: "button",
            class: P(["rounded-md border p-2", _.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => i.value = _.id
          }, [
            o("img", {
              src: _.dataUrl,
              alt: _.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, Wk)
          ], 10, Gk))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), a("section", Zk, [
        o("div", Jk, [
          (t(!0), a(z, null, V(e.documents, (_) => (t(), D(ue, {
            key: _.key,
            size: "sm",
            variant: d.value === _.key ? "default" : "outline",
            onClick: (p) => d.value = _.key
          }, {
            default: L(() => [
              R(c(_.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", Yk, [
          E(mg, {
            document: C.value
          }, null, 8, ["document"]),
          o("div", Xk, [
            o("div", Qk, [
              M[3] || (M[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              w.value ? (t(), a("img", {
                key: 0,
                src: w.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, e2)) : (t(), a("p", t2, "Draw and save a signature"))
            ]),
            y.value ? (t(), a("img", {
              key: 0,
              src: y.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, n2)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), Y8 = "panel.dashboard.hiddenWidgets", a2 = /* @__PURE__ */ Symbol("dashboardHide"), l2 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, X8 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, n = yt(a2, null), r = U(
      l.catalog.filter((u) => l.defaults.includes(u.id))
    ), s = U(!1);
    ve(() => {
      if (n?.register("shortcuts", "Shortcuts"), !l.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const u = localStorage.getItem(l.storageKey);
        if (u) {
          const d = JSON.parse(u);
          Array.isArray(d) && (r.value = d.filter(
            (f) => typeof f?.id == "string" && typeof f.label == "string" && typeof f.href == "string"
          ));
        }
      } catch {
      }
      s.value = !0;
    }), me(
      r,
      (u) => {
        if (!(!s.value || !l.storageKey))
          try {
            localStorage.setItem(l.storageKey, JSON.stringify(u));
          } catch {
          }
      },
      { deep: !0 }
    );
    const i = x(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? $("", !0) : (t(), a("div", l2, [
      E(n1, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (f) => r.value = f),
        onHide: d[1] || (d[1] = (f) => k(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), o2 = { class: "flex flex-col gap-3" }, s2 = ["data-slot"], r2 = ["aria-pressed", "aria-label", "title"], i2 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, u2 = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, d2 = { class: "flex h-8 items-center" }, c2 = ["aria-label", "title", "onClick"], f2 = ["aria-label", "title", "onClick"], m2 = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, p2 = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, Q8 = /* @__PURE__ */ O({
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
    function u(p) {
      return n.maskable && (p.sensitive ?? !0);
    }
    function d(p) {
      return u(p) && !s.value && !i.value.has(p.key);
    }
    const f = x(() => n.segments.some(d)), b = x(() => n.segments.some(u)), g = {
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
    function S() {
      const p = f.value === !1;
      s.value = !p, i.value = /* @__PURE__ */ new Set(), r("toggle", p);
    }
    function M(p) {
      if (!u(p))
        return;
      const m = new Set(i.value);
      if (d(p))
        m.add(p.key);
      else if (m.delete(p.key), s.value) {
        s.value = !1;
        for (const v of n.segments)
          v.key !== p.key && u(v) && m.add(v.key);
      }
      i.value = m, r("toggle", f.value);
    }
    function _(p) {
      return typeof p == "number" ? new Intl.NumberFormat().format(p) : p;
    }
    return (p, m) => (t(), a("div", o2, [
      (t(!0), a(z, null, V(C.value, (v) => (t(), a("div", {
        key: v.key,
        class: P(["relative shrink-0", v.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": v.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && b.value && v.key === C.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: S
        }, [
          (t(), a("svg", i2, [
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
        ], 8, r2)) : $("", !0),
        o("div", {
          class: P(["grid", [v.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), a(z, null, V(v.segments, (A) => (t(), a("div", {
            key: A.key,
            class: P(["bg-card flex flex-col gap-2 p-4", v.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", u2, c(A.label), 1),
            o("div", d2, [
              e.loading ? (t(), D(ze, {
                key: 0,
                variant: "number"
              })) : d(A) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${A.label} hidden. Show it.`,
                title: `Show ${A.label}`,
                onClick: (I) => M(A)
              }, [
                (t(), a(z, null, V(5, (I) => o("span", {
                  key: I,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, c2)) : u(A) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${A.label}, ${_(A.value)}. Hide it.`,
                title: `Hide ${A.label}`,
                onClick: (I) => M(A)
              }, c(_(A.value)), 9, f2)) : (t(), a("span", m2, c(_(A.value)), 1)),
              A.trend && !e.loading && !d(A) ? (t(), D(ta, {
                key: 4,
                direction: A.trend.direction,
                percentage: A.trend.percentage,
                inverted: A.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            A.sparkline?.length && !e.loading && !d(A) ? (t(), D(Pt, {
              key: 0,
              data: A.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            A.caption || A.comparison && A.trend ? (t(), a("p", p2, c(A.caption ?? A.comparison), 1)) : $("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, s2))), 128))
    ]));
  }
}), v2 = ["aria-label"], g2 = ["aria-valuenow", "aria-label"], h2 = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, b2 = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, y2 = ["title"], x2 = { class: "font-medium" }, k2 = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, $2 = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, w2 = { class: "flex items-center justify-between gap-2" }, C2 = { class: "text-sm font-semibold" }, S2 = { class: "flex items-center gap-3" }, M2 = ["href"], B2 = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, _2 = { class: "flex min-w-0 flex-col gap-0.5" }, A2 = { class: "text-sm font-medium" }, P2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, z2 = {
  key: 1,
  class: "flex flex-col gap-2"
}, O2 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, L2 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, j2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, e6 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = x(() => n.items.find((C) => !C.done) ?? null), i = x(() => n.items.filter((C) => C.key !== s.value?.key)), u = x(() => n.items.length), d = x(() => n.items.filter((C) => C.done).length), f = x(() => {
      if (!s.value)
        return u.value;
      const C = n.items.findIndex((S) => S.key === s.value?.key);
      return C >= 0 ? C + 1 : 1;
    }), b = x(
      () => u.value > 0 ? Math.round(d.value / u.value * 100) : 0
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
    return (C, S) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
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
      ], 8, g2),
      o("div", h2, [
        o("span", b2, " Step " + c(f.value) + " of " + c(u.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", x2, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", k2, c(": " + s.value.detail), 1)) : $("", !0)
        ], 8, y2),
        s.value?.href ? (t(), D(_e(g.value), {
          key: 0,
          href: s.value.href,
          class: P(k(w))
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
          onClick: S[0] || (S[0] = (M) => r("skip"))
        }, c(e.skipLabel), 1)) : $("", !0)
      ])
    ], 8, v2)) : e.items.length ? (t(), a("section", $2, [
      o("div", w2, [
        o("h2", C2, c(e.heading), 1),
        o("div", S2, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: S[1] || (S[1] = (M) => r("skip"))
          }, c(e.skipLabel), 1)) : $("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, M2)) : $("", !0)
        ])
      ]),
      s.value ? (t(), a("div", B2, [
        S[2] || (S[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", _2, [
          o("p", A2, c(s.value.title), 1),
          s.value.detail ? (t(), a("p", P2, c(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), D(_e(g.value), {
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
      i.value.length ? (t(), a("ul", z2, [
        (t(!0), a(z, null, V(i.value, (M) => (t(), a("li", {
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
            M.done ? (t(), a("svg", O2, [...S[3] || (S[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : $("", !0)
          ], 2),
          o("div", L2, [
            o("p", {
              class: P(["text-sm", M.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(M.title), 3),
            !M.done && M.detail ? (t(), a("p", j2, c(M.detail), 1)) : $("", !0)
          ]),
          !M.done && M.href ? (t(), D(_e(g.value), {
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
}), V2 = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, D2 = { class: "hidden items-center gap-2 md:flex" }, T2 = { class: "md:hidden" }, E2 = { class: "border-b px-4 py-3" }, I2 = { class: "text-muted-foreground text-xs font-normal" }, F2 = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, N2 = { class: "font-medium tabular-nums" }, R2 = { class: "ml-auto flex items-center gap-3" }, t6 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const n = l, r = U(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, u) => (t(), a("div", V2, [
      o("div", D2, [
        K(i.$slots, "actions")
      ]),
      o("div", T2, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: u[0] || (u[0] = (d) => r.value = !0)
        }, " Actions "),
        E(en, {
          open: r.value,
          "onUpdate:open": u[1] || (u[1] = (d) => r.value = d)
        }, {
          default: L(() => [
            E(tn, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: L(() => [
                o("div", E2, [
                  u[4] || (u[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", I2, c(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", F2, [
                  K(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", N2, [
        e.allMatching ? (t(), a(z, { key: 0 }, [
          R(" All " + c(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(z, { key: 1 }, [
          R(c(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", R2, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: u[2] || (u[2] = (d) => n("select-all-matching"))
        }, " Select all " + c(s(e.total)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: u[3] || (u[3] = (d) => n("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), U2 = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, H2 = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, K2 = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, q2 = ["value"], G2 = ["value"], W2 = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Z2 = ["disabled"], J2 = ["disabled"], Y2 = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, X2 = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Q2 = ["disabled"], n6 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = (f) => new Intl.NumberFormat().format(f), i = x(() => n.rowsOnPage === 0 ? 0 : (n.page - 1) * n.perPage + 1), u = x(() => (n.page - 1) * n.perPage + n.rowsOnPage), d = x(
      () => n.total === void 0 ? null : Math.max(1, Math.ceil(n.total / n.perPage))
    );
    return (f, b) => (t(), a("div", U2, [
      o("p", H2, [
        R(" Showing " + c(s(i.value)) + "-" + c(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(z, { key: 0 }, [
          R("of " + c(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", K2, [
        b[4] || (b[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: b[0] || (b[0] = (g) => r("update:perPage", Number(g.target.value)))
        }, [
          (t(!0), a(z, null, V(e.perPageOptions, (g) => (t(), a("option", {
            key: g,
            value: g
          }, c(g), 9, G2))), 128))
        ], 40, q2)
      ])) : $("", !0),
      o("nav", W2, [
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
        ])], 8, Z2),
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
        ])], 8, J2),
        o("span", Y2, c(e.page), 1),
        d.value !== null ? (t(), a("span", X2, " of " + c(s(d.value)), 1)) : $("", !0),
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
        ])], 8, Q2)
      ])
    ]));
  }
}), e$ = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, t$ = ["aria-current"], n$ = ["title"], a$ = ["aria-current", "onClick"], l$ = ["title"], o$ = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", e$, [
      o("button", {
        type: "button",
        class: P([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => n("select", null))
      }, [
        i[1] || (i[1] = R(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, n$)) : (t(), D(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, t$),
      (t(!0), a(z, null, V(e.tabs, (u) => (t(), a("button", {
        key: u,
        type: "button",
        class: P([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => n("select", u)
      }, [
        R(c(u) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, c(r(e.counts[u] ?? 0)), 11, l$)) : (t(), D(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, a$))), 128))
    ]));
  }
}), a6 = /* @__PURE__ */ Bt(o$, [["__scopeId", "data-v-3967c945"]]), s$ = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, r$ = { class: "grid gap-2" }, i$ = {
  key: 0,
  class: "text-destructive text-sm"
}, u$ = { class: "flex gap-2" }, l6 = /* @__PURE__ */ O({
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
      ].find(({ pattern: S }) => S.test(w))?.name, C = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: S }) => S.test(w))?.name;
      return [y, C].filter(Boolean).join(" on ") || "";
    })()), i = U(!1), u = pa(null), d = x(() => u.value?.isLoading.value ?? !1), f = x(() => u.value?.error.value ?? null), b = x(() => u.value?.isSupported.value ?? !1);
    ve(async () => {
      try {
        const { usePasskeyRegister: w } = await import("@laravel/passkeys/vue");
        u.value = w({
          onSuccess: () => {
            s.value = "", i.value = !1, n("success");
          }
        });
      } catch {
        u.value = null;
      }
    });
    const g = async (w) => {
      w.preventDefault(), !(!s.value.trim() || u.value === null) && await u.value.register(s.value);
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return (w, y) => b.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: g
    }, [
      o("div", r$, [
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
      f.value ? (t(), a("p", i$, c(f.value), 1)) : $("", !0),
      o("div", u$, [
        E(ue, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: L(() => [
            R(c(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        E(ue, {
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
    ], 32)) : (t(), D(ue, {
      key: 1,
      variant: "outline",
      onClick: y[0] || (y[0] = (C) => i.value = !0)
    }, {
      default: L(() => [...y[2] || (y[2] = [
        R(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", s$, " Passkeys are not supported in this browser. "));
  }
}), d$ = { class: "pk-form-stack" }, c$ = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, o6 = /* @__PURE__ */ O({
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
    const r = l, s = x(() => n.nodes.length > 0), i = x(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = x(() => n.errors._conflict);
    function d(f) {
      if (n.upload)
        return (b, g) => n.upload(f, b, g);
    }
    return (f, b) => (t(), a("div", d$, [
      u.value ? (t(), a("p", c$, c(u.value), 1)) : $("", !0),
      s.value ? (t(!0), a(z, { key: 1 }, V(e.nodes, (g, h) => (t(), D(In, {
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
        class: P(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(z, null, V(e.fields, (g) => (t(), D(Xe, {
          key: g.key,
          field: g,
          value: e.modelValue[g.key],
          error: e.errors[g.key],
          errors: e.errors,
          options: e.options[g.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": g.searchable && e.searchOptions ? (h) => e.searchOptions(g.key, h) : void 0,
          upload: d(g.key),
          discard: e.discard,
          class: P(g.span && g.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", g.key, h),
          onAffixAction: (h) => r("affix-action", g.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), f$ = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, m$ = ["disabled"], p$ = ["disabled"], v$ = ["disabled"], g$ = ["disabled"], s6 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), D(ut, {
      to: n.value,
      disabled: r.value
    }, [
      E(Ye, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: L(() => [
          e.show ? (t(), a("div", {
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
              u[4] || (u[4] = o("span", {
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
              o("span", f$, c(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: u[0] || (u[0] = (d) => i.$emit("discard"))
              }, c(e.discardLabel), 9, m$)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: u[1] || (u[1] = (d) => i.$emit("cancel"))
              }, c(e.cancelLabel), 9, p$),
              e.extraLabel ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: u[2] || (u[2] = (d) => i.$emit("extra"))
              }, c(e.extraLabel), 9, v$)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: u[3] || (u[3] = (d) => i.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, g$)
            ], 2)
          ], 2)) : $("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function r6(e, l = {}) {
  const { warnOnUnload: n = !0 } = l, r = U(Dt(e.value)), s = x(() => Dt(e.value) !== r.value);
  function i() {
    r.value = Dt(e.value);
  }
  function u() {
    e.value = JSON.parse(r.value);
  }
  function d(f) {
    s.value && (f.preventDefault(), f.returnValue = "");
  }
  return ve(() => {
    n && window.addEventListener("beforeunload", d);
  }), ke(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: s, commit: i, discard: u, baseline: r };
}
function Dt(e) {
  return JSON.stringify(e, (l, n) => n === void 0 ? null : n === null || typeof n != "object" || Array.isArray(n) ? n : Object.fromEntries(
    Object.entries(n).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const pt = /* @__PURE__ */ new Map();
function i6(e, l) {
  pt.set(e, l);
}
function h$(e) {
  return pt.get(e);
}
function u6(e) {
  return pt.has(e);
}
function b$() {
  return [...pt.keys()].sort();
}
function d6() {
  pt.clear();
}
const y$ = {
  key: 0,
  class: "flex flex-col gap-1"
}, x$ = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, k$ = { class: "text-foreground text-sm font-medium" }, $$ = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, w$ = {
  key: 5,
  class: "max-w-full font-normal"
}, C$ = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, S$ = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, M$ = {
  key: 6,
  class: "font-normal"
}, B$ = {
  key: 0,
  class: "divide-y rounded-md border"
}, _$ = { class: "text-muted-foreground truncate font-medium" }, A$ = { class: "text-foreground col-span-2 break-words" }, P$ = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, z$ = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, O$ = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, L$ = {
  key: 10,
  class: "text-destructive text-xs font-normal",
  "data-testid": "missing-entry-view"
}, j$ = ["href"], V$ = { class: "flex min-w-0 items-start gap-2.5" }, D$ = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, T$ = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, E$ = ["d"], I$ = { class: "min-w-0" }, F$ = { class: "flex flex-wrap items-center gap-2" }, N$ = { class: "text-sm font-semibold" }, R$ = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, U$ = ["onClick"], c6 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = U(!n.node.collapsed), i = U(0), u = x(() => n.depth === 0), d = x(() => {
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
    }, b = x(() => n.node.key ? n.record[n.node.key] : null), g = x(() => {
      const M = b.value;
      return M == null || M === "";
    }), h = x(() => {
      if (g.value)
        return "None";
      const M = Number(b.value);
      if (Number.isNaN(M))
        return "None";
      const _ = n.node.divideBy ?? 100, p = M / _, m = n.node.currency ?? "USD";
      try {
        return new Intl.NumberFormat(void 0, { style: "currency", currency: m }).format(p);
      } catch {
        return `${m} ${p.toFixed(2)}`;
      }
    }), w = x(() => {
      if (g.value)
        return "None";
      const M = b.value;
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, f[n.node.type]);
      if (n.node.type === "money")
        return h.value;
      let _ = String(M);
      return n.node.transform === "upper" && (_ = _.toUpperCase()), n.node.transform === "lower" && (_ = _.toLowerCase()), [n.node.prefix, _, n.node.suffix].filter(Boolean).join(" ");
    }), y = x(() => {
      const M = typeof b.value == "boolean" ? b.value ? "1" : "" : String(b.value), _ = n.node.colors?.[M] ?? n.node.defaultColor ?? "neutral";
      return nn[_] ?? "outline";
    }), C = x(() => {
      const M = typeof n.node.view == "string" ? n.node.view : "";
      return M ? h$(M) : void 0;
    }), S = x(() => {
      const M = typeof n.node.view == "string" ? n.node.view : "";
      if (!M)
        return "ViewEntry has no view name.";
      const _ = b$(), p = _.length > 0 ? _.join(", ") : "(none)";
      return `No entry view for [${M}]; registered: ${p}`;
    });
    return (M, _) => {
      const p = Gt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", y$, [
        o("dt", x$, c(e.node.label), 1),
        o("dd", k$, [
          e.node.type === "badge" && k(zd)(b.value) ? (t(), D(Ge, {
            key: 0,
            variant: y.value,
            class: "capitalize"
          }, {
            default: L(() => [
              R(c(b.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", $$, "None")) : e.node.type === "icon" ? (t(), D(ld, {
            key: 2,
            value: b.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), D(ud, {
            key: 3,
            src: b.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), D(pd, {
            key: 4,
            value: typeof b.value == "string" ? b.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", w$, [
            e.node.language ? (t(), a("p", C$, c(e.node.language), 1)) : $("", !0),
            o("pre", S$, [
              o("code", null, c(b.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", M$, [
            b.value && typeof b.value == "object" && !Array.isArray(b.value) && Object.keys(b.value).length ? (t(), a("dl", B$, [
              (t(!0), a(z, null, V(b.value, (m, v) => (t(), a("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", _$, c(v), 1),
                o("dd", A$, c(m), 1)
              ]))), 128))
            ])) : (t(), a("span", P$, "None"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", z$, [
            (t(!0), a(z, null, V(Array.isArray(b.value) ? b.value : [], (m, v) => (t(), a("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(z, null, V(e.node.entries ?? [], (A, I) => (t(), D(p, {
                key: I,
                node: A,
                record: m,
                depth: e.depth + 1,
                onAction: _[0] || (_[0] = (T) => r("action", T))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(b.value) || b.value.length === 0 ? (t(), a("span", O$, "None")) : $("", !0)
          ])) : e.node.type === "money" ? (t(), a("span", {
            key: 8,
            class: P(g.value ? "text-muted-foreground font-normal" : "")
          }, c(h.value), 3)) : e.node.type === "view" && C.value ? (t(), D(_e(C.value), {
            key: 9,
            node: e.node,
            record: e.record,
            value: b.value
          }, null, 8, ["node", "record", "value"])) : e.node.type === "view" ? (t(), a("p", L$, c(S.value), 1)) : e.node.url && !g.value ? (t(), a("a", {
            key: 11,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, c(w.value), 9, j$)) : (t(), a("span", {
            key: 12,
            class: P([
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
        class: P(u.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: P(["flex items-start justify-between gap-3", [
            u.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: _[2] || (_[2] = (m) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", V$, [
            e.node.icon ? (t(), a("div", D$, [
              (t(), a("svg", T$, [
                o("path", {
                  d: k(ce)(e.node.icon)
                }, null, 8, E$)
              ]))
            ])) : $("", !0),
            o("div", I$, [
              o("div", F$, [
                o("h3", N$, c(e.node.label), 1),
                e.node.status ? (t(), D($e, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : $("", !0)
              ]),
              e.node.description ? (t(), a("p", R$, c(e.node.description), 1)) : $("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: P(["grid grid-cols-1 gap-x-6 gap-y-4", [d.value, u.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(z, null, V(e.node.children ?? [], (m, v) => (t(), D(p, {
            key: v,
            node: m,
            record: e.record,
            depth: e.depth + 1,
            onAction: _[3] || (_[3] = (A) => r("action", A))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: P(["grid grid-cols-1 gap-x-6 gap-y-4", d.value])
      }, [
        (t(!0), a(z, null, V(e.node.children ?? [], (m, v) => (t(), D(p, {
          key: v,
          node: m,
          record: e.record,
          depth: e.depth + 1,
          onAction: _[4] || (_[4] = (A) => r("action", A))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: P(u.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(z, null, V(e.node.children ?? [], (m, v) => (t(), a("button", {
            key: v,
            type: "button",
            class: P([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (A) => i.value = v
          }, c(m.label), 11, U$))), 128))
        ], 2),
        (t(!0), a(z, null, V(e.node.children ?? [], (m, v) => pe((t(), a("div", {
          key: v,
          class: P(["flex flex-col gap-5", u.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), a(z, null, V(m.children ?? [], (A, I) => (t(), D(p, {
            key: I,
            node: A,
            record: e.record,
            depth: e.depth + 1,
            onAction: _[5] || (_[5] = (T) => r("action", T))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [He, i.value === v]
        ])), 128))
      ], 2)) : $("", !0);
    };
  }
}), H$ = { class: "text-muted-foreground text-sm font-normal" }, K$ = { class: "flex items-start gap-3" }, q$ = { class: "min-w-0 flex-1" }, G$ = { class: "flex flex-wrap items-center gap-2" }, W$ = { class: "truncate text-sm font-medium" }, Z$ = { class: "text-muted-foreground mt-0.5 text-xs" }, J$ = { class: "text-muted-foreground text-xs font-normal" }, Y$ = { class: "mt-auto flex items-center gap-2" }, X$ = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), a("div", {
      class: P(["flex flex-col gap-4", k(Zn)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", H$, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: P(k(Df))
      }, [
        (t(!0), a(z, null, V(e.gateways, (d) => (t(), a("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", K$, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: d.color }),
              "aria-hidden": "true"
            }, c(d.mark), 5),
            o("div", q$, [
              o("div", G$, [
                o("h3", W$, c(d.label), 1),
                E($e, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: L(() => [
                    R(c(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), D($e, {
                  key: 0,
                  status: "offered"
                }, {
                  default: L(() => [...u[0] || (u[0] = [
                    R(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), D($e, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: L(() => [...u[1] || (u[1] = [
                    R(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.isDefault ? (t(), D($e, {
                  key: 2,
                  status: "default"
                }, {
                  default: L(() => [...u[2] || (u[2] = [
                    R(" Default ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.connected && d.mode ? (t(), D($e, {
                  key: 3,
                  status: d.mode
                }, {
                  default: L(() => [
                    R(c(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : $("", !0)
              ]),
              o("p", Z$, c(d.caption), 1)
            ])
          ]),
          o("p", J$, c(d.methods.join(" · ")), 1),
          o("div", Y$, [
            E(ue, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", d.key)
            }, {
              default: L(() => [...u[3] || (u[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            E(ue, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", d.key)
            }, {
              default: L(() => [
                R(c(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), Q$ = { class: "flex flex-col gap-6" }, ew = { class: "relative" }, tw = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, nw = ["d"], aw = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, lw = {
  key: 0,
  class: "flex flex-col gap-4"
}, ow = { class: "flex flex-wrap items-center gap-2" }, sw = { class: "text-muted-foreground text-sm font-normal" }, rw = { class: "flex flex-col gap-1 text-sm" }, iw = ["value"], uw = {
  key: 0,
  class: "flex flex-col gap-2"
}, dw = { class: "flex flex-wrap items-center gap-2" }, cw = {
  key: 1,
  class: "flex items-center gap-2"
}, f6 = /* @__PURE__ */ O({
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
    const l = dt(e, "gateways"), n = U(null), r = U(""), s = x(
      () => l.value.find((y) => y.key === n.value) ?? null
    ), i = x(() => {
      const y = r.value.trim().toLowerCase();
      return y === "" ? l.value : l.value.filter((C) => [C.key, C.label, C.caption, ...C.methods].join(" ").toLowerCase().includes(y));
    });
    function u(y) {
      return y.connected && y.enabled !== !1;
    }
    function d(y, C) {
      l.value = l.value.map(
        (S) => S.key === y ? { ...S, ...C } : S
      );
    }
    function f(y) {
      n.value = y;
    }
    function b(y) {
      const C = l.value.find((M) => M.key === y);
      if (!C)
        return;
      const S = !C.connected;
      d(y, {
        connected: S,
        mode: S ? C.mode ?? "test" : null,
        enabled: S,
        isDefault: !1
      });
    }
    function g(y, C) {
      const S = l.value.find((M) => M.key === y);
      S?.connected && d(y, { enabled: C, isDefault: C ? S.isDefault : !1 });
    }
    function h(y) {
      const C = l.value.find((S) => S.key === y);
      !C || !u(C) || (l.value = l.value.map((S) => ({
        ...S,
        isDefault: S.key === y
      })));
    }
    function w(y) {
      const C = n.value;
      !C || !l.value.find((M) => M.key === C)?.connected || d(C, { mode: y });
    }
    return (y, C) => (t(), a(z, null, [
      o("div", Q$, [
        E(Ee, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", ew, [
          (t(), a("svg", tw, [
            o("path", {
              d: k(ce)("search")
            }, null, 8, nw)
          ])),
          E(we, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(X$, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: b
        }, null, 8, ["gateways"])) : (t(), a("p", aw, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      E(_t, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        size: "md",
        onClose: C[8] || (C[8] = (S) => n.value = null)
      }, {
        footer: L(() => [
          E(ue, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (S) => n.value = null)
          }, {
            default: L(() => [...C[21] || (C[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), D(ue, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (S) => b(s.value.key))
          }, {
            default: L(() => [
              R(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: L(() => [
          s.value ? (t(), a("div", lw, [
            o("div", ow, [
              E($e, {
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
            o("p", sw, c(s.value.caption), 1),
            o("label", rw, [
              C[12] || (C[12] = R(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, iw)
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
              o("div", dw, [
                E(ue, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (S) => g(s.value.key, !0))
                }, {
                  default: L(() => [...C[13] || (C[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(ue, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (S) => g(s.value.key, !1))
                }, {
                  default: L(() => [...C[14] || (C[14] = [
                    R(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(ue, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: C[3] || (C[3] = (S) => h(s.value.key))
                }, {
                  default: L(() => [...C[15] || (C[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), a("div", cw, [
              E(ue, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (S) => w("test"))
              }, {
                default: L(() => [...C[18] || (C[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              E(ue, {
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
function m6(e) {
  const l = U(Cn(e));
  ve(() => {
    l.value = Cn(e);
  }), me(
    l,
    (d) => {
      try {
        localStorage.setItem(e, JSON.stringify([...d]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function n(d) {
    const f = new Set(l.value);
    f.has(d) ? f.delete(d) : f.add(d), l.value = f;
  }
  function r(d) {
    const f = new Set(l.value);
    f.add(d), l.value = f;
  }
  function s(d) {
    const f = new Set(l.value);
    f.delete(d), l.value = f;
  }
  function i(d) {
    l.value = new Set(d);
  }
  function u() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: n, hide: r, show: s, setHidden: i, reset: u };
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
function p6(e) {
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
  function n(i, u) {
    const d = Math.min(1200, Math.max(48, Math.round(u)));
    l.value = { ...l.value, [i]: d };
  }
  function r(i) {
    const u = {};
    for (const [d, f] of Object.entries(i))
      typeof f == "number" && f >= 48 && f <= 1200 && (u[d] = Math.round(f));
    l.value = u;
  }
  function s() {
    l.value = {};
  }
  return { widths: l, setWidth: n, setWidths: r, reset: s };
}
function v6(e) {
  const { config: l, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = U(
    l.driver === "none" ? "off" : "connecting"
  ), f = U(/* @__PURE__ */ new Set());
  let b = /* @__PURE__ */ new Map(), g, h, w, y = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function S(Z, N) {
    b.set(Z, { ...b.get(Z) ?? {}, ...N }), !g && (g = setTimeout(() => {
      g = void 0, M();
    }, l.batchMs));
  }
  function M() {
    if (b.size === 0)
      return;
    const Z = b;
    b = /* @__PURE__ */ new Map();
    const N = /* @__PURE__ */ new Set();
    for (const [W, J] of Z) {
      const G = n.value.find((q) => q[r] === W);
      if (!G) {
        u?.(W, J);
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
    if (!(!s || n.value.length === 0)) {
      w?.abort(), w = new AbortController();
      try {
        const Z = n.value.map((J) => J[r]), { records: N, at: W } = await s(Z, y);
        y = W, d.value = "live";
        for (const J of N)
          S(J[r], J);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function p() {
    m(), d.value = "live", h = setInterval(_, l.intervalMs);
  }
  function m() {
    clearInterval(h), h = void 0, w?.abort();
  }
  function v() {
    return window.Echo ?? null;
  }
  function A() {
    const Z = v();
    if (!Z || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = l.channel;
    const N = Z.private(l.channel);
    for (const W of l.events)
      N.listen(W, (J) => {
        J?.[r] !== void 0 && S(J[r], J);
      });
    d.value = "live", Z.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), Z.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function I() {
    C && (v()?.leave(C), C = null);
  }
  function T() {
    l.driver === "poll" && p(), l.driver === "broadcast" && A();
  }
  function te() {
    m(), I(), clearTimeout(g), g = void 0, b = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (te(), d.value = "paused") : (y = (/* @__PURE__ */ new Date()).toISOString(), T(), i?.()));
  }
  return ve(() => {
    l.driver !== "none" && (T(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), te();
  }), { status: d, recentlyChanged: f, applyPatch: S, flush: M, pollOnce: _ };
}
const fw = /^[a-z0-9-]+$/, mw = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function g6(e) {
  va(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !fw.test(n) || typeof r != "string" || !mw.test(r) || (l[`--${n}`] = r);
    Mc(l);
  });
}
const pw = { class: "flex items-center gap-0.5" }, vw = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", pw, [
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
}), gw = /* @__PURE__ */ O({
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
}), hw = { class: "flex flex-col gap-2" }, bw = { class: "bg-card rounded-lg border p-4" }, yw = { class: "text-muted-foreground truncate text-xs" }, xw = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, kw = /* @__PURE__ */ O({
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
    ), u = x(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), d = x(() => {
      const C = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return C === "" ? u.value : `${u.value} › ${C.split("/").join(" › ")}`;
    });
    function f(C, S) {
      return C.length <= S ? C : `${C.slice(0, S - 1).trimEnd()}…`;
    }
    const b = x(() => f(s.value, r.value.titleMax)), g = x(() => f(i.value, r.value.descriptionMax));
    function h(C, S, M) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > M ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < S ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const w = x(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), y = x(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, S) => (t(), a("div", hw, [
      o("div", bw, [
        o("p", yw, c(d.value), 1),
        o("p", {
          class: P(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", b.value === "" ? "text-muted-foreground italic" : ""])
        }, c(b.value || "Untitled page"), 3),
        o("p", {
          class: P(["text-muted-foreground mt-1 line-clamp-2 text-sm", g.value === "" ? "italic" : ""])
        }, c(g.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", xw, [
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
}), $w = ["value", "placeholder", "disabled"], ww = /* @__PURE__ */ O({
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
    function i(u) {
      const d = u.target.value;
      r("update:modelValue", d === "" ? null : d.trim());
    }
    return (u, d) => (t(), a("input", {
      type: "tel",
      inputmode: "tel",
      autocomplete: "tel",
      class: P(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", k(Se)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, $w));
  }
}), Cw = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, Sw = ["aria-selected", "disabled", "title", "onClick"], Mw = /* @__PURE__ */ O({
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
    function u(d) {
      n.disabled || r("update:modelValue", d === i.value ? null : d);
    }
    return (d, f) => (t(), a("div", Cw, [
      (t(!0), a(z, null, V(s.value, (b) => (t(), a("button", {
        key: b,
        type: "button",
        role: "option",
        class: P(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [k(Se), i.value === b ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === b,
        disabled: e.disabled,
        title: b,
        onClick: (g) => u(b)
      }, c(b), 11, Sw))), 128))
    ]));
  }
}), Bw = {
  class: "relative",
  "data-test": "tree-select-field"
}, _w = ["disabled"], Aw = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, Pw = ["onClick"], zw = ["onClick"], Ow = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = U(""), i = U(!1), u = x(() => n.field.options ?? []);
    function d(h, w) {
      return !w || h.label.toLowerCase().includes(w) ? !0 : (h.children ?? []).some((y) => d(y, w));
    }
    const f = x(() => {
      const h = s.value.trim().toLowerCase();
      return h ? u.value.filter((w) => d(w, h)) : u.value;
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
      return h(u.value);
    });
    function g(h) {
      n.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, w) => (t(), a("div", Bw, [
      o("button", {
        type: "button",
        class: P(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
        disabled: e.disabled,
        onClick: w[0] || (w[0] = (y) => i.value = !i.value)
      }, [
        o("span", {
          class: P(b.value ? "" : "text-muted-foreground")
        }, c(b.value ?? "Select…"), 3),
        w[2] || (w[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, _w),
      i.value ? (t(), a("div", Aw, [
        e.field.searchable ? pe((t(), a("input", {
          key: 0,
          "onUpdate:modelValue": w[1] || (w[1] = (y) => s.value = y),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Ae, s.value]
        ]) : $("", !0),
        (t(!0), a(z, null, V(f.value, (y) => (t(), a(z, {
          key: String(y.value)
        }, [
          o("button", {
            type: "button",
            class: P(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === y.value ? "bg-accent" : ""]),
            onClick: (C) => g(y.value)
          }, c(y.label), 11, Pw),
          (t(!0), a(z, null, V(y.children ?? [], (C) => (t(), a("button", {
            key: String(C.value),
            type: "button",
            class: P(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === C.value ? "bg-accent text-foreground" : ""]),
            onClick: (S) => g(C.value)
          }, c(C.label), 11, zw))), 128))
        ], 64))), 128))
      ])) : $("", !0)
    ]));
  }
}), Lw = ["aria-label"], jw = ["disabled", "aria-label", "aria-pressed", "onClick"], Vw = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, Dw = { key: 0 }, Tw = ["id"], Ew = ["fill"], Iw = ["disabled"], Fw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkRating",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(() => Math.max(1, Math.min(10, Number(n.field.max ?? 5)))), i = x(() => !!n.field.allowHalf), u = x(() => {
      const b = Number(n.modelValue);
      return Number.isFinite(b) ? b : 0;
    });
    function d(b) {
      n.disabled || r("update:modelValue", b);
    }
    function f(b) {
      return u.value >= b ? "full" : i.value && u.value >= b - 0.5 ? "half" : "empty";
    }
    return (b, g) => (t(), a("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), a(z, null, V(s.value, (h) => (t(), a("button", {
        key: h,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${h} of ${s.value}`,
        "aria-pressed": u.value >= h,
        onClick: (w) => d(h)
      }, [
        (t(), a("svg", Vw, [
          f(h) === "half" ? (t(), a("defs", Dw, [
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
            ])], 8, Tw)
          ])) : $("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: f(h) === "full" ? "currentColor" : f(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, Ew)
        ]))
      ], 8, jw))), 128)),
      u.value > 0 ? (t(), a("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: g[0] || (g[0] = (h) => d(0))
      }, " Clear ", 8, Iw)) : $("", !0)
    ], 8, Lw));
  }
});
function Nw() {
  xe("radio", xp), xe("toggle-buttons", En), xe("checkboxlist", wp), xe("tags", Pp), xe("colour", Rp), xe("slider", kv), xe("rating", Fw), xe("phone", ww), xe("icon-picker", Mw), xe("tree-select", Ow), xe("visual-select", jv), xe("markdown", Qm), xe("code", sp), xe("map", Gp), xe("qrcode", Xp), xe("barcode", ov), xe("diff", iv), xe("seo-preview", kw), Vt("swatch", Dv), Vt("voucher-code-box", gw), Vt("document-colour-mode", vw);
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
const Rw = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: n } = aa();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: P(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", k(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      K(r.$slots, "default")
    ], 6));
  }
}), Uw = ["id"], Me = /* @__PURE__ */ O({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, n) => (t(), a("section", {
      id: e.id,
      class: P(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: P(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        E(Rw, null, {
          default: L(() => [
            K(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Uw));
  }
}), Hw = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, Kw = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, qw = {
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
      class: P(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", Hw, c(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), a("h2", Kw, c(e.title), 1)) : $("", !0),
      e.body ? (t(), a("p", qw, c(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
}), Gw = { class: "flex flex-col gap-10" }, Ww = { class: "grid gap-4 md:grid-cols-3" }, Zw = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, Jw = { class: "text-sm font-semibold text-balance" }, Yw = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, Xw = /* @__PURE__ */ O({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", Gw, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Ww, [
            (t(!0), a(z, null, V(e.items ?? [], (r, s) => (t(), a("li", { key: s }, [
              (t(), D(_e(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: L(() => [
                  r.meta ? (t(), a("p", Zw, c(r.meta), 1)) : $("", !0),
                  o("h3", Jw, c(r.title), 1),
                  r.body ? (t(), a("p", Yw, c(r.body), 1)) : $("", !0)
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
function Qw() {
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
const e4 = { class: "pk-tilt-inner relative h-full" }, t4 = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = Qw();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", e4, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        K(n.$slots, "default")
      ])
    ], 512));
  }
}), n4 = { class: "flex flex-col gap-10" }, a4 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, l4 = { class: "text-base font-semibold" }, o4 = { class: "text-sm text-pretty text-muted-foreground" }, s4 = /* @__PURE__ */ O({
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
        o("div", n4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", a4, [
            (t(!0), a(z, null, V(e.items ?? [], (s, i) => (t(), D(t4, {
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
                  o("h3", l4, c(s.title), 1),
                  o("p", o4, c(s.body), 1)
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
}), r4 = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, i4 = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, u4 = { class: "grid gap-4 text-sm" }, d4 = {
  key: 0,
  class: "grid gap-1"
}, c4 = ["href"], f4 = {
  key: 1,
  class: "grid gap-1"
}, m4 = ["href"], p4 = {
  key: 2,
  class: "grid gap-1"
}, v4 = { class: "text-pretty text-muted-foreground" }, g4 = ["href"], h4 = /* @__PURE__ */ O({
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
        o("div", r4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", i4, [
            o("dl", u4, [
              e.email ? (t(), a("div", d4, [
                n[0] || (n[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.email), 9, c4)
                ])
              ])) : $("", !0),
              e.phone ? (t(), a("div", f4, [
                n[1] || (n[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.phone), 9, m4)
                ])
              ])) : $("", !0),
              e.address ? (t(), a("div", p4, [
                n[2] || (n[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", v4, c(e.address), 1)
              ])) : $("", !0)
            ]),
            e.label ? (t(), a("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.label), 9, g4)) : $("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), b4 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, y4 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, x4 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, k4 = ["href"], $4 = /* @__PURE__ */ O({
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
        o("div", b4, [
          o("h2", y4, c(e.title), 1),
          e.body ? (t(), a("p", x4, c(e.body), 1)) : $("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, k4)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), w4 = { class: "flex flex-col gap-8" }, C4 = { class: "divide-y rounded-lg border" }, S4 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, M4 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, B4 = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, { narrow: "" }, {
      default: L(() => [
        o("div", w4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", C4, [
            (t(!0), a(z, null, V(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              o("summary", S4, [
                R(c(r.question) + " ", 1),
                n[0] || (n[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", M4, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), _4 = { class: "flex flex-col gap-10" }, A4 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, P4 = { class: "text-sm font-semibold" }, z4 = { class: "text-sm text-pretty text-muted-foreground" }, O4 = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", _4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", A4, [
            (t(!0), a(z, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", P4, c(r.title), 1),
              o("p", z4, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), L4 = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, j4 = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, V4 = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, D4 = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, T4 = ["href"], E4 = ["href"], I4 = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, F4 = /* @__PURE__ */ O({
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
          class: P(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), a("p", L4, c(e.brand), 1)) : $("", !0),
          e.eyebrow ? (t(), a("p", j4, c(e.eyebrow), 1)) : $("", !0),
          o("h1", {
            class: P([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, c(e.title), 3),
          e.body ? (t(), a("p", V4, c(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", D4, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, T4)) : $("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, E4)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), a("p", I4, c(e.note), 1)) : $("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), N4 = { class: "flex flex-col items-center gap-6" }, R4 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, U4 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, H4 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, { muted: "" }, {
      default: L(() => [
        o("div", N4, [
          e.title ? (t(), a("p", R4, c(e.title), 1)) : $("", !0),
          o("ul", U4, [
            (t(!0), a(z, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, c(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), K4 = { class: "flex flex-col gap-10" }, q4 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, G4 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, W4 = ["aria-pressed"], Z4 = ["aria-pressed"], J4 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, Y4 = { class: "grid gap-4 md:grid-cols-3" }, X4 = { class: "flex flex-col gap-1" }, Q4 = { class: "text-sm font-semibold" }, e5 = { class: "flex items-baseline gap-1" }, t5 = { class: "text-3xl font-semibold tracking-tight" }, n5 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, a5 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, l5 = { class: "flex flex-col gap-2 text-sm" }, o5 = { class: "text-muted-foreground" }, s5 = ["href"], r5 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), D(Me, { muted: "" }, {
      default: L(() => [
        o("div", K4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", q4, [
            o("div", G4, [
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: u[0] || (u[0] = (d) => n.value = !1)
              }, " Monthly ", 10, W4),
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: u[1] || (u[1] = (d) => n.value = !0)
              }, " Annual ", 10, Z4)
            ]),
            e.annualNote ? (t(), a("p", J4, c(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", Y4, [
            (t(!0), a(z, null, V(e.items ?? [], (d, f) => (t(), a("li", {
              key: f,
              class: P(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", X4, [
                o("h3", Q4, c(d.name), 1),
                o("p", e5, [
                  o("span", t5, c(s(d)), 1),
                  d.period ? (t(), a("span", n5, c(d.period), 1)) : $("", !0)
                ]),
                d.body ? (t(), a("p", a5, c(d.body), 1)) : $("", !0)
              ]),
              o("ul", l5, [
                (t(!0), a(z, null, V(d.features ?? [], (b, g) => (t(), a("li", {
                  key: g,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", o5, c(b.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), a("a", {
                key: 0,
                href: d.href ?? "#",
                class: P([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(d.label), 11, s5)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function i5() {
  const e = U(null);
  let l = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const d = l.getBoundingClientRect(), f = d.height + window.innerHeight, b = f <= 0 ? 0 : (window.innerHeight - d.top) / f;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(b, 0), 1)));
  }
  function u() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return ve(() => {
    const d = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, d || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((f) => {
        s = f.some((b) => b.isIntersecting), s && u();
      }), n.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), ke(() => {
    n?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const u5 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, d5 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, c5 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, f5 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, m5 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, p5 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, v5 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, g5 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, h5 = { class: "ml-3 truncate text-xs text-muted-foreground" }, b5 = { class: "flex" }, y5 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, x5 = { class: "min-w-0 flex-1 p-4" }, k5 = { class: "flex flex-col divide-y rounded-md border" }, $5 = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = i5();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", u5, [
        o("div", d5, [
          o("div", c5, [
            o("h2", f5, c(e.title), 1),
            e.body ? (t(), a("p", m5, c(e.body), 1)) : $("", !0)
          ]),
          o("div", p5, [
            o("div", v5, [
              o("div", g5, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", h5, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", b5, [
                o("div", y5, [
                  (t(), a(z, null, V(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", x5, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", k5, [
                    (t(!0), a(z, null, V(e.rows, (s) => (t(), a("div", {
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
}), w5 = /* @__PURE__ */ O({
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
      const d = performance.now(), f = (b) => {
        const g = Math.min((b - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - g, 3)), g < 1 ? requestAnimationFrame(f) : s.value = l.to;
      };
      requestAnimationFrame(f);
    }), (i, u) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), C5 = { class: "flex flex-col gap-10" }, S5 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, M5 = { class: "order-2 text-sm text-muted-foreground" }, B5 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, _5 = /* @__PURE__ */ O({
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
        o("div", C5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", S5, [
            (t(!0), a(z, null, V(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", M5, c(s.label), 1),
              o("dd", B5, [
                l(s.value) ? (t(), D(w5, {
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
}), A5 = { class: "flex flex-col gap-10" }, P5 = { class: "grid gap-6 md:grid-cols-3" }, z5 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, O5 = { class: "text-sm font-semibold" }, L5 = { class: "text-sm text-pretty text-muted-foreground" }, j5 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", A5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", P5, [
            (t(!0), a(z, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", z5, c(s + 1), 1),
              o("h3", O5, c(r.title), 1),
              o("p", L5, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), V5 = { class: "flex flex-col gap-10" }, D5 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, T5 = ["src"], E5 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, I5 = { class: "min-w-0" }, F5 = { class: "truncate text-sm font-semibold" }, N5 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, R5 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, U5 = /* @__PURE__ */ O({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", V5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", D5, [
            (t(!0), a(z, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), a("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, T5)) : (t(), a("span", E5, c((r.name ?? "?").slice(0, 1)), 1)),
              o("div", I5, [
                o("h3", F5, c(r.name), 1),
                r.role ? (t(), a("p", N5, c(r.role), 1)) : $("", !0)
              ]),
              r.bio ? (t(), a("p", R5, c(r.bio), 1)) : $("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), H5 = { class: "flex flex-col gap-10" }, K5 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, q5 = { class: "text-pretty text-sm leading-relaxed" }, G5 = { class: "mt-auto flex items-center gap-3" }, W5 = ["src"], Z5 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, J5 = { class: "min-w-0" }, Y5 = { class: "block truncate text-sm font-medium" }, X5 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, Q5 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", H5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", K5, [
            (t(!0), a(z, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", q5, " “" + c(r.quote) + "” ", 1),
              o("figcaption", G5, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, W5)) : (t(), a("span", Z5, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", J5, [
                  o("span", Y5, c(r.name), 1),
                  r.role ? (t(), a("span", X5, c(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), h6 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const n = e, r = {
      hero: F4,
      logos: H4,
      features: O4,
      bento: s4,
      showcase: $5,
      steps: j5,
      stats: _5,
      testimonials: Q5,
      team: U5,
      articles: Xw,
      contact: h4,
      pricing: r5,
      faq: B4,
      cta: $4
    }, s = x(
      () => (n.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), a(z, null, V(s.value, (d) => (t(), D(_e(d.component), re({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), e3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, b6 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", e3, [
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
      n[0] || (n[0] = o("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), t3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, y6 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", t3, [...n[0] || (n[0] = [
      Mt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), n3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, x6 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", n3, [...n[0] || (n[0] = [
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
}), a3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, k6 = /* @__PURE__ */ O({
  __name: "PkStudioBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", a3, [...n[0] || (n[0] = [
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
Nw();
const $6 = "0.0.1";
export {
  fn as ACTION_KEY_ICONS,
  Rt as APPEARANCE_STYLE_ID,
  Af as Alert,
  Pf as AlertDescription,
  zf as AlertTitle,
  C8 as AppPageFooter,
  N3 as AppearanceDrawer,
  FC as Avatar,
  NC as AvatarFallback,
  RC as AvatarImage,
  nn as BADGE_VARIANTS,
  V3 as BadgeResolver,
  O8 as BarChart,
  UC as Breadcrumb,
  HC as BreadcrumbEllipsis,
  KC as BreadcrumbItem,
  qC as BreadcrumbLink,
  GC as BreadcrumbList,
  WC as BreadcrumbPage,
  ZC as BreadcrumbSeparator,
  h3 as BulkActions,
  Zn as CATALOGUE_CONTAINER,
  Df as CATALOGUE_GRID,
  W3 as CATALOGUE_GRID_TIGHT,
  Tf as CATALOGUE_GRID_TILES,
  p8 as Card,
  v8 as CardAction,
  g8 as CardContent,
  h8 as CardDescription,
  b8 as CardFooter,
  y8 as CardHeader,
  x8 as CardTitle,
  L0 as CartPanel,
  W8 as CatalogBrowser,
  Q1 as CatalogCard,
  na as CatalogFilterSheet,
  sn as CatalogGrid,
  q8 as CatalogInspect,
  $k as CatalogItemDetail,
  G8 as CatalogItemView,
  Z8 as CatalogRegister,
  K8 as CatalogTill,
  Tb as ChartCard,
  mt as ChartTooltip,
  ei as Checkbox,
  A3 as CheckboxCell,
  P3 as CodeCell,
  pd as ColourCell,
  T8 as ComboChart,
  Qr as CreateOptionDialog,
  Gr as CreateOptionError,
  Y8 as DASHBOARD_HIDDEN_STORAGE_KEY,
  a2 as DASHBOARD_HIDE_KEY,
  X8 as DashboardShortcuts,
  uo as DataTable,
  a8 as Dialog,
  l8 as DialogClose,
  o8 as DialogContent,
  s8 as DialogDescription,
  r8 as DialogFooter,
  i8 as DialogHeader,
  pm as DialogOverlay,
  u8 as DialogScrollContent,
  d8 as DialogTitle,
  c8 as DialogTrigger,
  MC as DropdownMenu,
  BC as DropdownMenuCheckboxItem,
  _C as DropdownMenuContent,
  AC as DropdownMenuGroup,
  PC as DropdownMenuItem,
  zC as DropdownMenuLabel,
  S6 as DropdownMenuPortal,
  OC as DropdownMenuRadioGroup,
  LC as DropdownMenuRadioItem,
  jC as DropdownMenuSeparator,
  VC as DropdownMenuShortcut,
  DC as DropdownMenuSub,
  TC as DropdownMenuSubContent,
  EC as DropdownMenuSubTrigger,
  IC as DropdownMenuTrigger,
  L3 as EditableCell,
  Se as FOCUS_RING,
  b3 as FOCUS_RING_SOFT,
  pn as FOCUS_RING_WITHIN,
  co as FORM_MEASURE,
  Xe as FormFieldControl,
  E8 as HeatmapChart,
  pl as ICON_ALIASES,
  ht as ICON_PATHS,
  Ue as INPUT_COPY,
  Yr as INPUT_PLACEHOLDER,
  Jr as INPUT_TEXT,
  ld as IconCell,
  ud as ImageCell,
  c6 as InfoNode,
  D3 as InlineRecordActions,
  Ff as JPEG_IMAGE_ERROR,
  z3 as KeyValueCell,
  f8 as Label,
  eh as LineChart,
  m0 as LineItems,
  v3 as MODAL_PANEL,
  g3 as MODAL_PANEL_FORM,
  xt as MODAL_WIDTH,
  S3 as MUTED_COPY,
  gt as MUTED_COPY_SNUG,
  M3 as MUTED_COPY_XS,
  Ct as MiniStatCard,
  JC as NavigationMenu,
  YC as NavigationMenuContent,
  XC as NavigationMenuIndicator,
  QC as NavigationMenuItem,
  e8 as NavigationMenuLink,
  t8 as NavigationMenuList,
  n8 as NavigationMenuTrigger,
  fm as NavigationMenuViewport,
  If as OPAQUE_IMAGE_ERROR,
  Dn as OVERLAY_FORM_MEASURE,
  tt as PAGE_SHELL,
  m3 as PAGE_SHELL_COMPACT,
  p3 as PAGE_SHELL_STACK,
  f6 as PaymentGatewaySettings,
  X$ as PaymentGateways,
  L8 as PieChart,
  q3 as PkAlertError,
  Xw as PkArticles,
  b6 as PkAuroraBackdrop,
  Ge as PkBadge,
  ov as PkBarcode,
  s4 as PkBento,
  R3 as PkBottomNav,
  k8 as PkBoundary,
  B8 as PkBuilder,
  ue as PkButton,
  _8 as PkCalendar,
  $8 as PkCard,
  wp as PkCheckboxList,
  ea as PkCodeBox,
  sp as PkCodeInput,
  Rp as PkColourPicker,
  x6 as PkConsoleBackdrop,
  h4 as PkContact,
  w5 as PkCountUp,
  $4 as PkCta,
  S8 as PkDeviceFrame,
  iv as PkDiff,
  mg as PkDocument,
  qe as PkDropdown,
  y6 as PkEditorialBackdrop,
  It as PkEmptyState,
  B4 as PkFaq,
  O4 as PkFeatureGrid,
  Pe as PkFieldLabel,
  Tn as PkFileUpload,
  Ee as PkHeading,
  F4 as PkHero,
  _i as PkKeyValue,
  h6 as PkLandingSections,
  H4 as PkLogoCloud,
  Hp as PkMap,
  Gp as PkMapField,
  Qm as PkMarkdownInput,
  it as PkModal,
  Qt as PkMultiSelect,
  H3 as PkOtpInput,
  K3 as PkPageHeader,
  l6 as PkPasskeyRegister,
  G3 as PkPasswordInput,
  r5 as PkPricing,
  Xp as PkQrCode,
  n0 as PkQtyStepper,
  gs as PkQueryBuilder,
  xp as PkRadioGroup,
  M8 as PkRepeater,
  Rw as PkReveal,
  Ei as PkRichEditor,
  Me as PkSection,
  je as PkSectionHeading,
  $5 as PkShowcase,
  Tk as PkSignaturePad,
  ze as PkSkeleton,
  _t as PkSlideover,
  kv as PkSlider,
  U3 as PkSpinner,
  _5 as PkStats,
  $e as PkStatusBadge,
  Kr as PkStepIndicator,
  j5 as PkSteps,
  k6 as PkStudioBackdrop,
  Dv as PkSwatchPreview,
  Pp as PkTagsInput,
  U5 as PkTeam,
  Q5 as PkTestimonials,
  we as PkTextInput,
  t4 as PkTiltCard,
  En as PkToggleButtons,
  jv as PkVisualSelect,
  My as PlanCard,
  U8 as PlanEditor,
  R8 as PlanGrid,
  H8 as PlanPurchaseCard,
  D8 as PolarAreaChart,
  V8 as RadarChart,
  _3 as RatingCell,
  ac as RecordActions,
  o6 as RecordForm,
  B3 as RelationCreateDialog,
  x3 as RelationPanel,
  fo as SLIDEOVER_BODY,
  mo as SLIDEOVER_WIDTH,
  P1 as STATUS_TONES,
  j8 as ScatterChart,
  In as SchemaNode,
  F8 as SegmentedBar,
  t6 as SelectionBar,
  rm as Separator,
  e6 as SetupChecklist,
  Wn as ShadcnInput,
  en as Sheet,
  Q3 as SheetClose,
  tn as SheetContent,
  qf as SheetDescription,
  eC as SheetFooter,
  Gf as SheetHeader,
  Wf as SheetTitle,
  tC as SheetTrigger,
  n1 as ShortcutsWidget,
  nC as Sidebar,
  aC as SidebarContent,
  lC as SidebarFooter,
  oC as SidebarGroup,
  sC as SidebarGroupAction,
  rC as SidebarGroupContent,
  iC as SidebarGroupLabel,
  uC as SidebarHeader,
  dC as SidebarInput,
  cC as SidebarInset,
  fC as SidebarMenu,
  mC as SidebarMenuAction,
  pC as SidebarMenuBadge,
  gC as SidebarMenuButton,
  hC as SidebarMenuItem,
  bC as SidebarMenuSkeleton,
  yC as SidebarMenuSub,
  xC as SidebarMenuSubButton,
  kC as SidebarMenuSubItem,
  $C as SidebarProvider,
  wC as SidebarRail,
  CC as SidebarSeparator,
  SC as SidebarTrigger,
  J8 as SignatureStudio,
  Pt as Sparkline,
  m8 as Spinner,
  I8 as StatCard,
  N8 as StatListChart,
  Q8 as StatStrip,
  Ze as Switch,
  Jn as TRANSPARENT_IMAGE_HELP,
  n6 as TablePagination,
  qo as TableShell,
  a6 as TableTabs,
  wr as TableToolbar,
  O3 as TagsCell,
  z8 as ThemeToggle,
  lm as Tooltip,
  om as TooltipContent,
  vC as TooltipProvider,
  sm as TooltipTrigger,
  ta as TrendBadge,
  s6 as UnsavedBar,
  Of as alertVariants,
  Cc as appearancePayload,
  Un as appearanceVars,
  Ut as applyAppearance,
  Kf as assertTransparentImage,
  E3 as bootstrapAppearance,
  bt as buttonClasses,
  St as catalogFiltersActive,
  ne as cn,
  Zr as createOptionActionLabel,
  Wr as createOptionTitle,
  ey as cycleLabel,
  Ie as emptyCatalogFilters,
  h$ as entryView,
  qr as fieldControl,
  C3 as fieldErrorsFromPayload,
  Ix as findExactSku,
  ty as formatPerkValue,
  zd as hasBadgeValue,
  u6 as hasEntryView,
  k3 as hasFieldControl,
  A8 as hasOptionPreview,
  ce as iconPath,
  Uf as imageHasTransparency,
  Hn as initializeAppearance,
  ln as isDark,
  rn as matchCatalogItem,
  Y3 as mergeLayoutItems,
  mm as navigationMenuTriggerStyle,
  $v as optionPreview,
  Z3 as packWidgetColumns,
  J3 as parseWidgetId,
  ny as perkGranted,
  on as readAppearance,
  Sc as readServerAppearance,
  Nw as registerBuiltInFieldControls,
  i6 as registerEntryView,
  xe as registerFieldControl,
  Vt as registerOptionPreview,
  b$ as registeredEntryViews,
  $3 as registeredFieldTypes,
  wv as registeredOptionPreviews,
  T3 as resetAppearanceBootstrapForTests,
  d6 as resetEntryViews,
  w3 as resetFieldControls,
  P8 as resetOptionPreviews,
  Te as resolveActionIcon,
  F3 as setAppearancePersister,
  im as sidebarMenuButtonVariants,
  j1 as statusBadgeVariant,
  L1 as statusTone,
  I3 as syncAppearanceFromInertiaPage,
  X3 as toPersistedLayout,
  y3 as toUrl,
  Gn as useAppearance,
  m6 as useColumnVisibility,
  p6 as useColumnWidths,
  v6 as useLiveUpdates,
  Qw as usePointer,
  aa as useReveal,
  j3 as useSchemaColumns,
  i5 as useScrollProgress,
  w8 as useShellPageFooter,
  At as useSidebar,
  g6 as useTenantTheme,
  r6 as useUnsavedChanges,
  $6 as version,
  hn as widgetId
};
//# sourceMappingURL=index.js.map
