import './ui.css';
import { defineComponent as O, useSlots as Lt, openBlock as t, createElementBlock as n, normalizeClass as z, unref as b, renderSlot as U, createElementVNode as o, toDisplayString as f, createCommentVNode as w, computed as x, normalizeStyle as se, Fragment as A, renderList as L, ref as R, watch as me, useId as Ra, withModifiers as he, createTextVNode as N, createVNode as D, createStaticVNode as Tt, createBlock as T, createSlots as lt, withCtx as j, nextTick as Ve, onBeforeUnmount as ke, Teleport as Xe, Transition as Re, onMounted as ge, withDirectives as pe, vModelText as Me, resolveDynamicComponent as Be, resolveComponent as Dt, vModelSelect as We, vModelDynamic as Ua, mergeProps as re, normalizeProps as ze, guardReactiveProps as Ee, defineAsyncComponent as ea, inject as mt, vShow as Ue, onUnmounted as Ha, isRef as Ka, useTemplateRef as qa, onErrorCaptured as Ga, provide as _t, markRaw as ma, withKeys as Wa, reactive as ot, useModel as rt, mergeModels as De, shallowRef as Za, watchEffect as Ja } from "vue";
import { useForwardPropsEmits as be, DialogRoot as pa, DialogOverlay as Et, DialogPortal as It, DialogContent as Ft, DialogClose as Qe, CheckboxRoot as Ya, CheckboxIndicator as Xa, SwitchRoot as Qa, SwitchThumb as en, DialogDescription as va, DialogTitle as ga, DialogTrigger as ha, createContext as tn, Primitive as et, TooltipRoot as an, TooltipPortal as nn, TooltipContent as ln, TooltipArrow as on, TooltipProvider as ba, TooltipTrigger as sn, Separator as rn, DropdownMenuRoot as un, DropdownMenuCheckboxItem as dn, DropdownMenuItemIndicator as xa, DropdownMenuPortal as cn, DropdownMenuContent as fn, DropdownMenuGroup as mn, useForwardProps as Ae, DropdownMenuItem as pn, DropdownMenuLabel as vn, DropdownMenuRadioGroup as gn, DropdownMenuRadioItem as hn, DropdownMenuSeparator as bn, DropdownMenuSub as xn, DropdownMenuSubContent as yn, DropdownMenuSubTrigger as kn, DropdownMenuTrigger as $n, AvatarRoot as wn, AvatarFallback as Cn, AvatarImage as Sn, NavigationMenuViewport as Mn, NavigationMenuRoot as Bn, NavigationMenuContent as _n, NavigationMenuIndicator as Pn, NavigationMenuItem as zn, NavigationMenuLink as An, NavigationMenuList as On, NavigationMenuTrigger as jn, Label as Vn } from "reka-ui";
import { DropdownMenuPortal as AC } from "reka-ui";
import { X as Nt, Check as ya, AlertCircle as Ln, EyeOff as Tn, Eye as Dn, PanelLeftOpen as En, PanelLeftClose as In, Circle as Fn, ChevronRight as ka, MoreHorizontal as Nn, ChevronDown as Rn, Loader2Icon as Un } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as $a, useMediaQuery as Hn, useEventListener as Kn, defaultDocument as qn } from "@vueuse/core";
import { clsx as Gn } from "clsx";
import { twMerge as Wn } from "tailwind-merge";
import { cva as Rt } from "class-variance-authority";
import { usePage as wa, Link as Zn } from "@inertiajs/vue3";
const wt = {
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
  return e ? wt[e] ?? wt.dot : wt.dot;
}
const Jn = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, Yn = ["d"], Xn = { class: "flex max-w-sm flex-col gap-1" }, Qn = {
  key: 0,
  class: "text-sm font-normal"
}, el = {
  key: 2,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, Pt = /* @__PURE__ */ O({
  __name: "PkEmptyState",
  props: {
    title: {},
    description: {},
    icon: { default: "package" },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = Lt();
    return (a, r) => (t(), n("div", {
      "data-slot": "empty-state",
      class: z(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      b(l).illustration ? (t(), n("div", Jn, [
        U(a.$slots, "illustration")
      ])) : (t(), n("div", {
        key: 1,
        class: z(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
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
            class: z(e.compact ? "size-5" : "size-6")
          }, [
            o("path", {
              d: b(ce)(e.icon)
            }, null, 8, Yn)
          ], 2))
        ])
      ], 2)),
      o("div", Xn, [
        o("p", {
          class: z(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), n("p", Qn, f(e.description), 1)) : w("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", el, [
        U(a.$slots, "actions")
      ])) : w("", !0)
    ], 2));
  }
}), tl = ["aria-label"], Pe = /* @__PURE__ */ O({
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
    function i(u) {
      if (!(l.variant !== "text" || s.value === 1))
        return u === s.value - 1 ? "60%" : void 0;
    }
    return (u, d) => (t(), n("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: se(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(A, null, L(s.value, (c) => (t(), n("span", {
        key: c,
        "aria-hidden": "true",
        class: z(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: se({
          width: i(c - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, tl));
  }
}), al = { class: "w-full border-collapse text-sm" }, nl = { class: "bg-background sticky top-0 z-10" }, ll = {
  key: 0,
  class: "bg-muted/40"
}, ol = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, sl = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, rl = ["colspan"], il = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, ul = { class: "bg-muted/50" }, dl = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, cl = ["id", "checked", "indeterminate"], fl = ["onClick"], ml = {
  key: 0,
  class: "text-xs"
}, pl = {
  key: 1,
  class: "text-xs opacity-40"
}, vl = { key: 1 }, gl = ["aria-label", "onPointerdown"], hl = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, bl = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, xl = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, yl = {
  key: 1,
  class: "px-3 py-2.5"
}, kl = {
  key: 2,
  class: "px-2 py-2.5"
}, $l = {
  key: 0,
  class: "bg-muted/40"
}, wl = ["colspan"], Cl = ["aria-expanded", "dusk", "onClick"], Sl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Ml = {
  key: 1,
  dusk: "group-header"
}, Bl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], _l = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Pl = ["id", "value", "checked", "disabled", "aria-label", "onClick"], zl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Al = ["aria-label", "onClick"], Ol = { class: "text-xs" }, jl = {
  key: 1,
  class: "text-muted-foreground"
}, Vl = { key: 2 }, Ll = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Tl = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, Dl = { key: 0 }, El = { class: "text-muted-foreground block text-[10px] font-medium" }, Il = { class: "font-semibold tabular-nums" }, Fl = { key: 1 }, Nl = 40, Rl = /* @__PURE__ */ O({
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
    const u = R(/* @__PURE__ */ new Set()), d = R(/* @__PURE__ */ new Set());
    function c(W) {
      return a.groupBy?.collapsible ? u.value.has(W) : !1;
    }
    function v(W) {
      if (!a.groupBy?.collapsible)
        return;
      const ee = new Set(d.value);
      ee.add(W), d.value = ee;
      const Y = new Set(u.value);
      Y.has(W) ? Y.delete(W) : Y.add(W), u.value = Y;
    }
    function p(W) {
      return a.groupBy?.collapsible ? !c(r(a.rows[W])) : !0;
    }
    me(
      () => a.rows,
      (W) => {
        if (!a.groupBy?.collapsible || !a.collapsedGroupsByDefault)
          return;
        const ee = new Set(u.value);
        for (const Y of W) {
          const ue = r(Y);
          ue !== "" && !d.value.has(ue) && ee.add(ue);
        }
        u.value = ee;
      },
      { immediate: !0 }
    );
    const g = R(null), C = R(null);
    function y(W, ee) {
      g.value = W, ee.dataTransfer?.setData("text/plain", String(W)), ee.dataTransfer && (ee.dataTransfer.effectAllowed = "move");
    }
    function k() {
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
      const Y = a.rows.map((ie) => ie[a.rowKey]), [ue] = Y.splice(ee, 1);
      Y.splice(W, 0, ue), m("reorder", Y);
    }
    const m = l;
    function h(W, ee) {
      !a.rowClickable || a.reordering || ee.button !== 0 || ee.metaKey || ee.ctrlKey || ee.shiftKey || ee.altKey || ee.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || m("row-click", W);
    }
    const $ = R(null), P = Ra(), I = x(() => a.columns.filter((W) => !a.hidden?.has(W.key))), E = x(() => {
      const W = I.value.find((ee) => ee.sticky);
      return W ? W.key : a.stickyFirst && I.value.length > 0 ? I.value[0].key : null;
    });
    function te(W) {
      return E.value === W.key;
    }
    function H() {
      return a.selectable && !a.reordering ? `${Nl}px` : "0";
    }
    function K(W) {
      const ee = a.columnWidths?.[W.key];
      return typeof ee == "number" ? ee : W.width;
    }
    function G(W) {
      const ee = K(W), Y = te(W), ue = {};
      return ee !== void 0 && (ue.width = `${ee}px`, ue.minWidth = `${ee}px`, ue.maxWidth = `${ee}px`), Y && (ue.left = H()), Object.keys(ue).length ? ue : void 0;
    }
    function oe(W) {
      return a.resizable ? W.resizable !== !1 : !1;
    }
    function ae(W, ee) {
      if (!oe(W))
        return;
      ee.preventDefault(), ee.stopPropagation();
      const Y = ee.clientX, ue = K(W) ?? 160, ie = ee.currentTarget;
      try {
        ie.setPointerCapture(ee.pointerId);
      } catch {
      }
      function He(tt) {
        const kt = ue + (tt.clientX - Y);
        m("resize", W.key, Math.min(1200, Math.max(48, kt)));
      }
      function Ie(tt) {
        try {
          ie.releasePointerCapture(tt.pointerId);
        } catch {
        }
        ie.removeEventListener("pointermove", He), ie.removeEventListener("pointerup", Ie), ie.removeEventListener("pointercancel", Ie);
      }
      ie.addEventListener("pointermove", He), ie.addEventListener("pointerup", Ie), ie.addEventListener("pointercancel", Ie);
    }
    const Z = x(() => I.value.some((W) => !!W.group)), q = x(() => {
      const W = [];
      for (const ee of I.value) {
        const Y = ee.group ?? null, ue = W[W.length - 1];
        ue && ue.label === Y ? ue.span += 1 : W.push({ label: Y, span: 1, key: `${Y ?? "loose"}-${ee.key}` });
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
    function ve(W, ee) {
      const Y = _(W);
      if (Y === null)
        return;
      const ue = ee.shiftKey, ie = !!a.selected?.has(Y);
      if (ue && V.value !== null && V.value !== Y) {
        const He = J(V.value), Ie = J(Y);
        if (He !== -1 && Ie !== -1) {
          const tt = Math.min(He, Ie), kt = Math.max(He, Ie), Na = !ie;
          for (let ct = tt; ct <= kt; ct++) {
            if (!p(ct))
              continue;
            const $t = _(a.rows[ct]);
            if ($t === null)
              continue;
            !!a.selected?.has($t) !== Na && m("toggle-row", $t);
          }
          V.value = Y;
          return;
        }
      }
      m("toggle-row", Y), V.value = Y;
    }
    const xe = x(
      () => a.rows.map((W) => _(W)).filter((W) => W !== null)
    ), le = x(
      () => xe.value.length > 0 && xe.value.every((W) => a.selected?.has(W))
    ), X = x(
      () => !le.value && xe.value.some((W) => a.selected?.has(W))
    );
    function ne(W) {
      return W.sortKey ?? W.key;
    }
    function Ce(W) {
      return a.sort === ne(W);
    }
    async function Xt(W, ee, Y) {
      try {
        await navigator.clipboard.writeText(String(Y)), $.value = `${W}-${ee.key}`, setTimeout(() => $.value = null, 1200);
      } catch {
      }
    }
    const Ia = x(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function Qt(W) {
      return a.summaries?.[W] ?? null;
    }
    function Fa(W) {
      const ee = a.summaries?.[W], Y = a.summaryValues?.[W];
      if (!ee)
        return "";
      if (Y == null)
        return "None";
      const ue = ee.divideBy ? Y / ee.divideBy : Y, ie = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: ee.decimals,
        maximumFractionDigits: ee.decimals
      }).format(ue);
      return `${ee.prefix ?? ""}${ie}${ee.suffix ?? ""}`;
    }
    return (W, ee) => (t(), n("div", {
      class: z(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", al, [
        o("thead", nl, [
          Z.value ? (t(), n("tr", ll, [
            e.reordering ? (t(), n("th", ol)) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("th", sl)) : w("", !0),
            (t(!0), n(A, null, L(q.value, (Y) => (t(), n("th", {
              key: Y.key,
              colspan: Y.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, f(Y.label ?? ""), 9, rl))), 128)),
            W.$slots.actions ? (t(), n("th", il)) : w("", !0)
          ])) : w("", !0),
          o("tr", ul, [
            e.reordering ? (t(), n("th", dl)) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: z(["w-10 border-b px-3 py-2.5", E.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
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
                onChange: ee[1] || (ee[1] = he((Y) => m("toggle-page", !le.value), ["stop"]))
              }, null, 40, cl)
            ], 2)) : w("", !0),
            (t(!0), n(A, null, L(I.value, (Y) => (t(), n("th", {
              key: Y.key,
              class: z([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                te(Y) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: se(G(Y))
            }, [
              Y.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ue) => m("sort", ne(Y))
              }, [
                N(f(Y.label) + " ", 1),
                Ce(Y) ? (t(), n("span", ml, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", pl, "↕"))
              ], 8, fl)) : (t(), n("span", vl, f(Y.label), 1)),
              oe(Y) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${Y.label}`,
                onPointerdown: (ue) => ae(Y, ue)
              }, null, 40, gl)) : w("", !0)
            ], 6))), 128)),
            W.$slots.actions ? (t(), n("th", hl, [...ee[2] || (ee[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : w("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", bl, [
          (t(), n(A, null, L(6, (Y) => o("tr", {
            key: `skel-${Y}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", xl, [
              D(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("td", yl, [
              D(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
            (t(!0), n(A, null, L(I.value, (ue) => (t(), n("td", {
              key: ue.key,
              class: "px-3 py-2.5"
            }, [
              D(Pe, { variant: "text" })
            ]))), 128)),
            W.$slots.actions ? (t(), n("td", kl, [
              D(Pe, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : w("", !0)
          ])), 64))
        ])) : (t(), n("tbody", {
          key: 1,
          class: z(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(A, null, L(e.rows, (Y, ue) => (t(), n(A, {
            key: _(Y) ?? `row-${ue}`
          }, [
            e.groupBy && s(ue) ? (t(), n("tr", $l, [
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
                  o("span", Sl, f(c(r(Y)) ? "▸" : "▾"), 1),
                  N(" " + f(i(Y)), 1)
                ], 8, Cl)) : (t(), n("span", Ml, f(i(Y)), 1))
              ], 8, wl)
            ])) : w("", !0),
            p(ue) ? (t(), n("tr", {
              key: 1,
              class: z(["group pk-row border-b transition-colors hover:bg-muted/50", [
                F(Y) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && ue % 2 === 1 ? "bg-muted/20" : "",
                g.value === ue ? "opacity-40" : "",
                M(ue),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => y(ue, ie),
              onDragover: (ie) => S(ue, ie),
              onDrop: he((ie) => B(ue), ["prevent"]),
              onDragend: k,
              onContextmenu: (ie) => m("row-contextmenu", Y, ie),
              onClick: (ie) => h(Y, ie)
            }, [
              e.reordering ? (t(), n("td", _l, [...ee[3] || (ee[3] = [
                Tt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : w("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: z(["px-3 py-2", E.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${b(P)}-row-${_(Y) ?? ue}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: _(Y) ?? void 0,
                  checked: F(Y),
                  disabled: _(Y) === null,
                  "aria-label": _(Y) === null ? "This row has no id and cannot be selected" : `Select row ${_(Y)}`,
                  onClick: he((ie) => ve(Y, ie), ["stop"])
                }, null, 8, Pl)
              ], 2)) : w("", !0),
              (t(!0), n(A, null, L(I.value, (ie) => (t(), n("td", {
                key: ie.key,
                class: z(["px-3 py-2 whitespace-nowrap", [
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
                  ie.copyable ? (t(), n("span", zl, [
                    N(f(Y[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (He) => Xt(String(Y[e.rowKey]), ie, Y[ie.key])
                    }, [
                      o("span", Ol, f($.value === `${Y[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Al)
                  ])) : Y[ie.key] == null || Y[ie.key] === "" ? (t(), n("span", jl, "None")) : (t(), n("span", Vl, f(Y[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              W.$slots.actions ? (t(), n("td", Ll, [
                U(W.$slots, "actions", { row: Y }, void 0, !0)
              ])) : w("", !0)
            ], 42, Bl)) : w("", !0)
          ], 64))), 128))
        ], 2)),
        Ia.value ? (t(), n("tfoot", Tl, [
          o("tr", null, [
            e.selectable ? (t(), n("td", Dl)) : w("", !0),
            (t(!0), n(A, null, L(e.columns, (Y) => (t(), n(A, {
              key: `s-${Y.key}`
            }, [
              e.hidden?.has(Y.key) ? w("", !0) : (t(), n("td", {
                key: 0,
                class: z(["px-3 py-2 align-top text-sm whitespace-nowrap", Y.cellClass])
              }, [
                Qt(Y.key) ? (t(), n(A, { key: 0 }, [
                  o("span", El, f(Qt(Y.key).label), 1),
                  o("span", Il, f(Fa(Y.key)), 1)
                ], 64)) : w("", !0)
              ], 2))
            ], 64))), 128)),
            W.$slots.actions ? (t(), n("td", Fl)) : w("", !0)
          ])
        ])) : w("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), T(Pt, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, lt({ _: 2 }, [
        W.$slots["clear-filters"] ? {
          name: "actions",
          fn: j(() => [
            U(W.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), T(Pt, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, lt({ _: 2 }, [
        W.$slots["empty-actions"] ? {
          name: "actions",
          fn: j(() => [
            U(W.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : w("", !0)
    ], 2));
  }
}), bt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, Ul = /* @__PURE__ */ bt(Rl, [["__scopeId", "data-v-c0f7d40f"]]), Hl = ["aria-label"], Kl = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, ql = { class: "text-base font-semibold" }, Gl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Wl = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, Zl = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, st = /* @__PURE__ */ O({
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
    function v(p) {
      if (!a.open)
        return;
      if (p.key === "Escape" && !a.busy) {
        p.stopPropagation(), r("close");
        return;
      }
      if (p.key !== "Tab" || !s.value)
        return;
      const g = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (g.length === 0)
        return;
      const C = g[0], y = g[g.length - 1];
      p.shiftKey && document.activeElement === C ? (p.preventDefault(), y.focus()) : !p.shiftKey && document.activeElement === y && (p.preventDefault(), C.focus());
    }
    return me(
      () => a.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", v), Ve(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", v), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", v)), (p, g) => (t(), T(Xe, { to: "body" }, [
      D(Re, {
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
              o("div", Kl, [
                o("h2", ql, f(e.title), 1),
                e.description ? (t(), n("p", Gl, f(e.description), 1)) : w("", !0)
              ]),
              o("div", Wl, [
                U(p.$slots, "default")
              ]),
              o("div", Zl, [
                U(p.$slots, "footer")
              ])
            ], 8, Hl)
          ], 32)) : w("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Jl = 160, Je = /* @__PURE__ */ O({
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
    function v(h) {
      !a.dismissOnPanelClick || h.target?.closest("input, select, textarea, label, [data-keep-open]") || k();
    }
    async function p() {
      c && (clearTimeout(c), c = null), !r.value && (r.value = !0, await Ve(), M());
    }
    function g() {
      c = setTimeout(k, 180);
    }
    async function C() {
      d.value = null, r.value = !r.value, r.value && (await Ve(), M());
    }
    async function y(h, $) {
      d.value = { x: h, y: $ }, r.value = !0, await Ve(), M();
    }
    function k() {
      r.value = !1, d.value = null;
    }
    function M() {
      const h = s.value, $ = i.value;
      if (!h || !$)
        return;
      const P = $.getBoundingClientRect(), I = 8, E = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : h.getBoundingClientRect();
      let te, H;
      if (a.placement === "bottom")
        te = E.bottom + a.offset, te + P.height > window.innerHeight - I && E.top - P.height - a.offset > I && (te = E.top - P.height - a.offset), H = a.align === "end" && !d.value ? E.right - P.width : E.left;
      else {
        te = E.top;
        const K = a.placement === "right", G = E.right + a.offset + P.width < window.innerWidth - I, oe = E.left - a.offset - P.width > I;
        H = (K ? G || !oe : !oe && G) ? E.right + a.offset : E.left - a.offset - P.width;
      }
      H = Math.min(Math.max(I, H), window.innerWidth - P.width - I), te = Math.min(Math.max(I, te), window.innerHeight - P.height - I), u.value = { top: te, left: H, minWidth: Math.max(E.width, Jl) };
    }
    function S(h) {
      if (!r.value)
        return;
      const $ = h.target;
      s.value?.contains($) || i.value?.contains($) || ($ instanceof Element ? $ : $.parentElement)?.closest("[data-pk-overlay]") || k();
    }
    function B(h) {
      h.key === "Escape" && r.value && (h.stopPropagation(), k());
    }
    function m() {
      if (r.value) {
        if (d.value) {
          k();
          return;
        }
        M();
      }
    }
    return ge(() => {
      document.addEventListener("pointerdown", S), document.addEventListener("keydown", B), window.addEventListener("scroll", m, !0), window.addEventListener("resize", m);
    }), ke(() => {
      c && clearTimeout(c), document.removeEventListener("pointerdown", S), document.removeEventListener("keydown", B), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
    }), l({ close: k, openAt: y }), (h, $) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: $[2] || ($[2] = (P) => e.hoverable && p()),
      onPointerleave: $[3] || ($[3] = (P) => e.hoverable && g())
    }, [
      o("div", { onClick: C }, [
        U(h.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(Xe, { to: "body" }, [
        D(Re, {
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
              class: z([
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
              onPointerenter: $[0] || ($[0] = (P) => e.hoverable && p()),
              onPointerleave: $[1] || ($[1] = (P) => e.hoverable && g()),
              onClick: v
            }, [
              U(h.$slots, "panel", { close: k })
            ], 38)) : w("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), Yl = ["disabled"], Xl = { class: "py-0.5" }, Ql = ["disabled", "onClick"], eo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, to = ["d"], ao = ["disabled"], no = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, lo = ["d"], oo = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, so = ["disabled", "onClick"], ro = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, io = ["d"], uo = { class: "text-muted-foreground text-sm font-normal" }, co = { class: "text-foreground font-medium tabular-nums" }, fo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, mo = ["disabled"], po = { class: "text-muted-foreground text-sm font-normal" }, vo = { class: "text-foreground font-medium tabular-nums" }, go = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, ho = ["disabled"], P4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), u = x(() => a.allMatching ? a.total : a.count), d = x(() => u.value !== void 0), c = x(() => d.value && u.value === 0), v = x(() => a.actions.filter((B) => !B.destructive)), p = x(() => a.actions.filter((B) => B.destructive)), g = {
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
    function y(B) {
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
    return (B, m) => (t(), n(A, null, [
      D(Je, null, {
        trigger: j(() => [
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
          ])], 8, Yl)
        ]),
        panel: j(() => [
          o("div", Xl, [
            (t(!0), n(A, null, L(v.value, (h) => (t(), n("button", {
              key: h.key,
              type: "button",
              role: "menuitem",
              class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(h)]),
              disabled: e.busy,
              onClick: ($) => y(h)
            }, [
              (t(), n("svg", eo, [
                o("path", {
                  d: b(ce)(h.icon)
                }, null, 8, to)
              ])),
              N(" " + f(h.label), 1)
            ], 10, Ql))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: m[0] || (m[0] = (h) => i.value = !0)
            }, [
              (t(), n("svg", no, [
                o("path", {
                  d: b(ce)("download")
                }, null, 8, lo)
              ])),
              m[6] || (m[6] = N(" Export CSV ", -1))
            ], 8, ao)) : w("", !0),
            p.value.length ? (t(), n("div", oo, [
              (t(!0), n(A, null, L(p.value, (h) => (t(), n("button", {
                key: h.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: ($) => y(h)
              }, [
                (t(), n("svg", ro, [
                  o("path", {
                    d: b(ce)(h.icon ?? "trash")
                  }, null, 8, io)
                ])),
                N(" " + f(h.label), 1)
              ], 8, so))), 128))
            ])) : w("", !0)
          ])
        ]),
        _: 1
      }),
      D(st, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: m[2] || (m[2] = (h) => s.value = null)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[1] || (m[1] = (h) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: z([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || c.value,
            onClick: k
          }, f(s.value?.label), 11, mo)
        ]),
        default: j(() => [
          o("p", uo, [
            m[7] || (m[7] = N(" This will affect ", -1)),
            o("span", co, [
              d.value ? (t(), n(A, { key: 1 }, [
                N(f(S(u.value)) + " record" + f(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(A, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            m[8] || (m[8] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", fo, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : w("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(st, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: m[4] || (m[4] = (h) => i.value = !1)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[3] || (m[3] = (h) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || c.value,
            onClick: M
          }, " Export CSV ", 8, ho)
        ]),
        default: j(() => [
          o("p", po, [
            m[9] || (m[9] = N(" This will export ", -1)),
            o("span", vo, [
              d.value ? (t(), n(A, { key: 1 }, [
                N(f(S(u.value)) + " record" + f(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(A, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            m[10] || (m[10] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", go, " Nothing matches the current filters - there is nothing to export. ")) : w("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), bo = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, xo = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, yo = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, ko = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, $o = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", bo, [
      l.$slots.tabs ? (t(), n("div", xo, [
        U(l.$slots, "tabs")
      ])) : w("", !0),
      l.$slots.title ? (t(), n("div", yo, [
        U(l.$slots, "title")
      ])) : w("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: z(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        U(l.$slots, "toolbar")
      ], 2)) : w("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", ko, [
        U(l.$slots, "pagination")
      ])) : w("", !0)
    ]));
  }
}), Se = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ta = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", z4 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", wo = ["aria-expanded"], Co = ["aria-label", "onClick"], So = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Mo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Bo = {
  key: 0,
  class: "border-b p-1"
}, _o = ["placeholder"], Po = { class: "max-h-60 overflow-y-auto p-1" }, zo = ["aria-selected", "onMouseenter", "onClick"], Ao = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Ut = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), u = R(null), d = R(!1), c = R(""), v = R(0), p = R({ top: 0, left: 0, width: 0 }), g = x(
      () => a.modelValue.map(
        (H) => a.options.find((K) => K.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), C = x(() => a.searchable ?? a.options.length > 6), y = x(() => {
      const H = new Set(a.modelValue), K = c.value.trim().toLowerCase();
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
      a.disabled || d.value || (d.value = !0, c.value = "", v.value = 0, await Ve(), M(), u.value?.focus());
    }
    function B() {
      d.value = !1, c.value = "";
    }
    function m() {
      d.value ? B() : S();
    }
    function h(H) {
      k.value || (r("update:modelValue", [...a.modelValue, H.value]), c.value = "", v.value = 0, Ve(() => {
        M(), u.value?.focus();
      }));
    }
    function $(H) {
      r(
        "update:modelValue",
        a.modelValue.filter((K) => K !== H)
      ), Ve(M);
    }
    function P() {
      r("update:modelValue", []), Ve(M);
    }
    function I(H) {
      if (!a.disabled) {
        if (H.key === "Escape" && d.value) {
          H.stopPropagation(), B();
          return;
        }
        if (H.key === "Backspace" && c.value === "" && a.modelValue.length > 0) {
          $(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!d.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), S();
          return;
        }
        if (d.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), v.value = Math.min(v.value + 1, y.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), v.value = Math.max(v.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const K = y.value[v.value];
            K && h(K);
          }
        }
      }
    }
    function E(H) {
      if (!d.value)
        return;
      const K = H.target;
      s.value?.contains(K) || i.value?.contains(K) || B();
    }
    function te() {
      d.value && M();
    }
    return me(y, (H) => {
      v.value > H.length - 1 && (v.value = Math.max(0, H.length - 1));
    }), ge(() => {
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
        class: z(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          d.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": d.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: m
      }, [
        (t(!0), n(A, null, L(g.value, (G) => (t(), n("span", {
          key: G.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          N(f(G.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${G.label}`,
            onClick: he((oe) => $(G.value), ["stop"])
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
          ])], 8, Co)
        ]))), 128)),
        g.value.length === 0 ? (t(), n("span", So, f(e.placeholder), 1)) : w("", !0),
        o("span", Mo, [
          g.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: he(P, ["stop"])
          }, " Clear ")) : w("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...K[2] || (K[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, wo),
      (t(), T(Xe, { to: "body" }, [
        D(Re, {
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
              style: se({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              C.value ? (t(), n("div", Bo, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": K[0] || (K[0] = (G) => c.value = G),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: I
                }, null, 40, _o), [
                  [Me, c.value]
                ])
              ])) : w("", !0),
              o("div", Po, [
                (t(!0), n(A, null, L(y.value, (G, oe) => (t(), n("button", {
                  key: G.value,
                  type: "button",
                  class: z(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", oe === v.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": oe === v.value,
                  onMouseenter: (ae) => v.value = oe,
                  onClick: (ae) => h(G)
                }, f(G.label), 43, zo))), 128)),
                y.value.length === 0 ? (t(), n("p", Ao, [
                  k.value ? (t(), n(A, { key: 0 }, [
                    N("You have selected the maximum.")
                  ], 64)) : c.value ? (t(), n(A, { key: 1 }, [
                    N("Nothing matches “" + f(c.value) + "”.", 1)
                  ], 64)) : (t(), n(A, { key: 2 }, [
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
}), Oo = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", jo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, Vo = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function nt(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Oo, jo[l], Vo[a], e.class].filter(Boolean).join(" ");
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
      () => nt({ variant: l.variant, size: l.size, class: l.class })
    ), r = x(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), T(Be(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: z(a.value)
    }, {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), Lo = { class: "flex items-center gap-2" }, To = ["onUpdate:modelValue", "onChange"], Do = ["value"], Eo = ["onUpdate:modelValue"], Io = ["value"], Fo = ["onUpdate:modelValue"], No = ["onUpdate:modelValue", "multiple"], Ro = ["value"], Uo = ["onUpdate:modelValue", "type"], Ho = ["aria-label", "onClick"], Ko = { class: "flex items-center gap-2" }, qo = /* @__PURE__ */ O({
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
    const u = (m) => "rules" in m, d = x(() => Object.keys(a.fields));
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
      const m = d.value[0];
      i.value.rules.push({
        field: m,
        operator: c(m)[0],
        value: void 0
      }), p();
    }
    function C() {
      i.value.rules.push(s()), p();
    }
    function y(m) {
      i.value.rules.splice(m, 1), p();
    }
    function k(m) {
      m.operator = c(m.field)[0], m.value = void 0, p();
    }
    const M = x(() => a.depth + 1 < a.maxDepth);
    function S() {
      i.value = s(), p(), r("apply", null);
    }
    function B() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (m, h) => {
      const $ = Dt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: z(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", Lo, [
          pe(o("select", {
            "onUpdate:modelValue": h[0] || (h[0] = (P) => i.value.logic = P),
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
        (t(!0), n(A, null, L(i.value.rules, (P, I) => (t(), n("div", {
          key: I,
          class: "flex items-start gap-2"
        }, [
          u(P) ? (t(), T($, {
            key: 0,
            modelValue: i.value.rules[I],
            "onUpdate:modelValue": [(E) => i.value.rules[I] = E, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(A, { key: 1 }, [
            pe(o("select", {
              "onUpdate:modelValue": (E) => P.field = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (E) => k(P)
            }, [
              (t(!0), n(A, null, L(d.value, (E) => (t(), n("option", {
                key: E,
                value: E
              }, f(e.fields[E].label), 9, Do))), 128))
            ], 40, To), [
              [We, P.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (E) => P.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(A, null, L(c(P.field), (E) => (t(), n("option", {
                key: E,
                value: E
              }, f(v[E] ?? E), 9, Io))), 128))
            ], 40, Eo), [
              [We, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? pe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (E) => P.value = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...h[3] || (h[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, Fo)), [
              [We, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? pe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (E) => P.value = E,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(A, null, L(e.fields[P.field].options, (E) => (t(), n("option", {
                key: E,
                value: E
              }, f(E), 9, Ro))), 128))
            ], 40, No)), [
              [We, P.value]
            ]) : pe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (E) => P.value = E,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, Uo)), [
              [Ua, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(P) ? "group" : "rule"}`,
            onClick: (E) => y(I)
          }, " × ", 8, Ho)
        ]))), 128)),
        o("div", Ko, [
          D(de, {
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
          M.value ? (t(), T(de, {
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
          })) : w("", !0),
          e.root ? (t(), n(A, { key: 1 }, [
            h[8] || (h[8] = o("span", { class: "flex-1" }, null, -1)),
            D(de, {
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
            D(de, {
              type: "button",
              size: "sm",
              onClick: B
            }, {
              default: j(() => [...h[7] || (h[7] = [
                N(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : w("", !0)
        ])
      ], 2);
    };
  }
}), Ht = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(pa), re({ "data-slot": "sheet" }, b(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(Ee(d)))
      ]),
      _: 3
    }, 16));
  }
});
function Q(...e) {
  return Wn(Gn(e));
}
function A4(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Go = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Et), re({
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
}), Kt = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(It), null, {
      default: j(() => [
        D(Go),
        D(b(Ft), re({
          "data-slot": "sheet-content",
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...u.$attrs, ...b(i) }), {
          default: j(() => [
            U(u.$slots, "default"),
            D(b(Qe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                D(b(Nt), { class: "size-4" }),
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
}), Wo = { class: "flex flex-col gap-2" }, Zo = { class: "flex items-center gap-2 md:hidden" }, Jo = { class: "relative min-w-0 flex-1" }, Yo = ["placeholder", "title", "aria-label"], Xo = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, Qo = { class: "flex max-h-[85vh] flex-col" }, es = { class: "flex-1 overflow-y-auto px-4 py-3" }, ts = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, as = { class: "text-xs font-medium" }, ns = ["value", "onChange"], ls = ["value"], os = { class: "mb-4" }, ss = { class: "flex flex-col gap-1" }, rs = ["disabled", "onClick"], is = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, us = {
  key: 1,
  class: "mb-4"
}, ds = { class: "flex flex-col gap-1" }, cs = ["onClick"], fs = { class: "border-t p-4" }, ms = ["disabled"], ps = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, vs = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, gs = ["placeholder", "title", "aria-label"], hs = ["aria-label"], bs = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, xs = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, ys = { class: "text-xs font-medium" }, ks = ["value", "onChange"], $s = ["value"], ws = { class: "grid grid-cols-2 gap-2" }, Cs = ["value", "onChange"], Ss = ["value", "onChange"], Ms = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Bs = ["value", "onChange"], _s = ["value", "onChange"], Ps = {
  key: 4,
  class: "flex items-center gap-2"
}, zs = ["aria-checked", "onClick"], As = { class: "text-xs" }, Os = ["onClick"], js = ["value", "onChange"], Vs = ["value"], Ls = ["disabled", "onClick"], Ts = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Ds = ["disabled", "onClick"], Es = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Is = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Fs = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, Ns = ["aria-pressed", "aria-label", "title", "onClick"], Rs = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Us = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Hs = ["aria-pressed", "aria-label", "title"], Ks = ["aria-label", "title"], qs = { class: "flex flex-col gap-0.5 p-1" }, Gs = ["onClick"], Ws = ["onClick"], Zs = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, Js = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Ys = ["dusk"], Xs = ["aria-label", "onClick"], Qs = /* @__PURE__ */ O({
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
    let u;
    me(i, (q) => {
      clearTimeout(u), u = setTimeout(() => {
        q !== a.search && r("update:search", q);
      }, 250);
    });
    const d = R({ ...a.filters });
    me(
      () => a.filters,
      (q) => {
        d.value = { ...q };
      },
      { deep: !0 }
    );
    const c = x(
      () => a.filterSchema.filter(
        (q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0
      ).length
    ), v = x(() => JSON.stringify(d.value) !== JSON.stringify(a.filters)), p = x(() => a.search !== "" || c.value > 0), g = x(() => a.indicators.length ? a.indicators : a.filterSchema.filter((q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0).map((q) => ({
      key: q.key,
      label: `${q.label}: ${String(a.filters[q.key])}`,
      removable: !0
    })));
    function C(q) {
      r("group", q);
    }
    function y(q) {
      r("clear-filter", q);
    }
    function k(q) {
      return q.type === "multiselect";
    }
    function M(q) {
      const _ = d.value[q.key];
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
      d.value = { ...d.value, [q.key]: _ === "" ? null : _ };
    }
    function h(q, _) {
      const F = d.value[q.key];
      if (typeof F != "string" || !F.includes(".."))
        return "";
      const [V, J] = F.split("..");
      return _ === "from" ? V ?? "" : J ?? "";
    }
    function $(q, _, F) {
      const V = _ === "from" ? F : h(q, "from"), J = _ === "to" ? F : h(q, "to");
      d.value = {
        ...d.value,
        [q.key]: V && J ? `${V}..${J}` : null
      };
    }
    function P(q, _, F) {
      const V = _ === "from" ? F : h(q, "from"), J = _ === "to" ? F : h(q, "to");
      d.value = {
        ...d.value,
        [q.key]: V || J ? `${V}..${J}` : null
      };
    }
    function I(q) {
      r("apply-filters", { ...d.value }), q();
    }
    function E(q, _) {
      d.value[q] = _, r("apply-filters", { ...d.value });
    }
    function te() {
      d.value = Object.fromEntries(a.filterSchema.map((q) => [q.key, null]));
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
      r("apply-filters", { ...d.value }), s.value = !1;
    }
    function Z() {
      i.value = "", r("clear");
    }
    return (q, _) => (t(), n("div", Wo, [
      o("div", Zo, [
        o("div", Jo, [
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
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", b(Se)])
          }, null, 10, Yo), [
            [Me, i.value]
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
          c.value ? (t(), n("span", Xo, f(c.value), 1)) : w("", !0)
        ]),
        D(Ht, {
          open: s.value,
          "onUpdate:open": _[4] || (_[4] = (F) => s.value = F)
        }, {
          default: j(() => [
            D(Kt, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", Qo, [
                  _[16] || (_[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", es, [
                    e.filterSchema.length ? (t(), n("div", ts, [
                      o("div", { class: "flex items-center justify-between" }, [
                        _[12] || (_[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: te
                        }, " Reset ")
                      ]),
                      (t(!0), n(A, null, L(e.filterSchema, (F) => (t(), n("div", {
                        key: `mobile-${F.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", as, f(F.label), 1),
                        F.type !== "multiselect" && F.type !== "querybuilder" && F.type !== "daterange" && F.type !== "numberrange" && F.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: d.value[F.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (V) => m(F, V.target.value)
                        }, [
                          _[13] || (_[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(A, null, L(H(F), (V) => (t(), n("option", {
                            key: String(V.value),
                            value: V.value
                          }, f(V.label), 9, ls))), 128))
                        ], 40, ns)) : w("", !0)
                      ]))), 128))
                    ])) : w("", !0),
                    o("div", os, [
                      _[14] || (_[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", ss, [
                        (t(!0), n(A, null, L(e.columns, (F) => (t(), n("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (V) => G(F.key)
                        }, [
                          o("span", null, f(F.label), 1),
                          K.value.has(F.key) ? w("", !0) : (t(), n("span", is, "On"))
                        ], 8, rs))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", us, [
                      _[15] || (_[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", ds, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: _[2] || (_[2] = (F) => {
                            C(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), n(A, null, L(e.groups, (F) => (t(), n("button", {
                          key: F.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (V) => {
                            C(F.key), s.value = !1;
                          }
                        }, f(F.label), 9, cs))), 128))
                      ])
                    ])) : w("", !0)
                  ]),
                  o("div", fs, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !v.value,
                      onClick: ae
                    }, " Apply filters ", 8, ms)) : w("", !0),
                    p.value ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: _[3] || (_[3] = (F) => {
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
      o("div", ps, [
        o("div", vs, [
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
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", b(Se)])
          }, null, 10, gs), [
            [Me, i.value]
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
          ])])) : w("", !0)
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
              class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", c.value ? "border-primary text-primary" : ""]),
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
              c.value ? (t(), n("span", bs, f(c.value), 1)) : w("", !0)
            ], 10, hs)
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
            o("div", xs, [
              (t(!0), n(A, null, L(e.filterSchema, (V) => (t(), n("div", {
                key: V.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", ys, f(V.label), 1),
                k(V) ? (t(), T(Ut, {
                  key: 0,
                  "model-value": S(V),
                  options: B(V),
                  placeholder: `Any ${V.label.toLowerCase()}`,
                  "onUpdate:modelValue": (J) => d.value[V.key] = J.length ? J : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : V.type === "querybuilder" ? (t(), T(qo, {
                  key: 1,
                  "model-value": d.value[V.key] ?? null,
                  fields: V.fields ?? {},
                  operators: V.operators ?? {},
                  "max-depth": V.maxDepth ?? 5,
                  onApply: (J) => E(V.key, J)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : V.type === "daterange" ? (t(), n(A, { key: 2 }, [
                  o("select", {
                    value: typeof d.value[V.key] == "string" && !String(d.value[V.key]).includes("..") ? d.value[V.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (J) => m(V, J.target.value)
                  }, [
                    _[21] || (_[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(A, null, L(H(V), (J) => (t(), n("option", {
                      key: String(J.value),
                      value: J.value
                    }, f(J.label), 9, $s))), 128))
                  ], 40, ks),
                  o("div", ws, [
                    o("input", {
                      type: "date",
                      value: h(V, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => $(
                        V,
                        "from",
                        J.target.value
                      )
                    }, null, 40, Cs),
                    o("input", {
                      type: "date",
                      value: h(V, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => $(
                        V,
                        "to",
                        J.target.value
                      )
                    }, null, 40, Ss)
                  ])
                ], 64)) : V.type === "numberrange" ? (t(), n("div", Ms, [
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
                  }, null, 40, Bs),
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
                  }, null, 40, _s)
                ])) : V.type === "boolean" ? (t(), n("div", Ps, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": d.value[V.key] === !0,
                    class: z([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      d.value[V.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (J) => m(V, d.value[V.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: z(["bg-background absolute top-0.5 size-4 rounded-full transition-all", d.value[V.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, zs),
                  o("span", As, f(V.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: z([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      d.value[V.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (J) => m(V, d.value[V.key] === !1 ? null : !1)
                  }, f(V.falseLabel ?? "No") + " only ", 11, Os)
                ])) : (t(), n("select", {
                  key: 5,
                  value: d.value[V.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (J) => m(V, J.target.value)
                }, [
                  _[22] || (_[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(A, null, L(H(V), (J) => (t(), n("option", {
                    key: String(J.value),
                    value: J.value
                  }, f(J.label), 9, Vs))), 128))
                ], 40, js))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !v.value,
              onClick: (V) => I(F)
            }, " Apply filters ", 8, Ls)
          ]),
          _: 1
        })) : w("", !0),
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
            o("div", Ts, [
              (t(!0), n(A, null, L(e.columns, (F) => (t(), n("button", {
                key: F.key,
                type: "button",
                class: z(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (V) => G(F.key)
              }, [
                K.value.has(F.key) ? (t(), n("span", Is)) : (t(), n("svg", Es, [..._[25] || (_[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + f(F.label), 1)
              ], 10, Ds))), 128))
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
        e.layouts.length > 1 ? (t(), n("div", Fs, [
          (t(!0), n(A, null, L(e.layouts, (F) => (t(), n("button", {
            key: F,
            type: "button",
            class: z(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === F ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === F,
            "aria-label": F === "cards" ? "Card layout" : "Table layout",
            title: F === "cards" ? "Cards" : "Table",
            onClick: (V) => r("layout", F)
          }, [
            F === "table" ? (t(), n("svg", Rs, [..._[28] || (_[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", Us, [..._[29] || (_[29] = [
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
          ], 10, Ns))), 128))
        ])) : w("", !0),
        e.reorderable ? (t(), n("button", {
          key: 2,
          type: "button",
          class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
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
        ])], 10, Hs)) : w("", !0),
        e.groups.length ? (t(), T(Je, {
          key: 3,
          align: "end"
        }, {
          trigger: j(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
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
            ])], 10, Ks)
          ]),
          panel: j(({ close: F }) => [
            o("div", qs, [
              o("button", {
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (V) => {
                  C(null), F();
                }
              }, " No grouping ", 10, Gs),
              (t(!0), n(A, null, L(e.groups, (V) => (t(), n("button", {
                key: V.key,
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === V.key ? "text-primary font-medium" : ""]),
                onClick: (J) => {
                  C(V.key), F();
                }
              }, f(V.label), 11, Ws))), 128))
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
        e.loading ? (t(), n("span", Zs, "Loading…")) : w("", !0)
      ]),
      g.value.length ? (t(), n("div", Js, [
        (t(!0), n(A, null, L(g.value, (F) => (t(), n("span", {
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
            onClick: (V) => y(F.key)
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
          ])], 8, Xs)) : w("", !0)
        ], 8, Ys))), 128)),
        g.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: _[8] || (_[8] = (F) => r("clear-filters"))
        }, " Clear all ")) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), er = { class: "min-w-0" }, tr = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, ar = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, nr = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, lr = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, or = { class: "w-full border-collapse text-sm" }, sr = { class: "bg-muted/40" }, rr = { class: "divide-y" }, ir = ["href"], ur = {
  key: 1,
  class: "text-muted-foreground"
}, dr = {
  key: 0,
  class: "flex justify-center"
}, cr = ["disabled"], fr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, mr = ["href"], O4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = Lt(), i = x(() => a.columns.filter((C) => C.type !== "image")), u = x(() => !!s.actions), d = x(() => !!a.title || u.value), c = x(() => a.filterSchema.length > 0), v = x(
      () => a.columns.map((C) => ({ key: C.key, label: C.label, locked: !0 }))
    );
    function p(C, y) {
      return y == null || y === "" ? "None" : C.type === "date" || C.type === "datetime" ? new Date(String(y)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...C.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof y == "number" ? new Intl.NumberFormat().format(y) : String(y);
    }
    function g(C) {
      return C == null || C === "";
    }
    return (C, y) => (t(), T($o, null, lt({
      default: j(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", nr, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(Pt, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, lt({ _: 2 }, [
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
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", lr, [
          o("table", or, [
            o("thead", sr, [
              o("tr", null, [
                (t(!0), n(A, null, L(i.value, (k) => (t(), n("th", {
                  key: k.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f(k.label), 1))), 128))
              ])
            ]),
            o("tbody", rr, [
              (t(!0), n(A, null, L(e.rows, (k, M) => (t(), n("tr", {
                key: k.id ?? M,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(A, null, L(i.value, (S) => (t(), n("td", {
                  key: S.key,
                  class: z(["px-3 whitespace-nowrap", [
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
                    }, f(p(S, k[S.key])), 9, ir)) : g(k[S.key]) ? (t(), n("span", ur, " None ")) : (t(), n(A, { key: 2 }, [
                      N(f(p(S, k[S.key])), 1)
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
          o("div", er, [
            e.title ? (t(), n("h3", tr, f(e.title), 1)) : w("", !0)
          ]),
          u.value ? (t(), n("div", ar, [
            U(C.$slots, "actions")
          ])) : w("", !0)
        ]),
        key: "0"
      } : void 0,
      c.value ? {
        name: "toolbar",
        fn: j(() => [
          D(Qs, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: v.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": y[0] || (y[0] = (k) => r("update:search", k)),
            onApplyFilters: y[1] || (y[1] = (k) => r("apply-filters", k)),
            onClearFilters: y[2] || (y[2] = (k) => r("clear-filters")),
            onClearFilter: y[3] || (y[3] = (k) => r("clear-filter", k)),
            onClear: y[4] || (y[4] = (k) => r("clear-filters")),
            onApplyColumns: y[5] || (y[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: j(() => [
          e.nextCursor ? (t(), n("div", dr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: y[6] || (y[6] = (k) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, cr)
          ])) : e.capped ? (t(), n("p", fr, [
            N(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, mr)) : (t(), n(A, { key: 1 }, [
              N("Open the full list to search or filter the rest.")
            ], 64))
          ])) : w("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), pr = { class: "flex items-center gap-2 overflow-x-auto" }, vr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hr = { class: "flex flex-col" }, br = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, xr = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, yr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, kr = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("ol", pr, [
      (t(!0), n(A, null, L(e.steps, (p, g) => (t(), n("li", {
        key: g,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(Be(e.interactive ? "button" : "div"), re({
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
              class: z(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(g)])
            }, [
              d(g) ? (t(), n("svg", vr, [...v[0] || (v[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(g) ? (t(), n("svg", gr, [...v[1] || (v[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(A, { key: 2 }, [
                N(f(g + 1), 1)
              ], 64))
            ], 2),
            o("span", hr, [
              o("span", null, f(p.label), 1),
              p.description ? (t(), n("span", br, f(p.description), 1)) : w("", !0)
            ]),
            e.hasError(g) ? (t(), n("span", xr)) : w("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        g < e.steps.length - 1 ? (t(), n("span", yr)) : w("", !0)
      ]))), 128))
    ]));
  }
}), it = /* @__PURE__ */ new Map();
function ye(e, l) {
  it.set(e, l);
}
function $r(e) {
  return it.get(e);
}
function j4(e) {
  return it.has(e);
}
function V4() {
  return [...it.keys()].sort();
}
function L4() {
  it.clear();
}
class wr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function T4(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function Cr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function Sr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const D4 = "text-sm text-muted-foreground font-normal", E4 = "text-xs text-muted-foreground font-normal", ft = "text-xs text-muted-foreground font-normal leading-snug", Mr = "text-foreground font-normal", Br = "placeholder:text-muted-foreground placeholder:font-normal", Ne = `${Mr} ${Br}`, _r = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Pr = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(st, {
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
          e.generalError ? (t(), n("p", _r, f(e.generalError), 1)) : w("", !0),
          (t(!0), n(A, null, L(e.fields, (c) => (t(), T(Ye, {
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
}), zr = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Ya), re({ "data-slot": "checkbox" }, b(i), {
      class: b(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j((c) => [
        D(b(Xa), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            U(u.$slots, "default", ze(Ee(c)), () => [
              D(b(ya), { class: "size-3.5" })
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
    return (i, u) => (t(), T(b(Qa), re({ "data-slot": "switch" }, b(s), {
      class: b(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j(() => [
        D(b(en), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ar = ["accept", "disabled"], Or = { class: "text-sm font-medium" }, jr = { key: 0 }, Vr = { key: 1 }, Lr = { class: "text-muted-foreground text-xs font-normal" }, Tr = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Dr = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Er = ["src"], Ir = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Fr = { class: "min-w-0 flex-1" }, Nr = { class: "block truncate text-sm font-medium" }, Rr = { class: "text-muted-foreground text-xs font-normal" }, Ur = ["href"], Hr = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, Ca = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), u = R(null), d = R(null), c = R(null), v = x(() => a.accept.map((h) => `.${h}`).join(",")), p = x(() => c.value ?? a.modelValue?.url ?? null), g = x(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(a.maxKilobytes * 1024)}`);
    function C(h) {
      if (!h)
        return "";
      const $ = ["B", "KB", "MB", "GB"];
      let P = h, I = 0;
      for (; P >= 1024 && I < $.length - 1; )
        P /= 1024, I++;
      return `${P.toFixed(P < 10 && I > 0 ? 1 : 0)} ${$[I]}`;
    }
    function y(h) {
      return h.split(".").pop()?.toLowerCase() ?? "";
    }
    function k(h) {
      return a.accept.length && !a.accept.includes(y(h.name)) ? `${y(h.name).toUpperCase() || "That"} files are not accepted here.` : h.size > a.maxKilobytes * 1024 ? `That file is ${C(h.size)}; the limit is ${C(a.maxKilobytes * 1024)}.` : null;
    }
    async function M(h) {
      const $ = h?.[0];
      if (!(!$ || a.disabled) && (d.value = k($), !d.value)) {
        S(), a.image && $.type.startsWith("image/") && (c.value = URL.createObjectURL($)), u.value = 0;
        try {
          const P = await a.upload($, (I) => {
            u.value = I;
          });
          r("update:modelValue", P);
        } catch (P) {
          d.value = P instanceof Error ? P.message : "The upload failed.", S();
        } finally {
          u.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function S() {
      c.value && URL.revokeObjectURL(c.value), c.value = null;
    }
    async function B() {
      const h = a.modelValue;
      S(), d.value = null, r("update:modelValue", null), h && !h.url && a.discard && await a.discard(h.value).catch(() => {
      });
    }
    function m(h) {
      i.value = !1, M(h.dataTransfer?.files ?? null);
    }
    return (h, $) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", Dr, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Er)) : (t(), n("span", Ir, f(y(e.modelValue.name) || "file"), 1)),
        o("span", Fr, [
          o("span", Nr, f(e.modelValue.name), 1),
          o("span", Rr, [
            N(f(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(A, { key: 0 }, [
              $[4] || ($[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Ur)
            ], 64)) : (t(), n(A, { key: 1 }, [
              N(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: B
        }, [...$[5] || ($[5] = [
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
        class: z(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: $[1] || ($[1] = he((P) => i.value = !0, ["prevent"])),
        onDragleave: $[2] || ($[2] = he((P) => i.value = !1, ["prevent"])),
        onDrop: he(m, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: v.value,
          disabled: e.disabled,
          onChange: $[0] || ($[0] = (P) => M(P.target.files))
        }, null, 40, Ar),
        $[3] || ($[3] = o("svg", {
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
        o("span", Or, [
          u.value === null ? (t(), n("span", jr, "Drop a file or click to choose")) : (t(), n("span", Vr, "Uploading…"))
        ]),
        o("span", Lr, f(g.value), 1),
        u.value !== null ? (t(), n("span", Tr, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${u.value}%` })
          }, null, 4)
        ])) : w("", !0)
      ], 34)),
      d.value ? (t(), n("p", Hr, f(d.value), 1)) : w("", !0)
    ]));
  }
}), Kr = { class: "flex flex-col gap-2" }, qr = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Gr = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Wr = { class: "flex flex-col gap-1" }, Zr = ["onUpdate:modelValue", "disabled", "aria-label"], Jr = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Yr = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Xr = ["onUpdate:modelValue", "disabled", "aria-label"], Qr = ["disabled", "aria-label", "onClick"], ei = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, ti = { class: "flex items-center gap-3" }, ai = ["disabled"], ni = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, li = /* @__PURE__ */ O({
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
    function d(M) {
      return M ? Object.entries(M).map(([S, B]) => ({
        uid: i++,
        key: S,
        value: B ?? ""
      })) : [];
    }
    me(
      () => a.modelValue,
      (M) => {
        JSON.stringify(M ?? null) !== JSON.stringify(c()) && (u.value = d(M));
      }
    );
    function c() {
      const M = {};
      for (const S of u.value) {
        const B = S.key.trim();
        B !== "" && (M[B] = S.value);
      }
      return Object.keys(M).length ? M : null;
    }
    function v() {
      r("update:modelValue", c());
    }
    const p = x(() => {
      const M = /* @__PURE__ */ new Map();
      for (const S of u.value) {
        const B = S.key.trim();
        B !== "" && M.set(B, (M.get(B) ?? 0) + 1);
      }
      return new Set([...M.entries()].filter(([, S]) => S > 1).map(([S]) => S));
    }), g = x(
      () => new Set(
        u.value.map((M) => M.key.trim()).filter((M) => M !== "" && !s.test(M))
      )
    ), C = x(() => a.maxPairs !== null && u.value.length >= a.maxPairs);
    function y() {
      C.value || a.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function k(M) {
      u.value = u.value.filter((S) => S.uid !== M), v();
    }
    return (M, S) => (t(), n("div", Kr, [
      u.value.length ? (t(), n("div", qr, [
        o("div", Gr, [
          o("span", null, f(e.keyLabel), 1),
          o("span", null, f(e.valueLabel), 1),
          S[0] || (S[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(A, null, L(u.value, (B) => (t(), n("div", {
          key: B.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", Wr, [
            pe(o("input", {
              "onUpdate:modelValue": (m) => B.key = m,
              type: "text",
              class: z([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(B.key.trim()) || g.value.has(B.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: v
            }, null, 42, Zr), [
              [Me, B.key]
            ]),
            g.value.has(B.key.trim()) ? (t(), n("p", Jr, " Letters, numbers, underscores and dashes only. ")) : p.value.has(B.key.trim()) ? (t(), n("p", Yr, " Used twice - only the last value will be saved. ")) : w("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (m) => B.value = m,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: v
          }, null, 40, Xr), [
            [Me, B.value]
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
          ])], 8, Qr)
        ]))), 128))
      ])) : (t(), n("p", ei, " Nothing here yet. ")),
      o("div", ti, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || C.value,
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
          N(" Add " + f(e.keyLabel.toLowerCase()), 1)
        ], 8, ai),
        e.maxPairs !== null ? (t(), n("p", ni, f(u.value.length) + " of " + f(e.maxPairs), 1)) : w("", !0)
      ])
    ]));
  }
}), oi = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, si = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, ri = ["disabled", "title", "aria-label", "onClick"], ii = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ui = ["d"], di = ["disabled"], ci = ["contenteditable", "data-placeholder"], fi = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, mi = /* @__PURE__ */ O({
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
    ], d = x(() => u.filter((k) => a.toolbar.includes(k.id))), c = x(() => a.toolbar.includes("link")), v = R(0);
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
    function y(k) {
      k.preventDefault();
      const M = k.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, M), p();
    }
    return ge(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", v.value = s.value.innerText.trim().length);
    }), me(
      () => a.modelValue,
      (k) => {
        k !== i && s.value && (s.value.innerHTML = k ?? "", v.value = s.value.innerText.trim().length);
      }
    ), (k, M) => (t(), n("div", oi, [
      o("div", si, [
        (t(!0), n(A, null, L(d.value, (S) => (t(), n("button", {
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
          (t(), n("svg", ii, [
            o("path", {
              d: S.path
            }, null, 8, ui)
          ]))
        ], 40, ri))), 128)),
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
        ])], 40, di)) : w("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: z(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: y
      }, null, 42, ci),
      e.maxLength !== null ? (t(), n("div", fi, f(v.value) + " / " + f(e.maxLength), 1)) : w("", !0)
    ]));
  }
}), pi = /* @__PURE__ */ bt(mi, [["__scopeId", "data-v-32c63bc7"]]), vi = {
  key: 1,
  class: "flex flex-col gap-2"
}, gi = { class: "flex items-center justify-between gap-2" }, hi = ["for"], bi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, xi = ["aria-label", "disabled"], yi = {
  key: 7,
  class: "flex flex-col gap-2"
}, ki = ["id", "value", "disabled"], $i = ["value"], wi = {
  key: 0,
  class: "relative"
}, Ci = ["disabled"], Si = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Mi = { class: "max-h-56 overflow-y-auto p-1" }, Bi = ["onClick"], _i = {
  key: 8,
  class: "relative"
}, Pi = ["disabled", "aria-invalid"], zi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Ai = { class: "max-h-56 overflow-y-auto p-1" }, Oi = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, ji = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Vi = ["onClick"], Li = ["id", "value", "disabled", "aria-invalid"], Ti = ["value"], Di = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Ei = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Ii = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Fi = {
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
}, Ye = /* @__PURE__ */ O({
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
    const a = ea(() => import("./PkRepeater-J84jGe3T.js")), r = ea(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = R(!1), d = R(""), c = R([]), v = R(!1), p = R(null);
    let g;
    me(d, (le) => {
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
      if (!(s.processing || s.field.disabled) && (u.value = !0, c.value.length === 0 && s.searchOptions)) {
        v.value = !0;
        try {
          c.value = await s.searchOptions("");
        } finally {
          v.value = !1;
        }
      }
    }
    function y(le) {
      p.value = le.label, i("change", le.value), u.value = !1, d.value = "";
    }
    function k() {
      p.value = null, i("change", null);
    }
    const M = mt("panelPicker", null), S = mt("panelCreateOption", null), B = R(!1), m = R(!1), h = R({}), $ = R(null), P = x(() => Cr(s.field)), I = x(() => Sr(s.field));
    function E() {
      h.value = {}, $.value = null, B.value = !0, u.value = !1;
    }
    function te() {
      m.value || (B.value = !1, h.value = {}, $.value = null);
    }
    async function H(le) {
      if (S) {
        m.value = !0, h.value = {}, $.value = null;
        try {
          const X = await S.run(s.field.key, { ...le });
          y(X), B.value = !1;
        } catch (X) {
          X instanceof wr ? (h.value = X.fieldErrors, $.value = Object.keys(X.fieldErrors).length === 0 ? X.message : null) : $.value = X instanceof Error ? X.message : "Could not create that option.";
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
      p.value = le.label, Z(le.value), u.value = !1, d.value = "";
    }
    ke(() => clearTimeout(g));
    const _ = x(() => $r(s.field.type)), F = x(
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
    const J = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Ne} ${Se}`, ve = `bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 ${Ne}`;
    function xe(le) {
      const X = document.getElementById(`f-${s.field.key}`);
      if (!(X instanceof HTMLTextAreaElement) && !(X instanceof HTMLInputElement))
        return;
      const ne = X.selectionStart ?? X.value.length, Ce = X.selectionEnd ?? ne;
      X.setRangeText(le, ne, Ce, "end"), X.dispatchEvent(new Event("input", { bubbles: !0 })), X.focus();
    }
    return (le, X) => (t(), n(A, null, [
      e.field.type === "hidden" ? (t(), n(A, { key: 0 }, [], 64)) : (t(), n("div", vi, [
        o("div", gi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: z(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            N(f(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", bi, "*")) : w("", !0)
          ], 10, hi),
          e.field.hint ? (t(), n("span", {
            key: 0,
            class: z(["flex items-center gap-1", b(ft)])
          }, [
            N(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: X[0] || (X[0] = (ne) => V(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, xi)) : w("", !0)
          ], 2)) : w("", !0)
        ]),
        _.value ? (t(), T(Be(_.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[1] || (X[1] = (ne) => i("change", ne))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(Ca, {
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
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(pi, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[5] || (X[5] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(li, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[6] || (X[6] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Ut, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": X[7] || (X[7] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : G.value.length ? (t(), n("div", yi, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: oe.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", b(Se)]),
            onChange: X[8] || (X[8] = (ne) => ae(ne.target.value))
          }, [
            X[24] || (X[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(A, null, L(G.value, (ne) => (t(), n("option", {
              key: ne.value,
              value: ne.value
            }, f(ne.label), 9, $i))), 128))
          ], 42, ki),
          oe.value.type && e.searchOptions ? (t(), n("div", wi, [
            o("button", {
              type: "button",
              class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Se)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: z(p.value || oe.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (oe.value.id ? String(oe.value.id) : "Search…")), 3)
            ], 10, Ci),
            u.value ? (t(), n("div", Si, [
              pe(o("input", {
                "onUpdate:modelValue": X[9] || (X[9] = (ne) => d.value = ne),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Me, d.value]
              ]),
              o("div", Mi, [
                (t(!0), n(A, null, L(c.value, (ne) => (t(), n("button", {
                  key: String(ne.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => q(ne)
                }, f(ne.label), 9, Bi))), 128))
              ])
            ])) : w("", !0),
            u.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: X[10] || (X[10] = (ne) => u.value = !1)
            })) : w("", !0)
          ])) : w("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", _i, [
          o("button", {
            type: "button",
            class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Se)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: C
          }, [
            o("span", {
              class: z(p.value || e.value ? "" : "text-muted-foreground")
            }, f(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he(k, ["stop"])
            }, " ✕ ")) : w("", !0)
          ], 10, Pi),
          u.value ? (t(), n("div", zi, [
            pe(o("input", {
              "onUpdate:modelValue": X[11] || (X[11] = (ne) => d.value = ne),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Me, d.value]
            ]),
            o("div", Ai, [
              v.value ? (t(), n("p", Oi, " Searching… ")) : c.value.length === 0 ? (t(), n("p", ji, " No matches ")) : w("", !0),
              (t(!0), n(A, null, L(c.value, (ne) => (t(), n("button", {
                key: String(ne.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => y(ne)
              }, f(ne.label), 9, Vi))), 128)),
              e.field.createOption && b(S) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: E
              }, [
                X[25] || (X[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + f(I.value), 1)
              ])) : w("", !0)
            ])
          ])) : w("", !0),
          u.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: X[12] || (X[12] = (ne) => u.value = !1)
          })) : w("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", b(Se)]),
          onChange: X[13] || (X[13] = (ne) => i("change", ne.target.value || null))
        }, [
          X[26] || (X[26] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(A, null, L(e.options, (ne) => (t(), n("option", {
            key: String(ne.value),
            value: ne.value
          }, f(ne.label), 9, Ti))), 128))
        ], 42, Li)) : e.field.type === "toggle" ? (t(), n("label", Di, [
          D(b(Ze), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[14] || (X[14] = (ne) => i("change", ne))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: z(b(ft))
          }, f(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", Ei, [
          D(b(zr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[15] || (X[15] = (ne) => i("change", ne === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: z(b(ft))
          }, f(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !F.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", b(Ne), b(Se)]),
          onInput: X[16] || (X[16] = (ne) => i("change", ne.target.value))
        }, null, 42, Ii)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: z([
            "border-input flex overflow-hidden rounded-md border",
            b(ta),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Fi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[17] || (X[17] = (ne) => V(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Ni)) : w("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: z(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", b(Ne)]),
            onInput: X[18] || (X[18] = (ne) => i("change", ne.target.value))
          }, null, 42, Ri),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Ui, f(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[19] || (X[19] = (ne) => V(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Hi)) : w("", !0)
        ], 2)) : F.value ? (t(), n("div", {
          key: 15,
          class: z([
            "border-input flex h-9 overflow-hidden rounded-md border",
            b(ta),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", qi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[21] || (X[21] = (ne) => V(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Gi)) : w("", !0),
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
            class: z(ve),
            onInput: X[22] || (X[22] = (ne) => i("change", ne.target.value))
          }, null, 40, Wi),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Zi, f(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[23] || (X[23] = (ne) => V(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Ji)) : w("", !0)
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
          class: z(J),
          onInput: X[20] || (X[20] = (ne) => i("change", ne.target.value))
        }, null, 40, Ki)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", Yi, [
          (t(!0), n(A, null, L(e.field.presets, (ne) => (t(), n("button", {
            key: ne,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: z([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              b(Se),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ne ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ne
            ),
            onClick: (Ce) => i("change", String(ne))
          }, f(ne), 11, Xi))), 128))
        ])) : w("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", Qi, [
          (t(!0), n(A, null, L(e.field.chips, (ne, Ce) => (t(), n("button", {
            key: Ce,
            type: "button",
            title: ne,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (Xt) => xe(String(Ce))
          }, f(Ce), 9, eu))), 128))
        ])) : w("", !0),
        K.value ? (t(), n("a", {
          key: 18,
          href: K.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, tu)) : w("", !0),
        e.error ? (t(), n("p", au, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: z(b(ft))
        }, f(e.field.help), 3)) : w("", !0)
      ])),
      e.field.createOption && b(S) ? (t(), T(Pr, {
        key: 2,
        open: B.value,
        title: P.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: m.value,
        errors: h.value,
        "general-error": $.value,
        onClose: te,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : w("", !0)
    ], 64));
  }
}), nu = { class: "flex min-w-0 items-start gap-2.5" }, lu = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, ou = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, su = ["d"], ru = { class: "min-w-0" }, iu = { class: "text-sm font-semibold" }, uu = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, du = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, cu = { class: "border-b px-4 py-3.5 sm:px-5" }, fu = { class: "text-sm font-semibold" }, mu = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, pu = {
  key: 4,
  class: "min-w-0 space-y-4"
}, vu = {
  key: 7,
  class: "flex flex-col gap-3"
}, gu = { class: "text-sm font-medium" }, hu = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, bu = {
  key: 0,
  class: "mb-1 font-medium"
}, xu = ["onClick"], yu = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, ku = { class: "flex items-center justify-between gap-3 border-t p-4" }, $u = ["disabled"], Sa = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), u = R(0), d = x(
      () => (a.node.children ?? []).map((B) => ({
        label: B.label ?? "",
        description: B.description
      }))
    ), c = x(() => a.depth === 0), v = x(() => {
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
    }), g = x(() => {
      const B = a.node.columns ?? 1;
      return B >= 3 ? "sm:grid-cols-3" : B === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function C(B) {
      const m = B.children?.length ?? 1;
      return m >= 3 ? "md:grid-cols-3" : m === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function y(B = 1) {
      return B >= 4 ? "md:col-span-4" : B === 3 ? "md:col-span-3" : B === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function k(B) {
      const m = [], h = ($) => {
        $.component === "field" && $.key && m.push($.key), $.children?.forEach(h);
      };
      return h(B), m.some(($) => a.errors[$]);
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
      const h = Dt("SchemaNode", !0);
      return e.node.component === "field" && M(e.node) ? (t(), T(Ye, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? ($) => e.searchOptions(e.node.key, $) : void 0,
        upload: S(e.node.key),
        discard: e.discard,
        onChange: m[0] || (m[0] = ($) => r("change", e.node.key, $)),
        onAffixAction: m[1] || (m[1] = ($) => r("affix-action", e.node.key, $))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && M(e.node) ? (t(), n("section", {
        key: 1,
        class: z(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: z(["flex items-start justify-between gap-3", [
            c.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: m[2] || (m[2] = ($) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", nu, [
            e.node.icon ? (t(), n("div", lu, [
              (t(), n("svg", ou, [
                o("path", {
                  d: b(ce)(e.node.icon)
                }, null, 8, su)
              ]))
            ])) : w("", !0),
            o("div", ru, [
              o("h3", iu, f(e.node.label), 1),
              e.node.description ? (t(), n("p", uu, f(e.node.description), 1)) : w("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...m[24] || (m[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : w("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [g.value, c.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], ($, P) => (t(), T(h, {
            key: P,
            node: $,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: z($.span && $.span >= 2 ? "sm:col-span-2" : ""),
            onChange: m[3] || (m[3] = (I, E) => r("change", I, E)),
            onAffixAction: m[4] || (m[4] = (I, E) => r("affix-action", I, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "card" && M(e.node) ? (t(), n("section", du, [
        o("header", cu, [
          o("h3", fu, f(e.node.title), 1),
          e.node.description ? (t(), n("p", mu, f(e.node.description), 1)) : w("", !0)
        ]),
        o("div", {
          class: z(["grid grid-cols-1 gap-4 px-4 py-4", g.value])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], ($, P) => (t(), T(h, {
            key: P,
            node: $,
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
        class: z(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), n(A, null, L(e.node.children ?? [], ($, P) => (t(), T(h, {
          key: P,
          node: $,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: z($.component === "column" ? y($.span) : ""),
          onChange: m[7] || (m[7] = (I, E) => r("change", I, E)),
          onAffixAction: m[8] || (m[8] = (I, E) => r("affix-action", I, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && M(e.node) ? (t(), n("div", pu, [
        (t(!0), n(A, null, L(e.node.children ?? [], ($, P) => (t(), T(h, {
          key: P,
          node: $,
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
        class: z(["grid grid-cols-1 gap-4", g.value])
      }, [
        (t(!0), n(A, null, L(e.node.children ?? [], ($, P) => (t(), T(h, {
          key: P,
          node: $,
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
        class: z(["flex", v.value])
      }, [
        (t(!0), n(A, null, L(e.node.children ?? [], ($, P) => (t(), T(h, {
          key: P,
          node: $,
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
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", vu, [
        o("legend", gu, f(e.node.label), 1),
        e.node.description ? (t(), n("p", hu, f(e.node.description), 1)) : w("", !0),
        o("div", {
          class: z(["grid grid-cols-1 gap-4", g.value])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], ($, P) => (t(), T(h, {
            key: P,
            node: $,
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
        class: z(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), n("p", bu, f(e.node.title), 1)) : w("", !0),
        o("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: z(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", c.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], ($, P) => (t(), n("button", {
            key: P,
            type: "button",
            class: z([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === P ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (I) => i.value = P
          }, [
            N(f($.label) + " ", 1),
            k($) ? (t(), n("span", yu)) : w("", !0)
          ], 10, xu))), 128))
        ], 2),
        (t(!0), n(A, null, L(e.node.children ?? [], ($, P) => pe((t(), n("div", {
          key: P,
          class: z(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(A, null, L($.children ?? [], (I, E) => (t(), T(h, {
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
          [Ue, i.value === P]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 10,
        class: z(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        D(kr, {
          class: z(["p-4", c.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": ($) => k((e.node.children ?? [])[$]),
          "onUpdate:activeStep": m[19] || (m[19] = ($) => u.value = $)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(A, null, L(e.node.children ?? [], ($, P) => pe((t(), n("div", {
          key: P,
          class: z(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(A, null, L($.children ?? [], (I, E) => (t(), T(h, {
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
          [Ue, u.value === P]
        ])), 128)),
        o("div", ku, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: m[22] || (m[22] = ($) => u.value--)
          }, " Back ", 8, $u),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: m[23] || (m[23] = ($) => u.value++)
          }, " Next ")) : w("", !0)
        ])
      ], 2)) : w("", !0);
    };
  }
}), I4 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(st, {
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
          (t(!0), n(A, null, L(e.form?.nodes ?? [], (c, v) => (t(), T(Sa, {
            key: v,
            node: c,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: d[0] || (d[0] = (p, g) => s.value[p] = g)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), wu = ["title"], Cu = ["aria-label"], Su = ["d"], Mu = { class: "sr-only" }, Bu = /* @__PURE__ */ O({
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
    }, s = x(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = x(() => l.icons[s.value] ?? l.defaultIcon), u = x(() => a[i.value] ?? a.dot), d = x(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), c = x(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (v, p) => (t(), n("span", {
      class: "inline-flex items-center",
      title: c.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: z(["size-4", d.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": c.value
      }, [
        o("path", { d: u.value }, null, 8, Su)
      ], 10, Cu)),
      o("span", Mu, f(c.value), 1)
    ], 8, wu));
  }
}), _u = ["aria-label"], Pu = ["fill"], F4 = /* @__PURE__ */ O({
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
      (t(!0), n(A, null, L(a.value, (u) => (t(), n("svg", {
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
    ], 8, _u));
  }
}), zu = ["src"], Au = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Ou = /* @__PURE__ */ O({
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
      const u = typeof l.src == "string" ? l.src.trim() : "";
      return u === "" ? null : /^(https?:)?\/\//i.test(u) ? u : null;
    }), i = x(() => {
      const u = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return u === "" ? "?" : u.split(/\s+/).slice(0, 2).map((d) => d[0]?.toUpperCase() ?? "").join("");
    });
    return (u, d) => (t(), n("span", {
      class: z(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (c) => a.value = !0)
      }, null, 40, zu)) : e.fallback === "initials" ? (t(), n(A, { key: 1 }, [
        N(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Au, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : w("", !0)
    ], 2));
  }
}), ju = {
  key: 0,
  class: "text-muted-foreground"
}, Vu = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Lu = {
  key: 0,
  class: "font-mono text-xs"
}, Tu = {
  key: 1,
  class: "sr-only"
}, Du = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), n("span", ju, "-")) : (t(), n("span", Vu, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Lu, f(r.value), 1)) : (t(), n("span", Tu, f(r.value), 1))
    ]));
  }
}), Eu = { class: "inline-flex items-center" }, Iu = ["checked", "aria-label"], Fu = { class: "sr-only" }, N4 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("span", Eu, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Iu),
      o("span", Fu, f(r.value), 1)
    ]));
  }
}), Nu = {
  key: 0,
  class: "text-muted-foreground"
}, Ru = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, R4 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = x(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", Ru, f(a.value), 1)) : (t(), n("span", Nu, "—"));
  }
}), Uu = {
  key: 0,
  class: "font-mono text-xs"
}, Hu = {
  key: 1,
  class: "text-muted-foreground"
}, Ku = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, U4 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = x(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", Uu, f(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", Hu, "—")) : (t(), n("span", Ku, f(a.value.length) + " " + f(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), qu = ["data-variant"], Gu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ke = /* @__PURE__ */ O({
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
      () => [Gu, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: z(r.value)
    }, [
      U(s.$slots, "default")
    ], 10, qu));
  }
}), Wu = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Zu = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, H4 = /* @__PURE__ */ O({
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
            const v = JSON.parse(c);
            if (Array.isArray(v))
              return a(v, d);
          } catch {
          }
        return c.split(d).map((v) => v.trim()).filter((v) => v !== "");
      }
      return [String(u)];
    }
    const r = x(() => a(l.value, l.separator)), s = x(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = x(() => Math.max(0, r.value.length - s.value.length));
    return (u, d) => r.value.length === 0 ? (t(), n("span", Wu, "None")) : (t(), n("span", Zu, [
      (t(!0), n(A, null, L(s.value, (c) => (t(), T(Ke, {
        key: c,
        variant: "secondary"
      }, {
        default: j(() => [
          N(f(c), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), T(Ke, {
        key: 0,
        variant: "outline"
      }, {
        default: j(() => [
          N("+" + f(i.value), 1)
        ]),
        _: 1
      })) : w("", !0)
    ]));
  }
}), Ju = ["aria-checked", "aria-label", "title", "disabled"], Yu = ["value", "disabled"], Xu = ["value"], K4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => a.value === !0 || a.value === 1 || a.value === "1"), i = x(() => a.busy || a.disabled), u = x(
      () => s.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function d() {
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
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: z(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: he(d, ["stop"])
    }, [
      o("span", {
        class: z(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Ju)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = he(() => {
      }, ["stop"])),
      onChange: c
    }, [
      (t(!0), n(A, null, L(e.options, (g, C) => (t(), n("option", {
        key: C,
        value: C
      }, f(g), 9, Xu))), 128))
    ], 40, Yu));
  }
}), qt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Qu(e) {
  return e != null && e !== "";
}
function ed(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function q4(e) {
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
      cellClass: ed(s),
      group: s.group
    }))
  ), a = x(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = a.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), c = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return qt[c] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const td = ["disabled", "aria-label", "aria-busy"], ad = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nd = ["d"], ld = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, od = ["disabled", "onClick"], sd = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, rd = ["d"], id = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, G4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => a.busy || a.disabled), i = x(() => String(a.value ?? "")), u = x(() => `Select ${(a.label || "value").trim().toLowerCase()}`);
    function d(g) {
      return typeof g == "boolean" ? g ? "1" : "" : String(g ?? "");
    }
    function c(g) {
      const C = a.colors[d(g)] ?? a.defaultColor ?? "neutral";
      return qt[C] ?? "outline";
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
      e.disabled ? (t(), T(Ke, {
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
            "aria-label": u.value,
            "aria-busy": e.busy
          }, [
            D(Ke, {
              variant: c(e.value),
              class: "capitalize"
            }, {
              default: j(() => [
                N(f(v(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", ad, [
              o("path", {
                d: b(ce)("chevron-down")
              }, null, 8, nd)
            ]))
          ], 8, td)
        ]),
        panel: j(({ close: y }) => [
          o("div", ld, f(u.value), 1),
          (t(!0), n(A, null, L(e.options, (k, M) => (t(), n("button", {
            key: M,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (S) => p(String(M), y)
          }, [
            D(Ke, {
              variant: c(M),
              class: "capitalize"
            }, {
              default: j(() => [
                N(f(k), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(M) === i.value ? (t(), n("svg", sd, [
              o("path", {
                d: b(ce)("check")
              }, null, 8, rd)
            ])) : (t(), n("span", id))
          ], 8, od))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), ud = { class: "flex items-center justify-end" }, dd = ["aria-label"], cd = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, fd = ["d"], md = ["href"], pd = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vd = ["d"], gd = ["disabled", "onClick"], hd = ["d"], bd = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, xd = ["disabled", "onClick"], yd = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, kd = ["d"], W4 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(null), u = R(null), d = x(() => r.groups.flatMap((S) => S.actions)), c = x(() => d.value.filter((S) => !S.destructive)), v = x(() => d.value.filter((S) => S.destructive)), p = {
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
    const C = x(() => d.value.length === 0);
    function y(S) {
      s("run", S);
    }
    function k(S) {
      C.value || (S.preventDefault(), i.value?.openAt(S.clientX, S.clientY));
    }
    function M(S) {
      if (S.key !== "ArrowDown" && S.key !== "ArrowUp")
        return;
      const B = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (B.length === 0)
        return;
      S.preventDefault();
      const m = B.indexOf(document.activeElement), h = S.key === "ArrowDown" ? 1 : -1, $ = (m + h + B.length) % B.length;
      B[$]?.focus();
    }
    return l({ openContextMenu: k }), (S, B) => (t(), n("div", ud, [
      C.value ? w("", !0) : (t(), T(Je, {
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
            (t(), n("svg", cd, [
              o("path", {
                d: b(ce)("more-vertical")
              }, null, 8, fd)
            ]))
          ], 8, dd)
        ]),
        panel: j(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: M
          }, [
            (t(!0), n(A, null, L(c.value, (m) => (t(), n(A, {
              key: m.key
            }, [
              m.link ? (t(), n("a", {
                key: 0,
                href: m.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g(m)])
              }, [
                (t(), n("svg", pd, [
                  o("path", {
                    d: b(ce)(m.icon)
                  }, null, 8, vd)
                ])),
                N(" " + f(m.label), 1)
              ], 10, md)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", g(m)]),
                disabled: e.busy === m.key,
                onClick: (h) => y(m)
              }, [
                (t(), n("svg", {
                  class: z(["size-4 shrink-0", e.busy === m.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: b(ce)(m.icon)
                  }, null, 8, hd)
                ], 2)),
                N(" " + f(m.label), 1)
              ], 10, gd))
            ], 64))), 128)),
            v.value.length ? (t(), n("div", bd, [
              (t(!0), n(A, null, L(v.value, (m) => (t(), n("button", {
                key: m.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === m.key,
                onClick: (h) => y(m)
              }, [
                (t(), n("svg", yd, [
                  o("path", {
                    d: b(ce)(m.icon ?? "trash")
                  }, null, 8, kd)
                ])),
                N(" " + f(m.label), 1)
              ], 8, xd))), 128))
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
}, pt = 12, vt = 20, $d = [0, 0.25, 0.5, 0.75, 1], Gt = "alxtexhpanel.appearance", je = {
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
}, Fe = R({ ...je });
let aa = !1;
const wd = "alxtexhpanel.appearance.vars";
function Ot(e) {
  return e.theme === "dark";
}
const na = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, la = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function Cd(e) {
  const l = zt[e.primary] ?? zt.slate, a = At[e.surface] ?? At.neutral, r = a.chroma, s = a.hue, u = Ot(e) ? {
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
    "--pk-row-padding": na[e.density] ?? na.comfortable,
    "--pk-form-gap": la[e.density] ?? la.comfortable
  };
}
function Wt() {
  if (typeof window > "u")
    return { ...je };
  try {
    const e = localStorage.getItem(Gt);
    if (!e)
      return { ...je };
    const l = { ...je, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = je.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? je.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < pt || l.fontSize > vt) && (l.fontSize = je.fontSize), l;
  } catch {
    return { ...je };
  }
}
function Z4(e) {
  const l = Wt(), a = e ? { ...l, ...e } : l;
  if (Fe.value = a, jt(a), e)
    try {
      localStorage.setItem(Gt, JSON.stringify(a));
    } catch {
    }
}
let Ma = null;
function J4(e) {
  Ma = e;
}
let Ba = {};
function Sd(e) {
  if (Ba = e, !(typeof document > "u") && !Wt().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function jt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...Cd(e), ...e.primaryChosen ? {} : Ba };
  l.classList.toggle("dark", Ot(e));
  for (const [r, s] of Object.entries(a))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      wd,
      JSON.stringify({ dark: Ot(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function _a() {
  function e(r) {
    jt(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Fe.value = { ...Fe.value, ...r, ...s };
    try {
      localStorage.setItem(Gt, JSON.stringify(Fe.value));
    } catch {
    }
    e(Fe.value), Ma?.({ ...r, ...s });
  }
  function a() {
    l({ ...je });
  }
  return ge(() => {
    aa || (aa = !0, Fe.value = Wt(), jt(Fe.value));
  }), {
    appearance: x(() => Fe.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: zt,
    SURFACE_TINTS: At,
    FONT_SIZE_MIN: pt,
    FONT_SIZE_MAX: vt,
    RADIUS_OPTIONS: $d
  };
}
const Md = { class: "flex items-center justify-between border-b px-4 py-3" }, Bd = { class: "flex items-center gap-2" }, _d = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Pd = { class: "flex flex-col gap-2" }, zd = { class: "grid grid-cols-8 gap-2" }, Ad = ["title", "aria-label", "aria-pressed", "onClick"], Od = { class: "flex flex-col gap-2" }, jd = { class: "grid grid-cols-8 gap-2" }, Vd = ["title", "aria-label", "aria-pressed", "onClick"], Ld = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Td = { class: "flex flex-col gap-2" }, Dd = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Ed = ["aria-pressed", "aria-label", "onClick"], Id = { class: "text-sm font-semibold" }, Fd = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Nd = ["onClick"], Rd = { class: "flex flex-col gap-2" }, Ud = { class: "flex items-center justify-between" }, Hd = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Kd = { class: "flex items-center gap-2" }, qd = ["disabled"], Gd = ["min", "max", "value"], Wd = ["disabled"], Y4 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = _a(), d = R(!1), c = x(() => l.value.sidebarSide === "right"), v = [
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
    ], y = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], k = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function M(S, B) {
      return `oklch(0.72 ${B * 3} ${S})`;
    }
    return (S, B) => (t(), n(A, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: B[0] || (B[0] = (m) => d.value = !0)
      }, [...B[7] || (B[7] = [
        Tt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Xe, { to: "body" }, [
        D(Re, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
            d.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: B[1] || (B[1] = (m) => d.value = !1)
            })) : w("", !0)
          ]),
          _: 1
        }),
        D(Re, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": c.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": c.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: j(() => [
            d.value ? (t(), n("aside", {
              key: 0,
              class: z(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", c.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", Md, [
                B[9] || (B[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", Bd, [
                  o("button", {
                    class: "text-muted-foreground text-xs font-normal hover:underline",
                    onClick: B[2] || (B[2] = //@ts-ignore
                    (...m) => b(r) && b(r)(...m))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: B[3] || (B[3] = (m) => d.value = !1)
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
              o("div", _d, [
                o("section", Pd, [
                  B[11] || (B[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", zd, [
                    (t(!0), n(A, null, L(b(s), (m, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: se({ background: m.value }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": b(l).primary === h,
                      onClick: ($) => b(a)({ primary: h })
                    }, [
                      b(l).primary === h ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: se({ color: m.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...B[10] || (B[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : w("", !0)
                    ], 12, Ad))), 128))
                  ])
                ]),
                o("section", Od, [
                  B[13] || (B[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", jd, [
                    (t(!0), n(A, null, L(b(i), (m, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: se({ background: M(m.hue, m.chroma) }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": b(l).surface === h,
                      onClick: ($) => b(a)({ surface: h })
                    }, [
                      b(l).surface === h ? (t(), n("svg", Ld, [...B[12] || (B[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : w("", !0)
                    ], 12, Vd))), 128))
                  ])
                ]),
                o("section", Td, [
                  B[14] || (B[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", Dd, [
                    (t(!0), n(A, null, L(b(u), (m) => (t(), n("button", {
                      key: m,
                      type: "button",
                      class: z([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l).radius === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": b(l).radius === m,
                      "aria-label": `${m}rem radius`,
                      onClick: (h) => b(a)({ radius: m })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: se({ borderRadius: `${Math.min(m, 0.5)}rem` })
                      }, null, 4),
                      N(" " + f(m), 1)
                    ], 10, Ed))), 128))
                  ])
                ]),
                (t(!0), n(A, null, L([
                  { label: "Color scheme", key: "theme", options: v },
                  { label: "Card style", key: "cardStyle", options: g },
                  { label: "Density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: C },
                  { label: "Content layout", key: "contentLayout", options: y },
                  { label: "Menu style", key: "menuStyle", options: k }
                ], (m) => (t(), n("section", {
                  key: m.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", Id, f(m.label), 1),
                  o("div", Fd, [
                    (t(!0), n(A, null, L(m.options, (h) => (t(), n("button", {
                      key: String(h.value),
                      type: "button",
                      class: z([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l)[m.key] === h.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: ($) => b(a)({ [m.key]: h.value })
                    }, f(h.label), 11, Nd))), 128))
                  ])
                ]))), 128)),
                o("section", Rd, [
                  o("div", Ud, [
                    B[15] || (B[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", Hd, f(b(l).fontSize) + "px", 1)
                  ]),
                  o("div", Kd, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize <= b(pt),
                      "aria-label": "Decrease font size",
                      onClick: B[4] || (B[4] = (m) => b(a)({ fontSize: b(l).fontSize - 1 }))
                    }, " − ", 8, qd),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: b(pt),
                      max: b(vt),
                      value: b(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: B[5] || (B[5] = (m) => b(a)({
                        fontSize: Number(m.target.value)
                      }))
                    }, null, 40, Gd),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize >= b(vt),
                      "aria-label": "Increase font size",
                      onClick: B[6] || (B[6] = (m) => b(a)({ fontSize: b(l).fontSize + 1 }))
                    }, " + ", 8, Wd)
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
}), Zd = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Jd = { class: "flex items-stretch" }, Yd = ["href", "aria-current"], Xd = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qd = ["d"], ec = { class: "w-full truncate text-center" }, tc = {
  key: 0,
  class: "flex-1"
}, ac = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, nc = ["d"], lc = { class: "w-full truncate text-center" }, Ct = 5, X4 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(
      () => a.items.length <= Ct ? a.items : a.items.slice(0, Ct - 1)
    ), i = x(() => a.items.length > Ct);
    function u(d) {
      return d === "/" ? a.current === "/" : a.current === d || a.current.startsWith(`${d}/`);
    }
    return (d, c) => (t(), n("nav", Zd, [
      o("ul", Jd, [
        (t(!0), n(A, null, L(s.value, (v) => (t(), n("li", {
          key: v.key,
          class: "flex-1"
        }, [
          o("a", {
            href: v.href,
            class: z([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(v.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(v.href) ? "page" : void 0
          }, [
            (t(), n("svg", Xd, [
              o("path", {
                d: b(ce)(v.icon)
              }, null, 8, Qd)
            ])),
            o("span", ec, f(v.title), 1)
          ], 10, Yd)
        ]))), 128)),
        i.value ? (t(), n("li", tc, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: c[0] || (c[0] = (v) => r("more"))
          }, [
            (t(), n("svg", ac, [
              o("path", {
                d: b(ce)("more-horizontal")
              }, null, 8, nc)
            ])),
            o("span", lc, f(e.moreLabel), 1)
          ])
        ])) : w("", !0)
      ])
    ]));
  }
}), oc = ["value"], $e = /* @__PURE__ */ O({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = `file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ${Ne}`;
    return (i, u) => (t(), n("input", {
      "data-slot": "input",
      value: a.modelValue ?? a.defaultValue,
      class: z([s, a.class]),
      onInput: u[0] || (u[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, oc));
  }
}), sc = ["for"], _e = /* @__PURE__ */ O({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, a) => (t(), n("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: z([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      U(l.$slots, "default")
    ], 10, sc));
  }
}), Q4 = /* @__PURE__ */ O({
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
      class: z(["size-4 animate-spin", l.$props.class])
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
}), rc = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, ic = ["id", "name", "value", "disabled", "maxlength"], uc = ["data-active"], dc = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, cc = /* @__PURE__ */ O({
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
    const d = x(
      () => Array.from({ length: a.length }, (B, m) => a.modelValue[m] ?? "")
    ), c = x(() => Math.min(a.modelValue.length, a.length - 1));
    function v(B) {
      return B.replace(/\D/g, "").slice(0, a.length);
    }
    function p(B) {
      a.disabled || B.length !== a.length || u.value !== B && (u.value = B, r("complete", B));
    }
    function g(B) {
      const m = v(B);
      m !== a.modelValue && r("update:modelValue", m), p(m);
    }
    function C(B) {
      g(B.target.value);
    }
    function y(B) {
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
        B.length < a.length ? u.value = "" : p(B);
      }
    );
    let S;
    return ge(() => {
      S = window.setInterval(() => {
        if (a.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && k();
      }, 250);
    }), Ha(() => {
      S !== void 0 && window.clearInterval(S);
    }), (B, m) => (t(), n("div", rc, [
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
        onChange: y,
        onAnimationstart: M,
        onFocus: m[0] || (m[0] = (h) => s.value = !0),
        onBlur: m[1] || (m[1] = (h) => s.value = !1)
      }, null, 40, ic),
      (t(!0), n(A, null, L(d.value, (h, $) => (t(), n("div", {
        key: $,
        "data-slot": "input-otp-slot",
        "data-active": s.value && $ === c.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(f(h) + " ", 1),
        s.value && $ === c.value && h === "" ? (t(), n("div", dc, [...m[2] || (m[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : w("", !0)
      ], 8, uc))), 128))
    ]));
  }
}), e5 = /* @__PURE__ */ bt(cc, [["__scopeId", "data-v-560616ac"]]), fc = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Le = /* @__PURE__ */ O({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (l, a) => (t(), n("header", {
      class: z(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: z(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), n("p", fc, f(e.description), 1)) : w("", !0)
    ], 2));
  }
}), mc = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, pc = { class: "min-w-0 space-y-1" }, vc = { class: "flex flex-wrap items-center gap-2.5" }, gc = { class: "text-2xl font-semibold tracking-tight" }, hc = {
  key: 0,
  class: "flex items-center gap-2"
}, bc = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, xc = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, t5 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", mc, [
      o("div", pc, [
        o("div", vc, [
          o("h1", gc, f(e.title), 1),
          l.$slots.status ? (t(), n("div", hc, [
            U(l.$slots, "status")
          ])) : w("", !0)
        ]),
        e.purpose ? (t(), n("p", bc, f(e.purpose), 1)) : w("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", xc, [
        U(l.$slots, "actions")
      ])) : w("", !0)
    ]));
  }
}), yc = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: z(b(Q)(b(wc)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), kc = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: z(b(Q)("col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), $c = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: z(b(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), wc = Rt(
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
), Cc = { class: "list-inside list-disc text-sm" }, a5 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = x(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(b(yc), { variant: "destructive" }, {
      default: j(() => [
        D(b(Ln), { class: "size-4" }),
        D(b($c), null, {
          default: j(() => [
            N(f(e.title), 1)
          ]),
          _: 1
        }),
        D(b(kc), null, {
          default: j(() => [
            o("ul", Cc, [
              (t(!0), n(A, null, L(a.value, (i, u) => (t(), n("li", { key: u }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Pa = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = $a(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, u) => pe((t(), n("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => Ka(s) ? s.value = d : null),
      "data-slot": "input",
      class: z(
        b(Q)(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          b(Ne),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [Me, b(s)]
    ]);
  }
}), Sc = { class: "relative" }, Mc = ["aria-label"], n5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = R(!1), s = qa("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), n("div", Sc, [
      D(b(Pa), re({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: b(Q)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: z(
          b(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), T(b(Tn), {
          key: 0,
          class: "size-4"
        })) : (t(), T(b(Dn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Mc)
    ]));
  }
}), za = "@container min-w-0", Bc = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", l5 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", _c = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3", qe = "w-full min-w-0 px-4 py-6 sm:px-6", o5 = "w-full min-w-0 p-3 sm:p-4", s5 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", r5 = "w-full max-w-5xl";
function i5(e, l) {
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
const Aa = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Pc = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", zc = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Ac(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function Oc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function jc(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await Vc(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function Vc(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Lc(e) {
  if (Ac(e))
    throw new Error(zc);
  if (!Oc(e))
    throw new Error(Aa);
  if (!await jc(e))
    throw new Error(Pc);
}
const u5 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Qe), re({ "data-slot": "sheet-close" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tc = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(va), re({
      "data-slot": "sheet-description",
      class: b(Q)("text-sm text-muted-foreground font-normal", l.class)
    }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d5 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: z(b(Q)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Dc = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: z(b(Q)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Ec = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(ga), re({
      "data-slot": "sheet-title",
      class: b(Q)("text-foreground font-semibold", l.class)
    }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c5 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(ha), re({ "data-slot": "sheet-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oa = "sidebar_state", Ic = 3600 * 24 * 7, Fc = "16rem", Nc = "18rem", Rc = "3rem", Uc = "b", [xt, Hc] = tn("Sidebar"), Kc = { class: "flex h-full w-full flex-col" }, qc = ["data-state", "data-collapsible", "data-variant", "data-side"], Gc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, f5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = xt();
    return (u, d) => e.collapsible === "none" ? (t(), n("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: b(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      U(u.$slots, "default")
    ], 16)) : b(a) ? (t(), T(b(Ht), re({
      key: 1,
      open: b(s)
    }, u.$attrs, { "onUpdate:open": b(i) }), {
      default: j(() => [
        D(b(Kt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": b(Nc)
          })
        }, {
          default: j(() => [
            D(Dc, { class: "sr-only" }, {
              default: j(() => [
                D(Ec, null, {
                  default: j(() => [...d[0] || (d[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(Tc, null, {
                  default: j(() => [...d[1] || (d[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", Kc, [
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
      "data-state": b(r),
      "data-collapsible": b(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: z(
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
      }, u.$attrs), [
        o("div", Gc, [
          U(u.$slots, "default")
        ])
      ], 16)
    ], 8, qc));
  }
}), m5 = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: z(
        b(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), p5 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: z(b(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), v5 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: z(b(Q)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), g5 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(et), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: z(
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
}), h5 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: z(b(Q)("w-full text-sm", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), b5 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(et), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: z(
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
}), x5 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: z(b(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), y5 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Pa), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: z(b(Q)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), k5 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: z(
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
}), $5 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: z(b(Q)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), w5 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(et), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: z(
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
}), C5 = /* @__PURE__ */ O({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: z(
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
}), Wc = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(an), re({ "data-slot": "tooltip" }, b(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(Ee(d)))
      ]),
      _: 3
    }, 16));
  }
}), Zc = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(nn), null, {
      default: j(() => [
        D(b(ln), re({ "data-slot": "tooltip-content" }, { ...b(i), ...u.$attrs }, {
          class: b(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: j(() => [
            U(u.$slots, "default"),
            D(b(on), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), S5 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(ba), ze(Ee(l)), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jc = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(sn), re({ "data-slot": "tooltip-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sa = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(et), re({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: b(Q)(b(Xc)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), M5 = /* @__PURE__ */ O({
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
    const l = e, { isMobile: a, state: r } = xt(), s = fe(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), T(b(Wc), { key: 1 }, {
      default: j(() => [
        D(b(Jc), { "as-child": "" }, {
          default: j(() => [
            D(sa, ze(Ee({ ...b(s), ...i.$attrs })), {
              default: j(() => [
                U(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(b(Zc), {
          side: "right",
          align: "center",
          hidden: b(r) !== "collapsed" || b(a)
        }, {
          default: j(() => [
            typeof e.tooltip == "string" ? (t(), n(A, { key: 0 }, [
              N(f(e.tooltip), 1)
            ], 64)) : (t(), T(Be(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(sa, ze(re({ key: 0 }, { ...b(s), ...i.$attrs })), {
      default: j(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B5 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: z(b(Q)("group/menu-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), ra = "animate-pulse rounded-md bg-primary/10", _5 = /* @__PURE__ */ O({
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
      class: z(b(Q)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: z(b(Q)(ra, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : w("", !0),
      o("div", {
        class: z(b(Q)(ra, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": a.value })
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
      class: z(
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
}), z5 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(et), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: z(
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
}), A5 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: z(b(Q)("group/menu-sub-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), O5 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !qn?.cookie.includes(`${oa}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = Hn("(max-width: 767px)"), i = R(!1), u = $a(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function d(g) {
      u.value = g, document.cookie = `${oa}=${u.value}; path=/; max-age=${Ic}`;
    }
    function c(g) {
      i.value = g;
    }
    function v() {
      return s.value ? c(!i.value) : d(!u.value);
    }
    Kn("keydown", (g) => {
      g.key === Uc && (g.metaKey || g.ctrlKey) && (g.preventDefault(), v());
    });
    const p = x(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return Hc({
      state: p,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: c,
      toggleSidebar: v
    }), (g, C) => (t(), T(b(ba), { "delay-duration": 0 }, {
      default: j(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(Fc),
            "--sidebar-width-icon": b(Rc)
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
}), j5 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = xt();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: z(
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
}), Yc = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(b(rn), re({ "data-slot": "separator" }, b(a), {
      class: b(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), V5 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Yc), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: z(b(Q)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), L5 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = xt();
    return (i, u) => (t(), T(de, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: z(b(Q)("h-7 w-7", l.class)),
      onClick: b(s)
    }, {
      default: j(() => [
        b(a) || b(r) === "collapsed" ? (t(), T(b(En), { key: 0 })) : (t(), T(b(In), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Xc = Rt(
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
), T5 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(un), re({ "data-slot": "dropdown-menu" }, b(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(Ee(d)))
      ]),
      _: 3
    }, 16));
  }
}), Qc = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, D5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(dn), re({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", Qc, [
          D(b(xa), null, {
            default: j(() => [
              U(u.$slots, "indicator-icon", {}, () => [
                D(b(ya), { class: "size-4" })
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
}), E5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(cn), null, {
      default: j(() => [
        D(b(fn), re({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...b(i) }, {
          class: b(Q)(
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
}), I5 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(mn), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F5 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(b(pn), re({
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
}), N5 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fe(l, "class", "inset"), r = Ae(a);
    return (s, i) => (t(), T(b(vn), re({
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
}), R5 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, u) => (t(), T(b(gn), re({ "data-slot": "dropdown-menu-radio-group" }, b(s)), {
      default: j(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ef = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, U5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(hn), re({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", ef, [
          D(b(xa), null, {
            default: j(() => [
              U(u.$slots, "indicator-icon", {}, () => [
                D(b(Fn), { class: "size-2 fill-current" })
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
}), H5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(bn), re({ "data-slot": "dropdown-menu-separator" }, b(a), {
      class: b(Q)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), K5 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: z(b(Q)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), q5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, u) => (t(), T(b(xn), re({ "data-slot": "dropdown-menu-sub" }, b(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(Ee(d)))
      ]),
      _: 3
    }, 16));
  }
}), G5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(yn), re({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
      class: b(Q)(
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
}), W5 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(b(kn), re({ "data-slot": "dropdown-menu-sub-trigger" }, b(r), {
      "data-inset": e.inset ? "" : void 0,
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: j(() => [
        U(s.$slots, "default"),
        D(b(ka), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Z5 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Ae(e);
    return (r, s) => (t(), T(b($n), re({ "data-slot": "dropdown-menu-trigger" }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J5 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(wn), {
      "data-slot": "avatar",
      class: z(b(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Y5 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Cn), re({ "data-slot": "avatar-fallback" }, b(a), {
      class: b(Q)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X5 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(Sn), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Q5 = /* @__PURE__ */ O({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: z(l.class)
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), e3 = /* @__PURE__ */ O({
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
      class: z(b(Q)("flex size-9 items-center justify-center", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(b(Nn), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), t3 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: z(b(Q)("inline-flex items-center gap-1.5", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), a3 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(et), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: z(b(Q)("hover:text-foreground transition-colors", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), n3 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: z(
        b(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), l3 = /* @__PURE__ */ O({
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
      class: z(b(Q)("text-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), o3 = /* @__PURE__ */ O({
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
      class: z(b(Q)("[&>svg]:size-3.5", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(b(ka))
      ])
    ], 2));
  }
}), tf = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, af = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", tf, [
      D(b(Mn), re({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), s3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Bn), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: j((c) => [
        U(u.$slots, "default", ze(Ee(c))),
        e.viewport ? (t(), T(af, { key: 0 })) : w("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), r3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(_n), re({ "data-slot": "navigation-menu-content" }, b(i), {
      class: b(Q)(
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
}), i3 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(b(Pn), re({ "data-slot": "navigation-menu-indicator" }, b(r), {
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
}), u3 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(zn), re({ "data-slot": "navigation-menu-item" }, b(a), {
      class: b(Q)("relative", l.class)
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(An), re({ "data-slot": "navigation-menu-link" }, b(i), {
      class: b(Q)(
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
}), c3 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(b(On), re({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(Q)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f3 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(b(jn), re({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(Q)(b(nf)(), "group", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default"),
        D(b(Rn), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nf = Rt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), m3 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(pa), re({ "data-slot": "dialog" }, b(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(Ee(d)))
      ]),
      _: 3
    }, 16));
  }
}), p3 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Qe), re({ "data-slot": "dialog-close" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lf = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Et), re({ "data-slot": "dialog-overlay" }, b(a), {
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
}), v3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(It), null, {
      default: j(() => [
        D(lf),
        D(b(Ft), re({ "data-slot": "dialog-content" }, { ...u.$attrs, ...b(i) }, {
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: j(() => [
            U(u.$slots, "default"),
            e.showCloseButton ? (t(), T(b(Qe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                D(b(Nt)),
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
}), g3 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(b(va), re({ "data-slot": "dialog-description" }, b(r), {
      class: b(Q)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h3 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: z(b(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      U(a.$slots, "default"),
      e.showCloseButton ? (t(), T(b(Qe), {
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
}), b3 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: z(b(Q)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), x3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(It), null, {
      default: j(() => [
        D(b(Et), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            D(b(Ft), re({
              class: b(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...u.$attrs, ...b(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (c) => {
                const v = c.detail.originalEvent, p = v.target;
                (v.offsetX > p.clientWidth || v.offsetY > p.clientHeight) && c.preventDefault();
              })
            }), {
              default: j(() => [
                U(u.$slots, "default"),
                D(b(Qe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    D(b(Nt), { class: "w-4 h-4" }),
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
}), y3 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(b(ga), re({ "data-slot": "dialog-title" }, b(r), {
      class: b(Q)("text-lg leading-none font-semibold", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k3 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(ha), re({ "data-slot": "dialog-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $3 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Vn), re({ "data-slot": "label" }, b(a), {
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
}), w3 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Un), {
      role: "status",
      "aria-label": "Loading",
      class: z(b(Q)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), C3 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: z(
        b(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), S3 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: z(b(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), M3 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: z(b(Q)("px-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), B3 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: z(b(Q)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), _3 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: z(b(Q)("flex items-center px-6 [.border-t]:pt-6", l.class))
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
      class: z(
        b(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), z3 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: z(b(Q)("leading-none font-semibold", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), of = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, sf = { class: "flex items-start gap-3" }, rf = { class: "min-w-0 flex-1" }, uf = { class: "text-foreground text-sm font-medium" }, df = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, A3 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(!1), u = R(null), d = R(0);
    Ga((v) => (console.error(`[PkBoundary] ${r.label} failed to render`, v), i.value = !0, u.value = v instanceof Error ? v.message : null, s("error", v), !1));
    function c() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: c }), (v, p) => (t(), n("div", {
      class: z(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", of, [
        o("div", sf, [
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
          o("div", rf, [
            o("p", uf, f(e.label) + " could not be displayed ", 1),
            u.value ? (t(), n("p", df, f(u.value), 1)) : w("", !0),
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
      ])) : i.value ? w("", !0) : U(v.$slots, "default", { key: d.value })
    ], 2));
  }
}), cf = { class: "bg-card rounded-lg border" }, ff = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, mf = { class: "min-w-0" }, pf = {
  key: 0,
  class: "truncate text-sm font-medium"
}, vf = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, gf = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, hf = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, O3 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", cf, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", ff, [
        o("div", mf, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", pf, f(e.title), 1)) : w("", !0),
            e.description ? (t(), n("p", vf, f(e.description), 1)) : w("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", gf, [
          U(l.$slots, "actions")
        ])) : w("", !0)
      ])) : w("", !0),
      o("div", {
        class: z(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", hf, [
        U(l.$slots, "footer")
      ])) : w("", !0)
    ]));
  }
}), Oa = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function j3() {
  const e = wa(), l = x(() => e.props.panel?.pageFooter === !0);
  return _t(Oa, l), l;
}
const bf = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, xf = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, yf = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, V3 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = wa(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = x(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = x(() => {
      const c = a.props.panel;
      return Array.isArray(c?.footerLinks) ? c.footerLinks : [];
    }), u = mt(Oa, x(() => !1)), d = x(() => !l.host && b(u) === !0);
    return (c, v) => d.value ? w("", !0) : (t(), n("footer", bf, [
      o("div", xf, [
        o("p", null, "© " + f(b(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), n("nav", yf, [
          (t(!0), n(A, null, L(i.value, (p) => (t(), T(b(Zn), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              N(f(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : w("", !0)
      ])
    ]));
  }
}), kf = { class: "flex shrink-0 flex-col items-center" }, $f = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, L3 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), n("div", kf, [
      o("div", {
        class: z(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", $f)) : w("", !0),
        o("div", {
          class: z(["size-full overflow-hidden bg-white", s.value])
        }, [
          U(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(A, { key: 0 }, [
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
}), wf = { class: "flex flex-col gap-2" }, Cf = { class: "min-w-0 flex-1" }, Sf = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Mf = ["disabled", "aria-label", "onClick"], Bf = ["disabled", "aria-label", "onClick"], _f = ["disabled", "title", "aria-label", "onClick"], Pf = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, zf = ["disabled"], T3 = /* @__PURE__ */ O({
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
    function u(B) {
      return Array.isArray(B) ? B.map((m) => ({ uid: s++, data: { ...m } })) : [];
    }
    me(
      () => a.modelValue,
      (B) => {
        JSON.stringify(B ?? null) !== JSON.stringify(d()) && (i.value = u(B));
      }
    );
    function d() {
      const B = [];
      for (const m of i.value) {
        const h = {};
        let $ = !1;
        for (const P of a.children) {
          const I = m.data[P.key] ?? null;
          h[P.key] = I, I !== null && I !== "" && !(Array.isArray(I) && I.length === 0) && ($ = !0);
        }
        $ && B.push(h);
      }
      return B.length ? B : null;
    }
    function c() {
      r("update:modelValue", d());
    }
    const v = x(() => a.maxItems !== null && i.value.length >= a.maxItems), p = x(() => a.minItems !== null && i.value.length <= a.minItems), g = x(() => a.children.length === 1);
    function C() {
      if (v.value || a.disabled)
        return;
      const B = {};
      for (const m of a.children)
        B[m.key] = null;
      i.value.push({ uid: s++, data: B });
    }
    function y(B) {
      i.value = i.value.filter((m) => m.uid !== B), c();
    }
    function k(B, m) {
      const h = B + m;
      if (h < 0 || h >= i.value.length)
        return;
      const $ = [...i.value], [P] = $.splice(B, 1);
      $.splice(h, 0, P), i.value = $, c();
    }
    function M(B, m, h) {
      const $ = i.value.find((P) => P.uid === B);
      $ && ($.data[m] = h, c());
    }
    function S(B, m) {
      return a.errors[`${a.fieldKey}.${B}.${m}`];
    }
    return (B, m) => (t(), n("div", wf, [
      (t(!0), n(A, null, L(i.value, (h, $) => (t(), n("div", {
        key: h.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: z(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", g.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f($ + 1), 3),
        o("div", Cf, [
          g.value ? (t(), T(Ye, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: h.data[e.children[0].key],
            error: S($, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (P) => M(h.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", Sf, [
            (t(!0), n(A, null, L(e.children, (P) => (t(), T(Ye, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: h.data[P.key],
              error: S($, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (I) => M(h.uid, P.key, I)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: z(["flex shrink-0 items-center gap-0.5", g.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || $ === 0,
            "aria-label": `Move ${e.itemLabel} ${$ + 1} up`,
            onClick: (P) => k($, -1)
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
          ])], 8, Mf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || $ === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${$ + 1} down`,
            onClick: (P) => k($, 1)
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
          ])], 8, Bf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${$ + 1}`,
            onClick: (P) => y(h.uid)
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
          ])], 8, _f)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", Pf, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : w("", !0),
      v.value ? w("", !0) : (t(), n("button", {
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
      ], 8, zf))
    ]));
  }
}), Af = { class: "space-y-1" }, Of = { class: "flex items-center gap-1" }, jf = ["disabled", "title", "aria-label", "onClick"], Vf = ["aria-pressed"], Lf = ["id", "value", "rows", "disabled"], Tf = ["innerHTML"], Df = /* @__PURE__ */ O({
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
    function u(g) {
      return g.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = x(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function c(g, C = g) {
      const y = document.getElementById(a.id ?? "");
      if (y === null)
        return;
      const k = y.selectionStart, M = y.selectionEnd, S = i.value.slice(k, M);
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
    }, p = x(
      () => (a.toolbar ?? Object.keys(v)).filter((g) => g in v)
    );
    return (g, C) => (t(), n("div", Af, [
      o("div", Of, [
        (t(!0), n(A, null, L(p.value, (y) => (t(), n("button", {
          key: y,
          type: "button",
          disabled: e.disabled,
          title: y,
          "aria-label": y,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (k) => v[y].run()
        }, f(v[y].label), 9, jf))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (y) => s.value = !s.value)
        }, " Preview ", 8, Vf)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, Tf)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = (y) => r("update:modelValue", y.target.value))
      }, null, 40, Lf))
    ]));
  }
}), Ef = { class: "space-y-1" }, If = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Ff = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Nf = ["id", "value", "rows", "disabled"], Rf = { class: "text-muted-foreground text-xs font-normal" }, Uf = {
  key: 0,
  class: "text-destructive text-xs"
}, Hf = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!0), u = x(() => a.modelValue ?? ""), d = x(() => Math.max(u.value.split(`
`).length, 1)), c = x(() => {
      if (a.language !== "json" || u.value.trim() === "")
        return null;
      try {
        return JSON.parse(u.value), null;
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
      const C = g.target, y = C.selectionStart, k = C.selectionEnd, M = `${u.value.slice(0, y)}    ${u.value.slice(k)}`;
      r("update:modelValue", M), requestAnimationFrame(() => {
        C.selectionStart = C.selectionEnd = y + 4;
      });
    }
    return (g, C) => (t(), n("div", Ef, [
      o("div", If, [
        o("div", Ff, [
          (t(!0), n(A, null, L(d.value, (y) => (t(), n("div", { key: y }, f(y), 1))), 128))
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
          onInput: v,
          onKeydown: p
        }, null, 40, Nf)
      ]),
      o("p", Rf, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      c.value ? (t(), n("p", Uf, f(c.value), 1)) : w("", !0)
    ]));
  }
}), Kf = { class: "space-y-3" }, qf = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Gf = { class: "text-sm font-medium" }, Wf = { class: "flex items-center gap-1" }, Zf = ["disabled", "onClick"], Jf = ["disabled", "onClick"], Yf = ["disabled", "onClick"], Xf = { class: "space-y-3 p-3" }, Qf = { class: "flex flex-wrap items-center gap-2" }, em = ["disabled", "onClick"], tm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, D3 = /* @__PURE__ */ O({
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
    ), u = x(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function d(C) {
      r("update:modelValue", C);
    }
    function c(C) {
      u.value || d([...s.value, { type: C, data: {} }]);
    }
    function v(C) {
      d(s.value.filter((y, k) => k !== C));
    }
    function p(C, y) {
      const k = C + y;
      if (k < 0 || k >= s.value.length)
        return;
      const M = [...s.value], [S] = M.splice(C, 1);
      M.splice(k, 0, S), d(M);
    }
    function g(C, y, k) {
      d(
        s.value.map(
          (M, S) => S === C ? { ...M, data: { ...M.data, [y]: k } } : M
        )
      );
    }
    return (C, y) => (t(), n("div", Kf, [
      (t(!0), n(A, null, L(s.value, (k, M) => (t(), n("div", {
        key: `${k.type}-${M}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", qf, [
          o("span", Gf, f(i.value[k.type]?.label ?? k.type), 1),
          o("div", Wf, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === 0,
              "aria-label": "Move up",
              onClick: (S) => p(M, -1)
            }, " ↑ ", 8, Zf),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (S) => p(M, 1)
            }, " ↓ ", 8, Jf),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (S) => v(M)
            }, " Remove ", 8, Yf)
          ])
        ]),
        o("div", Xf, [
          (t(!0), n(A, null, L(i.value[k.type]?.fields ?? [], (S) => (t(), T(Ye, {
            key: S.key,
            field: S,
            value: k.data[S.key] ?? null,
            error: e.errors?.[S.key],
            processing: e.disabled,
            onChange: (B) => g(M, S.key, B)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Qf, [
        (t(!0), n(A, null, L(e.blocks, (k) => (t(), n("button", {
          key: k.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (M) => c(k.type)
        }, " + " + f(k.label), 9, em))), 128)),
        u.value ? (t(), n("span", tm, f(e.maxBlocks) + " is the maximum here. ", 1)) : w("", !0)
      ])
    ]));
  }
}), am = ["name", "value", "checked", "disabled", "onChange"], nm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, lm = /* @__PURE__ */ O({
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
      class: z(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(A, null, L(e.options, (d) => (t(), n("label", {
        key: String(d.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: d.value,
          checked: s(d),
          disabled: e.disabled,
          onChange: (c) => r("update:modelValue", d.value)
        }, null, 40, am),
        N(" " + f(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", nm, " Nothing to choose from yet. ")) : w("", !0)
    ], 2));
  }
}), om = ["value", "checked", "disabled", "onChange"], sm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, rm = /* @__PURE__ */ O({
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
    function i(c) {
      return s.value.some((v) => v == c.value);
    }
    function u(c) {
      r(
        "update:modelValue",
        i(c) ? s.value.filter((v) => v != c.value) : [...s.value, c.value]
      );
    }
    const d = x(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (c, v) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: se(d.value)
    }, [
      (t(!0), n(A, null, L(e.options, (p) => (t(), n("label", {
        key: String(p.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (g) => u(p)
        }, null, 40, om),
        N(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", sm, " Nothing to choose from yet. ")) : w("", !0)
    ], 4));
  }
}), im = { class: "flex flex-col gap-1.5" }, um = ["aria-label", "onClick"], dm = ["placeholder", "disabled", "maxlength"], cm = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, fm = ["onClick"], mm = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, pm = /* @__PURE__ */ O({
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
    ), u = x(() => i.value.length >= (a.field.max ?? 25)), d = x(
      () => (a.field.suggestions ?? []).filter(
        (g) => !i.value.some((C) => C.toLowerCase() === g.toLowerCase())
      )
    );
    function c(g) {
      const C = g.trim().slice(0, a.field.maxLength ?? 40);
      if (C === "" || u.value) {
        s.value = "";
        return;
      }
      if (i.value.some((y) => y.toLowerCase() === C.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, C]), s.value = "";
    }
    function v(g) {
      r(
        "update:modelValue",
        i.value.filter((C, y) => y !== g)
      );
    }
    function p(g) {
      if (g.key === "Enter" || g.key === ",") {
        g.preventDefault(), c(s.value);
        return;
      }
      g.key === "Backspace" && s.value === "" && i.value.length > 0 && v(i.value.length - 1);
    }
    return (g, C) => (t(), n("div", im, [
      o("div", {
        class: z(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(A, null, L(i.value, (y, k) => (t(), n("span", {
          key: `${y}-${k}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(f(y) + " ", 1),
          e.disabled ? w("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${y}`,
            onClick: (M) => v(k)
          }, " × ", 8, um))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (y) => s.value = y),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: C[1] || (C[1] = (y) => c(s.value))
        }, null, 40, dm), [
          [Me, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), n("div", cm, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(A, null, L(d.value, (y) => (t(), n("button", {
          key: y,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (k) => c(y)
        }, f(y), 9, fm))), 128))
      ])) : w("", !0),
      u.value ? (t(), n("p", mm, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : w("", !0)
    ]));
  }
}), vm = 4.5, ia = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ja(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function St(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Vt(e) {
  const [l, a, r] = ja(e);
  return 0.2126 * St(l) + 0.7152 * St(a) + 0.0722 * St(r);
}
function Va(e, l) {
  const a = Vt(e), r = Vt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function gm(e, l, a) {
  if (!ia.test(e) || !ia.test(l))
    return e;
  const r = Vt(l) > 0.5, s = r ? 0 : 255;
  let i = ja(e);
  for (let u = 0; u <= 20; u++) {
    const d = hm(i);
    if (Va(d, l) >= a)
      return d;
    i = i.map((c) => c + (s - c) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function hm(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const bm = { class: "flex flex-col gap-2" }, xm = { class: "flex items-center gap-2" }, ym = {
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
}, km = ["value", "disabled", "aria-label"], $m = ["value", "disabled", "placeholder"], wm = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Cm = ["aria-label", "title", "onClick"], Sm = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Mm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = x(() => typeof a.modelValue == "string" ? a.modelValue : ""), u = x(() => s.test(i.value));
    function d(y) {
      const k = y.trim();
      if (k === "")
        return "";
      const M = k.startsWith("#") ? k : `#${k}`;
      return s.test(M) ? M.toLowerCase() : k;
    }
    function c(y) {
      r("update:modelValue", d(y.target.value));
    }
    const v = x(() => !u.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Va(i.value, a.field.contrastBackground)), p = x(() => a.field.contrastMinRatio ?? vm), g = x(() => v.value !== null && v.value < p.value);
    function C() {
      a.field.contrastBackground && r(
        "update:modelValue",
        gm(i.value, a.field.contrastBackground, p.value)
      );
    }
    return (y, k) => (t(), n("div", bm, [
      o("div", xm, [
        u.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: k[0] || (k[0] = (M) => r("update:modelValue", M.target.value))
        }, null, 40, km)) : (t(), n("span", ym)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: c
        }, null, 40, $m)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", wm, [
        (t(!0), n(A, null, L(e.field.presets, (M) => (t(), n("button", {
          key: M,
          type: "button",
          class: z(["size-6 rounded border", i.value.toLowerCase() === M.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: M }),
          "aria-label": M,
          title: M,
          onClick: (S) => r("update:modelValue", M.toLowerCase())
        }, null, 14, Cm))), 128))
      ])) : w("", !0),
      g.value ? (t(), n("p", Sm, [
        o("span", null, " This fails contrast at " + f(v.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : w("", !0)
    ]));
  }
}), Bm = ["aria-disabled"], _m = /* @__PURE__ */ O({
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
    const c = x(() => {
      const C = a.modelValue?.[a.latKey], y = a.modelValue?.[a.lngKey];
      return typeof C == "number" && typeof y == "number" ? { lat: C, lng: y } : a.center ? a.center : a.markers.length > 0 ? { lat: a.markers[0].lat, lng: a.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function v() {
      if (!s.value || i)
        return;
      const C = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), d = C, i = C.map(s.value).setView([c.value.lat, c.value.lng], a.zoom), C.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), p(), g(), a.pickable && !a.disabled && i.on("click", (y) => {
        r("update:modelValue", {
          [a.latKey]: Number(y.latlng.lat.toFixed(6)),
          [a.lngKey]: Number(y.latlng.lng.toFixed(6))
        });
      });
    }
    function p() {
      if (!(!i || !d))
        for (const C of a.markers) {
          const y = d.circleMarker([C.lat, C.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (C.label || C.popup) && y.bindPopup(`<strong>${C.label ?? ""}</strong>${C.popup ? `<br>${C.popup}` : ""}`);
        }
    }
    function g() {
      if (!i || !d)
        return;
      const C = a.modelValue?.[a.latKey], y = a.modelValue?.[a.lngKey];
      if (typeof C != "number" || typeof y != "number") {
        u && (i.removeLayer(u), u = null);
        return;
      }
      u ? u.setLatLng([C, y]) : u = d.circleMarker([C, y], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([C, y], i.getZoom());
    }
    return ge(() => {
      v();
    }), ke(() => {
      i?.remove(), i = null, u = null;
    }), me(
      () => a.modelValue,
      () => g(),
      { deep: !0 }
    ), (C, y) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: se({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, Bm));
  }
}), Pm = { class: "flex flex-col gap-2" }, zm = { class: "text-muted-foreground text-xs font-normal" }, Am = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkMapField",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(() => a.modelValue && typeof a.modelValue == "object" ? a.modelValue : null), i = x(() => a.field.latKey ?? "lat"), u = x(() => a.field.lngKey ?? "lng");
    return (d, c) => (t(), n("div", Pm, [
      D(_m, {
        "model-value": s.value,
        center: e.field.defaultCenter ?? null,
        zoom: e.field.zoom ?? 12,
        height: e.field.height ?? 280,
        "lat-key": i.value,
        "lng-key": u.value,
        disabled: e.disabled,
        pickable: "",
        "onUpdate:modelValue": c[0] || (c[0] = (v) => r("update:modelValue", v))
      }, null, 8, ["model-value", "center", "zoom", "height", "lat-key", "lng-key", "disabled"]),
      o("p", zm, [
        N(" Click the map to set " + f(i.value) + " / " + f(u.value) + " ", 1),
        s.value ? (t(), n(A, { key: 0 }, [
          N(" (" + f(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + f(s.value[u.value]?.toFixed?.(5) ?? s.value[u.value]) + ") ", 1)
        ], 64)) : w("", !0)
      ])
    ]));
  }
}), Om = { class: "flex flex-col gap-2" }, jm = ["width", "height"], Vm = ["value", "disabled"], Lm = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Tm = /* @__PURE__ */ O({
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
        const c = a.values?.[a.field.from];
        return c == null ? "" : String(c);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), u = x(() => a.field.size ?? 160);
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
    }), (c, v) => (t(), n("div", Om, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: u.value,
        height: u.value
      }, null, 8, jm),
      e.field.from ? (t(), n("p", Lm, "From " + f(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: v[0] || (v[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, Vm))
    ]));
  }
}), Dm = { class: "flex flex-col gap-2" }, Em = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, Im = ["aria-label"], Fm = {
  key: 0,
  class: "text-destructive text-xs"
}, Nm = ["value", "disabled"], Rm = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, Um = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), u = x(() => {
      if (a.field.from) {
        const v = a.values?.[a.field.from];
        return v == null ? "" : String(v);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), d = x(() => (a.field.format ?? "CODE128").toUpperCase());
    async function c() {
      if (!s.value)
        return;
      const v = u.value.trim();
      for (i.value = null; s.value.firstChild; )
        s.value.removeChild(s.value.firstChild);
      if (v !== "")
        try {
          const g = (await import("jsbarcode")).default;
          g(s.value, v, {
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
    }), (v, p) => (t(), n("div", Dm, [
      o("div", Em, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${d.value}`
        }, null, 8, Im))
      ]),
      i.value ? (t(), n("p", Fm, f(i.value), 1)) : w("", !0),
      e.field.from ? (t(), n("p", Rm, "From " + f(e.field.from) + " (" + f(d.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (g) => r("update:modelValue", g.target.value))
      }, null, 40, Nm))
    ]));
  }
}), Hm = { class: "mr-2 inline-block w-3 opacity-60" }, Km = {
  key: 0,
  class: "text-muted-foreground p-3"
}, qm = /* @__PURE__ */ O({
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
    const r = x(() => {
      if (l.field.originalKey)
        return a(l.values?.[l.field.originalKey]);
      const u = l.modelValue;
      return a(u?.original);
    }), s = x(() => {
      if (l.field.modifiedKey)
        return a(l.values?.[l.field.modifiedKey]);
      const u = l.modelValue;
      return a(u?.modified);
    }), i = x(() => {
      const u = r.value.split(`
`), d = s.value.split(`
`), c = Math.max(u.length, d.length), v = [];
      for (let p = 0; p < c; p++) {
        const g = u[p], C = d[p];
        if (g === C) {
          g !== void 0 && v.push({ kind: "same", text: g });
          continue;
        }
        g !== void 0 && v.push({ kind: "del", text: g }), C !== void 0 && v.push({ kind: "add", text: C });
      }
      return v;
    });
    return (u, d) => (t(), n("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: se({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), n(A, null, L(i.value, (c, v) => (t(), n("div", {
        key: v,
        class: z(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": c.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": c.kind === "add",
          "text-muted-foreground": c.kind === "same"
        }])
      }, [
        o("span", Hm, f(c.kind === "add" ? "+" : c.kind === "del" ? "-" : " "), 1),
        N(" " + f(c.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", Km, "No differences.")) : w("", !0)
    ], 4));
  }
}), Gm = { class: "flex flex-col gap-3" }, Wm = { class: "flex items-center justify-between gap-2" }, Zm = { class: "text-sm font-medium" }, Jm = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, Ym = { class: "grid grid-cols-7 gap-1" }, Xm = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, Qm = ["title"], E3 = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = R(/* @__PURE__ */ new Date()), r = x(() => a.value.getFullYear()), s = x(() => a.value.getMonth()), i = x(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), u = x(() => {
      const p = /* @__PURE__ */ new Map();
      for (const g of l.events ?? []) {
        const C = p.get(g.date) ?? [];
        C.push(g), p.set(g.date, C);
      }
      return p;
    }), d = x(() => {
      const g = new Date(r.value, s.value, 1).getDay(), C = new Date(r.value, s.value + 1, 0).getDate(), y = [];
      for (let k = 0; k < g; k++)
        y.push({ day: null, key: `pad-${k}`, events: [] });
      for (let k = 1; k <= C; k++) {
        const M = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(k).padStart(2, "0")}`;
        y.push({ day: k, key: M, events: u.value.get(M) ?? [] });
      }
      return y;
    });
    function c() {
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function v() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, g) => (t(), n("div", Gm, [
      o("div", Wm, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: c
        }, " Prev "),
        o("p", Zm, f(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: v
        }, " Next ")
      ]),
      o("div", Jm, [
        (t(), n(A, null, L(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, f(C), 1)), 64))
      ]),
      o("div", Ym, [
        (t(!0), n(A, null, L(d.value, (C) => (t(), n("div", {
          key: C.key,
          class: z(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), n("p", Xm, f(C.day), 1)) : w("", !0),
          (t(!0), n(A, null, L(C.events.slice(0, 3), (y, k) => (t(), n("p", {
            key: `${C.key}-${k}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: y.label
          }, f(y.label), 9, Qm))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), ep = { class: "flex items-center gap-3" }, tp = ["min", "max", "step", "value", "disabled", "aria-label"], ap = { class: "flex shrink-0 items-center gap-1" }, np = ["min", "max", "step", "value", "disabled"], lp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, op = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(() => a.field.min ?? 0), i = x(() => a.field.max ?? 100), u = x(() => a.field.step ?? 1), d = x(() => {
      const p = Number(a.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), c = x(
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
    return (p, g) => (t(), n("div", ep, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: g[0] || (g[0] = (C) => v(C.target.value))
      }, null, 40, tp),
      o("div", ap, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: c.value ? "" : d.value,
          disabled: e.disabled,
          onInput: g[1] || (g[1] = (C) => v(C.target.value))
        }, null, 40, np),
        e.field.unit ? (t(), n("span", lp, f(e.field.unit), 1)) : w("", !0)
      ])
    ]));
  }
}), ut = /* @__PURE__ */ new Map();
function Mt(e, l) {
  ut.set(e, l);
}
function sp(e) {
  return ut.get(e);
}
function I3(e) {
  return ut.has(e);
}
function rp() {
  return [...ut.keys()].sort();
}
function F3() {
  ut.clear();
}
const ip = ["name", "value", "checked", "disabled", "onChange"], up = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, dp = { class: "whitespace-nowrap" }, cp = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, fp = ["name", "value", "checked", "disabled", "onChange"], mp = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, pp = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, vp = { class: "text-center text-xs font-medium" }, gp = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, hp = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, bp = /* @__PURE__ */ O({
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
      () => a.field.preview ? sp(a.field.preview) : void 0
    ), i = x(() => !!a.field.preview && !s.value), u = x(() => a.field.layout === "segmented"), d = x(() => {
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
    return (v, p) => u.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: z(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(A, null, L(e.options, (g) => (t(), n("label", {
        key: String(g.value),
        class: z(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
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
        }, null, 40, ip),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", up, [
          (t(), T(Be(s.value), {
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"]))
        ])) : w("", !0),
        o("span", dp, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", cp, " Nothing to choose from yet. ")) : w("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: z(["grid gap-3", d.value])
    }, [
      (t(!0), n(A, null, L(e.options, (g) => (t(), n("label", {
        key: String(g.value),
        class: z(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
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
        }, null, 40, fp),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", mp, [
          s.value ? (t(), T(Be(s.value), {
            key: 0,
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", pp, " no preview ")) : w("", !0)
        ]),
        o("span", vp, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", gp, " Nothing to choose from yet. ")) : w("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", hp, [
        p[2] || (p[2] = N(" No preview registered for ", -1)),
        o("code", null, f(e.field.preview), 1),
        N(". Registered: " + f(b(rp)().join(", ") || "none") + ". ", 1)
      ])) : w("", !0)
    ], 2));
  }
}), xp = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, yp = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", xp, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), kp = { class: "flex flex-col items-center gap-1 text-center" }, $p = {
  key: 0,
  class: "text-xs text-neutral-500"
}, La = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", kp, [
      o("div", {
        class: z(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: a.value, color: a.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", $p, f(e.caption), 1)) : w("", !0)
    ]));
  }
}), wp = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Cp = { class: "flex items-center gap-3" }, Sp = ["src"], Mp = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Bp = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, _p = {
  key: 0,
  class: "text-right text-sm"
}, Pp = { class: "text-neutral-500" }, zp = { class: "tabular-nums" }, Ap = { key: 1 }, Op = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, jp = { class: "mt-2 font-medium" }, Vp = { key: 2 }, Lp = { class: "w-full text-sm" }, Tp = { class: "w-full py-3 pr-2" }, Dp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Ep = { key: 0 }, Ip = ["colspan"], Fp = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Np = { class: "w-64 text-sm" }, Rp = { class: "tabular-nums" }, Up = {
  key: 3,
  class: "py-2"
}, Hp = { key: 4 }, Kp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, qp = { class: "mt-2 flex flex-col gap-1 text-sm" }, Gp = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Wp = { key: 0 }, Zp = {
  key: 1,
  class: "mt-1"
}, Jp = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Yp = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("article", wp, [
      o("div", Cp, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Sp)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: a() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), n(A, null, L(e.document.blocks, (p, g) => (t(), n(A, { key: g }, [
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
            p.subtitle ? (t(), n("p", Mp, f(p.subtitle), 1)) : w("", !0),
            p.reference ? (t(), n("p", Bp, f(p.reference), 1)) : w("", !0)
          ]),
          r(p).length ? (t(), n("dl", _p, [
            (t(!0), n(A, null, L(r(p), (C, y) => (t(), n("div", {
              key: y,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Pp, f(C.label), 1),
              o("dd", zp, f(C.value), 1)
            ]))), 128))
          ])) : w("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", Ap, [
          o("h2", Op, f(p.heading), 1),
          o("p", jp, f(p.name), 1),
          (t(!0), n(A, null, L(u(p.lines), (C, y) => (t(), n("p", {
            key: y,
            class: "text-sm text-neutral-600"
          }, f(C), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", Vp, [
          o("table", Lp, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: a() })
              }, [
                (t(!0), n(A, null, L(u(p.columns), (C, y) => (t(), n("th", {
                  key: y,
                  class: z(["pb-2 font-medium", y > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(A, null, L(s(p), (C, y) => (t(), n("tr", {
                key: y,
                class: "border-b border-neutral-200"
              }, [
                o("td", Tp, [
                  o("p", null, f(C.description), 1),
                  C.detail ? (t(), n("p", Dp, f(C.detail), 1)) : w("", !0)
                ]),
                (t(!0), n(A, null, L(C.cells, (k, M) => (t(), n("td", {
                  key: M,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(k), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", Ep, [
                o("td", {
                  colspan: u(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, Ip)
              ])) : w("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", Fp, [
            o("dl", Np, [
              (t(!0), n(A, null, L(i(p), (C, y) => (t(), n("div", {
                key: y,
                class: z([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(C.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: z(C.strong ? "" : "text-neutral-600")
                }, f(C.label), 3),
                o("dd", Rp, f(C.value), 1)
              ], 6))), 128))
            ])
          ])) : w("", !0)
        ])) : p.type === "code" ? (t(), n("section", Up, [
          D(La, {
            code: d(p.code),
            caption: d(p.caption),
            style: se(d(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", Hp, [
          o("h2", Kp, f(p.heading), 1),
          o("ol", qp, [
            (t(!0), n(A, null, L(u(p.items), (C, y) => (t(), n("li", {
              key: y,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: se({ color: a() })
              }, f(y + 1) + ".", 5),
              o("span", null, f(C), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: z(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(p.emphasis ? { color: a() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), n("footer", Gp, [
          p.text ? (t(), n("p", Wp, f(p.text), 1)) : w("", !0),
          u(p.contacts).length ? (t(), n("p", Zp, f(u(p.contacts).join(" · ")), 1)) : w("", !0)
        ])) : (t(), n("p", Jp, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Xp = ["aria-label", "title"], Qp = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ev = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, N3 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = _a(), r = x(() => l.value.theme === "dark");
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
      (t(), n("svg", Qp, [
        r.value ? (t(), n(A, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", ev))
      ]))
    ], 8, Xp));
  }
}), tv = ["width", "height"], av = { key: 0 }, nv = ["x1", "x2", "y1", "y2"], lv = ["x", "y"], ov = ["x1", "x2", "y1", "y2"], sv = ["x", "y"], rv = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], iv = ["x", "y", "width", "height", "fill", "fill-opacity"], uv = ["x", "y"], dv = ["x", "y"], cv = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, fv = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, mv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, pv = { class: "text-xs font-semibold tabular-nums" }, vv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, gv = { class: "text-muted-foreground" }, ua = 5.6, R3 = /* @__PURE__ */ O({
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
    const i = R(null), u = R(560), d = R(null);
    let c = null;
    ge(() => {
      c = new ResizeObserver((_) => {
        u.value = Math.max(160, _[0].contentRect.width);
      }), i.value && c.observe(i.value);
    }), ke(() => c?.disconnect());
    const v = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, V) => ({
      ...F,
      color: F.color ?? v[V % v.length]
    }))), g = x(() => p.value[0]?.points.map((_) => _.label) ?? []), C = x(() => g.value.length), y = x(() => l.orientation === "horizontal"), k = x(() => Math.max(0, ...g.value.map((_) => _.length))), M = x(() => {
      if (!y.value)
        return l.showAxis ? 44 : 8;
      const _ = k.value * ua + 16;
      return Math.round(Math.min(Math.max(60, _), u.value * 0.4));
    }), S = x(() => Math.max(4, Math.floor((M.value - 16) / ua)));
    function B(_) {
      return _.length <= S.value ? _ : `${_.slice(0, S.value - 1)}…`;
    }
    const m = x(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: M.value
    })), h = x(() => ({
      w: Math.max(1, u.value - m.value.left - m.value.right),
      h: Math.max(1, l.height - m.value.top - m.value.bottom)
    })), $ = (_) => l.format ? l.format(_) : P(_);
    function P(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    const I = x(() => {
      const _ = g.value.map(
        (ve, xe) => l.stacked ? p.value.reduce((le, X) => le + Math.max(0, X.points[xe]?.value ?? 0), 0) : Math.max(...p.value.map((le) => le.points[xe]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ve) => F <= ve * V) ?? 10) * V;
    }), E = x(
      () => (y.value ? h.value.h : h.value.w) / Math.max(1, C.value)
    ), te = x(() => E.value * 0.68), H = x(
      () => l.stacked || p.value.length <= 1 ? te.value : te.value / p.value.length
    ), K = x(() => {
      const _ = [], F = new Array(C.value).fill(0);
      return p.value.forEach((V, J) => {
        V.points.forEach((ve, xe) => {
          const X = Math.max(0, ve.value) / I.value * (y.value ? h.value.w : h.value.h), ne = (y.value ? m.value.top : m.value.left) + xe * E.value + (E.value - te.value) / 2, Ce = l.stacked ? 0 : J * H.value;
          _.push(
            y.value ? {
              x: m.value.left + F[xe],
              y: ne + Ce,
              w: X,
              h: Math.max(0, H.value - 2),
              color: s(ve.value, V.color),
              label: ve.label,
              name: V.name,
              value: ve.value,
              index: xe
            } : {
              x: ne + Ce,
              y: m.value.top + h.value.h - X - F[xe],
              w: Math.max(0, H.value - 2),
              h: X,
              color: s(ve.value, V.color),
              label: ve.label,
              name: V.name,
              value: ve.value,
              index: xe
            }
          ), l.stacked && (F[xe] += X);
        });
      }), _;
    }), G = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        value: I.value * (y.value ? _ : 1 - _),
        x: m.value.left + h.value.w * _,
        y: m.value.top + h.value.h * _
      }))
    ), oe = x(() => Math.max(1, Math.ceil(C.value / (y.value ? 14 : 10))));
    function ae(_) {
      return _ === C.value - 1 || _ % oe.value === 0;
    }
    function Z(_) {
      return (y.value ? m.value.top : m.value.left) + _ * E.value + E.value / 2;
    }
    const q = x(() => d.value === null ? null : {
      label: g.value[d.value],
      rows: p.value.map((_) => ({
        name: _.name,
        color: _.color,
        value: _.points[d.value]?.value ?? 0
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
      }, " No data ", 4)) : (t(), n(A, { key: 1 }, [
        (t(), n("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: F[0] || (F[0] = (V) => d.value = null)
        }, [
          e.showAxis ? (t(), n("g", av, [
            y.value ? (t(), n(A, { key: 0 }, [
              (t(!0), n(A, null, L(G.value, (V) => (t(), n("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: m.value.top,
                y2: m.value.top + h.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, nv))), 128)),
              (t(!0), n(A, null, L(G.value, (V) => (t(), n("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(V.value)), 9, lv))), 128))
            ], 64)) : (t(), n(A, { key: 1 }, [
              (t(!0), n(A, null, L(G.value, (V) => (t(), n("line", {
                key: `g-${V.y}`,
                x1: m.value.left,
                x2: u.value - m.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, ov))), 128)),
              (t(!0), n(A, null, L(G.value, (V) => (t(), n("text", {
                key: `gt-${V.y}`,
                x: m.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(V.value)), 9, sv))), 128))
            ], 64))
          ])) : w("", !0),
          (t(!0), n(A, null, L(g.value, (V, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: y.value ? m.value.left : m.value.left + J * E.value,
            y: y.value ? m.value.top + J * E.value : m.value.top,
            width: y.value ? h.value.w : E.value,
            height: y.value ? E.value : h.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === J ? 0.4 : 0,
            onMouseenter: (ve) => d.value = J
          }, null, 40, rv))), 128)),
          (t(!0), n(A, null, L(K.value, (V, J) => (t(), n("rect", {
            key: `b-${J}`,
            x: V.x,
            y: V.y,
            width: V.w,
            height: V.h,
            fill: V.color,
            "fill-opacity": d.value === null || d.value === V.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, iv))), 128)),
          y.value ? (t(!0), n(A, { key: 1 }, L(g.value, (V, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: m.value.left - 8,
            y: Z(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(f(B(V)) + " ", 1),
            o("title", null, f(V), 1)
          ], 8, uv)), [
            [Ue, ae(J)]
          ])), 128)) : (t(!0), n(A, { key: 2 }, L(g.value, (V, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: Z(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(V), 9, dv)), [
            [Ue, ae(J)]
          ])), 128))
        ], 40, tv)),
        q.value ? (t(), n("div", cv, [
          o("p", fv, f(q.value.label), 1),
          (t(!0), n(A, null, L(q.value.rows, (V, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", mv, f(V.name || "Value"), 1),
            o("span", pv, f($(V.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", vv, [
          (t(!0), n(A, null, L(p.value, (V, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", gv, f(V.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), hv = ["width", "height"], bv = ["id"], xv = ["stop-color"], yv = ["stop-color"], kv = { key: 0 }, $v = ["x1", "x2", "y1", "y2"], wv = ["x", "y"], Cv = ["x", "y"], Sv = ["x1", "x2", "y1", "y2"], Mv = ["d", "fill"], Bv = ["d", "stroke", "stroke-dasharray"], _v = ["cx", "cy", "fill"], Pv = { key: 1 }, zv = ["x1", "x2", "y1", "y2"], Av = ["cx", "cy", "fill"], Ov = ["x", "y"], jv = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Vv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Lv = { class: "text-xs font-semibold tabular-nums" }, Tv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Dv = { class: "text-muted-foreground" }, Ev = /* @__PURE__ */ O({
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
    const l = e, a = x(() => v.value.some((_) => _.axis === "right")), r = R(null), s = R(560), i = R(null);
    let u = null;
    ge(() => {
      u = new ResizeObserver((_) => {
        s.value = Math.max(160, _[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), ke(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], c = Math.random().toString(36).slice(2, 9), v = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, V) => ({
      ...F,
      color: F.color ?? d[V % d.length]
    }))), p = x(() => v.value[0]?.points.map((_) => _.label) ?? []), g = x(() => p.value.length), C = x(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), y = (_) => l.format ? l.format(_) : k(_);
    function k(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    function M(_) {
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ve) => F <= ve * V) ?? 10) * V;
    }
    const S = x(
      () => M(
        v.value.filter((_) => _.axis !== "right").flatMap((_) => _.points.map((F) => F.value))
      )
    ), B = x(
      () => M(
        v.value.filter((_) => _.axis === "right").flatMap((_) => _.points.map((F) => F.value))
      )
    ), m = x(() => ({
      w: Math.max(1, s.value - C.value.left - C.value.right),
      h: Math.max(1, l.height - C.value.top - C.value.bottom)
    }));
    function h(_) {
      return C.value.left + (g.value <= 1 ? 0 : _ / (g.value - 1) * m.value.w);
    }
    function $(_, F = "left") {
      const V = F === "right" ? B.value : S.value;
      return C.value.top + m.value.h - _ / V * m.value.h;
    }
    const P = x(
      () => v.value.map((_) => {
        const F = _.points.map((J, ve) => ({
          ...J,
          x: h(ve),
          y: $(J.value, _.axis ?? "left")
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
      const ve = [J[0]];
      for (let le = 1; le < F - 1; le++)
        if (J[le - 1] * J[le] <= 0)
          ve[le] = 0;
        else {
          const X = 2 * V[le] + V[le - 1], ne = V[le] + 2 * V[le - 1];
          ve[le] = (X + ne) / (X / J[le - 1] + ne / J[le]);
        }
      ve[F - 1] = J[F - 2];
      let xe = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let le = 0; le < F - 1; le++) {
        const X = V[le] / 3;
        xe += ` C${(_[le].x + X).toFixed(2)},${(_[le].y + ve[le] * X).toFixed(2)} ${(_[le + 1].x - X).toFixed(2)},${(_[le + 1].y - ve[le + 1] * X).toFixed(2)} ${_[le + 1].x.toFixed(2)},${_[le + 1].y.toFixed(2)}`;
      }
      return xe;
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
    ), G = x(() => Math.max(1, Math.ceil(g.value / 8)));
    function oe(_) {
      return _ === g.value - 1 || _ % G.value === 0;
    }
    function ae(_) {
      const F = _.currentTarget.getBoundingClientRect(), V = _.clientX - F.left - C.value.left, J = g.value <= 1 ? 1 : m.value.w / (g.value - 1);
      i.value = Math.min(g.value - 1, Math.max(0, Math.round(V / J)));
    }
    const Z = x(() => {
      if (i.value === null || g.value === 0)
        return null;
      const _ = i.value;
      return {
        i: _,
        x: h(_),
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
      g.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(A, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: ae,
          onMouseleave: F[0] || (F[0] = (V) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(A, null, L(P.value, (V, J) => (t(), n("linearGradient", {
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
              }, null, 8, xv),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, yv)
            ], 8, bv))), 128))
          ]),
          e.showAxis ? (t(), n("g", kv, [
            (t(!0), n(A, null, L(H.value, (V) => (t(), n("line", {
              key: V.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, $v))), 128)),
            (t(!0), n(A, null, L(H.value, (V) => (t(), n("text", {
              key: `t-${V.y}`,
              x: C.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(k(V.value)), 9, wv))), 128)),
            a.value ? (t(!0), n(A, { key: 0 }, L(K.value, (V) => (t(), n("text", {
              key: `rt-${V.y}`,
              x: s.value - C.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(k(V.value)), 9, Cv))), 128)) : w("", !0)
          ])) : w("", !0),
          (t(!0), n(A, null, L(p.value, (V, J) => pe((t(), n("line", {
            key: `v-${J}`,
            x1: h(J),
            x2: h(J),
            y1: C.value.top,
            y2: C.value.top + m.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Sv)), [
            [Ue, oe(J)]
          ])), 128)),
          (t(!0), n(A, null, L(P.value, (V, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            V.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${b(c)}-${J})`
            }, null, 8, Mv)) : w("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, Bv),
            V.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, _v)) : w("", !0)
          ]))), 128)),
          Z.value ? (t(), n("g", Pv, [
            o("line", {
              x1: Z.value.x,
              x2: Z.value.x,
              y1: C.value.top,
              y2: C.value.top + m.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, zv),
            (t(!0), n(A, null, L(Z.value.rows, (V, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: Z.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Av))), 128))
          ])) : w("", !0),
          (t(!0), n(A, null, L(p.value, (V, J) => pe((t(), n("text", {
            key: `x-${J}`,
            x: h(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(V), 9, Ov)), [
            [Ue, oe(J)]
          ])), 128))
        ], 40, hv)),
        Z.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(q.value)
        }, [
          o("p", jv, f(Z.value.label), 1),
          (t(!0), n(A, null, L(Z.value.rows, (V, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Vv, f(V.name || "Value"), 1),
            o("span", Lv, f(y(V.value)), 1)
          ]))), 128))
        ], 4)) : w("", !0),
        e.showLegend && v.value.length > 1 ? (t(), n("div", Tv, [
          (t(!0), n(A, null, L(P.value, (V, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Dv, f(V.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Iv = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Fv = { class: "text-muted-foreground text-[11px] capitalize" }, Nv = { class: "text-sm font-semibold tabular-nums" }, Rv = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, dt = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Iv, [
      o("p", Fv, f(e.label), 1),
      o("p", Nv, [
        N(f(e.value) + " ", 1),
        e.share ? (t(), n("span", Rv, " (" + f(e.share) + ") ", 1)) : w("", !0)
      ])
    ]));
  }
}), Uv = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Hv = ["width", "height", "viewBox", "aria-label"], Kv = ["d", "fill", "fill-opacity", "onMouseenter"], qv = ["x", "y"], Gv = ["x", "y"], Wv = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Zv = ["onMouseenter"], Jv = { class: "min-w-0 flex-1 truncate capitalize" }, Yv = { class: "tabular-nums font-medium" }, Xv = { class: "text-muted-foreground w-9 text-right tabular-nums" }, U3 = /* @__PURE__ */ O({
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
    ], r = x(() => l.data.reduce((S, B) => S + B.value, 0)), s = R(null), i = x(() => l.height), u = x(() => i.value / 2 - 4), d = x(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function c(S) {
      return a[S % a.length];
    }
    function v(S) {
      return 1 - Math.min(0.55, Math.floor(S / a.length) * 0.28);
    }
    const p = x(() => {
      if (r.value <= 0)
        return [];
      const S = i.value / 2;
      let B = -Math.PI / 2;
      return l.data.map((m, h) => {
        const $ = m.value / r.value, P = $ * Math.PI * 2, I = B, E = B + P;
        return B = E, {
          ...m,
          share: $,
          colour: c(h),
          opacity: v(h),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: $ >= 0.9999 ? y(S) : C(S, I, E, u.value, d.value)
        };
      });
    });
    function g(S, B, m) {
      return `${(S + Math.cos(B) * m).toFixed(2)},${(S + Math.sin(B) * m).toFixed(2)}`;
    }
    function C(S, B, m, h, $) {
      const P = m - B > Math.PI ? 1 : 0;
      return $ <= 0 ? `M${S},${S} L${g(S, B, h)} A${h},${h} 0 ${P} 1 ${g(S, m, h)} Z` : [
        `M${g(S, B, h)}`,
        `A${h},${h} 0 ${P} 1 ${g(S, m, h)}`,
        `L${g(S, m, $)}`,
        `A${$},${$} 0 ${P} 0 ${g(S, B, $)}`,
        "Z"
      ].join(" ");
    }
    function y(S) {
      const B = u.value, m = d.value, h = [
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
    }, " No data ", 4)) : (t(), n("div", Uv, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${k(r.value)}`
      }, [
        (t(!0), n(A, null, L(p.value, (m, h) => (t(), n("path", {
          key: h,
          d: m.path,
          fill: m.colour,
          "fill-opacity": s.value === null || s.value === h ? m.opacity : m.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: ($) => s.value = h,
          onMouseleave: B[0] || (B[0] = ($) => s.value = null)
        }, null, 40, Kv))), 128)),
        e.type === "doughnut" ? (t(), n(A, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(k(s.value === null ? r.value : p.value[s.value].value)), 9, qv),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, Gv)
        ], 64)) : w("", !0)
      ], 8, Hv)),
      o("ul", Wv, [
        (t(!0), n(A, null, L(p.value, (m, h) => (t(), n("li", {
          key: h,
          class: z(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === h ? "bg-muted" : ""]),
          onMouseenter: ($) => s.value = h,
          onMouseleave: B[1] || (B[1] = ($) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: m.colour, opacity: m.opacity })
          }, null, 4),
          o("span", Jv, f(m.label), 1),
          o("span", Yv, f(k(m.value)), 1),
          o("span", Xv, f(M(m.share)), 1)
        ], 42, Zv))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(dt, {
        key: 0,
        label: p.value[s.value].label,
        value: k(p.value[s.value].value),
        share: M(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), Qv = ["width", "height", "viewBox", "aria-label"], eg = { class: "text-border" }, tg = ["x1", "x2", "y1", "y2", "stroke-dasharray"], ag = { class: "fill-muted-foreground text-[10px]" }, ng = ["x", "y"], lg = ["x", "y"], og = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], sg = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, H3 = /* @__PURE__ */ O({
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
      u = new ResizeObserver((G) => {
        const oe = G[0]?.contentRect.width ?? 0;
        oe > 0 && (s.value = oe);
      }), r.value && u.observe(r.value);
    }), ke(() => u?.disconnect());
    const d = x(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), c = (G, oe) => oe.color ?? a[G % a.length], v = x(() => d.value.flatMap((G) => G.points)), p = x(() => v.value.some((G) => typeof G.r == "number")), g = { top: 12, right: 16, bottom: 32, left: 48 }, C = x(() => Math.max(10, s.value - g.left - g.right)), y = x(() => Math.max(10, l.height - g.top - g.bottom));
    function k(G) {
      if (G.length === 0)
        return [0, 1];
      const oe = Math.min(...G), ae = Math.max(...G), Z = ae - oe || Math.abs(ae) || 1;
      return [oe - Z * 0.08, ae + Z * 0.08];
    }
    const M = x(() => k(v.value.map((G) => G.x))), S = x(() => k(v.value.map((G) => G.y))), B = (G) => {
      const [oe, ae] = M.value;
      return g.left + (G - oe) / (ae - oe) * C.value;
    }, m = (G) => {
      const [oe, ae] = S.value;
      return g.top + y.value - (G - oe) / (ae - oe) * y.value;
    }, h = x(() => Math.max(...v.value.map((G) => G.r ?? 0), 0));
    function $(G) {
      if (!p.value || !h.value)
        return 4;
      const oe = Math.max(0, G.r ?? 0) / h.value;
      return 3 + Math.sqrt(oe) * (l.maxRadius - 3);
    }
    function P([G, oe]) {
      return Array.from({ length: 5 }, (ae, Z) => G + (oe - G) / 4 * Z);
    }
    const I = x(() => P(M.value)), E = x(() => P(S.value)), te = (G) => l.formatX?.(G) ?? String(Math.round(G * 100) / 100), H = (G) => l.formatY?.(G) ?? String(Math.round(G * 100) / 100), K = x(() => {
      if (!i.value)
        return null;
      const G = d.value[i.value.s], oe = G?.points[i.value.p];
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
        o("g", eg, [
          (t(!0), n(A, null, L(E.value, (ae, Z) => (t(), n("line", {
            key: `gy-${Z}`,
            x1: g.left,
            x2: g.left + C.value,
            y1: m(ae),
            y2: m(ae),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Z === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, tg))), 128))
        ]),
        o("g", ag, [
          (t(!0), n(A, null, L(E.value, (ae, Z) => (t(), n("text", {
            key: `ty-${Z}`,
            x: g.left - 8,
            y: m(ae) + 3,
            "text-anchor": "end"
          }, f(H(ae)), 9, ng))), 128)),
          (t(!0), n(A, null, L(I.value, (ae, Z) => (t(), n("text", {
            key: `tx-${Z}`,
            x: B(ae),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(te(ae)), 9, lg))), 128))
        ]),
        (t(!0), n(A, null, L(d.value, (ae, Z) => (t(), n("g", {
          key: `s-${Z}`
        }, [
          (t(!0), n(A, null, L(ae.points, (q, _) => (t(), n("circle", {
            key: `p-${Z}-${_}`,
            cx: B(q.x),
            cy: m(q.y),
            r: $(q),
            fill: c(Z, ae),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: c(Z, ae),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== Z || i.value.p !== _) ? 0.35 : 1,
            onMouseenter: (F) => i.value = { s: Z, p: _ },
            onMouseleave: oe[0] || (oe[0] = (F) => i.value = null)
          }, null, 40, og))), 128))
        ]))), 128))
      ], 8, Qv)),
      K.value ? (t(), T(dt, {
        key: 0,
        label: K.value.point.label ?? K.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(K.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(K.value.point.y)}`,
        share: p.value && K.value.point.r != null ? String(K.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : w("", !0),
      e.showLegend && d.value.length > 1 ? (t(), n("div", sg, [
        (t(!0), n(A, null, L(d.value, (ae, Z) => (t(), n("span", {
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
      ])) : w("", !0)
    ], 512));
  }
}), rg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, ig = ["width", "height", "viewBox"], ug = ["points"], dg = ["x1", "y1", "x2", "y2"], cg = ["points", "fill", "stroke"], fg = ["cx", "cy", "fill", "onMouseenter"], mg = ["x", "y", "text-anchor"], pg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, vg = { class: "truncate" }, K3 = /* @__PURE__ */ O({
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
      () => l.series.map((m, h) => ({
        ...m,
        color: m.color ?? a[h % a.length]
      }))
    ), s = x(() => r.value[0]?.points.map((m) => m.label) ?? []), i = x(() => s.value.length), u = x(() => l.height), d = x(() => u.value / 2), c = x(() => u.value / 2 - 34), v = x(() => {
      const m = Math.max(...r.value.flatMap((P) => P.points.map((I) => I.value)), 0);
      if (m <= 0)
        return 1;
      const h = 10 ** Math.floor(Math.log10(m));
      return ([1, 2, 2.5, 5, 10].find((P) => m <= P * h) ?? 10) * h;
    });
    function p(m) {
      return m / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function g(m, h) {
      const $ = p(m);
      return {
        x: d.value + Math.cos($) * c.value * h,
        y: d.value + Math.sin($) * c.value * h
      };
    }
    function C(m) {
      return Array.from({ length: i.value }, (h, $) => {
        const P = g($, m);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const y = x(() => [0.25, 0.5, 0.75, 1].map((m) => ({ f: m, points: C(m) }))), k = x(
      () => r.value.map((m) => {
        const h = m.points.map(($) => Math.max(0, $.value) / v.value);
        return {
          name: m.name,
          color: m.color,
          values: m.points,
          outline: h.map(($, P) => {
            const I = g(P, $);
            return `${I.x.toFixed(2)},${I.y.toFixed(2)}`;
          }).join(" "),
          dots: h.map(($, P) => g(P, $))
        };
      })
    ), M = x(
      () => s.value.map((m, h) => {
        const $ = p(h), P = d.value + Math.cos($) * (c.value + 14), I = d.value + Math.sin($) * (c.value + 14), E = Math.cos($);
        return {
          label: m,
          x: P,
          y: I + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), S = R(null), B = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, h) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", rg, [
      (t(), n("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(A, null, L(y.value, ($) => (t(), n("polygon", {
          key: $.f,
          points: $.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, ug))), 128)),
        (t(!0), n(A, null, L(s.value, ($, P) => (t(), n("line", {
          key: `spoke-${P}`,
          x1: d.value,
          y1: d.value,
          x2: g(P, 1).x,
          y2: g(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, dg))), 128)),
        (t(!0), n(A, null, L(k.value, ($, P) => (t(), n("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: $.outline,
            fill: $.color,
            "fill-opacity": "0.16",
            stroke: $.color,
            "stroke-width": "2"
          }, null, 8, cg),
          (t(!0), n(A, null, L($.dots, (I, E) => (t(), n("circle", {
            key: E,
            cx: I.x,
            cy: I.y,
            r: "3",
            fill: $.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (te) => S.value = {
              series: $.name,
              axis: s.value[E],
              value: $.values[E]?.value ?? 0
            },
            onMouseleave: h[0] || (h[0] = (te) => S.value = null)
          }, null, 40, fg))), 128))
        ]))), 128)),
        (t(!0), n(A, null, L(M.value, ($, P) => (t(), n("text", {
          key: `l-${P}`,
          x: $.x,
          y: $.y,
          "text-anchor": $.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f($.label), 9, mg))), 128))
      ], 8, ig)),
      e.showLegend ? (t(), n("ul", pg, [
        (t(!0), n(A, null, L(r.value, ($, P) => (t(), n("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: $.color })
          }, null, 4),
          o("span", vg, f($.name), 1)
        ]))), 128))
      ])) : w("", !0),
      S.value ? (t(), T(dt, {
        key: 1,
        label: `${S.value.series} — ${S.value.axis}`,
        value: B(S.value.value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), gg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, hg = ["width", "height", "viewBox"], bg = ["cx", "cy", "r"], xg = ["d", "fill", "fill-opacity", "onMouseenter"], yg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, kg = { class: "min-w-0 flex-1 truncate capitalize" }, $g = { class: "font-medium tabular-nums" }, q3 = /* @__PURE__ */ O({
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
    ], r = R(null), s = x(() => l.height), i = x(() => s.value / 2), u = x(() => s.value / 2 - 6), d = x(() => Math.max(...l.data.map((C) => Math.max(0, C.value)), 0)), c = x(() => {
      const C = l.data.length;
      if (C === 0 || d.value <= 0)
        return [];
      const y = Math.PI * 2 / C;
      return l.data.map((k, M) => {
        const S = Math.sqrt(Math.max(0, k.value) / d.value), B = u.value * S, m = M * y - Math.PI / 2, h = m + y;
        return {
          ...k,
          color: a[M % a.length],
          share: d.value === 0 ? 0 : k.value / d.value,
          path: v(i.value, m, h, B)
        };
      });
    });
    function v(C, y, k, M) {
      if (M <= 0)
        return "";
      if (k - y >= Math.PI * 2 - 1e-6)
        return `M${C - M},${C} A${M},${M} 0 1 1 ${C + M},${C} A${M},${M} 0 1 1 ${C - M},${C} Z`;
      const S = k - y > Math.PI ? 1 : 0, B = C + Math.cos(y) * M, m = C + Math.sin(y) * M, h = C + Math.cos(k) * M, $ = C + Math.sin(k) * M;
      return `M${C},${C} L${B.toFixed(2)},${m.toFixed(2)} A${M.toFixed(2)},${M.toFixed(2)} 0 ${S} 1 ${h.toFixed(2)},${$.toFixed(2)} Z`;
    }
    const p = x(() => [0.5, 0.75, 1].map((C) => u.value * C)), g = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, y) => c.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", gg, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(A, null, L(p.value, (k) => (t(), n("circle", {
          key: k,
          cx: i.value,
          cy: i.value,
          r: k,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, bg))), 128)),
        (t(!0), n(A, null, L(c.value, (k, M) => (t(), n("path", {
          key: M,
          d: k.path,
          fill: k.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === M ? 0.75 : 0.3,
          onMouseenter: (S) => r.value = M,
          onMouseleave: y[0] || (y[0] = (S) => r.value = null)
        }, null, 40, xg))), 128))
      ], 8, hg)),
      e.showLegend ? (t(), n("ul", yg, [
        (t(!0), n(A, null, L(c.value, (k, M) => (t(), n("li", {
          key: M,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: k.color })
          }, null, 4),
          o("span", kg, f(k.label), 1),
          o("span", $g, f(g(k.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      r.value !== null ? (t(), T(dt, {
        key: 1,
        label: c.value[r.value].label,
        value: g(c.value[r.value].value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), wg = ["width", "height"], Cg = ["x1", "x2", "y1", "y2"], Sg = ["x", "y"], Mg = ["x", "y"], Bg = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], _g = ["x", "y", "width", "height", "fill", "fill-opacity"], Pg = ["d", "stroke"], zg = ["cx", "cy", "fill"], Ag = ["x", "y"], Og = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, jg = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Vg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Lg = { class: "text-xs font-semibold tabular-nums" }, Tg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Dg = { class: "text-muted-foreground" }, G3 = /* @__PURE__ */ O({
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
      i = new ResizeObserver((Z) => {
        r.value = Math.max(160, Z[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], c = x(
      () => l.bars.map((Z, q) => ({
        ...Z,
        color: Z.color ?? u[q % u.length]
      }))
    ), v = x(
      () => l.lines.map((Z, q) => ({
        ...Z,
        color: Z.color ?? d[q % d.length]
      }))
    ), p = x(
      () => c.value[0]?.points.map((Z) => Z.label) ?? v.value[0]?.points.map((Z) => Z.label) ?? []
    ), g = x(() => p.value.length), C = x(() => l.lineAxis === "right"), y = x(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), k = x(() => ({
      w: Math.max(1, r.value - y.value.left - y.value.right),
      h: Math.max(1, l.height - y.value.top - y.value.bottom)
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
        ...c.value.flatMap((Z) => Z.points.map((q) => q.value)),
        ...C.value ? [] : v.value.flatMap((Z) => Z.points.map((q) => q.value))
      ])
    ), B = x(
      () => C.value ? M(v.value.flatMap((Z) => Z.points.map((q) => q.value))) : S.value
    ), m = x(() => k.value.w / Math.max(1, g.value)), h = x(() => m.value * 0.6), $ = x(() => h.value / Math.max(1, c.value.length));
    function P(Z) {
      return y.value.left + Z * m.value + m.value / 2;
    }
    const I = x(
      () => c.value.flatMap(
        (Z, q) => Z.points.map((_, F) => {
          const V = Math.max(0, _.value) / S.value * k.value.h;
          return {
            x: P(F) - h.value / 2 + q * $.value,
            y: y.value.top + k.value.h - V,
            w: Math.max(0, $.value - 2),
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
      () => v.value.map((Z) => {
        const q = Z.points.map((_, F) => ({
          x: P(F),
          y: y.value.top + k.value.h - Math.max(0, _.value) / B.value * k.value.h,
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
        y: y.value.top + k.value.h * Z,
        left: S.value * (1 - Z),
        right: B.value * (1 - Z)
      }))
    ), H = x(() => Math.max(1, Math.ceil(g.value / 10)));
    function K(Z) {
      return Z === g.value - 1 || Z % H.value === 0;
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
      }, " No data ", 4)) : (t(), n(A, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: q[0] || (q[0] = (_) => s.value = null)
        }, [
          (t(!0), n(A, null, L(te.value, (_) => (t(), n("line", {
            key: `g-${_.y}`,
            x1: y.value.left,
            x2: r.value - y.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Cg))), 128)),
          (t(!0), n(A, null, L(te.value, (_) => (t(), n("text", {
            key: `lt-${_.y}`,
            x: y.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.left)), 9, Sg))), 128)),
          C.value ? (t(!0), n(A, { key: 0 }, L(te.value, (_) => (t(), n("text", {
            key: `rt-${_.y}`,
            x: r.value - y.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.right)), 9, Mg))), 128)) : w("", !0),
          (t(!0), n(A, null, L(p.value, (_, F) => (t(), n("rect", {
            key: `hit-${F}`,
            x: y.value.left + F * m.value,
            y: y.value.top,
            width: m.value,
            height: k.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (V) => s.value = F
          }, null, 40, Bg))), 128)),
          (t(!0), n(A, null, L(I.value, (_, F) => (t(), n("rect", {
            key: `b-${F}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, _g))), 128)),
          (t(!0), n(A, null, L(E.value, (_, F) => (t(), n("g", {
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
            }, null, 8, Pg),
            s.value !== null && _.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, zg)) : w("", !0)
          ]))), 128)),
          (t(!0), n(A, null, L(p.value, (_, F) => pe((t(), n("text", {
            key: `x-${F}`,
            x: P(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(_), 9, Ag)), [
            [Ue, K(F)]
          ])), 128))
        ], 40, wg)),
        ae.value ? (t(), n("div", Og, [
          o("p", jg, f(ae.value.label), 1),
          (t(!0), n(A, null, L(ae.value.rows, (_, F) => (t(), n("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", Vg, f(_.name), 1),
            o("span", Lg, f(G(_.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend ? (t(), n("div", Tg, [
          (t(!0), n(A, null, L([...c.value, ...v.value], (_, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", Dg, f(_.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Eg = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Ig = { class: "text-muted-foreground" }, Fg = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Ng = ["width", "height"], Rg = ["x", "y"], Ug = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Hg = ["x", "y"], Kg = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, qg = { class: "text-[11px] font-medium capitalize" }, Gg = { class: "text-muted-foreground text-[11px] capitalize" }, Wg = { class: "text-sm font-semibold tabular-nums" }, Zg = { class: "text-muted-foreground text-xs font-normal" }, W3 = /* @__PURE__ */ O({
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
      i = new ResizeObserver((h) => {
        r.value = Math.max(160, h[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const u = x(() => l.series[0]?.points.map((h) => h.label) ?? []), d = x(() => l.series.length), c = x(() => u.value.length), v = x(() => Math.min(140, Math.max(60, r.value * 0.16))), p = x(() => Math.max(1, r.value - v.value - 8)), g = x(() => p.value / Math.max(1, c.value)), C = x(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
    function y(h) {
      if (h === 0)
        return "var(--muted)";
      const $ = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(h / $ * 100)}%, var(--muted))`;
    }
    function k(h) {
      for (let $ = 0; $ < l.buckets.length; $++) {
        const P = l.buckets[$].max;
        if (P === void 0 || h < P)
          return $;
      }
      return l.buckets.length - 1;
    }
    const M = x(
      () => l.series.flatMap(
        (h, $) => h.points.map((P, I) => {
          const E = k(P.value);
          return {
            row: $,
            col: I,
            x: v.value + I * g.value,
            y: 4 + $ * C.value,
            w: Math.max(1, g.value - 1),
            h: Math.max(1, C.value - 4),
            colour: y(E),
            label: P.label,
            value: P.value,
            rowName: h.name,
            bucketLabel: l.buckets[E].label
          };
        })
      )
    ), S = x(() => g.value < 2), B = x(() => s.value ? M.value.find((h) => h.row === s.value.row && h.col === s.value.col) ?? null : null), m = (h) => l.format ? l.format(h) : new Intl.NumberFormat().format(h);
    return (h, $) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      d.value === 0 || c.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(A, { key: 1 }, [
        o("div", Eg, [
          (t(!0), n(A, null, L(e.buckets, (P, I) => (t(), n("span", {
            key: I,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: y(I) })
            }, null, 4),
            o("span", Ig, f(P.label), 1)
          ]))), 128))
        ]),
        S.value ? (t(), n("p", Fg, f(c.value) + " columns - too many to label individually ", 1)) : w("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: $[0] || ($[0] = (P) => s.value = null)
        }, [
          (t(!0), n(A, null, L(e.series, (P, I) => (t(), n("text", {
            key: `r-${I}`,
            x: v.value - 10,
            y: 4 + I * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(P.name), 9, Rg))), 128)),
          (t(!0), n(A, null, L(M.value, (P, I) => (t(), n("rect", {
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
          }, null, 40, Ug))), 128)),
          e.showColumnLabels && !S.value ? (t(!0), n(A, { key: 0 }, L(u.value, (P, I) => (t(), n("text", {
            key: `c-${I}`,
            x: v.value + I * g.value + g.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(P), 9, Hg))), 128)) : w("", !0)
        ], 40, Ng)),
        B.value ? (t(), n("div", Kg, [
          o("p", qg, f(B.value.label), 1),
          o("p", Gg, f(B.value.rowName), 1),
          o("p", Wg, [
            N(f(m(B.value.value)) + " ", 1),
            o("span", Zg, "(" + f(B.value.bucketLabel) + ")", 1)
          ])
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Jg = ["viewBox"], Yg = { key: 0 }, Xg = ["id"], Qg = ["stop-color"], eh = ["stop-color"], th = ["d", "fill"], ah = ["d", "stroke"], da = 100, at = 30, yt = /* @__PURE__ */ O({
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
      const d = l.data.map((g) => g.value);
      if (d.length < 2)
        return [];
      const c = Math.min(...d), p = Math.max(...d) - c || 1;
      return d.map((g, C) => ({
        x: C / (d.length - 1) * da,
        y: at - (g - c) / p * (at - 4) - 2
      }));
    });
    function s(d) {
      const c = d.length;
      if (c < 2)
        return "";
      const v = [], p = [];
      for (let y = 0; y < c - 1; y++)
        v[y] = d[y + 1].x - d[y].x, p[y] = v[y] === 0 ? 0 : (d[y + 1].y - d[y].y) / v[y];
      const g = [p[0]];
      for (let y = 1; y < c - 1; y++)
        if (p[y - 1] * p[y] <= 0)
          g[y] = 0;
        else {
          const k = 2 * v[y] + v[y - 1], M = v[y] + 2 * v[y - 1];
          g[y] = (k + M) / (k / p[y - 1] + M / p[y]);
        }
      g[c - 1] = p[c - 2];
      let C = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let y = 0; y < c - 1; y++) {
        const k = v[y] / 3;
        C += ` C${(d[y].x + k).toFixed(2)},${(d[y].y + g[y] * k).toFixed(2)} ${(d[y + 1].x - k).toFixed(2)},${(d[y + 1].y - g[y + 1] * k).toFixed(2)} ${d[y + 1].x.toFixed(2)},${d[y + 1].y.toFixed(2)}`;
      }
      return C;
    }
    const i = x(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((c, v) => `${v === 0 ? "M" : "L"}${c.x.toFixed(2)},${c.y.toFixed(2)}`).join(" ");
    }), u = x(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${at} L${d[0].x.toFixed(2)},${at} Z`;
    });
    return (d, c) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${da} ${at}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", Yg, [
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
          }, null, 8, Qg),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, eh)
        ], 8, Xg)
      ])) : w("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${b(a)})`
      }, null, 8, th)) : w("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, ah)
    ], 12, Jg)) : w("", !0);
  }
}), nh = { class: "flex items-center gap-1 text-xs" }, lh = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, oh = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Ta = /* @__PURE__ */ O({
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
    return (u, d) => (t(), n("span", nh, [
      o("span", {
        class: z(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", lh, f(s.value), 1),
        N(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", oh, f(e.comparison), 1)) : w("", !0)
    ]));
  }
}), sh = ["data-collapsed"], rh = { class: "flex flex-wrap items-start justify-between gap-2" }, ih = { class: "flex min-w-0 items-start gap-2" }, uh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, dh = ["d"], ch = { class: "min-w-0" }, fh = { class: "text-sm font-medium" }, mh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, ph = { class: "flex shrink-0 items-center gap-1.5" }, vh = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, gh = ["aria-pressed", "onClick"], hh = ["aria-expanded", "aria-label", "title"], bh = ["aria-label"], xh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yh = ["d"], kh = /* @__PURE__ */ O({
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
    const l = e, a = Lt(), r = R(l.defaultCollapsed), s = x(() => !!l.icon && !a.icon), i = x(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), n("div", {
      class: z(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", rh, [
        o("div", ih, [
          U(u.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", uh, [
              o("path", {
                d: b(ce)(e.icon)
              }, null, 8, dh)
            ])) : w("", !0)
          ]),
          o("div", ch, [
            o("p", fh, f(e.label), 1),
            e.description ? (t(), n("p", mh, f(e.description), 1)) : w("", !0),
            U(u.$slots, "trend")
          ])
        ]),
        o("div", ph, [
          U(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", vh, [
            (t(!0), n(A, null, L(e.periods, (c) => (t(), n("button", {
              key: c.value,
              type: "button",
              class: z([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === c.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === c.value,
              onClick: (v) => u.$emit("update:period", c.value)
            }, f(c.label), 11, gh))), 128))
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
              class: z(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, hh)) : w("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (c) => u.$emit("hide"))
          }, [
            (t(), n("svg", xh, [
              o("path", {
                d: b(ce)("eye-off")
              }, null, 8, yh)
            ]))
          ], 8, bh)) : w("", !0)
        ])
      ]),
      r.value ? w("", !0) : (t(), n("div", {
        key: 0,
        style: se(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T(Pe, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: se({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : U(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, sh));
  }
}), $h = ["aria-pressed", "aria-label", "title"], wh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ch = ["d"], Sh = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Mh = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Bh = ["href"], _h = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ph = ["d"], zh = ["aria-label", "onClick"], Ah = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Oh = ["d"], jh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vh = ["d"], Lh = {
  key: 0,
  class: "flex flex-col gap-1"
}, Th = ["onClick"], Dh = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Eh = ["d"], Ih = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Fh = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!1), i = R(!1), u = x(
      () => a.catalog.filter((v) => !a.items.some((p) => p.id === v.id))
    );
    function d(v) {
      r(
        "update:items",
        a.items.filter((p) => p.id !== v)
      );
    }
    function c(v) {
      r("update:items", [...a.items, v]), i.value = !1;
    }
    return (v, p) => (t(), n(A, null, [
      D(kh, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (g) => r("hide"))
      }, {
        actions: j(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (g) => s.value = !s.value)
          }, [
            (t(), n("svg", wh, [
              o("path", {
                d: b(ce)(s.value ? "check" : "pencil")
              }, null, 8, Ch)
            ]))
          ], 8, $h)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), n("div", Sh, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            D(de, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (g) => i.value = !0)
            }, {
              default: j(() => [...p[6] || (p[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", Mh, [
            (t(!0), n(A, null, L(e.items, (g) => (t(), n("div", {
              key: g.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: g.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", _h, [
                  o("path", {
                    d: b(ce)(g.icon)
                  }, null, 8, Ph)
                ])),
                N(" " + f(g.label), 1)
              ], 8, Bh),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${g.label}`,
                onClick: (C) => d(g.id)
              }, [
                (t(), n("svg", Ah, [
                  o("path", {
                    d: b(ce)("x")
                  }, null, 8, Oh)
                ]))
              ], 8, zh)) : w("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (g) => i.value = !0)
            }, [
              (t(), n("svg", jh, [
                o("path", {
                  d: b(ce)("plus")
                }, null, 8, Vh)
              ])),
              p[8] || (p[8] = N(" Add ", -1))
            ])) : w("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      D(st, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (g) => i.value = !1)
      }, {
        footer: j(() => [
          D(de, {
            variant: "outline",
            onClick: p[4] || (p[4] = (g) => i.value = !1)
          }, {
            default: j(() => [...p[9] || (p[9] = [
              N("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          u.value.length ? (t(), n("ul", Lh, [
            (t(!0), n(A, null, L(u.value, (g) => (t(), n("li", {
              key: g.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => c(g)
              }, [
                (t(), n("svg", Dh, [
                  o("path", {
                    d: b(ce)(g.icon)
                  }, null, 8, Eh)
                ])),
                N(" " + f(g.label), 1)
              ], 8, Th)
            ]))), 128))
          ])) : (t(), n("p", Ih, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Nh = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Rh = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Uh = { class: "relative w-full max-w-xl" }, Hh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Kh = ["d"], qh = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Gh = ["data-slot"], Wh = { class: "px-5 py-4" }, Zh = { class: "mb-3 text-sm font-semibold" }, Jh = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Yh = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Xh = ["d"], Qh = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, Z3 = /* @__PURE__ */ O({
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
      const d = l.linkComponent;
      return typeof d == "string" ? d : ma(d);
    }), s = nt({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const u = x(() => {
      const d = a.value.trim().toLowerCase();
      return l.sections.map((c) => ({
        ...c,
        links: d ? c.links.filter((v) => v.label.toLowerCase().includes(d)) : c.links
      })).filter((c) => c.links.length > 0);
    });
    return (d, c) => (t(), n("div", {
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(qe)])
    }, [
      o("header", null, [
        o("h1", Nh, f(e.title), 1),
        e.description ? (t(), n("p", Rh, f(e.description), 1)) : w("", !0)
      ]),
      o("div", Uh, [
        (t(), n("svg", Hh, [
          o("path", {
            d: b(ce)("search")
          }, null, 8, Kh)
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
      u.value.length ? (t(), n("div", qh, [
        (t(!0), n(A, null, L(u.value, (v) => (t(), n("section", {
          key: v.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${v.key}`
        }, [
          o("div", Wh, [
            o("h2", Zh, f(v.title), 1),
            o("div", Jh, [
              (t(!0), n(A, null, L(v.links, (p) => (t(), T(Be(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: z(b(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), n("svg", Yh, [
                    o("path", {
                      d: b(ce)(p.icon)
                    }, null, 8, Xh)
                  ])),
                  N(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Gh))), 128))
      ])) : (t(), n("p", Qh, ' Nothing matches "' + f(a.value) + '". ', 1))
    ], 2));
  }
}), eb = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, tb = { class: "flex flex-1 flex-col gap-1 p-4" }, ab = { class: "text-muted-foreground relative text-xs font-medium" }, nb = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, lb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, ob = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, sb = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, J3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", eb, [
      o("div", tb, [
        o("p", ab, f(e.label), 1),
        e.loading ? (t(), T(Pe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", nb, " Could not load ")) : (t(), n("span", lb, f(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Ta, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", ob, f(e.description), 1)) : w("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", sb, [
        D(yt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : w("", !0)
    ]));
  }
}), rb = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, ib = { class: "flex flex-col gap-1 p-4" }, ub = { class: "flex items-start justify-between gap-2" }, db = { class: "text-sm font-medium" }, cb = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, fb = { class: "mt-1 flex flex-wrap items-center gap-2" }, mb = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, pb = {
  key: 0,
  class: "-mb-px"
}, gt = /* @__PURE__ */ O({
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
    return (i, u) => (t(), n("div", rb, [
      o("div", ib, [
        o("div", ub, [
          o("p", db, f(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", cb, f(e.caption), 1)) : w("", !0),
        o("div", fb, [
          e.loading ? (t(), T(Pe, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", mb, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: z(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : w("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", pb, [
        D(yt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : w("", !0)
    ]));
  }
}), vb = { class: "relative flex flex-col gap-2" }, gb = ["aria-label"], hb = ["onMouseenter"], bb = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, xb = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, yb = { class: "truncate" }, kb = { class: "text-sm font-semibold tabular-nums" }, Y3 = /* @__PURE__ */ O({
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
    ], r = x(() => l.segments.reduce((v, p) => v + Math.max(0, p.value), 0)), s = x(() => Math.max(l.total ?? r.value, r.value, 1)), i = x(
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
    ), u = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), d = R(null), c = (v) => `${(v * 100).toFixed(v > 0 && v < 0.01 ? 1 : 0)}%`;
    return (v, p) => (t(), n("div", vb, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((g) => `${g.label} ${u(g.value)}`).join(", ")
      }, [
        (t(!0), n(A, null, L(i.value, (g, C) => (t(), n("span", {
          key: C,
          class: z(["h-full transition-all", [
            C === 0 ? "rounded-l-full" : "",
            C === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: se({
            width: g.width,
            background: g.color,
            opacity: d.value === null || d.value === C ? 1 : 0.4
          }),
          onMouseenter: (y) => d.value = C,
          onMouseleave: p[0] || (p[0] = (y) => d.value = null)
        }, null, 46, hb))), 128))
      ], 12, gb),
      e.showLegend ? (t(), n("div", bb, [
        (t(!0), n(A, null, L(i.value, (g, C) => (t(), n("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", xb, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: g.color })
            }, null, 4),
            o("span", yb, f(g.label), 1)
          ]),
          o("span", kb, f(u(g.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      d.value !== null ? (t(), T(dt, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: c(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), $b = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, wb = ["data-heading"], Cb = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Sb = { class: "text-muted-foreground truncate" }, Mb = ["aria-label"], X3 = /* @__PURE__ */ O({
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
        const u = i.bar.segments.reduce((c, v) => c + Math.max(0, v.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
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
    return (i, u) => (t(), n("div", $b, [
      (t(!0), n(A, null, L(s.value, (d) => (t(), n("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), n("div", {
          key: 0,
          class: z(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? a[d.tone] : "text-muted-foreground"])
        }, f(d.label), 3)) : (t(), n("div", Cb, [
          o("span", Sb, f(d.label), 1),
          o("span", {
            class: z(["shrink-0 font-medium tabular-nums", d.tone ? a[d.tone] : "text-foreground"])
          }, f(d.value), 3)
        ])),
        d.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((c) => `${c.label} ${c.value}`).join(", ")
        }, [
          (t(!0), n(A, null, L(d.segments, (c, v) => (t(), n("span", {
            key: v,
            class: z(["h-full transition-all", r[c.tone ?? "neutral"]]),
            style: se({ width: c.width })
          }, null, 6))), 128))
        ], 8, Mb)) : w("", !0)
      ], 8, wb))), 128))
    ]));
  }
}), Bb = {
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
}, _b = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Pb(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function zb(e, l) {
  return l || (e ? Bb[Pb(e)] ?? "neutral" : "neutral");
}
function Ab(e, l) {
  return _b[zb(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = x(() => Ab(l.status, l.tone));
    return (r, s) => (t(), T(Ke, {
      variant: a.value,
      class: z(l.class)
    }, {
      default: j(() => [
        U(r.$slots, "default", {}, () => [
          N(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Ob = ["data-layout"], jb = ["src", "alt"], Vb = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Lb = ["src"], Tb = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Db = ["onMouseenter"], Eb = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Ib = { class: "min-w-0" }, Fb = { class: "truncate text-sm font-medium" }, Nb = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Rb = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Ub = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Hb = { class: "min-w-0" }, Kb = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, qb = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, Gb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wb = ["d"], Zb = ["aria-label"], Jb = /* @__PURE__ */ O({
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
    function u(M) {
      if (typeof M != "string")
        return null;
      const S = M.trim();
      return S === "" ? null : /^(https?:)?\/\//i.test(S) ? S : null;
    }
    const d = x(() => {
      const M = [r.item.image, ...r.item.images ?? []].map(u).filter((S) => S !== null);
      return [...new Set(M)];
    }), c = x(() => d.value[i.value] ?? d.value[0] ?? null), v = x(
      () => r.item.label.split(/\s+/).slice(0, 2).map((M) => M[0]?.toUpperCase() ?? "").join("")
    ), p = x(() => {
      const M = r.item.progress;
      if (!M)
        return null;
      const S = Math.max(M.total ?? 100, M.value, 1);
      return `${Math.min(100, Math.max(0, M.value / S * 100)).toFixed(2)}%`;
    }), g = x(() => d.value.length > 1 ? d.value[1] : null), C = x(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), y = x(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function k(M) {
      M.stopPropagation(), s("cart", r.item.key);
    }
    return (M, S) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: z(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: S[0] || (S[0] = (B) => s("select", e.item.key)),
      onKeydown: S[1] || (S[1] = Wa(he((B) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: S[2] || (S[2] = (B) => i.value = 0)
    }, [
      o("div", {
        class: z([
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
        }, null, 8, jb)) : (t(), n("span", Vb, f(v.value), 1)),
        e.layout === "grid" && g.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: g.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Lb)) : w("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), n("div", Tb, [
          (t(!0), n(A, null, L(d.value, (B, m) => (t(), n("span", {
            key: m,
            class: z(["size-1.5 rounded-full", m === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (h) => i.value = m
          }, null, 42, Db))), 128))
        ])) : w("", !0)
      ], 2),
      o("div", {
        class: z(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Eb, [
          o("div", Ib, [
            o("p", Fb, f(e.item.label), 1),
            e.item.caption ? (t(), n("p", Nb, f(e.item.caption), 1)) : w("", !0),
            e.item.facts?.length ? (t(), n("p", Rb, f(e.item.facts.join(" · ")), 1)) : w("", !0)
          ]),
          e.item.status ? (t(), T(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : w("", !0)
        ]),
        o("div", Ub, [
          o("div", Hb, [
            e.item.price ? (t(), n("p", Kb, f(e.item.price), 1)) : w("", !0),
            y.value ? (t(), n("p", qb, f(y.value), 1)) : w("", !0)
          ]),
          C.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: k
          }, [
            (t(), n("svg", Gb, [
              o("path", {
                d: b(ce)("cart")
              }, null, 8, Wb)
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
            class: z(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: p.value })
          }, null, 6)
        ], 8, Zb)) : w("", !0)
      ], 2)
    ], 42, Ob));
  }
});
function Yb(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Xb(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Qb(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const e1 = ["data-featured", "data-recommended"], t1 = { class: "flex flex-col gap-1" }, a1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, n1 = { key: 0 }, l1 = { key: 1 }, o1 = { key: 2 }, s1 = { key: 3 }, r1 = { class: "text-sm font-semibold" }, i1 = { class: "flex items-baseline gap-1" }, u1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, d1 = { class: "text-muted-foreground text-sm font-normal" }, c1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, f1 = { class: "text-muted-foreground mt-1 text-xs" }, m1 = { class: "flex flex-1 flex-col gap-2 text-sm" }, p1 = { class: "flex min-w-0 items-start gap-2" }, v1 = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, g1 = ["d"], h1 = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, b1 = ["d"], x1 = { class: "capitalize" }, y1 = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, k1 = { class: "text-foreground font-medium" }, $1 = { class: "mt-auto flex gap-2 pt-2" }, w1 = /* @__PURE__ */ O({
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
    ), u = x(() => {
      const c = a.plan.perks ?? {};
      return Object.entries(c).map(([v, p]) => ({
        key: v,
        label: v.replace(/_/g, " "),
        granted: Qb(p.value),
        display: Xb(p.value)
      }));
    }), d = x(() => a.plan.extraPerks ?? []);
    return (c, v) => (t(), n("article", {
      class: z(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", t1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", a1, [
          e.plan.recommended ? (t(), n("span", n1, "Recommended")) : e.plan.featured ? (t(), n("span", l1, "Featured")) : w("", !0),
          e.plan.trial ? (t(), n("span", o1, "Trial")) : w("", !0),
          e.plan.active === !1 ? (t(), n("span", s1, "Inactive")) : w("", !0)
        ])) : w("", !0),
        o("h3", r1, f(e.plan.name), 1),
        o("p", i1, [
          o("span", u1, f(s.value), 1),
          o("span", d1, f(b(Yb)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", c1, f(e.plan.shortDescription), 1)) : w("", !0),
        o("p", f1, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", m1, [
        (t(!0), n(A, null, L(u.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", p1, [
            o("span", {
              class: z(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", v1, [
                o("path", {
                  d: b(ce)("check")
                }, null, 8, g1)
              ])) : (t(), n("svg", h1, [
                o("path", {
                  d: b(ce)("x")
                }, null, 8, b1)
              ]))
            ], 2),
            o("span", x1, f(p.label), 1)
          ]),
          p.display ? (t(), n("span", y1, f(p.display), 1)) : w("", !0)
        ]))), 128)),
        (t(!0), n(A, null, L(d.value, (p, g) => (t(), n("li", {
          key: `extra-${g}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, f(p.key), 1),
          o("span", k1, f(p.value), 1)
        ]))), 128))
      ]),
      o("footer", $1, [
        D(de, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: v[0] || (v[0] = (p) => r("edit", e.plan.id))
        }, {
          default: j(() => [...v[2] || (v[2] = [
            N(" Edit ", -1)
          ])]),
          _: 1
        }),
        D(de, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: v[1] || (v[1] = (p) => r("delete", e.plan.id))
        }, {
          default: j(() => [...v[3] || (v[3] = [
            N(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, e1));
  }
}), C1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, S1 = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, M1 = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, B1 = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, _1 = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, Q3 = /* @__PURE__ */ O({
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
      class: z(["w-full space-y-6", e.embedded ? "" : b(qe)]),
      "data-slot": "plan-grid"
    }, [
      o("header", C1, [
        o("div", null, [
          e.title ? (t(), n("h1", S1, f(e.title), 1)) : w("", !0),
          e.description ? (t(), n("p", M1, f(e.description), 1)) : w("", !0)
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
      e.plans.length === 0 ? (t(), n("p", B1, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", _1, [
        (t(!0), n(A, null, L(e.plans, (i) => (t(), T(w1, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => a("edit", u)),
          onDelete: s[2] || (s[2] = (u) => a("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), P1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, z1 = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, A1 = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, O1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, j1 = { class: "space-y-1.5" }, V1 = { class: "space-y-1.5" }, L1 = { class: "space-y-1.5" }, T1 = { class: "space-y-1.5" }, D1 = { class: "space-y-1.5" }, E1 = { class: "flex items-center gap-3 text-sm" }, I1 = { class: "flex items-center gap-3 text-sm" }, F1 = { class: "flex items-center gap-3 text-sm" }, N1 = {
  key: 0,
  class: "space-y-1.5"
}, R1 = { class: "flex items-center gap-3 text-sm" }, U1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, H1 = { class: "space-y-1.5" }, K1 = ["value"], q1 = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, G1 = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, W1 = ["id", "value", "onInput"], Z1 = { class: "space-y-2" }, J1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Y1 = ["d"], eC = /* @__PURE__ */ O({
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
    }), r = e, s = l, i = ot(a());
    function u(m, h) {
      const $ = i.perks?.[m]?.value;
      return $ ?? h;
    }
    function d(m, h, $) {
      const P = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: h,
          overview: $ ?? P?.overview ?? ""
        }
      };
    }
    function c(m, h) {
      const $ = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: $?.value ?? (m === "modules" ? [] : 0),
          overview: h
        }
      };
    }
    function v(m) {
      const h = m ? { ...a(), ...m } : a();
      i.id = h.id, i.name = h.name, i.shortDescription = h.shortDescription ?? "", i.description = h.description ?? "", i.days = h.days, i.price = h.price, i.featured = h.featured ?? !1, i.recommended = h.recommended ?? !1, i.trial = h.trial ?? !1, i.trialDays = h.trialDays ?? 0, i.active = h.active ?? !0, i.perks = { ...h.perks ?? {} }, i.extraPerks = [...h.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    v(r.plan), me(
      () => r.plan,
      (m) => v(m),
      { deep: !0 }
    );
    const p = x({
      get: () => {
        const m = u("modules", []);
        return Array.isArray(m) ? m.map(String) : [];
      },
      set: (m) => {
        d("modules", C(m.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), g = x(
      () => r.modules.map((m) => ({ value: m.key, label: m.label }))
    );
    function C(m) {
      const h = Object.fromEntries(r.modules.map((I) => [I.key, I])), $ = new Set(m);
      for (const I of r.modules)
        if (!$.has(I.key))
          for (const E of I.children ?? [])
            $.delete(E);
      let P = !0;
      for (; P; ) {
        P = !1;
        for (const I of [...$])
          for (const E of h[I]?.requires ?? [])
            $.has(E) || ($.add(E), P = !0);
      }
      return [...$];
    }
    function y() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function k(m) {
      i.extraPerks = (i.extraPerks ?? []).filter((h, $) => $ !== m);
    }
    function M() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((m) => m.key.trim() !== "")
      });
    }
    const S = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ne}`, B = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ne}`;
    return (m, h) => (t(), n("form", {
      class: z(["w-full space-y-6", e.embedded ? "" : b(qe)]),
      "data-slot": "plan-editor",
      onSubmit: he(M, ["prevent"])
    }, [
      o("header", P1, [
        o("div", null, [
          o("h1", z1, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          h[13] || (h[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        D(de, {
          type: "button",
          variant: "outline",
          onClick: h[0] || (h[0] = ($) => s("cancel"))
        }, {
          default: j(() => [...h[14] || (h[14] = [
            N("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", A1, [
        o("section", O1, [
          h[26] || (h[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", j1, [
            D(_e, { for: "plan-name" }, {
              default: j(() => [...h[15] || (h[15] = [
                N("Plan name", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": h[1] || (h[1] = ($) => i.name = $),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", V1, [
            D(_e, { for: "plan-short" }, {
              default: j(() => [...h[16] || (h[16] = [
                N("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": h[2] || (h[2] = ($) => i.shortDescription = $),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", L1, [
            D(_e, { for: "plan-description" }, {
              default: j(() => [...h[17] || (h[17] = [
                N("Plan description", -1)
              ])]),
              _: 1
            }),
            pe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": h[3] || (h[3] = ($) => i.description = $),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: z(B)
            }, null, 512), [
              [Me, i.description]
            ])
          ]),
          o("div", T1, [
            D(_e, { for: "plan-days" }, {
              default: j(() => [...h[18] || (h[18] = [
                N("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": h[4] || (h[4] = ($) => i.days = $),
              class: z(S)
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
          o("div", D1, [
            D(_e, { for: "plan-price" }, {
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
              "onUpdate:modelValue": h[5] || (h[5] = ($) => i.price = Number($))
            }, null, 8, ["model-value"])
          ]),
          o("label", E1, [
            D(b(Ze), {
              checked: !!i.featured,
              "onUpdate:checked": h[6] || (h[6] = ($) => i.featured = $)
            }, null, 8, ["checked"]),
            h[21] || (h[21] = N(" Featured ", -1))
          ]),
          o("label", I1, [
            D(b(Ze), {
              checked: !!i.recommended,
              "onUpdate:checked": h[7] || (h[7] = ($) => i.recommended = $)
            }, null, 8, ["checked"]),
            h[22] || (h[22] = N(" Recommended ", -1))
          ]),
          o("label", F1, [
            D(b(Ze), {
              checked: !!i.trial,
              "onUpdate:checked": h[8] || (h[8] = ($) => i.trial = $)
            }, null, 8, ["checked"]),
            h[23] || (h[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", N1, [
            D(_e, { for: "plan-trial-days" }, {
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
              "onUpdate:modelValue": h[9] || (h[9] = ($) => i.trialDays = Number($))
            }, null, 8, ["model-value"])
          ])) : w("", !0),
          o("label", R1, [
            D(b(Ze), {
              checked: i.active !== !1,
              "onUpdate:checked": h[10] || (h[10] = ($) => i.active = $)
            }, null, 8, ["checked"]),
            h[25] || (h[25] = N(" Active ", -1))
          ]),
          D(de, {
            type: "submit",
            disabled: e.processing
          }, {
            default: j(() => [
              N(f(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", U1, [
          h[33] || (h[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", H1, [
            D(_e, null, {
              default: j(() => [...h[27] || (h[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Ut, {
              modelValue: p.value,
              "onUpdate:modelValue": h[11] || (h[11] = ($) => p.value = $),
              options: g.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            D(_e, { for: "plan-modules-overview" }, {
              default: j(() => [...h[28] || (h[28] = [
                N("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: z(B),
              onInput: h[12] || (h[12] = ($) => c(
                "modules",
                $.target.value
              ))
            }, null, 40, K1)
          ]),
          (t(!0), n(A, null, L(e.limits, ($) => (t(), n("div", {
            key: $.key,
            class: "space-y-1.5"
          }, [
            $.kind === "toggle" ? (t(), n("label", q1, [
              D(b(Ze), {
                checked: !!u($.key, !1),
                "onUpdate:checked": (P) => d(
                  $.key,
                  P,
                  i.perks?.[$.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              N(" " + f($.label), 1)
            ])) : (t(), n(A, { key: 1 }, [
              D(_e, {
                for: `plan-limit-${$.key}`
              }, {
                default: j(() => [
                  N(f($.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              $.hint ? (t(), n("p", G1, f($.hint), 1)) : w("", !0),
              D($e, {
                id: `plan-limit-${$.key}`,
                "model-value": Number(u($.key, 0)),
                type: "number",
                step: $.step ?? 1,
                required: "",
                "onUpdate:modelValue": (P) => d(
                  $.key,
                  Number(P),
                  i.perks?.[$.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              h[29] || (h[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            D(_e, {
              for: `plan-overview-${$.key}`
            }, {
              default: j(() => [...h[30] || (h[30] = [
                N("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${$.key}`,
              value: i.perks?.[$.key]?.overview ?? "",
              class: z(B),
              onInput: (P) => c(
                $.key,
                P.target.value
              )
            }, null, 40, W1)
          ]))), 128)),
          o("div", Z1, [
            h[32] || (h[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(A, null, L(i.extraPerks ?? [], ($, P) => (t(), n("div", {
              key: P,
              class: "flex items-center gap-2"
            }, [
              D($e, {
                modelValue: $.key,
                "onUpdate:modelValue": (I) => $.key = I,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D($e, {
                modelValue: $.value,
                "onUpdate:modelValue": (I) => $.value = I,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D(de, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (I) => k(P)
              }, {
                default: j(() => [
                  (t(), n("svg", J1, [
                    o("path", {
                      d: b(ce)("x")
                    }, null, 8, Y1)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            D(de, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: y
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
}), X1 = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Q1 = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, ex = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, tx = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ax = ["d"], nx = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, lx = ["aria-pressed"], ox = ["aria-pressed"], sx = {
  key: 0,
  class: "flex flex-col gap-2"
}, rx = ["aria-label"], ix = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, ux = ["aria-pressed", "onClick"], dx = ["aria-label"], cx = { class: "text-muted-foreground mr-1 text-xs font-medium" }, fx = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, mx = ["data-slot"], px = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, vx = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, gx = { class: "flex items-center gap-2" }, hx = ["disabled"], bx = ["disabled"], Zt = /* @__PURE__ */ O({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ De({
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
  emits: /* @__PURE__ */ De(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = rt(e, "modelValue"), u = ot({}), d = ot({});
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
      for (const [te, H] of Object.entries(d))
        E[te] = { min: c(H.min), max: c(H.max) };
      return E;
    }
    function p() {
      return { query: s.value, selected: { ...u }, ranges: v() };
    }
    function g() {
      r("filter", p());
    }
    function C(E, te) {
      u[E] = u[E] === te ? null : te, g();
    }
    function y(E) {
      return d[E] ?? { min: "", max: "" };
    }
    function k(E, te, H) {
      const K = d[E] ?? { min: "", max: "" };
      d[E] = { ...K, [te]: H }, g();
    }
    function M(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const S = x(() => a.facets.filter((E) => (E.kind ?? "chips") === "chips")), B = x(() => a.facets.filter((E) => E.kind === "range")), m = x(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), h = R(1);
    me(
      () => a.items.map((E) => E.key).join(","),
      () => {
        h.value = 1;
      }
    );
    const $ = x(() => {
      const E = a.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / E));
    }), P = x(() => {
      const E = a.pageSize;
      if (!E || E < 1)
        return a.items;
      const te = (h.value - 1) * E;
      return a.items.slice(te, te + E);
    });
    function I(E) {
      h.value = Math.min($.value, Math.max(1, E));
    }
    return (E, te) => (t(), n("div", {
      class: z(["flex flex-col gap-4", b(za)])
    }, [
      m.value ? (t(), n("div", X1, [
        o("div", Q1, [
          e.searchable ? (t(), n("div", ex, [
            (t(), n("svg", tx, [
              o("path", {
                d: b(ce)("search")
              }, null, 8, ax)
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
          ])) : w("", !0),
          U(E.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", nx, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, lx),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (H) => i.value = "list")
            }, " List ", 10, ox)
          ])) : w("", !0)
        ]),
        S.value.length || B.value.length ? (t(), n("div", sx, [
          (t(!0), n(A, null, L(S.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", ix, f(H.label), 1)) : w("", !0),
            (t(!0), n(A, null, L(H.options ?? [], (K) => (t(), n("button", {
              key: K.value,
              type: "button",
              class: z([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[H.key] === K.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[H.key] === K.value ? "true" : "false",
              onClick: (G) => C(H.key, K.value)
            }, f(K.label), 11, ux))), 128))
          ], 8, rx))), 128)),
          (t(!0), n(A, null, L(B.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", cx, f(H.label ?? H.key), 1),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": y(H.key).min,
              "onUpdate:modelValue": (K) => k(H.key, "min", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            te[7] || (te[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": y(H.key).max,
              "onUpdate:modelValue": (K) => k(H.key, "max", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, dx))), 128))
        ])) : w("", !0)
      ])) : w("", !0),
      e.items.length === 0 ? (t(), n("p", fx, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: z(
          i.value === "list" ? "flex flex-col gap-3" : b(_c)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(A, null, L(P.value, (H) => (t(), T(Jb, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: te[3] || (te[3] = (K) => r("select", K)),
          onCart: te[4] || (te[4] = (K) => r("cart", K))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, mx)),
      e.pageSize && $.value > 1 ? (t(), n("div", px, [
        o("p", vx, " Page " + f(h.value) + " of " + f($.value), 1),
        o("div", gx, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value <= 1,
            onClick: te[5] || (te[5] = (H) => I(h.value - 1))
          }, " Previous ", 8, hx),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value >= $.value,
            onClick: te[6] || (te[6] = (H) => I(h.value + 1))
          }, " Next ", 8, bx)
        ])
      ])) : w("", !0)
    ], 2));
  }
}), xx = ["aria-label"], yx = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, kx = { class: "min-w-0" }, $x = { class: "text-base font-semibold" }, wx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Cx = { class: "flex shrink-0 items-center gap-2" }, Sx = { class: "min-h-0 flex-1 overflow-y-auto" }, Mx = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Jt = /* @__PURE__ */ O({
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
      const v = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (v.length === 0)
        return;
      const p = v[0], g = v[v.length - 1];
      c.shiftKey && document.activeElement === p ? (c.preventDefault(), g.focus()) : !c.shiftKey && document.activeElement === g && (c.preventDefault(), p.focus());
    }
    return me(
      () => a.open,
      async (c) => {
        if (c) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await Ve(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), ke(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (c, v) => (t(), T(Xe, { to: "body" }, [
      D(Re, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: v[0] || (v[0] = (p) => r("close"))
          })) : w("", !0)
        ]),
        _: 1
      }),
      D(Re, {
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
            class: z(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", yx, [
              o("div", kx, [
                o("h2", $x, f(e.title), 1),
                e.description ? (t(), n("p", wx, f(e.description), 1)) : w("", !0)
              ]),
              o("div", Cx, [
                U(c.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: v[1] || (v[1] = (p) => r("close"))
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
            o("div", Sx, [
              U(c.$slots, "default")
            ]),
            c.$slots.footer ? (t(), n("footer", Mx, [
              U(c.$slots, "footer")
            ])) : w("", !0)
          ], 10, xx)) : w("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Te() {
  return { query: "", selected: {}, ranges: {} };
}
function Bx(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function _x(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function Yt(e, l) {
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
    if (!_x(Bx(e, r), s))
      return !1;
  return !0;
}
function Px(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === a || i === a;
  }) ?? null;
}
function ht(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const zx = { class: "flex flex-col gap-6 p-4" }, Ax = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Ox = { class: "text-sm font-semibold" }, jx = { class: "flex flex-wrap items-center gap-1.5" }, Vx = ["aria-pressed", "onClick"], Lx = { class: "text-sm font-semibold" }, Tx = { class: "flex flex-wrap items-center gap-1.5" }, Dx = { key: 0 }, Da = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = ot({}), u = ot({}), d = x(
      () => a.facets.filter(($) => ($.kind ?? "chips") === "chips")
    ), c = x(() => a.facets.filter(($) => $.kind === "range"));
    function v($) {
      return $ == null ? "" : String($);
    }
    function p() {
      s.value = a.applied.query ?? "";
      for (const $ of Object.keys(i))
        delete i[$];
      for (const [$, P] of Object.entries(a.applied.selected ?? {}))
        i[$] = P;
      for (const $ of Object.keys(u))
        delete u[$];
      for (const [$, P] of Object.entries(a.applied.ranges ?? {}))
        u[$] = { min: v(P.min), max: v(P.max) };
    }
    me(
      () => a.open,
      ($) => {
        $ && p();
      }
    );
    function g($) {
      const P = $.trim();
      if (P === "")
        return null;
      const I = Number(P);
      return Number.isFinite(I) ? I : null;
    }
    function C() {
      const $ = {};
      for (const [P, I] of Object.entries(u))
        $[P] = { min: g(I.min), max: g(I.max) };
      return $;
    }
    function y() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const k = x(() => {
      let $ = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const P of Object.values(i))
        P && ($ += 1);
      for (const P of Object.values(C()))
        (P.min !== null || P.max !== null) && ($ += 1);
      return $;
    });
    function M($, P) {
      i[$] = i[$] === P ? null : P;
    }
    function S($) {
      return u[$] ?? { min: "", max: "" };
    }
    function B($, P, I) {
      const E = u[$] ?? { min: "", max: "" };
      u[$] = { ...E, [P]: I };
    }
    function m() {
      r("apply", y());
    }
    function h() {
      s.value = "";
      for (const $ of Object.keys(i))
        i[$] = null;
      for (const $ of Object.keys(u))
        u[$] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Te(), query: a.applied.query } : Te()
      );
    }
    return ($, P) => (t(), T(Jt, {
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
        D(de, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (I) => r("close"))
        }, {
          default: j(() => [...P[5] || (P[5] = [
            N("Cancel", -1)
          ])]),
          _: 1
        }),
        D(de, {
          size: "sm",
          onClick: m
        }, {
          default: j(() => [
            P[6] || (P[6] = N(" Apply", -1)),
            k.value ? (t(), n("span", Dx, " (" + f(k.value) + ")", 1)) : w("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        o("div", zx, [
          e.hideSearch ? w("", !0) : (t(), n("label", Ax, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            D($e, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (I) => s.value = I),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(A, null, L(d.value, (I) => (t(), n("section", {
            key: I.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Ox, f(I.label ?? I.key), 1),
            o("div", jx, [
              (t(!0), n(A, null, L(I.options ?? [], (E) => (t(), n("button", {
                key: E.value,
                type: "button",
                class: z([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[I.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[I.key] === E.value ? "true" : "false",
                onClick: (te) => M(I.key, E.value)
              }, f(E.label), 11, Vx))), 128))
            ])
          ]))), 128)),
          (t(!0), n(A, null, L(c.value, (I) => (t(), n("section", {
            key: I.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Lx, f(I.label ?? I.key), 1),
            o("div", Tx, [
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
}), Ex = ["aria-disabled"], Ix = ["disabled"], Fx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Nx = ["d"], Rx = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Ux = ["disabled"], Hx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Kx = ["d"], qx = /* @__PURE__ */ O({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ De({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ De(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = rt(e, "modelValue"), r = l, s = x(() => a.value <= e.min), i = x(() => e.max !== null && a.value >= e.max);
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
        onClick: c[0] || (c[0] = (v) => u(-1))
      }, [
        (t(), n("svg", Fx, [
          o("path", {
            d: b(ce)("minus")
          }, null, 8, Nx)
        ]))
      ], 8, Ix),
      o("span", Rx, f(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: c[1] || (c[1] = (v) => u(1))
      }, [
        (t(), n("svg", Hx, [
          o("path", {
            d: b(ce)("plus")
          }, null, 8, Kx)
        ]))
      ], 8, Ux)
    ], 8, Ex));
  }
}), Gx = { class: "divide-border flex flex-col divide-y" }, Wx = { class: "min-w-0" }, Zx = { class: "truncate text-sm font-medium" }, Jx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Yx = { class: "flex shrink-0 items-center gap-2 text-sm" }, Xx = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Qx = {
  key: 2,
  class: "font-medium tabular-nums"
}, ey = ["aria-label", "onClick"], ty = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ay = ["d"], ny = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Gx, [
      (t(!0), n(A, null, L(e.items, (u) => (t(), n("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Wx, [
          o("p", Zx, f(u.label), 1),
          u.detail ? (t(), n("p", Jx, f(u.detail), 1)) : w("", !0)
        ]),
        o("div", Yx, [
          e.editable ? (t(), T(qx, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => a("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), n("span", Xx, " ×" + f(u.qty), 1)) : w("", !0),
          u.amount ? (t(), n("span", Qx, f(u.amount), 1)) : w("", !0),
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
            (t(), n("svg", ty, [
              o("path", {
                d: b(ce)("trash")
              }, null, 8, ay)
            ]))
          ], 8, ey)) : w("", !0)
        ])
      ]))), 128))
    ]));
  }
}), ly = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, oy = { class: "border-b px-4 py-3" }, sy = { class: "text-sm font-medium" }, ry = { class: "flex-1 px-4 py-3" }, iy = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, uy = { class: "text-foreground block font-medium" }, dy = { class: "mt-1 block" }, cy = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, fy = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, my = { class: "tabular-nums" }, py = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, vy = { class: "text-muted-foreground" }, gy = {
  key: 0,
  class: "tabular-nums"
}, hy = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, by = { class: "text-muted-foreground" }, xy = { class: "tabular-nums" }, yy = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, ky = { class: "tabular-nums" }, $y = {
  key: 4,
  class: "pt-1"
}, wy = /* @__PURE__ */ O({
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
    return (r, s) => (t(), n("aside", ly, [
      o("header", oy, [
        o("h2", sy, f(e.title), 1)
      ]),
      o("div", ry, [
        e.items.length === 0 ? (t(), n("p", iy, [
          o("span", uy, f(e.emptyTitle), 1),
          o("span", dy, f(e.emptyDescription), 1)
        ])) : (t(), T(ny, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => a("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", cy, [
        e.subtotal ? (t(), n("div", fy, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", my, f(e.subtotal), 1)
        ])) : w("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", py, [
          o("span", vy, f(e.discountLabel), 1),
          e.discount ? (t(), n("span", gy, f(e.discount), 1)) : w("", !0),
          U(r.$slots, "discount")
        ])) : w("", !0),
        e.tax ? (t(), n("div", hy, [
          o("span", by, f(e.taxLabel), 1),
          o("span", xy, f(e.tax), 1)
        ])) : w("", !0),
        e.total ? (t(), n("div", yy, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", ky, f(e.total), 1)
        ])) : w("", !0),
        r.$slots.pay ? (t(), n("div", $y, [
          U(r.$slots, "pay")
        ])) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), Cy = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Sy = { class: "flex flex-col gap-4" }, My = { class: "flex flex-wrap items-start justify-between gap-3" }, By = { class: "flex items-center gap-2" }, _y = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, tC = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ De({
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
  emits: /* @__PURE__ */ De(["select", "pay"], ["update:cart"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(Te()), i = R(!1), u = rt(e, "cart"), d = R(!1), c = x(
      () => a.items.filter((H) => Yt(H, s.value))
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
    function C(H, K, G) {
      return {
        ...H,
        qty: K,
        amount: a.formatMoney(G * K)
      };
    }
    function y(H) {
      const K = Px(a.items, H);
      K && k(K.key);
    }
    function k(H) {
      const K = a.items.find((ae) => ae.key === H);
      if (!K || K.status === "out-of-stock")
        return;
      d.value = !1;
      const G = g(K);
      if (u.value.find((ae) => ae.key === H)) {
        u.value = u.value.map(
          (ae) => ae.key === H ? C(ae, Number(ae.qty ?? 1) + 1, G) : ae
        );
        return;
      }
      u.value = [
        ...u.value,
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
      u.value = u.value.map(
        (ae) => ae.key === H ? C(ae, K, oe) : ae
      );
    }
    function S(H) {
      u.value = u.value.filter((K) => K.key !== H);
    }
    const B = x(
      () => u.value.reduce((H, K) => {
        const G = a.items.find((oe) => oe.key === K.key);
        return H + g(G) * Number(K.qty ?? 1);
      }, 0)
    ), m = x(
      () => a.discountRate > 0 ? Math.round(B.value * a.discountRate) : 0
    ), h = x(
      () => Math.round((B.value - m.value) * a.taxRate)
    ), $ = x(
      () => u.value.length ? a.formatMoney(B.value) : null
    ), P = x(
      () => u.value.length && m.value > 0 ? `−${a.formatMoney(m.value)}` : null
    ), I = x(
      () => u.value.length && a.taxRate > 0 ? a.formatMoney(h.value) : null
    ), E = x(
      () => u.value.length ? a.formatMoney(
        B.value - m.value + h.value
      ) : null
    );
    function te() {
      d.value = !0, r("pay", u.value);
    }
    return (H, K) => (t(), n(A, null, [
      o("div", Cy, [
        o("section", Sy, [
          o("div", My, [
            D(Le, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", By, [
              b(ht)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: K[0] || (K[0] = (G) => s.value = {
                  ...b(Te)(),
                  query: s.value.query
                })
              }, " Clear ")) : w("", !0),
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
                b(ht)(s.value) ? (t(), n("span", _y, " on ")) : w("", !0)
              ])) : w("", !0)
            ])
          ]),
          D(Zt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: c.value,
            onFilter: v,
            onSelect: K[2] || (K[2] = (G) => r("select", G)),
            onCart: k,
            onScan: y
          }, null, 8, ["search-placeholder", "items"])
        ]),
        D(wy, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: $.value,
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
              cart: u.value,
              paid: d.value,
              pay: te
            }, () => [
              D(de, {
                class: "w-full",
                disabled: u.value.length === 0,
                onClick: te
              }, {
                default: j(() => [
                  N(f(d.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      D(Da, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: K[3] || (K[3] = (G) => i.value = !1),
        onApply: p,
        onReset: K[4] || (K[4] = (G) => s.value = { ...b(Te)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Py = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, zy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Ay = ["src", "alt"], Oy = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, jy = ["src"], Vy = { class: "flex items-start justify-between gap-3" }, Ly = { class: "text-lg font-semibold tabular-nums" }, Ty = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Dy = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Ey = { class: "grid grid-cols-2 gap-3" }, Iy = { class: "flex flex-col gap-2" }, Fy = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, aC = /* @__PURE__ */ O({
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
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((y, k) => ({
        label: y,
        value: Math.max(0, Math.round(p + Math.sin(k + g) * p * 0.18))
      }));
    }
    const u = x(() => a.item?.kind === "unit"), d = x(() => {
      const p = a.item;
      if (!p)
        return [];
      const g = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(g) || 12, s(p.key) % 7);
    }), c = x(() => {
      const p = a.item;
      if (!p)
        return [];
      const g = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(g) || 20, s(p.key) % 5 + 1);
    }), v = x(
      () => !!a.item && !u.value && a.item?.status !== "out-of-stock"
    );
    return (p, g) => (t(), T(Jt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: g[1] || (g[1] = (C) => r("close"))
    }, lt({
      default: j(() => [
        e.item ? (t(), n("div", Py, [
          o("div", zy, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Ay)) : w("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", Oy, [
            (t(!0), n(A, null, L(e.item.images, (C, y) => (t(), n("img", {
              key: y,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, jy))), 128))
          ])) : w("", !0),
          o("div", Vy, [
            o("div", null, [
              o("p", Ly, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", Ty, f(e.item.stock) + " in stock ", 1)) : w("", !0)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", Dy, f(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("div", Ey, [
            D(gt, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? c.value : d.value
            }, null, 8, ["label", "value", "series"]),
            D(gt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", Iy, [
            o("p", Fy, f(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(yt, {
              data: u.value ? c.value : d.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : w("", !0)
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
}), Ny = { class: "flex flex-col gap-10" }, Ry = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Uy = { class: "flex flex-col gap-3" }, Hy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Ky = ["src", "alt"], qy = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Gy = ["aria-label", "aria-pressed", "onClick"], Wy = ["src"], Zy = { class: "flex flex-col gap-5" }, Jy = { class: "flex flex-wrap items-start justify-between gap-3" }, Yy = { class: "min-w-0" }, Xy = { class: "text-2xl font-semibold tracking-tight" }, Qy = { class: "text-muted-foreground mt-1 text-sm" }, e0 = { class: "text-2xl font-semibold tabular-nums" }, t0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, a0 = { class: "grid grid-cols-2 gap-3 text-sm" }, n0 = {
  key: 0,
  class: "rounded-lg border p-3"
}, l0 = { class: "mt-1 font-medium" }, o0 = { class: "rounded-lg border p-3" }, s0 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, r0 = { class: "mt-1 font-medium" }, i0 = { class: "flex flex-col gap-4" }, u0 = { class: "grid gap-4 sm:grid-cols-2" }, d0 = { class: "bg-card rounded-lg border p-4" }, c0 = { class: "mb-3 text-sm font-medium" }, f0 = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(y) {
      let k = 0;
      for (const M of y)
        k = k * 31 + M.charCodeAt(0) >>> 0;
      return k;
    }
    function i(y, k) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((S, B) => ({
        label: S,
        value: Math.max(0, Math.round(y + Math.sin(B + k) * y * 0.18))
      }));
    }
    const u = x(() => a.item.kind === "unit"), d = x(() => {
      const y = [a.item.image, ...a.item.images ?? []].filter(
        (k) => typeof k == "string" && k !== ""
      );
      return [...new Set(y)];
    }), c = R(0), v = x(() => {
      const y = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(y) || 12, s(a.item.key) % 7);
    }), p = x(() => {
      const y = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(y) || 20, s(a.item.key) % 5 + 1);
    }), g = x(() => u.value ? p.value : v.value), C = x(() => !u.value && a.item.status !== "out-of-stock");
    return (y, k) => (t(), n("div", Ny, [
      o("div", Ry, [
        o("div", Uy, [
          o("div", Hy, [
            d.value[c.value] ? (t(), n("img", {
              key: 0,
              src: d.value[c.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Ky)) : w("", !0)
          ]),
          d.value.length > 1 ? (t(), n("div", qy, [
            (t(!0), n(A, null, L(d.value, (M, S) => (t(), n("button", {
              key: M,
              type: "button",
              class: z(["size-16 shrink-0 overflow-hidden rounded-md border", S === c.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${S + 1}`,
              "aria-pressed": S === c.value ? "true" : "false",
              onClick: (B) => c.value = S
            }, [
              o("img", {
                src: M,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, Wy)
            ], 10, Gy))), 128))
          ])) : w("", !0)
        ]),
        o("div", Zy, [
          o("div", Jy, [
            o("div", Yy, [
              o("h1", Xy, f(e.item.label), 1),
              o("p", Qy, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          o("p", e0, f(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", t0, f(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("dl", a0, [
            e.item.sku ? (t(), n("div", n0, [
              k[1] || (k[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", l0, f(e.item.sku), 1)
            ])) : w("", !0),
            o("div", o0, [
              o("dt", s0, f(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", r0, f(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          C.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: k[0] || (k[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")) : w("", !0)
        ])
      ]),
      o("section", i0, [
        k[2] || (k[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", u0, [
          D(gt, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: g.value
          }, null, 8, ["label", "value", "series"]),
          D(gt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: v.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", d0, [
          o("p", c0, f(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(Ev, {
            data: g.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), m0 = ["href"], nC = /* @__PURE__ */ O({
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
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(qe)])
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
      ], 8, m0),
      D(f0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), p0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, v0 = ["aria-selected", "onClick"], g0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, h0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, b0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, x0 = ["aria-pressed"], y0 = ["aria-pressed"], lC = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ De({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ De(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(a.tabs[0]?.key ?? ""), i = rt(e, "layout"), u = R({}), d = R(!1);
    me(
      () => a.tabs.map((M) => M.key).join(","),
      (M) => {
        M.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function c(M) {
      return u.value[M] ?? Te();
    }
    const v = x(
      () => a.tabs.find((M) => M.key === s.value) ?? a.tabs[0] ?? null
    ), p = x(
      () => v.value ? c(v.value.key) : Te()
    ), g = x(() => {
      const M = v.value;
      return M ? M.items.filter((S) => Yt(S, c(M.key))) : [];
    });
    function C(M) {
      const S = v.value?.key;
      S && (u.value = {
        ...u.value,
        [S]: { ...c(S), query: M }
      });
    }
    function y() {
      const M = v.value?.key;
      M && (u.value = { ...u.value, [M]: Te() });
    }
    function k(M) {
      const S = v.value?.key;
      S && (u.value = { ...u.value, [S]: M }, d.value = !1);
    }
    return (M, S) => (t(), n(A, null, [
      o("div", {
        class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(qe)])
      }, [
        D(Le, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", p0, [
          (t(!0), n(A, null, L(e.tabs, (B) => (t(), n("button", {
            key: B.key,
            type: "button",
            class: z([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === B.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === B.key ? "true" : "false",
            onClick: (m) => s.value = B.key
          }, f(B.label), 11, v0))), 128))
        ])) : w("", !0),
        o("div", g0, [
          D($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: v.value?.searchPlaceholder ?? "Search…",
            "aria-label": v.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": S[0] || (S[0] = (B) => C(String(B)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          b(ht)(p.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: y
          }, " Clear ")) : w("", !0),
          (v.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: S[1] || (S[1] = (B) => d.value = !0)
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
            b(ht)(p.value) ? (t(), n("span", h0, " on ")) : w("", !0)
          ])) : w("", !0),
          o("div", b0, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: S[2] || (S[2] = (B) => i.value = "grid")
            }, " Tiles ", 10, x0),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: S[3] || (S[3] = (B) => i.value = "list")
            }, " List ", 10, y0)
          ])
        ]),
        D(Zt, {
          layout: i.value,
          "onUpdate:layout": S[4] || (S[4] = (B) => i.value = B),
          "page-size": e.pageSize,
          items: g.value,
          onSelect: S[5] || (S[5] = (B) => r("select", B)),
          onCart: S[6] || (S[6] = (B) => r("cart", B))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(Da, {
        open: d.value,
        title: v.value?.filterTitle ?? "Filters",
        "search-placeholder": v.value?.searchPlaceholder ?? "Search…",
        facets: v.value?.facets ?? [],
        applied: p.value,
        onClose: S[7] || (S[7] = (B) => d.value = !1),
        onApply: k,
        onReset: y
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), k0 = { class: "flex flex-col gap-4" }, $0 = { class: "flex flex-col gap-4" }, oC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Te()), i = x(
      () => a.cards.filter((u) => Yt(u, s.value))
    );
    return (u, d) => (t(), n("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : b(qe)])
    }, [
      D(Le, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", k0, [
        D(Le, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(Zt, {
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
      o("section", $0, [
        D(Le, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(Ul, {
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
}), w0 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, C0 = { class: "text-sm font-medium" }, S0 = ["width", "height", "aria-label"], M0 = { class: "flex items-center gap-2" }, B0 = /* @__PURE__ */ O({
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
      a.disabled || (i.value = !0, u = c(M), s.value?.setPointerCapture(M.pointerId));
    }
    function p(M) {
      if (!i.value || a.disabled)
        return;
      const S = d(), B = c(M);
      !S || !B || !u || (S.strokeStyle = "#111827", S.lineWidth = 2.4, S.lineCap = "round", S.lineJoin = "round", S.beginPath(), S.moveTo(u.x, u.y), S.lineTo(B.x, B.y), S.stroke(), u = B);
    }
    function g() {
      i.value = !1, u = null;
    }
    function C() {
      const M = s.value, S = d();
      !M || !S || (S.clearRect(0, 0, M.width, M.height), r("clear"));
    }
    function y() {
      const M = s.value;
      M && r("save", M.toDataURL("image/png"));
    }
    function k() {
      const M = s.value, S = d();
      !M || !S || (S.fillStyle = "#ffffff", S.fillRect(0, 0, M.width, M.height));
    }
    return ge(k), ke(() => {
      i.value = !1;
    }), (M, S) => (t(), n("div", w0, [
      o("p", C0, f(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: z(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(v, ["prevent"]),
        onPointermove: he(p, ["prevent"]),
        onPointerup: he(g, ["prevent"]),
        onPointerleave: he(g, ["prevent"])
      }, null, 42, S0),
      o("div", M0, [
        D(de, {
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
        D(de, {
          size: "sm",
          disabled: e.disabled,
          onClick: y
        }, {
          default: j(() => [...S[1] || (S[1] = [
            N("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), _0 = { class: "grid gap-8 lg:grid-cols-2" }, P0 = { class: "flex flex-col gap-3" }, z0 = { class: "text-muted-foreground text-xs font-normal" }, A0 = {
  key: 0,
  class: "flex flex-col gap-3"
}, O0 = { class: "flex flex-wrap gap-3" }, j0 = ["onClick"], V0 = ["src", "alt"], L0 = {
  key: 1,
  class: "flex flex-col gap-3"
}, T0 = { class: "flex flex-wrap gap-3" }, D0 = ["onClick"], E0 = ["src", "alt"], I0 = {
  key: 2,
  class: "flex flex-col gap-4"
}, F0 = { class: "flex flex-wrap items-center gap-2" }, N0 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, R0 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, U0 = { class: "flex flex-col gap-2" }, H0 = ["src"], K0 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, q0 = ["src"], sC = /* @__PURE__ */ O({
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
    function c(M) {
      try {
        const S = localStorage.getItem(M), B = S ? JSON.parse(S) : [];
        return Array.isArray(B) ? B : [];
      } catch {
        return [];
      }
    }
    ge(() => {
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
      await Lc(M), S(40);
      const B = await new Promise((m, h) => {
        const $ = new FileReader();
        $.onload = () => m(String($.result)), $.onerror = () => h(new Error("Could not read the file")), $.readAsDataURL(M);
      });
      return S(100), { value: B, name: M.name, size: M.size, url: B };
    }
    function g() {
      const M = u.value?.url ?? u.value?.value;
      if (!M)
        return;
      const S = {
        id: `stamp-${Date.now()}`,
        name: u.value?.name ?? "Stamp",
        dataUrl: M
      };
      r.value = [S, ...r.value].slice(0, 8), i.value = S.id;
    }
    const C = x(
      () => a.value.find((M) => M.id === s.value)?.dataUrl ?? null
    ), y = x(
      () => r.value.find((M) => M.id === i.value)?.dataUrl ?? null
    ), k = x(() => {
      const M = l.documents.find((B) => B.key === d.value)?.document ?? l.documents[0]?.document ?? {}, S = {
        ...M?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...M,
        branding: S
      };
    });
    return (M, S) => (t(), n("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : b(qe)])
    }, [
      D(Le, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", _0, [
        D(B0, {
          label: "Draw a signature",
          onSave: v
        }),
        o("div", P0, [
          S[2] || (S[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", z0, f(b(Aa)), 1),
          D(Ca, {
            modelValue: u.value,
            "onUpdate:modelValue": S[0] || (S[0] = (B) => u.value = B),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          D(de, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: g
          }, {
            default: j(() => [...S[1] || (S[1] = [
              N(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", A0, [
        D(Le, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", O0, [
          (t(!0), n(A, null, L(a.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: z(["rounded-md border p-2", B.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => s.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, V0)
          ], 10, j0))), 128))
        ])
      ])) : w("", !0),
      r.value.length ? (t(), n("section", L0, [
        D(Le, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", T0, [
          (t(!0), n(A, null, L(r.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: z(["rounded-md border p-2", B.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => i.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, E0)
          ], 10, D0))), 128))
        ])
      ])) : w("", !0),
      e.documents.length ? (t(), n("section", I0, [
        o("div", F0, [
          (t(!0), n(A, null, L(e.documents, (B) => (t(), T(de, {
            key: B.key,
            size: "sm",
            variant: d.value === B.key ? "default" : "outline",
            onClick: (m) => d.value = B.key
          }, {
            default: j(() => [
              N(f(B.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", N0, [
          D(Yp, {
            document: k.value
          }, null, 8, ["document"]),
          o("div", R0, [
            o("div", U0, [
              S[3] || (S[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), n("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, H0)) : (t(), n("p", K0, "Draw and save a signature"))
            ]),
            y.value ? (t(), n("img", {
              key: 0,
              src: y.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, q0)) : w("", !0)
          ])
        ])
      ])) : w("", !0)
    ], 2));
  }
}), rC = "panel.dashboard.hiddenWidgets", G0 = /* @__PURE__ */ Symbol("dashboardHide"), W0 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, iC = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = mt(G0, null), r = R(
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
    const i = x(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? w("", !0) : (t(), n("div", W0, [
      D(Fh, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (c) => r.value = c),
        onHide: d[1] || (d[1] = (c) => b(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Z0 = { class: "flex flex-col gap-3" }, J0 = ["data-slot"], Y0 = ["aria-pressed", "aria-label", "title"], X0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Q0 = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, ek = { class: "flex h-8 items-center" }, tk = ["aria-label", "title", "onClick"], ak = ["aria-label", "title", "onClick"], nk = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, lk = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, uC = /* @__PURE__ */ O({
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
    function u(m) {
      return a.maskable && (m.sensitive ?? !0);
    }
    function d(m) {
      return u(m) && !s.value && !i.value.has(m.key);
    }
    const c = x(() => a.segments.some(d)), v = x(() => a.segments.some(u)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, g = x(() => p[a.columns] ?? p[4]), C = x(() => {
      const m = a.columns ?? 4, h = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(0, h);
    }), y = x(() => {
      const m = a.columns ?? 4, h = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(h);
    }), k = x(() => {
      const m = [];
      return C.value.length > 0 && m.push({ key: "packed", joined: !0, segments: C.value }), y.value.length > 0 && m.push({ key: "leftover", joined: !1, segments: y.value }), m;
    });
    function M() {
      const m = c.value === !1;
      s.value = !m, i.value = /* @__PURE__ */ new Set(), r("toggle", m);
    }
    function S(m) {
      if (!u(m))
        return;
      const h = new Set(i.value);
      if (d(m))
        h.add(m.key);
      else if (h.delete(m.key), s.value) {
        s.value = !1;
        for (const $ of a.segments)
          $.key !== m.key && u($) && h.add($.key);
      }
      i.value = h, r("toggle", c.value);
    }
    function B(m) {
      return typeof m == "number" ? new Intl.NumberFormat().format(m) : m;
    }
    return (m, h) => (t(), n("div", Z0, [
      (t(!0), n(A, null, L(k.value, ($) => (t(), n("div", {
        key: $.key,
        class: z(["relative shrink-0", $.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": $.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && v.value && $.key === k.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": c.value,
          "aria-label": c.value ? "Show all values" : "Hide all values",
          title: c.value ? "Show all values" : "Hide all values",
          onClick: M
        }, [
          (t(), n("svg", X0, [
            c.value ? (t(), n(A, { key: 0 }, [
              h[0] || (h[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              h[1] || (h[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              h[2] || (h[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              h[3] || (h[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(A, { key: 1 }, [
              h[4] || (h[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              h[5] || (h[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Y0)) : w("", !0),
        o("div", {
          class: z(["grid", [$.joined ? "gap-px" : "gap-3", g.value]])
        }, [
          (t(!0), n(A, null, L($.segments, (P) => (t(), n("div", {
            key: P.key,
            class: z(["bg-card flex flex-col gap-2 p-4", $.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", Q0, f(P.label), 1),
            o("div", ek, [
              e.loading ? (t(), T(Pe, {
                key: 0,
                variant: "number"
              })) : d(P) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (I) => S(P)
              }, [
                (t(), n(A, null, L(5, (I) => o("span", {
                  key: I,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, tk)) : u(P) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${B(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (I) => S(P)
              }, f(B(P.value)), 9, ak)) : (t(), n("span", nk, f(B(P.value)), 1)),
              P.trend && !e.loading && !d(P) ? (t(), T(Ta, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : w("", !0)
            ]),
            P.sparkline?.length && !e.loading && !d(P) ? (t(), T(yt, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : w("", !0),
            P.caption || P.comparison && P.trend ? (t(), n("p", lk, f(P.caption ?? P.comparison), 1)) : w("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, J0))), 128))
    ]));
  }
}), ok = ["aria-label"], sk = ["aria-valuenow", "aria-label"], rk = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, ik = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, uk = ["title"], dk = { class: "font-medium" }, ck = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, fk = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, mk = { class: "flex items-center justify-between gap-2" }, pk = { class: "text-sm font-semibold" }, vk = { class: "flex items-center gap-3" }, gk = ["href"], hk = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, bk = { class: "flex min-w-0 flex-col gap-0.5" }, xk = { class: "text-sm font-medium" }, yk = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, kk = {
  key: 1,
  class: "flex flex-col gap-2"
}, $k = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, wk = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Ck = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, dC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => a.items.find((k) => !k.done) ?? null), i = x(() => a.items.filter((k) => k.key !== s.value?.key)), u = x(() => a.items.length), d = x(() => a.items.filter((k) => k.done).length), c = x(() => {
      if (!s.value)
        return u.value;
      const k = a.items.findIndex((M) => M.key === s.value?.key);
      return k >= 0 ? k + 1 : 1;
    }), v = x(
      () => u.value > 0 ? Math.round(d.value / u.value * 100) : 0
    ), p = x(() => {
      const k = a.linkComponent;
      return typeof k == "string" ? k : ma(k);
    }), g = nt({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = nt({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), y = nt({
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
      ], 8, sk),
      o("div", rk, [
        o("span", ik, " Step " + f(c.value) + " of " + f(u.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", dk, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", ck, f(": " + s.value.detail), 1)) : w("", !0)
        ], 8, uk),
        s.value?.href ? (t(), T(Be(p.value), {
          key: 0,
          href: s.value.href,
          class: z(b(C))
        }, {
          default: j(() => [
            N(f(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : w("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: M[0] || (M[0] = (S) => r("skip"))
        }, f(e.skipLabel), 1)) : w("", !0)
      ])
    ], 8, ok)) : e.items.length ? (t(), n("section", fk, [
      o("div", mk, [
        o("h2", pk, f(e.heading), 1),
        o("div", vk, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: M[1] || (M[1] = (S) => r("skip"))
          }, f(e.skipLabel), 1)) : w("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, gk)) : w("", !0)
        ])
      ]),
      s.value ? (t(), n("div", hk, [
        M[2] || (M[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", bk, [
          o("p", xk, f(s.value.title), 1),
          s.value.detail ? (t(), n("p", yk, f(s.value.detail), 1)) : w("", !0),
          s.value.href ? (t(), T(Be(p.value), {
            key: 1,
            href: s.value.href,
            class: z(b(g))
          }, {
            default: j(() => [
              N(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : w("", !0)
        ])
      ])) : w("", !0),
      i.value.length ? (t(), n("ul", kk, [
        (t(!0), n(A, null, L(i.value, (S) => (t(), n("li", {
          key: S.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: z([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              S.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            S.done ? (t(), n("svg", $k, [...M[3] || (M[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : w("", !0)
          ], 2),
          o("div", wk, [
            o("p", {
              class: z(["text-sm", S.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(S.title), 3),
            !S.done && S.detail ? (t(), n("p", Ck, f(S.detail), 1)) : w("", !0)
          ]),
          !S.done && S.href ? (t(), T(Be(p.value), {
            key: 0,
            href: S.href,
            class: z(b(y))
          }, {
            default: j(() => [
              N(f(S.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : w("", !0)
        ]))), 128))
      ])) : w("", !0)
    ])) : w("", !0);
  }
}), Sk = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, Mk = { class: "hidden items-center gap-2 md:flex" }, Bk = { class: "md:hidden" }, _k = { class: "border-b px-4 py-3" }, Pk = { class: "text-muted-foreground text-xs font-normal" }, zk = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, Ak = { class: "font-medium tabular-nums" }, Ok = { class: "ml-auto flex items-center gap-3" }, cC = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = R(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, u) => (t(), n("div", Sk, [
      o("div", Mk, [
        U(i.$slots, "actions")
      ]),
      o("div", Bk, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: u[0] || (u[0] = (d) => r.value = !0)
        }, " Actions "),
        D(Ht, {
          open: r.value,
          "onUpdate:open": u[1] || (u[1] = (d) => r.value = d)
        }, {
          default: j(() => [
            D(Kt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", _k, [
                  u[4] || (u[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", Pk, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", zk, [
                  U(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", Ak, [
        e.allMatching ? (t(), n(A, { key: 0 }, [
          N(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(A, { key: 1 }, [
          N(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", Ok, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: u[2] || (u[2] = (d) => a("select-all-matching"))
        }, " Select all " + f(s(e.total)), 1)) : w("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: u[3] || (u[3] = (d) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), jk = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Vk = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Lk = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Tk = ["value"], Dk = ["value"], Ek = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Ik = ["disabled"], Fk = ["disabled"], Nk = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Rk = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Uk = ["disabled"], fC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = (c) => new Intl.NumberFormat().format(c), i = x(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), u = x(() => (a.page - 1) * a.perPage + a.rowsOnPage), d = x(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (c, v) => (t(), n("div", jk, [
      o("p", Vk, [
        N(" Showing " + f(s(i.value)) + "-" + f(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(A, { key: 0 }, [
          N("of " + f(s(e.total)), 1)
        ], 64)) : w("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", Lk, [
        v[4] || (v[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: v[0] || (v[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(A, null, L(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, f(p), 9, Dk))), 128))
        ], 40, Tk)
      ])) : w("", !0),
      o("nav", Ek, [
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
        ])], 8, Ik),
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
        ])], 8, Fk),
        o("span", Nk, f(e.page), 1),
        d.value !== null ? (t(), n("span", Rk, " of " + f(s(d.value)), 1)) : w("", !0),
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
        ])], 8, Uk)
      ])
    ]));
  }
}), Hk = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Kk = ["aria-current"], qk = ["title"], Gk = ["aria-current", "onClick"], Wk = ["title"], Zk = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Hk, [
      o("button", {
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => a("select", null))
      }, [
        i[1] || (i[1] = N(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, qk)) : (t(), T(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Kk),
      (t(!0), n(A, null, L(e.tabs, (u) => (t(), n("button", {
        key: u,
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => a("select", u)
      }, [
        N(f(u) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, f(r(e.counts[u] ?? 0)), 11, Wk)) : (t(), T(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Gk))), 128))
    ]));
  }
}), mC = /* @__PURE__ */ bt(Zk, [["__scopeId", "data-v-3967c945"]]), Jk = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Yk = { class: "grid gap-2" }, Xk = {
  key: 0,
  class: "text-destructive text-sm"
}, Qk = { class: "flex gap-2" }, pC = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = R((() => {
      const C = navigator.userAgent, y = [
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
      return [y, k].filter(Boolean).join(" on ") || "";
    })()), i = R(!1), u = Za(null), d = x(() => u.value?.isLoading.value ?? !1), c = x(() => u.value?.error.value ?? null), v = x(() => u.value?.isSupported.value ?? !1);
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
    }, g = () => {
      i.value = !1, s.value = "";
    };
    return (C, y) => v.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", Yk, [
        y[3] || (y[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        pe(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": y[1] || (y[1] = (k) => s.value = k),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [Me, s.value]
        ]),
        y[4] || (y[4] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " A name helps you identify this passkey later. ", -1))
      ]),
      c.value ? (t(), n("p", Xk, f(c.value), 1)) : w("", !0),
      o("div", Qk, [
        D(de, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: j(() => [
            N(f(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        D(de, {
          type: "button",
          variant: "ghost",
          onClick: g
        }, {
          default: j(() => [...y[5] || (y[5] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(de, {
      key: 1,
      variant: "outline",
      onClick: y[0] || (y[0] = (k) => i.value = !0)
    }, {
      default: j(() => [...y[2] || (y[2] = [
        N(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", Jk, " Passkeys are not supported in this browser. "));
  }
}), e2 = { class: "pk-form-stack" }, t2 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, vC = /* @__PURE__ */ O({
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
    _t("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), _t("panelCreateOption", {
      run(c, v) {
        return a.createOption ? a.createOption(c, v) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = x(() => a.nodes.length > 0), i = x(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = x(() => a.errors._conflict);
    function d(c) {
      if (a.upload)
        return (v, p) => a.upload(c, v, p);
    }
    return (c, v) => (t(), n("div", e2, [
      u.value ? (t(), n("p", t2, f(u.value), 1)) : w("", !0),
      s.value ? (t(!0), n(A, { key: 1 }, L(e.nodes, (p, g) => (t(), T(Sa, {
        key: g,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: v[0] || (v[0] = (C, y) => r("change", C, y)),
        onAffixAction: v[1] || (v[1] = (C, y) => r("affix-action", C, y))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(A, null, L(e.fields, (p) => (t(), T(Ye, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (g) => e.searchOptions(p.key, g) : void 0,
          upload: d(p.key),
          discard: e.discard,
          class: z(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (g) => r("change", p.key, g),
          onAffixAction: (g) => r("affix-action", p.key, g)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), a2 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, n2 = { class: "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10" }, l2 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, o2 = ["disabled"], s2 = ["disabled"], r2 = ["disabled"], gC = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Xe, { to: "body" }, [
      D(Re, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: j(() => [
          e.show ? (t(), n("div", a2, [
            o("div", n2, [
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
              o("span", l2, f(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, f(e.discardLabel), 9, o2)) : w("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, f(e.cancelLabel), 9, s2),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, r2)
            ])
          ])) : w("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function hC(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = R(Bt(e.value)), s = x(() => Bt(e.value) !== r.value);
  function i() {
    r.value = Bt(e.value);
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
function Bt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const i2 = {
  key: 0,
  class: "flex flex-col gap-1"
}, u2 = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, d2 = { class: "text-foreground text-sm font-medium" }, c2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, f2 = {
  key: 5,
  class: "max-w-full font-normal"
}, m2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, p2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, v2 = {
  key: 6,
  class: "font-normal"
}, g2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, h2 = { class: "text-muted-foreground truncate font-medium" }, b2 = { class: "text-foreground col-span-2 break-words" }, x2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, y2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, k2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, $2 = ["href"], w2 = { class: "flex min-w-0 items-start gap-2.5" }, C2 = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, S2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, M2 = ["d"], B2 = { class: "min-w-0" }, _2 = { class: "flex flex-wrap items-center gap-2" }, P2 = { class: "text-sm font-semibold" }, z2 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, A2 = ["onClick"], bC = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), u = x(() => a.depth === 0), d = x(() => {
      const y = a.node.columns ?? (a.node.component === "section" ? 2 : 1);
      return y >= 3 ? "sm:grid-cols-3" : y === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), c = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, v = x(() => a.node.key ? a.record[a.node.key] : null), p = x(() => {
      const y = v.value;
      return y == null || y === "";
    }), g = x(() => {
      if (p.value)
        return "None";
      const y = v.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(y)).toLocaleDateString(void 0, c[a.node.type]);
      let k = String(y);
      return a.node.transform === "upper" && (k = k.toUpperCase()), a.node.transform === "lower" && (k = k.toLowerCase()), [a.node.prefix, k, a.node.suffix].filter(Boolean).join(" ");
    }), C = x(() => {
      const y = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), k = a.node.colors?.[y] ?? a.node.defaultColor ?? "neutral";
      return qt[k] ?? "outline";
    });
    return (y, k) => {
      const M = Dt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", i2, [
        o("dt", u2, f(e.node.label), 1),
        o("dd", d2, [
          e.node.type === "badge" && b(Qu)(v.value) ? (t(), T(Ke, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: j(() => [
              N(f(v.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", c2, "None")) : e.node.type === "icon" ? (t(), T(Bu, {
            key: 2,
            value: v.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(Ou, {
            key: 3,
            src: v.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Du, {
            key: 4,
            value: typeof v.value == "string" ? v.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", f2, [
            e.node.language ? (t(), n("p", m2, f(e.node.language), 1)) : w("", !0),
            o("pre", p2, [
              o("code", null, f(v.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", v2, [
            v.value && typeof v.value == "object" && !Array.isArray(v.value) && Object.keys(v.value).length ? (t(), n("dl", g2, [
              (t(!0), n(A, null, L(v.value, (S, B) => (t(), n("div", {
                key: B,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", h2, f(B), 1),
                o("dd", b2, f(S), 1)
              ]))), 128))
            ])) : (t(), n("span", x2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", y2, [
            (t(!0), n(A, null, L(Array.isArray(v.value) ? v.value : [], (S, B) => (t(), n("div", {
              key: B,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(A, null, L(e.node.entries ?? [], (m, h) => (t(), T(M, {
                key: h,
                node: m,
                record: S,
                depth: e.depth + 1,
                onAction: k[0] || (k[0] = ($) => r("action", $))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(v.value) || v.value.length === 0 ? (t(), n("span", k2, "None")) : w("", !0)
          ])) : e.node.url && !p.value ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(g.value), 9, $2)) : (t(), n("span", {
            key: 9,
            class: z([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, f(g.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: k[1] || (k[1] = (S) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : w("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: z(u.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: z(["flex items-start justify-between gap-3", [
            u.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: k[2] || (k[2] = (S) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", w2, [
            e.node.icon ? (t(), n("div", C2, [
              (t(), n("svg", S2, [
                o("path", {
                  d: b(ce)(e.node.icon)
                }, null, 8, M2)
              ]))
            ])) : w("", !0),
            o("div", B2, [
              o("div", _2, [
                o("h3", P2, f(e.node.label), 1),
                e.node.status ? (t(), T(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : w("", !0)
              ]),
              e.node.description ? (t(), n("p", z2, f(e.node.description), 1)) : w("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: z(["grid grid-cols-1 gap-x-6 gap-y-4", [d.value, u.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], (S, B) => (t(), T(M, {
            key: B,
            node: S,
            record: e.record,
            depth: e.depth + 1,
            onAction: k[3] || (k[3] = (m) => r("action", m))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: z(["grid grid-cols-1 gap-x-6 gap-y-4", d.value])
      }, [
        (t(!0), n(A, null, L(e.node.children ?? [], (S, B) => (t(), T(M, {
          key: B,
          node: S,
          record: e.record,
          depth: e.depth + 1,
          onAction: k[4] || (k[4] = (m) => r("action", m))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: z(u.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], (S, B) => (t(), n("button", {
            key: B,
            type: "button",
            class: z([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === B ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (m) => i.value = B
          }, f(S.label), 11, A2))), 128))
        ], 2),
        (t(!0), n(A, null, L(e.node.children ?? [], (S, B) => pe((t(), n("div", {
          key: B,
          class: z(["flex flex-col gap-5", u.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(A, null, L(S.children ?? [], (m, h) => (t(), T(M, {
            key: h,
            node: m,
            record: e.record,
            depth: e.depth + 1,
            onAction: k[5] || (k[5] = ($) => r("action", $))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ue, i.value === B]
        ])), 128))
      ], 2)) : w("", !0);
    };
  }
}), O2 = { class: "text-muted-foreground text-sm font-normal" }, j2 = { class: "flex items-start gap-3" }, V2 = { class: "min-w-0 flex-1" }, L2 = { class: "flex flex-wrap items-center gap-2" }, T2 = { class: "truncate text-sm font-medium" }, D2 = { class: "text-muted-foreground mt-0.5 text-xs" }, E2 = { class: "text-muted-foreground text-xs font-normal" }, I2 = { class: "mt-auto flex items-center gap-2" }, F2 = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), n("div", {
      class: z(["flex flex-col gap-4", b(za)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", O2, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: z(b(Bc))
      }, [
        (t(!0), n(A, null, L(e.gateways, (d) => (t(), n("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", j2, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: d.color }),
              "aria-hidden": "true"
            }, f(d.mark), 5),
            o("div", V2, [
              o("div", L2, [
                o("h3", T2, f(d.label), 1),
                D(we, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: j(() => [
                    N(f(d.connected ? "Connected" : "Not connected"), 1)
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
                    N(f(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : w("", !0)
              ]),
              o("p", D2, f(d.caption), 1)
            ])
          ]),
          o("p", E2, f(d.methods.join(" · ")), 1),
          o("div", I2, [
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
                N(f(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), N2 = { class: "flex flex-col gap-6" }, R2 = { class: "relative" }, U2 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, H2 = ["d"], K2 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, q2 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, G2 = { class: "flex flex-wrap items-center gap-2" }, W2 = { class: "text-muted-foreground text-sm font-normal" }, Z2 = { class: "flex flex-col gap-1 text-sm" }, J2 = ["value"], Y2 = {
  key: 0,
  class: "flex flex-col gap-2"
}, X2 = { class: "flex flex-wrap items-center gap-2" }, Q2 = {
  key: 1,
  class: "flex items-center gap-2"
}, xC = /* @__PURE__ */ O({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ De({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const l = rt(e, "gateways"), a = R(null), r = R(""), s = x(
      () => l.value.find((y) => y.key === a.value) ?? null
    ), i = x(() => {
      const y = r.value.trim().toLowerCase();
      return y === "" ? l.value : l.value.filter((k) => [k.key, k.label, k.caption, ...k.methods].join(" ").toLowerCase().includes(y));
    });
    function u(y) {
      return y.connected && y.enabled !== !1;
    }
    function d(y, k) {
      l.value = l.value.map(
        (M) => M.key === y ? { ...M, ...k } : M
      );
    }
    function c(y) {
      a.value = y;
    }
    function v(y) {
      const k = l.value.find((S) => S.key === y);
      if (!k)
        return;
      const M = !k.connected;
      d(y, {
        connected: M,
        mode: M ? k.mode ?? "test" : null,
        enabled: M,
        isDefault: !1
      });
    }
    function p(y, k) {
      const M = l.value.find((S) => S.key === y);
      M?.connected && d(y, { enabled: k, isDefault: k ? M.isDefault : !1 });
    }
    function g(y) {
      const k = l.value.find((M) => M.key === y);
      !k || !u(k) || (l.value = l.value.map((M) => ({
        ...M,
        isDefault: M.key === y
      })));
    }
    function C(y) {
      const k = a.value;
      !k || !l.value.find((S) => S.key === k)?.connected || d(k, { mode: y });
    }
    return (y, k) => (t(), n(A, null, [
      o("div", N2, [
        D(Le, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", R2, [
          (t(), n("svg", U2, [
            o("path", {
              d: b(ce)("search")
            }, null, 8, H2)
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
        i.value.length > 0 ? (t(), T(F2, {
          key: 0,
          gateways: i.value,
          onConfigure: c,
          onToggle: v
        }, null, 8, ["gateways"])) : (t(), n("p", K2, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      D(Jt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: k[8] || (k[8] = (M) => a.value = null)
      }, {
        footer: j(() => [
          D(de, {
            variant: "outline",
            size: "sm",
            onClick: k[6] || (k[6] = (M) => a.value = null)
          }, {
            default: j(() => [...k[21] || (k[21] = [
              N("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(de, {
            key: 0,
            size: "sm",
            onClick: k[7] || (k[7] = (M) => v(s.value.key))
          }, {
            default: j(() => [
              N(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : w("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), n("div", q2, [
            o("div", G2, [
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
                default: j(() => [...k[9] || (k[9] = [
                  N(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(we, {
                key: 1,
                status: "disabled"
              }, {
                default: j(() => [...k[10] || (k[10] = [
                  N(" Disabled ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.isDefault ? (t(), T(we, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...k[11] || (k[11] = [
                  N(" Default ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.connected && s.value.mode ? (t(), T(we, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  N(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : w("", !0)
            ]),
            o("p", W2, f(s.value.caption), 1),
            o("label", Z2, [
              k[12] || (k[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, J2)
            ]),
            k[20] || (k[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", Y2, [
              k[16] || (k[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              k[17] || (k[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", X2, [
                D(de, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: k[1] || (k[1] = (M) => p(s.value.key, !0))
                }, {
                  default: j(() => [...k[13] || (k[13] = [
                    N(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(de, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: k[2] || (k[2] = (M) => p(s.value.key, !1))
                }, {
                  default: j(() => [...k[14] || (k[14] = [
                    N(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(de, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: k[3] || (k[3] = (M) => g(s.value.key))
                }, {
                  default: j(() => [...k[15] || (k[15] = [
                    N(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : w("", !0),
            s.value.connected ? (t(), n("div", Q2, [
              D(de, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: k[4] || (k[4] = (M) => C("test"))
              }, {
                default: j(() => [...k[18] || (k[18] = [
                  N(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              D(de, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: k[5] || (k[5] = (M) => C("live"))
              }, {
                default: j(() => [...k[19] || (k[19] = [
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
function ca(e) {
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
function yC(e) {
  const l = R(ca(e));
  ge(() => {
    l.value = ca(e);
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
function fa(e) {
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
function kC(e) {
  const l = R(fa(e));
  ge(() => {
    l.value = fa(e);
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
function $C(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = R(
    l.driver === "none" ? "off" : "connecting"
  ), c = R(/* @__PURE__ */ new Set());
  let v = /* @__PURE__ */ new Map(), p, g, C, y = (/* @__PURE__ */ new Date()).toISOString(), k = null;
  function M(K, G) {
    v.set(K, { ...v.get(K) ?? {}, ...G }), !p && (p = setTimeout(() => {
      p = void 0, S();
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
        u?.(oe, ae);
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
        const K = a.value.map((ae) => ae[r]), { records: G, at: oe } = await s(K, y);
        y = oe, d.value = "live";
        for (const ae of G)
          M(ae[r], ae);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function m() {
    h(), d.value = "live", g = setInterval(B, l.intervalMs);
  }
  function h() {
    clearInterval(g), g = void 0, C?.abort();
  }
  function $() {
    return window.Echo ?? null;
  }
  function P() {
    const K = $();
    if (!K || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    k = l.channel;
    const G = K.private(l.channel);
    for (const oe of l.events)
      G.listen(oe, (ae) => {
        ae?.[r] !== void 0 && M(ae[r], ae);
      });
    d.value = "live", K.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), K.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function I() {
    k && ($()?.leave(k), k = null);
  }
  function E() {
    l.driver === "poll" && m(), l.driver === "broadcast" && P();
  }
  function te() {
    h(), I(), clearTimeout(p), p = void 0, v = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (te(), d.value = "paused") : (y = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return ge(() => {
    l.driver !== "none" && (E(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), te();
  }), { status: d, recentlyChanged: c, applyPatch: M, flush: S, pollOnce: B };
}
const e$ = /^[a-z0-9-]+$/, t$ = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function wC(e) {
  Ja(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !e$.test(a) || typeof r != "string" || !t$.test(r) || (l[`--${a}`] = r);
    Sd(l);
  });
}
const a$ = { class: "flex items-center gap-0.5" }, n$ = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", a$, [
      String(e.value) === "mono" ? (t(), n(A, { key: 0 }, [
        a[0] || (a[0] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        a[1] || (a[1] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        a[2] || (a[2] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), n(A, { key: 1 }, [
        a[3] || (a[3] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        a[4] || (a[4] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        a[5] || (a[5] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), l$ = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(La, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), o$ = { class: "flex flex-col gap-2" }, s$ = { class: "bg-card rounded-lg border p-4" }, r$ = { class: "text-muted-foreground truncate text-xs" }, i$ = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, u$ = /* @__PURE__ */ O({
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
    ), u = x(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), d = x(() => {
      const k = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return k === "" ? u.value : `${u.value} › ${k.split("/").join(" › ")}`;
    });
    function c(k, M) {
      return k.length <= M ? k : `${k.slice(0, M - 1).trimEnd()}…`;
    }
    const v = x(() => c(s.value, r.value.titleMax)), p = x(() => c(i.value, r.value.descriptionMax));
    function g(k, M, S) {
      return k === 0 ? { tone: "text-muted-foreground", note: "empty" } : k > S ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : k < M ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = x(
      () => g(s.value.length, r.value.titleMin, r.value.titleMax)
    ), y = x(
      () => g(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (k, M) => (t(), n("div", o$, [
      o("div", s$, [
        o("p", r$, f(d.value), 1),
        o("p", {
          class: z(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", v.value === "" ? "text-muted-foreground italic" : ""])
        }, f(v.value || "Untitled page"), 3),
        o("p", {
          class: z(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", i$, [
        o("span", {
          class: z(C.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(C.value.note), 3),
        o("span", {
          class: z(y.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(y.value.note), 3)
      ]),
      M[0] || (M[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), d$ = ["value", "placeholder", "disabled"], c$ = /* @__PURE__ */ O({
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
    function i(u) {
      const d = u.target.value;
      r("update:modelValue", d === "" ? null : d.trim());
    }
    return (u, d) => (t(), n("input", {
      type: "tel",
      inputmode: "tel",
      autocomplete: "tel",
      class: z(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", b(Se)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, d$));
  }
}), f$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, m$ = ["aria-selected", "disabled", "title", "onClick"], p$ = /* @__PURE__ */ O({
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
    function u(d) {
      a.disabled || r("update:modelValue", d === i.value ? null : d);
    }
    return (d, c) => (t(), n("div", f$, [
      (t(!0), n(A, null, L(s.value, (v) => (t(), n("button", {
        key: v,
        type: "button",
        role: "option",
        class: z(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [b(Se), i.value === v ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === v,
        disabled: e.disabled,
        title: v,
        onClick: (p) => u(v)
      }, f(v), 11, m$))), 128))
    ]));
  }
}), v$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, g$ = ["disabled"], h$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, b$ = ["onClick"], x$ = ["onClick"], y$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = R(!1), u = x(() => a.field.options ?? []);
    function d(g, C) {
      return !C || g.label.toLowerCase().includes(C) ? !0 : (g.children ?? []).some((y) => d(y, C));
    }
    const c = x(() => {
      const g = s.value.trim().toLowerCase();
      return g ? u.value.filter((C) => d(C, g)) : u.value;
    }), v = x(() => {
      const g = (C) => {
        for (const y of C) {
          if (y.value === a.modelValue)
            return y.label;
          const k = g(y.children ?? []);
          if (k)
            return k;
        }
        return null;
      };
      return g(u.value);
    });
    function p(g) {
      a.disabled || (r("update:modelValue", g), i.value = !1);
    }
    return (g, C) => (t(), n("div", v$, [
      o("button", {
        type: "button",
        class: z(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Se)]),
        disabled: e.disabled,
        onClick: C[0] || (C[0] = (y) => i.value = !i.value)
      }, [
        o("span", {
          class: z(v.value ? "" : "text-muted-foreground")
        }, f(v.value ?? "Select…"), 3),
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, g$),
      i.value ? (t(), n("div", h$, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": C[1] || (C[1] = (y) => s.value = y),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Me, s.value]
        ]) : w("", !0),
        (t(!0), n(A, null, L(c.value, (y) => (t(), n(A, {
          key: String(y.value)
        }, [
          o("button", {
            type: "button",
            class: z(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === y.value ? "bg-accent" : ""]),
            onClick: (k) => p(y.value)
          }, f(y.label), 11, b$),
          (t(!0), n(A, null, L(y.children ?? [], (k) => (t(), n("button", {
            key: String(k.value),
            type: "button",
            class: z(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === k.value ? "bg-accent text-foreground" : ""]),
            onClick: (M) => p(k.value)
          }, f(k.label), 11, x$))), 128))
        ], 64))), 128))
      ])) : w("", !0)
    ]));
  }
}), k$ = ["aria-label"], $$ = ["disabled", "aria-label", "aria-pressed", "onClick"], w$ = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, C$ = { key: 0 }, S$ = ["id"], M$ = ["fill"], B$ = ["disabled"], _$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkRating",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(() => Math.max(1, Math.min(10, Number(a.field.max ?? 5)))), i = x(() => !!a.field.allowHalf), u = x(() => {
      const v = Number(a.modelValue);
      return Number.isFinite(v) ? v : 0;
    });
    function d(v) {
      a.disabled || r("update:modelValue", v);
    }
    function c(v) {
      return u.value >= v ? "full" : i.value && u.value >= v - 0.5 ? "half" : "empty";
    }
    return (v, p) => (t(), n("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), n(A, null, L(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${g} of ${s.value}`,
        "aria-pressed": u.value >= g,
        onClick: (C) => d(g)
      }, [
        (t(), n("svg", w$, [
          c(g) === "half" ? (t(), n("defs", C$, [
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
            ])], 8, S$)
          ])) : w("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: c(g) === "full" ? "currentColor" : c(g) === "half" ? `url(#half-${e.field.key}-${g})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, M$)
        ]))
      ], 8, $$))), 128)),
      u.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (g) => d(0))
      }, " Clear ", 8, B$)) : w("", !0)
    ], 8, k$));
  }
});
function P$() {
  ye("radio", lm), ye("checkboxlist", rm), ye("tags", pm), ye("colour", Mm), ye("slider", op), ye("rating", _$), ye("phone", c$), ye("icon-picker", p$), ye("tree-select", y$), ye("visual-select", bp), ye("markdown", Df), ye("code", Hf), ye("map", Am), ye("qrcode", Tm), ye("barcode", Um), ye("diff", qm), ye("seo-preview", u$), Mt("swatch", yp), Mt("voucher-code-box", l$), Mt("document-colour-mode", n$);
}
function Ea() {
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
const z$ = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = Ea();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: z(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", b(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      U(r.$slots, "default")
    ], 6));
  }
}), A$ = ["id"], Oe = /* @__PURE__ */ O({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, a) => (t(), n("section", {
      id: e.id,
      class: z(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: z(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        D(z$, null, {
          default: j(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, A$));
  }
}), O$ = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, j$ = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, V$ = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Ge = /* @__PURE__ */ O({
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
      class: z(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), n("p", O$, f(e.eyebrow), 1)) : w("", !0),
      e.title ? (t(), n("h2", j$, f(e.title), 1)) : w("", !0),
      e.body ? (t(), n("p", V$, f(e.body), 1)) : w("", !0)
    ], 2)) : w("", !0);
  }
});
function L$() {
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
const T$ = { class: "pk-tilt-inner relative h-full" }, D$ = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = L$();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", T$, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), E$ = { class: "flex flex-col gap-10" }, I$ = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, F$ = { class: "text-base font-semibold" }, N$ = { class: "text-sm text-pretty text-muted-foreground" }, R$ = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(Oe, null, {
      default: j(() => [
        o("div", E$, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", I$, [
            (t(!0), n(A, null, L(e.items ?? [], (s, i) => (t(), T(D$, {
              key: i,
              class: z(l(s.span))
            }, {
              default: j(() => [
                o("div", {
                  class: z([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", F$, f(s.title), 1),
                  o("p", N$, f(s.body), 1)
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
}), U$ = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, H$ = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, K$ = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, q$ = ["href"], G$ = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, null, {
      default: j(() => [
        o("div", U$, [
          o("h2", H$, f(e.title), 1),
          e.body ? (t(), n("p", K$, f(e.body), 1)) : w("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, q$)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), W$ = { class: "flex flex-col gap-8" }, Z$ = { class: "divide-y rounded-lg border" }, J$ = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Y$ = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, X$ = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, { narrow: "" }, {
      default: j(() => [
        o("div", W$, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Z$, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", J$, [
                N(f(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", Y$, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Q$ = { class: "flex flex-col gap-10" }, ew = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, tw = { class: "text-sm font-semibold" }, aw = { class: "text-sm text-pretty text-muted-foreground" }, nw = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, null, {
      default: j(() => [
        o("div", Q$, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", ew, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", tw, f(r.title), 1),
              o("p", aw, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), lw = { class: "flex flex-col items-center gap-6 text-center" }, ow = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, sw = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, rw = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, iw = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, uw = ["href"], dw = ["href"], cw = {
  key: 3,
  class: "text-xs text-muted-foreground font-normal"
}, fw = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Oe, null, {
      default: j(() => [
        o("div", lw, [
          e.eyebrow ? (t(), n("p", ow, f(e.eyebrow), 1)) : w("", !0),
          o("h1", sw, f(e.title), 1),
          e.body ? (t(), n("p", rw, f(e.body), 1)) : w("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", iw, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, uw)) : w("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, dw)) : w("", !0)
          ])) : w("", !0),
          e.note ? (t(), n("p", cw, f(e.note), 1)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), mw = { class: "flex flex-col items-center gap-6" }, pw = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, vw = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, gw = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, { muted: "" }, {
      default: j(() => [
        o("div", mw, [
          e.title ? (t(), n("p", pw, f(e.title), 1)) : w("", !0),
          o("ul", vw, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), hw = { class: "flex flex-col gap-10" }, bw = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, xw = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, yw = ["aria-pressed"], kw = ["aria-pressed"], $w = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, ww = { class: "grid gap-4 md:grid-cols-3" }, Cw = { class: "flex flex-col gap-1" }, Sw = { class: "text-sm font-semibold" }, Mw = { class: "flex items-baseline gap-1" }, Bw = { class: "text-3xl font-semibold tracking-tight" }, _w = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, Pw = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, zw = { class: "flex flex-col gap-2 text-sm" }, Aw = { class: "text-muted-foreground" }, Ow = ["href"], jw = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(Oe, { muted: "" }, {
      default: j(() => [
        o("div", hw, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", bw, [
            o("div", xw, [
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: u[0] || (u[0] = (d) => a.value = !1)
              }, " Monthly ", 10, yw),
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: u[1] || (u[1] = (d) => a.value = !0)
              }, " Annual ", 10, kw)
            ]),
            e.annualNote ? (t(), n("p", $w, f(e.annualNote), 1)) : w("", !0)
          ])) : w("", !0),
          o("ul", ww, [
            (t(!0), n(A, null, L(e.items ?? [], (d, c) => (t(), n("li", {
              key: c,
              class: z(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", Cw, [
                o("h3", Sw, f(d.name), 1),
                o("p", Mw, [
                  o("span", Bw, f(s(d)), 1),
                  d.period ? (t(), n("span", _w, f(d.period), 1)) : w("", !0)
                ]),
                d.body ? (t(), n("p", Pw, f(d.body), 1)) : w("", !0)
              ]),
              o("ul", zw, [
                (t(!0), n(A, null, L(d.features ?? [], (v, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", Aw, f(v.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), n("a", {
                key: 0,
                href: d.href ?? "#",
                class: z([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(d.label), 11, Ow)) : w("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function Vw() {
  const e = R(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const d = l.getBoundingClientRect(), c = d.height + window.innerHeight, v = c <= 0 ? 0 : (window.innerHeight - d.top) / c;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(v, 0), 1)));
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
        s = c.some((v) => v.isIntersecting), s && u();
      }), a.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), ke(() => {
    a?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const Lw = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, Tw = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, Dw = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Ew = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Iw = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, Fw = { class: "pk-showcase-stage w-full [perspective:1400px]" }, Nw = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, Rw = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, Uw = { class: "ml-3 truncate text-xs text-muted-foreground" }, Hw = { class: "flex" }, Kw = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, qw = { class: "min-w-0 flex-1 p-4" }, Gw = { class: "flex flex-col divide-y rounded-md border" }, Ww = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = Vw();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", Lw, [
        o("div", Tw, [
          o("div", Dw, [
            o("h2", Ew, f(e.title), 1),
            e.body ? (t(), n("p", Iw, f(e.body), 1)) : w("", !0)
          ]),
          o("div", Fw, [
            o("div", Nw, [
              o("div", Rw, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", Uw, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", Hw, [
                o("div", Kw, [
                  (t(), n(A, null, L(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", qw, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", Gw, [
                    (t(!0), n(A, null, L(e.rows, (s) => (t(), n("div", {
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
}), Zw = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = Ea(), s = R(0);
    return me(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const d = performance.now(), c = (v) => {
        const p = Math.min((v - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(c) : s.value = l.to;
      };
      requestAnimationFrame(c);
    }), (i, u) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), Jw = { class: "flex flex-col gap-10" }, Yw = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, Xw = { class: "order-2 text-sm text-muted-foreground" }, Qw = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, e4 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(Oe, { muted: "" }, {
      default: j(() => [
        o("div", Jw, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", Yw, [
            (t(!0), n(A, null, L(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", Xw, f(s.label), 1),
              o("dd", Qw, [
                l(s.value) ? (t(), T(Zw, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(A, { key: 1 }, [
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
}), t4 = { class: "flex flex-col gap-10" }, a4 = { class: "grid gap-6 md:grid-cols-3" }, n4 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, l4 = { class: "text-sm font-semibold" }, o4 = { class: "text-sm text-pretty text-muted-foreground" }, s4 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, null, {
      default: j(() => [
        o("div", t4, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", a4, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", n4, f(s + 1), 1),
              o("h3", l4, f(r.title), 1),
              o("p", o4, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), r4 = { class: "flex flex-col gap-10" }, i4 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, u4 = { class: "text-pretty text-sm leading-relaxed" }, d4 = { class: "mt-auto flex items-center gap-3" }, c4 = ["src"], f4 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, m4 = { class: "min-w-0" }, p4 = { class: "block truncate text-sm font-medium" }, v4 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, g4 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, null, {
      default: j(() => [
        o("div", r4, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", i4, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", u4, " “" + f(r.quote) + "” ", 1),
              o("figcaption", d4, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, c4)) : (t(), n("span", f4, f((r.name ?? "?").slice(0, 1)), 1)),
                o("span", m4, [
                  o("span", p4, f(r.name), 1),
                  r.role ? (t(), n("span", v4, f(r.role), 1)) : w("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), CC = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: fw,
      logos: gw,
      features: nw,
      bento: R$,
      showcase: Ww,
      steps: s4,
      stats: e4,
      testimonials: g4,
      pricing: jw,
      faq: X$,
      cta: G$
    }, s = x(
      () => (a.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), n(A, null, L(s.value, (d) => (t(), T(Be(d.component), re({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), h4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, SC = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", h4, [
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
      a[0] || (a[0] = o("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), b4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, MC = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", b4, [...a[0] || (a[0] = [
      Tt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), x4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, BC = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", x4, [...a[0] || (a[0] = [
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
P$();
const _C = "0.0.1";
export {
  Z3 as AdminDirectory,
  yc as Alert,
  kc as AlertDescription,
  $c as AlertTitle,
  V3 as AppPageFooter,
  Y4 as AppearanceDrawer,
  J5 as Avatar,
  Y5 as AvatarFallback,
  X5 as AvatarImage,
  qt as BADGE_VARIANTS,
  G4 as BadgeResolver,
  R3 as BarChart,
  Q5 as Breadcrumb,
  e3 as BreadcrumbEllipsis,
  t3 as BreadcrumbItem,
  a3 as BreadcrumbLink,
  n3 as BreadcrumbList,
  l3 as BreadcrumbPage,
  o3 as BreadcrumbSeparator,
  P4 as BulkActions,
  za as CATALOGUE_CONTAINER,
  Bc as CATALOGUE_GRID,
  l5 as CATALOGUE_GRID_TIGHT,
  _c as CATALOGUE_GRID_TILES,
  C3 as Card,
  S3 as CardAction,
  M3 as CardContent,
  B3 as CardDescription,
  _3 as CardFooter,
  P3 as CardHeader,
  z3 as CardTitle,
  wy as CartPanel,
  lC as CatalogBrowser,
  Jb as CatalogCard,
  Da as CatalogFilterSheet,
  Zt as CatalogGrid,
  aC as CatalogInspect,
  f0 as CatalogItemDetail,
  nC as CatalogItemView,
  oC as CatalogRegister,
  tC as CatalogTill,
  kh as ChartCard,
  dt as ChartTooltip,
  zr as Checkbox,
  N4 as CheckboxCell,
  R4 as CodeCell,
  Du as ColourCell,
  G3 as ComboChart,
  Pr as CreateOptionDialog,
  wr as CreateOptionError,
  rC as DASHBOARD_HIDDEN_STORAGE_KEY,
  G0 as DASHBOARD_HIDE_KEY,
  iC as DashboardShortcuts,
  Ul as DataTable,
  m3 as Dialog,
  p3 as DialogClose,
  v3 as DialogContent,
  g3 as DialogDescription,
  h3 as DialogFooter,
  b3 as DialogHeader,
  lf as DialogOverlay,
  x3 as DialogScrollContent,
  y3 as DialogTitle,
  k3 as DialogTrigger,
  Z3 as DirectoryPage,
  T5 as DropdownMenu,
  D5 as DropdownMenuCheckboxItem,
  E5 as DropdownMenuContent,
  I5 as DropdownMenuGroup,
  F5 as DropdownMenuItem,
  N5 as DropdownMenuLabel,
  AC as DropdownMenuPortal,
  R5 as DropdownMenuRadioGroup,
  U5 as DropdownMenuRadioItem,
  H5 as DropdownMenuSeparator,
  K5 as DropdownMenuShortcut,
  q5 as DropdownMenuSub,
  G5 as DropdownMenuSubContent,
  W5 as DropdownMenuSubTrigger,
  Z5 as DropdownMenuTrigger,
  K4 as EditableCell,
  Se as FOCUS_RING,
  z4 as FOCUS_RING_SOFT,
  ta as FOCUS_RING_WITHIN,
  r5 as FORM_MEASURE,
  Ye as FormFieldControl,
  W3 as HeatmapChart,
  wt as ICON_PATHS,
  Ne as INPUT_COPY,
  Br as INPUT_PLACEHOLDER,
  Mr as INPUT_TEXT,
  Bu as IconCell,
  Ou as ImageCell,
  bC as InfoNode,
  zc as JPEG_IMAGE_ERROR,
  U4 as KeyValueCell,
  $3 as Label,
  Ev as LineChart,
  ny as LineItems,
  D4 as MUTED_COPY,
  ft as MUTED_COPY_SNUG,
  E4 as MUTED_COPY_XS,
  gt as MiniStatCard,
  s3 as NavigationMenu,
  r3 as NavigationMenuContent,
  i3 as NavigationMenuIndicator,
  u3 as NavigationMenuItem,
  d3 as NavigationMenuLink,
  c3 as NavigationMenuList,
  f3 as NavigationMenuTrigger,
  af as NavigationMenuViewport,
  Pc as OPAQUE_IMAGE_ERROR,
  qe as PAGE_SHELL,
  o5 as PAGE_SHELL_COMPACT,
  s5 as PAGE_SHELL_STACK,
  xC as PaymentGatewaySettings,
  F2 as PaymentGateways,
  U3 as PieChart,
  a5 as PkAlertError,
  SC as PkAuroraBackdrop,
  Ke as PkBadge,
  Um as PkBarcode,
  R$ as PkBento,
  X4 as PkBottomNav,
  A3 as PkBoundary,
  D3 as PkBuilder,
  de as PkButton,
  E3 as PkCalendar,
  O3 as PkCard,
  rm as PkCheckboxList,
  La as PkCodeBox,
  Hf as PkCodeInput,
  Mm as PkColourPicker,
  BC as PkConsoleBackdrop,
  Zw as PkCountUp,
  G$ as PkCta,
  L3 as PkDeviceFrame,
  qm as PkDiff,
  Yp as PkDocument,
  Je as PkDropdown,
  MC as PkEditorialBackdrop,
  Pt as PkEmptyState,
  X$ as PkFaq,
  nw as PkFeatureGrid,
  _e as PkFieldLabel,
  Ca as PkFileUpload,
  Le as PkHeading,
  fw as PkHero,
  li as PkKeyValue,
  CC as PkLandingSections,
  gw as PkLogoCloud,
  _m as PkMap,
  Am as PkMapField,
  Df as PkMarkdownInput,
  st as PkModal,
  Ut as PkMultiSelect,
  e5 as PkOtpInput,
  t5 as PkPageHeader,
  pC as PkPasskeyRegister,
  n5 as PkPasswordInput,
  jw as PkPricing,
  Tm as PkQrCode,
  qx as PkQtyStepper,
  qo as PkQueryBuilder,
  lm as PkRadioGroup,
  T3 as PkRepeater,
  z$ as PkReveal,
  pi as PkRichEditor,
  Oe as PkSection,
  Ge as PkSectionHeading,
  Ww as PkShowcase,
  B0 as PkSignaturePad,
  Pe as PkSkeleton,
  Jt as PkSlideover,
  op as PkSlider,
  Q4 as PkSpinner,
  e4 as PkStats,
  we as PkStatusBadge,
  kr as PkStepIndicator,
  s4 as PkSteps,
  yp as PkSwatchPreview,
  pm as PkTagsInput,
  g4 as PkTestimonials,
  $e as PkTextInput,
  D$ as PkTiltCard,
  bp as PkVisualSelect,
  w1 as PlanCard,
  eC as PlanEditor,
  Q3 as PlanGrid,
  q3 as PolarAreaChart,
  K3 as RadarChart,
  F4 as RatingCell,
  W4 as RecordActions,
  vC as RecordForm,
  I4 as RelationCreateDialog,
  O4 as RelationPanel,
  Bb as STATUS_TONES,
  H3 as ScatterChart,
  Sa as SchemaNode,
  Y3 as SegmentedBar,
  cC as SelectionBar,
  Yc as Separator,
  dC as SetupChecklist,
  Pa as ShadcnInput,
  Ht as Sheet,
  u5 as SheetClose,
  Kt as SheetContent,
  Tc as SheetDescription,
  d5 as SheetFooter,
  Dc as SheetHeader,
  Ec as SheetTitle,
  c5 as SheetTrigger,
  Fh as ShortcutsWidget,
  f5 as Sidebar,
  m5 as SidebarContent,
  p5 as SidebarFooter,
  v5 as SidebarGroup,
  g5 as SidebarGroupAction,
  h5 as SidebarGroupContent,
  b5 as SidebarGroupLabel,
  x5 as SidebarHeader,
  y5 as SidebarInput,
  k5 as SidebarInset,
  $5 as SidebarMenu,
  w5 as SidebarMenuAction,
  C5 as SidebarMenuBadge,
  M5 as SidebarMenuButton,
  B5 as SidebarMenuItem,
  _5 as SidebarMenuSkeleton,
  P5 as SidebarMenuSub,
  z5 as SidebarMenuSubButton,
  A5 as SidebarMenuSubItem,
  O5 as SidebarProvider,
  j5 as SidebarRail,
  V5 as SidebarSeparator,
  L5 as SidebarTrigger,
  sC as SignatureStudio,
  yt as Sparkline,
  w3 as Spinner,
  J3 as StatCard,
  X3 as StatListChart,
  uC as StatStrip,
  Ze as Switch,
  Aa as TRANSPARENT_IMAGE_HELP,
  fC as TablePagination,
  $o as TableShell,
  mC as TableTabs,
  Qs as TableToolbar,
  H4 as TagsCell,
  N3 as ThemeToggle,
  Wc as Tooltip,
  Zc as TooltipContent,
  S5 as TooltipProvider,
  Jc as TooltipTrigger,
  Ta as TrendBadge,
  gC as UnsavedBar,
  wc as alertVariants,
  Cd as appearanceVars,
  jt as applyAppearance,
  Lc as assertTransparentImage,
  nt as buttonClasses,
  ht as catalogFiltersActive,
  Q as cn,
  Sr as createOptionActionLabel,
  Cr as createOptionTitle,
  Yb as cycleLabel,
  Te as emptyCatalogFilters,
  $r as fieldControl,
  T4 as fieldErrorsFromPayload,
  Px as findExactSku,
  Xb as formatPerkValue,
  Qu as hasBadgeValue,
  j4 as hasFieldControl,
  I3 as hasOptionPreview,
  ce as iconPath,
  jc as imageHasTransparency,
  Z4 as initializeAppearance,
  Ot as isDark,
  Yt as matchCatalogItem,
  nf as navigationMenuTriggerStyle,
  sp as optionPreview,
  i5 as packWidgetColumns,
  Qb as perkGranted,
  Wt as readAppearance,
  P$ as registerBuiltInFieldControls,
  ye as registerFieldControl,
  Mt as registerOptionPreview,
  V4 as registeredFieldTypes,
  rp as registeredOptionPreviews,
  L4 as resetFieldControls,
  F3 as resetOptionPreviews,
  J4 as setAppearancePersister,
  Xc as sidebarMenuButtonVariants,
  Ab as statusBadgeVariant,
  zb as statusTone,
  A4 as toUrl,
  _a as useAppearance,
  yC as useColumnVisibility,
  kC as useColumnWidths,
  $C as useLiveUpdates,
  L$ as usePointer,
  Ea as useReveal,
  q4 as useSchemaColumns,
  Vw as useScrollProgress,
  j3 as useShellPageFooter,
  xt as useSidebar,
  wC as useTenantTheme,
  hC as useUnsavedChanges,
  _C as version
};
//# sourceMappingURL=index.js.map
