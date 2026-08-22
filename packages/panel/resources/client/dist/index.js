import './ui.css';
import { defineComponent as O, useSlots as Vt, openBlock as t, createElementBlock as n, normalizeClass as A, unref as x, renderSlot as U, createElementVNode as o, toDisplayString as m, createCommentVNode as w, computed as y, normalizeStyle as oe, Fragment as z, renderList as L, ref as R, watch as me, useId as Na, withModifiers as he, createTextVNode as N, createVNode as D, createStaticVNode as Lt, createBlock as T, createSlots as nt, withCtx as j, nextTick as je, onBeforeUnmount as ke, Teleport as Je, Transition as Fe, onMounted as ge, withDirectives as pe, vModelText as Se, resolveDynamicComponent as Me, resolveComponent as Tt, vModelSelect as qe, vModelDynamic as Ra, mergeProps as se, normalizeProps as ze, guardReactiveProps as De, defineAsyncComponent as Xt, inject as ct, vShow as Ne, onUnmounted as Ua, isRef as Ha, useTemplateRef as Ka, onErrorCaptured as qa, provide as Bt, markRaw as ca, withKeys as Ga, reactive as lt, useModel as st, mergeModels as Te, shallowRef as Wa, watchEffect as Za } from "vue";
import { useForwardPropsEmits as be, DialogRoot as fa, DialogOverlay as Dt, DialogPortal as Et, DialogContent as It, DialogClose as Ye, CheckboxRoot as Ja, CheckboxIndicator as Ya, SwitchRoot as Xa, SwitchThumb as Qa, DialogDescription as ma, DialogTitle as pa, DialogTrigger as va, createContext as en, Primitive as Xe, TooltipRoot as tn, TooltipPortal as an, TooltipContent as nn, TooltipArrow as ln, TooltipProvider as ga, TooltipTrigger as on, Separator as sn, DropdownMenuRoot as rn, DropdownMenuCheckboxItem as un, DropdownMenuItemIndicator as ha, DropdownMenuPortal as dn, DropdownMenuContent as cn, DropdownMenuGroup as fn, useForwardProps as Ae, DropdownMenuItem as mn, DropdownMenuLabel as pn, DropdownMenuRadioGroup as vn, DropdownMenuRadioItem as gn, DropdownMenuSeparator as hn, DropdownMenuSub as bn, DropdownMenuSubContent as xn, DropdownMenuSubTrigger as yn, DropdownMenuTrigger as kn, AvatarRoot as $n, AvatarFallback as wn, AvatarImage as Cn, NavigationMenuViewport as Sn, NavigationMenuRoot as Mn, NavigationMenuContent as Bn, NavigationMenuIndicator as _n, NavigationMenuItem as zn, NavigationMenuLink as An, NavigationMenuList as Pn, NavigationMenuTrigger as On, Label as jn } from "reka-ui";
import { DropdownMenuPortal as jC } from "reka-ui";
import { X as Ft, Check as ba, AlertCircle as Vn, EyeOff as Ln, Eye as Tn, PanelLeftOpen as Dn, PanelLeftClose as En, Circle as In, ChevronRight as xa, MoreHorizontal as Fn, ChevronDown as Nn, Loader2Icon as Rn } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as ya, useMediaQuery as Un, useEventListener as Hn, defaultDocument as Kn } from "@vueuse/core";
import { clsx as qn } from "clsx";
import { twMerge as Gn } from "tailwind-merge";
import { cva as Nt } from "class-variance-authority";
import { usePage as ka, Link as Wn } from "@inertiajs/vue3";
const kt = {
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
  return e ? kt[e] ?? kt.dot : kt.dot;
}
const Zn = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, Jn = ["d"], Yn = { class: "flex max-w-sm flex-col gap-1" }, Xn = {
  key: 0,
  class: "text-sm"
}, Qn = {
  key: 2,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, _t = /* @__PURE__ */ O({
  __name: "PkEmptyState",
  props: {
    title: {},
    description: {},
    icon: { default: "package" },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = Vt();
    return (a, r) => (t(), n("div", {
      "data-slot": "empty-state",
      class: A(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      x(l).illustration ? (t(), n("div", Zn, [
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
              d: x(ce)(e.icon)
            }, null, 8, Jn)
          ], 2))
        ])
      ], 2)),
      o("div", Yn, [
        o("p", {
          class: A(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, m(e.title), 3),
        e.description ? (t(), n("p", Xn, m(e.description), 1)) : w("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", Qn, [
        U(a.$slots, "actions")
      ])) : w("", !0)
    ], 2));
  }
}), el = ["aria-label"], _e = /* @__PURE__ */ O({
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
    function i(u) {
      if (!(l.variant !== "text" || s.value === 1))
        return u === s.value - 1 ? "60%" : void 0;
    }
    return (u, d) => (t(), n("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: oe(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(z, null, L(s.value, (c) => (t(), n("span", {
        key: c,
        "aria-hidden": "true",
        class: A(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: oe({
          width: i(c - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, el));
  }
}), tl = { class: "w-full border-collapse text-sm" }, al = { class: "bg-background sticky top-0 z-10" }, nl = {
  key: 0,
  class: "bg-muted/40"
}, ll = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, ol = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, sl = ["colspan"], rl = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, il = { class: "bg-muted/50" }, ul = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, dl = ["id", "checked", "indeterminate"], cl = ["onClick"], fl = {
  key: 0,
  class: "text-xs"
}, ml = {
  key: 1,
  class: "text-xs opacity-40"
}, pl = { key: 1 }, vl = ["aria-label", "onPointerdown"], gl = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, hl = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, bl = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, xl = {
  key: 1,
  class: "px-3 py-2.5"
}, yl = {
  key: 2,
  class: "px-2 py-2.5"
}, kl = {
  key: 0,
  class: "bg-muted/40"
}, $l = ["colspan"], wl = ["aria-expanded", "dusk", "onClick"], Cl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Sl = {
  key: 1,
  dusk: "group-header"
}, Ml = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Bl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, _l = ["id", "value", "checked", "disabled", "aria-label", "onClick"], zl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Al = ["aria-label", "onClick"], Pl = { class: "text-xs" }, Ol = {
  key: 1,
  class: "text-muted-foreground"
}, jl = { key: 2 }, Vl = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Ll = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, Tl = { key: 0 }, Dl = { class: "text-muted-foreground block text-[10px] font-medium" }, El = { class: "font-semibold tabular-nums" }, Il = { key: 1 }, Fl = 40, Nl = /* @__PURE__ */ O({
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
    function r(Z) {
      if (!Z || !a.groupBy)
        return "";
      if (Z.__group !== void 0 && Z.__group !== null)
        return String(Z.__group);
      const te = Z[a.groupBy.key];
      return te == null || te === "" ? "" : String(te);
    }
    function s(Z) {
      return a.groupBy ? Z === 0 ? !0 : r(a.rows[Z]) !== r(a.rows[Z - 1]) : !1;
    }
    function i(Z) {
      if (Z.__groupTitle)
        return String(Z.__groupTitle);
      const te = a.groupBy ? Z[a.groupBy.key] : null, X = te == null || te === "" ? "None" : String(te);
      return !a.groupBy || a.groupBy.titlePrefixed === !1 ? X : `${a.groupBy.label}: ${X}`;
    }
    const u = R(/* @__PURE__ */ new Set()), d = R(/* @__PURE__ */ new Set());
    function c(Z) {
      return a.groupBy?.collapsible ? u.value.has(Z) : !1;
    }
    function g(Z) {
      if (!a.groupBy?.collapsible)
        return;
      const te = new Set(d.value);
      te.add(Z), d.value = te;
      const X = new Set(u.value);
      X.has(Z) ? X.delete(Z) : X.add(Z), u.value = X;
    }
    function p(Z) {
      return a.groupBy?.collapsible ? !c(r(a.rows[Z])) : !0;
    }
    me(
      () => a.rows,
      (Z) => {
        if (!a.groupBy?.collapsible || !a.collapsedGroupsByDefault)
          return;
        const te = new Set(u.value);
        for (const X of Z) {
          const ue = r(X);
          ue !== "" && !d.value.has(ue) && te.add(ue);
        }
        u.value = te;
      },
      { immediate: !0 }
    );
    const h = R(null), C = R(null);
    function k(Z, te) {
      h.value = Z, te.dataTransfer?.setData("text/plain", String(Z)), te.dataTransfer && (te.dataTransfer.effectAllowed = "move");
    }
    function $() {
      h.value = null, C.value = null;
    }
    function S(Z) {
      return h.value === null || C.value !== Z ? "" : h.value > Z ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function b(Z, te) {
      h.value !== null && (te.preventDefault(), C.value = Z);
    }
    function v(Z) {
      const te = h.value;
      if (h.value = null, C.value = null, te === null || te === Z)
        return;
      const X = a.rows.map((ie) => ie[a.rowKey]), [ue] = X.splice(te, 1);
      X.splice(Z, 0, ue), f("reorder", X);
    }
    const f = l;
    function B(Z, te) {
      !a.rowClickable || a.reordering || te.button !== 0 || te.metaKey || te.ctrlKey || te.shiftKey || te.altKey || te.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || f("row-click", Z);
    }
    const _ = R(null), P = Na(), F = y(() => a.columns.filter((Z) => !a.hidden?.has(Z.key))), I = y(() => {
      const Z = F.value.find((te) => te.sticky);
      return Z ? Z.key : a.stickyFirst && F.value.length > 0 ? F.value[0].key : null;
    });
    function ae(Z) {
      return I.value === Z.key;
    }
    function H() {
      return a.selectable && !a.reordering ? `${Fl}px` : "0";
    }
    function q(Z) {
      const te = a.columnWidths?.[Z.key];
      return typeof te == "number" ? te : Z.width;
    }
    function W(Z) {
      const te = q(Z), X = ae(Z), ue = {};
      return te !== void 0 && (ue.width = `${te}px`, ue.minWidth = `${te}px`, ue.maxWidth = `${te}px`), X && (ue.left = H()), Object.keys(ue).length ? ue : void 0;
    }
    function le(Z) {
      return a.resizable ? Z.resizable !== !1 : !1;
    }
    function ne(Z, te) {
      if (!le(Z))
        return;
      te.preventDefault(), te.stopPropagation();
      const X = te.clientX, ue = q(Z) ?? 160, ie = te.currentTarget;
      try {
        ie.setPointerCapture(te.pointerId);
      } catch {
      }
      function Re(et) {
        const xt = ue + (et.clientX - X);
        f("resize", Z.key, Math.min(1200, Math.max(48, xt)));
      }
      function Ee(et) {
        try {
          ie.releasePointerCapture(et.pointerId);
        } catch {
        }
        ie.removeEventListener("pointermove", Re), ie.removeEventListener("pointerup", Ee), ie.removeEventListener("pointercancel", Ee);
      }
      ie.addEventListener("pointermove", Re), ie.addEventListener("pointerup", Ee), ie.addEventListener("pointercancel", Ee);
    }
    const J = y(() => F.value.some((Z) => !!Z.group)), G = y(() => {
      const Z = [];
      for (const te of F.value) {
        const X = te.group ?? null, ue = Z[Z.length - 1];
        ue && ue.label === X ? ue.span += 1 : Z.push({ label: X, span: 1, key: `${X ?? "loose"}-${te.key}` });
      }
      return Z;
    });
    function M(Z) {
      const te = Z[a.rowKey];
      return te == null || te === "" ? null : te;
    }
    function E(Z) {
      const te = M(Z);
      return te !== null && !!a.selected?.has(te);
    }
    const V = R(null);
    function Y(Z) {
      return a.rows.findIndex((te) => {
        const X = M(te);
        return X !== null && X === Z;
      });
    }
    function ve(Z, te) {
      const X = M(Z);
      if (X === null)
        return;
      const ue = te.shiftKey, ie = !!a.selected?.has(X);
      if (ue && V.value !== null && V.value !== X) {
        const Re = Y(V.value), Ee = Y(X);
        if (Re !== -1 && Ee !== -1) {
          const et = Math.min(Re, Ee), xt = Math.max(Re, Ee), Fa = !ie;
          for (let dt = et; dt <= xt; dt++) {
            if (!p(dt))
              continue;
            const yt = M(a.rows[dt]);
            if (yt === null)
              continue;
            !!a.selected?.has(yt) !== Fa && f("toggle-row", yt);
          }
          V.value = X;
          return;
        }
      }
      f("toggle-row", X), V.value = X;
    }
    const re = y(
      () => a.rows.map((Z) => M(Z)).filter((Z) => Z !== null)
    ), K = y(
      () => re.value.length > 0 && re.value.every((Z) => a.selected?.has(Z))
    ), Q = y(
      () => !K.value && re.value.some((Z) => a.selected?.has(Z))
    );
    function xe(Z) {
      return Z.sortKey ?? Z.key;
    }
    function Qe(Z) {
      return a.sort === xe(Z);
    }
    async function Da(Z, te, X) {
      try {
        await navigator.clipboard.writeText(String(X)), _.value = `${Z}-${te.key}`, setTimeout(() => _.value = null, 1200);
      } catch {
      }
    }
    const Ea = y(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function Yt(Z) {
      return a.summaries?.[Z] ?? null;
    }
    function Ia(Z) {
      const te = a.summaries?.[Z], X = a.summaryValues?.[Z];
      if (!te)
        return "";
      if (X == null)
        return "None";
      const ue = te.divideBy ? X / te.divideBy : X, ie = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: te.decimals,
        maximumFractionDigits: te.decimals
      }).format(ue);
      return `${te.prefix ?? ""}${ie}${te.suffix ?? ""}`;
    }
    return (Z, te) => (t(), n("div", {
      class: A(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", tl, [
        o("thead", al, [
          J.value ? (t(), n("tr", nl, [
            e.reordering ? (t(), n("th", ll)) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("th", ol)) : w("", !0),
            (t(!0), n(z, null, L(G.value, (X) => (t(), n("th", {
              key: X.key,
              colspan: X.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, m(X.label ?? ""), 9, sl))), 128)),
            Z.$slots.actions ? (t(), n("th", rl)) : w("", !0)
          ])) : w("", !0),
          o("tr", il, [
            e.reordering ? (t(), n("th", ul)) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: A(["w-10 border-b px-3 py-2.5", I.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
            }, [
              o("input", {
                id: `${x(P)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: K.value,
                indeterminate: Q.value,
                "aria-label": "Select all rows on this page",
                onClick: te[0] || (te[0] = he(() => {
                }, ["stop"])),
                onChange: te[1] || (te[1] = he((X) => f("toggle-page", !K.value), ["stop"]))
              }, null, 40, dl)
            ], 2)) : w("", !0),
            (t(!0), n(z, null, L(F.value, (X) => (t(), n("th", {
              key: X.key,
              class: A([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                ae(X) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: oe(W(X))
            }, [
              X.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ue) => f("sort", xe(X))
              }, [
                N(m(X.label) + " ", 1),
                Qe(X) ? (t(), n("span", fl, m(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", ml, "↕"))
              ], 8, cl)) : (t(), n("span", pl, m(X.label), 1)),
              le(X) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${X.label}`,
                onPointerdown: (ue) => ne(X, ue)
              }, null, 40, vl)) : w("", !0)
            ], 6))), 128)),
            Z.$slots.actions ? (t(), n("th", gl, [...te[2] || (te[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : w("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", hl, [
          (t(), n(z, null, L(6, (X) => o("tr", {
            key: `skel-${X}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", bl, [
              D(_e, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("td", xl, [
              D(_e, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
            (t(!0), n(z, null, L(F.value, (ue) => (t(), n("td", {
              key: ue.key,
              class: "px-3 py-2.5"
            }, [
              D(_e, { variant: "text" })
            ]))), 128)),
            Z.$slots.actions ? (t(), n("td", yl, [
              D(_e, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : w("", !0)
          ])), 64))
        ])) : (t(), n("tbody", {
          key: 1,
          class: A(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, L(e.rows, (X, ue) => (t(), n(z, {
            key: M(X) ?? `row-${ue}`
          }, [
            e.groupBy && s(ue) ? (t(), n("tr", kl, [
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
                  onClick: (ie) => g(r(X))
                }, [
                  o("span", Cl, m(c(r(X)) ? "▸" : "▾"), 1),
                  N(" " + m(i(X)), 1)
                ], 8, wl)) : (t(), n("span", Sl, m(i(X)), 1))
              ], 8, $l)
            ])) : w("", !0),
            p(ue) ? (t(), n("tr", {
              key: 1,
              class: A(["group pk-row border-b transition-colors hover:bg-muted/50", [
                E(X) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && ue % 2 === 1 ? "bg-muted/20" : "",
                h.value === ue ? "opacity-40" : "",
                S(ue),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => k(ue, ie),
              onDragover: (ie) => b(ue, ie),
              onDrop: he((ie) => v(ue), ["prevent"]),
              onDragend: $,
              onContextmenu: (ie) => f("row-contextmenu", X, ie),
              onClick: (ie) => B(X, ie)
            }, [
              e.reordering ? (t(), n("td", Bl, [...te[3] || (te[3] = [
                Lt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : w("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: A(["px-3 py-2", I.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${x(P)}-row-${M(X) ?? ue}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: M(X) ?? void 0,
                  checked: E(X),
                  disabled: M(X) === null,
                  "aria-label": M(X) === null ? "This row has no id and cannot be selected" : `Select row ${M(X)}`,
                  onClick: he((ie) => ve(X, ie), ["stop"])
                }, null, 8, _l)
              ], 2)) : w("", !0),
              (t(!0), n(z, null, L(F.value, (ie) => (t(), n("td", {
                key: ie.key,
                class: A(["px-3 py-2 whitespace-nowrap", [
                  ie.cellClass,
                  ae(ie) ? "bg-background sticky z-[1] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)] group-hover:bg-muted/50" : ""
                ]]),
                style: oe(W(ie))
              }, [
                U(Z.$slots, `cell:${ie.key}`, {
                  row: X,
                  value: X[ie.key],
                  column: ie
                }, () => [
                  ie.copyable ? (t(), n("span", zl, [
                    N(m(X[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (Re) => Da(String(X[e.rowKey]), ie, X[ie.key])
                    }, [
                      o("span", Pl, m(_.value === `${X[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Al)
                  ])) : X[ie.key] == null || X[ie.key] === "" ? (t(), n("span", Ol, "None")) : (t(), n("span", jl, m(X[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              Z.$slots.actions ? (t(), n("td", Vl, [
                U(Z.$slots, "actions", { row: X }, void 0, !0)
              ])) : w("", !0)
            ], 42, Ml)) : w("", !0)
          ], 64))), 128))
        ], 2)),
        Ea.value ? (t(), n("tfoot", Ll, [
          o("tr", null, [
            e.selectable ? (t(), n("td", Tl)) : w("", !0),
            (t(!0), n(z, null, L(e.columns, (X) => (t(), n(z, {
              key: `s-${X.key}`
            }, [
              e.hidden?.has(X.key) ? w("", !0) : (t(), n("td", {
                key: 0,
                class: A(["px-3 py-2 align-top text-sm whitespace-nowrap", X.cellClass])
              }, [
                Yt(X.key) ? (t(), n(z, { key: 0 }, [
                  o("span", Dl, m(Yt(X.key).label), 1),
                  o("span", El, m(Ia(X.key)), 1)
                ], 64)) : w("", !0)
              ], 2))
            ], 64))), 128)),
            Z.$slots.actions ? (t(), n("td", Il)) : w("", !0)
          ])
        ])) : w("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), T(_t, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, nt({ _: 2 }, [
        Z.$slots["clear-filters"] ? {
          name: "actions",
          fn: j(() => [
            U(Z.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), T(_t, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, nt({ _: 2 }, [
        Z.$slots["empty-actions"] ? {
          name: "actions",
          fn: j(() => [
            U(Z.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : w("", !0)
    ], 2));
  }
}), gt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, Rl = /* @__PURE__ */ gt(Nl, [["__scopeId", "data-v-c0f7d40f"]]), Ul = ["aria-label"], Hl = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, Kl = { class: "text-base font-semibold" }, ql = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Gl = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, Wl = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, ot = /* @__PURE__ */ O({
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
    const u = R(!1);
    function d(p) {
      u.value = p.target === p.currentTarget;
    }
    function c(p) {
      u.value && p.target === p.currentTarget && !a.busy && r("close"), u.value = !1;
    }
    function g(p) {
      if (!a.open)
        return;
      if (p.key === "Escape" && !a.busy) {
        p.stopPropagation(), r("close");
        return;
      }
      if (p.key !== "Tab" || !s.value)
        return;
      const h = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (h.length === 0)
        return;
      const C = h[0], k = h[h.length - 1];
      p.shiftKey && document.activeElement === C ? (p.preventDefault(), k.focus()) : !p.shiftKey && document.activeElement === k && (p.preventDefault(), C.focus());
    }
    return me(
      () => a.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", g), je(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", g), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", g)), (p, h) => (t(), T(Je, { to: "body" }, [
      D(Fe, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: d,
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
              o("div", Hl, [
                o("h2", Kl, m(e.title), 1),
                e.description ? (t(), n("p", ql, m(e.description), 1)) : w("", !0)
              ]),
              o("div", Gl, [
                U(p.$slots, "default")
              ]),
              o("div", Wl, [
                U(p.$slots, "footer")
              ])
            ], 8, Ul)
          ], 32)) : w("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Zl = 160, We = /* @__PURE__ */ O({
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
    const a = e, r = R(!1), s = R(null), i = R(null), u = R({ top: 0, left: 0, minWidth: 0 }), d = R(null);
    let c = null;
    function g(B) {
      !a.dismissOnPanelClick || B.target?.closest("input, select, textarea, label, [data-keep-open]") || $();
    }
    async function p() {
      c && (clearTimeout(c), c = null), !r.value && (r.value = !0, await je(), S());
    }
    function h() {
      c = setTimeout($, 180);
    }
    async function C() {
      d.value = null, r.value = !r.value, r.value && (await je(), S());
    }
    async function k(B, _) {
      d.value = { x: B, y: _ }, r.value = !0, await je(), S();
    }
    function $() {
      r.value = !1, d.value = null;
    }
    function S() {
      const B = s.value, _ = i.value;
      if (!B || !_)
        return;
      const P = _.getBoundingClientRect(), F = 8, I = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : B.getBoundingClientRect();
      let ae, H;
      if (a.placement === "bottom")
        ae = I.bottom + a.offset, ae + P.height > window.innerHeight - F && I.top - P.height - a.offset > F && (ae = I.top - P.height - a.offset), H = a.align === "end" && !d.value ? I.right - P.width : I.left;
      else {
        ae = I.top;
        const q = a.placement === "right", W = I.right + a.offset + P.width < window.innerWidth - F, le = I.left - a.offset - P.width > F;
        H = (q ? W || !le : !le && W) ? I.right + a.offset : I.left - a.offset - P.width;
      }
      H = Math.min(Math.max(F, H), window.innerWidth - P.width - F), ae = Math.min(Math.max(F, ae), window.innerHeight - P.height - F), u.value = { top: ae, left: H, minWidth: Math.max(I.width, Zl) };
    }
    function b(B) {
      if (!r.value)
        return;
      const _ = B.target;
      s.value?.contains(_) || i.value?.contains(_) || (_ instanceof Element ? _ : _.parentElement)?.closest("[data-pk-overlay]") || $();
    }
    function v(B) {
      B.key === "Escape" && r.value && (B.stopPropagation(), $());
    }
    function f() {
      if (r.value) {
        if (d.value) {
          $();
          return;
        }
        S();
      }
    }
    return ge(() => {
      document.addEventListener("pointerdown", b), document.addEventListener("keydown", v), window.addEventListener("scroll", f, !0), window.addEventListener("resize", f);
    }), ke(() => {
      c && clearTimeout(c), document.removeEventListener("pointerdown", b), document.removeEventListener("keydown", v), window.removeEventListener("scroll", f, !0), window.removeEventListener("resize", f);
    }), l({ close: $, openAt: k }), (B, _) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: _[2] || (_[2] = (P) => e.hoverable && p()),
      onPointerleave: _[3] || (_[3] = (P) => e.hoverable && h())
    }, [
      o("div", { onClick: C }, [
        U(B.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(Je, { to: "body" }, [
        D(Fe, {
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
              style: oe({
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
              onPointerenter: _[0] || (_[0] = (P) => e.hoverable && p()),
              onPointerleave: _[1] || (_[1] = (P) => e.hoverable && h()),
              onClick: g
            }, [
              U(B.$slots, "panel", { close: $ })
            ], 38)) : w("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), Jl = ["disabled"], Yl = { class: "py-0.5" }, Xl = ["disabled", "onClick"], Ql = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, eo = ["d"], to = ["disabled"], ao = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, no = ["d"], lo = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, oo = ["disabled", "onClick"], so = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ro = ["d"], io = { class: "text-muted-foreground text-sm" }, uo = { class: "text-foreground font-medium tabular-nums" }, co = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, fo = ["disabled"], mo = { class: "text-muted-foreground text-sm" }, po = { class: "text-foreground font-medium tabular-nums" }, vo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, go = ["disabled"], j4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), u = y(() => a.allMatching ? a.total : a.count), d = y(() => u.value !== void 0), c = y(() => d.value && u.value === 0), g = y(() => a.actions.filter((v) => !v.destructive)), p = y(() => a.actions.filter((v) => v.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function C(v) {
      return h[v.color ?? "gray"] ?? h.gray;
    }
    function k(v) {
      if (v.confirmation) {
        s.value = v;
        return;
      }
      r("run", v.key);
    }
    function $() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function S() {
      i.value = !1, r("export");
    }
    const b = (v) => new Intl.NumberFormat().format(v);
    return (v, f) => (t(), n(z, null, [
      D(We, null, {
        trigger: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...f[5] || (f[5] = [
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
          ])], 8, Jl)
        ]),
        panel: j(() => [
          o("div", Yl, [
            (t(!0), n(z, null, L(g.value, (B) => (t(), n("button", {
              key: B.key,
              type: "button",
              role: "menuitem",
              class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(B)]),
              disabled: e.busy,
              onClick: (_) => k(B)
            }, [
              (t(), n("svg", Ql, [
                o("path", {
                  d: x(ce)(B.icon)
                }, null, 8, eo)
              ])),
              N(" " + m(B.label), 1)
            ], 10, Xl))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: f[0] || (f[0] = (B) => i.value = !0)
            }, [
              (t(), n("svg", ao, [
                o("path", {
                  d: x(ce)("download")
                }, null, 8, no)
              ])),
              f[6] || (f[6] = N(" Export CSV ", -1))
            ], 8, to)) : w("", !0),
            p.value.length ? (t(), n("div", lo, [
              (t(!0), n(z, null, L(p.value, (B) => (t(), n("button", {
                key: B.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (_) => k(B)
              }, [
                (t(), n("svg", so, [
                  o("path", {
                    d: x(ce)(B.icon ?? "trash")
                  }, null, 8, ro)
                ])),
                N(" " + m(B.label), 1)
              ], 8, oo))), 128))
            ])) : w("", !0)
          ])
        ]),
        _: 1
      }),
      D(ot, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: f[2] || (f[2] = (B) => s.value = null)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: f[1] || (f[1] = (B) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: A([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || c.value,
            onClick: $
          }, m(s.value?.label), 11, fo)
        ]),
        default: j(() => [
          o("p", io, [
            f[7] || (f[7] = N(" This will affect ", -1)),
            o("span", uo, [
              d.value ? (t(), n(z, { key: 1 }, [
                N(m(b(u.value)) + " record" + m(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            f[8] || (f[8] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", co, " Nothing matches the current filters - there is nothing to " + m(s.value?.label?.toLowerCase()) + ". ", 1)) : w("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(ot, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: f[4] || (f[4] = (B) => i.value = !1)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: f[3] || (f[3] = (B) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || c.value,
            onClick: S
          }, " Export CSV ", 8, go)
        ]),
        default: j(() => [
          o("p", mo, [
            f[9] || (f[9] = N(" This will export ", -1)),
            o("span", po, [
              d.value ? (t(), n(z, { key: 1 }, [
                N(m(b(u.value)) + " record" + m(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            f[10] || (f[10] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", vo, " Nothing matches the current filters - there is nothing to export. ")) : w("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), ho = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, bo = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, xo = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, yo = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, ko = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", ho, [
      l.$slots.tabs ? (t(), n("div", bo, [
        U(l.$slots, "tabs")
      ])) : w("", !0),
      l.$slots.title ? (t(), n("div", xo, [
        U(l.$slots, "title")
      ])) : w("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: A(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        U(l.$slots, "toolbar")
      ], 2)) : w("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", yo, [
        U(l.$slots, "pagination")
      ])) : w("", !0)
    ]));
  }
}), Ce = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Qt = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", V4 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", $o = ["aria-expanded"], wo = ["aria-label", "onClick"], Co = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, So = { class: "ml-auto flex shrink-0 items-center gap-1" }, Mo = {
  key: 0,
  class: "border-b p-1"
}, Bo = ["placeholder"], _o = { class: "max-h-60 overflow-y-auto p-1" }, zo = ["aria-selected", "onMouseenter", "onClick"], Ao = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Rt = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), u = R(null), d = R(!1), c = R(""), g = R(0), p = R({ top: 0, left: 0, width: 0 }), h = y(
      () => a.modelValue.map(
        (H) => a.options.find((q) => q.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), C = y(() => a.searchable ?? a.options.length > 6), k = y(() => {
      const H = new Set(a.modelValue), q = c.value.trim().toLowerCase();
      return a.options.filter((W) => !H.has(W.value)).filter((W) => q ? W.label.toLowerCase().includes(q) : !0);
    }), $ = y(() => a.max !== null && a.modelValue.length >= a.max);
    function S() {
      const H = s.value, q = i.value;
      if (!H || !q)
        return;
      const W = H.getBoundingClientRect(), le = q.getBoundingClientRect(), ne = 8;
      let J = W.bottom + 4;
      J + le.height > window.innerHeight - ne && W.top - le.height - 4 > ne && (J = W.top - le.height - 4), p.value = {
        top: J,
        left: Math.min(Math.max(ne, W.left), window.innerWidth - W.width - ne),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: W.width
      };
    }
    async function b() {
      a.disabled || d.value || (d.value = !0, c.value = "", g.value = 0, await je(), S(), u.value?.focus());
    }
    function v() {
      d.value = !1, c.value = "";
    }
    function f() {
      d.value ? v() : b();
    }
    function B(H) {
      $.value || (r("update:modelValue", [...a.modelValue, H.value]), c.value = "", g.value = 0, je(() => {
        S(), u.value?.focus();
      }));
    }
    function _(H) {
      r(
        "update:modelValue",
        a.modelValue.filter((q) => q !== H)
      ), je(S);
    }
    function P() {
      r("update:modelValue", []), je(S);
    }
    function F(H) {
      if (!a.disabled) {
        if (H.key === "Escape" && d.value) {
          H.stopPropagation(), v();
          return;
        }
        if (H.key === "Backspace" && c.value === "" && a.modelValue.length > 0) {
          _(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!d.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), b();
          return;
        }
        if (d.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), g.value = Math.min(g.value + 1, k.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), g.value = Math.max(g.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const q = k.value[g.value];
            q && B(q);
          }
        }
      }
    }
    function I(H) {
      if (!d.value)
        return;
      const q = H.target;
      s.value?.contains(q) || i.value?.contains(q) || v();
    }
    function ae() {
      d.value && S();
    }
    return me(k, (H) => {
      g.value > H.length - 1 && (g.value = Math.max(0, H.length - 1));
    }), ge(() => {
      document.addEventListener("pointerdown", I), window.addEventListener("scroll", ae, !0), window.addEventListener("resize", ae);
    }), ke(() => {
      document.removeEventListener("pointerdown", I), window.removeEventListener("scroll", ae, !0), window.removeEventListener("resize", ae);
    }), (H, q) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: F
    }, [
      o("div", {
        class: A(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          d.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": d.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: f
      }, [
        (t(!0), n(z, null, L(h.value, (W) => (t(), n("span", {
          key: W.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          N(m(W.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${W.label}`,
            onClick: he((le) => _(W.value), ["stop"])
          }, [...q[1] || (q[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, wo)
        ]))), 128)),
        h.value.length === 0 ? (t(), n("span", Co, m(e.placeholder), 1)) : w("", !0),
        o("span", So, [
          h.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: he(P, ["stop"])
          }, " Clear ")) : w("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...q[2] || (q[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, $o),
      (t(), T(Je, { to: "body" }, [
        D(Fe, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: j(() => [
            d.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: oe({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              C.value ? (t(), n("div", Mo, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": q[0] || (q[0] = (W) => c.value = W),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: F
                }, null, 40, Bo), [
                  [Se, c.value]
                ])
              ])) : w("", !0),
              o("div", _o, [
                (t(!0), n(z, null, L(k.value, (W, le) => (t(), n("button", {
                  key: W.value,
                  type: "button",
                  class: A(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", le === g.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": le === g.value,
                  onMouseenter: (ne) => g.value = le,
                  onClick: (ne) => B(W)
                }, m(W.label), 43, zo))), 128)),
                k.value.length === 0 ? (t(), n("p", Ao, [
                  $.value ? (t(), n(z, { key: 0 }, [
                    N("You have selected the maximum.")
                  ], 64)) : c.value ? (t(), n(z, { key: 1 }, [
                    N("Nothing matches “" + m(c.value) + "”.", 1)
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
}), Po = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Oo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, jo = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function at(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Po, Oo[l], jo[a], e.class].filter(Boolean).join(" ");
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
    const l = e, a = y(
      () => at({ variant: l.variant, size: l.size, class: l.class })
    ), r = y(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), T(Me(e.as), {
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
}), Vo = { class: "flex items-center gap-2" }, Lo = ["onUpdate:modelValue", "onChange"], To = ["value"], Do = ["onUpdate:modelValue"], Eo = ["value"], Io = ["onUpdate:modelValue"], Fo = ["onUpdate:modelValue", "multiple"], No = ["value"], Ro = ["onUpdate:modelValue", "type"], Uo = ["aria-label", "onClick"], Ho = { class: "flex items-center gap-2" }, Ko = /* @__PURE__ */ O({
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
      (f) => {
        i.value = f ? structuredClone(f) : s();
      }
    );
    const u = (f) => "rules" in f, d = y(() => Object.keys(a.fields));
    function c(f) {
      const B = f ? a.fields[f]?.kind : void 0;
      return B ? a.operators[B] ?? [] : [];
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
      const f = d.value[0];
      i.value.rules.push({
        field: f,
        operator: c(f)[0],
        value: void 0
      }), p();
    }
    function C() {
      i.value.rules.push(s()), p();
    }
    function k(f) {
      i.value.rules.splice(f, 1), p();
    }
    function $(f) {
      f.operator = c(f.field)[0], f.value = void 0, p();
    }
    const S = y(() => a.depth + 1 < a.maxDepth);
    function b() {
      i.value = s(), p(), r("apply", null);
    }
    function v() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (f, B) => {
      const _ = Tt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: A(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", Vo, [
          pe(o("select", {
            "onUpdate:modelValue": B[0] || (B[0] = (P) => i.value.logic = P),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...B[1] || (B[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [qe, i.value.logic]
          ]),
          B[2] || (B[2] = o("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, L(i.value.rules, (P, F) => (t(), n("div", {
          key: F,
          class: "flex items-start gap-2"
        }, [
          u(P) ? (t(), T(_, {
            key: 0,
            modelValue: i.value.rules[F],
            "onUpdate:modelValue": [(I) => i.value.rules[F] = I, p],
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
              (t(!0), n(z, null, L(d.value, (I) => (t(), n("option", {
                key: I,
                value: I
              }, m(e.fields[I].label), 9, To))), 128))
            ], 40, Lo), [
              [qe, P.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (I) => P.operator = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(z, null, L(c(P.field), (I) => (t(), n("option", {
                key: I,
                value: I
              }, m(g[I] ?? I), 9, Eo))), 128))
            ], 40, Do), [
              [qe, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? pe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (I) => P.value = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...B[3] || (B[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, Io)), [
              [qe, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? pe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (I) => P.value = I,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(z, null, L(e.fields[P.field].options, (I) => (t(), n("option", {
                key: I,
                value: I
              }, m(I), 9, No))), 128))
            ], 40, Fo)), [
              [qe, P.value]
            ]) : pe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (I) => P.value = I,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, Ro)), [
              [Ra, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(P) ? "group" : "rule"}`,
            onClick: (I) => k(F)
          }, " × ", 8, Uo)
        ]))), 128)),
        o("div", Ho, [
          D(de, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: j(() => [...B[4] || (B[4] = [
              N("Add rule", -1)
            ])]),
            _: 1
          }),
          S.value ? (t(), T(de, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: C
          }, {
            default: j(() => [...B[5] || (B[5] = [
              N(" Add group ", -1)
            ])]),
            _: 1
          })) : w("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            B[8] || (B[8] = o("span", { class: "flex-1" }, null, -1)),
            D(de, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: b
            }, {
              default: j(() => [...B[6] || (B[6] = [
                N(" Clear ", -1)
              ])]),
              _: 1
            }),
            D(de, {
              type: "button",
              size: "sm",
              onClick: v
            }, {
              default: j(() => [...B[7] || (B[7] = [
                N(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : w("", !0)
        ])
      ], 2);
    };
  }
}), Ut = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(x(fa), se({ "data-slot": "sheet" }, x(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(De(d)))
      ]),
      _: 3
    }, 16));
  }
});
function ee(...e) {
  return Gn(qn(e));
}
function L4(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const qo = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(Dt), se({
      "data-slot": "sheet-overlay",
      class: x(ee)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, x(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ht = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(Et), null, {
      default: j(() => [
        D(qo),
        D(x(It), se({
          "data-slot": "sheet-content",
          class: x(ee)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...u.$attrs, ...x(i) }), {
          default: j(() => [
            U(u.$slots, "default"),
            D(x(Ye), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                D(x(Ft), { class: "size-4" }),
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
}), Go = { class: "flex flex-col gap-2" }, Wo = { class: "flex items-center gap-2 md:hidden" }, Zo = { class: "relative min-w-0 flex-1" }, Jo = ["placeholder", "title", "aria-label"], Yo = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, Xo = { class: "flex max-h-[85vh] flex-col" }, Qo = { class: "flex-1 overflow-y-auto px-4 py-3" }, es = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, ts = { class: "text-xs font-medium" }, as = ["value", "onChange"], ns = ["value"], ls = { class: "mb-4" }, os = { class: "flex flex-col gap-1" }, ss = ["disabled", "onClick"], rs = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, is = {
  key: 1,
  class: "mb-4"
}, us = { class: "flex flex-col gap-1" }, ds = ["onClick"], cs = { class: "border-t p-4" }, fs = ["disabled"], ms = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, ps = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, vs = ["placeholder", "title", "aria-label"], gs = ["aria-label"], hs = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, bs = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, xs = { class: "text-xs font-medium" }, ys = ["value", "onChange"], ks = ["value"], $s = { class: "grid grid-cols-2 gap-2" }, ws = ["value", "onChange"], Cs = ["value", "onChange"], Ss = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Ms = ["value", "onChange"], Bs = ["value", "onChange"], _s = {
  key: 4,
  class: "flex items-center gap-2"
}, zs = ["aria-checked", "onClick"], As = { class: "text-xs" }, Ps = ["onClick"], Os = ["value", "onChange"], js = ["value"], Vs = ["disabled", "onClick"], Ls = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Ts = ["disabled", "onClick"], Ds = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Es = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Is = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, Fs = ["aria-pressed", "aria-label", "title", "onClick"], Ns = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Rs = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Us = ["aria-pressed", "aria-label", "title"], Hs = ["aria-label", "title"], Ks = { class: "flex flex-col gap-0.5 p-1" }, qs = ["onClick"], Gs = ["onClick"], Ws = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, Zs = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Js = ["dusk"], Ys = ["aria-label", "onClick"], Xs = /* @__PURE__ */ O({
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
    let u;
    me(i, (G) => {
      clearTimeout(u), u = setTimeout(() => {
        G !== a.search && r("update:search", G);
      }, 250);
    });
    const d = R({ ...a.filters });
    me(
      () => a.filters,
      (G) => {
        d.value = { ...G };
      },
      { deep: !0 }
    );
    const c = y(
      () => a.filterSchema.filter(
        (G) => a.filters[G.key] !== null && a.filters[G.key] !== void 0
      ).length
    ), g = y(() => JSON.stringify(d.value) !== JSON.stringify(a.filters)), p = y(() => a.search !== "" || c.value > 0), h = y(() => a.indicators.length ? a.indicators : a.filterSchema.filter((G) => a.filters[G.key] !== null && a.filters[G.key] !== void 0).map((G) => ({
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
      const M = d.value[G.key];
      return Array.isArray(M) ? M : M == null ? [] : [M];
    }
    function b(G) {
      return S(G).filter(
        (M) => typeof M == "string" || typeof M == "number"
      );
    }
    function v(G) {
      return H(G).flatMap(
        (M) => typeof M.value == "string" || typeof M.value == "number" ? [{ value: M.value, label: M.label }] : []
      );
    }
    function f(G, M) {
      d.value = { ...d.value, [G.key]: M === "" ? null : M };
    }
    function B(G, M) {
      const E = d.value[G.key];
      if (typeof E != "string" || !E.includes(".."))
        return "";
      const [V, Y] = E.split("..");
      return M === "from" ? V ?? "" : Y ?? "";
    }
    function _(G, M, E) {
      const V = M === "from" ? E : B(G, "from"), Y = M === "to" ? E : B(G, "to");
      d.value = {
        ...d.value,
        [G.key]: V && Y ? `${V}..${Y}` : null
      };
    }
    function P(G, M, E) {
      const V = M === "from" ? E : B(G, "from"), Y = M === "to" ? E : B(G, "to");
      d.value = {
        ...d.value,
        [G.key]: V || Y ? `${V}..${Y}` : null
      };
    }
    function F(G) {
      r("apply-filters", { ...d.value }), G();
    }
    function I(G, M) {
      d.value[G] = M, r("apply-filters", { ...d.value });
    }
    function ae() {
      d.value = Object.fromEntries(a.filterSchema.map((G) => [G.key, null]));
    }
    function H(G) {
      return G.type === "boolean" ? [
        { value: !0, label: G.trueLabel ?? "Yes" },
        { value: !1, label: G.falseLabel ?? "No" }
      ] : G.type === "daterange" ? Object.entries(G.presets ?? {}).map(([M, E]) => ({
        value: M,
        label: E
      })) : (G.options ?? []).map(
        (M) => typeof M == "object" && M !== null && "value" in M ? { value: M.value, label: M.label } : { value: M, label: String(M) }
      );
    }
    const q = R(new Set(a.hidden));
    me(
      () => a.hidden,
      (G) => {
        q.value = new Set(G);
      },
      { deep: !0 }
    );
    function W(G) {
      const M = new Set(q.value);
      M.has(G) ? M.delete(G) : M.add(G), q.value = M, r("apply-columns", [...M]);
    }
    function le() {
      q.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function ne() {
      r("apply-filters", { ...d.value }), s.value = !1;
    }
    function J() {
      i.value = "", r("clear");
    }
    return (G, M) => (t(), n("div", Go, [
      o("div", Wo, [
        o("div", Zo, [
          M[9] || (M[9] = o("svg", {
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
            "onUpdate:modelValue": M[0] || (M[0] = (E) => i.value = E),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: A(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Ce)])
          }, null, 10, Jo), [
            [Se, i.value]
          ])
        ]),
        o("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: M[1] || (M[1] = (E) => s.value = !0)
        }, [
          M[10] || (M[10] = o("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            o("path", { d: "M3 5h18M6 12h12M10 19h4" })
          ], -1)),
          M[11] || (M[11] = N(" Tools ", -1)),
          c.value ? (t(), n("span", Yo, m(c.value), 1)) : w("", !0)
        ]),
        D(Ut, {
          open: s.value,
          "onUpdate:open": M[4] || (M[4] = (E) => s.value = E)
        }, {
          default: j(() => [
            D(Ht, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", Xo, [
                  M[16] || (M[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", Qo, [
                    e.filterSchema.length ? (t(), n("div", es, [
                      o("div", { class: "flex items-center justify-between" }, [
                        M[12] || (M[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: ae
                        }, " Reset ")
                      ]),
                      (t(!0), n(z, null, L(e.filterSchema, (E) => (t(), n("div", {
                        key: `mobile-${E.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", ts, m(E.label), 1),
                        E.type !== "multiselect" && E.type !== "querybuilder" && E.type !== "daterange" && E.type !== "numberrange" && E.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: d.value[E.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (V) => f(E, V.target.value)
                        }, [
                          M[13] || (M[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(z, null, L(H(E), (V) => (t(), n("option", {
                            key: String(V.value),
                            value: V.value
                          }, m(V.label), 9, ns))), 128))
                        ], 40, as)) : w("", !0)
                      ]))), 128))
                    ])) : w("", !0),
                    o("div", ls, [
                      M[14] || (M[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", os, [
                        (t(!0), n(z, null, L(e.columns, (E) => (t(), n("button", {
                          key: `mobile-col-${E.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: E.locked,
                          onClick: (V) => W(E.key)
                        }, [
                          o("span", null, m(E.label), 1),
                          q.value.has(E.key) ? w("", !0) : (t(), n("span", rs, "On"))
                        ], 8, ss))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", is, [
                      M[15] || (M[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", us, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: M[2] || (M[2] = (E) => {
                            C(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), n(z, null, L(e.groups, (E) => (t(), n("button", {
                          key: E.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (V) => {
                            C(E.key), s.value = !1;
                          }
                        }, m(E.label), 9, ds))), 128))
                      ])
                    ])) : w("", !0)
                  ]),
                  o("div", cs, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !g.value,
                      onClick: ne
                    }, " Apply filters ", 8, fs)) : w("", !0),
                    p.value ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: M[3] || (M[3] = (E) => {
                        J(), s.value = !1;
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
      o("div", ms, [
        o("div", ps, [
          M[18] || (M[18] = o("svg", {
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
            "onUpdate:modelValue": M[5] || (M[5] = (E) => i.value = E),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: A(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Ce)])
          }, null, 10, vs), [
            [Se, i.value]
          ]),
          i.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: M[6] || (M[6] = (E) => i.value = "")
          }, [...M[17] || (M[17] = [
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
        e.filterSchema.length ? (t(), T(We, {
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
              M[19] || (M[19] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              c.value ? (t(), n("span", hs, m(c.value), 1)) : w("", !0)
            ], 10, gs)
          ]),
          panel: j(({ close: E }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              M[20] || (M[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: ae
              }, " Reset ")
            ]),
            M[23] || (M[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", bs, [
              (t(!0), n(z, null, L(e.filterSchema, (V) => (t(), n("div", {
                key: V.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", xs, m(V.label), 1),
                $(V) ? (t(), T(Rt, {
                  key: 0,
                  "model-value": b(V),
                  options: v(V),
                  placeholder: `Any ${V.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Y) => d.value[V.key] = Y.length ? Y : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : V.type === "querybuilder" ? (t(), T(Ko, {
                  key: 1,
                  "model-value": d.value[V.key] ?? null,
                  fields: V.fields ?? {},
                  operators: V.operators ?? {},
                  "max-depth": V.maxDepth ?? 5,
                  onApply: (Y) => I(V.key, Y)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : V.type === "daterange" ? (t(), n(z, { key: 2 }, [
                  o("select", {
                    value: typeof d.value[V.key] == "string" && !String(d.value[V.key]).includes("..") ? d.value[V.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Y) => f(V, Y.target.value)
                  }, [
                    M[21] || (M[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, L(H(V), (Y) => (t(), n("option", {
                      key: String(Y.value),
                      value: Y.value
                    }, m(Y.label), 9, ks))), 128))
                  ], 40, ys),
                  o("div", $s, [
                    o("input", {
                      type: "date",
                      value: B(V, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => _(
                        V,
                        "from",
                        Y.target.value
                      )
                    }, null, 40, ws),
                    o("input", {
                      type: "date",
                      value: B(V, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => _(
                        V,
                        "to",
                        Y.target.value
                      )
                    }, null, 40, Cs)
                  ])
                ], 64)) : V.type === "numberrange" ? (t(), n("div", Ss, [
                  o("input", {
                    type: "number",
                    value: B(V, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => P(
                      V,
                      "from",
                      Y.target.value
                    )
                  }, null, 40, Ms),
                  o("input", {
                    type: "number",
                    value: B(V, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => P(
                      V,
                      "to",
                      Y.target.value
                    )
                  }, null, 40, Bs)
                ])) : V.type === "boolean" ? (t(), n("div", _s, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": d.value[V.key] === !0,
                    class: A([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      d.value[V.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Y) => f(V, d.value[V.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: A(["bg-background absolute top-0.5 size-4 rounded-full transition-all", d.value[V.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, zs),
                  o("span", As, m(V.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: A([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      d.value[V.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Y) => f(V, d.value[V.key] === !1 ? null : !1)
                  }, m(V.falseLabel ?? "No") + " only ", 11, Ps)
                ])) : (t(), n("select", {
                  key: 5,
                  value: d.value[V.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Y) => f(V, Y.target.value)
                }, [
                  M[22] || (M[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, L(H(V), (Y) => (t(), n("option", {
                    key: String(Y.value),
                    value: Y.value
                  }, m(Y.label), 9, js))), 128))
                ], 40, Os))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !g.value,
              onClick: (V) => F(E)
            }, " Apply filters ", 8, Vs)
          ]),
          _: 1
        })) : w("", !0),
        D(We, { "dismiss-on-panel-click": !1 }, {
          trigger: j(() => [...M[24] || (M[24] = [
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
            M[27] || (M[27] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", Ls, [
              (t(!0), n(z, null, L(e.columns, (E) => (t(), n("button", {
                key: E.key,
                type: "button",
                class: A(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", E.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: E.locked,
                onClick: (V) => W(E.key)
              }, [
                q.value.has(E.key) ? (t(), n("span", Es)) : (t(), n("svg", Ds, [...M[25] || (M[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + m(E.label), 1)
              ], 10, Ts))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: le
              }, [...M[26] || (M[26] = [
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
        e.layouts.length > 1 ? (t(), n("div", Is, [
          (t(!0), n(z, null, L(e.layouts, (E) => (t(), n("button", {
            key: E,
            type: "button",
            class: A(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === E ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === E,
            "aria-label": E === "cards" ? "Card layout" : "Table layout",
            title: E === "cards" ? "Cards" : "Table",
            onClick: (V) => r("layout", E)
          }, [
            E === "table" ? (t(), n("svg", Ns, [...M[28] || (M[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", Rs, [...M[29] || (M[29] = [
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
          ], 10, Fs))), 128))
        ])) : w("", !0),
        e.reorderable ? (t(), n("button", {
          key: 2,
          type: "button",
          class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: M[7] || (M[7] = (E) => r("toggle-reorder"))
        }, [...M[30] || (M[30] = [
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
        ])], 10, Us)) : w("", !0),
        e.groups.length ? (t(), T(We, {
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
            }, [...M[31] || (M[31] = [
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
            ])], 10, Hs)
          ]),
          panel: j(({ close: E }) => [
            o("div", Ks, [
              o("button", {
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (V) => {
                  C(null), E();
                }
              }, " No grouping ", 10, qs),
              (t(!0), n(z, null, L(e.groups, (V) => (t(), n("button", {
                key: V.key,
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === V.key ? "text-primary font-medium" : ""]),
                onClick: (Y) => {
                  C(V.key), E();
                }
              }, m(V.label), 11, Gs))), 128))
            ])
          ]),
          _: 1
        })) : w("", !0),
        p.value ? (t(), n("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: J
        }, " Clear ")) : w("", !0),
        e.loading ? (t(), n("span", Ws, "Loading…")) : w("", !0)
      ]),
      h.value.length ? (t(), n("div", Zs, [
        (t(!0), n(z, null, L(h.value, (E) => (t(), n("span", {
          key: E.key + E.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${E.key}`
        }, [
          N(m(E.label) + " ", 1),
          E.removable !== !1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${E.label}`,
            onClick: (V) => k(E.key)
          }, [...M[32] || (M[32] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Ys)) : w("", !0)
        ], 8, Js))), 128)),
        h.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: M[8] || (M[8] = (E) => r("clear-filters"))
        }, " Clear all ")) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), Qs = { class: "min-w-0" }, er = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, tr = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, ar = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, nr = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, lr = { class: "w-full border-collapse text-sm" }, or = { class: "bg-muted/40" }, sr = { class: "divide-y" }, rr = ["href"], ir = {
  key: 1,
  class: "text-muted-foreground"
}, ur = {
  key: 0,
  class: "flex justify-center"
}, dr = ["disabled"], cr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, fr = ["href"], T4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = Vt(), i = y(() => a.columns.filter((C) => C.type !== "image")), u = y(() => !!s.actions), d = y(() => !!a.title || u.value), c = y(() => a.filterSchema.length > 0), g = y(
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
    return (C, k) => (t(), T(ko, null, nt({
      default: j(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", ar, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(_t, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, nt({ _: 2 }, [
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
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", nr, [
          o("table", lr, [
            o("thead", or, [
              o("tr", null, [
                (t(!0), n(z, null, L(i.value, ($) => (t(), n("th", {
                  key: $.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, m($.label), 1))), 128))
              ])
            ]),
            o("tbody", sr, [
              (t(!0), n(z, null, L(e.rows, ($, S) => (t(), n("tr", {
                key: $.id ?? S,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(z, null, L(i.value, (b) => (t(), n("td", {
                  key: b.key,
                  class: A(["px-3 whitespace-nowrap", [
                    b.mono ? "font-mono text-xs" : "",
                    b.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  U(C.$slots, `cell:${b.key}`, {
                    row: $,
                    value: $[b.key],
                    column: b
                  }, () => [
                    e.recordBase && $.id != null && b === i.value[0] ? (t(), n("a", {
                      key: 0,
                      href: `${e.recordBase}/${$.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, m(p(b, $[b.key])), 9, rr)) : h($[b.key]) ? (t(), n("span", ir, " None ")) : (t(), n(z, { key: 2 }, [
                      N(m(p(b, $[b.key])), 1)
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
      d.value ? {
        name: "title",
        fn: j(() => [
          o("div", Qs, [
            e.title ? (t(), n("h3", er, m(e.title), 1)) : w("", !0)
          ]),
          u.value ? (t(), n("div", tr, [
            U(C.$slots, "actions")
          ])) : w("", !0)
        ]),
        key: "0"
      } : void 0,
      c.value ? {
        name: "toolbar",
        fn: j(() => [
          D(Xs, {
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
        fn: j(() => [
          e.nextCursor ? (t(), n("div", ur, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: k[6] || (k[6] = ($) => r("load", e.nextCursor))
            }, m(e.loading ? "Loading…" : "Load more"), 9, dr)
          ])) : e.capped ? (t(), n("p", cr, [
            N(" Showing the first " + m(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, fr)) : (t(), n(z, { key: 1 }, [
              N("Open the full list to search or filter the rest.")
            ], 64))
          ])) : w("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), mr = { class: "flex items-center gap-2 overflow-x-auto" }, pr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gr = { class: "flex flex-col" }, hr = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, br = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, xr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, yr = /* @__PURE__ */ O({
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
    function u(c) {
      return a.failedStep !== null ? c < a.failedStep : c < a.activeStep;
    }
    function d(c) {
      return a.failedStep === c;
    }
    return (c, g) => (t(), n("ol", mr, [
      (t(!0), n(z, null, L(e.steps, (p, h) => (t(), n("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(Me(e.interactive ? "button" : "div"), se({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(h)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: h > e.activeStep } : {}, {
          onClick: (C) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: j(() => [
            o("span", {
              class: A(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              d(h) ? (t(), n("svg", pr, [...g[0] || (g[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(h) ? (t(), n("svg", vr, [...g[1] || (g[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                N(m(h + 1), 1)
              ], 64))
            ], 2),
            o("span", gr, [
              o("span", null, m(p.label), 1),
              p.description ? (t(), n("span", hr, m(p.description), 1)) : w("", !0)
            ]),
            e.hasError(h) ? (t(), n("span", br)) : w("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), n("span", xr)) : w("", !0)
      ]))), 128))
    ]));
  }
}), rt = /* @__PURE__ */ new Map();
function ye(e, l) {
  rt.set(e, l);
}
function kr(e) {
  return rt.get(e);
}
function D4(e) {
  return rt.has(e);
}
function E4() {
  return [...rt.keys()].sort();
}
function I4() {
  rt.clear();
}
class $r extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function F4(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function wr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function Cr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const Sr = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Mr = /* @__PURE__ */ O({
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
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), T(ot, {
      open: e.open,
      title: e.title,
      description: e.description,
      busy: e.processing,
      onClose: d[1] || (d[1] = (c) => r("close"))
    }, {
      footer: j(() => [
        D(de, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: d[0] || (d[0] = (c) => r("close"))
        }, {
          default: j(() => [...d[2] || (d[2] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(de, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            N(m(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          e.generalError ? (t(), n("p", Sr, m(e.generalError), 1)) : w("", !0),
          (t(!0), n(z, null, L(e.fields, (c) => (t(), T(Ze, {
            key: c.key,
            field: c,
            value: s.value[c.key],
            error: e.errors[c.key],
            processing: e.processing,
            onChange: (g) => s.value[c.key] = g
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
}), Br = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(Ja), se({ "data-slot": "checkbox" }, x(i), {
      class: x(ee)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j((c) => [
        D(x(Ya), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            U(u.$slots, "default", ze(De(c)), () => [
              D(x(ba), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ge = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(x(Xa), se({ "data-slot": "switch" }, x(s), {
      class: x(ee)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j(() => [
        D(x(Qa), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), _r = ["accept", "disabled"], zr = { class: "text-sm font-medium" }, Ar = { key: 0 }, Pr = { key: 1 }, Or = { class: "text-muted-foreground text-xs" }, jr = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Vr = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Lr = ["src"], Tr = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Dr = { class: "min-w-0 flex-1" }, Er = { class: "block truncate text-sm font-medium" }, Ir = { class: "text-muted-foreground text-xs" }, Fr = ["href"], Nr = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, $a = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), u = R(null), d = R(null), c = R(null), g = y(() => a.accept.map((B) => `.${B}`).join(",")), p = y(() => c.value ?? a.modelValue?.url ?? null), h = y(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(a.maxKilobytes * 1024)}`);
    function C(B) {
      if (!B)
        return "";
      const _ = ["B", "KB", "MB", "GB"];
      let P = B, F = 0;
      for (; P >= 1024 && F < _.length - 1; )
        P /= 1024, F++;
      return `${P.toFixed(P < 10 && F > 0 ? 1 : 0)} ${_[F]}`;
    }
    function k(B) {
      return B.split(".").pop()?.toLowerCase() ?? "";
    }
    function $(B) {
      return a.accept.length && !a.accept.includes(k(B.name)) ? `${k(B.name).toUpperCase() || "That"} files are not accepted here.` : B.size > a.maxKilobytes * 1024 ? `That file is ${C(B.size)}; the limit is ${C(a.maxKilobytes * 1024)}.` : null;
    }
    async function S(B) {
      const _ = B?.[0];
      if (!(!_ || a.disabled) && (d.value = $(_), !d.value)) {
        b(), a.image && _.type.startsWith("image/") && (c.value = URL.createObjectURL(_)), u.value = 0;
        try {
          const P = await a.upload(_, (F) => {
            u.value = F;
          });
          r("update:modelValue", P);
        } catch (P) {
          d.value = P instanceof Error ? P.message : "The upload failed.", b();
        } finally {
          u.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function b() {
      c.value && URL.revokeObjectURL(c.value), c.value = null;
    }
    async function v() {
      const B = a.modelValue;
      b(), d.value = null, r("update:modelValue", null), B && !B.url && a.discard && await a.discard(B.value).catch(() => {
      });
    }
    function f(B) {
      i.value = !1, S(B.dataTransfer?.files ?? null);
    }
    return (B, _) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", Vr, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Lr)) : (t(), n("span", Tr, m(k(e.modelValue.name) || "file"), 1)),
        o("span", Dr, [
          o("span", Er, m(e.modelValue.name), 1),
          o("span", Ir, [
            N(m(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              _[4] || (_[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Fr)
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
          onClick: v
        }, [..._[5] || (_[5] = [
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
        onDragover: _[1] || (_[1] = he((P) => i.value = !0, ["prevent"])),
        onDragleave: _[2] || (_[2] = he((P) => i.value = !1, ["prevent"])),
        onDrop: he(f, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: g.value,
          disabled: e.disabled,
          onChange: _[0] || (_[0] = (P) => S(P.target.files))
        }, null, 40, _r),
        _[3] || (_[3] = o("svg", {
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
        o("span", zr, [
          u.value === null ? (t(), n("span", Ar, "Drop a file or click to choose")) : (t(), n("span", Pr, "Uploading…"))
        ]),
        o("span", Or, m(h.value), 1),
        u.value !== null ? (t(), n("span", jr, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: oe({ width: `${u.value}%` })
          }, null, 4)
        ])) : w("", !0)
      ], 34)),
      d.value ? (t(), n("p", Nr, m(d.value), 1)) : w("", !0)
    ]));
  }
}), Rr = { class: "flex flex-col gap-2" }, Ur = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Hr = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Kr = { class: "flex flex-col gap-1" }, qr = ["onUpdate:modelValue", "disabled", "aria-label"], Gr = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Wr = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Zr = ["onUpdate:modelValue", "disabled", "aria-label"], Jr = ["disabled", "aria-label", "onClick"], Yr = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Xr = { class: "flex items-center gap-3" }, Qr = ["disabled"], ei = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, ti = /* @__PURE__ */ O({
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
    const u = R(d(a.modelValue));
    function d(S) {
      return S ? Object.entries(S).map(([b, v]) => ({
        uid: i++,
        key: b,
        value: v ?? ""
      })) : [];
    }
    me(
      () => a.modelValue,
      (S) => {
        JSON.stringify(S ?? null) !== JSON.stringify(c()) && (u.value = d(S));
      }
    );
    function c() {
      const S = {};
      for (const b of u.value) {
        const v = b.key.trim();
        v !== "" && (S[v] = b.value);
      }
      return Object.keys(S).length ? S : null;
    }
    function g() {
      r("update:modelValue", c());
    }
    const p = y(() => {
      const S = /* @__PURE__ */ new Map();
      for (const b of u.value) {
        const v = b.key.trim();
        v !== "" && S.set(v, (S.get(v) ?? 0) + 1);
      }
      return new Set([...S.entries()].filter(([, b]) => b > 1).map(([b]) => b));
    }), h = y(
      () => new Set(
        u.value.map((S) => S.key.trim()).filter((S) => S !== "" && !s.test(S))
      )
    ), C = y(() => a.maxPairs !== null && u.value.length >= a.maxPairs);
    function k() {
      C.value || a.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function $(S) {
      u.value = u.value.filter((b) => b.uid !== S), g();
    }
    return (S, b) => (t(), n("div", Rr, [
      u.value.length ? (t(), n("div", Ur, [
        o("div", Hr, [
          o("span", null, m(e.keyLabel), 1),
          o("span", null, m(e.valueLabel), 1),
          b[0] || (b[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, L(u.value, (v) => (t(), n("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", Kr, [
            pe(o("input", {
              "onUpdate:modelValue": (f) => v.key = f,
              type: "text",
              class: A([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(v.key.trim()) || h.value.has(v.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: g
            }, null, 42, qr), [
              [Se, v.key]
            ]),
            h.value.has(v.key.trim()) ? (t(), n("p", Gr, " Letters, numbers, underscores and dashes only. ")) : p.value.has(v.key.trim()) ? (t(), n("p", Wr, " Used twice - only the last value will be saved. ")) : w("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (f) => v.value = f,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: g
          }, null, 40, Zr), [
            [Se, v.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${v.key || "this entry"}`,
            onClick: (f) => $(v.uid)
          }, [...b[1] || (b[1] = [
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
          ])], 8, Jr)
        ]))), 128))
      ])) : (t(), n("p", Yr, " Nothing here yet. ")),
      o("div", Xr, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || C.value,
          onClick: k
        }, [
          b[2] || (b[2] = o("svg", {
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
          N(" Add " + m(e.keyLabel.toLowerCase()), 1)
        ], 8, Qr),
        e.maxPairs !== null ? (t(), n("p", ei, m(u.value.length) + " of " + m(e.maxPairs), 1)) : w("", !0)
      ])
    ]));
  }
}), ai = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, ni = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, li = ["disabled", "title", "aria-label", "onClick"], oi = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, si = ["d"], ri = ["disabled"], ii = ["contenteditable", "data-placeholder"], ui = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, di = /* @__PURE__ */ O({
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
    ], d = y(() => u.filter(($) => a.toolbar.includes($.id))), c = y(() => a.toolbar.includes("link")), g = R(0);
    function p() {
      const $ = s.value?.innerHTML ?? "", S = (s.value?.innerText ?? "").trim();
      g.value = S.length;
      const b = S === "" ? null : $;
      i = b, r("update:modelValue", b);
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
    return ge(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", g.value = s.value.innerText.trim().length);
    }), me(
      () => a.modelValue,
      ($) => {
        $ !== i && s.value && (s.value.innerHTML = $ ?? "", g.value = s.value.innerText.trim().length);
      }
    ), ($, S) => (t(), n("div", ai, [
      o("div", ni, [
        (t(!0), n(z, null, L(d.value, (b) => (t(), n("button", {
          key: b.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: b.label,
          "aria-label": b.label,
          onMousedown: S[0] || (S[0] = he(() => {
          }, ["prevent"])),
          onClick: (v) => h(b)
        }, [
          (t(), n("svg", oi, [
            o("path", {
              d: b.path
            }, null, 8, si)
          ]))
        ], 40, li))), 128)),
        c.value ? (t(), n("button", {
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
        ])], 40, ri)) : w("", !0)
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
        onPaste: k
      }, null, 42, ii),
      e.maxLength !== null ? (t(), n("div", ui, m(g.value) + " / " + m(e.maxLength), 1)) : w("", !0)
    ]));
  }
}), ci = /* @__PURE__ */ gt(di, [["__scopeId", "data-v-32c63bc7"]]), fi = {
  key: 1,
  class: "flex flex-col gap-2"
}, mi = { class: "flex items-center justify-between gap-2" }, pi = ["for"], vi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, gi = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs leading-snug"
}, hi = ["aria-label", "disabled"], bi = {
  key: 7,
  class: "flex flex-col gap-2"
}, xi = ["id", "value", "disabled"], yi = ["value"], ki = {
  key: 0,
  class: "relative"
}, $i = ["disabled"], wi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Ci = { class: "max-h-56 overflow-y-auto p-1" }, Si = ["onClick"], Mi = {
  key: 8,
  class: "relative"
}, Bi = ["disabled", "aria-invalid"], _i = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, zi = { class: "max-h-56 overflow-y-auto p-1" }, Ai = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Pi = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Oi = ["onClick"], ji = ["id", "value", "disabled", "aria-invalid"], Vi = ["value"], Li = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Ti = { class: "text-muted-foreground" }, Di = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Ei = { class: "text-muted-foreground" }, Ii = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Fi = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ni = ["aria-label", "disabled"], Ri = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Ui = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Hi = ["aria-label", "disabled"], Ki = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], qi = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Gi = ["aria-label", "disabled"], Wi = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Zi = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ji = ["aria-label", "disabled"], Yi = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Xi = ["disabled", "aria-pressed", "onClick"], Qi = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, eu = ["title", "disabled", "onClick"], tu = ["href"], au = {
  key: 19,
  class: "text-destructive text-xs leading-snug",
  role: "alert"
}, nu = {
  key: 20,
  class: "text-muted-foreground text-xs leading-snug"
}, lu = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Ze = /* @__PURE__ */ O({
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
    const a = Xt(() => import("./PkRepeater-J84jGe3T.js")), r = Xt(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = R(!1), d = R(""), c = R([]), g = R(!1), p = R(null);
    let h;
    me(d, (re) => {
      s.searchOptions && (clearTimeout(h), g.value = !0, h = setTimeout(async () => {
        try {
          c.value = await s.searchOptions(re);
        } catch {
        } finally {
          g.value = !1;
        }
      }, 200));
    });
    async function C() {
      if (!(s.processing || s.field.disabled) && (u.value = !0, c.value.length === 0 && s.searchOptions)) {
        g.value = !0;
        try {
          c.value = await s.searchOptions("");
        } finally {
          g.value = !1;
        }
      }
    }
    function k(re) {
      p.value = re.label, i("change", re.value), u.value = !1, d.value = "";
    }
    function $() {
      p.value = null, i("change", null);
    }
    const S = ct("panelPicker", null), b = ct("panelCreateOption", null), v = R(!1), f = R(!1), B = R({}), _ = R(null), P = y(() => wr(s.field)), F = y(() => Cr(s.field));
    function I() {
      B.value = {}, _.value = null, v.value = !0, u.value = !1;
    }
    function ae() {
      f.value || (v.value = !1, B.value = {}, _.value = null);
    }
    async function H(re) {
      if (b) {
        f.value = !0, B.value = {}, _.value = null;
        try {
          const K = await b.run(s.field.key, { ...re });
          k(K), v.value = !1;
        } catch (K) {
          K instanceof $r ? (B.value = K.fieldErrors, _.value = Object.keys(K.fieldErrors).length === 0 ? K.message : null) : _.value = K instanceof Error ? K.message : "Could not create that option.";
        } finally {
          f.value = !1;
        }
      }
    }
    const q = y(() => {
      if (!s.field.tableSelect || !S?.base)
        return;
      const re = S.returnUrl || "/";
      return `${S.base}/pick/${s.field.key}?return=${encodeURIComponent(re)}`;
    }), W = y(() => s.field.morphTo ?? []), le = y(() => {
      const re = s.value;
      return re && typeof re == "object" && !Array.isArray(re) ? re : { type: void 0, id: void 0 };
    });
    function ne(re) {
      i("change", { type: re || null, id: null });
    }
    function J(re) {
      i("change", { type: le.value.type ?? null, id: re });
    }
    function G(re) {
      p.value = re.label, J(re.value), u.value = !1, d.value = "";
    }
    ke(() => clearTimeout(h));
    const M = y(() => kr(s.field.type)), E = y(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function V(re) {
      if (re) {
        if (re.copy) {
          const K = s.value == null ? "" : String(s.value);
          K !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(K);
          return;
        }
        if (re.url && typeof window < "u") {
          window.open(re.url, "_blank", "noopener,noreferrer");
          return;
        }
        re.key && i("affix-action", re.key);
      }
    }
    const Y = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Ce}`;
    function ve(re) {
      const K = document.getElementById(`f-${s.field.key}`);
      if (!(K instanceof HTMLTextAreaElement) && !(K instanceof HTMLInputElement))
        return;
      const Q = K.selectionStart ?? K.value.length, xe = K.selectionEnd ?? Q;
      K.setRangeText(re, Q, xe, "end"), K.dispatchEvent(new Event("input", { bubbles: !0 })), K.focus();
    }
    return (re, K) => (t(), n(z, null, [
      e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", fi, [
        o("div", mi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: A(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            N(m(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", vi, "*")) : w("", !0)
          ], 10, pi),
          e.field.hint ? (t(), n("span", gi, [
            N(m(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: K[0] || (K[0] = (Q) => V(e.field.hintAction))
            }, m(e.field.hintAction.label ?? "⧉"), 9, hi)) : w("", !0)
          ])) : w("", !0)
        ]),
        M.value ? (t(), T(Me(M.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": K[1] || (K[1] = (Q) => i("change", Q))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T($a, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": K[2] || (K[2] = (Q) => i("change", Q))
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
          "onUpdate:modelValue": K[3] || (K[3] = (Q) => i("change", Q))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(x(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": K[4] || (K[4] = (Q) => i("change", Q))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(ci, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": K[5] || (K[5] = (Q) => i("change", Q))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(ti, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": K[6] || (K[6] = (Q) => i("change", Q))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Rt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": K[7] || (K[7] = (Q) => i("change", Q))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : W.value.length ? (t(), n("div", bi, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: le.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: A(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x(Ce)]),
            onChange: K[8] || (K[8] = (Q) => ne(Q.target.value))
          }, [
            K[24] || (K[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(z, null, L(W.value, (Q) => (t(), n("option", {
              key: Q.value,
              value: Q.value
            }, m(Q.label), 9, yi))), 128))
          ], 42, xi),
          le.value.type && e.searchOptions ? (t(), n("div", ki, [
            o("button", {
              type: "button",
              class: A(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Ce)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: A(p.value || le.value.id ? "" : "text-muted-foreground")
              }, m(p.value ?? (le.value.id ? String(le.value.id) : "Search…")), 3)
            ], 10, $i),
            u.value ? (t(), n("div", wi, [
              pe(o("input", {
                "onUpdate:modelValue": K[9] || (K[9] = (Q) => d.value = Q),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Se, d.value]
              ]),
              o("div", Ci, [
                (t(!0), n(z, null, L(c.value, (Q) => (t(), n("button", {
                  key: String(Q.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (xe) => G(Q)
                }, m(Q.label), 9, Si))), 128))
              ])
            ])) : w("", !0),
            u.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: K[10] || (K[10] = (Q) => u.value = !1)
            })) : w("", !0)
          ])) : w("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Mi, [
          o("button", {
            type: "button",
            class: A(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Ce)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: C
          }, [
            o("span", {
              class: A(p.value || e.value ? "" : "text-muted-foreground")
            }, m(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he($, ["stop"])
            }, " ✕ ")) : w("", !0)
          ], 10, Bi),
          u.value ? (t(), n("div", _i, [
            pe(o("input", {
              "onUpdate:modelValue": K[11] || (K[11] = (Q) => d.value = Q),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Se, d.value]
            ]),
            o("div", zi, [
              g.value ? (t(), n("p", Ai, " Searching… ")) : c.value.length === 0 ? (t(), n("p", Pi, " No matches ")) : w("", !0),
              (t(!0), n(z, null, L(c.value, (Q) => (t(), n("button", {
                key: String(Q.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (xe) => k(Q)
              }, m(Q.label), 9, Oi))), 128)),
              e.field.createOption && x(b) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: I
              }, [
                K[25] || (K[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + m(F.value), 1)
              ])) : w("", !0)
            ])
          ])) : w("", !0),
          u.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: K[12] || (K[12] = (Q) => u.value = !1)
          })) : w("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: A(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x(Ce)]),
          onChange: K[13] || (K[13] = (Q) => i("change", Q.target.value || null))
        }, [
          K[26] || (K[26] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(z, null, L(e.options, (Q) => (t(), n("option", {
            key: String(Q.value),
            value: Q.value
          }, m(Q.label), 9, Vi))), 128))
        ], 42, ji)) : e.field.type === "toggle" ? (t(), n("label", Li, [
          D(x(Ge), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": K[14] || (K[14] = (Q) => i("change", Q))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", Ti, m(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), n("label", Di, [
          D(x(Br), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": K[15] || (K[15] = (Q) => i("change", Q === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", Ei, m(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !E.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: A(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", x(Ce)]),
          onInput: K[16] || (K[16] = (Q) => i("change", Q.target.value))
        }, null, 42, Ii)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: A([
            "border-input flex overflow-hidden rounded-md border",
            x(Qt),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Fi, m(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: K[17] || (K[17] = (Q) => V(e.field.prefixAction))
          }, m(e.field.prefixAction.label ?? "⧉"), 9, Ni)) : w("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: K[18] || (K[18] = (Q) => i("change", Q.target.value))
          }, null, 40, Ri),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Ui, m(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: K[19] || (K[19] = (Q) => V(e.field.suffixAction))
          }, m(e.field.suffixAction.label ?? "⧉"), 9, Hi)) : w("", !0)
        ], 2)) : E.value ? (t(), n("div", {
          key: 15,
          class: A([
            "border-input flex h-9 overflow-hidden rounded-md border",
            x(Qt),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", qi, m(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: K[21] || (K[21] = (Q) => V(e.field.prefixAction))
          }, m(e.field.prefixAction.label ?? "⧉"), 9, Gi)) : w("", !0),
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
            class: A(lu),
            onInput: K[22] || (K[22] = (Q) => i("change", Q.target.value))
          }, null, 40, Wi),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Zi, m(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: K[23] || (K[23] = (Q) => V(e.field.suffixAction))
          }, m(e.field.suffixAction.label ?? "⧉"), 9, Ji)) : w("", !0)
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
          class: A(Y),
          onInput: K[20] || (K[20] = (Q) => i("change", Q.target.value))
        }, null, 40, Ki)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", Yi, [
          (t(!0), n(z, null, L(e.field.presets, (Q) => (t(), n("button", {
            key: Q,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: A([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              x(Ce),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == Q ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == Q
            ),
            onClick: (xe) => i("change", String(Q))
          }, m(Q), 11, Xi))), 128))
        ])) : w("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", Qi, [
          (t(!0), n(z, null, L(e.field.chips, (Q, xe) => (t(), n("button", {
            key: xe,
            type: "button",
            title: Q,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (Qe) => ve(String(xe))
          }, m(xe), 9, eu))), 128))
        ])) : w("", !0),
        q.value ? (t(), n("a", {
          key: 18,
          href: q.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, tu)) : w("", !0),
        e.error ? (t(), n("p", au, m(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", nu, m(e.field.help), 1)) : w("", !0)
      ])),
      e.field.createOption && x(b) ? (t(), T(Mr, {
        key: 2,
        open: v.value,
        title: P.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: f.value,
        errors: B.value,
        "general-error": _.value,
        onClose: ae,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : w("", !0)
    ], 64));
  }
}), ou = { class: "flex min-w-0 items-start gap-2.5" }, su = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, ru = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, iu = ["d"], uu = { class: "min-w-0" }, du = { class: "text-sm font-semibold" }, cu = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, fu = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, mu = { class: "border-b px-4 py-3.5 sm:px-5" }, pu = { class: "text-sm font-semibold" }, vu = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, gu = {
  key: 4,
  class: "min-w-0 space-y-4"
}, hu = {
  key: 7,
  class: "flex flex-col gap-3"
}, bu = { class: "text-sm font-medium" }, xu = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, yu = {
  key: 0,
  class: "mb-1 font-medium"
}, ku = ["onClick"], $u = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, wu = { class: "flex items-center justify-between gap-3 border-t p-4" }, Cu = ["disabled"], wa = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), u = R(0), d = y(
      () => (a.node.children ?? []).map((v) => ({
        label: v.label ?? "",
        description: v.description
      }))
    ), c = y(() => a.depth === 0), g = y(() => {
      const v = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, f = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        v[a.node.align ?? "start"] ?? "items-start",
        f[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = y(() => {
      const v = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return v[a.node.tone ?? "info"] ?? v.info;
    }), h = y(() => {
      const v = a.node.columns ?? 1;
      return v >= 3 ? "sm:grid-cols-3" : v === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function C(v) {
      const f = v.children?.length ?? 1;
      return f >= 3 ? "md:grid-cols-3" : f === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function k(v = 1) {
      return v >= 4 ? "md:col-span-4" : v === 3 ? "md:col-span-3" : v === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function $(v) {
      const f = [], B = (_) => {
        _.component === "field" && _.key && f.push(_.key), _.children?.forEach(B);
      };
      return B(v), f.some((_) => a.errors[_]);
    }
    function S(v) {
      if (v.hidden)
        return !1;
      const f = v.visibleWhen;
      return f ? a.values[f.field] == f.value : !0;
    }
    function b(v) {
      if (a.upload)
        return (f, B) => a.upload(v, f, B);
    }
    return (v, f) => {
      const B = Tt("SchemaNode", !0);
      return e.node.component === "field" && S(e.node) ? (t(), T(Ze, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (_) => e.searchOptions(e.node.key, _) : void 0,
        upload: b(e.node.key),
        discard: e.discard,
        onChange: f[0] || (f[0] = (_) => r("change", e.node.key, _)),
        onAffixAction: f[1] || (f[1] = (_) => r("affix-action", e.node.key, _))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && S(e.node) ? (t(), n("section", {
        key: 1,
        class: A(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: A(["flex items-start justify-between gap-3", [
            c.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: f[2] || (f[2] = (_) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", ou, [
            e.node.icon ? (t(), n("div", su, [
              (t(), n("svg", ru, [
                o("path", {
                  d: x(ce)(e.node.icon)
                }, null, 8, iu)
              ]))
            ])) : w("", !0),
            o("div", uu, [
              o("h3", du, m(e.node.label), 1),
              e.node.description ? (t(), n("p", cu, m(e.node.description), 1)) : w("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...f[24] || (f[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : w("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [h.value, c.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (_, P) => (t(), T(B, {
            key: P,
            node: _,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: A(_.span && _.span >= 2 ? "sm:col-span-2" : ""),
            onChange: f[3] || (f[3] = (F, I) => r("change", F, I)),
            onAffixAction: f[4] || (f[4] = (F, I) => r("affix-action", F, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "card" && S(e.node) ? (t(), n("section", fu, [
        o("header", mu, [
          o("h3", pu, m(e.node.title), 1),
          e.node.description ? (t(), n("p", vu, m(e.node.description), 1)) : w("", !0)
        ]),
        o("div", {
          class: A(["grid grid-cols-1 gap-4 px-4 py-4", h.value])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (_, P) => (t(), T(B, {
            key: P,
            node: _,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: f[5] || (f[5] = (F, I) => r("change", F, I)),
            onAffixAction: f[6] || (f[6] = (F, I) => r("affix-action", F, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && S(e.node) ? (t(), n("div", {
        key: 3,
        class: A(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (_, P) => (t(), T(B, {
          key: P,
          node: _,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: A(_.component === "column" ? k(_.span) : ""),
          onChange: f[7] || (f[7] = (F, I) => r("change", F, I)),
          onAffixAction: f[8] || (f[8] = (F, I) => r("affix-action", F, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && S(e.node) ? (t(), n("div", gu, [
        (t(!0), n(z, null, L(e.node.children ?? [], (_, P) => (t(), T(B, {
          key: P,
          node: _,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: f[9] || (f[9] = (F, I) => r("change", F, I)),
          onAffixAction: f[10] || (f[10] = (F, I) => r("affix-action", F, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), n("div", {
        key: 5,
        class: A(["grid grid-cols-1 gap-4", h.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (_, P) => (t(), T(B, {
          key: P,
          node: _,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: f[11] || (f[11] = (F, I) => r("change", F, I)),
          onAffixAction: f[12] || (f[12] = (F, I) => r("affix-action", F, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 6,
        class: A(["flex", g.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (_, P) => (t(), T(B, {
          key: P,
          node: _,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: f[13] || (f[13] = (F, I) => r("change", F, I)),
          onAffixAction: f[14] || (f[14] = (F, I) => r("affix-action", F, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", hu, [
        o("legend", bu, m(e.node.label), 1),
        e.node.description ? (t(), n("p", xu, m(e.node.description), 1)) : w("", !0),
        o("div", {
          class: A(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (_, P) => (t(), T(B, {
            key: P,
            node: _,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: f[15] || (f[15] = (F, I) => r("change", F, I)),
            onAffixAction: f[16] || (f[16] = (F, I) => r("affix-action", F, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 8,
        role: "note",
        class: A(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), n("p", yu, m(e.node.title), 1)) : w("", !0),
        o("p", null, m(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: A(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", c.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (_, P) => (t(), n("button", {
            key: P,
            type: "button",
            class: A([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === P ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (F) => i.value = P
          }, [
            N(m(_.label) + " ", 1),
            $(_) ? (t(), n("span", $u)) : w("", !0)
          ], 10, ku))), 128))
        ], 2),
        (t(!0), n(z, null, L(e.node.children ?? [], (_, P) => pe((t(), n("div", {
          key: P,
          class: A(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(_.children ?? [], (F, I) => (t(), T(B, {
            key: I,
            node: F,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: f[17] || (f[17] = (ae, H) => r("change", ae, H)),
            onAffixAction: f[18] || (f[18] = (ae, H) => r("affix-action", ae, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ne, i.value === P]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 10,
        class: A(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        D(yr, {
          class: A(["p-4", c.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (_) => $((e.node.children ?? [])[_]),
          "onUpdate:activeStep": f[19] || (f[19] = (_) => u.value = _)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, L(e.node.children ?? [], (_, P) => pe((t(), n("div", {
          key: P,
          class: A(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(_.children ?? [], (F, I) => (t(), T(B, {
            key: I,
            node: F,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: f[20] || (f[20] = (ae, H) => r("change", ae, H)),
            onAffixAction: f[21] || (f[21] = (ae, H) => r("affix-action", ae, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ne, u.value === P]
        ])), 128)),
        o("div", wu, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: f[22] || (f[22] = (_) => u.value--)
          }, " Back ", 8, Cu),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: f[23] || (f[23] = (_) => u.value++)
          }, " Next ")) : w("", !0)
        ])
      ], 2)) : w("", !0);
    };
  }
}), N4 = /* @__PURE__ */ O({
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
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), T(ot, {
      open: e.open,
      title: e.title,
      busy: e.processing,
      onClose: d[2] || (d[2] = (c) => r("close"))
    }, {
      footer: j(() => [
        D(de, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: d[1] || (d[1] = (c) => r("close"))
        }, {
          default: j(() => [...d[3] || (d[3] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(de, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            N(m(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          (t(!0), n(z, null, L(e.form?.nodes ?? [], (c, g) => (t(), T(wa, {
            key: g,
            node: c,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: d[0] || (d[0] = (p, h) => s.value[p] = h)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), Su = ["title"], Mu = ["aria-label"], Bu = ["d"], _u = { class: "sr-only" }, zu = /* @__PURE__ */ O({
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
    }, s = y(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = y(() => l.icons[s.value] ?? l.defaultIcon), u = y(() => a[i.value] ?? a.dot), d = y(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), c = y(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (g, p) => (t(), n("span", {
      class: "inline-flex items-center",
      title: c.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: A(["size-4", d.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": c.value
      }, [
        o("path", { d: u.value }, null, 8, Bu)
      ], 10, Mu)),
      o("span", _u, m(c.value), 1)
    ], 8, Su));
  }
}), Au = ["aria-label"], Pu = ["fill"], R4 = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, L(a.value, (u) => (t(), n("svg", {
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
        }, null, 8, Pu)
      ]))), 128))
    ], 8, Au));
  }
}), Ou = ["src"], ju = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Vu = /* @__PURE__ */ O({
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
      const u = typeof l.src == "string" ? l.src.trim() : "";
      return u === "" ? null : /^(https?:)?\/\//i.test(u) ? u : null;
    }), i = y(() => {
      const u = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return u === "" ? "?" : u.split(/\s+/).slice(0, 2).map((d) => d[0]?.toUpperCase() ?? "").join("");
    });
    return (u, d) => (t(), n("span", {
      class: A(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (c) => a.value = !0)
      }, null, 40, Ou)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        N(m(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", ju, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : w("", !0)
    ], 2));
  }
}), Lu = {
  key: 0,
  class: "text-muted-foreground"
}, Tu = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Du = {
  key: 0,
  class: "font-mono text-xs"
}, Eu = {
  key: 1,
  class: "sr-only"
}, Iu = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), n("span", Lu, "-")) : (t(), n("span", Tu, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: oe({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Du, m(r.value), 1)) : (t(), n("span", Eu, m(r.value), 1))
    ]));
  }
}), Fu = { class: "inline-flex items-center" }, Nu = ["checked", "aria-label"], Ru = { class: "sr-only" }, U4 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("span", Fu, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Nu),
      o("span", Ru, m(r.value), 1)
    ]));
  }
}), Uu = {
  key: 0,
  class: "text-muted-foreground"
}, Hu = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, H4 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", Hu, m(a.value), 1)) : (t(), n("span", Uu, "—"));
  }
}), Ku = {
  key: 0,
  class: "font-mono text-xs"
}, qu = {
  key: 1,
  class: "text-muted-foreground"
}, Gu = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, K4 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", Ku, m(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", qu, "—")) : (t(), n("span", Gu, m(a.value.length) + " " + m(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Wu = ["data-variant"], Zu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ue = /* @__PURE__ */ O({
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
      () => [Zu, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: A(r.value)
    }, [
      U(s.$slots, "default")
    ], 10, Wu));
  }
}), Ju = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Yu = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, q4 = /* @__PURE__ */ O({
  __name: "TagsCell",
  props: {
    value: {},
    limit: { default: null },
    separator: { default: "," }
  },
  setup(e) {
    const l = e;
    function a(u, d) {
      if (u == null || u === "")
        return [];
      if (Array.isArray(u))
        return u.map((c) => c == null ? "" : String(c).trim()).filter((c) => c !== "");
      if (typeof u == "string") {
        const c = u.trim();
        if (c.startsWith("["))
          try {
            const g = JSON.parse(c);
            if (Array.isArray(g))
              return a(g, d);
          } catch {
          }
        return c.split(d).map((g) => g.trim()).filter((g) => g !== "");
      }
      return [String(u)];
    }
    const r = y(() => a(l.value, l.separator)), s = y(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = y(() => Math.max(0, r.value.length - s.value.length));
    return (u, d) => r.value.length === 0 ? (t(), n("span", Ju, "None")) : (t(), n("span", Yu, [
      (t(!0), n(z, null, L(s.value, (c) => (t(), T(Ue, {
        key: c,
        variant: "secondary"
      }, {
        default: j(() => [
          N(m(c), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), T(Ue, {
        key: 0,
        variant: "outline"
      }, {
        default: j(() => [
          N("+" + m(i.value), 1)
        ]),
        _: 1
      })) : w("", !0)
    ]));
  }
}), Xu = ["aria-checked", "aria-label", "title", "disabled"], Qu = ["value", "disabled"], ed = ["value"], G4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = y(() => a.value === !0 || a.value === 1 || a.value === "1"), i = y(() => a.busy || a.disabled), u = y(
      () => s.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function d() {
      i.value || r("change", !s.value);
    }
    function c(g) {
      const p = g.target.value;
      p !== String(a.value ?? "") && r("change", p);
    }
    return (g, p) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: A(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: he(d, ["stop"])
    }, [
      o("span", {
        class: A(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Xu)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = he(() => {
      }, ["stop"])),
      onChange: c
    }, [
      (t(!0), n(z, null, L(e.options, (h, C) => (t(), n("option", {
        key: C,
        value: C
      }, m(h), 9, ed))), 128))
    ], 40, Qu));
  }
}), Kt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function td(e) {
  return e != null && e !== "";
}
function ad(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function W4(e) {
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
      cellClass: ad(s),
      group: s.group
    }))
  ), a = y(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = a.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), c = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return Kt[c] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const nd = ["disabled", "aria-label", "aria-busy"], ld = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, od = ["d"], sd = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, rd = ["disabled", "onClick"], id = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, ud = ["d"], dd = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Z4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = y(() => a.busy || a.disabled), i = y(() => String(a.value ?? "")), u = y(() => `Select ${(a.label || "value").trim().toLowerCase()}`);
    function d(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function c(h) {
      const C = a.colors[d(h)] ?? a.defaultColor ?? "neutral";
      return Kt[C] ?? "outline";
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
      e.disabled ? (t(), T(Ue, {
        key: 1,
        variant: c(e.value),
        class: "capitalize"
      }, {
        default: j(() => [
          N(m(g(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(We, {
        key: 0,
        align: "start"
      }, {
        trigger: j(() => [
          o("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: s.value,
            "aria-label": u.value,
            "aria-busy": e.busy
          }, [
            D(Ue, {
              variant: c(e.value),
              class: "capitalize"
            }, {
              default: j(() => [
                N(m(g(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", ld, [
              o("path", {
                d: x(ce)("chevron-down")
              }, null, 8, od)
            ]))
          ], 8, nd)
        ]),
        panel: j(({ close: k }) => [
          o("div", sd, m(u.value), 1),
          (t(!0), n(z, null, L(e.options, ($, S) => (t(), n("button", {
            key: S,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (b) => p(String(S), k)
          }, [
            D(Ue, {
              variant: c(S),
              class: "capitalize"
            }, {
              default: j(() => [
                N(m($), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(S) === i.value ? (t(), n("svg", id, [
              o("path", {
                d: x(ce)("check")
              }, null, 8, ud)
            ])) : (t(), n("span", dd))
          ], 8, rd))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), cd = { class: "flex items-center justify-end" }, fd = ["aria-label"], md = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, pd = ["d"], vd = ["href"], gd = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hd = ["d"], bd = ["disabled", "onClick"], xd = ["d"], yd = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, kd = ["disabled", "onClick"], $d = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wd = ["d"], J4 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(null), u = R(null), d = y(() => r.groups.flatMap((b) => b.actions)), c = y(() => d.value.filter((b) => !b.destructive)), g = y(() => d.value.filter((b) => b.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h(b) {
      return p[b.color ?? "gray"] ?? p.gray;
    }
    const C = y(() => d.value.length === 0);
    function k(b) {
      s("run", b);
    }
    function $(b) {
      C.value || (b.preventDefault(), i.value?.openAt(b.clientX, b.clientY));
    }
    function S(b) {
      if (b.key !== "ArrowDown" && b.key !== "ArrowUp")
        return;
      const v = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (v.length === 0)
        return;
      b.preventDefault();
      const f = v.indexOf(document.activeElement), B = b.key === "ArrowDown" ? 1 : -1, _ = (f + B + v.length) % v.length;
      v[_]?.focus();
    }
    return l({ openContextMenu: $ }), (b, v) => (t(), n("div", cd, [
      C.value ? w("", !0) : (t(), T(We, {
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
            (t(), n("svg", md, [
              o("path", {
                d: x(ce)("more-vertical")
              }, null, 8, pd)
            ]))
          ], 8, fd)
        ]),
        panel: j(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: S
          }, [
            (t(!0), n(z, null, L(c.value, (f) => (t(), n(z, {
              key: f.key
            }, [
              f.link ? (t(), n("a", {
                key: 0,
                href: f.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(f)])
              }, [
                (t(), n("svg", gd, [
                  o("path", {
                    d: x(ce)(f.icon)
                  }, null, 8, hd)
                ])),
                N(" " + m(f.label), 1)
              ], 10, vd)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(f)]),
                disabled: e.busy === f.key,
                onClick: (B) => k(f)
              }, [
                (t(), n("svg", {
                  class: A(["size-4 shrink-0", e.busy === f.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: x(ce)(f.icon)
                  }, null, 8, xd)
                ], 2)),
                N(" " + m(f.label), 1)
              ], 10, bd))
            ], 64))), 128)),
            g.value.length ? (t(), n("div", yd, [
              (t(!0), n(z, null, L(g.value, (f) => (t(), n("button", {
                key: f.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === f.key,
                onClick: (B) => k(f)
              }, [
                (t(), n("svg", $d, [
                  o("path", {
                    d: x(ce)(f.icon ?? "trash")
                  }, null, 8, wd)
                ])),
                N(" " + m(f.label), 1)
              ], 8, kd))), 128))
            ])) : w("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), zt = {
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
}, At = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, ft = 12, mt = 20, Cd = [0, 0.25, 0.5, 0.75, 1], qt = "alxtexhpanel.appearance", Oe = {
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
}, Ie = R({ ...Oe });
let ea = !1;
const Sd = "alxtexhpanel.appearance.vars";
function Pt(e) {
  return e.theme === "dark";
}
const ta = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, aa = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function Md(e) {
  const l = zt[e.primary] ?? zt.slate, a = At[e.surface] ?? At.neutral, r = a.chroma, s = a.hue, u = Pt(e) ? {
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
    "--pk-row-padding": ta[e.density] ?? ta.comfortable,
    "--pk-form-gap": aa[e.density] ?? aa.comfortable
  };
}
function Gt() {
  if (typeof window > "u")
    return { ...Oe };
  try {
    const e = localStorage.getItem(qt);
    if (!e)
      return { ...Oe };
    const l = { ...Oe, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Oe.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? Oe.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < ft || l.fontSize > mt) && (l.fontSize = Oe.fontSize), l;
  } catch {
    return { ...Oe };
  }
}
function Y4(e) {
  const l = Gt(), a = e ? { ...l, ...e } : l;
  if (Ie.value = a, Ot(a), e)
    try {
      localStorage.setItem(qt, JSON.stringify(a));
    } catch {
    }
}
let Ca = null;
function X4(e) {
  Ca = e;
}
let Sa = {};
function Bd(e) {
  if (Sa = e, !(typeof document > "u") && !Gt().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Ot(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...Md(e), ...e.primaryChosen ? {} : Sa };
  l.classList.toggle("dark", Pt(e));
  for (const [r, s] of Object.entries(a))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Sd,
      JSON.stringify({ dark: Pt(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function Ma() {
  function e(r) {
    Ot(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Ie.value = { ...Ie.value, ...r, ...s };
    try {
      localStorage.setItem(qt, JSON.stringify(Ie.value));
    } catch {
    }
    e(Ie.value), Ca?.({ ...r, ...s });
  }
  function a() {
    l({ ...Oe });
  }
  return ge(() => {
    ea || (ea = !0, Ie.value = Gt(), Ot(Ie.value));
  }), {
    appearance: y(() => Ie.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: zt,
    SURFACE_TINTS: At,
    FONT_SIZE_MIN: ft,
    FONT_SIZE_MAX: mt,
    RADIUS_OPTIONS: Cd
  };
}
const _d = { class: "flex items-center justify-between border-b px-4 py-3" }, zd = { class: "flex items-center gap-2" }, Ad = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Pd = { class: "flex flex-col gap-2" }, Od = { class: "grid grid-cols-8 gap-2" }, jd = ["title", "aria-label", "aria-pressed", "onClick"], Vd = { class: "flex flex-col gap-2" }, Ld = { class: "grid grid-cols-8 gap-2" }, Td = ["title", "aria-label", "aria-pressed", "onClick"], Dd = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Ed = { class: "flex flex-col gap-2" }, Id = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Fd = ["aria-pressed", "aria-label", "onClick"], Nd = { class: "text-sm font-semibold" }, Rd = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Ud = ["onClick"], Hd = { class: "flex flex-col gap-2" }, Kd = { class: "flex items-center justify-between" }, qd = { class: "text-muted-foreground text-xs tabular-nums" }, Gd = { class: "flex items-center gap-2" }, Wd = ["disabled"], Zd = ["min", "max", "value"], Jd = ["disabled"], Q4 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = Ma(), d = R(!1), c = y(() => l.value.sidebarSide === "right"), g = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], h = [
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
    function S(b, v) {
      return `oklch(0.72 ${v * 3} ${b})`;
    }
    return (b, v) => (t(), n(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: v[0] || (v[0] = (f) => d.value = !0)
      }, [...v[7] || (v[7] = [
        Lt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Je, { to: "body" }, [
        D(Fe, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
            d.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: v[1] || (v[1] = (f) => d.value = !1)
            })) : w("", !0)
          ]),
          _: 1
        }),
        D(Fe, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": c.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": c.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: j(() => [
            d.value ? (t(), n("aside", {
              key: 0,
              class: A(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", c.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", _d, [
                v[9] || (v[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", zd, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...f) => x(r) && x(r)(...f))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: v[3] || (v[3] = (f) => d.value = !1)
                  }, [...v[8] || (v[8] = [
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
              o("div", Ad, [
                o("section", Pd, [
                  v[11] || (v[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", Od, [
                    (t(!0), n(z, null, L(x(s), (f, B) => (t(), n("button", {
                      key: B,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: oe({ background: f.value }),
                      title: f.label,
                      "aria-label": f.label,
                      "aria-pressed": x(l).primary === B,
                      onClick: (_) => x(a)({ primary: B })
                    }, [
                      x(l).primary === B ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: oe({ color: f.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...v[10] || (v[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : w("", !0)
                    ], 12, jd))), 128))
                  ])
                ]),
                o("section", Vd, [
                  v[13] || (v[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", Ld, [
                    (t(!0), n(z, null, L(x(i), (f, B) => (t(), n("button", {
                      key: B,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: oe({ background: S(f.hue, f.chroma) }),
                      title: f.label,
                      "aria-label": f.label,
                      "aria-pressed": x(l).surface === B,
                      onClick: (_) => x(a)({ surface: B })
                    }, [
                      x(l).surface === B ? (t(), n("svg", Dd, [...v[12] || (v[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : w("", !0)
                    ], 12, Td))), 128))
                  ])
                ]),
                o("section", Ed, [
                  v[14] || (v[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", Id, [
                    (t(!0), n(z, null, L(x(u), (f) => (t(), n("button", {
                      key: f,
                      type: "button",
                      class: A([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l).radius === f ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": x(l).radius === f,
                      "aria-label": `${f}rem radius`,
                      onClick: (B) => x(a)({ radius: f })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: oe({ borderRadius: `${Math.min(f, 0.5)}rem` })
                      }, null, 4),
                      N(" " + m(f), 1)
                    ], 10, Fd))), 128))
                  ])
                ]),
                (t(!0), n(z, null, L([
                  { label: "Color scheme", key: "theme", options: g },
                  { label: "Card style", key: "cardStyle", options: h },
                  { label: "Density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: C },
                  { label: "Content layout", key: "contentLayout", options: k },
                  { label: "Menu style", key: "menuStyle", options: $ }
                ], (f) => (t(), n("section", {
                  key: f.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", Nd, m(f.label), 1),
                  o("div", Rd, [
                    (t(!0), n(z, null, L(f.options, (B) => (t(), n("button", {
                      key: String(B.value),
                      type: "button",
                      class: A([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l)[f.key] === B.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (_) => x(a)({ [f.key]: B.value })
                    }, m(B.label), 11, Ud))), 128))
                  ])
                ]))), 128)),
                o("section", Hd, [
                  o("div", Kd, [
                    v[15] || (v[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", qd, m(x(l).fontSize) + "px", 1)
                  ]),
                  o("div", Gd, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize <= x(ft),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (f) => x(a)({ fontSize: x(l).fontSize - 1 }))
                    }, " − ", 8, Wd),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: x(ft),
                      max: x(mt),
                      value: x(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: v[5] || (v[5] = (f) => x(a)({
                        fontSize: Number(f.target.value)
                      }))
                    }, null, 40, Zd),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize >= x(mt),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (f) => x(a)({ fontSize: x(l).fontSize + 1 }))
                    }, " + ", 8, Jd)
                  ])
                ])
              ])
            ], 2)) : w("", !0)
          ]),
          _: 1
        }, 8, ["enter-from-class", "leave-to-class"])
      ]))
    ], 64));
  }
}), Yd = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Xd = { class: "flex items-stretch" }, Qd = ["href", "aria-current"], ec = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, tc = ["d"], ac = { class: "w-full truncate text-center" }, nc = {
  key: 0,
  class: "flex-1"
}, lc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, oc = ["d"], sc = { class: "w-full truncate text-center" }, $t = 5, e5 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.items.length <= $t ? a.items : a.items.slice(0, $t - 1)
    ), i = y(() => a.items.length > $t);
    function u(d) {
      return d === "/" ? a.current === "/" : a.current === d || a.current.startsWith(`${d}/`);
    }
    return (d, c) => (t(), n("nav", Yd, [
      o("ul", Xd, [
        (t(!0), n(z, null, L(s.value, (g) => (t(), n("li", {
          key: g.key,
          class: "flex-1"
        }, [
          o("a", {
            href: g.href,
            class: A([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(g.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(g.href) ? "page" : void 0
          }, [
            (t(), n("svg", ec, [
              o("path", {
                d: x(ce)(g.icon)
              }, null, 8, tc)
            ])),
            o("span", ac, m(g.title), 1)
          ], 10, Qd)
        ]))), 128)),
        i.value ? (t(), n("li", nc, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: c[0] || (c[0] = (g) => r("more"))
          }, [
            (t(), n("svg", lc, [
              o("path", {
                d: x(ce)("more-horizontal")
              }, null, 8, oc)
            ])),
            o("span", sc, m(e.moreLabel), 1)
          ])
        ])) : w("", !0)
      ])
    ]));
  }
}), rc = ["value"], ic = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", $e = /* @__PURE__ */ O({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    return (s, i) => (t(), n("input", {
      "data-slot": "input",
      value: a.modelValue ?? a.defaultValue,
      class: A([ic, a.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, rc));
  }
}), uc = ["for"], Be = /* @__PURE__ */ O({
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
    ], 10, uc));
  }
}), t5 = /* @__PURE__ */ O({
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
}), dc = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, cc = ["id", "name", "value", "disabled", "maxlength"], fc = ["data-active"], mc = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, pc = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!1), i = R(null), u = R("");
    ge(() => {
      a.autofocus && i.value?.focus();
    });
    const d = y(
      () => Array.from({ length: a.length }, (v, f) => a.modelValue[f] ?? "")
    ), c = y(() => Math.min(a.modelValue.length, a.length - 1));
    function g(v) {
      return v.replace(/\D/g, "").slice(0, a.length);
    }
    function p(v) {
      a.disabled || v.length !== a.length || u.value !== v && (u.value = v, r("complete", v));
    }
    function h(v) {
      const f = g(v);
      f !== a.modelValue && r("update:modelValue", f), p(f);
    }
    function C(v) {
      h(v.target.value);
    }
    function k(v) {
      h(v.target.value);
    }
    function $() {
      h(i.value?.value ?? "");
    }
    function S(v) {
      v.animationName === "pkOtpAutofillStart" && $();
    }
    me(
      () => a.modelValue,
      (v) => {
        v.length < a.length ? u.value = "" : p(v);
      }
    );
    let b;
    return ge(() => {
      b = window.setInterval(() => {
        if (a.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && $();
      }, 250);
    }), Ua(() => {
      b !== void 0 && window.clearInterval(b);
    }), (v, f) => (t(), n("div", dc, [
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
        onFocus: f[0] || (f[0] = (B) => s.value = !0),
        onBlur: f[1] || (f[1] = (B) => s.value = !1)
      }, null, 40, cc),
      (t(!0), n(z, null, L(d.value, (B, _) => (t(), n("div", {
        key: _,
        "data-slot": "input-otp-slot",
        "data-active": s.value && _ === c.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(m(B) + " ", 1),
        s.value && _ === c.value && B === "" ? (t(), n("div", mc, [...f[2] || (f[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : w("", !0)
      ], 8, fc))), 128))
    ]));
  }
}), a5 = /* @__PURE__ */ gt(pc, [["__scopeId", "data-v-560616ac"]]), vc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ve = /* @__PURE__ */ O({
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
      }, m(e.title), 3),
      e.description ? (t(), n("p", vc, m(e.description), 1)) : w("", !0)
    ], 2));
  }
}), gc = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, hc = { class: "min-w-0 space-y-1" }, bc = { class: "flex flex-wrap items-center gap-2.5" }, xc = { class: "text-2xl font-semibold tracking-tight" }, yc = {
  key: 0,
  class: "flex items-center gap-2"
}, kc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, $c = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, n5 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", gc, [
      o("div", hc, [
        o("div", bc, [
          o("h1", xc, m(e.title), 1),
          l.$slots.status ? (t(), n("div", yc, [
            U(l.$slots, "status")
          ])) : w("", !0)
        ]),
        e.purpose ? (t(), n("p", kc, m(e.purpose), 1)) : w("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", $c, [
        U(l.$slots, "actions")
      ])) : w("", !0)
    ]));
  }
}), wc = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: A(x(ee)(x(Mc)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Cc = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: A(x(ee)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Sc = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: A(x(ee)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Mc = Nt(
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
), Bc = { class: "list-inside list-disc text-sm" }, l5 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(x(wc), { variant: "destructive" }, {
      default: j(() => [
        D(x(Vn), { class: "size-4" }),
        D(x(Sc), null, {
          default: j(() => [
            N(m(e.title), 1)
          ]),
          _: 1
        }),
        D(x(Cc), null, {
          default: j(() => [
            o("ul", Bc, [
              (t(!0), n(z, null, L(a.value, (i, u) => (t(), n("li", { key: u }, m(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ba = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = ya(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, u) => pe((t(), n("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => Ha(s) ? s.value = d : null),
      "data-slot": "input",
      class: A(
        x(ee)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [Se, x(s)]
    ]);
  }
}), _c = { class: "relative" }, zc = ["aria-label"], o5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = R(!1), s = Ka("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), n("div", _c, [
      D(x(Ba), se({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: x(ee)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: A(
          x(ee)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), T(x(Ln), {
          key: 0,
          class: "size-4"
        })) : (t(), T(x(Tn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, zc)
    ]));
  }
}), _a = "@container min-w-0", Ac = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", s5 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", Pc = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3", He = "w-full min-w-0 px-4 py-6 sm:px-6", r5 = "w-full min-w-0 p-3 sm:p-4", i5 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", u5 = "w-full max-w-5xl";
function d5(e, l) {
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
    const u = Array.from({ length: a }, () => []);
    s.forEach((d, c) => {
      u[c % a].push(d);
    }), r.push({ type: "columns", columns: u }), s = [];
  };
  for (const u of e)
    (u.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: u })) : s.push(u);
  return i(), r;
}
const za = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Oc = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", jc = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Vc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function Lc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Tc(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await Dc(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
    r.width = s, r.height = i;
    const u = r.getContext("2d", { willReadFrequently: !0 });
    if (!u)
      return !1;
    u.drawImage(a, 0, 0);
    const { data: d } = u.getImageData(0, 0, s, i);
    for (let c = 3; c < d.length; c += 4)
      if ((d[c] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function Dc(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Ec(e) {
  if (Vc(e))
    throw new Error(jc);
  if (!Lc(e))
    throw new Error(za);
  if (!await Tc(e))
    throw new Error(Oc);
}
const c5 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Ye), se({ "data-slot": "sheet-close" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ic = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(ma), se({
      "data-slot": "sheet-description",
      class: x(ee)("text-muted-foreground text-sm", l.class)
    }, x(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f5 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: A(x(ee)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Fc = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: A(x(ee)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Nc = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(pa), se({
      "data-slot": "sheet-title",
      class: x(ee)("text-foreground font-semibold", l.class)
    }, x(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m5 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(va), se({ "data-slot": "sheet-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), na = "sidebar_state", Rc = 3600 * 24 * 7, Uc = "16rem", Hc = "18rem", Kc = "3rem", qc = "b", [ht, Gc] = en("Sidebar"), Wc = { class: "flex h-full w-full flex-col" }, Zc = ["data-state", "data-collapsible", "data-variant", "data-side"], Jc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, p5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = ht();
    return (u, d) => e.collapsible === "none" ? (t(), n("div", se({
      key: 0,
      "data-slot": "sidebar",
      class: x(ee)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      U(u.$slots, "default")
    ], 16)) : x(a) ? (t(), T(x(Ut), se({
      key: 1,
      open: x(s)
    }, u.$attrs, { "onUpdate:open": x(i) }), {
      default: j(() => [
        D(x(Ht), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: oe({
            "--sidebar-width": x(Hc)
          })
        }, {
          default: j(() => [
            D(Fc, { class: "sr-only" }, {
              default: j(() => [
                D(Nc, null, {
                  default: j(() => [...d[0] || (d[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(Ic, null, {
                  default: j(() => [...d[1] || (d[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", Wc, [
              U(u.$slots, "default")
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
        class: A(
          x(ee)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", se({
        class: x(ee)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, u.$attrs), [
        o("div", Jc, [
          U(u.$slots, "default")
        ])
      ], 16)
    ], 8, Zc));
  }
}), v5 = /* @__PURE__ */ O({
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
        x(ee)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), g5 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: A(x(ee)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), h5 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: A(x(ee)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), b5 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Xe), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        x(ee)(
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
}), x5 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: A(x(ee)("w-full text-sm", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), y5 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Xe), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        x(ee)(
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
}), k5 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: A(x(ee)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), $5 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Ba), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: A(x(ee)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), w5 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: A(
        x(ee)(
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
}), C5 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: A(x(ee)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), S5 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Xe), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: A(
        x(ee)(
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
}), M5 = /* @__PURE__ */ O({
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
        x(ee)(
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
}), Yc = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(x(tn), se({ "data-slot": "tooltip" }, x(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(De(d)))
      ]),
      _: 3
    }, 16));
  }
}), Xc = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(an), null, {
      default: j(() => [
        D(x(nn), se({ "data-slot": "tooltip-content" }, { ...x(i), ...u.$attrs }, {
          class: x(ee)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: j(() => [
            U(u.$slots, "default"),
            D(x(ln), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), B5 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(ga), ze(De(l)), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qc = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(on), se({ "data-slot": "tooltip-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), la = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(Xe), se({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(ee)(x(tf)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), _5 = /* @__PURE__ */ O({
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
    const l = e, { isMobile: a, state: r } = ht(), s = fe(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), T(x(Yc), { key: 1 }, {
      default: j(() => [
        D(x(Qc), { "as-child": "" }, {
          default: j(() => [
            D(la, ze(De({ ...x(s), ...i.$attrs })), {
              default: j(() => [
                U(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(x(Xc), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(a)
        }, {
          default: j(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              N(m(e.tooltip), 1)
            ], 64)) : (t(), T(Me(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(la, ze(se({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: j(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), z5 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: A(x(ee)("group/menu-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), oa = "animate-pulse rounded-md bg-primary/10", A5 = /* @__PURE__ */ O({
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
      class: A(x(ee)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: A(x(ee)(oa, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : w("", !0),
      o("div", {
        class: A(x(ee)(oa, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: oe({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), P5 = /* @__PURE__ */ O({
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
        x(ee)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), O5 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(Xe), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: A(
        x(ee)(
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
}), j5 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: A(x(ee)("group/menu-sub-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), V5 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Kn?.cookie.includes(`${na}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = Un("(max-width: 767px)"), i = R(!1), u = ya(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function d(h) {
      u.value = h, document.cookie = `${na}=${u.value}; path=/; max-age=${Rc}`;
    }
    function c(h) {
      i.value = h;
    }
    function g() {
      return s.value ? c(!i.value) : d(!u.value);
    }
    Hn("keydown", (h) => {
      h.key === qc && (h.metaKey || h.ctrlKey) && (h.preventDefault(), g());
    });
    const p = y(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return Gc({
      state: p,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: c,
      toggleSidebar: g
    }), (h, C) => (t(), T(x(ga), { "delay-duration": 0 }, {
      default: j(() => [
        o("div", se({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(Uc),
            "--sidebar-width-icon": x(Kc)
          },
          class: x(ee)(
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
}), L5 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = ht();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: A(
        x(ee)(
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
}), ef = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(x(sn), se({ "data-slot": "separator" }, x(a), {
      class: x(ee)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), T5 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(ef), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: A(x(ee)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), D5 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = ht();
    return (i, u) => (t(), T(de, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: A(x(ee)("h-7 w-7", l.class)),
      onClick: x(s)
    }, {
      default: j(() => [
        x(a) || x(r) === "collapsed" ? (t(), T(x(Dn), { key: 0 })) : (t(), T(x(En), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), tf = Nt(
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
), E5 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(x(rn), se({ "data-slot": "dropdown-menu" }, x(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(De(d)))
      ]),
      _: 3
    }, 16));
  }
}), af = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, I5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(un), se({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(ee)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", af, [
          D(x(ha), null, {
            default: j(() => [
              U(u.$slots, "indicator-icon", {}, () => [
                D(x(ba), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), F5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(dn), null, {
      default: j(() => [
        D(x(cn), se({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...x(i) }, {
          class: x(ee)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: j(() => [
            U(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), N5 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(fn), se({ "data-slot": "dropdown-menu-group" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R5 = /* @__PURE__ */ O({
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
    const l = e, a = fe(l, "inset", "variant", "class"), r = Ae(a);
    return (s, i) => (t(), T(x(mn), se({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, x(r), {
      class: x(ee)(
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
}), U5 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fe(l, "class", "inset"), r = Ae(a);
    return (s, i) => (t(), T(x(pn), se({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(ee)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), H5 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, u) => (t(), T(x(vn), se({ "data-slot": "dropdown-menu-radio-group" }, x(s)), {
      default: j(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, K5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(gn), se({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(ee)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", nf, [
          D(x(ha), null, {
            default: j(() => [
              U(u.$slots, "indicator-icon", {}, () => [
                D(x(In), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(hn), se({ "data-slot": "dropdown-menu-separator" }, x(a), {
      class: x(ee)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), G5 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: A(x(ee)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), W5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, u) => (t(), T(x(bn), se({ "data-slot": "dropdown-menu-sub" }, x(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(De(d)))
      ]),
      _: 3
    }, 16));
  }
}), Z5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(xn), se({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(ee)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: j(() => [
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J5 = /* @__PURE__ */ O({
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
    const l = e, a = fe(l, "class", "inset"), r = Ae(a);
    return (s, i) => (t(), T(x(yn), se({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(ee)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: j(() => [
        U(s.$slots, "default"),
        D(x(xa), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Y5 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Ae(e);
    return (r, s) => (t(), T(x(kn), se({ "data-slot": "dropdown-menu-trigger" }, x(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X5 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x($n), {
      "data-slot": "avatar",
      class: A(x(ee)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Q5 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(wn), se({ "data-slot": "avatar-fallback" }, x(a), {
      class: x(ee)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(Cn), se({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t3 = /* @__PURE__ */ O({
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
}), a3 = /* @__PURE__ */ O({
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
      class: A(x(ee)("flex size-9 items-center justify-center", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(x(Fn), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), n3 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: A(x(ee)("inline-flex items-center gap-1.5", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), l3 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Xe), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: A(x(ee)("hover:text-foreground transition-colors", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), o3 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: A(
        x(ee)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), s3 = /* @__PURE__ */ O({
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
      class: A(x(ee)("text-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), r3 = /* @__PURE__ */ O({
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
      class: A(x(ee)("[&>svg]:size-3.5", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(x(xa))
      ])
    ], 2));
  }
}), lf = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, of = /* @__PURE__ */ O({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), n("div", lf, [
      D(x(Sn), se({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(ee)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), i3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(Mn), se({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(ee)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: j((c) => [
        U(u.$slots, "default", ze(De(c))),
        e.viewport ? (t(), T(of, { key: 0 })) : w("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), u3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(Bn), se({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(ee)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: j(() => [
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d3 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(x(_n), se({ "data-slot": "navigation-menu-indicator" }, x(r), {
      class: x(ee)(
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
}), c3 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(zn), se({ "data-slot": "navigation-menu-item" }, x(a), {
      class: x(ee)("relative", l.class)
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(An), se({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(ee)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m3 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(x(Pn), se({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(ee)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p3 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(x(On), se({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(ee)(x(sf)(), "group", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default"),
        D(x(Nn), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sf = Nt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), v3 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(x(fa), se({ "data-slot": "dialog" }, x(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(De(d)))
      ]),
      _: 3
    }, 16));
  }
}), g3 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Ye), se({ "data-slot": "dialog-close" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rf = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(Dt), se({ "data-slot": "dialog-overlay" }, x(a), {
      class: x(ee)(
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
}), h3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(Et), null, {
      default: j(() => [
        D(rf),
        D(x(It), se({ "data-slot": "dialog-content" }, { ...u.$attrs, ...x(i) }, {
          class: x(ee)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: j(() => [
            U(u.$slots, "default"),
            e.showCloseButton ? (t(), T(x(Ye), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                D(x(Ft)),
                d[0] || (d[0] = o("span", { class: "sr-only" }, "Close", -1))
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
}), b3 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(x(ma), se({ "data-slot": "dialog-description" }, x(r), {
      class: x(ee)("text-muted-foreground text-sm", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), x3 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: A(x(ee)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      U(a.$slots, "default"),
      e.showCloseButton ? (t(), T(x(Ye), {
        key: 0,
        "as-child": ""
      }, {
        default: j(() => [
          D(de, { variant: "outline" }, {
            default: j(() => [...r[0] || (r[0] = [
              N(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : w("", !0)
    ], 2));
  }
}), y3 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: A(x(ee)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), k3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(x(Et), null, {
      default: j(() => [
        D(x(Dt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            D(x(It), se({
              class: x(ee)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...u.$attrs, ...x(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (c) => {
                const g = c.detail.originalEvent, p = g.target;
                (g.offsetX > p.clientWidth || g.offsetY > p.clientHeight) && c.preventDefault();
              })
            }), {
              default: j(() => [
                U(u.$slots, "default"),
                D(x(Ye), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    D(x(Ft), { class: "w-4 h-4" }),
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
}), $3 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(x(pa), se({ "data-slot": "dialog-title" }, x(r), {
      class: x(ee)("text-lg leading-none font-semibold", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), w3 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(va), se({ "data-slot": "dialog-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), C3 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(jn), se({ "data-slot": "label" }, x(a), {
      class: x(ee)(
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
}), S3 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Rn), {
      role: "status",
      "aria-label": "Loading",
      class: A(x(ee)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), M3 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: A(
        x(ee)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), B3 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: A(x(ee)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), _3 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: A(x(ee)("px-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), z3 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: A(x(ee)("text-muted-foreground text-sm", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), A3 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: A(x(ee)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), P3 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: A(
        x(ee)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), O3 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: A(x(ee)("leading-none font-semibold", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), uf = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, df = { class: "flex items-start gap-3" }, cf = { class: "min-w-0 flex-1" }, ff = { class: "text-foreground text-sm font-medium" }, mf = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, j3 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(!1), u = R(null), d = R(0);
    qa((g) => (console.error(`[PkBoundary] ${r.label} failed to render`, g), i.value = !0, u.value = g instanceof Error ? g.message : null, s("error", g), !1));
    function c() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: c }), (g, p) => (t(), n("div", {
      class: A(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", uf, [
        o("div", df, [
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
          o("div", cf, [
            o("p", ff, m(e.label) + " could not be displayed ", 1),
            u.value ? (t(), n("p", mf, m(u.value), 1)) : w("", !0),
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
      ])) : i.value ? w("", !0) : U(g.$slots, "default", { key: d.value })
    ], 2));
  }
}), pf = { class: "bg-card rounded-lg border" }, vf = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, gf = { class: "min-w-0" }, hf = {
  key: 0,
  class: "truncate text-sm font-medium"
}, bf = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, xf = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, yf = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, V3 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", pf, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", vf, [
        o("div", gf, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", hf, m(e.title), 1)) : w("", !0),
            e.description ? (t(), n("p", bf, m(e.description), 1)) : w("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", xf, [
          U(l.$slots, "actions")
        ])) : w("", !0)
      ])) : w("", !0),
      o("div", {
        class: A(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", yf, [
        U(l.$slots, "footer")
      ])) : w("", !0)
    ]));
  }
}), Aa = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function L3() {
  const e = ka(), l = y(() => e.props.panel?.pageFooter === !0);
  return Bt(Aa, l), l;
}
const kf = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, $f = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, wf = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, T3 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = ka(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = y(() => {
      const c = a.props.panel;
      return Array.isArray(c?.footerLinks) ? c.footerLinks : [];
    }), u = ct(Aa, y(() => !1)), d = y(() => !l.host && x(u) === !0);
    return (c, g) => d.value ? w("", !0) : (t(), n("footer", kf, [
      o("div", $f, [
        o("p", null, "© " + m(x(r)) + " " + m(s.value), 1),
        i.value.length ? (t(), n("nav", wf, [
          (t(!0), n(z, null, L(i.value, (p) => (t(), T(x(Wn), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              N(m(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : w("", !0)
      ])
    ]));
  }
}), Cf = { class: "flex shrink-0 flex-col items-center" }, Sf = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, D3 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), n("div", Cf, [
      o("div", {
        class: A(["relative box-content shadow-2xl", r.value]),
        style: oe({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Sf)) : w("", !0),
        o("div", {
          class: A(["size-full overflow-hidden bg-white", s.value])
        }, [
          U(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(z, { key: 0 }, [
        o("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: oe({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        o("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: oe({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : w("", !0)
    ]));
  }
}), Mf = { class: "flex flex-col gap-2" }, Bf = { class: "min-w-0 flex-1" }, _f = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, zf = ["disabled", "aria-label", "onClick"], Af = ["disabled", "aria-label", "onClick"], Pf = ["disabled", "title", "aria-label", "onClick"], Of = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, jf = ["disabled"], E3 = /* @__PURE__ */ O({
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
    const i = R(u(a.modelValue));
    function u(v) {
      return Array.isArray(v) ? v.map((f) => ({ uid: s++, data: { ...f } })) : [];
    }
    me(
      () => a.modelValue,
      (v) => {
        JSON.stringify(v ?? null) !== JSON.stringify(d()) && (i.value = u(v));
      }
    );
    function d() {
      const v = [];
      for (const f of i.value) {
        const B = {};
        let _ = !1;
        for (const P of a.children) {
          const F = f.data[P.key] ?? null;
          B[P.key] = F, F !== null && F !== "" && !(Array.isArray(F) && F.length === 0) && (_ = !0);
        }
        _ && v.push(B);
      }
      return v.length ? v : null;
    }
    function c() {
      r("update:modelValue", d());
    }
    const g = y(() => a.maxItems !== null && i.value.length >= a.maxItems), p = y(() => a.minItems !== null && i.value.length <= a.minItems), h = y(() => a.children.length === 1);
    function C() {
      if (g.value || a.disabled)
        return;
      const v = {};
      for (const f of a.children)
        v[f.key] = null;
      i.value.push({ uid: s++, data: v });
    }
    function k(v) {
      i.value = i.value.filter((f) => f.uid !== v), c();
    }
    function $(v, f) {
      const B = v + f;
      if (B < 0 || B >= i.value.length)
        return;
      const _ = [...i.value], [P] = _.splice(v, 1);
      _.splice(B, 0, P), i.value = _, c();
    }
    function S(v, f, B) {
      const _ = i.value.find((P) => P.uid === v);
      _ && (_.data[f] = B, c());
    }
    function b(v, f) {
      return a.errors[`${a.fieldKey}.${v}.${f}`];
    }
    return (v, f) => (t(), n("div", Mf, [
      (t(!0), n(z, null, L(i.value, (B, _) => (t(), n("div", {
        key: B.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: A(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, m(_ + 1), 3),
        o("div", Bf, [
          h.value ? (t(), T(Ze, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: B.data[e.children[0].key],
            error: b(_, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (P) => S(B.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", _f, [
            (t(!0), n(z, null, L(e.children, (P) => (t(), T(Ze, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: B.data[P.key],
              error: b(_, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (F) => S(B.uid, P.key, F)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: A(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || _ === 0,
            "aria-label": `Move ${e.itemLabel} ${_ + 1} up`,
            onClick: (P) => $(_, -1)
          }, [...f[0] || (f[0] = [
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
          ])], 8, zf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || _ === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${_ + 1} down`,
            onClick: (P) => $(_, 1)
          }, [...f[1] || (f[1] = [
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
          ])], 8, Af),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${_ + 1}`,
            onClick: (P) => k(B.uid)
          }, [...f[2] || (f[2] = [
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
          ])], 8, Pf)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", Of, " No " + m(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : w("", !0),
      g.value ? w("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: C
      }, [
        f[3] || (f[3] = o("svg", {
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
        N(" Add " + m(e.itemLabel.toLowerCase()), 1)
      ], 8, jf))
    ]));
  }
}), Vf = { class: "space-y-1" }, Lf = { class: "flex items-center gap-1" }, Tf = ["disabled", "title", "aria-label", "onClick"], Df = ["aria-pressed"], Ef = ["id", "value", "rows", "disabled"], If = ["innerHTML"], Ff = /* @__PURE__ */ O({
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
    function u(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = y(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function c(h, C = h) {
      const k = document.getElementById(a.id ?? "");
      if (k === null)
        return;
      const $ = k.selectionStart, S = k.selectionEnd, b = i.value.slice($, S);
      r(
        "update:modelValue",
        `${i.value.slice(0, $)}${h}${b}${C}${i.value.slice(S)}`
      );
    }
    const g = {
      bold: { label: "B", run: () => c("**") },
      italic: { label: "I", run: () => c("*") },
      code: { label: "</>", run: () => c("`") },
      heading: { label: "H", run: () => c("## ", "") },
      list: { label: "•", run: () => c("- ", "") },
      link: { label: "🔗", run: () => c("[", "](https://)") }
    }, p = y(
      () => (a.toolbar ?? Object.keys(g)).filter((h) => h in g)
    );
    return (h, C) => (t(), n("div", Vf, [
      o("div", Lf, [
        (t(!0), n(z, null, L(p.value, (k) => (t(), n("button", {
          key: k,
          type: "button",
          disabled: e.disabled,
          title: k,
          "aria-label": k,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: ($) => g[k].run()
        }, m(g[k].label), 9, Tf))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (k) => s.value = !s.value)
        }, " Preview ", 8, Df)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, If)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = (k) => r("update:modelValue", k.target.value))
      }, null, 40, Ef))
    ]));
  }
}), Nf = { class: "space-y-1" }, Rf = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Uf = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Hf = ["id", "value", "rows", "disabled"], Kf = { class: "text-muted-foreground text-xs" }, qf = {
  key: 0,
  class: "text-destructive text-xs"
}, Gf = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!0), u = y(() => a.modelValue ?? ""), d = y(() => Math.max(u.value.split(`
`).length, 1)), c = y(() => {
      if (a.language !== "json" || u.value.trim() === "")
        return null;
      try {
        return JSON.parse(u.value), null;
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
      const C = h.target, k = C.selectionStart, $ = C.selectionEnd, S = `${u.value.slice(0, k)}    ${u.value.slice($)}`;
      r("update:modelValue", S), requestAnimationFrame(() => {
        C.selectionStart = C.selectionEnd = k + 4;
      });
    }
    return (h, C) => (t(), n("div", Nf, [
      o("div", Rf, [
        o("div", Uf, [
          (t(!0), n(z, null, L(d.value, (k) => (t(), n("div", { key: k }, m(k), 1))), 128))
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
          onInput: g,
          onKeydown: p
        }, null, 40, Hf)
      ]),
      o("p", Kf, m(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      c.value ? (t(), n("p", qf, m(c.value), 1)) : w("", !0)
    ]));
  }
}), Wf = { class: "space-y-3" }, Zf = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Jf = { class: "text-sm font-medium" }, Yf = { class: "flex items-center gap-1" }, Xf = ["disabled", "onClick"], Qf = ["disabled", "onClick"], em = ["disabled", "onClick"], tm = { class: "space-y-3 p-3" }, am = { class: "flex flex-wrap items-center gap-2" }, nm = ["disabled", "onClick"], lm = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, I3 = /* @__PURE__ */ O({
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
    ), u = y(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function d(C) {
      r("update:modelValue", C);
    }
    function c(C) {
      u.value || d([...s.value, { type: C, data: {} }]);
    }
    function g(C) {
      d(s.value.filter((k, $) => $ !== C));
    }
    function p(C, k) {
      const $ = C + k;
      if ($ < 0 || $ >= s.value.length)
        return;
      const S = [...s.value], [b] = S.splice(C, 1);
      S.splice($, 0, b), d(S);
    }
    function h(C, k, $) {
      d(
        s.value.map(
          (S, b) => b === C ? { ...S, data: { ...S.data, [k]: $ } } : S
        )
      );
    }
    return (C, k) => (t(), n("div", Wf, [
      (t(!0), n(z, null, L(s.value, ($, S) => (t(), n("div", {
        key: `${$.type}-${S}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Zf, [
          o("span", Jf, m(i.value[$.type]?.label ?? $.type), 1),
          o("div", Yf, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === 0,
              "aria-label": "Move up",
              onClick: (b) => p(S, -1)
            }, " ↑ ", 8, Xf),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (b) => p(S, 1)
            }, " ↓ ", 8, Qf),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (b) => g(S)
            }, " Remove ", 8, em)
          ])
        ]),
        o("div", tm, [
          (t(!0), n(z, null, L(i.value[$.type]?.fields ?? [], (b) => (t(), T(Ze, {
            key: b.key,
            field: b,
            value: $.data[b.key] ?? null,
            error: e.errors?.[b.key],
            processing: e.disabled,
            onChange: (v) => h(S, b.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", am, [
        (t(!0), n(z, null, L(e.blocks, ($) => (t(), n("button", {
          key: $.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (S) => c($.type)
        }, " + " + m($.label), 9, nm))), 128)),
        u.value ? (t(), n("span", lm, m(e.maxBlocks) + " is the maximum here. ", 1)) : w("", !0)
      ])
    ]));
  }
}), om = ["name", "value", "checked", "disabled", "onChange"], sm = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, rm = /* @__PURE__ */ O({
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
    return (i, u) => (t(), n("div", {
      role: "radiogroup",
      class: A(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(z, null, L(e.options, (d) => (t(), n("label", {
        key: String(d.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: d.value,
          checked: s(d),
          disabled: e.disabled,
          onChange: (c) => r("update:modelValue", d.value)
        }, null, 40, om),
        N(" " + m(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", sm, " Nothing to choose from yet. ")) : w("", !0)
    ], 2));
  }
}), im = ["value", "checked", "disabled", "onChange"], um = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, dm = /* @__PURE__ */ O({
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
      return s.value.some((g) => g == c.value);
    }
    function u(c) {
      r(
        "update:modelValue",
        i(c) ? s.value.filter((g) => g != c.value) : [...s.value, c.value]
      );
    }
    const d = y(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (c, g) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: oe(d.value)
    }, [
      (t(!0), n(z, null, L(e.options, (p) => (t(), n("label", {
        key: String(p.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (h) => u(p)
        }, null, 40, im),
        N(" " + m(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", um, " Nothing to choose from yet. ")) : w("", !0)
    ], 4));
  }
}), cm = { class: "flex flex-col gap-1.5" }, fm = ["aria-label", "onClick"], mm = ["placeholder", "disabled", "maxlength"], pm = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, vm = ["onClick"], gm = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, hm = /* @__PURE__ */ O({
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
    ), u = y(() => i.value.length >= (a.field.max ?? 25)), d = y(
      () => (a.field.suggestions ?? []).filter(
        (h) => !i.value.some((C) => C.toLowerCase() === h.toLowerCase())
      )
    );
    function c(h) {
      const C = h.trim().slice(0, a.field.maxLength ?? 40);
      if (C === "" || u.value) {
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
        h.preventDefault(), c(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && g(i.value.length - 1);
    }
    return (h, C) => (t(), n("div", cm, [
      o("div", {
        class: A(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, L(i.value, (k, $) => (t(), n("span", {
          key: `${k}-${$}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(m(k) + " ", 1),
          e.disabled ? w("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${k}`,
            onClick: (S) => g($)
          }, " × ", 8, fm))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (k) => s.value = k),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: C[1] || (C[1] = (k) => c(s.value))
        }, null, 40, mm), [
          [Se, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), n("div", pm, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(z, null, L(d.value, (k) => (t(), n("button", {
          key: k,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: ($) => c(k)
        }, m(k), 9, vm))), 128))
      ])) : w("", !0),
      u.value ? (t(), n("p", gm, " That is the maximum of " + m(e.field.max ?? 25) + " tags. ", 1)) : w("", !0)
    ]));
  }
}), bm = 4.5, sa = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Pa(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function wt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function jt(e) {
  const [l, a, r] = Pa(e);
  return 0.2126 * wt(l) + 0.7152 * wt(a) + 0.0722 * wt(r);
}
function Oa(e, l) {
  const a = jt(e), r = jt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function xm(e, l, a) {
  if (!sa.test(e) || !sa.test(l))
    return e;
  const r = jt(l) > 0.5, s = r ? 0 : 255;
  let i = Pa(e);
  for (let u = 0; u <= 20; u++) {
    const d = ym(i);
    if (Oa(d, l) >= a)
      return d;
    i = i.map((c) => c + (s - c) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function ym(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const km = { class: "flex flex-col gap-2" }, $m = { class: "flex items-center gap-2" }, wm = {
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
}, Cm = ["value", "disabled", "aria-label"], Sm = ["value", "disabled", "placeholder"], Mm = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Bm = ["aria-label", "title", "onClick"], _m = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, zm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = y(() => typeof a.modelValue == "string" ? a.modelValue : ""), u = y(() => s.test(i.value));
    function d(k) {
      const $ = k.trim();
      if ($ === "")
        return "";
      const S = $.startsWith("#") ? $ : `#${$}`;
      return s.test(S) ? S.toLowerCase() : $;
    }
    function c(k) {
      r("update:modelValue", d(k.target.value));
    }
    const g = y(() => !u.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Oa(i.value, a.field.contrastBackground)), p = y(() => a.field.contrastMinRatio ?? bm), h = y(() => g.value !== null && g.value < p.value);
    function C() {
      a.field.contrastBackground && r(
        "update:modelValue",
        xm(i.value, a.field.contrastBackground, p.value)
      );
    }
    return (k, $) => (t(), n("div", km, [
      o("div", $m, [
        u.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: $[0] || ($[0] = (S) => r("update:modelValue", S.target.value))
        }, null, 40, Cm)) : (t(), n("span", wm)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: c
        }, null, 40, Sm)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", Mm, [
        (t(!0), n(z, null, L(e.field.presets, (S) => (t(), n("button", {
          key: S,
          type: "button",
          class: A(["size-6 rounded border", i.value.toLowerCase() === S.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: oe({ backgroundColor: S }),
          "aria-label": S,
          title: S,
          onClick: (b) => r("update:modelValue", S.toLowerCase())
        }, null, 14, Bm))), 128))
      ])) : w("", !0),
      h.value ? (t(), n("p", _m, [
        o("span", null, " This fails contrast at " + m(g.value.toFixed(1)) + ":1 - it needs at least " + m(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : w("", !0)
    ]));
  }
}), Am = ["aria-disabled"], Pm = /* @__PURE__ */ O({
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
    let i = null, u = null, d = null;
    const c = y(() => {
      const C = a.modelValue?.[a.latKey], k = a.modelValue?.[a.lngKey];
      return typeof C == "number" && typeof k == "number" ? { lat: C, lng: k } : a.center ? a.center : a.markers.length > 0 ? { lat: a.markers[0].lat, lng: a.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function g() {
      if (!s.value || i)
        return;
      const C = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), d = C, i = C.map(s.value).setView([c.value.lat, c.value.lng], a.zoom), C.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
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
      if (!(!i || !d))
        for (const C of a.markers) {
          const k = d.circleMarker([C.lat, C.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (C.label || C.popup) && k.bindPopup(`<strong>${C.label ?? ""}</strong>${C.popup ? `<br>${C.popup}` : ""}`);
        }
    }
    function h() {
      if (!i || !d)
        return;
      const C = a.modelValue?.[a.latKey], k = a.modelValue?.[a.lngKey];
      if (typeof C != "number" || typeof k != "number") {
        u && (i.removeLayer(u), u = null);
        return;
      }
      u ? u.setLatLng([C, k]) : u = d.circleMarker([C, k], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([C, k], i.getZoom());
    }
    return ge(() => {
      g();
    }), ke(() => {
      i?.remove(), i = null, u = null;
    }), me(
      () => a.modelValue,
      () => h(),
      { deep: !0 }
    ), (C, k) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: oe({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, Am));
  }
}), Om = { class: "flex flex-col gap-2" }, jm = { class: "text-muted-foreground text-xs" }, Vm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkMapField",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => a.modelValue && typeof a.modelValue == "object" ? a.modelValue : null), i = y(() => a.field.latKey ?? "lat"), u = y(() => a.field.lngKey ?? "lng");
    return (d, c) => (t(), n("div", Om, [
      D(Pm, {
        "model-value": s.value,
        center: e.field.defaultCenter ?? null,
        zoom: e.field.zoom ?? 12,
        height: e.field.height ?? 280,
        "lat-key": i.value,
        "lng-key": u.value,
        disabled: e.disabled,
        pickable: "",
        "onUpdate:modelValue": c[0] || (c[0] = (g) => r("update:modelValue", g))
      }, null, 8, ["model-value", "center", "zoom", "height", "lat-key", "lng-key", "disabled"]),
      o("p", jm, [
        N(" Click the map to set " + m(i.value) + " / " + m(u.value) + " ", 1),
        s.value ? (t(), n(z, { key: 0 }, [
          N(" (" + m(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + m(s.value[u.value]?.toFixed?.(5) ?? s.value[u.value]) + ") ", 1)
        ], 64)) : w("", !0)
      ])
    ]));
  }
}), Lm = { class: "flex flex-col gap-2" }, Tm = ["width", "height"], Dm = ["value", "disabled"], Em = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Im = /* @__PURE__ */ O({
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
    }), u = y(() => a.field.size ?? 160);
    async function d() {
      if (!s.value)
        return;
      const c = i.value;
      if (c === "") {
        s.value.getContext("2d")?.clearRect(0, 0, u.value, u.value);
        return;
      }
      await (await import("qrcode")).toCanvas(s.value, c, {
        width: u.value,
        margin: 1,
        color: { dark: "#0f172a", light: "#ffffff" }
      });
    }
    return ge(() => {
      d();
    }), me(i, () => {
      d();
    }), (c, g) => (t(), n("div", Lm, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: u.value,
        height: u.value
      }, null, 8, Tm),
      e.field.from ? (t(), n("p", Em, "From " + m(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: g[0] || (g[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, Dm))
    ]));
  }
}), Fm = { class: "flex flex-col gap-2" }, Nm = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, Rm = ["aria-label"], Um = {
  key: 0,
  class: "text-destructive text-xs"
}, Hm = ["value", "disabled"], Km = {
  key: 2,
  class: "text-muted-foreground text-xs"
}, qm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), u = y(() => {
      if (a.field.from) {
        const g = a.values?.[a.field.from];
        return g == null ? "" : String(g);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), d = y(() => (a.field.format ?? "CODE128").toUpperCase());
    async function c() {
      if (!s.value)
        return;
      const g = u.value.trim();
      for (i.value = null; s.value.firstChild; )
        s.value.removeChild(s.value.firstChild);
      if (g !== "")
        try {
          const h = (await import("jsbarcode")).default;
          h(s.value, g, {
            format: d.value,
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
    return ge(() => {
      c();
    }), me([u, d], () => {
      c();
    }), (g, p) => (t(), n("div", Fm, [
      o("div", Nm, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${d.value}`
        }, null, 8, Rm))
      ]),
      i.value ? (t(), n("p", Um, m(i.value), 1)) : w("", !0),
      e.field.from ? (t(), n("p", Km, "From " + m(e.field.from) + " (" + m(d.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, Hm))
    ]));
  }
}), Gm = { class: "mr-2 inline-block w-3 opacity-60" }, Wm = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Zm = /* @__PURE__ */ O({
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
    function a(u) {
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
    const r = y(() => {
      if (l.field.originalKey)
        return a(l.values?.[l.field.originalKey]);
      const u = l.modelValue;
      return a(u?.original);
    }), s = y(() => {
      if (l.field.modifiedKey)
        return a(l.values?.[l.field.modifiedKey]);
      const u = l.modelValue;
      return a(u?.modified);
    }), i = y(() => {
      const u = r.value.split(`
`), d = s.value.split(`
`), c = Math.max(u.length, d.length), g = [];
      for (let p = 0; p < c; p++) {
        const h = u[p], C = d[p];
        if (h === C) {
          h !== void 0 && g.push({ kind: "same", text: h });
          continue;
        }
        h !== void 0 && g.push({ kind: "del", text: h }), C !== void 0 && g.push({ kind: "add", text: C });
      }
      return g;
    });
    return (u, d) => (t(), n("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: oe({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), n(z, null, L(i.value, (c, g) => (t(), n("div", {
        key: g,
        class: A(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": c.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": c.kind === "add",
          "text-muted-foreground": c.kind === "same"
        }])
      }, [
        o("span", Gm, m(c.kind === "add" ? "+" : c.kind === "del" ? "-" : " "), 1),
        N(" " + m(c.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", Wm, "No differences.")) : w("", !0)
    ], 4));
  }
}), Jm = { class: "flex flex-col gap-3" }, Ym = { class: "flex items-center justify-between gap-2" }, Xm = { class: "text-sm font-medium" }, Qm = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, ep = { class: "grid grid-cols-7 gap-1" }, tp = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, ap = ["title"], F3 = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = R(/* @__PURE__ */ new Date()), r = y(() => a.value.getFullYear()), s = y(() => a.value.getMonth()), i = y(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), u = y(() => {
      const p = /* @__PURE__ */ new Map();
      for (const h of l.events ?? []) {
        const C = p.get(h.date) ?? [];
        C.push(h), p.set(h.date, C);
      }
      return p;
    }), d = y(() => {
      const h = new Date(r.value, s.value, 1).getDay(), C = new Date(r.value, s.value + 1, 0).getDate(), k = [];
      for (let $ = 0; $ < h; $++)
        k.push({ day: null, key: `pad-${$}`, events: [] });
      for (let $ = 1; $ <= C; $++) {
        const S = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String($).padStart(2, "0")}`;
        k.push({ day: $, key: S, events: u.value.get(S) ?? [] });
      }
      return k;
    });
    function c() {
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function g() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, h) => (t(), n("div", Jm, [
      o("div", Ym, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: c
        }, " Prev "),
        o("p", Xm, m(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: g
        }, " Next ")
      ]),
      o("div", Qm, [
        (t(), n(z, null, L(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, m(C), 1)), 64))
      ]),
      o("div", ep, [
        (t(!0), n(z, null, L(d.value, (C) => (t(), n("div", {
          key: C.key,
          class: A(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), n("p", tp, m(C.day), 1)) : w("", !0),
          (t(!0), n(z, null, L(C.events.slice(0, 3), (k, $) => (t(), n("p", {
            key: `${C.key}-${$}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: k.label
          }, m(k.label), 9, ap))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), np = { class: "flex items-center gap-3" }, lp = ["min", "max", "step", "value", "disabled", "aria-label"], op = { class: "flex shrink-0 items-center gap-1" }, sp = ["min", "max", "step", "value", "disabled"], rp = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, ip = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => a.field.min ?? 0), i = y(() => a.field.max ?? 100), u = y(() => a.field.step ?? 1), d = y(() => {
      const p = Number(a.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), c = y(
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
    return (p, h) => (t(), n("div", np, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (C) => g(C.target.value))
      }, null, 40, lp),
      o("div", op, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: c.value ? "" : d.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (C) => g(C.target.value))
        }, null, 40, sp),
        e.field.unit ? (t(), n("span", rp, m(e.field.unit), 1)) : w("", !0)
      ])
    ]));
  }
}), it = /* @__PURE__ */ new Map();
function Ct(e, l) {
  it.set(e, l);
}
function up(e) {
  return it.get(e);
}
function N3(e) {
  return it.has(e);
}
function dp() {
  return [...it.keys()].sort();
}
function R3() {
  it.clear();
}
const cp = ["name", "value", "checked", "disabled", "onChange"], fp = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, mp = { class: "whitespace-nowrap" }, pp = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, vp = ["name", "value", "checked", "disabled", "onChange"], gp = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, hp = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, bp = { class: "text-center text-xs font-medium" }, xp = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, yp = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, kp = /* @__PURE__ */ O({
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
      () => a.field.preview ? up(a.field.preview) : void 0
    ), i = y(() => !!a.field.preview && !s.value), u = y(() => a.field.layout === "segmented"), d = y(() => {
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
    function c(g) {
      return a.modelValue != null && g.value == a.modelValue;
    }
    return (g, p) => u.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: A(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, L(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: A(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          c(h) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: c(h),
          disabled: e.disabled,
          onChange: (C) => r("update:modelValue", h.value)
        }, null, 40, cp),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", fp, [
          (t(), T(Me(s.value), {
            value: h.value,
            label: h.label,
            selected: c(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : w("", !0),
        o("span", mp, m(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", pp, " Nothing to choose from yet. ")) : w("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: A(["grid gap-3", d.value])
    }, [
      (t(!0), n(z, null, L(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: A(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          c(h) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: c(h),
          disabled: e.disabled,
          onChange: (C) => r("update:modelValue", h.value)
        }, null, 40, vp),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", gp, [
          s.value ? (t(), T(Me(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: c(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", hp, " no preview ")) : w("", !0)
        ]),
        o("span", bp, m(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", xp, " Nothing to choose from yet. ")) : w("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", yp, [
        p[2] || (p[2] = N(" No preview registered for ", -1)),
        o("code", null, m(e.field.preview), 1),
        N(". Registered: " + m(x(dp)().join(", ") || "none") + ". ", 1)
      ])) : w("", !0)
    ], 2));
  }
}), $p = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, wp = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", $p, [
      o("span", {
        class: "block size-full",
        style: oe({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Cp = { class: "flex flex-col items-center gap-1 text-center" }, Sp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, ja = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Cp, [
      o("div", {
        class: A(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: oe({ borderColor: a.value, color: a.value })
      }, m(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Sp, m(e.caption), 1)) : w("", !0)
    ]));
  }
}), Mp = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Bp = { class: "flex items-center gap-3" }, _p = ["src"], zp = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Ap = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Pp = {
  key: 0,
  class: "text-right text-sm"
}, Op = { class: "text-neutral-500" }, jp = { class: "tabular-nums" }, Vp = { key: 1 }, Lp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Tp = { class: "mt-2 font-medium" }, Dp = { key: 2 }, Ep = { class: "w-full text-sm" }, Ip = { class: "w-full py-3 pr-2" }, Fp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Np = { key: 0 }, Rp = ["colspan"], Up = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Hp = { class: "w-64 text-sm" }, Kp = { class: "tabular-nums" }, qp = {
  key: 3,
  class: "py-2"
}, Gp = { key: 4 }, Wp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Zp = { class: "mt-2 flex flex-col gap-1 text-sm" }, Jp = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Yp = { key: 0 }, Xp = {
  key: 1,
  class: "mt-1"
}, Qp = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, ev = /* @__PURE__ */ O({
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
    function u(c) {
      return c ?? [];
    }
    function d(c) {
      return c ?? "";
    }
    return (c, g) => (t(), n("article", Mp, [
      o("div", Bp, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, _p)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: oe({ color: a() })
        }, m(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, L(e.document.blocks, (p, h) => (t(), n(z, { key: h }, [
        p.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: oe({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: oe({ color: a() })
            }, m(p.title), 5),
            p.subtitle ? (t(), n("p", zp, m(p.subtitle), 1)) : w("", !0),
            p.reference ? (t(), n("p", Ap, m(p.reference), 1)) : w("", !0)
          ]),
          r(p).length ? (t(), n("dl", Pp, [
            (t(!0), n(z, null, L(r(p), (C, k) => (t(), n("div", {
              key: k,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Op, m(C.label), 1),
              o("dd", jp, m(C.value), 1)
            ]))), 128))
          ])) : w("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", Vp, [
          o("h2", Lp, m(p.heading), 1),
          o("p", Tp, m(p.name), 1),
          (t(!0), n(z, null, L(u(p.lines), (C, k) => (t(), n("p", {
            key: k,
            class: "text-sm text-neutral-600"
          }, m(C), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", Dp, [
          o("table", Ep, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: oe({ borderColor: a() })
              }, [
                (t(!0), n(z, null, L(u(p.columns), (C, k) => (t(), n("th", {
                  key: k,
                  class: A(["pb-2 font-medium", k > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, m(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, L(s(p), (C, k) => (t(), n("tr", {
                key: k,
                class: "border-b border-neutral-200"
              }, [
                o("td", Ip, [
                  o("p", null, m(C.description), 1),
                  C.detail ? (t(), n("p", Fp, m(C.detail), 1)) : w("", !0)
                ]),
                (t(!0), n(z, null, L(C.cells, ($, S) => (t(), n("td", {
                  key: S,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, m($), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", Np, [
                o("td", {
                  colspan: u(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, m(p.empty), 9, Rp)
              ])) : w("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", Up, [
            o("dl", Hp, [
              (t(!0), n(z, null, L(i(p), (C, k) => (t(), n("div", {
                key: k,
                class: A([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: oe(C.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: A(C.strong ? "" : "text-neutral-600")
                }, m(C.label), 3),
                o("dd", Kp, m(C.value), 1)
              ], 6))), 128))
            ])
          ])) : w("", !0)
        ])) : p.type === "code" ? (t(), n("section", qp, [
          D(ja, {
            code: d(p.code),
            caption: d(p.caption),
            style: oe(d(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", Gp, [
          o("h2", Wp, m(p.heading), 1),
          o("ol", Zp, [
            (t(!0), n(z, null, L(u(p.items), (C, k) => (t(), n("li", {
              key: k,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: oe({ color: a() })
              }, m(k + 1) + ".", 5),
              o("span", null, m(C), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: A(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: oe(p.emphasis ? { color: a() } : void 0)
        }, m(p.text), 7)) : p.type === "footer" ? (t(), n("footer", Jp, [
          p.text ? (t(), n("p", Yp, m(p.text), 1)) : w("", !0),
          u(p.contacts).length ? (t(), n("p", Xp, m(u(p.contacts).join(" · ")), 1)) : w("", !0)
        ])) : (t(), n("p", Qp, " This document contains a “" + m(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), tv = ["aria-label", "title"], av = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nv = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, U3 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Ma(), r = y(() => l.value.theme === "dark");
    function s() {
      a({ theme: r.value ? "light" : "dark" });
    }
    return (i, u) => (t(), n("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: s
    }, [
      (t(), n("svg", av, [
        r.value ? (t(), n(z, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", nv))
      ]))
    ], 8, tv));
  }
}), lv = ["width", "height"], ov = { key: 0 }, sv = ["x1", "x2", "y1", "y2"], rv = ["x", "y"], iv = ["x1", "x2", "y1", "y2"], uv = ["x", "y"], dv = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], cv = ["x", "y", "width", "height", "fill", "fill-opacity"], fv = ["x", "y"], mv = ["x", "y"], pv = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, vv = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, gv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, hv = { class: "text-xs font-semibold tabular-nums" }, bv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, xv = { class: "text-muted-foreground" }, ra = 5.6, H3 = /* @__PURE__ */ O({
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
    function r(M) {
      return a[M] ?? M;
    }
    function s(M, E) {
      if (!l.thresholds?.length)
        return E;
      const V = l.thresholds.find((Y) => M < Y.max);
      return r(V ? V.color : l.aboveColor);
    }
    const i = R(null), u = R(560), d = R(null);
    let c = null;
    ge(() => {
      c = new ResizeObserver((M) => {
        u.value = Math.max(160, M[0].contentRect.width);
      }), i.value && c.observe(i.value);
    }), ke(() => c?.disconnect());
    const g = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((E, V) => ({
      ...E,
      color: E.color ?? g[V % g.length]
    }))), h = y(() => p.value[0]?.points.map((M) => M.label) ?? []), C = y(() => h.value.length), k = y(() => l.orientation === "horizontal"), $ = y(() => Math.max(0, ...h.value.map((M) => M.length))), S = y(() => {
      if (!k.value)
        return l.showAxis ? 44 : 8;
      const M = $.value * ra + 16;
      return Math.round(Math.min(Math.max(60, M), u.value * 0.4));
    }), b = y(() => Math.max(4, Math.floor((S.value - 16) / ra)));
    function v(M) {
      return M.length <= b.value ? M : `${M.slice(0, b.value - 1)}…`;
    }
    const f = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: S.value
    })), B = y(() => ({
      w: Math.max(1, u.value - f.value.left - f.value.right),
      h: Math.max(1, l.height - f.value.top - f.value.bottom)
    })), _ = (M) => l.format ? l.format(M) : P(M);
    function P(M) {
      return Math.abs(M) >= 1e6 ? `${(M / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(M) >= 1e3 ? `${(M / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(M * 100) / 100);
    }
    const F = y(() => {
      const M = h.value.map(
        (ve, re) => l.stacked ? p.value.reduce((K, Q) => K + Math.max(0, Q.points[re]?.value ?? 0), 0) : Math.max(...p.value.map((K) => K.points[re]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const E = Math.max(...M, 0);
      if (E <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(E));
      return ([1, 2, 2.5, 5, 10].find((ve) => E <= ve * V) ?? 10) * V;
    }), I = y(
      () => (k.value ? B.value.h : B.value.w) / Math.max(1, C.value)
    ), ae = y(() => I.value * 0.68), H = y(
      () => l.stacked || p.value.length <= 1 ? ae.value : ae.value / p.value.length
    ), q = y(() => {
      const M = [], E = new Array(C.value).fill(0);
      return p.value.forEach((V, Y) => {
        V.points.forEach((ve, re) => {
          const Q = Math.max(0, ve.value) / F.value * (k.value ? B.value.w : B.value.h), xe = (k.value ? f.value.top : f.value.left) + re * I.value + (I.value - ae.value) / 2, Qe = l.stacked ? 0 : Y * H.value;
          M.push(
            k.value ? {
              x: f.value.left + E[re],
              y: xe + Qe,
              w: Q,
              h: Math.max(0, H.value - 2),
              color: s(ve.value, V.color),
              label: ve.label,
              name: V.name,
              value: ve.value,
              index: re
            } : {
              x: xe + Qe,
              y: f.value.top + B.value.h - Q - E[re],
              w: Math.max(0, H.value - 2),
              h: Q,
              color: s(ve.value, V.color),
              label: ve.label,
              name: V.name,
              value: ve.value,
              index: re
            }
          ), l.stacked && (E[re] += Q);
        });
      }), M;
    }), W = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((M) => ({
        value: F.value * (k.value ? M : 1 - M),
        x: f.value.left + B.value.w * M,
        y: f.value.top + B.value.h * M
      }))
    ), le = y(() => Math.max(1, Math.ceil(C.value / (k.value ? 14 : 10))));
    function ne(M) {
      return M === C.value - 1 || M % le.value === 0;
    }
    function J(M) {
      return (k.value ? f.value.top : f.value.left) + M * I.value + I.value / 2;
    }
    const G = y(() => d.value === null ? null : {
      label: h.value[d.value],
      rows: p.value.map((M) => ({
        name: M.name,
        color: M.color,
        value: M.points[d.value]?.value ?? 0
      }))
    });
    return (M, E) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      C.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: oe({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: E[0] || (E[0] = (V) => d.value = null)
        }, [
          e.showAxis ? (t(), n("g", ov, [
            k.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, L(W.value, (V) => (t(), n("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: f.value.top,
                y2: f.value.top + B.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, sv))), 128)),
              (t(!0), n(z, null, L(W.value, (V) => (t(), n("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, m(P(V.value)), 9, rv))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, L(W.value, (V) => (t(), n("line", {
                key: `g-${V.y}`,
                x1: f.value.left,
                x2: u.value - f.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, iv))), 128)),
              (t(!0), n(z, null, L(W.value, (V) => (t(), n("text", {
                key: `gt-${V.y}`,
                x: f.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, m(P(V.value)), 9, uv))), 128))
            ], 64))
          ])) : w("", !0),
          (t(!0), n(z, null, L(h.value, (V, Y) => (t(), n("rect", {
            key: `hit-${Y}`,
            x: k.value ? f.value.left : f.value.left + Y * I.value,
            y: k.value ? f.value.top + Y * I.value : f.value.top,
            width: k.value ? B.value.w : I.value,
            height: k.value ? I.value : B.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === Y ? 0.4 : 0,
            onMouseenter: (ve) => d.value = Y
          }, null, 40, dv))), 128)),
          (t(!0), n(z, null, L(q.value, (V, Y) => (t(), n("rect", {
            key: `b-${Y}`,
            x: V.x,
            y: V.y,
            width: V.w,
            height: V.h,
            fill: V.color,
            "fill-opacity": d.value === null || d.value === V.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, cv))), 128)),
          k.value ? (t(!0), n(z, { key: 1 }, L(h.value, (V, Y) => pe((t(), n("text", {
            key: `c-${Y}`,
            x: f.value.left - 8,
            y: J(Y) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(m(v(V)) + " ", 1),
            o("title", null, m(V), 1)
          ], 8, fv)), [
            [Ne, ne(Y)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, L(h.value, (V, Y) => pe((t(), n("text", {
            key: `c-${Y}`,
            x: J(Y),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, m(V), 9, mv)), [
            [Ne, ne(Y)]
          ])), 128))
        ], 40, lv)),
        G.value ? (t(), n("div", pv, [
          o("p", vv, m(G.value.label), 1),
          (t(!0), n(z, null, L(G.value.rows, (V, Y) => (t(), n("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: oe({ background: V.color })
            }, null, 4),
            o("span", gv, m(V.name || "Value"), 1),
            o("span", hv, m(_(V.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", bv, [
          (t(!0), n(z, null, L(p.value, (V, Y) => (t(), n("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: oe({ background: V.color })
            }, null, 4),
            o("span", xv, m(V.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), yv = ["width", "height"], kv = ["id"], $v = ["stop-color"], wv = ["stop-color"], Cv = { key: 0 }, Sv = ["x1", "x2", "y1", "y2"], Mv = ["x", "y"], Bv = ["x", "y"], _v = ["x1", "x2", "y1", "y2"], zv = ["d", "fill"], Av = ["d", "stroke", "stroke-dasharray"], Pv = ["cx", "cy", "fill"], Ov = { key: 1 }, jv = ["x1", "x2", "y1", "y2"], Vv = ["cx", "cy", "fill"], Lv = ["x", "y"], Tv = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Dv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Ev = { class: "text-xs font-semibold tabular-nums" }, Iv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Fv = { class: "text-muted-foreground" }, Nv = /* @__PURE__ */ O({
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
    const l = e, a = y(() => g.value.some((M) => M.axis === "right")), r = R(null), s = R(560), i = R(null);
    let u = null;
    ge(() => {
      u = new ResizeObserver((M) => {
        s.value = Math.max(160, M[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), ke(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], c = Math.random().toString(36).slice(2, 9), g = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((E, V) => ({
      ...E,
      color: E.color ?? d[V % d.length]
    }))), p = y(() => g.value[0]?.points.map((M) => M.label) ?? []), h = y(() => p.value.length), C = y(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), k = (M) => l.format ? l.format(M) : $(M);
    function $(M) {
      return Math.abs(M) >= 1e6 ? `${(M / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(M) >= 1e3 ? `${(M / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(M * 100) / 100);
    }
    function S(M) {
      const E = Math.max(...M, 0);
      if (E <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(E));
      return ([1, 2, 2.5, 5, 10].find((ve) => E <= ve * V) ?? 10) * V;
    }
    const b = y(
      () => S(
        g.value.filter((M) => M.axis !== "right").flatMap((M) => M.points.map((E) => E.value))
      )
    ), v = y(
      () => S(
        g.value.filter((M) => M.axis === "right").flatMap((M) => M.points.map((E) => E.value))
      )
    ), f = y(() => ({
      w: Math.max(1, s.value - C.value.left - C.value.right),
      h: Math.max(1, l.height - C.value.top - C.value.bottom)
    }));
    function B(M) {
      return C.value.left + (h.value <= 1 ? 0 : M / (h.value - 1) * f.value.w);
    }
    function _(M, E = "left") {
      const V = E === "right" ? v.value : b.value;
      return C.value.top + f.value.h - M / V * f.value.h;
    }
    const P = y(
      () => g.value.map((M) => {
        const E = M.points.map((Y, ve) => ({
          ...Y,
          x: B(ve),
          y: _(Y.value, M.axis ?? "left")
        })), V = M.stepped ? F(E) : I(E);
        return { ...M, pts: E, line: V, area: ae(V, E) };
      })
    );
    function F(M) {
      if (M.length === 0)
        return "";
      let E = `M${M[0].x.toFixed(2)},${M[0].y.toFixed(2)}`;
      for (let V = 1; V < M.length; V++)
        E += ` L${M[V].x.toFixed(2)},${M[V - 1].y.toFixed(2)} L${M[V].x.toFixed(2)},${M[V].y.toFixed(2)}`;
      return E;
    }
    function I(M) {
      const E = M.length;
      if (E === 0)
        return "";
      if (E === 1)
        return `M${M[0].x},${M[0].y}`;
      const V = [], Y = [];
      for (let K = 0; K < E - 1; K++)
        V[K] = M[K + 1].x - M[K].x, Y[K] = V[K] === 0 ? 0 : (M[K + 1].y - M[K].y) / V[K];
      const ve = [Y[0]];
      for (let K = 1; K < E - 1; K++)
        if (Y[K - 1] * Y[K] <= 0)
          ve[K] = 0;
        else {
          const Q = 2 * V[K] + V[K - 1], xe = V[K] + 2 * V[K - 1];
          ve[K] = (Q + xe) / (Q / Y[K - 1] + xe / Y[K]);
        }
      ve[E - 1] = Y[E - 2];
      let re = `M${M[0].x.toFixed(2)},${M[0].y.toFixed(2)}`;
      for (let K = 0; K < E - 1; K++) {
        const Q = V[K] / 3;
        re += ` C${(M[K].x + Q).toFixed(2)},${(M[K].y + ve[K] * Q).toFixed(2)} ${(M[K + 1].x - Q).toFixed(2)},${(M[K + 1].y - ve[K + 1] * Q).toFixed(2)} ${M[K + 1].x.toFixed(2)},${M[K + 1].y.toFixed(2)}`;
      }
      return re;
    }
    function ae(M, E) {
      if (E.length === 0)
        return "";
      const V = C.value.top + f.value.h;
      return `${M} L${E[E.length - 1].x.toFixed(2)},${V} L${E[0].x.toFixed(2)},${V} Z`;
    }
    const H = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((M) => ({
        y: C.value.top + f.value.h * M,
        value: b.value * (1 - M)
      }))
    ), q = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((M) => ({
        y: C.value.top + f.value.h * M,
        value: v.value * (1 - M)
      }))
    ), W = y(() => Math.max(1, Math.ceil(h.value / 8)));
    function le(M) {
      return M === h.value - 1 || M % W.value === 0;
    }
    function ne(M) {
      const E = M.currentTarget.getBoundingClientRect(), V = M.clientX - E.left - C.value.left, Y = h.value <= 1 ? 1 : f.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(V / Y)));
    }
    const J = y(() => {
      if (i.value === null || h.value === 0)
        return null;
      const M = i.value;
      return {
        i: M,
        x: B(M),
        label: p.value[M],
        rows: P.value.map((E) => ({
          name: E.name,
          color: E.color,
          value: E.points[M]?.value ?? 0,
          y: E.pts[M]?.y ?? 0
        }))
      };
    }), G = y(() => {
      if (!J.value)
        return {};
      const M = J.value.x > s.value * 0.6;
      return {
        left: `${J.value.x}px`,
        top: "8px",
        transform: M ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (M, E) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: oe({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: ne,
          onMouseleave: E[0] || (E[0] = (V) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(z, null, L(P.value, (V, Y) => (t(), n("linearGradient", {
              id: `pk-fill-${x(c)}-${Y}`,
              key: Y,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": V.color,
                "stop-opacity": "0.25"
              }, null, 8, $v),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, wv)
            ], 8, kv))), 128))
          ]),
          e.showAxis ? (t(), n("g", Cv, [
            (t(!0), n(z, null, L(H.value, (V) => (t(), n("line", {
              key: V.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Sv))), 128)),
            (t(!0), n(z, null, L(H.value, (V) => (t(), n("text", {
              key: `t-${V.y}`,
              x: C.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, m($(V.value)), 9, Mv))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, L(q.value, (V) => (t(), n("text", {
              key: `rt-${V.y}`,
              x: s.value - C.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, m($(V.value)), 9, Bv))), 128)) : w("", !0)
          ])) : w("", !0),
          (t(!0), n(z, null, L(p.value, (V, Y) => pe((t(), n("line", {
            key: `v-${Y}`,
            x1: B(Y),
            x2: B(Y),
            y1: C.value.top,
            y2: C.value.top + f.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, _v)), [
            [Ne, le(Y)]
          ])), 128)),
          (t(!0), n(z, null, L(P.value, (V, Y) => (t(), n("g", {
            key: `s-${Y}`
          }, [
            V.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${x(c)}-${Y})`
            }, null, 8, zv)) : w("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, Av),
            V.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, Pv)) : w("", !0)
          ]))), 128)),
          J.value ? (t(), n("g", Ov, [
            o("line", {
              x1: J.value.x,
              x2: J.value.x,
              y1: C.value.top,
              y2: C.value.top + f.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, jv),
            (t(!0), n(z, null, L(J.value.rows, (V, Y) => (t(), n("circle", {
              key: `d-${Y}`,
              cx: J.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Vv))), 128))
          ])) : w("", !0),
          (t(!0), n(z, null, L(p.value, (V, Y) => pe((t(), n("text", {
            key: `x-${Y}`,
            x: B(Y),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, m(V), 9, Lv)), [
            [Ne, le(Y)]
          ])), 128))
        ], 40, yv)),
        J.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: oe(G.value)
        }, [
          o("p", Tv, m(J.value.label), 1),
          (t(!0), n(z, null, L(J.value.rows, (V, Y) => (t(), n("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: oe({ background: V.color })
            }, null, 4),
            o("span", Dv, m(V.name || "Value"), 1),
            o("span", Ev, m(k(V.value)), 1)
          ]))), 128))
        ], 4)) : w("", !0),
        e.showLegend && g.value.length > 1 ? (t(), n("div", Iv, [
          (t(!0), n(z, null, L(P.value, (V, Y) => (t(), n("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: oe({ background: V.color })
            }, null, 4),
            o("span", Fv, m(V.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Rv = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Uv = { class: "text-muted-foreground text-[11px] capitalize" }, Hv = { class: "text-sm font-semibold tabular-nums" }, Kv = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, ut = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Rv, [
      o("p", Uv, m(e.label), 1),
      o("p", Hv, [
        N(m(e.value) + " ", 1),
        e.share ? (t(), n("span", Kv, " (" + m(e.share) + ") ", 1)) : w("", !0)
      ])
    ]));
  }
}), qv = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Gv = ["width", "height", "viewBox", "aria-label"], Wv = ["d", "fill", "fill-opacity", "onMouseenter"], Zv = ["x", "y"], Jv = ["x", "y"], Yv = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Xv = ["onMouseenter"], Qv = { class: "min-w-0 flex-1 truncate capitalize" }, eg = { class: "tabular-nums font-medium" }, tg = { class: "text-muted-foreground w-9 text-right tabular-nums" }, K3 = /* @__PURE__ */ O({
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
    ], r = y(() => l.data.reduce((b, v) => b + v.value, 0)), s = R(null), i = y(() => l.height), u = y(() => i.value / 2 - 4), d = y(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function c(b) {
      return a[b % a.length];
    }
    function g(b) {
      return 1 - Math.min(0.55, Math.floor(b / a.length) * 0.28);
    }
    const p = y(() => {
      if (r.value <= 0)
        return [];
      const b = i.value / 2;
      let v = -Math.PI / 2;
      return l.data.map((f, B) => {
        const _ = f.value / r.value, P = _ * Math.PI * 2, F = v, I = v + P;
        return v = I, {
          ...f,
          share: _,
          colour: c(B),
          opacity: g(B),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: _ >= 0.9999 ? k(b) : C(b, F, I, u.value, d.value)
        };
      });
    });
    function h(b, v, f) {
      return `${(b + Math.cos(v) * f).toFixed(2)},${(b + Math.sin(v) * f).toFixed(2)}`;
    }
    function C(b, v, f, B, _) {
      const P = f - v > Math.PI ? 1 : 0;
      return _ <= 0 ? `M${b},${b} L${h(b, v, B)} A${B},${B} 0 ${P} 1 ${h(b, f, B)} Z` : [
        `M${h(b, v, B)}`,
        `A${B},${B} 0 ${P} 1 ${h(b, f, B)}`,
        `L${h(b, f, _)}`,
        `A${_},${_} 0 ${P} 0 ${h(b, v, _)}`,
        "Z"
      ].join(" ");
    }
    function k(b) {
      const v = u.value, f = d.value, B = [
        `M${b - v},${b}`,
        `A${v},${v} 0 1 1 ${b + v},${b}`,
        `A${v},${v} 0 1 1 ${b - v},${b}`,
        "Z"
      ];
      return f <= 0 ? B.join(" ") : [
        ...B,
        `M${b - f},${b}`,
        `A${f},${f} 0 1 0 ${b + f},${b}`,
        `A${f},${f} 0 1 0 ${b - f},${b}`,
        "Z"
      ].join(" ");
    }
    const $ = (b) => l.format ? l.format(b) : new Intl.NumberFormat().format(b), S = (b) => `${(b * 100).toFixed(b < 0.01 ? 2 : 0)}%`;
    return (b, v) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: oe({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", qv, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${$(r.value)}`
      }, [
        (t(!0), n(z, null, L(p.value, (f, B) => (t(), n("path", {
          key: B,
          d: f.path,
          fill: f.colour,
          "fill-opacity": s.value === null || s.value === B ? f.opacity : f.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (_) => s.value = B,
          onMouseleave: v[0] || (v[0] = (_) => s.value = null)
        }, null, 40, Wv))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, m($(s.value === null ? r.value : p.value[s.value].value)), 9, Zv),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, m(s.value === null ? "Total" : p.value[s.value].label), 9, Jv)
        ], 64)) : w("", !0)
      ], 8, Gv)),
      o("ul", Yv, [
        (t(!0), n(z, null, L(p.value, (f, B) => (t(), n("li", {
          key: B,
          class: A(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === B ? "bg-muted" : ""]),
          onMouseenter: (_) => s.value = B,
          onMouseleave: v[1] || (v[1] = (_) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: oe({ background: f.colour, opacity: f.opacity })
          }, null, 4),
          o("span", Qv, m(f.label), 1),
          o("span", eg, m($(f.value)), 1),
          o("span", tg, m(S(f.share)), 1)
        ], 42, Xv))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(ut, {
        key: 0,
        label: p.value[s.value].label,
        value: $(p.value[s.value].value),
        share: S(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), ag = ["width", "height", "viewBox", "aria-label"], ng = { class: "text-border" }, lg = ["x1", "x2", "y1", "y2", "stroke-dasharray"], og = { class: "fill-muted-foreground text-[10px]" }, sg = ["x", "y"], rg = ["x", "y"], ig = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], ug = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, q3 = /* @__PURE__ */ O({
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
    let u = null;
    ge(() => {
      u = new ResizeObserver((W) => {
        const le = W[0]?.contentRect.width ?? 0;
        le > 0 && (s.value = le);
      }), r.value && u.observe(r.value);
    }), ke(() => u?.disconnect());
    const d = y(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), c = (W, le) => le.color ?? a[W % a.length], g = y(() => d.value.flatMap((W) => W.points)), p = y(() => g.value.some((W) => typeof W.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, C = y(() => Math.max(10, s.value - h.left - h.right)), k = y(() => Math.max(10, l.height - h.top - h.bottom));
    function $(W) {
      if (W.length === 0)
        return [0, 1];
      const le = Math.min(...W), ne = Math.max(...W), J = ne - le || Math.abs(ne) || 1;
      return [le - J * 0.08, ne + J * 0.08];
    }
    const S = y(() => $(g.value.map((W) => W.x))), b = y(() => $(g.value.map((W) => W.y))), v = (W) => {
      const [le, ne] = S.value;
      return h.left + (W - le) / (ne - le) * C.value;
    }, f = (W) => {
      const [le, ne] = b.value;
      return h.top + k.value - (W - le) / (ne - le) * k.value;
    }, B = y(() => Math.max(...g.value.map((W) => W.r ?? 0), 0));
    function _(W) {
      if (!p.value || !B.value)
        return 4;
      const le = Math.max(0, W.r ?? 0) / B.value;
      return 3 + Math.sqrt(le) * (l.maxRadius - 3);
    }
    function P([W, le]) {
      return Array.from({ length: 5 }, (ne, J) => W + (le - W) / 4 * J);
    }
    const F = y(() => P(S.value)), I = y(() => P(b.value)), ae = (W) => l.formatX?.(W) ?? String(Math.round(W * 100) / 100), H = (W) => l.formatY?.(W) ?? String(Math.round(W * 100) / 100), q = y(() => {
      if (!i.value)
        return null;
      const W = d.value[i.value.s], le = W?.points[i.value.p];
      return le ? { series: W, point: le } : null;
    });
    return (W, le) => (t(), n("div", {
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
        o("g", ng, [
          (t(!0), n(z, null, L(I.value, (ne, J) => (t(), n("line", {
            key: `gy-${J}`,
            x1: h.left,
            x2: h.left + C.value,
            y1: f(ne),
            y2: f(ne),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": J === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, lg))), 128))
        ]),
        o("g", og, [
          (t(!0), n(z, null, L(I.value, (ne, J) => (t(), n("text", {
            key: `ty-${J}`,
            x: h.left - 8,
            y: f(ne) + 3,
            "text-anchor": "end"
          }, m(H(ne)), 9, sg))), 128)),
          (t(!0), n(z, null, L(F.value, (ne, J) => (t(), n("text", {
            key: `tx-${J}`,
            x: v(ne),
            y: e.height - 10,
            "text-anchor": "middle"
          }, m(ae(ne)), 9, rg))), 128))
        ]),
        (t(!0), n(z, null, L(d.value, (ne, J) => (t(), n("g", {
          key: `s-${J}`
        }, [
          (t(!0), n(z, null, L(ne.points, (G, M) => (t(), n("circle", {
            key: `p-${J}-${M}`,
            cx: v(G.x),
            cy: f(G.y),
            r: _(G),
            fill: c(J, ne),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: c(J, ne),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== J || i.value.p !== M) ? 0.35 : 1,
            onMouseenter: (E) => i.value = { s: J, p: M },
            onMouseleave: le[0] || (le[0] = (E) => i.value = null)
          }, null, 40, ig))), 128))
        ]))), 128))
      ], 8, ag)),
      q.value ? (t(), T(ut, {
        key: 0,
        label: q.value.point.label ?? q.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ae(q.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(q.value.point.y)}`,
        share: p.value && q.value.point.r != null ? String(q.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : w("", !0),
      e.showLegend && d.value.length > 1 ? (t(), n("div", ug, [
        (t(!0), n(z, null, L(d.value, (ne, J) => (t(), n("span", {
          key: `l-${J}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: oe({ backgroundColor: c(J, ne) }),
            "aria-hidden": "true"
          }, null, 4),
          N(" " + m(ne.name), 1)
        ]))), 128))
      ])) : w("", !0)
    ], 512));
  }
}), dg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, cg = ["width", "height", "viewBox"], fg = ["points"], mg = ["x1", "y1", "x2", "y2"], pg = ["points", "fill", "stroke"], vg = ["cx", "cy", "fill", "onMouseenter"], gg = ["x", "y", "text-anchor"], hg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, bg = { class: "truncate" }, G3 = /* @__PURE__ */ O({
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
      () => l.series.map((f, B) => ({
        ...f,
        color: f.color ?? a[B % a.length]
      }))
    ), s = y(() => r.value[0]?.points.map((f) => f.label) ?? []), i = y(() => s.value.length), u = y(() => l.height), d = y(() => u.value / 2), c = y(() => u.value / 2 - 34), g = y(() => {
      const f = Math.max(...r.value.flatMap((P) => P.points.map((F) => F.value)), 0);
      if (f <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(f));
      return ([1, 2, 2.5, 5, 10].find((P) => f <= P * B) ?? 10) * B;
    });
    function p(f) {
      return f / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(f, B) {
      const _ = p(f);
      return {
        x: d.value + Math.cos(_) * c.value * B,
        y: d.value + Math.sin(_) * c.value * B
      };
    }
    function C(f) {
      return Array.from({ length: i.value }, (B, _) => {
        const P = h(_, f);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const k = y(() => [0.25, 0.5, 0.75, 1].map((f) => ({ f, points: C(f) }))), $ = y(
      () => r.value.map((f) => {
        const B = f.points.map((_) => Math.max(0, _.value) / g.value);
        return {
          name: f.name,
          color: f.color,
          values: f.points,
          outline: B.map((_, P) => {
            const F = h(P, _);
            return `${F.x.toFixed(2)},${F.y.toFixed(2)}`;
          }).join(" "),
          dots: B.map((_, P) => h(P, _))
        };
      })
    ), S = y(
      () => s.value.map((f, B) => {
        const _ = p(B), P = d.value + Math.cos(_) * (c.value + 14), F = d.value + Math.sin(_) * (c.value + 14), I = Math.cos(_);
        return {
          label: f,
          x: P,
          y: F + 3,
          anchor: Math.abs(I) < 0.2 ? "middle" : I > 0 ? "start" : "end"
        };
      })
    ), b = R(null), v = (f) => l.format ? l.format(f) : new Intl.NumberFormat().format(f);
    return (f, B) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: oe({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", dg, [
      (t(), n("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, L(k.value, (_) => (t(), n("polygon", {
          key: _.f,
          points: _.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, fg))), 128)),
        (t(!0), n(z, null, L(s.value, (_, P) => (t(), n("line", {
          key: `spoke-${P}`,
          x1: d.value,
          y1: d.value,
          x2: h(P, 1).x,
          y2: h(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, mg))), 128)),
        (t(!0), n(z, null, L($.value, (_, P) => (t(), n("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: _.outline,
            fill: _.color,
            "fill-opacity": "0.16",
            stroke: _.color,
            "stroke-width": "2"
          }, null, 8, pg),
          (t(!0), n(z, null, L(_.dots, (F, I) => (t(), n("circle", {
            key: I,
            cx: F.x,
            cy: F.y,
            r: "3",
            fill: _.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ae) => b.value = {
              series: _.name,
              axis: s.value[I],
              value: _.values[I]?.value ?? 0
            },
            onMouseleave: B[0] || (B[0] = (ae) => b.value = null)
          }, null, 40, vg))), 128))
        ]))), 128)),
        (t(!0), n(z, null, L(S.value, (_, P) => (t(), n("text", {
          key: `l-${P}`,
          x: _.x,
          y: _.y,
          "text-anchor": _.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, m(_.label), 9, gg))), 128))
      ], 8, cg)),
      e.showLegend ? (t(), n("ul", hg, [
        (t(!0), n(z, null, L(r.value, (_, P) => (t(), n("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: oe({ background: _.color })
          }, null, 4),
          o("span", bg, m(_.name), 1)
        ]))), 128))
      ])) : w("", !0),
      b.value ? (t(), T(ut, {
        key: 1,
        label: `${b.value.series} — ${b.value.axis}`,
        value: v(b.value.value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), xg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, yg = ["width", "height", "viewBox"], kg = ["cx", "cy", "r"], $g = ["d", "fill", "fill-opacity", "onMouseenter"], wg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Cg = { class: "min-w-0 flex-1 truncate capitalize" }, Sg = { class: "font-medium tabular-nums" }, W3 = /* @__PURE__ */ O({
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
    ], r = R(null), s = y(() => l.height), i = y(() => s.value / 2), u = y(() => s.value / 2 - 6), d = y(() => Math.max(...l.data.map((C) => Math.max(0, C.value)), 0)), c = y(() => {
      const C = l.data.length;
      if (C === 0 || d.value <= 0)
        return [];
      const k = Math.PI * 2 / C;
      return l.data.map(($, S) => {
        const b = Math.sqrt(Math.max(0, $.value) / d.value), v = u.value * b, f = S * k - Math.PI / 2, B = f + k;
        return {
          ...$,
          color: a[S % a.length],
          share: d.value === 0 ? 0 : $.value / d.value,
          path: g(i.value, f, B, v)
        };
      });
    });
    function g(C, k, $, S) {
      if (S <= 0)
        return "";
      if ($ - k >= Math.PI * 2 - 1e-6)
        return `M${C - S},${C} A${S},${S} 0 1 1 ${C + S},${C} A${S},${S} 0 1 1 ${C - S},${C} Z`;
      const b = $ - k > Math.PI ? 1 : 0, v = C + Math.cos(k) * S, f = C + Math.sin(k) * S, B = C + Math.cos($) * S, _ = C + Math.sin($) * S;
      return `M${C},${C} L${v.toFixed(2)},${f.toFixed(2)} A${S.toFixed(2)},${S.toFixed(2)} 0 ${b} 1 ${B.toFixed(2)},${_.toFixed(2)} Z`;
    }
    const p = y(() => [0.5, 0.75, 1].map((C) => u.value * C)), h = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, k) => c.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: oe({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", xg, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, L(p.value, ($) => (t(), n("circle", {
          key: $,
          cx: i.value,
          cy: i.value,
          r: $,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, kg))), 128)),
        (t(!0), n(z, null, L(c.value, ($, S) => (t(), n("path", {
          key: S,
          d: $.path,
          fill: $.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === S ? 0.75 : 0.3,
          onMouseenter: (b) => r.value = S,
          onMouseleave: k[0] || (k[0] = (b) => r.value = null)
        }, null, 40, $g))), 128))
      ], 8, yg)),
      e.showLegend ? (t(), n("ul", wg, [
        (t(!0), n(z, null, L(c.value, ($, S) => (t(), n("li", {
          key: S,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: oe({ background: $.color })
          }, null, 4),
          o("span", Cg, m($.label), 1),
          o("span", Sg, m(h($.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      r.value !== null ? (t(), T(ut, {
        key: 1,
        label: c.value[r.value].label,
        value: h(c.value[r.value].value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), Mg = ["width", "height"], Bg = ["x1", "x2", "y1", "y2"], _g = ["x", "y"], zg = ["x", "y"], Ag = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Pg = ["x", "y", "width", "height", "fill", "fill-opacity"], Og = ["d", "stroke"], jg = ["cx", "cy", "fill"], Vg = ["x", "y"], Lg = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Tg = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Dg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Eg = { class: "text-xs font-semibold tabular-nums" }, Ig = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Fg = { class: "text-muted-foreground" }, Z3 = /* @__PURE__ */ O({
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
    ge(() => {
      i = new ResizeObserver((J) => {
        r.value = Math.max(160, J[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], c = y(
      () => l.bars.map((J, G) => ({
        ...J,
        color: J.color ?? u[G % u.length]
      }))
    ), g = y(
      () => l.lines.map((J, G) => ({
        ...J,
        color: J.color ?? d[G % d.length]
      }))
    ), p = y(
      () => c.value[0]?.points.map((J) => J.label) ?? g.value[0]?.points.map((J) => J.label) ?? []
    ), h = y(() => p.value.length), C = y(() => l.lineAxis === "right"), k = y(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), $ = y(() => ({
      w: Math.max(1, r.value - k.value.left - k.value.right),
      h: Math.max(1, l.height - k.value.top - k.value.bottom)
    }));
    function S(J) {
      const G = Math.max(...J, 0);
      if (G <= 0)
        return 1;
      const M = 10 ** Math.floor(Math.log10(G));
      return ([1, 2, 2.5, 5, 10].find((V) => G <= V * M) ?? 10) * M;
    }
    const b = y(
      () => S([
        ...c.value.flatMap((J) => J.points.map((G) => G.value)),
        ...C.value ? [] : g.value.flatMap((J) => J.points.map((G) => G.value))
      ])
    ), v = y(
      () => C.value ? S(g.value.flatMap((J) => J.points.map((G) => G.value))) : b.value
    ), f = y(() => $.value.w / Math.max(1, h.value)), B = y(() => f.value * 0.6), _ = y(() => B.value / Math.max(1, c.value.length));
    function P(J) {
      return k.value.left + J * f.value + f.value / 2;
    }
    const F = y(
      () => c.value.flatMap(
        (J, G) => J.points.map((M, E) => {
          const V = Math.max(0, M.value) / b.value * $.value.h;
          return {
            x: P(E) - B.value / 2 + G * _.value,
            y: k.value.top + $.value.h - V,
            w: Math.max(0, _.value - 2),
            h: V,
            color: J.color,
            index: E,
            name: J.name,
            value: M.value,
            label: M.label
          };
        })
      )
    ), I = y(
      () => g.value.map((J) => {
        const G = J.points.map((M, E) => ({
          x: P(E),
          y: k.value.top + $.value.h - Math.max(0, M.value) / v.value * $.value.h,
          value: M.value
        }));
        return {
          ...J,
          pts: G,
          d: G.map((M, E) => `${E === 0 ? "M" : "L"}${M.x.toFixed(2)},${M.y.toFixed(2)}`).join(" ")
        };
      })
    ), ae = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((J) => ({
        y: k.value.top + $.value.h * J,
        left: b.value * (1 - J),
        right: v.value * (1 - J)
      }))
    ), H = y(() => Math.max(1, Math.ceil(h.value / 10)));
    function q(J) {
      return J === h.value - 1 || J % H.value === 0;
    }
    const W = (J) => l.format ? l.format(J) : le(J);
    function le(J) {
      return Math.abs(J) >= 1e6 ? `${(J / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(J) >= 1e3 ? `${(J / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(J * 100) / 100);
    }
    const ne = y(() => {
      if (s.value === null)
        return null;
      const J = s.value;
      return {
        label: p.value[J],
        rows: [
          ...c.value.map((G) => ({
            name: G.name,
            color: G.color,
            value: G.points[J]?.value ?? 0
          })),
          ...g.value.map((G) => ({
            name: G.name,
            color: G.color,
            value: G.points[J]?.value ?? 0
          }))
        ]
      };
    });
    return (J, G) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: oe({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: G[0] || (G[0] = (M) => s.value = null)
        }, [
          (t(!0), n(z, null, L(ae.value, (M) => (t(), n("line", {
            key: `g-${M.y}`,
            x1: k.value.left,
            x2: r.value - k.value.right,
            y1: M.y,
            y2: M.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Bg))), 128)),
          (t(!0), n(z, null, L(ae.value, (M) => (t(), n("text", {
            key: `lt-${M.y}`,
            x: k.value.left - 8,
            y: M.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, m(le(M.left)), 9, _g))), 128)),
          C.value ? (t(!0), n(z, { key: 0 }, L(ae.value, (M) => (t(), n("text", {
            key: `rt-${M.y}`,
            x: r.value - k.value.right + 8,
            y: M.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, m(le(M.right)), 9, zg))), 128)) : w("", !0),
          (t(!0), n(z, null, L(p.value, (M, E) => (t(), n("rect", {
            key: `hit-${E}`,
            x: k.value.left + E * f.value,
            y: k.value.top,
            width: f.value,
            height: $.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === E ? 0.4 : 0,
            onMouseenter: (V) => s.value = E
          }, null, 40, Ag))), 128)),
          (t(!0), n(z, null, L(F.value, (M, E) => (t(), n("rect", {
            key: `b-${E}`,
            x: M.x,
            y: M.y,
            width: M.w,
            height: M.h,
            fill: M.color,
            "fill-opacity": s.value === null || s.value === M.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Pg))), 128)),
          (t(!0), n(z, null, L(I.value, (M, E) => (t(), n("g", {
            key: `l-${E}`
          }, [
            o("path", {
              d: M.d,
              fill: "none",
              stroke: M.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Og),
            s.value !== null && M.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: M.pts[s.value].x,
              cy: M.pts[s.value].y,
              r: "4",
              fill: M.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, jg)) : w("", !0)
          ]))), 128)),
          (t(!0), n(z, null, L(p.value, (M, E) => pe((t(), n("text", {
            key: `x-${E}`,
            x: P(E),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, m(M), 9, Vg)), [
            [Ne, q(E)]
          ])), 128))
        ], 40, Mg)),
        ne.value ? (t(), n("div", Lg, [
          o("p", Tg, m(ne.value.label), 1),
          (t(!0), n(z, null, L(ne.value.rows, (M, E) => (t(), n("div", {
            key: E,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: oe({ background: M.color })
            }, null, 4),
            o("span", Dg, m(M.name), 1),
            o("span", Eg, m(W(M.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend ? (t(), n("div", Ig, [
          (t(!0), n(z, null, L([...c.value, ...g.value], (M, E) => (t(), n("span", {
            key: E,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: oe({ background: M.color })
            }, null, 4),
            o("span", Fg, m(M.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Ng = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Rg = { class: "text-muted-foreground" }, Ug = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Hg = ["width", "height"], Kg = ["x", "y"], qg = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Gg = ["x", "y"], Wg = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Zg = { class: "text-[11px] font-medium capitalize" }, Jg = { class: "text-muted-foreground text-[11px] capitalize" }, Yg = { class: "text-sm font-semibold tabular-nums" }, Xg = { class: "text-muted-foreground text-xs font-normal" }, J3 = /* @__PURE__ */ O({
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
    ge(() => {
      i = new ResizeObserver((B) => {
        r.value = Math.max(160, B[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const u = y(() => l.series[0]?.points.map((B) => B.label) ?? []), d = y(() => l.series.length), c = y(() => u.value.length), g = y(() => Math.min(140, Math.max(60, r.value * 0.16))), p = y(() => Math.max(1, r.value - g.value - 8)), h = y(() => p.value / Math.max(1, c.value)), C = y(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
    function k(B) {
      if (B === 0)
        return "var(--muted)";
      const _ = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(B / _ * 100)}%, var(--muted))`;
    }
    function $(B) {
      for (let _ = 0; _ < l.buckets.length; _++) {
        const P = l.buckets[_].max;
        if (P === void 0 || B < P)
          return _;
      }
      return l.buckets.length - 1;
    }
    const S = y(
      () => l.series.flatMap(
        (B, _) => B.points.map((P, F) => {
          const I = $(P.value);
          return {
            row: _,
            col: F,
            x: g.value + F * h.value,
            y: 4 + _ * C.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, C.value - 4),
            colour: k(I),
            label: P.label,
            value: P.value,
            rowName: B.name,
            bucketLabel: l.buckets[I].label
          };
        })
      )
    ), b = y(() => h.value < 2), v = y(() => s.value ? S.value.find((B) => B.row === s.value.row && B.col === s.value.col) ?? null : null), f = (B) => l.format ? l.format(B) : new Intl.NumberFormat().format(B);
    return (B, _) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      d.value === 0 || c.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: oe({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        o("div", Ng, [
          (t(!0), n(z, null, L(e.buckets, (P, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: oe({ background: k(F) })
            }, null, 4),
            o("span", Rg, m(P.label), 1)
          ]))), 128))
        ]),
        b.value ? (t(), n("p", Ug, m(c.value) + " columns - too many to label individually ", 1)) : w("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: _[0] || (_[0] = (P) => s.value = null)
        }, [
          (t(!0), n(z, null, L(e.series, (P, F) => (t(), n("text", {
            key: `r-${F}`,
            x: g.value - 10,
            y: 4 + F * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, m(P.name), 9, Kg))), 128)),
          (t(!0), n(z, null, L(S.value, (P, F) => (t(), n("rect", {
            key: F,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.colour,
            "fill-opacity": s.value === null || s.value.row === P.row && s.value.col === P.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (I) => s.value = { row: P.row, col: P.col }
          }, null, 40, qg))), 128)),
          e.showColumnLabels && !b.value ? (t(!0), n(z, { key: 0 }, L(u.value, (P, F) => (t(), n("text", {
            key: `c-${F}`,
            x: g.value + F * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, m(P), 9, Gg))), 128)) : w("", !0)
        ], 40, Hg)),
        v.value ? (t(), n("div", Wg, [
          o("p", Zg, m(v.value.label), 1),
          o("p", Jg, m(v.value.rowName), 1),
          o("p", Yg, [
            N(m(f(v.value.value)) + " ", 1),
            o("span", Xg, "(" + m(v.value.bucketLabel) + ")", 1)
          ])
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Qg = ["viewBox"], eh = { key: 0 }, th = ["id"], ah = ["stop-color"], nh = ["stop-color"], lh = ["d", "fill"], oh = ["d", "stroke"], ia = 100, tt = 30, bt = /* @__PURE__ */ O({
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
      const d = l.data.map((h) => h.value);
      if (d.length < 2)
        return [];
      const c = Math.min(...d), p = Math.max(...d) - c || 1;
      return d.map((h, C) => ({
        x: C / (d.length - 1) * ia,
        y: tt - (h - c) / p * (tt - 4) - 2
      }));
    });
    function s(d) {
      const c = d.length;
      if (c < 2)
        return "";
      const g = [], p = [];
      for (let k = 0; k < c - 1; k++)
        g[k] = d[k + 1].x - d[k].x, p[k] = g[k] === 0 ? 0 : (d[k + 1].y - d[k].y) / g[k];
      const h = [p[0]];
      for (let k = 1; k < c - 1; k++)
        if (p[k - 1] * p[k] <= 0)
          h[k] = 0;
        else {
          const $ = 2 * g[k] + g[k - 1], S = g[k] + 2 * g[k - 1];
          h[k] = ($ + S) / ($ / p[k - 1] + S / p[k]);
        }
      h[c - 1] = p[c - 2];
      let C = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let k = 0; k < c - 1; k++) {
        const $ = g[k] / 3;
        C += ` C${(d[k].x + $).toFixed(2)},${(d[k].y + h[k] * $).toFixed(2)} ${(d[k + 1].x - $).toFixed(2)},${(d[k + 1].y - h[k + 1] * $).toFixed(2)} ${d[k + 1].x.toFixed(2)},${d[k + 1].y.toFixed(2)}`;
      }
      return C;
    }
    const i = y(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((c, g) => `${g === 0 ? "M" : "L"}${c.x.toFixed(2)},${c.y.toFixed(2)}`).join(" ");
    }), u = y(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${tt} L${d[0].x.toFixed(2)},${tt} Z`;
    });
    return (d, c) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${ia} ${tt}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: oe({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", eh, [
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
          }, null, 8, ah),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, nh)
        ], 8, th)
      ])) : w("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${x(a)})`
      }, null, 8, lh)) : w("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, oh)
    ], 12, Qg)) : w("", !0);
  }
}), sh = { class: "flex items-center gap-1 text-xs" }, rh = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, ih = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Va = /* @__PURE__ */ O({
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
    return (u, d) => (t(), n("span", sh, [
      o("span", {
        class: A(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", rh, m(s.value), 1),
        N(" " + m(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", ih, m(e.comparison), 1)) : w("", !0)
    ]));
  }
}), uh = ["data-collapsed"], dh = { class: "flex flex-wrap items-start justify-between gap-2" }, ch = { class: "flex min-w-0 items-start gap-2" }, fh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mh = ["d"], ph = { class: "min-w-0" }, vh = { class: "text-sm font-medium" }, gh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, hh = { class: "flex shrink-0 items-center gap-1.5" }, bh = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, xh = ["aria-pressed", "onClick"], yh = ["aria-expanded", "aria-label", "title"], kh = ["aria-label"], $h = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wh = ["d"], Ch = /* @__PURE__ */ O({
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
    const l = e, a = Vt(), r = R(l.defaultCollapsed), s = y(() => !!l.icon && !a.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), n("div", {
      class: A(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", dh, [
        o("div", ch, [
          U(u.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", fh, [
              o("path", {
                d: x(ce)(e.icon)
              }, null, 8, mh)
            ])) : w("", !0)
          ]),
          o("div", ph, [
            o("p", vh, m(e.label), 1),
            e.description ? (t(), n("p", gh, m(e.description), 1)) : w("", !0),
            U(u.$slots, "trend")
          ])
        ]),
        o("div", hh, [
          U(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", bh, [
            (t(!0), n(z, null, L(e.periods, (c) => (t(), n("button", {
              key: c.value,
              type: "button",
              class: A([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === c.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === c.value,
              onClick: (g) => u.$emit("update:period", c.value)
            }, m(c.label), 11, xh))), 128))
          ])) : w("", !0),
          e.collapsible ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: d[0] || (d[0] = (c) => r.value = !r.value)
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
            }, [...d[2] || (d[2] = [
              o("path", { d: "m6 9 6 6 6-6" }, null, -1)
            ])], 2))
          ], 8, yh)) : w("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (c) => u.$emit("hide"))
          }, [
            (t(), n("svg", $h, [
              o("path", {
                d: x(ce)("eye-off")
              }, null, 8, wh)
            ]))
          ], 8, kh)) : w("", !0)
        ])
      ]),
      r.value ? w("", !0) : (t(), n("div", {
        key: 0,
        style: oe(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T(_e, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: oe({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : U(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, uh));
  }
}), Sh = ["aria-pressed", "aria-label", "title"], Mh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bh = ["d"], _h = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, zh = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Ah = ["href"], Ph = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Oh = ["d"], jh = ["aria-label", "onClick"], Vh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lh = ["d"], Th = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Dh = ["d"], Eh = {
  key: 0,
  class: "flex flex-col gap-1"
}, Ih = ["onClick"], Fh = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nh = ["d"], Rh = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Uh = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!1), i = R(!1), u = y(
      () => a.catalog.filter((g) => !a.items.some((p) => p.id === g.id))
    );
    function d(g) {
      r(
        "update:items",
        a.items.filter((p) => p.id !== g)
      );
    }
    function c(g) {
      r("update:items", [...a.items, g]), i.value = !1;
    }
    return (g, p) => (t(), n(z, null, [
      D(Ch, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (h) => r("hide"))
      }, {
        actions: j(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (h) => s.value = !s.value)
          }, [
            (t(), n("svg", Mh, [
              o("path", {
                d: x(ce)(s.value ? "check" : "pencil")
              }, null, 8, Bh)
            ]))
          ], 8, Sh)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), n("div", _h, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            D(de, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (h) => i.value = !0)
            }, {
              default: j(() => [...p[6] || (p[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", zh, [
            (t(!0), n(z, null, L(e.items, (h) => (t(), n("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Ph, [
                  o("path", {
                    d: x(ce)(h.icon)
                  }, null, 8, Oh)
                ])),
                N(" " + m(h.label), 1)
              ], 8, Ah),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (C) => d(h.id)
              }, [
                (t(), n("svg", Vh, [
                  o("path", {
                    d: x(ce)("x")
                  }, null, 8, Lh)
                ]))
              ], 8, jh)) : w("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (h) => i.value = !0)
            }, [
              (t(), n("svg", Th, [
                o("path", {
                  d: x(ce)("plus")
                }, null, 8, Dh)
              ])),
              p[8] || (p[8] = N(" Add ", -1))
            ])) : w("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      D(ot, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (h) => i.value = !1)
      }, {
        footer: j(() => [
          D(de, {
            variant: "outline",
            onClick: p[4] || (p[4] = (h) => i.value = !1)
          }, {
            default: j(() => [...p[9] || (p[9] = [
              N("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          u.value.length ? (t(), n("ul", Eh, [
            (t(!0), n(z, null, L(u.value, (h) => (t(), n("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => c(h)
              }, [
                (t(), n("svg", Fh, [
                  o("path", {
                    d: x(ce)(h.icon)
                  }, null, 8, Nh)
                ])),
                N(" " + m(h.label), 1)
              ], 8, Ih)
            ]))), 128))
          ])) : (t(), n("p", Rh, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Hh = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Kh = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, qh = { class: "relative w-full max-w-xl" }, Gh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wh = ["d"], Zh = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Jh = ["data-slot"], Yh = { class: "px-5 py-4" }, Xh = { class: "mb-3 text-sm font-semibold" }, Qh = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, eb = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, tb = ["d"], ab = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, Y3 = /* @__PURE__ */ O({
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
      const d = l.linkComponent;
      return typeof d == "string" ? d : ca(d);
    }), s = at({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const u = y(() => {
      const d = a.value.trim().toLowerCase();
      return l.sections.map((c) => ({
        ...c,
        links: d ? c.links.filter((g) => g.label.toLowerCase().includes(d)) : c.links
      })).filter((c) => c.links.length > 0);
    });
    return (d, c) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : x(He)])
    }, [
      o("header", null, [
        o("h1", Hh, m(e.title), 1),
        e.description ? (t(), n("p", Kh, m(e.description), 1)) : w("", !0)
      ]),
      o("div", qh, [
        (t(), n("svg", Gh, [
          o("path", {
            d: x(ce)("search")
          }, null, 8, Wh)
        ])),
        D($e, {
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (g) => a.value = g),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), n("div", Zh, [
        (t(!0), n(z, null, L(u.value, (g) => (t(), n("section", {
          key: g.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${g.key}`
        }, [
          o("div", Yh, [
            o("h2", Xh, m(g.title), 1),
            o("div", Qh, [
              (t(!0), n(z, null, L(g.links, (p) => (t(), T(Me(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: A(x(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), n("svg", eb, [
                    o("path", {
                      d: x(ce)(p.icon)
                    }, null, 8, tb)
                  ])),
                  N(" " + m(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Jh))), 128))
      ])) : (t(), n("p", ab, ' Nothing matches "' + m(a.value) + '". ', 1))
    ], 2));
  }
}), nb = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, lb = { class: "flex flex-1 flex-col gap-1 p-4" }, ob = { class: "text-muted-foreground relative text-xs font-medium" }, sb = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, rb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, ib = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, ub = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, X3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", nb, [
      o("div", lb, [
        o("p", ob, m(e.label), 1),
        e.loading ? (t(), T(_e, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", sb, " Could not load ")) : (t(), n("span", rb, m(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Va, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", ib, m(e.description), 1)) : w("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", ub, [
        D(bt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : w("", !0)
    ]));
  }
}), db = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, cb = { class: "flex flex-col gap-1 p-4" }, fb = { class: "flex items-start justify-between gap-2" }, mb = { class: "text-sm font-medium" }, pb = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, vb = { class: "mt-1 flex flex-wrap items-center gap-2" }, gb = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, hb = {
  key: 0,
  class: "-mb-px"
}, pt = /* @__PURE__ */ O({
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
    return (i, u) => (t(), n("div", db, [
      o("div", cb, [
        o("div", fb, [
          o("p", mb, m(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", pb, m(e.caption), 1)) : w("", !0),
        o("div", vb, [
          e.loading ? (t(), T(_e, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", gb, m(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: A(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, m(e.delta > 0 ? "+" : "") + m(e.delta) + "% ", 3)) : w("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", hb, [
        D(bt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : w("", !0)
    ]));
  }
}), bb = { class: "relative flex flex-col gap-2" }, xb = ["aria-label"], yb = ["onMouseenter"], kb = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, $b = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, wb = { class: "truncate" }, Cb = { class: "text-sm font-semibold tabular-nums" }, Q3 = /* @__PURE__ */ O({
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
    ], r = y(() => l.segments.reduce((g, p) => g + Math.max(0, p.value), 0)), s = y(() => Math.max(l.total ?? r.value, r.value, 1)), i = y(
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
    ), u = (g) => l.format ? l.format(g) : new Intl.NumberFormat().format(g), d = R(null), c = (g) => `${(g * 100).toFixed(g > 0 && g < 0.01 ? 1 : 0)}%`;
    return (g, p) => (t(), n("div", bb, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: oe({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${u(h.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, L(i.value, (h, C) => (t(), n("span", {
          key: C,
          class: A(["h-full transition-all", [
            C === 0 ? "rounded-l-full" : "",
            C === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: oe({
            width: h.width,
            background: h.color,
            opacity: d.value === null || d.value === C ? 1 : 0.4
          }),
          onMouseenter: (k) => d.value = C,
          onMouseleave: p[0] || (p[0] = (k) => d.value = null)
        }, null, 46, yb))), 128))
      ], 12, xb),
      e.showLegend ? (t(), n("div", kb, [
        (t(!0), n(z, null, L(i.value, (h, C) => (t(), n("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", $b, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: oe({ background: h.color })
            }, null, 4),
            o("span", wb, m(h.label), 1)
          ]),
          o("span", Cb, m(u(h.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      d.value !== null ? (t(), T(ut, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: c(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), Sb = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Mb = ["data-heading"], Bb = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, _b = { class: "text-muted-foreground truncate" }, zb = ["aria-label"], eC = /* @__PURE__ */ O({
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
        const u = i.bar.segments.reduce((c, g) => c + Math.max(0, g.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
        return {
          ...i,
          segments: i.bar.segments.map((c) => ({
            ...c,
            // A visible sliver rather than nothing, for a non-zero value
            // too small to round to a pixel - see `SegmentedBar`.
            width: c.value > 0 ? `max(2px, ${(Math.max(0, c.value) / d * 100).toFixed(2)}%)` : "0px"
          }))
        };
      })
    );
    return (i, u) => (t(), n("div", Sb, [
      (t(!0), n(z, null, L(s.value, (d) => (t(), n("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), n("div", {
          key: 0,
          class: A(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? a[d.tone] : "text-muted-foreground"])
        }, m(d.label), 3)) : (t(), n("div", Bb, [
          o("span", _b, m(d.label), 1),
          o("span", {
            class: A(["shrink-0 font-medium tabular-nums", d.tone ? a[d.tone] : "text-foreground"])
          }, m(d.value), 3)
        ])),
        d.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((c) => `${c.label} ${c.value}`).join(", ")
        }, [
          (t(!0), n(z, null, L(d.segments, (c, g) => (t(), n("span", {
            key: g,
            class: A(["h-full transition-all", r[c.tone ?? "neutral"]]),
            style: oe({ width: c.width })
          }, null, 6))), 128))
        ], 8, zb)) : w("", !0)
      ], 8, Mb))), 128))
    ]));
  }
}), Ab = {
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
}, Pb = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Ob(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function jb(e, l) {
  return l || (e ? Ab[Ob(e)] ?? "neutral" : "neutral");
}
function Vb(e, l) {
  return Pb[jb(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = y(() => Vb(l.status, l.tone));
    return (r, s) => (t(), T(Ue, {
      variant: a.value,
      class: A(l.class)
    }, {
      default: j(() => [
        U(r.$slots, "default", {}, () => [
          N(m(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Lb = ["data-layout"], Tb = ["src", "alt"], Db = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Eb = ["src"], Ib = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Fb = ["onMouseenter"], Nb = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Rb = { class: "min-w-0" }, Ub = { class: "truncate text-sm font-medium" }, Hb = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Kb = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, qb = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Gb = { class: "min-w-0" }, Wb = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Zb = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, Jb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yb = ["d"], Xb = ["aria-label"], Qb = /* @__PURE__ */ O({
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
    function u(S) {
      if (typeof S != "string")
        return null;
      const b = S.trim();
      return b === "" ? null : /^(https?:)?\/\//i.test(b) ? b : null;
    }
    const d = y(() => {
      const S = [r.item.image, ...r.item.images ?? []].map(u).filter((b) => b !== null);
      return [...new Set(S)];
    }), c = y(() => d.value[i.value] ?? d.value[0] ?? null), g = y(
      () => r.item.label.split(/\s+/).slice(0, 2).map((S) => S[0]?.toUpperCase() ?? "").join("")
    ), p = y(() => {
      const S = r.item.progress;
      if (!S)
        return null;
      const b = Math.max(S.total ?? 100, S.value, 1);
      return `${Math.min(100, Math.max(0, S.value / b * 100)).toFixed(2)}%`;
    }), h = y(() => d.value.length > 1 ? d.value[1] : null), C = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), k = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function $(S) {
      S.stopPropagation(), s("cart", r.item.key);
    }
    return (S, b) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: A(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: b[0] || (b[0] = (v) => s("select", e.item.key)),
      onKeydown: b[1] || (b[1] = Ga(he((v) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: b[2] || (b[2] = (v) => i.value = 0)
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
        }, null, 8, Tb)) : (t(), n("span", Db, m(g.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Eb)) : w("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), n("div", Ib, [
          (t(!0), n(z, null, L(d.value, (v, f) => (t(), n("span", {
            key: f,
            class: A(["size-1.5 rounded-full", f === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (B) => i.value = f
          }, null, 42, Fb))), 128))
        ])) : w("", !0)
      ], 2),
      o("div", {
        class: A(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Nb, [
          o("div", Rb, [
            o("p", Ub, m(e.item.label), 1),
            e.item.caption ? (t(), n("p", Hb, m(e.item.caption), 1)) : w("", !0),
            e.item.facts?.length ? (t(), n("p", Kb, m(e.item.facts.join(" · ")), 1)) : w("", !0)
          ]),
          e.item.status ? (t(), T(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : w("", !0)
        ]),
        o("div", qb, [
          o("div", Gb, [
            e.item.price ? (t(), n("p", Wb, m(e.item.price), 1)) : w("", !0),
            k.value ? (t(), n("p", Zb, m(k.value), 1)) : w("", !0)
          ]),
          C.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: $
          }, [
            (t(), n("svg", Jb, [
              o("path", {
                d: x(ce)("cart")
              }, null, 8, Yb)
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
            class: A(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: oe({ width: p.value })
          }, null, 6)
        ], 8, Xb)) : w("", !0)
      ], 2)
    ], 42, Lb));
  }
});
function e1(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function t1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function a1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const n1 = ["data-featured", "data-recommended"], l1 = { class: "flex flex-col gap-1" }, o1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, s1 = { key: 0 }, r1 = { key: 1 }, i1 = { key: 2 }, u1 = { key: 3 }, d1 = { class: "text-sm font-semibold" }, c1 = { class: "flex items-baseline gap-1" }, f1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, m1 = { class: "text-muted-foreground text-sm" }, p1 = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, v1 = { class: "text-muted-foreground mt-1 text-xs" }, g1 = { class: "flex flex-1 flex-col gap-2 text-sm" }, h1 = { class: "flex min-w-0 items-start gap-2" }, b1 = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, x1 = ["d"], y1 = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, k1 = ["d"], $1 = { class: "capitalize" }, w1 = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, C1 = { class: "text-foreground font-medium" }, S1 = { class: "mt-auto flex gap-2 pt-2" }, M1 = /* @__PURE__ */ O({
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
    ), u = y(() => {
      const c = a.plan.perks ?? {};
      return Object.entries(c).map(([g, p]) => ({
        key: g,
        label: g.replace(/_/g, " "),
        granted: a1(p.value),
        display: t1(p.value)
      }));
    }), d = y(() => a.plan.extraPerks ?? []);
    return (c, g) => (t(), n("article", {
      class: A(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", l1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", o1, [
          e.plan.recommended ? (t(), n("span", s1, "Recommended")) : e.plan.featured ? (t(), n("span", r1, "Featured")) : w("", !0),
          e.plan.trial ? (t(), n("span", i1, "Trial")) : w("", !0),
          e.plan.active === !1 ? (t(), n("span", u1, "Inactive")) : w("", !0)
        ])) : w("", !0),
        o("h3", d1, m(e.plan.name), 1),
        o("p", c1, [
          o("span", f1, m(s.value), 1),
          o("span", m1, m(x(e1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", p1, m(e.plan.shortDescription), 1)) : w("", !0),
        o("p", v1, " Active seats: " + m(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", g1, [
        (t(!0), n(z, null, L(u.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", h1, [
            o("span", {
              class: A(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", b1, [
                o("path", {
                  d: x(ce)("check")
                }, null, 8, x1)
              ])) : (t(), n("svg", y1, [
                o("path", {
                  d: x(ce)("x")
                }, null, 8, k1)
              ]))
            ], 2),
            o("span", $1, m(p.label), 1)
          ]),
          p.display ? (t(), n("span", w1, m(p.display), 1)) : w("", !0)
        ]))), 128)),
        (t(!0), n(z, null, L(d.value, (p, h) => (t(), n("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, m(p.key), 1),
          o("span", C1, m(p.value), 1)
        ]))), 128))
      ]),
      o("footer", S1, [
        D(de, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: g[0] || (g[0] = (p) => r("edit", e.plan.id))
        }, {
          default: j(() => [...g[2] || (g[2] = [
            N(" Edit ", -1)
          ])]),
          _: 1
        }),
        D(de, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: g[1] || (g[1] = (p) => r("delete", e.plan.id))
        }, {
          default: j(() => [...g[3] || (g[3] = [
            N(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, n1));
  }
}), B1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, _1 = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, z1 = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, A1 = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, P1 = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, tC = /* @__PURE__ */ O({
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
      class: A(["w-full space-y-6", e.embedded ? "" : x(He)]),
      "data-slot": "plan-grid"
    }, [
      o("header", B1, [
        o("div", null, [
          e.title ? (t(), n("h1", _1, m(e.title), 1)) : w("", !0),
          e.description ? (t(), n("p", z1, m(e.description), 1)) : w("", !0)
        ]),
        D(de, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => a("create"))
        }, {
          default: j(() => [...s[3] || (s[3] = [
            N("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", A1, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", P1, [
        (t(!0), n(z, null, L(e.plans, (i) => (t(), T(M1, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => a("edit", u)),
          onDelete: s[2] || (s[2] = (u) => a("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), O1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, j1 = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, V1 = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, L1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, T1 = { class: "space-y-1.5" }, D1 = { class: "space-y-1.5" }, E1 = { class: "space-y-1.5" }, I1 = { class: "space-y-1.5" }, F1 = { class: "space-y-1.5" }, N1 = { class: "flex items-center gap-3 text-sm" }, R1 = { class: "flex items-center gap-3 text-sm" }, U1 = { class: "flex items-center gap-3 text-sm" }, H1 = {
  key: 0,
  class: "space-y-1.5"
}, K1 = { class: "flex items-center gap-3 text-sm" }, q1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, G1 = { class: "space-y-1.5" }, W1 = ["value"], Z1 = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, J1 = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Y1 = ["id", "value", "onInput"], X1 = { class: "space-y-2" }, Q1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, ex = ["d"], tx = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", St = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", aC = /* @__PURE__ */ O({
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
    }), r = e, s = l, i = lt(a());
    function u(b, v) {
      const f = i.perks?.[b]?.value;
      return f ?? v;
    }
    function d(b, v, f) {
      const B = i.perks?.[b];
      i.perks = {
        ...i.perks ?? {},
        [b]: {
          value: v,
          overview: f ?? B?.overview ?? ""
        }
      };
    }
    function c(b, v) {
      const f = i.perks?.[b];
      i.perks = {
        ...i.perks ?? {},
        [b]: {
          value: f?.value ?? (b === "modules" ? [] : 0),
          overview: v
        }
      };
    }
    function g(b) {
      const v = b ? { ...a(), ...b } : a();
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    g(r.plan), me(
      () => r.plan,
      (b) => g(b),
      { deep: !0 }
    );
    const p = y({
      get: () => {
        const b = u("modules", []);
        return Array.isArray(b) ? b.map(String) : [];
      },
      set: (b) => {
        d("modules", C(b.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), h = y(
      () => r.modules.map((b) => ({ value: b.key, label: b.label }))
    );
    function C(b) {
      const v = Object.fromEntries(r.modules.map((_) => [_.key, _])), f = new Set(b);
      for (const _ of r.modules)
        if (!f.has(_.key))
          for (const P of _.children ?? [])
            f.delete(P);
      let B = !0;
      for (; B; ) {
        B = !1;
        for (const _ of [...f])
          for (const P of v[_]?.requires ?? [])
            f.has(P) || (f.add(P), B = !0);
      }
      return [...f];
    }
    function k() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function $(b) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, f) => f !== b);
    }
    function S() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((b) => b.key.trim() !== "")
      });
    }
    return (b, v) => (t(), n("form", {
      class: A(["w-full space-y-6", e.embedded ? "" : x(He)]),
      "data-slot": "plan-editor",
      onSubmit: he(S, ["prevent"])
    }, [
      o("header", O1, [
        o("div", null, [
          o("h1", j1, m(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          v[13] || (v[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        D(de, {
          type: "button",
          variant: "outline",
          onClick: v[0] || (v[0] = (f) => s("cancel"))
        }, {
          default: j(() => [...v[14] || (v[14] = [
            N("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", V1, [
        o("section", L1, [
          v[26] || (v[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", T1, [
            D(Be, { for: "plan-name" }, {
              default: j(() => [...v[15] || (v[15] = [
                N("Plan name", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": v[1] || (v[1] = (f) => i.name = f),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", D1, [
            D(Be, { for: "plan-short" }, {
              default: j(() => [...v[16] || (v[16] = [
                N("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": v[2] || (v[2] = (f) => i.shortDescription = f),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", E1, [
            D(Be, { for: "plan-description" }, {
              default: j(() => [...v[17] || (v[17] = [
                N("Plan description", -1)
              ])]),
              _: 1
            }),
            pe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": v[3] || (v[3] = (f) => i.description = f),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: A(St)
            }, null, 512), [
              [Se, i.description]
            ])
          ]),
          o("div", I1, [
            D(Be, { for: "plan-days" }, {
              default: j(() => [...v[18] || (v[18] = [
                N("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (f) => i.days = f),
              class: A(tx)
            }, [...v[19] || (v[19] = [
              o("option", { value: 30 }, "Monthly", -1),
              o("option", { value: 365 }, "Yearly", -1),
              o("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                qe,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          o("div", F1, [
            D(Be, { for: "plan-price" }, {
              default: j(() => [...v[20] || (v[20] = [
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
              "onUpdate:modelValue": v[5] || (v[5] = (f) => i.price = Number(f))
            }, null, 8, ["model-value"])
          ]),
          o("label", N1, [
            D(x(Ge), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (f) => i.featured = f)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = N(" Featured ", -1))
          ]),
          o("label", R1, [
            D(x(Ge), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (f) => i.recommended = f)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = N(" Recommended ", -1))
          ]),
          o("label", U1, [
            D(x(Ge), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (f) => i.trial = f)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", H1, [
            D(Be, { for: "plan-trial-days" }, {
              default: j(() => [...v[24] || (v[24] = [
                N("Trial days", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": v[9] || (v[9] = (f) => i.trialDays = Number(f))
            }, null, 8, ["model-value"])
          ])) : w("", !0),
          o("label", K1, [
            D(x(Ge), {
              checked: i.active !== !1,
              "onUpdate:checked": v[10] || (v[10] = (f) => i.active = f)
            }, null, 8, ["checked"]),
            v[25] || (v[25] = N(" Active ", -1))
          ]),
          D(de, {
            type: "submit",
            disabled: e.processing
          }, {
            default: j(() => [
              N(m(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", q1, [
          v[33] || (v[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", G1, [
            D(Be, null, {
              default: j(() => [...v[27] || (v[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Rt, {
              modelValue: p.value,
              "onUpdate:modelValue": v[11] || (v[11] = (f) => p.value = f),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            D(Be, { for: "plan-modules-overview" }, {
              default: j(() => [...v[28] || (v[28] = [
                N("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: A(St),
              onInput: v[12] || (v[12] = (f) => c(
                "modules",
                f.target.value
              ))
            }, null, 40, W1)
          ]),
          (t(!0), n(z, null, L(e.limits, (f) => (t(), n("div", {
            key: f.key,
            class: "space-y-1.5"
          }, [
            f.kind === "toggle" ? (t(), n("label", Z1, [
              D(x(Ge), {
                checked: !!u(f.key, !1),
                "onUpdate:checked": (B) => d(
                  f.key,
                  B,
                  i.perks?.[f.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              N(" " + m(f.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              D(Be, {
                for: `plan-limit-${f.key}`
              }, {
                default: j(() => [
                  N(m(f.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              f.hint ? (t(), n("p", J1, m(f.hint), 1)) : w("", !0),
              D($e, {
                id: `plan-limit-${f.key}`,
                "model-value": Number(u(f.key, 0)),
                type: "number",
                step: f.step ?? 1,
                required: "",
                "onUpdate:modelValue": (B) => d(
                  f.key,
                  Number(B),
                  i.perks?.[f.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              v[29] || (v[29] = o("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            D(Be, {
              for: `plan-overview-${f.key}`
            }, {
              default: j(() => [...v[30] || (v[30] = [
                N("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${f.key}`,
              value: i.perks?.[f.key]?.overview ?? "",
              class: A(St),
              onInput: (B) => c(
                f.key,
                B.target.value
              )
            }, null, 40, Y1)
          ]))), 128)),
          o("div", X1, [
            v[32] || (v[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, L(i.extraPerks ?? [], (f, B) => (t(), n("div", {
              key: B,
              class: "flex items-center gap-2"
            }, [
              D($e, {
                modelValue: f.key,
                "onUpdate:modelValue": (_) => f.key = _,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D($e, {
                modelValue: f.value,
                "onUpdate:modelValue": (_) => f.value = _,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D(de, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (_) => $(B)
              }, {
                default: j(() => [
                  (t(), n("svg", Q1, [
                    o("path", {
                      d: x(ce)("x")
                    }, null, 8, ex)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            D(de, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: k
            }, {
              default: j(() => [...v[31] || (v[31] = [
                N(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), ax = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, nx = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, lx = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, ox = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, sx = ["d"], rx = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, ix = ["aria-pressed"], ux = ["aria-pressed"], dx = {
  key: 0,
  class: "flex flex-col gap-2"
}, cx = ["aria-label"], fx = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, mx = ["aria-pressed", "onClick"], px = ["aria-label"], vx = { class: "text-muted-foreground mr-1 text-xs font-medium" }, gx = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, hx = ["data-slot"], bx = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, xx = { class: "text-muted-foreground text-xs tabular-nums" }, yx = { class: "flex items-center gap-2" }, kx = ["disabled"], $x = ["disabled"], Wt = /* @__PURE__ */ O({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Te({
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
  emits: /* @__PURE__ */ Te(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = st(e, "modelValue"), u = lt({}), d = lt({});
    me(s, () => h());
    function c(I) {
      const ae = I.trim();
      if (ae === "")
        return null;
      const H = Number(ae);
      return Number.isFinite(H) ? H : null;
    }
    function g() {
      const I = {};
      for (const [ae, H] of Object.entries(d))
        I[ae] = { min: c(H.min), max: c(H.max) };
      return I;
    }
    function p() {
      return { query: s.value, selected: { ...u }, ranges: g() };
    }
    function h() {
      r("filter", p());
    }
    function C(I, ae) {
      u[I] = u[I] === ae ? null : ae, h();
    }
    function k(I) {
      return d[I] ?? { min: "", max: "" };
    }
    function $(I, ae, H) {
      const q = d[I] ?? { min: "", max: "" };
      d[I] = { ...q, [ae]: H }, h();
    }
    function S(I) {
      I.key === "Enter" && (I.preventDefault(), r("scan", s.value.trim()));
    }
    const b = y(() => a.facets.filter((I) => (I.kind ?? "chips") === "chips")), v = y(() => a.facets.filter((I) => I.kind === "range")), f = y(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), B = R(1);
    me(
      () => a.items.map((I) => I.key).join(","),
      () => {
        B.value = 1;
      }
    );
    const _ = y(() => {
      const I = a.pageSize;
      return !I || I < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / I));
    }), P = y(() => {
      const I = a.pageSize;
      if (!I || I < 1)
        return a.items;
      const ae = (B.value - 1) * I;
      return a.items.slice(ae, ae + I);
    });
    function F(I) {
      B.value = Math.min(_.value, Math.max(1, I));
    }
    return (I, ae) => (t(), n("div", {
      class: A(["flex flex-col gap-4", x(_a)])
    }, [
      f.value ? (t(), n("div", ax, [
        o("div", nx, [
          e.searchable ? (t(), n("div", lx, [
            (t(), n("svg", ox, [
              o("path", {
                d: x(ce)("search")
              }, null, 8, sx)
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
          e.layoutToggle ? (t(), n("div", rx, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ae[1] || (ae[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, ix),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ae[2] || (ae[2] = (H) => i.value = "list")
            }, " List ", 10, ux)
          ])) : w("", !0)
        ]),
        b.value.length || v.value.length ? (t(), n("div", dx, [
          (t(!0), n(z, null, L(b.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", fx, m(H.label), 1)) : w("", !0),
            (t(!0), n(z, null, L(H.options ?? [], (q) => (t(), n("button", {
              key: q.value,
              type: "button",
              class: A([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[H.key] === q.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[H.key] === q.value ? "true" : "false",
              onClick: (W) => C(H.key, q.value)
            }, m(q.label), 11, mx))), 128))
          ], 8, cx))), 128)),
          (t(!0), n(z, null, L(v.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", vx, m(H.label ?? H.key), 1),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": k(H.key).min,
              "onUpdate:modelValue": (q) => $(H.key, "min", String(q))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ae[7] || (ae[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": k(H.key).max,
              "onUpdate:modelValue": (q) => $(H.key, "max", String(q))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, px))), 128))
        ])) : w("", !0)
      ])) : w("", !0),
      e.items.length === 0 ? (t(), n("p", gx, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: A(
          i.value === "list" ? "flex flex-col gap-3" : x(Pc)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, L(P.value, (H) => (t(), T(Qb, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ae[3] || (ae[3] = (q) => r("select", q)),
          onCart: ae[4] || (ae[4] = (q) => r("cart", q))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, hx)),
      e.pageSize && _.value > 1 ? (t(), n("div", bx, [
        o("p", xx, " Page " + m(B.value) + " of " + m(_.value), 1),
        o("div", yx, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: B.value <= 1,
            onClick: ae[5] || (ae[5] = (H) => F(B.value - 1))
          }, " Previous ", 8, kx),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: B.value >= _.value,
            onClick: ae[6] || (ae[6] = (H) => F(B.value + 1))
          }, " Next ", 8, $x)
        ])
      ])) : w("", !0)
    ], 2));
  }
}), wx = ["aria-label"], Cx = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Sx = { class: "min-w-0" }, Mx = { class: "text-base font-semibold" }, Bx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, _x = { class: "flex shrink-0 items-center gap-2" }, zx = { class: "min-h-0 flex-1 overflow-y-auto" }, Ax = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Zt = /* @__PURE__ */ O({
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
    let i = null, u = "";
    function d(c) {
      if (!a.open)
        return;
      if (c.key === "Escape") {
        c.stopPropagation(), r("close");
        return;
      }
      if (c.key !== "Tab" || !s.value)
        return;
      const g = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (g.length === 0)
        return;
      const p = g[0], h = g[g.length - 1];
      c.shiftKey && document.activeElement === p ? (c.preventDefault(), h.focus()) : !c.shiftKey && document.activeElement === h && (c.preventDefault(), p.focus());
    }
    return me(
      () => a.open,
      async (c) => {
        if (c) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await je(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), ke(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (c, g) => (t(), T(Je, { to: "body" }, [
      D(Fe, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: g[0] || (g[0] = (p) => r("close"))
          })) : w("", !0)
        ]),
        _: 1
      }),
      D(Fe, {
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
            o("header", Cx, [
              o("div", Sx, [
                o("h2", Mx, m(e.title), 1),
                e.description ? (t(), n("p", Bx, m(e.description), 1)) : w("", !0)
              ]),
              o("div", _x, [
                U(c.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: g[1] || (g[1] = (p) => r("close"))
                }, [...g[2] || (g[2] = [
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
            o("div", zx, [
              U(c.$slots, "default")
            ]),
            c.$slots.footer ? (t(), n("footer", Ax, [
              U(c.$slots, "footer")
            ])) : w("", !0)
          ], 10, wx)) : w("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Le() {
  return { query: "", selected: {}, ranges: {} };
}
function Px(e, l) {
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
function Jt(e, l) {
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
    if (!Ox(Px(e, r), s))
      return !1;
  return !0;
}
function jx(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === a || i === a;
  }) ?? null;
}
function vt(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const Vx = { class: "flex flex-col gap-6 p-4" }, Lx = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Tx = { class: "text-sm font-semibold" }, Dx = { class: "flex flex-wrap items-center gap-1.5" }, Ex = ["aria-pressed", "onClick"], Ix = { class: "text-sm font-semibold" }, Fx = { class: "flex flex-wrap items-center gap-1.5" }, Nx = { key: 0 }, La = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = lt({}), u = lt({}), d = y(
      () => a.facets.filter((_) => (_.kind ?? "chips") === "chips")
    ), c = y(() => a.facets.filter((_) => _.kind === "range"));
    function g(_) {
      return _ == null ? "" : String(_);
    }
    function p() {
      s.value = a.applied.query ?? "";
      for (const _ of Object.keys(i))
        delete i[_];
      for (const [_, P] of Object.entries(a.applied.selected ?? {}))
        i[_] = P;
      for (const _ of Object.keys(u))
        delete u[_];
      for (const [_, P] of Object.entries(a.applied.ranges ?? {}))
        u[_] = { min: g(P.min), max: g(P.max) };
    }
    me(
      () => a.open,
      (_) => {
        _ && p();
      }
    );
    function h(_) {
      const P = _.trim();
      if (P === "")
        return null;
      const F = Number(P);
      return Number.isFinite(F) ? F : null;
    }
    function C() {
      const _ = {};
      for (const [P, F] of Object.entries(u))
        _[P] = { min: h(F.min), max: h(F.max) };
      return _;
    }
    function k() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const $ = y(() => {
      let _ = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const P of Object.values(i))
        P && (_ += 1);
      for (const P of Object.values(C()))
        (P.min !== null || P.max !== null) && (_ += 1);
      return _;
    });
    function S(_, P) {
      i[_] = i[_] === P ? null : P;
    }
    function b(_) {
      return u[_] ?? { min: "", max: "" };
    }
    function v(_, P, F) {
      const I = u[_] ?? { min: "", max: "" };
      u[_] = { ...I, [P]: F };
    }
    function f() {
      r("apply", k());
    }
    function B() {
      s.value = "";
      for (const _ of Object.keys(i))
        i[_] = null;
      for (const _ of Object.keys(u))
        u[_] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Le(), query: a.applied.query } : Le()
      );
    }
    return (_, P) => (t(), T(Zt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (F) => r("close"))
    }, {
      footer: j(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: B
        }, " Reset all "),
        D(de, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (F) => r("close"))
        }, {
          default: j(() => [...P[5] || (P[5] = [
            N("Cancel", -1)
          ])]),
          _: 1
        }),
        D(de, {
          size: "sm",
          onClick: f
        }, {
          default: j(() => [
            P[6] || (P[6] = N(" Apply", -1)),
            $.value ? (t(), n("span", Nx, " (" + m($.value) + ")", 1)) : w("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        o("div", Vx, [
          e.hideSearch ? w("", !0) : (t(), n("label", Lx, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            D($e, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (F) => s.value = F),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, L(d.value, (F) => (t(), n("section", {
            key: F.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Tx, m(F.label ?? F.key), 1),
            o("div", Dx, [
              (t(!0), n(z, null, L(F.options ?? [], (I) => (t(), n("button", {
                key: I.value,
                type: "button",
                class: A([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[F.key] === I.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[F.key] === I.value ? "true" : "false",
                onClick: (ae) => S(F.key, I.value)
              }, m(I.label), 11, Ex))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, L(c.value, (F) => (t(), n("section", {
            key: F.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Ix, m(F.label ?? F.key), 1),
            o("div", Fx, [
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${F.label ?? F.key} from`,
                "model-value": b(F.key).min,
                "onUpdate:modelValue": (I) => v(F.key, "min", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              P[4] || (P[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${F.label ?? F.key} to`,
                "model-value": b(F.key).max,
                "onUpdate:modelValue": (I) => v(F.key, "max", String(I))
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
  props: /* @__PURE__ */ Te({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Te(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = st(e, "modelValue"), r = l, s = y(() => a.value <= e.min), i = y(() => e.max !== null && a.value >= e.max);
    function u(d) {
      if (e.disabled)
        return;
      const c = a.value + d;
      c < e.min || e.max !== null && c > e.max || (a.value = c, d < 0 ? r("decrease", c) : r("increase", c));
    }
    return (d, c) => (t(), n("div", {
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
        onClick: c[0] || (c[0] = (g) => u(-1))
      }, [
        (t(), n("svg", Hx, [
          o("path", {
            d: x(ce)("minus")
          }, null, 8, Kx)
        ]))
      ], 8, Ux),
      o("span", qx, m(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: c[1] || (c[1] = (g) => u(1))
      }, [
        (t(), n("svg", Wx, [
          o("path", {
            d: x(ce)("plus")
          }, null, 8, Zx)
        ]))
      ], 8, Gx)
    ], 8, Rx));
  }
}), Yx = { class: "divide-border flex flex-col divide-y" }, Xx = { class: "min-w-0" }, Qx = { class: "truncate text-sm font-medium" }, ey = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, ty = { class: "flex shrink-0 items-center gap-2 text-sm" }, ay = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, ny = {
  key: 2,
  class: "font-medium tabular-nums"
}, ly = ["aria-label", "onClick"], oy = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, sy = ["d"], ry = /* @__PURE__ */ O({
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
      const u = Number(i);
      return Number.isFinite(u) && u > 0 ? u : 1;
    }
    return (s, i) => (t(), n("div", Yx, [
      (t(!0), n(z, null, L(e.items, (u) => (t(), n("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Xx, [
          o("p", Qx, m(u.label), 1),
          u.detail ? (t(), n("p", ey, m(u.detail), 1)) : w("", !0)
        ]),
        o("div", ty, [
          e.editable ? (t(), T(Jx, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => a("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), n("span", ay, " ×" + m(u.qty), 1)) : w("", !0),
          u.amount ? (t(), n("span", ny, m(u.amount), 1)) : w("", !0),
          u.status ? (t(), T(we, {
            key: 3,
            status: u.status,
            tone: u.tone
          }, null, 8, ["status", "tone"])) : w("", !0),
          e.editable ? (t(), n("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${u.label}`,
            onClick: (d) => a("remove", u.key)
          }, [
            (t(), n("svg", oy, [
              o("path", {
                d: x(ce)("trash")
              }, null, 8, sy)
            ]))
          ], 8, ly)) : w("", !0)
        ])
      ]))), 128))
    ]));
  }
}), iy = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, uy = { class: "border-b px-4 py-3" }, dy = { class: "text-sm font-medium" }, cy = { class: "flex-1 px-4 py-3" }, fy = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, my = { class: "text-foreground block font-medium" }, py = { class: "mt-1 block" }, vy = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, gy = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, hy = { class: "tabular-nums" }, by = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, xy = { class: "text-muted-foreground" }, yy = {
  key: 0,
  class: "tabular-nums"
}, ky = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, $y = { class: "text-muted-foreground" }, wy = { class: "tabular-nums" }, Cy = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, Sy = { class: "tabular-nums" }, My = {
  key: 4,
  class: "pt-1"
}, By = /* @__PURE__ */ O({
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
    return (r, s) => (t(), n("aside", iy, [
      o("header", uy, [
        o("h2", dy, m(e.title), 1)
      ]),
      o("div", cy, [
        e.items.length === 0 ? (t(), n("p", fy, [
          o("span", my, m(e.emptyTitle), 1),
          o("span", py, m(e.emptyDescription), 1)
        ])) : (t(), T(ry, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => a("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", vy, [
        e.subtotal ? (t(), n("div", gy, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", hy, m(e.subtotal), 1)
        ])) : w("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", by, [
          o("span", xy, m(e.discountLabel), 1),
          e.discount ? (t(), n("span", yy, m(e.discount), 1)) : w("", !0),
          U(r.$slots, "discount")
        ])) : w("", !0),
        e.tax ? (t(), n("div", ky, [
          o("span", $y, m(e.taxLabel), 1),
          o("span", wy, m(e.tax), 1)
        ])) : w("", !0),
        e.total ? (t(), n("div", Cy, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", Sy, m(e.total), 1)
        ])) : w("", !0),
        r.$slots.pay ? (t(), n("div", My, [
          U(r.$slots, "pay")
        ])) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), _y = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, zy = { class: "flex flex-col gap-4" }, Ay = { class: "flex flex-wrap items-start justify-between gap-3" }, Py = { class: "flex items-center gap-2" }, Oy = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, nC = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Te({
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
  emits: /* @__PURE__ */ Te(["select", "pay"], ["update:cart"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(Le()), i = R(!1), u = st(e, "cart"), d = R(!1), c = y(
      () => a.items.filter((H) => Jt(H, s.value))
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
    function C(H, q, W) {
      return {
        ...H,
        qty: q,
        amount: a.formatMoney(W * q)
      };
    }
    function k(H) {
      const q = jx(a.items, H);
      q && $(q.key);
    }
    function $(H) {
      const q = a.items.find((ne) => ne.key === H);
      if (!q || q.status === "out-of-stock")
        return;
      d.value = !1;
      const W = h(q);
      if (u.value.find((ne) => ne.key === H)) {
        u.value = u.value.map(
          (ne) => ne.key === H ? C(ne, Number(ne.qty ?? 1) + 1, W) : ne
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: q.key,
          label: q.label,
          detail: q.caption ?? null,
          qty: 1,
          amount: a.formatMoney(W)
        }
      ];
    }
    function S(H, q) {
      const W = a.items.find((ne) => ne.key === H), le = h(W);
      u.value = u.value.map(
        (ne) => ne.key === H ? C(ne, q, le) : ne
      );
    }
    function b(H) {
      u.value = u.value.filter((q) => q.key !== H);
    }
    const v = y(
      () => u.value.reduce((H, q) => {
        const W = a.items.find((le) => le.key === q.key);
        return H + h(W) * Number(q.qty ?? 1);
      }, 0)
    ), f = y(
      () => a.discountRate > 0 ? Math.round(v.value * a.discountRate) : 0
    ), B = y(
      () => Math.round((v.value - f.value) * a.taxRate)
    ), _ = y(
      () => u.value.length ? a.formatMoney(v.value) : null
    ), P = y(
      () => u.value.length && f.value > 0 ? `−${a.formatMoney(f.value)}` : null
    ), F = y(
      () => u.value.length && a.taxRate > 0 ? a.formatMoney(B.value) : null
    ), I = y(
      () => u.value.length ? a.formatMoney(
        v.value - f.value + B.value
      ) : null
    );
    function ae() {
      d.value = !0, r("pay", u.value);
    }
    return (H, q) => (t(), n(z, null, [
      o("div", _y, [
        o("section", zy, [
          o("div", Ay, [
            D(Ve, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", Py, [
              x(vt)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: q[0] || (q[0] = (W) => s.value = {
                  ...x(Le)(),
                  query: s.value.query
                })
              }, " Clear ")) : w("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: q[1] || (q[1] = (W) => i.value = !0)
              }, [
                q[5] || (q[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                q[6] || (q[6] = N(" Filters ", -1)),
                x(vt)(s.value) ? (t(), n("span", Oy, " on ")) : w("", !0)
              ])) : w("", !0)
            ])
          ]),
          D(Wt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: c.value,
            onFilter: g,
            onSelect: q[2] || (q[2] = (W) => r("select", W)),
            onCart: $,
            onScan: k
          }, null, 8, ["search-placeholder", "items"])
        ]),
        D(By, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: _.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: F.value,
          total: I.value,
          onQty: S,
          onRemove: b
        }, {
          pay: j(() => [
            U(H.$slots, "pay", {
              cart: u.value,
              paid: d.value,
              pay: ae
            }, () => [
              D(de, {
                class: "w-full",
                disabled: u.value.length === 0,
                onClick: ae
              }, {
                default: j(() => [
                  N(m(d.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      D(La, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: q[3] || (q[3] = (W) => i.value = !1),
        onApply: p,
        onReset: q[4] || (q[4] = (W) => s.value = { ...x(Le)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), jy = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Vy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Ly = ["src", "alt"], Ty = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Dy = ["src"], Ey = { class: "flex items-start justify-between gap-3" }, Iy = { class: "text-lg font-semibold tabular-nums" }, Fy = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ny = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Ry = { class: "grid grid-cols-2 gap-3" }, Uy = { class: "flex flex-col gap-2" }, Hy = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, lC = /* @__PURE__ */ O({
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
    const u = y(() => a.item?.kind === "unit"), d = y(() => {
      const p = a.item;
      if (!p)
        return [];
      const h = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(p.key) % 7);
    }), c = y(() => {
      const p = a.item;
      if (!p)
        return [];
      const h = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(p.key) % 5 + 1);
    }), g = y(
      () => !!a.item && !u.value && a.item?.status !== "out-of-stock"
    );
    return (p, h) => (t(), T(Zt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: h[1] || (h[1] = (C) => r("close"))
    }, nt({
      default: j(() => [
        e.item ? (t(), n("div", jy, [
          o("div", Vy, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Ly)) : w("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", Ty, [
            (t(!0), n(z, null, L(e.item.images, (C, k) => (t(), n("img", {
              key: k,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Dy))), 128))
          ])) : w("", !0),
          o("div", Ey, [
            o("div", null, [
              o("p", Iy, m(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", Fy, m(e.item.stock) + " in stock ", 1)) : w("", !0)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", Ny, m(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("div", Ry, [
            D(pt, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? c.value : d.value
            }, null, 8, ["label", "value", "series"]),
            D(pt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", Uy, [
            o("p", Hy, m(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(bt, {
              data: u.value ? c.value : d.value,
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
        fn: j(() => [
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
}), Ky = { class: "flex flex-col gap-10" }, qy = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Gy = { class: "flex flex-col gap-3" }, Wy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Zy = ["src", "alt"], Jy = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Yy = ["aria-label", "aria-pressed", "onClick"], Xy = ["src"], Qy = { class: "flex flex-col gap-5" }, e0 = { class: "flex flex-wrap items-start justify-between gap-3" }, t0 = { class: "min-w-0" }, a0 = { class: "text-2xl font-semibold tracking-tight" }, n0 = { class: "text-muted-foreground mt-1 text-sm" }, l0 = { class: "text-2xl font-semibold tabular-nums" }, o0 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, s0 = { class: "grid grid-cols-2 gap-3 text-sm" }, r0 = {
  key: 0,
  class: "rounded-lg border p-3"
}, i0 = { class: "mt-1 font-medium" }, u0 = { class: "rounded-lg border p-3" }, d0 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, c0 = { class: "mt-1 font-medium" }, f0 = { class: "flex flex-col gap-4" }, m0 = { class: "grid gap-4 sm:grid-cols-2" }, p0 = { class: "bg-card rounded-lg border p-4" }, v0 = { class: "mb-3 text-sm font-medium" }, g0 = /* @__PURE__ */ O({
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
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((b, v) => ({
        label: b,
        value: Math.max(0, Math.round(k + Math.sin(v + $) * k * 0.18))
      }));
    }
    const u = y(() => a.item.kind === "unit"), d = y(() => {
      const k = [a.item.image, ...a.item.images ?? []].filter(
        ($) => typeof $ == "string" && $ !== ""
      );
      return [...new Set(k)];
    }), c = R(0), g = y(() => {
      const k = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(k) || 12, s(a.item.key) % 7);
    }), p = y(() => {
      const k = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(k) || 20, s(a.item.key) % 5 + 1);
    }), h = y(() => u.value ? p.value : g.value), C = y(() => !u.value && a.item.status !== "out-of-stock");
    return (k, $) => (t(), n("div", Ky, [
      o("div", qy, [
        o("div", Gy, [
          o("div", Wy, [
            d.value[c.value] ? (t(), n("img", {
              key: 0,
              src: d.value[c.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Zy)) : w("", !0)
          ]),
          d.value.length > 1 ? (t(), n("div", Jy, [
            (t(!0), n(z, null, L(d.value, (S, b) => (t(), n("button", {
              key: S,
              type: "button",
              class: A(["size-16 shrink-0 overflow-hidden rounded-md border", b === c.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${b + 1}`,
              "aria-pressed": b === c.value ? "true" : "false",
              onClick: (v) => c.value = b
            }, [
              o("img", {
                src: S,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, Xy)
            ], 10, Yy))), 128))
          ])) : w("", !0)
        ]),
        o("div", Qy, [
          o("div", e0, [
            o("div", t0, [
              o("h1", a0, m(e.item.label), 1),
              o("p", n0, m(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          o("p", l0, m(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", o0, m(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("dl", s0, [
            e.item.sku ? (t(), n("div", r0, [
              $[1] || ($[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", i0, m(e.item.sku), 1)
            ])) : w("", !0),
            o("div", u0, [
              o("dt", d0, m(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", c0, m(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
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
      o("section", f0, [
        $[2] || ($[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", m0, [
          D(pt, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          D(pt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: g.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", p0, [
          o("p", v0, m(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(Nv, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), h0 = ["href"], oC = /* @__PURE__ */ O({
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
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : x(He)])
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
        N(" " + m(e.backLabel), 1)
      ], 8, h0),
      D(g0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), b0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, x0 = ["aria-selected", "onClick"], y0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, k0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, $0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, w0 = ["aria-pressed"], C0 = ["aria-pressed"], sC = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Te({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Te(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(a.tabs[0]?.key ?? ""), i = st(e, "layout"), u = R({}), d = R(!1);
    me(
      () => a.tabs.map((S) => S.key).join(","),
      (S) => {
        S.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function c(S) {
      return u.value[S] ?? Le();
    }
    const g = y(
      () => a.tabs.find((S) => S.key === s.value) ?? a.tabs[0] ?? null
    ), p = y(
      () => g.value ? c(g.value.key) : Le()
    ), h = y(() => {
      const S = g.value;
      return S ? S.items.filter((b) => Jt(b, c(S.key))) : [];
    });
    function C(S) {
      const b = g.value?.key;
      b && (u.value = {
        ...u.value,
        [b]: { ...c(b), query: S }
      });
    }
    function k() {
      const S = g.value?.key;
      S && (u.value = { ...u.value, [S]: Le() });
    }
    function $(S) {
      const b = g.value?.key;
      b && (u.value = { ...u.value, [b]: S }, d.value = !1);
    }
    return (S, b) => (t(), n(z, null, [
      o("div", {
        class: A(["flex w-full flex-col gap-8", e.embedded ? "" : x(He)])
      }, [
        D(Ve, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", b0, [
          (t(!0), n(z, null, L(e.tabs, (v) => (t(), n("button", {
            key: v.key,
            type: "button",
            class: A([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === v.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === v.key ? "true" : "false",
            onClick: (f) => s.value = v.key
          }, m(v.label), 11, x0))), 128))
        ])) : w("", !0),
        o("div", y0, [
          D($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: g.value?.searchPlaceholder ?? "Search…",
            "aria-label": g.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": b[0] || (b[0] = (v) => C(String(v)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x(vt)(p.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: k
          }, " Clear ")) : w("", !0),
          (g.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: b[1] || (b[1] = (v) => d.value = !0)
          }, [
            b[8] || (b[8] = o("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              o("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            b[9] || (b[9] = N(" Filters ", -1)),
            x(vt)(p.value) ? (t(), n("span", k0, " on ")) : w("", !0)
          ])) : w("", !0),
          o("div", $0, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: b[2] || (b[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, w0),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: b[3] || (b[3] = (v) => i.value = "list")
            }, " List ", 10, C0)
          ])
        ]),
        D(Wt, {
          layout: i.value,
          "onUpdate:layout": b[4] || (b[4] = (v) => i.value = v),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: b[5] || (b[5] = (v) => r("select", v)),
          onCart: b[6] || (b[6] = (v) => r("cart", v))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(La, {
        open: d.value,
        title: g.value?.filterTitle ?? "Filters",
        "search-placeholder": g.value?.searchPlaceholder ?? "Search…",
        facets: g.value?.facets ?? [],
        applied: p.value,
        onClose: b[7] || (b[7] = (v) => d.value = !1),
        onApply: $,
        onReset: k
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), S0 = { class: "flex flex-col gap-4" }, M0 = { class: "flex flex-col gap-4" }, rC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Le()), i = y(
      () => a.cards.filter((u) => Jt(u, s.value))
    );
    return (u, d) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : x(He)])
    }, [
      D(Ve, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", S0, [
        D(Ve, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(Wt, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: i.value,
          onFilter: d[0] || (d[0] = (c) => s.value = c),
          onSelect: d[1] || (d[1] = (c) => r("select", c)),
          onCart: d[2] || (d[2] = (c) => r("cart", c))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", M0, [
        D(Ve, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(Rl, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": j(({ value: c }) => [
            D(we, {
              status: String(c)
            }, {
              default: j(() => [
                N(m(c), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), B0 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, _0 = { class: "text-sm font-medium" }, z0 = ["width", "height", "aria-label"], A0 = { class: "flex items-center gap-2" }, P0 = /* @__PURE__ */ O({
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
    let u = null;
    function d() {
      return s.value?.getContext("2d") ?? null;
    }
    function c(S) {
      const b = s.value;
      if (!b)
        return null;
      const v = b.getBoundingClientRect(), f = b.width / v.width, B = b.height / v.height;
      return {
        x: (S.clientX - v.left) * f,
        y: (S.clientY - v.top) * B
      };
    }
    function g(S) {
      a.disabled || (i.value = !0, u = c(S), s.value?.setPointerCapture(S.pointerId));
    }
    function p(S) {
      if (!i.value || a.disabled)
        return;
      const b = d(), v = c(S);
      !b || !v || !u || (b.strokeStyle = "#111827", b.lineWidth = 2.4, b.lineCap = "round", b.lineJoin = "round", b.beginPath(), b.moveTo(u.x, u.y), b.lineTo(v.x, v.y), b.stroke(), u = v);
    }
    function h() {
      i.value = !1, u = null;
    }
    function C() {
      const S = s.value, b = d();
      !S || !b || (b.clearRect(0, 0, S.width, S.height), r("clear"));
    }
    function k() {
      const S = s.value;
      S && r("save", S.toDataURL("image/png"));
    }
    function $() {
      const S = s.value, b = d();
      !S || !b || (b.fillStyle = "#ffffff", b.fillRect(0, 0, S.width, S.height));
    }
    return ge($), ke(() => {
      i.value = !1;
    }), (S, b) => (t(), n("div", B0, [
      o("p", _0, m(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: A(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(g, ["prevent"]),
        onPointermove: he(p, ["prevent"]),
        onPointerup: he(h, ["prevent"]),
        onPointerleave: he(h, ["prevent"])
      }, null, 42, z0),
      o("div", A0, [
        D(de, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: j(() => [...b[0] || (b[0] = [
            N(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(de, {
          size: "sm",
          disabled: e.disabled,
          onClick: k
        }, {
          default: j(() => [...b[1] || (b[1] = [
            N("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), O0 = { class: "grid gap-8 lg:grid-cols-2" }, j0 = { class: "flex flex-col gap-3" }, V0 = { class: "text-muted-foreground text-xs" }, L0 = {
  key: 0,
  class: "flex flex-col gap-3"
}, T0 = { class: "flex flex-wrap gap-3" }, D0 = ["onClick"], E0 = ["src", "alt"], I0 = {
  key: 1,
  class: "flex flex-col gap-3"
}, F0 = { class: "flex flex-wrap gap-3" }, N0 = ["onClick"], R0 = ["src", "alt"], U0 = {
  key: 2,
  class: "flex flex-col gap-4"
}, H0 = { class: "flex flex-wrap items-center gap-2" }, K0 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, q0 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, G0 = { class: "flex flex-col gap-2" }, W0 = ["src"], Z0 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, J0 = ["src"], iC = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = R([]), r = R([]), s = R(null), i = R(null), u = R(null), d = R(l.documents[0]?.key ?? "");
    function c(S) {
      try {
        const b = localStorage.getItem(S), v = b ? JSON.parse(b) : [];
        return Array.isArray(v) ? v : [];
      } catch {
        return [];
      }
    }
    ge(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = c(`${l.storageKey}.signatures`), r.value = c(`${l.storageKey}.stamps`), s.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
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
      const b = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: S
      };
      a.value = [b, ...a.value].slice(0, 8), s.value = b.id;
    }
    async function p(S, b) {
      await Ec(S), b(40);
      const v = await new Promise((f, B) => {
        const _ = new FileReader();
        _.onload = () => f(String(_.result)), _.onerror = () => B(new Error("Could not read the file")), _.readAsDataURL(S);
      });
      return b(100), { value: v, name: S.name, size: S.size, url: v };
    }
    function h() {
      const S = u.value?.url ?? u.value?.value;
      if (!S)
        return;
      const b = {
        id: `stamp-${Date.now()}`,
        name: u.value?.name ?? "Stamp",
        dataUrl: S
      };
      r.value = [b, ...r.value].slice(0, 8), i.value = b.id;
    }
    const C = y(
      () => a.value.find((S) => S.id === s.value)?.dataUrl ?? null
    ), k = y(
      () => r.value.find((S) => S.id === i.value)?.dataUrl ?? null
    ), $ = y(() => {
      const S = l.documents.find((v) => v.key === d.value)?.document ?? l.documents[0]?.document ?? {}, b = {
        ...S?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...S,
        branding: b
      };
    });
    return (S, b) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : x(He)])
    }, [
      D(Ve, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", O0, [
        D(P0, {
          label: "Draw a signature",
          onSave: g
        }),
        o("div", j0, [
          b[2] || (b[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", V0, m(x(za)), 1),
          D($a, {
            modelValue: u.value,
            "onUpdate:modelValue": b[0] || (b[0] = (v) => u.value = v),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          D(de, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: h
          }, {
            default: j(() => [...b[1] || (b[1] = [
              N(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", L0, [
        D(Ve, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", T0, [
          (t(!0), n(z, null, L(a.value, (v) => (t(), n("button", {
            key: v.id,
            type: "button",
            class: A(["rounded-md border p-2", v.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (f) => s.value = v.id
          }, [
            o("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, E0)
          ], 10, D0))), 128))
        ])
      ])) : w("", !0),
      r.value.length ? (t(), n("section", I0, [
        D(Ve, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", F0, [
          (t(!0), n(z, null, L(r.value, (v) => (t(), n("button", {
            key: v.id,
            type: "button",
            class: A(["rounded-md border p-2", v.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (f) => i.value = v.id
          }, [
            o("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, R0)
          ], 10, N0))), 128))
        ])
      ])) : w("", !0),
      e.documents.length ? (t(), n("section", U0, [
        o("div", H0, [
          (t(!0), n(z, null, L(e.documents, (v) => (t(), T(de, {
            key: v.key,
            size: "sm",
            variant: d.value === v.key ? "default" : "outline",
            onClick: (f) => d.value = v.key
          }, {
            default: j(() => [
              N(m(v.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", K0, [
          D(ev, {
            document: $.value
          }, null, 8, ["document"]),
          o("div", q0, [
            o("div", G0, [
              b[3] || (b[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), n("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, W0)) : (t(), n("p", Z0, "Draw and save a signature"))
            ]),
            k.value ? (t(), n("img", {
              key: 0,
              src: k.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, J0)) : w("", !0)
          ])
        ])
      ])) : w("", !0)
    ], 2));
  }
}), uC = "panel.dashboard.hiddenWidgets", Y0 = /* @__PURE__ */ Symbol("dashboardHide"), X0 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, dC = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = ct(Y0, null), r = R(
      l.catalog.filter((u) => l.defaults.includes(u.id))
    ), s = R(!1);
    ge(() => {
      if (a?.register("shortcuts", "Shortcuts"), !l.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const u = localStorage.getItem(l.storageKey);
        if (u) {
          const d = JSON.parse(u);
          Array.isArray(d) && (r.value = d.filter(
            (c) => typeof c?.id == "string" && typeof c.label == "string" && typeof c.href == "string"
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
    const i = y(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? w("", !0) : (t(), n("div", X0, [
      D(Uh, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (c) => r.value = c),
        onHide: d[1] || (d[1] = (c) => x(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Q0 = { class: "flex flex-col gap-3" }, ek = ["data-slot"], tk = ["aria-pressed", "aria-label", "title"], ak = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nk = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, lk = { class: "flex h-8 items-center" }, ok = ["aria-label", "title", "onClick"], sk = ["aria-label", "title", "onClick"], rk = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, ik = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, cC = /* @__PURE__ */ O({
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
    function u(f) {
      return a.maskable && (f.sensitive ?? !0);
    }
    function d(f) {
      return u(f) && !s.value && !i.value.has(f.key);
    }
    const c = y(() => a.segments.some(d)), g = y(() => a.segments.some(u)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = y(() => p[a.columns] ?? p[4]), C = y(() => {
      const f = a.columns ?? 4, B = Math.floor(a.segments.length / f) * f;
      return a.segments.slice(0, B);
    }), k = y(() => {
      const f = a.columns ?? 4, B = Math.floor(a.segments.length / f) * f;
      return a.segments.slice(B);
    }), $ = y(() => {
      const f = [];
      return C.value.length > 0 && f.push({ key: "packed", joined: !0, segments: C.value }), k.value.length > 0 && f.push({ key: "leftover", joined: !1, segments: k.value }), f;
    });
    function S() {
      const f = c.value === !1;
      s.value = !f, i.value = /* @__PURE__ */ new Set(), r("toggle", f);
    }
    function b(f) {
      if (!u(f))
        return;
      const B = new Set(i.value);
      if (d(f))
        B.add(f.key);
      else if (B.delete(f.key), s.value) {
        s.value = !1;
        for (const _ of a.segments)
          _.key !== f.key && u(_) && B.add(_.key);
      }
      i.value = B, r("toggle", c.value);
    }
    function v(f) {
      return typeof f == "number" ? new Intl.NumberFormat().format(f) : f;
    }
    return (f, B) => (t(), n("div", Q0, [
      (t(!0), n(z, null, L($.value, (_) => (t(), n("div", {
        key: _.key,
        class: A(["relative shrink-0", _.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": _.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && g.value && _.key === $.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": c.value,
          "aria-label": c.value ? "Show all values" : "Hide all values",
          title: c.value ? "Show all values" : "Hide all values",
          onClick: S
        }, [
          (t(), n("svg", ak, [
            c.value ? (t(), n(z, { key: 0 }, [
              B[0] || (B[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              B[1] || (B[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              B[2] || (B[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              B[3] || (B[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(z, { key: 1 }, [
              B[4] || (B[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              B[5] || (B[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, tk)) : w("", !0),
        o("div", {
          class: A(["grid", [_.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), n(z, null, L(_.segments, (P) => (t(), n("div", {
            key: P.key,
            class: A(["bg-card flex flex-col gap-2 p-4", _.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", nk, m(P.label), 1),
            o("div", lk, [
              e.loading ? (t(), T(_e, {
                key: 0,
                variant: "number"
              })) : d(P) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (F) => b(P)
              }, [
                (t(), n(z, null, L(5, (F) => o("span", {
                  key: F,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, ok)) : u(P) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${v(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (F) => b(P)
              }, m(v(P.value)), 9, sk)) : (t(), n("span", rk, m(v(P.value)), 1)),
              P.trend && !e.loading && !d(P) ? (t(), T(Va, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : w("", !0)
            ]),
            P.sparkline?.length && !e.loading && !d(P) ? (t(), T(bt, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : w("", !0),
            P.caption || P.comparison && P.trend ? (t(), n("p", ik, m(P.caption ?? P.comparison), 1)) : w("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, ek))), 128))
    ]));
  }
}), uk = ["aria-label"], dk = ["aria-valuenow", "aria-label"], ck = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, fk = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, mk = ["title"], pk = { class: "font-medium" }, vk = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, gk = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, hk = { class: "flex items-center justify-between gap-2" }, bk = { class: "text-sm font-semibold" }, xk = { class: "flex items-center gap-3" }, yk = ["href"], kk = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, $k = { class: "flex min-w-0 flex-col gap-0.5" }, wk = { class: "text-sm font-medium" }, Ck = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Sk = {
  key: 1,
  class: "flex flex-col gap-2"
}, Mk = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Bk = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, _k = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, fC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = y(() => a.items.find(($) => !$.done) ?? null), i = y(() => a.items.filter(($) => $.key !== s.value?.key)), u = y(() => a.items.length), d = y(() => a.items.filter(($) => $.done).length), c = y(() => {
      if (!s.value)
        return u.value;
      const $ = a.items.findIndex((S) => S.key === s.value?.key);
      return $ >= 0 ? $ + 1 : 1;
    }), g = y(
      () => u.value > 0 ? Math.round(d.value / u.value * 100) : 0
    ), p = y(() => {
      const $ = a.linkComponent;
      return typeof $ == "string" ? $ : ca($);
    }), h = at({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = at({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), k = at({
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
          style: oe({ width: `${g.value}%` })
        }, null, 4)
      ], 8, dk),
      o("div", ck, [
        o("span", fk, " Step " + m(c.value) + " of " + m(u.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", pk, m(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", vk, m(": " + s.value.detail), 1)) : w("", !0)
        ], 8, mk),
        s.value?.href ? (t(), T(Me(p.value), {
          key: 0,
          href: s.value.href,
          class: A(x(C))
        }, {
          default: j(() => [
            N(m(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : w("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: S[0] || (S[0] = (b) => r("skip"))
        }, m(e.skipLabel), 1)) : w("", !0)
      ])
    ], 8, uk)) : e.items.length ? (t(), n("section", gk, [
      o("div", hk, [
        o("h2", bk, m(e.heading), 1),
        o("div", xk, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: S[1] || (S[1] = (b) => r("skip"))
          }, m(e.skipLabel), 1)) : w("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, yk)) : w("", !0)
        ])
      ]),
      s.value ? (t(), n("div", kk, [
        S[2] || (S[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", $k, [
          o("p", wk, m(s.value.title), 1),
          s.value.detail ? (t(), n("p", Ck, m(s.value.detail), 1)) : w("", !0),
          s.value.href ? (t(), T(Me(p.value), {
            key: 1,
            href: s.value.href,
            class: A(x(h))
          }, {
            default: j(() => [
              N(m(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : w("", !0)
        ])
      ])) : w("", !0),
      i.value.length ? (t(), n("ul", Sk, [
        (t(!0), n(z, null, L(i.value, (b) => (t(), n("li", {
          key: b.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: A([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              b.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            b.done ? (t(), n("svg", Mk, [...S[3] || (S[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : w("", !0)
          ], 2),
          o("div", Bk, [
            o("p", {
              class: A(["text-sm", b.done ? "text-muted-foreground line-through" : "font-medium"])
            }, m(b.title), 3),
            !b.done && b.detail ? (t(), n("p", _k, m(b.detail), 1)) : w("", !0)
          ]),
          !b.done && b.href ? (t(), T(Me(p.value), {
            key: 0,
            href: b.href,
            class: A(x(k))
          }, {
            default: j(() => [
              N(m(b.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : w("", !0)
        ]))), 128))
      ])) : w("", !0)
    ])) : w("", !0);
  }
}), zk = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, Ak = { class: "hidden items-center gap-2 md:flex" }, Pk = { class: "md:hidden" }, Ok = { class: "border-b px-4 py-3" }, jk = { class: "text-muted-foreground text-xs" }, Vk = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, Lk = { class: "font-medium tabular-nums" }, Tk = { class: "ml-auto flex items-center gap-3" }, mC = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = R(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, u) => (t(), n("div", zk, [
      o("div", Ak, [
        U(i.$slots, "actions")
      ]),
      o("div", Pk, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: u[0] || (u[0] = (d) => r.value = !0)
        }, " Actions "),
        D(Ut, {
          open: r.value,
          "onUpdate:open": u[1] || (u[1] = (d) => r.value = d)
        }, {
          default: j(() => [
            D(Ht, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", Ok, [
                  u[4] || (u[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", jk, m(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", Vk, [
                  U(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", Lk, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          N(" All " + m(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          N(m(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", Tk, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: u[2] || (u[2] = (d) => a("select-all-matching"))
        }, " Select all " + m(s(e.total)), 1)) : w("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: u[3] || (u[3] = (d) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), Dk = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Ek = { class: "text-muted-foreground text-xs tabular-nums" }, Ik = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Fk = ["value"], Nk = ["value"], Rk = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Uk = ["disabled"], Hk = ["disabled"], Kk = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, qk = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Gk = ["disabled"], pC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = (c) => new Intl.NumberFormat().format(c), i = y(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), u = y(() => (a.page - 1) * a.perPage + a.rowsOnPage), d = y(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (c, g) => (t(), n("div", Dk, [
      o("p", Ek, [
        N(" Showing " + m(s(i.value)) + "-" + m(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          N("of " + m(s(e.total)), 1)
        ], 64)) : w("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", Ik, [
        g[4] || (g[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: g[0] || (g[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(z, null, L(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, m(p), 9, Nk))), 128))
        ], 40, Fk)
      ])) : w("", !0),
      o("nav", Rk, [
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
        ])], 8, Uk),
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
        ])], 8, Hk),
        o("span", Kk, m(e.page), 1),
        d.value !== null ? (t(), n("span", qk, " of " + m(s(d.value)), 1)) : w("", !0),
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
        ])], 8, Gk)
      ])
    ]));
  }
}), Wk = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Zk = ["aria-current"], Jk = ["title"], Yk = ["aria-current", "onClick"], Xk = ["title"], Qk = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Wk, [
      o("button", {
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => a("select", null))
      }, [
        i[1] || (i[1] = N(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, m(r(e.counts.all ?? 0)), 11, Jk)) : (t(), T(_e, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Zk),
      (t(!0), n(z, null, L(e.tabs, (u) => (t(), n("button", {
        key: u,
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => a("select", u)
      }, [
        N(m(u) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, m(r(e.counts[u] ?? 0)), 11, Xk)) : (t(), T(_e, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Yk))), 128))
    ]));
  }
}), vC = /* @__PURE__ */ gt(Qk, [["__scopeId", "data-v-3967c945"]]), e2 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, t2 = { class: "grid gap-2" }, a2 = {
  key: 0,
  class: "text-destructive text-sm"
}, n2 = { class: "flex gap-2" }, gC = /* @__PURE__ */ O({
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
    })()), i = R(!1), u = Wa(null), d = y(() => u.value?.isLoading.value ?? !1), c = y(() => u.value?.error.value ?? null), g = y(() => u.value?.isSupported.value ?? !1);
    ge(async () => {
      try {
        const { usePasskeyRegister: C } = await import("@laravel/passkeys/vue");
        u.value = C({
          onSuccess: () => {
            s.value = "", i.value = !1, a("success");
          }
        });
      } catch {
        u.value = null;
      }
    });
    const p = async (C) => {
      C.preventDefault(), !(!s.value.trim() || u.value === null) && await u.value.register(s.value);
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return (C, k) => g.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", t2, [
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
          [Se, s.value]
        ]),
        k[4] || (k[4] = o("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      c.value ? (t(), n("p", a2, m(c.value), 1)) : w("", !0),
      o("div", n2, [
        D(de, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: j(() => [
            N(m(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        D(de, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: j(() => [...k[5] || (k[5] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(de, {
      key: 1,
      variant: "outline",
      onClick: k[0] || (k[0] = ($) => i.value = !0)
    }, {
      default: j(() => [...k[2] || (k[2] = [
        N(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", e2, " Passkeys are not supported in this browser. "));
  }
}), l2 = { class: "pk-form-stack" }, o2 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, hC = /* @__PURE__ */ O({
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
    Bt("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), Bt("panelCreateOption", {
      run(c, g) {
        return a.createOption ? a.createOption(c, g) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = y(() => a.nodes.length > 0), i = y(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = y(() => a.errors._conflict);
    function d(c) {
      if (a.upload)
        return (g, p) => a.upload(c, g, p);
    }
    return (c, g) => (t(), n("div", l2, [
      u.value ? (t(), n("p", o2, m(u.value), 1)) : w("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, L(e.nodes, (p, h) => (t(), T(wa, {
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
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, L(e.fields, (p) => (t(), T(Ze, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (h) => e.searchOptions(p.key, h) : void 0,
          upload: d(p.key),
          discard: e.discard,
          class: A(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", p.key, h),
          onAffixAction: (h) => r("affix-action", p.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), s2 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, r2 = { class: "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10" }, i2 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, u2 = ["disabled"], d2 = ["disabled"], c2 = ["disabled"], bC = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Je, { to: "body" }, [
      D(Fe, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: j(() => [
          e.show ? (t(), n("div", s2, [
            o("div", r2, [
              a[3] || (a[3] = o("span", {
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
              o("span", i2, m(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, m(e.discardLabel), 9, u2)) : w("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, m(e.cancelLabel), 9, d2),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, m(e.processing ? "Saving…" : e.saveLabel), 9, c2)
            ])
          ])) : w("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function xC(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = R(Mt(e.value)), s = y(() => Mt(e.value) !== r.value);
  function i() {
    r.value = Mt(e.value);
  }
  function u() {
    e.value = JSON.parse(r.value);
  }
  function d(c) {
    s.value && (c.preventDefault(), c.returnValue = "");
  }
  return ge(() => {
    a && window.addEventListener("beforeunload", d);
  }), ke(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: s, commit: i, discard: u, baseline: r };
}
function Mt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const f2 = {
  key: 0,
  class: "flex flex-col gap-1"
}, m2 = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, p2 = { class: "text-foreground text-sm font-medium" }, v2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, g2 = {
  key: 5,
  class: "max-w-full font-normal"
}, h2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, b2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, x2 = {
  key: 6,
  class: "font-normal"
}, y2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, k2 = { class: "text-muted-foreground truncate font-medium" }, $2 = { class: "text-foreground col-span-2 break-words" }, w2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, C2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, S2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, M2 = ["href"], B2 = { class: "flex min-w-0 items-start gap-2.5" }, _2 = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, z2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, A2 = ["d"], P2 = { class: "min-w-0" }, O2 = { class: "flex flex-wrap items-center gap-2" }, j2 = { class: "text-sm font-semibold" }, V2 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, L2 = ["onClick"], yC = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), u = y(() => a.depth === 0), d = y(() => {
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
    }, g = y(() => a.node.key ? a.record[a.node.key] : null), p = y(() => {
      const k = g.value;
      return k == null || k === "";
    }), h = y(() => {
      if (p.value)
        return "None";
      const k = g.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(k)).toLocaleDateString(void 0, c[a.node.type]);
      let $ = String(k);
      return a.node.transform === "upper" && ($ = $.toUpperCase()), a.node.transform === "lower" && ($ = $.toLowerCase()), [a.node.prefix, $, a.node.suffix].filter(Boolean).join(" ");
    }), C = y(() => {
      const k = typeof g.value == "boolean" ? g.value ? "1" : "" : String(g.value), $ = a.node.colors?.[k] ?? a.node.defaultColor ?? "neutral";
      return Kt[$] ?? "outline";
    });
    return (k, $) => {
      const S = Tt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", f2, [
        o("dt", m2, m(e.node.label), 1),
        o("dd", p2, [
          e.node.type === "badge" && x(td)(g.value) ? (t(), T(Ue, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: j(() => [
              N(m(g.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", v2, "None")) : e.node.type === "icon" ? (t(), T(zu, {
            key: 2,
            value: g.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(Vu, {
            key: 3,
            src: g.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Iu, {
            key: 4,
            value: typeof g.value == "string" ? g.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", g2, [
            e.node.language ? (t(), n("p", h2, m(e.node.language), 1)) : w("", !0),
            o("pre", b2, [
              o("code", null, m(g.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", x2, [
            g.value && typeof g.value == "object" && !Array.isArray(g.value) && Object.keys(g.value).length ? (t(), n("dl", y2, [
              (t(!0), n(z, null, L(g.value, (b, v) => (t(), n("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", k2, m(v), 1),
                o("dd", $2, m(b), 1)
              ]))), 128))
            ])) : (t(), n("span", w2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", C2, [
            (t(!0), n(z, null, L(Array.isArray(g.value) ? g.value : [], (b, v) => (t(), n("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, L(e.node.entries ?? [], (f, B) => (t(), T(S, {
                key: B,
                node: f,
                record: b,
                depth: e.depth + 1,
                onAction: $[0] || ($[0] = (_) => r("action", _))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(g.value) || g.value.length === 0 ? (t(), n("span", S2, "None")) : w("", !0)
          ])) : e.node.url && !p.value ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, m(h.value), 9, M2)) : (t(), n("span", {
            key: 9,
            class: A([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, m(h.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: $[1] || ($[1] = (b) => r("action", e.node.action))
          }, m(e.node.action.label), 1)) : w("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: A(u.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: A(["flex items-start justify-between gap-3", [
            u.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: $[2] || ($[2] = (b) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", B2, [
            e.node.icon ? (t(), n("div", _2, [
              (t(), n("svg", z2, [
                o("path", {
                  d: x(ce)(e.node.icon)
                }, null, 8, A2)
              ]))
            ])) : w("", !0),
            o("div", P2, [
              o("div", O2, [
                o("h3", j2, m(e.node.label), 1),
                e.node.status ? (t(), T(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : w("", !0)
              ]),
              e.node.description ? (t(), n("p", V2, m(e.node.description), 1)) : w("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: A(["grid grid-cols-1 gap-x-6 gap-y-4", [d.value, u.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (b, v) => (t(), T(S, {
            key: v,
            node: b,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[3] || ($[3] = (f) => r("action", f))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: A(["grid grid-cols-1 gap-x-6 gap-y-4", d.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (b, v) => (t(), T(S, {
          key: v,
          node: b,
          record: e.record,
          depth: e.depth + 1,
          onAction: $[4] || ($[4] = (f) => r("action", f))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: A(u.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (b, v) => (t(), n("button", {
            key: v,
            type: "button",
            class: A([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (f) => i.value = v
          }, m(b.label), 11, L2))), 128))
        ], 2),
        (t(!0), n(z, null, L(e.node.children ?? [], (b, v) => pe((t(), n("div", {
          key: v,
          class: A(["flex flex-col gap-5", u.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(b.children ?? [], (f, B) => (t(), T(S, {
            key: B,
            node: f,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[5] || ($[5] = (_) => r("action", _))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ne, i.value === v]
        ])), 128))
      ], 2)) : w("", !0);
    };
  }
}), T2 = { class: "text-muted-foreground text-sm" }, D2 = { class: "flex items-start gap-3" }, E2 = { class: "min-w-0 flex-1" }, I2 = { class: "flex flex-wrap items-center gap-2" }, F2 = { class: "truncate text-sm font-medium" }, N2 = { class: "text-muted-foreground mt-0.5 text-xs" }, R2 = { class: "text-muted-foreground text-xs" }, U2 = { class: "mt-auto flex items-center gap-2" }, H2 = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), n("div", {
      class: A(["flex flex-col gap-4", x(_a)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", T2, m(s.value) + " of " + m(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: A(x(Ac))
      }, [
        (t(!0), n(z, null, L(e.gateways, (d) => (t(), n("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", D2, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: oe({ background: d.color }),
              "aria-hidden": "true"
            }, m(d.mark), 5),
            o("div", E2, [
              o("div", I2, [
                o("h3", F2, m(d.label), 1),
                D(we, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: j(() => [
                    N(m(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), T(we, {
                  key: 0,
                  status: "offered"
                }, {
                  default: j(() => [...u[0] || (u[0] = [
                    N(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), T(we, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: j(() => [...u[1] || (u[1] = [
                    N(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                d.isDefault ? (t(), T(we, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...u[2] || (u[2] = [
                    N(" Default ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                d.connected && d.mode ? (t(), T(we, {
                  key: 3,
                  status: d.mode
                }, {
                  default: j(() => [
                    N(m(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : w("", !0)
              ]),
              o("p", N2, m(d.caption), 1)
            ])
          ]),
          o("p", R2, m(d.methods.join(" · ")), 1),
          o("div", U2, [
            D(de, {
              size: "sm",
              variant: "outline",
              onClick: (c) => r("configure", d.key)
            }, {
              default: j(() => [...u[3] || (u[3] = [
                N(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            D(de, {
              size: "sm",
              variant: "ghost",
              onClick: (c) => r("toggle", d.key)
            }, {
              default: j(() => [
                N(m(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), K2 = { class: "flex flex-col gap-6" }, q2 = { class: "relative" }, G2 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, W2 = ["d"], Z2 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, J2 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, Y2 = { class: "flex flex-wrap items-center gap-2" }, X2 = { class: "text-muted-foreground text-sm" }, Q2 = { class: "flex flex-col gap-1 text-sm" }, e$ = ["value"], t$ = {
  key: 0,
  class: "flex flex-col gap-2"
}, a$ = { class: "flex flex-wrap items-center gap-2" }, n$ = {
  key: 1,
  class: "flex items-center gap-2"
}, kC = /* @__PURE__ */ O({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Te({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const l = st(e, "gateways"), a = R(null), r = R(""), s = y(
      () => l.value.find((k) => k.key === a.value) ?? null
    ), i = y(() => {
      const k = r.value.trim().toLowerCase();
      return k === "" ? l.value : l.value.filter(($) => [$.key, $.label, $.caption, ...$.methods].join(" ").toLowerCase().includes(k));
    });
    function u(k) {
      return k.connected && k.enabled !== !1;
    }
    function d(k, $) {
      l.value = l.value.map(
        (S) => S.key === k ? { ...S, ...$ } : S
      );
    }
    function c(k) {
      a.value = k;
    }
    function g(k) {
      const $ = l.value.find((b) => b.key === k);
      if (!$)
        return;
      const S = !$.connected;
      d(k, {
        connected: S,
        mode: S ? $.mode ?? "test" : null,
        enabled: S,
        isDefault: !1
      });
    }
    function p(k, $) {
      const S = l.value.find((b) => b.key === k);
      S?.connected && d(k, { enabled: $, isDefault: $ ? S.isDefault : !1 });
    }
    function h(k) {
      const $ = l.value.find((S) => S.key === k);
      !$ || !u($) || (l.value = l.value.map((S) => ({
        ...S,
        isDefault: S.key === k
      })));
    }
    function C(k) {
      const $ = a.value;
      !$ || !l.value.find((b) => b.key === $)?.connected || d($, { mode: k });
    }
    return (k, $) => (t(), n(z, null, [
      o("div", K2, [
        D(Ve, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", q2, [
          (t(), n("svg", G2, [
            o("path", {
              d: x(ce)("search")
            }, null, 8, W2)
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
        i.value.length > 0 ? (t(), T(H2, {
          key: 0,
          gateways: i.value,
          onConfigure: c,
          onToggle: g
        }, null, 8, ["gateways"])) : (t(), n("p", Z2, " No gateways match “" + m(r.value.trim()) + "”. ", 1))
      ]),
      D(Zt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: $[8] || ($[8] = (S) => a.value = null)
      }, {
        footer: j(() => [
          D(de, {
            variant: "outline",
            size: "sm",
            onClick: $[6] || ($[6] = (S) => a.value = null)
          }, {
            default: j(() => [...$[21] || ($[21] = [
              N("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(de, {
            key: 0,
            size: "sm",
            onClick: $[7] || ($[7] = (S) => g(s.value.key))
          }, {
            default: j(() => [
              N(m(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : w("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), n("div", J2, [
            o("div", Y2, [
              D(we, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: j(() => [
                  N(m(s.value.connected ? "Connected" : "Not connected"), 1)
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
              })) : w("", !0),
              s.value.isDefault ? (t(), T(we, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...$[11] || ($[11] = [
                  N(" Default ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.connected && s.value.mode ? (t(), T(we, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  N(m(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : w("", !0)
            ]),
            o("p", X2, m(s.value.caption), 1),
            o("label", Q2, [
              $[12] || ($[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, e$)
            ]),
            $[20] || ($[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", t$, [
              $[16] || ($[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              $[17] || ($[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", a$, [
                D(de, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: $[1] || ($[1] = (S) => p(s.value.key, !0))
                }, {
                  default: j(() => [...$[13] || ($[13] = [
                    N(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(de, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: $[2] || ($[2] = (S) => p(s.value.key, !1))
                }, {
                  default: j(() => [...$[14] || ($[14] = [
                    N(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(de, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: $[3] || ($[3] = (S) => h(s.value.key))
                }, {
                  default: j(() => [...$[15] || ($[15] = [
                    N(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : w("", !0),
            s.value.connected ? (t(), n("div", n$, [
              D(de, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: $[4] || ($[4] = (S) => C("test"))
              }, {
                default: j(() => [...$[18] || ($[18] = [
                  N(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              D(de, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: $[5] || ($[5] = (S) => C("live"))
              }, {
                default: j(() => [...$[19] || ($[19] = [
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
function ua(e) {
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
function $C(e) {
  const l = R(ua(e));
  ge(() => {
    l.value = ua(e);
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
  function a(d) {
    const c = new Set(l.value);
    c.has(d) ? c.delete(d) : c.add(d), l.value = c;
  }
  function r(d) {
    const c = new Set(l.value);
    c.add(d), l.value = c;
  }
  function s(d) {
    const c = new Set(l.value);
    c.delete(d), l.value = c;
  }
  function i(d) {
    l.value = new Set(d);
  }
  function u() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: a, hide: r, show: s, setHidden: i, reset: u };
}
function da(e) {
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
function wC(e) {
  const l = R(da(e));
  ge(() => {
    l.value = da(e);
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
  function a(i, u) {
    const d = Math.min(1200, Math.max(48, Math.round(u)));
    l.value = { ...l.value, [i]: d };
  }
  function r(i) {
    const u = {};
    for (const [d, c] of Object.entries(i))
      typeof c == "number" && c >= 48 && c <= 1200 && (u[d] = Math.round(c));
    l.value = u;
  }
  function s() {
    l.value = {};
  }
  return { widths: l, setWidth: a, setWidths: r, reset: s };
}
function CC(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = R(
    l.driver === "none" ? "off" : "connecting"
  ), c = R(/* @__PURE__ */ new Set());
  let g = /* @__PURE__ */ new Map(), p, h, C, k = (/* @__PURE__ */ new Date()).toISOString(), $ = null;
  function S(q, W) {
    g.set(q, { ...g.get(q) ?? {}, ...W }), !p && (p = setTimeout(() => {
      p = void 0, b();
    }, l.batchMs));
  }
  function b() {
    if (g.size === 0)
      return;
    const q = g;
    g = /* @__PURE__ */ new Map();
    const W = /* @__PURE__ */ new Set();
    for (const [le, ne] of q) {
      const J = a.value.find((G) => G[r] === le);
      if (!J) {
        u?.(le, ne);
        continue;
      }
      Object.assign(J, ne), W.add(le);
    }
    W.size !== 0 && (c.value = /* @__PURE__ */ new Set([...c.value, ...W]), setTimeout(() => {
      const le = new Set(c.value);
      W.forEach((ne) => le.delete(ne)), c.value = le;
    }, 1500));
  }
  async function v() {
    if (!(!s || a.value.length === 0)) {
      C?.abort(), C = new AbortController();
      try {
        const q = a.value.map((ne) => ne[r]), { records: W, at: le } = await s(q, k);
        k = le, d.value = "live";
        for (const ne of W)
          S(ne[r], ne);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function f() {
    B(), d.value = "live", h = setInterval(v, l.intervalMs);
  }
  function B() {
    clearInterval(h), h = void 0, C?.abort();
  }
  function _() {
    return window.Echo ?? null;
  }
  function P() {
    const q = _();
    if (!q || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    $ = l.channel;
    const W = q.private(l.channel);
    for (const le of l.events)
      W.listen(le, (ne) => {
        ne?.[r] !== void 0 && S(ne[r], ne);
      });
    d.value = "live", q.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), q.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function F() {
    $ && (_()?.leave($), $ = null);
  }
  function I() {
    l.driver === "poll" && f(), l.driver === "broadcast" && P();
  }
  function ae() {
    B(), F(), clearTimeout(p), p = void 0, g = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (ae(), d.value = "paused") : (k = (/* @__PURE__ */ new Date()).toISOString(), I(), i?.()));
  }
  return ge(() => {
    l.driver !== "none" && (I(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), ae();
  }), { status: d, recentlyChanged: c, applyPatch: S, flush: b, pollOnce: v };
}
const l$ = /^[a-z0-9-]+$/, o$ = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function SC(e) {
  Za(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !l$.test(a) || typeof r != "string" || !o$.test(r) || (l[`--${a}`] = r);
    Bd(l);
  });
}
const s$ = { class: "flex items-center gap-0.5" }, r$ = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", s$, [
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
}), i$ = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(ja, {
      code: "AB-1234",
      style: oe(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), u$ = { class: "flex flex-col gap-2" }, d$ = { class: "bg-card rounded-lg border p-4" }, c$ = { class: "text-muted-foreground truncate text-xs" }, f$ = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, m$ = /* @__PURE__ */ O({
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
    ), u = y(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), d = y(() => {
      const $ = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return $ === "" ? u.value : `${u.value} › ${$.split("/").join(" › ")}`;
    });
    function c($, S) {
      return $.length <= S ? $ : `${$.slice(0, S - 1).trimEnd()}…`;
    }
    const g = y(() => c(s.value, r.value.titleMax)), p = y(() => c(i.value, r.value.descriptionMax));
    function h($, S, b) {
      return $ === 0 ? { tone: "text-muted-foreground", note: "empty" } : $ > b ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : $ < S ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = y(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), k = y(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return ($, S) => (t(), n("div", u$, [
      o("div", d$, [
        o("p", c$, m(d.value), 1),
        o("p", {
          class: A(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", g.value === "" ? "text-muted-foreground italic" : ""])
        }, m(g.value || "Untitled page"), 3),
        o("p", {
          class: A(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, m(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", f$, [
        o("span", {
          class: A(C.value.tone)
        }, " Title " + m(s.value.length) + "/" + m(r.value.titleMax) + " · " + m(C.value.note), 3),
        o("span", {
          class: A(k.value.tone)
        }, " Description " + m(i.value.length) + "/" + m(r.value.descriptionMax) + " · " + m(k.value.note), 3)
      ]),
      S[0] || (S[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), p$ = ["value", "placeholder", "disabled"], v$ = /* @__PURE__ */ O({
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
    function i(u) {
      const d = u.target.value;
      r("update:modelValue", d === "" ? null : d.trim());
    }
    return (u, d) => (t(), n("input", {
      type: "tel",
      inputmode: "tel",
      autocomplete: "tel",
      class: A(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", x(Ce)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, p$));
  }
}), g$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, h$ = ["aria-selected", "disabled", "title", "onClick"], b$ = /* @__PURE__ */ O({
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
    function u(d) {
      a.disabled || r("update:modelValue", d === i.value ? null : d);
    }
    return (d, c) => (t(), n("div", g$, [
      (t(!0), n(z, null, L(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        role: "option",
        class: A(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [x(Ce), i.value === g ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === g,
        disabled: e.disabled,
        title: g,
        onClick: (p) => u(g)
      }, m(g), 11, h$))), 128))
    ]));
  }
}), x$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, y$ = ["disabled"], k$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, $$ = ["onClick"], w$ = ["onClick"], C$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = R(!1), u = y(() => a.field.options ?? []);
    function d(h, C) {
      return !C || h.label.toLowerCase().includes(C) ? !0 : (h.children ?? []).some((k) => d(k, C));
    }
    const c = y(() => {
      const h = s.value.trim().toLowerCase();
      return h ? u.value.filter((C) => d(C, h)) : u.value;
    }), g = y(() => {
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
      return h(u.value);
    });
    function p(h) {
      a.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, C) => (t(), n("div", x$, [
      o("button", {
        type: "button",
        class: A(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Ce)]),
        disabled: e.disabled,
        onClick: C[0] || (C[0] = (k) => i.value = !i.value)
      }, [
        o("span", {
          class: A(g.value ? "" : "text-muted-foreground")
        }, m(g.value ?? "Select…"), 3),
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs" }, "▾", -1))
      ], 10, y$),
      i.value ? (t(), n("div", k$, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": C[1] || (C[1] = (k) => s.value = k),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Se, s.value]
        ]) : w("", !0),
        (t(!0), n(z, null, L(c.value, (k) => (t(), n(z, {
          key: String(k.value)
        }, [
          o("button", {
            type: "button",
            class: A(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === k.value ? "bg-accent" : ""]),
            onClick: ($) => p(k.value)
          }, m(k.label), 11, $$),
          (t(!0), n(z, null, L(k.children ?? [], ($) => (t(), n("button", {
            key: String($.value),
            type: "button",
            class: A(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === $.value ? "bg-accent text-foreground" : ""]),
            onClick: (S) => p($.value)
          }, m($.label), 11, w$))), 128))
        ], 64))), 128))
      ])) : w("", !0)
    ]));
  }
}), S$ = ["aria-label"], M$ = ["disabled", "aria-label", "aria-pressed", "onClick"], B$ = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, _$ = { key: 0 }, z$ = ["id"], A$ = ["fill"], P$ = ["disabled"], O$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkRating",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => Math.max(1, Math.min(10, Number(a.field.max ?? 5)))), i = y(() => !!a.field.allowHalf), u = y(() => {
      const g = Number(a.modelValue);
      return Number.isFinite(g) ? g : 0;
    });
    function d(g) {
      a.disabled || r("update:modelValue", g);
    }
    function c(g) {
      return u.value >= g ? "full" : i.value && u.value >= g - 0.5 ? "half" : "empty";
    }
    return (g, p) => (t(), n("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), n(z, null, L(s.value, (h) => (t(), n("button", {
        key: h,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${h} of ${s.value}`,
        "aria-pressed": u.value >= h,
        onClick: (C) => d(h)
      }, [
        (t(), n("svg", B$, [
          c(h) === "half" ? (t(), n("defs", _$, [
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
            ])], 8, z$)
          ])) : w("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: c(h) === "full" ? "currentColor" : c(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, A$)
        ]))
      ], 8, M$))), 128)),
      u.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (h) => d(0))
      }, " Clear ", 8, P$)) : w("", !0)
    ], 8, S$));
  }
});
function j$() {
  ye("radio", rm), ye("checkboxlist", dm), ye("tags", hm), ye("colour", zm), ye("slider", ip), ye("rating", O$), ye("phone", v$), ye("icon-picker", b$), ye("tree-select", C$), ye("visual-select", kp), ye("markdown", Ff), ye("code", Gf), ye("map", Vm), ye("qrcode", Im), ye("barcode", qm), ye("diff", Zm), ye("seo-preview", m$), Ct("swatch", wp), Ct("voucher-code-box", i$), Ct("document-colour-mode", r$);
}
function Ta() {
  const e = R(null), l = R(!1);
  let a = null;
  return ge(() => {
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
const V$ = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = Ta();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: A(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: oe({ transitionDelay: `${e.delay}ms` })
    }, [
      U(r.$slots, "default")
    ], 6));
  }
}), L$ = ["id"], Pe = /* @__PURE__ */ O({
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
        D(V$, null, {
          default: j(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, L$));
  }
}), T$ = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, D$ = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, E$ = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Ke = /* @__PURE__ */ O({
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
      e.eyebrow ? (t(), n("p", T$, m(e.eyebrow), 1)) : w("", !0),
      e.title ? (t(), n("h2", D$, m(e.title), 1)) : w("", !0),
      e.body ? (t(), n("p", E$, m(e.body), 1)) : w("", !0)
    ], 2)) : w("", !0);
  }
});
function I$() {
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
  return ge(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", a, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), ke(() => {
    l?.removeEventListener("pointermove", a), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const F$ = { class: "pk-tilt-inner relative h-full" }, N$ = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = I$();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", F$, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), R$ = { class: "flex flex-col gap-10" }, U$ = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, H$ = { class: "text-base font-semibold" }, K$ = { class: "text-sm text-pretty text-muted-foreground" }, q$ = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(Pe, null, {
      default: j(() => [
        o("div", R$, [
          D(Ke, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", U$, [
            (t(!0), n(z, null, L(e.items ?? [], (s, i) => (t(), T(N$, {
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
                  o("h3", H$, m(s.title), 1),
                  o("p", K$, m(s.body), 1)
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
}), G$ = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, W$ = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Z$ = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, J$ = ["href"], Y$ = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Pe, null, {
      default: j(() => [
        o("div", G$, [
          o("h2", W$, m(e.title), 1),
          e.body ? (t(), n("p", Z$, m(e.body), 1)) : w("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, m(e.label), 9, J$)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), X$ = { class: "flex flex-col gap-8" }, Q$ = { class: "divide-y rounded-lg border" }, ew = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, tw = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, aw = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Pe, { narrow: "" }, {
      default: j(() => [
        o("div", X$, [
          D(Ke, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Q$, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", ew, [
                N(m(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", tw, m(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), nw = { class: "flex flex-col gap-10" }, lw = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, ow = { class: "text-sm font-semibold" }, sw = { class: "text-sm text-pretty text-muted-foreground" }, rw = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Pe, null, {
      default: j(() => [
        o("div", nw, [
          D(Ke, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", lw, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", ow, m(r.title), 1),
              o("p", sw, m(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), iw = { class: "flex flex-col items-center gap-6 text-center" }, uw = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, dw = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, cw = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, fw = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, mw = ["href"], pw = ["href"], vw = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, gw = /* @__PURE__ */ O({
  __name: "PkHero",
  props: {
    eyebrow: {},
    title: {},
    body: {},
    primaryLabel: {},
    primaryHref: {},
    secondaryLabel: {},
    secondaryHref: {},
    note: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Pe, null, {
      default: j(() => [
        o("div", iw, [
          e.eyebrow ? (t(), n("p", uw, m(e.eyebrow), 1)) : w("", !0),
          o("h1", dw, m(e.title), 1),
          e.body ? (t(), n("p", cw, m(e.body), 1)) : w("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", fw, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, m(e.secondaryLabel), 9, mw)) : w("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, m(e.primaryLabel), 9, pw)) : w("", !0)
          ])) : w("", !0),
          e.note ? (t(), n("p", vw, m(e.note), 1)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), hw = { class: "flex flex-col items-center gap-6" }, bw = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, xw = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, yw = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Pe, { muted: "" }, {
      default: j(() => [
        o("div", hw, [
          e.title ? (t(), n("p", bw, m(e.title), 1)) : w("", !0),
          o("ul", xw, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, m(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), kw = { class: "flex flex-col gap-10" }, $w = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, ww = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, Cw = ["aria-pressed"], Sw = ["aria-pressed"], Mw = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Bw = { class: "grid gap-4 md:grid-cols-3" }, _w = { class: "flex flex-col gap-1" }, zw = { class: "text-sm font-semibold" }, Aw = { class: "flex items-baseline gap-1" }, Pw = { class: "text-3xl font-semibold tracking-tight" }, Ow = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, jw = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, Vw = { class: "flex flex-col gap-2 text-sm" }, Lw = { class: "text-muted-foreground" }, Tw = ["href"], Dw = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(Pe, { muted: "" }, {
      default: j(() => [
        o("div", kw, [
          D(Ke, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", $w, [
            o("div", ww, [
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: u[0] || (u[0] = (d) => a.value = !1)
              }, " Monthly ", 10, Cw),
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: u[1] || (u[1] = (d) => a.value = !0)
              }, " Annual ", 10, Sw)
            ]),
            e.annualNote ? (t(), n("p", Mw, m(e.annualNote), 1)) : w("", !0)
          ])) : w("", !0),
          o("ul", Bw, [
            (t(!0), n(z, null, L(e.items ?? [], (d, c) => (t(), n("li", {
              key: c,
              class: A(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", _w, [
                o("h3", zw, m(d.name), 1),
                o("p", Aw, [
                  o("span", Pw, m(s(d)), 1),
                  d.period ? (t(), n("span", Ow, m(d.period), 1)) : w("", !0)
                ]),
                d.body ? (t(), n("p", jw, m(d.body), 1)) : w("", !0)
              ]),
              o("ul", Vw, [
                (t(!0), n(z, null, L(d.features ?? [], (g, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", Lw, m(g.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), n("a", {
                key: 0,
                href: d.href ?? "#",
                class: A([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, m(d.label), 11, Tw)) : w("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function Ew() {
  const e = R(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const d = l.getBoundingClientRect(), c = d.height + window.innerHeight, g = c <= 0 ? 0 : (window.innerHeight - d.top) / c;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(g, 0), 1)));
  }
  function u() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return ge(() => {
    const d = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, d || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((c) => {
        s = c.some((g) => g.isIntersecting), s && u();
      }), a.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), ke(() => {
    a?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const Iw = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, Fw = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, Nw = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Rw = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Uw = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, Hw = { class: "pk-showcase-stage w-full [perspective:1400px]" }, Kw = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, qw = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, Gw = { class: "ml-3 truncate text-xs text-muted-foreground" }, Ww = { class: "flex" }, Zw = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, Jw = { class: "min-w-0 flex-1 p-4" }, Yw = { class: "flex flex-col divide-y rounded-md border" }, Xw = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = Ew();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", Iw, [
        o("div", Fw, [
          o("div", Nw, [
            o("h2", Rw, m(e.title), 1),
            e.body ? (t(), n("p", Uw, m(e.body), 1)) : w("", !0)
          ]),
          o("div", Hw, [
            o("div", Kw, [
              o("div", qw, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", Gw, m(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", Ww, [
                o("div", Zw, [
                  (t(), n(z, null, L(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: oe({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", Jw, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", Yw, [
                    (t(!0), n(z, null, L(e.rows, (s) => (t(), n("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: oe({ "--pk-row": String(s) })
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
}), Qw = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = Ta(), s = R(0);
    return me(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const d = performance.now(), c = (g) => {
        const p = Math.min((g - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(c) : s.value = l.to;
      };
      requestAnimationFrame(c);
    }), (i, u) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, m(e.prefix ?? "") + m(s.value.toFixed(e.decimals)) + m(e.suffix ?? ""), 513));
  }
}), e4 = { class: "flex flex-col gap-10" }, t4 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, a4 = { class: "order-2 text-sm text-muted-foreground" }, n4 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, l4 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(Pe, { muted: "" }, {
      default: j(() => [
        o("div", e4, [
          D(Ke, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", t4, [
            (t(!0), n(z, null, L(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", a4, m(s.label), 1),
              o("dd", n4, [
                l(s.value) ? (t(), T(Qw, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(z, { key: 1 }, [
                  N(m(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), o4 = { class: "flex flex-col gap-10" }, s4 = { class: "grid gap-6 md:grid-cols-3" }, r4 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, i4 = { class: "text-sm font-semibold" }, u4 = { class: "text-sm text-pretty text-muted-foreground" }, d4 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Pe, null, {
      default: j(() => [
        o("div", o4, [
          D(Ke, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", s4, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", r4, m(s + 1), 1),
              o("h3", i4, m(r.title), 1),
              o("p", u4, m(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), c4 = { class: "flex flex-col gap-10" }, f4 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, m4 = { class: "text-pretty text-sm leading-relaxed" }, p4 = { class: "mt-auto flex items-center gap-3" }, v4 = ["src"], g4 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, h4 = { class: "min-w-0" }, b4 = { class: "block truncate text-sm font-medium" }, x4 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, y4 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Pe, null, {
      default: j(() => [
        o("div", c4, [
          D(Ke, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", f4, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", m4, " “" + m(r.quote) + "” ", 1),
              o("figcaption", p4, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, v4)) : (t(), n("span", g4, m((r.name ?? "?").slice(0, 1)), 1)),
                o("span", h4, [
                  o("span", b4, m(r.name), 1),
                  r.role ? (t(), n("span", x4, m(r.role), 1)) : w("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), MC = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: gw,
      logos: yw,
      features: rw,
      bento: q$,
      showcase: Xw,
      steps: d4,
      stats: l4,
      testimonials: y4,
      pricing: Dw,
      faq: aw,
      cta: Y$
    }, s = y(
      () => (a.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), n(z, null, L(s.value, (d) => (t(), T(Me(d.component), se({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), k4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, BC = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", k4, [
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
}), $4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, _C = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", $4, [...a[0] || (a[0] = [
      Lt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), w4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, zC = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", w4, [...a[0] || (a[0] = [
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
j$();
const AC = "0.0.1";
export {
  Y3 as AdminDirectory,
  wc as Alert,
  Cc as AlertDescription,
  Sc as AlertTitle,
  T3 as AppPageFooter,
  Q4 as AppearanceDrawer,
  X5 as Avatar,
  Q5 as AvatarFallback,
  e3 as AvatarImage,
  Kt as BADGE_VARIANTS,
  Z4 as BadgeResolver,
  H3 as BarChart,
  t3 as Breadcrumb,
  a3 as BreadcrumbEllipsis,
  n3 as BreadcrumbItem,
  l3 as BreadcrumbLink,
  o3 as BreadcrumbList,
  s3 as BreadcrumbPage,
  r3 as BreadcrumbSeparator,
  j4 as BulkActions,
  _a as CATALOGUE_CONTAINER,
  Ac as CATALOGUE_GRID,
  s5 as CATALOGUE_GRID_TIGHT,
  Pc as CATALOGUE_GRID_TILES,
  M3 as Card,
  B3 as CardAction,
  _3 as CardContent,
  z3 as CardDescription,
  A3 as CardFooter,
  P3 as CardHeader,
  O3 as CardTitle,
  By as CartPanel,
  sC as CatalogBrowser,
  Qb as CatalogCard,
  La as CatalogFilterSheet,
  Wt as CatalogGrid,
  lC as CatalogInspect,
  g0 as CatalogItemDetail,
  oC as CatalogItemView,
  rC as CatalogRegister,
  nC as CatalogTill,
  Ch as ChartCard,
  ut as ChartTooltip,
  Br as Checkbox,
  U4 as CheckboxCell,
  H4 as CodeCell,
  Iu as ColourCell,
  Z3 as ComboChart,
  Mr as CreateOptionDialog,
  $r as CreateOptionError,
  uC as DASHBOARD_HIDDEN_STORAGE_KEY,
  Y0 as DASHBOARD_HIDE_KEY,
  dC as DashboardShortcuts,
  Rl as DataTable,
  v3 as Dialog,
  g3 as DialogClose,
  h3 as DialogContent,
  b3 as DialogDescription,
  x3 as DialogFooter,
  y3 as DialogHeader,
  rf as DialogOverlay,
  k3 as DialogScrollContent,
  $3 as DialogTitle,
  w3 as DialogTrigger,
  Y3 as DirectoryPage,
  E5 as DropdownMenu,
  I5 as DropdownMenuCheckboxItem,
  F5 as DropdownMenuContent,
  N5 as DropdownMenuGroup,
  R5 as DropdownMenuItem,
  U5 as DropdownMenuLabel,
  jC as DropdownMenuPortal,
  H5 as DropdownMenuRadioGroup,
  K5 as DropdownMenuRadioItem,
  q5 as DropdownMenuSeparator,
  G5 as DropdownMenuShortcut,
  W5 as DropdownMenuSub,
  Z5 as DropdownMenuSubContent,
  J5 as DropdownMenuSubTrigger,
  Y5 as DropdownMenuTrigger,
  G4 as EditableCell,
  Ce as FOCUS_RING,
  V4 as FOCUS_RING_SOFT,
  Qt as FOCUS_RING_WITHIN,
  u5 as FORM_MEASURE,
  Ze as FormFieldControl,
  J3 as HeatmapChart,
  kt as ICON_PATHS,
  zu as IconCell,
  Vu as ImageCell,
  yC as InfoNode,
  jc as JPEG_IMAGE_ERROR,
  K4 as KeyValueCell,
  C3 as Label,
  Nv as LineChart,
  ry as LineItems,
  pt as MiniStatCard,
  i3 as NavigationMenu,
  u3 as NavigationMenuContent,
  d3 as NavigationMenuIndicator,
  c3 as NavigationMenuItem,
  f3 as NavigationMenuLink,
  m3 as NavigationMenuList,
  p3 as NavigationMenuTrigger,
  of as NavigationMenuViewport,
  Oc as OPAQUE_IMAGE_ERROR,
  He as PAGE_SHELL,
  r5 as PAGE_SHELL_COMPACT,
  i5 as PAGE_SHELL_STACK,
  kC as PaymentGatewaySettings,
  H2 as PaymentGateways,
  K3 as PieChart,
  l5 as PkAlertError,
  BC as PkAuroraBackdrop,
  Ue as PkBadge,
  qm as PkBarcode,
  q$ as PkBento,
  e5 as PkBottomNav,
  j3 as PkBoundary,
  I3 as PkBuilder,
  de as PkButton,
  F3 as PkCalendar,
  V3 as PkCard,
  dm as PkCheckboxList,
  ja as PkCodeBox,
  Gf as PkCodeInput,
  zm as PkColourPicker,
  zC as PkConsoleBackdrop,
  Qw as PkCountUp,
  Y$ as PkCta,
  D3 as PkDeviceFrame,
  Zm as PkDiff,
  ev as PkDocument,
  We as PkDropdown,
  _C as PkEditorialBackdrop,
  _t as PkEmptyState,
  aw as PkFaq,
  rw as PkFeatureGrid,
  Be as PkFieldLabel,
  $a as PkFileUpload,
  Ve as PkHeading,
  gw as PkHero,
  ti as PkKeyValue,
  MC as PkLandingSections,
  yw as PkLogoCloud,
  Pm as PkMap,
  Vm as PkMapField,
  Ff as PkMarkdownInput,
  ot as PkModal,
  Rt as PkMultiSelect,
  a5 as PkOtpInput,
  n5 as PkPageHeader,
  gC as PkPasskeyRegister,
  o5 as PkPasswordInput,
  Dw as PkPricing,
  Im as PkQrCode,
  Jx as PkQtyStepper,
  Ko as PkQueryBuilder,
  rm as PkRadioGroup,
  E3 as PkRepeater,
  V$ as PkReveal,
  ci as PkRichEditor,
  Pe as PkSection,
  Ke as PkSectionHeading,
  Xw as PkShowcase,
  P0 as PkSignaturePad,
  _e as PkSkeleton,
  Zt as PkSlideover,
  ip as PkSlider,
  t5 as PkSpinner,
  l4 as PkStats,
  we as PkStatusBadge,
  yr as PkStepIndicator,
  d4 as PkSteps,
  wp as PkSwatchPreview,
  hm as PkTagsInput,
  y4 as PkTestimonials,
  $e as PkTextInput,
  N$ as PkTiltCard,
  kp as PkVisualSelect,
  M1 as PlanCard,
  aC as PlanEditor,
  tC as PlanGrid,
  W3 as PolarAreaChart,
  G3 as RadarChart,
  R4 as RatingCell,
  J4 as RecordActions,
  hC as RecordForm,
  N4 as RelationCreateDialog,
  T4 as RelationPanel,
  Ab as STATUS_TONES,
  q3 as ScatterChart,
  wa as SchemaNode,
  Q3 as SegmentedBar,
  mC as SelectionBar,
  ef as Separator,
  fC as SetupChecklist,
  Ba as ShadcnInput,
  Ut as Sheet,
  c5 as SheetClose,
  Ht as SheetContent,
  Ic as SheetDescription,
  f5 as SheetFooter,
  Fc as SheetHeader,
  Nc as SheetTitle,
  m5 as SheetTrigger,
  Uh as ShortcutsWidget,
  p5 as Sidebar,
  v5 as SidebarContent,
  g5 as SidebarFooter,
  h5 as SidebarGroup,
  b5 as SidebarGroupAction,
  x5 as SidebarGroupContent,
  y5 as SidebarGroupLabel,
  k5 as SidebarHeader,
  $5 as SidebarInput,
  w5 as SidebarInset,
  C5 as SidebarMenu,
  S5 as SidebarMenuAction,
  M5 as SidebarMenuBadge,
  _5 as SidebarMenuButton,
  z5 as SidebarMenuItem,
  A5 as SidebarMenuSkeleton,
  P5 as SidebarMenuSub,
  O5 as SidebarMenuSubButton,
  j5 as SidebarMenuSubItem,
  V5 as SidebarProvider,
  L5 as SidebarRail,
  T5 as SidebarSeparator,
  D5 as SidebarTrigger,
  iC as SignatureStudio,
  bt as Sparkline,
  S3 as Spinner,
  X3 as StatCard,
  eC as StatListChart,
  cC as StatStrip,
  Ge as Switch,
  za as TRANSPARENT_IMAGE_HELP,
  pC as TablePagination,
  ko as TableShell,
  vC as TableTabs,
  Xs as TableToolbar,
  q4 as TagsCell,
  U3 as ThemeToggle,
  Yc as Tooltip,
  Xc as TooltipContent,
  B5 as TooltipProvider,
  Qc as TooltipTrigger,
  Va as TrendBadge,
  bC as UnsavedBar,
  Mc as alertVariants,
  Md as appearanceVars,
  Ot as applyAppearance,
  Ec as assertTransparentImage,
  at as buttonClasses,
  vt as catalogFiltersActive,
  ee as cn,
  Cr as createOptionActionLabel,
  wr as createOptionTitle,
  e1 as cycleLabel,
  Le as emptyCatalogFilters,
  kr as fieldControl,
  F4 as fieldErrorsFromPayload,
  jx as findExactSku,
  t1 as formatPerkValue,
  td as hasBadgeValue,
  D4 as hasFieldControl,
  N3 as hasOptionPreview,
  ce as iconPath,
  Tc as imageHasTransparency,
  Y4 as initializeAppearance,
  Pt as isDark,
  Jt as matchCatalogItem,
  sf as navigationMenuTriggerStyle,
  up as optionPreview,
  d5 as packWidgetColumns,
  a1 as perkGranted,
  Gt as readAppearance,
  j$ as registerBuiltInFieldControls,
  ye as registerFieldControl,
  Ct as registerOptionPreview,
  E4 as registeredFieldTypes,
  dp as registeredOptionPreviews,
  I4 as resetFieldControls,
  R3 as resetOptionPreviews,
  X4 as setAppearancePersister,
  tf as sidebarMenuButtonVariants,
  Vb as statusBadgeVariant,
  jb as statusTone,
  L4 as toUrl,
  Ma as useAppearance,
  $C as useColumnVisibility,
  wC as useColumnWidths,
  CC as useLiveUpdates,
  I$ as usePointer,
  Ta as useReveal,
  W4 as useSchemaColumns,
  Ew as useScrollProgress,
  L3 as useShellPageFooter,
  ht as useSidebar,
  SC as useTenantTheme,
  xC as useUnsavedChanges,
  AC as version
};
//# sourceMappingURL=index.js.map
