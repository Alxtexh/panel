import './ui.css';
import { defineComponent as O, useSlots as Dt, openBlock as t, createElementBlock as n, normalizeClass as P, unref as b, renderSlot as U, createElementVNode as o, toDisplayString as f, createCommentVNode as y, computed as x, normalizeStyle as se, Fragment as A, renderList as L, ref as R, watch as me, useId as Ka, withModifiers as he, createTextVNode as N, createVNode as D, createStaticVNode as It, createBlock as T, createSlots as lt, withCtx as j, nextTick as Ve, onBeforeUnmount as ke, Teleport as Xe, Transition as Ue, onMounted as ve, withDirectives as pe, vModelText as _e, resolveDynamicComponent as Be, resolveComponent as Et, vModelSelect as We, vModelDynamic as qa, mergeProps as re, normalizeProps as Oe, guardReactiveProps as Ee, defineAsyncComponent as aa, inject as mt, vShow as He, onUnmounted as Ga, isRef as Wa, useTemplateRef as Za, onErrorCaptured as Ja, provide as _t, markRaw as va, withKeys as Ya, reactive as ot, useModel as rt, mergeModels as Ie, shallowRef as Xa, watchEffect as Qa } from "vue";
import { useForwardPropsEmits as be, DialogRoot as ga, DialogOverlay as Ft, DialogPortal as Nt, DialogContent as Rt, DialogClose as Qe, CheckboxRoot as en, CheckboxIndicator as tn, SwitchRoot as an, SwitchThumb as nn, DialogDescription as ha, DialogTitle as ba, DialogTrigger as xa, createContext as ln, Primitive as et, TooltipRoot as on, TooltipPortal as sn, TooltipContent as rn, TooltipArrow as dn, TooltipProvider as ya, TooltipTrigger as un, Separator as cn, DropdownMenuRoot as fn, DropdownMenuCheckboxItem as mn, DropdownMenuItemIndicator as ka, DropdownMenuPortal as pn, DropdownMenuContent as vn, DropdownMenuGroup as gn, useForwardProps as je, DropdownMenuItem as hn, DropdownMenuLabel as bn, DropdownMenuRadioGroup as xn, DropdownMenuRadioItem as yn, DropdownMenuSeparator as kn, DropdownMenuSub as $n, DropdownMenuSubContent as wn, DropdownMenuSubTrigger as Cn, DropdownMenuTrigger as Sn, AvatarRoot as Mn, AvatarFallback as Bn, AvatarImage as _n, NavigationMenuViewport as Pn, NavigationMenuRoot as zn, NavigationMenuContent as An, NavigationMenuIndicator as On, NavigationMenuItem as jn, NavigationMenuLink as Ln, NavigationMenuList as Vn, NavigationMenuTrigger as Tn, Label as Dn } from "reka-ui";
import { DropdownMenuPortal as i8 } from "reka-ui";
import { X as Ut, Check as $a, AlertCircle as In, EyeOff as En, Eye as Fn, PanelLeftOpen as Nn, PanelLeftClose as Rn, Circle as Un, ChevronRight as wa, MoreHorizontal as Hn, ChevronDown as Kn, Loader2Icon as qn } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as Ca, useMediaQuery as Gn, useEventListener as Wn, defaultDocument as Zn } from "@vueuse/core";
import { clsx as Jn } from "clsx";
import { twMerge as Yn } from "tailwind-merge";
import { cva as Ht } from "class-variance-authority";
import { usePage as Sa, Link as Xn } from "@inertiajs/vue3";
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
const Qn = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, el = ["d"], tl = { class: "flex max-w-sm flex-col gap-1" }, al = {
  key: 0,
  class: "text-sm font-normal"
}, nl = {
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
    const l = Dt();
    return (a, r) => (t(), n("div", {
      "data-slot": "empty-state",
      class: P(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      b(l).illustration ? (t(), n("div", Qn, [
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
              d: b(ce)(e.icon)
            }, null, 8, el)
          ], 2))
        ])
      ], 2)),
      o("div", tl, [
        o("p", {
          class: P(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), n("p", al, f(e.description), 1)) : y("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", nl, [
        U(a.$slots, "actions")
      ])) : y("", !0)
    ], 2));
  }
}), ll = ["aria-label"], Ae = /* @__PURE__ */ O({
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
      (t(!0), n(A, null, L(s.value, (c) => (t(), n("span", {
        key: c,
        "aria-hidden": "true",
        class: P(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: se({
          width: i(c - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, ll));
  }
}), ol = { class: "w-full border-collapse text-sm" }, sl = { class: "bg-background sticky top-0 z-10" }, rl = {
  key: 0,
  class: "bg-muted/40"
}, il = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, dl = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, ul = ["colspan"], cl = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, fl = { class: "bg-muted/50" }, ml = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, pl = ["id", "checked", "indeterminate"], vl = ["onClick"], gl = {
  key: 0,
  class: "text-xs"
}, hl = {
  key: 1,
  class: "text-xs opacity-40"
}, bl = { key: 1 }, xl = ["aria-label", "onPointerdown"], yl = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, kl = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, $l = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, wl = {
  key: 1,
  class: "px-3 py-2.5"
}, Cl = {
  key: 2,
  class: "px-2 py-2.5"
}, Sl = {
  key: 0,
  class: "bg-muted/40"
}, Ml = ["colspan"], Bl = ["aria-expanded", "dusk", "onClick"], _l = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Pl = {
  key: 1,
  dusk: "group-header"
}, zl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Al = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Ol = ["id", "value", "checked", "disabled", "aria-label", "onClick"], jl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Ll = ["aria-label", "onClick"], Vl = { class: "text-xs" }, Tl = {
  key: 1,
  class: "text-muted-foreground"
}, Dl = { key: 2 }, Il = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, El = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, Fl = { key: 0 }, Nl = { class: "text-muted-foreground block text-[10px] font-medium" }, Rl = { class: "font-semibold tabular-nums" }, Ul = { key: 1 }, Hl = 40, Kl = /* @__PURE__ */ O({
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
    const w = R(null), z = Ka(), E = x(() => a.columns.filter((W) => !a.hidden?.has(W.key))), I = x(() => {
      const W = E.value.find((ee) => ee.sticky);
      return W ? W.key : a.stickyFirst && E.value.length > 0 ? E.value[0].key : null;
    });
    function te(W) {
      return I.value === W.key;
    }
    function H() {
      return a.selectable && !a.reordering ? `${Hl}px` : "0";
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
      function Ke(tt) {
        const kt = de + (tt.clientX - Y);
        p("resize", W.key, Math.min(1200, Math.max(48, kt)));
      }
      function Fe(tt) {
        try {
          ie.releasePointerCapture(tt.pointerId);
        } catch {
        }
        ie.removeEventListener("pointermove", Ke), ie.removeEventListener("pointerup", Fe), ie.removeEventListener("pointercancel", Fe);
      }
      ie.addEventListener("pointermove", Ke), ie.addEventListener("pointerup", Fe), ie.addEventListener("pointercancel", Fe);
    }
    const Z = x(() => E.value.some((W) => !!W.group)), q = x(() => {
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
        const Ke = J(V.value), Fe = J(Y);
        if (Ke !== -1 && Fe !== -1) {
          const tt = Math.min(Ke, Fe), kt = Math.max(Ke, Fe), Ha = !ie;
          for (let ct = tt; ct <= kt; ct++) {
            if (!m(ct))
              continue;
            const $t = _(a.rows[ct]);
            if ($t === null)
              continue;
            !!a.selected?.has($t) !== Ha && p("toggle-row", $t);
          }
          V.value = Y;
          return;
        }
      }
      p("toggle-row", Y), V.value = Y;
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
    async function ea(W, ee, Y) {
      try {
        await navigator.clipboard.writeText(String(Y)), w.value = `${W}-${ee.key}`, setTimeout(() => w.value = null, 1200);
      } catch {
      }
    }
    const Ra = x(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function ta(W) {
      return a.summaries?.[W] ?? null;
    }
    function Ua(W) {
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
      class: P(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", ol, [
        o("thead", sl, [
          Z.value ? (t(), n("tr", rl, [
            e.reordering ? (t(), n("th", il)) : y("", !0),
            e.selectable && !e.reordering ? (t(), n("th", dl)) : y("", !0),
            (t(!0), n(A, null, L(q.value, (Y) => (t(), n("th", {
              key: Y.key,
              colspan: Y.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, f(Y.label ?? ""), 9, ul))), 128)),
            W.$slots.actions ? (t(), n("th", cl)) : y("", !0)
          ])) : y("", !0),
          o("tr", fl, [
            e.reordering ? (t(), n("th", ml)) : y("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: P(["w-10 border-b px-3 py-2.5", I.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
            }, [
              o("input", {
                id: `${b(z)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: le.value,
                indeterminate: X.value,
                "aria-label": "Select all rows on this page",
                onClick: ee[0] || (ee[0] = he(() => {
                }, ["stop"])),
                onChange: ee[1] || (ee[1] = he((Y) => p("toggle-page", !le.value), ["stop"]))
              }, null, 40, pl)
            ], 2)) : y("", !0),
            (t(!0), n(A, null, L(E.value, (Y) => (t(), n("th", {
              key: Y.key,
              class: P([
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
                Ce(Y) ? (t(), n("span", gl, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", hl, "↕"))
              ], 8, vl)) : (t(), n("span", bl, f(Y.label), 1)),
              oe(Y) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${Y.label}`,
                onPointerdown: (de) => ae(Y, de)
              }, null, 40, xl)) : y("", !0)
            ], 6))), 128)),
            W.$slots.actions ? (t(), n("th", yl, [...ee[2] || (ee[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : y("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", kl, [
          (t(), n(A, null, L(6, (Y) => o("tr", {
            key: `skel-${Y}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", $l, [
              D(Ae, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : y("", !0),
            e.selectable && !e.reordering ? (t(), n("td", wl, [
              D(Ae, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : y("", !0),
            (t(!0), n(A, null, L(E.value, (de) => (t(), n("td", {
              key: de.key,
              class: "px-3 py-2.5"
            }, [
              D(Ae, { variant: "text" })
            ]))), 128)),
            W.$slots.actions ? (t(), n("td", Cl, [
              D(Ae, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : y("", !0)
          ])), 64))
        ])) : (t(), n("tbody", {
          key: 1,
          class: P(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(A, null, L(e.rows, (Y, de) => (t(), n(A, {
            key: _(Y) ?? `row-${de}`
          }, [
            e.groupBy && s(de) ? (t(), n("tr", Sl, [
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
                  o("span", _l, f(c(r(Y)) ? "▸" : "▾"), 1),
                  N(" " + f(i(Y)), 1)
                ], 8, Bl)) : (t(), n("span", Pl, f(i(Y)), 1))
              ], 8, Ml)
            ])) : y("", !0),
            m(de) ? (t(), n("tr", {
              key: 1,
              class: P(["group pk-row border-b transition-colors hover:bg-muted/50", [
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
              e.reordering ? (t(), n("td", Al, [...ee[3] || (ee[3] = [
                It('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : y("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: P(["px-3 py-2", I.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${b(z)}-row-${_(Y) ?? de}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: _(Y) ?? void 0,
                  checked: F(Y),
                  disabled: _(Y) === null,
                  "aria-label": _(Y) === null ? "This row has no id and cannot be selected" : `Select row ${_(Y)}`,
                  onClick: he((ie) => ge(Y, ie), ["stop"])
                }, null, 8, Ol)
              ], 2)) : y("", !0),
              (t(!0), n(A, null, L(E.value, (ie) => (t(), n("td", {
                key: ie.key,
                class: P(["px-3 py-2 whitespace-nowrap", [
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
                  ie.copyable ? (t(), n("span", jl, [
                    N(f(Y[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (Ke) => ea(String(Y[e.rowKey]), ie, Y[ie.key])
                    }, [
                      o("span", Vl, f(w.value === `${Y[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Ll)
                  ])) : Y[ie.key] == null || Y[ie.key] === "" ? (t(), n("span", Tl, "None")) : (t(), n("span", Dl, f(Y[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              W.$slots.actions ? (t(), n("td", Il, [
                U(W.$slots, "actions", { row: Y }, void 0, !0)
              ])) : y("", !0)
            ], 42, zl)) : y("", !0)
          ], 64))), 128))
        ], 2)),
        Ra.value ? (t(), n("tfoot", El, [
          o("tr", null, [
            e.selectable ? (t(), n("td", Fl)) : y("", !0),
            (t(!0), n(A, null, L(e.columns, (Y) => (t(), n(A, {
              key: `s-${Y.key}`
            }, [
              e.hidden?.has(Y.key) ? y("", !0) : (t(), n("td", {
                key: 0,
                class: P(["px-3 py-2 align-top text-sm whitespace-nowrap", Y.cellClass])
              }, [
                ta(Y.key) ? (t(), n(A, { key: 0 }, [
                  o("span", Nl, f(ta(Y.key).label), 1),
                  o("span", Rl, f(Ua(Y.key)), 1)
                ], 64)) : y("", !0)
              ], 2))
            ], 64))), 128)),
            W.$slots.actions ? (t(), n("td", Ul)) : y("", !0)
          ])
        ])) : y("", !0)
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
      ]), 1032, ["icon", "title", "description"])) : y("", !0)
    ], 2));
  }
}), bt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, ql = /* @__PURE__ */ bt(Kl, [["__scopeId", "data-v-c0f7d40f"]]), Gl = ["aria-label"], Wl = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, Zl = { class: "text-base font-semibold" }, Jl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Yl = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, Xl = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, st = /* @__PURE__ */ O({
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
        m ? (i = document.activeElement, document.addEventListener("keydown", v), Ve(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", v), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", v)), (m, g) => (t(), T(Xe, { to: "body" }, [
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
              o("div", Wl, [
                o("h2", Zl, f(e.title), 1),
                e.description ? (t(), n("p", Jl, f(e.description), 1)) : y("", !0)
              ]),
              o("div", Yl, [
                U(m.$slots, "default")
              ]),
              o("div", Xl, [
                U(m.$slots, "footer")
              ])
            ], 8, Gl)
          ], 32)) : y("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ql = 160, Je = /* @__PURE__ */ O({
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
      c && (clearTimeout(c), c = null), !r.value && (r.value = !0, await Ve(), M());
    }
    function g() {
      c = setTimeout($, 180);
    }
    async function C() {
      u.value = null, r.value = !r.value, r.value && (await Ve(), M());
    }
    async function k(h, w) {
      u.value = { x: h, y: w }, r.value = !0, await Ve(), M();
    }
    function $() {
      r.value = !1, u.value = null;
    }
    function M() {
      const h = s.value, w = i.value;
      if (!h || !w)
        return;
      const z = w.getBoundingClientRect(), E = 8, I = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : h.getBoundingClientRect();
      let te, H;
      if (a.placement === "bottom")
        te = I.bottom + a.offset, te + z.height > window.innerHeight - E && I.top - z.height - a.offset > E && (te = I.top - z.height - a.offset), H = a.align === "end" && !u.value ? I.right - z.width : I.left;
      else {
        te = I.top;
        const K = a.placement === "right", G = I.right + a.offset + z.width < window.innerWidth - E, oe = I.left - a.offset - z.width > E;
        H = (K ? G || !oe : !oe && G) ? I.right + a.offset : I.left - a.offset - z.width;
      }
      H = Math.min(Math.max(E, H), window.innerWidth - z.width - E), te = Math.min(Math.max(E, te), window.innerHeight - z.height - E), d.value = { top: te, left: H, minWidth: Math.max(I.width, Ql) };
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
      onPointerenter: w[2] || (w[2] = (z) => e.hoverable && m()),
      onPointerleave: w[3] || (w[3] = (z) => e.hoverable && g())
    }, [
      o("div", { onClick: C }, [
        U(h.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(Xe, { to: "body" }, [
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
              onPointerenter: w[0] || (w[0] = (z) => e.hoverable && m()),
              onPointerleave: w[1] || (w[1] = (z) => e.hoverable && g()),
              onClick: v
            }, [
              U(h.$slots, "panel", { close: $ })
            ], 38)) : y("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), eo = ["disabled"], to = { class: "py-0.5" }, ao = ["disabled", "onClick"], no = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, lo = ["d"], oo = ["disabled"], so = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ro = ["d"], io = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, uo = ["disabled", "onClick"], co = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fo = ["d"], mo = { class: "text-muted-foreground text-sm font-normal" }, po = { class: "text-foreground font-medium tabular-nums" }, vo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, go = ["disabled"], ho = { class: "text-muted-foreground text-sm font-normal" }, bo = { class: "text-foreground font-medium tabular-nums" }, xo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, yo = ["disabled"], n5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), d = x(() => a.allMatching ? a.total : a.count), u = x(() => d.value !== void 0), c = x(() => u.value && d.value === 0), v = x(() => a.actions.filter((B) => !B.destructive)), m = x(() => a.actions.filter((B) => B.destructive)), g = {
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
          ])], 8, eo)
        ]),
        panel: j(() => [
          o("div", to, [
            (t(!0), n(A, null, L(v.value, (h) => (t(), n("button", {
              key: h.key,
              type: "button",
              role: "menuitem",
              class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(h)]),
              disabled: e.busy,
              onClick: (w) => k(h)
            }, [
              (t(), n("svg", no, [
                o("path", {
                  d: b(ce)(h.icon)
                }, null, 8, lo)
              ])),
              N(" " + f(h.label), 1)
            ], 10, ao))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: p[0] || (p[0] = (h) => i.value = !0)
            }, [
              (t(), n("svg", so, [
                o("path", {
                  d: b(ce)("download")
                }, null, 8, ro)
              ])),
              p[6] || (p[6] = N(" Export CSV ", -1))
            ], 8, oo)) : y("", !0),
            m.value.length ? (t(), n("div", io, [
              (t(!0), n(A, null, L(m.value, (h) => (t(), n("button", {
                key: h.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (w) => k(h)
              }, [
                (t(), n("svg", co, [
                  o("path", {
                    d: b(ce)(h.icon ?? "trash")
                  }, null, 8, fo)
                ])),
                N(" " + f(h.label), 1)
              ], 8, uo))), 128))
            ])) : y("", !0)
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
            class: P([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || c.value,
            onClick: $
          }, f(s.value?.label), 11, go)
        ]),
        default: j(() => [
          o("p", mo, [
            p[7] || (p[7] = N(" This will affect ", -1)),
            o("span", po, [
              u.value ? (t(), n(A, { key: 1 }, [
                N(f(S(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(A, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            p[8] || (p[8] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", vo, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : y("", !0)
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
            disabled: !u.value || c.value,
            onClick: M
          }, " Export CSV ", 8, yo)
        ]),
        default: j(() => [
          o("p", ho, [
            p[9] || (p[9] = N(" This will export ", -1)),
            o("span", bo, [
              u.value ? (t(), n(A, { key: 1 }, [
                N(f(S(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(A, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            p[10] || (p[10] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", xo, " Nothing matches the current filters - there is nothing to export. ")) : y("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), ko = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, $o = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, wo = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, Co = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, So = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", ko, [
      l.$slots.tabs ? (t(), n("div", $o, [
        U(l.$slots, "tabs")
      ])) : y("", !0),
      l.$slots.title ? (t(), n("div", wo, [
        U(l.$slots, "title")
      ])) : y("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: P(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        U(l.$slots, "toolbar")
      ], 2)) : y("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Co, [
        U(l.$slots, "pagination")
      ])) : y("", !0)
    ]));
  }
}), Me = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", na = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", l5 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Mo = ["aria-expanded"], Bo = ["aria-label", "onClick"], _o = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Po = { class: "ml-auto flex shrink-0 items-center gap-1" }, zo = {
  key: 0,
  class: "border-b p-1"
}, Ao = ["placeholder"], Oo = { class: "max-h-60 overflow-y-auto p-1" }, jo = ["aria-selected", "onMouseenter", "onClick"], Lo = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Kt = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), d = R(null), u = R(!1), c = R(""), v = R(0), m = R({ top: 0, left: 0, width: 0 }), g = x(
      () => a.modelValue.map(
        (H) => a.options.find((K) => K.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), C = x(() => a.searchable ?? a.options.length > 6), k = x(() => {
      const H = new Set(a.modelValue), K = c.value.trim().toLowerCase();
      return a.options.filter((G) => !H.has(G.value)).filter((G) => K ? G.label.toLowerCase().includes(K) : !0);
    }), $ = x(() => a.max !== null && a.modelValue.length >= a.max);
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
      a.disabled || u.value || (u.value = !0, c.value = "", v.value = 0, await Ve(), M(), d.value?.focus());
    }
    function B() {
      u.value = !1, c.value = "";
    }
    function p() {
      u.value ? B() : S();
    }
    function h(H) {
      $.value || (r("update:modelValue", [...a.modelValue, H.value]), c.value = "", v.value = 0, Ve(() => {
        M(), d.value?.focus();
      }));
    }
    function w(H) {
      r(
        "update:modelValue",
        a.modelValue.filter((K) => K !== H)
      ), Ve(M);
    }
    function z() {
      r("update:modelValue", []), Ve(M);
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
        class: P(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          u.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": u.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: p
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
          ])], 8, Bo)
        ]))), 128)),
        g.value.length === 0 ? (t(), n("span", _o, f(e.placeholder), 1)) : y("", !0),
        o("span", Po, [
          g.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: he(z, ["stop"])
          }, " Clear ")) : y("", !0),
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
      ], 10, Mo),
      (t(), T(Xe, { to: "body" }, [
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
              C.value ? (t(), n("div", zo, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": K[0] || (K[0] = (G) => c.value = G),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: E
                }, null, 40, Ao), [
                  [_e, c.value]
                ])
              ])) : y("", !0),
              o("div", Oo, [
                (t(!0), n(A, null, L(k.value, (G, oe) => (t(), n("button", {
                  key: G.value,
                  type: "button",
                  class: P(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", oe === v.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": oe === v.value,
                  onMouseenter: (ae) => v.value = oe,
                  onClick: (ae) => h(G)
                }, f(G.label), 43, jo))), 128)),
                k.value.length === 0 ? (t(), n("p", Lo, [
                  $.value ? (t(), n(A, { key: 0 }, [
                    N("You have selected the maximum.")
                  ], 64)) : c.value ? (t(), n(A, { key: 1 }, [
                    N("Nothing matches “" + f(c.value) + "”.", 1)
                  ], 64)) : (t(), n(A, { key: 2 }, [
                    N("Everything is selected.")
                  ], 64))
                ])) : y("", !0)
              ])
            ], 4)) : y("", !0)
          ]),
          _: 1
        })
      ]))
    ], 544));
  }
}), Vo = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", To = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, Do = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function nt(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Vo, To[l], Do[a], e.class].filter(Boolean).join(" ");
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
      () => nt({ variant: l.variant, size: l.size, class: l.class })
    ), r = x(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), T(Be(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: P(a.value)
    }, {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), Io = { class: "flex items-center gap-2" }, Eo = ["onUpdate:modelValue", "onChange"], Fo = ["value"], No = ["onUpdate:modelValue"], Ro = ["value"], Uo = ["onUpdate:modelValue"], Ho = ["onUpdate:modelValue", "multiple"], Ko = ["value"], qo = ["onUpdate:modelValue", "type"], Go = ["aria-label", "onClick"], Wo = { class: "flex items-center gap-2" }, Zo = /* @__PURE__ */ O({
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
    const d = (p) => "rules" in p, u = x(() => Object.keys(a.fields));
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
    const M = x(() => a.depth + 1 < a.maxDepth);
    function S() {
      i.value = s(), m(), r("apply", null);
    }
    function B() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (p, h) => {
      const w = Et("PkQueryBuilder", !0);
      return t(), n("div", {
        class: P(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", Io, [
          pe(o("select", {
            "onUpdate:modelValue": h[0] || (h[0] = (z) => i.value.logic = z),
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
        (t(!0), n(A, null, L(i.value.rules, (z, E) => (t(), n("div", {
          key: E,
          class: "flex items-start gap-2"
        }, [
          d(z) ? (t(), T(w, {
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
              "onUpdate:modelValue": (I) => z.field = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (I) => $(z)
            }, [
              (t(!0), n(A, null, L(u.value, (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(e.fields[I].label), 9, Fo))), 128))
            ], 40, Eo), [
              [We, z.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (I) => z.operator = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: m
            }, [
              (t(!0), n(A, null, L(c(z.field), (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(v[I] ?? I), 9, Ro))), 128))
            ], 40, No), [
              [We, z.operator]
            ]),
            z.field && e.fields[z.field]?.kind === "boolean" ? pe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (I) => z.value = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [...h[3] || (h[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, Uo)), [
              [We, z.value]
            ]) : z.field && e.fields[z.field]?.options?.length ? pe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (I) => z.value = I,
              multiple: e.fields[z.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [
              (t(!0), n(A, null, L(e.fields[z.field].options, (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(I), 9, Ko))), 128))
            ], 40, Ho)), [
              [We, z.value]
            ]) : pe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (I) => z.value = I,
              type: z.field && e.fields[z.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, null, 40, qo)), [
              [qa, z.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(z) ? "group" : "rule"}`,
            onClick: (I) => k(E)
          }, " × ", 8, Go)
        ]))), 128)),
        o("div", Wo, [
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
          })) : y("", !0),
          e.root ? (t(), n(A, { key: 1 }, [
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
          ], 64)) : y("", !0)
        ])
      ], 2);
    };
  }
}), qt = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(ga), re({ "data-slot": "sheet" }, b(s)), {
      default: j((u) => [
        U(i.$slots, "default", Oe(Ee(u)))
      ]),
      _: 3
    }, 16));
  }
});
function Q(...e) {
  return Yn(Jn(e));
}
function o5(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Jo = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Ft), re({
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
}), Gt = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Nt), null, {
      default: j(() => [
        D(Jo),
        D(b(Rt), re({
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
            D(b(Qe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                D(b(Ut), { class: "size-4" }),
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
}), Yo = { class: "flex flex-col gap-2" }, Xo = { class: "flex items-center gap-2 md:hidden" }, Qo = { class: "relative min-w-0 flex-1" }, es = ["placeholder", "title", "aria-label"], ts = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, as = { class: "flex max-h-[85vh] flex-col" }, ns = { class: "flex-1 overflow-y-auto px-4 py-3" }, ls = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, os = { class: "text-xs font-medium" }, ss = ["value", "onChange"], rs = ["value"], is = { class: "mb-4" }, ds = { class: "flex flex-col gap-1" }, us = ["disabled", "onClick"], cs = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, fs = {
  key: 1,
  class: "mb-4"
}, ms = { class: "flex flex-col gap-1" }, ps = ["onClick"], vs = { class: "border-t p-4" }, gs = ["disabled"], hs = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, bs = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, xs = ["placeholder", "title", "aria-label"], ys = ["aria-label"], ks = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, $s = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, ws = { class: "text-xs font-medium" }, Cs = ["value", "onChange"], Ss = ["value"], Ms = { class: "grid grid-cols-2 gap-2" }, Bs = ["value", "onChange"], _s = ["value", "onChange"], Ps = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, zs = ["value", "onChange"], As = ["value", "onChange"], Os = {
  key: 4,
  class: "flex items-center gap-2"
}, js = ["aria-checked", "onClick"], Ls = { class: "text-xs" }, Vs = ["onClick"], Ts = ["value", "onChange"], Ds = ["value"], Is = ["disabled", "onClick"], Es = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Fs = ["disabled", "onClick"], Ns = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Rs = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Us = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, Hs = ["aria-pressed", "aria-label", "title", "onClick"], Ks = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, qs = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Gs = ["aria-pressed", "aria-label", "title"], Ws = ["aria-label", "title"], Zs = { class: "flex flex-col gap-0.5 p-1" }, Js = ["onClick"], Ys = ["onClick"], Xs = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, Qs = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, er = ["dusk"], tr = ["aria-label", "onClick"], ar = /* @__PURE__ */ O({
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
    const c = x(
      () => a.filterSchema.filter(
        (q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0
      ).length
    ), v = x(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), m = x(() => a.search !== "" || c.value > 0), g = x(() => a.indicators.length ? a.indicators : a.filterSchema.filter((q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0).map((q) => ({
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
    function z(q, _, F) {
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
    return (q, _) => (t(), n("div", Yo, [
      o("div", Xo, [
        o("div", Qo, [
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
            class: P(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", b(Me)])
          }, null, 10, es), [
            [_e, i.value]
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
          c.value ? (t(), n("span", ts, f(c.value), 1)) : y("", !0)
        ]),
        D(qt, {
          open: s.value,
          "onUpdate:open": _[4] || (_[4] = (F) => s.value = F)
        }, {
          default: j(() => [
            D(Gt, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", as, [
                  _[16] || (_[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", ns, [
                    e.filterSchema.length ? (t(), n("div", ls, [
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
                        o("label", os, f(F.label), 1),
                        F.type !== "multiselect" && F.type !== "querybuilder" && F.type !== "daterange" && F.type !== "numberrange" && F.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: u.value[F.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (V) => p(F, V.target.value)
                        }, [
                          _[13] || (_[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(A, null, L(H(F), (V) => (t(), n("option", {
                            key: String(V.value),
                            value: V.value
                          }, f(V.label), 9, rs))), 128))
                        ], 40, ss)) : y("", !0)
                      ]))), 128))
                    ])) : y("", !0),
                    o("div", is, [
                      _[14] || (_[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", ds, [
                        (t(!0), n(A, null, L(e.columns, (F) => (t(), n("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (V) => G(F.key)
                        }, [
                          o("span", null, f(F.label), 1),
                          K.value.has(F.key) ? y("", !0) : (t(), n("span", cs, "On"))
                        ], 8, us))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", fs, [
                      _[15] || (_[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", ms, [
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
                        }, f(F.label), 9, ps))), 128))
                      ])
                    ])) : y("", !0)
                  ]),
                  o("div", vs, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !v.value,
                      onClick: ae
                    }, " Apply filters ", 8, gs)) : y("", !0),
                    m.value ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: _[3] || (_[3] = (F) => {
                        Z(), s.value = !1;
                      })
                    }, " Clear search and filters ")) : y("", !0)
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ]),
      o("div", hs, [
        o("div", bs, [
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
            class: P(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", b(Me)])
          }, null, 10, xs), [
            [_e, i.value]
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
          ])])) : y("", !0)
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
              c.value ? (t(), n("span", ks, f(c.value), 1)) : y("", !0)
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
            o("div", $s, [
              (t(!0), n(A, null, L(e.filterSchema, (V) => (t(), n("div", {
                key: V.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", ws, f(V.label), 1),
                $(V) ? (t(), T(Kt, {
                  key: 0,
                  "model-value": S(V),
                  options: B(V),
                  placeholder: `Any ${V.label.toLowerCase()}`,
                  "onUpdate:modelValue": (J) => u.value[V.key] = J.length ? J : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : V.type === "querybuilder" ? (t(), T(Zo, {
                  key: 1,
                  "model-value": u.value[V.key] ?? null,
                  fields: V.fields ?? {},
                  operators: V.operators ?? {},
                  "max-depth": V.maxDepth ?? 5,
                  onApply: (J) => I(V.key, J)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : V.type === "daterange" ? (t(), n(A, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[V.key] == "string" && !String(u.value[V.key]).includes("..") ? u.value[V.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (J) => p(V, J.target.value)
                  }, [
                    _[21] || (_[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(A, null, L(H(V), (J) => (t(), n("option", {
                      key: String(J.value),
                      value: J.value
                    }, f(J.label), 9, Ss))), 128))
                  ], 40, Cs),
                  o("div", Ms, [
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
                    }, null, 40, Bs),
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
                    }, null, 40, _s)
                  ])
                ], 64)) : V.type === "numberrange" ? (t(), n("div", Ps, [
                  o("input", {
                    type: "number",
                    value: h(V, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => z(
                      V,
                      "from",
                      J.target.value
                    )
                  }, null, 40, zs),
                  o("input", {
                    type: "number",
                    value: h(V, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => z(
                      V,
                      "to",
                      J.target.value
                    )
                  }, null, 40, As)
                ])) : V.type === "boolean" ? (t(), n("div", Os, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[V.key] === !0,
                    class: P([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[V.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (J) => p(V, u.value[V.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: P(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[V.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, js),
                  o("span", Ls, f(V.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: P([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[V.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (J) => p(V, u.value[V.key] === !1 ? null : !1)
                  }, f(V.falseLabel ?? "No") + " only ", 11, Vs)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[V.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (J) => p(V, J.target.value)
                }, [
                  _[22] || (_[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(A, null, L(H(V), (J) => (t(), n("option", {
                    key: String(J.value),
                    value: J.value
                  }, f(J.label), 9, Ds))), 128))
                ], 40, Ts))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !v.value,
              onClick: (V) => E(F)
            }, " Apply filters ", 8, Is)
          ]),
          _: 1
        })) : y("", !0),
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
            o("div", Es, [
              (t(!0), n(A, null, L(e.columns, (F) => (t(), n("button", {
                key: F.key,
                type: "button",
                class: P(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (V) => G(F.key)
              }, [
                K.value.has(F.key) ? (t(), n("span", Rs)) : (t(), n("svg", Ns, [..._[25] || (_[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + f(F.label), 1)
              ], 10, Fs))), 128))
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
        e.layouts.length > 1 ? (t(), n("div", Us, [
          (t(!0), n(A, null, L(e.layouts, (F) => (t(), n("button", {
            key: F,
            type: "button",
            class: P(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === F ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === F,
            "aria-label": F === "cards" ? "Card layout" : "Table layout",
            title: F === "cards" ? "Cards" : "Table",
            onClick: (V) => r("layout", F)
          }, [
            F === "table" ? (t(), n("svg", Ks, [..._[28] || (_[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", qs, [..._[29] || (_[29] = [
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
          ], 10, Hs))), 128))
        ])) : y("", !0),
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
        ])], 10, Gs)) : y("", !0),
        e.groups.length ? (t(), T(Je, {
          key: 3,
          align: "end"
        }, {
          trigger: j(() => [
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
            ])], 10, Ws)
          ]),
          panel: j(({ close: F }) => [
            o("div", Zs, [
              o("button", {
                type: "button",
                class: P(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (V) => {
                  C(null), F();
                }
              }, " No grouping ", 10, Js),
              (t(!0), n(A, null, L(e.groups, (V) => (t(), n("button", {
                key: V.key,
                type: "button",
                class: P(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === V.key ? "text-primary font-medium" : ""]),
                onClick: (J) => {
                  C(V.key), F();
                }
              }, f(V.label), 11, Ys))), 128))
            ])
          ]),
          _: 1
        })) : y("", !0),
        m.value ? (t(), n("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: Z
        }, " Clear ")) : y("", !0),
        e.loading ? (t(), n("span", Xs, "Loading…")) : y("", !0)
      ]),
      g.value.length ? (t(), n("div", Qs, [
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
          ])], 8, tr)) : y("", !0)
        ], 8, er))), 128)),
        g.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: _[8] || (_[8] = (F) => r("clear-filters"))
        }, " Clear all ")) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}), nr = { class: "min-w-0" }, lr = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, or = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, sr = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, rr = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, ir = { class: "w-full border-collapse text-sm" }, dr = { class: "bg-muted/40" }, ur = { class: "divide-y" }, cr = ["href"], fr = {
  key: 1,
  class: "text-muted-foreground"
}, mr = {
  key: 0,
  class: "flex justify-center"
}, pr = ["disabled"], vr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, gr = ["href"], s5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = Dt(), i = x(() => a.columns.filter((C) => C.type !== "image")), d = x(() => !!s.actions), u = x(() => !!a.title || d.value), c = x(() => a.filterSchema.length > 0), v = x(
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
    return (C, k) => (t(), T(So, null, lt({
      default: j(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", sr, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(Pt, {
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
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", rr, [
          o("table", ir, [
            o("thead", dr, [
              o("tr", null, [
                (t(!0), n(A, null, L(i.value, ($) => (t(), n("th", {
                  key: $.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f($.label), 1))), 128))
              ])
            ]),
            o("tbody", ur, [
              (t(!0), n(A, null, L(e.rows, ($, M) => (t(), n("tr", {
                key: $.id ?? M,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(A, null, L(i.value, (S) => (t(), n("td", {
                  key: S.key,
                  class: P(["px-3 whitespace-nowrap", [
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
                    }, f(m(S, $[S.key])), 9, cr)) : g($[S.key]) ? (t(), n("span", fr, " None ")) : (t(), n(A, { key: 2 }, [
                      N(f(m(S, $[S.key])), 1)
                    ], 64))
                  ])
                ], 2))), 128))
              ]))), 128))
            ])
          ])
        ])) : y("", !0)
      ]),
      _: 2
    }, [
      u.value ? {
        name: "title",
        fn: j(() => [
          o("div", nr, [
            e.title ? (t(), n("h3", lr, f(e.title), 1)) : y("", !0)
          ]),
          d.value ? (t(), n("div", or, [
            U(C.$slots, "actions")
          ])) : y("", !0)
        ]),
        key: "0"
      } : void 0,
      c.value ? {
        name: "toolbar",
        fn: j(() => [
          D(ar, {
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
          e.nextCursor ? (t(), n("div", mr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: k[6] || (k[6] = ($) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, pr)
          ])) : e.capped ? (t(), n("p", vr, [
            N(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, gr)) : (t(), n(A, { key: 1 }, [
              N("Open the full list to search or filter the rest.")
            ], 64))
          ])) : y("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), hr = { class: "flex items-center gap-2 overflow-x-auto" }, br = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yr = { class: "flex flex-col" }, kr = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, $r = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, wr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Cr = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("ol", hr, [
      (t(!0), n(A, null, L(e.steps, (m, g) => (t(), n("li", {
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
              class: P(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(g)])
            }, [
              u(g) ? (t(), n("svg", br, [...v[0] || (v[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(g) ? (t(), n("svg", xr, [...v[1] || (v[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(A, { key: 2 }, [
                N(f(g + 1), 1)
              ], 64))
            ], 2),
            o("span", yr, [
              o("span", null, f(m.label), 1),
              m.description ? (t(), n("span", kr, f(m.description), 1)) : y("", !0)
            ]),
            e.hasError(g) ? (t(), n("span", $r)) : y("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        g < e.steps.length - 1 ? (t(), n("span", wr)) : y("", !0)
      ]))), 128))
    ]));
  }
}), it = /* @__PURE__ */ new Map();
function ye(e, l) {
  it.set(e, l);
}
function Sr(e) {
  return it.get(e);
}
function r5(e) {
  return it.has(e);
}
function i5() {
  return [...it.keys()].sort();
}
function d5() {
  it.clear();
}
class Mr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function u5(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function Br(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function _r(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const c5 = "text-sm text-muted-foreground font-normal", f5 = "text-xs text-muted-foreground font-normal", ft = "text-xs text-muted-foreground font-normal leading-snug", Pr = "text-foreground font-normal", zr = "placeholder:text-muted-foreground placeholder:font-normal", Re = `${Pr} ${zr}`, Ar = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Or = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(st, {
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
          e.generalError ? (t(), n("p", Ar, f(e.generalError), 1)) : y("", !0),
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
}), jr = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(en), re({ "data-slot": "checkbox" }, b(i), {
      class: b(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j((c) => [
        D(b(tn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            U(d.$slots, "default", Oe(Ee(c)), () => [
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
    return (i, d) => (t(), T(b(an), re({ "data-slot": "switch" }, b(s), {
      class: b(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j(() => [
        D(b(nn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Lr = ["accept", "disabled"], Vr = { class: "text-sm font-medium" }, Tr = { key: 0 }, Dr = { key: 1 }, Ir = { class: "text-muted-foreground text-xs font-normal" }, Er = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Fr = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Nr = ["src"], Rr = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Ur = { class: "min-w-0 flex-1" }, Hr = { class: "block truncate text-sm font-medium" }, Kr = { class: "text-muted-foreground text-xs font-normal" }, qr = ["href"], Gr = {
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
    const a = e, r = l, s = R(null), i = R(!1), d = R(null), u = R(null), c = R(null), v = x(() => a.accept.map((h) => `.${h}`).join(",")), m = x(() => c.value ?? a.modelValue?.url ?? null), g = x(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(a.maxKilobytes * 1024)}`);
    function C(h) {
      if (!h)
        return "";
      const w = ["B", "KB", "MB", "GB"];
      let z = h, E = 0;
      for (; z >= 1024 && E < w.length - 1; )
        z /= 1024, E++;
      return `${z.toFixed(z < 10 && E > 0 ? 1 : 0)} ${w[E]}`;
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
          const z = await a.upload(w, (E) => {
            d.value = E;
          });
          r("update:modelValue", z);
        } catch (z) {
          u.value = z instanceof Error ? z.message : "The upload failed.", S();
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
      e.modelValue ? (t(), n("div", Fr, [
        e.image && m.value ? (t(), n("img", {
          key: 0,
          src: m.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Nr)) : (t(), n("span", Rr, f(k(e.modelValue.name) || "file"), 1)),
        o("span", Ur, [
          o("span", Hr, f(e.modelValue.name), 1),
          o("span", Kr, [
            N(f(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(A, { key: 0 }, [
              w[4] || (w[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, qr)
            ], 64)) : (t(), n(A, { key: 1 }, [
              N(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? y("", !0) : (t(), n("button", {
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
        onDragover: w[1] || (w[1] = he((z) => i.value = !0, ["prevent"])),
        onDragleave: w[2] || (w[2] = he((z) => i.value = !1, ["prevent"])),
        onDrop: he(p, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: v.value,
          disabled: e.disabled,
          onChange: w[0] || (w[0] = (z) => M(z.target.files))
        }, null, 40, Lr),
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
        o("span", Vr, [
          d.value === null ? (t(), n("span", Tr, "Drop a file or click to choose")) : (t(), n("span", Dr, "Uploading…"))
        ]),
        o("span", Ir, f(g.value), 1),
        d.value !== null ? (t(), n("span", Er, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${d.value}%` })
          }, null, 4)
        ])) : y("", !0)
      ], 34)),
      u.value ? (t(), n("p", Gr, f(u.value), 1)) : y("", !0)
    ]));
  }
}), Wr = { class: "flex flex-col gap-2" }, Zr = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Jr = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Yr = { class: "flex flex-col gap-1" }, Xr = ["onUpdate:modelValue", "disabled", "aria-label"], Qr = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, ei = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, ti = ["onUpdate:modelValue", "disabled", "aria-label"], ai = ["disabled", "aria-label", "onClick"], ni = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, li = { class: "flex items-center gap-3" }, oi = ["disabled"], si = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, ri = /* @__PURE__ */ O({
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
    const m = x(() => {
      const M = /* @__PURE__ */ new Map();
      for (const S of d.value) {
        const B = S.key.trim();
        B !== "" && M.set(B, (M.get(B) ?? 0) + 1);
      }
      return new Set([...M.entries()].filter(([, S]) => S > 1).map(([S]) => S));
    }), g = x(
      () => new Set(
        d.value.map((M) => M.key.trim()).filter((M) => M !== "" && !s.test(M))
      )
    ), C = x(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function k() {
      C.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function $(M) {
      d.value = d.value.filter((S) => S.uid !== M), v();
    }
    return (M, S) => (t(), n("div", Wr, [
      d.value.length ? (t(), n("div", Zr, [
        o("div", Jr, [
          o("span", null, f(e.keyLabel), 1),
          o("span", null, f(e.valueLabel), 1),
          S[0] || (S[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(A, null, L(d.value, (B) => (t(), n("div", {
          key: B.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", Yr, [
            pe(o("input", {
              "onUpdate:modelValue": (p) => B.key = p,
              type: "text",
              class: P([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                m.value.has(B.key.trim()) || g.value.has(B.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: v
            }, null, 42, Xr), [
              [_e, B.key]
            ]),
            g.value.has(B.key.trim()) ? (t(), n("p", Qr, " Letters, numbers, underscores and dashes only. ")) : m.value.has(B.key.trim()) ? (t(), n("p", ei, " Used twice - only the last value will be saved. ")) : y("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (p) => B.value = p,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: v
          }, null, 40, ti), [
            [_e, B.value]
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
          ])], 8, ai)
        ]))), 128))
      ])) : (t(), n("p", ni, " Nothing here yet. ")),
      o("div", li, [
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
        ], 8, oi),
        e.maxPairs !== null ? (t(), n("p", si, f(d.value.length) + " of " + f(e.maxPairs), 1)) : y("", !0)
      ])
    ]));
  }
}), ii = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, di = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, ui = ["disabled", "title", "aria-label", "onClick"], ci = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fi = ["d"], mi = ["disabled"], pi = ["contenteditable", "data-placeholder"], vi = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, gi = /* @__PURE__ */ O({
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
    ], u = x(() => d.filter(($) => a.toolbar.includes($.id))), c = x(() => a.toolbar.includes("link")), v = R(0);
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
    ), ($, M) => (t(), n("div", ii, [
      o("div", di, [
        (t(!0), n(A, null, L(u.value, (S) => (t(), n("button", {
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
          (t(), n("svg", ci, [
            o("path", {
              d: S.path
            }, null, 8, fi)
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
        ])], 40, mi)) : y("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: P(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: m,
        onBlur: m,
        onPaste: k
      }, null, 42, pi),
      e.maxLength !== null ? (t(), n("div", vi, f(v.value) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), hi = /* @__PURE__ */ bt(gi, [["__scopeId", "data-v-32c63bc7"]]), bi = {
  key: 1,
  class: "flex flex-col gap-2"
}, xi = { class: "flex items-center justify-between gap-2" }, yi = ["for"], ki = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, $i = ["aria-label", "disabled"], wi = {
  key: 7,
  class: "flex flex-col gap-2"
}, Ci = ["id", "value", "disabled"], Si = ["value"], Mi = {
  key: 0,
  class: "relative"
}, Bi = ["disabled"], _i = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Pi = { class: "max-h-56 overflow-y-auto p-1" }, zi = ["onClick"], Ai = {
  key: 8,
  class: "relative"
}, Oi = ["disabled", "aria-invalid"], ji = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Li = { class: "max-h-56 overflow-y-auto p-1" }, Vi = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Ti = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Di = ["onClick"], Ii = ["id", "value", "disabled", "aria-invalid"], Ei = ["value"], Fi = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Ni = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Ri = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Ui = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Hi = ["aria-label", "disabled"], Ki = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], qi = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Gi = ["aria-label", "disabled"], Wi = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Zi = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ji = ["aria-label", "disabled"], Yi = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Xi = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Qi = ["aria-label", "disabled"], ed = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, td = ["disabled", "aria-pressed", "onClick"], ad = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, nd = ["title", "disabled", "onClick"], ld = ["href"], od = {
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
    const a = aa(() => import("./PkRepeater-J84jGe3T.js")), r = aa(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = R(!1), u = R(""), c = R([]), v = R(!1), m = R(null);
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
    const M = mt("panelPicker", null), S = mt("panelCreateOption", null), B = R(!1), p = R(!1), h = R({}), w = R(null), z = x(() => Br(s.field)), E = x(() => _r(s.field));
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
          X instanceof Mr ? (h.value = X.fieldErrors, w.value = Object.keys(X.fieldErrors).length === 0 ? X.message : null) : w.value = X instanceof Error ? X.message : "Could not create that option.";
        } finally {
          p.value = !1;
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
      m.value = le.label, Z(le.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(g));
    const _ = x(() => Sr(s.field.type)), F = x(
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
    function xe(le) {
      const X = document.getElementById(`f-${s.field.key}`);
      if (!(X instanceof HTMLTextAreaElement) && !(X instanceof HTMLInputElement))
        return;
      const ne = X.selectionStart ?? X.value.length, Ce = X.selectionEnd ?? ne;
      X.setRangeText(le, ne, Ce, "end"), X.dispatchEvent(new Event("input", { bubbles: !0 })), X.focus();
    }
    return (le, X) => (t(), n(A, null, [
      e.field.type === "hidden" ? (t(), n(A, { key: 0 }, [], 64)) : (t(), n("div", bi, [
        o("div", xi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: P(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            N(f(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", ki, "*")) : y("", !0)
          ], 10, yi),
          e.field.hint ? (t(), n("span", {
            key: 0,
            class: P(["flex items-center gap-1", b(ft)])
          }, [
            N(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: X[0] || (X[0] = (ne) => V(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, $i)) : y("", !0)
          ], 2)) : y("", !0)
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
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(hi, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[5] || (X[5] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(ri, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[6] || (X[6] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Kt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": X[7] || (X[7] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : G.value.length ? (t(), n("div", wi, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: oe.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", b(Me)]),
            onChange: X[8] || (X[8] = (ne) => ae(ne.target.value))
          }, [
            X[24] || (X[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(A, null, L(G.value, (ne) => (t(), n("option", {
              key: ne.value,
              value: ne.value
            }, f(ne.label), 9, Si))), 128))
          ], 42, Ci),
          oe.value.type && e.searchOptions ? (t(), n("div", Mi, [
            o("button", {
              type: "button",
              class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Me)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: P(m.value || oe.value.id ? "" : "text-muted-foreground")
              }, f(m.value ?? (oe.value.id ? String(oe.value.id) : "Search…")), 3)
            ], 10, Bi),
            d.value ? (t(), n("div", _i, [
              pe(o("input", {
                "onUpdate:modelValue": X[9] || (X[9] = (ne) => u.value = ne),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [_e, u.value]
              ]),
              o("div", Pi, [
                (t(!0), n(A, null, L(c.value, (ne) => (t(), n("button", {
                  key: String(ne.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => q(ne)
                }, f(ne.label), 9, zi))), 128))
              ])
            ])) : y("", !0),
            d.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: X[10] || (X[10] = (ne) => d.value = !1)
            })) : y("", !0)
          ])) : y("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Ai, [
          o("button", {
            type: "button",
            class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Me)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: C
          }, [
            o("span", {
              class: P(m.value || e.value ? "" : "text-muted-foreground")
            }, f(m.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he($, ["stop"])
            }, " ✕ ")) : y("", !0)
          ], 10, Oi),
          d.value ? (t(), n("div", ji, [
            pe(o("input", {
              "onUpdate:modelValue": X[11] || (X[11] = (ne) => u.value = ne),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [_e, u.value]
            ]),
            o("div", Li, [
              v.value ? (t(), n("p", Vi, " Searching… ")) : c.value.length === 0 ? (t(), n("p", Ti, " No matches ")) : y("", !0),
              (t(!0), n(A, null, L(c.value, (ne) => (t(), n("button", {
                key: String(ne.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => k(ne)
              }, f(ne.label), 9, Di))), 128)),
              e.field.createOption && b(S) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: I
              }, [
                X[25] || (X[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + f(E.value), 1)
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          d.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: X[12] || (X[12] = (ne) => d.value = !1)
          })) : y("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", b(Me)]),
          onChange: X[13] || (X[13] = (ne) => i("change", ne.target.value || null))
        }, [
          X[26] || (X[26] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(A, null, L(e.options, (ne) => (t(), n("option", {
            key: String(ne.value),
            value: ne.value
          }, f(ne.label), 9, Ei))), 128))
        ], 42, Ii)) : e.field.type === "toggle" ? (t(), n("label", Fi, [
          D(b(Ze), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[14] || (X[14] = (ne) => i("change", ne))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(b(ft))
          }, f(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", Ni, [
          D(b(jr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[15] || (X[15] = (ne) => i("change", ne === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(b(ft))
          }, f(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !F.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: P(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", b(Re), b(Me)]),
          onInput: X[16] || (X[16] = (ne) => i("change", ne.target.value))
        }, null, 42, Ri)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: P([
            "border-input flex overflow-hidden rounded-md border",
            b(na),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Ui, f(e.field.prefix ?? e.field.prefixIcon), 1)) : y("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[17] || (X[17] = (ne) => V(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Hi)) : y("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: P(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", b(Re)]),
            onInput: X[18] || (X[18] = (ne) => i("change", ne.target.value))
          }, null, 42, Ki),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", qi, f(e.field.suffix ?? e.field.suffixIcon), 1)) : y("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[19] || (X[19] = (ne) => V(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Gi)) : y("", !0)
        ], 2)) : F.value ? (t(), n("div", {
          key: 15,
          class: P([
            "border-input flex h-9 overflow-hidden rounded-md border",
            b(na),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Zi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : y("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[21] || (X[21] = (ne) => V(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Ji)) : y("", !0),
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
            onInput: X[22] || (X[22] = (ne) => i("change", ne.target.value))
          }, null, 40, Yi),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Xi, f(e.field.suffix ?? e.field.suffixIcon), 1)) : y("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[23] || (X[23] = (ne) => V(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Qi)) : y("", !0)
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
          onInput: X[20] || (X[20] = (ne) => i("change", ne.target.value))
        }, null, 40, Wi)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", ed, [
          (t(!0), n(A, null, L(e.field.presets, (ne) => (t(), n("button", {
            key: ne,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: P([
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
          }, f(ne), 11, td))), 128))
        ])) : y("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", ad, [
          (t(!0), n(A, null, L(e.field.chips, (ne, Ce) => (t(), n("button", {
            key: Ce,
            type: "button",
            title: ne,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (ea) => xe(String(Ce))
          }, f(Ce), 9, nd))), 128))
        ])) : y("", !0),
        K.value ? (t(), n("a", {
          key: 18,
          href: K.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, ld)) : y("", !0),
        e.error ? (t(), n("p", od, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: P(b(ft))
        }, f(e.field.help), 3)) : y("", !0)
      ])),
      e.field.createOption && b(S) ? (t(), T(Or, {
        key: 2,
        open: B.value,
        title: z.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: p.value,
        errors: h.value,
        "general-error": w.value,
        onClose: te,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : y("", !0)
    ], 64));
  }
}), sd = { class: "flex min-w-0 items-start gap-2.5" }, rd = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, id = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, dd = ["d"], ud = { class: "min-w-0" }, cd = { class: "text-sm font-semibold" }, fd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, md = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, pd = { class: "border-b px-4 py-3.5 sm:px-5" }, vd = { class: "text-sm font-semibold" }, gd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, hd = {
  key: 4,
  class: "min-w-0 space-y-4"
}, bd = {
  key: 7,
  class: "flex flex-col gap-3"
}, xd = { class: "text-sm font-medium" }, yd = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, kd = {
  key: 0,
  class: "mb-1 font-medium"
}, $d = ["onClick"], wd = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Cd = { class: "flex items-center justify-between gap-3 border-t p-4" }, Sd = ["disabled"], Ba = /* @__PURE__ */ O({
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
    ), c = x(() => a.depth === 0), v = x(() => {
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
    }), m = x(() => {
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
      const h = Et("SchemaNode", !0);
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
        "search-options": e.node.searchable && e.searchOptions ? (w) => e.searchOptions(e.node.key, w) : void 0,
        upload: S(e.node.key),
        discard: e.discard,
        onChange: p[0] || (p[0] = (w) => r("change", e.node.key, w)),
        onAffixAction: p[1] || (p[1] = (w) => r("affix-action", e.node.key, w))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && M(e.node) ? (t(), n("section", {
        key: 1,
        class: P(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: P(["flex items-start justify-between gap-3", [
            c.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: p[2] || (p[2] = (w) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", sd, [
            e.node.icon ? (t(), n("div", rd, [
              (t(), n("svg", id, [
                o("path", {
                  d: b(ce)(e.node.icon)
                }, null, 8, dd)
              ]))
            ])) : y("", !0),
            o("div", ud, [
              o("h3", cd, f(e.node.label), 1),
              e.node.description ? (t(), n("p", fd, f(e.node.description), 1)) : y("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: P(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...p[24] || (p[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : y("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: P(["grid grid-cols-1 gap-4", [g.value, c.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], (w, z) => (t(), T(h, {
            key: z,
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
            onChange: p[3] || (p[3] = (E, I) => r("change", E, I)),
            onAffixAction: p[4] || (p[4] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : y("", !0)
      ], 2)) : e.node.component === "card" && M(e.node) ? (t(), n("section", md, [
        o("header", pd, [
          o("h3", vd, f(e.node.title), 1),
          e.node.description ? (t(), n("p", gd, f(e.node.description), 1)) : y("", !0)
        ]),
        o("div", {
          class: P(["grid grid-cols-1 gap-4 px-4 py-4", g.value])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], (w, z) => (t(), T(h, {
            key: z,
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
        class: P(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), n(A, null, L(e.node.children ?? [], (w, z) => (t(), T(h, {
          key: z,
          node: w,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: P(w.component === "column" ? k(w.span) : ""),
          onChange: p[7] || (p[7] = (E, I) => r("change", E, I)),
          onAffixAction: p[8] || (p[8] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && M(e.node) ? (t(), n("div", hd, [
        (t(!0), n(A, null, L(e.node.children ?? [], (w, z) => (t(), T(h, {
          key: z,
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
        class: P(["grid grid-cols-1 gap-4", g.value])
      }, [
        (t(!0), n(A, null, L(e.node.children ?? [], (w, z) => (t(), T(h, {
          key: z,
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
        class: P(["flex", v.value])
      }, [
        (t(!0), n(A, null, L(e.node.children ?? [], (w, z) => (t(), T(h, {
          key: z,
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
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", bd, [
        o("legend", xd, f(e.node.label), 1),
        e.node.description ? (t(), n("p", yd, f(e.node.description), 1)) : y("", !0),
        o("div", {
          class: P(["grid grid-cols-1 gap-4", g.value])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], (w, z) => (t(), T(h, {
            key: z,
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
        class: P(["rounded-lg border px-4 py-3 text-sm", m.value])
      }, [
        e.node.title ? (t(), n("p", kd, f(e.node.title), 1)) : y("", !0),
        o("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: P(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", c.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], (w, z) => (t(), n("button", {
            key: z,
            type: "button",
            class: P([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === z ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (E) => i.value = z
          }, [
            N(f(w.label) + " ", 1),
            $(w) ? (t(), n("span", wd)) : y("", !0)
          ], 10, $d))), 128))
        ], 2),
        (t(!0), n(A, null, L(e.node.children ?? [], (w, z) => pe((t(), n("div", {
          key: z,
          class: P(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(A, null, L(w.children ?? [], (E, I) => (t(), T(h, {
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
          [He, i.value === z]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 10,
        class: P(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        D(Cr, {
          class: P(["p-4", c.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (w) => $((e.node.children ?? [])[w]),
          "onUpdate:activeStep": p[19] || (p[19] = (w) => d.value = w)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(A, null, L(e.node.children ?? [], (w, z) => pe((t(), n("div", {
          key: z,
          class: P(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(A, null, L(w.children ?? [], (E, I) => (t(), T(h, {
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
          [He, d.value === z]
        ])), 128)),
        o("div", Cd, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: p[22] || (p[22] = (w) => d.value--)
          }, " Back ", 8, Sd),
          d.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: p[23] || (p[23] = (w) => d.value++)
          }, " Next ")) : y("", !0)
        ])
      ], 2)) : y("", !0);
    };
  }
}), m5 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(st, {
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
          (t(!0), n(A, null, L(e.form?.nodes ?? [], (c, v) => (t(), T(Ba, {
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
}), Md = ["title"], Bd = ["aria-label"], _d = ["d"], Pd = { class: "sr-only" }, zd = /* @__PURE__ */ O({
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
    }, s = x(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = x(() => l.icons[s.value] ?? l.defaultIcon), d = x(() => a[i.value] ?? a.dot), u = x(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), c = x(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (v, m) => (t(), n("span", {
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
        o("path", { d: d.value }, null, 8, _d)
      ], 10, Bd)),
      o("span", Pd, f(c.value), 1)
    ], 8, Md));
  }
}), Ad = ["aria-label"], Od = ["fill"], p5 = /* @__PURE__ */ O({
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
      (t(!0), n(A, null, L(a.value, (d) => (t(), n("svg", {
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
        }, null, 8, Od)
      ]))), 128))
    ], 8, Ad));
  }
}), jd = ["src"], Ld = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Vd = /* @__PURE__ */ O({
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
        onError: u[0] || (u[0] = (c) => a.value = !0)
      }, null, 40, jd)) : e.fallback === "initials" ? (t(), n(A, { key: 1 }, [
        N(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Ld, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : y("", !0)
    ], 2));
  }
}), Td = {
  key: 0,
  class: "text-muted-foreground"
}, Dd = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Id = {
  key: 0,
  class: "font-mono text-xs"
}, Ed = {
  key: 1,
  class: "sr-only"
}, Fd = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), n("span", Td, "-")) : (t(), n("span", Dd, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Id, f(r.value), 1)) : (t(), n("span", Ed, f(r.value), 1))
    ]));
  }
}), Nd = { class: "inline-flex items-center" }, Rd = ["checked", "aria-label"], Ud = { class: "sr-only" }, v5 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("span", Nd, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Rd),
      o("span", Ud, f(r.value), 1)
    ]));
  }
}), Hd = {
  key: 0,
  class: "text-muted-foreground"
}, Kd = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, g5 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = x(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", Kd, f(a.value), 1)) : (t(), n("span", Hd, "—"));
  }
}), qd = {
  key: 0,
  class: "font-mono text-xs"
}, Gd = {
  key: 1,
  class: "text-muted-foreground"
}, Wd = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, h5 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = x(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", qd, f(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", Gd, "—")) : (t(), n("span", Wd, f(a.value.length) + " " + f(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Zd = ["data-variant"], Jd = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", qe = /* @__PURE__ */ O({
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
      () => [Jd, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: P(r.value)
    }, [
      U(s.$slots, "default")
    ], 10, Zd));
  }
}), Yd = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Xd = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, b5 = /* @__PURE__ */ O({
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
    const r = x(() => a(l.value, l.separator)), s = x(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = x(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), n("span", Yd, "None")) : (t(), n("span", Xd, [
      (t(!0), n(A, null, L(s.value, (c) => (t(), T(qe, {
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
      })) : y("", !0)
    ]));
  }
}), Qd = ["aria-checked", "aria-label", "title", "disabled"], eu = ["value", "disabled"], tu = ["value"], x5 = /* @__PURE__ */ O({
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
      class: P(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: he(u, ["stop"])
    }, [
      o("span", {
        class: P(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Qd)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: m[0] || (m[0] = he(() => {
      }, ["stop"])),
      onChange: c
    }, [
      (t(!0), n(A, null, L(e.options, (g, C) => (t(), n("option", {
        key: C,
        value: C
      }, f(g), 9, tu))), 128))
    ], 40, eu));
  }
}), Wt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function au(e) {
  return e != null && e !== "";
}
function nu(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function y5(e) {
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
      cellClass: nu(s),
      group: s.group
    }))
  ), a = x(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = a.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), c = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return Wt[c] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const lu = ["disabled", "aria-label", "aria-busy"], ou = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, su = ["d"], ru = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, iu = ["disabled", "onClick"], du = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, uu = ["d"], cu = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, k5 = /* @__PURE__ */ O({
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
    function u(g) {
      return typeof g == "boolean" ? g ? "1" : "" : String(g ?? "");
    }
    function c(g) {
      const C = a.colors[u(g)] ?? a.defaultColor ?? "neutral";
      return Wt[C] ?? "outline";
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
            (t(), n("svg", ou, [
              o("path", {
                d: b(ce)("chevron-down")
              }, null, 8, su)
            ]))
          ], 8, lu)
        ]),
        panel: j(({ close: k }) => [
          o("div", ru, f(d.value), 1),
          (t(!0), n(A, null, L(e.options, ($, M) => (t(), n("button", {
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
            String(M) === i.value ? (t(), n("svg", du, [
              o("path", {
                d: b(ce)("check")
              }, null, 8, uu)
            ])) : (t(), n("span", cu))
          ], 8, iu))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), fu = { class: "flex items-center justify-end" }, mu = ["aria-label"], pu = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, vu = ["d"], gu = ["href"], hu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, bu = ["d"], xu = ["disabled", "onClick"], yu = ["d"], ku = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, $u = ["disabled", "onClick"], wu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Cu = ["d"], $5 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(null), d = R(null), u = x(() => r.groups.flatMap((S) => S.actions)), c = x(() => u.value.filter((S) => !S.destructive)), v = x(() => u.value.filter((S) => S.destructive)), m = {
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
    const C = x(() => u.value.length === 0);
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
    return l({ openContextMenu: $ }), (S, B) => (t(), n("div", fu, [
      C.value ? y("", !0) : (t(), T(Je, {
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
            (t(), n("svg", pu, [
              o("path", {
                d: b(ce)("more-vertical")
              }, null, 8, vu)
            ]))
          ], 8, mu)
        ]),
        panel: j(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: M
          }, [
            (t(!0), n(A, null, L(c.value, (p) => (t(), n(A, {
              key: p.key
            }, [
              p.link ? (t(), n("a", {
                key: 0,
                href: p.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g(p)])
              }, [
                (t(), n("svg", hu, [
                  o("path", {
                    d: b(ce)(p.icon)
                  }, null, 8, bu)
                ])),
                N(" " + f(p.label), 1)
              ], 10, gu)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", g(p)]),
                disabled: e.busy === p.key,
                onClick: (h) => k(p)
              }, [
                (t(), n("svg", {
                  class: P(["size-4 shrink-0", e.busy === p.key && "animate-pulse"]),
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
                  }, null, 8, yu)
                ], 2)),
                N(" " + f(p.label), 1)
              ], 10, xu))
            ], 64))), 128)),
            v.value.length ? (t(), n("div", ku, [
              (t(!0), n(A, null, L(v.value, (p) => (t(), n("button", {
                key: p.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === p.key,
                onClick: (h) => k(p)
              }, [
                (t(), n("svg", wu, [
                  o("path", {
                    d: b(ce)(p.icon ?? "trash")
                  }, null, 8, Cu)
                ])),
                N(" " + f(p.label), 1)
              ], 8, $u))), 128))
            ])) : y("", !0)
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
}, pt = 12, vt = 20, Su = [0, 0.25, 0.5, 0.75, 1], Zt = "alxtexhpanel.appearance", Pe = {
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
}, Ne = R({ ...Pe });
let Ot = !1;
const Mu = "alxtexhpanel.appearance.vars";
function jt(e) {
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
function Bu(e) {
  const l = zt[e.primary] ?? zt.slate, a = At[e.surface] ?? At.neutral, r = a.chroma, s = a.hue, d = jt(e) ? {
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
    "--pk-row-padding": la[e.density] ?? la.comfortable,
    "--pk-form-gap": oa[e.density] ?? oa.comfortable
  };
}
function Jt() {
  if (typeof window > "u")
    return { ...Pe };
  try {
    const e = localStorage.getItem(Zt);
    if (!e)
      return { ...Pe };
    const l = { ...Pe, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Pe.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? Pe.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < pt || l.fontSize > vt) && (l.fontSize = Pe.fontSize), l;
  } catch {
    return { ...Pe };
  }
}
function _u() {
  if (typeof window > "u")
    return null;
  const e = window.__panelAppearance;
  if (e && typeof e == "object")
    return e;
  try {
    const l = document.getElementById("app")?.dataset.page;
    if (!l)
      return null;
    const a = JSON.parse(l)?.props?.appearance;
    return a && typeof a == "object" ? a : null;
  } catch {
    return null;
  }
}
function _a(e) {
  const l = Jt(), a = e ? { ...Pe, ...l, ...e } : { ...Pe, ...l };
  if (Ne.value = a, Lt(a), Ot = !0, e)
    try {
      localStorage.setItem(Zt, JSON.stringify(a));
    } catch {
    }
}
function w5() {
  _a(_u());
}
function C5(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && _a(l);
}
let Pa = null;
function S5(e) {
  Pa = e;
}
let za = {};
function Pu(e) {
  if (za = e, !(typeof document > "u") && !Jt().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Lt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...Bu(e), ...e.primaryChosen ? {} : za };
  l.classList.toggle("dark", jt(e));
  for (const [r, s] of Object.entries(a))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Mu,
      JSON.stringify({ dark: jt(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function Aa() {
  function e(r) {
    Lt(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Ne.value = { ...Ne.value, ...r, ...s };
    try {
      localStorage.setItem(Zt, JSON.stringify(Ne.value));
    } catch {
    }
    e(Ne.value), Pa?.({ ...r, ...s });
  }
  function a() {
    l({ ...Pe });
  }
  return ve(() => {
    Ot || (Ot = !0, Ne.value = Jt(), Lt(Ne.value));
  }), {
    appearance: x(() => Ne.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: zt,
    SURFACE_TINTS: At,
    FONT_SIZE_MIN: pt,
    FONT_SIZE_MAX: vt,
    RADIUS_OPTIONS: Su
  };
}
const zu = { class: "flex items-center justify-between border-b px-4 py-3" }, Au = { class: "flex items-center gap-2" }, Ou = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, ju = { class: "flex flex-col gap-2" }, Lu = { class: "grid grid-cols-8 gap-2" }, Vu = ["title", "aria-label", "aria-pressed", "onClick"], Tu = { class: "flex flex-col gap-2" }, Du = { class: "grid grid-cols-8 gap-2" }, Iu = ["title", "aria-label", "aria-pressed", "onClick"], Eu = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Fu = { class: "flex flex-col gap-2" }, Nu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Ru = ["aria-pressed", "aria-label", "onClick"], Uu = { class: "text-sm font-semibold" }, Hu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Ku = ["onClick"], qu = { class: "flex flex-col gap-2" }, Gu = { class: "flex items-center justify-between" }, Wu = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Zu = { class: "flex items-center gap-2" }, Ju = ["disabled"], Yu = ["min", "max", "value"], Xu = ["disabled"], M5 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Aa(), u = R(!1), c = x(() => l.value.sidebarSide === "right"), v = [
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
    return (S, B) => (t(), n(A, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: B[0] || (B[0] = (p) => u.value = !0)
      }, [...B[7] || (B[7] = [
        It('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Xe, { to: "body" }, [
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
            })) : y("", !0)
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
              class: P(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", c.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", zu, [
                B[9] || (B[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", Au, [
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
              o("div", Ou, [
                o("section", ju, [
                  B[11] || (B[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", Lu, [
                    (t(!0), n(A, null, L(b(s), (p, h) => (t(), n("button", {
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
                      ])], 4)) : y("", !0)
                    ], 12, Vu))), 128))
                  ])
                ]),
                o("section", Tu, [
                  B[13] || (B[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", Du, [
                    (t(!0), n(A, null, L(b(i), (p, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: se({ background: M(p.hue, p.chroma) }),
                      title: p.label,
                      "aria-label": p.label,
                      "aria-pressed": b(l).surface === h,
                      onClick: (w) => b(a)({ surface: h })
                    }, [
                      b(l).surface === h ? (t(), n("svg", Eu, [...B[12] || (B[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : y("", !0)
                    ], 12, Iu))), 128))
                  ])
                ]),
                o("section", Fu, [
                  B[14] || (B[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", Nu, [
                    (t(!0), n(A, null, L(b(d), (p) => (t(), n("button", {
                      key: p,
                      type: "button",
                      class: P([
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
                    ], 10, Ru))), 128))
                  ])
                ]),
                (t(!0), n(A, null, L([
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
                  o("h3", Uu, f(p.label), 1),
                  o("div", Hu, [
                    (t(!0), n(A, null, L(p.options, (h) => (t(), n("button", {
                      key: String(h.value),
                      type: "button",
                      class: P([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l)[p.key] === h.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (w) => b(a)({ [p.key]: h.value })
                    }, f(h.label), 11, Ku))), 128))
                  ])
                ]))), 128)),
                o("section", qu, [
                  o("div", Gu, [
                    B[15] || (B[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", Wu, f(b(l).fontSize) + "px", 1)
                  ]),
                  o("div", Zu, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize <= b(pt),
                      "aria-label": "Decrease font size",
                      onClick: B[4] || (B[4] = (p) => b(a)({ fontSize: b(l).fontSize - 1 }))
                    }, " − ", 8, Ju),
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
                    }, null, 40, Yu),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize >= b(vt),
                      "aria-label": "Increase font size",
                      onClick: B[6] || (B[6] = (p) => b(a)({ fontSize: b(l).fontSize + 1 }))
                    }, " + ", 8, Xu)
                  ])
                ])
              ])
            ], 2)) : y("", !0)
          ]),
          _: 1
        }, 8, ["enter-from-class", "leave-to-class"])
      ]))
    ], 64));
  }
}), Qu = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, ec = { class: "flex items-stretch" }, tc = ["href", "aria-current"], ac = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nc = ["d"], lc = { class: "w-full truncate text-center" }, oc = {
  key: 0,
  class: "flex-1"
}, sc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, rc = ["d"], ic = { class: "w-full truncate text-center" }, Ct = 5, B5 = /* @__PURE__ */ O({
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
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, c) => (t(), n("nav", Qu, [
      o("ul", ec, [
        (t(!0), n(A, null, L(s.value, (v) => (t(), n("li", {
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
            (t(), n("svg", ac, [
              o("path", {
                d: b(ce)(v.icon)
              }, null, 8, nc)
            ])),
            o("span", lc, f(v.title), 1)
          ], 10, tc)
        ]))), 128)),
        i.value ? (t(), n("li", oc, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: c[0] || (c[0] = (v) => r("more"))
          }, [
            (t(), n("svg", sc, [
              o("path", {
                d: b(ce)("more-horizontal")
              }, null, 8, rc)
            ])),
            o("span", ic, f(e.moreLabel), 1)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), dc = ["value"], $e = /* @__PURE__ */ O({
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
    }, null, 42, dc));
  }
}), uc = ["for"], ze = /* @__PURE__ */ O({
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
    ], 10, uc));
  }
}), _5 = /* @__PURE__ */ O({
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
}), cc = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, fc = ["id", "name", "value", "disabled", "maxlength"], mc = ["data-active"], pc = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, vc = /* @__PURE__ */ O({
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
      () => Array.from({ length: a.length }, (B, p) => a.modelValue[p] ?? "")
    ), c = x(() => Math.min(a.modelValue.length, a.length - 1));
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
    }), Ga(() => {
      S !== void 0 && window.clearInterval(S);
    }), (B, p) => (t(), n("div", cc, [
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
      }, null, 40, fc),
      (t(!0), n(A, null, L(u.value, (h, w) => (t(), n("div", {
        key: w,
        "data-slot": "input-otp-slot",
        "data-active": s.value && w === c.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(f(h) + " ", 1),
        s.value && w === c.value && h === "" ? (t(), n("div", pc, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : y("", !0)
      ], 8, mc))), 128))
    ]));
  }
}), P5 = /* @__PURE__ */ bt(vc, [["__scopeId", "data-v-560616ac"]]), gc = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Te = /* @__PURE__ */ O({
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
      e.description ? (t(), n("p", gc, f(e.description), 1)) : y("", !0)
    ], 2));
  }
}), hc = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, bc = { class: "min-w-0 space-y-1" }, xc = { class: "flex flex-wrap items-center gap-2.5" }, yc = { class: "text-2xl font-semibold tracking-tight" }, kc = {
  key: 0,
  class: "flex items-center gap-2"
}, $c = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, wc = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, z5 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", hc, [
      o("div", bc, [
        o("div", xc, [
          o("h1", yc, f(e.title), 1),
          l.$slots.status ? (t(), n("div", kc, [
            U(l.$slots, "status")
          ])) : y("", !0)
        ]),
        e.purpose ? (t(), n("p", $c, f(e.purpose), 1)) : y("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", wc, [
        U(l.$slots, "actions")
      ])) : y("", !0)
    ]));
  }
}), Cc = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: P(b(Q)(b(Bc)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Sc = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: P(b(Q)("col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Mc = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: P(b(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Bc = Ht(
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
), _c = { class: "list-inside list-disc text-sm" }, A5 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = x(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(b(Cc), { variant: "destructive" }, {
      default: j(() => [
        D(b(In), { class: "size-4" }),
        D(b(Mc), null, {
          default: j(() => [
            N(f(e.title), 1)
          ]),
          _: 1
        }),
        D(b(Sc), null, {
          default: j(() => [
            o("ul", _c, [
              (t(!0), n(A, null, L(a.value, (i, d) => (t(), n("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Oa = /* @__PURE__ */ O({
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
    return (i, d) => pe((t(), n("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => Wa(s) ? s.value = u : null),
      "data-slot": "input",
      class: P(
        b(Q)(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          b(Re),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [_e, b(s)]
    ]);
  }
}), Pc = { class: "relative" }, zc = ["aria-label"], O5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = R(!1), s = Za("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), n("div", Pc, [
      D(b(Oa), re({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: b(Q)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: P(
          b(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), T(b(En), {
          key: 0,
          class: "size-4"
        })) : (t(), T(b(Fn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, zc)
    ]));
  }
}), ja = "@container min-w-0", Ac = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", j5 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", Oc = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3", Ge = "w-full min-w-0 px-4 py-6 sm:px-6", L5 = "w-full min-w-0 p-3 sm:p-4", V5 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", jc = "w-full max-w-5xl";
function T5(e, l) {
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
function sa(e, l) {
  return `${e}:${l}`;
}
function D5(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Vt(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function I5(e, l, a, r) {
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
  const d = [], u = /* @__PURE__ */ new Set();
  for (const c of r?.widgets ?? []) {
    const v = c.id.toLowerCase(), m = i.get(v);
    m && (u.add(v), d.push({
      id: v,
      kind: m.kind,
      key: m.source.key,
      span: Vt(c.span),
      hidden: !!c.hidden,
      source: m.source
    }));
  }
  for (const c of s)
    for (const v of c.items) {
      const m = sa(c.kind, v.key);
      u.has(m) || d.push({
        id: m,
        kind: c.kind,
        key: v.key,
        span: Vt(v.span),
        hidden: !1,
        source: v
      });
    }
  return d;
}
function E5(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Vt(l.span),
      hidden: !!l.hidden
    }))
  };
}
const La = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Lc = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Vc = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Tc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function Dc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Ic(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await Ec(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function Ec(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Fc(e) {
  if (Tc(e))
    throw new Error(Vc);
  if (!Dc(e))
    throw new Error(La);
  if (!await Ic(e))
    throw new Error(Lc);
}
const F5 = /* @__PURE__ */ O({
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
}), Nc = /* @__PURE__ */ O({
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
}), N5 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: P(b(Q)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Rc = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: P(b(Q)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Uc = /* @__PURE__ */ O({
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
}), R5 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(xa), re({ "data-slot": "sheet-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ra = "sidebar_state", Hc = 3600 * 24 * 7, Kc = "16rem", qc = "18rem", Gc = "3rem", Wc = "b", [xt, Zc] = ln("Sidebar"), Jc = { class: "flex h-full w-full flex-col" }, Yc = ["data-state", "data-collapsible", "data-variant", "data-side"], Xc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, U5 = /* @__PURE__ */ O({
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
    return (d, u) => e.collapsible === "none" ? (t(), n("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: b(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      U(d.$slots, "default")
    ], 16)) : b(a) ? (t(), T(b(qt), re({
      key: 1,
      open: b(s)
    }, d.$attrs, { "onUpdate:open": b(i) }), {
      default: j(() => [
        D(b(Gt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": b(qc)
          })
        }, {
          default: j(() => [
            D(Rc, { class: "sr-only" }, {
              default: j(() => [
                D(Uc, null, {
                  default: j(() => [...u[0] || (u[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(Nc, null, {
                  default: j(() => [...u[1] || (u[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", Jc, [
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
        class: P(
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
        o("div", Xc, [
          U(d.$slots, "default")
        ])
      ], 16)
    ], 8, Yc));
  }
}), H5 = /* @__PURE__ */ O({
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
        b(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), K5 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: P(b(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), q5 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: P(b(Q)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), G5 = /* @__PURE__ */ O({
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
      class: P(
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
}), W5 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: P(b(Q)("w-full text-sm", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Z5 = /* @__PURE__ */ O({
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
      class: P(
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
}), J5 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: P(b(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Y5 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Oa), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: P(b(Q)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), X5 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: P(
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
}), Q5 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: P(b(Q)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), e3 = /* @__PURE__ */ O({
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
      class: P(
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
}), t3 = /* @__PURE__ */ O({
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
}), Qc = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(on), re({ "data-slot": "tooltip" }, b(s)), {
      default: j((u) => [
        U(i.$slots, "default", Oe(Ee(u)))
      ]),
      _: 3
    }, 16));
  }
}), ef = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(sn), null, {
      default: j(() => [
        D(b(rn), re({ "data-slot": "tooltip-content" }, { ...b(i), ...d.$attrs }, {
          class: b(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: j(() => [
            U(d.$slots, "default"),
            D(b(dn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), a3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(ya), Oe(Ee(l)), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tf = /* @__PURE__ */ O({
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
      class: b(Q)(b(nf)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), n3 = /* @__PURE__ */ O({
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
    return (i, d) => e.tooltip ? (t(), T(b(Qc), { key: 1 }, {
      default: j(() => [
        D(b(tf), { "as-child": "" }, {
          default: j(() => [
            D(ia, Oe(Ee({ ...b(s), ...i.$attrs })), {
              default: j(() => [
                U(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(b(ef), {
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
    })) : (t(), T(ia, Oe(re({ key: 0 }, { ...b(s), ...i.$attrs })), {
      default: j(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l3 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: P(b(Q)("group/menu-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), da = "animate-pulse rounded-md bg-primary/10", o3 = /* @__PURE__ */ O({
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
      class: P(b(Q)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: P(b(Q)(da, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : y("", !0),
      o("div", {
        class: P(b(Q)(da, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), s3 = /* @__PURE__ */ O({
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
}), r3 = /* @__PURE__ */ O({
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
      class: P(
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
}), i3 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: P(b(Q)("group/menu-sub-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), d3 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Zn?.cookie.includes(`${ra}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = Gn("(max-width: 767px)"), i = R(!1), d = Ca(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(g) {
      d.value = g, document.cookie = `${ra}=${d.value}; path=/; max-age=${Hc}`;
    }
    function c(g) {
      i.value = g;
    }
    function v() {
      return s.value ? c(!i.value) : u(!d.value);
    }
    Wn("keydown", (g) => {
      g.key === Wc && (g.metaKey || g.ctrlKey) && (g.preventDefault(), v());
    });
    const m = x(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return Zc({
      state: m,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: c,
      toggleSidebar: v
    }), (g, C) => (t(), T(b(ya), { "delay-duration": 0 }, {
      default: j(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(Kc),
            "--sidebar-width-icon": b(Gc)
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
}), u3 = /* @__PURE__ */ O({
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
      class: P(
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
}), af = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(b(cn), re({ "data-slot": "separator" }, b(a), {
      class: b(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), c3 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(af), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: P(b(Q)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), f3 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = xt();
    return (i, d) => (t(), T(ue, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: P(b(Q)("h-7 w-7", l.class)),
      onClick: b(s)
    }, {
      default: j(() => [
        b(a) || b(r) === "collapsed" ? (t(), T(b(Nn), { key: 0 })) : (t(), T(b(Rn), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), nf = Ht(
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
), m3 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(fn), re({ "data-slot": "dropdown-menu" }, b(s)), {
      default: j((u) => [
        U(i.$slots, "default", Oe(Ee(u)))
      ]),
      _: 3
    }, 16));
  }
}), lf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, p3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(mn), re({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", lf, [
          D(b(ka), null, {
            default: j(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(b($a), { class: "size-4" })
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
}), v3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(pn), null, {
      default: j(() => [
        D(b(vn), re({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...b(i) }, {
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
}), g3 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(gn), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), h3 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(b(hn), re({
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
}), b3 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fe(l, "class", "inset"), r = je(a);
    return (s, i) => (t(), T(b(bn), re({
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
}), x3 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(b(xn), re({ "data-slot": "dropdown-menu-radio-group" }, b(s)), {
      default: j(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), of = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, y3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(yn), re({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", of, [
          D(b(ka), null, {
            default: j(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(b(Un), { class: "size-2 fill-current" })
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
}), k3 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(kn), re({ "data-slot": "dropdown-menu-separator" }, b(a), {
      class: b(Q)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), $3 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: P(b(Q)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), w3 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(b($n), re({ "data-slot": "dropdown-menu-sub" }, b(s)), {
      default: j((u) => [
        U(i.$slots, "default", Oe(Ee(u)))
      ]),
      _: 3
    }, 16));
  }
}), C3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(wn), re({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
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
}), S3 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(b(Cn), re({ "data-slot": "dropdown-menu-sub-trigger" }, b(r), {
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
}), M3 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = je(e);
    return (r, s) => (t(), T(b(Sn), re({ "data-slot": "dropdown-menu-trigger" }, b(a)), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B3 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(Mn), {
      "data-slot": "avatar",
      class: P(b(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _3 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Bn), re({ "data-slot": "avatar-fallback" }, b(a), {
      class: b(Q)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(b(_n), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), z3 = /* @__PURE__ */ O({
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
}), A3 = /* @__PURE__ */ O({
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
      class: P(b(Q)("flex size-9 items-center justify-center", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(b(Hn), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), O3 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: P(b(Q)("inline-flex items-center gap-1.5", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), j3 = /* @__PURE__ */ O({
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
      class: P(b(Q)("hover:text-foreground transition-colors", l.class))
    }, {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), L3 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: P(
        b(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), V3 = /* @__PURE__ */ O({
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
      class: P(b(Q)("text-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), T3 = /* @__PURE__ */ O({
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
      class: P(b(Q)("[&>svg]:size-3.5", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(b(wa))
      ])
    ], 2));
  }
}), sf = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, rf = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", sf, [
      D(b(Pn), re({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), D3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(zn), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: j((c) => [
        U(d.$slots, "default", Oe(Ee(c))),
        e.viewport ? (t(), T(rf, { key: 0 })) : y("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), I3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(An), re({ "data-slot": "navigation-menu-content" }, b(i), {
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
}), E3 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), T(b(On), re({ "data-slot": "navigation-menu-indicator" }, b(r), {
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
}), F3 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(jn), re({ "data-slot": "navigation-menu-item" }, b(a), {
      class: b(Q)("relative", l.class)
    }), {
      default: j(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Ln), re({ "data-slot": "navigation-menu-link" }, b(i), {
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
}), R3 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), T(b(Vn), re({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(Q)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U3 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), T(b(Tn), re({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(Q)(b(df)(), "group", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default"),
        D(b(Kn), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), df = Ht(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), H3 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(ga), re({ "data-slot": "dialog" }, b(s)), {
      default: j((u) => [
        U(i.$slots, "default", Oe(Ee(u)))
      ]),
      _: 3
    }, 16));
  }
}), K3 = /* @__PURE__ */ O({
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
}), uf = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Ft), re({ "data-slot": "dialog-overlay" }, b(a), {
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
}), q3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Nt), null, {
      default: j(() => [
        D(uf),
        D(b(Rt), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...b(i) }, {
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: j(() => [
            U(d.$slots, "default"),
            e.showCloseButton ? (t(), T(b(Qe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                D(b(Ut)),
                u[0] || (u[0] = o("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : y("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), G3 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), T(b(ha), re({ "data-slot": "dialog-description" }, b(r), {
      class: b(Q)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), W3 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: P(b(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      U(a.$slots, "default"),
      e.showCloseButton ? (t(), T(b(Qe), {
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
      })) : y("", !0)
    ], 2));
  }
}), Z3 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: P(b(Q)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), J3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Nt), null, {
      default: j(() => [
        D(b(Ft), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            D(b(Rt), re({
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
                D(b(Qe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    D(b(Ut), { class: "w-4 h-4" }),
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
}), Y3 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = je(a);
    return (s, i) => (t(), T(b(ba), re({ "data-slot": "dialog-title" }, b(r), {
      class: b(Q)("text-lg leading-none font-semibold", l.class)
    }), {
      default: j(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X3 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(xa), re({ "data-slot": "dialog-trigger" }, l), {
      default: j(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Q3 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(b(Dn), re({ "data-slot": "label" }, b(a), {
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
}), eC = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(b(qn), {
      role: "status",
      "aria-label": "Loading",
      class: P(b(Q)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), tC = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: P(
        b(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), aC = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: P(b(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), nC = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: P(b(Q)("px-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), lC = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: P(b(Q)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), oC = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: P(b(Q)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), sC = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: P(
        b(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), rC = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: P(b(Q)("leading-none font-semibold", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), cf = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, ff = { class: "flex items-start gap-3" }, mf = { class: "min-w-0 flex-1" }, pf = { class: "text-foreground text-sm font-medium" }, vf = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, iC = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(!1), d = R(null), u = R(0);
    Ja((v) => (console.error(`[PkBoundary] ${r.label} failed to render`, v), i.value = !0, d.value = v instanceof Error ? v.message : null, s("error", v), !1));
    function c() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: c }), (v, m) => (t(), n("div", {
      class: P(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", cf, [
        o("div", ff, [
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
          o("div", mf, [
            o("p", pf, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", vf, f(d.value), 1)) : y("", !0),
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
      ])) : i.value ? y("", !0) : U(v.$slots, "default", { key: u.value })
    ], 2));
  }
}), gf = { class: "bg-card rounded-lg border" }, hf = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, bf = { class: "min-w-0" }, xf = {
  key: 0,
  class: "truncate text-sm font-medium"
}, yf = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, kf = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, $f = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, dC = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", gf, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", hf, [
        o("div", bf, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", xf, f(e.title), 1)) : y("", !0),
            e.description ? (t(), n("p", yf, f(e.description), 1)) : y("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", kf, [
          U(l.$slots, "actions")
        ])) : y("", !0)
      ])) : y("", !0),
      o("div", {
        class: P(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", $f, [
        U(l.$slots, "footer")
      ])) : y("", !0)
    ]));
  }
}), Va = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function uC() {
  const e = Sa(), l = x(() => e.props.panel?.pageFooter === !0);
  return _t(Va, l), l;
}
const wf = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Cf = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Sf = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, cC = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = Sa(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = x(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = x(() => {
      const c = a.props.panel;
      return Array.isArray(c?.footerLinks) ? c.footerLinks : [];
    }), d = mt(Va, x(() => !1)), u = x(() => !l.host && b(d) === !0);
    return (c, v) => u.value ? y("", !0) : (t(), n("footer", wf, [
      o("div", Cf, [
        o("p", null, "© " + f(b(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), n("nav", Sf, [
          (t(!0), n(A, null, L(i.value, (m) => (t(), T(b(Xn), {
            key: m.href,
            href: m.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              N(f(m.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : y("", !0)
      ])
    ]));
  }
}), Mf = { class: "flex shrink-0 flex-col items-center" }, Bf = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, fC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", Mf, [
      o("div", {
        class: P(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Bf)) : y("", !0),
        o("div", {
          class: P(["size-full overflow-hidden bg-white", s.value])
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
      ], 64)) : y("", !0)
    ]));
  }
}), _f = { class: "flex flex-col gap-2" }, Pf = { class: "min-w-0 flex-1" }, zf = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Af = ["disabled", "aria-label", "onClick"], Of = ["disabled", "aria-label", "onClick"], jf = ["disabled", "title", "aria-label", "onClick"], Lf = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Vf = ["disabled"], mC = /* @__PURE__ */ O({
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
        for (const z of a.children) {
          const E = p.data[z.key] ?? null;
          h[z.key] = E, E !== null && E !== "" && !(Array.isArray(E) && E.length === 0) && (w = !0);
        }
        w && B.push(h);
      }
      return B.length ? B : null;
    }
    function c() {
      r("update:modelValue", u());
    }
    const v = x(() => a.maxItems !== null && i.value.length >= a.maxItems), m = x(() => a.minItems !== null && i.value.length <= a.minItems), g = x(() => a.children.length === 1);
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
      const w = [...i.value], [z] = w.splice(B, 1);
      w.splice(h, 0, z), i.value = w, c();
    }
    function M(B, p, h) {
      const w = i.value.find((z) => z.uid === B);
      w && (w.data[p] = h, c());
    }
    function S(B, p) {
      return a.errors[`${a.fieldKey}.${B}.${p}`];
    }
    return (B, p) => (t(), n("div", _f, [
      (t(!0), n(A, null, L(i.value, (h, w) => (t(), n("div", {
        key: h.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: P(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", g.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(w + 1), 3),
        o("div", Pf, [
          g.value ? (t(), T(Ye, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: h.data[e.children[0].key],
            error: S(w, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (z) => M(h.uid, e.children[0].key, z)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", zf, [
            (t(!0), n(A, null, L(e.children, (z) => (t(), T(Ye, {
              key: z.key,
              field: { ...z, disabled: z.disabled || e.disabled },
              value: h.data[z.key],
              error: S(w, z.key),
              options: e.childOptions[z.key] ?? [],
              onChange: (E) => M(h.uid, z.key, E)
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
            onClick: (z) => $(w, -1)
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
          ])], 8, Af),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || w === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${w + 1} down`,
            onClick: (z) => $(w, 1)
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
          ])], 8, Of),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || m.value,
            title: m.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${w + 1}`,
            onClick: (z) => k(h.uid)
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
          ])], 8, jf)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", Lf, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : y("", !0),
      v.value ? y("", !0) : (t(), n("button", {
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
      ], 8, Vf))
    ]));
  }
}), Tf = { class: "space-y-1" }, Df = { class: "flex items-center gap-1" }, If = ["disabled", "title", "aria-label", "onClick"], Ef = ["aria-pressed"], Ff = ["id", "value", "rows", "disabled"], Nf = ["innerHTML"], Rf = /* @__PURE__ */ O({
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
    function d(g) {
      return g.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = x(
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
    }, m = x(
      () => (a.toolbar ?? Object.keys(v)).filter((g) => g in v)
    );
    return (g, C) => (t(), n("div", Tf, [
      o("div", Df, [
        (t(!0), n(A, null, L(m.value, (k) => (t(), n("button", {
          key: k,
          type: "button",
          disabled: e.disabled,
          title: k,
          "aria-label": k,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: ($) => v[k].run()
        }, f(v[k].label), 9, If))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (k) => s.value = !s.value)
        }, " Preview ", 8, Ef)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Nf)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = (k) => r("update:modelValue", k.target.value))
      }, null, 40, Ff))
    ]));
  }
}), Uf = { class: "space-y-1" }, Hf = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Kf = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, qf = ["id", "value", "rows", "disabled"], Gf = { class: "text-muted-foreground text-xs font-normal" }, Wf = {
  key: 0,
  class: "text-destructive text-xs"
}, Zf = /* @__PURE__ */ O({
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
`).length, 1)), c = x(() => {
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
    return (g, C) => (t(), n("div", Uf, [
      o("div", Hf, [
        o("div", Kf, [
          (t(!0), n(A, null, L(u.value, (k) => (t(), n("div", { key: k }, f(k), 1))), 128))
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
        }, null, 40, qf)
      ]),
      o("p", Gf, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      c.value ? (t(), n("p", Wf, f(c.value), 1)) : y("", !0)
    ]));
  }
}), Jf = { class: "space-y-3" }, Yf = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Xf = { class: "text-sm font-medium" }, Qf = { class: "flex items-center gap-1" }, em = ["disabled", "onClick"], tm = ["disabled", "onClick"], am = ["disabled", "onClick"], nm = { class: "space-y-3 p-3" }, lm = { class: "flex flex-wrap items-center gap-2" }, om = ["disabled", "onClick"], sm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, pC = /* @__PURE__ */ O({
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
    return (C, k) => (t(), n("div", Jf, [
      (t(!0), n(A, null, L(s.value, ($, M) => (t(), n("div", {
        key: `${$.type}-${M}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Yf, [
          o("span", Xf, f(i.value[$.type]?.label ?? $.type), 1),
          o("div", Qf, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === 0,
              "aria-label": "Move up",
              onClick: (S) => m(M, -1)
            }, " ↑ ", 8, em),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (S) => m(M, 1)
            }, " ↓ ", 8, tm),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (S) => v(M)
            }, " Remove ", 8, am)
          ])
        ]),
        o("div", nm, [
          (t(!0), n(A, null, L(i.value[$.type]?.fields ?? [], (S) => (t(), T(Ye, {
            key: S.key,
            field: S,
            value: $.data[S.key] ?? null,
            error: e.errors?.[S.key],
            processing: e.disabled,
            onChange: (B) => g(M, S.key, B)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", lm, [
        (t(!0), n(A, null, L(e.blocks, ($) => (t(), n("button", {
          key: $.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (M) => c($.type)
        }, " + " + f($.label), 9, om))), 128)),
        d.value ? (t(), n("span", sm, f(e.maxBlocks) + " is the maximum here. ", 1)) : y("", !0)
      ])
    ]));
  }
}), rm = ["name", "value", "checked", "disabled", "onChange"], im = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, dm = /* @__PURE__ */ O({
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
      (t(!0), n(A, null, L(e.options, (u) => (t(), n("label", {
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
        }, null, 40, rm),
        N(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", im, " Nothing to choose from yet. ")) : y("", !0)
    ], 2));
  }
}), um = ["value", "checked", "disabled", "onChange"], cm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, fm = /* @__PURE__ */ O({
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
    function d(c) {
      r(
        "update:modelValue",
        i(c) ? s.value.filter((v) => v != c.value) : [...s.value, c.value]
      );
    }
    const u = x(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (c, v) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: se(u.value)
    }, [
      (t(!0), n(A, null, L(e.options, (m) => (t(), n("label", {
        key: String(m.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: m.value,
          checked: i(m),
          disabled: e.disabled,
          onChange: (g) => d(m)
        }, null, 40, um),
        N(" " + f(m.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", cm, " Nothing to choose from yet. ")) : y("", !0)
    ], 4));
  }
}), mm = { class: "flex flex-col gap-1.5" }, pm = ["aria-label", "onClick"], vm = ["placeholder", "disabled", "maxlength"], gm = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, hm = ["onClick"], bm = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, xm = /* @__PURE__ */ O({
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
    return (g, C) => (t(), n("div", mm, [
      o("div", {
        class: P(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(A, null, L(i.value, (k, $) => (t(), n("span", {
          key: `${k}-${$}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(f(k) + " ", 1),
          e.disabled ? y("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${k}`,
            onClick: (M) => v($)
          }, " × ", 8, pm))
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
        }, null, 40, vm), [
          [_e, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", gm, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(A, null, L(u.value, (k) => (t(), n("button", {
          key: k,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: ($) => c(k)
        }, f(k), 9, hm))), 128))
      ])) : y("", !0),
      d.value ? (t(), n("p", bm, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : y("", !0)
    ]));
  }
}), ym = 4.5, ua = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Ta(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function St(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Tt(e) {
  const [l, a, r] = Ta(e);
  return 0.2126 * St(l) + 0.7152 * St(a) + 0.0722 * St(r);
}
function Da(e, l) {
  const a = Tt(e), r = Tt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function km(e, l, a) {
  if (!ua.test(e) || !ua.test(l))
    return e;
  const r = Tt(l) > 0.5, s = r ? 0 : 255;
  let i = Ta(e);
  for (let d = 0; d <= 20; d++) {
    const u = $m(i);
    if (Da(u, l) >= a)
      return u;
    i = i.map((c) => c + (s - c) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function $m(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const wm = { class: "flex flex-col gap-2" }, Cm = { class: "flex items-center gap-2" }, Sm = {
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
}, Mm = ["value", "disabled", "aria-label"], Bm = ["value", "disabled", "placeholder"], _m = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Pm = ["aria-label", "title", "onClick"], zm = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Am = /* @__PURE__ */ O({
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
    const v = x(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Da(i.value, a.field.contrastBackground)), m = x(() => a.field.contrastMinRatio ?? ym), g = x(() => v.value !== null && v.value < m.value);
    function C() {
      a.field.contrastBackground && r(
        "update:modelValue",
        km(i.value, a.field.contrastBackground, m.value)
      );
    }
    return (k, $) => (t(), n("div", wm, [
      o("div", Cm, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: $[0] || ($[0] = (M) => r("update:modelValue", M.target.value))
        }, null, 40, Mm)) : (t(), n("span", Sm)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: c
        }, null, 40, Bm)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", _m, [
        (t(!0), n(A, null, L(e.field.presets, (M) => (t(), n("button", {
          key: M,
          type: "button",
          class: P(["size-6 rounded border", i.value.toLowerCase() === M.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: M }),
          "aria-label": M,
          title: M,
          onClick: (S) => r("update:modelValue", M.toLowerCase())
        }, null, 14, Pm))), 128))
      ])) : y("", !0),
      g.value ? (t(), n("p", zm, [
        o("span", null, " This fails contrast at " + f(v.value.toFixed(1)) + ":1 - it needs at least " + f(m.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? y("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : y("", !0)
    ]));
  }
}), Om = ["aria-disabled"], jm = /* @__PURE__ */ O({
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
    const c = x(() => {
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
    }, null, 12, Om));
  }
}), Lm = { class: "flex flex-col gap-2" }, Vm = { class: "text-muted-foreground text-xs font-normal" }, Tm = /* @__PURE__ */ O({
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
    return (u, c) => (t(), n("div", Lm, [
      D(jm, {
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
      o("p", Vm, [
        N(" Click the map to set " + f(i.value) + " / " + f(d.value) + " ", 1),
        s.value ? (t(), n(A, { key: 0 }, [
          N(" (" + f(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + f(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : y("", !0)
      ])
    ]));
  }
}), Dm = { class: "flex flex-col gap-2" }, Im = ["width", "height"], Em = ["value", "disabled"], Fm = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Nm = /* @__PURE__ */ O({
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
    }), d = x(() => a.field.size ?? 160);
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
    }), (c, v) => (t(), n("div", Dm, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, Im),
      e.field.from ? (t(), n("p", Fm, "From " + f(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: v[0] || (v[0] = (m) => r("update:modelValue", m.target.value))
      }, null, 40, Em))
    ]));
  }
}), Rm = { class: "flex flex-col gap-2" }, Um = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, Hm = ["aria-label"], Km = {
  key: 0,
  class: "text-destructive text-xs"
}, qm = ["value", "disabled"], Gm = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, Wm = /* @__PURE__ */ O({
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
        const v = a.values?.[a.field.from];
        return v == null ? "" : String(v);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), u = x(() => (a.field.format ?? "CODE128").toUpperCase());
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
    }), (v, m) => (t(), n("div", Rm, [
      o("div", Um, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, Hm))
      ]),
      i.value ? (t(), n("p", Km, f(i.value), 1)) : y("", !0),
      e.field.from ? (t(), n("p", Gm, "From " + f(e.field.from) + " (" + f(u.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: m[0] || (m[0] = (g) => r("update:modelValue", g.target.value))
      }, null, 40, qm))
    ]));
  }
}), Zm = { class: "mr-2 inline-block w-3 opacity-60" }, Jm = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Ym = /* @__PURE__ */ O({
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
      (t(!0), n(A, null, L(i.value, (c, v) => (t(), n("div", {
        key: v,
        class: P(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": c.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": c.kind === "add",
          "text-muted-foreground": c.kind === "same"
        }])
      }, [
        o("span", Zm, f(c.kind === "add" ? "+" : c.kind === "del" ? "-" : " "), 1),
        N(" " + f(c.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", Jm, "No differences.")) : y("", !0)
    ], 4));
  }
}), Xm = { class: "flex flex-col gap-3" }, Qm = { class: "flex items-center justify-between gap-2" }, ep = { class: "text-sm font-medium" }, tp = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, ap = { class: "grid grid-cols-7 gap-1" }, np = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, lp = ["title"], vC = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = R(/* @__PURE__ */ new Date()), r = x(() => a.value.getFullYear()), s = x(() => a.value.getMonth()), i = x(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = x(() => {
      const m = /* @__PURE__ */ new Map();
      for (const g of l.events ?? []) {
        const C = m.get(g.date) ?? [];
        C.push(g), m.set(g.date, C);
      }
      return m;
    }), u = x(() => {
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
    return (m, g) => (t(), n("div", Xm, [
      o("div", Qm, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: c
        }, " Prev "),
        o("p", ep, f(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: v
        }, " Next ")
      ]),
      o("div", tp, [
        (t(), n(A, null, L(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, f(C), 1)), 64))
      ]),
      o("div", ap, [
        (t(!0), n(A, null, L(u.value, (C) => (t(), n("div", {
          key: C.key,
          class: P(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), n("p", np, f(C.day), 1)) : y("", !0),
          (t(!0), n(A, null, L(C.events.slice(0, 3), (k, $) => (t(), n("p", {
            key: `${C.key}-${$}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: k.label
          }, f(k.label), 9, lp))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), op = { class: "flex items-center gap-3" }, sp = ["min", "max", "step", "value", "disabled", "aria-label"], rp = { class: "flex shrink-0 items-center gap-1" }, ip = ["min", "max", "step", "value", "disabled"], dp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, up = /* @__PURE__ */ O({
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
      const m = Number(a.modelValue);
      return Number.isFinite(m) ? m : s.value;
    }), c = x(
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
    return (m, g) => (t(), n("div", op, [
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
      }, null, 40, sp),
      o("div", rp, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: c.value ? "" : u.value,
          disabled: e.disabled,
          onInput: g[1] || (g[1] = (C) => v(C.target.value))
        }, null, 40, ip),
        e.field.unit ? (t(), n("span", dp, f(e.field.unit), 1)) : y("", !0)
      ])
    ]));
  }
}), dt = /* @__PURE__ */ new Map();
function Mt(e, l) {
  dt.set(e, l);
}
function cp(e) {
  return dt.get(e);
}
function gC(e) {
  return dt.has(e);
}
function fp() {
  return [...dt.keys()].sort();
}
function hC() {
  dt.clear();
}
const mp = ["name", "value", "checked", "disabled", "onChange"], pp = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, vp = { class: "whitespace-nowrap" }, gp = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, hp = ["name", "value", "checked", "disabled", "onChange"], bp = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, xp = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, yp = { class: "text-center text-xs font-medium" }, kp = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, $p = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, wp = /* @__PURE__ */ O({
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
      () => a.field.preview ? cp(a.field.preview) : void 0
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
    function c(v) {
      return a.modelValue != null && v.value == a.modelValue;
    }
    return (v, m) => d.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: P(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(A, null, L(e.options, (g) => (t(), n("label", {
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
        }, null, 40, mp),
        m[0] || (m[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", pp, [
          (t(), T(Be(s.value), {
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"]))
        ])) : y("", !0),
        o("span", vp, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", gp, " Nothing to choose from yet. ")) : y("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: P(["grid gap-3", u.value])
    }, [
      (t(!0), n(A, null, L(e.options, (g) => (t(), n("label", {
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
        }, null, 40, hp),
        m[1] || (m[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", bp, [
          s.value ? (t(), T(Be(s.value), {
            key: 0,
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", xp, " no preview ")) : y("", !0)
        ]),
        o("span", yp, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", kp, " Nothing to choose from yet. ")) : y("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", $p, [
        m[2] || (m[2] = N(" No preview registered for ", -1)),
        o("code", null, f(e.field.preview), 1),
        N(". Registered: " + f(b(fp)().join(", ") || "none") + ". ", 1)
      ])) : y("", !0)
    ], 2));
  }
}), Cp = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Sp = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Cp, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Mp = { class: "flex flex-col items-center gap-1 text-center" }, Bp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Ia = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Mp, [
      o("div", {
        class: P(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: a.value, color: a.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Bp, f(e.caption), 1)) : y("", !0)
    ]));
  }
}), _p = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Pp = { class: "flex items-center gap-3" }, zp = ["src"], Ap = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Op = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, jp = {
  key: 0,
  class: "text-right text-sm"
}, Lp = { class: "text-neutral-500" }, Vp = { class: "tabular-nums" }, Tp = { key: 1 }, Dp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Ip = { class: "mt-2 font-medium" }, Ep = { key: 2 }, Fp = { class: "w-full text-sm" }, Np = { class: "w-full py-3 pr-2" }, Rp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Up = { key: 0 }, Hp = ["colspan"], Kp = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, qp = { class: "w-64 text-sm" }, Gp = { class: "tabular-nums" }, Wp = {
  key: 3,
  class: "py-2"
}, Zp = { key: 4 }, Jp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Yp = { class: "mt-2 flex flex-col gap-1 text-sm" }, Xp = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Qp = { key: 0 }, ev = {
  key: 1,
  class: "mt-1"
}, tv = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, av = /* @__PURE__ */ O({
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
    return (c, v) => (t(), n("article", _p, [
      o("div", Pp, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, zp)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: a() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), n(A, null, L(e.document.blocks, (m, g) => (t(), n(A, { key: g }, [
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
            m.subtitle ? (t(), n("p", Ap, f(m.subtitle), 1)) : y("", !0),
            m.reference ? (t(), n("p", Op, f(m.reference), 1)) : y("", !0)
          ]),
          r(m).length ? (t(), n("dl", jp, [
            (t(!0), n(A, null, L(r(m), (C, k) => (t(), n("div", {
              key: k,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Lp, f(C.label), 1),
              o("dd", Vp, f(C.value), 1)
            ]))), 128))
          ])) : y("", !0)
        ], 4)) : m.type === "party" ? (t(), n("section", Tp, [
          o("h2", Dp, f(m.heading), 1),
          o("p", Ip, f(m.name), 1),
          (t(!0), n(A, null, L(d(m.lines), (C, k) => (t(), n("p", {
            key: k,
            class: "text-sm text-neutral-600"
          }, f(C), 1))), 128))
        ])) : m.type === "lines" ? (t(), n("section", Ep, [
          o("table", Fp, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: a() })
              }, [
                (t(!0), n(A, null, L(d(m.columns), (C, k) => (t(), n("th", {
                  key: k,
                  class: P(["pb-2 font-medium", k > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(A, null, L(s(m), (C, k) => (t(), n("tr", {
                key: k,
                class: "border-b border-neutral-200"
              }, [
                o("td", Np, [
                  o("p", null, f(C.description), 1),
                  C.detail ? (t(), n("p", Rp, f(C.detail), 1)) : y("", !0)
                ]),
                (t(!0), n(A, null, L(C.cells, ($, M) => (t(), n("td", {
                  key: M,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f($), 1))), 128))
              ]))), 128)),
              s(m).length === 0 ? (t(), n("tr", Up, [
                o("td", {
                  colspan: d(m.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(m.empty), 9, Hp)
              ])) : y("", !0)
            ])
          ]),
          i(m).length ? (t(), n("div", Kp, [
            o("dl", qp, [
              (t(!0), n(A, null, L(i(m), (C, k) => (t(), n("div", {
                key: k,
                class: P([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(C.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: P(C.strong ? "" : "text-neutral-600")
                }, f(C.label), 3),
                o("dd", Gp, f(C.value), 1)
              ], 6))), 128))
            ])
          ])) : y("", !0)
        ])) : m.type === "code" ? (t(), n("section", Wp, [
          D(Ia, {
            code: u(m.code),
            caption: u(m.caption),
            style: se(u(m.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : m.type === "steps" ? (t(), n("section", Zp, [
          o("h2", Jp, f(m.heading), 1),
          o("ol", Yp, [
            (t(!0), n(A, null, L(d(m.items), (C, k) => (t(), n("li", {
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
          class: P(["text-sm", m.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(m.emphasis ? { color: a() } : void 0)
        }, f(m.text), 7)) : m.type === "footer" ? (t(), n("footer", Xp, [
          m.text ? (t(), n("p", Qp, f(m.text), 1)) : y("", !0),
          d(m.contacts).length ? (t(), n("p", ev, f(d(m.contacts).join(" · ")), 1)) : y("", !0)
        ])) : (t(), n("p", tv, " This document contains a “" + f(m.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), nv = ["aria-label", "title"], lv = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ov = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, bC = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Aa(), r = x(() => l.value.theme === "dark");
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
      (t(), n("svg", lv, [
        r.value ? (t(), n(A, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", ov))
      ]))
    ], 8, nv));
  }
}), sv = ["width", "height"], rv = { key: 0 }, iv = ["x1", "x2", "y1", "y2"], dv = ["x", "y"], uv = ["x1", "x2", "y1", "y2"], cv = ["x", "y"], fv = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], mv = ["x", "y", "width", "height", "fill", "fill-opacity"], pv = ["x", "y"], vv = ["x", "y"], gv = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, hv = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, bv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, xv = { class: "text-xs font-semibold tabular-nums" }, yv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, kv = { class: "text-muted-foreground" }, ca = 5.6, xC = /* @__PURE__ */ O({
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
    ], m = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, V) => ({
      ...F,
      color: F.color ?? v[V % v.length]
    }))), g = x(() => m.value[0]?.points.map((_) => _.label) ?? []), C = x(() => g.value.length), k = x(() => l.orientation === "horizontal"), $ = x(() => Math.max(0, ...g.value.map((_) => _.length))), M = x(() => {
      if (!k.value)
        return l.showAxis ? 44 : 8;
      const _ = $.value * ca + 16;
      return Math.round(Math.min(Math.max(60, _), d.value * 0.4));
    }), S = x(() => Math.max(4, Math.floor((M.value - 16) / ca)));
    function B(_) {
      return _.length <= S.value ? _ : `${_.slice(0, S.value - 1)}…`;
    }
    const p = x(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: M.value
    })), h = x(() => ({
      w: Math.max(1, d.value - p.value.left - p.value.right),
      h: Math.max(1, l.height - p.value.top - p.value.bottom)
    })), w = (_) => l.format ? l.format(_) : z(_);
    function z(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    const E = x(() => {
      const _ = g.value.map(
        (ge, xe) => l.stacked ? m.value.reduce((le, X) => le + Math.max(0, X.points[xe]?.value ?? 0), 0) : Math.max(...m.value.map((le) => le.points[xe]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * V) ?? 10) * V;
    }), I = x(
      () => (k.value ? h.value.h : h.value.w) / Math.max(1, C.value)
    ), te = x(() => I.value * 0.68), H = x(
      () => l.stacked || m.value.length <= 1 ? te.value : te.value / m.value.length
    ), K = x(() => {
      const _ = [], F = new Array(C.value).fill(0);
      return m.value.forEach((V, J) => {
        V.points.forEach((ge, xe) => {
          const X = Math.max(0, ge.value) / E.value * (k.value ? h.value.w : h.value.h), ne = (k.value ? p.value.top : p.value.left) + xe * I.value + (I.value - te.value) / 2, Ce = l.stacked ? 0 : J * H.value;
          _.push(
            k.value ? {
              x: p.value.left + F[xe],
              y: ne + Ce,
              w: X,
              h: Math.max(0, H.value - 2),
              color: s(ge.value, V.color),
              label: ge.label,
              name: V.name,
              value: ge.value,
              index: xe
            } : {
              x: ne + Ce,
              y: p.value.top + h.value.h - X - F[xe],
              w: Math.max(0, H.value - 2),
              h: X,
              color: s(ge.value, V.color),
              label: ge.label,
              name: V.name,
              value: ge.value,
              index: xe
            }
          ), l.stacked && (F[xe] += X);
        });
      }), _;
    }), G = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        value: E.value * (k.value ? _ : 1 - _),
        x: p.value.left + h.value.w * _,
        y: p.value.top + h.value.h * _
      }))
    ), oe = x(() => Math.max(1, Math.ceil(C.value / (k.value ? 14 : 10))));
    function ae(_) {
      return _ === C.value - 1 || _ % oe.value === 0;
    }
    function Z(_) {
      return (k.value ? p.value.top : p.value.left) + _ * I.value + I.value / 2;
    }
    const q = x(() => u.value === null ? null : {
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
      }, " No data ", 4)) : (t(), n(A, { key: 1 }, [
        (t(), n("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: F[0] || (F[0] = (V) => u.value = null)
        }, [
          e.showAxis ? (t(), n("g", rv, [
            k.value ? (t(), n(A, { key: 0 }, [
              (t(!0), n(A, null, L(G.value, (V) => (t(), n("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: p.value.top,
                y2: p.value.top + h.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, iv))), 128)),
              (t(!0), n(A, null, L(G.value, (V) => (t(), n("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(z(V.value)), 9, dv))), 128))
            ], 64)) : (t(), n(A, { key: 1 }, [
              (t(!0), n(A, null, L(G.value, (V) => (t(), n("line", {
                key: `g-${V.y}`,
                x1: p.value.left,
                x2: d.value - p.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, uv))), 128)),
              (t(!0), n(A, null, L(G.value, (V) => (t(), n("text", {
                key: `gt-${V.y}`,
                x: p.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(z(V.value)), 9, cv))), 128))
            ], 64))
          ])) : y("", !0),
          (t(!0), n(A, null, L(g.value, (V, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: k.value ? p.value.left : p.value.left + J * I.value,
            y: k.value ? p.value.top + J * I.value : p.value.top,
            width: k.value ? h.value.w : I.value,
            height: k.value ? I.value : h.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === J ? 0.4 : 0,
            onMouseenter: (ge) => u.value = J
          }, null, 40, fv))), 128)),
          (t(!0), n(A, null, L(K.value, (V, J) => (t(), n("rect", {
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
          }, null, 8, mv))), 128)),
          k.value ? (t(!0), n(A, { key: 1 }, L(g.value, (V, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: p.value.left - 8,
            y: Z(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(f(B(V)) + " ", 1),
            o("title", null, f(V), 1)
          ], 8, pv)), [
            [He, ae(J)]
          ])), 128)) : (t(!0), n(A, { key: 2 }, L(g.value, (V, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: Z(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(V), 9, vv)), [
            [He, ae(J)]
          ])), 128))
        ], 40, sv)),
        q.value ? (t(), n("div", gv, [
          o("p", hv, f(q.value.label), 1),
          (t(!0), n(A, null, L(q.value.rows, (V, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", bv, f(V.name || "Value"), 1),
            o("span", xv, f(w(V.value)), 1)
          ]))), 128))
        ])) : y("", !0),
        e.showLegend && m.value.length > 1 ? (t(), n("div", yv, [
          (t(!0), n(A, null, L(m.value, (V, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", kv, f(V.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), $v = ["width", "height"], wv = ["id"], Cv = ["stop-color"], Sv = ["stop-color"], Mv = { key: 0 }, Bv = ["x1", "x2", "y1", "y2"], _v = ["x", "y"], Pv = ["x", "y"], zv = ["x1", "x2", "y1", "y2"], Av = ["d", "fill"], Ov = ["d", "stroke", "stroke-dasharray"], jv = ["cx", "cy", "fill"], Lv = { key: 1 }, Vv = ["x1", "x2", "y1", "y2"], Tv = ["cx", "cy", "fill"], Dv = ["x", "y"], Iv = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Ev = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Fv = { class: "text-xs font-semibold tabular-nums" }, Nv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Rv = { class: "text-muted-foreground" }, Uv = /* @__PURE__ */ O({
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
    ], c = Math.random().toString(36).slice(2, 9), v = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, V) => ({
      ...F,
      color: F.color ?? u[V % u.length]
    }))), m = x(() => v.value[0]?.points.map((_) => _.label) ?? []), g = x(() => m.value.length), C = x(() => ({
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
    const S = x(
      () => M(
        v.value.filter((_) => _.axis !== "right").flatMap((_) => _.points.map((F) => F.value))
      )
    ), B = x(
      () => M(
        v.value.filter((_) => _.axis === "right").flatMap((_) => _.points.map((F) => F.value))
      )
    ), p = x(() => ({
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
    const z = x(
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
      let xe = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let le = 0; le < F - 1; le++) {
        const X = V[le] / 3;
        xe += ` C${(_[le].x + X).toFixed(2)},${(_[le].y + ge[le] * X).toFixed(2)} ${(_[le + 1].x - X).toFixed(2)},${(_[le + 1].y - ge[le + 1] * X).toFixed(2)} ${_[le + 1].x.toFixed(2)},${_[le + 1].y.toFixed(2)}`;
      }
      return xe;
    }
    function te(_, F) {
      if (F.length === 0)
        return "";
      const V = C.value.top + p.value.h;
      return `${_} L${F[F.length - 1].x.toFixed(2)},${V} L${F[0].x.toFixed(2)},${V} Z`;
    }
    const H = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: C.value.top + p.value.h * _,
        value: S.value * (1 - _)
      }))
    ), K = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: C.value.top + p.value.h * _,
        value: B.value * (1 - _)
      }))
    ), G = x(() => Math.max(1, Math.ceil(g.value / 8)));
    function oe(_) {
      return _ === g.value - 1 || _ % G.value === 0;
    }
    function ae(_) {
      const F = _.currentTarget.getBoundingClientRect(), V = _.clientX - F.left - C.value.left, J = g.value <= 1 ? 1 : p.value.w / (g.value - 1);
      i.value = Math.min(g.value - 1, Math.max(0, Math.round(V / J)));
    }
    const Z = x(() => {
      if (i.value === null || g.value === 0)
        return null;
      const _ = i.value;
      return {
        i: _,
        x: h(_),
        label: m.value[_],
        rows: z.value.map((F) => ({
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
            (t(!0), n(A, null, L(z.value, (V, J) => (t(), n("linearGradient", {
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
              }, null, 8, Cv),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, Sv)
            ], 8, wv))), 128))
          ]),
          e.showAxis ? (t(), n("g", Mv, [
            (t(!0), n(A, null, L(H.value, (V) => (t(), n("line", {
              key: V.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Bv))), 128)),
            (t(!0), n(A, null, L(H.value, (V) => (t(), n("text", {
              key: `t-${V.y}`,
              x: C.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(V.value)), 9, _v))), 128)),
            a.value ? (t(!0), n(A, { key: 0 }, L(K.value, (V) => (t(), n("text", {
              key: `rt-${V.y}`,
              x: s.value - C.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(V.value)), 9, Pv))), 128)) : y("", !0)
          ])) : y("", !0),
          (t(!0), n(A, null, L(m.value, (V, J) => pe((t(), n("line", {
            key: `v-${J}`,
            x1: h(J),
            x2: h(J),
            y1: C.value.top,
            y2: C.value.top + p.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, zv)), [
            [He, oe(J)]
          ])), 128)),
          (t(!0), n(A, null, L(z.value, (V, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            V.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${b(c)}-${J})`
            }, null, 8, Av)) : y("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, Ov),
            V.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, jv)) : y("", !0)
          ]))), 128)),
          Z.value ? (t(), n("g", Lv, [
            o("line", {
              x1: Z.value.x,
              x2: Z.value.x,
              y1: C.value.top,
              y2: C.value.top + p.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Vv),
            (t(!0), n(A, null, L(Z.value.rows, (V, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: Z.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Tv))), 128))
          ])) : y("", !0),
          (t(!0), n(A, null, L(m.value, (V, J) => pe((t(), n("text", {
            key: `x-${J}`,
            x: h(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(V), 9, Dv)), [
            [He, oe(J)]
          ])), 128))
        ], 40, $v)),
        Z.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(q.value)
        }, [
          o("p", Iv, f(Z.value.label), 1),
          (t(!0), n(A, null, L(Z.value.rows, (V, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Ev, f(V.name || "Value"), 1),
            o("span", Fv, f(k(V.value)), 1)
          ]))), 128))
        ], 4)) : y("", !0),
        e.showLegend && v.value.length > 1 ? (t(), n("div", Nv, [
          (t(!0), n(A, null, L(z.value, (V, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Rv, f(V.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Hv = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Kv = { class: "text-muted-foreground text-[11px] capitalize" }, qv = { class: "text-sm font-semibold tabular-nums" }, Gv = {
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
    return (l, a) => (t(), n("div", Hv, [
      o("p", Kv, f(e.label), 1),
      o("p", qv, [
        N(f(e.value) + " ", 1),
        e.share ? (t(), n("span", Gv, " (" + f(e.share) + ") ", 1)) : y("", !0)
      ])
    ]));
  }
}), Wv = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Zv = ["width", "height", "viewBox", "aria-label"], Jv = ["d", "fill", "fill-opacity", "onMouseenter"], Yv = ["x", "y"], Xv = ["x", "y"], Qv = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, eg = ["onMouseenter"], tg = { class: "min-w-0 flex-1 truncate capitalize" }, ag = { class: "tabular-nums font-medium" }, ng = { class: "text-muted-foreground w-9 text-right tabular-nums" }, yC = /* @__PURE__ */ O({
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
    function c(S) {
      return a[S % a.length];
    }
    function v(S) {
      return 1 - Math.min(0.55, Math.floor(S / a.length) * 0.28);
    }
    const m = x(() => {
      if (r.value <= 0)
        return [];
      const S = i.value / 2;
      let B = -Math.PI / 2;
      return l.data.map((p, h) => {
        const w = p.value / r.value, z = w * Math.PI * 2, E = B, I = B + z;
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
      const z = p - B > Math.PI ? 1 : 0;
      return w <= 0 ? `M${S},${S} L${g(S, B, h)} A${h},${h} 0 ${z} 1 ${g(S, p, h)} Z` : [
        `M${g(S, B, h)}`,
        `A${h},${h} 0 ${z} 1 ${g(S, p, h)}`,
        `L${g(S, p, w)}`,
        `A${w},${w} 0 ${z} 0 ${g(S, B, w)}`,
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
    }, " No data ", 4)) : (t(), n("div", Wv, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${$(r.value)}`
      }, [
        (t(!0), n(A, null, L(m.value, (p, h) => (t(), n("path", {
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
        }, null, 40, Jv))), 128)),
        e.type === "doughnut" ? (t(), n(A, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f($(s.value === null ? r.value : m.value[s.value].value)), 9, Yv),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : m.value[s.value].label), 9, Xv)
        ], 64)) : y("", !0)
      ], 8, Zv)),
      o("ul", Qv, [
        (t(!0), n(A, null, L(m.value, (p, h) => (t(), n("li", {
          key: h,
          class: P(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === h ? "bg-muted" : ""]),
          onMouseenter: (w) => s.value = h,
          onMouseleave: B[1] || (B[1] = (w) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: p.colour, opacity: p.opacity })
          }, null, 4),
          o("span", tg, f(p.label), 1),
          o("span", ag, f($(p.value)), 1),
          o("span", ng, f(M(p.share)), 1)
        ], 42, eg))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(ut, {
        key: 0,
        label: m.value[s.value].label,
        value: $(m.value[s.value].value),
        share: M(m.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : y("", !0)
    ]));
  }
}), lg = ["width", "height", "viewBox", "aria-label"], og = { class: "text-border" }, sg = ["x1", "x2", "y1", "y2", "stroke-dasharray"], rg = { class: "fill-muted-foreground text-[10px]" }, ig = ["x", "y"], dg = ["x", "y"], ug = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], cg = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, kC = /* @__PURE__ */ O({
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
    ), c = (G, oe) => oe.color ?? a[G % a.length], v = x(() => u.value.flatMap((G) => G.points)), m = x(() => v.value.some((G) => typeof G.r == "number")), g = { top: 12, right: 16, bottom: 32, left: 48 }, C = x(() => Math.max(10, s.value - g.left - g.right)), k = x(() => Math.max(10, l.height - g.top - g.bottom));
    function $(G) {
      if (G.length === 0)
        return [0, 1];
      const oe = Math.min(...G), ae = Math.max(...G), Z = ae - oe || Math.abs(ae) || 1;
      return [oe - Z * 0.08, ae + Z * 0.08];
    }
    const M = x(() => $(v.value.map((G) => G.x))), S = x(() => $(v.value.map((G) => G.y))), B = (G) => {
      const [oe, ae] = M.value;
      return g.left + (G - oe) / (ae - oe) * C.value;
    }, p = (G) => {
      const [oe, ae] = S.value;
      return g.top + k.value - (G - oe) / (ae - oe) * k.value;
    }, h = x(() => Math.max(...v.value.map((G) => G.r ?? 0), 0));
    function w(G) {
      if (!m.value || !h.value)
        return 4;
      const oe = Math.max(0, G.r ?? 0) / h.value;
      return 3 + Math.sqrt(oe) * (l.maxRadius - 3);
    }
    function z([G, oe]) {
      return Array.from({ length: 5 }, (ae, Z) => G + (oe - G) / 4 * Z);
    }
    const E = x(() => z(M.value)), I = x(() => z(S.value)), te = (G) => l.formatX?.(G) ?? String(Math.round(G * 100) / 100), H = (G) => l.formatY?.(G) ?? String(Math.round(G * 100) / 100), K = x(() => {
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
        o("g", og, [
          (t(!0), n(A, null, L(I.value, (ae, Z) => (t(), n("line", {
            key: `gy-${Z}`,
            x1: g.left,
            x2: g.left + C.value,
            y1: p(ae),
            y2: p(ae),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Z === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, sg))), 128))
        ]),
        o("g", rg, [
          (t(!0), n(A, null, L(I.value, (ae, Z) => (t(), n("text", {
            key: `ty-${Z}`,
            x: g.left - 8,
            y: p(ae) + 3,
            "text-anchor": "end"
          }, f(H(ae)), 9, ig))), 128)),
          (t(!0), n(A, null, L(E.value, (ae, Z) => (t(), n("text", {
            key: `tx-${Z}`,
            x: B(ae),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(te(ae)), 9, dg))), 128))
        ]),
        (t(!0), n(A, null, L(u.value, (ae, Z) => (t(), n("g", {
          key: `s-${Z}`
        }, [
          (t(!0), n(A, null, L(ae.points, (q, _) => (t(), n("circle", {
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
          }, null, 40, ug))), 128))
        ]))), 128))
      ], 8, lg)),
      K.value ? (t(), T(ut, {
        key: 0,
        label: K.value.point.label ?? K.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(K.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(K.value.point.y)}`,
        share: m.value && K.value.point.r != null ? String(K.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : y("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", cg, [
        (t(!0), n(A, null, L(u.value, (ae, Z) => (t(), n("span", {
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
      ])) : y("", !0)
    ], 512));
  }
}), fg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, mg = ["width", "height", "viewBox"], pg = ["points"], vg = ["x1", "y1", "x2", "y2"], gg = ["points", "fill", "stroke"], hg = ["cx", "cy", "fill", "onMouseenter"], bg = ["x", "y", "text-anchor"], xg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, yg = { class: "truncate" }, $C = /* @__PURE__ */ O({
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
      () => l.series.map((p, h) => ({
        ...p,
        color: p.color ?? a[h % a.length]
      }))
    ), s = x(() => r.value[0]?.points.map((p) => p.label) ?? []), i = x(() => s.value.length), d = x(() => l.height), u = x(() => d.value / 2), c = x(() => d.value / 2 - 34), v = x(() => {
      const p = Math.max(...r.value.flatMap((z) => z.points.map((E) => E.value)), 0);
      if (p <= 0)
        return 1;
      const h = 10 ** Math.floor(Math.log10(p));
      return ([1, 2, 2.5, 5, 10].find((z) => p <= z * h) ?? 10) * h;
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
        const z = g(w, p);
        return `${z.x.toFixed(2)},${z.y.toFixed(2)}`;
      }).join(" ");
    }
    const k = x(() => [0.25, 0.5, 0.75, 1].map((p) => ({ f: p, points: C(p) }))), $ = x(
      () => r.value.map((p) => {
        const h = p.points.map((w) => Math.max(0, w.value) / v.value);
        return {
          name: p.name,
          color: p.color,
          values: p.points,
          outline: h.map((w, z) => {
            const E = g(z, w);
            return `${E.x.toFixed(2)},${E.y.toFixed(2)}`;
          }).join(" "),
          dots: h.map((w, z) => g(z, w))
        };
      })
    ), M = x(
      () => s.value.map((p, h) => {
        const w = m(h), z = u.value + Math.cos(w) * (c.value + 14), E = u.value + Math.sin(w) * (c.value + 14), I = Math.cos(w);
        return {
          label: p,
          x: z,
          y: E + 3,
          anchor: Math.abs(I) < 0.2 ? "middle" : I > 0 ? "start" : "end"
        };
      })
    ), S = R(null), B = (p) => l.format ? l.format(p) : new Intl.NumberFormat().format(p);
    return (p, h) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", fg, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(A, null, L(k.value, (w) => (t(), n("polygon", {
          key: w.f,
          points: w.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, pg))), 128)),
        (t(!0), n(A, null, L(s.value, (w, z) => (t(), n("line", {
          key: `spoke-${z}`,
          x1: u.value,
          y1: u.value,
          x2: g(z, 1).x,
          y2: g(z, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, vg))), 128)),
        (t(!0), n(A, null, L($.value, (w, z) => (t(), n("g", {
          key: `s-${z}`
        }, [
          o("polygon", {
            points: w.outline,
            fill: w.color,
            "fill-opacity": "0.16",
            stroke: w.color,
            "stroke-width": "2"
          }, null, 8, gg),
          (t(!0), n(A, null, L(w.dots, (E, I) => (t(), n("circle", {
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
          }, null, 40, hg))), 128))
        ]))), 128)),
        (t(!0), n(A, null, L(M.value, (w, z) => (t(), n("text", {
          key: `l-${z}`,
          x: w.x,
          y: w.y,
          "text-anchor": w.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(w.label), 9, bg))), 128))
      ], 8, mg)),
      e.showLegend ? (t(), n("ul", xg, [
        (t(!0), n(A, null, L(r.value, (w, z) => (t(), n("li", {
          key: z,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: w.color })
          }, null, 4),
          o("span", yg, f(w.name), 1)
        ]))), 128))
      ])) : y("", !0),
      S.value ? (t(), T(ut, {
        key: 1,
        label: `${S.value.series} — ${S.value.axis}`,
        value: B(S.value.value)
      }, null, 8, ["label", "value"])) : y("", !0)
    ]));
  }
}), kg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, $g = ["width", "height", "viewBox"], wg = ["cx", "cy", "r"], Cg = ["d", "fill", "fill-opacity", "onMouseenter"], Sg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Mg = { class: "min-w-0 flex-1 truncate capitalize" }, Bg = { class: "font-medium tabular-nums" }, wC = /* @__PURE__ */ O({
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
    ], r = R(null), s = x(() => l.height), i = x(() => s.value / 2), d = x(() => s.value / 2 - 6), u = x(() => Math.max(...l.data.map((C) => Math.max(0, C.value)), 0)), c = x(() => {
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
    const m = x(() => [0.5, 0.75, 1].map((C) => d.value * C)), g = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, k) => c.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", kg, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(A, null, L(m.value, ($) => (t(), n("circle", {
          key: $,
          cx: i.value,
          cy: i.value,
          r: $,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, wg))), 128)),
        (t(!0), n(A, null, L(c.value, ($, M) => (t(), n("path", {
          key: M,
          d: $.path,
          fill: $.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === M ? 0.75 : 0.3,
          onMouseenter: (S) => r.value = M,
          onMouseleave: k[0] || (k[0] = (S) => r.value = null)
        }, null, 40, Cg))), 128))
      ], 8, $g)),
      e.showLegend ? (t(), n("ul", Sg, [
        (t(!0), n(A, null, L(c.value, ($, M) => (t(), n("li", {
          key: M,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: $.color })
          }, null, 4),
          o("span", Mg, f($.label), 1),
          o("span", Bg, f(g($.value)), 1)
        ]))), 128))
      ])) : y("", !0),
      r.value !== null ? (t(), T(ut, {
        key: 1,
        label: c.value[r.value].label,
        value: g(c.value[r.value].value)
      }, null, 8, ["label", "value"])) : y("", !0)
    ]));
  }
}), _g = ["width", "height"], Pg = ["x1", "x2", "y1", "y2"], zg = ["x", "y"], Ag = ["x", "y"], Og = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], jg = ["x", "y", "width", "height", "fill", "fill-opacity"], Lg = ["d", "stroke"], Vg = ["cx", "cy", "fill"], Tg = ["x", "y"], Dg = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Ig = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Eg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Fg = { class: "text-xs font-semibold tabular-nums" }, Ng = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Rg = { class: "text-muted-foreground" }, CC = /* @__PURE__ */ O({
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
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], c = x(
      () => l.bars.map((Z, q) => ({
        ...Z,
        color: Z.color ?? d[q % d.length]
      }))
    ), v = x(
      () => l.lines.map((Z, q) => ({
        ...Z,
        color: Z.color ?? u[q % u.length]
      }))
    ), m = x(
      () => c.value[0]?.points.map((Z) => Z.label) ?? v.value[0]?.points.map((Z) => Z.label) ?? []
    ), g = x(() => m.value.length), C = x(() => l.lineAxis === "right"), k = x(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), $ = x(() => ({
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
    const S = x(
      () => M([
        ...c.value.flatMap((Z) => Z.points.map((q) => q.value)),
        ...C.value ? [] : v.value.flatMap((Z) => Z.points.map((q) => q.value))
      ])
    ), B = x(
      () => C.value ? M(v.value.flatMap((Z) => Z.points.map((q) => q.value))) : S.value
    ), p = x(() => $.value.w / Math.max(1, g.value)), h = x(() => p.value * 0.6), w = x(() => h.value / Math.max(1, c.value.length));
    function z(Z) {
      return k.value.left + Z * p.value + p.value / 2;
    }
    const E = x(
      () => c.value.flatMap(
        (Z, q) => Z.points.map((_, F) => {
          const V = Math.max(0, _.value) / S.value * $.value.h;
          return {
            x: z(F) - h.value / 2 + q * w.value,
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
    ), I = x(
      () => v.value.map((Z) => {
        const q = Z.points.map((_, F) => ({
          x: z(F),
          y: k.value.top + $.value.h - Math.max(0, _.value) / B.value * $.value.h,
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
        y: k.value.top + $.value.h * Z,
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
          (t(!0), n(A, null, L(te.value, (_) => (t(), n("line", {
            key: `g-${_.y}`,
            x1: k.value.left,
            x2: r.value - k.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Pg))), 128)),
          (t(!0), n(A, null, L(te.value, (_) => (t(), n("text", {
            key: `lt-${_.y}`,
            x: k.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.left)), 9, zg))), 128)),
          C.value ? (t(!0), n(A, { key: 0 }, L(te.value, (_) => (t(), n("text", {
            key: `rt-${_.y}`,
            x: r.value - k.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.right)), 9, Ag))), 128)) : y("", !0),
          (t(!0), n(A, null, L(m.value, (_, F) => (t(), n("rect", {
            key: `hit-${F}`,
            x: k.value.left + F * p.value,
            y: k.value.top,
            width: p.value,
            height: $.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (V) => s.value = F
          }, null, 40, Og))), 128)),
          (t(!0), n(A, null, L(E.value, (_, F) => (t(), n("rect", {
            key: `b-${F}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, jg))), 128)),
          (t(!0), n(A, null, L(I.value, (_, F) => (t(), n("g", {
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
            }, null, 8, Lg),
            s.value !== null && _.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Vg)) : y("", !0)
          ]))), 128)),
          (t(!0), n(A, null, L(m.value, (_, F) => pe((t(), n("text", {
            key: `x-${F}`,
            x: z(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(_), 9, Tg)), [
            [He, K(F)]
          ])), 128))
        ], 40, _g)),
        ae.value ? (t(), n("div", Dg, [
          o("p", Ig, f(ae.value.label), 1),
          (t(!0), n(A, null, L(ae.value.rows, (_, F) => (t(), n("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", Eg, f(_.name), 1),
            o("span", Fg, f(G(_.value)), 1)
          ]))), 128))
        ])) : y("", !0),
        e.showLegend ? (t(), n("div", Ng, [
          (t(!0), n(A, null, L([...c.value, ...v.value], (_, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", Rg, f(_.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Ug = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Hg = { class: "text-muted-foreground" }, Kg = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, qg = ["width", "height"], Gg = ["x", "y"], Wg = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Zg = ["x", "y"], Jg = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Yg = { class: "text-[11px] font-medium capitalize" }, Xg = { class: "text-muted-foreground text-[11px] capitalize" }, Qg = { class: "text-sm font-semibold tabular-nums" }, eh = { class: "text-muted-foreground text-xs font-normal" }, SC = /* @__PURE__ */ O({
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
    const d = x(() => l.series[0]?.points.map((h) => h.label) ?? []), u = x(() => l.series.length), c = x(() => d.value.length), v = x(() => Math.min(140, Math.max(60, r.value * 0.16))), m = x(() => Math.max(1, r.value - v.value - 8)), g = x(() => m.value / Math.max(1, c.value)), C = x(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function k(h) {
      if (h === 0)
        return "var(--muted)";
      const w = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(h / w * 100)}%, var(--muted))`;
    }
    function $(h) {
      for (let w = 0; w < l.buckets.length; w++) {
        const z = l.buckets[w].max;
        if (z === void 0 || h < z)
          return w;
      }
      return l.buckets.length - 1;
    }
    const M = x(
      () => l.series.flatMap(
        (h, w) => h.points.map((z, E) => {
          const I = $(z.value);
          return {
            row: w,
            col: E,
            x: v.value + E * g.value,
            y: 4 + w * C.value,
            w: Math.max(1, g.value - 1),
            h: Math.max(1, C.value - 4),
            colour: k(I),
            label: z.label,
            value: z.value,
            rowName: h.name,
            bucketLabel: l.buckets[I].label
          };
        })
      )
    ), S = x(() => g.value < 2), B = x(() => s.value ? M.value.find((h) => h.row === s.value.row && h.col === s.value.col) ?? null : null), p = (h) => l.format ? l.format(h) : new Intl.NumberFormat().format(h);
    return (h, w) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      u.value === 0 || c.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(A, { key: 1 }, [
        o("div", Ug, [
          (t(!0), n(A, null, L(e.buckets, (z, E) => (t(), n("span", {
            key: E,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: k(E) })
            }, null, 4),
            o("span", Hg, f(z.label), 1)
          ]))), 128))
        ]),
        S.value ? (t(), n("p", Kg, f(c.value) + " columns - too many to label individually ", 1)) : y("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: w[0] || (w[0] = (z) => s.value = null)
        }, [
          (t(!0), n(A, null, L(e.series, (z, E) => (t(), n("text", {
            key: `r-${E}`,
            x: v.value - 10,
            y: 4 + E * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(z.name), 9, Gg))), 128)),
          (t(!0), n(A, null, L(M.value, (z, E) => (t(), n("rect", {
            key: E,
            x: z.x,
            y: z.y,
            width: z.w,
            height: z.h,
            fill: z.colour,
            "fill-opacity": s.value === null || s.value.row === z.row && s.value.col === z.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (I) => s.value = { row: z.row, col: z.col }
          }, null, 40, Wg))), 128)),
          e.showColumnLabels && !S.value ? (t(!0), n(A, { key: 0 }, L(d.value, (z, E) => (t(), n("text", {
            key: `c-${E}`,
            x: v.value + E * g.value + g.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(z), 9, Zg))), 128)) : y("", !0)
        ], 40, qg)),
        B.value ? (t(), n("div", Jg, [
          o("p", Yg, f(B.value.label), 1),
          o("p", Xg, f(B.value.rowName), 1),
          o("p", Qg, [
            N(f(p(B.value.value)) + " ", 1),
            o("span", eh, "(" + f(B.value.bucketLabel) + ")", 1)
          ])
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), th = ["viewBox"], ah = { key: 0 }, nh = ["id"], lh = ["stop-color"], oh = ["stop-color"], sh = ["d", "fill"], rh = ["d", "stroke"], fa = 100, at = 30, yt = /* @__PURE__ */ O({
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
      const u = l.data.map((g) => g.value);
      if (u.length < 2)
        return [];
      const c = Math.min(...u), m = Math.max(...u) - c || 1;
      return u.map((g, C) => ({
        x: C / (u.length - 1) * fa,
        y: at - (g - c) / m * (at - 4) - 2
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
    const i = x(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? s(u) : u.map((c, v) => `${v === 0 ? "M" : "L"}${c.x.toFixed(2)},${c.y.toFixed(2)}`).join(" ");
    }), d = x(() => {
      const u = r.value;
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${at} L${u[0].x.toFixed(2)},${at} Z`;
    });
    return (u, c) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${fa} ${at}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", ah, [
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
          }, null, 8, lh),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, oh)
        ], 8, nh)
      ])) : y("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${b(a)})`
      }, null, 8, sh)) : y("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, rh)
    ], 12, th)) : y("", !0);
  }
}), ih = { class: "flex items-center gap-1 text-xs" }, dh = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, uh = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Ea = /* @__PURE__ */ O({
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
    return (d, u) => (t(), n("span", ih, [
      o("span", {
        class: P(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", dh, f(s.value), 1),
        N(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", uh, f(e.comparison), 1)) : y("", !0)
    ]));
  }
}), ch = ["data-collapsed"], fh = { class: "flex flex-wrap items-start justify-between gap-2" }, mh = { class: "flex min-w-0 items-start gap-2" }, ph = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vh = ["d"], gh = { class: "min-w-0" }, hh = { class: "text-sm font-medium" }, bh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, xh = { class: "flex shrink-0 items-center gap-1.5" }, yh = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, kh = ["aria-pressed", "onClick"], $h = ["aria-expanded", "aria-label", "title"], wh = ["aria-label"], Ch = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Sh = ["d"], Mh = /* @__PURE__ */ O({
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
    const l = e, a = Dt(), r = R(l.defaultCollapsed), s = x(() => !!l.icon && !a.icon), i = x(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), n("div", {
      class: P(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", fh, [
        o("div", mh, [
          U(d.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", ph, [
              o("path", {
                d: b(ce)(e.icon)
              }, null, 8, vh)
            ])) : y("", !0)
          ]),
          o("div", gh, [
            o("p", hh, f(e.label), 1),
            e.description ? (t(), n("p", bh, f(e.description), 1)) : y("", !0),
            U(d.$slots, "trend")
          ])
        ]),
        o("div", xh, [
          U(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", yh, [
            (t(!0), n(A, null, L(e.periods, (c) => (t(), n("button", {
              key: c.value,
              type: "button",
              class: P([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === c.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === c.value,
              onClick: (v) => d.$emit("update:period", c.value)
            }, f(c.label), 11, kh))), 128))
          ])) : y("", !0),
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
          ], 8, $h)) : y("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (c) => d.$emit("hide"))
          }, [
            (t(), n("svg", Ch, [
              o("path", {
                d: b(ce)("eye-off")
              }, null, 8, Sh)
            ]))
          ], 8, wh)) : y("", !0)
        ])
      ]),
      r.value ? y("", !0) : (t(), n("div", {
        key: 0,
        style: se(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T(Ae, {
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
    ], 10, ch));
  }
}), Bh = ["aria-pressed", "aria-label", "title"], _h = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ph = ["d"], zh = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Ah = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Oh = ["href"], jh = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lh = ["d"], Vh = ["aria-label", "onClick"], Th = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Dh = ["d"], Ih = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Eh = ["d"], Fh = {
  key: 0,
  class: "flex flex-col gap-1"
}, Nh = ["onClick"], Rh = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Uh = ["d"], Hh = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Kh = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!1), i = R(!1), d = x(
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
    return (v, m) => (t(), n(A, null, [
      D(Mh, {
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
            (t(), n("svg", _h, [
              o("path", {
                d: b(ce)(s.value ? "check" : "pencil")
              }, null, 8, Ph)
            ]))
          ], 8, Bh)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), n("div", zh, [
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
          ])) : (t(), n("div", Ah, [
            (t(!0), n(A, null, L(e.items, (g) => (t(), n("div", {
              key: g.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: g.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", jh, [
                  o("path", {
                    d: b(ce)(g.icon)
                  }, null, 8, Lh)
                ])),
                N(" " + f(g.label), 1)
              ], 8, Oh),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${g.label}`,
                onClick: (C) => u(g.id)
              }, [
                (t(), n("svg", Th, [
                  o("path", {
                    d: b(ce)("x")
                  }, null, 8, Dh)
                ]))
              ], 8, Vh)) : y("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: m[2] || (m[2] = (g) => i.value = !0)
            }, [
              (t(), n("svg", Ih, [
                o("path", {
                  d: b(ce)("plus")
                }, null, 8, Eh)
              ])),
              m[8] || (m[8] = N(" Add ", -1))
            ])) : y("", !0)
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
          d.value.length ? (t(), n("ul", Fh, [
            (t(!0), n(A, null, L(d.value, (g) => (t(), n("li", {
              key: g.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => c(g)
              }, [
                (t(), n("svg", Rh, [
                  o("path", {
                    d: b(ce)(g.icon)
                  }, null, 8, Uh)
                ])),
                N(" " + f(g.label), 1)
              ], 8, Nh)
            ]))), 128))
          ])) : (t(), n("p", Hh, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), qh = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Gh = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Wh = { class: "relative w-full max-w-xl" }, Zh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Jh = ["d"], Yh = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Xh = ["data-slot"], Qh = { class: "px-5 py-4" }, eb = { class: "mb-3 text-sm font-semibold" }, tb = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, ab = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nb = ["d"], lb = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, MC = /* @__PURE__ */ O({
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
      return typeof u == "string" ? u : va(u);
    }), s = nt({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(u) {
      return u.external === !0 || /^https?:\/\//.test(u.href);
    }
    const d = x(() => {
      const u = a.value.trim().toLowerCase();
      return l.sections.map((c) => ({
        ...c,
        links: u ? c.links.filter((v) => v.label.toLowerCase().includes(u)) : c.links
      })).filter((c) => c.links.length > 0);
    });
    return (u, c) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ge)])
    }, [
      o("header", null, [
        o("h1", qh, f(e.title), 1),
        e.description ? (t(), n("p", Gh, f(e.description), 1)) : y("", !0)
      ]),
      o("div", Wh, [
        (t(), n("svg", Zh, [
          o("path", {
            d: b(ce)("search")
          }, null, 8, Jh)
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
      d.value.length ? (t(), n("div", Yh, [
        (t(!0), n(A, null, L(d.value, (v) => (t(), n("section", {
          key: v.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${v.key}`
        }, [
          o("div", Qh, [
            o("h2", eb, f(v.title), 1),
            o("div", tb, [
              (t(!0), n(A, null, L(v.links, (m) => (t(), T(Be(i(m) ? "a" : r.value), {
                key: m.href + m.label,
                href: m.href,
                class: P(b(s)),
                target: i(m) ? "_blank" : void 0,
                rel: i(m) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), n("svg", ab, [
                    o("path", {
                      d: b(ce)(m.icon)
                    }, null, 8, nb)
                  ])),
                  N(" " + f(m.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Xh))), 128))
      ])) : (t(), n("p", lb, ' Nothing matches "' + f(a.value) + '". ', 1))
    ], 2));
  }
}), ob = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, sb = { class: "flex flex-1 flex-col gap-1 p-4" }, rb = { class: "text-muted-foreground relative text-xs font-medium" }, ib = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, db = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, ub = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, cb = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, BC = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", ob, [
      o("div", sb, [
        o("p", rb, f(e.label), 1),
        e.loading ? (t(), T(Ae, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", ib, " Could not load ")) : (t(), n("span", db, f(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Ea, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", ub, f(e.description), 1)) : y("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", cb, [
        D(yt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : y("", !0)
    ]));
  }
}), fb = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, mb = { class: "flex flex-col gap-1 p-4" }, pb = { class: "flex items-start justify-between gap-2" }, vb = { class: "text-sm font-medium" }, gb = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, hb = { class: "mt-1 flex flex-wrap items-center gap-2" }, bb = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, xb = {
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
    return (i, d) => (t(), n("div", fb, [
      o("div", mb, [
        o("div", pb, [
          o("p", vb, f(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", gb, f(e.caption), 1)) : y("", !0),
        o("div", hb, [
          e.loading ? (t(), T(Ae, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", bb, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: P(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : y("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", xb, [
        D(yt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : y("", !0)
    ]));
  }
}), yb = { class: "relative flex flex-col gap-2" }, kb = ["aria-label"], $b = ["onMouseenter"], wb = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Cb = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Sb = { class: "truncate" }, Mb = { class: "text-sm font-semibold tabular-nums" }, _C = /* @__PURE__ */ O({
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
    ], r = x(() => l.segments.reduce((v, m) => v + Math.max(0, m.value), 0)), s = x(() => Math.max(l.total ?? r.value, r.value, 1)), i = x(
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
    return (v, m) => (t(), n("div", yb, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((g) => `${g.label} ${d(g.value)}`).join(", ")
      }, [
        (t(!0), n(A, null, L(i.value, (g, C) => (t(), n("span", {
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
          onMouseenter: (k) => u.value = C,
          onMouseleave: m[0] || (m[0] = (k) => u.value = null)
        }, null, 46, $b))), 128))
      ], 12, kb),
      e.showLegend ? (t(), n("div", wb, [
        (t(!0), n(A, null, L(i.value, (g, C) => (t(), n("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", Cb, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: g.color })
            }, null, 4),
            o("span", Sb, f(g.label), 1)
          ]),
          o("span", Mb, f(d(g.value)), 1)
        ]))), 128))
      ])) : y("", !0),
      u.value !== null ? (t(), T(ut, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: c(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : y("", !0)
    ]));
  }
}), Bb = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, _b = ["data-heading"], Pb = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, zb = { class: "text-muted-foreground truncate" }, Ab = ["aria-label"], PC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", Bb, [
      (t(!0), n(A, null, L(s.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: P(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), n("div", Pb, [
          o("span", zb, f(u.label), 1),
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
          (t(!0), n(A, null, L(u.segments, (c, v) => (t(), n("span", {
            key: v,
            class: P(["h-full transition-all", r[c.tone ?? "neutral"]]),
            style: se({ width: c.width })
          }, null, 6))), 128))
        ], 8, Ab)) : y("", !0)
      ], 8, _b))), 128))
    ]));
  }
}), Ob = {
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
}, jb = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Lb(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Vb(e, l) {
  return l || (e ? Ob[Lb(e)] ?? "neutral" : "neutral");
}
function Tb(e, l) {
  return jb[Vb(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = x(() => Tb(l.status, l.tone));
    return (r, s) => (t(), T(qe, {
      variant: a.value,
      class: P(l.class)
    }, {
      default: j(() => [
        U(r.$slots, "default", {}, () => [
          N(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Db = ["data-layout"], Ib = ["src", "alt"], Eb = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Fb = ["src"], Nb = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Rb = ["onMouseenter"], Ub = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Hb = { class: "min-w-0" }, Kb = { class: "truncate text-sm font-medium" }, qb = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Gb = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Wb = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Zb = { class: "min-w-0" }, Jb = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Yb = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, Xb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qb = ["d"], e1 = ["aria-label"], t1 = /* @__PURE__ */ O({
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
    }), c = x(() => u.value[i.value] ?? u.value[0] ?? null), v = x(
      () => r.item.label.split(/\s+/).slice(0, 2).map((M) => M[0]?.toUpperCase() ?? "").join("")
    ), m = x(() => {
      const M = r.item.progress;
      if (!M)
        return null;
      const S = Math.max(M.total ?? 100, M.value, 1);
      return `${Math.min(100, Math.max(0, M.value / S * 100)).toFixed(2)}%`;
    }), g = x(() => u.value.length > 1 ? u.value[1] : null), C = x(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), k = x(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function $(M) {
      M.stopPropagation(), s("cart", r.item.key);
    }
    return (M, S) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: P(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: S[0] || (S[0] = (B) => s("select", e.item.key)),
      onKeydown: S[1] || (S[1] = Ya(he((B) => s("select", e.item.key), ["prevent"]), ["enter"])),
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
        }, null, 8, Ib)) : (t(), n("span", Eb, f(v.value), 1)),
        e.layout === "grid" && g.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: g.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Fb)) : y("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", Nb, [
          (t(!0), n(A, null, L(u.value, (B, p) => (t(), n("span", {
            key: p,
            class: P(["size-1.5 rounded-full", p === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (h) => i.value = p
          }, null, 42, Rb))), 128))
        ])) : y("", !0)
      ], 2),
      o("div", {
        class: P(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Ub, [
          o("div", Hb, [
            o("p", Kb, f(e.item.label), 1),
            e.item.caption ? (t(), n("p", qb, f(e.item.caption), 1)) : y("", !0),
            e.item.facts?.length ? (t(), n("p", Gb, f(e.item.facts.join(" · ")), 1)) : y("", !0)
          ]),
          e.item.status ? (t(), T(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : y("", !0)
        ]),
        o("div", Wb, [
          o("div", Zb, [
            e.item.price ? (t(), n("p", Jb, f(e.item.price), 1)) : y("", !0),
            k.value ? (t(), n("p", Yb, f(k.value), 1)) : y("", !0)
          ]),
          C.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: $
          }, [
            (t(), n("svg", Xb, [
              o("path", {
                d: b(ce)("cart")
              }, null, 8, Qb)
            ]))
          ])) : y("", !0)
        ]),
        m.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: P(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: m.value })
          }, null, 6)
        ], 8, e1)) : y("", !0)
      ], 2)
    ], 42, Db));
  }
});
function a1(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function n1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function l1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const o1 = ["data-featured", "data-recommended"], s1 = { class: "flex flex-col gap-1" }, r1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, i1 = { key: 0 }, d1 = { key: 1 }, u1 = { key: 2 }, c1 = { key: 3 }, f1 = { class: "text-sm font-semibold" }, m1 = { class: "flex items-baseline gap-1" }, p1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, v1 = { class: "text-muted-foreground text-sm font-normal" }, g1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, h1 = { class: "text-muted-foreground mt-1 text-xs" }, b1 = { class: "flex flex-1 flex-col gap-2 text-sm" }, x1 = { class: "flex min-w-0 items-start gap-2" }, y1 = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, k1 = ["d"], $1 = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, w1 = ["d"], C1 = { class: "capitalize" }, S1 = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, M1 = { class: "text-foreground font-medium" }, B1 = { class: "mt-auto flex gap-2 pt-2" }, _1 = /* @__PURE__ */ O({
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
      const c = a.plan.perks ?? {};
      return Object.entries(c).map(([v, m]) => ({
        key: v,
        label: v.replace(/_/g, " "),
        granted: l1(m.value),
        display: n1(m.value)
      }));
    }), u = x(() => a.plan.extraPerks ?? []);
    return (c, v) => (t(), n("article", {
      class: P(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", s1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", r1, [
          e.plan.recommended ? (t(), n("span", i1, "Recommended")) : e.plan.featured ? (t(), n("span", d1, "Featured")) : y("", !0),
          e.plan.trial ? (t(), n("span", u1, "Trial")) : y("", !0),
          e.plan.active === !1 ? (t(), n("span", c1, "Inactive")) : y("", !0)
        ])) : y("", !0),
        o("h3", f1, f(e.plan.name), 1),
        o("p", m1, [
          o("span", p1, f(s.value), 1),
          o("span", v1, f(b(a1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", g1, f(e.plan.shortDescription), 1)) : y("", !0),
        o("p", h1, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", b1, [
        (t(!0), n(A, null, L(d.value, (m) => (t(), n("li", {
          key: m.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", x1, [
            o("span", {
              class: P(["mt-0.5 shrink-0", m.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              m.granted ? (t(), n("svg", y1, [
                o("path", {
                  d: b(ce)("check")
                }, null, 8, k1)
              ])) : (t(), n("svg", $1, [
                o("path", {
                  d: b(ce)("x")
                }, null, 8, w1)
              ]))
            ], 2),
            o("span", C1, f(m.label), 1)
          ]),
          m.display ? (t(), n("span", S1, f(m.display), 1)) : y("", !0)
        ]))), 128)),
        (t(!0), n(A, null, L(u.value, (m, g) => (t(), n("li", {
          key: `extra-${g}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, f(m.key), 1),
          o("span", M1, f(m.value), 1)
        ]))), 128))
      ]),
      o("footer", B1, [
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
    ], 10, o1));
  }
}), P1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, z1 = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, A1 = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, O1 = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, j1 = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, zC = /* @__PURE__ */ O({
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
      class: P(["w-full space-y-6", e.embedded ? "" : b(Ge)]),
      "data-slot": "plan-grid"
    }, [
      o("header", P1, [
        o("div", null, [
          e.title ? (t(), n("h1", z1, f(e.title), 1)) : y("", !0),
          e.description ? (t(), n("p", A1, f(e.description), 1)) : y("", !0)
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
      e.plans.length === 0 ? (t(), n("p", O1, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", j1, [
        (t(!0), n(A, null, L(e.plans, (i) => (t(), T(_1, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => a("edit", d)),
          onDelete: s[2] || (s[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), L1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, V1 = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, T1 = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, D1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, I1 = { class: "space-y-1.5" }, E1 = { class: "space-y-1.5" }, F1 = { class: "space-y-1.5" }, N1 = { class: "space-y-1.5" }, R1 = { class: "space-y-1.5" }, U1 = { class: "flex items-center gap-3 text-sm" }, H1 = { class: "flex items-center gap-3 text-sm" }, K1 = { class: "flex items-center gap-3 text-sm" }, q1 = {
  key: 0,
  class: "space-y-1.5"
}, G1 = { class: "flex items-center gap-3 text-sm" }, W1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Z1 = { class: "space-y-1.5" }, J1 = ["value"], Y1 = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, X1 = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Q1 = ["id", "value", "onInput"], ex = { class: "space-y-2" }, tx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, ax = ["d"], AC = /* @__PURE__ */ O({
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
    function d(p, h) {
      const w = i.perks?.[p]?.value;
      return w ?? h;
    }
    function u(p, h, w) {
      const z = i.perks?.[p];
      i.perks = {
        ...i.perks ?? {},
        [p]: {
          value: h,
          overview: w ?? z?.overview ?? ""
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
    const m = x({
      get: () => {
        const p = d("modules", []);
        return Array.isArray(p) ? p.map(String) : [];
      },
      set: (p) => {
        u("modules", C(p.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), g = x(
      () => r.modules.map((p) => ({ value: p.key, label: p.label }))
    );
    function C(p) {
      const h = Object.fromEntries(r.modules.map((E) => [E.key, E])), w = new Set(p);
      for (const E of r.modules)
        if (!w.has(E.key))
          for (const I of E.children ?? [])
            w.delete(I);
      let z = !0;
      for (; z; ) {
        z = !1;
        for (const E of [...w])
          for (const I of h[E]?.requires ?? [])
            w.has(I) || (w.add(I), z = !0);
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
      class: P(["w-full space-y-6", e.embedded ? "" : b(Ge)]),
      "data-slot": "plan-editor",
      onSubmit: he(M, ["prevent"])
    }, [
      o("header", L1, [
        o("div", null, [
          o("h1", V1, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
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
      o("div", T1, [
        o("section", D1, [
          h[26] || (h[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", I1, [
            D(ze, { for: "plan-name" }, {
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
          o("div", E1, [
            D(ze, { for: "plan-short" }, {
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
          o("div", F1, [
            D(ze, { for: "plan-description" }, {
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
              class: P(B)
            }, null, 512), [
              [_e, i.description]
            ])
          ]),
          o("div", N1, [
            D(ze, { for: "plan-days" }, {
              default: j(() => [...h[18] || (h[18] = [
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
          o("div", R1, [
            D(ze, { for: "plan-price" }, {
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
          o("label", U1, [
            D(b(Ze), {
              checked: !!i.featured,
              "onUpdate:checked": h[6] || (h[6] = (w) => i.featured = w)
            }, null, 8, ["checked"]),
            h[21] || (h[21] = N(" Featured ", -1))
          ]),
          o("label", H1, [
            D(b(Ze), {
              checked: !!i.recommended,
              "onUpdate:checked": h[7] || (h[7] = (w) => i.recommended = w)
            }, null, 8, ["checked"]),
            h[22] || (h[22] = N(" Recommended ", -1))
          ]),
          o("label", K1, [
            D(b(Ze), {
              checked: !!i.trial,
              "onUpdate:checked": h[8] || (h[8] = (w) => i.trial = w)
            }, null, 8, ["checked"]),
            h[23] || (h[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", q1, [
            D(ze, { for: "plan-trial-days" }, {
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
          ])) : y("", !0),
          o("label", G1, [
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
        o("section", W1, [
          h[33] || (h[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Z1, [
            D(ze, null, {
              default: j(() => [...h[27] || (h[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Kt, {
              modelValue: m.value,
              "onUpdate:modelValue": h[11] || (h[11] = (w) => m.value = w),
              options: g.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            D(ze, { for: "plan-modules-overview" }, {
              default: j(() => [...h[28] || (h[28] = [
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
            }, null, 40, J1)
          ]),
          (t(!0), n(A, null, L(e.limits, (w) => (t(), n("div", {
            key: w.key,
            class: "space-y-1.5"
          }, [
            w.kind === "toggle" ? (t(), n("label", Y1, [
              D(b(Ze), {
                checked: !!d(w.key, !1),
                "onUpdate:checked": (z) => u(
                  w.key,
                  z,
                  i.perks?.[w.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              N(" " + f(w.label), 1)
            ])) : (t(), n(A, { key: 1 }, [
              D(ze, {
                for: `plan-limit-${w.key}`
              }, {
                default: j(() => [
                  N(f(w.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              w.hint ? (t(), n("p", X1, f(w.hint), 1)) : y("", !0),
              D($e, {
                id: `plan-limit-${w.key}`,
                "model-value": Number(d(w.key, 0)),
                type: "number",
                step: w.step ?? 1,
                required: "",
                "onUpdate:modelValue": (z) => u(
                  w.key,
                  Number(z),
                  i.perks?.[w.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              h[29] || (h[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            D(ze, {
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
              class: P(B),
              onInput: (z) => c(
                w.key,
                z.target.value
              )
            }, null, 40, Q1)
          ]))), 128)),
          o("div", ex, [
            h[32] || (h[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(A, null, L(i.extraPerks ?? [], (w, z) => (t(), n("div", {
              key: z,
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
                onClick: (E) => $(z)
              }, {
                default: j(() => [
                  (t(), n("svg", tx, [
                    o("path", {
                      d: b(ce)("x")
                    }, null, 8, ax)
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
}), nx = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, lx = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, ox = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, sx = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, rx = ["d"], ix = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, dx = ["aria-pressed"], ux = ["aria-pressed"], cx = {
  key: 0,
  class: "flex flex-col gap-2"
}, fx = ["aria-label"], mx = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, px = ["aria-pressed", "onClick"], vx = ["aria-label"], gx = { class: "text-muted-foreground mr-1 text-xs font-medium" }, hx = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, bx = ["data-slot"], xx = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, yx = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, kx = { class: "flex items-center gap-2" }, $x = ["disabled"], wx = ["disabled"], Yt = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = rt(e, "modelValue"), d = ot({}), u = ot({});
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
    const S = x(() => a.facets.filter((I) => (I.kind ?? "chips") === "chips")), B = x(() => a.facets.filter((I) => I.kind === "range")), p = x(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), h = R(1);
    me(
      () => a.items.map((I) => I.key).join(","),
      () => {
        h.value = 1;
      }
    );
    const w = x(() => {
      const I = a.pageSize;
      return !I || I < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / I));
    }), z = x(() => {
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
      class: P(["flex flex-col gap-4", b(ja)])
    }, [
      p.value ? (t(), n("div", nx, [
        o("div", lx, [
          e.searchable ? (t(), n("div", ox, [
            (t(), n("svg", sx, [
              o("path", {
                d: b(ce)("search")
              }, null, 8, rx)
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
          ])) : y("", !0),
          U(I.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", ix, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, dx),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (H) => i.value = "list")
            }, " List ", 10, ux)
          ])) : y("", !0)
        ]),
        S.value.length || B.value.length ? (t(), n("div", cx, [
          (t(!0), n(A, null, L(S.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", mx, f(H.label), 1)) : y("", !0),
            (t(!0), n(A, null, L(H.options ?? [], (K) => (t(), n("button", {
              key: K.value,
              type: "button",
              class: P([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === K.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === K.value ? "true" : "false",
              onClick: (G) => C(H.key, K.value)
            }, f(K.label), 11, px))), 128))
          ], 8, fx))), 128)),
          (t(!0), n(A, null, L(B.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", gx, f(H.label ?? H.key), 1),
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
          ], 8, vx))), 128))
        ])) : y("", !0)
      ])) : y("", !0),
      e.items.length === 0 ? (t(), n("p", hx, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: P(
          i.value === "list" ? "flex flex-col gap-3" : b(Oc)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(A, null, L(z.value, (H) => (t(), T(t1, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: te[3] || (te[3] = (K) => r("select", K)),
          onCart: te[4] || (te[4] = (K) => r("cart", K))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, bx)),
      e.pageSize && w.value > 1 ? (t(), n("div", xx, [
        o("p", yx, " Page " + f(h.value) + " of " + f(w.value), 1),
        o("div", kx, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value <= 1,
            onClick: te[5] || (te[5] = (H) => E(h.value - 1))
          }, " Previous ", 8, $x),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value >= w.value,
            onClick: te[6] || (te[6] = (H) => E(h.value + 1))
          }, " Next ", 8, wx)
        ])
      ])) : y("", !0)
    ], 2));
  }
}), Cx = ["aria-label"], Sx = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Mx = { class: "min-w-0" }, Bx = { class: "text-base font-semibold" }, _x = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Px = { class: "flex shrink-0 items-center gap-2" }, zx = { class: "min-h-0 flex-1 overflow-y-auto" }, Ax = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Xt = /* @__PURE__ */ O({
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
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", u), await Ve(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", u), i?.focus?.();
      }
    ), ke(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = d;
    }), (c, v) => (t(), T(Xe, { to: "body" }, [
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
          })) : y("", !0)
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
            class: P(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", Sx, [
              o("div", Mx, [
                o("h2", Bx, f(e.title), 1),
                e.description ? (t(), n("p", _x, f(e.description), 1)) : y("", !0)
              ]),
              o("div", Px, [
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
            o("div", zx, [
              U(c.$slots, "default")
            ]),
            c.$slots.footer ? (t(), n("footer", Ax, [
              U(c.$slots, "footer")
            ])) : y("", !0)
          ], 10, Cx)) : y("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function De() {
  return { query: "", selected: {}, ranges: {} };
}
function Ox(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function jx(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function Qt(e, l) {
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
    if (!jx(Ox(e, r), s))
      return !1;
  return !0;
}
function Lx(e, l) {
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
const Vx = { class: "flex flex-col gap-6 p-4" }, Tx = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Dx = { class: "text-sm font-semibold" }, Ix = { class: "flex flex-wrap items-center gap-1.5" }, Ex = ["aria-pressed", "onClick"], Fx = { class: "text-sm font-semibold" }, Nx = { class: "flex flex-wrap items-center gap-1.5" }, Rx = { key: 0 }, Fa = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = ot({}), d = ot({}), u = x(
      () => a.facets.filter((w) => (w.kind ?? "chips") === "chips")
    ), c = x(() => a.facets.filter((w) => w.kind === "range"));
    function v(w) {
      return w == null ? "" : String(w);
    }
    function m() {
      s.value = a.applied.query ?? "";
      for (const w of Object.keys(i))
        delete i[w];
      for (const [w, z] of Object.entries(a.applied.selected ?? {}))
        i[w] = z;
      for (const w of Object.keys(d))
        delete d[w];
      for (const [w, z] of Object.entries(a.applied.ranges ?? {}))
        d[w] = { min: v(z.min), max: v(z.max) };
    }
    me(
      () => a.open,
      (w) => {
        w && m();
      }
    );
    function g(w) {
      const z = w.trim();
      if (z === "")
        return null;
      const E = Number(z);
      return Number.isFinite(E) ? E : null;
    }
    function C() {
      const w = {};
      for (const [z, E] of Object.entries(d))
        w[z] = { min: g(E.min), max: g(E.max) };
      return w;
    }
    function k() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const $ = x(() => {
      let w = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const z of Object.values(i))
        z && (w += 1);
      for (const z of Object.values(C()))
        (z.min !== null || z.max !== null) && (w += 1);
      return w;
    });
    function M(w, z) {
      i[w] = i[w] === z ? null : z;
    }
    function S(w) {
      return d[w] ?? { min: "", max: "" };
    }
    function B(w, z, E) {
      const I = d[w] ?? { min: "", max: "" };
      d[w] = { ...I, [z]: E };
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
        a.hideSearch ? { ...De(), query: a.applied.query } : De()
      );
    }
    return (w, z) => (t(), T(Xt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: z[2] || (z[2] = (E) => r("close"))
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
          onClick: z[1] || (z[1] = (E) => r("close"))
        }, {
          default: j(() => [...z[5] || (z[5] = [
            N("Cancel", -1)
          ])]),
          _: 1
        }),
        D(ue, {
          size: "sm",
          onClick: p
        }, {
          default: j(() => [
            z[6] || (z[6] = N(" Apply", -1)),
            $.value ? (t(), n("span", Rx, " (" + f($.value) + ")", 1)) : y("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        o("div", Vx, [
          e.hideSearch ? y("", !0) : (t(), n("label", Tx, [
            z[3] || (z[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            D($e, {
              modelValue: s.value,
              "onUpdate:modelValue": z[0] || (z[0] = (E) => s.value = E),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(A, null, L(u.value, (E) => (t(), n("section", {
            key: E.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Dx, f(E.label ?? E.key), 1),
            o("div", Ix, [
              (t(!0), n(A, null, L(E.options ?? [], (I) => (t(), n("button", {
                key: I.value,
                type: "button",
                class: P([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[E.key] === I.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[E.key] === I.value ? "true" : "false",
                onClick: (te) => M(E.key, I.value)
              }, f(I.label), 11, Ex))), 128))
            ])
          ]))), 128)),
          (t(!0), n(A, null, L(c.value, (E) => (t(), n("section", {
            key: E.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Fx, f(E.label ?? E.key), 1),
            o("div", Nx, [
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${E.label ?? E.key} from`,
                "model-value": S(E.key).min,
                "onUpdate:modelValue": (I) => B(E.key, "min", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              z[4] || (z[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
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
}), Ux = ["aria-disabled"], Hx = ["disabled"], Kx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, qx = ["d"], Gx = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Wx = ["disabled"], Zx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Jx = ["d"], Yx = /* @__PURE__ */ O({
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
    const a = rt(e, "modelValue"), r = l, s = x(() => a.value <= e.min), i = x(() => e.max !== null && a.value >= e.max);
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
        (t(), n("svg", Kx, [
          o("path", {
            d: b(ce)("minus")
          }, null, 8, qx)
        ]))
      ], 8, Hx),
      o("span", Gx, f(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: c[1] || (c[1] = (v) => d(1))
      }, [
        (t(), n("svg", Zx, [
          o("path", {
            d: b(ce)("plus")
          }, null, 8, Jx)
        ]))
      ], 8, Wx)
    ], 8, Ux));
  }
}), Xx = { class: "divide-border flex flex-col divide-y" }, Qx = { class: "min-w-0" }, ey = { class: "truncate text-sm font-medium" }, ty = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, ay = { class: "flex shrink-0 items-center gap-2 text-sm" }, ny = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, ly = {
  key: 2,
  class: "font-medium tabular-nums"
}, oy = ["aria-label", "onClick"], sy = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ry = ["d"], iy = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Xx, [
      (t(!0), n(A, null, L(e.items, (d) => (t(), n("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Qx, [
          o("p", ey, f(d.label), 1),
          d.detail ? (t(), n("p", ty, f(d.detail), 1)) : y("", !0)
        ]),
        o("div", ay, [
          e.editable ? (t(), T(Yx, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", ny, " ×" + f(d.qty), 1)) : y("", !0),
          d.amount ? (t(), n("span", ly, f(d.amount), 1)) : y("", !0),
          d.status ? (t(), T(we, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : y("", !0),
          e.editable ? (t(), n("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => a("remove", d.key)
          }, [
            (t(), n("svg", sy, [
              o("path", {
                d: b(ce)("trash")
              }, null, 8, ry)
            ]))
          ], 8, oy)) : y("", !0)
        ])
      ]))), 128))
    ]));
  }
}), dy = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, uy = { class: "border-b px-4 py-3" }, cy = { class: "text-sm font-medium" }, fy = { class: "flex-1 px-4 py-3" }, my = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, py = { class: "text-foreground block font-medium" }, vy = { class: "mt-1 block" }, gy = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, hy = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, by = { class: "tabular-nums" }, xy = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, yy = { class: "text-muted-foreground" }, ky = {
  key: 0,
  class: "tabular-nums"
}, $y = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, wy = { class: "text-muted-foreground" }, Cy = { class: "tabular-nums" }, Sy = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, My = { class: "tabular-nums" }, By = {
  key: 4,
  class: "pt-1"
}, _y = /* @__PURE__ */ O({
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
    return (r, s) => (t(), n("aside", dy, [
      o("header", uy, [
        o("h2", cy, f(e.title), 1)
      ]),
      o("div", fy, [
        e.items.length === 0 ? (t(), n("p", my, [
          o("span", py, f(e.emptyTitle), 1),
          o("span", vy, f(e.emptyDescription), 1)
        ])) : (t(), T(iy, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => a("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", gy, [
        e.subtotal ? (t(), n("div", hy, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", by, f(e.subtotal), 1)
        ])) : y("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", xy, [
          o("span", yy, f(e.discountLabel), 1),
          e.discount ? (t(), n("span", ky, f(e.discount), 1)) : y("", !0),
          U(r.$slots, "discount")
        ])) : y("", !0),
        e.tax ? (t(), n("div", $y, [
          o("span", wy, f(e.taxLabel), 1),
          o("span", Cy, f(e.tax), 1)
        ])) : y("", !0),
        e.total ? (t(), n("div", Sy, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", My, f(e.total), 1)
        ])) : y("", !0),
        r.$slots.pay ? (t(), n("div", By, [
          U(r.$slots, "pay")
        ])) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}), Py = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, zy = { class: "flex flex-col gap-4" }, Ay = { class: "flex flex-wrap items-start justify-between gap-3" }, Oy = { class: "flex items-center gap-2" }, jy = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, OC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(De()), i = R(!1), d = rt(e, "cart"), u = R(!1), c = x(
      () => a.items.filter((H) => Qt(H, s.value))
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
      const K = Lx(a.items, H);
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
    const B = x(
      () => d.value.reduce((H, K) => {
        const G = a.items.find((oe) => oe.key === K.key);
        return H + g(G) * Number(K.qty ?? 1);
      }, 0)
    ), p = x(
      () => a.discountRate > 0 ? Math.round(B.value * a.discountRate) : 0
    ), h = x(
      () => Math.round((B.value - p.value) * a.taxRate)
    ), w = x(
      () => d.value.length ? a.formatMoney(B.value) : null
    ), z = x(
      () => d.value.length && p.value > 0 ? `−${a.formatMoney(p.value)}` : null
    ), E = x(
      () => d.value.length && a.taxRate > 0 ? a.formatMoney(h.value) : null
    ), I = x(
      () => d.value.length ? a.formatMoney(
        B.value - p.value + h.value
      ) : null
    );
    function te() {
      u.value = !0, r("pay", d.value);
    }
    return (H, K) => (t(), n(A, null, [
      o("div", Py, [
        o("section", zy, [
          o("div", Ay, [
            D(Te, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", Oy, [
              b(ht)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: K[0] || (K[0] = (G) => s.value = {
                  ...b(De)(),
                  query: s.value.query
                })
              }, " Clear ")) : y("", !0),
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
                b(ht)(s.value) ? (t(), n("span", jy, " on ")) : y("", !0)
              ])) : y("", !0)
            ])
          ]),
          D(Yt, {
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
        D(_y, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: w.value,
          "discount-label": e.discountLabel,
          discount: z.value,
          "tax-label": e.taxLabel,
          tax: E.value,
          total: I.value,
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
      D(Fa, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: K[3] || (K[3] = (G) => i.value = !1),
        onApply: m,
        onReset: K[4] || (K[4] = (G) => s.value = { ...b(De)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Ly = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Vy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Ty = ["src", "alt"], Dy = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Iy = ["src"], Ey = { class: "flex items-start justify-between gap-3" }, Fy = { class: "text-lg font-semibold tabular-nums" }, Ny = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Ry = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Uy = { class: "grid grid-cols-2 gap-3" }, Hy = { class: "flex flex-col gap-2" }, Ky = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, jC = /* @__PURE__ */ O({
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
    const d = x(() => a.item?.kind === "unit"), u = x(() => {
      const m = a.item;
      if (!m)
        return [];
      const g = m.stock ?? m.progress?.value ?? m.metrics?.price ?? m.metrics?.rent ?? 12;
      return i(Number(g) || 12, s(m.key) % 7);
    }), c = x(() => {
      const m = a.item;
      if (!m)
        return [];
      const g = m.progress?.value ?? (m.status === "occupied" ? 80 : 20);
      return i(Number(g) || 20, s(m.key) % 5 + 1);
    }), v = x(
      () => !!a.item && !d.value && a.item?.status !== "out-of-stock"
    );
    return (m, g) => (t(), T(Xt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: g[1] || (g[1] = (C) => r("close"))
    }, lt({
      default: j(() => [
        e.item ? (t(), n("div", Ly, [
          o("div", Vy, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Ty)) : y("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", Dy, [
            (t(!0), n(A, null, L(e.item.images, (C, k) => (t(), n("img", {
              key: k,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Iy))), 128))
          ])) : y("", !0),
          o("div", Ey, [
            o("div", null, [
              o("p", Fy, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", Ny, f(e.item.stock) + " in stock ", 1)) : y("", !0)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : y("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", Ry, f(e.item.facts.join(" · ")), 1)) : y("", !0),
          o("div", Uy, [
            D(gt, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? c.value : u.value
            }, null, 8, ["label", "value", "series"]),
            D(gt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", Hy, [
            o("p", Ky, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(yt, {
              data: d.value ? c.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : y("", !0)
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
}), qy = { class: "flex flex-col gap-10" }, Gy = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Wy = { class: "flex flex-col gap-3" }, Zy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Jy = ["src", "alt"], Yy = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Xy = ["aria-label", "aria-pressed", "onClick"], Qy = ["src"], e0 = { class: "flex flex-col gap-5" }, t0 = { class: "flex flex-wrap items-start justify-between gap-3" }, a0 = { class: "min-w-0" }, n0 = { class: "text-2xl font-semibold tracking-tight" }, l0 = { class: "text-muted-foreground mt-1 text-sm" }, o0 = { class: "text-2xl font-semibold tabular-nums" }, s0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, r0 = { class: "grid grid-cols-2 gap-3 text-sm" }, i0 = {
  key: 0,
  class: "rounded-lg border p-3"
}, d0 = { class: "mt-1 font-medium" }, u0 = { class: "rounded-lg border p-3" }, c0 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, f0 = { class: "mt-1 font-medium" }, m0 = { class: "flex flex-col gap-4" }, p0 = { class: "grid gap-4 sm:grid-cols-2" }, v0 = { class: "bg-card rounded-lg border p-4" }, g0 = { class: "mb-3 text-sm font-medium" }, h0 = /* @__PURE__ */ O({
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
    const d = x(() => a.item.kind === "unit"), u = x(() => {
      const k = [a.item.image, ...a.item.images ?? []].filter(
        ($) => typeof $ == "string" && $ !== ""
      );
      return [...new Set(k)];
    }), c = R(0), v = x(() => {
      const k = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(k) || 12, s(a.item.key) % 7);
    }), m = x(() => {
      const k = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(k) || 20, s(a.item.key) % 5 + 1);
    }), g = x(() => d.value ? m.value : v.value), C = x(() => !d.value && a.item.status !== "out-of-stock");
    return (k, $) => (t(), n("div", qy, [
      o("div", Gy, [
        o("div", Wy, [
          o("div", Zy, [
            u.value[c.value] ? (t(), n("img", {
              key: 0,
              src: u.value[c.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Jy)) : y("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", Yy, [
            (t(!0), n(A, null, L(u.value, (M, S) => (t(), n("button", {
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
              }, null, 8, Qy)
            ], 10, Xy))), 128))
          ])) : y("", !0)
        ]),
        o("div", e0, [
          o("div", t0, [
            o("div", a0, [
              o("h1", n0, f(e.item.label), 1),
              o("p", l0, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : y("", !0)
          ]),
          o("p", o0, f(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", s0, f(e.item.facts.join(" · ")), 1)) : y("", !0),
          o("dl", r0, [
            e.item.sku ? (t(), n("div", i0, [
              $[1] || ($[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", d0, f(e.item.sku), 1)
            ])) : y("", !0),
            o("div", u0, [
              o("dt", c0, f(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", f0, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          C.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: $[0] || ($[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")) : y("", !0)
        ])
      ]),
      o("section", m0, [
        $[2] || ($[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", p0, [
          D(gt, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: g.value
          }, null, 8, ["label", "value", "series"]),
          D(gt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: v.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", v0, [
          o("p", g0, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(Uv, {
            data: g.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), b0 = ["href"], LC = /* @__PURE__ */ O({
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
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ge)])
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
      ], 8, b0),
      D(h0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), x0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, y0 = ["aria-selected", "onClick"], k0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, $0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, w0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, C0 = ["aria-pressed"], S0 = ["aria-pressed"], VC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(a.tabs[0]?.key ?? ""), i = rt(e, "layout"), d = R({}), u = R(!1);
    me(
      () => a.tabs.map((M) => M.key).join(","),
      (M) => {
        M.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function c(M) {
      return d.value[M] ?? De();
    }
    const v = x(
      () => a.tabs.find((M) => M.key === s.value) ?? a.tabs[0] ?? null
    ), m = x(
      () => v.value ? c(v.value.key) : De()
    ), g = x(() => {
      const M = v.value;
      return M ? M.items.filter((S) => Qt(S, c(M.key))) : [];
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
      M && (d.value = { ...d.value, [M]: De() });
    }
    function $(M) {
      const S = v.value?.key;
      S && (d.value = { ...d.value, [S]: M }, u.value = !1);
    }
    return (M, S) => (t(), n(A, null, [
      o("div", {
        class: P(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ge)])
      }, [
        D(Te, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", x0, [
          (t(!0), n(A, null, L(e.tabs, (B) => (t(), n("button", {
            key: B.key,
            type: "button",
            class: P([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === B.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === B.key ? "true" : "false",
            onClick: (p) => s.value = B.key
          }, f(B.label), 11, y0))), 128))
        ])) : y("", !0),
        o("div", k0, [
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
            onClick: k
          }, " Clear ")) : y("", !0),
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
            b(ht)(m.value) ? (t(), n("span", $0, " on ")) : y("", !0)
          ])) : y("", !0),
          o("div", w0, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: S[2] || (S[2] = (B) => i.value = "grid")
            }, " Tiles ", 10, C0),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: S[3] || (S[3] = (B) => i.value = "list")
            }, " List ", 10, S0)
          ])
        ]),
        D(Yt, {
          layout: i.value,
          "onUpdate:layout": S[4] || (S[4] = (B) => i.value = B),
          "page-size": e.pageSize,
          items: g.value,
          onSelect: S[5] || (S[5] = (B) => r("select", B)),
          onCart: S[6] || (S[6] = (B) => r("cart", B))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(Fa, {
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
}), M0 = { class: "flex flex-col gap-4" }, B0 = { class: "flex flex-col gap-4" }, TC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(De()), i = x(
      () => a.cards.filter((d) => Qt(d, s.value))
    );
    return (d, u) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : b(Ge)])
    }, [
      D(Te, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", M0, [
        D(Te, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(Yt, {
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
      o("section", B0, [
        D(Te, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(ql, {
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
}), _0 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, P0 = { class: "text-sm font-medium" }, z0 = ["width", "height", "aria-label"], A0 = { class: "flex items-center gap-2" }, O0 = /* @__PURE__ */ O({
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
    }), (M, S) => (t(), n("div", _0, [
      o("p", P0, f(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: P(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(v, ["prevent"]),
        onPointermove: he(m, ["prevent"]),
        onPointerup: he(g, ["prevent"]),
        onPointerleave: he(g, ["prevent"])
      }, null, 42, z0),
      o("div", A0, [
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
}), j0 = { class: "grid gap-8 lg:grid-cols-2" }, L0 = { class: "flex flex-col gap-3" }, V0 = { class: "text-muted-foreground text-xs font-normal" }, T0 = {
  key: 0,
  class: "flex flex-col gap-3"
}, D0 = { class: "flex flex-wrap gap-3" }, I0 = ["onClick"], E0 = ["src", "alt"], F0 = {
  key: 1,
  class: "flex flex-col gap-3"
}, N0 = { class: "flex flex-wrap gap-3" }, R0 = ["onClick"], U0 = ["src", "alt"], H0 = {
  key: 2,
  class: "flex flex-col gap-4"
}, K0 = { class: "flex flex-wrap items-center gap-2" }, q0 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, G0 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, W0 = { class: "flex flex-col gap-2" }, Z0 = ["src"], J0 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Y0 = ["src"], DC = /* @__PURE__ */ O({
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
      await Fc(M), S(40);
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
    const C = x(
      () => a.value.find((M) => M.id === s.value)?.dataUrl ?? null
    ), k = x(
      () => r.value.find((M) => M.id === i.value)?.dataUrl ?? null
    ), $ = x(() => {
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
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : b(Ge)])
    }, [
      D(Te, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", j0, [
        D(O0, {
          label: "Draw a signature",
          onSave: v
        }),
        o("div", L0, [
          S[2] || (S[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", V0, f(b(La)), 1),
          D(Ma, {
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
      a.value.length ? (t(), n("section", T0, [
        D(Te, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", D0, [
          (t(!0), n(A, null, L(a.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: P(["rounded-md border p-2", B.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => s.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, E0)
          ], 10, I0))), 128))
        ])
      ])) : y("", !0),
      r.value.length ? (t(), n("section", F0, [
        D(Te, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", N0, [
          (t(!0), n(A, null, L(r.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: P(["rounded-md border p-2", B.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => i.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, U0)
          ], 10, R0))), 128))
        ])
      ])) : y("", !0),
      e.documents.length ? (t(), n("section", H0, [
        o("div", K0, [
          (t(!0), n(A, null, L(e.documents, (B) => (t(), T(ue, {
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
        o("div", q0, [
          D(av, {
            document: $.value
          }, null, 8, ["document"]),
          o("div", G0, [
            o("div", W0, [
              S[3] || (S[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), n("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Z0)) : (t(), n("p", J0, "Draw and save a signature"))
            ]),
            k.value ? (t(), n("img", {
              key: 0,
              src: k.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Y0)) : y("", !0)
          ])
        ])
      ])) : y("", !0)
    ], 2));
  }
}), IC = "panel.dashboard.hiddenWidgets", X0 = /* @__PURE__ */ Symbol("dashboardHide"), Q0 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, EC = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = mt(X0, null), r = R(
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
    const i = x(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? y("", !0) : (t(), n("div", Q0, [
      D(Kh, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (c) => r.value = c),
        onHide: u[1] || (u[1] = (c) => b(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), ek = { class: "flex flex-col gap-3" }, tk = ["data-slot"], ak = ["aria-pressed", "aria-label", "title"], nk = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, lk = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, ok = { class: "flex h-8 items-center" }, sk = ["aria-label", "title", "onClick"], rk = ["aria-label", "title", "onClick"], ik = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, dk = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, FC = /* @__PURE__ */ O({
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
    const c = x(() => a.segments.some(u)), v = x(() => a.segments.some(d)), m = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, g = x(() => m[a.columns] ?? m[4]), C = x(() => {
      const p = a.columns ?? 4, h = Math.floor(a.segments.length / p) * p;
      return a.segments.slice(0, h);
    }), k = x(() => {
      const p = a.columns ?? 4, h = Math.floor(a.segments.length / p) * p;
      return a.segments.slice(h);
    }), $ = x(() => {
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
    return (p, h) => (t(), n("div", ek, [
      (t(!0), n(A, null, L($.value, (w) => (t(), n("div", {
        key: w.key,
        class: P(["relative shrink-0", w.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
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
          (t(), n("svg", nk, [
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
        ], 8, ak)) : y("", !0),
        o("div", {
          class: P(["grid", [w.joined ? "gap-px" : "gap-3", g.value]])
        }, [
          (t(!0), n(A, null, L(w.segments, (z) => (t(), n("div", {
            key: z.key,
            class: P(["bg-card flex flex-col gap-2 p-4", w.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", lk, f(z.label), 1),
            o("div", ok, [
              e.loading ? (t(), T(Ae, {
                key: 0,
                variant: "number"
              })) : u(z) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${z.label} hidden. Show it.`,
                title: `Show ${z.label}`,
                onClick: (E) => S(z)
              }, [
                (t(), n(A, null, L(5, (E) => o("span", {
                  key: E,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, sk)) : d(z) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${z.label}, ${B(z.value)}. Hide it.`,
                title: `Hide ${z.label}`,
                onClick: (E) => S(z)
              }, f(B(z.value)), 9, rk)) : (t(), n("span", ik, f(B(z.value)), 1)),
              z.trend && !e.loading && !u(z) ? (t(), T(Ea, {
                key: 4,
                direction: z.trend.direction,
                percentage: z.trend.percentage,
                inverted: z.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : y("", !0)
            ]),
            z.sparkline?.length && !e.loading && !u(z) ? (t(), T(yt, {
              key: 0,
              data: z.sparkline,
              height: 24
            }, null, 8, ["data"])) : y("", !0),
            z.caption || z.comparison && z.trend ? (t(), n("p", dk, f(z.caption ?? z.comparison), 1)) : y("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, tk))), 128))
    ]));
  }
}), uk = ["aria-label"], ck = ["aria-valuenow", "aria-label"], fk = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, mk = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, pk = ["title"], vk = { class: "font-medium" }, gk = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, hk = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, bk = { class: "flex items-center justify-between gap-2" }, xk = { class: "text-sm font-semibold" }, yk = { class: "flex items-center gap-3" }, kk = ["href"], $k = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, wk = { class: "flex min-w-0 flex-col gap-0.5" }, Ck = { class: "text-sm font-medium" }, Sk = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, Mk = {
  key: 1,
  class: "flex flex-col gap-2"
}, Bk = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, _k = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Pk = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, NC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => a.items.find(($) => !$.done) ?? null), i = x(() => a.items.filter(($) => $.key !== s.value?.key)), d = x(() => a.items.length), u = x(() => a.items.filter(($) => $.done).length), c = x(() => {
      if (!s.value)
        return d.value;
      const $ = a.items.findIndex((M) => M.key === s.value?.key);
      return $ >= 0 ? $ + 1 : 1;
    }), v = x(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), m = x(() => {
      const $ = a.linkComponent;
      return typeof $ == "string" ? $ : va($);
    }), g = nt({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = nt({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), k = nt({
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
      ], 8, ck),
      o("div", fk, [
        o("span", mk, " Step " + f(c.value) + " of " + f(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", vk, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", gk, f(": " + s.value.detail), 1)) : y("", !0)
        ], 8, pk),
        s.value?.href ? (t(), T(Be(m.value), {
          key: 0,
          href: s.value.href,
          class: P(b(C))
        }, {
          default: j(() => [
            N(f(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : y("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: M[0] || (M[0] = (S) => r("skip"))
        }, f(e.skipLabel), 1)) : y("", !0)
      ])
    ], 8, uk)) : e.items.length ? (t(), n("section", hk, [
      o("div", bk, [
        o("h2", xk, f(e.heading), 1),
        o("div", yk, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: M[1] || (M[1] = (S) => r("skip"))
          }, f(e.skipLabel), 1)) : y("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, kk)) : y("", !0)
        ])
      ]),
      s.value ? (t(), n("div", $k, [
        M[2] || (M[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", wk, [
          o("p", Ck, f(s.value.title), 1),
          s.value.detail ? (t(), n("p", Sk, f(s.value.detail), 1)) : y("", !0),
          s.value.href ? (t(), T(Be(m.value), {
            key: 1,
            href: s.value.href,
            class: P(b(g))
          }, {
            default: j(() => [
              N(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : y("", !0)
        ])
      ])) : y("", !0),
      i.value.length ? (t(), n("ul", Mk, [
        (t(!0), n(A, null, L(i.value, (S) => (t(), n("li", {
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
            S.done ? (t(), n("svg", Bk, [...M[3] || (M[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : y("", !0)
          ], 2),
          o("div", _k, [
            o("p", {
              class: P(["text-sm", S.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(S.title), 3),
            !S.done && S.detail ? (t(), n("p", Pk, f(S.detail), 1)) : y("", !0)
          ]),
          !S.done && S.href ? (t(), T(Be(m.value), {
            key: 0,
            href: S.href,
            class: P(b(k))
          }, {
            default: j(() => [
              N(f(S.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : y("", !0)
        ]))), 128))
      ])) : y("", !0)
    ])) : y("", !0);
  }
}), zk = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, Ak = { class: "hidden items-center gap-2 md:flex" }, Ok = { class: "md:hidden" }, jk = { class: "border-b px-4 py-3" }, Lk = { class: "text-muted-foreground text-xs font-normal" }, Vk = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, Tk = { class: "font-medium tabular-nums" }, Dk = { class: "ml-auto flex items-center gap-3" }, RC = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = R(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), n("div", zk, [
      o("div", Ak, [
        U(i.$slots, "actions")
      ]),
      o("div", Ok, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        D(qt, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: j(() => [
            D(Gt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", jk, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", Lk, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
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
      o("span", Tk, [
        e.allMatching ? (t(), n(A, { key: 0 }, [
          N(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(A, { key: 1 }, [
          N(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", Dk, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => a("select-all-matching"))
        }, " Select all " + f(s(e.total)), 1)) : y("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), Ik = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Ek = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Fk = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Nk = ["value"], Rk = ["value"], Uk = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Hk = ["disabled"], Kk = ["disabled"], qk = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Gk = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Wk = ["disabled"], UC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = (c) => new Intl.NumberFormat().format(c), i = x(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), d = x(() => (a.page - 1) * a.perPage + a.rowsOnPage), u = x(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (c, v) => (t(), n("div", Ik, [
      o("p", Ek, [
        N(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(A, { key: 0 }, [
          N("of " + f(s(e.total)), 1)
        ], 64)) : y("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", Fk, [
        v[4] || (v[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: v[0] || (v[0] = (m) => r("update:perPage", Number(m.target.value)))
        }, [
          (t(!0), n(A, null, L(e.perPageOptions, (m) => (t(), n("option", {
            key: m,
            value: m
          }, f(m), 9, Rk))), 128))
        ], 40, Nk)
      ])) : y("", !0),
      o("nav", Uk, [
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
        ])], 8, Hk),
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
        ])], 8, Kk),
        o("span", qk, f(e.page), 1),
        u.value !== null ? (t(), n("span", Gk, " of " + f(s(u.value)), 1)) : y("", !0),
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
        ])], 8, Wk)
      ])
    ]));
  }
}), Zk = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Jk = ["aria-current"], Yk = ["title"], Xk = ["aria-current", "onClick"], Qk = ["title"], e2 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Zk, [
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
        }, f(r(e.counts.all ?? 0)), 11, Yk)) : (t(), T(Ae, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Jk),
      (t(!0), n(A, null, L(e.tabs, (d) => (t(), n("button", {
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
        }, f(r(e.counts[d] ?? 0)), 11, Qk)) : (t(), T(Ae, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Xk))), 128))
    ]));
  }
}), HC = /* @__PURE__ */ bt(e2, [["__scopeId", "data-v-3967c945"]]), t2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, a2 = { class: "grid gap-2" }, n2 = {
  key: 0,
  class: "text-destructive text-sm"
}, l2 = { class: "flex gap-2" }, KC = /* @__PURE__ */ O({
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
    })()), i = R(!1), d = Xa(null), u = x(() => d.value?.isLoading.value ?? !1), c = x(() => d.value?.error.value ?? null), v = x(() => d.value?.isSupported.value ?? !1);
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
      o("div", a2, [
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
          [_e, s.value]
        ]),
        k[4] || (k[4] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " A name helps you identify this passkey later. ", -1))
      ]),
      c.value ? (t(), n("p", n2, f(c.value), 1)) : y("", !0),
      o("div", l2, [
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
    })) : (t(), n("p", t2, " Passkeys are not supported in this browser. "));
  }
}), o2 = { class: "pk-form-stack" }, s2 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, qC = /* @__PURE__ */ O({
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
    const r = l, s = x(() => a.nodes.length > 0), i = x(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = x(() => a.errors._conflict);
    function u(c) {
      if (a.upload)
        return (v, m) => a.upload(c, v, m);
    }
    return (c, v) => (t(), n("div", o2, [
      d.value ? (t(), n("p", s2, f(d.value), 1)) : y("", !0),
      s.value ? (t(!0), n(A, { key: 1 }, L(e.nodes, (m, g) => (t(), T(Ba, {
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
        class: P(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(A, null, L(e.fields, (m) => (t(), T(Ye, {
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
          class: P(m.span && m.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (g) => r("change", m.key, g),
          onAffixAction: (g) => r("affix-action", m.key, g)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), r2 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, i2 = ["disabled"], d2 = ["disabled"], u2 = ["disabled"], GC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(Xe, {
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
            class: P(s.value),
            role: "status",
            "aria-live": "polite",
            "data-slot": "unsaved-bar"
          }, [
            o("div", {
              class: P([
                b(jc),
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
              o("span", r2, f(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[0] || (d[0] = (u) => i.$emit("discard"))
              }, f(e.discardLabel), 9, i2)) : y("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[1] || (d[1] = (u) => i.$emit("cancel"))
              }, f(e.cancelLabel), 9, d2),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: d[2] || (d[2] = (u) => i.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, u2)
            ], 2)
          ], 2)) : y("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function WC(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = R(Bt(e.value)), s = x(() => Bt(e.value) !== r.value);
  function i() {
    r.value = Bt(e.value);
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
function Bt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const c2 = {
  key: 0,
  class: "flex flex-col gap-1"
}, f2 = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, m2 = { class: "text-foreground text-sm font-medium" }, p2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, v2 = {
  key: 5,
  class: "max-w-full font-normal"
}, g2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, h2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, b2 = {
  key: 6,
  class: "font-normal"
}, x2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, y2 = { class: "text-muted-foreground truncate font-medium" }, k2 = { class: "text-foreground col-span-2 break-words" }, $2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, w2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, C2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, S2 = ["href"], M2 = { class: "flex min-w-0 items-start gap-2.5" }, B2 = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, _2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, P2 = ["d"], z2 = { class: "min-w-0" }, A2 = { class: "flex flex-wrap items-center gap-2" }, O2 = { class: "text-sm font-semibold" }, j2 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, L2 = ["onClick"], ZC = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), d = x(() => a.depth === 0), u = x(() => {
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
    }, v = x(() => a.node.key ? a.record[a.node.key] : null), m = x(() => {
      const k = v.value;
      return k == null || k === "";
    }), g = x(() => {
      if (m.value)
        return "None";
      const k = v.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(k)).toLocaleDateString(void 0, c[a.node.type]);
      let $ = String(k);
      return a.node.transform === "upper" && ($ = $.toUpperCase()), a.node.transform === "lower" && ($ = $.toLowerCase()), [a.node.prefix, $, a.node.suffix].filter(Boolean).join(" ");
    }), C = x(() => {
      const k = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), $ = a.node.colors?.[k] ?? a.node.defaultColor ?? "neutral";
      return Wt[$] ?? "outline";
    });
    return (k, $) => {
      const M = Et("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", c2, [
        o("dt", f2, f(e.node.label), 1),
        o("dd", m2, [
          e.node.type === "badge" && b(au)(v.value) ? (t(), T(qe, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: j(() => [
              N(f(v.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", p2, "None")) : e.node.type === "icon" ? (t(), T(zd, {
            key: 2,
            value: v.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(Vd, {
            key: 3,
            src: v.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Fd, {
            key: 4,
            value: typeof v.value == "string" ? v.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", v2, [
            e.node.language ? (t(), n("p", g2, f(e.node.language), 1)) : y("", !0),
            o("pre", h2, [
              o("code", null, f(v.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", b2, [
            v.value && typeof v.value == "object" && !Array.isArray(v.value) && Object.keys(v.value).length ? (t(), n("dl", x2, [
              (t(!0), n(A, null, L(v.value, (S, B) => (t(), n("div", {
                key: B,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", y2, f(B), 1),
                o("dd", k2, f(S), 1)
              ]))), 128))
            ])) : (t(), n("span", $2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", w2, [
            (t(!0), n(A, null, L(Array.isArray(v.value) ? v.value : [], (S, B) => (t(), n("div", {
              key: B,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(A, null, L(e.node.entries ?? [], (p, h) => (t(), T(M, {
                key: h,
                node: p,
                record: S,
                depth: e.depth + 1,
                onAction: $[0] || ($[0] = (w) => r("action", w))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(v.value) || v.value.length === 0 ? (t(), n("span", C2, "None")) : y("", !0)
          ])) : e.node.url && !m.value ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(g.value), 9, S2)) : (t(), n("span", {
            key: 9,
            class: P([
              m.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, f(g.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: $[1] || ($[1] = (S) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : y("", !0)
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
          onClick: $[2] || ($[2] = (S) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", M2, [
            e.node.icon ? (t(), n("div", B2, [
              (t(), n("svg", _2, [
                o("path", {
                  d: b(ce)(e.node.icon)
                }, null, 8, P2)
              ]))
            ])) : y("", !0),
            o("div", z2, [
              o("div", A2, [
                o("h3", O2, f(e.node.label), 1),
                e.node.status ? (t(), T(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : y("", !0)
              ]),
              e.node.description ? (t(), n("p", j2, f(e.node.description), 1)) : y("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: P(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], (S, B) => (t(), T(M, {
            key: B,
            node: S,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[3] || ($[3] = (p) => r("action", p))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : y("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: P(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), n(A, null, L(e.node.children ?? [], (S, B) => (t(), T(M, {
          key: B,
          node: S,
          record: e.record,
          depth: e.depth + 1,
          onAction: $[4] || ($[4] = (p) => r("action", p))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: P(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(A, null, L(e.node.children ?? [], (S, B) => (t(), n("button", {
            key: B,
            type: "button",
            class: P([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === B ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (p) => i.value = B
          }, f(S.label), 11, L2))), 128))
        ], 2),
        (t(!0), n(A, null, L(e.node.children ?? [], (S, B) => pe((t(), n("div", {
          key: B,
          class: P(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(A, null, L(S.children ?? [], (p, h) => (t(), T(M, {
            key: h,
            node: p,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[5] || ($[5] = (w) => r("action", w))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [He, i.value === B]
        ])), 128))
      ], 2)) : y("", !0);
    };
  }
}), V2 = { class: "text-muted-foreground text-sm font-normal" }, T2 = { class: "flex items-start gap-3" }, D2 = { class: "min-w-0 flex-1" }, I2 = { class: "flex flex-wrap items-center gap-2" }, E2 = { class: "truncate text-sm font-medium" }, F2 = { class: "text-muted-foreground mt-0.5 text-xs" }, N2 = { class: "text-muted-foreground text-xs font-normal" }, R2 = { class: "mt-auto flex items-center gap-2" }, U2 = /* @__PURE__ */ O({
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
      class: P(["flex flex-col gap-4", b(ja)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", V2, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: P(b(Ac))
      }, [
        (t(!0), n(A, null, L(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", T2, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            o("div", D2, [
              o("div", I2, [
                o("h3", E2, f(u.label), 1),
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
                })) : y("", !0),
                u.isDefault ? (t(), T(we, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...d[2] || (d[2] = [
                    N(" Default ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                u.connected && u.mode ? (t(), T(we, {
                  key: 3,
                  status: u.mode
                }, {
                  default: j(() => [
                    N(f(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : y("", !0)
              ]),
              o("p", F2, f(u.caption), 1)
            ])
          ]),
          o("p", N2, f(u.methods.join(" · ")), 1),
          o("div", R2, [
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
}), H2 = { class: "flex flex-col gap-6" }, K2 = { class: "relative" }, q2 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, G2 = ["d"], W2 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Z2 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, J2 = { class: "flex flex-wrap items-center gap-2" }, Y2 = { class: "text-muted-foreground text-sm font-normal" }, X2 = { class: "flex flex-col gap-1 text-sm" }, Q2 = ["value"], e$ = {
  key: 0,
  class: "flex flex-col gap-2"
}, t$ = { class: "flex flex-wrap items-center gap-2" }, a$ = {
  key: 1,
  class: "flex items-center gap-2"
}, JC = /* @__PURE__ */ O({
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
    const l = rt(e, "gateways"), a = R(null), r = R(""), s = x(
      () => l.value.find((k) => k.key === a.value) ?? null
    ), i = x(() => {
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
    return (k, $) => (t(), n(A, null, [
      o("div", H2, [
        D(Te, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", K2, [
          (t(), n("svg", q2, [
            o("path", {
              d: b(ce)("search")
            }, null, 8, G2)
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
        i.value.length > 0 ? (t(), T(U2, {
          key: 0,
          gateways: i.value,
          onConfigure: c,
          onToggle: v
        }, null, 8, ["gateways"])) : (t(), n("p", W2, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      D(Xt, {
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
          })) : y("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), n("div", Z2, [
            o("div", J2, [
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
              })) : y("", !0),
              s.value.isDefault ? (t(), T(we, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...$[11] || ($[11] = [
                  N(" Default ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              s.value.connected && s.value.mode ? (t(), T(we, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  N(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : y("", !0)
            ]),
            o("p", Y2, f(s.value.caption), 1),
            o("label", X2, [
              $[12] || ($[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, Q2)
            ]),
            $[20] || ($[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", e$, [
              $[16] || ($[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              $[17] || ($[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", t$, [
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
            ])) : y("", !0),
            s.value.connected ? (t(), n("div", a$, [
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
            ])) : y("", !0)
          ])) : y("", !0)
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
function YC(e) {
  const l = R(ma(e));
  ve(() => {
    l.value = ma(e);
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
function XC(e) {
  const l = R(pa(e));
  ve(() => {
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
function QC(e) {
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
  function z() {
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
    l.driver === "poll" && p(), l.driver === "broadcast" && z();
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
const n$ = /^[a-z0-9-]+$/, l$ = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function e8(e) {
  Qa(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !n$.test(a) || typeof r != "string" || !l$.test(r) || (l[`--${a}`] = r);
    Pu(l);
  });
}
const o$ = { class: "flex items-center gap-0.5" }, s$ = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", o$, [
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
}), r$ = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(Ia, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), i$ = { class: "flex flex-col gap-2" }, d$ = { class: "bg-card rounded-lg border p-4" }, u$ = { class: "text-muted-foreground truncate text-xs" }, c$ = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, f$ = /* @__PURE__ */ O({
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
      const $ = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return $ === "" ? d.value : `${d.value} › ${$.split("/").join(" › ")}`;
    });
    function c($, M) {
      return $.length <= M ? $ : `${$.slice(0, M - 1).trimEnd()}…`;
    }
    const v = x(() => c(s.value, r.value.titleMax)), m = x(() => c(i.value, r.value.descriptionMax));
    function g($, M, S) {
      return $ === 0 ? { tone: "text-muted-foreground", note: "empty" } : $ > S ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : $ < M ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = x(
      () => g(s.value.length, r.value.titleMin, r.value.titleMax)
    ), k = x(
      () => g(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return ($, M) => (t(), n("div", i$, [
      o("div", d$, [
        o("p", u$, f(u.value), 1),
        o("p", {
          class: P(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", v.value === "" ? "text-muted-foreground italic" : ""])
        }, f(v.value || "Untitled page"), 3),
        o("p", {
          class: P(["text-muted-foreground mt-1 line-clamp-2 text-sm", m.value === "" ? "italic" : ""])
        }, f(m.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", c$, [
        o("span", {
          class: P(C.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(C.value.note), 3),
        o("span", {
          class: P(k.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(k.value.note), 3)
      ]),
      M[0] || (M[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), m$ = ["value", "placeholder", "disabled"], p$ = /* @__PURE__ */ O({
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
      class: P(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", b(Me)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, m$));
  }
}), v$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, g$ = ["aria-selected", "disabled", "title", "onClick"], h$ = /* @__PURE__ */ O({
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
    return (u, c) => (t(), n("div", v$, [
      (t(!0), n(A, null, L(s.value, (v) => (t(), n("button", {
        key: v,
        type: "button",
        role: "option",
        class: P(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [b(Me), i.value === v ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === v,
        disabled: e.disabled,
        title: v,
        onClick: (m) => d(v)
      }, f(v), 11, g$))), 128))
    ]));
  }
}), b$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, x$ = ["disabled"], y$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, k$ = ["onClick"], $$ = ["onClick"], w$ = /* @__PURE__ */ O({
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
    function u(g, C) {
      return !C || g.label.toLowerCase().includes(C) ? !0 : (g.children ?? []).some((k) => u(k, C));
    }
    const c = x(() => {
      const g = s.value.trim().toLowerCase();
      return g ? d.value.filter((C) => u(C, g)) : d.value;
    }), v = x(() => {
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
    return (g, C) => (t(), n("div", b$, [
      o("button", {
        type: "button",
        class: P(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", b(Me)]),
        disabled: e.disabled,
        onClick: C[0] || (C[0] = (k) => i.value = !i.value)
      }, [
        o("span", {
          class: P(v.value ? "" : "text-muted-foreground")
        }, f(v.value ?? "Select…"), 3),
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, x$),
      i.value ? (t(), n("div", y$, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": C[1] || (C[1] = (k) => s.value = k),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [_e, s.value]
        ]) : y("", !0),
        (t(!0), n(A, null, L(c.value, (k) => (t(), n(A, {
          key: String(k.value)
        }, [
          o("button", {
            type: "button",
            class: P(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === k.value ? "bg-accent" : ""]),
            onClick: ($) => m(k.value)
          }, f(k.label), 11, k$),
          (t(!0), n(A, null, L(k.children ?? [], ($) => (t(), n("button", {
            key: String($.value),
            type: "button",
            class: P(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === $.value ? "bg-accent text-foreground" : ""]),
            onClick: (M) => m($.value)
          }, f($.label), 11, $$))), 128))
        ], 64))), 128))
      ])) : y("", !0)
    ]));
  }
}), C$ = ["aria-label"], S$ = ["disabled", "aria-label", "aria-pressed", "onClick"], M$ = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, B$ = { key: 0 }, _$ = ["id"], P$ = ["fill"], z$ = ["disabled"], A$ = /* @__PURE__ */ O({
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
      (t(!0), n(A, null, L(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${g} of ${s.value}`,
        "aria-pressed": d.value >= g,
        onClick: (C) => u(g)
      }, [
        (t(), n("svg", M$, [
          c(g) === "half" ? (t(), n("defs", B$, [
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
            ])], 8, _$)
          ])) : y("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: c(g) === "full" ? "currentColor" : c(g) === "half" ? `url(#half-${e.field.key}-${g})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, P$)
        ]))
      ], 8, S$))), 128)),
      d.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: m[0] || (m[0] = (g) => u(0))
      }, " Clear ", 8, z$)) : y("", !0)
    ], 8, C$));
  }
});
function O$() {
  ye("radio", dm), ye("checkboxlist", fm), ye("tags", xm), ye("colour", Am), ye("slider", up), ye("rating", A$), ye("phone", p$), ye("icon-picker", h$), ye("tree-select", w$), ye("visual-select", wp), ye("markdown", Rf), ye("code", Zf), ye("map", Tm), ye("qrcode", Nm), ye("barcode", Wm), ye("diff", Ym), ye("seo-preview", f$), Mt("swatch", Sp), Mt("voucher-code-box", r$), Mt("document-colour-mode", s$);
}
function Na() {
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
const j$ = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = Na();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: P(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", b(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      U(r.$slots, "default")
    ], 6));
  }
}), L$ = ["id"], Se = /* @__PURE__ */ O({
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
        D(j$, null, {
          default: j(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, L$));
  }
}), V$ = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, T$ = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, D$ = {
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
      class: P(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), n("p", V$, f(e.eyebrow), 1)) : y("", !0),
      e.title ? (t(), n("h2", T$, f(e.title), 1)) : y("", !0),
      e.body ? (t(), n("p", D$, f(e.body), 1)) : y("", !0)
    ], 2)) : y("", !0);
  }
}), I$ = { class: "flex flex-col gap-10" }, E$ = { class: "grid gap-4 md:grid-cols-3" }, F$ = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, N$ = { class: "text-sm font-semibold text-balance" }, R$ = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, U$ = /* @__PURE__ */ O({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", I$, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", E$, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("li", { key: s }, [
              (t(), T(Be(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: j(() => [
                  r.meta ? (t(), n("p", F$, f(r.meta), 1)) : y("", !0),
                  o("h3", N$, f(r.title), 1),
                  r.body ? (t(), n("p", R$, f(r.body), 1)) : y("", !0)
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
function H$() {
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
const K$ = { class: "pk-tilt-inner relative h-full" }, q$ = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = H$();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", K$, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), G$ = { class: "flex flex-col gap-10" }, W$ = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, Z$ = { class: "text-base font-semibold" }, J$ = { class: "text-sm text-pretty text-muted-foreground" }, Y$ = /* @__PURE__ */ O({
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
        o("div", G$, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", W$, [
            (t(!0), n(A, null, L(e.items ?? [], (s, i) => (t(), T(q$, {
              key: i,
              class: P(l(s.span))
            }, {
              default: j(() => [
                o("div", {
                  class: P([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", Z$, f(s.title), 1),
                  o("p", J$, f(s.body), 1)
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
}), X$ = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, Q$ = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, ew = { class: "grid gap-4 text-sm" }, tw = {
  key: 0,
  class: "grid gap-1"
}, aw = ["href"], nw = {
  key: 1,
  class: "grid gap-1"
}, lw = ["href"], ow = {
  key: 2,
  class: "grid gap-1"
}, sw = { class: "text-pretty text-muted-foreground" }, rw = ["href"], iw = /* @__PURE__ */ O({
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
        o("div", X$, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Q$, [
            o("dl", ew, [
              e.email ? (t(), n("div", tw, [
                a[0] || (a[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, f(e.email), 9, aw)
                ])
              ])) : y("", !0),
              e.phone ? (t(), n("div", nw, [
                a[1] || (a[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, f(e.phone), 9, lw)
                ])
              ])) : y("", !0),
              e.address ? (t(), n("div", ow, [
                a[2] || (a[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", sw, f(e.address), 1)
              ])) : y("", !0)
            ]),
            e.label ? (t(), n("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.label), 9, rw)) : y("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), dw = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, uw = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, cw = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, fw = ["href"], mw = /* @__PURE__ */ O({
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
        o("div", dw, [
          o("h2", uw, f(e.title), 1),
          e.body ? (t(), n("p", cw, f(e.body), 1)) : y("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, fw)) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), pw = { class: "flex flex-col gap-8" }, vw = { class: "divide-y rounded-lg border" }, gw = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, hw = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, bw = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, { narrow: "" }, {
      default: j(() => [
        o("div", pw, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", vw, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", gw, [
                N(f(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", hw, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), xw = { class: "flex flex-col gap-10" }, yw = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, kw = { class: "text-sm font-semibold" }, $w = { class: "text-sm text-pretty text-muted-foreground" }, ww = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", xw, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", yw, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", kw, f(r.title), 1),
              o("p", $w, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Cw = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, Sw = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, Mw = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Bw = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, _w = ["href"], Pw = ["href"], zw = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, Aw = /* @__PURE__ */ O({
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
          class: P(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), n("p", Cw, f(e.brand), 1)) : y("", !0),
          e.eyebrow ? (t(), n("p", Sw, f(e.eyebrow), 1)) : y("", !0),
          o("h1", {
            class: P([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, f(e.title), 3),
          e.body ? (t(), n("p", Mw, f(e.body), 1)) : y("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", Bw, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, _w)) : y("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, Pw)) : y("", !0)
          ])) : y("", !0),
          e.note ? (t(), n("p", zw, f(e.note), 1)) : y("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), Ow = { class: "flex flex-col items-center gap-6" }, jw = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, Lw = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, Vw = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, { muted: "" }, {
      default: j(() => [
        o("div", Ow, [
          e.title ? (t(), n("p", jw, f(e.title), 1)) : y("", !0),
          o("ul", Lw, [
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
}), Tw = { class: "flex flex-col gap-10" }, Dw = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Iw = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, Ew = ["aria-pressed"], Fw = ["aria-pressed"], Nw = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, Rw = { class: "grid gap-4 md:grid-cols-3" }, Uw = { class: "flex flex-col gap-1" }, Hw = { class: "text-sm font-semibold" }, Kw = { class: "flex items-baseline gap-1" }, qw = { class: "text-3xl font-semibold tracking-tight" }, Gw = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, Ww = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, Zw = { class: "flex flex-col gap-2 text-sm" }, Jw = { class: "text-muted-foreground" }, Yw = ["href"], Xw = /* @__PURE__ */ O({
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
      default: j(() => [
        o("div", Tw, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", Dw, [
            o("div", Iw, [
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, Ew),
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, Fw)
            ]),
            e.annualNote ? (t(), n("p", Nw, f(e.annualNote), 1)) : y("", !0)
          ])) : y("", !0),
          o("ul", Rw, [
            (t(!0), n(A, null, L(e.items ?? [], (u, c) => (t(), n("li", {
              key: c,
              class: P(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", Uw, [
                o("h3", Hw, f(u.name), 1),
                o("p", Kw, [
                  o("span", qw, f(s(u)), 1),
                  u.period ? (t(), n("span", Gw, f(u.period), 1)) : y("", !0)
                ]),
                u.body ? (t(), n("p", Ww, f(u.body), 1)) : y("", !0)
              ]),
              o("ul", Zw, [
                (t(!0), n(A, null, L(u.features ?? [], (v, m) => (t(), n("li", {
                  key: m,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", Jw, f(v.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: P([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, Yw)) : y("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function Qw() {
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
const e4 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, t4 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, a4 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, n4 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, l4 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, o4 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, s4 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, r4 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, i4 = { class: "ml-3 truncate text-xs text-muted-foreground" }, d4 = { class: "flex" }, u4 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, c4 = { class: "min-w-0 flex-1 p-4" }, f4 = { class: "flex flex-col divide-y rounded-md border" }, m4 = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = Qw();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", e4, [
        o("div", t4, [
          o("div", a4, [
            o("h2", n4, f(e.title), 1),
            e.body ? (t(), n("p", l4, f(e.body), 1)) : y("", !0)
          ]),
          o("div", o4, [
            o("div", s4, [
              o("div", r4, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", i4, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", d4, [
                o("div", u4, [
                  (t(), n(A, null, L(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", c4, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", f4, [
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
}), p4 = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = Na(), s = R(0);
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
}), v4 = { class: "flex flex-col gap-10" }, g4 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, h4 = { class: "order-2 text-sm text-muted-foreground" }, b4 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, x4 = /* @__PURE__ */ O({
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
        o("div", v4, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", g4, [
            (t(!0), n(A, null, L(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", h4, f(s.label), 1),
              o("dd", b4, [
                l(s.value) ? (t(), T(p4, {
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
}), y4 = { class: "flex flex-col gap-10" }, k4 = { class: "grid gap-6 md:grid-cols-3" }, $4 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, w4 = { class: "text-sm font-semibold" }, C4 = { class: "text-sm text-pretty text-muted-foreground" }, S4 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", y4, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", k4, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", $4, f(s + 1), 1),
              o("h3", w4, f(r.title), 1),
              o("p", C4, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), M4 = { class: "flex flex-col gap-10" }, B4 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, _4 = ["src"], P4 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, z4 = { class: "min-w-0" }, A4 = { class: "truncate text-sm font-semibold" }, O4 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, j4 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, L4 = /* @__PURE__ */ O({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", M4, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", B4, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), n("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, _4)) : (t(), n("span", P4, f((r.name ?? "?").slice(0, 1)), 1)),
              o("div", z4, [
                o("h3", A4, f(r.name), 1),
                r.role ? (t(), n("p", O4, f(r.role), 1)) : y("", !0)
              ]),
              r.bio ? (t(), n("p", j4, f(r.bio), 1)) : y("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), V4 = { class: "flex flex-col gap-10" }, T4 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, D4 = { class: "text-pretty text-sm leading-relaxed" }, I4 = { class: "mt-auto flex items-center gap-3" }, E4 = ["src"], F4 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, N4 = { class: "min-w-0" }, R4 = { class: "block truncate text-sm font-medium" }, U4 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, H4 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: j(() => [
        o("div", V4, [
          D(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", T4, [
            (t(!0), n(A, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", D4, " “" + f(r.quote) + "” ", 1),
              o("figcaption", I4, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, E4)) : (t(), n("span", F4, f((r.name ?? "?").slice(0, 1)), 1)),
                o("span", N4, [
                  o("span", R4, f(r.name), 1),
                  r.role ? (t(), n("span", U4, f(r.role), 1)) : y("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), t8 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: Aw,
      logos: Vw,
      features: ww,
      bento: Y$,
      showcase: m4,
      steps: S4,
      stats: x4,
      testimonials: H4,
      team: L4,
      articles: U$,
      contact: iw,
      pricing: Xw,
      faq: bw,
      cta: mw
    }, s = x(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), n(A, null, L(s.value, (u) => (t(), T(Be(u.component), re({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), K4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, a8 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", K4, [
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
}), q4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, n8 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", q4, [...a[0] || (a[0] = [
      It('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), G4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, l8 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", G4, [...a[0] || (a[0] = [
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
O$();
const o8 = "0.0.1";
export {
  MC as AdminDirectory,
  Cc as Alert,
  Sc as AlertDescription,
  Mc as AlertTitle,
  cC as AppPageFooter,
  M5 as AppearanceDrawer,
  B3 as Avatar,
  _3 as AvatarFallback,
  P3 as AvatarImage,
  Wt as BADGE_VARIANTS,
  k5 as BadgeResolver,
  xC as BarChart,
  z3 as Breadcrumb,
  A3 as BreadcrumbEllipsis,
  O3 as BreadcrumbItem,
  j3 as BreadcrumbLink,
  L3 as BreadcrumbList,
  V3 as BreadcrumbPage,
  T3 as BreadcrumbSeparator,
  n5 as BulkActions,
  ja as CATALOGUE_CONTAINER,
  Ac as CATALOGUE_GRID,
  j5 as CATALOGUE_GRID_TIGHT,
  Oc as CATALOGUE_GRID_TILES,
  tC as Card,
  aC as CardAction,
  nC as CardContent,
  lC as CardDescription,
  oC as CardFooter,
  sC as CardHeader,
  rC as CardTitle,
  _y as CartPanel,
  VC as CatalogBrowser,
  t1 as CatalogCard,
  Fa as CatalogFilterSheet,
  Yt as CatalogGrid,
  jC as CatalogInspect,
  h0 as CatalogItemDetail,
  LC as CatalogItemView,
  TC as CatalogRegister,
  OC as CatalogTill,
  Mh as ChartCard,
  ut as ChartTooltip,
  jr as Checkbox,
  v5 as CheckboxCell,
  g5 as CodeCell,
  Fd as ColourCell,
  CC as ComboChart,
  Or as CreateOptionDialog,
  Mr as CreateOptionError,
  IC as DASHBOARD_HIDDEN_STORAGE_KEY,
  X0 as DASHBOARD_HIDE_KEY,
  EC as DashboardShortcuts,
  ql as DataTable,
  H3 as Dialog,
  K3 as DialogClose,
  q3 as DialogContent,
  G3 as DialogDescription,
  W3 as DialogFooter,
  Z3 as DialogHeader,
  uf as DialogOverlay,
  J3 as DialogScrollContent,
  Y3 as DialogTitle,
  X3 as DialogTrigger,
  MC as DirectoryPage,
  m3 as DropdownMenu,
  p3 as DropdownMenuCheckboxItem,
  v3 as DropdownMenuContent,
  g3 as DropdownMenuGroup,
  h3 as DropdownMenuItem,
  b3 as DropdownMenuLabel,
  i8 as DropdownMenuPortal,
  x3 as DropdownMenuRadioGroup,
  y3 as DropdownMenuRadioItem,
  k3 as DropdownMenuSeparator,
  $3 as DropdownMenuShortcut,
  w3 as DropdownMenuSub,
  C3 as DropdownMenuSubContent,
  S3 as DropdownMenuSubTrigger,
  M3 as DropdownMenuTrigger,
  x5 as EditableCell,
  Me as FOCUS_RING,
  l5 as FOCUS_RING_SOFT,
  na as FOCUS_RING_WITHIN,
  jc as FORM_MEASURE,
  Ye as FormFieldControl,
  SC as HeatmapChart,
  wt as ICON_PATHS,
  Re as INPUT_COPY,
  zr as INPUT_PLACEHOLDER,
  Pr as INPUT_TEXT,
  zd as IconCell,
  Vd as ImageCell,
  ZC as InfoNode,
  Vc as JPEG_IMAGE_ERROR,
  h5 as KeyValueCell,
  Q3 as Label,
  Uv as LineChart,
  iy as LineItems,
  c5 as MUTED_COPY,
  ft as MUTED_COPY_SNUG,
  f5 as MUTED_COPY_XS,
  gt as MiniStatCard,
  D3 as NavigationMenu,
  I3 as NavigationMenuContent,
  E3 as NavigationMenuIndicator,
  F3 as NavigationMenuItem,
  N3 as NavigationMenuLink,
  R3 as NavigationMenuList,
  U3 as NavigationMenuTrigger,
  rf as NavigationMenuViewport,
  Lc as OPAQUE_IMAGE_ERROR,
  Ge as PAGE_SHELL,
  L5 as PAGE_SHELL_COMPACT,
  V5 as PAGE_SHELL_STACK,
  JC as PaymentGatewaySettings,
  U2 as PaymentGateways,
  yC as PieChart,
  A5 as PkAlertError,
  U$ as PkArticles,
  a8 as PkAuroraBackdrop,
  qe as PkBadge,
  Wm as PkBarcode,
  Y$ as PkBento,
  B5 as PkBottomNav,
  iC as PkBoundary,
  pC as PkBuilder,
  ue as PkButton,
  vC as PkCalendar,
  dC as PkCard,
  fm as PkCheckboxList,
  Ia as PkCodeBox,
  Zf as PkCodeInput,
  Am as PkColourPicker,
  l8 as PkConsoleBackdrop,
  iw as PkContact,
  p4 as PkCountUp,
  mw as PkCta,
  fC as PkDeviceFrame,
  Ym as PkDiff,
  av as PkDocument,
  Je as PkDropdown,
  n8 as PkEditorialBackdrop,
  Pt as PkEmptyState,
  bw as PkFaq,
  ww as PkFeatureGrid,
  ze as PkFieldLabel,
  Ma as PkFileUpload,
  Te as PkHeading,
  Aw as PkHero,
  ri as PkKeyValue,
  t8 as PkLandingSections,
  Vw as PkLogoCloud,
  jm as PkMap,
  Tm as PkMapField,
  Rf as PkMarkdownInput,
  st as PkModal,
  Kt as PkMultiSelect,
  P5 as PkOtpInput,
  z5 as PkPageHeader,
  KC as PkPasskeyRegister,
  O5 as PkPasswordInput,
  Xw as PkPricing,
  Nm as PkQrCode,
  Yx as PkQtyStepper,
  Zo as PkQueryBuilder,
  dm as PkRadioGroup,
  mC as PkRepeater,
  j$ as PkReveal,
  hi as PkRichEditor,
  Se as PkSection,
  Le as PkSectionHeading,
  m4 as PkShowcase,
  O0 as PkSignaturePad,
  Ae as PkSkeleton,
  Xt as PkSlideover,
  up as PkSlider,
  _5 as PkSpinner,
  x4 as PkStats,
  we as PkStatusBadge,
  Cr as PkStepIndicator,
  S4 as PkSteps,
  Sp as PkSwatchPreview,
  xm as PkTagsInput,
  L4 as PkTeam,
  H4 as PkTestimonials,
  $e as PkTextInput,
  q$ as PkTiltCard,
  wp as PkVisualSelect,
  _1 as PlanCard,
  AC as PlanEditor,
  zC as PlanGrid,
  wC as PolarAreaChart,
  $C as RadarChart,
  p5 as RatingCell,
  $5 as RecordActions,
  qC as RecordForm,
  m5 as RelationCreateDialog,
  s5 as RelationPanel,
  Ob as STATUS_TONES,
  kC as ScatterChart,
  Ba as SchemaNode,
  _C as SegmentedBar,
  RC as SelectionBar,
  af as Separator,
  NC as SetupChecklist,
  Oa as ShadcnInput,
  qt as Sheet,
  F5 as SheetClose,
  Gt as SheetContent,
  Nc as SheetDescription,
  N5 as SheetFooter,
  Rc as SheetHeader,
  Uc as SheetTitle,
  R5 as SheetTrigger,
  Kh as ShortcutsWidget,
  U5 as Sidebar,
  H5 as SidebarContent,
  K5 as SidebarFooter,
  q5 as SidebarGroup,
  G5 as SidebarGroupAction,
  W5 as SidebarGroupContent,
  Z5 as SidebarGroupLabel,
  J5 as SidebarHeader,
  Y5 as SidebarInput,
  X5 as SidebarInset,
  Q5 as SidebarMenu,
  e3 as SidebarMenuAction,
  t3 as SidebarMenuBadge,
  n3 as SidebarMenuButton,
  l3 as SidebarMenuItem,
  o3 as SidebarMenuSkeleton,
  s3 as SidebarMenuSub,
  r3 as SidebarMenuSubButton,
  i3 as SidebarMenuSubItem,
  d3 as SidebarProvider,
  u3 as SidebarRail,
  c3 as SidebarSeparator,
  f3 as SidebarTrigger,
  DC as SignatureStudio,
  yt as Sparkline,
  eC as Spinner,
  BC as StatCard,
  PC as StatListChart,
  FC as StatStrip,
  Ze as Switch,
  La as TRANSPARENT_IMAGE_HELP,
  UC as TablePagination,
  So as TableShell,
  HC as TableTabs,
  ar as TableToolbar,
  b5 as TagsCell,
  bC as ThemeToggle,
  Qc as Tooltip,
  ef as TooltipContent,
  a3 as TooltipProvider,
  tf as TooltipTrigger,
  Ea as TrendBadge,
  GC as UnsavedBar,
  Bc as alertVariants,
  Bu as appearanceVars,
  Lt as applyAppearance,
  Fc as assertTransparentImage,
  w5 as bootstrapAppearance,
  nt as buttonClasses,
  ht as catalogFiltersActive,
  Q as cn,
  _r as createOptionActionLabel,
  Br as createOptionTitle,
  a1 as cycleLabel,
  De as emptyCatalogFilters,
  Sr as fieldControl,
  u5 as fieldErrorsFromPayload,
  Lx as findExactSku,
  n1 as formatPerkValue,
  au as hasBadgeValue,
  r5 as hasFieldControl,
  gC as hasOptionPreview,
  ce as iconPath,
  Ic as imageHasTransparency,
  _a as initializeAppearance,
  jt as isDark,
  Qt as matchCatalogItem,
  I5 as mergeLayoutItems,
  df as navigationMenuTriggerStyle,
  cp as optionPreview,
  T5 as packWidgetColumns,
  D5 as parseWidgetId,
  l1 as perkGranted,
  Jt as readAppearance,
  _u as readServerAppearance,
  O$ as registerBuiltInFieldControls,
  ye as registerFieldControl,
  Mt as registerOptionPreview,
  i5 as registeredFieldTypes,
  fp as registeredOptionPreviews,
  d5 as resetFieldControls,
  hC as resetOptionPreviews,
  S5 as setAppearancePersister,
  nf as sidebarMenuButtonVariants,
  Tb as statusBadgeVariant,
  Vb as statusTone,
  C5 as syncAppearanceFromInertiaPage,
  E5 as toPersistedLayout,
  o5 as toUrl,
  Aa as useAppearance,
  YC as useColumnVisibility,
  XC as useColumnWidths,
  QC as useLiveUpdates,
  H$ as usePointer,
  Na as useReveal,
  y5 as useSchemaColumns,
  Qw as useScrollProgress,
  uC as useShellPageFooter,
  xt as useSidebar,
  e8 as useTenantTheme,
  WC as useUnsavedChanges,
  o8 as version,
  sa as widgetId
};
//# sourceMappingURL=index.js.map
