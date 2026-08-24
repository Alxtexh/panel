import './ui.css';
import { defineComponent as O, useSlots as It, openBlock as t, createElementBlock as n, normalizeClass as A, unref as b, renderSlot as U, createElementVNode as o, toDisplayString as f, createCommentVNode as x, computed as y, normalizeStyle as se, Fragment as z, renderList as L, ref as R, watch as me, useId as Xa, withModifiers as he, createTextVNode as N, createVNode as D, createStaticVNode as Ft, createBlock as T, createSlots as st, withCtx as j, nextTick as Te, onBeforeUnmount as ke, Teleport as Qe, Transition as Ue, onMounted as ve, withDirectives as pe, vModelText as Ae, resolveDynamicComponent as _e, resolveComponent as Nt, vModelSelect as We, vModelDynamic as Qa, mergeProps as re, normalizeProps as Oe, guardReactiveProps as Fe, defineAsyncComponent as oa, inject as vt, vShow as He, onUnmounted as en, isRef as tn, useTemplateRef as an, onErrorCaptured as nn, provide as zt, markRaw as ba, withKeys as ln, reactive as rt, useModel as dt, mergeModels as Ie, shallowRef as on, watchEffect as sn } from "vue";
import { useForwardPropsEmits as be, DialogRoot as ya, DialogOverlay as Rt, DialogPortal as Ut, DialogContent as Ht, DialogClose as et, CheckboxRoot as rn, CheckboxIndicator as dn, SwitchRoot as un, SwitchThumb as cn, DialogDescription as xa, DialogTitle as ka, DialogTrigger as $a, createContext as fn, Primitive as tt, TooltipRoot as mn, TooltipPortal as pn, TooltipContent as vn, TooltipArrow as gn, TooltipProvider as wa, TooltipTrigger as hn, Separator as bn, DropdownMenuRoot as yn, DropdownMenuCheckboxItem as xn, DropdownMenuItemIndicator as Ca, DropdownMenuPortal as kn, DropdownMenuContent as $n, DropdownMenuGroup as wn, useForwardProps as je, DropdownMenuItem as Cn, DropdownMenuLabel as Sn, DropdownMenuRadioGroup as Mn, DropdownMenuRadioItem as Bn, DropdownMenuSeparator as _n, DropdownMenuSub as An, DropdownMenuSubContent as Pn, DropdownMenuSubTrigger as zn, DropdownMenuTrigger as On, AvatarRoot as jn, AvatarFallback as Ln, AvatarImage as Vn, NavigationMenuViewport as Tn, NavigationMenuRoot as Dn, NavigationMenuContent as En, NavigationMenuIndicator as In, NavigationMenuItem as Fn, NavigationMenuLink as Nn, NavigationMenuList as Rn, NavigationMenuTrigger as Un, Label as Hn } from "reka-ui";
import { DropdownMenuPortal as g8 } from "reka-ui";
import { X as Kt, Check as Sa, AlertCircle as Kn, EyeOff as qn, Eye as Gn, PanelLeftOpen as Wn, PanelLeftClose as Zn, Circle as Jn, ChevronRight as Ma, MoreHorizontal as Yn, ChevronDown as Xn, Loader2Icon as Qn } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as Ba, useMediaQuery as el, useEventListener as tl, defaultDocument as al } from "@vueuse/core";
import { clsx as nl } from "clsx";
import { twMerge as ll } from "tailwind-merge";
import { cva as qt } from "class-variance-authority";
import { usePage as _a, Link as ol } from "@inertiajs/vue3";
const Mt = {
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
  menu: "M4 6h16M4 12h16M4 18h16"
};
function ce(e) {
  return e ? Mt[e] ?? Mt.dot : Mt.dot;
}
const sl = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, rl = ["d"], il = { class: "flex max-w-sm flex-col gap-1" }, dl = {
  key: 0,
  class: "text-sm font-normal"
}, ul = {
  key: 2,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, Ot = /* @__PURE__ */ O({
  __name: "PkEmptyState",
  props: {
    title: {},
    description: {},
    icon: { default: "package" },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = It();
    return (a, r) => (t(), n("div", {
      "data-slot": "empty-state",
      class: A(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      b(l).illustration ? (t(), n("div", sl, [
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
            }, null, 8, rl)
          ], 2))
        ])
      ], 2)),
      o("div", il, [
        o("p", {
          class: A(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), n("p", dl, f(e.description), 1)) : x("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", ul, [
        U(a.$slots, "actions")
      ])) : x("", !0)
    ], 2));
  }
}), cl = ["aria-label"], ze = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, L(s.value, (c) => (t(), n("span", {
        key: c,
        "aria-hidden": "true",
        class: A(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: se({
          width: i(c - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, cl));
  }
}), fl = { class: "w-full border-collapse text-sm" }, ml = { class: "bg-background sticky top-0 z-10" }, pl = {
  key: 0,
  class: "bg-muted/40"
}, vl = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, gl = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, hl = ["colspan"], bl = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, yl = { class: "bg-muted/50" }, xl = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, kl = ["id", "checked", "indeterminate"], $l = ["onClick"], wl = {
  key: 0,
  class: "text-xs"
}, Cl = {
  key: 1,
  class: "text-xs opacity-40"
}, Sl = { key: 1 }, Ml = ["aria-label", "onPointerdown"], Bl = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, _l = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, Al = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, Pl = {
  key: 1,
  class: "px-3 py-2.5"
}, zl = {
  key: 2,
  class: "px-2 py-2.5"
}, Ol = {
  key: 0,
  class: "bg-muted/40"
}, jl = ["colspan"], Ll = ["aria-expanded", "dusk", "onClick"], Vl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Tl = {
  key: 1,
  dusk: "group-header"
}, Dl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], El = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Il = ["id", "value", "checked", "disabled", "aria-label", "onClick"], Fl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Nl = ["aria-label", "onClick"], Rl = { class: "text-xs" }, Ul = {
  key: 1,
  class: "text-muted-foreground"
}, Hl = { key: 2 }, Kl = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, ql = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, Gl = { key: 0 }, Wl = { class: "text-muted-foreground block text-[10px] font-medium" }, Zl = { class: "font-semibold tabular-nums" }, Jl = { key: 1 }, Yl = 40, Xl = /* @__PURE__ */ O({
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
    const w = R(null), P = Xa(), I = y(() => a.columns.filter((W) => !a.hidden?.has(W.key))), E = y(() => {
      const W = I.value.find((ee) => ee.sticky);
      return W ? W.key : a.stickyFirst && I.value.length > 0 ? I.value[0].key : null;
    });
    function te(W) {
      return E.value === W.key;
    }
    function H() {
      return a.selectable && !a.reordering ? `${Yl}px` : "0";
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
        const Ct = de + (nt.clientX - Y);
        p("resize", W.key, Math.min(1200, Math.max(48, Ct)));
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
    const Z = y(() => I.value.some((W) => !!W.group)), q = y(() => {
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
          const nt = Math.min(Ke, Ne), Ct = Math.max(Ke, Ne), Ya = !ie;
          for (let mt = nt; mt <= Ct; mt++) {
            if (!m(mt))
              continue;
            const St = _(a.rows[mt]);
            if (St === null)
              continue;
            !!a.selected?.has(St) !== Ya && p("toggle-row", St);
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
    async function na(W, ee, Y) {
      try {
        await navigator.clipboard.writeText(String(Y)), w.value = `${W}-${ee.key}`, setTimeout(() => w.value = null, 1200);
      } catch {
      }
    }
    const Za = y(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function la(W) {
      return a.summaries?.[W] ?? null;
    }
    function Ja(W) {
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
      o("table", fl, [
        o("thead", ml, [
          Z.value ? (t(), n("tr", pl, [
            e.reordering ? (t(), n("th", vl)) : x("", !0),
            e.selectable && !e.reordering ? (t(), n("th", gl)) : x("", !0),
            (t(!0), n(z, null, L(q.value, (Y) => (t(), n("th", {
              key: Y.key,
              colspan: Y.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, f(Y.label ?? ""), 9, hl))), 128)),
            W.$slots.actions ? (t(), n("th", bl)) : x("", !0)
          ])) : x("", !0),
          o("tr", yl, [
            e.reordering ? (t(), n("th", xl)) : x("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: A(["w-10 border-b px-3 py-2.5", E.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
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
              }, null, 40, kl)
            ], 2)) : x("", !0),
            (t(!0), n(z, null, L(I.value, (Y) => (t(), n("th", {
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
                Ce(Y) ? (t(), n("span", wl, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", Cl, "↕"))
              ], 8, $l)) : (t(), n("span", Sl, f(Y.label), 1)),
              oe(Y) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${Y.label}`,
                onPointerdown: (de) => ae(Y, de)
              }, null, 40, Ml)) : x("", !0)
            ], 6))), 128)),
            W.$slots.actions ? (t(), n("th", Bl, [...ee[2] || (ee[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : x("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", _l, [
          (t(), n(z, null, L(6, (Y) => o("tr", {
            key: `skel-${Y}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", Al, [
              D(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : x("", !0),
            e.selectable && !e.reordering ? (t(), n("td", Pl, [
              D(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : x("", !0),
            (t(!0), n(z, null, L(I.value, (de) => (t(), n("td", {
              key: de.key,
              class: "px-3 py-2.5"
            }, [
              D(ze, { variant: "text" })
            ]))), 128)),
            W.$slots.actions ? (t(), n("td", zl, [
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
          (t(!0), n(z, null, L(e.rows, (Y, de) => (t(), n(z, {
            key: _(Y) ?? `row-${de}`
          }, [
            e.groupBy && s(de) ? (t(), n("tr", Ol, [
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
                  o("span", Vl, f(c(r(Y)) ? "▸" : "▾"), 1),
                  N(" " + f(i(Y)), 1)
                ], 8, Ll)) : (t(), n("span", Tl, f(i(Y)), 1))
              ], 8, jl)
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
              e.reordering ? (t(), n("td", El, [...ee[3] || (ee[3] = [
                Ft('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : x("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: A(["px-3 py-2", E.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
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
                }, null, 8, Il)
              ], 2)) : x("", !0),
              (t(!0), n(z, null, L(I.value, (ie) => (t(), n("td", {
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
                  ie.copyable ? (t(), n("span", Fl, [
                    N(f(Y[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (Ke) => na(String(Y[e.rowKey]), ie, Y[ie.key])
                    }, [
                      o("span", Rl, f(w.value === `${Y[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Nl)
                  ])) : Y[ie.key] == null || Y[ie.key] === "" ? (t(), n("span", Ul, "None")) : (t(), n("span", Hl, f(Y[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              W.$slots.actions ? (t(), n("td", Kl, [
                U(W.$slots, "actions", { row: Y }, void 0, !0)
              ])) : x("", !0)
            ], 42, Dl)) : x("", !0)
          ], 64))), 128))
        ], 2)),
        Za.value ? (t(), n("tfoot", ql, [
          o("tr", null, [
            e.selectable ? (t(), n("td", Gl)) : x("", !0),
            (t(!0), n(z, null, L(e.columns, (Y) => (t(), n(z, {
              key: `s-${Y.key}`
            }, [
              e.hidden?.has(Y.key) ? x("", !0) : (t(), n("td", {
                key: 0,
                class: A(["px-3 py-2 align-top text-sm whitespace-nowrap", Y.cellClass])
              }, [
                la(Y.key) ? (t(), n(z, { key: 0 }, [
                  o("span", Wl, f(la(Y.key).label), 1),
                  o("span", Zl, f(Ja(Y.key)), 1)
                ], 64)) : x("", !0)
              ], 2))
            ], 64))), 128)),
            W.$slots.actions ? (t(), n("td", Jl)) : x("", !0)
          ])
        ])) : x("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), T(Ot, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, st({ _: 2 }, [
        W.$slots["clear-filters"] ? {
          name: "actions",
          fn: j(() => [
            U(W.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), T(Ot, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, st({ _: 2 }, [
        W.$slots["empty-actions"] ? {
          name: "actions",
          fn: j(() => [
            U(W.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : x("", !0)
    ], 2));
  }
}), kt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, Ql = /* @__PURE__ */ kt(Xl, [["__scopeId", "data-v-c0f7d40f"]]), eo = ["aria-label"], to = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, ao = { class: "text-base font-semibold" }, no = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, lo = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, oo = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, it = /* @__PURE__ */ O({
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
        default: j(() => [
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
              o("div", to, [
                o("h2", ao, f(e.title), 1),
                e.description ? (t(), n("p", no, f(e.description), 1)) : x("", !0)
              ]),
              o("div", lo, [
                U(m.$slots, "default")
              ]),
              o("div", oo, [
                U(m.$slots, "footer")
              ])
            ], 8, eo)
          ], 32)) : x("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), so = 160, Je = /* @__PURE__ */ O({
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
      const P = w.getBoundingClientRect(), I = 8, E = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : h.getBoundingClientRect();
      let te, H;
      if (a.placement === "bottom")
        te = E.bottom + a.offset, te + P.height > window.innerHeight - I && E.top - P.height - a.offset > I && (te = E.top - P.height - a.offset), H = a.align === "end" && !u.value ? E.right - P.width : E.left;
      else {
        te = E.top;
        const K = a.placement === "right", G = E.right + a.offset + P.width < window.innerWidth - I, oe = E.left - a.offset - P.width > I;
        H = (K ? G || !oe : !oe && G) ? E.right + a.offset : E.left - a.offset - P.width;
      }
      H = Math.min(Math.max(I, H), window.innerWidth - P.width - I), te = Math.min(Math.max(I, te), window.innerHeight - P.height - I), d.value = { top: te, left: H, minWidth: Math.max(E.width, so) };
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
          default: j(() => [
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
}), ro = ["disabled"], io = { class: "py-0.5" }, uo = ["disabled", "onClick"], co = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fo = ["d"], mo = ["disabled"], po = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vo = ["d"], go = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, ho = ["disabled", "onClick"], bo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yo = ["d"], xo = { class: "text-muted-foreground text-sm font-normal" }, ko = { class: "text-foreground font-medium tabular-nums" }, $o = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, wo = ["disabled"], Co = { class: "text-muted-foreground text-sm font-normal" }, So = { class: "text-foreground font-medium tabular-nums" }, Mo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Bo = ["disabled"], u5 = /* @__PURE__ */ O({
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
        trigger: j(() => [
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
          ])], 8, ro)
        ]),
        panel: j(() => [
          o("div", io, [
            (t(!0), n(z, null, L(v.value, (h) => (t(), n("button", {
              key: h.key,
              type: "button",
              role: "menuitem",
              class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(h)]),
              disabled: e.busy,
              onClick: (w) => k(h)
            }, [
              (t(), n("svg", co, [
                o("path", {
                  d: b(ce)(h.icon)
                }, null, 8, fo)
              ])),
              N(" " + f(h.label), 1)
            ], 10, uo))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: p[0] || (p[0] = (h) => i.value = !0)
            }, [
              (t(), n("svg", po, [
                o("path", {
                  d: b(ce)("download")
                }, null, 8, vo)
              ])),
              p[6] || (p[6] = N(" Export CSV ", -1))
            ], 8, mo)) : x("", !0),
            m.value.length ? (t(), n("div", go, [
              (t(!0), n(z, null, L(m.value, (h) => (t(), n("button", {
                key: h.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (w) => k(h)
              }, [
                (t(), n("svg", bo, [
                  o("path", {
                    d: b(ce)(h.icon ?? "trash")
                  }, null, 8, yo)
                ])),
                N(" " + f(h.label), 1)
              ], 8, ho))), 128))
            ])) : x("", !0)
          ])
        ]),
        _: 1
      }),
      D(it, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: p[2] || (p[2] = (h) => s.value = null)
      }, {
        footer: j(() => [
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
          }, f(s.value?.label), 11, wo)
        ]),
        default: j(() => [
          o("p", xo, [
            p[7] || (p[7] = N(" This will affect ", -1)),
            o("span", ko, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(f(S(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            p[8] || (p[8] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", $o, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : x("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(it, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: p[4] || (p[4] = (h) => i.value = !1)
      }, {
        footer: j(() => [
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
          }, " Export CSV ", 8, Bo)
        ]),
        default: j(() => [
          o("p", Co, [
            p[9] || (p[9] = N(" This will export ", -1)),
            o("span", So, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(f(S(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            p[10] || (p[10] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", Mo, " Nothing matches the current filters - there is nothing to export. ")) : x("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), _o = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, Ao = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, Po = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, zo = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, Oo = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", _o, [
      l.$slots.tabs ? (t(), n("div", Ao, [
        U(l.$slots, "tabs")
      ])) : x("", !0),
      l.$slots.title ? (t(), n("div", Po, [
        U(l.$slots, "title")
      ])) : x("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: A(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        U(l.$slots, "toolbar")
      ], 2)) : x("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", zo, [
        U(l.$slots, "pagination")
      ])) : x("", !0)
    ]));
  }
}), Me = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", sa = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", c5 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", jo = ["aria-expanded"], Lo = ["aria-label", "onClick"], Vo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, To = { class: "ml-auto flex shrink-0 items-center gap-1" }, Do = {
  key: 0,
  class: "border-b p-1"
}, Eo = ["placeholder"], Io = { class: "max-h-60 overflow-y-auto p-1" }, Fo = ["aria-selected", "onMouseenter", "onClick"], No = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Gt = /* @__PURE__ */ O({
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
    function I(H) {
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
    function E(H) {
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
        onClick: p
      }, [
        (t(!0), n(z, null, L(g.value, (G) => (t(), n("span", {
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
          ])], 8, Lo)
        ]))), 128)),
        g.value.length === 0 ? (t(), n("span", Vo, f(e.placeholder), 1)) : x("", !0),
        o("span", To, [
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
      ], 10, jo),
      (t(), T(Qe, { to: "body" }, [
        D(Ue, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: j(() => [
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
              C.value ? (t(), n("div", Do, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": K[0] || (K[0] = (G) => c.value = G),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: I
                }, null, 40, Eo), [
                  [Ae, c.value]
                ])
              ])) : x("", !0),
              o("div", Io, [
                (t(!0), n(z, null, L(k.value, (G, oe) => (t(), n("button", {
                  key: G.value,
                  type: "button",
                  class: A(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", oe === v.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": oe === v.value,
                  onMouseenter: (ae) => v.value = oe,
                  onClick: (ae) => h(G)
                }, f(G.label), 43, Fo))), 128)),
                k.value.length === 0 ? (t(), n("p", No, [
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
}), Ro = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Uo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, Ho = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function ot(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Ro, Uo[l], Ho[a], e.class].filter(Boolean).join(" ");
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
      () => ot({ variant: l.variant, size: l.size, class: l.class })
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
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), Ko = { class: "flex items-center gap-2" }, qo = ["onUpdate:modelValue", "onChange"], Go = ["value"], Wo = ["onUpdate:modelValue"], Zo = ["value"], Jo = ["onUpdate:modelValue"], Yo = ["onUpdate:modelValue", "multiple"], Xo = ["value"], Qo = ["onUpdate:modelValue", "type"], es = ["aria-label", "onClick"], ts = { class: "flex items-center gap-2" }, as = /* @__PURE__ */ O({
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
      const w = Nt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: A(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", Ko, [
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
        (t(!0), n(z, null, L(i.value.rules, (P, I) => (t(), n("div", {
          key: I,
          class: "flex items-start gap-2"
        }, [
          d(P) ? (t(), T(w, {
            key: 0,
            modelValue: i.value.rules[I],
            "onUpdate:modelValue": [(E) => i.value.rules[I] = E, m],
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
              onChange: (E) => $(P)
            }, [
              (t(!0), n(z, null, L(u.value, (E) => (t(), n("option", {
                key: E,
                value: E
              }, f(e.fields[E].label), 9, Go))), 128))
            ], 40, qo), [
              [We, P.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (E) => P.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: m
            }, [
              (t(!0), n(z, null, L(c(P.field), (E) => (t(), n("option", {
                key: E,
                value: E
              }, f(v[E] ?? E), 9, Zo))), 128))
            ], 40, Wo), [
              [We, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? pe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (E) => P.value = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [...h[3] || (h[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, Jo)), [
              [We, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? pe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (E) => P.value = E,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [
              (t(!0), n(z, null, L(e.fields[P.field].options, (E) => (t(), n("option", {
                key: E,
                value: E
              }, f(E), 9, Xo))), 128))
            ], 40, Yo)), [
              [We, P.value]
            ]) : pe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (E) => P.value = E,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, null, 40, Qo)), [
              [Qa, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(P) ? "group" : "rule"}`,
            onClick: (E) => k(I)
          }, " × ", 8, es)
        ]))), 128)),
        o("div", ts, [
          D(ue, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: g
          }, {
            default: j(() => [...h[4] || (h[4] = [
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
            default: j(() => [...h[5] || (h[5] = [
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
              default: j(() => [...h[6] || (h[6] = [
                N(" Clear ", -1)
              ])]),
              _: 1
            }),
            D(ue, {
              type: "button",
              size: "sm",
              onClick: B
            }, {
              default: j(() => [...h[7] || (h[7] = [
                N(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : x("", !0)
        ])
      ], 2);
    };
  }
}), Wt = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(ya), re({ "data-slot": "sheet" }, b(s)), {
      default: j((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
});
function Q(...e) {
  return ll(nl(e));
}
function f5(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const ns = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Rt), re({
      "data-slot": "sheet-overlay",
      class: b(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zt = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Ut), null, {
      default: j(() => [
        D(ns),
        D(b(Ht), re({
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
          default: j(() => [
            U(d.$slots, "default"),
            D(b(et), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                D(b(Kt), { class: "size-4" }),
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
}), ls = { class: "flex flex-col gap-2" }, os = { class: "flex items-center gap-2 md:hidden" }, ss = { class: "relative min-w-0 flex-1" }, rs = ["placeholder", "title", "aria-label"], is = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, ds = { class: "flex max-h-[85vh] flex-col" }, us = { class: "flex-1 overflow-y-auto px-4 py-3" }, cs = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, fs = { class: "text-xs font-medium" }, ms = ["value", "onChange"], ps = ["value"], vs = { class: "mb-4" }, gs = { class: "flex flex-col gap-1" }, hs = ["disabled", "onClick"], bs = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, ys = {
  key: 1,
  class: "mb-4"
}, xs = { class: "flex flex-col gap-1" }, ks = ["onClick"], $s = { class: "border-t p-4" }, ws = ["disabled"], Cs = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Ss = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Ms = ["placeholder", "title", "aria-label"], Bs = ["aria-label"], _s = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, As = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Ps = { class: "text-xs font-medium" }, zs = ["value", "onChange"], Os = ["value"], js = { class: "grid grid-cols-2 gap-2" }, Ls = ["value", "onChange"], Vs = ["value", "onChange"], Ts = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Ds = ["value", "onChange"], Es = ["value", "onChange"], Is = {
  key: 4,
  class: "flex items-center gap-2"
}, Fs = ["aria-checked", "onClick"], Ns = { class: "text-xs" }, Rs = ["onClick"], Us = ["value", "onChange"], Hs = ["value"], Ks = ["disabled", "onClick"], qs = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Gs = ["disabled", "onClick"], Ws = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Zs = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Js = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, Ys = ["aria-pressed", "aria-label", "title", "onClick"], Xs = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Qs = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, er = ["aria-pressed", "aria-label", "title"], tr = ["aria-label", "title"], ar = { class: "flex flex-col gap-0.5 p-1" }, nr = ["onClick"], lr = ["onClick"], or = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, sr = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, rr = ["dusk"], ir = ["aria-label", "onClick"], dr = /* @__PURE__ */ O({
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
    return (q, _) => (t(), n("div", ls, [
      o("div", os, [
        o("div", ss, [
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
          }, null, 10, rs), [
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
          c.value ? (t(), n("span", is, f(c.value), 1)) : x("", !0)
        ]),
        D(Wt, {
          open: s.value,
          "onUpdate:open": _[4] || (_[4] = (F) => s.value = F)
        }, {
          default: j(() => [
            D(Zt, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", ds, [
                  _[16] || (_[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", us, [
                    e.filterSchema.length ? (t(), n("div", cs, [
                      o("div", { class: "flex items-center justify-between" }, [
                        _[12] || (_[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: te
                        }, " Reset ")
                      ]),
                      (t(!0), n(z, null, L(e.filterSchema, (F) => (t(), n("div", {
                        key: `mobile-${F.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", fs, f(F.label), 1),
                        F.type !== "multiselect" && F.type !== "querybuilder" && F.type !== "daterange" && F.type !== "numberrange" && F.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: u.value[F.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (V) => p(F, V.target.value)
                        }, [
                          _[13] || (_[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(z, null, L(H(F), (V) => (t(), n("option", {
                            key: String(V.value),
                            value: V.value
                          }, f(V.label), 9, ps))), 128))
                        ], 40, ms)) : x("", !0)
                      ]))), 128))
                    ])) : x("", !0),
                    o("div", vs, [
                      _[14] || (_[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", gs, [
                        (t(!0), n(z, null, L(e.columns, (F) => (t(), n("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (V) => G(F.key)
                        }, [
                          o("span", null, f(F.label), 1),
                          K.value.has(F.key) ? x("", !0) : (t(), n("span", bs, "On"))
                        ], 8, hs))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", ys, [
                      _[15] || (_[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", xs, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: _[2] || (_[2] = (F) => {
                            C(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), n(z, null, L(e.groups, (F) => (t(), n("button", {
                          key: F.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (V) => {
                            C(F.key), s.value = !1;
                          }
                        }, f(F.label), 9, ks))), 128))
                      ])
                    ])) : x("", !0)
                  ]),
                  o("div", $s, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !v.value,
                      onClick: ae
                    }, " Apply filters ", 8, ws)) : x("", !0),
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
      o("div", Cs, [
        o("div", Ss, [
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
          }, null, 10, Ms), [
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
          trigger: j(() => [
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
              c.value ? (t(), n("span", _s, f(c.value), 1)) : x("", !0)
            ], 10, Bs)
          ]),
          panel: j(({ close: F }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              _[20] || (_[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: te
              }, " Reset ")
            ]),
            _[23] || (_[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", As, [
              (t(!0), n(z, null, L(e.filterSchema, (V) => (t(), n("div", {
                key: V.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Ps, f(V.label), 1),
                $(V) ? (t(), T(Gt, {
                  key: 0,
                  "model-value": S(V),
                  options: B(V),
                  placeholder: `Any ${V.label.toLowerCase()}`,
                  "onUpdate:modelValue": (J) => u.value[V.key] = J.length ? J : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : V.type === "querybuilder" ? (t(), T(as, {
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
                    onChange: (J) => p(V, J.target.value)
                  }, [
                    _[21] || (_[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, L(H(V), (J) => (t(), n("option", {
                      key: String(J.value),
                      value: J.value
                    }, f(J.label), 9, Os))), 128))
                  ], 40, zs),
                  o("div", js, [
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
                    }, null, 40, Ls),
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
                    }, null, 40, Vs)
                  ])
                ], 64)) : V.type === "numberrange" ? (t(), n("div", Ts, [
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
                  }, null, 40, Ds),
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
                  }, null, 40, Es)
                ])) : V.type === "boolean" ? (t(), n("div", Is, [
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
                  ], 10, Fs),
                  o("span", Ns, f(V.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: A([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[V.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (J) => p(V, u.value[V.key] === !1 ? null : !1)
                  }, f(V.falseLabel ?? "No") + " only ", 11, Rs)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[V.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (J) => p(V, J.target.value)
                }, [
                  _[22] || (_[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, L(H(V), (J) => (t(), n("option", {
                    key: String(J.value),
                    value: J.value
                  }, f(J.label), 9, Hs))), 128))
                ], 40, Us))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !v.value,
              onClick: (V) => I(F)
            }, " Apply filters ", 8, Ks)
          ]),
          _: 1
        })) : x("", !0),
        D(Je, { "dismiss-on-panel-click": !1 }, {
          trigger: j(() => [..._[24] || (_[24] = [
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
          panel: j(() => [
            _[27] || (_[27] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", qs, [
              (t(!0), n(z, null, L(e.columns, (F) => (t(), n("button", {
                key: F.key,
                type: "button",
                class: A(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (V) => G(F.key)
              }, [
                K.value.has(F.key) ? (t(), n("span", Zs)) : (t(), n("svg", Ws, [..._[25] || (_[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + f(F.label), 1)
              ], 10, Gs))), 128))
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
        e.layouts.length > 1 ? (t(), n("div", Js, [
          (t(!0), n(z, null, L(e.layouts, (F) => (t(), n("button", {
            key: F,
            type: "button",
            class: A(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === F ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === F,
            "aria-label": F === "cards" ? "Card layout" : "Table layout",
            title: F === "cards" ? "Cards" : "Table",
            onClick: (V) => r("layout", F)
          }, [
            F === "table" ? (t(), n("svg", Xs, [..._[28] || (_[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", Qs, [..._[29] || (_[29] = [
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
          ], 10, Ys))), 128))
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
        ])], 10, er)) : x("", !0),
        e.groups.length ? (t(), T(Je, {
          key: 3,
          align: "end"
        }, {
          trigger: j(() => [
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
            ])], 10, tr)
          ]),
          panel: j(({ close: F }) => [
            o("div", ar, [
              o("button", {
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (V) => {
                  C(null), F();
                }
              }, " No grouping ", 10, nr),
              (t(!0), n(z, null, L(e.groups, (V) => (t(), n("button", {
                key: V.key,
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === V.key ? "text-primary font-medium" : ""]),
                onClick: (J) => {
                  C(V.key), F();
                }
              }, f(V.label), 11, lr))), 128))
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
        e.loading ? (t(), n("span", or, "Loading…")) : x("", !0)
      ]),
      g.value.length ? (t(), n("div", sr, [
        (t(!0), n(z, null, L(g.value, (F) => (t(), n("span", {
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
          ])], 8, ir)) : x("", !0)
        ], 8, rr))), 128)),
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
}), ur = { class: "min-w-0" }, cr = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, fr = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, mr = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, pr = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, vr = { class: "w-full border-collapse text-sm" }, gr = { class: "bg-muted/40" }, hr = { class: "divide-y" }, br = ["href"], yr = {
  key: 1,
  class: "text-muted-foreground"
}, xr = {
  key: 0,
  class: "flex justify-center"
}, kr = ["disabled"], $r = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, wr = ["href"], m5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = It(), i = y(() => a.columns.filter((C) => C.type !== "image")), d = y(() => !!s.actions), u = y(() => !!a.title || d.value), c = y(() => a.filterSchema.length > 0), v = y(
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
    return (C, k) => (t(), T(Oo, null, st({
      default: j(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", mr, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(Ot, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, st({ _: 2 }, [
          C.$slots.illustration ? {
            name: "illustration",
            fn: j(() => [
              U(C.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          C.$slots["empty-actions"] ? {
            name: "actions",
            fn: j(() => [
              U(C.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", pr, [
          o("table", vr, [
            o("thead", gr, [
              o("tr", null, [
                (t(!0), n(z, null, L(i.value, ($) => (t(), n("th", {
                  key: $.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f($.label), 1))), 128))
              ])
            ]),
            o("tbody", hr, [
              (t(!0), n(z, null, L(e.rows, ($, M) => (t(), n("tr", {
                key: $.id ?? M,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(z, null, L(i.value, (S) => (t(), n("td", {
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
                    }, f(m(S, $[S.key])), 9, br)) : g($[S.key]) ? (t(), n("span", yr, " None ")) : (t(), n(z, { key: 2 }, [
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
        fn: j(() => [
          o("div", ur, [
            e.title ? (t(), n("h3", cr, f(e.title), 1)) : x("", !0)
          ]),
          d.value ? (t(), n("div", fr, [
            U(C.$slots, "actions")
          ])) : x("", !0)
        ]),
        key: "0"
      } : void 0,
      c.value ? {
        name: "toolbar",
        fn: j(() => [
          D(dr, {
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
        fn: j(() => [
          e.nextCursor ? (t(), n("div", xr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: k[6] || (k[6] = ($) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, kr)
          ])) : e.capped ? (t(), n("p", $r, [
            N(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, wr)) : (t(), n(z, { key: 1 }, [
              N("Open the full list to search or filter the rest.")
            ], 64))
          ])) : x("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), Cr = { class: "flex items-center gap-2 overflow-x-auto" }, Sr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Mr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Br = { class: "flex flex-col" }, _r = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Ar = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Pr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, zr = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("ol", Cr, [
      (t(!0), n(z, null, L(e.steps, (m, g) => (t(), n("li", {
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
          default: j(() => [
            o("span", {
              class: A(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(g)])
            }, [
              u(g) ? (t(), n("svg", Sr, [...v[0] || (v[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(g) ? (t(), n("svg", Mr, [...v[1] || (v[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                N(f(g + 1), 1)
              ], 64))
            ], 2),
            o("span", Br, [
              o("span", null, f(m.label), 1),
              m.description ? (t(), n("span", _r, f(m.description), 1)) : x("", !0)
            ]),
            e.hasError(g) ? (t(), n("span", Ar)) : x("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        g < e.steps.length - 1 ? (t(), n("span", Pr)) : x("", !0)
      ]))), 128))
    ]));
  }
}), ut = /* @__PURE__ */ new Map();
function xe(e, l) {
  ut.set(e, l);
}
function Or(e) {
  return ut.get(e);
}
function p5(e) {
  return ut.has(e);
}
function v5() {
  return [...ut.keys()].sort();
}
function g5() {
  ut.clear();
}
class jr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function h5(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function Lr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function Vr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const b5 = "text-sm text-muted-foreground font-normal", y5 = "text-xs text-muted-foreground font-normal", pt = "text-xs text-muted-foreground font-normal leading-snug", Tr = "text-foreground font-normal", Dr = "placeholder:text-muted-foreground placeholder:font-normal", Re = `${Tr} ${Dr}`, Er = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Ir = /* @__PURE__ */ O({
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
      busy: e.processing,
      onClose: u[1] || (u[1] = (c) => r("close"))
    }, {
      footer: j(() => [
        D(ue, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (c) => r("close"))
        }, {
          default: j(() => [...u[2] || (u[2] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            N(f(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          e.generalError ? (t(), n("p", Er, f(e.generalError), 1)) : x("", !0),
          (t(!0), n(z, null, L(e.fields, (c) => (t(), T(Xe, {
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
}), Fr = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(rn), re({ "data-slot": "checkbox" }, b(i), {
      class: b(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j((c) => [
        D(b(dn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            U(d.$slots, "default", Oe(Fe(c)), () => [
              D(b(Sa), { class: "size-3.5" })
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
    return (i, d) => (t(), T(b(un), re({ "data-slot": "switch" }, b(s), {
      class: b(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j(() => [
        D(b(cn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Nr = ["accept", "disabled"], Rr = { class: "text-sm font-medium" }, Ur = { key: 0 }, Hr = { key: 1 }, Kr = { class: "text-muted-foreground text-xs font-normal" }, qr = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Gr = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Wr = ["src"], Zr = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Jr = { class: "min-w-0 flex-1" }, Yr = { class: "block truncate text-sm font-medium" }, Xr = { class: "text-muted-foreground text-xs font-normal" }, Qr = ["href"], ei = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, Aa = /* @__PURE__ */ O({
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
      let P = h, I = 0;
      for (; P >= 1024 && I < w.length - 1; )
        P /= 1024, I++;
      return `${P.toFixed(P < 10 && I > 0 ? 1 : 0)} ${w[I]}`;
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
      e.modelValue ? (t(), n("div", Gr, [
        e.image && m.value ? (t(), n("img", {
          key: 0,
          src: m.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Wr)) : (t(), n("span", Zr, f(k(e.modelValue.name) || "file"), 1)),
        o("span", Jr, [
          o("span", Yr, f(e.modelValue.name), 1),
          o("span", Xr, [
            N(f(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              w[4] || (w[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Qr)
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
        }, null, 40, Nr),
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
        o("span", Rr, [
          d.value === null ? (t(), n("span", Ur, "Drop a file or click to choose")) : (t(), n("span", Hr, "Uploading…"))
        ]),
        o("span", Kr, f(g.value), 1),
        d.value !== null ? (t(), n("span", qr, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${d.value}%` })
          }, null, 4)
        ])) : x("", !0)
      ], 34)),
      u.value ? (t(), n("p", ei, f(u.value), 1)) : x("", !0)
    ]));
  }
}), ti = { class: "flex flex-col gap-2" }, ai = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, ni = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, li = { class: "flex flex-col gap-1" }, oi = ["onUpdate:modelValue", "disabled", "aria-label"], si = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, ri = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, ii = ["onUpdate:modelValue", "disabled", "aria-label"], di = ["disabled", "aria-label", "onClick"], ui = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, ci = { class: "flex items-center gap-3" }, fi = ["disabled"], mi = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, pi = /* @__PURE__ */ O({
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
    return (M, S) => (t(), n("div", ti, [
      d.value.length ? (t(), n("div", ai, [
        o("div", ni, [
          o("span", null, f(e.keyLabel), 1),
          o("span", null, f(e.valueLabel), 1),
          S[0] || (S[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, L(d.value, (B) => (t(), n("div", {
          key: B.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", li, [
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
            }, null, 42, oi), [
              [Ae, B.key]
            ]),
            g.value.has(B.key.trim()) ? (t(), n("p", si, " Letters, numbers, underscores and dashes only. ")) : m.value.has(B.key.trim()) ? (t(), n("p", ri, " Used twice - only the last value will be saved. ")) : x("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (p) => B.value = p,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: v
          }, null, 40, ii), [
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
          ])], 8, di)
        ]))), 128))
      ])) : (t(), n("p", ui, " Nothing here yet. ")),
      o("div", ci, [
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
        ], 8, fi),
        e.maxPairs !== null ? (t(), n("p", mi, f(d.value.length) + " of " + f(e.maxPairs), 1)) : x("", !0)
      ])
    ]));
  }
}), vi = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, gi = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, hi = ["disabled", "title", "aria-label", "onClick"], bi = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yi = ["d"], xi = ["disabled"], ki = ["contenteditable", "data-placeholder"], $i = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, wi = /* @__PURE__ */ O({
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
    ), ($, M) => (t(), n("div", vi, [
      o("div", gi, [
        (t(!0), n(z, null, L(u.value, (S) => (t(), n("button", {
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
          (t(), n("svg", bi, [
            o("path", {
              d: S.path
            }, null, 8, yi)
          ]))
        ], 40, hi))), 128)),
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
        ])], 40, xi)) : x("", !0)
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
      }, null, 42, ki),
      e.maxLength !== null ? (t(), n("div", $i, f(v.value) + " / " + f(e.maxLength), 1)) : x("", !0)
    ]));
  }
}), Ci = /* @__PURE__ */ kt(wi, [["__scopeId", "data-v-32c63bc7"]]), Si = {
  key: 1,
  class: "flex flex-col gap-2"
}, Mi = { class: "flex items-center justify-between gap-2" }, Bi = ["for"], _i = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Ai = ["aria-label", "disabled"], Pi = {
  key: 7,
  class: "flex flex-col gap-2"
}, zi = ["id", "value", "disabled"], Oi = ["value"], ji = {
  key: 0,
  class: "relative"
}, Li = ["disabled"], Vi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Ti = { class: "max-h-56 overflow-y-auto p-1" }, Di = ["onClick"], Ei = {
  key: 8,
  class: "relative"
}, Ii = ["disabled", "aria-invalid"], Fi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Ni = { class: "max-h-56 overflow-y-auto p-1" }, Ri = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Ui = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Hi = ["onClick"], Ki = ["id", "value", "disabled", "aria-invalid"], qi = ["value"], Gi = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Wi = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Zi = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Ji = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Yi = ["aria-label", "disabled"], Xi = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Qi = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, ed = ["aria-label", "disabled"], td = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], ad = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, nd = ["aria-label", "disabled"], ld = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], od = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, sd = ["aria-label", "disabled"], rd = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, id = ["disabled", "aria-pressed", "onClick"], dd = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, ud = ["title", "disabled", "onClick"], cd = ["href"], fd = {
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
    const a = oa(() => import("./PkRepeater-J84jGe3T.js")), r = oa(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = R(!1), u = R(""), c = R([]), v = R(!1), m = R(null);
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
    const M = vt("panelPicker", null), S = vt("panelCreateOption", null), B = R(!1), p = R(!1), h = R({}), w = R(null), P = y(() => Lr(s.field)), I = y(() => Vr(s.field));
    function E() {
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
          X instanceof jr ? (h.value = X.fieldErrors, w.value = Object.keys(X.fieldErrors).length === 0 ? X.message : null) : w.value = X instanceof Error ? X.message : "Could not create that option.";
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
    const _ = y(() => Or(s.field.type)), F = y(
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
      e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", Si, [
        o("div", Mi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: A(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            N(f(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", _i, "*")) : x("", !0)
          ], 10, Bi),
          e.field.hint ? (t(), n("span", {
            key: 0,
            class: A(["flex items-center gap-1", b(pt)])
          }, [
            N(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: X[0] || (X[0] = (ne) => V(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, Ai)) : x("", !0)
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
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(Aa, {
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
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(Ci, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[5] || (X[5] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(pi, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[6] || (X[6] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Gt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": X[7] || (X[7] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : G.value.length ? (t(), n("div", Pi, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: oe.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: A(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", b(Me)]),
            onChange: X[8] || (X[8] = (ne) => ae(ne.target.value))
          }, [
            X[24] || (X[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(z, null, L(G.value, (ne) => (t(), n("option", {
              key: ne.value,
              value: ne.value
            }, f(ne.label), 9, Oi))), 128))
          ], 42, zi),
          oe.value.type && e.searchOptions ? (t(), n("div", ji, [
            o("button", {
              type: "button",
              class: A(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Me)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: A(m.value || oe.value.id ? "" : "text-muted-foreground")
              }, f(m.value ?? (oe.value.id ? String(oe.value.id) : "Search…")), 3)
            ], 10, Li),
            d.value ? (t(), n("div", Vi, [
              pe(o("input", {
                "onUpdate:modelValue": X[9] || (X[9] = (ne) => u.value = ne),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Ae, u.value]
              ]),
              o("div", Ti, [
                (t(!0), n(z, null, L(c.value, (ne) => (t(), n("button", {
                  key: String(ne.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => q(ne)
                }, f(ne.label), 9, Di))), 128))
              ])
            ])) : x("", !0),
            d.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: X[10] || (X[10] = (ne) => d.value = !1)
            })) : x("", !0)
          ])) : x("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Ei, [
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
          ], 10, Ii),
          d.value ? (t(), n("div", Fi, [
            pe(o("input", {
              "onUpdate:modelValue": X[11] || (X[11] = (ne) => u.value = ne),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Ae, u.value]
            ]),
            o("div", Ni, [
              v.value ? (t(), n("p", Ri, " Searching… ")) : c.value.length === 0 ? (t(), n("p", Ui, " No matches ")) : x("", !0),
              (t(!0), n(z, null, L(c.value, (ne) => (t(), n("button", {
                key: String(ne.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => k(ne)
              }, f(ne.label), 9, Hi))), 128)),
              e.field.createOption && b(S) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: E
              }, [
                X[25] || (X[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + f(I.value), 1)
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
          (t(!0), n(z, null, L(e.options, (ne) => (t(), n("option", {
            key: String(ne.value),
            value: ne.value
          }, f(ne.label), 9, qi))), 128))
        ], 42, Ki)) : e.field.type === "toggle" ? (t(), n("label", Gi, [
          D(b(Ze), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[14] || (X[14] = (ne) => i("change", ne))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: A(b(pt))
          }, f(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", Wi, [
          D(b(Fr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[15] || (X[15] = (ne) => i("change", ne === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: A(b(pt))
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
        }, null, 42, Zi)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: A([
            "border-input flex overflow-hidden rounded-md border",
            b(sa),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Ji, f(e.field.prefix ?? e.field.prefixIcon), 1)) : x("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[17] || (X[17] = (ne) => V(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Yi)) : x("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: A(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", b(Re)]),
            onInput: X[18] || (X[18] = (ne) => i("change", ne.target.value))
          }, null, 42, Xi),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Qi, f(e.field.suffix ?? e.field.suffixIcon), 1)) : x("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[19] || (X[19] = (ne) => V(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, ed)) : x("", !0)
        ], 2)) : F.value ? (t(), n("div", {
          key: 15,
          class: A([
            "border-input flex h-9 overflow-hidden rounded-md border",
            b(sa),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", ad, f(e.field.prefix ?? e.field.prefixIcon), 1)) : x("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[21] || (X[21] = (ne) => V(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, nd)) : x("", !0),
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
          }, null, 40, ld),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", od, f(e.field.suffix ?? e.field.suffixIcon), 1)) : x("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[23] || (X[23] = (ne) => V(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, sd)) : x("", !0)
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
        }, null, 40, td)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", rd, [
          (t(!0), n(z, null, L(e.field.presets, (ne) => (t(), n("button", {
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
          }, f(ne), 11, id))), 128))
        ])) : x("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", dd, [
          (t(!0), n(z, null, L(e.field.chips, (ne, Ce) => (t(), n("button", {
            key: Ce,
            type: "button",
            title: ne,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (na) => ye(String(Ce))
          }, f(Ce), 9, ud))), 128))
        ])) : x("", !0),
        K.value ? (t(), n("a", {
          key: 18,
          href: K.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, cd)) : x("", !0),
        e.error ? (t(), n("p", fd, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: A(b(pt))
        }, f(e.field.help), 3)) : x("", !0)
      ])),
      e.field.createOption && b(S) ? (t(), T(Ir, {
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
}), md = { class: "flex min-w-0 items-start gap-2.5" }, pd = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, vd = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, gd = ["d"], hd = { class: "min-w-0" }, bd = { class: "text-sm font-semibold" }, yd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, xd = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, kd = { class: "border-b px-4 py-3.5 sm:px-5" }, $d = { class: "text-sm font-semibold" }, wd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Cd = {
  key: 4,
  class: "min-w-0 space-y-4"
}, Sd = {
  key: 7,
  class: "flex flex-col gap-3"
}, Md = { class: "text-sm font-medium" }, Bd = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, _d = {
  key: 0,
  class: "mb-1 font-medium"
}, Ad = ["onClick"], Pd = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, zd = { class: "flex items-center justify-between gap-3 border-t p-4" }, Od = ["disabled"], Pa = /* @__PURE__ */ O({
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
      const h = Nt("SchemaNode", !0);
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
          o("div", md, [
            e.node.icon ? (t(), n("div", pd, [
              (t(), n("svg", vd, [
                o("path", {
                  d: b(ce)(e.node.icon)
                }, null, 8, gd)
              ]))
            ])) : x("", !0),
            o("div", hd, [
              o("h3", bd, f(e.node.label), 1),
              e.node.description ? (t(), n("p", yd, f(e.node.description), 1)) : x("", !0)
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
          (t(!0), n(z, null, L(e.node.children ?? [], (w, P) => (t(), T(h, {
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
            onChange: p[3] || (p[3] = (I, E) => r("change", I, E)),
            onAffixAction: p[4] || (p[4] = (I, E) => r("affix-action", I, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : x("", !0)
      ], 2)) : e.node.component === "card" && M(e.node) ? (t(), n("section", xd, [
        o("header", kd, [
          o("h3", $d, f(e.node.title), 1),
          e.node.description ? (t(), n("p", wd, f(e.node.description), 1)) : x("", !0)
        ]),
        o("div", {
          class: A(["grid grid-cols-1 gap-4 px-4 py-4", g.value])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (w, P) => (t(), T(h, {
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
            onChange: p[5] || (p[5] = (I, E) => r("change", I, E)),
            onAffixAction: p[6] || (p[6] = (I, E) => r("affix-action", I, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && M(e.node) ? (t(), n("div", {
        key: 3,
        class: A(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (w, P) => (t(), T(h, {
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
          onChange: p[7] || (p[7] = (I, E) => r("change", I, E)),
          onAffixAction: p[8] || (p[8] = (I, E) => r("affix-action", I, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && M(e.node) ? (t(), n("div", Cd, [
        (t(!0), n(z, null, L(e.node.children ?? [], (w, P) => (t(), T(h, {
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
          onChange: p[9] || (p[9] = (I, E) => r("change", I, E)),
          onAffixAction: p[10] || (p[10] = (I, E) => r("affix-action", I, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), n("div", {
        key: 5,
        class: A(["grid grid-cols-1 gap-4", g.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (w, P) => (t(), T(h, {
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
          onChange: p[11] || (p[11] = (I, E) => r("change", I, E)),
          onAffixAction: p[12] || (p[12] = (I, E) => r("affix-action", I, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 6,
        class: A(["flex", v.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (w, P) => (t(), T(h, {
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
          onChange: p[13] || (p[13] = (I, E) => r("change", I, E)),
          onAffixAction: p[14] || (p[14] = (I, E) => r("affix-action", I, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", Sd, [
        o("legend", Md, f(e.node.label), 1),
        e.node.description ? (t(), n("p", Bd, f(e.node.description), 1)) : x("", !0),
        o("div", {
          class: A(["grid grid-cols-1 gap-4", g.value])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (w, P) => (t(), T(h, {
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
            onChange: p[15] || (p[15] = (I, E) => r("change", I, E)),
            onAffixAction: p[16] || (p[16] = (I, E) => r("affix-action", I, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 8,
        role: "note",
        class: A(["rounded-lg border px-4 py-3 text-sm", m.value])
      }, [
        e.node.title ? (t(), n("p", _d, f(e.node.title), 1)) : x("", !0),
        o("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: A(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", c.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (w, P) => (t(), n("button", {
            key: P,
            type: "button",
            class: A([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === P ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (I) => i.value = P
          }, [
            N(f(w.label) + " ", 1),
            $(w) ? (t(), n("span", Pd)) : x("", !0)
          ], 10, Ad))), 128))
        ], 2),
        (t(!0), n(z, null, L(e.node.children ?? [], (w, P) => pe((t(), n("div", {
          key: P,
          class: A(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(w.children ?? [], (I, E) => (t(), T(h, {
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
        D(zr, {
          class: A(["p-4", c.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (w) => $((e.node.children ?? [])[w]),
          "onUpdate:activeStep": p[19] || (p[19] = (w) => d.value = w)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, L(e.node.children ?? [], (w, P) => pe((t(), n("div", {
          key: P,
          class: A(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(w.children ?? [], (I, E) => (t(), T(h, {
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
            onChange: p[20] || (p[20] = (te, H) => r("change", te, H)),
            onAffixAction: p[21] || (p[21] = (te, H) => r("affix-action", te, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, d.value === P]
        ])), 128)),
        o("div", zd, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: p[22] || (p[22] = (w) => d.value--)
          }, " Back ", 8, Od),
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
}), x5 = /* @__PURE__ */ O({
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
      busy: e.processing,
      onClose: u[2] || (u[2] = (c) => r("close"))
    }, {
      footer: j(() => [
        D(ue, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (c) => r("close"))
        }, {
          default: j(() => [...u[3] || (u[3] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            N(f(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          (t(!0), n(z, null, L(e.form?.nodes ?? [], (c, v) => (t(), T(Pa, {
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
}), jd = ["title"], Ld = ["aria-label"], Vd = ["d"], Td = { class: "sr-only" }, Dd = /* @__PURE__ */ O({
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
        o("path", { d: d.value }, null, 8, Vd)
      ], 10, Ld)),
      o("span", Td, f(c.value), 1)
    ], 8, jd));
  }
}), Ed = ["aria-label"], Id = ["fill"], k5 = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, L(a.value, (d) => (t(), n("svg", {
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
        }, null, 8, Id)
      ]))), 128))
    ], 8, Ed));
  }
}), Fd = ["src"], Nd = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Rd = /* @__PURE__ */ O({
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
      }, null, 40, Fd)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        N(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Nd, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : x("", !0)
    ], 2));
  }
}), Ud = {
  key: 0,
  class: "text-muted-foreground"
}, Hd = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Kd = {
  key: 0,
  class: "font-mono text-xs"
}, qd = {
  key: 1,
  class: "sr-only"
}, Gd = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), n("span", Ud, "-")) : (t(), n("span", Hd, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Kd, f(r.value), 1)) : (t(), n("span", qd, f(r.value), 1))
    ]));
  }
}), Wd = { class: "inline-flex items-center" }, Zd = ["checked", "aria-label"], Jd = { class: "sr-only" }, $5 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("span", Wd, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Zd),
      o("span", Jd, f(r.value), 1)
    ]));
  }
}), Yd = {
  key: 0,
  class: "text-muted-foreground"
}, Xd = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, w5 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", Xd, f(a.value), 1)) : (t(), n("span", Yd, "—"));
  }
}), Qd = {
  key: 0,
  class: "font-mono text-xs"
}, eu = {
  key: 1,
  class: "text-muted-foreground"
}, tu = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, C5 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", Qd, f(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", eu, "—")) : (t(), n("span", tu, f(a.value.length) + " " + f(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), au = ["data-variant"], nu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", qe = /* @__PURE__ */ O({
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
      () => [nu, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: A(r.value)
    }, [
      U(s.$slots, "default")
    ], 10, au));
  }
}), lu = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, ou = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, S5 = /* @__PURE__ */ O({
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
    return (d, u) => r.value.length === 0 ? (t(), n("span", lu, "None")) : (t(), n("span", ou, [
      (t(!0), n(z, null, L(s.value, (c) => (t(), T(qe, {
        key: c,
        variant: "secondary"
      }, {
        default: j(() => [
          N(f(c), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), T(qe, {
        key: 0,
        variant: "outline"
      }, {
        default: j(() => [
          N("+" + f(i.value), 1)
        ]),
        _: 1
      })) : x("", !0)
    ]));
  }
}), su = ["aria-checked", "aria-label", "title", "disabled"], ru = ["value", "disabled"], iu = ["value"], M5 = /* @__PURE__ */ O({
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
    ], 10, su)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: m[0] || (m[0] = he(() => {
      }, ["stop"])),
      onChange: c
    }, [
      (t(!0), n(z, null, L(e.options, (g, C) => (t(), n("option", {
        key: C,
        value: C
      }, f(g), 9, iu))), 128))
    ], 40, ru));
  }
}), Jt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function du(e) {
  return e != null && e !== "";
}
function uu(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function B5(e) {
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
      cellClass: uu(s),
      group: s.group
    }))
  ), a = y(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = a.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), c = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return Jt[c] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const cu = ["disabled", "aria-label", "aria-busy"], fu = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mu = ["d"], pu = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, vu = ["disabled", "onClick"], gu = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, hu = ["d"], bu = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, _5 = /* @__PURE__ */ O({
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
      return Jt[C] ?? "outline";
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
        default: j(() => [
          N(f(v(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(Je, {
        key: 0,
        align: "start"
      }, {
        trigger: j(() => [
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
              default: j(() => [
                N(f(v(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", fu, [
              o("path", {
                d: b(ce)("chevron-down")
              }, null, 8, mu)
            ]))
          ], 8, cu)
        ]),
        panel: j(({ close: k }) => [
          o("div", pu, f(d.value), 1),
          (t(!0), n(z, null, L(e.options, ($, M) => (t(), n("button", {
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
              default: j(() => [
                N(f($), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(M) === i.value ? (t(), n("svg", gu, [
              o("path", {
                d: b(ce)("check")
              }, null, 8, hu)
            ])) : (t(), n("span", bu))
          ], 8, vu))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), yu = { class: "flex items-center justify-end" }, xu = ["aria-label"], ku = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, $u = ["d"], wu = ["href"], Cu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Su = ["d"], Mu = ["disabled", "onClick"], Bu = ["d"], _u = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Au = ["disabled", "onClick"], Pu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zu = ["d"], A5 = /* @__PURE__ */ O({
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
    return l({ openContextMenu: $ }), (S, B) => (t(), n("div", yu, [
      C.value ? x("", !0) : (t(), T(Je, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: j(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-label": `Actions for ${e.title}`,
            "aria-haspopup": "menu"
          }, [
            (t(), n("svg", ku, [
              o("path", {
                d: b(ce)("more-vertical")
              }, null, 8, $u)
            ]))
          ], 8, xu)
        ]),
        panel: j(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: M
          }, [
            (t(!0), n(z, null, L(c.value, (p) => (t(), n(z, {
              key: p.key
            }, [
              p.link ? (t(), n("a", {
                key: 0,
                href: p.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g(p)])
              }, [
                (t(), n("svg", Cu, [
                  o("path", {
                    d: b(ce)(p.icon)
                  }, null, 8, Su)
                ])),
                N(" " + f(p.label), 1)
              ], 10, wu)) : (t(), n("button", {
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
                    d: b(ce)(p.icon)
                  }, null, 8, Bu)
                ], 2)),
                N(" " + f(p.label), 1)
              ], 10, Mu))
            ], 64))), 128)),
            v.value.length ? (t(), n("div", _u, [
              (t(!0), n(z, null, L(v.value, (p) => (t(), n("button", {
                key: p.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === p.key,
                onClick: (h) => k(p)
              }, [
                (t(), n("svg", Pu, [
                  o("path", {
                    d: b(ce)(p.icon ?? "trash")
                  }, null, 8, zu)
                ])),
                N(" " + f(p.label), 1)
              ], 8, Au))), 128))
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
}, Lt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, gt = 12, ht = 20, Ou = [0, 0.25, 0.5, 0.75, 1], Yt = "alxtexhpanel.appearance", Be = {
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
const za = "alxtexhpanel.appearance.vars", Vt = "pk-appearance";
function at() {
  return typeof window > "u" ? null : window;
}
let bt = null;
function Oa(e) {
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
function ja(e) {
  const l = at();
  l && (l.__panelAppearance = { ...e });
}
function ju(e) {
  if (typeof document > "u")
    return;
  let l = document.getElementById(Vt);
  l || (l = document.createElement("style"), l.id = Vt, document.head.appendChild(l));
  const a = Object.entries(e).map(([r, s]) => `${r}: ${s};`).join(" ");
  l.textContent = `:root { ${a} }`;
}
function P5() {
  Ye = !1, bt = null, Ve.value = { ...Be };
  const e = at();
  e && (e.__panelAppearanceApplied = !1), typeof document < "u" && document.getElementById(Vt)?.remove();
}
function Xt(e) {
  return e.theme === "dark";
}
const ra = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, ia = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function La(e) {
  const l = jt[e.primary] ?? jt.slate, a = Lt[e.surface] ?? Lt.neutral, r = a.chroma, s = a.hue, d = Xt(e) ? {
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
    "--pk-row-padding": ra[e.density] ?? ra.comfortable,
    "--pk-form-gap": ia[e.density] ?? ia.comfortable
  };
}
function Lu(e) {
  return {
    dark: Xt(e),
    theme: e.theme,
    vars: La(e),
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
}
function Qt() {
  if (typeof window > "u")
    return { ...Be };
  try {
    const e = localStorage.getItem(Yt);
    if (!e)
      return { ...Be };
    const l = { ...Be, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Be.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? Be.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < gt || l.fontSize > ht) && (l.fontSize = Be.fontSize), l;
  } catch {
    return { ...Be };
  }
}
function Vu() {
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
function Va(e) {
  const l = Qt(), a = e ? { ...Be, ...l, ...e } : { ...Be, ...l }, r = !Ye, s = Oa(a);
  if (Ve.value = a, Ye = !0, e) {
    ja(a);
    try {
      localStorage.setItem(Yt, JSON.stringify(a));
    } catch {
    }
  }
  const d = at()?.__panelAppearanceApplied === !0;
  if (bt !== s) {
    if (r && d && e) {
      bt = s;
      try {
        const u = Lu(a);
        localStorage.setItem(za, JSON.stringify(u));
      } catch {
      }
      return;
    }
    Tt(a);
  }
}
function z5() {
  Va(Vu());
}
function O5(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Va(l);
}
let Ta = null;
function j5(e) {
  Ta = e;
}
let Da = {};
function Tu(e) {
  if (Da = e, !(typeof document > "u") && !Qt().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Tt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = La(e), r = { ...a, ...e.primaryChosen ? {} : Da }, s = {
    dark: Xt(e),
    theme: e.theme,
    vars: r,
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
  l.classList.toggle("dark", s.dark);
  for (const [d, u] of Object.entries(r))
    l.style.setProperty(d, u);
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, ju(a), ja(e), bt = Oa(e);
  const i = at();
  i && (i.__panelAppearanceApplied = !0);
  try {
    localStorage.setItem(za, JSON.stringify(s));
  } catch {
  }
}
function Ea() {
  function e(r) {
    Tt(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Ve.value = { ...Ve.value, ...r, ...s };
    try {
      localStorage.setItem(Yt, JSON.stringify(Ve.value));
    } catch {
    }
    e(Ve.value), Ta?.({ ...r, ...s });
  }
  function a() {
    l({ ...Be });
  }
  return ve(() => {
    if (Ye || at()?.__panelAppearanceApplied) {
      Ye = !0;
      return;
    }
    Ye = !0, Ve.value = Qt(), Tt(Ve.value);
  }), {
    appearance: y(() => Ve.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: jt,
    SURFACE_TINTS: Lt,
    FONT_SIZE_MIN: gt,
    FONT_SIZE_MAX: ht,
    RADIUS_OPTIONS: Ou
  };
}
const Du = { class: "flex items-center justify-between border-b px-4 py-3" }, Eu = { class: "flex items-center gap-2" }, Iu = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Fu = { class: "flex flex-col gap-2" }, Nu = { class: "grid grid-cols-8 gap-2" }, Ru = ["title", "aria-label", "aria-pressed", "onClick"], Uu = { class: "flex flex-col gap-2" }, Hu = { class: "grid grid-cols-8 gap-2" }, Ku = ["title", "aria-label", "aria-pressed", "onClick"], qu = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Gu = { class: "flex flex-col gap-2" }, Wu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Zu = ["aria-pressed", "aria-label", "onClick"], Ju = { class: "text-sm font-semibold" }, Yu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Xu = ["onClick"], Qu = { class: "flex flex-col gap-2" }, ec = { class: "flex items-center justify-between" }, tc = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, ac = { class: "flex items-center gap-2" }, nc = ["disabled"], lc = ["min", "max", "value"], oc = ["disabled"], L5 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Ea(), u = R(!1), c = y(() => l.value.sidebarSide === "right"), v = [
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
        Ft('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Qe, { to: "body" }, [
        D(Ue, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
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
          default: j(() => [
            u.value ? (t(), n("aside", {
              key: 0,
              class: A(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", c.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", Du, [
                B[9] || (B[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", Eu, [
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
              o("div", Iu, [
                o("section", Fu, [
                  B[11] || (B[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", Nu, [
                    (t(!0), n(z, null, L(b(s), (p, h) => (t(), n("button", {
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
                    ], 12, Ru))), 128))
                  ])
                ]),
                o("section", Uu, [
                  B[13] || (B[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", Hu, [
                    (t(!0), n(z, null, L(b(i), (p, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: se({ background: M(p.hue, p.chroma) }),
                      title: p.label,
                      "aria-label": p.label,
                      "aria-pressed": b(l).surface === h,
                      onClick: (w) => b(a)({ surface: h })
                    }, [
                      b(l).surface === h ? (t(), n("svg", qu, [...B[12] || (B[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : x("", !0)
                    ], 12, Ku))), 128))
                  ])
                ]),
                o("section", Gu, [
                  B[14] || (B[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", Wu, [
                    (t(!0), n(z, null, L(b(d), (p) => (t(), n("button", {
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
                    ], 10, Zu))), 128))
                  ])
                ]),
                (t(!0), n(z, null, L([
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
                  o("h3", Ju, f(p.label), 1),
                  o("div", Yu, [
                    (t(!0), n(z, null, L(p.options, (h) => (t(), n("button", {
                      key: String(h.value),
                      type: "button",
                      class: A([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l)[p.key] === h.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (w) => b(a)({ [p.key]: h.value })
                    }, f(h.label), 11, Xu))), 128))
                  ])
                ]))), 128)),
                o("section", Qu, [
                  o("div", ec, [
                    B[15] || (B[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", tc, f(b(l).fontSize) + "px", 1)
                  ]),
                  o("div", ac, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize <= b(gt),
                      "aria-label": "Decrease font size",
                      onClick: B[4] || (B[4] = (p) => b(a)({ fontSize: b(l).fontSize - 1 }))
                    }, " − ", 8, nc),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: b(gt),
                      max: b(ht),
                      value: b(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: B[5] || (B[5] = (p) => b(a)({
                        fontSize: Number(p.target.value)
                      }))
                    }, null, 40, lc),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize >= b(ht),
                      "aria-label": "Increase font size",
                      onClick: B[6] || (B[6] = (p) => b(a)({ fontSize: b(l).fontSize + 1 }))
                    }, " + ", 8, oc)
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
}), sc = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, rc = { class: "flex items-stretch" }, ic = ["href", "aria-current"], dc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, uc = ["d"], cc = { class: "w-full truncate text-center" }, fc = {
  key: 0,
  class: "flex-1"
}, mc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, pc = ["d"], vc = { class: "w-full truncate text-center" }, Bt = 5, V5 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.items.length <= Bt ? a.items : a.items.slice(0, Bt - 1)
    ), i = y(() => a.items.length > Bt);
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, c) => (t(), n("nav", sc, [
      o("ul", rc, [
        (t(!0), n(z, null, L(s.value, (v) => (t(), n("li", {
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
            (t(), n("svg", dc, [
              o("path", {
                d: b(ce)(v.icon)
              }, null, 8, uc)
            ])),
            o("span", cc, f(v.title), 1)
          ], 10, ic)
        ]))), 128)),
        i.value ? (t(), n("li", fc, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: c[0] || (c[0] = (v) => r("more"))
          }, [
            (t(), n("svg", mc, [
              o("path", {
                d: b(ce)("more-horizontal")
              }, null, 8, pc)
            ])),
            o("span", vc, f(e.moreLabel), 1)
          ])
        ])) : x("", !0)
      ])
    ]));
  }
}), gc = ["value"], $e = /* @__PURE__ */ O({
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
    }, null, 42, gc));
  }
}), hc = ["for"], Pe = /* @__PURE__ */ O({
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
    ], 10, hc));
  }
}), T5 = /* @__PURE__ */ O({
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
}), bc = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, yc = ["id", "name", "value", "disabled", "maxlength"], xc = ["data-active"], kc = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, $c = /* @__PURE__ */ O({
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
    }), en(() => {
      S !== void 0 && window.clearInterval(S);
    }), (B, p) => (t(), n("div", bc, [
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
      }, null, 40, yc),
      (t(!0), n(z, null, L(u.value, (h, w) => (t(), n("div", {
        key: w,
        "data-slot": "input-otp-slot",
        "data-active": s.value && w === c.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(f(h) + " ", 1),
        s.value && w === c.value && h === "" ? (t(), n("div", kc, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : x("", !0)
      ], 8, xc))), 128))
    ]));
  }
}), D5 = /* @__PURE__ */ kt($c, [["__scopeId", "data-v-560616ac"]]), wc = {
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
      e.description ? (t(), n("p", wc, f(e.description), 1)) : x("", !0)
    ], 2));
  }
}), Cc = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, Sc = { class: "min-w-0 space-y-1" }, Mc = { class: "flex flex-wrap items-center gap-2.5" }, Bc = { class: "text-2xl font-semibold tracking-tight" }, _c = {
  key: 0,
  class: "flex items-center gap-2"
}, Ac = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Pc = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, E5 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", Cc, [
      o("div", Sc, [
        o("div", Mc, [
          o("h1", Bc, f(e.title), 1),
          l.$slots.status ? (t(), n("div", _c, [
            U(l.$slots, "status")
          ])) : x("", !0)
        ]),
        e.purpose ? (t(), n("p", Ac, f(e.purpose), 1)) : x("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", Pc, [
        U(l.$slots, "actions")
      ])) : x("", !0)
    ]));
  }
}), zc = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: A(b(Q)(b(Lc)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Oc = /* @__PURE__ */ O({
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
}), jc = /* @__PURE__ */ O({
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
}), Lc = qt(
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
), Vc = { class: "list-inside list-disc text-sm" }, I5 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(b(zc), { variant: "destructive" }, {
      default: j(() => [
        D(b(Kn), { class: "size-4" }),
        D(b(jc), null, {
          default: j(() => [
            N(f(e.title), 1)
          ]),
          _: 1
        }),
        D(b(Oc), null, {
          default: j(() => [
            o("ul", Vc, [
              (t(!0), n(z, null, L(a.value, (i, d) => (t(), n("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ia = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = Ba(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, d) => pe((t(), n("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => tn(s) ? s.value = u : null),
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
}), Tc = { class: "relative" }, Dc = ["aria-label"], F5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = R(!1), s = an("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), n("div", Tc, [
      D(b(Ia), re({
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
        r.value ? (t(), T(b(qn), {
          key: 0,
          class: "size-4"
        })) : (t(), T(b(Gn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Dc)
    ]));
  }
}), Fa = "@container min-w-0", Ec = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", N5 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", Ic = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3", Ge = "w-full min-w-0 px-4 py-6 sm:px-6", R5 = "w-full min-w-0 p-3 sm:p-4", U5 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", Fc = "w-full max-w-5xl";
function H5(e, l) {
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
function da(e, l) {
  return `${e}:${l}`;
}
function K5(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Dt(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function q5(e, l, a, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: a }
  ], i = /* @__PURE__ */ new Map();
  for (const c of s)
    for (const v of c.items)
      i.set(da(c.kind, v.key), {
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
      span: Dt(c.span),
      hidden: !!c.hidden,
      source: m.source
    }));
  }
  for (const c of s)
    for (const v of c.items) {
      const m = da(c.kind, v.key);
      u.has(m) || d.push({
        id: m,
        kind: c.kind,
        key: v.key,
        span: Dt(v.span),
        hidden: !1,
        source: v
      });
    }
  return d;
}
function G5(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Dt(l.span),
      hidden: !!l.hidden
    }))
  };
}
const Na = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Nc = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Rc = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Uc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function Hc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Kc(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await qc(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function qc(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Gc(e) {
  if (Uc(e))
    throw new Error(Rc);
  if (!Hc(e))
    throw new Error(Na);
  if (!await Kc(e))
    throw new Error(Nc);
}
const W5 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(et), re({ "data-slot": "sheet-close" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wc = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(xa), re({
      "data-slot": "sheet-description",
      class: b(Q)("text-sm text-muted-foreground font-normal", l.class)
    }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z5 = /* @__PURE__ */ O({
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
}), Zc = /* @__PURE__ */ O({
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
}), Jc = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(ka), re({
      "data-slot": "sheet-title",
      class: b(Q)("text-foreground font-semibold", l.class)
    }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J5 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b($a), re({ "data-slot": "sheet-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ua = "sidebar_state", Yc = 3600 * 24 * 7, Xc = "16rem", Qc = "18rem", ef = "3rem", tf = "b", [$t, af] = fn("Sidebar"), nf = { class: "flex h-full w-full flex-col" }, lf = ["data-state", "data-collapsible", "data-variant", "data-side"], of = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Y5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = $t();
    return (d, u) => e.collapsible === "none" ? (t(), n("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: b(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      U(d.$slots, "default")
    ], 16)) : b(a) ? (t(), T(b(Wt), re({
      key: 1,
      open: b(s)
    }, d.$attrs, { "onUpdate:open": b(i) }), {
      default: j(() => [
        D(b(Zt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": b(Qc)
          })
        }, {
          default: j(() => [
            D(Zc, { class: "sr-only" }, {
              default: j(() => [
                D(Jc, null, {
                  default: j(() => [...u[0] || (u[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(Wc, null, {
                  default: j(() => [...u[1] || (u[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", nf, [
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
        o("div", of, [
          U(d.$slots, "default")
        ])
      ], 16)
    ], 8, lf));
  }
}), X5 = /* @__PURE__ */ O({
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
}), Q5 = /* @__PURE__ */ O({
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
}), e3 = /* @__PURE__ */ O({
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
}), t3 = /* @__PURE__ */ O({
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
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), a3 = /* @__PURE__ */ O({
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
}), n3 = /* @__PURE__ */ O({
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
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), l3 = /* @__PURE__ */ O({
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
}), o3 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Ia), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: A(b(Q)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), s3 = /* @__PURE__ */ O({
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
}), r3 = /* @__PURE__ */ O({
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
}), i3 = /* @__PURE__ */ O({
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
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), d3 = /* @__PURE__ */ O({
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
}), sf = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(mn), re({ "data-slot": "tooltip" }, b(s)), {
      default: j((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), rf = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(pn), null, {
      default: j(() => [
        D(b(vn), re({ "data-slot": "tooltip-content" }, { ...b(i), ...d.$attrs }, {
          class: b(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: j(() => [
            U(d.$slots, "default"),
            D(b(gn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), u3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(wa), Oe(Fe(l)), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), df = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(hn), re({ "data-slot": "tooltip-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ca = /* @__PURE__ */ O({
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
      class: b(Q)(b(cf)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), c3 = /* @__PURE__ */ O({
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
    const l = e, { isMobile: a, state: r } = $t(), s = fe(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), T(b(sf), { key: 1 }, {
      default: j(() => [
        D(b(df), { "as-child": "" }, {
          default: j(() => [
            D(ca, Oe(Fe({ ...b(s), ...i.$attrs })), {
              default: j(() => [
                U(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(b(rf), {
          side: "right",
          align: "center",
          hidden: b(r) !== "collapsed" || b(a)
        }, {
          default: j(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              N(f(e.tooltip), 1)
            ], 64)) : (t(), T(_e(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(ca, Oe(re({ key: 0 }, { ...b(s), ...i.$attrs })), {
      default: j(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), f3 = /* @__PURE__ */ O({
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
}), fa = "animate-pulse rounded-md bg-primary/10", m3 = /* @__PURE__ */ O({
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
        class: A(b(Q)(fa, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : x("", !0),
      o("div", {
        class: A(b(Q)(fa, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), p3 = /* @__PURE__ */ O({
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
}), v3 = /* @__PURE__ */ O({
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
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), g3 = /* @__PURE__ */ O({
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
}), h3 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !al?.cookie.includes(`${ua}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = el("(max-width: 767px)"), i = R(!1), d = Ba(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(g) {
      d.value = g, document.cookie = `${ua}=${d.value}; path=/; max-age=${Yc}`;
    }
    function c(g) {
      i.value = g;
    }
    function v() {
      return s.value ? c(!i.value) : u(!d.value);
    }
    tl("keydown", (g) => {
      g.key === tf && (g.metaKey || g.ctrlKey) && (g.preventDefault(), v());
    });
    const m = y(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return af({
      state: m,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: c,
      toggleSidebar: v
    }), (g, C) => (t(), T(b(wa), { "delay-duration": 0 }, {
      default: j(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(Xc),
            "--sidebar-width-icon": b(ef)
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
}), b3 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = $t();
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
}), uf = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(b(bn), re({ "data-slot": "separator" }, b(a), {
      class: b(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), y3 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(uf), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: A(b(Q)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), x3 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = $t();
    return (i, d) => (t(), T(ue, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: A(b(Q)("h-7 w-7", l.class)),
      onClick: b(s)
    }, {
      default: j(() => [
        b(a) || b(r) === "collapsed" ? (t(), T(b(Wn), { key: 0 })) : (t(), T(b(Zn), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), cf = qt(
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
), k3 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(yn), re({ "data-slot": "dropdown-menu" }, b(s)), {
      default: j((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), ff = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, $3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(xn), re({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", ff, [
          D(b(Ca), null, {
            default: j(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(b(Sa), { class: "size-4" })
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
}), w3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(kn), null, {
      default: j(() => [
        D(b($n), re({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...b(i) }, {
          class: b(Q)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: j(() => [
            U(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), C3 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(wn), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), S3 = /* @__PURE__ */ O({
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
    const l = e, a = fe(l, "inset", "variant", "class"), r = je(a);
    return (s, i) => (t(), T(b(Cn), re({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, b(r), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), M3 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fe(l, "class", "inset"), r = je(a);
    return (s, i) => (t(), T(b(Sn), re({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, b(r), {
      class: b(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), B3 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(b(Mn), re({ "data-slot": "dropdown-menu-radio-group" }, b(s)), {
      default: j(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, _3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Bn), re({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", mf, [
          D(b(Ca), null, {
            default: j(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(b(Jn), { class: "size-2 fill-current" })
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
}), A3 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(_n), re({ "data-slot": "dropdown-menu-separator" }, b(a), {
      class: b(Q)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), P3 = /* @__PURE__ */ O({
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
}), z3 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(b(An), re({ "data-slot": "dropdown-menu-sub" }, b(s)), {
      default: j((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), O3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Pn), re({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
      class: b(Q)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: j(() => [
        U(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), j3 = /* @__PURE__ */ O({
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
    const l = e, a = fe(l, "class", "inset"), r = je(a);
    return (s, i) => (t(), T(b(zn), re({ "data-slot": "dropdown-menu-sub-trigger" }, b(r), {
      "data-inset": e.inset ? "" : void 0,
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: j(() => [
        U(s.$slots, "default"),
        D(b(Ma), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), L3 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = je(e);
    return (r, s) => (t(), T(b(On), re({ "data-slot": "dropdown-menu-trigger" }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), V3 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(jn), {
      "data-slot": "avatar",
      class: A(b(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), T3 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Ln), re({ "data-slot": "avatar-fallback" }, b(a), {
      class: b(Q)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(Vn), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E3 = /* @__PURE__ */ O({
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
}), I3 = /* @__PURE__ */ O({
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
        D(b(Yn), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), F3 = /* @__PURE__ */ O({
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
}), N3 = /* @__PURE__ */ O({
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
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), R3 = /* @__PURE__ */ O({
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
}), U3 = /* @__PURE__ */ O({
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
}), H3 = /* @__PURE__ */ O({
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
        D(b(Ma))
      ])
    ], 2));
  }
}), pf = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, vf = /* @__PURE__ */ O({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), n("div", pf, [
      D(b(Tn), re({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), K3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Dn), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: j((c) => [
        U(d.$slots, "default", Oe(Fe(c))),
        e.viewport ? (t(), T(vf, { key: 0 })) : x("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), q3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(En), re({ "data-slot": "navigation-menu-content" }, b(i), {
      class: b(Q)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: j(() => [
        U(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G3 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), T(b(In), re({ "data-slot": "navigation-menu-indicator" }, b(r), {
      class: b(Q)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        l.class
      )
    }), {
      default: j(() => [...i[0] || (i[0] = [
        o("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), W3 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Fn), re({ "data-slot": "navigation-menu-item" }, b(a), {
      class: b(Q)("relative", l.class)
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Nn), re({ "data-slot": "navigation-menu-link" }, b(i), {
      class: b(Q)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        U(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J3 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), T(b(Rn), re({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(Q)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y3 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), T(b(Un), re({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(Q)(b(gf)(), "group", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default"),
        D(b(Xn), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gf = qt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), X3 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(ya), re({ "data-slot": "dialog" }, b(s)), {
      default: j((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), Q3 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(et), re({ "data-slot": "dialog-close" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hf = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Rt), re({ "data-slot": "dialog-overlay" }, b(a), {
      class: b(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), eC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Ut), null, {
      default: j(() => [
        D(hf),
        D(b(Ht), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...b(i) }, {
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: j(() => [
            U(d.$slots, "default"),
            e.showCloseButton ? (t(), T(b(et), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                D(b(Kt)),
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
}), tC = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), T(b(xa), re({ "data-slot": "dialog-description" }, b(r), {
      class: b(Q)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aC = /* @__PURE__ */ O({
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
        default: j(() => [
          D(ue, { variant: "outline" }, {
            default: j(() => [...r[0] || (r[0] = [
              N(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : x("", !0)
    ], 2));
  }
}), nC = /* @__PURE__ */ O({
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
}), lC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Ut), null, {
      default: j(() => [
        D(b(Rt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            D(b(Ht), re({
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
              default: j(() => [
                U(d.$slots, "default"),
                D(b(et), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    D(b(Kt), { class: "w-4 h-4" }),
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
}), oC = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), T(b(ka), re({ "data-slot": "dialog-title" }, b(r), {
      class: b(Q)("text-lg leading-none font-semibold", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sC = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b($a), re({ "data-slot": "dialog-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rC = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Hn), re({ "data-slot": "label" }, b(a), {
      class: b(Q)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iC = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Qn), {
      role: "status",
      "aria-label": "Loading",
      class: A(b(Q)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), dC = /* @__PURE__ */ O({
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
}), uC = /* @__PURE__ */ O({
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
}), cC = /* @__PURE__ */ O({
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
}), fC = /* @__PURE__ */ O({
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
}), mC = /* @__PURE__ */ O({
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
}), pC = /* @__PURE__ */ O({
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
}), vC = /* @__PURE__ */ O({
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
}), bf = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, yf = { class: "flex items-start gap-3" }, xf = { class: "min-w-0 flex-1" }, kf = { class: "text-foreground text-sm font-medium" }, $f = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, gC = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(!1), d = R(null), u = R(0);
    nn((v) => (console.error(`[PkBoundary] ${r.label} failed to render`, v), i.value = !0, d.value = v instanceof Error ? v.message : null, s("error", v), !1));
    function c() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: c }), (v, m) => (t(), n("div", {
      class: A(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", bf, [
        o("div", yf, [
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
          o("div", xf, [
            o("p", kf, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", $f, f(d.value), 1)) : x("", !0),
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
}), wf = { class: "bg-card rounded-lg border" }, Cf = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Sf = { class: "min-w-0" }, Mf = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Bf = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, _f = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Af = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, hC = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", wf, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Cf, [
        o("div", Sf, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Mf, f(e.title), 1)) : x("", !0),
            e.description ? (t(), n("p", Bf, f(e.description), 1)) : x("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", _f, [
          U(l.$slots, "actions")
        ])) : x("", !0)
      ])) : x("", !0),
      o("div", {
        class: A(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", Af, [
        U(l.$slots, "footer")
      ])) : x("", !0)
    ]));
  }
}), Ra = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function bC() {
  const e = _a(), l = y(() => e.props.panel?.pageFooter === !0);
  return zt(Ra, l), l;
}
const Pf = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, zf = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Of = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, yC = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = _a(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = y(() => {
      const c = a.props.panel;
      return Array.isArray(c?.footerLinks) ? c.footerLinks : [];
    }), d = vt(Ra, y(() => !1)), u = y(() => !l.host && b(d) === !0);
    return (c, v) => u.value ? x("", !0) : (t(), n("footer", Pf, [
      o("div", zf, [
        o("p", null, "© " + f(b(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), n("nav", Of, [
          (t(!0), n(z, null, L(i.value, (m) => (t(), T(b(ol), {
            key: m.href,
            href: m.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              N(f(m.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : x("", !0)
      ])
    ]));
  }
}), jf = { class: "flex shrink-0 flex-col items-center" }, Lf = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, xC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", jf, [
      o("div", {
        class: A(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Lf)) : x("", !0),
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
}), Vf = { class: "flex flex-col gap-2" }, Tf = { class: "min-w-0 flex-1" }, Df = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Ef = ["disabled", "aria-label", "onClick"], If = ["disabled", "aria-label", "onClick"], Ff = ["disabled", "title", "aria-label", "onClick"], Nf = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Rf = ["disabled"], kC = /* @__PURE__ */ O({
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
          const I = p.data[P.key] ?? null;
          h[P.key] = I, I !== null && I !== "" && !(Array.isArray(I) && I.length === 0) && (w = !0);
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
    return (B, p) => (t(), n("div", Vf, [
      (t(!0), n(z, null, L(i.value, (h, w) => (t(), n("div", {
        key: h.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: A(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", g.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(w + 1), 3),
        o("div", Tf, [
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
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", Df, [
            (t(!0), n(z, null, L(e.children, (P) => (t(), T(Xe, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: h.data[P.key],
              error: S(w, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (I) => M(h.uid, P.key, I)
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
          ])], 8, Ef),
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
          ])], 8, If),
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
          ])], 8, Ff)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", Nf, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : x("", !0),
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
      ], 8, Rf))
    ]));
  }
}), Uf = { class: "space-y-1" }, Hf = { class: "flex items-center gap-1" }, Kf = ["disabled", "title", "aria-label", "onClick"], qf = ["aria-pressed"], Gf = ["id", "value", "rows", "disabled"], Wf = ["innerHTML"], Zf = /* @__PURE__ */ O({
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
    return (g, C) => (t(), n("div", Uf, [
      o("div", Hf, [
        (t(!0), n(z, null, L(m.value, (k) => (t(), n("button", {
          key: k,
          type: "button",
          disabled: e.disabled,
          title: k,
          "aria-label": k,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: ($) => v[k].run()
        }, f(v[k].label), 9, Kf))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (k) => s.value = !s.value)
        }, " Preview ", 8, qf)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Wf)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = (k) => r("update:modelValue", k.target.value))
      }, null, 40, Gf))
    ]));
  }
}), Jf = { class: "space-y-1" }, Yf = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Xf = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Qf = ["id", "value", "rows", "disabled"], em = { class: "text-muted-foreground text-xs font-normal" }, tm = {
  key: 0,
  class: "text-destructive text-xs"
}, am = /* @__PURE__ */ O({
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
    return (g, C) => (t(), n("div", Jf, [
      o("div", Yf, [
        o("div", Xf, [
          (t(!0), n(z, null, L(u.value, (k) => (t(), n("div", { key: k }, f(k), 1))), 128))
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
        }, null, 40, Qf)
      ]),
      o("p", em, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      c.value ? (t(), n("p", tm, f(c.value), 1)) : x("", !0)
    ]));
  }
}), nm = { class: "space-y-3" }, lm = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, om = { class: "text-sm font-medium" }, sm = { class: "flex items-center gap-1" }, rm = ["disabled", "onClick"], im = ["disabled", "onClick"], dm = ["disabled", "onClick"], um = { class: "space-y-3 p-3" }, cm = { class: "flex flex-wrap items-center gap-2" }, fm = ["disabled", "onClick"], mm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, $C = /* @__PURE__ */ O({
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
    return (C, k) => (t(), n("div", nm, [
      (t(!0), n(z, null, L(s.value, ($, M) => (t(), n("div", {
        key: `${$.type}-${M}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", lm, [
          o("span", om, f(i.value[$.type]?.label ?? $.type), 1),
          o("div", sm, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === 0,
              "aria-label": "Move up",
              onClick: (S) => m(M, -1)
            }, " ↑ ", 8, rm),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (S) => m(M, 1)
            }, " ↓ ", 8, im),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (S) => v(M)
            }, " Remove ", 8, dm)
          ])
        ]),
        o("div", um, [
          (t(!0), n(z, null, L(i.value[$.type]?.fields ?? [], (S) => (t(), T(Xe, {
            key: S.key,
            field: S,
            value: $.data[S.key] ?? null,
            error: e.errors?.[S.key],
            processing: e.disabled,
            onChange: (B) => g(M, S.key, B)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", cm, [
        (t(!0), n(z, null, L(e.blocks, ($) => (t(), n("button", {
          key: $.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (M) => c($.type)
        }, " + " + f($.label), 9, fm))), 128)),
        d.value ? (t(), n("span", mm, f(e.maxBlocks) + " is the maximum here. ", 1)) : x("", !0)
      ])
    ]));
  }
}), pm = ["name", "value", "checked", "disabled", "onChange"], vm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, gm = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, L(e.options, (u) => (t(), n("label", {
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
        }, null, 40, pm),
        N(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", vm, " Nothing to choose from yet. ")) : x("", !0)
    ], 2));
  }
}), hm = ["value", "checked", "disabled", "onChange"], bm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, ym = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, L(e.options, (m) => (t(), n("label", {
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
        }, null, 40, hm),
        N(" " + f(m.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", bm, " Nothing to choose from yet. ")) : x("", !0)
    ], 4));
  }
}), xm = { class: "flex flex-col gap-1.5" }, km = ["aria-label", "onClick"], $m = ["placeholder", "disabled", "maxlength"], wm = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Cm = ["onClick"], Sm = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Mm = /* @__PURE__ */ O({
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
    return (g, C) => (t(), n("div", xm, [
      o("div", {
        class: A(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, L(i.value, (k, $) => (t(), n("span", {
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
          }, " × ", 8, km))
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
        }, null, 40, $m), [
          [Ae, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", wm, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(z, null, L(u.value, (k) => (t(), n("button", {
          key: k,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: ($) => c(k)
        }, f(k), 9, Cm))), 128))
      ])) : x("", !0),
      d.value ? (t(), n("p", Sm, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : x("", !0)
    ]));
  }
}), Bm = 4.5, ma = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Ua(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function _t(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Et(e) {
  const [l, a, r] = Ua(e);
  return 0.2126 * _t(l) + 0.7152 * _t(a) + 0.0722 * _t(r);
}
function Ha(e, l) {
  const a = Et(e), r = Et(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function _m(e, l, a) {
  if (!ma.test(e) || !ma.test(l))
    return e;
  const r = Et(l) > 0.5, s = r ? 0 : 255;
  let i = Ua(e);
  for (let d = 0; d <= 20; d++) {
    const u = Am(i);
    if (Ha(u, l) >= a)
      return u;
    i = i.map((c) => c + (s - c) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Am(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Pm = { class: "flex flex-col gap-2" }, zm = { class: "flex items-center gap-2" }, Om = {
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
}, jm = ["value", "disabled", "aria-label"], Lm = ["value", "disabled", "placeholder"], Vm = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Tm = ["aria-label", "title", "onClick"], Dm = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Em = /* @__PURE__ */ O({
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
    const v = y(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Ha(i.value, a.field.contrastBackground)), m = y(() => a.field.contrastMinRatio ?? Bm), g = y(() => v.value !== null && v.value < m.value);
    function C() {
      a.field.contrastBackground && r(
        "update:modelValue",
        _m(i.value, a.field.contrastBackground, m.value)
      );
    }
    return (k, $) => (t(), n("div", Pm, [
      o("div", zm, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: $[0] || ($[0] = (M) => r("update:modelValue", M.target.value))
        }, null, 40, jm)) : (t(), n("span", Om)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: c
        }, null, 40, Lm)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", Vm, [
        (t(!0), n(z, null, L(e.field.presets, (M) => (t(), n("button", {
          key: M,
          type: "button",
          class: A(["size-6 rounded border", i.value.toLowerCase() === M.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: M }),
          "aria-label": M,
          title: M,
          onClick: (S) => r("update:modelValue", M.toLowerCase())
        }, null, 14, Tm))), 128))
      ])) : x("", !0),
      g.value ? (t(), n("p", Dm, [
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
}), Im = ["aria-disabled"], Fm = /* @__PURE__ */ O({
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
    }, null, 12, Im));
  }
}), Nm = { class: "flex flex-col gap-2" }, Rm = { class: "text-muted-foreground text-xs font-normal" }, Um = /* @__PURE__ */ O({
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
    return (u, c) => (t(), n("div", Nm, [
      D(Fm, {
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
      o("p", Rm, [
        N(" Click the map to set " + f(i.value) + " / " + f(d.value) + " ", 1),
        s.value ? (t(), n(z, { key: 0 }, [
          N(" (" + f(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + f(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : x("", !0)
      ])
    ]));
  }
}), Hm = { class: "flex flex-col gap-2" }, Km = ["width", "height"], qm = ["value", "disabled"], Gm = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Wm = /* @__PURE__ */ O({
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
    }), (c, v) => (t(), n("div", Hm, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, Km),
      e.field.from ? (t(), n("p", Gm, "From " + f(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: v[0] || (v[0] = (m) => r("update:modelValue", m.target.value))
      }, null, 40, qm))
    ]));
  }
}), Zm = { class: "flex flex-col gap-2" }, Jm = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, Ym = ["aria-label"], Xm = {
  key: 0,
  class: "text-destructive text-xs"
}, Qm = ["value", "disabled"], ep = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, tp = /* @__PURE__ */ O({
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
    }), (v, m) => (t(), n("div", Zm, [
      o("div", Jm, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, Ym))
      ]),
      i.value ? (t(), n("p", Xm, f(i.value), 1)) : x("", !0),
      e.field.from ? (t(), n("p", ep, "From " + f(e.field.from) + " (" + f(u.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: m[0] || (m[0] = (g) => r("update:modelValue", g.target.value))
      }, null, 40, Qm))
    ]));
  }
}), ap = { class: "mr-2 inline-block w-3 opacity-60" }, np = {
  key: 0,
  class: "text-muted-foreground p-3"
}, lp = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, L(i.value, (c, v) => (t(), n("div", {
        key: v,
        class: A(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": c.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": c.kind === "add",
          "text-muted-foreground": c.kind === "same"
        }])
      }, [
        o("span", ap, f(c.kind === "add" ? "+" : c.kind === "del" ? "-" : " "), 1),
        N(" " + f(c.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", np, "No differences.")) : x("", !0)
    ], 4));
  }
}), op = { class: "flex flex-col gap-3" }, sp = { class: "flex items-center justify-between gap-2" }, rp = { class: "text-sm font-medium" }, ip = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, dp = { class: "grid grid-cols-7 gap-1" }, up = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, cp = ["title"], wC = /* @__PURE__ */ O({
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
    return (m, g) => (t(), n("div", op, [
      o("div", sp, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: c
        }, " Prev "),
        o("p", rp, f(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: v
        }, " Next ")
      ]),
      o("div", ip, [
        (t(), n(z, null, L(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, f(C), 1)), 64))
      ]),
      o("div", dp, [
        (t(!0), n(z, null, L(u.value, (C) => (t(), n("div", {
          key: C.key,
          class: A(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), n("p", up, f(C.day), 1)) : x("", !0),
          (t(!0), n(z, null, L(C.events.slice(0, 3), (k, $) => (t(), n("p", {
            key: `${C.key}-${$}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: k.label
          }, f(k.label), 9, cp))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), fp = { class: "flex items-center gap-3" }, mp = ["min", "max", "step", "value", "disabled", "aria-label"], pp = { class: "flex shrink-0 items-center gap-1" }, vp = ["min", "max", "step", "value", "disabled"], gp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, hp = /* @__PURE__ */ O({
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
    return (m, g) => (t(), n("div", fp, [
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
      }, null, 40, mp),
      o("div", pp, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: c.value ? "" : u.value,
          disabled: e.disabled,
          onInput: g[1] || (g[1] = (C) => v(C.target.value))
        }, null, 40, vp),
        e.field.unit ? (t(), n("span", gp, f(e.field.unit), 1)) : x("", !0)
      ])
    ]));
  }
}), ct = /* @__PURE__ */ new Map();
function At(e, l) {
  ct.set(e, l);
}
function bp(e) {
  return ct.get(e);
}
function CC(e) {
  return ct.has(e);
}
function yp() {
  return [...ct.keys()].sort();
}
function SC() {
  ct.clear();
}
const xp = ["name", "value", "checked", "disabled", "onChange"], kp = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, $p = { class: "whitespace-nowrap" }, wp = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Cp = ["name", "value", "checked", "disabled", "onChange"], Sp = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Mp = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Bp = { class: "text-center text-xs font-medium" }, _p = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Ap = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Pp = /* @__PURE__ */ O({
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
      () => a.field.preview ? bp(a.field.preview) : void 0
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
      (t(!0), n(z, null, L(e.options, (g) => (t(), n("label", {
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
        }, null, 40, xp),
        m[0] || (m[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", kp, [
          (t(), T(_e(s.value), {
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"]))
        ])) : x("", !0),
        o("span", $p, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", wp, " Nothing to choose from yet. ")) : x("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: A(["grid gap-3", u.value])
    }, [
      (t(!0), n(z, null, L(e.options, (g) => (t(), n("label", {
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
        }, null, 40, Cp),
        m[1] || (m[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Sp, [
          s.value ? (t(), T(_e(s.value), {
            key: 0,
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Mp, " no preview ")) : x("", !0)
        ]),
        o("span", Bp, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", _p, " Nothing to choose from yet. ")) : x("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Ap, [
        m[2] || (m[2] = N(" No preview registered for ", -1)),
        o("code", null, f(e.field.preview), 1),
        N(". Registered: " + f(b(yp)().join(", ") || "none") + ". ", 1)
      ])) : x("", !0)
    ], 2));
  }
}), zp = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Op = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", zp, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), jp = { class: "flex flex-col items-center gap-1 text-center" }, Lp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Ka = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", jp, [
      o("div", {
        class: A(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: a.value, color: a.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Lp, f(e.caption), 1)) : x("", !0)
    ]));
  }
}), Vp = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Tp = { class: "flex items-center gap-3" }, Dp = ["src"], Ep = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Ip = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Fp = {
  key: 0,
  class: "text-right text-sm"
}, Np = { class: "text-neutral-500" }, Rp = { class: "tabular-nums" }, Up = { key: 1 }, Hp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Kp = { class: "mt-2 font-medium" }, qp = { key: 2 }, Gp = { class: "w-full text-sm" }, Wp = { class: "w-full py-3 pr-2" }, Zp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Jp = { key: 0 }, Yp = ["colspan"], Xp = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Qp = { class: "w-64 text-sm" }, ev = { class: "tabular-nums" }, tv = {
  key: 3,
  class: "py-2"
}, av = { key: 4 }, nv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, lv = { class: "mt-2 flex flex-col gap-1 text-sm" }, ov = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, sv = { key: 0 }, rv = {
  key: 1,
  class: "mt-1"
}, iv = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, dv = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("article", Vp, [
      o("div", Tp, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Dp)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: a() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, L(e.document.blocks, (m, g) => (t(), n(z, { key: g }, [
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
            m.subtitle ? (t(), n("p", Ep, f(m.subtitle), 1)) : x("", !0),
            m.reference ? (t(), n("p", Ip, f(m.reference), 1)) : x("", !0)
          ]),
          r(m).length ? (t(), n("dl", Fp, [
            (t(!0), n(z, null, L(r(m), (C, k) => (t(), n("div", {
              key: k,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Np, f(C.label), 1),
              o("dd", Rp, f(C.value), 1)
            ]))), 128))
          ])) : x("", !0)
        ], 4)) : m.type === "party" ? (t(), n("section", Up, [
          o("h2", Hp, f(m.heading), 1),
          o("p", Kp, f(m.name), 1),
          (t(!0), n(z, null, L(d(m.lines), (C, k) => (t(), n("p", {
            key: k,
            class: "text-sm text-neutral-600"
          }, f(C), 1))), 128))
        ])) : m.type === "lines" ? (t(), n("section", qp, [
          o("table", Gp, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: a() })
              }, [
                (t(!0), n(z, null, L(d(m.columns), (C, k) => (t(), n("th", {
                  key: k,
                  class: A(["pb-2 font-medium", k > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, L(s(m), (C, k) => (t(), n("tr", {
                key: k,
                class: "border-b border-neutral-200"
              }, [
                o("td", Wp, [
                  o("p", null, f(C.description), 1),
                  C.detail ? (t(), n("p", Zp, f(C.detail), 1)) : x("", !0)
                ]),
                (t(!0), n(z, null, L(C.cells, ($, M) => (t(), n("td", {
                  key: M,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f($), 1))), 128))
              ]))), 128)),
              s(m).length === 0 ? (t(), n("tr", Jp, [
                o("td", {
                  colspan: d(m.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(m.empty), 9, Yp)
              ])) : x("", !0)
            ])
          ]),
          i(m).length ? (t(), n("div", Xp, [
            o("dl", Qp, [
              (t(!0), n(z, null, L(i(m), (C, k) => (t(), n("div", {
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
                o("dd", ev, f(C.value), 1)
              ], 6))), 128))
            ])
          ])) : x("", !0)
        ])) : m.type === "code" ? (t(), n("section", tv, [
          D(Ka, {
            code: u(m.code),
            caption: u(m.caption),
            style: se(u(m.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : m.type === "steps" ? (t(), n("section", av, [
          o("h2", nv, f(m.heading), 1),
          o("ol", lv, [
            (t(!0), n(z, null, L(d(m.items), (C, k) => (t(), n("li", {
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
        }, f(m.text), 7)) : m.type === "footer" ? (t(), n("footer", ov, [
          m.text ? (t(), n("p", sv, f(m.text), 1)) : x("", !0),
          d(m.contacts).length ? (t(), n("p", rv, f(d(m.contacts).join(" · ")), 1)) : x("", !0)
        ])) : (t(), n("p", iv, " This document contains a “" + f(m.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), uv = ["aria-label", "title"], cv = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fv = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, MC = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Ea(), r = y(() => l.value.theme === "dark");
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
      (t(), n("svg", cv, [
        r.value ? (t(), n(z, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", fv))
      ]))
    ], 8, uv));
  }
}), mv = ["width", "height"], pv = { key: 0 }, vv = ["x1", "x2", "y1", "y2"], gv = ["x", "y"], hv = ["x1", "x2", "y1", "y2"], bv = ["x", "y"], yv = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], xv = ["x", "y", "width", "height", "fill", "fill-opacity"], kv = ["x", "y"], $v = ["x", "y"], wv = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Cv = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Sv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Mv = { class: "text-xs font-semibold tabular-nums" }, Bv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, _v = { class: "text-muted-foreground" }, pa = 5.6, BC = /* @__PURE__ */ O({
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
      const _ = $.value * pa + 16;
      return Math.round(Math.min(Math.max(60, _), d.value * 0.4));
    }), S = y(() => Math.max(4, Math.floor((M.value - 16) / pa)));
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
    const I = y(() => {
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
    }), E = y(
      () => (k.value ? h.value.h : h.value.w) / Math.max(1, C.value)
    ), te = y(() => E.value * 0.68), H = y(
      () => l.stacked || m.value.length <= 1 ? te.value : te.value / m.value.length
    ), K = y(() => {
      const _ = [], F = new Array(C.value).fill(0);
      return m.value.forEach((V, J) => {
        V.points.forEach((ge, ye) => {
          const X = Math.max(0, ge.value) / I.value * (k.value ? h.value.w : h.value.h), ne = (k.value ? p.value.top : p.value.left) + ye * E.value + (E.value - te.value) / 2, Ce = l.stacked ? 0 : J * H.value;
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
        value: I.value * (k.value ? _ : 1 - _),
        x: p.value.left + h.value.w * _,
        y: p.value.top + h.value.h * _
      }))
    ), oe = y(() => Math.max(1, Math.ceil(C.value / (k.value ? 14 : 10))));
    function ae(_) {
      return _ === C.value - 1 || _ % oe.value === 0;
    }
    function Z(_) {
      return (k.value ? p.value.top : p.value.left) + _ * E.value + E.value / 2;
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
          e.showAxis ? (t(), n("g", pv, [
            k.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, L(G.value, (V) => (t(), n("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: p.value.top,
                y2: p.value.top + h.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, vv))), 128)),
              (t(!0), n(z, null, L(G.value, (V) => (t(), n("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(V.value)), 9, gv))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, L(G.value, (V) => (t(), n("line", {
                key: `g-${V.y}`,
                x1: p.value.left,
                x2: d.value - p.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, hv))), 128)),
              (t(!0), n(z, null, L(G.value, (V) => (t(), n("text", {
                key: `gt-${V.y}`,
                x: p.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(V.value)), 9, bv))), 128))
            ], 64))
          ])) : x("", !0),
          (t(!0), n(z, null, L(g.value, (V, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: k.value ? p.value.left : p.value.left + J * E.value,
            y: k.value ? p.value.top + J * E.value : p.value.top,
            width: k.value ? h.value.w : E.value,
            height: k.value ? E.value : h.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === J ? 0.4 : 0,
            onMouseenter: (ge) => u.value = J
          }, null, 40, yv))), 128)),
          (t(!0), n(z, null, L(K.value, (V, J) => (t(), n("rect", {
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
          }, null, 8, xv))), 128)),
          k.value ? (t(!0), n(z, { key: 1 }, L(g.value, (V, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: p.value.left - 8,
            y: Z(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(f(B(V)) + " ", 1),
            o("title", null, f(V), 1)
          ], 8, kv)), [
            [He, ae(J)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, L(g.value, (V, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: Z(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(V), 9, $v)), [
            [He, ae(J)]
          ])), 128))
        ], 40, mv)),
        q.value ? (t(), n("div", wv, [
          o("p", Cv, f(q.value.label), 1),
          (t(!0), n(z, null, L(q.value.rows, (V, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Sv, f(V.name || "Value"), 1),
            o("span", Mv, f(w(V.value)), 1)
          ]))), 128))
        ])) : x("", !0),
        e.showLegend && m.value.length > 1 ? (t(), n("div", Bv, [
          (t(!0), n(z, null, L(m.value, (V, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", _v, f(V.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), Av = ["width", "height"], Pv = ["id"], zv = ["stop-color"], Ov = ["stop-color"], jv = { key: 0 }, Lv = ["x1", "x2", "y1", "y2"], Vv = ["x", "y"], Tv = ["x", "y"], Dv = ["x1", "x2", "y1", "y2"], Ev = ["d", "fill"], Iv = ["d", "stroke", "stroke-dasharray"], Fv = ["cx", "cy", "fill"], Nv = { key: 1 }, Rv = ["x1", "x2", "y1", "y2"], Uv = ["cx", "cy", "fill"], Hv = ["x", "y"], Kv = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, qv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Gv = { class: "text-xs font-semibold tabular-nums" }, Wv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Zv = { class: "text-muted-foreground" }, Jv = /* @__PURE__ */ O({
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
            (t(!0), n(z, null, L(P.value, (V, J) => (t(), n("linearGradient", {
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
              }, null, 8, zv),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, Ov)
            ], 8, Pv))), 128))
          ]),
          e.showAxis ? (t(), n("g", jv, [
            (t(!0), n(z, null, L(H.value, (V) => (t(), n("line", {
              key: V.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Lv))), 128)),
            (t(!0), n(z, null, L(H.value, (V) => (t(), n("text", {
              key: `t-${V.y}`,
              x: C.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(V.value)), 9, Vv))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, L(K.value, (V) => (t(), n("text", {
              key: `rt-${V.y}`,
              x: s.value - C.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(V.value)), 9, Tv))), 128)) : x("", !0)
          ])) : x("", !0),
          (t(!0), n(z, null, L(m.value, (V, J) => pe((t(), n("line", {
            key: `v-${J}`,
            x1: h(J),
            x2: h(J),
            y1: C.value.top,
            y2: C.value.top + p.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Dv)), [
            [He, oe(J)]
          ])), 128)),
          (t(!0), n(z, null, L(P.value, (V, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            V.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${b(c)}-${J})`
            }, null, 8, Ev)) : x("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, Iv),
            V.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, Fv)) : x("", !0)
          ]))), 128)),
          Z.value ? (t(), n("g", Nv, [
            o("line", {
              x1: Z.value.x,
              x2: Z.value.x,
              y1: C.value.top,
              y2: C.value.top + p.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Rv),
            (t(!0), n(z, null, L(Z.value.rows, (V, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: Z.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Uv))), 128))
          ])) : x("", !0),
          (t(!0), n(z, null, L(m.value, (V, J) => pe((t(), n("text", {
            key: `x-${J}`,
            x: h(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(V), 9, Hv)), [
            [He, oe(J)]
          ])), 128))
        ], 40, Av)),
        Z.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(q.value)
        }, [
          o("p", Kv, f(Z.value.label), 1),
          (t(!0), n(z, null, L(Z.value.rows, (V, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", qv, f(V.name || "Value"), 1),
            o("span", Gv, f(k(V.value)), 1)
          ]))), 128))
        ], 4)) : x("", !0),
        e.showLegend && v.value.length > 1 ? (t(), n("div", Wv, [
          (t(!0), n(z, null, L(P.value, (V, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Zv, f(V.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), Yv = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Xv = { class: "text-muted-foreground text-[11px] capitalize" }, Qv = { class: "text-sm font-semibold tabular-nums" }, eg = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, ft = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Yv, [
      o("p", Xv, f(e.label), 1),
      o("p", Qv, [
        N(f(e.value) + " ", 1),
        e.share ? (t(), n("span", eg, " (" + f(e.share) + ") ", 1)) : x("", !0)
      ])
    ]));
  }
}), tg = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, ag = ["width", "height", "viewBox", "aria-label"], ng = ["d", "fill", "fill-opacity", "onMouseenter"], lg = ["x", "y"], og = ["x", "y"], sg = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, rg = ["onMouseenter"], ig = { class: "min-w-0 flex-1 truncate capitalize" }, dg = { class: "tabular-nums font-medium" }, ug = { class: "text-muted-foreground w-9 text-right tabular-nums" }, _C = /* @__PURE__ */ O({
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
        const w = p.value / r.value, P = w * Math.PI * 2, I = B, E = B + P;
        return B = E, {
          ...p,
          share: w,
          colour: c(h),
          opacity: v(h),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: w >= 0.9999 ? k(S) : C(S, I, E, d.value, u.value)
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
    }, " No data ", 4)) : (t(), n("div", tg, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${$(r.value)}`
      }, [
        (t(!0), n(z, null, L(m.value, (p, h) => (t(), n("path", {
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
        }, null, 40, ng))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f($(s.value === null ? r.value : m.value[s.value].value)), 9, lg),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : m.value[s.value].label), 9, og)
        ], 64)) : x("", !0)
      ], 8, ag)),
      o("ul", sg, [
        (t(!0), n(z, null, L(m.value, (p, h) => (t(), n("li", {
          key: h,
          class: A(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === h ? "bg-muted" : ""]),
          onMouseenter: (w) => s.value = h,
          onMouseleave: B[1] || (B[1] = (w) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: p.colour, opacity: p.opacity })
          }, null, 4),
          o("span", ig, f(p.label), 1),
          o("span", dg, f($(p.value)), 1),
          o("span", ug, f(M(p.share)), 1)
        ], 42, rg))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(ft, {
        key: 0,
        label: m.value[s.value].label,
        value: $(m.value[s.value].value),
        share: M(m.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : x("", !0)
    ]));
  }
}), cg = ["width", "height", "viewBox", "aria-label"], fg = { class: "text-border" }, mg = ["x1", "x2", "y1", "y2", "stroke-dasharray"], pg = { class: "fill-muted-foreground text-[10px]" }, vg = ["x", "y"], gg = ["x", "y"], hg = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], bg = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, AC = /* @__PURE__ */ O({
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
    const I = y(() => P(M.value)), E = y(() => P(S.value)), te = (G) => l.formatX?.(G) ?? String(Math.round(G * 100) / 100), H = (G) => l.formatY?.(G) ?? String(Math.round(G * 100) / 100), K = y(() => {
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
        o("g", fg, [
          (t(!0), n(z, null, L(E.value, (ae, Z) => (t(), n("line", {
            key: `gy-${Z}`,
            x1: g.left,
            x2: g.left + C.value,
            y1: p(ae),
            y2: p(ae),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Z === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, mg))), 128))
        ]),
        o("g", pg, [
          (t(!0), n(z, null, L(E.value, (ae, Z) => (t(), n("text", {
            key: `ty-${Z}`,
            x: g.left - 8,
            y: p(ae) + 3,
            "text-anchor": "end"
          }, f(H(ae)), 9, vg))), 128)),
          (t(!0), n(z, null, L(I.value, (ae, Z) => (t(), n("text", {
            key: `tx-${Z}`,
            x: B(ae),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(te(ae)), 9, gg))), 128))
        ]),
        (t(!0), n(z, null, L(u.value, (ae, Z) => (t(), n("g", {
          key: `s-${Z}`
        }, [
          (t(!0), n(z, null, L(ae.points, (q, _) => (t(), n("circle", {
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
          }, null, 40, hg))), 128))
        ]))), 128))
      ], 8, cg)),
      K.value ? (t(), T(ft, {
        key: 0,
        label: K.value.point.label ?? K.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(K.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(K.value.point.y)}`,
        share: m.value && K.value.point.r != null ? String(K.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : x("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", bg, [
        (t(!0), n(z, null, L(u.value, (ae, Z) => (t(), n("span", {
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
}), yg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, xg = ["width", "height", "viewBox"], kg = ["points"], $g = ["x1", "y1", "x2", "y2"], wg = ["points", "fill", "stroke"], Cg = ["cx", "cy", "fill", "onMouseenter"], Sg = ["x", "y", "text-anchor"], Mg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Bg = { class: "truncate" }, PC = /* @__PURE__ */ O({
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
      const p = Math.max(...r.value.flatMap((P) => P.points.map((I) => I.value)), 0);
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
            const I = g(P, w);
            return `${I.x.toFixed(2)},${I.y.toFixed(2)}`;
          }).join(" "),
          dots: h.map((w, P) => g(P, w))
        };
      })
    ), M = y(
      () => s.value.map((p, h) => {
        const w = m(h), P = u.value + Math.cos(w) * (c.value + 14), I = u.value + Math.sin(w) * (c.value + 14), E = Math.cos(w);
        return {
          label: p,
          x: P,
          y: I + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), S = R(null), B = (p) => l.format ? l.format(p) : new Intl.NumberFormat().format(p);
    return (p, h) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", yg, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, L(k.value, (w) => (t(), n("polygon", {
          key: w.f,
          points: w.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, kg))), 128)),
        (t(!0), n(z, null, L(s.value, (w, P) => (t(), n("line", {
          key: `spoke-${P}`,
          x1: u.value,
          y1: u.value,
          x2: g(P, 1).x,
          y2: g(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, $g))), 128)),
        (t(!0), n(z, null, L($.value, (w, P) => (t(), n("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: w.outline,
            fill: w.color,
            "fill-opacity": "0.16",
            stroke: w.color,
            "stroke-width": "2"
          }, null, 8, wg),
          (t(!0), n(z, null, L(w.dots, (I, E) => (t(), n("circle", {
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
            onMouseleave: h[0] || (h[0] = (te) => S.value = null)
          }, null, 40, Cg))), 128))
        ]))), 128)),
        (t(!0), n(z, null, L(M.value, (w, P) => (t(), n("text", {
          key: `l-${P}`,
          x: w.x,
          y: w.y,
          "text-anchor": w.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(w.label), 9, Sg))), 128))
      ], 8, xg)),
      e.showLegend ? (t(), n("ul", Mg, [
        (t(!0), n(z, null, L(r.value, (w, P) => (t(), n("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: w.color })
          }, null, 4),
          o("span", Bg, f(w.name), 1)
        ]))), 128))
      ])) : x("", !0),
      S.value ? (t(), T(ft, {
        key: 1,
        label: `${S.value.series} — ${S.value.axis}`,
        value: B(S.value.value)
      }, null, 8, ["label", "value"])) : x("", !0)
    ]));
  }
}), _g = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Ag = ["width", "height", "viewBox"], Pg = ["cx", "cy", "r"], zg = ["d", "fill", "fill-opacity", "onMouseenter"], Og = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, jg = { class: "min-w-0 flex-1 truncate capitalize" }, Lg = { class: "font-medium tabular-nums" }, zC = /* @__PURE__ */ O({
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
    }, " No data ", 4)) : (t(), n("div", _g, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, L(m.value, ($) => (t(), n("circle", {
          key: $,
          cx: i.value,
          cy: i.value,
          r: $,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Pg))), 128)),
        (t(!0), n(z, null, L(c.value, ($, M) => (t(), n("path", {
          key: M,
          d: $.path,
          fill: $.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === M ? 0.75 : 0.3,
          onMouseenter: (S) => r.value = M,
          onMouseleave: k[0] || (k[0] = (S) => r.value = null)
        }, null, 40, zg))), 128))
      ], 8, Ag)),
      e.showLegend ? (t(), n("ul", Og, [
        (t(!0), n(z, null, L(c.value, ($, M) => (t(), n("li", {
          key: M,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: $.color })
          }, null, 4),
          o("span", jg, f($.label), 1),
          o("span", Lg, f(g($.value)), 1)
        ]))), 128))
      ])) : x("", !0),
      r.value !== null ? (t(), T(ft, {
        key: 1,
        label: c.value[r.value].label,
        value: g(c.value[r.value].value)
      }, null, 8, ["label", "value"])) : x("", !0)
    ]));
  }
}), Vg = ["width", "height"], Tg = ["x1", "x2", "y1", "y2"], Dg = ["x", "y"], Eg = ["x", "y"], Ig = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Fg = ["x", "y", "width", "height", "fill", "fill-opacity"], Ng = ["d", "stroke"], Rg = ["cx", "cy", "fill"], Ug = ["x", "y"], Hg = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Kg = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, qg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Gg = { class: "text-xs font-semibold tabular-nums" }, Wg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Zg = { class: "text-muted-foreground" }, OC = /* @__PURE__ */ O({
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
    const I = y(
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
    ), E = y(
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
          (t(!0), n(z, null, L(te.value, (_) => (t(), n("line", {
            key: `g-${_.y}`,
            x1: k.value.left,
            x2: r.value - k.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Tg))), 128)),
          (t(!0), n(z, null, L(te.value, (_) => (t(), n("text", {
            key: `lt-${_.y}`,
            x: k.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.left)), 9, Dg))), 128)),
          C.value ? (t(!0), n(z, { key: 0 }, L(te.value, (_) => (t(), n("text", {
            key: `rt-${_.y}`,
            x: r.value - k.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.right)), 9, Eg))), 128)) : x("", !0),
          (t(!0), n(z, null, L(m.value, (_, F) => (t(), n("rect", {
            key: `hit-${F}`,
            x: k.value.left + F * p.value,
            y: k.value.top,
            width: p.value,
            height: $.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (V) => s.value = F
          }, null, 40, Ig))), 128)),
          (t(!0), n(z, null, L(I.value, (_, F) => (t(), n("rect", {
            key: `b-${F}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Fg))), 128)),
          (t(!0), n(z, null, L(E.value, (_, F) => (t(), n("g", {
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
            }, null, 8, Ng),
            s.value !== null && _.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Rg)) : x("", !0)
          ]))), 128)),
          (t(!0), n(z, null, L(m.value, (_, F) => pe((t(), n("text", {
            key: `x-${F}`,
            x: P(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(_), 9, Ug)), [
            [He, K(F)]
          ])), 128))
        ], 40, Vg)),
        ae.value ? (t(), n("div", Hg, [
          o("p", Kg, f(ae.value.label), 1),
          (t(!0), n(z, null, L(ae.value.rows, (_, F) => (t(), n("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", qg, f(_.name), 1),
            o("span", Gg, f(G(_.value)), 1)
          ]))), 128))
        ])) : x("", !0),
        e.showLegend ? (t(), n("div", Wg, [
          (t(!0), n(z, null, L([...c.value, ...v.value], (_, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", Zg, f(_.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), Jg = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Yg = { class: "text-muted-foreground" }, Xg = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Qg = ["width", "height"], eh = ["x", "y"], th = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], ah = ["x", "y"], nh = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, lh = { class: "text-[11px] font-medium capitalize" }, oh = { class: "text-muted-foreground text-[11px] capitalize" }, sh = { class: "text-sm font-semibold tabular-nums" }, rh = { class: "text-muted-foreground text-xs font-normal" }, jC = /* @__PURE__ */ O({
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
        (h, w) => h.points.map((P, I) => {
          const E = $(P.value);
          return {
            row: w,
            col: I,
            x: v.value + I * g.value,
            y: 4 + w * C.value,
            w: Math.max(1, g.value - 1),
            h: Math.max(1, C.value - 4),
            colour: k(E),
            label: P.label,
            value: P.value,
            rowName: h.name,
            bucketLabel: l.buckets[E].label
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
        o("div", Jg, [
          (t(!0), n(z, null, L(e.buckets, (P, I) => (t(), n("span", {
            key: I,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: k(I) })
            }, null, 4),
            o("span", Yg, f(P.label), 1)
          ]))), 128))
        ]),
        S.value ? (t(), n("p", Xg, f(c.value) + " columns - too many to label individually ", 1)) : x("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: w[0] || (w[0] = (P) => s.value = null)
        }, [
          (t(!0), n(z, null, L(e.series, (P, I) => (t(), n("text", {
            key: `r-${I}`,
            x: v.value - 10,
            y: 4 + I * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(P.name), 9, eh))), 128)),
          (t(!0), n(z, null, L(M.value, (P, I) => (t(), n("rect", {
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
          }, null, 40, th))), 128)),
          e.showColumnLabels && !S.value ? (t(!0), n(z, { key: 0 }, L(d.value, (P, I) => (t(), n("text", {
            key: `c-${I}`,
            x: v.value + I * g.value + g.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(P), 9, ah))), 128)) : x("", !0)
        ], 40, Qg)),
        B.value ? (t(), n("div", nh, [
          o("p", lh, f(B.value.label), 1),
          o("p", oh, f(B.value.rowName), 1),
          o("p", sh, [
            N(f(p(B.value.value)) + " ", 1),
            o("span", rh, "(" + f(B.value.bucketLabel) + ")", 1)
          ])
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), ih = ["viewBox"], dh = { key: 0 }, uh = ["id"], ch = ["stop-color"], fh = ["stop-color"], mh = ["d", "fill"], ph = ["d", "stroke"], va = 100, lt = 30, wt = /* @__PURE__ */ O({
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
        x: C / (u.length - 1) * va,
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
      viewBox: `0 0 ${va} ${lt}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", dh, [
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
          }, null, 8, ch),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, fh)
        ], 8, uh)
      ])) : x("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${b(a)})`
      }, null, 8, mh)) : x("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, ph)
    ], 12, ih)) : x("", !0);
  }
}), vh = { class: "flex items-center gap-1 text-xs" }, gh = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, hh = {
  key: 0,
  class: "text-muted-foreground truncate"
}, qa = /* @__PURE__ */ O({
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
    return (d, u) => (t(), n("span", vh, [
      o("span", {
        class: A(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", gh, f(s.value), 1),
        N(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", hh, f(e.comparison), 1)) : x("", !0)
    ]));
  }
}), bh = ["data-collapsed"], yh = { class: "flex flex-wrap items-start justify-between gap-2" }, xh = { class: "flex min-w-0 items-start gap-2" }, kh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $h = ["d"], wh = { class: "min-w-0" }, Ch = { class: "text-sm font-medium" }, Sh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Mh = { class: "flex shrink-0 items-center gap-1.5" }, Bh = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, _h = ["aria-pressed", "onClick"], Ah = ["aria-expanded", "aria-label", "title"], Ph = ["aria-label"], zh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Oh = ["d"], jh = /* @__PURE__ */ O({
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
    const l = e, a = It(), r = R(l.defaultCollapsed), s = y(() => !!l.icon && !a.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), n("div", {
      class: A(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", yh, [
        o("div", xh, [
          U(d.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", kh, [
              o("path", {
                d: b(ce)(e.icon)
              }, null, 8, $h)
            ])) : x("", !0)
          ]),
          o("div", wh, [
            o("p", Ch, f(e.label), 1),
            e.description ? (t(), n("p", Sh, f(e.description), 1)) : x("", !0),
            U(d.$slots, "trend")
          ])
        ]),
        o("div", Mh, [
          U(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Bh, [
            (t(!0), n(z, null, L(e.periods, (c) => (t(), n("button", {
              key: c.value,
              type: "button",
              class: A([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === c.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === c.value,
              onClick: (v) => d.$emit("update:period", c.value)
            }, f(c.label), 11, _h))), 128))
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
          ], 8, Ah)) : x("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (c) => d.$emit("hide"))
          }, [
            (t(), n("svg", zh, [
              o("path", {
                d: b(ce)("eye-off")
              }, null, 8, Oh)
            ]))
          ], 8, Ph)) : x("", !0)
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
    ], 10, bh));
  }
}), Lh = ["aria-pressed", "aria-label", "title"], Vh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Th = ["d"], Dh = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Eh = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Ih = ["href"], Fh = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nh = ["d"], Rh = ["aria-label", "onClick"], Uh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Hh = ["d"], Kh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qh = ["d"], Gh = {
  key: 0,
  class: "flex flex-col gap-1"
}, Wh = ["onClick"], Zh = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Jh = ["d"], Yh = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Xh = /* @__PURE__ */ O({
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
      D(jh, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: m[3] || (m[3] = (g) => r("hide"))
      }, {
        actions: j(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: m[0] || (m[0] = (g) => s.value = !s.value)
          }, [
            (t(), n("svg", Vh, [
              o("path", {
                d: b(ce)(s.value ? "check" : "pencil")
              }, null, 8, Th)
            ]))
          ], 8, Lh)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), n("div", Dh, [
            m[7] || (m[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            D(ue, {
              size: "sm",
              variant: "outline",
              onClick: m[1] || (m[1] = (g) => i.value = !0)
            }, {
              default: j(() => [...m[6] || (m[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", Eh, [
            (t(!0), n(z, null, L(e.items, (g) => (t(), n("div", {
              key: g.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: g.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Fh, [
                  o("path", {
                    d: b(ce)(g.icon)
                  }, null, 8, Nh)
                ])),
                N(" " + f(g.label), 1)
              ], 8, Ih),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${g.label}`,
                onClick: (C) => u(g.id)
              }, [
                (t(), n("svg", Uh, [
                  o("path", {
                    d: b(ce)("x")
                  }, null, 8, Hh)
                ]))
              ], 8, Rh)) : x("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: m[2] || (m[2] = (g) => i.value = !0)
            }, [
              (t(), n("svg", Kh, [
                o("path", {
                  d: b(ce)("plus")
                }, null, 8, qh)
              ])),
              m[8] || (m[8] = N(" Add ", -1))
            ])) : x("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      D(it, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: m[5] || (m[5] = (g) => i.value = !1)
      }, {
        footer: j(() => [
          D(ue, {
            variant: "outline",
            onClick: m[4] || (m[4] = (g) => i.value = !1)
          }, {
            default: j(() => [...m[9] || (m[9] = [
              N("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          d.value.length ? (t(), n("ul", Gh, [
            (t(!0), n(z, null, L(d.value, (g) => (t(), n("li", {
              key: g.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => c(g)
              }, [
                (t(), n("svg", Zh, [
                  o("path", {
                    d: b(ce)(g.icon)
                  }, null, 8, Jh)
                ])),
                N(" " + f(g.label), 1)
              ], 8, Wh)
            ]))), 128))
          ])) : (t(), n("p", Yh, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Qh = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, eb = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, tb = { class: "relative w-full max-w-xl" }, ab = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nb = ["d"], lb = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, ob = ["data-slot"], sb = { class: "px-5 py-4" }, rb = { class: "mb-3 text-sm font-semibold" }, ib = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, db = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ub = ["d"], cb = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, LC = /* @__PURE__ */ O({
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
      return typeof u == "string" ? u : ba(u);
    }), s = ot({
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
        o("h1", Qh, f(e.title), 1),
        e.description ? (t(), n("p", eb, f(e.description), 1)) : x("", !0)
      ]),
      o("div", tb, [
        (t(), n("svg", ab, [
          o("path", {
            d: b(ce)("search")
          }, null, 8, nb)
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
      d.value.length ? (t(), n("div", lb, [
        (t(!0), n(z, null, L(d.value, (v) => (t(), n("section", {
          key: v.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${v.key}`
        }, [
          o("div", sb, [
            o("h2", rb, f(v.title), 1),
            o("div", ib, [
              (t(!0), n(z, null, L(v.links, (m) => (t(), T(_e(i(m) ? "a" : r.value), {
                key: m.href + m.label,
                href: m.href,
                class: A(b(s)),
                target: i(m) ? "_blank" : void 0,
                rel: i(m) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), n("svg", db, [
                    o("path", {
                      d: b(ce)(m.icon)
                    }, null, 8, ub)
                  ])),
                  N(" " + f(m.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, ob))), 128))
      ])) : (t(), n("p", cb, ' Nothing matches "' + f(a.value) + '". ', 1))
    ], 2));
  }
}), fb = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, mb = { class: "flex flex-1 flex-col gap-1 p-4" }, pb = { class: "text-muted-foreground relative text-xs font-medium" }, vb = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, gb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, hb = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, bb = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, VC = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", fb, [
      o("div", mb, [
        o("p", pb, f(e.label), 1),
        e.loading ? (t(), T(ze, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", vb, " Could not load ")) : (t(), n("span", gb, f(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(qa, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", hb, f(e.description), 1)) : x("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", bb, [
        D(wt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : x("", !0)
    ]));
  }
}), yb = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, xb = { class: "flex flex-col gap-1 p-4" }, kb = { class: "flex items-start justify-between gap-2" }, $b = { class: "text-sm font-medium" }, wb = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Cb = { class: "mt-1 flex flex-wrap items-center gap-2" }, Sb = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Mb = {
  key: 0,
  class: "-mb-px"
}, yt = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", yb, [
      o("div", xb, [
        o("div", kb, [
          o("p", $b, f(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", wb, f(e.caption), 1)) : x("", !0),
        o("div", Cb, [
          e.loading ? (t(), T(ze, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Sb, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: A(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : x("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Mb, [
        D(wt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : x("", !0)
    ]));
  }
}), Bb = { class: "relative flex flex-col gap-2" }, _b = ["aria-label"], Ab = ["onMouseenter"], Pb = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, zb = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Ob = { class: "truncate" }, jb = { class: "text-sm font-semibold tabular-nums" }, TC = /* @__PURE__ */ O({
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
    return (v, m) => (t(), n("div", Bb, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((g) => `${g.label} ${d(g.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, L(i.value, (g, C) => (t(), n("span", {
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
        }, null, 46, Ab))), 128))
      ], 12, _b),
      e.showLegend ? (t(), n("div", Pb, [
        (t(!0), n(z, null, L(i.value, (g, C) => (t(), n("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", zb, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: g.color })
            }, null, 4),
            o("span", Ob, f(g.label), 1)
          ]),
          o("span", jb, f(d(g.value)), 1)
        ]))), 128))
      ])) : x("", !0),
      u.value !== null ? (t(), T(ft, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: c(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : x("", !0)
    ]));
  }
}), Lb = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Vb = ["data-heading"], Tb = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Db = { class: "text-muted-foreground truncate" }, Eb = ["aria-label"], DC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", Lb, [
      (t(!0), n(z, null, L(s.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: A(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), n("div", Tb, [
          o("span", Db, f(u.label), 1),
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
          (t(!0), n(z, null, L(u.segments, (c, v) => (t(), n("span", {
            key: v,
            class: A(["h-full transition-all", r[c.tone ?? "neutral"]]),
            style: se({ width: c.width })
          }, null, 6))), 128))
        ], 8, Eb)) : x("", !0)
      ], 8, Vb))), 128))
    ]));
  }
}), Ib = {
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
}, Fb = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Nb(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Rb(e, l) {
  return l || (e ? Ib[Nb(e)] ?? "neutral" : "neutral");
}
function Ub(e, l) {
  return Fb[Rb(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = y(() => Ub(l.status, l.tone));
    return (r, s) => (t(), T(qe, {
      variant: a.value,
      class: A(l.class)
    }, {
      default: j(() => [
        U(r.$slots, "default", {}, () => [
          N(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Hb = ["data-layout"], Kb = ["src", "alt"], qb = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Gb = ["src"], Wb = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Zb = ["onMouseenter"], Jb = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Yb = { class: "min-w-0" }, Xb = { class: "truncate text-sm font-medium" }, Qb = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, e1 = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, t1 = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, a1 = { class: "min-w-0" }, n1 = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, l1 = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, o1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, s1 = ["d"], r1 = ["aria-label"], i1 = /* @__PURE__ */ O({
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
      onKeydown: S[1] || (S[1] = ln(he((B) => s("select", e.item.key), ["prevent"]), ["enter"])),
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
        }, null, 8, Kb)) : (t(), n("span", qb, f(v.value), 1)),
        e.layout === "grid" && g.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: g.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Gb)) : x("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", Wb, [
          (t(!0), n(z, null, L(u.value, (B, p) => (t(), n("span", {
            key: p,
            class: A(["size-1.5 rounded-full", p === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (h) => i.value = p
          }, null, 42, Zb))), 128))
        ])) : x("", !0)
      ], 2),
      o("div", {
        class: A(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Jb, [
          o("div", Yb, [
            o("p", Xb, f(e.item.label), 1),
            e.item.caption ? (t(), n("p", Qb, f(e.item.caption), 1)) : x("", !0),
            e.item.facts?.length ? (t(), n("p", e1, f(e.item.facts.join(" · ")), 1)) : x("", !0)
          ]),
          e.item.status ? (t(), T(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : x("", !0)
        ]),
        o("div", t1, [
          o("div", a1, [
            e.item.price ? (t(), n("p", n1, f(e.item.price), 1)) : x("", !0),
            k.value ? (t(), n("p", l1, f(k.value), 1)) : x("", !0)
          ]),
          C.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: $
          }, [
            (t(), n("svg", o1, [
              o("path", {
                d: b(ce)("cart")
              }, null, 8, s1)
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
        ], 8, r1)) : x("", !0)
      ], 2)
    ], 42, Hb));
  }
});
function d1(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function u1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function c1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const f1 = ["data-featured", "data-recommended"], m1 = { class: "flex flex-col gap-1" }, p1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, v1 = { key: 0 }, g1 = { key: 1 }, h1 = { key: 2 }, b1 = { key: 3 }, y1 = { class: "text-sm font-semibold" }, x1 = { class: "flex items-baseline gap-1" }, k1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, $1 = { class: "text-muted-foreground text-sm font-normal" }, w1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, C1 = { class: "text-muted-foreground mt-1 text-xs" }, S1 = { class: "flex flex-1 flex-col gap-2 text-sm" }, M1 = { class: "flex min-w-0 items-start gap-2" }, B1 = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, _1 = ["d"], A1 = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, P1 = ["d"], z1 = { class: "capitalize" }, O1 = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, j1 = { class: "text-foreground font-medium" }, L1 = { class: "mt-auto flex gap-2 pt-2" }, V1 = /* @__PURE__ */ O({
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
        granted: c1(m.value),
        display: u1(m.value)
      }));
    }), u = y(() => a.plan.extraPerks ?? []);
    return (c, v) => (t(), n("article", {
      class: A(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", m1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", p1, [
          e.plan.recommended ? (t(), n("span", v1, "Recommended")) : e.plan.featured ? (t(), n("span", g1, "Featured")) : x("", !0),
          e.plan.trial ? (t(), n("span", h1, "Trial")) : x("", !0),
          e.plan.active === !1 ? (t(), n("span", b1, "Inactive")) : x("", !0)
        ])) : x("", !0),
        o("h3", y1, f(e.plan.name), 1),
        o("p", x1, [
          o("span", k1, f(s.value), 1),
          o("span", $1, f(b(d1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", w1, f(e.plan.shortDescription), 1)) : x("", !0),
        o("p", C1, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", S1, [
        (t(!0), n(z, null, L(d.value, (m) => (t(), n("li", {
          key: m.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", M1, [
            o("span", {
              class: A(["mt-0.5 shrink-0", m.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              m.granted ? (t(), n("svg", B1, [
                o("path", {
                  d: b(ce)("check")
                }, null, 8, _1)
              ])) : (t(), n("svg", A1, [
                o("path", {
                  d: b(ce)("x")
                }, null, 8, P1)
              ]))
            ], 2),
            o("span", z1, f(m.label), 1)
          ]),
          m.display ? (t(), n("span", O1, f(m.display), 1)) : x("", !0)
        ]))), 128)),
        (t(!0), n(z, null, L(u.value, (m, g) => (t(), n("li", {
          key: `extra-${g}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, f(m.key), 1),
          o("span", j1, f(m.value), 1)
        ]))), 128))
      ]),
      o("footer", L1, [
        D(ue, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: v[0] || (v[0] = (m) => r("edit", e.plan.id))
        }, {
          default: j(() => [...v[2] || (v[2] = [
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
          default: j(() => [...v[3] || (v[3] = [
            N(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, f1));
  }
}), T1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, D1 = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, E1 = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, I1 = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, F1 = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, EC = /* @__PURE__ */ O({
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
      o("header", T1, [
        o("div", null, [
          e.title ? (t(), n("h1", D1, f(e.title), 1)) : x("", !0),
          e.description ? (t(), n("p", E1, f(e.description), 1)) : x("", !0)
        ]),
        D(ue, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => a("create"))
        }, {
          default: j(() => [...s[3] || (s[3] = [
            N("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", I1, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", F1, [
        (t(!0), n(z, null, L(e.plans, (i) => (t(), T(V1, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => a("edit", d)),
          onDelete: s[2] || (s[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), N1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, R1 = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, U1 = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, H1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, K1 = { class: "space-y-1.5" }, q1 = { class: "space-y-1.5" }, G1 = { class: "space-y-1.5" }, W1 = { class: "space-y-1.5" }, Z1 = { class: "space-y-1.5" }, J1 = { class: "flex items-center gap-3 text-sm" }, Y1 = { class: "flex items-center gap-3 text-sm" }, X1 = { class: "flex items-center gap-3 text-sm" }, Q1 = {
  key: 0,
  class: "space-y-1.5"
}, ey = { class: "flex items-center gap-3 text-sm" }, ty = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, ay = { class: "space-y-1.5" }, ny = ["value"], ly = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, oy = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, sy = ["id", "value", "onInput"], ry = { class: "space-y-2" }, iy = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, dy = ["d"], IC = /* @__PURE__ */ O({
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
      const h = Object.fromEntries(r.modules.map((I) => [I.key, I])), w = new Set(p);
      for (const I of r.modules)
        if (!w.has(I.key))
          for (const E of I.children ?? [])
            w.delete(E);
      let P = !0;
      for (; P; ) {
        P = !1;
        for (const I of [...w])
          for (const E of h[I]?.requires ?? [])
            w.has(E) || (w.add(E), P = !0);
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
      o("header", N1, [
        o("div", null, [
          o("h1", R1, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          h[13] || (h[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        D(ue, {
          type: "button",
          variant: "outline",
          onClick: h[0] || (h[0] = (w) => s("cancel"))
        }, {
          default: j(() => [...h[14] || (h[14] = [
            N("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", U1, [
        o("section", H1, [
          h[26] || (h[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", K1, [
            D(Pe, { for: "plan-name" }, {
              default: j(() => [...h[15] || (h[15] = [
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
          o("div", q1, [
            D(Pe, { for: "plan-short" }, {
              default: j(() => [...h[16] || (h[16] = [
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
          o("div", G1, [
            D(Pe, { for: "plan-description" }, {
              default: j(() => [...h[17] || (h[17] = [
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
          o("div", W1, [
            D(Pe, { for: "plan-days" }, {
              default: j(() => [...h[18] || (h[18] = [
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
          o("div", Z1, [
            D(Pe, { for: "plan-price" }, {
              default: j(() => [...h[20] || (h[20] = [
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
          o("label", J1, [
            D(b(Ze), {
              checked: !!i.featured,
              "onUpdate:checked": h[6] || (h[6] = (w) => i.featured = w)
            }, null, 8, ["checked"]),
            h[21] || (h[21] = N(" Featured ", -1))
          ]),
          o("label", Y1, [
            D(b(Ze), {
              checked: !!i.recommended,
              "onUpdate:checked": h[7] || (h[7] = (w) => i.recommended = w)
            }, null, 8, ["checked"]),
            h[22] || (h[22] = N(" Recommended ", -1))
          ]),
          o("label", X1, [
            D(b(Ze), {
              checked: !!i.trial,
              "onUpdate:checked": h[8] || (h[8] = (w) => i.trial = w)
            }, null, 8, ["checked"]),
            h[23] || (h[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", Q1, [
            D(Pe, { for: "plan-trial-days" }, {
              default: j(() => [...h[24] || (h[24] = [
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
          o("label", ey, [
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
            default: j(() => [
              N(f(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", ty, [
          h[33] || (h[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", ay, [
            D(Pe, null, {
              default: j(() => [...h[27] || (h[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Gt, {
              modelValue: m.value,
              "onUpdate:modelValue": h[11] || (h[11] = (w) => m.value = w),
              options: g.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            D(Pe, { for: "plan-modules-overview" }, {
              default: j(() => [...h[28] || (h[28] = [
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
            }, null, 40, ny)
          ]),
          (t(!0), n(z, null, L(e.limits, (w) => (t(), n("div", {
            key: w.key,
            class: "space-y-1.5"
          }, [
            w.kind === "toggle" ? (t(), n("label", ly, [
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
                default: j(() => [
                  N(f(w.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              w.hint ? (t(), n("p", oy, f(w.hint), 1)) : x("", !0),
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
              default: j(() => [...h[30] || (h[30] = [
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
            }, null, 40, sy)
          ]))), 128)),
          o("div", ry, [
            h[32] || (h[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, L(i.extraPerks ?? [], (w, P) => (t(), n("div", {
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
                onClick: (I) => $(P)
              }, {
                default: j(() => [
                  (t(), n("svg", iy, [
                    o("path", {
                      d: b(ce)("x")
                    }, null, 8, dy)
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
              default: j(() => [...h[31] || (h[31] = [
                N(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), uy = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, cy = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, fy = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, my = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, py = ["d"], vy = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, gy = ["aria-pressed"], hy = ["aria-pressed"], by = {
  key: 0,
  class: "flex flex-col gap-2"
}, yy = ["aria-label"], xy = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, ky = ["aria-pressed", "onClick"], $y = ["aria-label"], wy = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Cy = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Sy = ["data-slot"], My = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, By = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, _y = { class: "flex items-center gap-2" }, Ay = ["disabled"], Py = ["disabled"], ea = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = dt(e, "modelValue"), d = rt({}), u = rt({});
    me(s, () => g());
    function c(E) {
      const te = E.trim();
      if (te === "")
        return null;
      const H = Number(te);
      return Number.isFinite(H) ? H : null;
    }
    function v() {
      const E = {};
      for (const [te, H] of Object.entries(u))
        E[te] = { min: c(H.min), max: c(H.max) };
      return E;
    }
    function m() {
      return { query: s.value, selected: { ...d }, ranges: v() };
    }
    function g() {
      r("filter", m());
    }
    function C(E, te) {
      d[E] = d[E] === te ? null : te, g();
    }
    function k(E) {
      return u[E] ?? { min: "", max: "" };
    }
    function $(E, te, H) {
      const K = u[E] ?? { min: "", max: "" };
      u[E] = { ...K, [te]: H }, g();
    }
    function M(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const S = y(() => a.facets.filter((E) => (E.kind ?? "chips") === "chips")), B = y(() => a.facets.filter((E) => E.kind === "range")), p = y(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), h = R(1);
    me(
      () => a.items.map((E) => E.key).join(","),
      () => {
        h.value = 1;
      }
    );
    const w = y(() => {
      const E = a.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / E));
    }), P = y(() => {
      const E = a.pageSize;
      if (!E || E < 1)
        return a.items;
      const te = (h.value - 1) * E;
      return a.items.slice(te, te + E);
    });
    function I(E) {
      h.value = Math.min(w.value, Math.max(1, E));
    }
    return (E, te) => (t(), n("div", {
      class: A(["flex flex-col gap-4", b(Fa)])
    }, [
      p.value ? (t(), n("div", uy, [
        o("div", cy, [
          e.searchable ? (t(), n("div", fy, [
            (t(), n("svg", my, [
              o("path", {
                d: b(ce)("search")
              }, null, 8, py)
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
          U(E.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", vy, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, gy),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (H) => i.value = "list")
            }, " List ", 10, hy)
          ])) : x("", !0)
        ]),
        S.value.length || B.value.length ? (t(), n("div", by, [
          (t(!0), n(z, null, L(S.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", xy, f(H.label), 1)) : x("", !0),
            (t(!0), n(z, null, L(H.options ?? [], (K) => (t(), n("button", {
              key: K.value,
              type: "button",
              class: A([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === K.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === K.value ? "true" : "false",
              onClick: (G) => C(H.key, K.value)
            }, f(K.label), 11, ky))), 128))
          ], 8, yy))), 128)),
          (t(!0), n(z, null, L(B.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", wy, f(H.label ?? H.key), 1),
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
          ], 8, $y))), 128))
        ])) : x("", !0)
      ])) : x("", !0),
      e.items.length === 0 ? (t(), n("p", Cy, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: A(
          i.value === "list" ? "flex flex-col gap-3" : b(Ic)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, L(P.value, (H) => (t(), T(i1, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: te[3] || (te[3] = (K) => r("select", K)),
          onCart: te[4] || (te[4] = (K) => r("cart", K))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Sy)),
      e.pageSize && w.value > 1 ? (t(), n("div", My, [
        o("p", By, " Page " + f(h.value) + " of " + f(w.value), 1),
        o("div", _y, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value <= 1,
            onClick: te[5] || (te[5] = (H) => I(h.value - 1))
          }, " Previous ", 8, Ay),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value >= w.value,
            onClick: te[6] || (te[6] = (H) => I(h.value + 1))
          }, " Next ", 8, Py)
        ])
      ])) : x("", !0)
    ], 2));
  }
}), zy = ["aria-label"], Oy = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, jy = { class: "min-w-0" }, Ly = { class: "text-base font-semibold" }, Vy = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ty = { class: "flex shrink-0 items-center gap-2" }, Dy = { class: "min-h-0 flex-1 overflow-y-auto" }, Ey = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, ta = /* @__PURE__ */ O({
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
        default: j(() => [
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
        default: j(() => [
          e.open ? (t(), n("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: A(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", Oy, [
              o("div", jy, [
                o("h2", Ly, f(e.title), 1),
                e.description ? (t(), n("p", Vy, f(e.description), 1)) : x("", !0)
              ]),
              o("div", Ty, [
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
            o("div", Dy, [
              U(c.$slots, "default")
            ]),
            c.$slots.footer ? (t(), n("footer", Ey, [
              U(c.$slots, "footer")
            ])) : x("", !0)
          ], 10, zy)) : x("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Ee() {
  return { query: "", selected: {}, ranges: {} };
}
function Iy(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Fy(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function aa(e, l) {
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
    if (!Fy(Iy(e, r), s))
      return !1;
  return !0;
}
function Ny(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === a || i === a;
  }) ?? null;
}
function xt(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const Ry = { class: "flex flex-col gap-6 p-4" }, Uy = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Hy = { class: "text-sm font-semibold" }, Ky = { class: "flex flex-wrap items-center gap-1.5" }, qy = ["aria-pressed", "onClick"], Gy = { class: "text-sm font-semibold" }, Wy = { class: "flex flex-wrap items-center gap-1.5" }, Zy = { key: 0 }, Ga = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = rt({}), d = rt({}), u = y(
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
      const I = Number(P);
      return Number.isFinite(I) ? I : null;
    }
    function C() {
      const w = {};
      for (const [P, I] of Object.entries(d))
        w[P] = { min: g(I.min), max: g(I.max) };
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
    function B(w, P, I) {
      const E = d[w] ?? { min: "", max: "" };
      d[w] = { ...E, [P]: I };
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
        a.hideSearch ? { ...Ee(), query: a.applied.query } : Ee()
      );
    }
    return (w, P) => (t(), T(ta, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (I) => r("close"))
    }, {
      footer: j(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: h
        }, " Reset all "),
        D(ue, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (I) => r("close"))
        }, {
          default: j(() => [...P[5] || (P[5] = [
            N("Cancel", -1)
          ])]),
          _: 1
        }),
        D(ue, {
          size: "sm",
          onClick: p
        }, {
          default: j(() => [
            P[6] || (P[6] = N(" Apply", -1)),
            $.value ? (t(), n("span", Zy, " (" + f($.value) + ")", 1)) : x("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        o("div", Ry, [
          e.hideSearch ? x("", !0) : (t(), n("label", Uy, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            D($e, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (I) => s.value = I),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, L(u.value, (I) => (t(), n("section", {
            key: I.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Hy, f(I.label ?? I.key), 1),
            o("div", Ky, [
              (t(!0), n(z, null, L(I.options ?? [], (E) => (t(), n("button", {
                key: E.value,
                type: "button",
                class: A([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[I.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[I.key] === E.value ? "true" : "false",
                onClick: (te) => M(I.key, E.value)
              }, f(E.label), 11, qy))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, L(c.value, (I) => (t(), n("section", {
            key: I.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Gy, f(I.label ?? I.key), 1),
            o("div", Wy, [
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
}), Jy = ["aria-disabled"], Yy = ["disabled"], Xy = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Qy = ["d"], ex = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, tx = ["disabled"], ax = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, nx = ["d"], lx = /* @__PURE__ */ O({
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
    const a = dt(e, "modelValue"), r = l, s = y(() => a.value <= e.min), i = y(() => e.max !== null && a.value >= e.max);
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
        (t(), n("svg", Xy, [
          o("path", {
            d: b(ce)("minus")
          }, null, 8, Qy)
        ]))
      ], 8, Yy),
      o("span", ex, f(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: c[1] || (c[1] = (v) => d(1))
      }, [
        (t(), n("svg", ax, [
          o("path", {
            d: b(ce)("plus")
          }, null, 8, nx)
        ]))
      ], 8, tx)
    ], 8, Jy));
  }
}), ox = { class: "divide-border flex flex-col divide-y" }, sx = { class: "min-w-0" }, rx = { class: "truncate text-sm font-medium" }, ix = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, dx = { class: "flex shrink-0 items-center gap-2 text-sm" }, ux = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, cx = {
  key: 2,
  class: "font-medium tabular-nums"
}, fx = ["aria-label", "onClick"], mx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, px = ["d"], vx = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", ox, [
      (t(!0), n(z, null, L(e.items, (d) => (t(), n("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", sx, [
          o("p", rx, f(d.label), 1),
          d.detail ? (t(), n("p", ix, f(d.detail), 1)) : x("", !0)
        ]),
        o("div", dx, [
          e.editable ? (t(), T(lx, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", ux, " ×" + f(d.qty), 1)) : x("", !0),
          d.amount ? (t(), n("span", cx, f(d.amount), 1)) : x("", !0),
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
            (t(), n("svg", mx, [
              o("path", {
                d: b(ce)("trash")
              }, null, 8, px)
            ]))
          ], 8, fx)) : x("", !0)
        ])
      ]))), 128))
    ]));
  }
}), gx = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, hx = { class: "border-b px-4 py-3" }, bx = { class: "text-sm font-medium" }, yx = { class: "flex-1 px-4 py-3" }, xx = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, kx = { class: "text-foreground block font-medium" }, $x = { class: "mt-1 block" }, wx = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Cx = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Sx = { class: "tabular-nums" }, Mx = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Bx = { class: "text-muted-foreground" }, _x = {
  key: 0,
  class: "tabular-nums"
}, Ax = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Px = { class: "text-muted-foreground" }, zx = { class: "tabular-nums" }, Ox = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, jx = { class: "tabular-nums" }, Lx = {
  key: 4,
  class: "pt-1"
}, Vx = /* @__PURE__ */ O({
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
    return (r, s) => (t(), n("aside", gx, [
      o("header", hx, [
        o("h2", bx, f(e.title), 1)
      ]),
      o("div", yx, [
        e.items.length === 0 ? (t(), n("p", xx, [
          o("span", kx, f(e.emptyTitle), 1),
          o("span", $x, f(e.emptyDescription), 1)
        ])) : (t(), T(vx, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => a("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", wx, [
        e.subtotal ? (t(), n("div", Cx, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", Sx, f(e.subtotal), 1)
        ])) : x("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Mx, [
          o("span", Bx, f(e.discountLabel), 1),
          e.discount ? (t(), n("span", _x, f(e.discount), 1)) : x("", !0),
          U(r.$slots, "discount")
        ])) : x("", !0),
        e.tax ? (t(), n("div", Ax, [
          o("span", Px, f(e.taxLabel), 1),
          o("span", zx, f(e.tax), 1)
        ])) : x("", !0),
        e.total ? (t(), n("div", Ox, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", jx, f(e.total), 1)
        ])) : x("", !0),
        r.$slots.pay ? (t(), n("div", Lx, [
          U(r.$slots, "pay")
        ])) : x("", !0)
      ])) : x("", !0)
    ]));
  }
}), Tx = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Dx = { class: "flex flex-col gap-4" }, Ex = { class: "flex flex-wrap items-start justify-between gap-3" }, Ix = { class: "flex items-center gap-2" }, Fx = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, FC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Ee()), i = R(!1), d = dt(e, "cart"), u = R(!1), c = y(
      () => a.items.filter((H) => aa(H, s.value))
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
      const K = Ny(a.items, H);
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
    ), I = y(
      () => d.value.length && a.taxRate > 0 ? a.formatMoney(h.value) : null
    ), E = y(
      () => d.value.length ? a.formatMoney(
        B.value - p.value + h.value
      ) : null
    );
    function te() {
      u.value = !0, r("pay", d.value);
    }
    return (H, K) => (t(), n(z, null, [
      o("div", Tx, [
        o("section", Dx, [
          o("div", Ex, [
            D(De, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", Ix, [
              b(xt)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: K[0] || (K[0] = (G) => s.value = {
                  ...b(Ee)(),
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
                b(xt)(s.value) ? (t(), n("span", Fx, " on ")) : x("", !0)
              ])) : x("", !0)
            ])
          ]),
          D(ea, {
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
        D(Vx, {
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
          pay: j(() => [
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
                default: j(() => [
                  N(f(u.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      D(Ga, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: K[3] || (K[3] = (G) => i.value = !1),
        onApply: m,
        onReset: K[4] || (K[4] = (G) => s.value = { ...b(Ee)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Nx = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Rx = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Ux = ["src", "alt"], Hx = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Kx = ["src"], qx = { class: "flex items-start justify-between gap-3" }, Gx = { class: "text-lg font-semibold tabular-nums" }, Wx = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Zx = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Jx = { class: "grid grid-cols-2 gap-3" }, Yx = { class: "flex flex-col gap-2" }, Xx = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, NC = /* @__PURE__ */ O({
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
    return (m, g) => (t(), T(ta, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: g[1] || (g[1] = (C) => r("close"))
    }, st({
      default: j(() => [
        e.item ? (t(), n("div", Nx, [
          o("div", Rx, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Ux)) : x("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", Hx, [
            (t(!0), n(z, null, L(e.item.images, (C, k) => (t(), n("img", {
              key: k,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Kx))), 128))
          ])) : x("", !0),
          o("div", qx, [
            o("div", null, [
              o("p", Gx, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", Wx, f(e.item.stock) + " in stock ", 1)) : x("", !0)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : x("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", Zx, f(e.item.facts.join(" · ")), 1)) : x("", !0),
          o("div", Jx, [
            D(yt, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? c.value : u.value
            }, null, 8, ["label", "value", "series"]),
            D(yt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", Yx, [
            o("p", Xx, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(wt, {
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
        fn: j(() => [
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
}), Qx = { class: "flex flex-col gap-10" }, e0 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, t0 = { class: "flex flex-col gap-3" }, a0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, n0 = ["src", "alt"], l0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, o0 = ["aria-label", "aria-pressed", "onClick"], s0 = ["src"], r0 = { class: "flex flex-col gap-5" }, i0 = { class: "flex flex-wrap items-start justify-between gap-3" }, d0 = { class: "min-w-0" }, u0 = { class: "text-2xl font-semibold tracking-tight" }, c0 = { class: "text-muted-foreground mt-1 text-sm" }, f0 = { class: "text-2xl font-semibold tabular-nums" }, m0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, p0 = { class: "grid grid-cols-2 gap-3 text-sm" }, v0 = {
  key: 0,
  class: "rounded-lg border p-3"
}, g0 = { class: "mt-1 font-medium" }, h0 = { class: "rounded-lg border p-3" }, b0 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, y0 = { class: "mt-1 font-medium" }, x0 = { class: "flex flex-col gap-4" }, k0 = { class: "grid gap-4 sm:grid-cols-2" }, $0 = { class: "bg-card rounded-lg border p-4" }, w0 = { class: "mb-3 text-sm font-medium" }, C0 = /* @__PURE__ */ O({
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
    return (k, $) => (t(), n("div", Qx, [
      o("div", e0, [
        o("div", t0, [
          o("div", a0, [
            u.value[c.value] ? (t(), n("img", {
              key: 0,
              src: u.value[c.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, n0)) : x("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", l0, [
            (t(!0), n(z, null, L(u.value, (M, S) => (t(), n("button", {
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
              }, null, 8, s0)
            ], 10, o0))), 128))
          ])) : x("", !0)
        ]),
        o("div", r0, [
          o("div", i0, [
            o("div", d0, [
              o("h1", u0, f(e.item.label), 1),
              o("p", c0, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : x("", !0)
          ]),
          o("p", f0, f(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", m0, f(e.item.facts.join(" · ")), 1)) : x("", !0),
          o("dl", p0, [
            e.item.sku ? (t(), n("div", v0, [
              $[1] || ($[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", g0, f(e.item.sku), 1)
            ])) : x("", !0),
            o("div", h0, [
              o("dt", b0, f(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", y0, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
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
      o("section", x0, [
        $[2] || ($[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", k0, [
          D(yt, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: g.value
          }, null, 8, ["label", "value", "series"]),
          D(yt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: v.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", $0, [
          o("p", w0, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(Jv, {
            data: g.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), S0 = ["href"], RC = /* @__PURE__ */ O({
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
      ], 8, S0),
      D(C0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), M0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, B0 = ["aria-selected", "onClick"], _0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, A0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, P0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, z0 = ["aria-pressed"], O0 = ["aria-pressed"], UC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(a.tabs[0]?.key ?? ""), i = dt(e, "layout"), d = R({}), u = R(!1);
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
    ), m = y(
      () => v.value ? c(v.value.key) : Ee()
    ), g = y(() => {
      const M = v.value;
      return M ? M.items.filter((S) => aa(S, c(M.key))) : [];
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
      M && (d.value = { ...d.value, [M]: Ee() });
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
        e.tabs.length > 1 ? (t(), n("div", M0, [
          (t(!0), n(z, null, L(e.tabs, (B) => (t(), n("button", {
            key: B.key,
            type: "button",
            class: A([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === B.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === B.key ? "true" : "false",
            onClick: (p) => s.value = B.key
          }, f(B.label), 11, B0))), 128))
        ])) : x("", !0),
        o("div", _0, [
          D($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": m.value.query,
            type: "search",
            placeholder: v.value?.searchPlaceholder ?? "Search…",
            "aria-label": v.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": S[0] || (S[0] = (B) => C(String(B)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          b(xt)(m.value) ? (t(), n("button", {
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
            b(xt)(m.value) ? (t(), n("span", A0, " on ")) : x("", !0)
          ])) : x("", !0),
          o("div", P0, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: S[2] || (S[2] = (B) => i.value = "grid")
            }, " Tiles ", 10, z0),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: S[3] || (S[3] = (B) => i.value = "list")
            }, " List ", 10, O0)
          ])
        ]),
        D(ea, {
          layout: i.value,
          "onUpdate:layout": S[4] || (S[4] = (B) => i.value = B),
          "page-size": e.pageSize,
          items: g.value,
          onSelect: S[5] || (S[5] = (B) => r("select", B)),
          onCart: S[6] || (S[6] = (B) => r("cart", B))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(Ga, {
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
}), j0 = { class: "flex flex-col gap-4" }, L0 = { class: "flex flex-col gap-4" }, HC = /* @__PURE__ */ O({
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
      () => a.cards.filter((d) => aa(d, s.value))
    );
    return (d, u) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : b(Ge)])
    }, [
      D(De, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", j0, [
        D(De, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(ea, {
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
      o("section", L0, [
        D(De, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(Ql, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": j(({ value: c }) => [
            D(we, {
              status: String(c)
            }, {
              default: j(() => [
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
}), V0 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, T0 = { class: "text-sm font-medium" }, D0 = ["width", "height", "aria-label"], E0 = { class: "flex items-center gap-2" }, I0 = /* @__PURE__ */ O({
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
    }), (M, S) => (t(), n("div", V0, [
      o("p", T0, f(e.label), 1),
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
      }, null, 42, D0),
      o("div", E0, [
        D(ue, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: j(() => [...S[0] || (S[0] = [
            N(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          size: "sm",
          disabled: e.disabled,
          onClick: k
        }, {
          default: j(() => [...S[1] || (S[1] = [
            N("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), F0 = { class: "grid gap-8 lg:grid-cols-2" }, N0 = { class: "flex flex-col gap-3" }, R0 = { class: "text-muted-foreground text-xs font-normal" }, U0 = {
  key: 0,
  class: "flex flex-col gap-3"
}, H0 = { class: "flex flex-wrap gap-3" }, K0 = ["onClick"], q0 = ["src", "alt"], G0 = {
  key: 1,
  class: "flex flex-col gap-3"
}, W0 = { class: "flex flex-wrap gap-3" }, Z0 = ["onClick"], J0 = ["src", "alt"], Y0 = {
  key: 2,
  class: "flex flex-col gap-4"
}, X0 = { class: "flex flex-wrap items-center gap-2" }, Q0 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, ek = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, tk = { class: "flex flex-col gap-2" }, ak = ["src"], nk = {
  key: 1,
  class: "text-sm text-neutral-400"
}, lk = ["src"], KC = /* @__PURE__ */ O({
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
      await Gc(M), S(40);
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
      o("section", F0, [
        D(I0, {
          label: "Draw a signature",
          onSave: v
        }),
        o("div", N0, [
          S[2] || (S[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", R0, f(b(Na)), 1),
          D(Aa, {
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
            default: j(() => [...S[1] || (S[1] = [
              N(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", U0, [
        D(De, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", H0, [
          (t(!0), n(z, null, L(a.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: A(["rounded-md border p-2", B.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => s.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, q0)
          ], 10, K0))), 128))
        ])
      ])) : x("", !0),
      r.value.length ? (t(), n("section", G0, [
        D(De, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", W0, [
          (t(!0), n(z, null, L(r.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: A(["rounded-md border p-2", B.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => i.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, J0)
          ], 10, Z0))), 128))
        ])
      ])) : x("", !0),
      e.documents.length ? (t(), n("section", Y0, [
        o("div", X0, [
          (t(!0), n(z, null, L(e.documents, (B) => (t(), T(ue, {
            key: B.key,
            size: "sm",
            variant: u.value === B.key ? "default" : "outline",
            onClick: (p) => u.value = B.key
          }, {
            default: j(() => [
              N(f(B.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", Q0, [
          D(dv, {
            document: $.value
          }, null, 8, ["document"]),
          o("div", ek, [
            o("div", tk, [
              S[3] || (S[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), n("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, ak)) : (t(), n("p", nk, "Draw and save a signature"))
            ]),
            k.value ? (t(), n("img", {
              key: 0,
              src: k.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, lk)) : x("", !0)
          ])
        ])
      ])) : x("", !0)
    ], 2));
  }
}), qC = "panel.dashboard.hiddenWidgets", ok = /* @__PURE__ */ Symbol("dashboardHide"), sk = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, GC = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = vt(ok, null), r = R(
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
    return (d, u) => i.value ? x("", !0) : (t(), n("div", sk, [
      D(Xh, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (c) => r.value = c),
        onHide: u[1] || (u[1] = (c) => b(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), rk = { class: "flex flex-col gap-3" }, ik = ["data-slot"], dk = ["aria-pressed", "aria-label", "title"], uk = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ck = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, fk = { class: "flex h-8 items-center" }, mk = ["aria-label", "title", "onClick"], pk = ["aria-label", "title", "onClick"], vk = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, gk = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, WC = /* @__PURE__ */ O({
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
    return (p, h) => (t(), n("div", rk, [
      (t(!0), n(z, null, L($.value, (w) => (t(), n("div", {
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
          (t(), n("svg", uk, [
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
        ], 8, dk)) : x("", !0),
        o("div", {
          class: A(["grid", [w.joined ? "gap-px" : "gap-3", g.value]])
        }, [
          (t(!0), n(z, null, L(w.segments, (P) => (t(), n("div", {
            key: P.key,
            class: A(["bg-card flex flex-col gap-2 p-4", w.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", ck, f(P.label), 1),
            o("div", fk, [
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
                (t(), n(z, null, L(5, (I) => o("span", {
                  key: I,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, mk)) : d(P) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${B(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (I) => S(P)
              }, f(B(P.value)), 9, pk)) : (t(), n("span", vk, f(B(P.value)), 1)),
              P.trend && !e.loading && !u(P) ? (t(), T(qa, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : x("", !0)
            ]),
            P.sparkline?.length && !e.loading && !u(P) ? (t(), T(wt, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : x("", !0),
            P.caption || P.comparison && P.trend ? (t(), n("p", gk, f(P.caption ?? P.comparison), 1)) : x("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, ik))), 128))
    ]));
  }
}), hk = ["aria-label"], bk = ["aria-valuenow", "aria-label"], yk = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, xk = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, kk = ["title"], $k = { class: "font-medium" }, wk = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, Ck = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, Sk = { class: "flex items-center justify-between gap-2" }, Mk = { class: "text-sm font-semibold" }, Bk = { class: "flex items-center gap-3" }, _k = ["href"], Ak = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Pk = { class: "flex min-w-0 flex-col gap-0.5" }, zk = { class: "text-sm font-medium" }, Ok = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, jk = {
  key: 1,
  class: "flex flex-col gap-2"
}, Lk = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Vk = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Tk = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, ZC = /* @__PURE__ */ O({
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
      return typeof $ == "string" ? $ : ba($);
    }), g = ot({
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
      ], 8, bk),
      o("div", yk, [
        o("span", xk, " Step " + f(c.value) + " of " + f(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", $k, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", wk, f(": " + s.value.detail), 1)) : x("", !0)
        ], 8, kk),
        s.value?.href ? (t(), T(_e(m.value), {
          key: 0,
          href: s.value.href,
          class: A(b(C))
        }, {
          default: j(() => [
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
    ], 8, hk)) : e.items.length ? (t(), n("section", Ck, [
      o("div", Sk, [
        o("h2", Mk, f(e.heading), 1),
        o("div", Bk, [
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
          }, " Full report ", 8, _k)) : x("", !0)
        ])
      ]),
      s.value ? (t(), n("div", Ak, [
        M[2] || (M[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Pk, [
          o("p", zk, f(s.value.title), 1),
          s.value.detail ? (t(), n("p", Ok, f(s.value.detail), 1)) : x("", !0),
          s.value.href ? (t(), T(_e(m.value), {
            key: 1,
            href: s.value.href,
            class: A(b(g))
          }, {
            default: j(() => [
              N(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : x("", !0)
        ])
      ])) : x("", !0),
      i.value.length ? (t(), n("ul", jk, [
        (t(!0), n(z, null, L(i.value, (S) => (t(), n("li", {
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
            S.done ? (t(), n("svg", Lk, [...M[3] || (M[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : x("", !0)
          ], 2),
          o("div", Vk, [
            o("p", {
              class: A(["text-sm", S.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(S.title), 3),
            !S.done && S.detail ? (t(), n("p", Tk, f(S.detail), 1)) : x("", !0)
          ]),
          !S.done && S.href ? (t(), T(_e(m.value), {
            key: 0,
            href: S.href,
            class: A(b(k))
          }, {
            default: j(() => [
              N(f(S.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : x("", !0)
        ]))), 128))
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), Dk = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, Ek = { class: "hidden items-center gap-2 md:flex" }, Ik = { class: "md:hidden" }, Fk = { class: "border-b px-4 py-3" }, Nk = { class: "text-muted-foreground text-xs font-normal" }, Rk = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, Uk = { class: "font-medium tabular-nums" }, Hk = { class: "ml-auto flex items-center gap-3" }, JC = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = R(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), n("div", Dk, [
      o("div", Ek, [
        U(i.$slots, "actions")
      ]),
      o("div", Ik, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        D(Wt, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: j(() => [
            D(Zt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", Fk, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", Nk, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", Rk, [
                  U(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", Uk, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          N(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          N(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", Hk, [
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
}), Kk = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, qk = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Gk = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Wk = ["value"], Zk = ["value"], Jk = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Yk = ["disabled"], Xk = ["disabled"], Qk = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, e2 = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, t2 = ["disabled"], YC = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("div", Kk, [
      o("p", qk, [
        N(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          N("of " + f(s(e.total)), 1)
        ], 64)) : x("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", Gk, [
        v[4] || (v[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: v[0] || (v[0] = (m) => r("update:perPage", Number(m.target.value)))
        }, [
          (t(!0), n(z, null, L(e.perPageOptions, (m) => (t(), n("option", {
            key: m,
            value: m
          }, f(m), 9, Zk))), 128))
        ], 40, Wk)
      ])) : x("", !0),
      o("nav", Jk, [
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
        ])], 8, Yk),
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
        ])], 8, Xk),
        o("span", Qk, f(e.page), 1),
        u.value !== null ? (t(), n("span", e2, " of " + f(s(u.value)), 1)) : x("", !0),
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
        ])], 8, t2)
      ])
    ]));
  }
}), a2 = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, n2 = ["aria-current"], l2 = ["title"], o2 = ["aria-current", "onClick"], s2 = ["title"], r2 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", a2, [
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
        }, f(r(e.counts.all ?? 0)), 11, l2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, n2),
      (t(!0), n(z, null, L(e.tabs, (d) => (t(), n("button", {
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
        }, f(r(e.counts[d] ?? 0)), 11, s2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, o2))), 128))
    ]));
  }
}), XC = /* @__PURE__ */ kt(r2, [["__scopeId", "data-v-3967c945"]]), i2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, d2 = { class: "grid gap-2" }, u2 = {
  key: 0,
  class: "text-destructive text-sm"
}, c2 = { class: "flex gap-2" }, QC = /* @__PURE__ */ O({
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
    })()), i = R(!1), d = on(null), u = y(() => d.value?.isLoading.value ?? !1), c = y(() => d.value?.error.value ?? null), v = y(() => d.value?.isSupported.value ?? !1);
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
      o("div", d2, [
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
      c.value ? (t(), n("p", u2, f(c.value), 1)) : x("", !0),
      o("div", c2, [
        D(ue, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: j(() => [
            N(f(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          type: "button",
          variant: "ghost",
          onClick: g
        }, {
          default: j(() => [...k[5] || (k[5] = [
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
      default: j(() => [...k[2] || (k[2] = [
        N(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", i2, " Passkeys are not supported in this browser. "));
  }
}), f2 = { class: "pk-form-stack" }, m2 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, e8 = /* @__PURE__ */ O({
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
    zt("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), zt("panelCreateOption", {
      run(c, v) {
        return a.createOption ? a.createOption(c, v) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = y(() => a.nodes.length > 0), i = y(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = y(() => a.errors._conflict);
    function u(c) {
      if (a.upload)
        return (v, m) => a.upload(c, v, m);
    }
    return (c, v) => (t(), n("div", f2, [
      d.value ? (t(), n("p", m2, f(d.value), 1)) : x("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, L(e.nodes, (m, g) => (t(), T(Pa, {
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
        (t(!0), n(z, null, L(e.fields, (m) => (t(), T(Xe, {
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
}), p2 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, v2 = ["disabled"], g2 = ["disabled"], h2 = ["disabled"], t8 = /* @__PURE__ */ O({
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
        default: j(() => [
          e.show ? (t(), n("div", {
            key: 0,
            class: A(s.value),
            role: "status",
            "aria-live": "polite",
            "data-slot": "unsaved-bar"
          }, [
            o("div", {
              class: A([
                b(Fc),
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
              o("span", p2, f(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[0] || (d[0] = (u) => i.$emit("discard"))
              }, f(e.discardLabel), 9, v2)) : x("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[1] || (d[1] = (u) => i.$emit("cancel"))
              }, f(e.cancelLabel), 9, g2),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: d[2] || (d[2] = (u) => i.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, h2)
            ], 2)
          ], 2)) : x("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function a8(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = R(Pt(e.value)), s = y(() => Pt(e.value) !== r.value);
  function i() {
    r.value = Pt(e.value);
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
function Pt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const b2 = {
  key: 0,
  class: "flex flex-col gap-1"
}, y2 = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, x2 = { class: "text-foreground text-sm font-medium" }, k2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, $2 = {
  key: 5,
  class: "max-w-full font-normal"
}, w2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, C2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, S2 = {
  key: 6,
  class: "font-normal"
}, M2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, B2 = { class: "text-muted-foreground truncate font-medium" }, _2 = { class: "text-foreground col-span-2 break-words" }, A2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, P2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, z2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, O2 = ["href"], j2 = { class: "flex min-w-0 items-start gap-2.5" }, L2 = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, V2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, T2 = ["d"], D2 = { class: "min-w-0" }, E2 = { class: "flex flex-wrap items-center gap-2" }, I2 = { class: "text-sm font-semibold" }, F2 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, N2 = ["onClick"], n8 = /* @__PURE__ */ O({
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
      return Jt[$] ?? "outline";
    });
    return (k, $) => {
      const M = Nt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", b2, [
        o("dt", y2, f(e.node.label), 1),
        o("dd", x2, [
          e.node.type === "badge" && b(du)(v.value) ? (t(), T(qe, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: j(() => [
              N(f(v.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", k2, "None")) : e.node.type === "icon" ? (t(), T(Dd, {
            key: 2,
            value: v.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(Rd, {
            key: 3,
            src: v.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Gd, {
            key: 4,
            value: typeof v.value == "string" ? v.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", $2, [
            e.node.language ? (t(), n("p", w2, f(e.node.language), 1)) : x("", !0),
            o("pre", C2, [
              o("code", null, f(v.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", S2, [
            v.value && typeof v.value == "object" && !Array.isArray(v.value) && Object.keys(v.value).length ? (t(), n("dl", M2, [
              (t(!0), n(z, null, L(v.value, (S, B) => (t(), n("div", {
                key: B,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", B2, f(B), 1),
                o("dd", _2, f(S), 1)
              ]))), 128))
            ])) : (t(), n("span", A2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", P2, [
            (t(!0), n(z, null, L(Array.isArray(v.value) ? v.value : [], (S, B) => (t(), n("div", {
              key: B,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, L(e.node.entries ?? [], (p, h) => (t(), T(M, {
                key: h,
                node: p,
                record: S,
                depth: e.depth + 1,
                onAction: $[0] || ($[0] = (w) => r("action", w))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(v.value) || v.value.length === 0 ? (t(), n("span", z2, "None")) : x("", !0)
          ])) : e.node.url && !m.value ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(g.value), 9, O2)) : (t(), n("span", {
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
          o("div", j2, [
            e.node.icon ? (t(), n("div", L2, [
              (t(), n("svg", V2, [
                o("path", {
                  d: b(ce)(e.node.icon)
                }, null, 8, T2)
              ]))
            ])) : x("", !0),
            o("div", D2, [
              o("div", E2, [
                o("h3", I2, f(e.node.label), 1),
                e.node.status ? (t(), T(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : x("", !0)
              ]),
              e.node.description ? (t(), n("p", F2, f(e.node.description), 1)) : x("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: A(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (S, B) => (t(), T(M, {
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
        (t(!0), n(z, null, L(e.node.children ?? [], (S, B) => (t(), T(M, {
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
          (t(!0), n(z, null, L(e.node.children ?? [], (S, B) => (t(), n("button", {
            key: B,
            type: "button",
            class: A([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === B ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (p) => i.value = B
          }, f(S.label), 11, N2))), 128))
        ], 2),
        (t(!0), n(z, null, L(e.node.children ?? [], (S, B) => pe((t(), n("div", {
          key: B,
          class: A(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(S.children ?? [], (p, h) => (t(), T(M, {
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
}), R2 = { class: "text-muted-foreground text-sm font-normal" }, U2 = { class: "flex items-start gap-3" }, H2 = { class: "min-w-0 flex-1" }, K2 = { class: "flex flex-wrap items-center gap-2" }, q2 = { class: "truncate text-sm font-medium" }, G2 = { class: "text-muted-foreground mt-0.5 text-xs" }, W2 = { class: "text-muted-foreground text-xs font-normal" }, Z2 = { class: "mt-auto flex items-center gap-2" }, J2 = /* @__PURE__ */ O({
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
      class: A(["flex flex-col gap-4", b(Fa)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", R2, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: A(b(Ec))
      }, [
        (t(!0), n(z, null, L(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", U2, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            o("div", H2, [
              o("div", K2, [
                o("h3", q2, f(u.label), 1),
                D(we, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: j(() => [
                    N(f(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), T(we, {
                  key: 0,
                  status: "offered"
                }, {
                  default: j(() => [...d[0] || (d[0] = [
                    N(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), T(we, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: j(() => [...d[1] || (d[1] = [
                    N(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : x("", !0),
                u.isDefault ? (t(), T(we, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...d[2] || (d[2] = [
                    N(" Default ", -1)
                  ])]),
                  _: 1
                })) : x("", !0),
                u.connected && u.mode ? (t(), T(we, {
                  key: 3,
                  status: u.mode
                }, {
                  default: j(() => [
                    N(f(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : x("", !0)
              ]),
              o("p", G2, f(u.caption), 1)
            ])
          ]),
          o("p", W2, f(u.methods.join(" · ")), 1),
          o("div", Z2, [
            D(ue, {
              size: "sm",
              variant: "outline",
              onClick: (c) => r("configure", u.key)
            }, {
              default: j(() => [...d[3] || (d[3] = [
                N(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            D(ue, {
              size: "sm",
              variant: "ghost",
              onClick: (c) => r("toggle", u.key)
            }, {
              default: j(() => [
                N(f(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), Y2 = { class: "flex flex-col gap-6" }, X2 = { class: "relative" }, Q2 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, e$ = ["d"], t$ = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, a$ = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, n$ = { class: "flex flex-wrap items-center gap-2" }, l$ = { class: "text-muted-foreground text-sm font-normal" }, o$ = { class: "flex flex-col gap-1 text-sm" }, s$ = ["value"], r$ = {
  key: 0,
  class: "flex flex-col gap-2"
}, i$ = { class: "flex flex-wrap items-center gap-2" }, d$ = {
  key: 1,
  class: "flex items-center gap-2"
}, l8 = /* @__PURE__ */ O({
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
    const l = dt(e, "gateways"), a = R(null), r = R(""), s = y(
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
      o("div", Y2, [
        D(De, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", X2, [
          (t(), n("svg", Q2, [
            o("path", {
              d: b(ce)("search")
            }, null, 8, e$)
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
        i.value.length > 0 ? (t(), T(J2, {
          key: 0,
          gateways: i.value,
          onConfigure: c,
          onToggle: v
        }, null, 8, ["gateways"])) : (t(), n("p", t$, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      D(ta, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: $[8] || ($[8] = (M) => a.value = null)
      }, {
        footer: j(() => [
          D(ue, {
            variant: "outline",
            size: "sm",
            onClick: $[6] || ($[6] = (M) => a.value = null)
          }, {
            default: j(() => [...$[21] || ($[21] = [
              N("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(ue, {
            key: 0,
            size: "sm",
            onClick: $[7] || ($[7] = (M) => v(s.value.key))
          }, {
            default: j(() => [
              N(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : x("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), n("div", a$, [
            o("div", n$, [
              D(we, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: j(() => [
                  N(f(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), T(we, {
                key: 0,
                status: "offered"
              }, {
                default: j(() => [...$[9] || ($[9] = [
                  N(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(we, {
                key: 1,
                status: "disabled"
              }, {
                default: j(() => [...$[10] || ($[10] = [
                  N(" Disabled ", -1)
                ])]),
                _: 1
              })) : x("", !0),
              s.value.isDefault ? (t(), T(we, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...$[11] || ($[11] = [
                  N(" Default ", -1)
                ])]),
                _: 1
              })) : x("", !0),
              s.value.connected && s.value.mode ? (t(), T(we, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  N(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : x("", !0)
            ]),
            o("p", l$, f(s.value.caption), 1),
            o("label", o$, [
              $[12] || ($[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, s$)
            ]),
            $[20] || ($[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", r$, [
              $[16] || ($[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              $[17] || ($[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", i$, [
                D(ue, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: $[1] || ($[1] = (M) => m(s.value.key, !0))
                }, {
                  default: j(() => [...$[13] || ($[13] = [
                    N(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(ue, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: $[2] || ($[2] = (M) => m(s.value.key, !1))
                }, {
                  default: j(() => [...$[14] || ($[14] = [
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
                  default: j(() => [...$[15] || ($[15] = [
                    N(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : x("", !0),
            s.value.connected ? (t(), n("div", d$, [
              D(ue, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: $[4] || ($[4] = (M) => C("test"))
              }, {
                default: j(() => [...$[18] || ($[18] = [
                  N(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              D(ue, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: $[5] || ($[5] = (M) => C("live"))
              }, {
                default: j(() => [...$[19] || ($[19] = [
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
function ga(e) {
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
function o8(e) {
  const l = R(ga(e));
  ve(() => {
    l.value = ga(e);
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
function ha(e) {
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
function s8(e) {
  const l = R(ha(e));
  ve(() => {
    l.value = ha(e);
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
function r8(e) {
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
  function I() {
    $ && (w()?.leave($), $ = null);
  }
  function E() {
    l.driver === "poll" && p(), l.driver === "broadcast" && P();
  }
  function te() {
    h(), I(), clearTimeout(m), m = void 0, v = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (te(), u.value = "paused") : (k = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return ve(() => {
    l.driver !== "none" && (E(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), te();
  }), { status: u, recentlyChanged: c, applyPatch: M, flush: S, pollOnce: B };
}
const u$ = /^[a-z0-9-]+$/, c$ = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function i8(e) {
  sn(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !u$.test(a) || typeof r != "string" || !c$.test(r) || (l[`--${a}`] = r);
    Tu(l);
  });
}
const f$ = { class: "flex items-center gap-0.5" }, m$ = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", f$, [
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
}), p$ = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(Ka, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), v$ = { class: "flex flex-col gap-2" }, g$ = { class: "bg-card rounded-lg border p-4" }, h$ = { class: "text-muted-foreground truncate text-xs" }, b$ = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, y$ = /* @__PURE__ */ O({
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
    return ($, M) => (t(), n("div", v$, [
      o("div", g$, [
        o("p", h$, f(u.value), 1),
        o("p", {
          class: A(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", v.value === "" ? "text-muted-foreground italic" : ""])
        }, f(v.value || "Untitled page"), 3),
        o("p", {
          class: A(["text-muted-foreground mt-1 line-clamp-2 text-sm", m.value === "" ? "italic" : ""])
        }, f(m.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", b$, [
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
}), x$ = ["value", "placeholder", "disabled"], k$ = /* @__PURE__ */ O({
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
    }, null, 42, x$));
  }
}), $$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, w$ = ["aria-selected", "disabled", "title", "onClick"], C$ = /* @__PURE__ */ O({
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
    return (u, c) => (t(), n("div", $$, [
      (t(!0), n(z, null, L(s.value, (v) => (t(), n("button", {
        key: v,
        type: "button",
        role: "option",
        class: A(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [b(Me), i.value === v ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === v,
        disabled: e.disabled,
        title: v,
        onClick: (m) => d(v)
      }, f(v), 11, w$))), 128))
    ]));
  }
}), S$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, M$ = ["disabled"], B$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, _$ = ["onClick"], A$ = ["onClick"], P$ = /* @__PURE__ */ O({
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
    return (g, C) => (t(), n("div", S$, [
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
      ], 10, M$),
      i.value ? (t(), n("div", B$, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": C[1] || (C[1] = (k) => s.value = k),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Ae, s.value]
        ]) : x("", !0),
        (t(!0), n(z, null, L(c.value, (k) => (t(), n(z, {
          key: String(k.value)
        }, [
          o("button", {
            type: "button",
            class: A(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === k.value ? "bg-accent" : ""]),
            onClick: ($) => m(k.value)
          }, f(k.label), 11, _$),
          (t(!0), n(z, null, L(k.children ?? [], ($) => (t(), n("button", {
            key: String($.value),
            type: "button",
            class: A(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === $.value ? "bg-accent text-foreground" : ""]),
            onClick: (M) => m($.value)
          }, f($.label), 11, A$))), 128))
        ], 64))), 128))
      ])) : x("", !0)
    ]));
  }
}), z$ = ["aria-label"], O$ = ["disabled", "aria-label", "aria-pressed", "onClick"], j$ = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, L$ = { key: 0 }, V$ = ["id"], T$ = ["fill"], D$ = ["disabled"], E$ = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, L(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${g} of ${s.value}`,
        "aria-pressed": d.value >= g,
        onClick: (C) => u(g)
      }, [
        (t(), n("svg", j$, [
          c(g) === "half" ? (t(), n("defs", L$, [
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
            ])], 8, V$)
          ])) : x("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: c(g) === "full" ? "currentColor" : c(g) === "half" ? `url(#half-${e.field.key}-${g})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, T$)
        ]))
      ], 8, O$))), 128)),
      d.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: m[0] || (m[0] = (g) => u(0))
      }, " Clear ", 8, D$)) : x("", !0)
    ], 8, z$));
  }
});
function I$() {
  xe("radio", gm), xe("checkboxlist", ym), xe("tags", Mm), xe("colour", Em), xe("slider", hp), xe("rating", E$), xe("phone", k$), xe("icon-picker", C$), xe("tree-select", P$), xe("visual-select", Pp), xe("markdown", Zf), xe("code", am), xe("map", Um), xe("qrcode", Wm), xe("barcode", tp), xe("diff", lp), xe("seo-preview", y$), At("swatch", Op), At("voucher-code-box", p$), At("document-colour-mode", m$);
}
function Wa() {
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
const F$ = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = Wa();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: A(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", b(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      U(r.$slots, "default")
    ], 6));
  }
}), N$ = ["id"], Se = /* @__PURE__ */ O({
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
        D(F$, null, {
          default: j(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, N$));
  }
}), R$ = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, U$ = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, H$ = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Le = /* @__PURE__ */ O({
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
      e.eyebrow ? (t(), n("p", R$, f(e.eyebrow), 1)) : x("", !0),
      e.title ? (t(), n("h2", U$, f(e.title), 1)) : x("", !0),
      e.body ? (t(), n("p", H$, f(e.body), 1)) : x("", !0)
    ], 2)) : x("", !0);
  }
}), K$ = { class: "flex flex-col gap-10" }, q$ = { class: "grid gap-4 md:grid-cols-3" }, G$ = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, W$ = { class: "text-sm font-semibold text-balance" }, Z$ = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, J$ = /* @__PURE__ */ O({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", K$, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", q$, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", { key: s }, [
              (t(), T(_e(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: j(() => [
                  r.meta ? (t(), n("p", G$, f(r.meta), 1)) : x("", !0),
                  o("h3", W$, f(r.title), 1),
                  r.body ? (t(), n("p", Z$, f(r.body), 1)) : x("", !0)
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
function Y$() {
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
const X$ = { class: "pk-tilt-inner relative h-full" }, Q$ = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = Y$();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", X$, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), ew = { class: "flex flex-col gap-10" }, tw = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, aw = { class: "text-base font-semibold" }, nw = { class: "text-sm text-pretty text-muted-foreground" }, lw = /* @__PURE__ */ O({
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
      default: j(() => [
        o("div", ew, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", tw, [
            (t(!0), n(z, null, L(e.items ?? [], (s, i) => (t(), T(Q$, {
              key: i,
              class: A(l(s.span))
            }, {
              default: j(() => [
                o("div", {
                  class: A([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", aw, f(s.title), 1),
                  o("p", nw, f(s.body), 1)
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
}), ow = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, sw = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, rw = { class: "grid gap-4 text-sm" }, iw = {
  key: 0,
  class: "grid gap-1"
}, dw = ["href"], uw = {
  key: 1,
  class: "grid gap-1"
}, cw = ["href"], fw = {
  key: 2,
  class: "grid gap-1"
}, mw = { class: "text-pretty text-muted-foreground" }, pw = ["href"], vw = /* @__PURE__ */ O({
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
      default: j(() => [
        o("div", ow, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", sw, [
            o("dl", rw, [
              e.email ? (t(), n("div", iw, [
                a[0] || (a[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, f(e.email), 9, dw)
                ])
              ])) : x("", !0),
              e.phone ? (t(), n("div", uw, [
                a[1] || (a[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, f(e.phone), 9, cw)
                ])
              ])) : x("", !0),
              e.address ? (t(), n("div", fw, [
                a[2] || (a[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", mw, f(e.address), 1)
              ])) : x("", !0)
            ]),
            e.label ? (t(), n("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.label), 9, pw)) : x("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), gw = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, hw = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, bw = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, yw = ["href"], xw = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", gw, [
          o("h2", hw, f(e.title), 1),
          e.body ? (t(), n("p", bw, f(e.body), 1)) : x("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, yw)) : x("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), kw = { class: "flex flex-col gap-8" }, $w = { class: "divide-y rounded-lg border" }, ww = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Cw = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, Sw = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, { narrow: "" }, {
      default: j(() => [
        o("div", kw, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", $w, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", ww, [
                N(f(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", Cw, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Mw = { class: "flex flex-col gap-10" }, Bw = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, _w = { class: "text-sm font-semibold" }, Aw = { class: "text-sm text-pretty text-muted-foreground" }, Pw = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", Mw, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Bw, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", _w, f(r.title), 1),
              o("p", Aw, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), zw = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, Ow = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, jw = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Lw = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, Vw = ["href"], Tw = ["href"], Dw = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, Ew = /* @__PURE__ */ O({
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
      default: j(() => [
        o("div", {
          class: A(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), n("p", zw, f(e.brand), 1)) : x("", !0),
          e.eyebrow ? (t(), n("p", Ow, f(e.eyebrow), 1)) : x("", !0),
          o("h1", {
            class: A([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, f(e.title), 3),
          e.body ? (t(), n("p", jw, f(e.body), 1)) : x("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", Lw, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, Vw)) : x("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, Tw)) : x("", !0)
          ])) : x("", !0),
          e.note ? (t(), n("p", Dw, f(e.note), 1)) : x("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), Iw = { class: "flex flex-col items-center gap-6" }, Fw = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, Nw = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, Rw = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, { muted: "" }, {
      default: j(() => [
        o("div", Iw, [
          e.title ? (t(), n("p", Fw, f(e.title), 1)) : x("", !0),
          o("ul", Nw, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Uw = { class: "flex flex-col gap-10" }, Hw = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Kw = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, qw = ["aria-pressed"], Gw = ["aria-pressed"], Ww = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, Zw = { class: "grid gap-4 md:grid-cols-3" }, Jw = { class: "flex flex-col gap-1" }, Yw = { class: "text-sm font-semibold" }, Xw = { class: "flex items-baseline gap-1" }, Qw = { class: "text-3xl font-semibold tracking-tight" }, e4 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, t4 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, a4 = { class: "flex flex-col gap-2 text-sm" }, n4 = { class: "text-muted-foreground" }, l4 = ["href"], o4 = /* @__PURE__ */ O({
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
      default: j(() => [
        o("div", Uw, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", Hw, [
            o("div", Kw, [
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, qw),
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, Gw)
            ]),
            e.annualNote ? (t(), n("p", Ww, f(e.annualNote), 1)) : x("", !0)
          ])) : x("", !0),
          o("ul", Zw, [
            (t(!0), n(z, null, L(e.items ?? [], (u, c) => (t(), n("li", {
              key: c,
              class: A(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", Jw, [
                o("h3", Yw, f(u.name), 1),
                o("p", Xw, [
                  o("span", Qw, f(s(u)), 1),
                  u.period ? (t(), n("span", e4, f(u.period), 1)) : x("", !0)
                ]),
                u.body ? (t(), n("p", t4, f(u.body), 1)) : x("", !0)
              ]),
              o("ul", a4, [
                (t(!0), n(z, null, L(u.features ?? [], (v, m) => (t(), n("li", {
                  key: m,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", n4, f(v.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: A([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, l4)) : x("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function s4() {
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
const r4 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, i4 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, d4 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, u4 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, c4 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, f4 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, m4 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, p4 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, v4 = { class: "ml-3 truncate text-xs text-muted-foreground" }, g4 = { class: "flex" }, h4 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, b4 = { class: "min-w-0 flex-1 p-4" }, y4 = { class: "flex flex-col divide-y rounded-md border" }, x4 = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = s4();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", r4, [
        o("div", i4, [
          o("div", d4, [
            o("h2", u4, f(e.title), 1),
            e.body ? (t(), n("p", c4, f(e.body), 1)) : x("", !0)
          ]),
          o("div", f4, [
            o("div", m4, [
              o("div", p4, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", v4, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", g4, [
                o("div", h4, [
                  (t(), n(z, null, L(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", b4, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", y4, [
                    (t(!0), n(z, null, L(e.rows, (s) => (t(), n("div", {
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
}), k4 = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = Wa(), s = R(0);
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
}), $4 = { class: "flex flex-col gap-10" }, w4 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, C4 = { class: "order-2 text-sm text-muted-foreground" }, S4 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, M4 = /* @__PURE__ */ O({
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
      default: j(() => [
        o("div", $4, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", w4, [
            (t(!0), n(z, null, L(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", C4, f(s.label), 1),
              o("dd", S4, [
                l(s.value) ? (t(), T(k4, {
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
}), B4 = { class: "flex flex-col gap-10" }, _4 = { class: "grid gap-6 md:grid-cols-3" }, A4 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, P4 = { class: "text-sm font-semibold" }, z4 = { class: "text-sm text-pretty text-muted-foreground" }, O4 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", B4, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", _4, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", A4, f(s + 1), 1),
              o("h3", P4, f(r.title), 1),
              o("p", z4, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), j4 = { class: "flex flex-col gap-10" }, L4 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, V4 = ["src"], T4 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, D4 = { class: "min-w-0" }, E4 = { class: "truncate text-sm font-semibold" }, I4 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, F4 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, N4 = /* @__PURE__ */ O({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", j4, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", L4, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), n("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, V4)) : (t(), n("span", T4, f((r.name ?? "?").slice(0, 1)), 1)),
              o("div", D4, [
                o("h3", E4, f(r.name), 1),
                r.role ? (t(), n("p", I4, f(r.role), 1)) : x("", !0)
              ]),
              r.bio ? (t(), n("p", F4, f(r.bio), 1)) : x("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), R4 = { class: "flex flex-col gap-10" }, U4 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, H4 = { class: "text-pretty text-sm leading-relaxed" }, K4 = { class: "mt-auto flex items-center gap-3" }, q4 = ["src"], G4 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, W4 = { class: "min-w-0" }, Z4 = { class: "block truncate text-sm font-medium" }, J4 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, Y4 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", R4, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", U4, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", H4, " “" + f(r.quote) + "” ", 1),
              o("figcaption", K4, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, q4)) : (t(), n("span", G4, f((r.name ?? "?").slice(0, 1)), 1)),
                o("span", W4, [
                  o("span", Z4, f(r.name), 1),
                  r.role ? (t(), n("span", J4, f(r.role), 1)) : x("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), d8 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: Ew,
      logos: Rw,
      features: Pw,
      bento: lw,
      showcase: x4,
      steps: O4,
      stats: M4,
      testimonials: Y4,
      team: N4,
      articles: J$,
      contact: vw,
      pricing: o4,
      faq: Sw,
      cta: xw
    }, s = y(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), n(z, null, L(s.value, (u) => (t(), T(_e(u.component), re({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), X4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, u8 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", X4, [
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
}), Q4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, c8 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", Q4, [...a[0] || (a[0] = [
      Ft('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), e5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, f8 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", e5, [...a[0] || (a[0] = [
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
I$();
const m8 = "0.0.1";
export {
  Vt as APPEARANCE_STYLE_ID,
  LC as AdminDirectory,
  zc as Alert,
  Oc as AlertDescription,
  jc as AlertTitle,
  yC as AppPageFooter,
  L5 as AppearanceDrawer,
  V3 as Avatar,
  T3 as AvatarFallback,
  D3 as AvatarImage,
  Jt as BADGE_VARIANTS,
  _5 as BadgeResolver,
  BC as BarChart,
  E3 as Breadcrumb,
  I3 as BreadcrumbEllipsis,
  F3 as BreadcrumbItem,
  N3 as BreadcrumbLink,
  R3 as BreadcrumbList,
  U3 as BreadcrumbPage,
  H3 as BreadcrumbSeparator,
  u5 as BulkActions,
  Fa as CATALOGUE_CONTAINER,
  Ec as CATALOGUE_GRID,
  N5 as CATALOGUE_GRID_TIGHT,
  Ic as CATALOGUE_GRID_TILES,
  dC as Card,
  uC as CardAction,
  cC as CardContent,
  fC as CardDescription,
  mC as CardFooter,
  pC as CardHeader,
  vC as CardTitle,
  Vx as CartPanel,
  UC as CatalogBrowser,
  i1 as CatalogCard,
  Ga as CatalogFilterSheet,
  ea as CatalogGrid,
  NC as CatalogInspect,
  C0 as CatalogItemDetail,
  RC as CatalogItemView,
  HC as CatalogRegister,
  FC as CatalogTill,
  jh as ChartCard,
  ft as ChartTooltip,
  Fr as Checkbox,
  $5 as CheckboxCell,
  w5 as CodeCell,
  Gd as ColourCell,
  OC as ComboChart,
  Ir as CreateOptionDialog,
  jr as CreateOptionError,
  qC as DASHBOARD_HIDDEN_STORAGE_KEY,
  ok as DASHBOARD_HIDE_KEY,
  GC as DashboardShortcuts,
  Ql as DataTable,
  X3 as Dialog,
  Q3 as DialogClose,
  eC as DialogContent,
  tC as DialogDescription,
  aC as DialogFooter,
  nC as DialogHeader,
  hf as DialogOverlay,
  lC as DialogScrollContent,
  oC as DialogTitle,
  sC as DialogTrigger,
  LC as DirectoryPage,
  k3 as DropdownMenu,
  $3 as DropdownMenuCheckboxItem,
  w3 as DropdownMenuContent,
  C3 as DropdownMenuGroup,
  S3 as DropdownMenuItem,
  M3 as DropdownMenuLabel,
  g8 as DropdownMenuPortal,
  B3 as DropdownMenuRadioGroup,
  _3 as DropdownMenuRadioItem,
  A3 as DropdownMenuSeparator,
  P3 as DropdownMenuShortcut,
  z3 as DropdownMenuSub,
  O3 as DropdownMenuSubContent,
  j3 as DropdownMenuSubTrigger,
  L3 as DropdownMenuTrigger,
  M5 as EditableCell,
  Me as FOCUS_RING,
  c5 as FOCUS_RING_SOFT,
  sa as FOCUS_RING_WITHIN,
  Fc as FORM_MEASURE,
  Xe as FormFieldControl,
  jC as HeatmapChart,
  Mt as ICON_PATHS,
  Re as INPUT_COPY,
  Dr as INPUT_PLACEHOLDER,
  Tr as INPUT_TEXT,
  Dd as IconCell,
  Rd as ImageCell,
  n8 as InfoNode,
  Rc as JPEG_IMAGE_ERROR,
  C5 as KeyValueCell,
  rC as Label,
  Jv as LineChart,
  vx as LineItems,
  b5 as MUTED_COPY,
  pt as MUTED_COPY_SNUG,
  y5 as MUTED_COPY_XS,
  yt as MiniStatCard,
  K3 as NavigationMenu,
  q3 as NavigationMenuContent,
  G3 as NavigationMenuIndicator,
  W3 as NavigationMenuItem,
  Z3 as NavigationMenuLink,
  J3 as NavigationMenuList,
  Y3 as NavigationMenuTrigger,
  vf as NavigationMenuViewport,
  Nc as OPAQUE_IMAGE_ERROR,
  Ge as PAGE_SHELL,
  R5 as PAGE_SHELL_COMPACT,
  U5 as PAGE_SHELL_STACK,
  l8 as PaymentGatewaySettings,
  J2 as PaymentGateways,
  _C as PieChart,
  I5 as PkAlertError,
  J$ as PkArticles,
  u8 as PkAuroraBackdrop,
  qe as PkBadge,
  tp as PkBarcode,
  lw as PkBento,
  V5 as PkBottomNav,
  gC as PkBoundary,
  $C as PkBuilder,
  ue as PkButton,
  wC as PkCalendar,
  hC as PkCard,
  ym as PkCheckboxList,
  Ka as PkCodeBox,
  am as PkCodeInput,
  Em as PkColourPicker,
  f8 as PkConsoleBackdrop,
  vw as PkContact,
  k4 as PkCountUp,
  xw as PkCta,
  xC as PkDeviceFrame,
  lp as PkDiff,
  dv as PkDocument,
  Je as PkDropdown,
  c8 as PkEditorialBackdrop,
  Ot as PkEmptyState,
  Sw as PkFaq,
  Pw as PkFeatureGrid,
  Pe as PkFieldLabel,
  Aa as PkFileUpload,
  De as PkHeading,
  Ew as PkHero,
  pi as PkKeyValue,
  d8 as PkLandingSections,
  Rw as PkLogoCloud,
  Fm as PkMap,
  Um as PkMapField,
  Zf as PkMarkdownInput,
  it as PkModal,
  Gt as PkMultiSelect,
  D5 as PkOtpInput,
  E5 as PkPageHeader,
  QC as PkPasskeyRegister,
  F5 as PkPasswordInput,
  o4 as PkPricing,
  Wm as PkQrCode,
  lx as PkQtyStepper,
  as as PkQueryBuilder,
  gm as PkRadioGroup,
  kC as PkRepeater,
  F$ as PkReveal,
  Ci as PkRichEditor,
  Se as PkSection,
  Le as PkSectionHeading,
  x4 as PkShowcase,
  I0 as PkSignaturePad,
  ze as PkSkeleton,
  ta as PkSlideover,
  hp as PkSlider,
  T5 as PkSpinner,
  M4 as PkStats,
  we as PkStatusBadge,
  zr as PkStepIndicator,
  O4 as PkSteps,
  Op as PkSwatchPreview,
  Mm as PkTagsInput,
  N4 as PkTeam,
  Y4 as PkTestimonials,
  $e as PkTextInput,
  Q$ as PkTiltCard,
  Pp as PkVisualSelect,
  V1 as PlanCard,
  IC as PlanEditor,
  EC as PlanGrid,
  zC as PolarAreaChart,
  PC as RadarChart,
  k5 as RatingCell,
  A5 as RecordActions,
  e8 as RecordForm,
  x5 as RelationCreateDialog,
  m5 as RelationPanel,
  Ib as STATUS_TONES,
  AC as ScatterChart,
  Pa as SchemaNode,
  TC as SegmentedBar,
  JC as SelectionBar,
  uf as Separator,
  ZC as SetupChecklist,
  Ia as ShadcnInput,
  Wt as Sheet,
  W5 as SheetClose,
  Zt as SheetContent,
  Wc as SheetDescription,
  Z5 as SheetFooter,
  Zc as SheetHeader,
  Jc as SheetTitle,
  J5 as SheetTrigger,
  Xh as ShortcutsWidget,
  Y5 as Sidebar,
  X5 as SidebarContent,
  Q5 as SidebarFooter,
  e3 as SidebarGroup,
  t3 as SidebarGroupAction,
  a3 as SidebarGroupContent,
  n3 as SidebarGroupLabel,
  l3 as SidebarHeader,
  o3 as SidebarInput,
  s3 as SidebarInset,
  r3 as SidebarMenu,
  i3 as SidebarMenuAction,
  d3 as SidebarMenuBadge,
  c3 as SidebarMenuButton,
  f3 as SidebarMenuItem,
  m3 as SidebarMenuSkeleton,
  p3 as SidebarMenuSub,
  v3 as SidebarMenuSubButton,
  g3 as SidebarMenuSubItem,
  h3 as SidebarProvider,
  b3 as SidebarRail,
  y3 as SidebarSeparator,
  x3 as SidebarTrigger,
  KC as SignatureStudio,
  wt as Sparkline,
  iC as Spinner,
  VC as StatCard,
  DC as StatListChart,
  WC as StatStrip,
  Ze as Switch,
  Na as TRANSPARENT_IMAGE_HELP,
  YC as TablePagination,
  Oo as TableShell,
  XC as TableTabs,
  dr as TableToolbar,
  S5 as TagsCell,
  MC as ThemeToggle,
  sf as Tooltip,
  rf as TooltipContent,
  u3 as TooltipProvider,
  df as TooltipTrigger,
  qa as TrendBadge,
  t8 as UnsavedBar,
  Lc as alertVariants,
  Lu as appearancePayload,
  La as appearanceVars,
  Tt as applyAppearance,
  Gc as assertTransparentImage,
  z5 as bootstrapAppearance,
  ot as buttonClasses,
  xt as catalogFiltersActive,
  Q as cn,
  Vr as createOptionActionLabel,
  Lr as createOptionTitle,
  d1 as cycleLabel,
  Ee as emptyCatalogFilters,
  Or as fieldControl,
  h5 as fieldErrorsFromPayload,
  Ny as findExactSku,
  u1 as formatPerkValue,
  du as hasBadgeValue,
  p5 as hasFieldControl,
  CC as hasOptionPreview,
  ce as iconPath,
  Kc as imageHasTransparency,
  Va as initializeAppearance,
  Xt as isDark,
  aa as matchCatalogItem,
  q5 as mergeLayoutItems,
  gf as navigationMenuTriggerStyle,
  bp as optionPreview,
  H5 as packWidgetColumns,
  K5 as parseWidgetId,
  c1 as perkGranted,
  Qt as readAppearance,
  Vu as readServerAppearance,
  I$ as registerBuiltInFieldControls,
  xe as registerFieldControl,
  At as registerOptionPreview,
  v5 as registeredFieldTypes,
  yp as registeredOptionPreviews,
  P5 as resetAppearanceBootstrapForTests,
  g5 as resetFieldControls,
  SC as resetOptionPreviews,
  j5 as setAppearancePersister,
  cf as sidebarMenuButtonVariants,
  Ub as statusBadgeVariant,
  Rb as statusTone,
  O5 as syncAppearanceFromInertiaPage,
  G5 as toPersistedLayout,
  f5 as toUrl,
  Ea as useAppearance,
  o8 as useColumnVisibility,
  s8 as useColumnWidths,
  r8 as useLiveUpdates,
  Y$ as usePointer,
  Wa as useReveal,
  B5 as useSchemaColumns,
  s4 as useScrollProgress,
  bC as useShellPageFooter,
  $t as useSidebar,
  i8 as useTenantTheme,
  a8 as useUnsavedChanges,
  m8 as version,
  da as widgetId
};
//# sourceMappingURL=index.js.map
