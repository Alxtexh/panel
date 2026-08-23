import './ui.css';
import { defineComponent as O, useSlots as Tt, openBlock as t, createElementBlock as n, normalizeClass as z, unref as b, renderSlot as U, createElementVNode as o, toDisplayString as f, createCommentVNode as w, computed as y, normalizeStyle as se, Fragment as A, renderList as V, ref as R, watch as me, useId as Ha, withModifiers as he, createTextVNode as N, createVNode as D, createStaticVNode as Dt, createBlock as T, createSlots as lt, withCtx as j, nextTick as Le, onBeforeUnmount as ke, Teleport as Xe, Transition as Re, onMounted as ge, withDirectives as pe, vModelText as Me, resolveDynamicComponent as Be, resolveComponent as It, vModelSelect as We, vModelDynamic as Ka, mergeProps as re, normalizeProps as ze, guardReactiveProps as Ie, defineAsyncComponent as ta, inject as mt, vShow as Ue, onUnmounted as qa, isRef as Ga, useTemplateRef as Wa, onErrorCaptured as Za, provide as _t, markRaw as va, withKeys as Ja, reactive as ot, useModel as rt, mergeModels as De, shallowRef as Ya, watchEffect as Xa } from "vue";
import { useForwardPropsEmits as be, DialogRoot as ga, DialogOverlay as Et, DialogPortal as Ft, DialogContent as Nt, DialogClose as Qe, CheckboxRoot as Qa, CheckboxIndicator as en, SwitchRoot as tn, SwitchThumb as an, DialogDescription as ha, DialogTitle as ba, DialogTrigger as ya, createContext as nn, Primitive as et, TooltipRoot as ln, TooltipPortal as on, TooltipContent as sn, TooltipArrow as rn, TooltipProvider as xa, TooltipTrigger as un, Separator as dn, DropdownMenuRoot as cn, DropdownMenuCheckboxItem as fn, DropdownMenuItemIndicator as ka, DropdownMenuPortal as mn, DropdownMenuContent as pn, DropdownMenuGroup as vn, useForwardProps as Ae, DropdownMenuItem as gn, DropdownMenuLabel as hn, DropdownMenuRadioGroup as bn, DropdownMenuRadioItem as yn, DropdownMenuSeparator as xn, DropdownMenuSub as kn, DropdownMenuSubContent as $n, DropdownMenuSubTrigger as wn, DropdownMenuTrigger as Cn, AvatarRoot as Sn, AvatarFallback as Mn, AvatarImage as Bn, NavigationMenuViewport as _n, NavigationMenuRoot as Pn, NavigationMenuContent as zn, NavigationMenuIndicator as An, NavigationMenuItem as On, NavigationMenuLink as jn, NavigationMenuList as Ln, NavigationMenuTrigger as Vn, Label as Tn } from "reka-ui";
import { DropdownMenuPortal as TC } from "reka-ui";
import { X as Rt, Check as $a, AlertCircle as Dn, EyeOff as In, Eye as En, PanelLeftOpen as Fn, PanelLeftClose as Nn, Circle as Rn, ChevronRight as wa, MoreHorizontal as Un, ChevronDown as Hn, Loader2Icon as Kn } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as Ca, useMediaQuery as qn, useEventListener as Gn, defaultDocument as Wn } from "@vueuse/core";
import { clsx as Zn } from "clsx";
import { twMerge as Jn } from "tailwind-merge";
import { cva as Ut } from "class-variance-authority";
import { usePage as Sa, Link as Yn } from "@inertiajs/vue3";
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
const Xn = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, Qn = ["d"], el = { class: "flex max-w-sm flex-col gap-1" }, tl = {
  key: 0,
  class: "text-sm font-normal"
}, al = {
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
    const l = Tt();
    return (a, r) => (t(), n("div", {
      "data-slot": "empty-state",
      class: z(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      b(l).illustration ? (t(), n("div", Xn, [
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
            }, null, 8, Qn)
          ], 2))
        ])
      ], 2)),
      o("div", el, [
        o("p", {
          class: z(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), n("p", tl, f(e.description), 1)) : w("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", al, [
        U(a.$slots, "actions")
      ])) : w("", !0)
    ], 2));
  }
}), nl = ["aria-label"], Pe = /* @__PURE__ */ O({
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
      style: se(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(A, null, V(s.value, (c) => (t(), n("span", {
        key: c,
        "aria-hidden": "true",
        class: z(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: se({
          width: i(c - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, nl));
  }
}), ll = { class: "w-full border-collapse text-sm" }, ol = { class: "bg-background sticky top-0 z-10" }, sl = {
  key: 0,
  class: "bg-muted/40"
}, rl = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, il = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, ul = ["colspan"], dl = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, cl = { class: "bg-muted/50" }, fl = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, ml = ["id", "checked", "indeterminate"], pl = ["onClick"], vl = {
  key: 0,
  class: "text-xs"
}, gl = {
  key: 1,
  class: "text-xs opacity-40"
}, hl = { key: 1 }, bl = ["aria-label", "onPointerdown"], yl = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, xl = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, kl = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, $l = {
  key: 1,
  class: "px-3 py-2.5"
}, wl = {
  key: 2,
  class: "px-2 py-2.5"
}, Cl = {
  key: 0,
  class: "bg-muted/40"
}, Sl = ["colspan"], Ml = ["aria-expanded", "dusk", "onClick"], Bl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, _l = {
  key: 1,
  dusk: "group-header"
}, Pl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], zl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Al = ["id", "value", "checked", "disabled", "aria-label", "onClick"], Ol = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, jl = ["aria-label", "onClick"], Ll = { class: "text-xs" }, Vl = {
  key: 1,
  class: "text-muted-foreground"
}, Tl = { key: 2 }, Dl = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Il = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, El = { key: 0 }, Fl = { class: "text-muted-foreground block text-[10px] font-medium" }, Nl = { class: "font-semibold tabular-nums" }, Rl = { key: 1 }, Ul = 40, Hl = /* @__PURE__ */ O({
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
    function m(W) {
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
    function x(W, ee) {
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
      Y.splice(W, 0, ue), p("reorder", Y);
    }
    const p = l;
    function h(W, ee) {
      !a.rowClickable || a.reordering || ee.button !== 0 || ee.metaKey || ee.ctrlKey || ee.shiftKey || ee.altKey || ee.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || p("row-click", W);
    }
    const $ = R(null), P = Ha(), E = y(() => a.columns.filter((W) => !a.hidden?.has(W.key))), I = y(() => {
      const W = E.value.find((ee) => ee.sticky);
      return W ? W.key : a.stickyFirst && E.value.length > 0 ? E.value[0].key : null;
    });
    function te(W) {
      return I.value === W.key;
    }
    function H() {
      return a.selectable && !a.reordering ? `${Ul}px` : "0";
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
        p("resize", W.key, Math.min(1200, Math.max(48, kt)));
      }
      function Ee(tt) {
        try {
          ie.releasePointerCapture(tt.pointerId);
        } catch {
        }
        ie.removeEventListener("pointermove", He), ie.removeEventListener("pointerup", Ee), ie.removeEventListener("pointercancel", Ee);
      }
      ie.addEventListener("pointermove", He), ie.addEventListener("pointerup", Ee), ie.addEventListener("pointercancel", Ee);
    }
    const Z = y(() => E.value.some((W) => !!W.group)), q = y(() => {
      const W = [];
      for (const ee of E.value) {
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
    const L = R(null);
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
      if (ue && L.value !== null && L.value !== Y) {
        const He = J(L.value), Ee = J(Y);
        if (He !== -1 && Ee !== -1) {
          const tt = Math.min(He, Ee), kt = Math.max(He, Ee), Ua = !ie;
          for (let ct = tt; ct <= kt; ct++) {
            if (!m(ct))
              continue;
            const $t = _(a.rows[ct]);
            if ($t === null)
              continue;
            !!a.selected?.has($t) !== Ua && p("toggle-row", $t);
          }
          L.value = Y;
          return;
        }
      }
      p("toggle-row", Y), L.value = Y;
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
    async function Qt(W, ee, Y) {
      try {
        await navigator.clipboard.writeText(String(Y)), $.value = `${W}-${ee.key}`, setTimeout(() => $.value = null, 1200);
      } catch {
      }
    }
    const Na = y(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function ea(W) {
      return a.summaries?.[W] ?? null;
    }
    function Ra(W) {
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
      o("table", ll, [
        o("thead", ol, [
          Z.value ? (t(), n("tr", sl, [
            e.reordering ? (t(), n("th", rl)) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("th", il)) : w("", !0),
            (t(!0), n(A, null, V(q.value, (Y) => (t(), n("th", {
              key: Y.key,
              colspan: Y.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, f(Y.label ?? ""), 9, ul))), 128)),
            W.$slots.actions ? (t(), n("th", dl)) : w("", !0)
          ])) : w("", !0),
          o("tr", cl, [
            e.reordering ? (t(), n("th", fl)) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: z(["w-10 border-b px-3 py-2.5", I.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
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
              }, null, 40, ml)
            ], 2)) : w("", !0),
            (t(!0), n(A, null, V(E.value, (Y) => (t(), n("th", {
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
                onClick: (ue) => p("sort", ne(Y))
              }, [
                N(f(Y.label) + " ", 1),
                Ce(Y) ? (t(), n("span", vl, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", gl, "↕"))
              ], 8, pl)) : (t(), n("span", hl, f(Y.label), 1)),
              oe(Y) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${Y.label}`,
                onPointerdown: (ue) => ae(Y, ue)
              }, null, 40, bl)) : w("", !0)
            ], 6))), 128)),
            W.$slots.actions ? (t(), n("th", yl, [...ee[2] || (ee[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : w("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", xl, [
          (t(), n(A, null, V(6, (Y) => o("tr", {
            key: `skel-${Y}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", kl, [
              D(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("td", $l, [
              D(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
            (t(!0), n(A, null, V(E.value, (ue) => (t(), n("td", {
              key: ue.key,
              class: "px-3 py-2.5"
            }, [
              D(Pe, { variant: "text" })
            ]))), 128)),
            W.$slots.actions ? (t(), n("td", wl, [
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
          (t(!0), n(A, null, V(e.rows, (Y, ue) => (t(), n(A, {
            key: _(Y) ?? `row-${ue}`
          }, [
            e.groupBy && s(ue) ? (t(), n("tr", Cl, [
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
                  o("span", Bl, f(c(r(Y)) ? "▸" : "▾"), 1),
                  N(" " + f(i(Y)), 1)
                ], 8, Ml)) : (t(), n("span", _l, f(i(Y)), 1))
              ], 8, Sl)
            ])) : w("", !0),
            m(ue) ? (t(), n("tr", {
              key: 1,
              class: z(["group pk-row border-b transition-colors hover:bg-muted/50", [
                F(Y) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && ue % 2 === 1 ? "bg-muted/20" : "",
                g.value === ue ? "opacity-40" : "",
                M(ue),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => x(ue, ie),
              onDragover: (ie) => S(ue, ie),
              onDrop: he((ie) => B(ue), ["prevent"]),
              onDragend: k,
              onContextmenu: (ie) => p("row-contextmenu", Y, ie),
              onClick: (ie) => h(Y, ie)
            }, [
              e.reordering ? (t(), n("td", zl, [...ee[3] || (ee[3] = [
                Dt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : w("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: z(["px-3 py-2", I.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
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
                }, null, 8, Al)
              ], 2)) : w("", !0),
              (t(!0), n(A, null, V(E.value, (ie) => (t(), n("td", {
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
                  ie.copyable ? (t(), n("span", Ol, [
                    N(f(Y[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (He) => Qt(String(Y[e.rowKey]), ie, Y[ie.key])
                    }, [
                      o("span", Ll, f($.value === `${Y[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, jl)
                  ])) : Y[ie.key] == null || Y[ie.key] === "" ? (t(), n("span", Vl, "None")) : (t(), n("span", Tl, f(Y[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              W.$slots.actions ? (t(), n("td", Dl, [
                U(W.$slots, "actions", { row: Y }, void 0, !0)
              ])) : w("", !0)
            ], 42, Pl)) : w("", !0)
          ], 64))), 128))
        ], 2)),
        Na.value ? (t(), n("tfoot", Il, [
          o("tr", null, [
            e.selectable ? (t(), n("td", El)) : w("", !0),
            (t(!0), n(A, null, V(e.columns, (Y) => (t(), n(A, {
              key: `s-${Y.key}`
            }, [
              e.hidden?.has(Y.key) ? w("", !0) : (t(), n("td", {
                key: 0,
                class: z(["px-3 py-2 align-top text-sm whitespace-nowrap", Y.cellClass])
              }, [
                ea(Y.key) ? (t(), n(A, { key: 0 }, [
                  o("span", Fl, f(ea(Y.key).label), 1),
                  o("span", Nl, f(Ra(Y.key)), 1)
                ], 64)) : w("", !0)
              ], 2))
            ], 64))), 128)),
            W.$slots.actions ? (t(), n("td", Rl)) : w("", !0)
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
}, Kl = /* @__PURE__ */ bt(Hl, [["__scopeId", "data-v-c0f7d40f"]]), ql = ["aria-label"], Gl = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, Wl = { class: "text-base font-semibold" }, Zl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Jl = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, Yl = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, st = /* @__PURE__ */ O({
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
    function d(m) {
      u.value = m.target === m.currentTarget;
    }
    function c(m) {
      u.value && m.target === m.currentTarget && !a.busy && r("close"), u.value = !1;
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
      const C = g[0], x = g[g.length - 1];
      m.shiftKey && document.activeElement === C ? (m.preventDefault(), x.focus()) : !m.shiftKey && document.activeElement === x && (m.preventDefault(), C.focus());
    }
    return me(
      () => a.open,
      (m) => {
        m ? (i = document.activeElement, document.addEventListener("keydown", v), Le(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", v), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", v)), (m, g) => (t(), T(Xe, { to: "body" }, [
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
              o("div", Gl, [
                o("h2", Wl, f(e.title), 1),
                e.description ? (t(), n("p", Zl, f(e.description), 1)) : w("", !0)
              ]),
              o("div", Jl, [
                U(m.$slots, "default")
              ]),
              o("div", Yl, [
                U(m.$slots, "footer")
              ])
            ], 8, ql)
          ], 32)) : w("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Xl = 160, Je = /* @__PURE__ */ O({
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
    async function m() {
      c && (clearTimeout(c), c = null), !r.value && (r.value = !0, await Le(), M());
    }
    function g() {
      c = setTimeout(k, 180);
    }
    async function C() {
      d.value = null, r.value = !r.value, r.value && (await Le(), M());
    }
    async function x(h, $) {
      d.value = { x: h, y: $ }, r.value = !0, await Le(), M();
    }
    function k() {
      r.value = !1, d.value = null;
    }
    function M() {
      const h = s.value, $ = i.value;
      if (!h || !$)
        return;
      const P = $.getBoundingClientRect(), E = 8, I = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : h.getBoundingClientRect();
      let te, H;
      if (a.placement === "bottom")
        te = I.bottom + a.offset, te + P.height > window.innerHeight - E && I.top - P.height - a.offset > E && (te = I.top - P.height - a.offset), H = a.align === "end" && !d.value ? I.right - P.width : I.left;
      else {
        te = I.top;
        const K = a.placement === "right", G = I.right + a.offset + P.width < window.innerWidth - E, oe = I.left - a.offset - P.width > E;
        H = (K ? G || !oe : !oe && G) ? I.right + a.offset : I.left - a.offset - P.width;
      }
      H = Math.min(Math.max(E, H), window.innerWidth - P.width - E), te = Math.min(Math.max(E, te), window.innerHeight - P.height - E), u.value = { top: te, left: H, minWidth: Math.max(I.width, Xl) };
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
    function p() {
      if (r.value) {
        if (d.value) {
          k();
          return;
        }
        M();
      }
    }
    return ge(() => {
      document.addEventListener("pointerdown", S), document.addEventListener("keydown", B), window.addEventListener("scroll", p, !0), window.addEventListener("resize", p);
    }), ke(() => {
      c && clearTimeout(c), document.removeEventListener("pointerdown", S), document.removeEventListener("keydown", B), window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
    }), l({ close: k, openAt: x }), (h, $) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: $[2] || ($[2] = (P) => e.hoverable && m()),
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
              onPointerenter: $[0] || ($[0] = (P) => e.hoverable && m()),
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
}), Ql = ["disabled"], eo = { class: "py-0.5" }, to = ["disabled", "onClick"], ao = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, no = ["d"], lo = ["disabled"], oo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, so = ["d"], ro = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, io = ["disabled", "onClick"], uo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, co = ["d"], fo = { class: "text-muted-foreground text-sm font-normal" }, mo = { class: "text-foreground font-medium tabular-nums" }, po = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, vo = ["disabled"], go = { class: "text-muted-foreground text-sm font-normal" }, ho = { class: "text-foreground font-medium tabular-nums" }, bo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, yo = ["disabled"], A4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), u = y(() => a.allMatching ? a.total : a.count), d = y(() => u.value !== void 0), c = y(() => d.value && u.value === 0), v = y(() => a.actions.filter((B) => !B.destructive)), m = y(() => a.actions.filter((B) => B.destructive)), g = {
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
    function x(B) {
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
    return (B, p) => (t(), n(A, null, [
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
          ])], 8, Ql)
        ]),
        panel: j(() => [
          o("div", eo, [
            (t(!0), n(A, null, V(v.value, (h) => (t(), n("button", {
              key: h.key,
              type: "button",
              role: "menuitem",
              class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(h)]),
              disabled: e.busy,
              onClick: ($) => x(h)
            }, [
              (t(), n("svg", ao, [
                o("path", {
                  d: b(ce)(h.icon)
                }, null, 8, no)
              ])),
              N(" " + f(h.label), 1)
            ], 10, to))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: p[0] || (p[0] = (h) => i.value = !0)
            }, [
              (t(), n("svg", oo, [
                o("path", {
                  d: b(ce)("download")
                }, null, 8, so)
              ])),
              p[6] || (p[6] = N(" Export CSV ", -1))
            ], 8, lo)) : w("", !0),
            m.value.length ? (t(), n("div", ro, [
              (t(!0), n(A, null, V(m.value, (h) => (t(), n("button", {
                key: h.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: ($) => x(h)
              }, [
                (t(), n("svg", uo, [
                  o("path", {
                    d: b(ce)(h.icon ?? "trash")
                  }, null, 8, co)
                ])),
                N(" " + f(h.label), 1)
              ], 8, io))), 128))
            ])) : w("", !0)
          ])
        ]),
        _: 1
      }),
      D(st, {
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
            class: z([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || c.value,
            onClick: k
          }, f(s.value?.label), 11, vo)
        ]),
        default: j(() => [
          o("p", fo, [
            p[7] || (p[7] = N(" This will affect ", -1)),
            o("span", mo, [
              d.value ? (t(), n(A, { key: 1 }, [
                N(f(S(u.value)) + " record" + f(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(A, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            p[8] || (p[8] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", po, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : w("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(st, {
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
            disabled: !d.value || c.value,
            onClick: M
          }, " Export CSV ", 8, yo)
        ]),
        default: j(() => [
          o("p", go, [
            p[9] || (p[9] = N(" This will export ", -1)),
            o("span", ho, [
              d.value ? (t(), n(A, { key: 1 }, [
                N(f(S(u.value)) + " record" + f(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(A, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            p[10] || (p[10] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", bo, " Nothing matches the current filters - there is nothing to export. ")) : w("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), xo = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, ko = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, $o = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, wo = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, Co = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", xo, [
      l.$slots.tabs ? (t(), n("div", ko, [
        U(l.$slots, "tabs")
      ])) : w("", !0),
      l.$slots.title ? (t(), n("div", $o, [
        U(l.$slots, "title")
      ])) : w("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: z(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        U(l.$slots, "toolbar")
      ], 2)) : w("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", wo, [
        U(l.$slots, "pagination")
      ])) : w("", !0)
    ]));
  }
}), Se = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", aa = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", O4 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", So = ["aria-expanded"], Mo = ["aria-label", "onClick"], Bo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, _o = { class: "ml-auto flex shrink-0 items-center gap-1" }, Po = {
  key: 0,
  class: "border-b p-1"
}, zo = ["placeholder"], Ao = { class: "max-h-60 overflow-y-auto p-1" }, Oo = ["aria-selected", "onMouseenter", "onClick"], jo = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Ht = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), u = R(null), d = R(!1), c = R(""), v = R(0), m = R({ top: 0, left: 0, width: 0 }), g = y(
      () => a.modelValue.map(
        (H) => a.options.find((K) => K.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), C = y(() => a.searchable ?? a.options.length > 6), x = y(() => {
      const H = new Set(a.modelValue), K = c.value.trim().toLowerCase();
      return a.options.filter((G) => !H.has(G.value)).filter((G) => K ? G.label.toLowerCase().includes(K) : !0);
    }), k = y(() => a.max !== null && a.modelValue.length >= a.max);
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
      a.disabled || d.value || (d.value = !0, c.value = "", v.value = 0, await Le(), M(), u.value?.focus());
    }
    function B() {
      d.value = !1, c.value = "";
    }
    function p() {
      d.value ? B() : S();
    }
    function h(H) {
      k.value || (r("update:modelValue", [...a.modelValue, H.value]), c.value = "", v.value = 0, Le(() => {
        M(), u.value?.focus();
      }));
    }
    function $(H) {
      r(
        "update:modelValue",
        a.modelValue.filter((K) => K !== H)
      ), Le(M);
    }
    function P() {
      r("update:modelValue", []), Le(M);
    }
    function E(H) {
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
            H.preventDefault(), v.value = Math.min(v.value + 1, x.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), v.value = Math.max(v.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const K = x.value[v.value];
            K && h(K);
          }
        }
      }
    }
    function I(H) {
      if (!d.value)
        return;
      const K = H.target;
      s.value?.contains(K) || i.value?.contains(K) || B();
    }
    function te() {
      d.value && M();
    }
    return me(x, (H) => {
      v.value > H.length - 1 && (v.value = Math.max(0, H.length - 1));
    }), ge(() => {
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
        class: z(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          d.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": d.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: p
      }, [
        (t(!0), n(A, null, V(g.value, (G) => (t(), n("span", {
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
          ])], 8, Mo)
        ]))), 128)),
        g.value.length === 0 ? (t(), n("span", Bo, f(e.placeholder), 1)) : w("", !0),
        o("span", _o, [
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
      ], 10, So),
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
                top: `${m.value.top}px`,
                left: `${m.value.left}px`,
                width: `${m.value.width}px`
              }),
              role: "listbox"
            }, [
              C.value ? (t(), n("div", Po, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": K[0] || (K[0] = (G) => c.value = G),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: E
                }, null, 40, zo), [
                  [Me, c.value]
                ])
              ])) : w("", !0),
              o("div", Ao, [
                (t(!0), n(A, null, V(x.value, (G, oe) => (t(), n("button", {
                  key: G.value,
                  type: "button",
                  class: z(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", oe === v.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": oe === v.value,
                  onMouseenter: (ae) => v.value = oe,
                  onClick: (ae) => h(G)
                }, f(G.label), 43, Oo))), 128)),
                x.value.length === 0 ? (t(), n("p", jo, [
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
}), Lo = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Vo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, To = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function nt(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Lo, Vo[l], To[a], e.class].filter(Boolean).join(" ");
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
      () => nt({ variant: l.variant, size: l.size, class: l.class })
    ), r = y(() => l.as === "button" ? l.type : void 0);
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
}), Do = { class: "flex items-center gap-2" }, Io = ["onUpdate:modelValue", "onChange"], Eo = ["value"], Fo = ["onUpdate:modelValue"], No = ["value"], Ro = ["onUpdate:modelValue"], Uo = ["onUpdate:modelValue", "multiple"], Ho = ["value"], Ko = ["onUpdate:modelValue", "type"], qo = ["aria-label", "onClick"], Go = { class: "flex items-center gap-2" }, Wo = /* @__PURE__ */ O({
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
    const u = (p) => "rules" in p, d = y(() => Object.keys(a.fields));
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
      const p = d.value[0];
      i.value.rules.push({
        field: p,
        operator: c(p)[0],
        value: void 0
      }), m();
    }
    function C() {
      i.value.rules.push(s()), m();
    }
    function x(p) {
      i.value.rules.splice(p, 1), m();
    }
    function k(p) {
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
      const $ = It("PkQueryBuilder", !0);
      return t(), n("div", {
        class: z(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", Do, [
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
        (t(!0), n(A, null, V(i.value.rules, (P, E) => (t(), n("div", {
          key: E,
          class: "flex items-start gap-2"
        }, [
          u(P) ? (t(), T($, {
            key: 0,
            modelValue: i.value.rules[E],
            "onUpdate:modelValue": [(I) => i.value.rules[E] = I, m],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(A, { key: 1 }, [
            pe(o("select", {
              "onUpdate:modelValue": (I) => P.field = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (I) => k(P)
            }, [
              (t(!0), n(A, null, V(d.value, (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(e.fields[I].label), 9, Eo))), 128))
            ], 40, Io), [
              [We, P.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (I) => P.operator = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: m
            }, [
              (t(!0), n(A, null, V(c(P.field), (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(v[I] ?? I), 9, No))), 128))
            ], 40, Fo), [
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
            ])], 40, Ro)), [
              [We, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? pe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (I) => P.value = I,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [
              (t(!0), n(A, null, V(e.fields[P.field].options, (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(I), 9, Ho))), 128))
            ], 40, Uo)), [
              [We, P.value]
            ]) : pe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (I) => P.value = I,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, null, 40, Ko)), [
              [Ka, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(P) ? "group" : "rule"}`,
            onClick: (I) => x(E)
          }, " × ", 8, qo)
        ]))), 128)),
        o("div", Go, [
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
}), Kt = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(ga), re({ "data-slot": "sheet" }, b(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(Ie(d)))
      ]),
      _: 3
    }, 16));
  }
});
function Q(...e) {
  return Jn(Zn(e));
}
function j4(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Zo = /* @__PURE__ */ O({
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
}), qt = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Ft), null, {
      default: j(() => [
        D(Zo),
        D(b(Nt), re({
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
                D(b(Rt), { class: "size-4" }),
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
}), Jo = { class: "flex flex-col gap-2" }, Yo = { class: "flex items-center gap-2 md:hidden" }, Xo = { class: "relative min-w-0 flex-1" }, Qo = ["placeholder", "title", "aria-label"], es = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, ts = { class: "flex max-h-[85vh] flex-col" }, as = { class: "flex-1 overflow-y-auto px-4 py-3" }, ns = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, ls = { class: "text-xs font-medium" }, os = ["value", "onChange"], ss = ["value"], rs = { class: "mb-4" }, is = { class: "flex flex-col gap-1" }, us = ["disabled", "onClick"], ds = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, cs = {
  key: 1,
  class: "mb-4"
}, fs = { class: "flex flex-col gap-1" }, ms = ["onClick"], ps = { class: "border-t p-4" }, vs = ["disabled"], gs = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, hs = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, bs = ["placeholder", "title", "aria-label"], ys = ["aria-label"], xs = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, ks = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, $s = { class: "text-xs font-medium" }, ws = ["value", "onChange"], Cs = ["value"], Ss = { class: "grid grid-cols-2 gap-2" }, Ms = ["value", "onChange"], Bs = ["value", "onChange"], _s = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Ps = ["value", "onChange"], zs = ["value", "onChange"], As = {
  key: 4,
  class: "flex items-center gap-2"
}, Os = ["aria-checked", "onClick"], js = { class: "text-xs" }, Ls = ["onClick"], Vs = ["value", "onChange"], Ts = ["value"], Ds = ["disabled", "onClick"], Is = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Es = ["disabled", "onClick"], Fs = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ns = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Rs = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, Us = ["aria-pressed", "aria-label", "title", "onClick"], Hs = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ks = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, qs = ["aria-pressed", "aria-label", "title"], Gs = ["aria-label", "title"], Ws = { class: "flex flex-col gap-0.5 p-1" }, Zs = ["onClick"], Js = ["onClick"], Ys = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, Xs = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Qs = ["dusk"], er = ["aria-label", "onClick"], tr = /* @__PURE__ */ O({
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
    const c = y(
      () => a.filterSchema.filter(
        (q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0
      ).length
    ), v = y(() => JSON.stringify(d.value) !== JSON.stringify(a.filters)), m = y(() => a.search !== "" || c.value > 0), g = y(() => a.indicators.length ? a.indicators : a.filterSchema.filter((q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0).map((q) => ({
      key: q.key,
      label: `${q.label}: ${String(a.filters[q.key])}`,
      removable: !0
    })));
    function C(q) {
      r("group", q);
    }
    function x(q) {
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
    function p(q, _) {
      d.value = { ...d.value, [q.key]: _ === "" ? null : _ };
    }
    function h(q, _) {
      const F = d.value[q.key];
      if (typeof F != "string" || !F.includes(".."))
        return "";
      const [L, J] = F.split("..");
      return _ === "from" ? L ?? "" : J ?? "";
    }
    function $(q, _, F) {
      const L = _ === "from" ? F : h(q, "from"), J = _ === "to" ? F : h(q, "to");
      d.value = {
        ...d.value,
        [q.key]: L && J ? `${L}..${J}` : null
      };
    }
    function P(q, _, F) {
      const L = _ === "from" ? F : h(q, "from"), J = _ === "to" ? F : h(q, "to");
      d.value = {
        ...d.value,
        [q.key]: L || J ? `${L}..${J}` : null
      };
    }
    function E(q) {
      r("apply-filters", { ...d.value }), q();
    }
    function I(q, _) {
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
    return (q, _) => (t(), n("div", Jo, [
      o("div", Yo, [
        o("div", Xo, [
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
          }, null, 10, Qo), [
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
          c.value ? (t(), n("span", es, f(c.value), 1)) : w("", !0)
        ]),
        D(Kt, {
          open: s.value,
          "onUpdate:open": _[4] || (_[4] = (F) => s.value = F)
        }, {
          default: j(() => [
            D(qt, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", ts, [
                  _[16] || (_[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", as, [
                    e.filterSchema.length ? (t(), n("div", ns, [
                      o("div", { class: "flex items-center justify-between" }, [
                        _[12] || (_[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: te
                        }, " Reset ")
                      ]),
                      (t(!0), n(A, null, V(e.filterSchema, (F) => (t(), n("div", {
                        key: `mobile-${F.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", ls, f(F.label), 1),
                        F.type !== "multiselect" && F.type !== "querybuilder" && F.type !== "daterange" && F.type !== "numberrange" && F.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: d.value[F.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (L) => p(F, L.target.value)
                        }, [
                          _[13] || (_[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(A, null, V(H(F), (L) => (t(), n("option", {
                            key: String(L.value),
                            value: L.value
                          }, f(L.label), 9, ss))), 128))
                        ], 40, os)) : w("", !0)
                      ]))), 128))
                    ])) : w("", !0),
                    o("div", rs, [
                      _[14] || (_[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", is, [
                        (t(!0), n(A, null, V(e.columns, (F) => (t(), n("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (L) => G(F.key)
                        }, [
                          o("span", null, f(F.label), 1),
                          K.value.has(F.key) ? w("", !0) : (t(), n("span", ds, "On"))
                        ], 8, us))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", cs, [
                      _[15] || (_[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", fs, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: _[2] || (_[2] = (F) => {
                            C(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), n(A, null, V(e.groups, (F) => (t(), n("button", {
                          key: F.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (L) => {
                            C(F.key), s.value = !1;
                          }
                        }, f(F.label), 9, ms))), 128))
                      ])
                    ])) : w("", !0)
                  ]),
                  o("div", ps, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !v.value,
                      onClick: ae
                    }, " Apply filters ", 8, vs)) : w("", !0),
                    m.value ? (t(), n("button", {
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
      o("div", gs, [
        o("div", hs, [
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
          }, null, 10, bs), [
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
              c.value ? (t(), n("span", xs, f(c.value), 1)) : w("", !0)
            ], 10, ys)
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
            o("div", ks, [
              (t(!0), n(A, null, V(e.filterSchema, (L) => (t(), n("div", {
                key: L.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", $s, f(L.label), 1),
                k(L) ? (t(), T(Ht, {
                  key: 0,
                  "model-value": S(L),
                  options: B(L),
                  placeholder: `Any ${L.label.toLowerCase()}`,
                  "onUpdate:modelValue": (J) => d.value[L.key] = J.length ? J : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : L.type === "querybuilder" ? (t(), T(Wo, {
                  key: 1,
                  "model-value": d.value[L.key] ?? null,
                  fields: L.fields ?? {},
                  operators: L.operators ?? {},
                  "max-depth": L.maxDepth ?? 5,
                  onApply: (J) => I(L.key, J)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : L.type === "daterange" ? (t(), n(A, { key: 2 }, [
                  o("select", {
                    value: typeof d.value[L.key] == "string" && !String(d.value[L.key]).includes("..") ? d.value[L.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (J) => p(L, J.target.value)
                  }, [
                    _[21] || (_[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(A, null, V(H(L), (J) => (t(), n("option", {
                      key: String(J.value),
                      value: J.value
                    }, f(J.label), 9, Cs))), 128))
                  ], 40, ws),
                  o("div", Ss, [
                    o("input", {
                      type: "date",
                      value: h(L, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => $(
                        L,
                        "from",
                        J.target.value
                      )
                    }, null, 40, Ms),
                    o("input", {
                      type: "date",
                      value: h(L, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => $(
                        L,
                        "to",
                        J.target.value
                      )
                    }, null, 40, Bs)
                  ])
                ], 64)) : L.type === "numberrange" ? (t(), n("div", _s, [
                  o("input", {
                    type: "number",
                    value: h(L, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => P(
                      L,
                      "from",
                      J.target.value
                    )
                  }, null, 40, Ps),
                  o("input", {
                    type: "number",
                    value: h(L, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => P(
                      L,
                      "to",
                      J.target.value
                    )
                  }, null, 40, zs)
                ])) : L.type === "boolean" ? (t(), n("div", As, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": d.value[L.key] === !0,
                    class: z([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      d.value[L.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (J) => p(L, d.value[L.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: z(["bg-background absolute top-0.5 size-4 rounded-full transition-all", d.value[L.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, Os),
                  o("span", js, f(L.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: z([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      d.value[L.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (J) => p(L, d.value[L.key] === !1 ? null : !1)
                  }, f(L.falseLabel ?? "No") + " only ", 11, Ls)
                ])) : (t(), n("select", {
                  key: 5,
                  value: d.value[L.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (J) => p(L, J.target.value)
                }, [
                  _[22] || (_[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(A, null, V(H(L), (J) => (t(), n("option", {
                    key: String(J.value),
                    value: J.value
                  }, f(J.label), 9, Ts))), 128))
                ], 40, Vs))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !v.value,
              onClick: (L) => E(F)
            }, " Apply filters ", 8, Ds)
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
            o("div", Is, [
              (t(!0), n(A, null, V(e.columns, (F) => (t(), n("button", {
                key: F.key,
                type: "button",
                class: z(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (L) => G(F.key)
              }, [
                K.value.has(F.key) ? (t(), n("span", Ns)) : (t(), n("svg", Fs, [..._[25] || (_[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + f(F.label), 1)
              ], 10, Es))), 128))
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
        e.layouts.length > 1 ? (t(), n("div", Rs, [
          (t(!0), n(A, null, V(e.layouts, (F) => (t(), n("button", {
            key: F,
            type: "button",
            class: z(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === F ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === F,
            "aria-label": F === "cards" ? "Card layout" : "Table layout",
            title: F === "cards" ? "Cards" : "Table",
            onClick: (L) => r("layout", F)
          }, [
            F === "table" ? (t(), n("svg", Hs, [..._[28] || (_[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", Ks, [..._[29] || (_[29] = [
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
          ], 10, Us))), 128))
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
        ])], 10, qs)) : w("", !0),
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
            ])], 10, Gs)
          ]),
          panel: j(({ close: F }) => [
            o("div", Ws, [
              o("button", {
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (L) => {
                  C(null), F();
                }
              }, " No grouping ", 10, Zs),
              (t(!0), n(A, null, V(e.groups, (L) => (t(), n("button", {
                key: L.key,
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === L.key ? "text-primary font-medium" : ""]),
                onClick: (J) => {
                  C(L.key), F();
                }
              }, f(L.label), 11, Js))), 128))
            ])
          ]),
          _: 1
        })) : w("", !0),
        m.value ? (t(), n("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: Z
        }, " Clear ")) : w("", !0),
        e.loading ? (t(), n("span", Ys, "Loading…")) : w("", !0)
      ]),
      g.value.length ? (t(), n("div", Xs, [
        (t(!0), n(A, null, V(g.value, (F) => (t(), n("span", {
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
            onClick: (L) => x(F.key)
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
          ])], 8, er)) : w("", !0)
        ], 8, Qs))), 128)),
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
}), ar = { class: "min-w-0" }, nr = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, lr = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, or = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, sr = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, rr = { class: "w-full border-collapse text-sm" }, ir = { class: "bg-muted/40" }, ur = { class: "divide-y" }, dr = ["href"], cr = {
  key: 1,
  class: "text-muted-foreground"
}, fr = {
  key: 0,
  class: "flex justify-center"
}, mr = ["disabled"], pr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, vr = ["href"], L4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = Tt(), i = y(() => a.columns.filter((C) => C.type !== "image")), u = y(() => !!s.actions), d = y(() => !!a.title || u.value), c = y(() => a.filterSchema.length > 0), v = y(
      () => a.columns.map((C) => ({ key: C.key, label: C.label, locked: !0 }))
    );
    function m(C, x) {
      return x == null || x === "" ? "None" : C.type === "date" || C.type === "datetime" ? new Date(String(x)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...C.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof x == "number" ? new Intl.NumberFormat().format(x) : String(x);
    }
    function g(C) {
      return C == null || C === "";
    }
    return (C, x) => (t(), T(Co, null, lt({
      default: j(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", or, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(Pt, {
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
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", sr, [
          o("table", rr, [
            o("thead", ir, [
              o("tr", null, [
                (t(!0), n(A, null, V(i.value, (k) => (t(), n("th", {
                  key: k.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f(k.label), 1))), 128))
              ])
            ]),
            o("tbody", ur, [
              (t(!0), n(A, null, V(e.rows, (k, M) => (t(), n("tr", {
                key: k.id ?? M,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(A, null, V(i.value, (S) => (t(), n("td", {
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
                    }, f(m(S, k[S.key])), 9, dr)) : g(k[S.key]) ? (t(), n("span", cr, " None ")) : (t(), n(A, { key: 2 }, [
                      N(f(m(S, k[S.key])), 1)
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
          o("div", ar, [
            e.title ? (t(), n("h3", nr, f(e.title), 1)) : w("", !0)
          ]),
          u.value ? (t(), n("div", lr, [
            U(C.$slots, "actions")
          ])) : w("", !0)
        ]),
        key: "0"
      } : void 0,
      c.value ? {
        name: "toolbar",
        fn: j(() => [
          D(tr, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: v.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": x[0] || (x[0] = (k) => r("update:search", k)),
            onApplyFilters: x[1] || (x[1] = (k) => r("apply-filters", k)),
            onClearFilters: x[2] || (x[2] = (k) => r("clear-filters")),
            onClearFilter: x[3] || (x[3] = (k) => r("clear-filter", k)),
            onClear: x[4] || (x[4] = (k) => r("clear-filters")),
            onApplyColumns: x[5] || (x[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: j(() => [
          e.nextCursor ? (t(), n("div", fr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: x[6] || (x[6] = (k) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, mr)
          ])) : e.capped ? (t(), n("p", pr, [
            N(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, vr)) : (t(), n(A, { key: 1 }, [
              N("Open the full list to search or filter the rest.")
            ], 64))
          ])) : w("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), gr = { class: "flex items-center gap-2 overflow-x-auto" }, hr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, br = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yr = { class: "flex flex-col" }, xr = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, kr = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, $r = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, wr = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("ol", gr, [
      (t(!0), n(A, null, V(e.steps, (m, g) => (t(), n("li", {
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
              d(g) ? (t(), n("svg", hr, [...v[0] || (v[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(g) ? (t(), n("svg", br, [...v[1] || (v[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(A, { key: 2 }, [
                N(f(g + 1), 1)
              ], 64))
            ], 2),
            o("span", yr, [
              o("span", null, f(m.label), 1),
              m.description ? (t(), n("span", xr, f(m.description), 1)) : w("", !0)
            ]),
            e.hasError(g) ? (t(), n("span", kr)) : w("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        g < e.steps.length - 1 ? (t(), n("span", $r)) : w("", !0)
      ]))), 128))
    ]));
  }
}), it = /* @__PURE__ */ new Map();
function xe(e, l) {
  it.set(e, l);
}
function Cr(e) {
  return it.get(e);
}
function V4(e) {
  return it.has(e);
}
function T4() {
  return [...it.keys()].sort();
}
function D4() {
  it.clear();
}
class Sr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function I4(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function Mr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function Br(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const E4 = "text-sm text-muted-foreground font-normal", F4 = "text-xs text-muted-foreground font-normal", ft = "text-xs text-muted-foreground font-normal leading-snug", _r = "text-foreground font-normal", Pr = "placeholder:text-muted-foreground placeholder:font-normal", Ne = `${_r} ${Pr}`, zr = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Ar = /* @__PURE__ */ O({
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
          e.generalError ? (t(), n("p", zr, f(e.generalError), 1)) : w("", !0),
          (t(!0), n(A, null, V(e.fields, (c) => (t(), T(Ye, {
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
}), Or = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Qa), re({ "data-slot": "checkbox" }, b(i), {
      class: b(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j((c) => [
        D(b(en), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            U(u.$slots, "default", ze(Ie(c)), () => [
              D(b($a), { class: "size-3.5" })
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
    return (i, u) => (t(), T(b(tn), re({ "data-slot": "switch" }, b(s), {
      class: b(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j(() => [
        D(b(an), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), jr = ["accept", "disabled"], Lr = { class: "text-sm font-medium" }, Vr = { key: 0 }, Tr = { key: 1 }, Dr = { class: "text-muted-foreground text-xs font-normal" }, Ir = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Er = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Fr = ["src"], Nr = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Rr = { class: "min-w-0 flex-1" }, Ur = { class: "block truncate text-sm font-medium" }, Hr = { class: "text-muted-foreground text-xs font-normal" }, Kr = ["href"], qr = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, Ma = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), u = R(null), d = R(null), c = R(null), v = y(() => a.accept.map((h) => `.${h}`).join(",")), m = y(() => c.value ?? a.modelValue?.url ?? null), g = y(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(a.maxKilobytes * 1024)}`);
    function C(h) {
      if (!h)
        return "";
      const $ = ["B", "KB", "MB", "GB"];
      let P = h, E = 0;
      for (; P >= 1024 && E < $.length - 1; )
        P /= 1024, E++;
      return `${P.toFixed(P < 10 && E > 0 ? 1 : 0)} ${$[E]}`;
    }
    function x(h) {
      return h.split(".").pop()?.toLowerCase() ?? "";
    }
    function k(h) {
      return a.accept.length && !a.accept.includes(x(h.name)) ? `${x(h.name).toUpperCase() || "That"} files are not accepted here.` : h.size > a.maxKilobytes * 1024 ? `That file is ${C(h.size)}; the limit is ${C(a.maxKilobytes * 1024)}.` : null;
    }
    async function M(h) {
      const $ = h?.[0];
      if (!(!$ || a.disabled) && (d.value = k($), !d.value)) {
        S(), a.image && $.type.startsWith("image/") && (c.value = URL.createObjectURL($)), u.value = 0;
        try {
          const P = await a.upload($, (E) => {
            u.value = E;
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
    function p(h) {
      i.value = !1, M(h.dataTransfer?.files ?? null);
    }
    return (h, $) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", Er, [
        e.image && m.value ? (t(), n("img", {
          key: 0,
          src: m.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Fr)) : (t(), n("span", Nr, f(x(e.modelValue.name) || "file"), 1)),
        o("span", Rr, [
          o("span", Ur, f(e.modelValue.name), 1),
          o("span", Hr, [
            N(f(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(A, { key: 0 }, [
              $[4] || ($[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Kr)
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
        onDrop: he(p, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: v.value,
          disabled: e.disabled,
          onChange: $[0] || ($[0] = (P) => M(P.target.files))
        }, null, 40, jr),
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
        o("span", Lr, [
          u.value === null ? (t(), n("span", Vr, "Drop a file or click to choose")) : (t(), n("span", Tr, "Uploading…"))
        ]),
        o("span", Dr, f(g.value), 1),
        u.value !== null ? (t(), n("span", Ir, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${u.value}%` })
          }, null, 4)
        ])) : w("", !0)
      ], 34)),
      d.value ? (t(), n("p", qr, f(d.value), 1)) : w("", !0)
    ]));
  }
}), Gr = { class: "flex flex-col gap-2" }, Wr = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Zr = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Jr = { class: "flex flex-col gap-1" }, Yr = ["onUpdate:modelValue", "disabled", "aria-label"], Xr = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Qr = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, ei = ["onUpdate:modelValue", "disabled", "aria-label"], ti = ["disabled", "aria-label", "onClick"], ai = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, ni = { class: "flex items-center gap-3" }, li = ["disabled"], oi = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, si = /* @__PURE__ */ O({
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
    const m = y(() => {
      const M = /* @__PURE__ */ new Map();
      for (const S of u.value) {
        const B = S.key.trim();
        B !== "" && M.set(B, (M.get(B) ?? 0) + 1);
      }
      return new Set([...M.entries()].filter(([, S]) => S > 1).map(([S]) => S));
    }), g = y(
      () => new Set(
        u.value.map((M) => M.key.trim()).filter((M) => M !== "" && !s.test(M))
      )
    ), C = y(() => a.maxPairs !== null && u.value.length >= a.maxPairs);
    function x() {
      C.value || a.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function k(M) {
      u.value = u.value.filter((S) => S.uid !== M), v();
    }
    return (M, S) => (t(), n("div", Gr, [
      u.value.length ? (t(), n("div", Wr, [
        o("div", Zr, [
          o("span", null, f(e.keyLabel), 1),
          o("span", null, f(e.valueLabel), 1),
          S[0] || (S[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(A, null, V(u.value, (B) => (t(), n("div", {
          key: B.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", Jr, [
            pe(o("input", {
              "onUpdate:modelValue": (p) => B.key = p,
              type: "text",
              class: z([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                m.value.has(B.key.trim()) || g.value.has(B.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: v
            }, null, 42, Yr), [
              [Me, B.key]
            ]),
            g.value.has(B.key.trim()) ? (t(), n("p", Xr, " Letters, numbers, underscores and dashes only. ")) : m.value.has(B.key.trim()) ? (t(), n("p", Qr, " Used twice - only the last value will be saved. ")) : w("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (p) => B.value = p,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: v
          }, null, 40, ei), [
            [Me, B.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${B.key || "this entry"}`,
            onClick: (p) => k(B.uid)
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
          ])], 8, ti)
        ]))), 128))
      ])) : (t(), n("p", ai, " Nothing here yet. ")),
      o("div", ni, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || C.value,
          onClick: x
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
        ], 8, li),
        e.maxPairs !== null ? (t(), n("p", oi, f(u.value.length) + " of " + f(e.maxPairs), 1)) : w("", !0)
      ])
    ]));
  }
}), ri = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, ii = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, ui = ["disabled", "title", "aria-label", "onClick"], di = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ci = ["d"], fi = ["disabled"], mi = ["contenteditable", "data-placeholder"], pi = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, vi = /* @__PURE__ */ O({
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
    ], d = y(() => u.filter((k) => a.toolbar.includes(k.id))), c = y(() => a.toolbar.includes("link")), v = R(0);
    function m() {
      const k = s.value?.innerHTML ?? "", M = (s.value?.innerText ?? "").trim();
      v.value = M.length;
      const S = M === "" ? null : k;
      i = S, r("update:modelValue", S);
    }
    function g(k) {
      a.disabled || (s.value?.focus(), document.execCommand(k.command, !1, k.argument), m());
    }
    function C() {
      if (a.disabled)
        return;
      const k = window.prompt("Link address");
      k && (s.value?.focus(), document.execCommand("createLink", !1, k), m());
    }
    function x(k) {
      k.preventDefault();
      const M = k.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, M), m();
    }
    return ge(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", v.value = s.value.innerText.trim().length);
    }), me(
      () => a.modelValue,
      (k) => {
        k !== i && s.value && (s.value.innerHTML = k ?? "", v.value = s.value.innerText.trim().length);
      }
    ), (k, M) => (t(), n("div", ri, [
      o("div", ii, [
        (t(!0), n(A, null, V(d.value, (S) => (t(), n("button", {
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
          (t(), n("svg", di, [
            o("path", {
              d: S.path
            }, null, 8, ci)
          ]))
        ], 40, ui))), 128)),
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
        ])], 40, fi)) : w("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: z(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: m,
        onBlur: m,
        onPaste: x
      }, null, 42, mi),
      e.maxLength !== null ? (t(), n("div", pi, f(v.value) + " / " + f(e.maxLength), 1)) : w("", !0)
    ]));
  }
}), gi = /* @__PURE__ */ bt(vi, [["__scopeId", "data-v-32c63bc7"]]), hi = {
  key: 1,
  class: "flex flex-col gap-2"
}, bi = { class: "flex items-center justify-between gap-2" }, yi = ["for"], xi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, ki = ["aria-label", "disabled"], $i = {
  key: 7,
  class: "flex flex-col gap-2"
}, wi = ["id", "value", "disabled"], Ci = ["value"], Si = {
  key: 0,
  class: "relative"
}, Mi = ["disabled"], Bi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, _i = { class: "max-h-56 overflow-y-auto p-1" }, Pi = ["onClick"], zi = {
  key: 8,
  class: "relative"
}, Ai = ["disabled", "aria-invalid"], Oi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, ji = { class: "max-h-56 overflow-y-auto p-1" }, Li = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Vi = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Ti = ["onClick"], Di = ["id", "value", "disabled", "aria-invalid"], Ii = ["value"], Ei = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Fi = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Ni = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Ri = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ui = ["aria-label", "disabled"], Hi = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Ki = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, qi = ["aria-label", "disabled"], Gi = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Wi = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Zi = ["aria-label", "disabled"], Ji = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Yi = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Xi = ["aria-label", "disabled"], Qi = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, eu = ["disabled", "aria-pressed", "onClick"], tu = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, au = ["title", "disabled", "onClick"], nu = ["href"], lu = {
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
    const a = ta(() => import("./PkRepeater-J84jGe3T.js")), r = ta(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = R(!1), d = R(""), c = R([]), v = R(!1), m = R(null);
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
    function x(le) {
      m.value = le.label, i("change", le.value), u.value = !1, d.value = "";
    }
    function k() {
      m.value = null, i("change", null);
    }
    const M = mt("panelPicker", null), S = mt("panelCreateOption", null), B = R(!1), p = R(!1), h = R({}), $ = R(null), P = y(() => Mr(s.field)), E = y(() => Br(s.field));
    function I() {
      h.value = {}, $.value = null, B.value = !0, u.value = !1;
    }
    function te() {
      p.value || (B.value = !1, h.value = {}, $.value = null);
    }
    async function H(le) {
      if (S) {
        p.value = !0, h.value = {}, $.value = null;
        try {
          const X = await S.run(s.field.key, { ...le });
          x(X), B.value = !1;
        } catch (X) {
          X instanceof Sr ? (h.value = X.fieldErrors, $.value = Object.keys(X.fieldErrors).length === 0 ? X.message : null) : $.value = X instanceof Error ? X.message : "Could not create that option.";
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
      m.value = le.label, Z(le.value), u.value = !1, d.value = "";
    }
    ke(() => clearTimeout(g));
    const _ = y(() => Cr(s.field.type)), F = y(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function L(le) {
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
    function ye(le) {
      const X = document.getElementById(`f-${s.field.key}`);
      if (!(X instanceof HTMLTextAreaElement) && !(X instanceof HTMLInputElement))
        return;
      const ne = X.selectionStart ?? X.value.length, Ce = X.selectionEnd ?? ne;
      X.setRangeText(le, ne, Ce, "end"), X.dispatchEvent(new Event("input", { bubbles: !0 })), X.focus();
    }
    return (le, X) => (t(), n(A, null, [
      e.field.type === "hidden" ? (t(), n(A, { key: 0 }, [], 64)) : (t(), n("div", hi, [
        o("div", bi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: z(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            N(f(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", xi, "*")) : w("", !0)
          ], 10, yi),
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
              onClick: X[0] || (X[0] = (ne) => L(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, ki)) : w("", !0)
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
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(Ma, {
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
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(gi, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[5] || (X[5] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(si, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[6] || (X[6] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Ht, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": X[7] || (X[7] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : G.value.length ? (t(), n("div", $i, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: oe.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", b(Se)]),
            onChange: X[8] || (X[8] = (ne) => ae(ne.target.value))
          }, [
            X[24] || (X[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(A, null, V(G.value, (ne) => (t(), n("option", {
              key: ne.value,
              value: ne.value
            }, f(ne.label), 9, Ci))), 128))
          ], 42, wi),
          oe.value.type && e.searchOptions ? (t(), n("div", Si, [
            o("button", {
              type: "button",
              class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Se)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: z(m.value || oe.value.id ? "" : "text-muted-foreground")
              }, f(m.value ?? (oe.value.id ? String(oe.value.id) : "Search…")), 3)
            ], 10, Mi),
            u.value ? (t(), n("div", Bi, [
              pe(o("input", {
                "onUpdate:modelValue": X[9] || (X[9] = (ne) => d.value = ne),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Me, d.value]
              ]),
              o("div", _i, [
                (t(!0), n(A, null, V(c.value, (ne) => (t(), n("button", {
                  key: String(ne.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => q(ne)
                }, f(ne.label), 9, Pi))), 128))
              ])
            ])) : w("", !0),
            u.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: X[10] || (X[10] = (ne) => u.value = !1)
            })) : w("", !0)
          ])) : w("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", zi, [
          o("button", {
            type: "button",
            class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Se)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: C
          }, [
            o("span", {
              class: z(m.value || e.value ? "" : "text-muted-foreground")
            }, f(m.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he(k, ["stop"])
            }, " ✕ ")) : w("", !0)
          ], 10, Ai),
          u.value ? (t(), n("div", Oi, [
            pe(o("input", {
              "onUpdate:modelValue": X[11] || (X[11] = (ne) => d.value = ne),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Me, d.value]
            ]),
            o("div", ji, [
              v.value ? (t(), n("p", Li, " Searching… ")) : c.value.length === 0 ? (t(), n("p", Vi, " No matches ")) : w("", !0),
              (t(!0), n(A, null, V(c.value, (ne) => (t(), n("button", {
                key: String(ne.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => x(ne)
              }, f(ne.label), 9, Ti))), 128)),
              e.field.createOption && b(S) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: I
              }, [
                X[25] || (X[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + f(E.value), 1)
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
          (t(!0), n(A, null, V(e.options, (ne) => (t(), n("option", {
            key: String(ne.value),
            value: ne.value
          }, f(ne.label), 9, Ii))), 128))
        ], 42, Di)) : e.field.type === "toggle" ? (t(), n("label", Ei, [
          D(b(Ze), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[14] || (X[14] = (ne) => i("change", ne))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: z(b(ft))
          }, f(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", Fi, [
          D(b(Or), {
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
        }, null, 42, Ni)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: z([
            "border-input flex overflow-hidden rounded-md border",
            b(aa),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Ri, f(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[17] || (X[17] = (ne) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Ui)) : w("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: z(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", b(Ne)]),
            onInput: X[18] || (X[18] = (ne) => i("change", ne.target.value))
          }, null, 42, Hi),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Ki, f(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[19] || (X[19] = (ne) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, qi)) : w("", !0)
        ], 2)) : F.value ? (t(), n("div", {
          key: 15,
          class: z([
            "border-input flex h-9 overflow-hidden rounded-md border",
            b(aa),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Wi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[21] || (X[21] = (ne) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Zi)) : w("", !0),
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
          }, null, 40, Ji),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Yi, f(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[23] || (X[23] = (ne) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Xi)) : w("", !0)
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
        }, null, 40, Gi)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", Qi, [
          (t(!0), n(A, null, V(e.field.presets, (ne) => (t(), n("button", {
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
          }, f(ne), 11, eu))), 128))
        ])) : w("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", tu, [
          (t(!0), n(A, null, V(e.field.chips, (ne, Ce) => (t(), n("button", {
            key: Ce,
            type: "button",
            title: ne,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (Qt) => ye(String(Ce))
          }, f(Ce), 9, au))), 128))
        ])) : w("", !0),
        K.value ? (t(), n("a", {
          key: 18,
          href: K.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, nu)) : w("", !0),
        e.error ? (t(), n("p", lu, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: z(b(ft))
        }, f(e.field.help), 3)) : w("", !0)
      ])),
      e.field.createOption && b(S) ? (t(), T(Ar, {
        key: 2,
        open: B.value,
        title: P.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: p.value,
        errors: h.value,
        "general-error": $.value,
        onClose: te,
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
}, bu = { class: "text-sm font-medium" }, yu = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, xu = {
  key: 0,
  class: "mb-1 font-medium"
}, ku = ["onClick"], $u = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, wu = { class: "flex items-center justify-between gap-3 border-t p-4" }, Cu = ["disabled"], Ba = /* @__PURE__ */ O({
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
    function x(B = 1) {
      return B >= 4 ? "md:col-span-4" : B === 3 ? "md:col-span-3" : B === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function k(B) {
      const p = [], h = ($) => {
        $.component === "field" && $.key && p.push($.key), $.children?.forEach(h);
      };
      return h(B), p.some(($) => a.errors[$]);
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
      const h = It("SchemaNode", !0);
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
        onChange: p[0] || (p[0] = ($) => r("change", e.node.key, $)),
        onAffixAction: p[1] || (p[1] = ($) => r("affix-action", e.node.key, $))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && M(e.node) ? (t(), n("section", {
        key: 1,
        class: z(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: z(["flex items-start justify-between gap-3", [
            c.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: p[2] || (p[2] = ($) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", ou, [
            e.node.icon ? (t(), n("div", su, [
              (t(), n("svg", ru, [
                o("path", {
                  d: b(ce)(e.node.icon)
                }, null, 8, iu)
              ]))
            ])) : w("", !0),
            o("div", uu, [
              o("h3", du, f(e.node.label), 1),
              e.node.description ? (t(), n("p", cu, f(e.node.description), 1)) : w("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...p[24] || (p[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : w("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [g.value, c.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(A, null, V(e.node.children ?? [], ($, P) => (t(), T(h, {
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
            onChange: p[3] || (p[3] = (E, I) => r("change", E, I)),
            onAffixAction: p[4] || (p[4] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "card" && M(e.node) ? (t(), n("section", fu, [
        o("header", mu, [
          o("h3", pu, f(e.node.title), 1),
          e.node.description ? (t(), n("p", vu, f(e.node.description), 1)) : w("", !0)
        ]),
        o("div", {
          class: z(["grid grid-cols-1 gap-4 px-4 py-4", g.value])
        }, [
          (t(!0), n(A, null, V(e.node.children ?? [], ($, P) => (t(), T(h, {
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
            onChange: p[5] || (p[5] = (E, I) => r("change", E, I)),
            onAffixAction: p[6] || (p[6] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && M(e.node) ? (t(), n("div", {
        key: 3,
        class: z(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), n(A, null, V(e.node.children ?? [], ($, P) => (t(), T(h, {
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
          class: z($.component === "column" ? x($.span) : ""),
          onChange: p[7] || (p[7] = (E, I) => r("change", E, I)),
          onAffixAction: p[8] || (p[8] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && M(e.node) ? (t(), n("div", gu, [
        (t(!0), n(A, null, V(e.node.children ?? [], ($, P) => (t(), T(h, {
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
          onChange: p[9] || (p[9] = (E, I) => r("change", E, I)),
          onAffixAction: p[10] || (p[10] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), n("div", {
        key: 5,
        class: z(["grid grid-cols-1 gap-4", g.value])
      }, [
        (t(!0), n(A, null, V(e.node.children ?? [], ($, P) => (t(), T(h, {
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
          onChange: p[11] || (p[11] = (E, I) => r("change", E, I)),
          onAffixAction: p[12] || (p[12] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 6,
        class: z(["flex", v.value])
      }, [
        (t(!0), n(A, null, V(e.node.children ?? [], ($, P) => (t(), T(h, {
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
          onChange: p[13] || (p[13] = (E, I) => r("change", E, I)),
          onAffixAction: p[14] || (p[14] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", hu, [
        o("legend", bu, f(e.node.label), 1),
        e.node.description ? (t(), n("p", yu, f(e.node.description), 1)) : w("", !0),
        o("div", {
          class: z(["grid grid-cols-1 gap-4", g.value])
        }, [
          (t(!0), n(A, null, V(e.node.children ?? [], ($, P) => (t(), T(h, {
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
            onChange: p[15] || (p[15] = (E, I) => r("change", E, I)),
            onAffixAction: p[16] || (p[16] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 8,
        role: "note",
        class: z(["rounded-lg border px-4 py-3 text-sm", m.value])
      }, [
        e.node.title ? (t(), n("p", xu, f(e.node.title), 1)) : w("", !0),
        o("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: z(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", c.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(A, null, V(e.node.children ?? [], ($, P) => (t(), n("button", {
            key: P,
            type: "button",
            class: z([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === P ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (E) => i.value = P
          }, [
            N(f($.label) + " ", 1),
            k($) ? (t(), n("span", $u)) : w("", !0)
          ], 10, ku))), 128))
        ], 2),
        (t(!0), n(A, null, V(e.node.children ?? [], ($, P) => pe((t(), n("div", {
          key: P,
          class: z(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(A, null, V($.children ?? [], (E, I) => (t(), T(h, {
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
          [Ue, i.value === P]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 10,
        class: z(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        D(wr, {
          class: z(["p-4", c.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": ($) => k((e.node.children ?? [])[$]),
          "onUpdate:activeStep": p[19] || (p[19] = ($) => u.value = $)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(A, null, V(e.node.children ?? [], ($, P) => pe((t(), n("div", {
          key: P,
          class: z(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(A, null, V($.children ?? [], (E, I) => (t(), T(h, {
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
          [Ue, u.value === P]
        ])), 128)),
        o("div", wu, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: p[22] || (p[22] = ($) => u.value--)
          }, " Back ", 8, Cu),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: p[23] || (p[23] = ($) => u.value++)
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
          (t(!0), n(A, null, V(e.form?.nodes ?? [], (c, v) => (t(), T(Ba, {
            key: v,
            node: c,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: d[0] || (d[0] = (m, g) => s.value[m] = g)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), Su = ["title"], Mu = ["aria-label"], Bu = ["d"], _u = { class: "sr-only" }, Pu = /* @__PURE__ */ O({
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
    return (v, m) => (t(), n("span", {
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
        o("path", { d: u.value }, null, 8, Bu)
      ], 10, Mu)),
      o("span", _u, f(c.value), 1)
    ], 8, Su));
  }
}), zu = ["aria-label"], Au = ["fill"], R4 = /* @__PURE__ */ O({
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
      (t(!0), n(A, null, V(a.value, (u) => (t(), n("svg", {
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
        }, null, 8, Au)
      ]))), 128))
    ], 8, zu));
  }
}), Ou = ["src"], ju = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Lu = /* @__PURE__ */ O({
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
      class: z(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (c) => a.value = !0)
      }, null, 40, Ou)) : e.fallback === "initials" ? (t(), n(A, { key: 1 }, [
        N(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", ju, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : w("", !0)
    ], 2));
  }
}), Vu = {
  key: 0,
  class: "text-muted-foreground"
}, Tu = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Du = {
  key: 0,
  class: "font-mono text-xs"
}, Iu = {
  key: 1,
  class: "sr-only"
}, Eu = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), n("span", Vu, "-")) : (t(), n("span", Tu, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Du, f(r.value), 1)) : (t(), n("span", Iu, f(r.value), 1))
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
      o("span", Ru, f(r.value), 1)
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
    return (r, s) => a.value ? (t(), n("code", Hu, f(a.value), 1)) : (t(), n("span", Uu, "—"));
  }
}), Ku = {
  key: 0,
  class: "font-mono text-xs"
}, qu = {
  key: 1,
  class: "text-muted-foreground"
}, Gu = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, K4 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", Ku, f(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", qu, "—")) : (t(), n("span", Gu, f(a.value.length) + " " + f(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Wu = ["data-variant"], Zu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ke = /* @__PURE__ */ O({
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
      class: z(r.value)
    }, [
      U(s.$slots, "default")
    ], 10, Wu));
  }
}), Ju = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
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
            const v = JSON.parse(c);
            if (Array.isArray(v))
              return a(v, d);
          } catch {
          }
        return c.split(d).map((v) => v.trim()).filter((v) => v !== "");
      }
      return [String(u)];
    }
    const r = y(() => a(l.value, l.separator)), s = y(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = y(() => Math.max(0, r.value.length - s.value.length));
    return (u, d) => r.value.length === 0 ? (t(), n("span", Ju, "None")) : (t(), n("span", Yu, [
      (t(!0), n(A, null, V(s.value, (c) => (t(), T(Ke, {
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
    function c(v) {
      const m = v.target.value;
      m !== String(a.value ?? "") && r("change", m);
    }
    return (v, m) => e.type === "toggle" ? (t(), n("button", {
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
    ], 10, Xu)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: m[0] || (m[0] = he(() => {
      }, ["stop"])),
      onChange: c
    }, [
      (t(!0), n(A, null, V(e.options, (g, C) => (t(), n("option", {
        key: C,
        value: C
      }, f(g), 9, ed))), 128))
    ], 40, Qu));
  }
}), Gt = {
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
    return Gt[c] ?? "outline";
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
    function d(g) {
      return typeof g == "boolean" ? g ? "1" : "" : String(g ?? "");
    }
    function c(g) {
      const C = a.colors[d(g)] ?? a.defaultColor ?? "neutral";
      return Gt[C] ?? "outline";
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
            (t(), n("svg", ld, [
              o("path", {
                d: b(ce)("chevron-down")
              }, null, 8, od)
            ]))
          ], 8, nd)
        ]),
        panel: j(({ close: x }) => [
          o("div", sd, f(u.value), 1),
          (t(!0), n(A, null, V(e.options, (k, M) => (t(), n("button", {
            key: M,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (S) => m(String(M), x)
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
            String(M) === i.value ? (t(), n("svg", id, [
              o("path", {
                d: b(ce)("check")
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
}, hd = ["d"], bd = ["disabled", "onClick"], yd = ["d"], xd = {
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
    const r = e, s = a, i = R(null), u = R(null), d = y(() => r.groups.flatMap((S) => S.actions)), c = y(() => d.value.filter((S) => !S.destructive)), v = y(() => d.value.filter((S) => S.destructive)), m = {
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
    const C = y(() => d.value.length === 0);
    function x(S) {
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
      const p = B.indexOf(document.activeElement), h = S.key === "ArrowDown" ? 1 : -1, $ = (p + h + B.length) % B.length;
      B[$]?.focus();
    }
    return l({ openContextMenu: k }), (S, B) => (t(), n("div", cd, [
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
            (t(), n("svg", md, [
              o("path", {
                d: b(ce)("more-vertical")
              }, null, 8, pd)
            ]))
          ], 8, fd)
        ]),
        panel: j(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: M
          }, [
            (t(!0), n(A, null, V(c.value, (p) => (t(), n(A, {
              key: p.key
            }, [
              p.link ? (t(), n("a", {
                key: 0,
                href: p.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g(p)])
              }, [
                (t(), n("svg", gd, [
                  o("path", {
                    d: b(ce)(p.icon)
                  }, null, 8, hd)
                ])),
                N(" " + f(p.label), 1)
              ], 10, vd)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", g(p)]),
                disabled: e.busy === p.key,
                onClick: (h) => x(p)
              }, [
                (t(), n("svg", {
                  class: z(["size-4 shrink-0", e.busy === p.key && "animate-pulse"]),
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
                  }, null, 8, yd)
                ], 2)),
                N(" " + f(p.label), 1)
              ], 10, bd))
            ], 64))), 128)),
            v.value.length ? (t(), n("div", xd, [
              (t(!0), n(A, null, V(v.value, (p) => (t(), n("button", {
                key: p.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === p.key,
                onClick: (h) => x(p)
              }, [
                (t(), n("svg", $d, [
                  o("path", {
                    d: b(ce)(p.icon ?? "trash")
                  }, null, 8, wd)
                ])),
                N(" " + f(p.label), 1)
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
}, pt = 12, vt = 20, Cd = [0, 0.25, 0.5, 0.75, 1], Wt = "alxtexhpanel.appearance", je = {
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
let na = !1;
const Sd = "alxtexhpanel.appearance.vars";
function Ot(e) {
  return e.theme === "dark";
}
const la = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, oa = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function Md(e) {
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
    "--pk-row-padding": la[e.density] ?? la.comfortable,
    "--pk-form-gap": oa[e.density] ?? oa.comfortable
  };
}
function Zt() {
  if (typeof window > "u")
    return { ...je };
  try {
    const e = localStorage.getItem(Wt);
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
function Y4(e) {
  const l = Zt(), a = e ? { ...l, ...e } : l;
  if (Fe.value = a, jt(a), e)
    try {
      localStorage.setItem(Wt, JSON.stringify(a));
    } catch {
    }
}
let _a = null;
function X4(e) {
  _a = e;
}
let Pa = {};
function Bd(e) {
  if (Pa = e, !(typeof document > "u") && !Zt().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function jt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...Md(e), ...e.primaryChosen ? {} : Pa };
  l.classList.toggle("dark", Ot(e));
  for (const [r, s] of Object.entries(a))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Sd,
      JSON.stringify({ dark: Ot(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function za() {
  function e(r) {
    jt(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Fe.value = { ...Fe.value, ...r, ...s };
    try {
      localStorage.setItem(Wt, JSON.stringify(Fe.value));
    } catch {
    }
    e(Fe.value), _a?.({ ...r, ...s });
  }
  function a() {
    l({ ...je });
  }
  return ge(() => {
    na || (na = !0, Fe.value = Zt(), jt(Fe.value));
  }), {
    appearance: y(() => Fe.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: zt,
    SURFACE_TINTS: At,
    FONT_SIZE_MIN: pt,
    FONT_SIZE_MAX: vt,
    RADIUS_OPTIONS: Cd
  };
}
const _d = { class: "flex items-center justify-between border-b px-4 py-3" }, Pd = { class: "flex items-center gap-2" }, zd = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Ad = { class: "flex flex-col gap-2" }, Od = { class: "grid grid-cols-8 gap-2" }, jd = ["title", "aria-label", "aria-pressed", "onClick"], Ld = { class: "flex flex-col gap-2" }, Vd = { class: "grid grid-cols-8 gap-2" }, Td = ["title", "aria-label", "aria-pressed", "onClick"], Dd = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Id = { class: "flex flex-col gap-2" }, Ed = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Fd = ["aria-pressed", "aria-label", "onClick"], Nd = { class: "text-sm font-semibold" }, Rd = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Ud = ["onClick"], Hd = { class: "flex flex-col gap-2" }, Kd = { class: "flex items-center justify-between" }, qd = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Gd = { class: "flex items-center gap-2" }, Wd = ["disabled"], Zd = ["min", "max", "value"], Jd = ["disabled"], Q4 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = za(), d = R(!1), c = y(() => l.value.sidebarSide === "right"), v = [
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
    ], x = [
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
        onClick: B[0] || (B[0] = (p) => d.value = !0)
      }, [...B[7] || (B[7] = [
        Dt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
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
              onClick: B[1] || (B[1] = (p) => d.value = !1)
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
              o("header", _d, [
                B[9] || (B[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", Pd, [
                  o("button", {
                    class: "text-muted-foreground text-xs font-normal hover:underline",
                    onClick: B[2] || (B[2] = //@ts-ignore
                    (...p) => b(r) && b(r)(...p))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: B[3] || (B[3] = (p) => d.value = !1)
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
              o("div", zd, [
                o("section", Ad, [
                  B[11] || (B[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", Od, [
                    (t(!0), n(A, null, V(b(s), (p, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: se({ background: p.value }),
                      title: p.label,
                      "aria-label": p.label,
                      "aria-pressed": b(l).primary === h,
                      onClick: ($) => b(a)({ primary: h })
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
                      ])], 4)) : w("", !0)
                    ], 12, jd))), 128))
                  ])
                ]),
                o("section", Ld, [
                  B[13] || (B[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", Vd, [
                    (t(!0), n(A, null, V(b(i), (p, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: se({ background: M(p.hue, p.chroma) }),
                      title: p.label,
                      "aria-label": p.label,
                      "aria-pressed": b(l).surface === h,
                      onClick: ($) => b(a)({ surface: h })
                    }, [
                      b(l).surface === h ? (t(), n("svg", Dd, [...B[12] || (B[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : w("", !0)
                    ], 12, Td))), 128))
                  ])
                ]),
                o("section", Id, [
                  B[14] || (B[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", Ed, [
                    (t(!0), n(A, null, V(b(u), (p) => (t(), n("button", {
                      key: p,
                      type: "button",
                      class: z([
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
                    ], 10, Fd))), 128))
                  ])
                ]),
                (t(!0), n(A, null, V([
                  { label: "Color scheme", key: "theme", options: v },
                  { label: "Card style", key: "cardStyle", options: g },
                  { label: "Density", key: "density", options: m },
                  { label: "Sidebar", key: "sidebarSide", options: C },
                  { label: "Content layout", key: "contentLayout", options: x },
                  { label: "Menu style", key: "menuStyle", options: k }
                ], (p) => (t(), n("section", {
                  key: p.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", Nd, f(p.label), 1),
                  o("div", Rd, [
                    (t(!0), n(A, null, V(p.options, (h) => (t(), n("button", {
                      key: String(h.value),
                      type: "button",
                      class: z([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l)[p.key] === h.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: ($) => b(a)({ [p.key]: h.value })
                    }, f(h.label), 11, Ud))), 128))
                  ])
                ]))), 128)),
                o("section", Hd, [
                  o("div", Kd, [
                    B[15] || (B[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", qd, f(b(l).fontSize) + "px", 1)
                  ]),
                  o("div", Gd, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize <= b(pt),
                      "aria-label": "Decrease font size",
                      onClick: B[4] || (B[4] = (p) => b(a)({ fontSize: b(l).fontSize - 1 }))
                    }, " − ", 8, Wd),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: b(pt),
                      max: b(vt),
                      value: b(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: B[5] || (B[5] = (p) => b(a)({
                        fontSize: Number(p.target.value)
                      }))
                    }, null, 40, Zd),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize >= b(vt),
                      "aria-label": "Increase font size",
                      onClick: B[6] || (B[6] = (p) => b(a)({ fontSize: b(l).fontSize + 1 }))
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
}, oc = ["d"], sc = { class: "w-full truncate text-center" }, Ct = 5, e5 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.items.length <= Ct ? a.items : a.items.slice(0, Ct - 1)
    ), i = y(() => a.items.length > Ct);
    function u(d) {
      return d === "/" ? a.current === "/" : a.current === d || a.current.startsWith(`${d}/`);
    }
    return (d, c) => (t(), n("nav", Yd, [
      o("ul", Xd, [
        (t(!0), n(A, null, V(s.value, (v) => (t(), n("li", {
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
            (t(), n("svg", ec, [
              o("path", {
                d: b(ce)(v.icon)
              }, null, 8, tc)
            ])),
            o("span", ac, f(v.title), 1)
          ], 10, Qd)
        ]))), 128)),
        i.value ? (t(), n("li", nc, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: c[0] || (c[0] = (v) => r("more"))
          }, [
            (t(), n("svg", lc, [
              o("path", {
                d: b(ce)("more-horizontal")
              }, null, 8, oc)
            ])),
            o("span", sc, f(e.moreLabel), 1)
          ])
        ])) : w("", !0)
      ])
    ]));
  }
}), rc = ["value"], $e = /* @__PURE__ */ O({
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
    }, null, 42, rc));
  }
}), ic = ["for"], _e = /* @__PURE__ */ O({
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
    ], 10, ic));
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
}), uc = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, dc = ["id", "name", "value", "disabled", "maxlength"], cc = ["data-active"], fc = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, mc = /* @__PURE__ */ O({
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
      () => Array.from({ length: a.length }, (B, p) => a.modelValue[p] ?? "")
    ), c = y(() => Math.min(a.modelValue.length, a.length - 1));
    function v(B) {
      return B.replace(/\D/g, "").slice(0, a.length);
    }
    function m(B) {
      a.disabled || B.length !== a.length || u.value !== B && (u.value = B, r("complete", B));
    }
    function g(B) {
      const p = v(B);
      p !== a.modelValue && r("update:modelValue", p), m(p);
    }
    function C(B) {
      g(B.target.value);
    }
    function x(B) {
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
        B.length < a.length ? u.value = "" : m(B);
      }
    );
    let S;
    return ge(() => {
      S = window.setInterval(() => {
        if (a.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && k();
      }, 250);
    }), qa(() => {
      S !== void 0 && window.clearInterval(S);
    }), (B, p) => (t(), n("div", uc, [
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
        onChange: x,
        onAnimationstart: M,
        onFocus: p[0] || (p[0] = (h) => s.value = !0),
        onBlur: p[1] || (p[1] = (h) => s.value = !1)
      }, null, 40, dc),
      (t(!0), n(A, null, V(d.value, (h, $) => (t(), n("div", {
        key: $,
        "data-slot": "input-otp-slot",
        "data-active": s.value && $ === c.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(f(h) + " ", 1),
        s.value && $ === c.value && h === "" ? (t(), n("div", fc, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : w("", !0)
      ], 8, cc))), 128))
    ]));
  }
}), a5 = /* @__PURE__ */ bt(mc, [["__scopeId", "data-v-560616ac"]]), pc = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Ve = /* @__PURE__ */ O({
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
      e.description ? (t(), n("p", pc, f(e.description), 1)) : w("", !0)
    ], 2));
  }
}), vc = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, gc = { class: "min-w-0 space-y-1" }, hc = { class: "flex flex-wrap items-center gap-2.5" }, bc = { class: "text-2xl font-semibold tracking-tight" }, yc = {
  key: 0,
  class: "flex items-center gap-2"
}, xc = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, kc = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, n5 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", vc, [
      o("div", gc, [
        o("div", hc, [
          o("h1", bc, f(e.title), 1),
          l.$slots.status ? (t(), n("div", yc, [
            U(l.$slots, "status")
          ])) : w("", !0)
        ]),
        e.purpose ? (t(), n("p", xc, f(e.purpose), 1)) : w("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", kc, [
        U(l.$slots, "actions")
      ])) : w("", !0)
    ]));
  }
}), $c = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: z(b(Q)(b(Sc)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), wc = /* @__PURE__ */ O({
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
}), Cc = /* @__PURE__ */ O({
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
}), Sc = Ut(
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
), Mc = { class: "list-inside list-disc text-sm" }, l5 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(b($c), { variant: "destructive" }, {
      default: j(() => [
        D(b(Dn), { class: "size-4" }),
        D(b(Cc), null, {
          default: j(() => [
            N(f(e.title), 1)
          ]),
          _: 1
        }),
        D(b(wc), null, {
          default: j(() => [
            o("ul", Mc, [
              (t(!0), n(A, null, V(a.value, (i, u) => (t(), n("li", { key: u }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Aa = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = Ca(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, u) => pe((t(), n("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => Ga(s) ? s.value = d : null),
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
}), Bc = { class: "relative" }, _c = ["aria-label"], o5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = R(!1), s = Wa("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), n("div", Bc, [
      D(b(Aa), re({
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
        r.value ? (t(), T(b(In), {
          key: 0,
          class: "size-4"
        })) : (t(), T(b(En), {
          key: 1,
          class: "size-4"
        }))
      ], 10, _c)
    ]));
  }
}), Oa = "@container min-w-0", Pc = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", s5 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", zc = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3", qe = "w-full min-w-0 px-4 py-6 sm:px-6", r5 = "w-full min-w-0 p-3 sm:p-4", i5 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", u5 = "w-full max-w-5xl";
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
function sa(e, l) {
  return `${e}:${l}`;
}
function c5(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Lt(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function f5(e, l, a, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: a }
  ], i = /* @__PURE__ */ new Map();
  for (const c of s)
    for (const v of c.items)
      i.set(sa(c.kind, v.key), {
        kind: c.kind,
        source: v
      });
  const u = [], d = /* @__PURE__ */ new Set();
  for (const c of r?.widgets ?? []) {
    const v = c.id.toLowerCase(), m = i.get(v);
    m && (d.add(v), u.push({
      id: v,
      kind: m.kind,
      key: m.source.key,
      span: Lt(c.span),
      hidden: !!c.hidden,
      source: m.source
    }));
  }
  for (const c of s)
    for (const v of c.items) {
      const m = sa(c.kind, v.key);
      d.has(m) || u.push({
        id: m,
        kind: c.kind,
        key: v.key,
        span: Lt(v.span),
        hidden: !1,
        source: v
      });
    }
  return u;
}
function m5(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Lt(l.span),
      hidden: !!l.hidden
    }))
  };
}
const ja = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Ac = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Oc = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function jc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function Lc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Vc(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await Tc(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function Tc(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Dc(e) {
  if (jc(e))
    throw new Error(Oc);
  if (!Lc(e))
    throw new Error(ja);
  if (!await Vc(e))
    throw new Error(Ac);
}
const p5 = /* @__PURE__ */ O({
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
}), Ic = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(ha), re({
      "data-slot": "sheet-description",
      class: b(Q)("text-sm text-muted-foreground font-normal", l.class)
    }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), v5 = /* @__PURE__ */ O({
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
}), Ec = /* @__PURE__ */ O({
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
}), Fc = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(ba), re({
      "data-slot": "sheet-title",
      class: b(Q)("text-foreground font-semibold", l.class)
    }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g5 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(ya), re({ "data-slot": "sheet-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ra = "sidebar_state", Nc = 3600 * 24 * 7, Rc = "16rem", Uc = "18rem", Hc = "3rem", Kc = "b", [yt, qc] = nn("Sidebar"), Gc = { class: "flex h-full w-full flex-col" }, Wc = ["data-state", "data-collapsible", "data-variant", "data-side"], Zc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, h5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = yt();
    return (u, d) => e.collapsible === "none" ? (t(), n("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: b(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      U(u.$slots, "default")
    ], 16)) : b(a) ? (t(), T(b(Kt), re({
      key: 1,
      open: b(s)
    }, u.$attrs, { "onUpdate:open": b(i) }), {
      default: j(() => [
        D(b(qt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": b(Uc)
          })
        }, {
          default: j(() => [
            D(Ec, { class: "sr-only" }, {
              default: j(() => [
                D(Fc, null, {
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
            o("div", Gc, [
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
        o("div", Zc, [
          U(u.$slots, "default")
        ])
      ], 16)
    ], 8, Wc));
  }
}), b5 = /* @__PURE__ */ O({
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
}), y5 = /* @__PURE__ */ O({
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
}), x5 = /* @__PURE__ */ O({
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
}), k5 = /* @__PURE__ */ O({
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
}), $5 = /* @__PURE__ */ O({
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
}), w5 = /* @__PURE__ */ O({
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
}), C5 = /* @__PURE__ */ O({
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
}), S5 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Aa), {
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
}), M5 = /* @__PURE__ */ O({
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
}), B5 = /* @__PURE__ */ O({
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
}), _5 = /* @__PURE__ */ O({
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
}), P5 = /* @__PURE__ */ O({
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
}), Jc = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(ln), re({ "data-slot": "tooltip" }, b(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(Ie(d)))
      ]),
      _: 3
    }, 16));
  }
}), Yc = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(on), null, {
      default: j(() => [
        D(b(sn), re({ "data-slot": "tooltip-content" }, { ...b(i), ...u.$attrs }, {
          class: b(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: j(() => [
            U(u.$slots, "default"),
            D(b(rn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), z5 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(xa), ze(Ie(l)), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xc = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(un), re({ "data-slot": "tooltip-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ia = /* @__PURE__ */ O({
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
      class: b(Q)(b(ef)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), A5 = /* @__PURE__ */ O({
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
    const l = e, { isMobile: a, state: r } = yt(), s = fe(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), T(b(Jc), { key: 1 }, {
      default: j(() => [
        D(b(Xc), { "as-child": "" }, {
          default: j(() => [
            D(ia, ze(Ie({ ...b(s), ...i.$attrs })), {
              default: j(() => [
                U(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(b(Yc), {
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
    })) : (t(), T(ia, ze(re({ key: 0 }, { ...b(s), ...i.$attrs })), {
      default: j(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O5 = /* @__PURE__ */ O({
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
}), ua = "animate-pulse rounded-md bg-primary/10", j5 = /* @__PURE__ */ O({
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
      class: z(b(Q)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: z(b(Q)(ua, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : w("", !0),
      o("div", {
        class: z(b(Q)(ua, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), L5 = /* @__PURE__ */ O({
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
}), V5 = /* @__PURE__ */ O({
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
}), T5 = /* @__PURE__ */ O({
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
}), D5 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Wn?.cookie.includes(`${ra}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = qn("(max-width: 767px)"), i = R(!1), u = Ca(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function d(g) {
      u.value = g, document.cookie = `${ra}=${u.value}; path=/; max-age=${Nc}`;
    }
    function c(g) {
      i.value = g;
    }
    function v() {
      return s.value ? c(!i.value) : d(!u.value);
    }
    Gn("keydown", (g) => {
      g.key === Kc && (g.metaKey || g.ctrlKey) && (g.preventDefault(), v());
    });
    const m = y(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return qc({
      state: m,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: c,
      toggleSidebar: v
    }), (g, C) => (t(), T(b(xa), { "delay-duration": 0 }, {
      default: j(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(Rc),
            "--sidebar-width-icon": b(Hc)
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
}), I5 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = yt();
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
}), Qc = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(b(dn), re({ "data-slot": "separator" }, b(a), {
      class: b(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), E5 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Qc), {
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
}), F5 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = yt();
    return (i, u) => (t(), T(de, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: z(b(Q)("h-7 w-7", l.class)),
      onClick: b(s)
    }, {
      default: j(() => [
        b(a) || b(r) === "collapsed" ? (t(), T(b(Fn), { key: 0 })) : (t(), T(b(Nn), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), ef = Ut(
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
), N5 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(cn), re({ "data-slot": "dropdown-menu" }, b(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(Ie(d)))
      ]),
      _: 3
    }, 16));
  }
}), tf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, R5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(fn), re({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", tf, [
          D(b(ka), null, {
            default: j(() => [
              U(u.$slots, "indicator-icon", {}, () => [
                D(b($a), { class: "size-4" })
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
}), U5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(mn), null, {
      default: j(() => [
        D(b(pn), re({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...b(i) }, {
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
}), H5 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(vn), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), K5 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(b(gn), re({
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
}), q5 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fe(l, "class", "inset"), r = Ae(a);
    return (s, i) => (t(), T(b(hn), re({
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
}), G5 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, u) => (t(), T(b(bn), re({ "data-slot": "dropdown-menu-radio-group" }, b(s)), {
      default: j(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), af = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, W5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(yn), re({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", af, [
          D(b(ka), null, {
            default: j(() => [
              U(u.$slots, "indicator-icon", {}, () => [
                D(b(Rn), { class: "size-2 fill-current" })
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
}), Z5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(xn), re({ "data-slot": "dropdown-menu-separator" }, b(a), {
      class: b(Q)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), J5 = /* @__PURE__ */ O({
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
}), Y5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, u) => (t(), T(b(kn), re({ "data-slot": "dropdown-menu-sub" }, b(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(Ie(d)))
      ]),
      _: 3
    }, 16));
  }
}), X5 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b($n), re({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
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
}), Q5 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(b(wn), re({ "data-slot": "dropdown-menu-sub-trigger" }, b(r), {
      "data-inset": e.inset ? "" : void 0,
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: j(() => [
        U(s.$slots, "default"),
        D(b(wa), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), e3 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Ae(e);
    return (r, s) => (t(), T(b(Cn), re({ "data-slot": "dropdown-menu-trigger" }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t3 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Sn), {
      "data-slot": "avatar",
      class: z(b(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), a3 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Mn), re({ "data-slot": "avatar-fallback" }, b(a), {
      class: b(Q)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(Bn), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l3 = /* @__PURE__ */ O({
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
}), o3 = /* @__PURE__ */ O({
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
        D(b(Un), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), s3 = /* @__PURE__ */ O({
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
}), r3 = /* @__PURE__ */ O({
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
}), i3 = /* @__PURE__ */ O({
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
}), u3 = /* @__PURE__ */ O({
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
}), d3 = /* @__PURE__ */ O({
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
        D(b(wa))
      ])
    ], 2));
  }
}), nf = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, lf = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", nf, [
      D(b(_n), re({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), c3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Pn), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: j((c) => [
        U(u.$slots, "default", ze(Ie(c))),
        e.viewport ? (t(), T(lf, { key: 0 })) : w("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), f3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(zn), re({ "data-slot": "navigation-menu-content" }, b(i), {
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
}), m3 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(b(An), re({ "data-slot": "navigation-menu-indicator" }, b(r), {
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
}), p3 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(On), re({ "data-slot": "navigation-menu-item" }, b(a), {
      class: b(Q)("relative", l.class)
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), v3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(jn), re({ "data-slot": "navigation-menu-link" }, b(i), {
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
}), g3 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(b(Ln), re({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(Q)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h3 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(b(Vn), re({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(Q)(b(of)(), "group", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default"),
        D(b(Hn), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), of = Ut(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), b3 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(ga), re({ "data-slot": "dialog" }, b(s)), {
      default: j((d) => [
        U(i.$slots, "default", ze(Ie(d)))
      ]),
      _: 3
    }, 16));
  }
}), y3 = /* @__PURE__ */ O({
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
}), sf = /* @__PURE__ */ O({
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
}), x3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Ft), null, {
      default: j(() => [
        D(sf),
        D(b(Nt), re({ "data-slot": "dialog-content" }, { ...u.$attrs, ...b(i) }, {
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
                D(b(Rt)),
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
}), k3 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(b(ha), re({ "data-slot": "dialog-description" }, b(r), {
      class: b(Q)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $3 = /* @__PURE__ */ O({
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
}), w3 = /* @__PURE__ */ O({
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
}), C3 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Ft), null, {
      default: j(() => [
        D(b(Et), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            D(b(Nt), re({
              class: b(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...u.$attrs, ...b(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (c) => {
                const v = c.detail.originalEvent, m = v.target;
                (v.offsetX > m.clientWidth || v.offsetY > m.clientHeight) && c.preventDefault();
              })
            }), {
              default: j(() => [
                U(u.$slots, "default"),
                D(b(Qe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    D(b(Rt), { class: "w-4 h-4" }),
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
}), S3 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Ae(a);
    return (s, i) => (t(), T(b(ba), re({ "data-slot": "dialog-title" }, b(r), {
      class: b(Q)("text-lg leading-none font-semibold", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M3 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(ya), re({ "data-slot": "dialog-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B3 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Tn), re({ "data-slot": "label" }, b(a), {
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
}), _3 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Kn), {
      role: "status",
      "aria-label": "Loading",
      class: z(b(Q)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), P3 = /* @__PURE__ */ O({
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
}), z3 = /* @__PURE__ */ O({
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
}), A3 = /* @__PURE__ */ O({
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
}), O3 = /* @__PURE__ */ O({
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
}), j3 = /* @__PURE__ */ O({
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
}), L3 = /* @__PURE__ */ O({
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
}), V3 = /* @__PURE__ */ O({
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
}), rf = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, uf = { class: "flex items-start gap-3" }, df = { class: "min-w-0 flex-1" }, cf = { class: "text-foreground text-sm font-medium" }, ff = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, T3 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(!1), u = R(null), d = R(0);
    Za((v) => (console.error(`[PkBoundary] ${r.label} failed to render`, v), i.value = !0, u.value = v instanceof Error ? v.message : null, s("error", v), !1));
    function c() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: c }), (v, m) => (t(), n("div", {
      class: z(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", rf, [
        o("div", uf, [
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
          o("div", df, [
            o("p", cf, f(e.label) + " could not be displayed ", 1),
            u.value ? (t(), n("p", ff, f(u.value), 1)) : w("", !0),
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
      ])) : i.value ? w("", !0) : U(v.$slots, "default", { key: d.value })
    ], 2));
  }
}), mf = { class: "bg-card rounded-lg border" }, pf = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, vf = { class: "min-w-0" }, gf = {
  key: 0,
  class: "truncate text-sm font-medium"
}, hf = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, bf = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, yf = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, D3 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", mf, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", pf, [
        o("div", vf, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", gf, f(e.title), 1)) : w("", !0),
            e.description ? (t(), n("p", hf, f(e.description), 1)) : w("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", bf, [
          U(l.$slots, "actions")
        ])) : w("", !0)
      ])) : w("", !0),
      o("div", {
        class: z(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", yf, [
        U(l.$slots, "footer")
      ])) : w("", !0)
    ]));
  }
}), La = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function I3() {
  const e = Sa(), l = y(() => e.props.panel?.pageFooter === !0);
  return _t(La, l), l;
}
const xf = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, kf = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, $f = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, E3 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = Sa(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = y(() => {
      const c = a.props.panel;
      return Array.isArray(c?.footerLinks) ? c.footerLinks : [];
    }), u = mt(La, y(() => !1)), d = y(() => !l.host && b(u) === !0);
    return (c, v) => d.value ? w("", !0) : (t(), n("footer", xf, [
      o("div", kf, [
        o("p", null, "© " + f(b(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), n("nav", $f, [
          (t(!0), n(A, null, V(i.value, (m) => (t(), T(b(Yn), {
            key: m.href,
            href: m.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              N(f(m.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : w("", !0)
      ])
    ]));
  }
}), wf = { class: "flex shrink-0 flex-col items-center" }, Cf = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, F3 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), n("div", wf, [
      o("div", {
        class: z(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Cf)) : w("", !0),
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
}), Sf = { class: "flex flex-col gap-2" }, Mf = { class: "min-w-0 flex-1" }, Bf = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, _f = ["disabled", "aria-label", "onClick"], Pf = ["disabled", "aria-label", "onClick"], zf = ["disabled", "title", "aria-label", "onClick"], Af = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Of = ["disabled"], N3 = /* @__PURE__ */ O({
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
      return Array.isArray(B) ? B.map((p) => ({ uid: s++, data: { ...p } })) : [];
    }
    me(
      () => a.modelValue,
      (B) => {
        JSON.stringify(B ?? null) !== JSON.stringify(d()) && (i.value = u(B));
      }
    );
    function d() {
      const B = [];
      for (const p of i.value) {
        const h = {};
        let $ = !1;
        for (const P of a.children) {
          const E = p.data[P.key] ?? null;
          h[P.key] = E, E !== null && E !== "" && !(Array.isArray(E) && E.length === 0) && ($ = !0);
        }
        $ && B.push(h);
      }
      return B.length ? B : null;
    }
    function c() {
      r("update:modelValue", d());
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
    function x(B) {
      i.value = i.value.filter((p) => p.uid !== B), c();
    }
    function k(B, p) {
      const h = B + p;
      if (h < 0 || h >= i.value.length)
        return;
      const $ = [...i.value], [P] = $.splice(B, 1);
      $.splice(h, 0, P), i.value = $, c();
    }
    function M(B, p, h) {
      const $ = i.value.find((P) => P.uid === B);
      $ && ($.data[p] = h, c());
    }
    function S(B, p) {
      return a.errors[`${a.fieldKey}.${B}.${p}`];
    }
    return (B, p) => (t(), n("div", Sf, [
      (t(!0), n(A, null, V(i.value, (h, $) => (t(), n("div", {
        key: h.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: z(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", g.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f($ + 1), 3),
        o("div", Mf, [
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
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", Bf, [
            (t(!0), n(A, null, V(e.children, (P) => (t(), T(Ye, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: h.data[P.key],
              error: S($, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (E) => M(h.uid, P.key, E)
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
          ])], 8, _f),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || $ === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${$ + 1} down`,
            onClick: (P) => k($, 1)
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
          ])], 8, Pf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || m.value,
            title: m.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${$ + 1}`,
            onClick: (P) => x(h.uid)
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
          ])], 8, zf)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", Af, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : w("", !0),
      v.value ? w("", !0) : (t(), n("button", {
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
      ], 8, Of))
    ]));
  }
}), jf = { class: "space-y-1" }, Lf = { class: "flex items-center gap-1" }, Vf = ["disabled", "title", "aria-label", "onClick"], Tf = ["aria-pressed"], Df = ["id", "value", "rows", "disabled"], If = ["innerHTML"], Ef = /* @__PURE__ */ O({
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
    function u(g) {
      return g.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = y(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function c(g, C = g) {
      const x = document.getElementById(a.id ?? "");
      if (x === null)
        return;
      const k = x.selectionStart, M = x.selectionEnd, S = i.value.slice(k, M);
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
    }, m = y(
      () => (a.toolbar ?? Object.keys(v)).filter((g) => g in v)
    );
    return (g, C) => (t(), n("div", jf, [
      o("div", Lf, [
        (t(!0), n(A, null, V(m.value, (x) => (t(), n("button", {
          key: x,
          type: "button",
          disabled: e.disabled,
          title: x,
          "aria-label": x,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (k) => v[x].run()
        }, f(v[x].label), 9, Vf))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (x) => s.value = !s.value)
        }, " Preview ", 8, Tf)
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
        onInput: C[1] || (C[1] = (x) => r("update:modelValue", x.target.value))
      }, null, 40, Df))
    ]));
  }
}), Ff = { class: "space-y-1" }, Nf = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Rf = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Uf = ["id", "value", "rows", "disabled"], Hf = { class: "text-muted-foreground text-xs font-normal" }, Kf = {
  key: 0,
  class: "text-destructive text-xs"
}, qf = /* @__PURE__ */ O({
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
      const C = g.target, x = C.selectionStart, k = C.selectionEnd, M = `${u.value.slice(0, x)}    ${u.value.slice(k)}`;
      r("update:modelValue", M), requestAnimationFrame(() => {
        C.selectionStart = C.selectionEnd = x + 4;
      });
    }
    return (g, C) => (t(), n("div", Ff, [
      o("div", Nf, [
        o("div", Rf, [
          (t(!0), n(A, null, V(d.value, (x) => (t(), n("div", { key: x }, f(x), 1))), 128))
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
          onKeydown: m
        }, null, 40, Uf)
      ]),
      o("p", Hf, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      c.value ? (t(), n("p", Kf, f(c.value), 1)) : w("", !0)
    ]));
  }
}), Gf = { class: "space-y-3" }, Wf = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Zf = { class: "text-sm font-medium" }, Jf = { class: "flex items-center gap-1" }, Yf = ["disabled", "onClick"], Xf = ["disabled", "onClick"], Qf = ["disabled", "onClick"], em = { class: "space-y-3 p-3" }, tm = { class: "flex flex-wrap items-center gap-2" }, am = ["disabled", "onClick"], nm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, R3 = /* @__PURE__ */ O({
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
    function v(C) {
      d(s.value.filter((x, k) => k !== C));
    }
    function m(C, x) {
      const k = C + x;
      if (k < 0 || k >= s.value.length)
        return;
      const M = [...s.value], [S] = M.splice(C, 1);
      M.splice(k, 0, S), d(M);
    }
    function g(C, x, k) {
      d(
        s.value.map(
          (M, S) => S === C ? { ...M, data: { ...M.data, [x]: k } } : M
        )
      );
    }
    return (C, x) => (t(), n("div", Gf, [
      (t(!0), n(A, null, V(s.value, (k, M) => (t(), n("div", {
        key: `${k.type}-${M}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Wf, [
          o("span", Zf, f(i.value[k.type]?.label ?? k.type), 1),
          o("div", Jf, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === 0,
              "aria-label": "Move up",
              onClick: (S) => m(M, -1)
            }, " ↑ ", 8, Yf),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (S) => m(M, 1)
            }, " ↓ ", 8, Xf),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (S) => v(M)
            }, " Remove ", 8, Qf)
          ])
        ]),
        o("div", em, [
          (t(!0), n(A, null, V(i.value[k.type]?.fields ?? [], (S) => (t(), T(Ye, {
            key: S.key,
            field: S,
            value: k.data[S.key] ?? null,
            error: e.errors?.[S.key],
            processing: e.disabled,
            onChange: (B) => g(M, S.key, B)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", tm, [
        (t(!0), n(A, null, V(e.blocks, (k) => (t(), n("button", {
          key: k.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (M) => c(k.type)
        }, " + " + f(k.label), 9, am))), 128)),
        u.value ? (t(), n("span", nm, f(e.maxBlocks) + " is the maximum here. ", 1)) : w("", !0)
      ])
    ]));
  }
}), lm = ["name", "value", "checked", "disabled", "onChange"], om = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, sm = /* @__PURE__ */ O({
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
      (t(!0), n(A, null, V(e.options, (d) => (t(), n("label", {
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
        }, null, 40, lm),
        N(" " + f(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", om, " Nothing to choose from yet. ")) : w("", !0)
    ], 2));
  }
}), rm = ["value", "checked", "disabled", "onChange"], im = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, um = /* @__PURE__ */ O({
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
    function u(c) {
      r(
        "update:modelValue",
        i(c) ? s.value.filter((v) => v != c.value) : [...s.value, c.value]
      );
    }
    const d = y(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (c, v) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: se(d.value)
    }, [
      (t(!0), n(A, null, V(e.options, (m) => (t(), n("label", {
        key: String(m.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: m.value,
          checked: i(m),
          disabled: e.disabled,
          onChange: (g) => u(m)
        }, null, 40, rm),
        N(" " + f(m.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", im, " Nothing to choose from yet. ")) : w("", !0)
    ], 4));
  }
}), dm = { class: "flex flex-col gap-1.5" }, cm = ["aria-label", "onClick"], fm = ["placeholder", "disabled", "maxlength"], mm = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, pm = ["onClick"], vm = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, gm = /* @__PURE__ */ O({
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
        (g) => !i.value.some((C) => C.toLowerCase() === g.toLowerCase())
      )
    );
    function c(g) {
      const C = g.trim().slice(0, a.field.maxLength ?? 40);
      if (C === "" || u.value) {
        s.value = "";
        return;
      }
      if (i.value.some((x) => x.toLowerCase() === C.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, C]), s.value = "";
    }
    function v(g) {
      r(
        "update:modelValue",
        i.value.filter((C, x) => x !== g)
      );
    }
    function m(g) {
      if (g.key === "Enter" || g.key === ",") {
        g.preventDefault(), c(s.value);
        return;
      }
      g.key === "Backspace" && s.value === "" && i.value.length > 0 && v(i.value.length - 1);
    }
    return (g, C) => (t(), n("div", dm, [
      o("div", {
        class: z(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(A, null, V(i.value, (x, k) => (t(), n("span", {
          key: `${x}-${k}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(f(x) + " ", 1),
          e.disabled ? w("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${x}`,
            onClick: (M) => v(k)
          }, " × ", 8, cm))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (x) => s.value = x),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: m,
          onBlur: C[1] || (C[1] = (x) => c(s.value))
        }, null, 40, fm), [
          [Me, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), n("div", mm, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(A, null, V(d.value, (x) => (t(), n("button", {
          key: x,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (k) => c(x)
        }, f(x), 9, pm))), 128))
      ])) : w("", !0),
      u.value ? (t(), n("p", vm, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : w("", !0)
    ]));
  }
}), hm = 4.5, da = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Va(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function St(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Vt(e) {
  const [l, a, r] = Va(e);
  return 0.2126 * St(l) + 0.7152 * St(a) + 0.0722 * St(r);
}
function Ta(e, l) {
  const a = Vt(e), r = Vt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function bm(e, l, a) {
  if (!da.test(e) || !da.test(l))
    return e;
  const r = Vt(l) > 0.5, s = r ? 0 : 255;
  let i = Va(e);
  for (let u = 0; u <= 20; u++) {
    const d = ym(i);
    if (Ta(d, l) >= a)
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
const xm = { class: "flex flex-col gap-2" }, km = { class: "flex items-center gap-2" }, $m = {
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
}, wm = ["value", "disabled", "aria-label"], Cm = ["value", "disabled", "placeholder"], Sm = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Mm = ["aria-label", "title", "onClick"], Bm = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, _m = /* @__PURE__ */ O({
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
    function d(x) {
      const k = x.trim();
      if (k === "")
        return "";
      const M = k.startsWith("#") ? k : `#${k}`;
      return s.test(M) ? M.toLowerCase() : k;
    }
    function c(x) {
      r("update:modelValue", d(x.target.value));
    }
    const v = y(() => !u.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Ta(i.value, a.field.contrastBackground)), m = y(() => a.field.contrastMinRatio ?? hm), g = y(() => v.value !== null && v.value < m.value);
    function C() {
      a.field.contrastBackground && r(
        "update:modelValue",
        bm(i.value, a.field.contrastBackground, m.value)
      );
    }
    return (x, k) => (t(), n("div", xm, [
      o("div", km, [
        u.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: k[0] || (k[0] = (M) => r("update:modelValue", M.target.value))
        }, null, 40, wm)) : (t(), n("span", $m)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: c
        }, null, 40, Cm)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", Sm, [
        (t(!0), n(A, null, V(e.field.presets, (M) => (t(), n("button", {
          key: M,
          type: "button",
          class: z(["size-6 rounded border", i.value.toLowerCase() === M.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: M }),
          "aria-label": M,
          title: M,
          onClick: (S) => r("update:modelValue", M.toLowerCase())
        }, null, 14, Mm))), 128))
      ])) : w("", !0),
      g.value ? (t(), n("p", Bm, [
        o("span", null, " This fails contrast at " + f(v.value.toFixed(1)) + ":1 - it needs at least " + f(m.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : w("", !0)
    ]));
  }
}), Pm = ["aria-disabled"], zm = /* @__PURE__ */ O({
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
      const C = a.modelValue?.[a.latKey], x = a.modelValue?.[a.lngKey];
      return typeof C == "number" && typeof x == "number" ? { lat: C, lng: x } : a.center ? a.center : a.markers.length > 0 ? { lat: a.markers[0].lat, lng: a.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function v() {
      if (!s.value || i)
        return;
      const C = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), d = C, i = C.map(s.value).setView([c.value.lat, c.value.lng], a.zoom), C.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), m(), g(), a.pickable && !a.disabled && i.on("click", (x) => {
        r("update:modelValue", {
          [a.latKey]: Number(x.latlng.lat.toFixed(6)),
          [a.lngKey]: Number(x.latlng.lng.toFixed(6))
        });
      });
    }
    function m() {
      if (!(!i || !d))
        for (const C of a.markers) {
          const x = d.circleMarker([C.lat, C.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (C.label || C.popup) && x.bindPopup(`<strong>${C.label ?? ""}</strong>${C.popup ? `<br>${C.popup}` : ""}`);
        }
    }
    function g() {
      if (!i || !d)
        return;
      const C = a.modelValue?.[a.latKey], x = a.modelValue?.[a.lngKey];
      if (typeof C != "number" || typeof x != "number") {
        u && (i.removeLayer(u), u = null);
        return;
      }
      u ? u.setLatLng([C, x]) : u = d.circleMarker([C, x], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([C, x], i.getZoom());
    }
    return ge(() => {
      v();
    }), ke(() => {
      i?.remove(), i = null, u = null;
    }), me(
      () => a.modelValue,
      () => g(),
      { deep: !0 }
    ), (C, x) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: se({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, Pm));
  }
}), Am = { class: "flex flex-col gap-2" }, Om = { class: "text-muted-foreground text-xs font-normal" }, jm = /* @__PURE__ */ O({
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
    return (d, c) => (t(), n("div", Am, [
      D(zm, {
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
      o("p", Om, [
        N(" Click the map to set " + f(i.value) + " / " + f(u.value) + " ", 1),
        s.value ? (t(), n(A, { key: 0 }, [
          N(" (" + f(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + f(s.value[u.value]?.toFixed?.(5) ?? s.value[u.value]) + ") ", 1)
        ], 64)) : w("", !0)
      ])
    ]));
  }
}), Lm = { class: "flex flex-col gap-2" }, Vm = ["width", "height"], Tm = ["value", "disabled"], Dm = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
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
    }), (c, v) => (t(), n("div", Lm, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: u.value,
        height: u.value
      }, null, 8, Vm),
      e.field.from ? (t(), n("p", Dm, "From " + f(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: v[0] || (v[0] = (m) => r("update:modelValue", m.target.value))
      }, null, 40, Tm))
    ]));
  }
}), Em = { class: "flex flex-col gap-2" }, Fm = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, Nm = ["aria-label"], Rm = {
  key: 0,
  class: "text-destructive text-xs"
}, Um = ["value", "disabled"], Hm = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, Km = /* @__PURE__ */ O({
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
        const v = a.values?.[a.field.from];
        return v == null ? "" : String(v);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), d = y(() => (a.field.format ?? "CODE128").toUpperCase());
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
        } catch (m) {
          i.value = m instanceof Error ? m.message : "Could not render barcode";
        }
    }
    return ge(() => {
      c();
    }), me([u, d], () => {
      c();
    }), (v, m) => (t(), n("div", Em, [
      o("div", Fm, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${d.value}`
        }, null, 8, Nm))
      ]),
      i.value ? (t(), n("p", Rm, f(i.value), 1)) : w("", !0),
      e.field.from ? (t(), n("p", Hm, "From " + f(e.field.from) + " (" + f(d.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: m[0] || (m[0] = (g) => r("update:modelValue", g.target.value))
      }, null, 40, Um))
    ]));
  }
}), qm = { class: "mr-2 inline-block w-3 opacity-60" }, Gm = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Wm = /* @__PURE__ */ O({
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
`), c = Math.max(u.length, d.length), v = [];
      for (let m = 0; m < c; m++) {
        const g = u[m], C = d[m];
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
      (t(!0), n(A, null, V(i.value, (c, v) => (t(), n("div", {
        key: v,
        class: z(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": c.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": c.kind === "add",
          "text-muted-foreground": c.kind === "same"
        }])
      }, [
        o("span", qm, f(c.kind === "add" ? "+" : c.kind === "del" ? "-" : " "), 1),
        N(" " + f(c.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", Gm, "No differences.")) : w("", !0)
    ], 4));
  }
}), Zm = { class: "flex flex-col gap-3" }, Jm = { class: "flex items-center justify-between gap-2" }, Ym = { class: "text-sm font-medium" }, Xm = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, Qm = { class: "grid grid-cols-7 gap-1" }, ep = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, tp = ["title"], U3 = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = R(/* @__PURE__ */ new Date()), r = y(() => a.value.getFullYear()), s = y(() => a.value.getMonth()), i = y(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), u = y(() => {
      const m = /* @__PURE__ */ new Map();
      for (const g of l.events ?? []) {
        const C = m.get(g.date) ?? [];
        C.push(g), m.set(g.date, C);
      }
      return m;
    }), d = y(() => {
      const g = new Date(r.value, s.value, 1).getDay(), C = new Date(r.value, s.value + 1, 0).getDate(), x = [];
      for (let k = 0; k < g; k++)
        x.push({ day: null, key: `pad-${k}`, events: [] });
      for (let k = 1; k <= C; k++) {
        const M = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(k).padStart(2, "0")}`;
        x.push({ day: k, key: M, events: u.value.get(M) ?? [] });
      }
      return x;
    });
    function c() {
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function v() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (m, g) => (t(), n("div", Zm, [
      o("div", Jm, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: c
        }, " Prev "),
        o("p", Ym, f(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: v
        }, " Next ")
      ]),
      o("div", Xm, [
        (t(), n(A, null, V(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, f(C), 1)), 64))
      ]),
      o("div", Qm, [
        (t(!0), n(A, null, V(d.value, (C) => (t(), n("div", {
          key: C.key,
          class: z(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), n("p", ep, f(C.day), 1)) : w("", !0),
          (t(!0), n(A, null, V(C.events.slice(0, 3), (x, k) => (t(), n("p", {
            key: `${C.key}-${k}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: x.label
          }, f(x.label), 9, tp))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), ap = { class: "flex items-center gap-3" }, np = ["min", "max", "step", "value", "disabled", "aria-label"], lp = { class: "flex shrink-0 items-center gap-1" }, op = ["min", "max", "step", "value", "disabled"], sp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, rp = /* @__PURE__ */ O({
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
    return (m, g) => (t(), n("div", ap, [
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
      }, null, 40, np),
      o("div", lp, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: c.value ? "" : d.value,
          disabled: e.disabled,
          onInput: g[1] || (g[1] = (C) => v(C.target.value))
        }, null, 40, op),
        e.field.unit ? (t(), n("span", sp, f(e.field.unit), 1)) : w("", !0)
      ])
    ]));
  }
}), ut = /* @__PURE__ */ new Map();
function Mt(e, l) {
  ut.set(e, l);
}
function ip(e) {
  return ut.get(e);
}
function H3(e) {
  return ut.has(e);
}
function up() {
  return [...ut.keys()].sort();
}
function K3() {
  ut.clear();
}
const dp = ["name", "value", "checked", "disabled", "onChange"], cp = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, fp = { class: "whitespace-nowrap" }, mp = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, pp = ["name", "value", "checked", "disabled", "onChange"], vp = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, gp = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, hp = { class: "text-center text-xs font-medium" }, bp = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, yp = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, xp = /* @__PURE__ */ O({
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
      () => a.field.preview ? ip(a.field.preview) : void 0
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
    function c(v) {
      return a.modelValue != null && v.value == a.modelValue;
    }
    return (v, m) => u.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: z(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(A, null, V(e.options, (g) => (t(), n("label", {
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
        }, null, 40, dp),
        m[0] || (m[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", cp, [
          (t(), T(Be(s.value), {
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"]))
        ])) : w("", !0),
        o("span", fp, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", mp, " Nothing to choose from yet. ")) : w("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: z(["grid gap-3", d.value])
    }, [
      (t(!0), n(A, null, V(e.options, (g) => (t(), n("label", {
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
        }, null, 40, pp),
        m[1] || (m[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", vp, [
          s.value ? (t(), T(Be(s.value), {
            key: 0,
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", gp, " no preview ")) : w("", !0)
        ]),
        o("span", hp, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", bp, " Nothing to choose from yet. ")) : w("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", yp, [
        m[2] || (m[2] = N(" No preview registered for ", -1)),
        o("code", null, f(e.field.preview), 1),
        N(". Registered: " + f(b(up)().join(", ") || "none") + ". ", 1)
      ])) : w("", !0)
    ], 2));
  }
}), kp = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, $p = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", kp, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), wp = { class: "flex flex-col items-center gap-1 text-center" }, Cp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Da = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", wp, [
      o("div", {
        class: z(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: a.value, color: a.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Cp, f(e.caption), 1)) : w("", !0)
    ]));
  }
}), Sp = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Mp = { class: "flex items-center gap-3" }, Bp = ["src"], _p = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Pp = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, zp = {
  key: 0,
  class: "text-right text-sm"
}, Ap = { class: "text-neutral-500" }, Op = { class: "tabular-nums" }, jp = { key: 1 }, Lp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Vp = { class: "mt-2 font-medium" }, Tp = { key: 2 }, Dp = { class: "w-full text-sm" }, Ip = { class: "w-full py-3 pr-2" }, Ep = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Fp = { key: 0 }, Np = ["colspan"], Rp = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Up = { class: "w-64 text-sm" }, Hp = { class: "tabular-nums" }, Kp = {
  key: 3,
  class: "py-2"
}, qp = { key: 4 }, Gp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Wp = { class: "mt-2 flex flex-col gap-1 text-sm" }, Zp = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Jp = { key: 0 }, Yp = {
  key: 1,
  class: "mt-1"
}, Xp = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Qp = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("article", Sp, [
      o("div", Mp, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Bp)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: a() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), n(A, null, V(e.document.blocks, (m, g) => (t(), n(A, { key: g }, [
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
            m.subtitle ? (t(), n("p", _p, f(m.subtitle), 1)) : w("", !0),
            m.reference ? (t(), n("p", Pp, f(m.reference), 1)) : w("", !0)
          ]),
          r(m).length ? (t(), n("dl", zp, [
            (t(!0), n(A, null, V(r(m), (C, x) => (t(), n("div", {
              key: x,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Ap, f(C.label), 1),
              o("dd", Op, f(C.value), 1)
            ]))), 128))
          ])) : w("", !0)
        ], 4)) : m.type === "party" ? (t(), n("section", jp, [
          o("h2", Lp, f(m.heading), 1),
          o("p", Vp, f(m.name), 1),
          (t(!0), n(A, null, V(u(m.lines), (C, x) => (t(), n("p", {
            key: x,
            class: "text-sm text-neutral-600"
          }, f(C), 1))), 128))
        ])) : m.type === "lines" ? (t(), n("section", Tp, [
          o("table", Dp, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: a() })
              }, [
                (t(!0), n(A, null, V(u(m.columns), (C, x) => (t(), n("th", {
                  key: x,
                  class: z(["pb-2 font-medium", x > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(A, null, V(s(m), (C, x) => (t(), n("tr", {
                key: x,
                class: "border-b border-neutral-200"
              }, [
                o("td", Ip, [
                  o("p", null, f(C.description), 1),
                  C.detail ? (t(), n("p", Ep, f(C.detail), 1)) : w("", !0)
                ]),
                (t(!0), n(A, null, V(C.cells, (k, M) => (t(), n("td", {
                  key: M,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(k), 1))), 128))
              ]))), 128)),
              s(m).length === 0 ? (t(), n("tr", Fp, [
                o("td", {
                  colspan: u(m.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(m.empty), 9, Np)
              ])) : w("", !0)
            ])
          ]),
          i(m).length ? (t(), n("div", Rp, [
            o("dl", Up, [
              (t(!0), n(A, null, V(i(m), (C, x) => (t(), n("div", {
                key: x,
                class: z([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(C.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: z(C.strong ? "" : "text-neutral-600")
                }, f(C.label), 3),
                o("dd", Hp, f(C.value), 1)
              ], 6))), 128))
            ])
          ])) : w("", !0)
        ])) : m.type === "code" ? (t(), n("section", Kp, [
          D(Da, {
            code: d(m.code),
            caption: d(m.caption),
            style: se(d(m.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : m.type === "steps" ? (t(), n("section", qp, [
          o("h2", Gp, f(m.heading), 1),
          o("ol", Wp, [
            (t(!0), n(A, null, V(u(m.items), (C, x) => (t(), n("li", {
              key: x,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: se({ color: a() })
              }, f(x + 1) + ".", 5),
              o("span", null, f(C), 1)
            ]))), 128))
          ])
        ])) : m.type === "note" ? (t(), n("p", {
          key: 5,
          class: z(["text-sm", m.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(m.emphasis ? { color: a() } : void 0)
        }, f(m.text), 7)) : m.type === "footer" ? (t(), n("footer", Zp, [
          m.text ? (t(), n("p", Jp, f(m.text), 1)) : w("", !0),
          u(m.contacts).length ? (t(), n("p", Yp, f(u(m.contacts).join(" · ")), 1)) : w("", !0)
        ])) : (t(), n("p", Xp, " This document contains a “" + f(m.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), ev = ["aria-label", "title"], tv = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, av = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, q3 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = za(), r = y(() => l.value.theme === "dark");
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
      (t(), n("svg", tv, [
        r.value ? (t(), n(A, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", av))
      ]))
    ], 8, ev));
  }
}), nv = ["width", "height"], lv = { key: 0 }, ov = ["x1", "x2", "y1", "y2"], sv = ["x", "y"], rv = ["x1", "x2", "y1", "y2"], iv = ["x", "y"], uv = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], dv = ["x", "y", "width", "height", "fill", "fill-opacity"], cv = ["x", "y"], fv = ["x", "y"], mv = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, pv = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, vv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, gv = { class: "text-xs font-semibold tabular-nums" }, hv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, bv = { class: "text-muted-foreground" }, ca = 5.6, G3 = /* @__PURE__ */ O({
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
      const L = l.thresholds.find((J) => _ < J.max);
      return r(L ? L.color : l.aboveColor);
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
    ], m = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, L) => ({
      ...F,
      color: F.color ?? v[L % v.length]
    }))), g = y(() => m.value[0]?.points.map((_) => _.label) ?? []), C = y(() => g.value.length), x = y(() => l.orientation === "horizontal"), k = y(() => Math.max(0, ...g.value.map((_) => _.length))), M = y(() => {
      if (!x.value)
        return l.showAxis ? 44 : 8;
      const _ = k.value * ca + 16;
      return Math.round(Math.min(Math.max(60, _), u.value * 0.4));
    }), S = y(() => Math.max(4, Math.floor((M.value - 16) / ca)));
    function B(_) {
      return _.length <= S.value ? _ : `${_.slice(0, S.value - 1)}…`;
    }
    const p = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: M.value
    })), h = y(() => ({
      w: Math.max(1, u.value - p.value.left - p.value.right),
      h: Math.max(1, l.height - p.value.top - p.value.bottom)
    })), $ = (_) => l.format ? l.format(_) : P(_);
    function P(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    const E = y(() => {
      const _ = g.value.map(
        (ve, ye) => l.stacked ? m.value.reduce((le, X) => le + Math.max(0, X.points[ye]?.value ?? 0), 0) : Math.max(...m.value.map((le) => le.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ve) => F <= ve * L) ?? 10) * L;
    }), I = y(
      () => (x.value ? h.value.h : h.value.w) / Math.max(1, C.value)
    ), te = y(() => I.value * 0.68), H = y(
      () => l.stacked || m.value.length <= 1 ? te.value : te.value / m.value.length
    ), K = y(() => {
      const _ = [], F = new Array(C.value).fill(0);
      return m.value.forEach((L, J) => {
        L.points.forEach((ve, ye) => {
          const X = Math.max(0, ve.value) / E.value * (x.value ? h.value.w : h.value.h), ne = (x.value ? p.value.top : p.value.left) + ye * I.value + (I.value - te.value) / 2, Ce = l.stacked ? 0 : J * H.value;
          _.push(
            x.value ? {
              x: p.value.left + F[ye],
              y: ne + Ce,
              w: X,
              h: Math.max(0, H.value - 2),
              color: s(ve.value, L.color),
              label: ve.label,
              name: L.name,
              value: ve.value,
              index: ye
            } : {
              x: ne + Ce,
              y: p.value.top + h.value.h - X - F[ye],
              w: Math.max(0, H.value - 2),
              h: X,
              color: s(ve.value, L.color),
              label: ve.label,
              name: L.name,
              value: ve.value,
              index: ye
            }
          ), l.stacked && (F[ye] += X);
        });
      }), _;
    }), G = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        value: E.value * (x.value ? _ : 1 - _),
        x: p.value.left + h.value.w * _,
        y: p.value.top + h.value.h * _
      }))
    ), oe = y(() => Math.max(1, Math.ceil(C.value / (x.value ? 14 : 10))));
    function ae(_) {
      return _ === C.value - 1 || _ % oe.value === 0;
    }
    function Z(_) {
      return (x.value ? p.value.top : p.value.left) + _ * I.value + I.value / 2;
    }
    const q = y(() => d.value === null ? null : {
      label: g.value[d.value],
      rows: m.value.map((_) => ({
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
          onMouseleave: F[0] || (F[0] = (L) => d.value = null)
        }, [
          e.showAxis ? (t(), n("g", lv, [
            x.value ? (t(), n(A, { key: 0 }, [
              (t(!0), n(A, null, V(G.value, (L) => (t(), n("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: p.value.top,
                y2: p.value.top + h.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, ov))), 128)),
              (t(!0), n(A, null, V(G.value, (L) => (t(), n("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(L.value)), 9, sv))), 128))
            ], 64)) : (t(), n(A, { key: 1 }, [
              (t(!0), n(A, null, V(G.value, (L) => (t(), n("line", {
                key: `g-${L.y}`,
                x1: p.value.left,
                x2: u.value - p.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, rv))), 128)),
              (t(!0), n(A, null, V(G.value, (L) => (t(), n("text", {
                key: `gt-${L.y}`,
                x: p.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(L.value)), 9, iv))), 128))
            ], 64))
          ])) : w("", !0),
          (t(!0), n(A, null, V(g.value, (L, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: x.value ? p.value.left : p.value.left + J * I.value,
            y: x.value ? p.value.top + J * I.value : p.value.top,
            width: x.value ? h.value.w : I.value,
            height: x.value ? I.value : h.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === J ? 0.4 : 0,
            onMouseenter: (ve) => d.value = J
          }, null, 40, uv))), 128)),
          (t(!0), n(A, null, V(K.value, (L, J) => (t(), n("rect", {
            key: `b-${J}`,
            x: L.x,
            y: L.y,
            width: L.w,
            height: L.h,
            fill: L.color,
            "fill-opacity": d.value === null || d.value === L.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, dv))), 128)),
          x.value ? (t(!0), n(A, { key: 1 }, V(g.value, (L, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: p.value.left - 8,
            y: Z(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(f(B(L)) + " ", 1),
            o("title", null, f(L), 1)
          ], 8, cv)), [
            [Ue, ae(J)]
          ])), 128)) : (t(!0), n(A, { key: 2 }, V(g.value, (L, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: Z(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, fv)), [
            [Ue, ae(J)]
          ])), 128))
        ], 40, nv)),
        q.value ? (t(), n("div", mv, [
          o("p", pv, f(q.value.label), 1),
          (t(!0), n(A, null, V(q.value.rows, (L, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: L.color })
            }, null, 4),
            o("span", vv, f(L.name || "Value"), 1),
            o("span", gv, f($(L.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend && m.value.length > 1 ? (t(), n("div", hv, [
          (t(!0), n(A, null, V(m.value, (L, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: L.color })
            }, null, 4),
            o("span", bv, f(L.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), yv = ["width", "height"], xv = ["id"], kv = ["stop-color"], $v = ["stop-color"], wv = { key: 0 }, Cv = ["x1", "x2", "y1", "y2"], Sv = ["x", "y"], Mv = ["x", "y"], Bv = ["x1", "x2", "y1", "y2"], _v = ["d", "fill"], Pv = ["d", "stroke", "stroke-dasharray"], zv = ["cx", "cy", "fill"], Av = { key: 1 }, Ov = ["x1", "x2", "y1", "y2"], jv = ["cx", "cy", "fill"], Lv = ["x", "y"], Vv = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Tv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Dv = { class: "text-xs font-semibold tabular-nums" }, Iv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Ev = { class: "text-muted-foreground" }, Fv = /* @__PURE__ */ O({
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
    ], c = Math.random().toString(36).slice(2, 9), v = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, L) => ({
      ...F,
      color: F.color ?? d[L % d.length]
    }))), m = y(() => v.value[0]?.points.map((_) => _.label) ?? []), g = y(() => m.value.length), C = y(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), x = (_) => l.format ? l.format(_) : k(_);
    function k(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    function M(_) {
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ve) => F <= ve * L) ?? 10) * L;
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
    function $(_, F = "left") {
      const L = F === "right" ? B.value : S.value;
      return C.value.top + p.value.h - _ / L * p.value.h;
    }
    const P = y(
      () => v.value.map((_) => {
        const F = _.points.map((J, ve) => ({
          ...J,
          x: h(ve),
          y: $(J.value, _.axis ?? "left")
        })), L = _.stepped ? E(F) : I(F);
        return { ..._, pts: F, line: L, area: te(L, F) };
      })
    );
    function E(_) {
      if (_.length === 0)
        return "";
      let F = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let L = 1; L < _.length; L++)
        F += ` L${_[L].x.toFixed(2)},${_[L - 1].y.toFixed(2)} L${_[L].x.toFixed(2)},${_[L].y.toFixed(2)}`;
      return F;
    }
    function I(_) {
      const F = _.length;
      if (F === 0)
        return "";
      if (F === 1)
        return `M${_[0].x},${_[0].y}`;
      const L = [], J = [];
      for (let le = 0; le < F - 1; le++)
        L[le] = _[le + 1].x - _[le].x, J[le] = L[le] === 0 ? 0 : (_[le + 1].y - _[le].y) / L[le];
      const ve = [J[0]];
      for (let le = 1; le < F - 1; le++)
        if (J[le - 1] * J[le] <= 0)
          ve[le] = 0;
        else {
          const X = 2 * L[le] + L[le - 1], ne = L[le] + 2 * L[le - 1];
          ve[le] = (X + ne) / (X / J[le - 1] + ne / J[le]);
        }
      ve[F - 1] = J[F - 2];
      let ye = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let le = 0; le < F - 1; le++) {
        const X = L[le] / 3;
        ye += ` C${(_[le].x + X).toFixed(2)},${(_[le].y + ve[le] * X).toFixed(2)} ${(_[le + 1].x - X).toFixed(2)},${(_[le + 1].y - ve[le + 1] * X).toFixed(2)} ${_[le + 1].x.toFixed(2)},${_[le + 1].y.toFixed(2)}`;
      }
      return ye;
    }
    function te(_, F) {
      if (F.length === 0)
        return "";
      const L = C.value.top + p.value.h;
      return `${_} L${F[F.length - 1].x.toFixed(2)},${L} L${F[0].x.toFixed(2)},${L} Z`;
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
      const F = _.currentTarget.getBoundingClientRect(), L = _.clientX - F.left - C.value.left, J = g.value <= 1 ? 1 : p.value.w / (g.value - 1);
      i.value = Math.min(g.value - 1, Math.max(0, Math.round(L / J)));
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
      }, " No data ", 4)) : (t(), n(A, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: ae,
          onMouseleave: F[0] || (F[0] = (L) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(A, null, V(P.value, (L, J) => (t(), n("linearGradient", {
              id: `pk-fill-${b(c)}-${J}`,
              key: J,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": L.color,
                "stop-opacity": "0.25"
              }, null, 8, kv),
              o("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, $v)
            ], 8, xv))), 128))
          ]),
          e.showAxis ? (t(), n("g", wv, [
            (t(!0), n(A, null, V(H.value, (L) => (t(), n("line", {
              key: L.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Cv))), 128)),
            (t(!0), n(A, null, V(H.value, (L) => (t(), n("text", {
              key: `t-${L.y}`,
              x: C.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(k(L.value)), 9, Sv))), 128)),
            a.value ? (t(!0), n(A, { key: 0 }, V(K.value, (L) => (t(), n("text", {
              key: `rt-${L.y}`,
              x: s.value - C.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(k(L.value)), 9, Mv))), 128)) : w("", !0)
          ])) : w("", !0),
          (t(!0), n(A, null, V(m.value, (L, J) => pe((t(), n("line", {
            key: `v-${J}`,
            x1: h(J),
            x2: h(J),
            y1: C.value.top,
            y2: C.value.top + p.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Bv)), [
            [Ue, oe(J)]
          ])), 128)),
          (t(!0), n(A, null, V(P.value, (L, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            L.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${b(c)}-${J})`
            }, null, 8, _v)) : w("", !0),
            o("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, Pv),
            L.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, zv)) : w("", !0)
          ]))), 128)),
          Z.value ? (t(), n("g", Av, [
            o("line", {
              x1: Z.value.x,
              x2: Z.value.x,
              y1: C.value.top,
              y2: C.value.top + p.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Ov),
            (t(!0), n(A, null, V(Z.value.rows, (L, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: Z.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, jv))), 128))
          ])) : w("", !0),
          (t(!0), n(A, null, V(m.value, (L, J) => pe((t(), n("text", {
            key: `x-${J}`,
            x: h(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(L), 9, Lv)), [
            [Ue, oe(J)]
          ])), 128))
        ], 40, yv)),
        Z.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(q.value)
        }, [
          o("p", Vv, f(Z.value.label), 1),
          (t(!0), n(A, null, V(Z.value.rows, (L, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: L.color })
            }, null, 4),
            o("span", Tv, f(L.name || "Value"), 1),
            o("span", Dv, f(x(L.value)), 1)
          ]))), 128))
        ], 4)) : w("", !0),
        e.showLegend && v.value.length > 1 ? (t(), n("div", Iv, [
          (t(!0), n(A, null, V(P.value, (L, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: L.color })
            }, null, 4),
            o("span", Ev, f(L.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Nv = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Rv = { class: "text-muted-foreground text-[11px] capitalize" }, Uv = { class: "text-sm font-semibold tabular-nums" }, Hv = {
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
    return (l, a) => (t(), n("div", Nv, [
      o("p", Rv, f(e.label), 1),
      o("p", Uv, [
        N(f(e.value) + " ", 1),
        e.share ? (t(), n("span", Hv, " (" + f(e.share) + ") ", 1)) : w("", !0)
      ])
    ]));
  }
}), Kv = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, qv = ["width", "height", "viewBox", "aria-label"], Gv = ["d", "fill", "fill-opacity", "onMouseenter"], Wv = ["x", "y"], Zv = ["x", "y"], Jv = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Yv = ["onMouseenter"], Xv = { class: "min-w-0 flex-1 truncate capitalize" }, Qv = { class: "tabular-nums font-medium" }, eg = { class: "text-muted-foreground w-9 text-right tabular-nums" }, W3 = /* @__PURE__ */ O({
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
    ], r = y(() => l.data.reduce((S, B) => S + B.value, 0)), s = R(null), i = y(() => l.height), u = y(() => i.value / 2 - 4), d = y(() => l.type === "doughnut" ? u.value * 0.62 : 0);
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
        const $ = p.value / r.value, P = $ * Math.PI * 2, E = B, I = B + P;
        return B = I, {
          ...p,
          share: $,
          colour: c(h),
          opacity: v(h),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: $ >= 0.9999 ? x(S) : C(S, E, I, u.value, d.value)
        };
      });
    });
    function g(S, B, p) {
      return `${(S + Math.cos(B) * p).toFixed(2)},${(S + Math.sin(B) * p).toFixed(2)}`;
    }
    function C(S, B, p, h, $) {
      const P = p - B > Math.PI ? 1 : 0;
      return $ <= 0 ? `M${S},${S} L${g(S, B, h)} A${h},${h} 0 ${P} 1 ${g(S, p, h)} Z` : [
        `M${g(S, B, h)}`,
        `A${h},${h} 0 ${P} 1 ${g(S, p, h)}`,
        `L${g(S, p, $)}`,
        `A${$},${$} 0 ${P} 0 ${g(S, B, $)}`,
        "Z"
      ].join(" ");
    }
    function x(S) {
      const B = u.value, p = d.value, h = [
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
    const k = (S) => l.format ? l.format(S) : new Intl.NumberFormat().format(S), M = (S) => `${(S * 100).toFixed(S < 0.01 ? 2 : 0)}%`;
    return (S, B) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Kv, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${k(r.value)}`
      }, [
        (t(!0), n(A, null, V(m.value, (p, h) => (t(), n("path", {
          key: h,
          d: p.path,
          fill: p.colour,
          "fill-opacity": s.value === null || s.value === h ? p.opacity : p.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: ($) => s.value = h,
          onMouseleave: B[0] || (B[0] = ($) => s.value = null)
        }, null, 40, Gv))), 128)),
        e.type === "doughnut" ? (t(), n(A, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(k(s.value === null ? r.value : m.value[s.value].value)), 9, Wv),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : m.value[s.value].label), 9, Zv)
        ], 64)) : w("", !0)
      ], 8, qv)),
      o("ul", Jv, [
        (t(!0), n(A, null, V(m.value, (p, h) => (t(), n("li", {
          key: h,
          class: z(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === h ? "bg-muted" : ""]),
          onMouseenter: ($) => s.value = h,
          onMouseleave: B[1] || (B[1] = ($) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: p.colour, opacity: p.opacity })
          }, null, 4),
          o("span", Xv, f(p.label), 1),
          o("span", Qv, f(k(p.value)), 1),
          o("span", eg, f(M(p.share)), 1)
        ], 42, Yv))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(dt, {
        key: 0,
        label: m.value[s.value].label,
        value: k(m.value[s.value].value),
        share: M(m.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), tg = ["width", "height", "viewBox", "aria-label"], ag = { class: "text-border" }, ng = ["x1", "x2", "y1", "y2", "stroke-dasharray"], lg = { class: "fill-muted-foreground text-[10px]" }, og = ["x", "y"], sg = ["x", "y"], rg = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], ig = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, Z3 = /* @__PURE__ */ O({
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
    const d = y(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), c = (G, oe) => oe.color ?? a[G % a.length], v = y(() => d.value.flatMap((G) => G.points)), m = y(() => v.value.some((G) => typeof G.r == "number")), g = { top: 12, right: 16, bottom: 32, left: 48 }, C = y(() => Math.max(10, s.value - g.left - g.right)), x = y(() => Math.max(10, l.height - g.top - g.bottom));
    function k(G) {
      if (G.length === 0)
        return [0, 1];
      const oe = Math.min(...G), ae = Math.max(...G), Z = ae - oe || Math.abs(ae) || 1;
      return [oe - Z * 0.08, ae + Z * 0.08];
    }
    const M = y(() => k(v.value.map((G) => G.x))), S = y(() => k(v.value.map((G) => G.y))), B = (G) => {
      const [oe, ae] = M.value;
      return g.left + (G - oe) / (ae - oe) * C.value;
    }, p = (G) => {
      const [oe, ae] = S.value;
      return g.top + x.value - (G - oe) / (ae - oe) * x.value;
    }, h = y(() => Math.max(...v.value.map((G) => G.r ?? 0), 0));
    function $(G) {
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
        "aria-label": m.value ? "Bubble chart" : "Scatter chart"
      }, [
        o("g", ag, [
          (t(!0), n(A, null, V(I.value, (ae, Z) => (t(), n("line", {
            key: `gy-${Z}`,
            x1: g.left,
            x2: g.left + C.value,
            y1: p(ae),
            y2: p(ae),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Z === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, ng))), 128))
        ]),
        o("g", lg, [
          (t(!0), n(A, null, V(I.value, (ae, Z) => (t(), n("text", {
            key: `ty-${Z}`,
            x: g.left - 8,
            y: p(ae) + 3,
            "text-anchor": "end"
          }, f(H(ae)), 9, og))), 128)),
          (t(!0), n(A, null, V(E.value, (ae, Z) => (t(), n("text", {
            key: `tx-${Z}`,
            x: B(ae),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(te(ae)), 9, sg))), 128))
        ]),
        (t(!0), n(A, null, V(d.value, (ae, Z) => (t(), n("g", {
          key: `s-${Z}`
        }, [
          (t(!0), n(A, null, V(ae.points, (q, _) => (t(), n("circle", {
            key: `p-${Z}-${_}`,
            cx: B(q.x),
            cy: p(q.y),
            r: $(q),
            fill: c(Z, ae),
            "fill-opacity": m.value ? 0.55 : 0.85,
            stroke: c(Z, ae),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== Z || i.value.p !== _) ? 0.35 : 1,
            onMouseenter: (F) => i.value = { s: Z, p: _ },
            onMouseleave: oe[0] || (oe[0] = (F) => i.value = null)
          }, null, 40, rg))), 128))
        ]))), 128))
      ], 8, tg)),
      K.value ? (t(), T(dt, {
        key: 0,
        label: K.value.point.label ?? K.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(K.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(K.value.point.y)}`,
        share: m.value && K.value.point.r != null ? String(K.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : w("", !0),
      e.showLegend && d.value.length > 1 ? (t(), n("div", ig, [
        (t(!0), n(A, null, V(d.value, (ae, Z) => (t(), n("span", {
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
}), ug = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, dg = ["width", "height", "viewBox"], cg = ["points"], fg = ["x1", "y1", "x2", "y2"], mg = ["points", "fill", "stroke"], pg = ["cx", "cy", "fill", "onMouseenter"], vg = ["x", "y", "text-anchor"], gg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, hg = { class: "truncate" }, J3 = /* @__PURE__ */ O({
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
    ), s = y(() => r.value[0]?.points.map((p) => p.label) ?? []), i = y(() => s.value.length), u = y(() => l.height), d = y(() => u.value / 2), c = y(() => u.value / 2 - 34), v = y(() => {
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
      const $ = m(p);
      return {
        x: d.value + Math.cos($) * c.value * h,
        y: d.value + Math.sin($) * c.value * h
      };
    }
    function C(p) {
      return Array.from({ length: i.value }, (h, $) => {
        const P = g($, p);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const x = y(() => [0.25, 0.5, 0.75, 1].map((p) => ({ f: p, points: C(p) }))), k = y(
      () => r.value.map((p) => {
        const h = p.points.map(($) => Math.max(0, $.value) / v.value);
        return {
          name: p.name,
          color: p.color,
          values: p.points,
          outline: h.map(($, P) => {
            const E = g(P, $);
            return `${E.x.toFixed(2)},${E.y.toFixed(2)}`;
          }).join(" "),
          dots: h.map(($, P) => g(P, $))
        };
      })
    ), M = y(
      () => s.value.map((p, h) => {
        const $ = m(h), P = d.value + Math.cos($) * (c.value + 14), E = d.value + Math.sin($) * (c.value + 14), I = Math.cos($);
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
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", ug, [
      (t(), n("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(A, null, V(x.value, ($) => (t(), n("polygon", {
          key: $.f,
          points: $.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, cg))), 128)),
        (t(!0), n(A, null, V(s.value, ($, P) => (t(), n("line", {
          key: `spoke-${P}`,
          x1: d.value,
          y1: d.value,
          x2: g(P, 1).x,
          y2: g(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, fg))), 128)),
        (t(!0), n(A, null, V(k.value, ($, P) => (t(), n("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: $.outline,
            fill: $.color,
            "fill-opacity": "0.16",
            stroke: $.color,
            "stroke-width": "2"
          }, null, 8, mg),
          (t(!0), n(A, null, V($.dots, (E, I) => (t(), n("circle", {
            key: I,
            cx: E.x,
            cy: E.y,
            r: "3",
            fill: $.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (te) => S.value = {
              series: $.name,
              axis: s.value[I],
              value: $.values[I]?.value ?? 0
            },
            onMouseleave: h[0] || (h[0] = (te) => S.value = null)
          }, null, 40, pg))), 128))
        ]))), 128)),
        (t(!0), n(A, null, V(M.value, ($, P) => (t(), n("text", {
          key: `l-${P}`,
          x: $.x,
          y: $.y,
          "text-anchor": $.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f($.label), 9, vg))), 128))
      ], 8, dg)),
      e.showLegend ? (t(), n("ul", gg, [
        (t(!0), n(A, null, V(r.value, ($, P) => (t(), n("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: $.color })
          }, null, 4),
          o("span", hg, f($.name), 1)
        ]))), 128))
      ])) : w("", !0),
      S.value ? (t(), T(dt, {
        key: 1,
        label: `${S.value.series} — ${S.value.axis}`,
        value: B(S.value.value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), bg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, yg = ["width", "height", "viewBox"], xg = ["cx", "cy", "r"], kg = ["d", "fill", "fill-opacity", "onMouseenter"], $g = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, wg = { class: "min-w-0 flex-1 truncate capitalize" }, Cg = { class: "font-medium tabular-nums" }, Y3 = /* @__PURE__ */ O({
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
      const x = Math.PI * 2 / C;
      return l.data.map((k, M) => {
        const S = Math.sqrt(Math.max(0, k.value) / d.value), B = u.value * S, p = M * x - Math.PI / 2, h = p + x;
        return {
          ...k,
          color: a[M % a.length],
          share: d.value === 0 ? 0 : k.value / d.value,
          path: v(i.value, p, h, B)
        };
      });
    });
    function v(C, x, k, M) {
      if (M <= 0)
        return "";
      if (k - x >= Math.PI * 2 - 1e-6)
        return `M${C - M},${C} A${M},${M} 0 1 1 ${C + M},${C} A${M},${M} 0 1 1 ${C - M},${C} Z`;
      const S = k - x > Math.PI ? 1 : 0, B = C + Math.cos(x) * M, p = C + Math.sin(x) * M, h = C + Math.cos(k) * M, $ = C + Math.sin(k) * M;
      return `M${C},${C} L${B.toFixed(2)},${p.toFixed(2)} A${M.toFixed(2)},${M.toFixed(2)} 0 ${S} 1 ${h.toFixed(2)},${$.toFixed(2)} Z`;
    }
    const m = y(() => [0.5, 0.75, 1].map((C) => u.value * C)), g = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, x) => c.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", bg, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(A, null, V(m.value, (k) => (t(), n("circle", {
          key: k,
          cx: i.value,
          cy: i.value,
          r: k,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, xg))), 128)),
        (t(!0), n(A, null, V(c.value, (k, M) => (t(), n("path", {
          key: M,
          d: k.path,
          fill: k.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === M ? 0.75 : 0.3,
          onMouseenter: (S) => r.value = M,
          onMouseleave: x[0] || (x[0] = (S) => r.value = null)
        }, null, 40, kg))), 128))
      ], 8, yg)),
      e.showLegend ? (t(), n("ul", $g, [
        (t(!0), n(A, null, V(c.value, (k, M) => (t(), n("li", {
          key: M,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: k.color })
          }, null, 4),
          o("span", wg, f(k.label), 1),
          o("span", Cg, f(g(k.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      r.value !== null ? (t(), T(dt, {
        key: 1,
        label: c.value[r.value].label,
        value: g(c.value[r.value].value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), Sg = ["width", "height"], Mg = ["x1", "x2", "y1", "y2"], Bg = ["x", "y"], _g = ["x", "y"], Pg = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], zg = ["x", "y", "width", "height", "fill", "fill-opacity"], Ag = ["d", "stroke"], Og = ["cx", "cy", "fill"], jg = ["x", "y"], Lg = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Vg = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Tg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Dg = { class: "text-xs font-semibold tabular-nums" }, Ig = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Eg = { class: "text-muted-foreground" }, X3 = /* @__PURE__ */ O({
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
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], c = y(
      () => l.bars.map((Z, q) => ({
        ...Z,
        color: Z.color ?? u[q % u.length]
      }))
    ), v = y(
      () => l.lines.map((Z, q) => ({
        ...Z,
        color: Z.color ?? d[q % d.length]
      }))
    ), m = y(
      () => c.value[0]?.points.map((Z) => Z.label) ?? v.value[0]?.points.map((Z) => Z.label) ?? []
    ), g = y(() => m.value.length), C = y(() => l.lineAxis === "right"), x = y(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), k = y(() => ({
      w: Math.max(1, r.value - x.value.left - x.value.right),
      h: Math.max(1, l.height - x.value.top - x.value.bottom)
    }));
    function M(Z) {
      const q = Math.max(...Z, 0);
      if (q <= 0)
        return 1;
      const _ = 10 ** Math.floor(Math.log10(q));
      return ([1, 2, 2.5, 5, 10].find((L) => q <= L * _) ?? 10) * _;
    }
    const S = y(
      () => M([
        ...c.value.flatMap((Z) => Z.points.map((q) => q.value)),
        ...C.value ? [] : v.value.flatMap((Z) => Z.points.map((q) => q.value))
      ])
    ), B = y(
      () => C.value ? M(v.value.flatMap((Z) => Z.points.map((q) => q.value))) : S.value
    ), p = y(() => k.value.w / Math.max(1, g.value)), h = y(() => p.value * 0.6), $ = y(() => h.value / Math.max(1, c.value.length));
    function P(Z) {
      return x.value.left + Z * p.value + p.value / 2;
    }
    const E = y(
      () => c.value.flatMap(
        (Z, q) => Z.points.map((_, F) => {
          const L = Math.max(0, _.value) / S.value * k.value.h;
          return {
            x: P(F) - h.value / 2 + q * $.value,
            y: x.value.top + k.value.h - L,
            w: Math.max(0, $.value - 2),
            h: L,
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
          y: x.value.top + k.value.h - Math.max(0, _.value) / B.value * k.value.h,
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
        y: x.value.top + k.value.h * Z,
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
      }, " No data ", 4)) : (t(), n(A, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: q[0] || (q[0] = (_) => s.value = null)
        }, [
          (t(!0), n(A, null, V(te.value, (_) => (t(), n("line", {
            key: `g-${_.y}`,
            x1: x.value.left,
            x2: r.value - x.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Mg))), 128)),
          (t(!0), n(A, null, V(te.value, (_) => (t(), n("text", {
            key: `lt-${_.y}`,
            x: x.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.left)), 9, Bg))), 128)),
          C.value ? (t(!0), n(A, { key: 0 }, V(te.value, (_) => (t(), n("text", {
            key: `rt-${_.y}`,
            x: r.value - x.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.right)), 9, _g))), 128)) : w("", !0),
          (t(!0), n(A, null, V(m.value, (_, F) => (t(), n("rect", {
            key: `hit-${F}`,
            x: x.value.left + F * p.value,
            y: x.value.top,
            width: p.value,
            height: k.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (L) => s.value = F
          }, null, 40, Pg))), 128)),
          (t(!0), n(A, null, V(E.value, (_, F) => (t(), n("rect", {
            key: `b-${F}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, zg))), 128)),
          (t(!0), n(A, null, V(I.value, (_, F) => (t(), n("g", {
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
            }, null, 8, Ag),
            s.value !== null && _.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Og)) : w("", !0)
          ]))), 128)),
          (t(!0), n(A, null, V(m.value, (_, F) => pe((t(), n("text", {
            key: `x-${F}`,
            x: P(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(_), 9, jg)), [
            [Ue, K(F)]
          ])), 128))
        ], 40, Sg)),
        ae.value ? (t(), n("div", Lg, [
          o("p", Vg, f(ae.value.label), 1),
          (t(!0), n(A, null, V(ae.value.rows, (_, F) => (t(), n("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", Tg, f(_.name), 1),
            o("span", Dg, f(G(_.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend ? (t(), n("div", Ig, [
          (t(!0), n(A, null, V([...c.value, ...v.value], (_, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", Eg, f(_.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Fg = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Ng = { class: "text-muted-foreground" }, Rg = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Ug = ["width", "height"], Hg = ["x", "y"], Kg = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], qg = ["x", "y"], Gg = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Wg = { class: "text-[11px] font-medium capitalize" }, Zg = { class: "text-muted-foreground text-[11px] capitalize" }, Jg = { class: "text-sm font-semibold tabular-nums" }, Yg = { class: "text-muted-foreground text-xs font-normal" }, Q3 = /* @__PURE__ */ O({
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
    const u = y(() => l.series[0]?.points.map((h) => h.label) ?? []), d = y(() => l.series.length), c = y(() => u.value.length), v = y(() => Math.min(140, Math.max(60, r.value * 0.16))), m = y(() => Math.max(1, r.value - v.value - 8)), g = y(() => m.value / Math.max(1, c.value)), C = y(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
    function x(h) {
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
    const M = y(
      () => l.series.flatMap(
        (h, $) => h.points.map((P, E) => {
          const I = k(P.value);
          return {
            row: $,
            col: E,
            x: v.value + E * g.value,
            y: 4 + $ * C.value,
            w: Math.max(1, g.value - 1),
            h: Math.max(1, C.value - 4),
            colour: x(I),
            label: P.label,
            value: P.value,
            rowName: h.name,
            bucketLabel: l.buckets[I].label
          };
        })
      )
    ), S = y(() => g.value < 2), B = y(() => s.value ? M.value.find((h) => h.row === s.value.row && h.col === s.value.col) ?? null : null), p = (h) => l.format ? l.format(h) : new Intl.NumberFormat().format(h);
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
        o("div", Fg, [
          (t(!0), n(A, null, V(e.buckets, (P, E) => (t(), n("span", {
            key: E,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: x(E) })
            }, null, 4),
            o("span", Ng, f(P.label), 1)
          ]))), 128))
        ]),
        S.value ? (t(), n("p", Rg, f(c.value) + " columns - too many to label individually ", 1)) : w("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: $[0] || ($[0] = (P) => s.value = null)
        }, [
          (t(!0), n(A, null, V(e.series, (P, E) => (t(), n("text", {
            key: `r-${E}`,
            x: v.value - 10,
            y: 4 + E * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(P.name), 9, Hg))), 128)),
          (t(!0), n(A, null, V(M.value, (P, E) => (t(), n("rect", {
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
          }, null, 40, Kg))), 128)),
          e.showColumnLabels && !S.value ? (t(!0), n(A, { key: 0 }, V(u.value, (P, E) => (t(), n("text", {
            key: `c-${E}`,
            x: v.value + E * g.value + g.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(P), 9, qg))), 128)) : w("", !0)
        ], 40, Ug)),
        B.value ? (t(), n("div", Gg, [
          o("p", Wg, f(B.value.label), 1),
          o("p", Zg, f(B.value.rowName), 1),
          o("p", Jg, [
            N(f(p(B.value.value)) + " ", 1),
            o("span", Yg, "(" + f(B.value.bucketLabel) + ")", 1)
          ])
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Xg = ["viewBox"], Qg = { key: 0 }, eh = ["id"], th = ["stop-color"], ah = ["stop-color"], nh = ["d", "fill"], lh = ["d", "stroke"], fa = 100, at = 30, xt = /* @__PURE__ */ O({
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
      const d = l.data.map((g) => g.value);
      if (d.length < 2)
        return [];
      const c = Math.min(...d), m = Math.max(...d) - c || 1;
      return d.map((g, C) => ({
        x: C / (d.length - 1) * fa,
        y: at - (g - c) / m * (at - 4) - 2
      }));
    });
    function s(d) {
      const c = d.length;
      if (c < 2)
        return "";
      const v = [], m = [];
      for (let x = 0; x < c - 1; x++)
        v[x] = d[x + 1].x - d[x].x, m[x] = v[x] === 0 ? 0 : (d[x + 1].y - d[x].y) / v[x];
      const g = [m[0]];
      for (let x = 1; x < c - 1; x++)
        if (m[x - 1] * m[x] <= 0)
          g[x] = 0;
        else {
          const k = 2 * v[x] + v[x - 1], M = v[x] + 2 * v[x - 1];
          g[x] = (k + M) / (k / m[x - 1] + M / m[x]);
        }
      g[c - 1] = m[c - 2];
      let C = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let x = 0; x < c - 1; x++) {
        const k = v[x] / 3;
        C += ` C${(d[x].x + k).toFixed(2)},${(d[x].y + g[x] * k).toFixed(2)} ${(d[x + 1].x - k).toFixed(2)},${(d[x + 1].y - g[x + 1] * k).toFixed(2)} ${d[x + 1].x.toFixed(2)},${d[x + 1].y.toFixed(2)}`;
      }
      return C;
    }
    const i = y(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((c, v) => `${v === 0 ? "M" : "L"}${c.x.toFixed(2)},${c.y.toFixed(2)}`).join(" ");
    }), u = y(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${at} L${d[0].x.toFixed(2)},${at} Z`;
    });
    return (d, c) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${fa} ${at}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", Qg, [
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
          }, null, 8, th),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, ah)
        ], 8, eh)
      ])) : w("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${b(a)})`
      }, null, 8, nh)) : w("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, lh)
    ], 12, Xg)) : w("", !0);
  }
}), oh = { class: "flex items-center gap-1 text-xs" }, sh = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, rh = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Ia = /* @__PURE__ */ O({
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
    return (u, d) => (t(), n("span", oh, [
      o("span", {
        class: z(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", sh, f(s.value), 1),
        N(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", rh, f(e.comparison), 1)) : w("", !0)
    ]));
  }
}), ih = ["data-collapsed"], uh = { class: "flex flex-wrap items-start justify-between gap-2" }, dh = { class: "flex min-w-0 items-start gap-2" }, ch = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fh = ["d"], mh = { class: "min-w-0" }, ph = { class: "text-sm font-medium" }, vh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, gh = { class: "flex shrink-0 items-center gap-1.5" }, hh = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, bh = ["aria-pressed", "onClick"], yh = ["aria-expanded", "aria-label", "title"], xh = ["aria-label"], kh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $h = ["d"], wh = /* @__PURE__ */ O({
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
    const l = e, a = Tt(), r = R(l.defaultCollapsed), s = y(() => !!l.icon && !a.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), n("div", {
      class: z(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", uh, [
        o("div", dh, [
          U(u.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", ch, [
              o("path", {
                d: b(ce)(e.icon)
              }, null, 8, fh)
            ])) : w("", !0)
          ]),
          o("div", mh, [
            o("p", ph, f(e.label), 1),
            e.description ? (t(), n("p", vh, f(e.description), 1)) : w("", !0),
            U(u.$slots, "trend")
          ])
        ]),
        o("div", gh, [
          U(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", hh, [
            (t(!0), n(A, null, V(e.periods, (c) => (t(), n("button", {
              key: c.value,
              type: "button",
              class: z([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === c.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === c.value,
              onClick: (v) => u.$emit("update:period", c.value)
            }, f(c.label), 11, bh))), 128))
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
          ], 8, yh)) : w("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (c) => u.$emit("hide"))
          }, [
            (t(), n("svg", kh, [
              o("path", {
                d: b(ce)("eye-off")
              }, null, 8, $h)
            ]))
          ], 8, xh)) : w("", !0)
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
    ], 10, ih));
  }
}), Ch = ["aria-pressed", "aria-label", "title"], Sh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Mh = ["d"], Bh = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, _h = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Ph = ["href"], zh = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ah = ["d"], Oh = ["aria-label", "onClick"], jh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lh = ["d"], Vh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Th = ["d"], Dh = {
  key: 0,
  class: "flex flex-col gap-1"
}, Ih = ["onClick"], Eh = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fh = ["d"], Nh = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Rh = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!1), i = R(!1), u = y(
      () => a.catalog.filter((v) => !a.items.some((m) => m.id === v.id))
    );
    function d(v) {
      r(
        "update:items",
        a.items.filter((m) => m.id !== v)
      );
    }
    function c(v) {
      r("update:items", [...a.items, v]), i.value = !1;
    }
    return (v, m) => (t(), n(A, null, [
      D(wh, {
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
            (t(), n("svg", Sh, [
              o("path", {
                d: b(ce)(s.value ? "check" : "pencil")
              }, null, 8, Mh)
            ]))
          ], 8, Ch)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), n("div", Bh, [
            m[7] || (m[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            D(de, {
              size: "sm",
              variant: "outline",
              onClick: m[1] || (m[1] = (g) => i.value = !0)
            }, {
              default: j(() => [...m[6] || (m[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", _h, [
            (t(!0), n(A, null, V(e.items, (g) => (t(), n("div", {
              key: g.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: g.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", zh, [
                  o("path", {
                    d: b(ce)(g.icon)
                  }, null, 8, Ah)
                ])),
                N(" " + f(g.label), 1)
              ], 8, Ph),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${g.label}`,
                onClick: (C) => d(g.id)
              }, [
                (t(), n("svg", jh, [
                  o("path", {
                    d: b(ce)("x")
                  }, null, 8, Lh)
                ]))
              ], 8, Oh)) : w("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: m[2] || (m[2] = (g) => i.value = !0)
            }, [
              (t(), n("svg", Vh, [
                o("path", {
                  d: b(ce)("plus")
                }, null, 8, Th)
              ])),
              m[8] || (m[8] = N(" Add ", -1))
            ])) : w("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      D(st, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: m[5] || (m[5] = (g) => i.value = !1)
      }, {
        footer: j(() => [
          D(de, {
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
          u.value.length ? (t(), n("ul", Dh, [
            (t(!0), n(A, null, V(u.value, (g) => (t(), n("li", {
              key: g.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => c(g)
              }, [
                (t(), n("svg", Eh, [
                  o("path", {
                    d: b(ce)(g.icon)
                  }, null, 8, Fh)
                ])),
                N(" " + f(g.label), 1)
              ], 8, Ih)
            ]))), 128))
          ])) : (t(), n("p", Nh, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Uh = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Hh = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Kh = { class: "relative w-full max-w-xl" }, qh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gh = ["d"], Wh = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Zh = ["data-slot"], Jh = { class: "px-5 py-4" }, Yh = { class: "mb-3 text-sm font-semibold" }, Xh = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Qh = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, eb = ["d"], tb = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, eC = /* @__PURE__ */ O({
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
      return typeof d == "string" ? d : va(d);
    }), s = nt({
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
        links: d ? c.links.filter((v) => v.label.toLowerCase().includes(d)) : c.links
      })).filter((c) => c.links.length > 0);
    });
    return (d, c) => (t(), n("div", {
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(qe)])
    }, [
      o("header", null, [
        o("h1", Uh, f(e.title), 1),
        e.description ? (t(), n("p", Hh, f(e.description), 1)) : w("", !0)
      ]),
      o("div", Kh, [
        (t(), n("svg", qh, [
          o("path", {
            d: b(ce)("search")
          }, null, 8, Gh)
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
      u.value.length ? (t(), n("div", Wh, [
        (t(!0), n(A, null, V(u.value, (v) => (t(), n("section", {
          key: v.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${v.key}`
        }, [
          o("div", Jh, [
            o("h2", Yh, f(v.title), 1),
            o("div", Xh, [
              (t(!0), n(A, null, V(v.links, (m) => (t(), T(Be(i(m) ? "a" : r.value), {
                key: m.href + m.label,
                href: m.href,
                class: z(b(s)),
                target: i(m) ? "_blank" : void 0,
                rel: i(m) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), n("svg", Qh, [
                    o("path", {
                      d: b(ce)(m.icon)
                    }, null, 8, eb)
                  ])),
                  N(" " + f(m.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Zh))), 128))
      ])) : (t(), n("p", tb, ' Nothing matches "' + f(a.value) + '". ', 1))
    ], 2));
  }
}), ab = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, nb = { class: "flex flex-1 flex-col gap-1 p-4" }, lb = { class: "text-muted-foreground relative text-xs font-medium" }, ob = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, sb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, rb = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, ib = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, tC = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", ab, [
      o("div", nb, [
        o("p", lb, f(e.label), 1),
        e.loading ? (t(), T(Pe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", ob, " Could not load ")) : (t(), n("span", sb, f(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Ia, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", rb, f(e.description), 1)) : w("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", ib, [
        D(xt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : w("", !0)
    ]));
  }
}), ub = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, db = { class: "flex flex-col gap-1 p-4" }, cb = { class: "flex items-start justify-between gap-2" }, fb = { class: "text-sm font-medium" }, mb = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, pb = { class: "mt-1 flex flex-wrap items-center gap-2" }, vb = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, gb = {
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
    const l = e, a = y(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = y(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = y(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, u) => (t(), n("div", ub, [
      o("div", db, [
        o("div", cb, [
          o("p", fb, f(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", mb, f(e.caption), 1)) : w("", !0),
        o("div", pb, [
          e.loading ? (t(), T(Pe, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", vb, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: z(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : w("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", gb, [
        D(xt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : w("", !0)
    ]));
  }
}), hb = { class: "relative flex flex-col gap-2" }, bb = ["aria-label"], yb = ["onMouseenter"], xb = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, kb = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, $b = { class: "truncate" }, wb = { class: "text-sm font-semibold tabular-nums" }, aC = /* @__PURE__ */ O({
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
    ), u = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), d = R(null), c = (v) => `${(v * 100).toFixed(v > 0 && v < 0.01 ? 1 : 0)}%`;
    return (v, m) => (t(), n("div", hb, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((g) => `${g.label} ${u(g.value)}`).join(", ")
      }, [
        (t(!0), n(A, null, V(i.value, (g, C) => (t(), n("span", {
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
          onMouseenter: (x) => d.value = C,
          onMouseleave: m[0] || (m[0] = (x) => d.value = null)
        }, null, 46, yb))), 128))
      ], 12, bb),
      e.showLegend ? (t(), n("div", xb, [
        (t(!0), n(A, null, V(i.value, (g, C) => (t(), n("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", kb, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: g.color })
            }, null, 4),
            o("span", $b, f(g.label), 1)
          ]),
          o("span", wb, f(u(g.value)), 1)
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
}), Cb = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Sb = ["data-heading"], Mb = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Bb = { class: "text-muted-foreground truncate" }, _b = ["aria-label"], nC = /* @__PURE__ */ O({
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
    return (i, u) => (t(), n("div", Cb, [
      (t(!0), n(A, null, V(s.value, (d) => (t(), n("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), n("div", {
          key: 0,
          class: z(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? a[d.tone] : "text-muted-foreground"])
        }, f(d.label), 3)) : (t(), n("div", Mb, [
          o("span", Bb, f(d.label), 1),
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
          (t(!0), n(A, null, V(d.segments, (c, v) => (t(), n("span", {
            key: v,
            class: z(["h-full transition-all", r[c.tone ?? "neutral"]]),
            style: se({ width: c.width })
          }, null, 6))), 128))
        ], 8, _b)) : w("", !0)
      ], 8, Sb))), 128))
    ]));
  }
}), Pb = {
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
}, zb = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Ab(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Ob(e, l) {
  return l || (e ? Pb[Ab(e)] ?? "neutral" : "neutral");
}
function jb(e, l) {
  return zb[Ob(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = y(() => jb(l.status, l.tone));
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
}), Lb = ["data-layout"], Vb = ["src", "alt"], Tb = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Db = ["src"], Ib = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Eb = ["onMouseenter"], Fb = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Nb = { class: "min-w-0" }, Rb = { class: "truncate text-sm font-medium" }, Ub = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Hb = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Kb = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, qb = { class: "min-w-0" }, Gb = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Wb = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, Zb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Jb = ["d"], Yb = ["aria-label"], Xb = /* @__PURE__ */ O({
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
    const d = y(() => {
      const M = [r.item.image, ...r.item.images ?? []].map(u).filter((S) => S !== null);
      return [...new Set(M)];
    }), c = y(() => d.value[i.value] ?? d.value[0] ?? null), v = y(
      () => r.item.label.split(/\s+/).slice(0, 2).map((M) => M[0]?.toUpperCase() ?? "").join("")
    ), m = y(() => {
      const M = r.item.progress;
      if (!M)
        return null;
      const S = Math.max(M.total ?? 100, M.value, 1);
      return `${Math.min(100, Math.max(0, M.value / S * 100)).toFixed(2)}%`;
    }), g = y(() => d.value.length > 1 ? d.value[1] : null), C = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), x = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
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
      onKeydown: S[1] || (S[1] = Ja(he((B) => s("select", e.item.key), ["prevent"]), ["enter"])),
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
        }, null, 8, Vb)) : (t(), n("span", Tb, f(v.value), 1)),
        e.layout === "grid" && g.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: g.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Db)) : w("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), n("div", Ib, [
          (t(!0), n(A, null, V(d.value, (B, p) => (t(), n("span", {
            key: p,
            class: z(["size-1.5 rounded-full", p === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (h) => i.value = p
          }, null, 42, Eb))), 128))
        ])) : w("", !0)
      ], 2),
      o("div", {
        class: z(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Fb, [
          o("div", Nb, [
            o("p", Rb, f(e.item.label), 1),
            e.item.caption ? (t(), n("p", Ub, f(e.item.caption), 1)) : w("", !0),
            e.item.facts?.length ? (t(), n("p", Hb, f(e.item.facts.join(" · ")), 1)) : w("", !0)
          ]),
          e.item.status ? (t(), T(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : w("", !0)
        ]),
        o("div", Kb, [
          o("div", qb, [
            e.item.price ? (t(), n("p", Gb, f(e.item.price), 1)) : w("", !0),
            x.value ? (t(), n("p", Wb, f(x.value), 1)) : w("", !0)
          ]),
          C.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: k
          }, [
            (t(), n("svg", Zb, [
              o("path", {
                d: b(ce)("cart")
              }, null, 8, Jb)
            ]))
          ])) : w("", !0)
        ]),
        m.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: z(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: m.value })
          }, null, 6)
        ], 8, Yb)) : w("", !0)
      ], 2)
    ], 42, Lb));
  }
});
function Qb(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function e1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function t1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const a1 = ["data-featured", "data-recommended"], n1 = { class: "flex flex-col gap-1" }, l1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, o1 = { key: 0 }, s1 = { key: 1 }, r1 = { key: 2 }, i1 = { key: 3 }, u1 = { class: "text-sm font-semibold" }, d1 = { class: "flex items-baseline gap-1" }, c1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, f1 = { class: "text-muted-foreground text-sm font-normal" }, m1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, p1 = { class: "text-muted-foreground mt-1 text-xs" }, v1 = { class: "flex flex-1 flex-col gap-2 text-sm" }, g1 = { class: "flex min-w-0 items-start gap-2" }, h1 = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, b1 = ["d"], y1 = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, x1 = ["d"], k1 = { class: "capitalize" }, $1 = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, w1 = { class: "text-foreground font-medium" }, C1 = { class: "mt-auto flex gap-2 pt-2" }, S1 = /* @__PURE__ */ O({
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
      return Object.entries(c).map(([v, m]) => ({
        key: v,
        label: v.replace(/_/g, " "),
        granted: t1(m.value),
        display: e1(m.value)
      }));
    }), d = y(() => a.plan.extraPerks ?? []);
    return (c, v) => (t(), n("article", {
      class: z(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", n1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", l1, [
          e.plan.recommended ? (t(), n("span", o1, "Recommended")) : e.plan.featured ? (t(), n("span", s1, "Featured")) : w("", !0),
          e.plan.trial ? (t(), n("span", r1, "Trial")) : w("", !0),
          e.plan.active === !1 ? (t(), n("span", i1, "Inactive")) : w("", !0)
        ])) : w("", !0),
        o("h3", u1, f(e.plan.name), 1),
        o("p", d1, [
          o("span", c1, f(s.value), 1),
          o("span", f1, f(b(Qb)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", m1, f(e.plan.shortDescription), 1)) : w("", !0),
        o("p", p1, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", v1, [
        (t(!0), n(A, null, V(u.value, (m) => (t(), n("li", {
          key: m.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", g1, [
            o("span", {
              class: z(["mt-0.5 shrink-0", m.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              m.granted ? (t(), n("svg", h1, [
                o("path", {
                  d: b(ce)("check")
                }, null, 8, b1)
              ])) : (t(), n("svg", y1, [
                o("path", {
                  d: b(ce)("x")
                }, null, 8, x1)
              ]))
            ], 2),
            o("span", k1, f(m.label), 1)
          ]),
          m.display ? (t(), n("span", $1, f(m.display), 1)) : w("", !0)
        ]))), 128)),
        (t(!0), n(A, null, V(d.value, (m, g) => (t(), n("li", {
          key: `extra-${g}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, f(m.key), 1),
          o("span", w1, f(m.value), 1)
        ]))), 128))
      ]),
      o("footer", C1, [
        D(de, {
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
        D(de, {
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
    ], 10, a1));
  }
}), M1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, B1 = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, _1 = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, P1 = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, z1 = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, lC = /* @__PURE__ */ O({
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
      o("header", M1, [
        o("div", null, [
          e.title ? (t(), n("h1", B1, f(e.title), 1)) : w("", !0),
          e.description ? (t(), n("p", _1, f(e.description), 1)) : w("", !0)
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
      e.plans.length === 0 ? (t(), n("p", P1, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", z1, [
        (t(!0), n(A, null, V(e.plans, (i) => (t(), T(S1, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => a("edit", u)),
          onDelete: s[2] || (s[2] = (u) => a("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), A1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, O1 = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, j1 = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, L1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, V1 = { class: "space-y-1.5" }, T1 = { class: "space-y-1.5" }, D1 = { class: "space-y-1.5" }, I1 = { class: "space-y-1.5" }, E1 = { class: "space-y-1.5" }, F1 = { class: "flex items-center gap-3 text-sm" }, N1 = { class: "flex items-center gap-3 text-sm" }, R1 = { class: "flex items-center gap-3 text-sm" }, U1 = {
  key: 0,
  class: "space-y-1.5"
}, H1 = { class: "flex items-center gap-3 text-sm" }, K1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, q1 = { class: "space-y-1.5" }, G1 = ["value"], W1 = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Z1 = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, J1 = ["id", "value", "onInput"], Y1 = { class: "space-y-2" }, X1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Q1 = ["d"], oC = /* @__PURE__ */ O({
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
    function u(p, h) {
      const $ = i.perks?.[p]?.value;
      return $ ?? h;
    }
    function d(p, h, $) {
      const P = i.perks?.[p];
      i.perks = {
        ...i.perks ?? {},
        [p]: {
          value: h,
          overview: $ ?? P?.overview ?? ""
        }
      };
    }
    function c(p, h) {
      const $ = i.perks?.[p];
      i.perks = {
        ...i.perks ?? {},
        [p]: {
          value: $?.value ?? (p === "modules" ? [] : 0),
          overview: h
        }
      };
    }
    function v(p) {
      const h = p ? { ...a(), ...p } : a();
      i.id = h.id, i.name = h.name, i.shortDescription = h.shortDescription ?? "", i.description = h.description ?? "", i.days = h.days, i.price = h.price, i.featured = h.featured ?? !1, i.recommended = h.recommended ?? !1, i.trial = h.trial ?? !1, i.trialDays = h.trialDays ?? 0, i.active = h.active ?? !0, i.perks = { ...h.perks ?? {} }, i.extraPerks = [...h.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    v(r.plan), me(
      () => r.plan,
      (p) => v(p),
      { deep: !0 }
    );
    const m = y({
      get: () => {
        const p = u("modules", []);
        return Array.isArray(p) ? p.map(String) : [];
      },
      set: (p) => {
        d("modules", C(p.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), g = y(
      () => r.modules.map((p) => ({ value: p.key, label: p.label }))
    );
    function C(p) {
      const h = Object.fromEntries(r.modules.map((E) => [E.key, E])), $ = new Set(p);
      for (const E of r.modules)
        if (!$.has(E.key))
          for (const I of E.children ?? [])
            $.delete(I);
      let P = !0;
      for (; P; ) {
        P = !1;
        for (const E of [...$])
          for (const I of h[E]?.requires ?? [])
            $.has(I) || ($.add(I), P = !0);
      }
      return [...$];
    }
    function x() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function k(p) {
      i.extraPerks = (i.extraPerks ?? []).filter((h, $) => $ !== p);
    }
    function M() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((p) => p.key.trim() !== "")
      });
    }
    const S = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ne}`, B = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ne}`;
    return (p, h) => (t(), n("form", {
      class: z(["w-full space-y-6", e.embedded ? "" : b(qe)]),
      "data-slot": "plan-editor",
      onSubmit: he(M, ["prevent"])
    }, [
      o("header", A1, [
        o("div", null, [
          o("h1", O1, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
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
      o("div", j1, [
        o("section", L1, [
          h[26] || (h[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", V1, [
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
          o("div", T1, [
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
          o("div", D1, [
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
          o("div", I1, [
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
          o("div", E1, [
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
          o("label", F1, [
            D(b(Ze), {
              checked: !!i.featured,
              "onUpdate:checked": h[6] || (h[6] = ($) => i.featured = $)
            }, null, 8, ["checked"]),
            h[21] || (h[21] = N(" Featured ", -1))
          ]),
          o("label", N1, [
            D(b(Ze), {
              checked: !!i.recommended,
              "onUpdate:checked": h[7] || (h[7] = ($) => i.recommended = $)
            }, null, 8, ["checked"]),
            h[22] || (h[22] = N(" Recommended ", -1))
          ]),
          o("label", R1, [
            D(b(Ze), {
              checked: !!i.trial,
              "onUpdate:checked": h[8] || (h[8] = ($) => i.trial = $)
            }, null, 8, ["checked"]),
            h[23] || (h[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", U1, [
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
          o("label", H1, [
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
        o("section", K1, [
          h[33] || (h[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", q1, [
            D(_e, null, {
              default: j(() => [...h[27] || (h[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Ht, {
              modelValue: m.value,
              "onUpdate:modelValue": h[11] || (h[11] = ($) => m.value = $),
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
            }, null, 40, G1)
          ]),
          (t(!0), n(A, null, V(e.limits, ($) => (t(), n("div", {
            key: $.key,
            class: "space-y-1.5"
          }, [
            $.kind === "toggle" ? (t(), n("label", W1, [
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
              $.hint ? (t(), n("p", Z1, f($.hint), 1)) : w("", !0),
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
            }, null, 40, J1)
          ]))), 128)),
          o("div", Y1, [
            h[32] || (h[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(A, null, V(i.extraPerks ?? [], ($, P) => (t(), n("div", {
              key: P,
              class: "flex items-center gap-2"
            }, [
              D($e, {
                modelValue: $.key,
                "onUpdate:modelValue": (E) => $.key = E,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D($e, {
                modelValue: $.value,
                "onUpdate:modelValue": (E) => $.value = E,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D(de, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (E) => k(P)
              }, {
                default: j(() => [
                  (t(), n("svg", X1, [
                    o("path", {
                      d: b(ce)("x")
                    }, null, 8, Q1)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            D(de, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: x
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
}), ey = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, ty = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, ay = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, ny = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ly = ["d"], oy = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, sy = ["aria-pressed"], ry = ["aria-pressed"], iy = {
  key: 0,
  class: "flex flex-col gap-2"
}, uy = ["aria-label"], dy = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, cy = ["aria-pressed", "onClick"], fy = ["aria-label"], my = { class: "text-muted-foreground mr-1 text-xs font-medium" }, py = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, vy = ["data-slot"], gy = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, hy = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, by = { class: "flex items-center gap-2" }, yy = ["disabled"], xy = ["disabled"], Jt = /* @__PURE__ */ O({
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
    function c(I) {
      const te = I.trim();
      if (te === "")
        return null;
      const H = Number(te);
      return Number.isFinite(H) ? H : null;
    }
    function v() {
      const I = {};
      for (const [te, H] of Object.entries(d))
        I[te] = { min: c(H.min), max: c(H.max) };
      return I;
    }
    function m() {
      return { query: s.value, selected: { ...u }, ranges: v() };
    }
    function g() {
      r("filter", m());
    }
    function C(I, te) {
      u[I] = u[I] === te ? null : te, g();
    }
    function x(I) {
      return d[I] ?? { min: "", max: "" };
    }
    function k(I, te, H) {
      const K = d[I] ?? { min: "", max: "" };
      d[I] = { ...K, [te]: H }, g();
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
    const $ = y(() => {
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
      h.value = Math.min($.value, Math.max(1, I));
    }
    return (I, te) => (t(), n("div", {
      class: z(["flex flex-col gap-4", b(Oa)])
    }, [
      p.value ? (t(), n("div", ey, [
        o("div", ty, [
          e.searchable ? (t(), n("div", ay, [
            (t(), n("svg", ny, [
              o("path", {
                d: b(ce)("search")
              }, null, 8, ly)
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
          U(I.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", oy, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, sy),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (H) => i.value = "list")
            }, " List ", 10, ry)
          ])) : w("", !0)
        ]),
        S.value.length || B.value.length ? (t(), n("div", iy, [
          (t(!0), n(A, null, V(S.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", dy, f(H.label), 1)) : w("", !0),
            (t(!0), n(A, null, V(H.options ?? [], (K) => (t(), n("button", {
              key: K.value,
              type: "button",
              class: z([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[H.key] === K.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[H.key] === K.value ? "true" : "false",
              onClick: (G) => C(H.key, K.value)
            }, f(K.label), 11, cy))), 128))
          ], 8, uy))), 128)),
          (t(!0), n(A, null, V(B.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", my, f(H.label ?? H.key), 1),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": x(H.key).min,
              "onUpdate:modelValue": (K) => k(H.key, "min", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            te[7] || (te[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": x(H.key).max,
              "onUpdate:modelValue": (K) => k(H.key, "max", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, fy))), 128))
        ])) : w("", !0)
      ])) : w("", !0),
      e.items.length === 0 ? (t(), n("p", py, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: z(
          i.value === "list" ? "flex flex-col gap-3" : b(zc)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(A, null, V(P.value, (H) => (t(), T(Xb, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: te[3] || (te[3] = (K) => r("select", K)),
          onCart: te[4] || (te[4] = (K) => r("cart", K))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, vy)),
      e.pageSize && $.value > 1 ? (t(), n("div", gy, [
        o("p", hy, " Page " + f(h.value) + " of " + f($.value), 1),
        o("div", by, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value <= 1,
            onClick: te[5] || (te[5] = (H) => E(h.value - 1))
          }, " Previous ", 8, yy),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value >= $.value,
            onClick: te[6] || (te[6] = (H) => E(h.value + 1))
          }, " Next ", 8, xy)
        ])
      ])) : w("", !0)
    ], 2));
  }
}), ky = ["aria-label"], $y = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, wy = { class: "min-w-0" }, Cy = { class: "text-base font-semibold" }, Sy = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, My = { class: "flex shrink-0 items-center gap-2" }, By = { class: "min-h-0 flex-1 overflow-y-auto" }, _y = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Yt = /* @__PURE__ */ O({
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
      const m = v[0], g = v[v.length - 1];
      c.shiftKey && document.activeElement === m ? (c.preventDefault(), g.focus()) : !c.shiftKey && document.activeElement === g && (c.preventDefault(), m.focus());
    }
    return me(
      () => a.open,
      async (c) => {
        if (c) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await Le(), s.value?.querySelector("input, button, [tabindex]")?.focus();
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
            onClick: v[0] || (v[0] = (m) => r("close"))
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
            o("header", $y, [
              o("div", wy, [
                o("h2", Cy, f(e.title), 1),
                e.description ? (t(), n("p", Sy, f(e.description), 1)) : w("", !0)
              ]),
              o("div", My, [
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
            o("div", By, [
              U(c.$slots, "default")
            ]),
            c.$slots.footer ? (t(), n("footer", _y, [
              U(c.$slots, "footer")
            ])) : w("", !0)
          ], 10, ky)) : w("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Te() {
  return { query: "", selected: {}, ranges: {} };
}
function Py(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function zy(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function Xt(e, l) {
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
    if (!zy(Py(e, r), s))
      return !1;
  return !0;
}
function Ay(e, l) {
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
const Oy = { class: "flex flex-col gap-6 p-4" }, jy = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Ly = { class: "text-sm font-semibold" }, Vy = { class: "flex flex-wrap items-center gap-1.5" }, Ty = ["aria-pressed", "onClick"], Dy = { class: "text-sm font-semibold" }, Iy = { class: "flex flex-wrap items-center gap-1.5" }, Ey = { key: 0 }, Ea = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = ot({}), u = ot({}), d = y(
      () => a.facets.filter(($) => ($.kind ?? "chips") === "chips")
    ), c = y(() => a.facets.filter(($) => $.kind === "range"));
    function v($) {
      return $ == null ? "" : String($);
    }
    function m() {
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
        $ && m();
      }
    );
    function g($) {
      const P = $.trim();
      if (P === "")
        return null;
      const E = Number(P);
      return Number.isFinite(E) ? E : null;
    }
    function C() {
      const $ = {};
      for (const [P, E] of Object.entries(u))
        $[P] = { min: g(E.min), max: g(E.max) };
      return $;
    }
    function x() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const k = y(() => {
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
    function B($, P, E) {
      const I = u[$] ?? { min: "", max: "" };
      u[$] = { ...I, [P]: E };
    }
    function p() {
      r("apply", x());
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
    return ($, P) => (t(), T(Yt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (E) => r("close"))
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
          onClick: P[1] || (P[1] = (E) => r("close"))
        }, {
          default: j(() => [...P[5] || (P[5] = [
            N("Cancel", -1)
          ])]),
          _: 1
        }),
        D(de, {
          size: "sm",
          onClick: p
        }, {
          default: j(() => [
            P[6] || (P[6] = N(" Apply", -1)),
            k.value ? (t(), n("span", Ey, " (" + f(k.value) + ")", 1)) : w("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        o("div", Oy, [
          e.hideSearch ? w("", !0) : (t(), n("label", jy, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            D($e, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (E) => s.value = E),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(A, null, V(d.value, (E) => (t(), n("section", {
            key: E.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Ly, f(E.label ?? E.key), 1),
            o("div", Vy, [
              (t(!0), n(A, null, V(E.options ?? [], (I) => (t(), n("button", {
                key: I.value,
                type: "button",
                class: z([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[E.key] === I.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[E.key] === I.value ? "true" : "false",
                onClick: (te) => M(E.key, I.value)
              }, f(I.label), 11, Ty))), 128))
            ])
          ]))), 128)),
          (t(!0), n(A, null, V(c.value, (E) => (t(), n("section", {
            key: E.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Dy, f(E.label ?? E.key), 1),
            o("div", Iy, [
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
}), Fy = ["aria-disabled"], Ny = ["disabled"], Ry = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Uy = ["d"], Hy = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Ky = ["disabled"], qy = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Gy = ["d"], Wy = /* @__PURE__ */ O({
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
    const a = rt(e, "modelValue"), r = l, s = y(() => a.value <= e.min), i = y(() => e.max !== null && a.value >= e.max);
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
        (t(), n("svg", Ry, [
          o("path", {
            d: b(ce)("minus")
          }, null, 8, Uy)
        ]))
      ], 8, Ny),
      o("span", Hy, f(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: c[1] || (c[1] = (v) => u(1))
      }, [
        (t(), n("svg", qy, [
          o("path", {
            d: b(ce)("plus")
          }, null, 8, Gy)
        ]))
      ], 8, Ky)
    ], 8, Fy));
  }
}), Zy = { class: "divide-border flex flex-col divide-y" }, Jy = { class: "min-w-0" }, Yy = { class: "truncate text-sm font-medium" }, Xy = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Qy = { class: "flex shrink-0 items-center gap-2 text-sm" }, ex = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, tx = {
  key: 2,
  class: "font-medium tabular-nums"
}, ax = ["aria-label", "onClick"], nx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, lx = ["d"], ox = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Zy, [
      (t(!0), n(A, null, V(e.items, (u) => (t(), n("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Jy, [
          o("p", Yy, f(u.label), 1),
          u.detail ? (t(), n("p", Xy, f(u.detail), 1)) : w("", !0)
        ]),
        o("div", Qy, [
          e.editable ? (t(), T(Wy, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => a("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), n("span", ex, " ×" + f(u.qty), 1)) : w("", !0),
          u.amount ? (t(), n("span", tx, f(u.amount), 1)) : w("", !0),
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
            (t(), n("svg", nx, [
              o("path", {
                d: b(ce)("trash")
              }, null, 8, lx)
            ]))
          ], 8, ax)) : w("", !0)
        ])
      ]))), 128))
    ]));
  }
}), sx = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, rx = { class: "border-b px-4 py-3" }, ix = { class: "text-sm font-medium" }, ux = { class: "flex-1 px-4 py-3" }, dx = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, cx = { class: "text-foreground block font-medium" }, fx = { class: "mt-1 block" }, mx = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, px = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, vx = { class: "tabular-nums" }, gx = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, hx = { class: "text-muted-foreground" }, bx = {
  key: 0,
  class: "tabular-nums"
}, yx = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, xx = { class: "text-muted-foreground" }, kx = { class: "tabular-nums" }, $x = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, wx = { class: "tabular-nums" }, Cx = {
  key: 4,
  class: "pt-1"
}, Sx = /* @__PURE__ */ O({
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
    return (r, s) => (t(), n("aside", sx, [
      o("header", rx, [
        o("h2", ix, f(e.title), 1)
      ]),
      o("div", ux, [
        e.items.length === 0 ? (t(), n("p", dx, [
          o("span", cx, f(e.emptyTitle), 1),
          o("span", fx, f(e.emptyDescription), 1)
        ])) : (t(), T(ox, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => a("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", mx, [
        e.subtotal ? (t(), n("div", px, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", vx, f(e.subtotal), 1)
        ])) : w("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", gx, [
          o("span", hx, f(e.discountLabel), 1),
          e.discount ? (t(), n("span", bx, f(e.discount), 1)) : w("", !0),
          U(r.$slots, "discount")
        ])) : w("", !0),
        e.tax ? (t(), n("div", yx, [
          o("span", xx, f(e.taxLabel), 1),
          o("span", kx, f(e.tax), 1)
        ])) : w("", !0),
        e.total ? (t(), n("div", $x, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", wx, f(e.total), 1)
        ])) : w("", !0),
        r.$slots.pay ? (t(), n("div", Cx, [
          U(r.$slots, "pay")
        ])) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), Mx = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Bx = { class: "flex flex-col gap-4" }, _x = { class: "flex flex-wrap items-start justify-between gap-3" }, Px = { class: "flex items-center gap-2" }, zx = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, sC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Te()), i = R(!1), u = rt(e, "cart"), d = R(!1), c = y(
      () => a.items.filter((H) => Xt(H, s.value))
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
    function x(H) {
      const K = Ay(a.items, H);
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
    const B = y(
      () => u.value.reduce((H, K) => {
        const G = a.items.find((oe) => oe.key === K.key);
        return H + g(G) * Number(K.qty ?? 1);
      }, 0)
    ), p = y(
      () => a.discountRate > 0 ? Math.round(B.value * a.discountRate) : 0
    ), h = y(
      () => Math.round((B.value - p.value) * a.taxRate)
    ), $ = y(
      () => u.value.length ? a.formatMoney(B.value) : null
    ), P = y(
      () => u.value.length && p.value > 0 ? `−${a.formatMoney(p.value)}` : null
    ), E = y(
      () => u.value.length && a.taxRate > 0 ? a.formatMoney(h.value) : null
    ), I = y(
      () => u.value.length ? a.formatMoney(
        B.value - p.value + h.value
      ) : null
    );
    function te() {
      d.value = !0, r("pay", u.value);
    }
    return (H, K) => (t(), n(A, null, [
      o("div", Mx, [
        o("section", Bx, [
          o("div", _x, [
            D(Ve, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", Px, [
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
                b(ht)(s.value) ? (t(), n("span", zx, " on ")) : w("", !0)
              ])) : w("", !0)
            ])
          ]),
          D(Jt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: c.value,
            onFilter: v,
            onSelect: K[2] || (K[2] = (G) => r("select", G)),
            onCart: k,
            onScan: x
          }, null, 8, ["search-placeholder", "items"])
        ]),
        D(Sx, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: $.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: E.value,
          total: I.value,
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
      D(Ea, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: K[3] || (K[3] = (G) => i.value = !1),
        onApply: m,
        onReset: K[4] || (K[4] = (G) => s.value = { ...b(Te)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Ax = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Ox = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, jx = ["src", "alt"], Lx = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Vx = ["src"], Tx = { class: "flex items-start justify-between gap-3" }, Dx = { class: "text-lg font-semibold tabular-nums" }, Ix = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Ex = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Fx = { class: "grid grid-cols-2 gap-3" }, Nx = { class: "flex flex-col gap-2" }, Rx = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, rC = /* @__PURE__ */ O({
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
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((x, k) => ({
        label: x,
        value: Math.max(0, Math.round(m + Math.sin(k + g) * m * 0.18))
      }));
    }
    const u = y(() => a.item?.kind === "unit"), d = y(() => {
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
      () => !!a.item && !u.value && a.item?.status !== "out-of-stock"
    );
    return (m, g) => (t(), T(Yt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: g[1] || (g[1] = (C) => r("close"))
    }, lt({
      default: j(() => [
        e.item ? (t(), n("div", Ax, [
          o("div", Ox, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, jx)) : w("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", Lx, [
            (t(!0), n(A, null, V(e.item.images, (C, x) => (t(), n("img", {
              key: x,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Vx))), 128))
          ])) : w("", !0),
          o("div", Tx, [
            o("div", null, [
              o("p", Dx, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", Ix, f(e.item.stock) + " in stock ", 1)) : w("", !0)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", Ex, f(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("div", Fx, [
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
          o("div", Nx, [
            o("p", Rx, f(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(xt, {
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
}), Ux = { class: "flex flex-col gap-10" }, Hx = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Kx = { class: "flex flex-col gap-3" }, qx = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Gx = ["src", "alt"], Wx = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Zx = ["aria-label", "aria-pressed", "onClick"], Jx = ["src"], Yx = { class: "flex flex-col gap-5" }, Xx = { class: "flex flex-wrap items-start justify-between gap-3" }, Qx = { class: "min-w-0" }, e0 = { class: "text-2xl font-semibold tracking-tight" }, t0 = { class: "text-muted-foreground mt-1 text-sm" }, a0 = { class: "text-2xl font-semibold tabular-nums" }, n0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, l0 = { class: "grid grid-cols-2 gap-3 text-sm" }, o0 = {
  key: 0,
  class: "rounded-lg border p-3"
}, s0 = { class: "mt-1 font-medium" }, r0 = { class: "rounded-lg border p-3" }, i0 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, u0 = { class: "mt-1 font-medium" }, d0 = { class: "flex flex-col gap-4" }, c0 = { class: "grid gap-4 sm:grid-cols-2" }, f0 = { class: "bg-card rounded-lg border p-4" }, m0 = { class: "mb-3 text-sm font-medium" }, p0 = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(x) {
      let k = 0;
      for (const M of x)
        k = k * 31 + M.charCodeAt(0) >>> 0;
      return k;
    }
    function i(x, k) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((S, B) => ({
        label: S,
        value: Math.max(0, Math.round(x + Math.sin(B + k) * x * 0.18))
      }));
    }
    const u = y(() => a.item.kind === "unit"), d = y(() => {
      const x = [a.item.image, ...a.item.images ?? []].filter(
        (k) => typeof k == "string" && k !== ""
      );
      return [...new Set(x)];
    }), c = R(0), v = y(() => {
      const x = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(x) || 12, s(a.item.key) % 7);
    }), m = y(() => {
      const x = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(x) || 20, s(a.item.key) % 5 + 1);
    }), g = y(() => u.value ? m.value : v.value), C = y(() => !u.value && a.item.status !== "out-of-stock");
    return (x, k) => (t(), n("div", Ux, [
      o("div", Hx, [
        o("div", Kx, [
          o("div", qx, [
            d.value[c.value] ? (t(), n("img", {
              key: 0,
              src: d.value[c.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Gx)) : w("", !0)
          ]),
          d.value.length > 1 ? (t(), n("div", Wx, [
            (t(!0), n(A, null, V(d.value, (M, S) => (t(), n("button", {
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
              }, null, 8, Jx)
            ], 10, Zx))), 128))
          ])) : w("", !0)
        ]),
        o("div", Yx, [
          o("div", Xx, [
            o("div", Qx, [
              o("h1", e0, f(e.item.label), 1),
              o("p", t0, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          o("p", a0, f(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", n0, f(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("dl", l0, [
            e.item.sku ? (t(), n("div", o0, [
              k[1] || (k[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", s0, f(e.item.sku), 1)
            ])) : w("", !0),
            o("div", r0, [
              o("dt", i0, f(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", u0, f(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
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
      o("section", d0, [
        k[2] || (k[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", c0, [
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
        o("div", f0, [
          o("p", m0, f(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(Fv, {
            data: g.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), v0 = ["href"], iC = /* @__PURE__ */ O({
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
      ], 8, v0),
      D(p0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), g0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, h0 = ["aria-selected", "onClick"], b0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, y0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, x0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, k0 = ["aria-pressed"], $0 = ["aria-pressed"], uC = /* @__PURE__ */ O({
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
    const v = y(
      () => a.tabs.find((M) => M.key === s.value) ?? a.tabs[0] ?? null
    ), m = y(
      () => v.value ? c(v.value.key) : Te()
    ), g = y(() => {
      const M = v.value;
      return M ? M.items.filter((S) => Xt(S, c(M.key))) : [];
    });
    function C(M) {
      const S = v.value?.key;
      S && (u.value = {
        ...u.value,
        [S]: { ...c(S), query: M }
      });
    }
    function x() {
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
        D(Ve, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", g0, [
          (t(!0), n(A, null, V(e.tabs, (B) => (t(), n("button", {
            key: B.key,
            type: "button",
            class: z([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === B.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === B.key ? "true" : "false",
            onClick: (p) => s.value = B.key
          }, f(B.label), 11, h0))), 128))
        ])) : w("", !0),
        o("div", b0, [
          D($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": m.value.query,
            type: "search",
            placeholder: v.value?.searchPlaceholder ?? "Search…",
            "aria-label": v.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": S[0] || (S[0] = (B) => C(String(B)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          b(ht)(m.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: x
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
            b(ht)(m.value) ? (t(), n("span", y0, " on ")) : w("", !0)
          ])) : w("", !0),
          o("div", x0, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: S[2] || (S[2] = (B) => i.value = "grid")
            }, " Tiles ", 10, k0),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: S[3] || (S[3] = (B) => i.value = "list")
            }, " List ", 10, $0)
          ])
        ]),
        D(Jt, {
          layout: i.value,
          "onUpdate:layout": S[4] || (S[4] = (B) => i.value = B),
          "page-size": e.pageSize,
          items: g.value,
          onSelect: S[5] || (S[5] = (B) => r("select", B)),
          onCart: S[6] || (S[6] = (B) => r("cart", B))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(Ea, {
        open: d.value,
        title: v.value?.filterTitle ?? "Filters",
        "search-placeholder": v.value?.searchPlaceholder ?? "Search…",
        facets: v.value?.facets ?? [],
        applied: m.value,
        onClose: S[7] || (S[7] = (B) => d.value = !1),
        onApply: k,
        onReset: x
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), w0 = { class: "flex flex-col gap-4" }, C0 = { class: "flex flex-col gap-4" }, dC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Te()), i = y(
      () => a.cards.filter((u) => Xt(u, s.value))
    );
    return (u, d) => (t(), n("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : b(qe)])
    }, [
      D(Ve, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", w0, [
        D(Ve, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(Jt, {
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
      o("section", C0, [
        D(Ve, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(Kl, {
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
}), S0 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, M0 = { class: "text-sm font-medium" }, B0 = ["width", "height", "aria-label"], _0 = { class: "flex items-center gap-2" }, P0 = /* @__PURE__ */ O({
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
      const B = S.getBoundingClientRect(), p = S.width / B.width, h = S.height / B.height;
      return {
        x: (M.clientX - B.left) * p,
        y: (M.clientY - B.top) * h
      };
    }
    function v(M) {
      a.disabled || (i.value = !0, u = c(M), s.value?.setPointerCapture(M.pointerId));
    }
    function m(M) {
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
    function x() {
      const M = s.value;
      M && r("save", M.toDataURL("image/png"));
    }
    function k() {
      const M = s.value, S = d();
      !M || !S || (S.fillStyle = "#ffffff", S.fillRect(0, 0, M.width, M.height));
    }
    return ge(k), ke(() => {
      i.value = !1;
    }), (M, S) => (t(), n("div", S0, [
      o("p", M0, f(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: z(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(v, ["prevent"]),
        onPointermove: he(m, ["prevent"]),
        onPointerup: he(g, ["prevent"]),
        onPointerleave: he(g, ["prevent"])
      }, null, 42, B0),
      o("div", _0, [
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
          onClick: x
        }, {
          default: j(() => [...S[1] || (S[1] = [
            N("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), z0 = { class: "grid gap-8 lg:grid-cols-2" }, A0 = { class: "flex flex-col gap-3" }, O0 = { class: "text-muted-foreground text-xs font-normal" }, j0 = {
  key: 0,
  class: "flex flex-col gap-3"
}, L0 = { class: "flex flex-wrap gap-3" }, V0 = ["onClick"], T0 = ["src", "alt"], D0 = {
  key: 1,
  class: "flex flex-col gap-3"
}, I0 = { class: "flex flex-wrap gap-3" }, E0 = ["onClick"], F0 = ["src", "alt"], N0 = {
  key: 2,
  class: "flex flex-col gap-4"
}, R0 = { class: "flex flex-wrap items-center gap-2" }, U0 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, H0 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, K0 = { class: "flex flex-col gap-2" }, q0 = ["src"], G0 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, W0 = ["src"], cC = /* @__PURE__ */ O({
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
    async function m(M, S) {
      await Dc(M), S(40);
      const B = await new Promise((p, h) => {
        const $ = new FileReader();
        $.onload = () => p(String($.result)), $.onerror = () => h(new Error("Could not read the file")), $.readAsDataURL(M);
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
    const C = y(
      () => a.value.find((M) => M.id === s.value)?.dataUrl ?? null
    ), x = y(
      () => r.value.find((M) => M.id === i.value)?.dataUrl ?? null
    ), k = y(() => {
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
      D(Ve, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", z0, [
        D(P0, {
          label: "Draw a signature",
          onSave: v
        }),
        o("div", A0, [
          S[2] || (S[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", O0, f(b(ja)), 1),
          D(Ma, {
            modelValue: u.value,
            "onUpdate:modelValue": S[0] || (S[0] = (B) => u.value = B),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: m
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
      a.value.length ? (t(), n("section", j0, [
        D(Ve, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", L0, [
          (t(!0), n(A, null, V(a.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: z(["rounded-md border p-2", B.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => s.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, T0)
          ], 10, V0))), 128))
        ])
      ])) : w("", !0),
      r.value.length ? (t(), n("section", D0, [
        D(Ve, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", I0, [
          (t(!0), n(A, null, V(r.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: z(["rounded-md border p-2", B.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => i.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, F0)
          ], 10, E0))), 128))
        ])
      ])) : w("", !0),
      e.documents.length ? (t(), n("section", N0, [
        o("div", R0, [
          (t(!0), n(A, null, V(e.documents, (B) => (t(), T(de, {
            key: B.key,
            size: "sm",
            variant: d.value === B.key ? "default" : "outline",
            onClick: (p) => d.value = B.key
          }, {
            default: j(() => [
              N(f(B.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", U0, [
          D(Qp, {
            document: k.value
          }, null, 8, ["document"]),
          o("div", H0, [
            o("div", K0, [
              S[3] || (S[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), n("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, q0)) : (t(), n("p", G0, "Draw and save a signature"))
            ]),
            x.value ? (t(), n("img", {
              key: 0,
              src: x.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, W0)) : w("", !0)
          ])
        ])
      ])) : w("", !0)
    ], 2));
  }
}), fC = "panel.dashboard.hiddenWidgets", Z0 = /* @__PURE__ */ Symbol("dashboardHide"), J0 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, mC = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = mt(Z0, null), r = R(
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
    return (u, d) => i.value ? w("", !0) : (t(), n("div", J0, [
      D(Rh, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (c) => r.value = c),
        onHide: d[1] || (d[1] = (c) => b(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Y0 = { class: "flex flex-col gap-3" }, X0 = ["data-slot"], Q0 = ["aria-pressed", "aria-label", "title"], ek = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, tk = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, ak = { class: "flex h-8 items-center" }, nk = ["aria-label", "title", "onClick"], lk = ["aria-label", "title", "onClick"], ok = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, sk = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, pC = /* @__PURE__ */ O({
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
    function u(p) {
      return a.maskable && (p.sensitive ?? !0);
    }
    function d(p) {
      return u(p) && !s.value && !i.value.has(p.key);
    }
    const c = y(() => a.segments.some(d)), v = y(() => a.segments.some(u)), m = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, g = y(() => m[a.columns] ?? m[4]), C = y(() => {
      const p = a.columns ?? 4, h = Math.floor(a.segments.length / p) * p;
      return a.segments.slice(0, h);
    }), x = y(() => {
      const p = a.columns ?? 4, h = Math.floor(a.segments.length / p) * p;
      return a.segments.slice(h);
    }), k = y(() => {
      const p = [];
      return C.value.length > 0 && p.push({ key: "packed", joined: !0, segments: C.value }), x.value.length > 0 && p.push({ key: "leftover", joined: !1, segments: x.value }), p;
    });
    function M() {
      const p = c.value === !1;
      s.value = !p, i.value = /* @__PURE__ */ new Set(), r("toggle", p);
    }
    function S(p) {
      if (!u(p))
        return;
      const h = new Set(i.value);
      if (d(p))
        h.add(p.key);
      else if (h.delete(p.key), s.value) {
        s.value = !1;
        for (const $ of a.segments)
          $.key !== p.key && u($) && h.add($.key);
      }
      i.value = h, r("toggle", c.value);
    }
    function B(p) {
      return typeof p == "number" ? new Intl.NumberFormat().format(p) : p;
    }
    return (p, h) => (t(), n("div", Y0, [
      (t(!0), n(A, null, V(k.value, ($) => (t(), n("div", {
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
          (t(), n("svg", ek, [
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
        ], 8, Q0)) : w("", !0),
        o("div", {
          class: z(["grid", [$.joined ? "gap-px" : "gap-3", g.value]])
        }, [
          (t(!0), n(A, null, V($.segments, (P) => (t(), n("div", {
            key: P.key,
            class: z(["bg-card flex flex-col gap-2 p-4", $.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", tk, f(P.label), 1),
            o("div", ak, [
              e.loading ? (t(), T(Pe, {
                key: 0,
                variant: "number"
              })) : d(P) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (E) => S(P)
              }, [
                (t(), n(A, null, V(5, (E) => o("span", {
                  key: E,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, nk)) : u(P) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${B(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (E) => S(P)
              }, f(B(P.value)), 9, lk)) : (t(), n("span", ok, f(B(P.value)), 1)),
              P.trend && !e.loading && !d(P) ? (t(), T(Ia, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : w("", !0)
            ]),
            P.sparkline?.length && !e.loading && !d(P) ? (t(), T(xt, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : w("", !0),
            P.caption || P.comparison && P.trend ? (t(), n("p", sk, f(P.caption ?? P.comparison), 1)) : w("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, X0))), 128))
    ]));
  }
}), rk = ["aria-label"], ik = ["aria-valuenow", "aria-label"], uk = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, dk = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, ck = ["title"], fk = { class: "font-medium" }, mk = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, pk = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, vk = { class: "flex items-center justify-between gap-2" }, gk = { class: "text-sm font-semibold" }, hk = { class: "flex items-center gap-3" }, bk = ["href"], yk = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, xk = { class: "flex min-w-0 flex-col gap-0.5" }, kk = { class: "text-sm font-medium" }, $k = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, wk = {
  key: 1,
  class: "flex flex-col gap-2"
}, Ck = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Sk = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Mk = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, vC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = y(() => a.items.find((k) => !k.done) ?? null), i = y(() => a.items.filter((k) => k.key !== s.value?.key)), u = y(() => a.items.length), d = y(() => a.items.filter((k) => k.done).length), c = y(() => {
      if (!s.value)
        return u.value;
      const k = a.items.findIndex((M) => M.key === s.value?.key);
      return k >= 0 ? k + 1 : 1;
    }), v = y(
      () => u.value > 0 ? Math.round(d.value / u.value * 100) : 0
    ), m = y(() => {
      const k = a.linkComponent;
      return typeof k == "string" ? k : va(k);
    }), g = nt({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = nt({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), x = nt({
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
      ], 8, ik),
      o("div", uk, [
        o("span", dk, " Step " + f(c.value) + " of " + f(u.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", fk, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", mk, f(": " + s.value.detail), 1)) : w("", !0)
        ], 8, ck),
        s.value?.href ? (t(), T(Be(m.value), {
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
    ], 8, rk)) : e.items.length ? (t(), n("section", pk, [
      o("div", vk, [
        o("h2", gk, f(e.heading), 1),
        o("div", hk, [
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
          }, " Full report ", 8, bk)) : w("", !0)
        ])
      ]),
      s.value ? (t(), n("div", yk, [
        M[2] || (M[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", xk, [
          o("p", kk, f(s.value.title), 1),
          s.value.detail ? (t(), n("p", $k, f(s.value.detail), 1)) : w("", !0),
          s.value.href ? (t(), T(Be(m.value), {
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
      i.value.length ? (t(), n("ul", wk, [
        (t(!0), n(A, null, V(i.value, (S) => (t(), n("li", {
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
            S.done ? (t(), n("svg", Ck, [...M[3] || (M[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : w("", !0)
          ], 2),
          o("div", Sk, [
            o("p", {
              class: z(["text-sm", S.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(S.title), 3),
            !S.done && S.detail ? (t(), n("p", Mk, f(S.detail), 1)) : w("", !0)
          ]),
          !S.done && S.href ? (t(), T(Be(m.value), {
            key: 0,
            href: S.href,
            class: z(b(x))
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
}), Bk = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, _k = { class: "hidden items-center gap-2 md:flex" }, Pk = { class: "md:hidden" }, zk = { class: "border-b px-4 py-3" }, Ak = { class: "text-muted-foreground text-xs font-normal" }, Ok = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, jk = { class: "font-medium tabular-nums" }, Lk = { class: "ml-auto flex items-center gap-3" }, gC = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = R(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, u) => (t(), n("div", Bk, [
      o("div", _k, [
        U(i.$slots, "actions")
      ]),
      o("div", Pk, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: u[0] || (u[0] = (d) => r.value = !0)
        }, " Actions "),
        D(Kt, {
          open: r.value,
          "onUpdate:open": u[1] || (u[1] = (d) => r.value = d)
        }, {
          default: j(() => [
            D(qt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", zk, [
                  u[4] || (u[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", Ak, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", Ok, [
                  U(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", jk, [
        e.allMatching ? (t(), n(A, { key: 0 }, [
          N(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(A, { key: 1 }, [
          N(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", Lk, [
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
}), Vk = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Tk = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Dk = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Ik = ["value"], Ek = ["value"], Fk = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Nk = ["disabled"], Rk = ["disabled"], Uk = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Hk = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Kk = ["disabled"], hC = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("div", Vk, [
      o("p", Tk, [
        N(" Showing " + f(s(i.value)) + "-" + f(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(A, { key: 0 }, [
          N("of " + f(s(e.total)), 1)
        ], 64)) : w("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", Dk, [
        v[4] || (v[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: v[0] || (v[0] = (m) => r("update:perPage", Number(m.target.value)))
        }, [
          (t(!0), n(A, null, V(e.perPageOptions, (m) => (t(), n("option", {
            key: m,
            value: m
          }, f(m), 9, Ek))), 128))
        ], 40, Ik)
      ])) : w("", !0),
      o("nav", Fk, [
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
        ])], 8, Nk),
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
        ])], 8, Rk),
        o("span", Uk, f(e.page), 1),
        d.value !== null ? (t(), n("span", Hk, " of " + f(s(d.value)), 1)) : w("", !0),
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
        ])], 8, Kk)
      ])
    ]));
  }
}), qk = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Gk = ["aria-current"], Wk = ["title"], Zk = ["aria-current", "onClick"], Jk = ["title"], Yk = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", qk, [
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
        }, f(r(e.counts.all ?? 0)), 11, Wk)) : (t(), T(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Gk),
      (t(!0), n(A, null, V(e.tabs, (u) => (t(), n("button", {
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
        }, f(r(e.counts[u] ?? 0)), 11, Jk)) : (t(), T(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Zk))), 128))
    ]));
  }
}), bC = /* @__PURE__ */ bt(Yk, [["__scopeId", "data-v-3967c945"]]), Xk = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Qk = { class: "grid gap-2" }, e2 = {
  key: 0,
  class: "text-destructive text-sm"
}, t2 = { class: "flex gap-2" }, yC = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = R((() => {
      const C = navigator.userAgent, x = [
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
      return [x, k].filter(Boolean).join(" on ") || "";
    })()), i = R(!1), u = Ya(null), d = y(() => u.value?.isLoading.value ?? !1), c = y(() => u.value?.error.value ?? null), v = y(() => u.value?.isSupported.value ?? !1);
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
    const m = async (C) => {
      C.preventDefault(), !(!s.value.trim() || u.value === null) && await u.value.register(s.value);
    }, g = () => {
      i.value = !1, s.value = "";
    };
    return (C, x) => v.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: m
    }, [
      o("div", Qk, [
        x[3] || (x[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        pe(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": x[1] || (x[1] = (k) => s.value = k),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [Me, s.value]
        ]),
        x[4] || (x[4] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " A name helps you identify this passkey later. ", -1))
      ]),
      c.value ? (t(), n("p", e2, f(c.value), 1)) : w("", !0),
      o("div", t2, [
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
          default: j(() => [...x[5] || (x[5] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(de, {
      key: 1,
      variant: "outline",
      onClick: x[0] || (x[0] = (k) => i.value = !0)
    }, {
      default: j(() => [...x[2] || (x[2] = [
        N(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", Xk, " Passkeys are not supported in this browser. "));
  }
}), a2 = { class: "pk-form-stack" }, n2 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, xC = /* @__PURE__ */ O({
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
    const r = l, s = y(() => a.nodes.length > 0), i = y(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = y(() => a.errors._conflict);
    function d(c) {
      if (a.upload)
        return (v, m) => a.upload(c, v, m);
    }
    return (c, v) => (t(), n("div", a2, [
      u.value ? (t(), n("p", n2, f(u.value), 1)) : w("", !0),
      s.value ? (t(!0), n(A, { key: 1 }, V(e.nodes, (m, g) => (t(), T(Ba, {
        key: g,
        node: m,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: v[0] || (v[0] = (C, x) => r("change", C, x)),
        onAffixAction: v[1] || (v[1] = (C, x) => r("affix-action", C, x))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(A, null, V(e.fields, (m) => (t(), T(Ye, {
          key: m.key,
          field: m,
          value: e.modelValue[m.key],
          error: e.errors[m.key],
          errors: e.errors,
          options: e.options[m.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": m.searchable && e.searchOptions ? (g) => e.searchOptions(m.key, g) : void 0,
          upload: d(m.key),
          discard: e.discard,
          class: z(m.span && m.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (g) => r("change", m.key, g),
          onAffixAction: (g) => r("affix-action", m.key, g)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), l2 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, o2 = { class: "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10" }, s2 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, r2 = ["disabled"], i2 = ["disabled"], u2 = ["disabled"], kC = /* @__PURE__ */ O({
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
          e.show ? (t(), n("div", l2, [
            o("div", o2, [
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
              o("span", s2, f(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, f(e.discardLabel), 9, r2)) : w("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, f(e.cancelLabel), 9, i2),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, u2)
            ])
          ])) : w("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function $C(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = R(Bt(e.value)), s = y(() => Bt(e.value) !== r.value);
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
const d2 = {
  key: 0,
  class: "flex flex-col gap-1"
}, c2 = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, f2 = { class: "text-foreground text-sm font-medium" }, m2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, p2 = {
  key: 5,
  class: "max-w-full font-normal"
}, v2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, g2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, h2 = {
  key: 6,
  class: "font-normal"
}, b2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, y2 = { class: "text-muted-foreground truncate font-medium" }, x2 = { class: "text-foreground col-span-2 break-words" }, k2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, $2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, w2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, C2 = ["href"], S2 = { class: "flex min-w-0 items-start gap-2.5" }, M2 = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, B2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, _2 = ["d"], P2 = { class: "min-w-0" }, z2 = { class: "flex flex-wrap items-center gap-2" }, A2 = { class: "text-sm font-semibold" }, O2 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, j2 = ["onClick"], wC = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), u = y(() => a.depth === 0), d = y(() => {
      const x = a.node.columns ?? (a.node.component === "section" ? 2 : 1);
      return x >= 3 ? "sm:grid-cols-3" : x === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
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
      const x = v.value;
      return x == null || x === "";
    }), g = y(() => {
      if (m.value)
        return "None";
      const x = v.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(x)).toLocaleDateString(void 0, c[a.node.type]);
      let k = String(x);
      return a.node.transform === "upper" && (k = k.toUpperCase()), a.node.transform === "lower" && (k = k.toLowerCase()), [a.node.prefix, k, a.node.suffix].filter(Boolean).join(" ");
    }), C = y(() => {
      const x = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), k = a.node.colors?.[x] ?? a.node.defaultColor ?? "neutral";
      return Gt[k] ?? "outline";
    });
    return (x, k) => {
      const M = It("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", d2, [
        o("dt", c2, f(e.node.label), 1),
        o("dd", f2, [
          e.node.type === "badge" && b(td)(v.value) ? (t(), T(Ke, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: j(() => [
              N(f(v.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", m2, "None")) : e.node.type === "icon" ? (t(), T(Pu, {
            key: 2,
            value: v.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(Lu, {
            key: 3,
            src: v.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Eu, {
            key: 4,
            value: typeof v.value == "string" ? v.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", p2, [
            e.node.language ? (t(), n("p", v2, f(e.node.language), 1)) : w("", !0),
            o("pre", g2, [
              o("code", null, f(v.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", h2, [
            v.value && typeof v.value == "object" && !Array.isArray(v.value) && Object.keys(v.value).length ? (t(), n("dl", b2, [
              (t(!0), n(A, null, V(v.value, (S, B) => (t(), n("div", {
                key: B,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", y2, f(B), 1),
                o("dd", x2, f(S), 1)
              ]))), 128))
            ])) : (t(), n("span", k2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", $2, [
            (t(!0), n(A, null, V(Array.isArray(v.value) ? v.value : [], (S, B) => (t(), n("div", {
              key: B,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(A, null, V(e.node.entries ?? [], (p, h) => (t(), T(M, {
                key: h,
                node: p,
                record: S,
                depth: e.depth + 1,
                onAction: k[0] || (k[0] = ($) => r("action", $))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(v.value) || v.value.length === 0 ? (t(), n("span", w2, "None")) : w("", !0)
          ])) : e.node.url && !m.value ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(g.value), 9, C2)) : (t(), n("span", {
            key: 9,
            class: z([
              m.value || e.node.muted ? "text-muted-foreground font-normal" : "",
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
          o("div", S2, [
            e.node.icon ? (t(), n("div", M2, [
              (t(), n("svg", B2, [
                o("path", {
                  d: b(ce)(e.node.icon)
                }, null, 8, _2)
              ]))
            ])) : w("", !0),
            o("div", P2, [
              o("div", z2, [
                o("h3", A2, f(e.node.label), 1),
                e.node.status ? (t(), T(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : w("", !0)
              ]),
              e.node.description ? (t(), n("p", O2, f(e.node.description), 1)) : w("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: z(["grid grid-cols-1 gap-x-6 gap-y-4", [d.value, u.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(A, null, V(e.node.children ?? [], (S, B) => (t(), T(M, {
            key: B,
            node: S,
            record: e.record,
            depth: e.depth + 1,
            onAction: k[3] || (k[3] = (p) => r("action", p))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: z(["grid grid-cols-1 gap-x-6 gap-y-4", d.value])
      }, [
        (t(!0), n(A, null, V(e.node.children ?? [], (S, B) => (t(), T(M, {
          key: B,
          node: S,
          record: e.record,
          depth: e.depth + 1,
          onAction: k[4] || (k[4] = (p) => r("action", p))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: z(u.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(A, null, V(e.node.children ?? [], (S, B) => (t(), n("button", {
            key: B,
            type: "button",
            class: z([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === B ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (p) => i.value = B
          }, f(S.label), 11, j2))), 128))
        ], 2),
        (t(!0), n(A, null, V(e.node.children ?? [], (S, B) => pe((t(), n("div", {
          key: B,
          class: z(["flex flex-col gap-5", u.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(A, null, V(S.children ?? [], (p, h) => (t(), T(M, {
            key: h,
            node: p,
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
}), L2 = { class: "text-muted-foreground text-sm font-normal" }, V2 = { class: "flex items-start gap-3" }, T2 = { class: "min-w-0 flex-1" }, D2 = { class: "flex flex-wrap items-center gap-2" }, I2 = { class: "truncate text-sm font-medium" }, E2 = { class: "text-muted-foreground mt-0.5 text-xs" }, F2 = { class: "text-muted-foreground text-xs font-normal" }, N2 = { class: "mt-auto flex items-center gap-2" }, R2 = /* @__PURE__ */ O({
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
      class: z(["flex flex-col gap-4", b(Oa)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", L2, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: z(b(Pc))
      }, [
        (t(!0), n(A, null, V(e.gateways, (d) => (t(), n("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", V2, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: d.color }),
              "aria-hidden": "true"
            }, f(d.mark), 5),
            o("div", T2, [
              o("div", D2, [
                o("h3", I2, f(d.label), 1),
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
              o("p", E2, f(d.caption), 1)
            ])
          ]),
          o("p", F2, f(d.methods.join(" · ")), 1),
          o("div", N2, [
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
}), U2 = { class: "flex flex-col gap-6" }, H2 = { class: "relative" }, K2 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, q2 = ["d"], G2 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, W2 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, Z2 = { class: "flex flex-wrap items-center gap-2" }, J2 = { class: "text-muted-foreground text-sm font-normal" }, Y2 = { class: "flex flex-col gap-1 text-sm" }, X2 = ["value"], Q2 = {
  key: 0,
  class: "flex flex-col gap-2"
}, e$ = { class: "flex flex-wrap items-center gap-2" }, t$ = {
  key: 1,
  class: "flex items-center gap-2"
}, CC = /* @__PURE__ */ O({
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
    const l = rt(e, "gateways"), a = R(null), r = R(""), s = y(
      () => l.value.find((x) => x.key === a.value) ?? null
    ), i = y(() => {
      const x = r.value.trim().toLowerCase();
      return x === "" ? l.value : l.value.filter((k) => [k.key, k.label, k.caption, ...k.methods].join(" ").toLowerCase().includes(x));
    });
    function u(x) {
      return x.connected && x.enabled !== !1;
    }
    function d(x, k) {
      l.value = l.value.map(
        (M) => M.key === x ? { ...M, ...k } : M
      );
    }
    function c(x) {
      a.value = x;
    }
    function v(x) {
      const k = l.value.find((S) => S.key === x);
      if (!k)
        return;
      const M = !k.connected;
      d(x, {
        connected: M,
        mode: M ? k.mode ?? "test" : null,
        enabled: M,
        isDefault: !1
      });
    }
    function m(x, k) {
      const M = l.value.find((S) => S.key === x);
      M?.connected && d(x, { enabled: k, isDefault: k ? M.isDefault : !1 });
    }
    function g(x) {
      const k = l.value.find((M) => M.key === x);
      !k || !u(k) || (l.value = l.value.map((M) => ({
        ...M,
        isDefault: M.key === x
      })));
    }
    function C(x) {
      const k = a.value;
      !k || !l.value.find((S) => S.key === k)?.connected || d(k, { mode: x });
    }
    return (x, k) => (t(), n(A, null, [
      o("div", U2, [
        D(Ve, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", H2, [
          (t(), n("svg", K2, [
            o("path", {
              d: b(ce)("search")
            }, null, 8, q2)
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
        i.value.length > 0 ? (t(), T(R2, {
          key: 0,
          gateways: i.value,
          onConfigure: c,
          onToggle: v
        }, null, 8, ["gateways"])) : (t(), n("p", G2, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      D(Yt, {
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
          s.value ? (t(), n("div", W2, [
            o("div", Z2, [
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
            o("p", J2, f(s.value.caption), 1),
            o("label", Y2, [
              k[12] || (k[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, X2)
            ]),
            k[20] || (k[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", Q2, [
              k[16] || (k[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              k[17] || (k[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", e$, [
                D(de, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: k[1] || (k[1] = (M) => m(s.value.key, !0))
                }, {
                  default: j(() => [...k[13] || (k[13] = [
                    N(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(de, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: k[2] || (k[2] = (M) => m(s.value.key, !1))
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
            s.value.connected ? (t(), n("div", t$, [
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
function ma(e) {
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
function SC(e) {
  const l = R(ma(e));
  ge(() => {
    l.value = ma(e);
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
function pa(e) {
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
function MC(e) {
  const l = R(pa(e));
  ge(() => {
    l.value = pa(e);
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
function BC(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = R(
    l.driver === "none" ? "off" : "connecting"
  ), c = R(/* @__PURE__ */ new Set());
  let v = /* @__PURE__ */ new Map(), m, g, C, x = (/* @__PURE__ */ new Date()).toISOString(), k = null;
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
        const K = a.value.map((ae) => ae[r]), { records: G, at: oe } = await s(K, x);
        x = oe, d.value = "live";
        for (const ae of G)
          M(ae[r], ae);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function p() {
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
  function E() {
    k && ($()?.leave(k), k = null);
  }
  function I() {
    l.driver === "poll" && p(), l.driver === "broadcast" && P();
  }
  function te() {
    h(), E(), clearTimeout(m), m = void 0, v = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (te(), d.value = "paused") : (x = (/* @__PURE__ */ new Date()).toISOString(), I(), i?.()));
  }
  return ge(() => {
    l.driver !== "none" && (I(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), te();
  }), { status: d, recentlyChanged: c, applyPatch: M, flush: S, pollOnce: B };
}
const a$ = /^[a-z0-9-]+$/, n$ = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function _C(e) {
  Xa(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !a$.test(a) || typeof r != "string" || !n$.test(r) || (l[`--${a}`] = r);
    Bd(l);
  });
}
const l$ = { class: "flex items-center gap-0.5" }, o$ = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", l$, [
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
}), s$ = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(Da, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), r$ = { class: "flex flex-col gap-2" }, i$ = { class: "bg-card rounded-lg border p-4" }, u$ = { class: "text-muted-foreground truncate text-xs" }, d$ = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, c$ = /* @__PURE__ */ O({
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
      const k = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return k === "" ? u.value : `${u.value} › ${k.split("/").join(" › ")}`;
    });
    function c(k, M) {
      return k.length <= M ? k : `${k.slice(0, M - 1).trimEnd()}…`;
    }
    const v = y(() => c(s.value, r.value.titleMax)), m = y(() => c(i.value, r.value.descriptionMax));
    function g(k, M, S) {
      return k === 0 ? { tone: "text-muted-foreground", note: "empty" } : k > S ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : k < M ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = y(
      () => g(s.value.length, r.value.titleMin, r.value.titleMax)
    ), x = y(
      () => g(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (k, M) => (t(), n("div", r$, [
      o("div", i$, [
        o("p", u$, f(d.value), 1),
        o("p", {
          class: z(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", v.value === "" ? "text-muted-foreground italic" : ""])
        }, f(v.value || "Untitled page"), 3),
        o("p", {
          class: z(["text-muted-foreground mt-1 line-clamp-2 text-sm", m.value === "" ? "italic" : ""])
        }, f(m.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", d$, [
        o("span", {
          class: z(C.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(C.value.note), 3),
        o("span", {
          class: z(x.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(x.value.note), 3)
      ]),
      M[0] || (M[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), f$ = ["value", "placeholder", "disabled"], m$ = /* @__PURE__ */ O({
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
      class: z(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", b(Se)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, f$));
  }
}), p$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, v$ = ["aria-selected", "disabled", "title", "onClick"], g$ = /* @__PURE__ */ O({
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
    return (d, c) => (t(), n("div", p$, [
      (t(!0), n(A, null, V(s.value, (v) => (t(), n("button", {
        key: v,
        type: "button",
        role: "option",
        class: z(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [b(Se), i.value === v ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === v,
        disabled: e.disabled,
        title: v,
        onClick: (m) => u(v)
      }, f(v), 11, v$))), 128))
    ]));
  }
}), h$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, b$ = ["disabled"], y$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, x$ = ["onClick"], k$ = ["onClick"], $$ = /* @__PURE__ */ O({
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
    function d(g, C) {
      return !C || g.label.toLowerCase().includes(C) ? !0 : (g.children ?? []).some((x) => d(x, C));
    }
    const c = y(() => {
      const g = s.value.trim().toLowerCase();
      return g ? u.value.filter((C) => d(C, g)) : u.value;
    }), v = y(() => {
      const g = (C) => {
        for (const x of C) {
          if (x.value === a.modelValue)
            return x.label;
          const k = g(x.children ?? []);
          if (k)
            return k;
        }
        return null;
      };
      return g(u.value);
    });
    function m(g) {
      a.disabled || (r("update:modelValue", g), i.value = !1);
    }
    return (g, C) => (t(), n("div", h$, [
      o("button", {
        type: "button",
        class: z(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Se)]),
        disabled: e.disabled,
        onClick: C[0] || (C[0] = (x) => i.value = !i.value)
      }, [
        o("span", {
          class: z(v.value ? "" : "text-muted-foreground")
        }, f(v.value ?? "Select…"), 3),
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, b$),
      i.value ? (t(), n("div", y$, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": C[1] || (C[1] = (x) => s.value = x),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Me, s.value]
        ]) : w("", !0),
        (t(!0), n(A, null, V(c.value, (x) => (t(), n(A, {
          key: String(x.value)
        }, [
          o("button", {
            type: "button",
            class: z(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === x.value ? "bg-accent" : ""]),
            onClick: (k) => m(x.value)
          }, f(x.label), 11, x$),
          (t(!0), n(A, null, V(x.children ?? [], (k) => (t(), n("button", {
            key: String(k.value),
            type: "button",
            class: z(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === k.value ? "bg-accent text-foreground" : ""]),
            onClick: (M) => m(k.value)
          }, f(k.label), 11, k$))), 128))
        ], 64))), 128))
      ])) : w("", !0)
    ]));
  }
}), w$ = ["aria-label"], C$ = ["disabled", "aria-label", "aria-pressed", "onClick"], S$ = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, M$ = { key: 0 }, B$ = ["id"], _$ = ["fill"], P$ = ["disabled"], z$ = /* @__PURE__ */ O({
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
      const v = Number(a.modelValue);
      return Number.isFinite(v) ? v : 0;
    });
    function d(v) {
      a.disabled || r("update:modelValue", v);
    }
    function c(v) {
      return u.value >= v ? "full" : i.value && u.value >= v - 0.5 ? "half" : "empty";
    }
    return (v, m) => (t(), n("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), n(A, null, V(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${g} of ${s.value}`,
        "aria-pressed": u.value >= g,
        onClick: (C) => d(g)
      }, [
        (t(), n("svg", S$, [
          c(g) === "half" ? (t(), n("defs", M$, [
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
            ])], 8, B$)
          ])) : w("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: c(g) === "full" ? "currentColor" : c(g) === "half" ? `url(#half-${e.field.key}-${g})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, _$)
        ]))
      ], 8, C$))), 128)),
      u.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: m[0] || (m[0] = (g) => d(0))
      }, " Clear ", 8, P$)) : w("", !0)
    ], 8, w$));
  }
});
function A$() {
  xe("radio", sm), xe("checkboxlist", um), xe("tags", gm), xe("colour", _m), xe("slider", rp), xe("rating", z$), xe("phone", m$), xe("icon-picker", g$), xe("tree-select", $$), xe("visual-select", xp), xe("markdown", Ef), xe("code", qf), xe("map", jm), xe("qrcode", Im), xe("barcode", Km), xe("diff", Wm), xe("seo-preview", c$), Mt("swatch", $p), Mt("voucher-code-box", s$), Mt("document-colour-mode", o$);
}
function Fa() {
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
const O$ = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = Fa();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: z(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", b(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      U(r.$slots, "default")
    ], 6));
  }
}), j$ = ["id"], Oe = /* @__PURE__ */ O({
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
        D(O$, null, {
          default: j(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, j$));
  }
}), L$ = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, V$ = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, T$ = {
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
      e.eyebrow ? (t(), n("p", L$, f(e.eyebrow), 1)) : w("", !0),
      e.title ? (t(), n("h2", V$, f(e.title), 1)) : w("", !0),
      e.body ? (t(), n("p", T$, f(e.body), 1)) : w("", !0)
    ], 2)) : w("", !0);
  }
});
function D$() {
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
const I$ = { class: "pk-tilt-inner relative h-full" }, E$ = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = D$();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", I$, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), F$ = { class: "flex flex-col gap-10" }, N$ = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, R$ = { class: "text-base font-semibold" }, U$ = { class: "text-sm text-pretty text-muted-foreground" }, H$ = /* @__PURE__ */ O({
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
        o("div", F$, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", N$, [
            (t(!0), n(A, null, V(e.items ?? [], (s, i) => (t(), T(E$, {
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
                  o("h3", R$, f(s.title), 1),
                  o("p", U$, f(s.body), 1)
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
}), K$ = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, q$ = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, G$ = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, W$ = ["href"], Z$ = /* @__PURE__ */ O({
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
        o("div", K$, [
          o("h2", q$, f(e.title), 1),
          e.body ? (t(), n("p", G$, f(e.body), 1)) : w("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, W$)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), J$ = { class: "flex flex-col gap-8" }, Y$ = { class: "divide-y rounded-lg border" }, X$ = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Q$ = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, ew = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, { narrow: "" }, {
      default: j(() => [
        o("div", J$, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Y$, [
            (t(!0), n(A, null, V(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", X$, [
                N(f(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", Q$, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), tw = { class: "flex flex-col gap-10" }, aw = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, nw = { class: "text-sm font-semibold" }, lw = { class: "text-sm text-pretty text-muted-foreground" }, ow = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, null, {
      default: j(() => [
        o("div", tw, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", aw, [
            (t(!0), n(A, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", nw, f(r.title), 1),
              o("p", lw, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), sw = { class: "flex flex-col items-center gap-6 text-center" }, rw = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, iw = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, uw = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, dw = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, cw = ["href"], fw = ["href"], mw = {
  key: 3,
  class: "text-xs text-muted-foreground font-normal"
}, pw = /* @__PURE__ */ O({
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
        o("div", sw, [
          e.eyebrow ? (t(), n("p", rw, f(e.eyebrow), 1)) : w("", !0),
          o("h1", iw, f(e.title), 1),
          e.body ? (t(), n("p", uw, f(e.body), 1)) : w("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", dw, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, cw)) : w("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, fw)) : w("", !0)
          ])) : w("", !0),
          e.note ? (t(), n("p", mw, f(e.note), 1)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), vw = { class: "flex flex-col items-center gap-6" }, gw = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, hw = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, bw = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, { muted: "" }, {
      default: j(() => [
        o("div", vw, [
          e.title ? (t(), n("p", gw, f(e.title), 1)) : w("", !0),
          o("ul", hw, [
            (t(!0), n(A, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), yw = { class: "flex flex-col gap-10" }, xw = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, kw = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, $w = ["aria-pressed"], ww = ["aria-pressed"], Cw = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, Sw = { class: "grid gap-4 md:grid-cols-3" }, Mw = { class: "flex flex-col gap-1" }, Bw = { class: "text-sm font-semibold" }, _w = { class: "flex items-baseline gap-1" }, Pw = { class: "text-3xl font-semibold tracking-tight" }, zw = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, Aw = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, Ow = { class: "flex flex-col gap-2 text-sm" }, jw = { class: "text-muted-foreground" }, Lw = ["href"], Vw = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(Oe, { muted: "" }, {
      default: j(() => [
        o("div", yw, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", xw, [
            o("div", kw, [
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: u[0] || (u[0] = (d) => a.value = !1)
              }, " Monthly ", 10, $w),
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: u[1] || (u[1] = (d) => a.value = !0)
              }, " Annual ", 10, ww)
            ]),
            e.annualNote ? (t(), n("p", Cw, f(e.annualNote), 1)) : w("", !0)
          ])) : w("", !0),
          o("ul", Sw, [
            (t(!0), n(A, null, V(e.items ?? [], (d, c) => (t(), n("li", {
              key: c,
              class: z(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", Mw, [
                o("h3", Bw, f(d.name), 1),
                o("p", _w, [
                  o("span", Pw, f(s(d)), 1),
                  d.period ? (t(), n("span", zw, f(d.period), 1)) : w("", !0)
                ]),
                d.body ? (t(), n("p", Aw, f(d.body), 1)) : w("", !0)
              ]),
              o("ul", Ow, [
                (t(!0), n(A, null, V(d.features ?? [], (v, m) => (t(), n("li", {
                  key: m,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", jw, f(v.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), n("a", {
                key: 0,
                href: d.href ?? "#",
                class: z([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(d.label), 11, Lw)) : w("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function Tw() {
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
const Dw = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, Iw = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, Ew = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Fw = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Nw = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, Rw = { class: "pk-showcase-stage w-full [perspective:1400px]" }, Uw = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, Hw = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, Kw = { class: "ml-3 truncate text-xs text-muted-foreground" }, qw = { class: "flex" }, Gw = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, Ww = { class: "min-w-0 flex-1 p-4" }, Zw = { class: "flex flex-col divide-y rounded-md border" }, Jw = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = Tw();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", Dw, [
        o("div", Iw, [
          o("div", Ew, [
            o("h2", Fw, f(e.title), 1),
            e.body ? (t(), n("p", Nw, f(e.body), 1)) : w("", !0)
          ]),
          o("div", Rw, [
            o("div", Uw, [
              o("div", Hw, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", Kw, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", qw, [
                o("div", Gw, [
                  (t(), n(A, null, V(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", Ww, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", Zw, [
                    (t(!0), n(A, null, V(e.rows, (s) => (t(), n("div", {
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
}), Yw = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = Fa(), s = R(0);
    return me(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const d = performance.now(), c = (v) => {
        const m = Math.min((v - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - m, 3)), m < 1 ? requestAnimationFrame(c) : s.value = l.to;
      };
      requestAnimationFrame(c);
    }), (i, u) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), Xw = { class: "flex flex-col gap-10" }, Qw = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, e4 = { class: "order-2 text-sm text-muted-foreground" }, t4 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, a4 = /* @__PURE__ */ O({
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
        o("div", Xw, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", Qw, [
            (t(!0), n(A, null, V(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", e4, f(s.label), 1),
              o("dd", t4, [
                l(s.value) ? (t(), T(Yw, {
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
}), n4 = { class: "flex flex-col gap-10" }, l4 = { class: "grid gap-6 md:grid-cols-3" }, o4 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, s4 = { class: "text-sm font-semibold" }, r4 = { class: "text-sm text-pretty text-muted-foreground" }, i4 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, null, {
      default: j(() => [
        o("div", n4, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", l4, [
            (t(!0), n(A, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", o4, f(s + 1), 1),
              o("h3", s4, f(r.title), 1),
              o("p", r4, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), u4 = { class: "flex flex-col gap-10" }, d4 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, c4 = { class: "text-pretty text-sm leading-relaxed" }, f4 = { class: "mt-auto flex items-center gap-3" }, m4 = ["src"], p4 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, v4 = { class: "min-w-0" }, g4 = { class: "block truncate text-sm font-medium" }, h4 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, b4 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Oe, null, {
      default: j(() => [
        o("div", u4, [
          D(Ge, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", d4, [
            (t(!0), n(A, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", c4, " “" + f(r.quote) + "” ", 1),
              o("figcaption", f4, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, m4)) : (t(), n("span", p4, f((r.name ?? "?").slice(0, 1)), 1)),
                o("span", v4, [
                  o("span", g4, f(r.name), 1),
                  r.role ? (t(), n("span", h4, f(r.role), 1)) : w("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), PC = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: pw,
      logos: bw,
      features: ow,
      bento: H$,
      showcase: Jw,
      steps: i4,
      stats: a4,
      testimonials: b4,
      pricing: Vw,
      faq: ew,
      cta: Z$
    }, s = y(
      () => (a.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), n(A, null, V(s.value, (d) => (t(), T(Be(d.component), re({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), y4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, zC = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", y4, [
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
}), x4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, AC = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", x4, [...a[0] || (a[0] = [
      Dt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), k4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, OC = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", k4, [...a[0] || (a[0] = [
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
A$();
const jC = "0.0.1";
export {
  eC as AdminDirectory,
  $c as Alert,
  wc as AlertDescription,
  Cc as AlertTitle,
  E3 as AppPageFooter,
  Q4 as AppearanceDrawer,
  t3 as Avatar,
  a3 as AvatarFallback,
  n3 as AvatarImage,
  Gt as BADGE_VARIANTS,
  Z4 as BadgeResolver,
  G3 as BarChart,
  l3 as Breadcrumb,
  o3 as BreadcrumbEllipsis,
  s3 as BreadcrumbItem,
  r3 as BreadcrumbLink,
  i3 as BreadcrumbList,
  u3 as BreadcrumbPage,
  d3 as BreadcrumbSeparator,
  A4 as BulkActions,
  Oa as CATALOGUE_CONTAINER,
  Pc as CATALOGUE_GRID,
  s5 as CATALOGUE_GRID_TIGHT,
  zc as CATALOGUE_GRID_TILES,
  P3 as Card,
  z3 as CardAction,
  A3 as CardContent,
  O3 as CardDescription,
  j3 as CardFooter,
  L3 as CardHeader,
  V3 as CardTitle,
  Sx as CartPanel,
  uC as CatalogBrowser,
  Xb as CatalogCard,
  Ea as CatalogFilterSheet,
  Jt as CatalogGrid,
  rC as CatalogInspect,
  p0 as CatalogItemDetail,
  iC as CatalogItemView,
  dC as CatalogRegister,
  sC as CatalogTill,
  wh as ChartCard,
  dt as ChartTooltip,
  Or as Checkbox,
  U4 as CheckboxCell,
  H4 as CodeCell,
  Eu as ColourCell,
  X3 as ComboChart,
  Ar as CreateOptionDialog,
  Sr as CreateOptionError,
  fC as DASHBOARD_HIDDEN_STORAGE_KEY,
  Z0 as DASHBOARD_HIDE_KEY,
  mC as DashboardShortcuts,
  Kl as DataTable,
  b3 as Dialog,
  y3 as DialogClose,
  x3 as DialogContent,
  k3 as DialogDescription,
  $3 as DialogFooter,
  w3 as DialogHeader,
  sf as DialogOverlay,
  C3 as DialogScrollContent,
  S3 as DialogTitle,
  M3 as DialogTrigger,
  eC as DirectoryPage,
  N5 as DropdownMenu,
  R5 as DropdownMenuCheckboxItem,
  U5 as DropdownMenuContent,
  H5 as DropdownMenuGroup,
  K5 as DropdownMenuItem,
  q5 as DropdownMenuLabel,
  TC as DropdownMenuPortal,
  G5 as DropdownMenuRadioGroup,
  W5 as DropdownMenuRadioItem,
  Z5 as DropdownMenuSeparator,
  J5 as DropdownMenuShortcut,
  Y5 as DropdownMenuSub,
  X5 as DropdownMenuSubContent,
  Q5 as DropdownMenuSubTrigger,
  e3 as DropdownMenuTrigger,
  G4 as EditableCell,
  Se as FOCUS_RING,
  O4 as FOCUS_RING_SOFT,
  aa as FOCUS_RING_WITHIN,
  u5 as FORM_MEASURE,
  Ye as FormFieldControl,
  Q3 as HeatmapChart,
  wt as ICON_PATHS,
  Ne as INPUT_COPY,
  Pr as INPUT_PLACEHOLDER,
  _r as INPUT_TEXT,
  Pu as IconCell,
  Lu as ImageCell,
  wC as InfoNode,
  Oc as JPEG_IMAGE_ERROR,
  K4 as KeyValueCell,
  B3 as Label,
  Fv as LineChart,
  ox as LineItems,
  E4 as MUTED_COPY,
  ft as MUTED_COPY_SNUG,
  F4 as MUTED_COPY_XS,
  gt as MiniStatCard,
  c3 as NavigationMenu,
  f3 as NavigationMenuContent,
  m3 as NavigationMenuIndicator,
  p3 as NavigationMenuItem,
  v3 as NavigationMenuLink,
  g3 as NavigationMenuList,
  h3 as NavigationMenuTrigger,
  lf as NavigationMenuViewport,
  Ac as OPAQUE_IMAGE_ERROR,
  qe as PAGE_SHELL,
  r5 as PAGE_SHELL_COMPACT,
  i5 as PAGE_SHELL_STACK,
  CC as PaymentGatewaySettings,
  R2 as PaymentGateways,
  W3 as PieChart,
  l5 as PkAlertError,
  zC as PkAuroraBackdrop,
  Ke as PkBadge,
  Km as PkBarcode,
  H$ as PkBento,
  e5 as PkBottomNav,
  T3 as PkBoundary,
  R3 as PkBuilder,
  de as PkButton,
  U3 as PkCalendar,
  D3 as PkCard,
  um as PkCheckboxList,
  Da as PkCodeBox,
  qf as PkCodeInput,
  _m as PkColourPicker,
  OC as PkConsoleBackdrop,
  Yw as PkCountUp,
  Z$ as PkCta,
  F3 as PkDeviceFrame,
  Wm as PkDiff,
  Qp as PkDocument,
  Je as PkDropdown,
  AC as PkEditorialBackdrop,
  Pt as PkEmptyState,
  ew as PkFaq,
  ow as PkFeatureGrid,
  _e as PkFieldLabel,
  Ma as PkFileUpload,
  Ve as PkHeading,
  pw as PkHero,
  si as PkKeyValue,
  PC as PkLandingSections,
  bw as PkLogoCloud,
  zm as PkMap,
  jm as PkMapField,
  Ef as PkMarkdownInput,
  st as PkModal,
  Ht as PkMultiSelect,
  a5 as PkOtpInput,
  n5 as PkPageHeader,
  yC as PkPasskeyRegister,
  o5 as PkPasswordInput,
  Vw as PkPricing,
  Im as PkQrCode,
  Wy as PkQtyStepper,
  Wo as PkQueryBuilder,
  sm as PkRadioGroup,
  N3 as PkRepeater,
  O$ as PkReveal,
  gi as PkRichEditor,
  Oe as PkSection,
  Ge as PkSectionHeading,
  Jw as PkShowcase,
  P0 as PkSignaturePad,
  Pe as PkSkeleton,
  Yt as PkSlideover,
  rp as PkSlider,
  t5 as PkSpinner,
  a4 as PkStats,
  we as PkStatusBadge,
  wr as PkStepIndicator,
  i4 as PkSteps,
  $p as PkSwatchPreview,
  gm as PkTagsInput,
  b4 as PkTestimonials,
  $e as PkTextInput,
  E$ as PkTiltCard,
  xp as PkVisualSelect,
  S1 as PlanCard,
  oC as PlanEditor,
  lC as PlanGrid,
  Y3 as PolarAreaChart,
  J3 as RadarChart,
  R4 as RatingCell,
  J4 as RecordActions,
  xC as RecordForm,
  N4 as RelationCreateDialog,
  L4 as RelationPanel,
  Pb as STATUS_TONES,
  Z3 as ScatterChart,
  Ba as SchemaNode,
  aC as SegmentedBar,
  gC as SelectionBar,
  Qc as Separator,
  vC as SetupChecklist,
  Aa as ShadcnInput,
  Kt as Sheet,
  p5 as SheetClose,
  qt as SheetContent,
  Ic as SheetDescription,
  v5 as SheetFooter,
  Ec as SheetHeader,
  Fc as SheetTitle,
  g5 as SheetTrigger,
  Rh as ShortcutsWidget,
  h5 as Sidebar,
  b5 as SidebarContent,
  y5 as SidebarFooter,
  x5 as SidebarGroup,
  k5 as SidebarGroupAction,
  $5 as SidebarGroupContent,
  w5 as SidebarGroupLabel,
  C5 as SidebarHeader,
  S5 as SidebarInput,
  M5 as SidebarInset,
  B5 as SidebarMenu,
  _5 as SidebarMenuAction,
  P5 as SidebarMenuBadge,
  A5 as SidebarMenuButton,
  O5 as SidebarMenuItem,
  j5 as SidebarMenuSkeleton,
  L5 as SidebarMenuSub,
  V5 as SidebarMenuSubButton,
  T5 as SidebarMenuSubItem,
  D5 as SidebarProvider,
  I5 as SidebarRail,
  E5 as SidebarSeparator,
  F5 as SidebarTrigger,
  cC as SignatureStudio,
  xt as Sparkline,
  _3 as Spinner,
  tC as StatCard,
  nC as StatListChart,
  pC as StatStrip,
  Ze as Switch,
  ja as TRANSPARENT_IMAGE_HELP,
  hC as TablePagination,
  Co as TableShell,
  bC as TableTabs,
  tr as TableToolbar,
  q4 as TagsCell,
  q3 as ThemeToggle,
  Jc as Tooltip,
  Yc as TooltipContent,
  z5 as TooltipProvider,
  Xc as TooltipTrigger,
  Ia as TrendBadge,
  kC as UnsavedBar,
  Sc as alertVariants,
  Md as appearanceVars,
  jt as applyAppearance,
  Dc as assertTransparentImage,
  nt as buttonClasses,
  ht as catalogFiltersActive,
  Q as cn,
  Br as createOptionActionLabel,
  Mr as createOptionTitle,
  Qb as cycleLabel,
  Te as emptyCatalogFilters,
  Cr as fieldControl,
  I4 as fieldErrorsFromPayload,
  Ay as findExactSku,
  e1 as formatPerkValue,
  td as hasBadgeValue,
  V4 as hasFieldControl,
  H3 as hasOptionPreview,
  ce as iconPath,
  Vc as imageHasTransparency,
  Y4 as initializeAppearance,
  Ot as isDark,
  Xt as matchCatalogItem,
  f5 as mergeLayoutItems,
  of as navigationMenuTriggerStyle,
  ip as optionPreview,
  d5 as packWidgetColumns,
  c5 as parseWidgetId,
  t1 as perkGranted,
  Zt as readAppearance,
  A$ as registerBuiltInFieldControls,
  xe as registerFieldControl,
  Mt as registerOptionPreview,
  T4 as registeredFieldTypes,
  up as registeredOptionPreviews,
  D4 as resetFieldControls,
  K3 as resetOptionPreviews,
  X4 as setAppearancePersister,
  ef as sidebarMenuButtonVariants,
  jb as statusBadgeVariant,
  Ob as statusTone,
  m5 as toPersistedLayout,
  j4 as toUrl,
  za as useAppearance,
  SC as useColumnVisibility,
  MC as useColumnWidths,
  BC as useLiveUpdates,
  D$ as usePointer,
  Fa as useReveal,
  W4 as useSchemaColumns,
  Tw as useScrollProgress,
  I3 as useShellPageFooter,
  yt as useSidebar,
  _C as useTenantTheme,
  $C as useUnsavedChanges,
  jC as version,
  sa as widgetId
};
//# sourceMappingURL=index.js.map
