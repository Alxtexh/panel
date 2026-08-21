import './ui.css';
import { defineComponent as O, useSlots as _t, openBlock as t, createElementBlock as a, normalizeClass as z, unref as x, renderSlot as H, createElementVNode as o, toDisplayString as f, createCommentVNode as k, computed as y, normalizeStyle as le, Fragment as P, renderList as V, ref as K, watch as ce, useId as ja, withModifiers as ve, createTextVNode as R, createVNode as D, createStaticVNode as At, createBlock as T, createSlots as Ye, withCtx as j, nextTick as ze, onBeforeUnmount as be, Teleport as qe, Transition as De, onMounted as ge, withDirectives as me, vModelText as we, resolveDynamicComponent as $e, resolveComponent as Pt, vModelSelect as Re, vModelDynamic as La, mergeProps as oe, normalizeProps as Me, guardReactiveProps as Ve, defineAsyncComponent as qt, inject as st, vShow as Fe, isRef as Va, useTemplateRef as Ta, onErrorCaptured as Da, provide as kt, markRaw as la, withKeys as Fa, reactive as Qe, useModel as et, mergeModels as Le, shallowRef as Ea, watchEffect as Ia } from "vue";
import { useForwardPropsEmits as he, DialogRoot as oa, DialogOverlay as zt, DialogPortal as Ot, DialogContent as jt, DialogClose as Ge, CheckboxRoot as Na, CheckboxIndicator as Ra, SwitchRoot as Ua, SwitchThumb as Ha, DialogDescription as sa, DialogTitle as ra, DialogTrigger as ia, createContext as Ka, Primitive as We, TooltipRoot as qa, TooltipPortal as Ga, TooltipContent as Wa, TooltipArrow as Za, TooltipProvider as da, TooltipTrigger as Ja, Separator as Ya, DropdownMenuRoot as Qa, DropdownMenuCheckboxItem as Xa, DropdownMenuItemIndicator as ua, DropdownMenuPortal as en, DropdownMenuContent as tn, DropdownMenuGroup as an, useForwardProps as Be, DropdownMenuItem as nn, DropdownMenuLabel as ln, DropdownMenuRadioGroup as on, DropdownMenuRadioItem as sn, DropdownMenuSeparator as rn, DropdownMenuSub as dn, DropdownMenuSubContent as un, DropdownMenuSubTrigger as cn, DropdownMenuTrigger as fn, AvatarRoot as mn, AvatarFallback as pn, AvatarImage as vn, NavigationMenuViewport as gn, NavigationMenuRoot as hn, NavigationMenuContent as bn, NavigationMenuIndicator as xn, NavigationMenuItem as yn, NavigationMenuLink as kn, NavigationMenuList as $n, NavigationMenuTrigger as wn, Label as Cn } from "reka-ui";
import { DropdownMenuPortal as J3 } from "reka-ui";
import { X as Lt, Check as ca, AlertCircle as Sn, EyeOff as Mn, Eye as Bn, PanelLeftOpen as _n, PanelLeftClose as An, Circle as Pn, ChevronRight as fa, MoreHorizontal as zn, ChevronDown as On, Loader2Icon as jn } from "@lucide/vue";
import { reactiveOmit as ue, useVModel as ma, useMediaQuery as Ln, useEventListener as Vn, defaultDocument as Tn } from "@vueuse/core";
import { clsx as Dn } from "clsx";
import { twMerge as Fn } from "tailwind-merge";
import { cva as Vt } from "class-variance-authority";
import { usePage as pa, Link as En } from "@inertiajs/vue3";
const vt = {
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
function de(e) {
  return e ? vt[e] ?? vt.dot : vt.dot;
}
const In = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, Nn = ["d"], Rn = { class: "flex max-w-sm flex-col gap-1" }, Un = {
  key: 0,
  class: "text-sm"
}, Hn = {
  key: 2,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, $t = /* @__PURE__ */ O({
  __name: "PkEmptyState",
  props: {
    title: {},
    description: {},
    icon: { default: "package" },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = _t();
    return (n, r) => (t(), a("div", {
      "data-slot": "empty-state",
      class: z(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      x(l).illustration ? (t(), a("div", In, [
        H(n.$slots, "illustration")
      ])) : (t(), a("div", {
        key: 1,
        class: z(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        H(n.$slots, "icon", {}, () => [
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.75",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: z(e.compact ? "size-5" : "size-6")
          }, [
            o("path", {
              d: x(de)(e.icon)
            }, null, 8, Nn)
          ], 2))
        ])
      ], 2)),
      o("div", Rn, [
        o("p", {
          class: z(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), a("p", Un, f(e.description), 1)) : k("", !0)
      ]),
      n.$slots.actions ? (t(), a("div", Hn, [
        H(n.$slots, "actions")
      ])) : k("", !0)
    ], 2));
  }
}), Kn = ["aria-label"], Se = /* @__PURE__ */ O({
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
    }, r = y(() => n[l.variant] ?? n.text), s = y(() => Math.max(1, Math.min(l.count, 50)));
    function i(d) {
      if (!(l.variant !== "text" || s.value === 1))
        return d === s.value - 1 ? "60%" : void 0;
    }
    return (d, u) => (t(), a("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: le(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), a(P, null, V(s.value, (c) => (t(), a("span", {
        key: c,
        "aria-hidden": "true",
        class: z(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: le({
          width: i(c - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Kn));
  }
}), qn = { class: "w-full border-collapse text-sm" }, Gn = { class: "bg-background sticky top-0 z-10" }, Wn = {
  key: 0,
  class: "bg-muted/40"
}, Zn = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, Jn = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, Yn = ["colspan"], Qn = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Xn = { class: "bg-muted/50" }, el = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, tl = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, al = ["id", "checked", "indeterminate"], nl = ["onClick"], ll = {
  key: 0,
  class: "text-xs"
}, ol = {
  key: 1,
  class: "text-xs opacity-40"
}, sl = { key: 1 }, rl = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, il = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, dl = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, ul = {
  key: 1,
  class: "px-3 py-2.5"
}, cl = {
  key: 2,
  class: "px-2 py-2.5"
}, fl = {
  key: 0,
  class: "bg-muted/40"
}, ml = ["colspan"], pl = ["aria-expanded", "dusk", "onClick"], vl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, gl = {
  key: 1,
  dusk: "group-header"
}, hl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], bl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, xl = {
  key: 1,
  class: "px-3 py-2"
}, yl = ["id", "value", "checked", "disabled", "aria-label", "onClick"], kl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, $l = ["aria-label", "onClick"], wl = { class: "text-xs" }, Cl = {
  key: 1,
  class: "text-muted-foreground"
}, Sl = { key: 2 }, Ml = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Bl = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, _l = { key: 0 }, Al = { class: "text-muted-foreground block text-[10px] font-medium" }, Pl = { class: "font-semibold tabular-nums" }, zl = { key: 1 }, Ol = /* @__PURE__ */ O({
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
    striped: { type: Boolean, default: !1 }
  },
  emits: ["sort", "toggle-row", "toggle-page", "reorder", "row-contextmenu", "row-click"],
  setup(e, { emit: l }) {
    const n = e;
    function r(F) {
      if (!F || !n.groupBy)
        return "";
      if (F.__group !== void 0 && F.__group !== null)
        return String(F.__group);
      const ee = F[n.groupBy.key];
      return ee == null || ee === "" ? "" : String(ee);
    }
    function s(F) {
      return n.groupBy ? F === 0 ? !0 : r(n.rows[F]) !== r(n.rows[F - 1]) : !1;
    }
    function i(F) {
      if (F.__groupTitle)
        return String(F.__groupTitle);
      const ee = n.groupBy ? F[n.groupBy.key] : null, Q = ee == null || ee === "" ? "None" : String(ee);
      return !n.groupBy || n.groupBy.titlePrefixed === !1 ? Q : `${n.groupBy.label}: ${Q}`;
    }
    const d = K(/* @__PURE__ */ new Set()), u = K(/* @__PURE__ */ new Set());
    function c(F) {
      return n.groupBy?.collapsible ? d.value.has(F) : !1;
    }
    function g(F) {
      if (!n.groupBy?.collapsible)
        return;
      const ee = new Set(u.value);
      ee.add(F), u.value = ee;
      const Q = new Set(d.value);
      Q.has(F) ? Q.delete(F) : Q.add(F), d.value = Q;
    }
    function p(F) {
      return n.groupBy?.collapsible ? !c(r(n.rows[F])) : !0;
    }
    ce(
      () => n.rows,
      (F) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
          return;
        const ee = new Set(d.value);
        for (const Q of F) {
          const fe = r(Q);
          fe !== "" && !u.value.has(fe) && ee.add(fe);
        }
        d.value = ee;
      },
      { immediate: !0 }
    );
    const b = K(null), C = K(null);
    function w(F, ee) {
      b.value = F, ee.dataTransfer?.setData("text/plain", String(F)), ee.dataTransfer && (ee.dataTransfer.effectAllowed = "move");
    }
    function $() {
      b.value = null, C.value = null;
    }
    function S(F) {
      return b.value === null || C.value !== F ? "" : b.value > F ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function h(F, ee) {
      b.value !== null && (ee.preventDefault(), C.value = F);
    }
    function v(F) {
      const ee = b.value;
      if (b.value = null, C.value = null, ee === null || ee === F)
        return;
      const Q = n.rows.map((ie) => ie[n.rowKey]), [fe] = Q.splice(ee, 1);
      Q.splice(F, 0, fe), m("reorder", Q);
    }
    const m = l;
    function M(F, ee) {
      !n.rowClickable || n.reordering || ee.button !== 0 || ee.metaKey || ee.ctrlKey || ee.shiftKey || ee.altKey || ee.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || m("row-click", F);
    }
    const _ = K(null), A = ja(), N = y(() => n.columns.filter((F) => !n.hidden?.has(F.key))), E = y(() => N.value.some((F) => !!F.group)), te = y(() => {
      const F = [];
      for (const ee of N.value) {
        const Q = ee.group ?? null, fe = F[F.length - 1];
        fe && fe.label === Q ? fe.span += 1 : F.push({ label: Q, span: 1, key: `${Q ?? "loose"}-${ee.key}` });
      }
      return F;
    });
    function U(F) {
      const ee = F[n.rowKey];
      return ee == null || ee === "" ? null : ee;
    }
    function G(F) {
      const ee = U(F);
      return ee !== null && !!n.selected?.has(ee);
    }
    const W = K(null);
    function ne(F) {
      return n.rows.findIndex((ee) => {
        const Q = U(ee);
        return Q !== null && Q === F;
      });
    }
    function ae(F, ee) {
      const Q = U(F);
      if (Q === null)
        return;
      const fe = ee.shiftKey, ie = !!n.selected?.has(Q);
      if (fe && W.value !== null && W.value !== Q) {
        const lt = ne(W.value), mt = ne(Q);
        if (lt !== -1 && mt !== -1) {
          const Pa = Math.min(lt, mt), za = Math.max(lt, mt), Oa = !ie;
          for (let ot = Pa; ot <= za; ot++) {
            if (!p(ot))
              continue;
            const pt = U(n.rows[ot]);
            if (pt === null)
              continue;
            !!n.selected?.has(pt) !== Oa && m("toggle-row", pt);
          }
          W.value = Q;
          return;
        }
      }
      m("toggle-row", Q), W.value = Q;
    }
    const J = y(
      () => n.rows.map((F) => U(F)).filter((F) => F !== null)
    ), Z = y(
      () => J.value.length > 0 && J.value.every((F) => n.selected?.has(F))
    ), B = y(
      () => !Z.value && J.value.some((F) => n.selected?.has(F))
    );
    function I(F) {
      return F.sortKey ?? F.key;
    }
    function L(F) {
      return n.sort === I(F);
    }
    async function Y(F, ee, Q) {
      try {
        await navigator.clipboard.writeText(String(Q)), _.value = `${F}-${ee.key}`, setTimeout(() => _.value = null, 1200);
      } catch {
      }
    }
    const pe = y(
      () => !!n.summaries && !!n.summaryValues && Object.keys(n.summaries).length > 0
    );
    function se(F) {
      return n.summaries?.[F] ?? null;
    }
    function q(F) {
      const ee = n.summaries?.[F], Q = n.summaryValues?.[F];
      if (!ee)
        return "";
      if (Q == null)
        return "None";
      const fe = ee.divideBy ? Q / ee.divideBy : Q, ie = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: ee.decimals,
        maximumFractionDigits: ee.decimals
      }).format(fe);
      return `${ee.prefix ?? ""}${ie}${ee.suffix ?? ""}`;
    }
    return (F, ee) => (t(), a("div", {
      class: z(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", qn, [
        o("thead", Gn, [
          E.value ? (t(), a("tr", Wn, [
            e.reordering ? (t(), a("th", Zn)) : k("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Jn)) : k("", !0),
            (t(!0), a(P, null, V(te.value, (Q) => (t(), a("th", {
              key: Q.key,
              colspan: Q.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, f(Q.label ?? ""), 9, Yn))), 128)),
            F.$slots.actions ? (t(), a("th", Qn)) : k("", !0)
          ])) : k("", !0),
          o("tr", Xn, [
            e.reordering ? (t(), a("th", el)) : k("", !0),
            e.selectable && !e.reordering ? (t(), a("th", tl, [
              o("input", {
                id: `${x(A)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: Z.value,
                indeterminate: B.value,
                "aria-label": "Select all rows on this page",
                onClick: ee[0] || (ee[0] = ve(() => {
                }, ["stop"])),
                onChange: ee[1] || (ee[1] = ve((Q) => m("toggle-page", !Z.value), ["stop"]))
              }, null, 40, al)
            ])) : k("", !0),
            (t(!0), a(P, null, V(N.value, (Q) => (t(), a("th", {
              key: Q.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              Q.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (fe) => m("sort", I(Q))
              }, [
                R(f(Q.label) + " ", 1),
                L(Q) ? (t(), a("span", ll, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", ol, "↕"))
              ], 8, nl)) : (t(), a("span", sl, f(Q.label), 1))
            ]))), 128)),
            F.$slots.actions ? (t(), a("th", rl, [...ee[2] || (ee[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : k("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", il, [
          (t(), a(P, null, V(6, (Q) => o("tr", {
            key: `skel-${Q}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), a("td", dl, [
              D(Se, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : k("", !0),
            e.selectable && !e.reordering ? (t(), a("td", ul, [
              D(Se, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : k("", !0),
            (t(!0), a(P, null, V(N.value, (fe) => (t(), a("td", {
              key: fe.key,
              class: "px-3 py-2.5"
            }, [
              D(Se, { variant: "text" })
            ]))), 128)),
            F.$slots.actions ? (t(), a("td", cl, [
              D(Se, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : k("", !0)
          ])), 64))
        ])) : (t(), a("tbody", {
          key: 1,
          class: z(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(P, null, V(e.rows, (Q, fe) => (t(), a(P, {
            key: U(Q) ?? `row-${fe}`
          }, [
            e.groupBy && s(fe) ? (t(), a("tr", fl, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), a("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !c(r(Q)),
                  dusk: `group-header-${r(Q) || "none"}`,
                  onClick: (ie) => g(r(Q))
                }, [
                  o("span", vl, f(c(r(Q)) ? "▸" : "▾"), 1),
                  R(" " + f(i(Q)), 1)
                ], 8, pl)) : (t(), a("span", gl, f(i(Q)), 1))
              ], 8, ml)
            ])) : k("", !0),
            p(fe) ? (t(), a("tr", {
              key: 1,
              class: z(["group pk-row border-b transition-colors hover:bg-muted/50", [
                G(Q) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && fe % 2 === 1 ? "bg-muted/20" : "",
                b.value === fe ? "opacity-40" : "",
                S(fe),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => w(fe, ie),
              onDragover: (ie) => h(fe, ie),
              onDrop: ve((ie) => v(fe), ["prevent"]),
              onDragend: $,
              onContextmenu: (ie) => m("row-contextmenu", Q, ie),
              onClick: (ie) => M(Q, ie)
            }, [
              e.reordering ? (t(), a("td", bl, [...ee[3] || (ee[3] = [
                At('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-64f5e507><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-64f5e507><circle cx="9" cy="6" r="1.5" data-v-64f5e507></circle><circle cx="15" cy="6" r="1.5" data-v-64f5e507></circle><circle cx="9" cy="12" r="1.5" data-v-64f5e507></circle><circle cx="15" cy="12" r="1.5" data-v-64f5e507></circle><circle cx="9" cy="18" r="1.5" data-v-64f5e507></circle><circle cx="15" cy="18" r="1.5" data-v-64f5e507></circle></svg></span>', 1)
              ])])) : k("", !0),
              e.selectable && !e.reordering ? (t(), a("td", xl, [
                o("input", {
                  id: `${x(A)}-row-${U(Q) ?? fe}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: U(Q) ?? void 0,
                  checked: G(Q),
                  disabled: U(Q) === null,
                  "aria-label": U(Q) === null ? "This row has no id and cannot be selected" : `Select row ${U(Q)}`,
                  onClick: ve((ie) => ae(Q, ie), ["stop"])
                }, null, 8, yl)
              ])) : k("", !0),
              (t(!0), a(P, null, V(N.value, (ie) => (t(), a("td", {
                key: ie.key,
                class: z(["px-3 py-2 whitespace-nowrap", ie.cellClass])
              }, [
                H(F.$slots, `cell:${ie.key}`, {
                  row: Q,
                  value: Q[ie.key],
                  column: ie
                }, () => [
                  ie.copyable ? (t(), a("span", kl, [
                    R(f(Q[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (lt) => Y(String(Q[e.rowKey]), ie, Q[ie.key])
                    }, [
                      o("span", wl, f(_.value === `${Q[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, $l)
                  ])) : Q[ie.key] == null || Q[ie.key] === "" ? (t(), a("span", Cl, "None")) : (t(), a("span", Sl, f(Q[ie.key]), 1))
                ], !0)
              ], 2))), 128)),
              F.$slots.actions ? (t(), a("td", Ml, [
                H(F.$slots, "actions", { row: Q }, void 0, !0)
              ])) : k("", !0)
            ], 42, hl)) : k("", !0)
          ], 64))), 128))
        ], 2)),
        pe.value ? (t(), a("tfoot", Bl, [
          o("tr", null, [
            e.selectable ? (t(), a("td", _l)) : k("", !0),
            (t(!0), a(P, null, V(e.columns, (Q) => (t(), a(P, {
              key: `s-${Q.key}`
            }, [
              e.hidden?.has(Q.key) ? k("", !0) : (t(), a("td", {
                key: 0,
                class: z(["px-3 py-2 align-top text-sm whitespace-nowrap", Q.cellClass])
              }, [
                se(Q.key) ? (t(), a(P, { key: 0 }, [
                  o("span", Al, f(se(Q.key).label), 1),
                  o("span", Pl, f(q(Q.key)), 1)
                ], 64)) : k("", !0)
              ], 2))
            ], 64))), 128)),
            F.$slots.actions ? (t(), a("td", zl)) : k("", !0)
          ])
        ])) : k("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), T($t, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, Ye({ _: 2 }, [
        F.$slots["clear-filters"] ? {
          name: "actions",
          fn: j(() => [
            H(F.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), T($t, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, Ye({ _: 2 }, [
        F.$slots["empty-actions"] ? {
          name: "actions",
          fn: j(() => [
            H(F.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : k("", !0)
    ], 2));
  }
}), Tt = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of l)
    n[r] = s;
  return n;
}, jl = /* @__PURE__ */ Tt(Ol, [["__scopeId", "data-v-64f5e507"]]), Ll = ["aria-label"], Vl = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, Tl = { class: "text-base font-semibold" }, Dl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Fl = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, El = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, Xe = /* @__PURE__ */ O({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(null);
    let i = null;
    const d = K(!1);
    function u(p) {
      d.value = p.target === p.currentTarget;
    }
    function c(p) {
      d.value && p.target === p.currentTarget && !n.busy && r("close"), d.value = !1;
    }
    function g(p) {
      if (!n.open)
        return;
      if (p.key === "Escape" && !n.busy) {
        p.stopPropagation(), r("close");
        return;
      }
      if (p.key !== "Tab" || !s.value)
        return;
      const b = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (b.length === 0)
        return;
      const C = b[0], w = b[b.length - 1];
      p.shiftKey && document.activeElement === C ? (p.preventDefault(), w.focus()) : !p.shiftKey && document.activeElement === w && (p.preventDefault(), C.focus());
    }
    return ce(
      () => n.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", g), ze(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", g), i?.focus(), i = null);
      }
    ), be(() => document.removeEventListener("keydown", g)), (p, b) => (t(), T(qe, { to: "body" }, [
      D(De, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), a("div", {
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
              o("div", Vl, [
                o("h2", Tl, f(e.title), 1),
                e.description ? (t(), a("p", Dl, f(e.description), 1)) : k("", !0)
              ]),
              o("div", Fl, [
                H(p.$slots, "default")
              ]),
              o("div", El, [
                H(p.$slots, "footer")
              ])
            ], 8, Ll)
          ], 32)) : k("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Il = 160, He = /* @__PURE__ */ O({
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
    const n = e, r = K(!1), s = K(null), i = K(null), d = K({ top: 0, left: 0, minWidth: 0 }), u = K(null);
    let c = null;
    function g(M) {
      !n.dismissOnPanelClick || M.target?.closest("input, select, textarea, label, [data-keep-open]") || $();
    }
    async function p() {
      c && (clearTimeout(c), c = null), !r.value && (r.value = !0, await ze(), S());
    }
    function b() {
      c = setTimeout($, 180);
    }
    async function C() {
      u.value = null, r.value = !r.value, r.value && (await ze(), S());
    }
    async function w(M, _) {
      u.value = { x: M, y: _ }, r.value = !0, await ze(), S();
    }
    function $() {
      r.value = !1, u.value = null;
    }
    function S() {
      const M = s.value, _ = i.value;
      if (!M || !_)
        return;
      const A = _.getBoundingClientRect(), N = 8, E = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : M.getBoundingClientRect();
      let te, U;
      if (n.placement === "bottom")
        te = E.bottom + n.offset, te + A.height > window.innerHeight - N && E.top - A.height - n.offset > N && (te = E.top - A.height - n.offset), U = n.align === "end" && !u.value ? E.right - A.width : E.left;
      else {
        te = E.top;
        const G = n.placement === "right", W = E.right + n.offset + A.width < window.innerWidth - N, ne = E.left - n.offset - A.width > N;
        U = (G ? W || !ne : !ne && W) ? E.right + n.offset : E.left - n.offset - A.width;
      }
      U = Math.min(Math.max(N, U), window.innerWidth - A.width - N), te = Math.min(Math.max(N, te), window.innerHeight - A.height - N), d.value = { top: te, left: U, minWidth: Math.max(E.width, Il) };
    }
    function h(M) {
      if (!r.value)
        return;
      const _ = M.target;
      s.value?.contains(_) || i.value?.contains(_) || (_ instanceof Element ? _ : _.parentElement)?.closest("[data-pk-overlay]") || $();
    }
    function v(M) {
      M.key === "Escape" && r.value && (M.stopPropagation(), $());
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
    return ge(() => {
      document.addEventListener("pointerdown", h), document.addEventListener("keydown", v), window.addEventListener("scroll", m, !0), window.addEventListener("resize", m);
    }), be(() => {
      c && clearTimeout(c), document.removeEventListener("pointerdown", h), document.removeEventListener("keydown", v), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
    }), l({ close: $, openAt: w }), (M, _) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: _[2] || (_[2] = (A) => e.hoverable && p()),
      onPointerleave: _[3] || (_[3] = (A) => e.hoverable && b())
    }, [
      o("div", { onClick: C }, [
        H(M.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(qe, { to: "body" }, [
        D(De, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: j(() => [
            r.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: z([
                "bg-popover text-popover-foreground fixed z-[100] w-max overflow-hidden rounded-md border p-1.5 shadow-lg",
                e.width
              ]),
              style: le({
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
              onPointerenter: _[0] || (_[0] = (A) => e.hoverable && p()),
              onPointerleave: _[1] || (_[1] = (A) => e.hoverable && b()),
              onClick: g
            }, [
              H(M.$slots, "panel", { close: $ })
            ], 38)) : k("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), Nl = ["disabled"], Rl = { class: "py-0.5" }, Ul = ["disabled", "onClick"], Hl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Kl = ["d"], ql = ["disabled"], Gl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wl = ["d"], Zl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, Jl = ["disabled", "onClick"], Yl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ql = ["d"], Xl = { class: "text-muted-foreground text-sm" }, eo = { class: "text-foreground font-medium tabular-nums" }, to = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, ao = ["disabled"], no = { class: "text-muted-foreground text-sm" }, lo = { class: "text-foreground font-medium tabular-nums" }, oo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, so = ["disabled"], Qw = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(null), i = K(!1), d = y(() => n.allMatching ? n.total : n.count), u = y(() => d.value !== void 0), c = y(() => u.value && d.value === 0), g = y(() => n.actions.filter((v) => !v.destructive)), p = y(() => n.actions.filter((v) => v.destructive)), b = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function C(v) {
      return b[v.color ?? "gray"] ?? b.gray;
    }
    function w(v) {
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
    const h = (v) => new Intl.NumberFormat().format(v);
    return (v, m) => (t(), a(P, null, [
      D(He, null, {
        trigger: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...m[5] || (m[5] = [
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
          ])], 8, Nl)
        ]),
        panel: j(() => [
          o("div", Rl, [
            (t(!0), a(P, null, V(g.value, (M) => (t(), a("button", {
              key: M.key,
              type: "button",
              role: "menuitem",
              class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(M)]),
              disabled: e.busy,
              onClick: (_) => w(M)
            }, [
              (t(), a("svg", Hl, [
                o("path", {
                  d: x(de)(M.icon)
                }, null, 8, Kl)
              ])),
              R(" " + f(M.label), 1)
            ], 10, Ul))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: m[0] || (m[0] = (M) => i.value = !0)
            }, [
              (t(), a("svg", Gl, [
                o("path", {
                  d: x(de)("download")
                }, null, 8, Wl)
              ])),
              m[6] || (m[6] = R(" Export CSV ", -1))
            ], 8, ql)) : k("", !0),
            p.value.length ? (t(), a("div", Zl, [
              (t(!0), a(P, null, V(p.value, (M) => (t(), a("button", {
                key: M.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (_) => w(M)
              }, [
                (t(), a("svg", Yl, [
                  o("path", {
                    d: x(de)(M.icon ?? "trash")
                  }, null, 8, Ql)
                ])),
                R(" " + f(M.label), 1)
              ], 8, Jl))), 128))
            ])) : k("", !0)
          ])
        ]),
        _: 1
      }),
      D(Xe, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: m[2] || (m[2] = (M) => s.value = null)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[1] || (m[1] = (M) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: z([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || c.value,
            onClick: $
          }, f(s.value?.label), 11, ao)
        ]),
        default: j(() => [
          o("p", Xl, [
            m[7] || (m[7] = R(" This will affect ", -1)),
            o("span", eo, [
              u.value ? (t(), a(P, { key: 1 }, [
                R(f(h(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            m[8] || (m[8] = R(" . ", -1))
          ]),
          c.value ? (t(), a("p", to, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : k("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(Xe, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: m[4] || (m[4] = (M) => i.value = !1)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[3] || (m[3] = (M) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || c.value,
            onClick: S
          }, " Export CSV ", 8, so)
        ]),
        default: j(() => [
          o("p", no, [
            m[9] || (m[9] = R(" This will export ", -1)),
            o("span", lo, [
              u.value ? (t(), a(P, { key: 1 }, [
                R(f(h(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            m[10] || (m[10] = R(" . ", -1))
          ]),
          c.value ? (t(), a("p", oo, " Nothing matches the current filters - there is nothing to export. ")) : k("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), ro = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, io = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, uo = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, co = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, fo = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", ro, [
      l.$slots.tabs ? (t(), a("div", io, [
        H(l.$slots, "tabs")
      ])) : k("", !0),
      l.$slots.title ? (t(), a("div", uo, [
        H(l.$slots, "title")
      ])) : k("", !0),
      l.$slots.toolbar ? (t(), a("div", {
        key: 2,
        class: z(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        H(l.$slots, "toolbar")
      ], 2)) : k("", !0),
      H(l.$slots, "default"),
      l.$slots.pagination ? (t(), a("div", co, [
        H(l.$slots, "pagination")
      ])) : k("", !0)
    ]));
  }
}), Ae = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Gt = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", Xw = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", mo = ["aria-expanded"], po = ["aria-label", "onClick"], vo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, go = { class: "ml-auto flex shrink-0 items-center gap-1" }, ho = {
  key: 0,
  class: "border-b p-1"
}, bo = ["placeholder"], xo = { class: "max-h-60 overflow-y-auto p-1" }, yo = ["aria-selected", "onMouseenter", "onClick"], ko = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Dt = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(null), i = K(null), d = K(null), u = K(!1), c = K(""), g = K(0), p = K({ top: 0, left: 0, width: 0 }), b = y(
      () => n.modelValue.map(
        (U) => n.options.find((G) => G.value === U) ?? {
          value: U,
          label: String(U)
        }
      ).filter(Boolean)
    ), C = y(() => n.searchable ?? n.options.length > 6), w = y(() => {
      const U = new Set(n.modelValue), G = c.value.trim().toLowerCase();
      return n.options.filter((W) => !U.has(W.value)).filter((W) => G ? W.label.toLowerCase().includes(G) : !0);
    }), $ = y(() => n.max !== null && n.modelValue.length >= n.max);
    function S() {
      const U = s.value, G = i.value;
      if (!U || !G)
        return;
      const W = U.getBoundingClientRect(), ne = G.getBoundingClientRect(), ae = 8;
      let J = W.bottom + 4;
      J + ne.height > window.innerHeight - ae && W.top - ne.height - 4 > ae && (J = W.top - ne.height - 4), p.value = {
        top: J,
        left: Math.min(Math.max(ae, W.left), window.innerWidth - W.width - ae),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: W.width
      };
    }
    async function h() {
      n.disabled || u.value || (u.value = !0, c.value = "", g.value = 0, await ze(), S(), d.value?.focus());
    }
    function v() {
      u.value = !1, c.value = "";
    }
    function m() {
      u.value ? v() : h();
    }
    function M(U) {
      $.value || (r("update:modelValue", [...n.modelValue, U.value]), c.value = "", g.value = 0, ze(() => {
        S(), d.value?.focus();
      }));
    }
    function _(U) {
      r(
        "update:modelValue",
        n.modelValue.filter((G) => G !== U)
      ), ze(S);
    }
    function A() {
      r("update:modelValue", []), ze(S);
    }
    function N(U) {
      if (!n.disabled) {
        if (U.key === "Escape" && u.value) {
          U.stopPropagation(), v();
          return;
        }
        if (U.key === "Backspace" && c.value === "" && n.modelValue.length > 0) {
          _(n.modelValue[n.modelValue.length - 1]);
          return;
        }
        if (!u.value && (U.key === "ArrowDown" || U.key === "Enter")) {
          U.preventDefault(), h();
          return;
        }
        if (u.value) {
          if (U.key === "ArrowDown")
            U.preventDefault(), g.value = Math.min(g.value + 1, w.value.length - 1);
          else if (U.key === "ArrowUp")
            U.preventDefault(), g.value = Math.max(g.value - 1, 0);
          else if (U.key === "Enter") {
            U.preventDefault();
            const G = w.value[g.value];
            G && M(G);
          }
        }
      }
    }
    function E(U) {
      if (!u.value)
        return;
      const G = U.target;
      s.value?.contains(G) || i.value?.contains(G) || v();
    }
    function te() {
      u.value && S();
    }
    return ce(w, (U) => {
      g.value > U.length - 1 && (g.value = Math.max(0, U.length - 1));
    }), ge(() => {
      document.addEventListener("pointerdown", E), window.addEventListener("scroll", te, !0), window.addEventListener("resize", te);
    }), be(() => {
      document.removeEventListener("pointerdown", E), window.removeEventListener("scroll", te, !0), window.removeEventListener("resize", te);
    }), (U, G) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: N
    }, [
      o("div", {
        class: z(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          u.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": u.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: m
      }, [
        (t(!0), a(P, null, V(b.value, (W) => (t(), a("span", {
          key: W.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          R(f(W.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${W.label}`,
            onClick: ve((ne) => _(W.value), ["stop"])
          }, [...G[1] || (G[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, po)
        ]))), 128)),
        b.value.length === 0 ? (t(), a("span", vo, f(e.placeholder), 1)) : k("", !0),
        o("span", go, [
          b.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ve(A, ["stop"])
          }, " Clear ")) : k("", !0),
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...G[2] || (G[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, mo),
      (t(), T(qe, { to: "body" }, [
        D(De, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: j(() => [
            u.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: le({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              C.value ? (t(), a("div", ho, [
                me(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": G[0] || (G[0] = (W) => c.value = W),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: N
                }, null, 40, bo), [
                  [we, c.value]
                ])
              ])) : k("", !0),
              o("div", xo, [
                (t(!0), a(P, null, V(w.value, (W, ne) => (t(), a("button", {
                  key: W.value,
                  type: "button",
                  class: z(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", ne === g.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": ne === g.value,
                  onMouseenter: (ae) => g.value = ne,
                  onClick: (ae) => M(W)
                }, f(W.label), 43, yo))), 128)),
                w.value.length === 0 ? (t(), a("p", ko, [
                  $.value ? (t(), a(P, { key: 0 }, [
                    R("You have selected the maximum.")
                  ], 64)) : c.value ? (t(), a(P, { key: 1 }, [
                    R("Nothing matches “" + f(c.value) + "”.", 1)
                  ], 64)) : (t(), a(P, { key: 2 }, [
                    R("Everything is selected.")
                  ], 64))
                ])) : k("", !0)
              ])
            ], 4)) : k("", !0)
          ]),
          _: 1
        })
      ]))
    ], 544));
  }
}), $o = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", wo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, Co = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Je(e = {}) {
  const l = e.variant ?? "default", n = e.size ?? "default";
  return [$o, wo[l], Co[n], e.class].filter(Boolean).join(" ");
}
const re = /* @__PURE__ */ O({
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
    const l = e, n = y(
      () => Je({ variant: l.variant, size: l.size, class: l.class })
    ), r = y(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), T($e(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: z(n.value)
    }, {
      default: j(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), So = { class: "flex items-center gap-2" }, Mo = ["onUpdate:modelValue", "onChange"], Bo = ["value"], _o = ["onUpdate:modelValue"], Ao = ["value"], Po = ["onUpdate:modelValue"], zo = ["onUpdate:modelValue", "multiple"], Oo = ["value"], jo = ["onUpdate:modelValue", "type"], Lo = ["aria-label", "onClick"], Vo = { class: "flex items-center gap-2" }, To = /* @__PURE__ */ O({
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
    const n = e, r = l, s = () => ({ logic: "and", rules: [] }), i = K(n.modelValue ? structuredClone(n.modelValue) : s());
    ce(
      () => n.modelValue,
      (m) => {
        i.value = m ? structuredClone(m) : s();
      }
    );
    const d = (m) => "rules" in m, u = y(() => Object.keys(n.fields));
    function c(m) {
      const M = m ? n.fields[m]?.kind : void 0;
      return M ? n.operators[M] ?? [] : [];
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
    function b() {
      const m = u.value[0];
      i.value.rules.push({
        field: m,
        operator: c(m)[0],
        value: void 0
      }), p();
    }
    function C() {
      i.value.rules.push(s()), p();
    }
    function w(m) {
      i.value.rules.splice(m, 1), p();
    }
    function $(m) {
      m.operator = c(m.field)[0], m.value = void 0, p();
    }
    const S = y(() => n.depth + 1 < n.maxDepth);
    function h() {
      i.value = s(), p(), r("apply", null);
    }
    function v() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (m, M) => {
      const _ = Pt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: z(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", So, [
          me(o("select", {
            "onUpdate:modelValue": M[0] || (M[0] = (A) => i.value.logic = A),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...M[1] || (M[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Re, i.value.logic]
          ]),
          M[2] || (M[2] = o("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), a(P, null, V(i.value.rules, (A, N) => (t(), a("div", {
          key: N,
          class: "flex items-start gap-2"
        }, [
          d(A) ? (t(), T(_, {
            key: 0,
            modelValue: i.value.rules[N],
            "onUpdate:modelValue": [(E) => i.value.rules[N] = E, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(P, { key: 1 }, [
            me(o("select", {
              "onUpdate:modelValue": (E) => A.field = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (E) => $(A)
            }, [
              (t(!0), a(P, null, V(u.value, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(e.fields[E].label), 9, Bo))), 128))
            ], 40, Mo), [
              [Re, A.field]
            ]),
            me(o("select", {
              "onUpdate:modelValue": (E) => A.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(P, null, V(c(A.field), (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(g[E] ?? E), 9, Ao))), 128))
            ], 40, _o), [
              [Re, A.operator]
            ]),
            A.field && e.fields[A.field]?.kind === "boolean" ? me((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (E) => A.value = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...M[3] || (M[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, Po)), [
              [Re, A.value]
            ]) : A.field && e.fields[A.field]?.options?.length ? me((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (E) => A.value = E,
              multiple: e.fields[A.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(P, null, V(e.fields[A.field].options, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(E), 9, Oo))), 128))
            ], 40, zo)), [
              [Re, A.value]
            ]) : me((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (E) => A.value = E,
              type: A.field && e.fields[A.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, jo)), [
              [La, A.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(A) ? "group" : "rule"}`,
            onClick: (E) => w(N)
          }, " × ", 8, Lo)
        ]))), 128)),
        o("div", Vo, [
          D(re, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: b
          }, {
            default: j(() => [...M[4] || (M[4] = [
              R("Add rule", -1)
            ])]),
            _: 1
          }),
          S.value ? (t(), T(re, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: C
          }, {
            default: j(() => [...M[5] || (M[5] = [
              R(" Add group ", -1)
            ])]),
            _: 1
          })) : k("", !0),
          e.root ? (t(), a(P, { key: 1 }, [
            M[8] || (M[8] = o("span", { class: "flex-1" }, null, -1)),
            D(re, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: j(() => [...M[6] || (M[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            D(re, {
              type: "button",
              size: "sm",
              onClick: v
            }, {
              default: j(() => [...M[7] || (M[7] = [
                R(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : k("", !0)
        ])
      ], 2);
    };
  }
}), Ft = /* @__PURE__ */ O({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = he(e, l);
    return (i, d) => (t(), T(x(oa), oe({ "data-slot": "sheet" }, x(s)), {
      default: j((u) => [
        H(i.$slots, "default", Me(Ve(u)))
      ]),
      _: 3
    }, 16));
  }
});
function X(...e) {
  return Fn(Dn(e));
}
function e4(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Do = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class");
    return (r, s) => (t(), T(x(zt), oe({
      "data-slot": "sheet-overlay",
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, x(n)), {
      default: j(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Et = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class", "side"), i = he(s, r);
    return (d, u) => (t(), T(x(Ot), null, {
      default: j(() => [
        D(Do),
        D(x(jt), oe({
          "data-slot": "sheet-content",
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...d.$attrs, ...x(i) }), {
          default: j(() => [
            H(d.$slots, "default"),
            D(x(Ge), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                D(x(Lt), { class: "size-4" }),
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
}), Fo = { class: "flex flex-col gap-2" }, Eo = { class: "flex items-center gap-2 md:hidden" }, Io = { class: "relative min-w-0 flex-1" }, No = ["placeholder", "title", "aria-label"], Ro = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, Uo = { class: "flex max-h-[85vh] flex-col" }, Ho = { class: "flex-1 overflow-y-auto px-4 py-3" }, Ko = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, qo = { class: "text-xs font-medium" }, Go = ["value", "onChange"], Wo = ["value"], Zo = { class: "mb-4" }, Jo = { class: "flex flex-col gap-1" }, Yo = ["disabled", "onClick"], Qo = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, Xo = {
  key: 1,
  class: "mb-4"
}, es = { class: "flex flex-col gap-1" }, ts = ["onClick"], as = { class: "border-t p-4" }, ns = ["disabled"], ls = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, os = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, ss = ["placeholder", "title", "aria-label"], rs = ["aria-label"], is = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, ds = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, us = { class: "text-xs font-medium" }, cs = ["value", "onChange"], fs = ["value"], ms = { class: "grid grid-cols-2 gap-2" }, ps = ["value", "onChange"], vs = ["value", "onChange"], gs = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, hs = ["value", "onChange"], bs = ["value", "onChange"], xs = {
  key: 4,
  class: "flex items-center gap-2"
}, ys = ["aria-checked", "onClick"], ks = { class: "text-xs" }, $s = ["onClick"], ws = ["value", "onChange"], Cs = ["value"], Ss = ["disabled", "onClick"], Ms = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Bs = ["disabled", "onClick"], _s = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, As = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Ps = ["aria-pressed", "aria-label", "title"], zs = ["aria-label", "title"], Os = { class: "flex flex-col gap-0.5 p-1" }, js = ["onClick"], Ls = ["onClick"], Vs = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, Ts = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Ds = ["dusk"], Fs = ["aria-label", "onClick"], Es = /* @__PURE__ */ O({
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
    indicators: { default: () => [] }
  },
  emits: ["update:search", "apply-filters", "apply-columns", "clear", "toggle-reorder", "group", "clear-filter", "clear-filters"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(!1), i = K(n.search);
    ce(
      () => n.search,
      (Z) => {
        Z !== i.value && (i.value = Z);
      }
    );
    let d;
    ce(i, (Z) => {
      clearTimeout(d), d = setTimeout(() => {
        Z !== n.search && r("update:search", Z);
      }, 250);
    });
    const u = K({ ...n.filters });
    ce(
      () => n.filters,
      (Z) => {
        u.value = { ...Z };
      },
      { deep: !0 }
    );
    const c = y(
      () => n.filterSchema.filter(
        (Z) => n.filters[Z.key] !== null && n.filters[Z.key] !== void 0
      ).length
    ), g = y(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), p = y(() => n.search !== "" || c.value > 0), b = y(() => n.indicators.length ? n.indicators : n.filterSchema.filter((Z) => n.filters[Z.key] !== null && n.filters[Z.key] !== void 0).map((Z) => ({
      key: Z.key,
      label: `${Z.label}: ${String(n.filters[Z.key])}`,
      removable: !0
    })));
    function C(Z) {
      r("group", Z);
    }
    function w(Z) {
      r("clear-filter", Z);
    }
    function $(Z) {
      return Z.type === "multiselect";
    }
    function S(Z) {
      const B = u.value[Z.key];
      return Array.isArray(B) ? B : B == null ? [] : [B];
    }
    function h(Z) {
      return S(Z).filter(
        (B) => typeof B == "string" || typeof B == "number"
      );
    }
    function v(Z) {
      return U(Z).flatMap(
        (B) => typeof B.value == "string" || typeof B.value == "number" ? [{ value: B.value, label: B.label }] : []
      );
    }
    function m(Z, B) {
      u.value = { ...u.value, [Z.key]: B === "" ? null : B };
    }
    function M(Z, B) {
      const I = u.value[Z.key];
      if (typeof I != "string" || !I.includes(".."))
        return "";
      const [L, Y] = I.split("..");
      return B === "from" ? L ?? "" : Y ?? "";
    }
    function _(Z, B, I) {
      const L = B === "from" ? I : M(Z, "from"), Y = B === "to" ? I : M(Z, "to");
      u.value = {
        ...u.value,
        [Z.key]: L && Y ? `${L}..${Y}` : null
      };
    }
    function A(Z, B, I) {
      const L = B === "from" ? I : M(Z, "from"), Y = B === "to" ? I : M(Z, "to");
      u.value = {
        ...u.value,
        [Z.key]: L || Y ? `${L}..${Y}` : null
      };
    }
    function N(Z) {
      r("apply-filters", { ...u.value }), Z();
    }
    function E(Z, B) {
      u.value[Z] = B, r("apply-filters", { ...u.value });
    }
    function te() {
      u.value = Object.fromEntries(n.filterSchema.map((Z) => [Z.key, null]));
    }
    function U(Z) {
      return Z.type === "boolean" ? [
        { value: !0, label: Z.trueLabel ?? "Yes" },
        { value: !1, label: Z.falseLabel ?? "No" }
      ] : Z.type === "daterange" ? Object.entries(Z.presets ?? {}).map(([B, I]) => ({
        value: B,
        label: I
      })) : (Z.options ?? []).map(
        (B) => typeof B == "object" && B !== null && "value" in B ? { value: B.value, label: B.label } : { value: B, label: String(B) }
      );
    }
    const G = K(new Set(n.hidden));
    ce(
      () => n.hidden,
      (Z) => {
        G.value = new Set(Z);
      },
      { deep: !0 }
    );
    function W(Z) {
      const B = new Set(G.value);
      B.has(Z) ? B.delete(Z) : B.add(Z), G.value = B, r("apply-columns", [...B]);
    }
    function ne() {
      G.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function ae() {
      r("apply-filters", { ...u.value }), s.value = !1;
    }
    function J() {
      i.value = "", r("clear");
    }
    return (Z, B) => (t(), a("div", Fo, [
      o("div", Eo, [
        o("div", Io, [
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
          me(o("input", {
            "onUpdate:modelValue": B[0] || (B[0] = (I) => i.value = I),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Ae)])
          }, null, 10, No), [
            [we, i.value]
          ])
        ]),
        o("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: B[1] || (B[1] = (I) => s.value = !0)
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
          c.value ? (t(), a("span", Ro, f(c.value), 1)) : k("", !0)
        ]),
        D(Ft, {
          open: s.value,
          "onUpdate:open": B[4] || (B[4] = (I) => s.value = I)
        }, {
          default: j(() => [
            D(Et, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", Uo, [
                  B[16] || (B[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", Ho, [
                    e.filterSchema.length ? (t(), a("div", Ko, [
                      o("div", { class: "flex items-center justify-between" }, [
                        B[12] || (B[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: te
                        }, " Reset ")
                      ]),
                      (t(!0), a(P, null, V(e.filterSchema, (I) => (t(), a("div", {
                        key: `mobile-${I.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", qo, f(I.label), 1),
                        I.type !== "multiselect" && I.type !== "querybuilder" && I.type !== "daterange" && I.type !== "numberrange" && I.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: u.value[I.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (L) => m(I, L.target.value)
                        }, [
                          B[13] || (B[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), a(P, null, V(U(I), (L) => (t(), a("option", {
                            key: String(L.value),
                            value: L.value
                          }, f(L.label), 9, Wo))), 128))
                        ], 40, Go)) : k("", !0)
                      ]))), 128))
                    ])) : k("", !0),
                    o("div", Zo, [
                      B[14] || (B[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", Jo, [
                        (t(!0), a(P, null, V(e.columns, (I) => (t(), a("button", {
                          key: `mobile-col-${I.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: I.locked,
                          onClick: (L) => W(I.key)
                        }, [
                          o("span", null, f(I.label), 1),
                          G.value.has(I.key) ? k("", !0) : (t(), a("span", Qo, "On"))
                        ], 8, Yo))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", Xo, [
                      B[15] || (B[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", es, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: B[2] || (B[2] = (I) => {
                            C(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), a(P, null, V(e.groups, (I) => (t(), a("button", {
                          key: I.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (L) => {
                            C(I.key), s.value = !1;
                          }
                        }, f(I.label), 9, ts))), 128))
                      ])
                    ])) : k("", !0)
                  ]),
                  o("div", as, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !g.value,
                      onClick: ae
                    }, " Apply filters ", 8, ns)) : k("", !0),
                    p.value ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: B[3] || (B[3] = (I) => {
                        J(), s.value = !1;
                      })
                    }, " Clear search and filters ")) : k("", !0)
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ]),
      o("div", ls, [
        o("div", os, [
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
          me(o("input", {
            "onUpdate:modelValue": B[5] || (B[5] = (I) => i.value = I),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Ae)])
          }, null, 10, ss), [
            [we, i.value]
          ]),
          i.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: B[6] || (B[6] = (I) => i.value = "")
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
          ])])) : k("", !0)
        ]),
        e.filterSchema.length ? (t(), T(He, {
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
              c.value ? (t(), a("span", is, f(c.value), 1)) : k("", !0)
            ], 10, rs)
          ]),
          panel: j(({ close: I }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              B[20] || (B[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: te
              }, " Reset ")
            ]),
            B[23] || (B[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", ds, [
              (t(!0), a(P, null, V(e.filterSchema, (L) => (t(), a("div", {
                key: L.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", us, f(L.label), 1),
                $(L) ? (t(), T(Dt, {
                  key: 0,
                  "model-value": h(L),
                  options: v(L),
                  placeholder: `Any ${L.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Y) => u.value[L.key] = Y.length ? Y : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : L.type === "querybuilder" ? (t(), T(To, {
                  key: 1,
                  "model-value": u.value[L.key] ?? null,
                  fields: L.fields ?? {},
                  operators: L.operators ?? {},
                  "max-depth": L.maxDepth ?? 5,
                  onApply: (Y) => E(L.key, Y)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : L.type === "daterange" ? (t(), a(P, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[L.key] == "string" && !String(u.value[L.key]).includes("..") ? u.value[L.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Y) => m(L, Y.target.value)
                  }, [
                    B[21] || (B[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(P, null, V(U(L), (Y) => (t(), a("option", {
                      key: String(Y.value),
                      value: Y.value
                    }, f(Y.label), 9, fs))), 128))
                  ], 40, cs),
                  o("div", ms, [
                    o("input", {
                      type: "date",
                      value: M(L, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => _(
                        L,
                        "from",
                        Y.target.value
                      )
                    }, null, 40, ps),
                    o("input", {
                      type: "date",
                      value: M(L, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => _(
                        L,
                        "to",
                        Y.target.value
                      )
                    }, null, 40, vs)
                  ])
                ], 64)) : L.type === "numberrange" ? (t(), a("div", gs, [
                  o("input", {
                    type: "number",
                    value: M(L, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => A(
                      L,
                      "from",
                      Y.target.value
                    )
                  }, null, 40, hs),
                  o("input", {
                    type: "number",
                    value: M(L, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => A(
                      L,
                      "to",
                      Y.target.value
                    )
                  }, null, 40, bs)
                ])) : L.type === "boolean" ? (t(), a("div", xs, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[L.key] === !0,
                    class: z([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[L.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Y) => m(L, u.value[L.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: z(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[L.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, ys),
                  o("span", ks, f(L.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: z([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[L.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Y) => m(L, u.value[L.key] === !1 ? null : !1)
                  }, f(L.falseLabel ?? "No") + " only ", 11, $s)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[L.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Y) => m(L, Y.target.value)
                }, [
                  B[22] || (B[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), a(P, null, V(U(L), (Y) => (t(), a("option", {
                    key: String(Y.value),
                    value: Y.value
                  }, f(Y.label), 9, Cs))), 128))
                ], 40, ws))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !g.value,
              onClick: (L) => N(I)
            }, " Apply filters ", 8, Ss)
          ]),
          _: 1
        })) : k("", !0),
        D(He, { "dismiss-on-panel-click": !1 }, {
          trigger: j(() => [...B[24] || (B[24] = [
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
            B[27] || (B[27] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", Ms, [
              (t(!0), a(P, null, V(e.columns, (I) => (t(), a("button", {
                key: I.key,
                type: "button",
                class: z(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", I.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: I.locked,
                onClick: (L) => W(I.key)
              }, [
                G.value.has(I.key) ? (t(), a("span", As)) : (t(), a("svg", _s, [...B[25] || (B[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                R(" " + f(I.label), 1)
              ], 10, Bs))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: ne
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
        e.reorderable ? (t(), a("button", {
          key: 1,
          type: "button",
          class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: B[7] || (B[7] = (I) => r("toggle-reorder"))
        }, [...B[28] || (B[28] = [
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
        ])], 10, Ps)) : k("", !0),
        e.groups.length ? (t(), T(He, {
          key: 2,
          align: "end"
        }, {
          trigger: j(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
              "aria-label": e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records",
              title: e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records"
            }, [...B[29] || (B[29] = [
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
            ])], 10, zs)
          ]),
          panel: j(({ close: I }) => [
            o("div", Os, [
              o("button", {
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (L) => {
                  C(null), I();
                }
              }, " No grouping ", 10, js),
              (t(!0), a(P, null, V(e.groups, (L) => (t(), a("button", {
                key: L.key,
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === L.key ? "text-primary font-medium" : ""]),
                onClick: (Y) => {
                  C(L.key), I();
                }
              }, f(L.label), 11, Ls))), 128))
            ])
          ]),
          _: 1
        })) : k("", !0),
        p.value ? (t(), a("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: J
        }, " Clear ")) : k("", !0),
        e.loading ? (t(), a("span", Vs, "Loading…")) : k("", !0)
      ]),
      b.value.length ? (t(), a("div", Ts, [
        (t(!0), a(P, null, V(b.value, (I) => (t(), a("span", {
          key: I.key + I.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${I.key}`
        }, [
          R(f(I.label) + " ", 1),
          I.removable !== !1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${I.label}`,
            onClick: (L) => w(I.key)
          }, [...B[30] || (B[30] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Fs)) : k("", !0)
        ], 8, Ds))), 128)),
        b.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: B[8] || (B[8] = (I) => r("clear-filters"))
        }, " Clear all ")) : k("", !0)
      ])) : k("", !0)
    ]));
  }
}), Is = { class: "min-w-0" }, Ns = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, Rs = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, Us = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, Hs = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, Ks = { class: "w-full border-collapse text-sm" }, qs = { class: "bg-muted/40" }, Gs = { class: "divide-y" }, Ws = ["href"], Zs = {
  key: 1,
  class: "text-muted-foreground"
}, Js = {
  key: 0,
  class: "flex justify-center"
}, Ys = ["disabled"], Qs = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Xs = ["href"], t4 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = _t(), i = y(() => n.columns.filter((C) => C.type !== "image")), d = y(() => !!s.actions), u = y(() => !!n.title || d.value), c = y(() => n.filterSchema.length > 0), g = y(
      () => n.columns.map((C) => ({ key: C.key, label: C.label, locked: !0 }))
    );
    function p(C, w) {
      return w == null || w === "" ? "None" : C.type === "date" || C.type === "datetime" ? new Date(String(w)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...C.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof w == "number" ? new Intl.NumberFormat().format(w) : String(w);
    }
    function b(C) {
      return C == null || C === "";
    }
    return (C, w) => (t(), T(fo, null, Ye({
      default: j(() => [
        e.loading && e.rows.length === 0 ? (t(), a("div", Us, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T($t, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, Ye({ _: 2 }, [
          C.$slots.illustration ? {
            name: "illustration",
            fn: j(() => [
              H(C.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          C.$slots["empty-actions"] ? {
            name: "actions",
            fn: j(() => [
              H(C.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), a("div", Hs, [
          o("table", Ks, [
            o("thead", qs, [
              o("tr", null, [
                (t(!0), a(P, null, V(i.value, ($) => (t(), a("th", {
                  key: $.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f($.label), 1))), 128))
              ])
            ]),
            o("tbody", Gs, [
              (t(!0), a(P, null, V(e.rows, ($, S) => (t(), a("tr", {
                key: $.id ?? S,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), a(P, null, V(i.value, (h) => (t(), a("td", {
                  key: h.key,
                  class: z(["px-3 whitespace-nowrap", [
                    h.mono ? "font-mono text-xs" : "",
                    h.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  H(C.$slots, `cell:${h.key}`, {
                    row: $,
                    value: $[h.key],
                    column: h
                  }, () => [
                    e.recordBase && $.id != null && h === i.value[0] ? (t(), a("a", {
                      key: 0,
                      href: `${e.recordBase}/${$.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, f(p(h, $[h.key])), 9, Ws)) : b($[h.key]) ? (t(), a("span", Zs, " None ")) : (t(), a(P, { key: 2 }, [
                      R(f(p(h, $[h.key])), 1)
                    ], 64))
                  ])
                ], 2))), 128))
              ]))), 128))
            ])
          ])
        ])) : k("", !0)
      ]),
      _: 2
    }, [
      u.value ? {
        name: "title",
        fn: j(() => [
          o("div", Is, [
            e.title ? (t(), a("h3", Ns, f(e.title), 1)) : k("", !0)
          ]),
          d.value ? (t(), a("div", Rs, [
            H(C.$slots, "actions")
          ])) : k("", !0)
        ]),
        key: "0"
      } : void 0,
      c.value ? {
        name: "toolbar",
        fn: j(() => [
          D(Es, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: g.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": w[0] || (w[0] = ($) => r("update:search", $)),
            onApplyFilters: w[1] || (w[1] = ($) => r("apply-filters", $)),
            onClearFilters: w[2] || (w[2] = ($) => r("clear-filters")),
            onClearFilter: w[3] || (w[3] = ($) => r("clear-filter", $)),
            onClear: w[4] || (w[4] = ($) => r("clear-filters")),
            onApplyColumns: w[5] || (w[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: j(() => [
          e.nextCursor ? (t(), a("div", Js, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: w[6] || (w[6] = ($) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, Ys)
          ])) : e.capped ? (t(), a("p", Qs, [
            R(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), a("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Xs)) : (t(), a(P, { key: 1 }, [
              R("Open the full list to search or filter the rest.")
            ], 64))
          ])) : k("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), er = { class: "flex items-center gap-2 overflow-x-auto" }, tr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ar = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nr = { class: "flex flex-col" }, lr = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, or = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, sr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, rr = /* @__PURE__ */ O({
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
    function s(c) {
      return n.failedStep !== null && c === n.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : n.failedStep !== null && c > n.failedStep ? "" : c < n.activeStep ? "bg-primary text-primary-foreground border-primary" : c === n.activeStep ? "border-primary text-primary" : "";
    }
    function i(c) {
      if (n.failedStep !== null) {
        if (c === n.failedStep)
          return "text-destructive font-medium";
        if (c > n.failedStep)
          return "text-muted-foreground/60";
      }
      return c === n.activeStep ? "text-foreground font-medium" : c < n.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function d(c) {
      return n.failedStep !== null ? c < n.failedStep : c < n.activeStep;
    }
    function u(c) {
      return n.failedStep === c;
    }
    return (c, g) => (t(), a("ol", er, [
      (t(!0), a(P, null, V(e.steps, (p, b) => (t(), a("li", {
        key: b,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T($e(e.interactive ? "button" : "div"), oe({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(b)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: b > e.activeStep } : {}, {
          onClick: (C) => e.interactive && b <= e.activeStep && r("update:activeStep", b)
        }), {
          default: j(() => [
            o("span", {
              class: z(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(b)])
            }, [
              u(b) ? (t(), a("svg", tr, [...g[0] || (g[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(b) ? (t(), a("svg", ar, [...g[1] || (g[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(P, { key: 2 }, [
                R(f(b + 1), 1)
              ], 64))
            ], 2),
            o("span", nr, [
              o("span", null, f(p.label), 1),
              p.description ? (t(), a("span", lr, f(p.description), 1)) : k("", !0)
            ]),
            e.hasError(b) ? (t(), a("span", or)) : k("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        b < e.steps.length - 1 ? (t(), a("span", sr)) : k("", !0)
      ]))), 128))
    ]));
  }
}), tt = /* @__PURE__ */ new Map();
function ke(e, l) {
  tt.set(e, l);
}
function ir(e) {
  return tt.get(e);
}
function a4(e) {
  return tt.has(e);
}
function n4() {
  return [...tt.keys()].sort();
}
function l4() {
  tt.clear();
}
class dr extends Error {
  fieldErrors;
  constructor(l, n = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function o4(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [n, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[n] = s);
  }
  return l;
}
function ur(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function cr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const fr = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, mr = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K({});
    ce(
      () => n.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), T(Xe, {
      open: e.open,
      title: e.title,
      description: e.description,
      busy: e.processing,
      onClose: u[1] || (u[1] = (c) => r("close"))
    }, {
      footer: j(() => [
        D(re, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (c) => r("close"))
        }, {
          default: j(() => [...u[2] || (u[2] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(re, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            R(f(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: ve(i, ["prevent"])
        }, [
          e.generalError ? (t(), a("p", fr, f(e.generalError), 1)) : k("", !0),
          (t(!0), a(P, null, V(e.fields, (c) => (t(), T(Ke, {
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
}), pr = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(Na), oe({ "data-slot": "checkbox" }, x(i), {
      class: x(X)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j((c) => [
        D(x(Ra), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            H(d.$slots, "default", Me(Ve(c)), () => [
              D(x(ca), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ue = /* @__PURE__ */ O({
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
    const n = e, r = l, s = he(ue(n, "class"), r);
    return (i, d) => (t(), T(x(Ua), oe({ "data-slot": "switch" }, x(s), {
      class: x(X)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j(() => [
        D(x(Ha), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), vr = ["accept", "disabled"], gr = { class: "text-sm font-medium" }, hr = { key: 0 }, br = { key: 1 }, xr = { class: "text-muted-foreground text-xs" }, yr = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, kr = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, $r = ["src"], wr = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Cr = { class: "min-w-0 flex-1" }, Sr = { class: "block truncate text-sm font-medium" }, Mr = { class: "text-muted-foreground text-xs" }, Br = ["href"], _r = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, va = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(null), i = K(!1), d = K(null), u = K(null), c = K(null), g = y(() => n.accept.map((M) => `.${M}`).join(",")), p = y(() => c.value ?? n.modelValue?.url ?? null), b = y(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(n.maxKilobytes * 1024)}`);
    function C(M) {
      if (!M)
        return "";
      const _ = ["B", "KB", "MB", "GB"];
      let A = M, N = 0;
      for (; A >= 1024 && N < _.length - 1; )
        A /= 1024, N++;
      return `${A.toFixed(A < 10 && N > 0 ? 1 : 0)} ${_[N]}`;
    }
    function w(M) {
      return M.split(".").pop()?.toLowerCase() ?? "";
    }
    function $(M) {
      return n.accept.length && !n.accept.includes(w(M.name)) ? `${w(M.name).toUpperCase() || "That"} files are not accepted here.` : M.size > n.maxKilobytes * 1024 ? `That file is ${C(M.size)}; the limit is ${C(n.maxKilobytes * 1024)}.` : null;
    }
    async function S(M) {
      const _ = M?.[0];
      if (!(!_ || n.disabled) && (u.value = $(_), !u.value)) {
        h(), n.image && _.type.startsWith("image/") && (c.value = URL.createObjectURL(_)), d.value = 0;
        try {
          const A = await n.upload(_, (N) => {
            d.value = N;
          });
          r("update:modelValue", A);
        } catch (A) {
          u.value = A instanceof Error ? A.message : "The upload failed.", h();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function h() {
      c.value && URL.revokeObjectURL(c.value), c.value = null;
    }
    async function v() {
      const M = n.modelValue;
      h(), u.value = null, r("update:modelValue", null), M && !M.url && n.discard && await n.discard(M.value).catch(() => {
      });
    }
    function m(M) {
      i.value = !1, S(M.dataTransfer?.files ?? null);
    }
    return (M, _) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", kr, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, $r)) : (t(), a("span", wr, f(w(e.modelValue.name) || "file"), 1)),
        o("span", Cr, [
          o("span", Sr, f(e.modelValue.name), 1),
          o("span", Mr, [
            R(f(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(P, { key: 0 }, [
              _[4] || (_[4] = R(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Br)
            ], 64)) : (t(), a(P, { key: 1 }, [
              R(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? k("", !0) : (t(), a("button", {
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
      ])) : (t(), a("label", {
        key: 0,
        class: z(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: _[1] || (_[1] = ve((A) => i.value = !0, ["prevent"])),
        onDragleave: _[2] || (_[2] = ve((A) => i.value = !1, ["prevent"])),
        onDrop: ve(m, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: g.value,
          disabled: e.disabled,
          onChange: _[0] || (_[0] = (A) => S(A.target.files))
        }, null, 40, vr),
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
        o("span", gr, [
          d.value === null ? (t(), a("span", hr, "Drop a file or click to choose")) : (t(), a("span", br, "Uploading…"))
        ]),
        o("span", xr, f(b.value), 1),
        d.value !== null ? (t(), a("span", yr, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: le({ width: `${d.value}%` })
          }, null, 4)
        ])) : k("", !0)
      ], 34)),
      u.value ? (t(), a("p", _r, f(u.value), 1)) : k("", !0)
    ]));
  }
}), Ar = { class: "flex flex-col gap-2" }, Pr = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, zr = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Or = { class: "flex flex-col gap-1" }, jr = ["onUpdate:modelValue", "disabled", "aria-label"], Lr = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Vr = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Tr = ["onUpdate:modelValue", "disabled", "aria-label"], Dr = ["disabled", "aria-label", "onClick"], Fr = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Er = { class: "flex items-center gap-3" }, Ir = ["disabled"], Nr = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Rr = /* @__PURE__ */ O({
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
    const d = K(u(n.modelValue));
    function u(S) {
      return S ? Object.entries(S).map(([h, v]) => ({
        uid: i++,
        key: h,
        value: v ?? ""
      })) : [];
    }
    ce(
      () => n.modelValue,
      (S) => {
        JSON.stringify(S ?? null) !== JSON.stringify(c()) && (d.value = u(S));
      }
    );
    function c() {
      const S = {};
      for (const h of d.value) {
        const v = h.key.trim();
        v !== "" && (S[v] = h.value);
      }
      return Object.keys(S).length ? S : null;
    }
    function g() {
      r("update:modelValue", c());
    }
    const p = y(() => {
      const S = /* @__PURE__ */ new Map();
      for (const h of d.value) {
        const v = h.key.trim();
        v !== "" && S.set(v, (S.get(v) ?? 0) + 1);
      }
      return new Set([...S.entries()].filter(([, h]) => h > 1).map(([h]) => h));
    }), b = y(
      () => new Set(
        d.value.map((S) => S.key.trim()).filter((S) => S !== "" && !s.test(S))
      )
    ), C = y(() => n.maxPairs !== null && d.value.length >= n.maxPairs);
    function w() {
      C.value || n.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function $(S) {
      d.value = d.value.filter((h) => h.uid !== S), g();
    }
    return (S, h) => (t(), a("div", Ar, [
      d.value.length ? (t(), a("div", Pr, [
        o("div", zr, [
          o("span", null, f(e.keyLabel), 1),
          o("span", null, f(e.valueLabel), 1),
          h[0] || (h[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(P, null, V(d.value, (v) => (t(), a("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", Or, [
            me(o("input", {
              "onUpdate:modelValue": (m) => v.key = m,
              type: "text",
              class: z([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(v.key.trim()) || b.value.has(v.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: g
            }, null, 42, jr), [
              [we, v.key]
            ]),
            b.value.has(v.key.trim()) ? (t(), a("p", Lr, " Letters, numbers, underscores and dashes only. ")) : p.value.has(v.key.trim()) ? (t(), a("p", Vr, " Used twice - only the last value will be saved. ")) : k("", !0)
          ]),
          me(o("input", {
            "onUpdate:modelValue": (m) => v.value = m,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: g
          }, null, 40, Tr), [
            [we, v.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${v.key || "this entry"}`,
            onClick: (m) => $(v.uid)
          }, [...h[1] || (h[1] = [
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
          ])], 8, Dr)
        ]))), 128))
      ])) : (t(), a("p", Fr, " Nothing here yet. ")),
      o("div", Er, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || C.value,
          onClick: w
        }, [
          h[2] || (h[2] = o("svg", {
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
          R(" Add " + f(e.keyLabel.toLowerCase()), 1)
        ], 8, Ir),
        e.maxPairs !== null ? (t(), a("p", Nr, f(d.value.length) + " of " + f(e.maxPairs), 1)) : k("", !0)
      ])
    ]));
  }
}), Ur = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Hr = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Kr = ["disabled", "title", "aria-label", "onClick"], qr = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gr = ["d"], Wr = ["disabled"], Zr = ["contenteditable", "data-placeholder"], Jr = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Yr = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(null);
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
    ], u = y(() => d.filter(($) => n.toolbar.includes($.id))), c = y(() => n.toolbar.includes("link")), g = K(0);
    function p() {
      const $ = s.value?.innerHTML ?? "", S = (s.value?.innerText ?? "").trim();
      g.value = S.length;
      const h = S === "" ? null : $;
      i = h, r("update:modelValue", h);
    }
    function b($) {
      n.disabled || (s.value?.focus(), document.execCommand($.command, !1, $.argument), p());
    }
    function C() {
      if (n.disabled)
        return;
      const $ = window.prompt("Link address");
      $ && (s.value?.focus(), document.execCommand("createLink", !1, $), p());
    }
    function w($) {
      $.preventDefault();
      const S = $.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, S), p();
    }
    return ge(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", g.value = s.value.innerText.trim().length);
    }), ce(
      () => n.modelValue,
      ($) => {
        $ !== i && s.value && (s.value.innerHTML = $ ?? "", g.value = s.value.innerText.trim().length);
      }
    ), ($, S) => (t(), a("div", Ur, [
      o("div", Hr, [
        (t(!0), a(P, null, V(u.value, (h) => (t(), a("button", {
          key: h.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: h.label,
          "aria-label": h.label,
          onMousedown: S[0] || (S[0] = ve(() => {
          }, ["prevent"])),
          onClick: (v) => b(h)
        }, [
          (t(), a("svg", qr, [
            o("path", {
              d: h.path
            }, null, 8, Gr)
          ]))
        ], 40, Kr))), 128)),
        c.value ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: S[1] || (S[1] = ve(() => {
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
        ])], 40, Wr)) : k("", !0)
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
        onPaste: w
      }, null, 42, Zr),
      e.maxLength !== null ? (t(), a("div", Jr, f(g.value) + " / " + f(e.maxLength), 1)) : k("", !0)
    ]));
  }
}), Qr = /* @__PURE__ */ Tt(Yr, [["__scopeId", "data-v-32c63bc7"]]), Xr = {
  key: 1,
  class: "flex flex-col gap-2"
}, ei = { class: "flex items-center justify-between gap-2" }, ti = ["for"], ai = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, ni = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs leading-snug"
}, li = ["aria-label", "disabled"], oi = {
  key: 7,
  class: "flex flex-col gap-2"
}, si = ["id", "value", "disabled"], ri = ["value"], ii = {
  key: 0,
  class: "relative"
}, di = ["disabled"], ui = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, ci = { class: "max-h-56 overflow-y-auto p-1" }, fi = ["onClick"], mi = {
  key: 8,
  class: "relative"
}, pi = ["disabled", "aria-invalid"], vi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, gi = { class: "max-h-56 overflow-y-auto p-1" }, hi = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, bi = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, xi = ["onClick"], yi = ["id", "value", "disabled", "aria-invalid"], ki = ["value"], $i = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, wi = { class: "text-muted-foreground" }, Ci = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Si = { class: "text-muted-foreground" }, Mi = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Bi = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, _i = ["aria-label", "disabled"], Ai = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Pi = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, zi = ["aria-label", "disabled"], Oi = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], ji = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Li = ["aria-label", "disabled"], Vi = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ti = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Di = ["aria-label", "disabled"], Fi = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Ei = ["disabled", "aria-pressed", "onClick"], Ii = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Ni = ["title", "disabled", "onClick"], Ri = ["href"], Ui = {
  key: 19,
  class: "text-destructive text-xs leading-snug",
  role: "alert"
}, Hi = {
  key: 20,
  class: "text-muted-foreground text-xs leading-snug"
}, Ki = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Ke = /* @__PURE__ */ O({
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
    const n = qt(() => import("./PkRepeater-J84jGe3T.js")), r = qt(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = K(!1), u = K(""), c = K([]), g = K(!1), p = K(null);
    let b;
    ce(u, (se) => {
      s.searchOptions && (clearTimeout(b), g.value = !0, b = setTimeout(async () => {
        try {
          c.value = await s.searchOptions(se);
        } catch {
        } finally {
          g.value = !1;
        }
      }, 200));
    });
    async function C() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, c.value.length === 0 && s.searchOptions)) {
        g.value = !0;
        try {
          c.value = await s.searchOptions("");
        } finally {
          g.value = !1;
        }
      }
    }
    function w(se) {
      p.value = se.label, i("change", se.value), d.value = !1, u.value = "";
    }
    function $() {
      p.value = null, i("change", null);
    }
    const S = st("panelPicker", null), h = st("panelCreateOption", null), v = K(!1), m = K(!1), M = K({}), _ = K(null), A = y(() => ur(s.field)), N = y(() => cr(s.field));
    function E() {
      M.value = {}, _.value = null, v.value = !0, d.value = !1;
    }
    function te() {
      m.value || (v.value = !1, M.value = {}, _.value = null);
    }
    async function U(se) {
      if (h) {
        m.value = !0, M.value = {}, _.value = null;
        try {
          const q = await h.run(s.field.key, { ...se });
          w(q), v.value = !1;
        } catch (q) {
          q instanceof dr ? (M.value = q.fieldErrors, _.value = Object.keys(q.fieldErrors).length === 0 ? q.message : null) : _.value = q instanceof Error ? q.message : "Could not create that option.";
        } finally {
          m.value = !1;
        }
      }
    }
    const G = y(() => {
      if (!s.field.tableSelect || !S?.base)
        return;
      const se = S.returnUrl || "/";
      return `${S.base}/pick/${s.field.key}?return=${encodeURIComponent(se)}`;
    }), W = y(() => s.field.morphTo ?? []), ne = y(() => {
      const se = s.value;
      return se && typeof se == "object" && !Array.isArray(se) ? se : { type: void 0, id: void 0 };
    });
    function ae(se) {
      i("change", { type: se || null, id: null });
    }
    function J(se) {
      i("change", { type: ne.value.type ?? null, id: se });
    }
    function Z(se) {
      p.value = se.label, J(se.value), d.value = !1, u.value = "";
    }
    be(() => clearTimeout(b));
    const B = y(() => ir(s.field.type)), I = y(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function L(se) {
      if (se) {
        if (se.copy) {
          const q = s.value == null ? "" : String(s.value);
          q !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(q);
          return;
        }
        if (se.url && typeof window < "u") {
          window.open(se.url, "_blank", "noopener,noreferrer");
          return;
        }
        se.key && i("affix-action", se.key);
      }
    }
    const Y = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Ae}`;
    function pe(se) {
      const q = document.getElementById(`f-${s.field.key}`);
      if (!(q instanceof HTMLTextAreaElement) && !(q instanceof HTMLInputElement))
        return;
      const F = q.selectionStart ?? q.value.length, ee = q.selectionEnd ?? F;
      q.setRangeText(se, F, ee, "end"), q.dispatchEvent(new Event("input", { bubbles: !0 })), q.focus();
    }
    return (se, q) => (t(), a(P, null, [
      e.field.type === "hidden" ? (t(), a(P, { key: 0 }, [], 64)) : (t(), a("div", Xr, [
        o("div", ei, [
          o("label", {
            for: `f-${e.field.key}`,
            class: z(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            R(f(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", ai, "*")) : k("", !0)
          ], 10, ti),
          e.field.hint ? (t(), a("span", ni, [
            R(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: q[0] || (q[0] = (F) => L(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, li)) : k("", !0)
          ])) : k("", !0)
        ]),
        B.value ? (t(), T($e(B.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": q[1] || (q[1] = (F) => i("change", F))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(va, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": q[2] || (q[2] = (F) => i("change", F))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), T(x(n), {
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
          "onUpdate:modelValue": q[3] || (q[3] = (F) => i("change", F))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(x(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": q[4] || (q[4] = (F) => i("change", F))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(Qr, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": q[5] || (q[5] = (F) => i("change", F))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(Rr, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": q[6] || (q[6] = (F) => i("change", F))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Dt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": q[7] || (q[7] = (F) => i("change", F))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : W.value.length ? (t(), a("div", oi, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: ne.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x(Ae)]),
            onChange: q[8] || (q[8] = (F) => ae(F.target.value))
          }, [
            q[24] || (q[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), a(P, null, V(W.value, (F) => (t(), a("option", {
              key: F.value,
              value: F.value
            }, f(F.label), 9, ri))), 128))
          ], 42, si),
          ne.value.type && e.searchOptions ? (t(), a("div", ii, [
            o("button", {
              type: "button",
              class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Ae)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: z(p.value || ne.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (ne.value.id ? String(ne.value.id) : "Search…")), 3)
            ], 10, di),
            d.value ? (t(), a("div", ui, [
              me(o("input", {
                "onUpdate:modelValue": q[9] || (q[9] = (F) => u.value = F),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [we, u.value]
              ]),
              o("div", ci, [
                (t(!0), a(P, null, V(c.value, (F) => (t(), a("button", {
                  key: String(F.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (ee) => Z(F)
                }, f(F.label), 9, fi))), 128))
              ])
            ])) : k("", !0),
            d.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: q[10] || (q[10] = (F) => d.value = !1)
            })) : k("", !0)
          ])) : k("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", mi, [
          o("button", {
            type: "button",
            class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Ae)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: C
          }, [
            o("span", {
              class: z(p.value || e.value ? "" : "text-muted-foreground")
            }, f(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: ve($, ["stop"])
            }, " ✕ ")) : k("", !0)
          ], 10, pi),
          d.value ? (t(), a("div", vi, [
            me(o("input", {
              "onUpdate:modelValue": q[11] || (q[11] = (F) => u.value = F),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [we, u.value]
            ]),
            o("div", gi, [
              g.value ? (t(), a("p", hi, " Searching… ")) : c.value.length === 0 ? (t(), a("p", bi, " No matches ")) : k("", !0),
              (t(!0), a(P, null, V(c.value, (F) => (t(), a("button", {
                key: String(F.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (ee) => w(F)
              }, f(F.label), 9, xi))), 128)),
              e.field.createOption && x(h) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: E
              }, [
                q[25] || (q[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                R(" " + f(N.value), 1)
              ])) : k("", !0)
            ])
          ])) : k("", !0),
          d.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: q[12] || (q[12] = (F) => d.value = !1)
          })) : k("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x(Ae)]),
          onChange: q[13] || (q[13] = (F) => i("change", F.target.value || null))
        }, [
          q[26] || (q[26] = o("option", { value: "" }, "-", -1)),
          (t(!0), a(P, null, V(e.options, (F) => (t(), a("option", {
            key: String(F.value),
            value: F.value
          }, f(F.label), 9, ki))), 128))
        ], 42, yi)) : e.field.type === "toggle" ? (t(), a("label", $i, [
          D(x(Ue), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": q[14] || (q[14] = (F) => i("change", F))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", wi, f(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), a("label", Ci, [
          D(x(pr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": q[15] || (q[15] = (F) => i("change", F === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", Si, f(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !I.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", x(Ae)]),
          onInput: q[16] || (q[16] = (F) => i("change", F.target.value))
        }, null, 42, Mi)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: z([
            "border-input flex overflow-hidden rounded-md border",
            x(Gt),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Bi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : k("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: q[17] || (q[17] = (F) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, _i)) : k("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: q[18] || (q[18] = (F) => i("change", F.target.value))
          }, null, 40, Ai),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Pi, f(e.field.suffix ?? e.field.suffixIcon), 1)) : k("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: q[19] || (q[19] = (F) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, zi)) : k("", !0)
        ], 2)) : I.value ? (t(), a("div", {
          key: 15,
          class: z([
            "border-input flex h-9 overflow-hidden rounded-md border",
            x(Gt),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", ji, f(e.field.prefix ?? e.field.prefixIcon), 1)) : k("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: q[21] || (q[21] = (F) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Li)) : k("", !0),
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
            class: z(Ki),
            onInput: q[22] || (q[22] = (F) => i("change", F.target.value))
          }, null, 40, Vi),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Ti, f(e.field.suffix ?? e.field.suffixIcon), 1)) : k("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: q[23] || (q[23] = (F) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Di)) : k("", !0)
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
          class: z(Y),
          onInput: q[20] || (q[20] = (F) => i("change", F.target.value))
        }, null, 40, Oi)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", Fi, [
          (t(!0), a(P, null, V(e.field.presets, (F) => (t(), a("button", {
            key: F,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: z([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              x(Ae),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == F ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == F
            ),
            onClick: (ee) => i("change", String(F))
          }, f(F), 11, Ei))), 128))
        ])) : k("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", Ii, [
          (t(!0), a(P, null, V(e.field.chips, (F, ee) => (t(), a("button", {
            key: ee,
            type: "button",
            title: F,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (Q) => pe(String(ee))
          }, f(ee), 9, Ni))), 128))
        ])) : k("", !0),
        G.value ? (t(), a("a", {
          key: 18,
          href: G.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Ri)) : k("", !0),
        e.error ? (t(), a("p", Ui, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", Hi, f(e.field.help), 1)) : k("", !0)
      ])),
      e.field.createOption && x(h) ? (t(), T(mr, {
        key: 2,
        open: v.value,
        title: A.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: m.value,
        errors: M.value,
        "general-error": _.value,
        onClose: te,
        onSubmit: U
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : k("", !0)
    ], 64));
  }
}), qi = { class: "flex min-w-0 items-start gap-2.5" }, Gi = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, Wi = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, Zi = ["d"], Ji = { class: "min-w-0" }, Yi = { class: "text-sm font-semibold" }, Qi = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Xi = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, ed = { class: "border-b px-4 py-3.5 sm:px-5" }, td = { class: "text-sm font-semibold" }, ad = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, nd = {
  key: 4,
  class: "min-w-0 space-y-4"
}, ld = {
  key: 7,
  class: "flex flex-col gap-3"
}, od = { class: "text-sm font-medium" }, sd = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, rd = {
  key: 0,
  class: "mb-1 font-medium"
}, id = ["onClick"], dd = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, ud = { class: "flex items-center justify-between gap-3 border-t p-4" }, cd = ["disabled"], ga = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(!n.node.collapsed), i = K(0), d = K(0), u = y(
      () => (n.node.children ?? []).map((v) => ({
        label: v.label ?? "",
        description: v.description
      }))
    ), c = y(() => n.depth === 0), g = y(() => {
      const v = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, m = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        v[n.node.align ?? "start"] ?? "items-start",
        m[n.node.gap ?? "md"] ?? "gap-4",
        n.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = y(() => {
      const v = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return v[n.node.tone ?? "info"] ?? v.info;
    }), b = y(() => {
      const v = n.node.columns ?? 1;
      return v >= 3 ? "sm:grid-cols-3" : v === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function C(v) {
      const m = v.children?.length ?? 1;
      return m >= 3 ? "md:grid-cols-3" : m === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function w(v = 1) {
      return v >= 4 ? "md:col-span-4" : v === 3 ? "md:col-span-3" : v === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function $(v) {
      const m = [], M = (_) => {
        _.component === "field" && _.key && m.push(_.key), _.children?.forEach(M);
      };
      return M(v), m.some((_) => n.errors[_]);
    }
    function S(v) {
      if (v.hidden)
        return !1;
      const m = v.visibleWhen;
      return m ? n.values[m.field] == m.value : !0;
    }
    function h(v) {
      if (n.upload)
        return (m, M) => n.upload(v, m, M);
    }
    return (v, m) => {
      const M = Pt("SchemaNode", !0);
      return e.node.component === "field" && S(e.node) ? (t(), T(Ke, {
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
        upload: h(e.node.key),
        discard: e.discard,
        onChange: m[0] || (m[0] = (_) => r("change", e.node.key, _)),
        onAffixAction: m[1] || (m[1] = (_) => r("affix-action", e.node.key, _))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && S(e.node) ? (t(), a("section", {
        key: 1,
        class: z(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: z(["flex items-start justify-between gap-3", [
            c.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: m[2] || (m[2] = (_) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", qi, [
            e.node.icon ? (t(), a("div", Gi, [
              (t(), a("svg", Wi, [
                o("path", {
                  d: x(de)(e.node.icon)
                }, null, 8, Zi)
              ]))
            ])) : k("", !0),
            o("div", Ji, [
              o("h3", Yi, f(e.node.label), 1),
              e.node.description ? (t(), a("p", Qi, f(e.node.description), 1)) : k("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), a("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...m[24] || (m[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : k("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [b.value, c.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
            key: A,
            node: _,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: z(_.span && _.span >= 2 ? "sm:col-span-2" : ""),
            onChange: m[3] || (m[3] = (N, E) => r("change", N, E)),
            onAffixAction: m[4] || (m[4] = (N, E) => r("affix-action", N, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : k("", !0)
      ], 2)) : e.node.component === "card" && S(e.node) ? (t(), a("section", Xi, [
        o("header", ed, [
          o("h3", td, f(e.node.title), 1),
          e.node.description ? (t(), a("p", ad, f(e.node.description), 1)) : k("", !0)
        ]),
        o("div", {
          class: z(["grid grid-cols-1 gap-4 px-4 py-4", b.value])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
            key: A,
            node: _,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[5] || (m[5] = (N, E) => r("change", N, E)),
            onAffixAction: m[6] || (m[6] = (N, E) => r("affix-action", N, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && S(e.node) ? (t(), a("div", {
        key: 3,
        class: z(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
          key: A,
          node: _,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: z(_.component === "column" ? w(_.span) : ""),
          onChange: m[7] || (m[7] = (N, E) => r("change", N, E)),
          onAffixAction: m[8] || (m[8] = (N, E) => r("affix-action", N, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && S(e.node) ? (t(), a("div", nd, [
        (t(!0), a(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
          key: A,
          node: _,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[9] || (m[9] = (N, E) => r("change", N, E)),
          onAffixAction: m[10] || (m[10] = (N, E) => r("affix-action", N, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), a("div", {
        key: 5,
        class: z(["grid grid-cols-1 gap-4", b.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
          key: A,
          node: _,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[11] || (m[11] = (N, E) => r("change", N, E)),
          onAffixAction: m[12] || (m[12] = (N, E) => r("affix-action", N, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), a("div", {
        key: 6,
        class: z(["flex", g.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
          key: A,
          node: _,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[13] || (m[13] = (N, E) => r("change", N, E)),
          onAffixAction: m[14] || (m[14] = (N, E) => r("affix-action", N, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", ld, [
        o("legend", od, f(e.node.label), 1),
        e.node.description ? (t(), a("p", sd, f(e.node.description), 1)) : k("", !0),
        o("div", {
          class: z(["grid grid-cols-1 gap-4", b.value])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
            key: A,
            node: _,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[15] || (m[15] = (N, E) => r("change", N, E)),
            onAffixAction: m[16] || (m[16] = (N, E) => r("affix-action", N, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), a("div", {
        key: 8,
        role: "note",
        class: z(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), a("p", rd, f(e.node.title), 1)) : k("", !0),
        o("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 9,
        class: z(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", c.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (_, A) => (t(), a("button", {
            key: A,
            type: "button",
            class: z([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === A ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (N) => i.value = A
          }, [
            R(f(_.label) + " ", 1),
            $(_) ? (t(), a("span", dd)) : k("", !0)
          ], 10, id))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (_, A) => me((t(), a("div", {
          key: A,
          class: z(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(_.children ?? [], (N, E) => (t(), T(M, {
            key: E,
            node: N,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[17] || (m[17] = (te, U) => r("change", te, U)),
            onAffixAction: m[18] || (m[18] = (te, U) => r("affix-action", te, U))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Fe, i.value === A]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), a("div", {
        key: 10,
        class: z(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        D(rr, {
          class: z(["p-4", c.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (_) => $((e.node.children ?? [])[_]),
          "onUpdate:activeStep": m[19] || (m[19] = (_) => d.value = _)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(P, null, V(e.node.children ?? [], (_, A) => me((t(), a("div", {
          key: A,
          class: z(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(_.children ?? [], (N, E) => (t(), T(M, {
            key: E,
            node: N,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[20] || (m[20] = (te, U) => r("change", te, U)),
            onAffixAction: m[21] || (m[21] = (te, U) => r("affix-action", te, U))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Fe, d.value === A]
        ])), 128)),
        o("div", ud, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: m[22] || (m[22] = (_) => d.value--)
          }, " Back ", 8, cd),
          d.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: m[23] || (m[23] = (_) => d.value++)
          }, " Next ")) : k("", !0)
        ])
      ], 2)) : k("", !0);
    };
  }
}), s4 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K({});
    ce(
      () => n.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), T(Xe, {
      open: e.open,
      title: e.title,
      busy: e.processing,
      onClose: u[2] || (u[2] = (c) => r("close"))
    }, {
      footer: j(() => [
        D(re, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (c) => r("close"))
        }, {
          default: j(() => [...u[3] || (u[3] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(re, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            R(f(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: ve(i, ["prevent"])
        }, [
          (t(!0), a(P, null, V(e.form?.nodes ?? [], (c, g) => (t(), T(ga, {
            key: g,
            node: c,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: u[0] || (u[0] = (p, b) => s.value[p] = b)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), fd = ["title"], md = ["aria-label"], pd = ["d"], vd = { class: "sr-only" }, gd = /* @__PURE__ */ O({
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
    }, s = y(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = y(() => l.icons[s.value] ?? l.defaultIcon), d = y(() => n[i.value] ?? n.dot), u = y(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), c = y(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (g, p) => (t(), a("span", {
      class: "inline-flex items-center",
      title: c.value
    }, [
      (t(), a("svg", {
        viewBox: "0 0 24 24",
        class: z(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": c.value
      }, [
        o("path", { d: d.value }, null, 8, pd)
      ], 10, md)),
      o("span", vd, f(c.value), 1)
    ], 8, fd));
  }
}), hd = ["src"], bd = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, xd = /* @__PURE__ */ O({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const l = e, n = K(!1);
    ce(
      () => l.src,
      () => n.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = y(() => {
      const d = typeof l.src == "string" ? l.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = y(() => {
      const d = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return d === "" ? "?" : d.split(/\s+/).slice(0, 2).map((u) => u[0]?.toUpperCase() ?? "").join("");
    });
    return (d, u) => (t(), a("span", {
      class: z(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (c) => n.value = !0)
      }, null, 40, hd)) : e.fallback === "initials" ? (t(), a(P, { key: 1 }, [
        R(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", bd, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : k("", !0)
    ], 2));
  }
}), yd = {
  key: 0,
  class: "text-muted-foreground"
}, kd = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, $d = {
  key: 0,
  class: "font-mono text-xs"
}, wd = {
  key: 1,
  class: "sr-only"
}, Cd = /* @__PURE__ */ O({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = y(() => {
      const s = (l.value ?? "").trim();
      return n.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), a("span", yd, "-")) : (t(), a("span", kd, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: le({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", $d, f(r.value), 1)) : (t(), a("span", wd, f(r.value), 1))
    ]));
  }
}), Sd = { class: "inline-flex items-center" }, Md = ["checked", "aria-label"], Bd = { class: "sr-only" }, r4 = /* @__PURE__ */ O({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const l = e, n = y(() => {
      const s = l.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = y(
      () => n.value ? l.trueLabel ?? "Yes" : l.falseLabel ?? "No"
    );
    return (s, i) => (t(), a("span", Sd, [
      o("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Md),
      o("span", Bd, f(r.value), 1)
    ]));
  }
}), _d = {
  key: 0,
  class: "text-muted-foreground"
}, Ad = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, i4 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = y(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", Ad, f(n.value), 1)) : (t(), a("span", _d, "—"));
  }
}), Pd = {
  key: 0,
  class: "font-mono text-xs"
}, zd = {
  key: 1,
  class: "text-muted-foreground"
}, Od = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, d4 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", Pd, f(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", zd, "—")) : (t(), a("span", Od, f(n.value.length) + " " + f(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), jd = ["data-variant"], Ld = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ee = /* @__PURE__ */ O({
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
    }, r = y(
      () => [Ld, n[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: z(r.value)
    }, [
      H(s.$slots, "default")
    ], 10, jd));
  }
}), Vd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Td = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, u4 = /* @__PURE__ */ O({
  __name: "TagsCell",
  props: {
    value: {},
    limit: { default: null },
    separator: { default: "," }
  },
  setup(e) {
    const l = e;
    function n(d, u) {
      if (d == null || d === "")
        return [];
      if (Array.isArray(d))
        return d.map((c) => c == null ? "" : String(c).trim()).filter((c) => c !== "");
      if (typeof d == "string") {
        const c = d.trim();
        if (c.startsWith("["))
          try {
            const g = JSON.parse(c);
            if (Array.isArray(g))
              return n(g, u);
          } catch {
          }
        return c.split(u).map((g) => g.trim()).filter((g) => g !== "");
      }
      return [String(d)];
    }
    const r = y(() => n(l.value, l.separator)), s = y(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = y(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), a("span", Vd, "None")) : (t(), a("span", Td, [
      (t(!0), a(P, null, V(s.value, (c) => (t(), T(Ee, {
        key: c,
        variant: "secondary"
      }, {
        default: j(() => [
          R(f(c), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), T(Ee, {
        key: 0,
        variant: "outline"
      }, {
        default: j(() => [
          R("+" + f(i.value), 1)
        ]),
        _: 1
      })) : k("", !0)
    ]));
  }
}), Dd = ["aria-checked", "aria-label", "title", "disabled"], Fd = ["value", "disabled"], Ed = ["value"], c4 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = y(() => n.value === !0 || n.value === 1 || n.value === "1"), i = y(() => n.busy || n.disabled), d = y(
      () => s.value ? n.onLabel ?? "Enabled" : n.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function c(g) {
      const p = g.target.value;
      p !== String(n.value ?? "") && r("change", p);
    }
    return (g, p) => e.type === "toggle" ? (t(), a("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: z(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ve(u, ["stop"])
    }, [
      o("span", {
        class: z(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Dd)) : (t(), a("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = ve(() => {
      }, ["stop"])),
      onChange: c
    }, [
      (t(!0), a(P, null, V(e.options, (b, C) => (t(), a("option", {
        key: C,
        value: C
      }, f(b), 9, Ed))), 128))
    ], 40, Fd));
  }
}), It = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Id(e) {
  return e != null && e !== "";
}
function Nd(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function f4(e) {
  const l = y(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: Nd(s),
      group: s.group
    }))
  ), n = y(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = n.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), c = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return It[c] ?? "outline";
  }
  return { columns: l, byKey: n, badgeVariant: r };
}
const Rd = ["disabled", "aria-label", "aria-busy"], Ud = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Hd = ["d"], Kd = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, qd = ["disabled", "onClick"], Gd = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Wd = ["d"], Zd = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, m4 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = y(() => n.busy || n.disabled), i = y(() => String(n.value ?? "")), d = y(() => `Select ${(n.label || "value").trim().toLowerCase()}`);
    function u(b) {
      return typeof b == "boolean" ? b ? "1" : "" : String(b ?? "");
    }
    function c(b) {
      const C = n.colors[u(b)] ?? n.defaultColor ?? "neutral";
      return It[C] ?? "outline";
    }
    function g(b) {
      return n.options[b] ?? b;
    }
    function p(b, C) {
      if (s.value || b === i.value) {
        C();
        return;
      }
      r("change", b), C();
    }
    return (b, C) => (t(), a("div", {
      onClick: C[0] || (C[0] = ve(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), T(Ee, {
        key: 1,
        variant: c(e.value),
        class: "capitalize"
      }, {
        default: j(() => [
          R(f(g(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(He, {
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
            D(Ee, {
              variant: c(e.value),
              class: "capitalize"
            }, {
              default: j(() => [
                R(f(g(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", Ud, [
              o("path", {
                d: x(de)("chevron-down")
              }, null, 8, Hd)
            ]))
          ], 8, Rd)
        ]),
        panel: j(({ close: w }) => [
          o("div", Kd, f(d.value), 1),
          (t(!0), a(P, null, V(e.options, ($, S) => (t(), a("button", {
            key: S,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (h) => p(String(S), w)
          }, [
            D(Ee, {
              variant: c(S),
              class: "capitalize"
            }, {
              default: j(() => [
                R(f($), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(S) === i.value ? (t(), a("svg", Gd, [
              o("path", {
                d: x(de)("check")
              }, null, 8, Wd)
            ])) : (t(), a("span", Zd))
          ], 8, qd))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Jd = { class: "flex items-center justify-end" }, Yd = ["aria-label"], Qd = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Xd = ["d"], eu = ["href"], tu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, au = ["d"], nu = ["disabled", "onClick"], lu = ["d"], ou = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, su = ["disabled", "onClick"], ru = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, iu = ["d"], p4 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = K(null), d = K(null), u = y(() => r.groups.flatMap((h) => h.actions)), c = y(() => u.value.filter((h) => !h.destructive)), g = y(() => u.value.filter((h) => h.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function b(h) {
      return p[h.color ?? "gray"] ?? p.gray;
    }
    const C = y(() => u.value.length === 0);
    function w(h) {
      s("run", h);
    }
    function $(h) {
      C.value || (h.preventDefault(), i.value?.openAt(h.clientX, h.clientY));
    }
    function S(h) {
      if (h.key !== "ArrowDown" && h.key !== "ArrowUp")
        return;
      const v = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (v.length === 0)
        return;
      h.preventDefault();
      const m = v.indexOf(document.activeElement), M = h.key === "ArrowDown" ? 1 : -1, _ = (m + M + v.length) % v.length;
      v[_]?.focus();
    }
    return l({ openContextMenu: $ }), (h, v) => (t(), a("div", Jd, [
      C.value ? k("", !0) : (t(), T(He, {
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
            (t(), a("svg", Qd, [
              o("path", {
                d: x(de)("more-vertical")
              }, null, 8, Xd)
            ]))
          ], 8, Yd)
        ]),
        panel: j(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: S
          }, [
            (t(!0), a(P, null, V(c.value, (m) => (t(), a(P, {
              key: m.key
            }, [
              m.link ? (t(), a("a", {
                key: 0,
                href: m.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", b(m)])
              }, [
                (t(), a("svg", tu, [
                  o("path", {
                    d: x(de)(m.icon)
                  }, null, 8, au)
                ])),
                R(" " + f(m.label), 1)
              ], 10, eu)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", b(m)]),
                disabled: e.busy === m.key,
                onClick: (M) => w(m)
              }, [
                (t(), a("svg", {
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
                    d: x(de)(m.icon)
                  }, null, 8, lu)
                ], 2)),
                R(" " + f(m.label), 1)
              ], 10, nu))
            ], 64))), 128)),
            g.value.length ? (t(), a("div", ou, [
              (t(!0), a(P, null, V(g.value, (m) => (t(), a("button", {
                key: m.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === m.key,
                onClick: (M) => w(m)
              }, [
                (t(), a("svg", ru, [
                  o("path", {
                    d: x(de)(m.icon ?? "trash")
                  }, null, 8, iu)
                ])),
                R(" " + f(m.label), 1)
              ], 8, su))), 128))
            ])) : k("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), wt = {
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
}, Ct = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, rt = 12, it = 20, du = [0, 0.25, 0.5, 0.75, 1], Nt = "alxtexhpanel.appearance", Pe = {
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
}, Te = K({ ...Pe });
let Wt = !1;
const uu = "alxtexhpanel.appearance.vars";
function St(e) {
  return e.theme === "dark";
}
const Zt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, Jt = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function cu(e) {
  const l = wt[e.primary] ?? wt.slate, n = Ct[e.surface] ?? Ct.neutral, r = n.chroma, s = n.hue, d = St(e) ? {
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
    "--pk-row-padding": Zt[e.density] ?? Zt.comfortable,
    "--pk-form-gap": Jt[e.density] ?? Jt.comfortable
  };
}
function Rt() {
  if (typeof window > "u")
    return { ...Pe };
  try {
    const e = localStorage.getItem(Nt);
    if (!e)
      return { ...Pe };
    const l = { ...Pe, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Pe.theme);
    const n = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = n[l.fontSize] ?? Pe.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < rt || l.fontSize > it) && (l.fontSize = Pe.fontSize), l;
  } catch {
    return { ...Pe };
  }
}
function v4(e) {
  const l = Rt(), n = e ? { ...l, ...e } : l;
  if (Te.value = n, Mt(n), e)
    try {
      localStorage.setItem(Nt, JSON.stringify(n));
    } catch {
    }
}
let ha = null;
function g4(e) {
  ha = e;
}
let ba = {};
function fu(e) {
  if (ba = e, !(typeof document > "u") && !Rt().primaryChosen)
    for (const [l, n] of Object.entries(e))
      document.documentElement.style.setProperty(l, n);
}
function Mt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, n = { ...cu(e), ...e.primaryChosen ? {} : ba };
  l.classList.toggle("dark", St(e));
  for (const [r, s] of Object.entries(n))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      uu,
      JSON.stringify({ dark: St(e), theme: e.theme, vars: n })
    );
  } catch {
  }
}
function xa() {
  function e(r) {
    Mt(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Te.value = { ...Te.value, ...r, ...s };
    try {
      localStorage.setItem(Nt, JSON.stringify(Te.value));
    } catch {
    }
    e(Te.value), ha?.({ ...r, ...s });
  }
  function n() {
    l({ ...Pe });
  }
  return ge(() => {
    Wt || (Wt = !0, Te.value = Rt(), Mt(Te.value));
  }), {
    appearance: y(() => Te.value),
    set: l,
    reset: n,
    PRIMARY_COLORS: wt,
    SURFACE_TINTS: Ct,
    FONT_SIZE_MIN: rt,
    FONT_SIZE_MAX: it,
    RADIUS_OPTIONS: du
  };
}
const mu = { class: "flex items-center justify-between border-b px-4 py-3" }, pu = { class: "flex items-center gap-2" }, vu = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, gu = { class: "flex flex-col gap-2" }, hu = { class: "grid grid-cols-8 gap-2" }, bu = ["title", "aria-label", "aria-pressed", "onClick"], xu = { class: "flex flex-col gap-2" }, yu = { class: "grid grid-cols-8 gap-2" }, ku = ["title", "aria-label", "aria-pressed", "onClick"], $u = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, wu = { class: "flex flex-col gap-2" }, Cu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Su = ["aria-pressed", "aria-label", "onClick"], Mu = { class: "text-sm font-semibold" }, Bu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, _u = ["onClick"], Au = { class: "flex flex-col gap-2" }, Pu = { class: "flex items-center justify-between" }, zu = { class: "text-muted-foreground text-xs tabular-nums" }, Ou = { class: "flex items-center gap-2" }, ju = ["disabled"], Lu = ["min", "max", "value"], Vu = ["disabled"], h4 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = xa(), u = K(!1), c = y(() => l.value.sidebarSide === "right"), g = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], b = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], C = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], w = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], $ = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function S(h, v) {
      return `oklch(0.72 ${v * 3} ${h})`;
    }
    return (h, v) => (t(), a(P, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: v[0] || (v[0] = (m) => u.value = !0)
      }, [...v[7] || (v[7] = [
        At('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(qe, { to: "body" }, [
        D(De, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
            u.value ? (t(), a("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: v[1] || (v[1] = (m) => u.value = !1)
            })) : k("", !0)
          ]),
          _: 1
        }),
        D(De, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": c.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": c.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: j(() => [
            u.value ? (t(), a("aside", {
              key: 0,
              class: z(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", c.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", mu, [
                v[9] || (v[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", pu, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...m) => x(r) && x(r)(...m))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: v[3] || (v[3] = (m) => u.value = !1)
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
              o("div", vu, [
                o("section", gu, [
                  v[11] || (v[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", hu, [
                    (t(!0), a(P, null, V(x(s), (m, M) => (t(), a("button", {
                      key: M,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: le({ background: m.value }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": x(l).primary === M,
                      onClick: (_) => x(n)({ primary: M })
                    }, [
                      x(l).primary === M ? (t(), a("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: le({ color: m.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...v[10] || (v[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : k("", !0)
                    ], 12, bu))), 128))
                  ])
                ]),
                o("section", xu, [
                  v[13] || (v[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", yu, [
                    (t(!0), a(P, null, V(x(i), (m, M) => (t(), a("button", {
                      key: M,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: le({ background: S(m.hue, m.chroma) }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": x(l).surface === M,
                      onClick: (_) => x(n)({ surface: M })
                    }, [
                      x(l).surface === M ? (t(), a("svg", $u, [...v[12] || (v[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : k("", !0)
                    ], 12, ku))), 128))
                  ])
                ]),
                o("section", wu, [
                  v[14] || (v[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", Cu, [
                    (t(!0), a(P, null, V(x(d), (m) => (t(), a("button", {
                      key: m,
                      type: "button",
                      class: z([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l).radius === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": x(l).radius === m,
                      "aria-label": `${m}rem radius`,
                      onClick: (M) => x(n)({ radius: m })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: le({ borderRadius: `${Math.min(m, 0.5)}rem` })
                      }, null, 4),
                      R(" " + f(m), 1)
                    ], 10, Su))), 128))
                  ])
                ]),
                (t(!0), a(P, null, V([
                  { label: "Color scheme", key: "theme", options: g },
                  { label: "Card style", key: "cardStyle", options: b },
                  { label: "Density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: C },
                  { label: "Content layout", key: "contentLayout", options: w },
                  { label: "Menu style", key: "menuStyle", options: $ }
                ], (m) => (t(), a("section", {
                  key: m.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", Mu, f(m.label), 1),
                  o("div", Bu, [
                    (t(!0), a(P, null, V(m.options, (M) => (t(), a("button", {
                      key: String(M.value),
                      type: "button",
                      class: z([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l)[m.key] === M.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (_) => x(n)({ [m.key]: M.value })
                    }, f(M.label), 11, _u))), 128))
                  ])
                ]))), 128)),
                o("section", Au, [
                  o("div", Pu, [
                    v[15] || (v[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", zu, f(x(l).fontSize) + "px", 1)
                  ]),
                  o("div", Ou, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize <= x(rt),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (m) => x(n)({ fontSize: x(l).fontSize - 1 }))
                    }, " − ", 8, ju),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: x(rt),
                      max: x(it),
                      value: x(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: v[5] || (v[5] = (m) => x(n)({
                        fontSize: Number(m.target.value)
                      }))
                    }, null, 40, Lu),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize >= x(it),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (m) => x(n)({ fontSize: x(l).fontSize + 1 }))
                    }, " + ", 8, Vu)
                  ])
                ])
              ])
            ], 2)) : k("", !0)
          ]),
          _: 1
        }, 8, ["enter-from-class", "leave-to-class"])
      ]))
    ], 64));
  }
}), Tu = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Du = { class: "flex items-stretch" }, Fu = ["href", "aria-current"], Eu = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Iu = ["d"], Nu = { class: "w-full truncate text-center" }, Ru = {
  key: 0,
  class: "flex-1"
}, Uu = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Hu = ["d"], Ku = { class: "w-full truncate text-center" }, gt = 5, b4 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(
      () => n.items.length <= gt ? n.items : n.items.slice(0, gt - 1)
    ), i = y(() => n.items.length > gt);
    function d(u) {
      return u === "/" ? n.current === "/" : n.current === u || n.current.startsWith(`${u}/`);
    }
    return (u, c) => (t(), a("nav", Tu, [
      o("ul", Du, [
        (t(!0), a(P, null, V(s.value, (g) => (t(), a("li", {
          key: g.key,
          class: "flex-1"
        }, [
          o("a", {
            href: g.href,
            class: z([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(g.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(g.href) ? "page" : void 0
          }, [
            (t(), a("svg", Eu, [
              o("path", {
                d: x(de)(g.icon)
              }, null, 8, Iu)
            ])),
            o("span", Nu, f(g.title), 1)
          ], 10, Fu)
        ]))), 128)),
        i.value ? (t(), a("li", Ru, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: c[0] || (c[0] = (g) => r("more"))
          }, [
            (t(), a("svg", Uu, [
              o("path", {
                d: x(de)("more-horizontal")
              }, null, 8, Hu)
            ])),
            o("span", Ku, f(e.moreLabel), 1)
          ])
        ])) : k("", !0)
      ])
    ]));
  }
}), qu = ["value"], Gu = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", xe = /* @__PURE__ */ O({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    return (s, i) => (t(), a("input", {
      "data-slot": "input",
      value: n.modelValue ?? n.defaultValue,
      class: z([Gu, n.class]),
      onInput: i[0] || (i[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, qu));
  }
}), Wu = ["for"], Ce = /* @__PURE__ */ O({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, n) => (t(), a("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: z([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      H(l.$slots, "default")
    ], 10, Wu));
  }
}), x4 = /* @__PURE__ */ O({
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
      class: z(["size-4 animate-spin", l.$props.class])
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
}), Zu = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Ju = ["id", "name", "value", "disabled", "maxlength"], Yu = ["data-active"], Qu = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, y4 = /* @__PURE__ */ O({
  __name: "PkOtpInput",
  props: {
    modelValue: { default: "" },
    length: { default: 6 },
    disabled: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    name: {},
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(!1), i = K(null);
    ge(() => {
      n.autofocus && i.value?.focus();
    });
    const d = y(
      () => Array.from({ length: n.length }, (g, p) => n.modelValue[p] ?? "")
    ), u = y(() => Math.min(n.modelValue.length, n.length - 1));
    function c(g) {
      const p = g.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, n.length));
    }
    return (g, p) => (t(), a("div", Zu, [
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
        class: "absolute inset-0 z-10 w-full cursor-default bg-transparent text-transparent caret-transparent outline-none disabled:cursor-not-allowed",
        onInput: c,
        onFocus: p[0] || (p[0] = (b) => s.value = !0),
        onBlur: p[1] || (p[1] = (b) => s.value = !1)
      }, null, 40, Ju),
      (t(!0), a(P, null, V(d.value, (b, C) => (t(), a("div", {
        key: C,
        "data-slot": "input-otp-slot",
        "data-active": s.value && C === u.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        R(f(b) + " ", 1),
        s.value && C === u.value && b === "" ? (t(), a("div", Qu, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : k("", !0)
      ], 8, Yu))), 128))
    ]));
  }
}), Xu = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Oe = /* @__PURE__ */ O({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (l, n) => (t(), a("header", {
      class: z(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: z(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), a("p", Xu, f(e.description), 1)) : k("", !0)
    ], 2));
  }
}), ec = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, tc = { class: "min-w-0 space-y-1" }, ac = { class: "flex flex-wrap items-center gap-2.5" }, nc = { class: "text-2xl font-semibold tracking-tight" }, lc = {
  key: 0,
  class: "flex items-center gap-2"
}, oc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, sc = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, k4 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, n) => (t(), a("header", ec, [
      o("div", tc, [
        o("div", ac, [
          o("h1", nc, f(e.title), 1),
          l.$slots.status ? (t(), a("div", lc, [
            H(l.$slots, "status")
          ])) : k("", !0)
        ]),
        e.purpose ? (t(), a("p", oc, f(e.purpose), 1)) : k("", !0)
      ]),
      l.$slots.actions ? (t(), a("div", sc, [
        H(l.$slots, "actions")
      ])) : k("", !0)
    ]));
  }
}), rc = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: z(x(X)(x(uc)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), ic = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: z(x(X)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), dc = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: z(x(X)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), uc = Vt(
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
), cc = { class: "list-inside list-disc text-sm" }, $4 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, n = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(x(rc), { variant: "destructive" }, {
      default: j(() => [
        D(x(Sn), { class: "size-4" }),
        D(x(dc), null, {
          default: j(() => [
            R(f(e.title), 1)
          ]),
          _: 1
        }),
        D(x(ic), null, {
          default: j(() => [
            o("ul", cc, [
              (t(!0), a(P, null, V(n.value, (i, d) => (t(), a("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ya = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, s = ma(n, "modelValue", l, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, d) => me((t(), a("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => Va(s) ? s.value = u : null),
      "data-slot": "input",
      class: z(
        x(X)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          n.class
        )
      )
    }, null, 2)), [
      [we, x(s)]
    ]);
  }
}), fc = { class: "relative" }, mc = ["aria-label"], w4 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const n = e, r = K(!1), s = Ta("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), a("div", fc, [
      D(x(ya), oe({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: x(X)("pr-10", n.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: z(
          x(X)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), T(x(Mn), {
          key: 0,
          class: "size-4"
        })) : (t(), T(x(Bn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, mc)
    ]));
  }
}), ka = "@container min-w-0", pc = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", C4 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", vc = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3", Ie = "w-full min-w-0 px-4 py-6 sm:px-6", S4 = "w-full min-w-0 p-3 sm:p-4", M4 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", B4 = "w-full max-w-5xl";
function _4(e, l) {
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
    const d = Array.from({ length: n }, () => []);
    s.forEach((u, c) => {
      d[c % n].push(u);
    }), r.push({ type: "columns", columns: d }), s = [];
  };
  for (const d of e)
    (d.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
const $a = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", gc = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", hc = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function bc(e) {
  const l = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function xc(e) {
  const l = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function yc(e) {
  const l = URL.createObjectURL(e);
  try {
    const n = await kc(l), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
    r.width = s, r.height = i;
    const d = r.getContext("2d", { willReadFrequently: !0 });
    if (!d)
      return !1;
    d.drawImage(n, 0, 0);
    const { data: u } = d.getImageData(0, 0, s, i);
    for (let c = 3; c < u.length; c += 4)
      if ((u[c] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function kc(e) {
  return new Promise((l, n) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function $c(e) {
  if (bc(e))
    throw new Error(hc);
  if (!xc(e))
    throw new Error($a);
  if (!await yc(e))
    throw new Error(gc);
}
const A4 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Ge), oe({ "data-slot": "sheet-close" }, l), {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wc = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class");
    return (r, s) => (t(), T(x(sa), oe({
      "data-slot": "sheet-description",
      class: x(X)("text-muted-foreground text-sm", l.class)
    }, x(n)), {
      default: j(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P4 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: z(x(X)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), Cc = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: z(x(X)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), Sc = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class");
    return (r, s) => (t(), T(x(ra), oe({
      "data-slot": "sheet-title",
      class: x(X)("text-foreground font-semibold", l.class)
    }, x(n)), {
      default: j(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z4 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(ia), oe({ "data-slot": "sheet-trigger" }, l), {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yt = "sidebar_state", Mc = 3600 * 24 * 7, Bc = "16rem", _c = "18rem", Ac = "3rem", Pc = "b", [ct, zc] = Ka("Sidebar"), Oc = { class: "flex h-full w-full flex-col" }, jc = ["data-state", "data-collapsible", "data-variant", "data-side"], Lc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, O4 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, openMobile: s, setOpenMobile: i } = ct();
    return (d, u) => e.collapsible === "none" ? (t(), a("div", oe({
      key: 0,
      "data-slot": "sidebar",
      class: x(X)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      H(d.$slots, "default")
    ], 16)) : x(n) ? (t(), T(x(Ft), oe({
      key: 1,
      open: x(s)
    }, d.$attrs, { "onUpdate:open": x(i) }), {
      default: j(() => [
        D(x(Et), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: le({
            "--sidebar-width": x(_c)
          })
        }, {
          default: j(() => [
            D(Cc, { class: "sr-only" }, {
              default: j(() => [
                D(Sc, null, {
                  default: j(() => [...u[0] || (u[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(wc, null, {
                  default: j(() => [...u[1] || (u[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", Oc, [
              H(d.$slots, "default")
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
      "data-state": x(r),
      "data-collapsible": x(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: z(
          x(X)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", oe({
        class: x(X)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        o("div", Lc, [
          H(d.$slots, "default")
        ])
      ], 16)
    ], 8, jc));
  }
}), j4 = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: z(
        x(X)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), L4 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: z(x(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), V4 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: z(x(X)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), T4 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(We), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: z(
        x(X)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), D4 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: z(x(X)("w-full text-sm", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), F4 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(We), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: z(
        x(X)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), E4 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: z(x(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), I4 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(ya), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: z(x(X)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), N4 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("main", {
      "data-slot": "sidebar-inset",
      class: z(
        x(X)(
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
      H(n.$slots, "default")
    ], 2));
  }
}), R4 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: z(x(X)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), U4 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(We), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: z(
        x(X)(
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
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), H4 = /* @__PURE__ */ O({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: z(
        x(X)(
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
      H(n.$slots, "default")
    ], 2));
  }
}), Vc = /* @__PURE__ */ O({
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
    const s = he(e, l);
    return (i, d) => (t(), T(x(qa), oe({ "data-slot": "tooltip" }, x(s)), {
      default: j((u) => [
        H(i.$slots, "default", Me(Ve(u)))
      ]),
      _: 3
    }, 16));
  }
}), Tc = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(Ga), null, {
      default: j(() => [
        D(x(Wa), oe({ "data-slot": "tooltip-content" }, { ...x(i), ...d.$attrs }, {
          class: x(X)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: j(() => [
            H(d.$slots, "default"),
            D(x(Za), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), K4 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(x(da), Me(Ve(l)), {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dc = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Ja), oe({ "data-slot": "tooltip-trigger" }, l), {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qt = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(x(We), oe({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(X)(x(Ec)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), q4 = /* @__PURE__ */ O({
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
    const l = e, { isMobile: n, state: r } = ct(), s = ue(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), T(x(Vc), { key: 1 }, {
      default: j(() => [
        D(x(Dc), { "as-child": "" }, {
          default: j(() => [
            D(Qt, Me(Ve({ ...x(s), ...i.$attrs })), {
              default: j(() => [
                H(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(x(Tc), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(n)
        }, {
          default: j(() => [
            typeof e.tooltip == "string" ? (t(), a(P, { key: 0 }, [
              R(f(e.tooltip), 1)
            ], 64)) : (t(), T($e(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(Qt, Me(oe({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: j(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), G4 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: z(x(X)("group/menu-item relative", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), Xt = "animate-pulse rounded-md bg-primary/10", W4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = y(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), a("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: z(x(X)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: z(x(X)(Xt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : k("", !0),
      o("div", {
        class: z(x(X)(Xt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: le({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), Z4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: z(
        x(X)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), J4 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(x(We), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: z(
        x(X)(
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
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), Y4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: z(x(X)("group/menu-sub-item relative", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), Q4 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Tn?.cookie.includes(`${Yt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = Ln("(max-width: 767px)"), i = K(!1), d = ma(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function u(b) {
      d.value = b, document.cookie = `${Yt}=${d.value}; path=/; max-age=${Mc}`;
    }
    function c(b) {
      i.value = b;
    }
    function g() {
      return s.value ? c(!i.value) : u(!d.value);
    }
    Vn("keydown", (b) => {
      b.key === Pc && (b.metaKey || b.ctrlKey) && (b.preventDefault(), g());
    });
    const p = y(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return zc({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: c,
      toggleSidebar: g
    }), (b, C) => (t(), T(x(da), { "delay-duration": 0 }, {
      default: j(() => [
        o("div", oe({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(Bc),
            "--sidebar-width-icon": x(Ac)
          },
          class: x(X)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            n.class
          )
        }, b.$attrs), [
          H(b.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), X4 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: n } = ct();
    return (r, s) => (t(), a("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: z(
        x(X)(
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
      (...i) => x(n) && x(n)(...i))
    }, [
      H(r.$slots, "default")
    ], 2));
  }
}), Fc = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class");
    return (r, s) => (t(), T(x(Ya), oe({ "data-slot": "separator" }, x(n), {
      class: x(X)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), e5 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Fc), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: z(x(X)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), t5 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, toggleSidebar: s } = ct();
    return (i, d) => (t(), T(re, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: z(x(X)("h-7 w-7", l.class)),
      onClick: x(s)
    }, {
      default: j(() => [
        x(n) || x(r) === "collapsed" ? (t(), T(x(_n), { key: 0 })) : (t(), T(x(An), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Ec = Vt(
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
), a5 = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = he(e, l);
    return (i, d) => (t(), T(x(Qa), oe({ "data-slot": "dropdown-menu" }, x(s)), {
      default: j((u) => [
        H(i.$slots, "default", Me(Ve(u)))
      ]),
      _: 3
    }, 16));
  }
}), Ic = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, n5 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(Xa), oe({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        o("span", Ic, [
          D(x(ua), null, {
            default: j(() => [
              H(d.$slots, "indicator-icon", {}, () => [
                D(x(ca), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l5 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(en), null, {
      default: j(() => [
        D(x(tn), oe({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: j(() => [
            H(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), o5 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(an), oe({ "data-slot": "dropdown-menu-group" }, l), {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s5 = /* @__PURE__ */ O({
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
    const l = e, n = ue(l, "inset", "variant", "class"), r = Be(n);
    return (s, i) => (t(), T(x(nn), oe({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, x(r), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: j(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), r5 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, n = ue(l, "class", "inset"), r = Be(n);
    return (s, i) => (t(), T(x(ln), oe({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(X)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: j(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), i5 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = he(e, l);
    return (i, d) => (t(), T(x(on), oe({ "data-slot": "dropdown-menu-radio-group" }, x(s)), {
      default: j(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nc = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, d5 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(sn), oe({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        o("span", Nc, [
          D(x(ua), null, {
            default: j(() => [
              H(d.$slots, "indicator-icon", {}, () => [
                D(x(Pn), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class");
    return (r, s) => (t(), T(x(rn), oe({ "data-slot": "dropdown-menu-separator" }, x(n), {
      class: x(X)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), c5 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: z(x(X)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), f5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = he(e, l);
    return (i, d) => (t(), T(x(dn), oe({ "data-slot": "dropdown-menu-sub" }, x(s)), {
      default: j((u) => [
        H(i.$slots, "default", Me(Ve(u)))
      ]),
      _: 3
    }, 16));
  }
}), m5 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(un), oe({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(X)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: j(() => [
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p5 = /* @__PURE__ */ O({
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
    const l = e, n = ue(l, "class", "inset"), r = Be(n);
    return (s, i) => (t(), T(x(cn), oe({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: j(() => [
        H(s.$slots, "default"),
        D(x(fa), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), v5 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Be(e);
    return (r, s) => (t(), T(x(fn), oe({ "data-slot": "dropdown-menu-trigger" }, x(n)), {
      default: j(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), g5 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(mn), {
      "data-slot": "avatar",
      class: z(x(X)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), h5 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class");
    return (r, s) => (t(), T(x(pn), oe({ "data-slot": "avatar-fallback" }, x(n), {
      class: x(X)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: j(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b5 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(x(vn), oe({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), x5 = /* @__PURE__ */ O({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: z(l.class)
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), y5 = /* @__PURE__ */ O({
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
      class: z(x(X)("flex size-9 items-center justify-center", l.class))
    }, [
      H(n.$slots, "default", {}, () => [
        D(x(zn), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), k5 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: z(x(X)("inline-flex items-center gap-1.5", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), $5 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(We), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: z(x(X)("hover:text-foreground transition-colors", l.class))
    }, {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), w5 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: z(
        x(X)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), C5 = /* @__PURE__ */ O({
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
      class: z(x(X)("text-foreground font-normal", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), S5 = /* @__PURE__ */ O({
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
      class: z(x(X)("[&>svg]:size-3.5", l.class))
    }, [
      H(n.$slots, "default", {}, () => [
        D(x(fa))
      ])
    ], 2));
  }
}), Rc = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Uc = /* @__PURE__ */ O({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class"), r = Be(n);
    return (s, i) => (t(), a("div", Rc, [
      D(x(gn), oe({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(X)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), M5 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class", "viewport"), i = he(s, r);
    return (d, u) => (t(), T(x(hn), oe({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(X)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: j((c) => [
        H(d.$slots, "default", Me(Ve(c))),
        e.viewport ? (t(), T(Uc, { key: 0 })) : k("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), B5 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(bn), oe({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(X)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: j(() => [
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _5 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class"), r = Be(n);
    return (s, i) => (t(), T(x(xn), oe({ "data-slot": "navigation-menu-indicator" }, x(r), {
      class: x(X)(
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
}), A5 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class");
    return (r, s) => (t(), T(x(yn), oe({ "data-slot": "navigation-menu-item" }, x(n), {
      class: x(X)("relative", l.class)
    }), {
      default: j(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P5 = /* @__PURE__ */ O({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = ue(n, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(kn), oe({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(X)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z5 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class"), r = Be(n);
    return (s, i) => (t(), T(x($n), oe({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(X)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: j(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O5 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class"), r = Be(n);
    return (s, i) => (t(), T(x(wn), oe({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(X)(x(Hc)(), "group", l.class)
    }), {
      default: j(() => [
        H(s.$slots, "default"),
        D(x(On), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hc = Vt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), j5 = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = he(e, l);
    return (i, d) => (t(), T(x(oa), oe({ "data-slot": "dialog" }, x(s)), {
      default: j((u) => [
        H(i.$slots, "default", Me(Ve(u)))
      ]),
      _: 3
    }, 16));
  }
}), L5 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Ge), oe({ "data-slot": "dialog-close" }, l), {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kc = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class");
    return (r, s) => (t(), T(x(zt), oe({ "data-slot": "dialog-overlay" }, x(n), {
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: j(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V5 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(Ot), null, {
      default: j(() => [
        D(Kc),
        D(x(jt), oe({ "data-slot": "dialog-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: j(() => [
            H(d.$slots, "default"),
            e.showCloseButton ? (t(), T(x(Ge), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                D(x(Lt)),
                u[0] || (u[0] = o("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : k("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), T5 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class"), r = Be(n);
    return (s, i) => (t(), T(x(sa), oe({ "data-slot": "dialog-description" }, x(r), {
      class: x(X)("text-muted-foreground text-sm", l.class)
    }), {
      default: j(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D5 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: z(x(X)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      H(n.$slots, "default"),
      e.showCloseButton ? (t(), T(x(Ge), {
        key: 0,
        "as-child": ""
      }, {
        default: j(() => [
          D(re, { variant: "outline" }, {
            default: j(() => [...r[0] || (r[0] = [
              R(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : k("", !0)
    ], 2));
  }
}), F5 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: z(x(X)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), E5 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = ue(n, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(Ot), null, {
      default: j(() => [
        D(x(zt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            D(x(jt), oe({
              class: x(X)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...d.$attrs, ...x(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (c) => {
                const g = c.detail.originalEvent, p = g.target;
                (g.offsetX > p.clientWidth || g.offsetY > p.clientHeight) && c.preventDefault();
              })
            }), {
              default: j(() => [
                H(d.$slots, "default"),
                D(x(Ge), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    D(x(Lt), { class: "w-4 h-4" }),
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
}), I5 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class"), r = Be(n);
    return (s, i) => (t(), T(x(ra), oe({ "data-slot": "dialog-title" }, x(r), {
      class: x(X)("text-lg leading-none font-semibold", l.class)
    }), {
      default: j(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N5 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(ia), oe({ "data-slot": "dialog-trigger" }, l), {
      default: j(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R5 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ue(l, "class");
    return (r, s) => (t(), T(x(Cn), oe({ "data-slot": "label" }, x(n), {
      class: x(X)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: j(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U5 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(jn), {
      role: "status",
      "aria-label": "Loading",
      class: z(x(X)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), H5 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: z(
        x(X)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), K5 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: z(x(X)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), q5 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: z(x(X)("px-6", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), G5 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: z(x(X)("text-muted-foreground text-sm", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), W5 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: z(x(X)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), Z5 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: z(
        x(X)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), J5 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: z(x(X)("leading-none font-semibold", l.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), qc = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Gc = { class: "flex items-start gap-3" }, Wc = { class: "min-w-0 flex-1" }, Zc = { class: "text-foreground text-sm font-medium" }, Jc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Y5 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = K(!1), d = K(null), u = K(0);
    Da((g) => (console.error(`[PkBoundary] ${r.label} failed to render`, g), i.value = !0, d.value = g instanceof Error ? g.message : null, s("error", g), !1));
    function c() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: c }), (g, p) => (t(), a("div", {
      class: z(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", qc, [
        o("div", Gc, [
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
          o("div", Wc, [
            o("p", Zc, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), a("p", Jc, f(d.value), 1)) : k("", !0),
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
              R(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? k("", !0) : H(g.$slots, "default", { key: u.value })
    ], 2));
  }
}), Yc = { class: "bg-card rounded-lg border" }, Qc = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Xc = { class: "min-w-0" }, ef = {
  key: 0,
  class: "truncate text-sm font-medium"
}, tf = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, af = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, nf = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, Q5 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, n) => (t(), a("section", Yc, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), a("header", Qc, [
        o("div", Xc, [
          H(l.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", ef, f(e.title), 1)) : k("", !0),
            e.description ? (t(), a("p", tf, f(e.description), 1)) : k("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), a("div", af, [
          H(l.$slots, "actions")
        ])) : k("", !0)
      ])) : k("", !0),
      o("div", {
        class: z(e.padded ? "p-4" : "")
      }, [
        H(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), a("footer", nf, [
        H(l.$slots, "footer")
      ])) : k("", !0)
    ]));
  }
}), wa = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function X5() {
  const e = pa(), l = y(() => e.props.panel?.pageFooter === !0);
  return kt(wa, l), l;
}
const lf = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, of = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, sf = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, e3 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, n = pa(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = y(() => {
      const c = n.props.panel;
      return Array.isArray(c?.footerLinks) ? c.footerLinks : [];
    }), d = st(wa, y(() => !1)), u = y(() => !l.host && x(d) === !0);
    return (c, g) => u.value ? k("", !0) : (t(), a("footer", lf, [
      o("div", of, [
        o("p", null, "© " + f(x(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), a("nav", sf, [
          (t(!0), a(P, null, V(i.value, (p) => (t(), T(x(En), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              R(f(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : k("", !0)
      ])
    ]));
  }
}), rf = { class: "flex shrink-0 flex-col items-center" }, df = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, t3 = /* @__PURE__ */ O({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const l = e, n = y(() => l.kind === "laptop"), r = y(
      () => n.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = y(() => n.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), a("div", rf, [
      o("div", {
        class: z(["relative box-content shadow-2xl", r.value]),
        style: le({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", df)) : k("", !0),
        o("div", {
          class: z(["size-full overflow-hidden bg-white", s.value])
        }, [
          H(i.$slots, "default")
        ], 2)
      ], 6),
      n.value ? (t(), a(P, { key: 0 }, [
        o("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: le({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        o("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: le({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : k("", !0)
    ]));
  }
}), uf = { class: "flex flex-col gap-2" }, cf = { class: "min-w-0 flex-1" }, ff = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, mf = ["disabled", "aria-label", "onClick"], pf = ["disabled", "aria-label", "onClick"], vf = ["disabled", "title", "aria-label", "onClick"], gf = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, hf = ["disabled"], a3 = /* @__PURE__ */ O({
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
    const n = e, r = l;
    let s = 0;
    const i = K(d(n.modelValue));
    function d(v) {
      return Array.isArray(v) ? v.map((m) => ({ uid: s++, data: { ...m } })) : [];
    }
    ce(
      () => n.modelValue,
      (v) => {
        JSON.stringify(v ?? null) !== JSON.stringify(u()) && (i.value = d(v));
      }
    );
    function u() {
      const v = [];
      for (const m of i.value) {
        const M = {};
        let _ = !1;
        for (const A of n.children) {
          const N = m.data[A.key] ?? null;
          M[A.key] = N, N !== null && N !== "" && !(Array.isArray(N) && N.length === 0) && (_ = !0);
        }
        _ && v.push(M);
      }
      return v.length ? v : null;
    }
    function c() {
      r("update:modelValue", u());
    }
    const g = y(() => n.maxItems !== null && i.value.length >= n.maxItems), p = y(() => n.minItems !== null && i.value.length <= n.minItems), b = y(() => n.children.length === 1);
    function C() {
      if (g.value || n.disabled)
        return;
      const v = {};
      for (const m of n.children)
        v[m.key] = null;
      i.value.push({ uid: s++, data: v });
    }
    function w(v) {
      i.value = i.value.filter((m) => m.uid !== v), c();
    }
    function $(v, m) {
      const M = v + m;
      if (M < 0 || M >= i.value.length)
        return;
      const _ = [...i.value], [A] = _.splice(v, 1);
      _.splice(M, 0, A), i.value = _, c();
    }
    function S(v, m, M) {
      const _ = i.value.find((A) => A.uid === v);
      _ && (_.data[m] = M, c());
    }
    function h(v, m) {
      return n.errors[`${n.fieldKey}.${v}.${m}`];
    }
    return (v, m) => (t(), a("div", uf, [
      (t(!0), a(P, null, V(i.value, (M, _) => (t(), a("div", {
        key: M.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: z(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", b.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(_ + 1), 3),
        o("div", cf, [
          b.value ? (t(), T(Ke, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: M.data[e.children[0].key],
            error: h(_, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (A) => S(M.uid, e.children[0].key, A)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", ff, [
            (t(!0), a(P, null, V(e.children, (A) => (t(), T(Ke, {
              key: A.key,
              field: { ...A, disabled: A.disabled || e.disabled },
              value: M.data[A.key],
              error: h(_, A.key),
              options: e.childOptions[A.key] ?? [],
              onChange: (N) => S(M.uid, A.key, N)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: z(["flex shrink-0 items-center gap-0.5", b.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || _ === 0,
            "aria-label": `Move ${e.itemLabel} ${_ + 1} up`,
            onClick: (A) => $(_, -1)
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
          ])], 8, mf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || _ === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${_ + 1} down`,
            onClick: (A) => $(_, 1)
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
          ])], 8, pf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${_ + 1}`,
            onClick: (A) => w(M.uid)
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
          ])], 8, vf)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", gf, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : k("", !0),
      g.value ? k("", !0) : (t(), a("button", {
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
        R(" Add " + f(e.itemLabel.toLowerCase()), 1)
      ], 8, hf))
    ]));
  }
}), bf = { class: "space-y-1" }, xf = { class: "flex items-center gap-1" }, yf = ["disabled", "title", "aria-label", "onClick"], kf = ["aria-pressed"], $f = ["id", "value", "rows", "disabled"], wf = ["innerHTML"], Cf = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(!1), i = y(() => n.modelValue ?? "");
    function d(b) {
      return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = y(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function c(b, C = b) {
      const w = document.getElementById(n.id ?? "");
      if (w === null)
        return;
      const $ = w.selectionStart, S = w.selectionEnd, h = i.value.slice($, S);
      r(
        "update:modelValue",
        `${i.value.slice(0, $)}${b}${h}${C}${i.value.slice(S)}`
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
      () => (n.toolbar ?? Object.keys(g)).filter((b) => b in g)
    );
    return (b, C) => (t(), a("div", bf, [
      o("div", xf, [
        (t(!0), a(P, null, V(p.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: ($) => g[w].run()
        }, f(g[w].label), 9, yf))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (w) => s.value = !s.value)
        }, " Preview ", 8, kf)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, wf)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, $f))
    ]));
  }
}), Sf = { class: "space-y-1" }, Mf = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Bf = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, _f = ["id", "value", "rows", "disabled"], Af = { class: "text-muted-foreground text-xs" }, Pf = {
  key: 0,
  class: "text-destructive text-xs"
}, zf = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(null), i = K(!0), d = y(() => n.modelValue ?? ""), u = y(() => Math.max(d.value.split(`
`).length, 1)), c = y(() => {
      if (n.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (b) {
        return b instanceof Error ? b.message : "Not valid JSON.";
      }
    });
    function g(b) {
      r("update:modelValue", b.target.value);
    }
    function p(b) {
      if (b.key === "Escape") {
        i.value = !1;
        return;
      }
      if (b.key !== "Tab" && (i.value = !0), b.key !== "Tab" || !i.value)
        return;
      b.preventDefault();
      const C = b.target, w = C.selectionStart, $ = C.selectionEnd, S = `${d.value.slice(0, w)}    ${d.value.slice($)}`;
      r("update:modelValue", S), requestAnimationFrame(() => {
        C.selectionStart = C.selectionEnd = w + 4;
      });
    }
    return (b, C) => (t(), a("div", Sf, [
      o("div", Mf, [
        o("div", Bf, [
          (t(!0), a(P, null, V(u.value, (w) => (t(), a("div", { key: w }, f(w), 1))), 128))
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
        }, null, 40, _f)
      ]),
      o("p", Af, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      c.value ? (t(), a("p", Pf, f(c.value), 1)) : k("", !0)
    ]));
  }
}), Of = { class: "space-y-3" }, jf = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Lf = { class: "text-sm font-medium" }, Vf = { class: "flex items-center gap-1" }, Tf = ["disabled", "onClick"], Df = ["disabled", "onClick"], Ff = ["disabled", "onClick"], Ef = { class: "space-y-3 p-3" }, If = { class: "flex flex-wrap items-center gap-2" }, Nf = ["disabled", "onClick"], Rf = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, n3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = y(() => n.modelValue ?? []), i = y(
      () => Object.fromEntries(n.blocks.map((C) => [C.type, C]))
    ), d = y(() => n.maxBlocks !== null && s.value.length >= n.maxBlocks);
    function u(C) {
      r("update:modelValue", C);
    }
    function c(C) {
      d.value || u([...s.value, { type: C, data: {} }]);
    }
    function g(C) {
      u(s.value.filter((w, $) => $ !== C));
    }
    function p(C, w) {
      const $ = C + w;
      if ($ < 0 || $ >= s.value.length)
        return;
      const S = [...s.value], [h] = S.splice(C, 1);
      S.splice($, 0, h), u(S);
    }
    function b(C, w, $) {
      u(
        s.value.map(
          (S, h) => h === C ? { ...S, data: { ...S.data, [w]: $ } } : S
        )
      );
    }
    return (C, w) => (t(), a("div", Of, [
      (t(!0), a(P, null, V(s.value, ($, S) => (t(), a("div", {
        key: `${$.type}-${S}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", jf, [
          o("span", Lf, f(i.value[$.type]?.label ?? $.type), 1),
          o("div", Vf, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === 0,
              "aria-label": "Move up",
              onClick: (h) => p(S, -1)
            }, " ↑ ", 8, Tf),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (h) => p(S, 1)
            }, " ↓ ", 8, Df),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (h) => g(S)
            }, " Remove ", 8, Ff)
          ])
        ]),
        o("div", Ef, [
          (t(!0), a(P, null, V(i.value[$.type]?.fields ?? [], (h) => (t(), T(Ke, {
            key: h.key,
            field: h,
            value: $.data[h.key] ?? null,
            error: e.errors?.[h.key],
            processing: e.disabled,
            onChange: (v) => b(S, h.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", If, [
        (t(!0), a(P, null, V(e.blocks, ($) => (t(), a("button", {
          key: $.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (S) => c($.type)
        }, " + " + f($.label), 9, Nf))), 128)),
        d.value ? (t(), a("span", Rf, f(e.maxBlocks) + " is the maximum here. ", 1)) : k("", !0)
      ])
    ]));
  }
}), Uf = ["name", "value", "checked", "disabled", "onChange"], Hf = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Kf = /* @__PURE__ */ O({
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
    return (i, d) => (t(), a("div", {
      role: "radiogroup",
      class: z(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(P, null, V(e.options, (u) => (t(), a("label", {
        key: String(u.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: u.value,
          checked: s(u),
          disabled: e.disabled,
          onChange: (c) => r("update:modelValue", u.value)
        }, null, 40, Uf),
        R(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Hf, " Nothing to choose from yet. ")) : k("", !0)
    ], 2));
  }
}), qf = ["value", "checked", "disabled", "onChange"], Gf = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Wf = /* @__PURE__ */ O({
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
    const n = e, r = l, s = y(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    );
    function i(c) {
      return s.value.some((g) => g == c.value);
    }
    function d(c) {
      r(
        "update:modelValue",
        i(c) ? s.value.filter((g) => g != c.value) : [...s.value, c.value]
      );
    }
    const u = y(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (c, g) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: le(u.value)
    }, [
      (t(!0), a(P, null, V(e.options, (p) => (t(), a("label", {
        key: String(p.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (b) => d(p)
        }, null, 40, qf),
        R(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Gf, " Nothing to choose from yet. ")) : k("", !0)
    ], 4));
  }
}), Zf = { class: "flex flex-col gap-1.5" }, Jf = ["aria-label", "onClick"], Yf = ["placeholder", "disabled", "maxlength"], Qf = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Xf = ["onClick"], em = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, tm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(""), i = y(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    ), d = y(() => i.value.length >= (n.field.max ?? 25)), u = y(
      () => (n.field.suggestions ?? []).filter(
        (b) => !i.value.some((C) => C.toLowerCase() === b.toLowerCase())
      )
    );
    function c(b) {
      const C = b.trim().slice(0, n.field.maxLength ?? 40);
      if (C === "" || d.value) {
        s.value = "";
        return;
      }
      if (i.value.some((w) => w.toLowerCase() === C.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, C]), s.value = "";
    }
    function g(b) {
      r(
        "update:modelValue",
        i.value.filter((C, w) => w !== b)
      );
    }
    function p(b) {
      if (b.key === "Enter" || b.key === ",") {
        b.preventDefault(), c(s.value);
        return;
      }
      b.key === "Backspace" && s.value === "" && i.value.length > 0 && g(i.value.length - 1);
    }
    return (b, C) => (t(), a("div", Zf, [
      o("div", {
        class: z(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(P, null, V(i.value, (w, $) => (t(), a("span", {
          key: `${w}-${$}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          R(f(w) + " ", 1),
          e.disabled ? k("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${w}`,
            onClick: (S) => g($)
          }, " × ", 8, Jf))
        ]))), 128)),
        me(o("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (w) => s.value = w),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: C[1] || (C[1] = (w) => c(s.value))
        }, null, 40, Yf), [
          [we, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), a("div", Qf, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(P, null, V(u.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: ($) => c(w)
        }, f(w), 9, Xf))), 128))
      ])) : k("", !0),
      d.value ? (t(), a("p", em, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : k("", !0)
    ]));
  }
}), am = 4.5, ea = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Ca(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function ht(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Bt(e) {
  const [l, n, r] = Ca(e);
  return 0.2126 * ht(l) + 0.7152 * ht(n) + 0.0722 * ht(r);
}
function Sa(e, l) {
  const n = Bt(e), r = Bt(l);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function nm(e, l, n) {
  if (!ea.test(e) || !ea.test(l))
    return e;
  const r = Bt(l) > 0.5, s = r ? 0 : 255;
  let i = Ca(e);
  for (let d = 0; d <= 20; d++) {
    const u = lm(i);
    if (Sa(u, l) >= n)
      return u;
    i = i.map((c) => c + (s - c) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function lm(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const om = { class: "flex flex-col gap-2" }, sm = { class: "flex items-center gap-2" }, rm = {
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
}, im = ["value", "disabled", "aria-label"], dm = ["value", "disabled", "placeholder"], um = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, cm = ["aria-label", "title", "onClick"], fm = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, mm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = y(() => typeof n.modelValue == "string" ? n.modelValue : ""), d = y(() => s.test(i.value));
    function u(w) {
      const $ = w.trim();
      if ($ === "")
        return "";
      const S = $.startsWith("#") ? $ : `#${$}`;
      return s.test(S) ? S.toLowerCase() : $;
    }
    function c(w) {
      r("update:modelValue", u(w.target.value));
    }
    const g = y(() => !d.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : Sa(i.value, n.field.contrastBackground)), p = y(() => n.field.contrastMinRatio ?? am), b = y(() => g.value !== null && g.value < p.value);
    function C() {
      n.field.contrastBackground && r(
        "update:modelValue",
        nm(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (w, $) => (t(), a("div", om, [
      o("div", sm, [
        d.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: $[0] || ($[0] = (S) => r("update:modelValue", S.target.value))
        }, null, 40, im)) : (t(), a("span", rm)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: c
        }, null, 40, dm)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", um, [
        (t(!0), a(P, null, V(e.field.presets, (S) => (t(), a("button", {
          key: S,
          type: "button",
          class: z(["size-6 rounded border", i.value.toLowerCase() === S.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: le({ backgroundColor: S }),
          "aria-label": S,
          title: S,
          onClick: (h) => r("update:modelValue", S.toLowerCase())
        }, null, 14, cm))), 128))
      ])) : k("", !0),
      b.value ? (t(), a("p", fm, [
        o("span", null, " This fails contrast at " + f(g.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? k("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : k("", !0)
    ]));
  }
}), pm = ["aria-disabled"], vm = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(null);
    let i = null, d = null, u = null;
    const c = y(() => {
      const C = n.modelValue?.[n.latKey], w = n.modelValue?.[n.lngKey];
      return typeof C == "number" && typeof w == "number" ? { lat: C, lng: w } : n.center ? n.center : n.markers.length > 0 ? { lat: n.markers[0].lat, lng: n.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function g() {
      if (!s.value || i)
        return;
      const C = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = C, i = C.map(s.value).setView([c.value.lat, c.value.lng], n.zoom), C.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), p(), b(), n.pickable && !n.disabled && i.on("click", (w) => {
        r("update:modelValue", {
          [n.latKey]: Number(w.latlng.lat.toFixed(6)),
          [n.lngKey]: Number(w.latlng.lng.toFixed(6))
        });
      });
    }
    function p() {
      if (!(!i || !u))
        for (const C of n.markers) {
          const w = u.circleMarker([C.lat, C.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (C.label || C.popup) && w.bindPopup(`<strong>${C.label ?? ""}</strong>${C.popup ? `<br>${C.popup}` : ""}`);
        }
    }
    function b() {
      if (!i || !u)
        return;
      const C = n.modelValue?.[n.latKey], w = n.modelValue?.[n.lngKey];
      if (typeof C != "number" || typeof w != "number") {
        d && (i.removeLayer(d), d = null);
        return;
      }
      d ? d.setLatLng([C, w]) : d = u.circleMarker([C, w], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([C, w], i.getZoom());
    }
    return ge(() => {
      g();
    }), be(() => {
      i?.remove(), i = null, d = null;
    }), ce(
      () => n.modelValue,
      () => b(),
      { deep: !0 }
    ), (C, w) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: le({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, pm));
  }
}), gm = { class: "flex flex-col gap-2" }, hm = { class: "text-muted-foreground text-xs" }, bm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkMapField",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.modelValue && typeof n.modelValue == "object" ? n.modelValue : null), i = y(() => n.field.latKey ?? "lat"), d = y(() => n.field.lngKey ?? "lng");
    return (u, c) => (t(), a("div", gm, [
      D(vm, {
        "model-value": s.value,
        center: e.field.defaultCenter ?? null,
        zoom: e.field.zoom ?? 12,
        height: e.field.height ?? 280,
        "lat-key": i.value,
        "lng-key": d.value,
        disabled: e.disabled,
        pickable: "",
        "onUpdate:modelValue": c[0] || (c[0] = (g) => r("update:modelValue", g))
      }, null, 8, ["model-value", "center", "zoom", "height", "lat-key", "lng-key", "disabled"]),
      o("p", hm, [
        R(" Click the map to set " + f(i.value) + " / " + f(d.value) + " ", 1),
        s.value ? (t(), a(P, { key: 0 }, [
          R(" (" + f(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + f(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : k("", !0)
      ])
    ]));
  }
}), xm = { class: "flex flex-col gap-2" }, ym = ["width", "height"], km = ["value", "disabled"], $m = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, wm = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(null), i = y(() => {
      if (n.field.from) {
        const c = n.values?.[n.field.from];
        return c == null ? "" : String(c);
      }
      return n.modelValue == null ? "" : String(n.modelValue);
    }), d = y(() => n.field.size ?? 160);
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
    return ge(() => {
      u();
    }), ce(i, () => {
      u();
    }), (c, g) => (t(), a("div", xm, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, ym),
      e.field.from ? (t(), a("p", $m, "From " + f(e.field.from), 1)) : (t(), a("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: g[0] || (g[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, km))
    ]));
  }
}), Cm = { class: "flex flex-col gap-2" }, Sm = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, Mm = ["aria-label"], Bm = {
  key: 0,
  class: "text-destructive text-xs"
}, _m = ["value", "disabled"], Am = {
  key: 2,
  class: "text-muted-foreground text-xs"
}, Pm = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(null), i = K(null), d = y(() => {
      if (n.field.from) {
        const g = n.values?.[n.field.from];
        return g == null ? "" : String(g);
      }
      return n.modelValue == null ? "" : String(n.modelValue);
    }), u = y(() => (n.field.format ?? "CODE128").toUpperCase());
    async function c() {
      if (!s.value)
        return;
      const g = d.value.trim();
      for (i.value = null; s.value.firstChild; )
        s.value.removeChild(s.value.firstChild);
      if (g !== "")
        try {
          const b = (await import("jsbarcode")).default;
          b(s.value, g, {
            format: u.value,
            height: n.field.height ?? 80,
            width: n.field.width ?? 2,
            displayValue: n.field.displayValue !== !1,
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
    }), ce([d, u], () => {
      c();
    }), (g, p) => (t(), a("div", Cm, [
      o("div", Sm, [
        (t(), a("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, Mm))
      ]),
      i.value ? (t(), a("p", Bm, f(i.value), 1)) : k("", !0),
      e.field.from ? (t(), a("p", Am, "From " + f(e.field.from) + " (" + f(u.value) + ")", 1)) : (t(), a("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (b) => r("update:modelValue", b.target.value))
      }, null, 40, _m))
    ]));
  }
}), zm = { class: "mr-2 inline-block w-3 opacity-60" }, Om = {
  key: 0,
  class: "text-muted-foreground p-3"
}, jm = /* @__PURE__ */ O({
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
    function n(d) {
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
        return n(l.values?.[l.field.originalKey]);
      const d = l.modelValue;
      return n(d?.original);
    }), s = y(() => {
      if (l.field.modifiedKey)
        return n(l.values?.[l.field.modifiedKey]);
      const d = l.modelValue;
      return n(d?.modified);
    }), i = y(() => {
      const d = r.value.split(`
`), u = s.value.split(`
`), c = Math.max(d.length, u.length), g = [];
      for (let p = 0; p < c; p++) {
        const b = d[p], C = u[p];
        if (b === C) {
          b !== void 0 && g.push({ kind: "same", text: b });
          continue;
        }
        b !== void 0 && g.push({ kind: "del", text: b }), C !== void 0 && g.push({ kind: "add", text: C });
      }
      return g;
    });
    return (d, u) => (t(), a("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: le({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), a(P, null, V(i.value, (c, g) => (t(), a("div", {
        key: g,
        class: z(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": c.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": c.kind === "add",
          "text-muted-foreground": c.kind === "same"
        }])
      }, [
        o("span", zm, f(c.kind === "add" ? "+" : c.kind === "del" ? "-" : " "), 1),
        R(" " + f(c.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), a("p", Om, "No differences.")) : k("", !0)
    ], 4));
  }
}), Lm = { class: "flex flex-col gap-3" }, Vm = { class: "flex items-center justify-between gap-2" }, Tm = { class: "text-sm font-medium" }, Dm = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, Fm = { class: "grid grid-cols-7 gap-1" }, Em = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, Im = ["title"], l3 = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, n = K(/* @__PURE__ */ new Date()), r = y(() => n.value.getFullYear()), s = y(() => n.value.getMonth()), i = y(
      () => n.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = y(() => {
      const p = /* @__PURE__ */ new Map();
      for (const b of l.events ?? []) {
        const C = p.get(b.date) ?? [];
        C.push(b), p.set(b.date, C);
      }
      return p;
    }), u = y(() => {
      const b = new Date(r.value, s.value, 1).getDay(), C = new Date(r.value, s.value + 1, 0).getDate(), w = [];
      for (let $ = 0; $ < b; $++)
        w.push({ day: null, key: `pad-${$}`, events: [] });
      for (let $ = 1; $ <= C; $++) {
        const S = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String($).padStart(2, "0")}`;
        w.push({ day: $, key: S, events: d.value.get(S) ?? [] });
      }
      return w;
    });
    function c() {
      n.value = new Date(r.value, s.value - 1, 1);
    }
    function g() {
      n.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, b) => (t(), a("div", Lm, [
      o("div", Vm, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: c
        }, " Prev "),
        o("p", Tm, f(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: g
        }, " Next ")
      ]),
      o("div", Dm, [
        (t(), a(P, null, V(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, f(C), 1)), 64))
      ]),
      o("div", Fm, [
        (t(!0), a(P, null, V(u.value, (C) => (t(), a("div", {
          key: C.key,
          class: z(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), a("p", Em, f(C.day), 1)) : k("", !0),
          (t(!0), a(P, null, V(C.events.slice(0, 3), (w, $) => (t(), a("p", {
            key: `${C.key}-${$}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: w.label
          }, f(w.label), 9, Im))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Nm = { class: "flex items-center gap-3" }, Rm = ["min", "max", "step", "value", "disabled", "aria-label"], Um = { class: "flex shrink-0 items-center gap-1" }, Hm = ["min", "max", "step", "value", "disabled"], Km = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, qm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.field.min ?? 0), i = y(() => n.field.max ?? 100), d = y(() => n.field.step ?? 1), u = y(() => {
      const p = Number(n.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), c = y(
      () => n.modelValue === null || n.modelValue === void 0 || n.modelValue === ""
    );
    function g(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const b = Number(p);
      r("update:modelValue", Number.isFinite(b) ? b : null);
    }
    return (p, b) => (t(), a("div", Nm, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: b[0] || (b[0] = (C) => g(C.target.value))
      }, null, 40, Rm),
      o("div", Um, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: c.value ? "" : u.value,
          disabled: e.disabled,
          onInput: b[1] || (b[1] = (C) => g(C.target.value))
        }, null, 40, Hm),
        e.field.unit ? (t(), a("span", Km, f(e.field.unit), 1)) : k("", !0)
      ])
    ]));
  }
}), at = /* @__PURE__ */ new Map();
function bt(e, l) {
  at.set(e, l);
}
function Gm(e) {
  return at.get(e);
}
function o3(e) {
  return at.has(e);
}
function Wm() {
  return [...at.keys()].sort();
}
function s3() {
  at.clear();
}
const Zm = ["name", "value", "checked", "disabled", "onChange"], Jm = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Ym = { class: "whitespace-nowrap" }, Qm = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Xm = ["name", "value", "checked", "disabled", "onChange"], ep = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, tp = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, ap = { class: "text-center text-xs font-medium" }, np = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, lp = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, op = /* @__PURE__ */ O({
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
    const n = e, r = l, s = y(
      () => n.field.preview ? Gm(n.field.preview) : void 0
    ), i = y(() => !!n.field.preview && !s.value), d = y(() => n.field.layout === "segmented"), u = y(() => {
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
    function c(g) {
      return n.modelValue != null && g.value == n.modelValue;
    }
    return (g, p) => d.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: z(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(P, null, V(e.options, (b) => (t(), a("label", {
        key: String(b.value),
        class: z(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          c(b) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: b.value,
          checked: c(b),
          disabled: e.disabled,
          onChange: (C) => r("update:modelValue", b.value)
        }, null, 40, Zm),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", Jm, [
          (t(), T($e(s.value), {
            value: b.value,
            label: b.label,
            selected: c(b)
          }, null, 8, ["value", "label", "selected"]))
        ])) : k("", !0),
        o("span", Ym, f(b.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Qm, " Nothing to choose from yet. ")) : k("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: z(["grid gap-3", u.value])
    }, [
      (t(!0), a(P, null, V(e.options, (b) => (t(), a("label", {
        key: String(b.value),
        class: z(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          c(b) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: b.value,
          checked: c(b),
          disabled: e.disabled,
          onChange: (C) => r("update:modelValue", b.value)
        }, null, 40, Xm),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", ep, [
          s.value ? (t(), T($e(s.value), {
            key: 0,
            value: b.value,
            label: b.label,
            selected: c(b)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", tp, " no preview ")) : k("", !0)
        ]),
        o("span", ap, f(b.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", np, " Nothing to choose from yet. ")) : k("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", lp, [
        p[2] || (p[2] = R(" No preview registered for ", -1)),
        o("code", null, f(e.field.preview), 1),
        R(". Registered: " + f(x(Wm)().join(", ") || "none") + ". ", 1)
      ])) : k("", !0)
    ], 2));
  }
}), sp = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, rp = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", sp, [
      o("span", {
        class: "block size-full",
        style: le({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), ip = { class: "flex flex-col items-center gap-1 text-center" }, dp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Ma = /* @__PURE__ */ O({
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
    const l = e, n = y(() => l.mono ? "#000000" : l.accent), r = y(() => {
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
    return (s, i) => (t(), a("div", ip, [
      o("div", {
        class: z(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: le({ borderColor: n.value, color: n.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", dp, f(e.caption), 1)) : k("", !0)
    ]));
  }
}), up = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, cp = { class: "flex items-center gap-3" }, fp = ["src"], mp = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, pp = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, vp = {
  key: 0,
  class: "text-right text-sm"
}, gp = { class: "text-neutral-500" }, hp = { class: "tabular-nums" }, bp = { key: 1 }, xp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, yp = { class: "mt-2 font-medium" }, kp = { key: 2 }, $p = { class: "w-full text-sm" }, wp = { class: "w-full py-3 pr-2" }, Cp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Sp = { key: 0 }, Mp = ["colspan"], Bp = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, _p = { class: "w-64 text-sm" }, Ap = { class: "tabular-nums" }, Pp = {
  key: 3,
  class: "py-2"
}, zp = { key: 4 }, Op = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, jp = { class: "mt-2 flex flex-col gap-1 text-sm" }, Lp = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Vp = { key: 0 }, Tp = {
  key: 1,
  class: "mt-1"
}, Dp = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Fp = /* @__PURE__ */ O({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const l = e;
    function n() {
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
    return (c, g) => (t(), a("article", up, [
      o("div", cp, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, fp)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: le({ color: n() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), a(P, null, V(e.document.blocks, (p, b) => (t(), a(P, { key: b }, [
        p.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: le({ borderColor: n() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: le({ color: n() })
            }, f(p.title), 5),
            p.subtitle ? (t(), a("p", mp, f(p.subtitle), 1)) : k("", !0),
            p.reference ? (t(), a("p", pp, f(p.reference), 1)) : k("", !0)
          ]),
          r(p).length ? (t(), a("dl", vp, [
            (t(!0), a(P, null, V(r(p), (C, w) => (t(), a("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", gp, f(C.label), 1),
              o("dd", hp, f(C.value), 1)
            ]))), 128))
          ])) : k("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", bp, [
          o("h2", xp, f(p.heading), 1),
          o("p", yp, f(p.name), 1),
          (t(!0), a(P, null, V(d(p.lines), (C, w) => (t(), a("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, f(C), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", kp, [
          o("table", $p, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: le({ borderColor: n() })
              }, [
                (t(!0), a(P, null, V(d(p.columns), (C, w) => (t(), a("th", {
                  key: w,
                  class: z(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), a(P, null, V(s(p), (C, w) => (t(), a("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                o("td", wp, [
                  o("p", null, f(C.description), 1),
                  C.detail ? (t(), a("p", Cp, f(C.detail), 1)) : k("", !0)
                ]),
                (t(!0), a(P, null, V(C.cells, ($, S) => (t(), a("td", {
                  key: S,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f($), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", Sp, [
                o("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, Mp)
              ])) : k("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", Bp, [
            o("dl", _p, [
              (t(!0), a(P, null, V(i(p), (C, w) => (t(), a("div", {
                key: w,
                class: z([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: le(C.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                o("dt", {
                  class: z(C.strong ? "" : "text-neutral-600")
                }, f(C.label), 3),
                o("dd", Ap, f(C.value), 1)
              ], 6))), 128))
            ])
          ])) : k("", !0)
        ])) : p.type === "code" ? (t(), a("section", Pp, [
          D(Ma, {
            code: u(p.code),
            caption: u(p.caption),
            style: le(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", zp, [
          o("h2", Op, f(p.heading), 1),
          o("ol", jp, [
            (t(!0), a(P, null, V(d(p.items), (C, w) => (t(), a("li", {
              key: w,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: le({ color: n() })
              }, f(w + 1) + ".", 5),
              o("span", null, f(C), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), a("p", {
          key: 5,
          class: z(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: le(p.emphasis ? { color: n() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), a("footer", Lp, [
          p.text ? (t(), a("p", Vp, f(p.text), 1)) : k("", !0),
          d(p.contacts).length ? (t(), a("p", Tp, f(d(p.contacts).join(" · ")), 1)) : k("", !0)
        ])) : (t(), a("p", Dp, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Ep = ["aria-label", "title"], Ip = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Np = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, r3 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: n } = xa(), r = y(() => l.value.theme === "dark");
    function s() {
      n({ theme: r.value ? "light" : "dark" });
    }
    return (i, d) => (t(), a("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: s
    }, [
      (t(), a("svg", Ip, [
        r.value ? (t(), a(P, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", Np))
      ]))
    ], 8, Ep));
  }
}), Rp = ["width", "height"], Up = { key: 0 }, Hp = ["x1", "x2", "y1", "y2"], Kp = ["x", "y"], qp = ["x1", "x2", "y1", "y2"], Gp = ["x", "y"], Wp = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Zp = ["x", "y", "width", "height", "fill", "fill-opacity"], Jp = ["x", "y"], Yp = ["x", "y"], Qp = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Xp = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, ev = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, tv = { class: "text-xs font-semibold tabular-nums" }, av = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, nv = { class: "text-muted-foreground" }, ta = 5.6, i3 = /* @__PURE__ */ O({
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
    function s(B, I) {
      if (!l.thresholds?.length)
        return I;
      const L = l.thresholds.find((Y) => B < Y.max);
      return r(L ? L.color : l.aboveColor);
    }
    const i = K(null), d = K(560), u = K(null);
    let c = null;
    ge(() => {
      c = new ResizeObserver((B) => {
        d.value = Math.max(160, B[0].contentRect.width);
      }), i.value && c.observe(i.value);
    }), be(() => c?.disconnect());
    const g = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((I, L) => ({
      ...I,
      color: I.color ?? g[L % g.length]
    }))), b = y(() => p.value[0]?.points.map((B) => B.label) ?? []), C = y(() => b.value.length), w = y(() => l.orientation === "horizontal"), $ = y(() => Math.max(0, ...b.value.map((B) => B.length))), S = y(() => {
      if (!w.value)
        return l.showAxis ? 44 : 8;
      const B = $.value * ta + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), h = y(() => Math.max(4, Math.floor((S.value - 16) / ta)));
    function v(B) {
      return B.length <= h.value ? B : `${B.slice(0, h.value - 1)}…`;
    }
    const m = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: S.value
    })), M = y(() => ({
      w: Math.max(1, d.value - m.value.left - m.value.right),
      h: Math.max(1, l.height - m.value.top - m.value.bottom)
    })), _ = (B) => l.format ? l.format(B) : A(B);
    function A(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const N = y(() => {
      const B = b.value.map(
        (pe, se) => l.stacked ? p.value.reduce((q, F) => q + Math.max(0, F.points[se]?.value ?? 0), 0) : Math.max(...p.value.map((q) => q.points[se]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const I = Math.max(...B, 0);
      if (I <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(I));
      return ([1, 2, 2.5, 5, 10].find((pe) => I <= pe * L) ?? 10) * L;
    }), E = y(
      () => (w.value ? M.value.h : M.value.w) / Math.max(1, C.value)
    ), te = y(() => E.value * 0.68), U = y(
      () => l.stacked || p.value.length <= 1 ? te.value : te.value / p.value.length
    ), G = y(() => {
      const B = [], I = new Array(C.value).fill(0);
      return p.value.forEach((L, Y) => {
        L.points.forEach((pe, se) => {
          const F = Math.max(0, pe.value) / N.value * (w.value ? M.value.w : M.value.h), ee = (w.value ? m.value.top : m.value.left) + se * E.value + (E.value - te.value) / 2, Q = l.stacked ? 0 : Y * U.value;
          B.push(
            w.value ? {
              x: m.value.left + I[se],
              y: ee + Q,
              w: F,
              h: Math.max(0, U.value - 2),
              color: s(pe.value, L.color),
              label: pe.label,
              name: L.name,
              value: pe.value,
              index: se
            } : {
              x: ee + Q,
              y: m.value.top + M.value.h - F - I[se],
              w: Math.max(0, U.value - 2),
              h: F,
              color: s(pe.value, L.color),
              label: pe.label,
              name: L.name,
              value: pe.value,
              index: se
            }
          ), l.stacked && (I[se] += F);
        });
      }), B;
    }), W = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: N.value * (w.value ? B : 1 - B),
        x: m.value.left + M.value.w * B,
        y: m.value.top + M.value.h * B
      }))
    ), ne = y(() => Math.max(1, Math.ceil(C.value / (w.value ? 14 : 10))));
    function ae(B) {
      return B === C.value - 1 || B % ne.value === 0;
    }
    function J(B) {
      return (w.value ? m.value.top : m.value.left) + B * E.value + E.value / 2;
    }
    const Z = y(() => u.value === null ? null : {
      label: b.value[u.value],
      rows: p.value.map((B) => ({
        name: B.name,
        color: B.color,
        value: B.points[u.value]?.value ?? 0
      }))
    });
    return (B, I) => (t(), a("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      C.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: le({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: I[0] || (I[0] = (L) => u.value = null)
        }, [
          e.showAxis ? (t(), a("g", Up, [
            w.value ? (t(), a(P, { key: 0 }, [
              (t(!0), a(P, null, V(W.value, (L) => (t(), a("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: m.value.top,
                y2: m.value.top + M.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Hp))), 128)),
              (t(!0), a(P, null, V(W.value, (L) => (t(), a("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(A(L.value)), 9, Kp))), 128))
            ], 64)) : (t(), a(P, { key: 1 }, [
              (t(!0), a(P, null, V(W.value, (L) => (t(), a("line", {
                key: `g-${L.y}`,
                x1: m.value.left,
                x2: d.value - m.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, qp))), 128)),
              (t(!0), a(P, null, V(W.value, (L) => (t(), a("text", {
                key: `gt-${L.y}`,
                x: m.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(A(L.value)), 9, Gp))), 128))
            ], 64))
          ])) : k("", !0),
          (t(!0), a(P, null, V(b.value, (L, Y) => (t(), a("rect", {
            key: `hit-${Y}`,
            x: w.value ? m.value.left : m.value.left + Y * E.value,
            y: w.value ? m.value.top + Y * E.value : m.value.top,
            width: w.value ? M.value.w : E.value,
            height: w.value ? E.value : M.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === Y ? 0.4 : 0,
            onMouseenter: (pe) => u.value = Y
          }, null, 40, Wp))), 128)),
          (t(!0), a(P, null, V(G.value, (L, Y) => (t(), a("rect", {
            key: `b-${Y}`,
            x: L.x,
            y: L.y,
            width: L.w,
            height: L.h,
            fill: L.color,
            "fill-opacity": u.value === null || u.value === L.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Zp))), 128)),
          w.value ? (t(!0), a(P, { key: 1 }, V(b.value, (L, Y) => me((t(), a("text", {
            key: `c-${Y}`,
            x: m.value.left - 8,
            y: J(Y) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(f(v(L)) + " ", 1),
            o("title", null, f(L), 1)
          ], 8, Jp)), [
            [Fe, ae(Y)]
          ])), 128)) : (t(!0), a(P, { key: 2 }, V(b.value, (L, Y) => me((t(), a("text", {
            key: `c-${Y}`,
            x: J(Y),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, Yp)), [
            [Fe, ae(Y)]
          ])), 128))
        ], 40, Rp)),
        Z.value ? (t(), a("div", Qp, [
          o("p", Xp, f(Z.value.label), 1),
          (t(!0), a(P, null, V(Z.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: le({ background: L.color })
            }, null, 4),
            o("span", ev, f(L.name || "Value"), 1),
            o("span", tv, f(_(L.value)), 1)
          ]))), 128))
        ])) : k("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", av, [
          (t(!0), a(P, null, V(p.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: le({ background: L.color })
            }, null, 4),
            o("span", nv, f(L.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), lv = ["width", "height"], ov = ["id"], sv = ["stop-color"], rv = ["stop-color"], iv = { key: 0 }, dv = ["x1", "x2", "y1", "y2"], uv = ["x", "y"], cv = ["x", "y"], fv = ["x1", "x2", "y1", "y2"], mv = ["d", "fill"], pv = ["d", "stroke", "stroke-dasharray"], vv = ["cx", "cy", "fill"], gv = { key: 1 }, hv = ["x1", "x2", "y1", "y2"], bv = ["cx", "cy", "fill"], xv = ["x", "y"], yv = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, kv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, $v = { class: "text-xs font-semibold tabular-nums" }, wv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Cv = { class: "text-muted-foreground" }, Sv = /* @__PURE__ */ O({
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
    const l = e, n = y(() => g.value.some((B) => B.axis === "right")), r = K(null), s = K(560), i = K(null);
    let d = null;
    ge(() => {
      d = new ResizeObserver((B) => {
        s.value = Math.max(160, B[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), be(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], c = Math.random().toString(36).slice(2, 9), g = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((I, L) => ({
      ...I,
      color: I.color ?? u[L % u.length]
    }))), p = y(() => g.value[0]?.points.map((B) => B.label) ?? []), b = y(() => p.value.length), C = y(() => ({
      top: 12,
      right: l.showAxis && n.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), w = (B) => l.format ? l.format(B) : $(B);
    function $(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    function S(B) {
      const I = Math.max(...B, 0);
      if (I <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(I));
      return ([1, 2, 2.5, 5, 10].find((pe) => I <= pe * L) ?? 10) * L;
    }
    const h = y(
      () => S(
        g.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((I) => I.value))
      )
    ), v = y(
      () => S(
        g.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((I) => I.value))
      )
    ), m = y(() => ({
      w: Math.max(1, s.value - C.value.left - C.value.right),
      h: Math.max(1, l.height - C.value.top - C.value.bottom)
    }));
    function M(B) {
      return C.value.left + (b.value <= 1 ? 0 : B / (b.value - 1) * m.value.w);
    }
    function _(B, I = "left") {
      const L = I === "right" ? v.value : h.value;
      return C.value.top + m.value.h - B / L * m.value.h;
    }
    const A = y(
      () => g.value.map((B) => {
        const I = B.points.map((Y, pe) => ({
          ...Y,
          x: M(pe),
          y: _(Y.value, B.axis ?? "left")
        })), L = B.stepped ? N(I) : E(I);
        return { ...B, pts: I, line: L, area: te(L, I) };
      })
    );
    function N(B) {
      if (B.length === 0)
        return "";
      let I = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let L = 1; L < B.length; L++)
        I += ` L${B[L].x.toFixed(2)},${B[L - 1].y.toFixed(2)} L${B[L].x.toFixed(2)},${B[L].y.toFixed(2)}`;
      return I;
    }
    function E(B) {
      const I = B.length;
      if (I === 0)
        return "";
      if (I === 1)
        return `M${B[0].x},${B[0].y}`;
      const L = [], Y = [];
      for (let q = 0; q < I - 1; q++)
        L[q] = B[q + 1].x - B[q].x, Y[q] = L[q] === 0 ? 0 : (B[q + 1].y - B[q].y) / L[q];
      const pe = [Y[0]];
      for (let q = 1; q < I - 1; q++)
        if (Y[q - 1] * Y[q] <= 0)
          pe[q] = 0;
        else {
          const F = 2 * L[q] + L[q - 1], ee = L[q] + 2 * L[q - 1];
          pe[q] = (F + ee) / (F / Y[q - 1] + ee / Y[q]);
        }
      pe[I - 1] = Y[I - 2];
      let se = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let q = 0; q < I - 1; q++) {
        const F = L[q] / 3;
        se += ` C${(B[q].x + F).toFixed(2)},${(B[q].y + pe[q] * F).toFixed(2)} ${(B[q + 1].x - F).toFixed(2)},${(B[q + 1].y - pe[q + 1] * F).toFixed(2)} ${B[q + 1].x.toFixed(2)},${B[q + 1].y.toFixed(2)}`;
      }
      return se;
    }
    function te(B, I) {
      if (I.length === 0)
        return "";
      const L = C.value.top + m.value.h;
      return `${B} L${I[I.length - 1].x.toFixed(2)},${L} L${I[0].x.toFixed(2)},${L} Z`;
    }
    const U = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: C.value.top + m.value.h * B,
        value: h.value * (1 - B)
      }))
    ), G = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: C.value.top + m.value.h * B,
        value: v.value * (1 - B)
      }))
    ), W = y(() => Math.max(1, Math.ceil(b.value / 8)));
    function ne(B) {
      return B === b.value - 1 || B % W.value === 0;
    }
    function ae(B) {
      const I = B.currentTarget.getBoundingClientRect(), L = B.clientX - I.left - C.value.left, Y = b.value <= 1 ? 1 : m.value.w / (b.value - 1);
      i.value = Math.min(b.value - 1, Math.max(0, Math.round(L / Y)));
    }
    const J = y(() => {
      if (i.value === null || b.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: M(B),
        label: p.value[B],
        rows: A.value.map((I) => ({
          name: I.name,
          color: I.color,
          value: I.points[B]?.value ?? 0,
          y: I.pts[B]?.y ?? 0
        }))
      };
    }), Z = y(() => {
      if (!J.value)
        return {};
      const B = J.value.x > s.value * 0.6;
      return {
        left: `${J.value.x}px`,
        top: "8px",
        transform: B ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (B, I) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      b.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: le({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: ae,
          onMouseleave: I[0] || (I[0] = (L) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), a(P, null, V(A.value, (L, Y) => (t(), a("linearGradient", {
              id: `pk-fill-${x(c)}-${Y}`,
              key: Y,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": L.color,
                "stop-opacity": "0.25"
              }, null, 8, sv),
              o("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, rv)
            ], 8, ov))), 128))
          ]),
          e.showAxis ? (t(), a("g", iv, [
            (t(!0), a(P, null, V(U.value, (L) => (t(), a("line", {
              key: L.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, dv))), 128)),
            (t(!0), a(P, null, V(U.value, (L) => (t(), a("text", {
              key: `t-${L.y}`,
              x: C.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(L.value)), 9, uv))), 128)),
            n.value ? (t(!0), a(P, { key: 0 }, V(G.value, (L) => (t(), a("text", {
              key: `rt-${L.y}`,
              x: s.value - C.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(L.value)), 9, cv))), 128)) : k("", !0)
          ])) : k("", !0),
          (t(!0), a(P, null, V(p.value, (L, Y) => me((t(), a("line", {
            key: `v-${Y}`,
            x1: M(Y),
            x2: M(Y),
            y1: C.value.top,
            y2: C.value.top + m.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, fv)), [
            [Fe, ne(Y)]
          ])), 128)),
          (t(!0), a(P, null, V(A.value, (L, Y) => (t(), a("g", {
            key: `s-${Y}`
          }, [
            L.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${x(c)}-${Y})`
            }, null, 8, mv)) : k("", !0),
            o("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, pv),
            L.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, vv)) : k("", !0)
          ]))), 128)),
          J.value ? (t(), a("g", gv, [
            o("line", {
              x1: J.value.x,
              x2: J.value.x,
              y1: C.value.top,
              y2: C.value.top + m.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, hv),
            (t(!0), a(P, null, V(J.value.rows, (L, Y) => (t(), a("circle", {
              key: `d-${Y}`,
              cx: J.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, bv))), 128))
          ])) : k("", !0),
          (t(!0), a(P, null, V(p.value, (L, Y) => me((t(), a("text", {
            key: `x-${Y}`,
            x: M(Y),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(L), 9, xv)), [
            [Fe, ne(Y)]
          ])), 128))
        ], 40, lv)),
        J.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: le(Z.value)
        }, [
          o("p", yv, f(J.value.label), 1),
          (t(!0), a(P, null, V(J.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: le({ background: L.color })
            }, null, 4),
            o("span", kv, f(L.name || "Value"), 1),
            o("span", $v, f(w(L.value)), 1)
          ]))), 128))
        ], 4)) : k("", !0),
        e.showLegend && g.value.length > 1 ? (t(), a("div", wv, [
          (t(!0), a(P, null, V(A.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: le({ background: L.color })
            }, null, 4),
            o("span", Cv, f(L.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), Mv = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Bv = { class: "text-muted-foreground text-[11px] capitalize" }, _v = { class: "text-sm font-semibold tabular-nums" }, Av = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, nt = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, n) => (t(), a("div", Mv, [
      o("p", Bv, f(e.label), 1),
      o("p", _v, [
        R(f(e.value) + " ", 1),
        e.share ? (t(), a("span", Av, " (" + f(e.share) + ") ", 1)) : k("", !0)
      ])
    ]));
  }
}), Pv = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, zv = ["width", "height", "viewBox", "aria-label"], Ov = ["d", "fill", "fill-opacity", "onMouseenter"], jv = ["x", "y"], Lv = ["x", "y"], Vv = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Tv = ["onMouseenter"], Dv = { class: "min-w-0 flex-1 truncate capitalize" }, Fv = { class: "tabular-nums font-medium" }, Ev = { class: "text-muted-foreground w-9 text-right tabular-nums" }, d3 = /* @__PURE__ */ O({
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
    ], r = y(() => l.data.reduce((h, v) => h + v.value, 0)), s = K(null), i = y(() => l.height), d = y(() => i.value / 2 - 4), u = y(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function c(h) {
      return n[h % n.length];
    }
    function g(h) {
      return 1 - Math.min(0.55, Math.floor(h / n.length) * 0.28);
    }
    const p = y(() => {
      if (r.value <= 0)
        return [];
      const h = i.value / 2;
      let v = -Math.PI / 2;
      return l.data.map((m, M) => {
        const _ = m.value / r.value, A = _ * Math.PI * 2, N = v, E = v + A;
        return v = E, {
          ...m,
          share: _,
          colour: c(M),
          opacity: g(M),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: _ >= 0.9999 ? w(h) : C(h, N, E, d.value, u.value)
        };
      });
    });
    function b(h, v, m) {
      return `${(h + Math.cos(v) * m).toFixed(2)},${(h + Math.sin(v) * m).toFixed(2)}`;
    }
    function C(h, v, m, M, _) {
      const A = m - v > Math.PI ? 1 : 0;
      return _ <= 0 ? `M${h},${h} L${b(h, v, M)} A${M},${M} 0 ${A} 1 ${b(h, m, M)} Z` : [
        `M${b(h, v, M)}`,
        `A${M},${M} 0 ${A} 1 ${b(h, m, M)}`,
        `L${b(h, m, _)}`,
        `A${_},${_} 0 ${A} 0 ${b(h, v, _)}`,
        "Z"
      ].join(" ");
    }
    function w(h) {
      const v = d.value, m = u.value, M = [
        `M${h - v},${h}`,
        `A${v},${v} 0 1 1 ${h + v},${h}`,
        `A${v},${v} 0 1 1 ${h - v},${h}`,
        "Z"
      ];
      return m <= 0 ? M.join(" ") : [
        ...M,
        `M${h - m},${h}`,
        `A${m},${m} 0 1 0 ${h + m},${h}`,
        `A${m},${m} 0 1 0 ${h - m},${h}`,
        "Z"
      ].join(" ");
    }
    const $ = (h) => l.format ? l.format(h) : new Intl.NumberFormat().format(h), S = (h) => `${(h * 100).toFixed(h < 0.01 ? 2 : 0)}%`;
    return (h, v) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: le({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Pv, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${$(r.value)}`
      }, [
        (t(!0), a(P, null, V(p.value, (m, M) => (t(), a("path", {
          key: M,
          d: m.path,
          fill: m.colour,
          "fill-opacity": s.value === null || s.value === M ? m.opacity : m.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (_) => s.value = M,
          onMouseleave: v[0] || (v[0] = (_) => s.value = null)
        }, null, 40, Ov))), 128)),
        e.type === "doughnut" ? (t(), a(P, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f($(s.value === null ? r.value : p.value[s.value].value)), 9, jv),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, Lv)
        ], 64)) : k("", !0)
      ], 8, zv)),
      o("ul", Vv, [
        (t(!0), a(P, null, V(p.value, (m, M) => (t(), a("li", {
          key: M,
          class: z(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === M ? "bg-muted" : ""]),
          onMouseenter: (_) => s.value = M,
          onMouseleave: v[1] || (v[1] = (_) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: le({ background: m.colour, opacity: m.opacity })
          }, null, 4),
          o("span", Dv, f(m.label), 1),
          o("span", Fv, f($(m.value)), 1),
          o("span", Ev, f(S(m.share)), 1)
        ], 42, Tv))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(nt, {
        key: 0,
        label: p.value[s.value].label,
        value: $(p.value[s.value].value),
        share: S(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : k("", !0)
    ]));
  }
}), Iv = ["width", "height", "viewBox", "aria-label"], Nv = { class: "text-border" }, Rv = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Uv = { class: "fill-muted-foreground text-[10px]" }, Hv = ["x", "y"], Kv = ["x", "y"], qv = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Gv = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, u3 = /* @__PURE__ */ O({
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
    ], r = K(null), s = K(560), i = K(null);
    let d = null;
    ge(() => {
      d = new ResizeObserver((W) => {
        const ne = W[0]?.contentRect.width ?? 0;
        ne > 0 && (s.value = ne);
      }), r.value && d.observe(r.value);
    }), be(() => d?.disconnect());
    const u = y(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), c = (W, ne) => ne.color ?? n[W % n.length], g = y(() => u.value.flatMap((W) => W.points)), p = y(() => g.value.some((W) => typeof W.r == "number")), b = { top: 12, right: 16, bottom: 32, left: 48 }, C = y(() => Math.max(10, s.value - b.left - b.right)), w = y(() => Math.max(10, l.height - b.top - b.bottom));
    function $(W) {
      if (W.length === 0)
        return [0, 1];
      const ne = Math.min(...W), ae = Math.max(...W), J = ae - ne || Math.abs(ae) || 1;
      return [ne - J * 0.08, ae + J * 0.08];
    }
    const S = y(() => $(g.value.map((W) => W.x))), h = y(() => $(g.value.map((W) => W.y))), v = (W) => {
      const [ne, ae] = S.value;
      return b.left + (W - ne) / (ae - ne) * C.value;
    }, m = (W) => {
      const [ne, ae] = h.value;
      return b.top + w.value - (W - ne) / (ae - ne) * w.value;
    }, M = y(() => Math.max(...g.value.map((W) => W.r ?? 0), 0));
    function _(W) {
      if (!p.value || !M.value)
        return 4;
      const ne = Math.max(0, W.r ?? 0) / M.value;
      return 3 + Math.sqrt(ne) * (l.maxRadius - 3);
    }
    function A([W, ne]) {
      return Array.from({ length: 5 }, (ae, J) => W + (ne - W) / 4 * J);
    }
    const N = y(() => A(S.value)), E = y(() => A(h.value)), te = (W) => l.formatX?.(W) ?? String(Math.round(W * 100) / 100), U = (W) => l.formatY?.(W) ?? String(Math.round(W * 100) / 100), G = y(() => {
      if (!i.value)
        return null;
      const W = u.value[i.value.s], ne = W?.points[i.value.p];
      return ne ? { series: W, point: ne } : null;
    });
    return (W, ne) => (t(), a("div", {
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
        "aria-label": p.value ? "Bubble chart" : "Scatter chart"
      }, [
        o("g", Nv, [
          (t(!0), a(P, null, V(E.value, (ae, J) => (t(), a("line", {
            key: `gy-${J}`,
            x1: b.left,
            x2: b.left + C.value,
            y1: m(ae),
            y2: m(ae),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": J === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Rv))), 128))
        ]),
        o("g", Uv, [
          (t(!0), a(P, null, V(E.value, (ae, J) => (t(), a("text", {
            key: `ty-${J}`,
            x: b.left - 8,
            y: m(ae) + 3,
            "text-anchor": "end"
          }, f(U(ae)), 9, Hv))), 128)),
          (t(!0), a(P, null, V(N.value, (ae, J) => (t(), a("text", {
            key: `tx-${J}`,
            x: v(ae),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(te(ae)), 9, Kv))), 128))
        ]),
        (t(!0), a(P, null, V(u.value, (ae, J) => (t(), a("g", {
          key: `s-${J}`
        }, [
          (t(!0), a(P, null, V(ae.points, (Z, B) => (t(), a("circle", {
            key: `p-${J}-${B}`,
            cx: v(Z.x),
            cy: m(Z.y),
            r: _(Z),
            fill: c(J, ae),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: c(J, ae),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== J || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (I) => i.value = { s: J, p: B },
            onMouseleave: ne[0] || (ne[0] = (I) => i.value = null)
          }, null, 40, qv))), 128))
        ]))), 128))
      ], 8, Iv)),
      G.value ? (t(), T(nt, {
        key: 0,
        label: G.value.point.label ?? G.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(G.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${U(G.value.point.y)}`,
        share: p.value && G.value.point.r != null ? String(G.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : k("", !0),
      e.showLegend && u.value.length > 1 ? (t(), a("div", Gv, [
        (t(!0), a(P, null, V(u.value, (ae, J) => (t(), a("span", {
          key: `l-${J}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: le({ backgroundColor: c(J, ae) }),
            "aria-hidden": "true"
          }, null, 4),
          R(" " + f(ae.name), 1)
        ]))), 128))
      ])) : k("", !0)
    ], 512));
  }
}), Wv = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Zv = ["width", "height", "viewBox"], Jv = ["points"], Yv = ["x1", "y1", "x2", "y2"], Qv = ["points", "fill", "stroke"], Xv = ["cx", "cy", "fill", "onMouseenter"], eg = ["x", "y", "text-anchor"], tg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, ag = { class: "truncate" }, c3 = /* @__PURE__ */ O({
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
    ], r = y(
      () => l.series.map((m, M) => ({
        ...m,
        color: m.color ?? n[M % n.length]
      }))
    ), s = y(() => r.value[0]?.points.map((m) => m.label) ?? []), i = y(() => s.value.length), d = y(() => l.height), u = y(() => d.value / 2), c = y(() => d.value / 2 - 34), g = y(() => {
      const m = Math.max(...r.value.flatMap((A) => A.points.map((N) => N.value)), 0);
      if (m <= 0)
        return 1;
      const M = 10 ** Math.floor(Math.log10(m));
      return ([1, 2, 2.5, 5, 10].find((A) => m <= A * M) ?? 10) * M;
    });
    function p(m) {
      return m / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function b(m, M) {
      const _ = p(m);
      return {
        x: u.value + Math.cos(_) * c.value * M,
        y: u.value + Math.sin(_) * c.value * M
      };
    }
    function C(m) {
      return Array.from({ length: i.value }, (M, _) => {
        const A = b(_, m);
        return `${A.x.toFixed(2)},${A.y.toFixed(2)}`;
      }).join(" ");
    }
    const w = y(() => [0.25, 0.5, 0.75, 1].map((m) => ({ f: m, points: C(m) }))), $ = y(
      () => r.value.map((m) => {
        const M = m.points.map((_) => Math.max(0, _.value) / g.value);
        return {
          name: m.name,
          color: m.color,
          values: m.points,
          outline: M.map((_, A) => {
            const N = b(A, _);
            return `${N.x.toFixed(2)},${N.y.toFixed(2)}`;
          }).join(" "),
          dots: M.map((_, A) => b(A, _))
        };
      })
    ), S = y(
      () => s.value.map((m, M) => {
        const _ = p(M), A = u.value + Math.cos(_) * (c.value + 14), N = u.value + Math.sin(_) * (c.value + 14), E = Math.cos(_);
        return {
          label: m,
          x: A,
          y: N + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), h = K(null), v = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, M) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: le({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", Wv, [
      (t(), a("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, V(w.value, (_) => (t(), a("polygon", {
          key: _.f,
          points: _.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Jv))), 128)),
        (t(!0), a(P, null, V(s.value, (_, A) => (t(), a("line", {
          key: `spoke-${A}`,
          x1: u.value,
          y1: u.value,
          x2: b(A, 1).x,
          y2: b(A, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Yv))), 128)),
        (t(!0), a(P, null, V($.value, (_, A) => (t(), a("g", {
          key: `s-${A}`
        }, [
          o("polygon", {
            points: _.outline,
            fill: _.color,
            "fill-opacity": "0.16",
            stroke: _.color,
            "stroke-width": "2"
          }, null, 8, Qv),
          (t(!0), a(P, null, V(_.dots, (N, E) => (t(), a("circle", {
            key: E,
            cx: N.x,
            cy: N.y,
            r: "3",
            fill: _.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (te) => h.value = {
              series: _.name,
              axis: s.value[E],
              value: _.values[E]?.value ?? 0
            },
            onMouseleave: M[0] || (M[0] = (te) => h.value = null)
          }, null, 40, Xv))), 128))
        ]))), 128)),
        (t(!0), a(P, null, V(S.value, (_, A) => (t(), a("text", {
          key: `l-${A}`,
          x: _.x,
          y: _.y,
          "text-anchor": _.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(_.label), 9, eg))), 128))
      ], 8, Zv)),
      e.showLegend ? (t(), a("ul", tg, [
        (t(!0), a(P, null, V(r.value, (_, A) => (t(), a("li", {
          key: A,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: le({ background: _.color })
          }, null, 4),
          o("span", ag, f(_.name), 1)
        ]))), 128))
      ])) : k("", !0),
      h.value ? (t(), T(nt, {
        key: 1,
        label: `${h.value.series} — ${h.value.axis}`,
        value: v(h.value.value)
      }, null, 8, ["label", "value"])) : k("", !0)
    ]));
  }
}), ng = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, lg = ["width", "height", "viewBox"], og = ["cx", "cy", "r"], sg = ["d", "fill", "fill-opacity", "onMouseenter"], rg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, ig = { class: "min-w-0 flex-1 truncate capitalize" }, dg = { class: "font-medium tabular-nums" }, f3 = /* @__PURE__ */ O({
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
    ], r = K(null), s = y(() => l.height), i = y(() => s.value / 2), d = y(() => s.value / 2 - 6), u = y(() => Math.max(...l.data.map((C) => Math.max(0, C.value)), 0)), c = y(() => {
      const C = l.data.length;
      if (C === 0 || u.value <= 0)
        return [];
      const w = Math.PI * 2 / C;
      return l.data.map(($, S) => {
        const h = Math.sqrt(Math.max(0, $.value) / u.value), v = d.value * h, m = S * w - Math.PI / 2, M = m + w;
        return {
          ...$,
          color: n[S % n.length],
          share: u.value === 0 ? 0 : $.value / u.value,
          path: g(i.value, m, M, v)
        };
      });
    });
    function g(C, w, $, S) {
      if (S <= 0)
        return "";
      if ($ - w >= Math.PI * 2 - 1e-6)
        return `M${C - S},${C} A${S},${S} 0 1 1 ${C + S},${C} A${S},${S} 0 1 1 ${C - S},${C} Z`;
      const h = $ - w > Math.PI ? 1 : 0, v = C + Math.cos(w) * S, m = C + Math.sin(w) * S, M = C + Math.cos($) * S, _ = C + Math.sin($) * S;
      return `M${C},${C} L${v.toFixed(2)},${m.toFixed(2)} A${S.toFixed(2)},${S.toFixed(2)} 0 ${h} 1 ${M.toFixed(2)},${_.toFixed(2)} Z`;
    }
    const p = y(() => [0.5, 0.75, 1].map((C) => d.value * C)), b = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, w) => c.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: le({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", ng, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, V(p.value, ($) => (t(), a("circle", {
          key: $,
          cx: i.value,
          cy: i.value,
          r: $,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, og))), 128)),
        (t(!0), a(P, null, V(c.value, ($, S) => (t(), a("path", {
          key: S,
          d: $.path,
          fill: $.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === S ? 0.75 : 0.3,
          onMouseenter: (h) => r.value = S,
          onMouseleave: w[0] || (w[0] = (h) => r.value = null)
        }, null, 40, sg))), 128))
      ], 8, lg)),
      e.showLegend ? (t(), a("ul", rg, [
        (t(!0), a(P, null, V(c.value, ($, S) => (t(), a("li", {
          key: S,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: le({ background: $.color })
          }, null, 4),
          o("span", ig, f($.label), 1),
          o("span", dg, f(b($.value)), 1)
        ]))), 128))
      ])) : k("", !0),
      r.value !== null ? (t(), T(nt, {
        key: 1,
        label: c.value[r.value].label,
        value: b(c.value[r.value].value)
      }, null, 8, ["label", "value"])) : k("", !0)
    ]));
  }
}), ug = ["width", "height"], cg = ["x1", "x2", "y1", "y2"], fg = ["x", "y"], mg = ["x", "y"], pg = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], vg = ["x", "y", "width", "height", "fill", "fill-opacity"], gg = ["d", "stroke"], hg = ["cx", "cy", "fill"], bg = ["x", "y"], xg = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, yg = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, kg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, $g = { class: "text-xs font-semibold tabular-nums" }, wg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Cg = { class: "text-muted-foreground" }, m3 = /* @__PURE__ */ O({
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
    const l = e, n = K(null), r = K(560), s = K(null);
    let i = null;
    ge(() => {
      i = new ResizeObserver((J) => {
        r.value = Math.max(160, J[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), be(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], c = y(
      () => l.bars.map((J, Z) => ({
        ...J,
        color: J.color ?? d[Z % d.length]
      }))
    ), g = y(
      () => l.lines.map((J, Z) => ({
        ...J,
        color: J.color ?? u[Z % u.length]
      }))
    ), p = y(
      () => c.value[0]?.points.map((J) => J.label) ?? g.value[0]?.points.map((J) => J.label) ?? []
    ), b = y(() => p.value.length), C = y(() => l.lineAxis === "right"), w = y(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), $ = y(() => ({
      w: Math.max(1, r.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function S(J) {
      const Z = Math.max(...J, 0);
      if (Z <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((L) => Z <= L * B) ?? 10) * B;
    }
    const h = y(
      () => S([
        ...c.value.flatMap((J) => J.points.map((Z) => Z.value)),
        ...C.value ? [] : g.value.flatMap((J) => J.points.map((Z) => Z.value))
      ])
    ), v = y(
      () => C.value ? S(g.value.flatMap((J) => J.points.map((Z) => Z.value))) : h.value
    ), m = y(() => $.value.w / Math.max(1, b.value)), M = y(() => m.value * 0.6), _ = y(() => M.value / Math.max(1, c.value.length));
    function A(J) {
      return w.value.left + J * m.value + m.value / 2;
    }
    const N = y(
      () => c.value.flatMap(
        (J, Z) => J.points.map((B, I) => {
          const L = Math.max(0, B.value) / h.value * $.value.h;
          return {
            x: A(I) - M.value / 2 + Z * _.value,
            y: w.value.top + $.value.h - L,
            w: Math.max(0, _.value - 2),
            h: L,
            color: J.color,
            index: I,
            name: J.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), E = y(
      () => g.value.map((J) => {
        const Z = J.points.map((B, I) => ({
          x: A(I),
          y: w.value.top + $.value.h - Math.max(0, B.value) / v.value * $.value.h,
          value: B.value
        }));
        return {
          ...J,
          pts: Z,
          d: Z.map((B, I) => `${I === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), te = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((J) => ({
        y: w.value.top + $.value.h * J,
        left: h.value * (1 - J),
        right: v.value * (1 - J)
      }))
    ), U = y(() => Math.max(1, Math.ceil(b.value / 10)));
    function G(J) {
      return J === b.value - 1 || J % U.value === 0;
    }
    const W = (J) => l.format ? l.format(J) : ne(J);
    function ne(J) {
      return Math.abs(J) >= 1e6 ? `${(J / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(J) >= 1e3 ? `${(J / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(J * 100) / 100);
    }
    const ae = y(() => {
      if (s.value === null)
        return null;
      const J = s.value;
      return {
        label: p.value[J],
        rows: [
          ...c.value.map((Z) => ({
            name: Z.name,
            color: Z.color,
            value: Z.points[J]?.value ?? 0
          })),
          ...g.value.map((Z) => ({
            name: Z.name,
            color: Z.color,
            value: Z.points[J]?.value ?? 0
          }))
        ]
      };
    });
    return (J, Z) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      b.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: le({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: Z[0] || (Z[0] = (B) => s.value = null)
        }, [
          (t(!0), a(P, null, V(te.value, (B) => (t(), a("line", {
            key: `g-${B.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, cg))), 128)),
          (t(!0), a(P, null, V(te.value, (B) => (t(), a("text", {
            key: `lt-${B.y}`,
            x: w.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ne(B.left)), 9, fg))), 128)),
          C.value ? (t(!0), a(P, { key: 0 }, V(te.value, (B) => (t(), a("text", {
            key: `rt-${B.y}`,
            x: r.value - w.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ne(B.right)), 9, mg))), 128)) : k("", !0),
          (t(!0), a(P, null, V(p.value, (B, I) => (t(), a("rect", {
            key: `hit-${I}`,
            x: w.value.left + I * m.value,
            y: w.value.top,
            width: m.value,
            height: $.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === I ? 0.4 : 0,
            onMouseenter: (L) => s.value = I
          }, null, 40, pg))), 128)),
          (t(!0), a(P, null, V(N.value, (B, I) => (t(), a("rect", {
            key: `b-${I}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, vg))), 128)),
          (t(!0), a(P, null, V(E.value, (B, I) => (t(), a("g", {
            key: `l-${I}`
          }, [
            o("path", {
              d: B.d,
              fill: "none",
              stroke: B.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, gg),
            s.value !== null && B.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, hg)) : k("", !0)
          ]))), 128)),
          (t(!0), a(P, null, V(p.value, (B, I) => me((t(), a("text", {
            key: `x-${I}`,
            x: A(I),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(B), 9, bg)), [
            [Fe, G(I)]
          ])), 128))
        ], 40, ug)),
        ae.value ? (t(), a("div", xg, [
          o("p", yg, f(ae.value.label), 1),
          (t(!0), a(P, null, V(ae.value.rows, (B, I) => (t(), a("div", {
            key: I,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: le({ background: B.color })
            }, null, 4),
            o("span", kg, f(B.name), 1),
            o("span", $g, f(W(B.value)), 1)
          ]))), 128))
        ])) : k("", !0),
        e.showLegend ? (t(), a("div", wg, [
          (t(!0), a(P, null, V([...c.value, ...g.value], (B, I) => (t(), a("span", {
            key: I,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: le({ background: B.color })
            }, null, 4),
            o("span", Cg, f(B.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), Sg = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Mg = { class: "text-muted-foreground" }, Bg = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, _g = ["width", "height"], Ag = ["x", "y"], Pg = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], zg = ["x", "y"], Og = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, jg = { class: "text-[11px] font-medium capitalize" }, Lg = { class: "text-muted-foreground text-[11px] capitalize" }, Vg = { class: "text-sm font-semibold tabular-nums" }, Tg = { class: "text-muted-foreground text-xs font-normal" }, p3 = /* @__PURE__ */ O({
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
    const l = e, n = K(null), r = K(560), s = K(null);
    let i = null;
    ge(() => {
      i = new ResizeObserver((M) => {
        r.value = Math.max(160, M[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), be(() => i?.disconnect());
    const d = y(() => l.series[0]?.points.map((M) => M.label) ?? []), u = y(() => l.series.length), c = y(() => d.value.length), g = y(() => Math.min(140, Math.max(60, r.value * 0.16))), p = y(() => Math.max(1, r.value - g.value - 8)), b = y(() => p.value / Math.max(1, c.value)), C = y(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function w(M) {
      if (M === 0)
        return "var(--muted)";
      const _ = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(M / _ * 100)}%, var(--muted))`;
    }
    function $(M) {
      for (let _ = 0; _ < l.buckets.length; _++) {
        const A = l.buckets[_].max;
        if (A === void 0 || M < A)
          return _;
      }
      return l.buckets.length - 1;
    }
    const S = y(
      () => l.series.flatMap(
        (M, _) => M.points.map((A, N) => {
          const E = $(A.value);
          return {
            row: _,
            col: N,
            x: g.value + N * b.value,
            y: 4 + _ * C.value,
            w: Math.max(1, b.value - 1),
            h: Math.max(1, C.value - 4),
            colour: w(E),
            label: A.label,
            value: A.value,
            rowName: M.name,
            bucketLabel: l.buckets[E].label
          };
        })
      )
    ), h = y(() => b.value < 2), v = y(() => s.value ? S.value.find((M) => M.row === s.value.row && M.col === s.value.col) ?? null : null), m = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, _) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      u.value === 0 || c.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: le({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        o("div", Sg, [
          (t(!0), a(P, null, V(e.buckets, (A, N) => (t(), a("span", {
            key: N,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: le({ background: w(N) })
            }, null, 4),
            o("span", Mg, f(A.label), 1)
          ]))), 128))
        ]),
        h.value ? (t(), a("p", Bg, f(c.value) + " columns - too many to label individually ", 1)) : k("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: _[0] || (_[0] = (A) => s.value = null)
        }, [
          (t(!0), a(P, null, V(e.series, (A, N) => (t(), a("text", {
            key: `r-${N}`,
            x: g.value - 10,
            y: 4 + N * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(A.name), 9, Ag))), 128)),
          (t(!0), a(P, null, V(S.value, (A, N) => (t(), a("rect", {
            key: N,
            x: A.x,
            y: A.y,
            width: A.w,
            height: A.h,
            fill: A.colour,
            "fill-opacity": s.value === null || s.value.row === A.row && s.value.col === A.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (E) => s.value = { row: A.row, col: A.col }
          }, null, 40, Pg))), 128)),
          e.showColumnLabels && !h.value ? (t(!0), a(P, { key: 0 }, V(d.value, (A, N) => (t(), a("text", {
            key: `c-${N}`,
            x: g.value + N * b.value + b.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(A), 9, zg))), 128)) : k("", !0)
        ], 40, _g)),
        v.value ? (t(), a("div", Og, [
          o("p", jg, f(v.value.label), 1),
          o("p", Lg, f(v.value.rowName), 1),
          o("p", Vg, [
            R(f(m(v.value.value)) + " ", 1),
            o("span", Tg, "(" + f(v.value.bucketLabel) + ")", 1)
          ])
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), Dg = ["viewBox"], Fg = { key: 0 }, Eg = ["id"], Ig = ["stop-color"], Ng = ["stop-color"], Rg = ["d", "fill"], Ug = ["d", "stroke"], aa = 100, Ze = 30, ft = /* @__PURE__ */ O({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = Math.random().toString(36).slice(2, 9), r = y(() => {
      const u = l.data.map((b) => b.value);
      if (u.length < 2)
        return [];
      const c = Math.min(...u), p = Math.max(...u) - c || 1;
      return u.map((b, C) => ({
        x: C / (u.length - 1) * aa,
        y: Ze - (b - c) / p * (Ze - 4) - 2
      }));
    });
    function s(u) {
      const c = u.length;
      if (c < 2)
        return "";
      const g = [], p = [];
      for (let w = 0; w < c - 1; w++)
        g[w] = u[w + 1].x - u[w].x, p[w] = g[w] === 0 ? 0 : (u[w + 1].y - u[w].y) / g[w];
      const b = [p[0]];
      for (let w = 1; w < c - 1; w++)
        if (p[w - 1] * p[w] <= 0)
          b[w] = 0;
        else {
          const $ = 2 * g[w] + g[w - 1], S = g[w] + 2 * g[w - 1];
          b[w] = ($ + S) / ($ / p[w - 1] + S / p[w]);
        }
      b[c - 1] = p[c - 2];
      let C = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let w = 0; w < c - 1; w++) {
        const $ = g[w] / 3;
        C += ` C${(u[w].x + $).toFixed(2)},${(u[w].y + b[w] * $).toFixed(2)} ${(u[w + 1].x - $).toFixed(2)},${(u[w + 1].y - b[w + 1] * $).toFixed(2)} ${u[w + 1].x.toFixed(2)},${u[w + 1].y.toFixed(2)}`;
      }
      return C;
    }
    const i = y(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? s(u) : u.map((c, g) => `${g === 0 ? "M" : "L"}${c.x.toFixed(2)},${c.y.toFixed(2)}`).join(" ");
    }), d = y(() => {
      const u = r.value;
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${Ze} L${u[0].x.toFixed(2)},${Ze} Z`;
    });
    return (u, c) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${aa} ${Ze}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: le({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", Fg, [
        o("linearGradient", {
          id: `pk-spark-${x(n)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, Ig),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Ng)
        ], 8, Eg)
      ])) : k("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${x(n)})`
      }, null, 8, Rg)) : k("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Ug)
    ], 12, Dg)) : k("", !0);
  }
}), Hg = { class: "flex items-center gap-1 text-xs" }, Kg = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, qg = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Ba = /* @__PURE__ */ O({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, n = y(() => l.direction === "flat" ? null : l.direction === "new" ? !l.inverted : l.inverted ? l.direction === "down" : l.direction === "up"), r = y(
      () => n.value === null ? "text-muted-foreground" : n.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = y(
      () => l.direction === "flat" ? "→" : l.direction === "down" ? "▼" : "▲"
    ), i = y(() => l.direction === "new" ? "New" : l.percentage === null ? "-" : `${Math.abs(l.percentage)}%`);
    return (d, u) => (t(), a("span", Hg, [
      o("span", {
        class: z(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Kg, f(s.value), 1),
        R(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", qg, f(e.comparison), 1)) : k("", !0)
    ]));
  }
}), Gg = ["data-collapsed"], Wg = { class: "flex flex-wrap items-start justify-between gap-2" }, Zg = { class: "flex min-w-0 items-start gap-2" }, Jg = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yg = ["d"], Qg = { class: "min-w-0" }, Xg = { class: "text-sm font-medium" }, eh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, th = { class: "flex shrink-0 items-center gap-1.5" }, ah = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, nh = ["aria-pressed", "onClick"], lh = ["aria-expanded", "aria-label", "title"], oh = ["aria-label"], sh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, rh = ["d"], ih = /* @__PURE__ */ O({
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
    const l = e, n = _t(), r = K(l.defaultCollapsed), s = y(() => !!l.icon && !n.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), a("div", {
      class: z(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Wg, [
        o("div", Zg, [
          H(d.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", Jg, [
              o("path", {
                d: x(de)(e.icon)
              }, null, 8, Yg)
            ])) : k("", !0)
          ]),
          o("div", Qg, [
            o("p", Xg, f(e.label), 1),
            e.description ? (t(), a("p", eh, f(e.description), 1)) : k("", !0),
            H(d.$slots, "trend")
          ])
        ]),
        o("div", th, [
          H(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", ah, [
            (t(!0), a(P, null, V(e.periods, (c) => (t(), a("button", {
              key: c.value,
              type: "button",
              class: z([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === c.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === c.value,
              onClick: (g) => d.$emit("update:period", c.value)
            }, f(c.label), 11, nh))), 128))
          ])) : k("", !0),
          e.collapsible ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: u[0] || (u[0] = (c) => r.value = !r.value)
          }, [
            (t(), a("svg", {
              class: z(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, lh)) : k("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (c) => d.$emit("hide"))
          }, [
            (t(), a("svg", sh, [
              o("path", {
                d: x(de)("eye-off")
              }, null, 8, rh)
            ]))
          ], 8, oh)) : k("", !0)
        ])
      ]),
      r.value ? k("", !0) : (t(), a("div", {
        key: 0,
        style: le(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T(Se, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), a("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: le({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : H(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, Gg));
  }
}), dh = ["aria-pressed", "aria-label", "title"], uh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ch = ["d"], fh = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, mh = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, ph = ["href"], vh = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gh = ["d"], hh = ["aria-label", "onClick"], bh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xh = ["d"], yh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, kh = ["d"], $h = {
  key: 0,
  class: "flex flex-col gap-1"
}, wh = ["onClick"], Ch = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Sh = ["d"], Mh = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Bh = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(!1), i = K(!1), d = y(
      () => n.catalog.filter((g) => !n.items.some((p) => p.id === g.id))
    );
    function u(g) {
      r(
        "update:items",
        n.items.filter((p) => p.id !== g)
      );
    }
    function c(g) {
      r("update:items", [...n.items, g]), i.value = !1;
    }
    return (g, p) => (t(), a(P, null, [
      D(ih, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (b) => r("hide"))
      }, {
        actions: j(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (b) => s.value = !s.value)
          }, [
            (t(), a("svg", uh, [
              o("path", {
                d: x(de)(s.value ? "check" : "pencil")
              }, null, 8, ch)
            ]))
          ], 8, dh)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), a("div", fh, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            D(re, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (b) => i.value = !0)
            }, {
              default: j(() => [...p[6] || (p[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", mh, [
            (t(!0), a(P, null, V(e.items, (b) => (t(), a("div", {
              key: b.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: b.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", vh, [
                  o("path", {
                    d: x(de)(b.icon)
                  }, null, 8, gh)
                ])),
                R(" " + f(b.label), 1)
              ], 8, ph),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${b.label}`,
                onClick: (C) => u(b.id)
              }, [
                (t(), a("svg", bh, [
                  o("path", {
                    d: x(de)("x")
                  }, null, 8, xh)
                ]))
              ], 8, hh)) : k("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (b) => i.value = !0)
            }, [
              (t(), a("svg", yh, [
                o("path", {
                  d: x(de)("plus")
                }, null, 8, kh)
              ])),
              p[8] || (p[8] = R(" Add ", -1))
            ])) : k("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      D(Xe, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (b) => i.value = !1)
      }, {
        footer: j(() => [
          D(re, {
            variant: "outline",
            onClick: p[4] || (p[4] = (b) => i.value = !1)
          }, {
            default: j(() => [...p[9] || (p[9] = [
              R("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          d.value.length ? (t(), a("ul", $h, [
            (t(!0), a(P, null, V(d.value, (b) => (t(), a("li", {
              key: b.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => c(b)
              }, [
                (t(), a("svg", Ch, [
                  o("path", {
                    d: x(de)(b.icon)
                  }, null, 8, Sh)
                ])),
                R(" " + f(b.label), 1)
              ], 8, wh)
            ]))), 128))
          ])) : (t(), a("p", Mh, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), _h = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Ah = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Ph = { class: "relative w-full max-w-xl" }, zh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Oh = ["d"], jh = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Lh = ["data-slot"], Vh = { class: "px-5 py-4" }, Th = { class: "mb-3 text-sm font-semibold" }, Dh = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Fh = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Eh = ["d"], Ih = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, v3 = /* @__PURE__ */ O({
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
    const l = e, n = K(""), r = y(() => {
      const u = l.linkComponent;
      return typeof u == "string" ? u : la(u);
    }), s = Je({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(u) {
      return u.external === !0 || /^https?:\/\//.test(u.href);
    }
    const d = y(() => {
      const u = n.value.trim().toLowerCase();
      return l.sections.map((c) => ({
        ...c,
        links: u ? c.links.filter((g) => g.label.toLowerCase().includes(u)) : c.links
      })).filter((c) => c.links.length > 0);
    });
    return (u, c) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : x(Ie)])
    }, [
      o("header", null, [
        o("h1", _h, f(e.title), 1),
        e.description ? (t(), a("p", Ah, f(e.description), 1)) : k("", !0)
      ]),
      o("div", Ph, [
        (t(), a("svg", zh, [
          o("path", {
            d: x(de)("search")
          }, null, 8, Oh)
        ])),
        D(xe, {
          modelValue: n.value,
          "onUpdate:modelValue": c[0] || (c[0] = (g) => n.value = g),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      d.value.length ? (t(), a("div", jh, [
        (t(!0), a(P, null, V(d.value, (g) => (t(), a("section", {
          key: g.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${g.key}`
        }, [
          o("div", Vh, [
            o("h2", Th, f(g.title), 1),
            o("div", Dh, [
              (t(!0), a(P, null, V(g.links, (p) => (t(), T($e(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: z(x(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), a("svg", Fh, [
                    o("path", {
                      d: x(de)(p.icon)
                    }, null, 8, Eh)
                  ])),
                  R(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Lh))), 128))
      ])) : (t(), a("p", Ih, ' Nothing matches "' + f(n.value) + '". ', 1))
    ], 2));
  }
}), Nh = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Rh = { class: "flex flex-1 flex-col gap-1 p-4" }, Uh = { class: "text-muted-foreground relative text-xs font-medium" }, Hh = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Kh = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, qh = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Gh = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, g3 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), a("div", Nh, [
      o("div", Rh, [
        o("p", Uh, f(e.label), 1),
        e.loading ? (t(), T(Se, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", Hh, " Could not load ")) : (t(), a("span", Kh, f(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Ba, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", qh, f(e.description), 1)) : k("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", Gh, [
        D(ft, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : k("", !0)
    ]));
  }
}), Wh = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Zh = { class: "flex flex-col gap-1 p-4" }, Jh = { class: "flex items-start justify-between gap-2" }, Yh = { class: "text-sm font-medium" }, Qh = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Xh = { class: "mt-1 flex flex-wrap items-center gap-2" }, e1 = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, t1 = {
  key: 0,
  class: "-mb-px"
}, dt = /* @__PURE__ */ O({
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
    const l = e, n = y(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = y(
      () => n.value === null ? "bg-muted text-muted-foreground" : n.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = y(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, d) => (t(), a("div", Wh, [
      o("div", Zh, [
        o("div", Jh, [
          o("p", Yh, f(e.label), 1),
          H(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", Qh, f(e.caption), 1)) : k("", !0),
        o("div", Xh, [
          e.loading ? (t(), T(Se, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", e1, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: z(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : k("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", t1, [
        D(ft, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : k("", !0)
    ]));
  }
}), a1 = { class: "relative flex flex-col gap-2" }, n1 = ["aria-label"], l1 = ["onMouseenter"], o1 = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, s1 = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, r1 = { class: "truncate" }, i1 = { class: "text-sm font-semibold tabular-nums" }, h3 = /* @__PURE__ */ O({
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
    ], r = y(() => l.segments.reduce((g, p) => g + Math.max(0, p.value), 0)), s = y(() => Math.max(l.total ?? r.value, r.value, 1)), i = y(
      () => l.segments.map((g, p) => {
        const b = Math.max(0, g.value) / s.value;
        return {
          ...g,
          color: g.color ?? n[p % n.length],
          share: b,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: g.value > 0 ? `max(2px, ${(b * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (g) => l.format ? l.format(g) : new Intl.NumberFormat().format(g), u = K(null), c = (g) => `${(g * 100).toFixed(g > 0 && g < 0.01 ? 1 : 0)}%`;
    return (g, p) => (t(), a("div", a1, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: le({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((b) => `${b.label} ${d(b.value)}`).join(", ")
      }, [
        (t(!0), a(P, null, V(i.value, (b, C) => (t(), a("span", {
          key: C,
          class: z(["h-full transition-all", [
            C === 0 ? "rounded-l-full" : "",
            C === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: le({
            width: b.width,
            background: b.color,
            opacity: u.value === null || u.value === C ? 1 : 0.4
          }),
          onMouseenter: (w) => u.value = C,
          onMouseleave: p[0] || (p[0] = (w) => u.value = null)
        }, null, 46, l1))), 128))
      ], 12, n1),
      e.showLegend ? (t(), a("div", o1, [
        (t(!0), a(P, null, V(i.value, (b, C) => (t(), a("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", s1, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: le({ background: b.color })
            }, null, 4),
            o("span", r1, f(b.label), 1)
          ]),
          o("span", i1, f(d(b.value)), 1)
        ]))), 128))
      ])) : k("", !0),
      u.value !== null ? (t(), T(nt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: c(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : k("", !0)
    ]));
  }
}), d1 = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, u1 = ["data-heading"], c1 = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, f1 = { class: "text-muted-foreground truncate" }, m1 = ["aria-label"], b3 = /* @__PURE__ */ O({
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
    }, s = y(
      () => l.rows.map((i) => {
        if (!i.bar || i.bar.segments.length === 0)
          return { ...i, segments: [] };
        const d = i.bar.segments.reduce((c, g) => c + Math.max(0, g.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
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
    return (i, d) => (t(), a("div", d1, [
      (t(!0), a(P, null, V(s.value, (u) => (t(), a("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), a("div", {
          key: 0,
          class: z(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? n[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), a("div", c1, [
          o("span", f1, f(u.label), 1),
          o("span", {
            class: z(["shrink-0 font-medium tabular-nums", u.tone ? n[u.tone] : "text-foreground"])
          }, f(u.value), 3)
        ])),
        u.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((c) => `${c.label} ${c.value}`).join(", ")
        }, [
          (t(!0), a(P, null, V(u.segments, (c, g) => (t(), a("span", {
            key: g,
            class: z(["h-full transition-all", r[c.tone ?? "neutral"]]),
            style: le({ width: c.width })
          }, null, 6))), 128))
        ], 8, m1)) : k("", !0)
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
const ye = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, n = y(() => b1(l.status, l.tone));
    return (r, s) => (t(), T(Ee, {
      variant: n.value,
      class: z(l.class)
    }, {
      default: j(() => [
        H(r.$slots, "default", {}, () => [
          R(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), x1 = ["data-layout"], y1 = ["src", "alt"], k1 = {
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
}, j1 = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, L1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, V1 = ["d"], T1 = ["aria-label"], D1 = /* @__PURE__ */ O({
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
    }, r = e, s = l, i = K(0);
    function d(S) {
      if (typeof S != "string")
        return null;
      const h = S.trim();
      return h === "" ? null : /^(https?:)?\/\//i.test(h) ? h : null;
    }
    const u = y(() => {
      const S = [r.item.image, ...r.item.images ?? []].map(d).filter((h) => h !== null);
      return [...new Set(S)];
    }), c = y(() => u.value[i.value] ?? u.value[0] ?? null), g = y(
      () => r.item.label.split(/\s+/).slice(0, 2).map((S) => S[0]?.toUpperCase() ?? "").join("")
    ), p = y(() => {
      const S = r.item.progress;
      if (!S)
        return null;
      const h = Math.max(S.total ?? 100, S.value, 1);
      return `${Math.min(100, Math.max(0, S.value / h * 100)).toFixed(2)}%`;
    }), b = y(() => u.value.length > 1 ? u.value[1] : null), C = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), w = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function $(S) {
      S.stopPropagation(), s("cart", r.item.key);
    }
    return (S, h) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: z(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: h[0] || (h[0] = (v) => s("select", e.item.key)),
      onKeydown: h[1] || (h[1] = Fa(ve((v) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: h[2] || (h[2] = (v) => i.value = 0)
    }, [
      o("div", {
        class: z([
          "bg-muted relative overflow-hidden",
          e.layout === "list" ? "aspect-square w-20 shrink-0 sm:w-24" : "aspect-[4/3] w-full"
        ])
      }, [
        c.value ? (t(), a("img", {
          key: 0,
          src: c.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, y1)) : (t(), a("span", k1, f(g.value), 1)),
        e.layout === "grid" && b.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: b.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, $1)) : k("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), a("div", w1, [
          (t(!0), a(P, null, V(u.value, (v, m) => (t(), a("span", {
            key: m,
            class: z(["size-1.5 rounded-full", m === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (M) => i.value = m
          }, null, 42, C1))), 128))
        ])) : k("", !0)
      ], 2),
      o("div", {
        class: z(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", S1, [
          o("div", M1, [
            o("p", B1, f(e.item.label), 1),
            e.item.caption ? (t(), a("p", _1, f(e.item.caption), 1)) : k("", !0),
            e.item.facts?.length ? (t(), a("p", A1, f(e.item.facts.join(" · ")), 1)) : k("", !0)
          ]),
          e.item.status ? (t(), T(ye, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : k("", !0)
        ]),
        o("div", P1, [
          o("div", z1, [
            e.item.price ? (t(), a("p", O1, f(e.item.price), 1)) : k("", !0),
            w.value ? (t(), a("p", j1, f(w.value), 1)) : k("", !0)
          ]),
          C.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: $
          }, [
            (t(), a("svg", L1, [
              o("path", {
                d: x(de)("cart")
              }, null, 8, V1)
            ]))
          ])) : k("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), a("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: z(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: le({ width: p.value })
          }, null, 6)
        ], 8, T1)) : k("", !0)
      ], 2)
    ], 42, x1));
  }
});
function F1(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function E1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function I1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const N1 = ["data-featured", "data-recommended"], R1 = { class: "flex flex-col gap-1" }, U1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, H1 = { key: 0 }, K1 = { key: 1 }, q1 = { key: 2 }, G1 = { key: 3 }, W1 = { class: "text-sm font-semibold" }, Z1 = { class: "flex items-baseline gap-1" }, J1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Y1 = { class: "text-muted-foreground text-sm" }, Q1 = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, X1 = { class: "text-muted-foreground mt-1 text-xs" }, eb = { class: "flex flex-1 flex-col gap-2 text-sm" }, tb = { class: "flex min-w-0 items-start gap-2" }, ab = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, nb = ["d"], lb = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ob = ["d"], sb = { class: "capitalize" }, rb = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, ib = { class: "text-foreground font-medium" }, db = { class: "mt-auto flex gap-2 pt-2" }, ub = /* @__PURE__ */ O({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(
      () => n.plan.priceFormatted ?? String(n.plan.price)
    ), i = y(
      () => !!(n.plan.featured || n.plan.recommended)
    ), d = y(() => {
      const c = n.plan.perks ?? {};
      return Object.entries(c).map(([g, p]) => ({
        key: g,
        label: g.replace(/_/g, " "),
        granted: I1(p.value),
        display: E1(p.value)
      }));
    }), u = y(() => n.plan.extraPerks ?? []);
    return (c, g) => (t(), a("article", {
      class: z(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", R1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", U1, [
          e.plan.recommended ? (t(), a("span", H1, "Recommended")) : e.plan.featured ? (t(), a("span", K1, "Featured")) : k("", !0),
          e.plan.trial ? (t(), a("span", q1, "Trial")) : k("", !0),
          e.plan.active === !1 ? (t(), a("span", G1, "Inactive")) : k("", !0)
        ])) : k("", !0),
        o("h3", W1, f(e.plan.name), 1),
        o("p", Z1, [
          o("span", J1, f(s.value), 1),
          o("span", Y1, f(x(F1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", Q1, f(e.plan.shortDescription), 1)) : k("", !0),
        o("p", X1, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", eb, [
        (t(!0), a(P, null, V(d.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", tb, [
            o("span", {
              class: z(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", ab, [
                o("path", {
                  d: x(de)("check")
                }, null, 8, nb)
              ])) : (t(), a("svg", lb, [
                o("path", {
                  d: x(de)("x")
                }, null, 8, ob)
              ]))
            ], 2),
            o("span", sb, f(p.label), 1)
          ]),
          p.display ? (t(), a("span", rb, f(p.display), 1)) : k("", !0)
        ]))), 128)),
        (t(!0), a(P, null, V(u.value, (p, b) => (t(), a("li", {
          key: `extra-${b}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, f(p.key), 1),
          o("span", ib, f(p.value), 1)
        ]))), 128))
      ]),
      o("footer", db, [
        D(re, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: g[0] || (g[0] = (p) => r("edit", e.plan.id))
        }, {
          default: j(() => [...g[2] || (g[2] = [
            R(" Edit ", -1)
          ])]),
          _: 1
        }),
        D(re, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: g[1] || (g[1] = (p) => r("delete", e.plan.id))
        }, {
          default: j(() => [...g[3] || (g[3] = [
            R(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, N1));
  }
}), cb = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, fb = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, mb = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, pb = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, vb = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, x3 = /* @__PURE__ */ O({
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
      class: z(["w-full space-y-6", e.embedded ? "" : x(Ie)]),
      "data-slot": "plan-grid"
    }, [
      o("header", cb, [
        o("div", null, [
          e.title ? (t(), a("h1", fb, f(e.title), 1)) : k("", !0),
          e.description ? (t(), a("p", mb, f(e.description), 1)) : k("", !0)
        ]),
        D(re, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => n("create"))
        }, {
          default: j(() => [...s[3] || (s[3] = [
            R("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", pb, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", vb, [
        (t(!0), a(P, null, V(e.plans, (i) => (t(), T(ub, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => n("edit", d)),
          onDelete: s[2] || (s[2] = (d) => n("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), gb = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, hb = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, bb = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, xb = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, yb = { class: "space-y-1.5" }, kb = { class: "space-y-1.5" }, $b = { class: "space-y-1.5" }, wb = { class: "space-y-1.5" }, Cb = { class: "space-y-1.5" }, Sb = { class: "flex items-center gap-3 text-sm" }, Mb = { class: "flex items-center gap-3 text-sm" }, Bb = { class: "flex items-center gap-3 text-sm" }, _b = {
  key: 0,
  class: "space-y-1.5"
}, Ab = { class: "flex items-center gap-3 text-sm" }, Pb = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, zb = { class: "space-y-1.5" }, Ob = ["value"], jb = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Lb = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Vb = ["id", "value", "onInput"], Tb = { class: "space-y-2" }, Db = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Fb = ["d"], Eb = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", xt = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", y3 = /* @__PURE__ */ O({
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
    }), r = e, s = l, i = Qe(n());
    function d(h, v) {
      const m = i.perks?.[h]?.value;
      return m ?? v;
    }
    function u(h, v, m) {
      const M = i.perks?.[h];
      i.perks = {
        ...i.perks ?? {},
        [h]: {
          value: v,
          overview: m ?? M?.overview ?? ""
        }
      };
    }
    function c(h, v) {
      const m = i.perks?.[h];
      i.perks = {
        ...i.perks ?? {},
        [h]: {
          value: m?.value ?? (h === "modules" ? [] : 0),
          overview: v
        }
      };
    }
    function g(h) {
      const v = h ? { ...n(), ...h } : n();
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    g(r.plan), ce(
      () => r.plan,
      (h) => g(h),
      { deep: !0 }
    );
    const p = y({
      get: () => {
        const h = d("modules", []);
        return Array.isArray(h) ? h.map(String) : [];
      },
      set: (h) => {
        u("modules", C(h.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), b = y(
      () => r.modules.map((h) => ({ value: h.key, label: h.label }))
    );
    function C(h) {
      const v = Object.fromEntries(r.modules.map((_) => [_.key, _])), m = new Set(h);
      for (const _ of r.modules)
        if (!m.has(_.key))
          for (const A of _.children ?? [])
            m.delete(A);
      let M = !0;
      for (; M; ) {
        M = !1;
        for (const _ of [...m])
          for (const A of v[_]?.requires ?? [])
            m.has(A) || (m.add(A), M = !0);
      }
      return [...m];
    }
    function w() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function $(h) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, m) => m !== h);
    }
    function S() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((h) => h.key.trim() !== "")
      });
    }
    return (h, v) => (t(), a("form", {
      class: z(["w-full space-y-6", e.embedded ? "" : x(Ie)]),
      "data-slot": "plan-editor",
      onSubmit: ve(S, ["prevent"])
    }, [
      o("header", gb, [
        o("div", null, [
          o("h1", hb, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          v[13] || (v[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        D(re, {
          type: "button",
          variant: "outline",
          onClick: v[0] || (v[0] = (m) => s("cancel"))
        }, {
          default: j(() => [...v[14] || (v[14] = [
            R("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", bb, [
        o("section", xb, [
          v[26] || (v[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", yb, [
            D(Ce, { for: "plan-name" }, {
              default: j(() => [...v[15] || (v[15] = [
                R("Plan name", -1)
              ])]),
              _: 1
            }),
            D(xe, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": v[1] || (v[1] = (m) => i.name = m),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", kb, [
            D(Ce, { for: "plan-short" }, {
              default: j(() => [...v[16] || (v[16] = [
                R("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            D(xe, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": v[2] || (v[2] = (m) => i.shortDescription = m),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", $b, [
            D(Ce, { for: "plan-description" }, {
              default: j(() => [...v[17] || (v[17] = [
                R("Plan description", -1)
              ])]),
              _: 1
            }),
            me(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": v[3] || (v[3] = (m) => i.description = m),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: z(xt)
            }, null, 512), [
              [we, i.description]
            ])
          ]),
          o("div", wb, [
            D(Ce, { for: "plan-days" }, {
              default: j(() => [...v[18] || (v[18] = [
                R("Duration", -1)
              ])]),
              _: 1
            }),
            me(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (m) => i.days = m),
              class: z(Eb)
            }, [...v[19] || (v[19] = [
              o("option", { value: 30 }, "Monthly", -1),
              o("option", { value: 365 }, "Yearly", -1),
              o("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Re,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          o("div", Cb, [
            D(Ce, { for: "plan-price" }, {
              default: j(() => [...v[20] || (v[20] = [
                R("Price", -1)
              ])]),
              _: 1
            }),
            D(xe, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": v[5] || (v[5] = (m) => i.price = Number(m))
            }, null, 8, ["model-value"])
          ]),
          o("label", Sb, [
            D(x(Ue), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (m) => i.featured = m)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = R(" Featured ", -1))
          ]),
          o("label", Mb, [
            D(x(Ue), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (m) => i.recommended = m)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = R(" Recommended ", -1))
          ]),
          o("label", Bb, [
            D(x(Ue), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (m) => i.trial = m)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", _b, [
            D(Ce, { for: "plan-trial-days" }, {
              default: j(() => [...v[24] || (v[24] = [
                R("Trial days", -1)
              ])]),
              _: 1
            }),
            D(xe, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": v[9] || (v[9] = (m) => i.trialDays = Number(m))
            }, null, 8, ["model-value"])
          ])) : k("", !0),
          o("label", Ab, [
            D(x(Ue), {
              checked: i.active !== !1,
              "onUpdate:checked": v[10] || (v[10] = (m) => i.active = m)
            }, null, 8, ["checked"]),
            v[25] || (v[25] = R(" Active ", -1))
          ]),
          D(re, {
            type: "submit",
            disabled: e.processing
          }, {
            default: j(() => [
              R(f(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", Pb, [
          v[33] || (v[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", zb, [
            D(Ce, null, {
              default: j(() => [...v[27] || (v[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Dt, {
              modelValue: p.value,
              "onUpdate:modelValue": v[11] || (v[11] = (m) => p.value = m),
              options: b.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            D(Ce, { for: "plan-modules-overview" }, {
              default: j(() => [...v[28] || (v[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: z(xt),
              onInput: v[12] || (v[12] = (m) => c(
                "modules",
                m.target.value
              ))
            }, null, 40, Ob)
          ]),
          (t(!0), a(P, null, V(e.limits, (m) => (t(), a("div", {
            key: m.key,
            class: "space-y-1.5"
          }, [
            m.kind === "toggle" ? (t(), a("label", jb, [
              D(x(Ue), {
                checked: !!d(m.key, !1),
                "onUpdate:checked": (M) => u(
                  m.key,
                  M,
                  i.perks?.[m.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              R(" " + f(m.label), 1)
            ])) : (t(), a(P, { key: 1 }, [
              D(Ce, {
                for: `plan-limit-${m.key}`
              }, {
                default: j(() => [
                  R(f(m.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              m.hint ? (t(), a("p", Lb, f(m.hint), 1)) : k("", !0),
              D(xe, {
                id: `plan-limit-${m.key}`,
                "model-value": Number(d(m.key, 0)),
                type: "number",
                step: m.step ?? 1,
                required: "",
                "onUpdate:modelValue": (M) => u(
                  m.key,
                  Number(M),
                  i.perks?.[m.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              v[29] || (v[29] = o("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            D(Ce, {
              for: `plan-overview-${m.key}`
            }, {
              default: j(() => [...v[30] || (v[30] = [
                R("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${m.key}`,
              value: i.perks?.[m.key]?.overview ?? "",
              class: z(xt),
              onInput: (M) => c(
                m.key,
                M.target.value
              )
            }, null, 40, Vb)
          ]))), 128)),
          o("div", Tb, [
            v[32] || (v[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(P, null, V(i.extraPerks ?? [], (m, M) => (t(), a("div", {
              key: M,
              class: "flex items-center gap-2"
            }, [
              D(xe, {
                modelValue: m.key,
                "onUpdate:modelValue": (_) => m.key = _,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D(xe, {
                modelValue: m.value,
                "onUpdate:modelValue": (_) => m.value = _,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D(re, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (_) => $(M)
              }, {
                default: j(() => [
                  (t(), a("svg", Db, [
                    o("path", {
                      d: x(de)("x")
                    }, null, 8, Fb)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            D(re, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: w
            }, {
              default: j(() => [...v[31] || (v[31] = [
                R(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Ib = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Nb = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Rb = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Ub = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Hb = ["d"], Kb = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, qb = ["aria-pressed"], Gb = ["aria-pressed"], Wb = {
  key: 0,
  class: "flex flex-col gap-2"
}, Zb = ["aria-label"], Jb = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Yb = ["aria-pressed", "onClick"], Qb = ["aria-label"], Xb = { class: "text-muted-foreground mr-1 text-xs font-medium" }, ex = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, tx = ["data-slot"], ax = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, nx = { class: "text-muted-foreground text-xs tabular-nums" }, lx = { class: "flex items-center gap-2" }, ox = ["disabled"], sx = ["disabled"], Ut = /* @__PURE__ */ O({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Le({
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
  emits: /* @__PURE__ */ Le(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(""), i = et(e, "modelValue"), d = Qe({}), u = Qe({});
    ce(s, () => b());
    function c(E) {
      const te = E.trim();
      if (te === "")
        return null;
      const U = Number(te);
      return Number.isFinite(U) ? U : null;
    }
    function g() {
      const E = {};
      for (const [te, U] of Object.entries(u))
        E[te] = { min: c(U.min), max: c(U.max) };
      return E;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: g() };
    }
    function b() {
      r("filter", p());
    }
    function C(E, te) {
      d[E] = d[E] === te ? null : te, b();
    }
    function w(E) {
      return u[E] ?? { min: "", max: "" };
    }
    function $(E, te, U) {
      const G = u[E] ?? { min: "", max: "" };
      u[E] = { ...G, [te]: U }, b();
    }
    function S(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const h = y(() => n.facets.filter((E) => (E.kind ?? "chips") === "chips")), v = y(() => n.facets.filter((E) => E.kind === "range")), m = y(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), M = K(1);
    ce(
      () => n.items.map((E) => E.key).join(","),
      () => {
        M.value = 1;
      }
    );
    const _ = y(() => {
      const E = n.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / E));
    }), A = y(() => {
      const E = n.pageSize;
      if (!E || E < 1)
        return n.items;
      const te = (M.value - 1) * E;
      return n.items.slice(te, te + E);
    });
    function N(E) {
      M.value = Math.min(_.value, Math.max(1, E));
    }
    return (E, te) => (t(), a("div", {
      class: z(["flex flex-col gap-4", x(ka)])
    }, [
      m.value ? (t(), a("div", Ib, [
        o("div", Nb, [
          e.searchable ? (t(), a("div", Rb, [
            (t(), a("svg", Ub, [
              o("path", {
                d: x(de)("search")
              }, null, 8, Hb)
            ])),
            D(xe, {
              modelValue: s.value,
              "onUpdate:modelValue": te[0] || (te[0] = (U) => s.value = U),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: S
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : k("", !0),
          H(E.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", Kb, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (U) => i.value = "grid")
            }, " Tiles ", 10, qb),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (U) => i.value = "list")
            }, " List ", 10, Gb)
          ])) : k("", !0)
        ]),
        h.value.length || v.value.length ? (t(), a("div", Wb, [
          (t(!0), a(P, null, V(h.value, (U) => (t(), a("div", {
            key: U.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": U.label ?? U.key
          }, [
            U.label ? (t(), a("span", Jb, f(U.label), 1)) : k("", !0),
            (t(!0), a(P, null, V(U.options ?? [], (G) => (t(), a("button", {
              key: G.value,
              type: "button",
              class: z([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[U.key] === G.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[U.key] === G.value ? "true" : "false",
              onClick: (W) => C(U.key, G.value)
            }, f(G.label), 11, Yb))), 128))
          ], 8, Zb))), 128)),
          (t(!0), a(P, null, V(v.value, (U) => (t(), a("div", {
            key: U.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": U.label ?? U.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Xb, f(U.label ?? U.key), 1),
            D(xe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${U.label ?? U.key} from`,
              "model-value": w(U.key).min,
              "onUpdate:modelValue": (G) => $(U.key, "min", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            te[7] || (te[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            D(xe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${U.label ?? U.key} to`,
              "model-value": w(U.key).max,
              "onUpdate:modelValue": (G) => $(U.key, "max", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Qb))), 128))
        ])) : k("", !0)
      ])) : k("", !0),
      e.items.length === 0 ? (t(), a("p", ex, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: z(
          i.value === "list" ? "flex flex-col gap-3" : x(vc)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(P, null, V(A.value, (U) => (t(), T(D1, {
          key: U.key,
          item: U,
          layout: i.value,
          onSelect: te[3] || (te[3] = (G) => r("select", G)),
          onCart: te[4] || (te[4] = (G) => r("cart", G))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, tx)),
      e.pageSize && _.value > 1 ? (t(), a("div", ax, [
        o("p", nx, " Page " + f(M.value) + " of " + f(_.value), 1),
        o("div", lx, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: M.value <= 1,
            onClick: te[5] || (te[5] = (U) => N(M.value - 1))
          }, " Previous ", 8, ox),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: M.value >= _.value,
            onClick: te[6] || (te[6] = (U) => N(M.value + 1))
          }, " Next ", 8, sx)
        ])
      ])) : k("", !0)
    ], 2));
  }
}), rx = ["aria-label"], ix = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, dx = { class: "min-w-0" }, ux = { class: "text-base font-semibold" }, cx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, fx = { class: "flex shrink-0 items-center gap-2" }, mx = { class: "min-h-0 flex-1 overflow-y-auto" }, px = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Ht = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(null);
    let i = null, d = "";
    function u(c) {
      if (!n.open)
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
      const p = g[0], b = g[g.length - 1];
      c.shiftKey && document.activeElement === p ? (c.preventDefault(), b.focus()) : !c.shiftKey && document.activeElement === b && (c.preventDefault(), p.focus());
    }
    return ce(
      () => n.open,
      async (c) => {
        if (c) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", u), await ze(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", u), i?.focus?.();
      }
    ), be(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = d;
    }), (c, g) => (t(), T(qe, { to: "body" }, [
      D(De, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: g[0] || (g[0] = (p) => r("close"))
          })) : k("", !0)
        ]),
        _: 1
      }),
      D(De, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: j(() => [
          e.open ? (t(), a("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: z(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", ix, [
              o("div", dx, [
                o("h2", ux, f(e.title), 1),
                e.description ? (t(), a("p", cx, f(e.description), 1)) : k("", !0)
              ]),
              o("div", fx, [
                H(c.$slots, "header-actions"),
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
            o("div", mx, [
              H(c.$slots, "default")
            ]),
            c.$slots.footer ? (t(), a("footer", px, [
              H(c.$slots, "footer")
            ])) : k("", !0)
          ], 10, rx)) : k("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function je() {
  return { query: "", selected: {}, ranges: {} };
}
function vx(e, l) {
  const n = e.metrics?.[l];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function gx(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function Kt(e, l) {
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
    if (!gx(vx(e, r), s))
      return !1;
  return !0;
}
function hx(e, l) {
  const n = l.trim().toLowerCase();
  return n === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === n || i === n;
  }) ?? null;
}
function ut(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const bx = { class: "flex flex-col gap-6 p-4" }, xx = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, yx = { class: "text-sm font-semibold" }, kx = { class: "flex flex-wrap items-center gap-1.5" }, $x = ["aria-pressed", "onClick"], wx = { class: "text-sm font-semibold" }, Cx = { class: "flex flex-wrap items-center gap-1.5" }, Sx = { key: 0 }, _a = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(""), i = Qe({}), d = Qe({}), u = y(
      () => n.facets.filter((_) => (_.kind ?? "chips") === "chips")
    ), c = y(() => n.facets.filter((_) => _.kind === "range"));
    function g(_) {
      return _ == null ? "" : String(_);
    }
    function p() {
      s.value = n.applied.query ?? "";
      for (const _ of Object.keys(i))
        delete i[_];
      for (const [_, A] of Object.entries(n.applied.selected ?? {}))
        i[_] = A;
      for (const _ of Object.keys(d))
        delete d[_];
      for (const [_, A] of Object.entries(n.applied.ranges ?? {}))
        d[_] = { min: g(A.min), max: g(A.max) };
    }
    ce(
      () => n.open,
      (_) => {
        _ && p();
      }
    );
    function b(_) {
      const A = _.trim();
      if (A === "")
        return null;
      const N = Number(A);
      return Number.isFinite(N) ? N : null;
    }
    function C() {
      const _ = {};
      for (const [A, N] of Object.entries(d))
        _[A] = { min: b(N.min), max: b(N.max) };
      return _;
    }
    function w() {
      return {
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const $ = y(() => {
      let _ = n.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const A of Object.values(i))
        A && (_ += 1);
      for (const A of Object.values(C()))
        (A.min !== null || A.max !== null) && (_ += 1);
      return _;
    });
    function S(_, A) {
      i[_] = i[_] === A ? null : A;
    }
    function h(_) {
      return d[_] ?? { min: "", max: "" };
    }
    function v(_, A, N) {
      const E = d[_] ?? { min: "", max: "" };
      d[_] = { ...E, [A]: N };
    }
    function m() {
      r("apply", w());
    }
    function M() {
      s.value = "";
      for (const _ of Object.keys(i))
        i[_] = null;
      for (const _ of Object.keys(d))
        d[_] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        n.hideSearch ? { ...je(), query: n.applied.query } : je()
      );
    }
    return (_, A) => (t(), T(Ht, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: A[2] || (A[2] = (N) => r("close"))
    }, {
      footer: j(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: M
        }, " Reset all "),
        D(re, {
          variant: "outline",
          size: "sm",
          onClick: A[1] || (A[1] = (N) => r("close"))
        }, {
          default: j(() => [...A[5] || (A[5] = [
            R("Cancel", -1)
          ])]),
          _: 1
        }),
        D(re, {
          size: "sm",
          onClick: m
        }, {
          default: j(() => [
            A[6] || (A[6] = R(" Apply", -1)),
            $.value ? (t(), a("span", Sx, " (" + f($.value) + ")", 1)) : k("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        o("div", bx, [
          e.hideSearch ? k("", !0) : (t(), a("label", xx, [
            A[3] || (A[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            D(xe, {
              modelValue: s.value,
              "onUpdate:modelValue": A[0] || (A[0] = (N) => s.value = N),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(P, null, V(u.value, (N) => (t(), a("section", {
            key: N.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", yx, f(N.label ?? N.key), 1),
            o("div", kx, [
              (t(!0), a(P, null, V(N.options ?? [], (E) => (t(), a("button", {
                key: E.value,
                type: "button",
                class: z([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[N.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[N.key] === E.value ? "true" : "false",
                onClick: (te) => S(N.key, E.value)
              }, f(E.label), 11, $x))), 128))
            ])
          ]))), 128)),
          (t(!0), a(P, null, V(c.value, (N) => (t(), a("section", {
            key: N.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", wx, f(N.label ?? N.key), 1),
            o("div", Cx, [
              D(xe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${N.label ?? N.key} from`,
                "model-value": h(N.key).min,
                "onUpdate:modelValue": (E) => v(N.key, "min", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              A[4] || (A[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              D(xe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${N.label ?? N.key} to`,
                "model-value": h(N.key).max,
                "onUpdate:modelValue": (E) => v(N.key, "max", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), Mx = ["aria-disabled"], Bx = ["disabled"], _x = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ax = ["d"], Px = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, zx = ["disabled"], Ox = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, jx = ["d"], Lx = /* @__PURE__ */ O({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ Le({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Le(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const n = et(e, "modelValue"), r = l, s = y(() => n.value <= e.min), i = y(() => e.max !== null && n.value >= e.max);
    function d(u) {
      if (e.disabled)
        return;
      const c = n.value + u;
      c < e.min || e.max !== null && c > e.max || (n.value = c, u < 0 ? r("decrease", c) : r("increase", c));
    }
    return (u, c) => (t(), a("div", {
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
        onClick: c[0] || (c[0] = (g) => d(-1))
      }, [
        (t(), a("svg", _x, [
          o("path", {
            d: x(de)("minus")
          }, null, 8, Ax)
        ]))
      ], 8, Bx),
      o("span", Px, f(n.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: c[1] || (c[1] = (g) => d(1))
      }, [
        (t(), a("svg", Ox, [
          o("path", {
            d: x(de)("plus")
          }, null, 8, jx)
        ]))
      ], 8, zx)
    ], 8, Mx));
  }
}), Vx = { class: "divide-border flex flex-col divide-y" }, Tx = { class: "min-w-0" }, Dx = { class: "truncate text-sm font-medium" }, Fx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Ex = { class: "flex shrink-0 items-center gap-2 text-sm" }, Ix = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Nx = {
  key: 2,
  class: "font-medium tabular-nums"
}, Rx = ["aria-label", "onClick"], Ux = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Hx = ["d"], Kx = /* @__PURE__ */ O({
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
      const d = Number(i);
      return Number.isFinite(d) && d > 0 ? d : 1;
    }
    return (s, i) => (t(), a("div", Vx, [
      (t(!0), a(P, null, V(e.items, (d) => (t(), a("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Tx, [
          o("p", Dx, f(d.label), 1),
          d.detail ? (t(), a("p", Fx, f(d.detail), 1)) : k("", !0)
        ]),
        o("div", Ex, [
          e.editable ? (t(), T(Lx, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => n("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), a("span", Ix, " ×" + f(d.qty), 1)) : k("", !0),
          d.amount ? (t(), a("span", Nx, f(d.amount), 1)) : k("", !0),
          d.status ? (t(), T(ye, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : k("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => n("remove", d.key)
          }, [
            (t(), a("svg", Ux, [
              o("path", {
                d: x(de)("trash")
              }, null, 8, Hx)
            ]))
          ], 8, Rx)) : k("", !0)
        ])
      ]))), 128))
    ]));
  }
}), qx = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Gx = { class: "border-b px-4 py-3" }, Wx = { class: "text-sm font-medium" }, Zx = { class: "flex-1 px-4 py-3" }, Jx = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Yx = { class: "text-foreground block font-medium" }, Qx = { class: "mt-1 block" }, Xx = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, ey = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, ty = { class: "tabular-nums" }, ay = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, ny = { class: "text-muted-foreground" }, ly = {
  key: 0,
  class: "tabular-nums"
}, oy = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, sy = { class: "text-muted-foreground" }, ry = { class: "tabular-nums" }, iy = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, dy = { class: "tabular-nums" }, uy = {
  key: 4,
  class: "pt-1"
}, cy = /* @__PURE__ */ O({
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
    return (r, s) => (t(), a("aside", qx, [
      o("header", Gx, [
        o("h2", Wx, f(e.title), 1)
      ]),
      o("div", Zx, [
        e.items.length === 0 ? (t(), a("p", Jx, [
          o("span", Yx, f(e.emptyTitle), 1),
          o("span", Qx, f(e.emptyDescription), 1)
        ])) : (t(), T(Kx, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => n("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", Xx, [
        e.subtotal ? (t(), a("div", ey, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", ty, f(e.subtotal), 1)
        ])) : k("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", ay, [
          o("span", ny, f(e.discountLabel), 1),
          e.discount ? (t(), a("span", ly, f(e.discount), 1)) : k("", !0),
          H(r.$slots, "discount")
        ])) : k("", !0),
        e.tax ? (t(), a("div", oy, [
          o("span", sy, f(e.taxLabel), 1),
          o("span", ry, f(e.tax), 1)
        ])) : k("", !0),
        e.total ? (t(), a("div", iy, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", dy, f(e.total), 1)
        ])) : k("", !0),
        r.$slots.pay ? (t(), a("div", uy, [
          H(r.$slots, "pay")
        ])) : k("", !0)
      ])) : k("", !0)
    ]));
  }
}), fy = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, my = { class: "flex flex-col gap-4" }, py = { class: "flex flex-wrap items-start justify-between gap-3" }, vy = { class: "flex items-center gap-2" }, gy = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, k3 = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Le({
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
  emits: /* @__PURE__ */ Le(["select", "pay"], ["update:cart"]),
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(je()), i = K(!1), d = et(e, "cart"), u = K(!1), c = y(
      () => n.items.filter((U) => Kt(U, s.value))
    );
    function g(U) {
      s.value = { ...s.value, query: U.query };
    }
    function p(U) {
      s.value = {
        ...s.value,
        selected: U.selected,
        ranges: U.ranges,
        query: s.value.query
      }, i.value = !1;
    }
    function b(U) {
      return U ? n.parsePrice(U) : 0;
    }
    function C(U, G, W) {
      return {
        ...U,
        qty: G,
        amount: n.formatMoney(W * G)
      };
    }
    function w(U) {
      const G = hx(n.items, U);
      G && $(G.key);
    }
    function $(U) {
      const G = n.items.find((ae) => ae.key === U);
      if (!G || G.status === "out-of-stock")
        return;
      u.value = !1;
      const W = b(G);
      if (d.value.find((ae) => ae.key === U)) {
        d.value = d.value.map(
          (ae) => ae.key === U ? C(ae, Number(ae.qty ?? 1) + 1, W) : ae
        );
        return;
      }
      d.value = [
        ...d.value,
        {
          key: G.key,
          label: G.label,
          detail: G.caption ?? null,
          qty: 1,
          amount: n.formatMoney(W)
        }
      ];
    }
    function S(U, G) {
      const W = n.items.find((ae) => ae.key === U), ne = b(W);
      d.value = d.value.map(
        (ae) => ae.key === U ? C(ae, G, ne) : ae
      );
    }
    function h(U) {
      d.value = d.value.filter((G) => G.key !== U);
    }
    const v = y(
      () => d.value.reduce((U, G) => {
        const W = n.items.find((ne) => ne.key === G.key);
        return U + b(W) * Number(G.qty ?? 1);
      }, 0)
    ), m = y(
      () => n.discountRate > 0 ? Math.round(v.value * n.discountRate) : 0
    ), M = y(
      () => Math.round((v.value - m.value) * n.taxRate)
    ), _ = y(
      () => d.value.length ? n.formatMoney(v.value) : null
    ), A = y(
      () => d.value.length && m.value > 0 ? `−${n.formatMoney(m.value)}` : null
    ), N = y(
      () => d.value.length && n.taxRate > 0 ? n.formatMoney(M.value) : null
    ), E = y(
      () => d.value.length ? n.formatMoney(
        v.value - m.value + M.value
      ) : null
    );
    function te() {
      u.value = !0, r("pay", d.value);
    }
    return (U, G) => (t(), a(P, null, [
      o("div", fy, [
        o("section", my, [
          o("div", py, [
            D(Oe, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", vy, [
              x(ut)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: G[0] || (G[0] = (W) => s.value = {
                  ...x(je)(),
                  query: s.value.query
                })
              }, " Clear ")) : k("", !0),
              e.facets.length > 0 ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: G[1] || (G[1] = (W) => i.value = !0)
              }, [
                G[5] || (G[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                G[6] || (G[6] = R(" Filters ", -1)),
                x(ut)(s.value) ? (t(), a("span", gy, " on ")) : k("", !0)
              ])) : k("", !0)
            ])
          ]),
          D(Ut, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: c.value,
            onFilter: g,
            onSelect: G[2] || (G[2] = (W) => r("select", W)),
            onCart: $,
            onScan: w
          }, null, 8, ["search-placeholder", "items"])
        ]),
        D(cy, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: _.value,
          "discount-label": e.discountLabel,
          discount: A.value,
          "tax-label": e.taxLabel,
          tax: N.value,
          total: E.value,
          onQty: S,
          onRemove: h
        }, {
          pay: j(() => [
            H(U.$slots, "pay", {
              cart: d.value,
              paid: u.value,
              pay: te
            }, () => [
              D(re, {
                class: "w-full",
                disabled: d.value.length === 0,
                onClick: te
              }, {
                default: j(() => [
                  R(f(u.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      D(_a, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: G[3] || (G[3] = (W) => i.value = !1),
        onApply: p,
        onReset: G[4] || (G[4] = (W) => s.value = { ...x(je)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), hy = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, by = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, xy = ["src", "alt"], yy = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, ky = ["src"], $y = { class: "flex items-start justify-between gap-3" }, wy = { class: "text-lg font-semibold tabular-nums" }, Cy = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Sy = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, My = { class: "grid grid-cols-2 gap-3" }, By = { class: "flex flex-col gap-2" }, _y = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, $3 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(p) {
      let b = 0;
      for (const C of p)
        b = b * 31 + C.charCodeAt(0) >>> 0;
      return b;
    }
    function i(p, b) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((w, $) => ({
        label: w,
        value: Math.max(0, Math.round(p + Math.sin($ + b) * p * 0.18))
      }));
    }
    const d = y(() => n.item?.kind === "unit"), u = y(() => {
      const p = n.item;
      if (!p)
        return [];
      const b = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(b) || 12, s(p.key) % 7);
    }), c = y(() => {
      const p = n.item;
      if (!p)
        return [];
      const b = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(b) || 20, s(p.key) % 5 + 1);
    }), g = y(
      () => !!n.item && !d.value && n.item?.status !== "out-of-stock"
    );
    return (p, b) => (t(), T(Ht, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: b[1] || (b[1] = (C) => r("close"))
    }, Ye({
      default: j(() => [
        e.item ? (t(), a("div", hy, [
          o("div", by, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, xy)) : k("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", yy, [
            (t(!0), a(P, null, V(e.item.images, (C, w) => (t(), a("img", {
              key: w,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, ky))), 128))
          ])) : k("", !0),
          o("div", $y, [
            o("div", null, [
              o("p", wy, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", Cy, f(e.item.stock) + " in stock ", 1)) : k("", !0)
            ]),
            e.item.status ? (t(), T(ye, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : k("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", Sy, f(e.item.facts.join(" · ")), 1)) : k("", !0),
          o("div", My, [
            D(dt, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? c.value : u.value
            }, null, 8, ["label", "value", "series"]),
            D(dt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", By, [
            o("p", _y, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(ft, {
              data: d.value ? c.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : k("", !0)
      ]),
      _: 2
    }, [
      g.value && e.item ? {
        name: "footer",
        fn: j(() => [
          o("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: b[0] || (b[0] = (C) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), Ay = { class: "flex flex-col gap-10" }, Py = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, zy = { class: "flex flex-col gap-3" }, Oy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, jy = ["src", "alt"], Ly = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Vy = ["aria-label", "aria-pressed", "onClick"], Ty = ["src"], Dy = { class: "flex flex-col gap-5" }, Fy = { class: "flex flex-wrap items-start justify-between gap-3" }, Ey = { class: "min-w-0" }, Iy = { class: "text-2xl font-semibold tracking-tight" }, Ny = { class: "text-muted-foreground mt-1 text-sm" }, Ry = { class: "text-2xl font-semibold tabular-nums" }, Uy = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Hy = { class: "grid grid-cols-2 gap-3 text-sm" }, Ky = {
  key: 0,
  class: "rounded-lg border p-3"
}, qy = { class: "mt-1 font-medium" }, Gy = { class: "rounded-lg border p-3" }, Wy = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, Zy = { class: "mt-1 font-medium" }, Jy = { class: "flex flex-col gap-4" }, Yy = { class: "grid gap-4 sm:grid-cols-2" }, Qy = { class: "bg-card rounded-lg border p-4" }, Xy = { class: "mb-3 text-sm font-medium" }, e0 = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(w) {
      let $ = 0;
      for (const S of w)
        $ = $ * 31 + S.charCodeAt(0) >>> 0;
      return $;
    }
    function i(w, $) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((h, v) => ({
        label: h,
        value: Math.max(0, Math.round(w + Math.sin(v + $) * w * 0.18))
      }));
    }
    const d = y(() => n.item.kind === "unit"), u = y(() => {
      const w = [n.item.image, ...n.item.images ?? []].filter(
        ($) => typeof $ == "string" && $ !== ""
      );
      return [...new Set(w)];
    }), c = K(0), g = y(() => {
      const w = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(w) || 12, s(n.item.key) % 7);
    }), p = y(() => {
      const w = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(w) || 20, s(n.item.key) % 5 + 1);
    }), b = y(() => d.value ? p.value : g.value), C = y(() => !d.value && n.item.status !== "out-of-stock");
    return (w, $) => (t(), a("div", Ay, [
      o("div", Py, [
        o("div", zy, [
          o("div", Oy, [
            u.value[c.value] ? (t(), a("img", {
              key: 0,
              src: u.value[c.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, jy)) : k("", !0)
          ]),
          u.value.length > 1 ? (t(), a("div", Ly, [
            (t(!0), a(P, null, V(u.value, (S, h) => (t(), a("button", {
              key: S,
              type: "button",
              class: z(["size-16 shrink-0 overflow-hidden rounded-md border", h === c.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${h + 1}`,
              "aria-pressed": h === c.value ? "true" : "false",
              onClick: (v) => c.value = h
            }, [
              o("img", {
                src: S,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, Ty)
            ], 10, Vy))), 128))
          ])) : k("", !0)
        ]),
        o("div", Dy, [
          o("div", Fy, [
            o("div", Ey, [
              o("h1", Iy, f(e.item.label), 1),
              o("p", Ny, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(ye, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : k("", !0)
          ]),
          o("p", Ry, f(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", Uy, f(e.item.facts.join(" · ")), 1)) : k("", !0),
          o("dl", Hy, [
            e.item.sku ? (t(), a("div", Ky, [
              $[1] || ($[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", qy, f(e.item.sku), 1)
            ])) : k("", !0),
            o("div", Gy, [
              o("dt", Wy, f(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", Zy, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          C.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: $[0] || ($[0] = (S) => r("cart", e.item.key))
          }, " Add to cart ")) : k("", !0)
        ])
      ]),
      o("section", Jy, [
        $[2] || ($[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", Yy, [
          D(dt, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: b.value
          }, null, 8, ["label", "value", "series"]),
          D(dt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: g.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", Qy, [
          o("p", Xy, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(Sv, {
            data: b.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), t0 = ["href"], w3 = /* @__PURE__ */ O({
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
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : x(Ie)])
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
        R(" " + f(e.backLabel), 1)
      ], 8, t0),
      D(e0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), a0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, n0 = ["aria-selected", "onClick"], l0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, o0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, s0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, r0 = ["aria-pressed"], i0 = ["aria-pressed"], C3 = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Le({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Le(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(n.tabs[0]?.key ?? ""), i = et(e, "layout"), d = K({}), u = K(!1);
    ce(
      () => n.tabs.map((S) => S.key).join(","),
      (S) => {
        S.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function c(S) {
      return d.value[S] ?? je();
    }
    const g = y(
      () => n.tabs.find((S) => S.key === s.value) ?? n.tabs[0] ?? null
    ), p = y(
      () => g.value ? c(g.value.key) : je()
    ), b = y(() => {
      const S = g.value;
      return S ? S.items.filter((h) => Kt(h, c(S.key))) : [];
    });
    function C(S) {
      const h = g.value?.key;
      h && (d.value = {
        ...d.value,
        [h]: { ...c(h), query: S }
      });
    }
    function w() {
      const S = g.value?.key;
      S && (d.value = { ...d.value, [S]: je() });
    }
    function $(S) {
      const h = g.value?.key;
      h && (d.value = { ...d.value, [h]: S }, u.value = !1);
    }
    return (S, h) => (t(), a(P, null, [
      o("div", {
        class: z(["flex w-full flex-col gap-8", e.embedded ? "" : x(Ie)])
      }, [
        D(Oe, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", a0, [
          (t(!0), a(P, null, V(e.tabs, (v) => (t(), a("button", {
            key: v.key,
            type: "button",
            class: z([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === v.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === v.key ? "true" : "false",
            onClick: (m) => s.value = v.key
          }, f(v.label), 11, n0))), 128))
        ])) : k("", !0),
        o("div", l0, [
          D(xe, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: g.value?.searchPlaceholder ?? "Search…",
            "aria-label": g.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": h[0] || (h[0] = (v) => C(String(v)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x(ut)(p.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: w
          }, " Clear ")) : k("", !0),
          (g.value?.facets ?? []).length > 0 ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: h[1] || (h[1] = (v) => u.value = !0)
          }, [
            h[8] || (h[8] = o("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              o("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            h[9] || (h[9] = R(" Filters ", -1)),
            x(ut)(p.value) ? (t(), a("span", o0, " on ")) : k("", !0)
          ])) : k("", !0),
          o("div", s0, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: h[2] || (h[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, r0),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: h[3] || (h[3] = (v) => i.value = "list")
            }, " List ", 10, i0)
          ])
        ]),
        D(Ut, {
          layout: i.value,
          "onUpdate:layout": h[4] || (h[4] = (v) => i.value = v),
          "page-size": e.pageSize,
          items: b.value,
          onSelect: h[5] || (h[5] = (v) => r("select", v)),
          onCart: h[6] || (h[6] = (v) => r("cart", v))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(_a, {
        open: u.value,
        title: g.value?.filterTitle ?? "Filters",
        "search-placeholder": g.value?.searchPlaceholder ?? "Search…",
        facets: g.value?.facets ?? [],
        applied: p.value,
        onClose: h[7] || (h[7] = (v) => u.value = !1),
        onApply: $,
        onReset: w
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), d0 = { class: "flex flex-col gap-4" }, u0 = { class: "flex flex-col gap-4" }, S3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(je()), i = y(
      () => n.cards.filter((d) => Kt(d, s.value))
    );
    return (d, u) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : x(Ie)])
    }, [
      D(Oe, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", d0, [
        D(Oe, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(Ut, {
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
      o("section", u0, [
        D(Oe, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(jl, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": j(({ value: c }) => [
            D(ye, {
              status: String(c)
            }, {
              default: j(() => [
                R(f(c), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), c0 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, f0 = { class: "text-sm font-medium" }, m0 = ["width", "height", "aria-label"], p0 = { class: "flex items-center gap-2" }, v0 = /* @__PURE__ */ O({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(null), i = K(!1);
    let d = null;
    function u() {
      return s.value?.getContext("2d") ?? null;
    }
    function c(S) {
      const h = s.value;
      if (!h)
        return null;
      const v = h.getBoundingClientRect(), m = h.width / v.width, M = h.height / v.height;
      return {
        x: (S.clientX - v.left) * m,
        y: (S.clientY - v.top) * M
      };
    }
    function g(S) {
      n.disabled || (i.value = !0, d = c(S), s.value?.setPointerCapture(S.pointerId));
    }
    function p(S) {
      if (!i.value || n.disabled)
        return;
      const h = u(), v = c(S);
      !h || !v || !d || (h.strokeStyle = "#111827", h.lineWidth = 2.4, h.lineCap = "round", h.lineJoin = "round", h.beginPath(), h.moveTo(d.x, d.y), h.lineTo(v.x, v.y), h.stroke(), d = v);
    }
    function b() {
      i.value = !1, d = null;
    }
    function C() {
      const S = s.value, h = u();
      !S || !h || (h.clearRect(0, 0, S.width, S.height), r("clear"));
    }
    function w() {
      const S = s.value;
      S && r("save", S.toDataURL("image/png"));
    }
    function $() {
      const S = s.value, h = u();
      !S || !h || (h.fillStyle = "#ffffff", h.fillRect(0, 0, S.width, S.height));
    }
    return ge($), be(() => {
      i.value = !1;
    }), (S, h) => (t(), a("div", c0, [
      o("p", f0, f(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: z(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ve(g, ["prevent"]),
        onPointermove: ve(p, ["prevent"]),
        onPointerup: ve(b, ["prevent"]),
        onPointerleave: ve(b, ["prevent"])
      }, null, 42, m0),
      o("div", p0, [
        D(re, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: j(() => [...h[0] || (h[0] = [
            R(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(re, {
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: j(() => [...h[1] || (h[1] = [
            R("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), g0 = { class: "grid gap-8 lg:grid-cols-2" }, h0 = { class: "flex flex-col gap-3" }, b0 = { class: "text-muted-foreground text-xs" }, x0 = {
  key: 0,
  class: "flex flex-col gap-3"
}, y0 = { class: "flex flex-wrap gap-3" }, k0 = ["onClick"], $0 = ["src", "alt"], w0 = {
  key: 1,
  class: "flex flex-col gap-3"
}, C0 = { class: "flex flex-wrap gap-3" }, S0 = ["onClick"], M0 = ["src", "alt"], B0 = {
  key: 2,
  class: "flex flex-col gap-4"
}, _0 = { class: "flex flex-wrap items-center gap-2" }, A0 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, P0 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, z0 = { class: "flex flex-col gap-2" }, O0 = ["src"], j0 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, L0 = ["src"], M3 = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = K([]), r = K([]), s = K(null), i = K(null), d = K(null), u = K(l.documents[0]?.key ?? "");
    function c(S) {
      try {
        const h = localStorage.getItem(S), v = h ? JSON.parse(h) : [];
        return Array.isArray(v) ? v : [];
      } catch {
        return [];
      }
    }
    ge(() => {
      !l.storageKey || typeof localStorage > "u" || (n.value = c(`${l.storageKey}.signatures`), r.value = c(`${l.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), ce(
      n,
      (S) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(S));
      },
      { deep: !0 }
    ), ce(
      r,
      (S) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(S));
      },
      { deep: !0 }
    );
    function g(S) {
      const h = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: S
      };
      n.value = [h, ...n.value].slice(0, 8), s.value = h.id;
    }
    async function p(S, h) {
      await $c(S), h(40);
      const v = await new Promise((m, M) => {
        const _ = new FileReader();
        _.onload = () => m(String(_.result)), _.onerror = () => M(new Error("Could not read the file")), _.readAsDataURL(S);
      });
      return h(100), { value: v, name: S.name, size: S.size, url: v };
    }
    function b() {
      const S = d.value?.url ?? d.value?.value;
      if (!S)
        return;
      const h = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: S
      };
      r.value = [h, ...r.value].slice(0, 8), i.value = h.id;
    }
    const C = y(
      () => n.value.find((S) => S.id === s.value)?.dataUrl ?? null
    ), w = y(
      () => r.value.find((S) => S.id === i.value)?.dataUrl ?? null
    ), $ = y(() => {
      const S = l.documents.find((v) => v.key === u.value)?.document ?? l.documents[0]?.document ?? {}, h = {
        ...S?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...S,
        branding: h
      };
    });
    return (S, h) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : x(Ie)])
    }, [
      D(Oe, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", g0, [
        D(v0, {
          label: "Draw a signature",
          onSave: g
        }),
        o("div", h0, [
          h[2] || (h[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", b0, f(x($a)), 1),
          D(va, {
            modelValue: d.value,
            "onUpdate:modelValue": h[0] || (h[0] = (v) => d.value = v),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          D(re, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: b
          }, {
            default: j(() => [...h[1] || (h[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", x0, [
        D(Oe, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", y0, [
          (t(!0), a(P, null, V(n.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: z(["rounded-md border p-2", v.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => s.value = v.id
          }, [
            o("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, $0)
          ], 10, k0))), 128))
        ])
      ])) : k("", !0),
      r.value.length ? (t(), a("section", w0, [
        D(Oe, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", C0, [
          (t(!0), a(P, null, V(r.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: z(["rounded-md border p-2", v.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => i.value = v.id
          }, [
            o("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, M0)
          ], 10, S0))), 128))
        ])
      ])) : k("", !0),
      e.documents.length ? (t(), a("section", B0, [
        o("div", _0, [
          (t(!0), a(P, null, V(e.documents, (v) => (t(), T(re, {
            key: v.key,
            size: "sm",
            variant: u.value === v.key ? "default" : "outline",
            onClick: (m) => u.value = v.key
          }, {
            default: j(() => [
              R(f(v.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", A0, [
          D(Fp, {
            document: $.value
          }, null, 8, ["document"]),
          o("div", P0, [
            o("div", z0, [
              h[3] || (h[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), a("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, O0)) : (t(), a("p", j0, "Draw and save a signature"))
            ]),
            w.value ? (t(), a("img", {
              key: 0,
              src: w.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, L0)) : k("", !0)
          ])
        ])
      ])) : k("", !0)
    ], 2));
  }
}), B3 = "panel.dashboard.hiddenWidgets", V0 = /* @__PURE__ */ Symbol("dashboardHide"), T0 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, _3 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, n = st(V0, null), r = K(
      l.catalog.filter((d) => l.defaults.includes(d.id))
    ), s = K(!1);
    ge(() => {
      if (n?.register("shortcuts", "Shortcuts"), !l.storageKey) {
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
    }), ce(
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
    const i = y(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? k("", !0) : (t(), a("div", T0, [
      D(Bh, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (c) => r.value = c),
        onHide: u[1] || (u[1] = (c) => x(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), D0 = { class: "flex flex-col gap-3" }, F0 = ["data-slot"], E0 = ["aria-pressed", "aria-label", "title"], I0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, N0 = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, R0 = { class: "flex h-8 items-center" }, U0 = ["aria-label", "title", "onClick"], H0 = ["aria-label", "title", "onClick"], K0 = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, q0 = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, A3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = K(n.maskable ? !n.hidden : !0), i = K(/* @__PURE__ */ new Set());
    function d(m) {
      return n.maskable && (m.sensitive ?? !0);
    }
    function u(m) {
      return d(m) && !s.value && !i.value.has(m.key);
    }
    const c = y(() => n.segments.some(u)), g = y(() => n.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, b = y(() => p[n.columns] ?? p[4]), C = y(() => {
      const m = n.columns ?? 4, M = Math.floor(n.segments.length / m) * m;
      return n.segments.slice(0, M);
    }), w = y(() => {
      const m = n.columns ?? 4, M = Math.floor(n.segments.length / m) * m;
      return n.segments.slice(M);
    }), $ = y(() => {
      const m = [];
      return C.value.length > 0 && m.push({ key: "packed", joined: !0, segments: C.value }), w.value.length > 0 && m.push({ key: "leftover", joined: !1, segments: w.value }), m;
    });
    function S() {
      const m = c.value === !1;
      s.value = !m, i.value = /* @__PURE__ */ new Set(), r("toggle", m);
    }
    function h(m) {
      if (!d(m))
        return;
      const M = new Set(i.value);
      if (u(m))
        M.add(m.key);
      else if (M.delete(m.key), s.value) {
        s.value = !1;
        for (const _ of n.segments)
          _.key !== m.key && d(_) && M.add(_.key);
      }
      i.value = M, r("toggle", c.value);
    }
    function v(m) {
      return typeof m == "number" ? new Intl.NumberFormat().format(m) : m;
    }
    return (m, M) => (t(), a("div", D0, [
      (t(!0), a(P, null, V($.value, (_) => (t(), a("div", {
        key: _.key,
        class: z(["relative shrink-0", _.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": _.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && g.value && _.key === $.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": c.value,
          "aria-label": c.value ? "Show all values" : "Hide all values",
          title: c.value ? "Show all values" : "Hide all values",
          onClick: S
        }, [
          (t(), a("svg", I0, [
            c.value ? (t(), a(P, { key: 0 }, [
              M[0] || (M[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              M[1] || (M[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              M[2] || (M[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              M[3] || (M[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(P, { key: 1 }, [
              M[4] || (M[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              M[5] || (M[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, E0)) : k("", !0),
        o("div", {
          class: z(["grid", [_.joined ? "gap-px" : "gap-3", b.value]])
        }, [
          (t(!0), a(P, null, V(_.segments, (A) => (t(), a("div", {
            key: A.key,
            class: z(["bg-card flex flex-col gap-2 p-4", _.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", N0, f(A.label), 1),
            o("div", R0, [
              e.loading ? (t(), T(Se, {
                key: 0,
                variant: "number"
              })) : u(A) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${A.label} hidden. Show it.`,
                title: `Show ${A.label}`,
                onClick: (N) => h(A)
              }, [
                (t(), a(P, null, V(5, (N) => o("span", {
                  key: N,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, U0)) : d(A) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${A.label}, ${v(A.value)}. Hide it.`,
                title: `Hide ${A.label}`,
                onClick: (N) => h(A)
              }, f(v(A.value)), 9, H0)) : (t(), a("span", K0, f(v(A.value)), 1)),
              A.trend && !e.loading && !u(A) ? (t(), T(Ba, {
                key: 4,
                direction: A.trend.direction,
                percentage: A.trend.percentage,
                inverted: A.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : k("", !0)
            ]),
            A.sparkline?.length && !e.loading && !u(A) ? (t(), T(ft, {
              key: 0,
              data: A.sparkline,
              height: 24
            }, null, 8, ["data"])) : k("", !0),
            A.caption || A.comparison && A.trend ? (t(), a("p", q0, f(A.caption ?? A.comparison), 1)) : k("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, F0))), 128))
    ]));
  }
}), G0 = ["aria-label"], W0 = ["aria-valuenow", "aria-label"], Z0 = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, J0 = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, Y0 = ["title"], Q0 = { class: "font-medium" }, X0 = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, ek = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, tk = { class: "flex items-center justify-between gap-2" }, ak = { class: "text-sm font-semibold" }, nk = { class: "flex items-center gap-3" }, lk = ["href"], ok = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, sk = { class: "flex min-w-0 flex-col gap-0.5" }, rk = { class: "text-sm font-medium" }, ik = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, dk = {
  key: 1,
  class: "flex flex-col gap-2"
}, uk = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ck = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, fk = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, P3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = y(() => n.items.find(($) => !$.done) ?? null), i = y(() => n.items.filter(($) => $.key !== s.value?.key)), d = y(() => n.items.length), u = y(() => n.items.filter(($) => $.done).length), c = y(() => {
      if (!s.value)
        return d.value;
      const $ = n.items.findIndex((S) => S.key === s.value?.key);
      return $ >= 0 ? $ + 1 : 1;
    }), g = y(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = y(() => {
      const $ = n.linkComponent;
      return typeof $ == "string" ? $ : la($);
    }), b = Je({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = Je({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), w = Je({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return ($, S) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
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
          style: le({ width: `${g.value}%` })
        }, null, 4)
      ], 8, W0),
      o("div", Z0, [
        o("span", J0, " Step " + f(c.value) + " of " + f(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", Q0, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", X0, f(": " + s.value.detail), 1)) : k("", !0)
        ], 8, Y0),
        s.value?.href ? (t(), T($e(p.value), {
          key: 0,
          href: s.value.href,
          class: z(x(C))
        }, {
          default: j(() => [
            R(f(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : k("", !0),
        e.skipLabel ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: S[0] || (S[0] = (h) => r("skip"))
        }, f(e.skipLabel), 1)) : k("", !0)
      ])
    ], 8, G0)) : e.items.length ? (t(), a("section", ek, [
      o("div", tk, [
        o("h2", ak, f(e.heading), 1),
        o("div", nk, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: S[1] || (S[1] = (h) => r("skip"))
          }, f(e.skipLabel), 1)) : k("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, lk)) : k("", !0)
        ])
      ]),
      s.value ? (t(), a("div", ok, [
        S[2] || (S[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", sk, [
          o("p", rk, f(s.value.title), 1),
          s.value.detail ? (t(), a("p", ik, f(s.value.detail), 1)) : k("", !0),
          s.value.href ? (t(), T($e(p.value), {
            key: 1,
            href: s.value.href,
            class: z(x(b))
          }, {
            default: j(() => [
              R(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : k("", !0)
        ])
      ])) : k("", !0),
      i.value.length ? (t(), a("ul", dk, [
        (t(!0), a(P, null, V(i.value, (h) => (t(), a("li", {
          key: h.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: z([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              h.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            h.done ? (t(), a("svg", uk, [...S[3] || (S[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : k("", !0)
          ], 2),
          o("div", ck, [
            o("p", {
              class: z(["text-sm", h.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(h.title), 3),
            !h.done && h.detail ? (t(), a("p", fk, f(h.detail), 1)) : k("", !0)
          ]),
          !h.done && h.href ? (t(), T($e(p.value), {
            key: 0,
            href: h.href,
            class: z(x(w))
          }, {
            default: j(() => [
              R(f(h.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : k("", !0)
        ]))), 128))
      ])) : k("", !0)
    ])) : k("", !0);
  }
}), mk = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, pk = { class: "hidden items-center gap-2 md:flex" }, vk = { class: "md:hidden" }, gk = { class: "border-b px-4 py-3" }, hk = { class: "text-muted-foreground text-xs" }, bk = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, xk = { class: "font-medium tabular-nums" }, yk = { class: "ml-auto flex items-center gap-3" }, z3 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const n = l, r = K(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), a("div", mk, [
      o("div", pk, [
        H(i.$slots, "actions")
      ]),
      o("div", vk, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        D(Ft, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: j(() => [
            D(Et, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", gk, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", hk, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", bk, [
                  H(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", xk, [
        e.allMatching ? (t(), a(P, { key: 0 }, [
          R(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(P, { key: 1 }, [
          R(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", yk, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => n("select-all-matching"))
        }, " Select all " + f(s(e.total)), 1)) : k("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => n("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), kk = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, $k = { class: "text-muted-foreground text-xs tabular-nums" }, wk = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Ck = ["value"], Sk = ["value"], Mk = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Bk = ["disabled"], _k = ["disabled"], Ak = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Pk = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, zk = ["disabled"], O3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = (c) => new Intl.NumberFormat().format(c), i = y(() => n.rowsOnPage === 0 ? 0 : (n.page - 1) * n.perPage + 1), d = y(() => (n.page - 1) * n.perPage + n.rowsOnPage), u = y(
      () => n.total === void 0 ? null : Math.max(1, Math.ceil(n.total / n.perPage))
    );
    return (c, g) => (t(), a("div", kk, [
      o("p", $k, [
        R(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(P, { key: 0 }, [
          R("of " + f(s(e.total)), 1)
        ], 64)) : k("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", wk, [
        g[4] || (g[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: g[0] || (g[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(P, null, V(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, f(p), 9, Sk))), 128))
        ], 40, Ck)
      ])) : k("", !0),
      o("nav", Mk, [
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
        ])], 8, Bk),
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
        ])], 8, _k),
        o("span", Ak, f(e.page), 1),
        u.value !== null ? (t(), a("span", Pk, " of " + f(s(u.value)), 1)) : k("", !0),
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
        ])], 8, zk)
      ])
    ]));
  }
}), Ok = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, jk = ["aria-current"], Lk = ["title"], Vk = ["aria-current", "onClick"], Tk = ["title"], Dk = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", Ok, [
      o("button", {
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => n("select", null))
      }, [
        i[1] || (i[1] = R(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, Lk)) : (t(), T(Se, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, jk),
      (t(!0), a(P, null, V(e.tabs, (d) => (t(), a("button", {
        key: d,
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => n("select", d)
      }, [
        R(f(d) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, Tk)) : (t(), T(Se, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Vk))), 128))
    ]));
  }
}), j3 = /* @__PURE__ */ Tt(Dk, [["__scopeId", "data-v-3967c945"]]), Fk = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ek = { class: "grid gap-2" }, Ik = {
  key: 0,
  class: "text-destructive text-sm"
}, Nk = { class: "flex gap-2" }, L3 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const n = l, s = K((() => {
      const C = navigator.userAgent, w = [
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
      return [w, $].filter(Boolean).join(" on ") || "";
    })()), i = K(!1), d = Ea(null), u = y(() => d.value?.isLoading.value ?? !1), c = y(() => d.value?.error.value ?? null), g = y(() => d.value?.isSupported.value ?? !1);
    ge(async () => {
      try {
        const { usePasskeyRegister: C } = await import("@laravel/passkeys/vue");
        d.value = C({
          onSuccess: () => {
            s.value = "", i.value = !1, n("success");
          }
        });
      } catch {
        d.value = null;
      }
    });
    const p = async (C) => {
      C.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, b = () => {
      i.value = !1, s.value = "";
    };
    return (C, w) => g.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", Ek, [
        w[3] || (w[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        me(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": w[1] || (w[1] = ($) => s.value = $),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [we, s.value]
        ]),
        w[4] || (w[4] = o("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      c.value ? (t(), a("p", Ik, f(c.value), 1)) : k("", !0),
      o("div", Nk, [
        D(re, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: j(() => [
            R(f(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        D(re, {
          type: "button",
          variant: "ghost",
          onClick: b
        }, {
          default: j(() => [...w[5] || (w[5] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(re, {
      key: 1,
      variant: "outline",
      onClick: w[0] || (w[0] = ($) => i.value = !0)
    }, {
      default: j(() => [...w[2] || (w[2] = [
        R(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", Fk, " Passkeys are not supported in this browser. "));
  }
}), Rk = { class: "pk-form-stack" }, Uk = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, V3 = /* @__PURE__ */ O({
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
    kt("panelPicker", {
      get base() {
        return n.pickerBase ?? "";
      },
      get returnUrl() {
        return n.returnUrl ?? "";
      }
    }), kt("panelCreateOption", {
      run(c, g) {
        return n.createOption ? n.createOption(c, g) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = y(() => n.nodes.length > 0), i = y(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = y(() => n.errors._conflict);
    function u(c) {
      if (n.upload)
        return (g, p) => n.upload(c, g, p);
    }
    return (c, g) => (t(), a("div", Rk, [
      d.value ? (t(), a("p", Uk, f(d.value), 1)) : k("", !0),
      s.value ? (t(!0), a(P, { key: 1 }, V(e.nodes, (p, b) => (t(), T(ga, {
        key: b,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: g[0] || (g[0] = (C, w) => r("change", C, w)),
        onAffixAction: g[1] || (g[1] = (C, w) => r("affix-action", C, w))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(P, null, V(e.fields, (p) => (t(), T(Ke, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (b) => e.searchOptions(p.key, b) : void 0,
          upload: u(p.key),
          discard: e.discard,
          class: z(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (b) => r("change", p.key, b),
          onAffixAction: (b) => r("affix-action", p.key, b)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), Hk = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, Kk = { class: "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10" }, qk = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, Gk = ["disabled"], Wk = ["disabled"], Zk = ["disabled"], T3 = /* @__PURE__ */ O({
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
    return (l, n) => (t(), T(qe, { to: "body" }, [
      D(De, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: j(() => [
          e.show ? (t(), a("div", Hk, [
            o("div", Kk, [
              n[3] || (n[3] = o("span", {
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
              o("span", qk, f(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[0] || (n[0] = (r) => l.$emit("discard"))
              }, f(e.discardLabel), 9, Gk)) : k("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[1] || (n[1] = (r) => l.$emit("cancel"))
              }, f(e.cancelLabel), 9, Wk),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: n[2] || (n[2] = (r) => l.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, Zk)
            ])
          ])) : k("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function D3(e, l = {}) {
  const { warnOnUnload: n = !0 } = l, r = K(yt(e.value)), s = y(() => yt(e.value) !== r.value);
  function i() {
    r.value = yt(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function u(c) {
    s.value && (c.preventDefault(), c.returnValue = "");
  }
  return ge(() => {
    n && window.addEventListener("beforeunload", u);
  }), be(() => {
    window.removeEventListener("beforeunload", u);
  }), { dirty: s, commit: i, discard: d, baseline: r };
}
function yt(e) {
  return JSON.stringify(e, (l, n) => n === void 0 ? null : n === null || typeof n != "object" || Array.isArray(n) ? n : Object.fromEntries(
    Object.entries(n).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const Jk = {
  key: 0,
  class: "flex flex-col gap-1"
}, Yk = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, Qk = { class: "text-foreground text-sm font-medium" }, Xk = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, e2 = {
  key: 5,
  class: "max-w-full font-normal"
}, t2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, a2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, n2 = {
  key: 6,
  class: "font-normal"
}, l2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, o2 = { class: "text-muted-foreground truncate font-medium" }, s2 = { class: "text-foreground col-span-2 break-words" }, r2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, i2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, d2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, u2 = ["href"], c2 = { class: "flex min-w-0 items-start gap-2.5" }, f2 = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, m2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, p2 = ["d"], v2 = { class: "min-w-0" }, g2 = { class: "flex flex-wrap items-center gap-2" }, h2 = { class: "text-sm font-semibold" }, b2 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, x2 = ["onClick"], F3 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(!n.node.collapsed), i = K(0), d = y(() => n.depth === 0), u = y(() => {
      const w = n.node.columns ?? (n.node.component === "section" ? 2 : 1);
      return w >= 3 ? "sm:grid-cols-3" : w === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), c = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, g = y(() => n.node.key ? n.record[n.node.key] : null), p = y(() => {
      const w = g.value;
      return w == null || w === "";
    }), b = y(() => {
      if (p.value)
        return "None";
      const w = g.value;
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(w)).toLocaleDateString(void 0, c[n.node.type]);
      let $ = String(w);
      return n.node.transform === "upper" && ($ = $.toUpperCase()), n.node.transform === "lower" && ($ = $.toLowerCase()), [n.node.prefix, $, n.node.suffix].filter(Boolean).join(" ");
    }), C = y(() => {
      const w = typeof g.value == "boolean" ? g.value ? "1" : "" : String(g.value), $ = n.node.colors?.[w] ?? n.node.defaultColor ?? "neutral";
      return It[$] ?? "outline";
    });
    return (w, $) => {
      const S = Pt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", Jk, [
        o("dt", Yk, f(e.node.label), 1),
        o("dd", Qk, [
          e.node.type === "badge" && x(Id)(g.value) ? (t(), T(Ee, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: j(() => [
              R(f(g.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", Xk, "None")) : e.node.type === "icon" ? (t(), T(gd, {
            key: 2,
            value: g.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(xd, {
            key: 3,
            src: g.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Cd, {
            key: 4,
            value: typeof g.value == "string" ? g.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", e2, [
            e.node.language ? (t(), a("p", t2, f(e.node.language), 1)) : k("", !0),
            o("pre", a2, [
              o("code", null, f(g.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", n2, [
            g.value && typeof g.value == "object" && !Array.isArray(g.value) && Object.keys(g.value).length ? (t(), a("dl", l2, [
              (t(!0), a(P, null, V(g.value, (h, v) => (t(), a("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", o2, f(v), 1),
                o("dd", s2, f(h), 1)
              ]))), 128))
            ])) : (t(), a("span", r2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", i2, [
            (t(!0), a(P, null, V(Array.isArray(g.value) ? g.value : [], (h, v) => (t(), a("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(P, null, V(e.node.entries ?? [], (m, M) => (t(), T(S, {
                key: M,
                node: m,
                record: h,
                depth: e.depth + 1,
                onAction: $[0] || ($[0] = (_) => r("action", _))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(g.value) || g.value.length === 0 ? (t(), a("span", d2, "None")) : k("", !0)
          ])) : e.node.url && !p.value ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(b.value), 9, u2)) : (t(), a("span", {
            key: 9,
            class: z([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, f(b.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: $[1] || ($[1] = (h) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : k("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
        key: 1,
        class: z(d.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: z(["flex items-start justify-between gap-3", [
            d.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: $[2] || ($[2] = (h) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", c2, [
            e.node.icon ? (t(), a("div", f2, [
              (t(), a("svg", m2, [
                o("path", {
                  d: x(de)(e.node.icon)
                }, null, 8, p2)
              ]))
            ])) : k("", !0),
            o("div", v2, [
              o("div", g2, [
                o("h3", h2, f(e.node.label), 1),
                e.node.status ? (t(), T(ye, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : k("", !0)
              ]),
              e.node.description ? (t(), a("p", b2, f(e.node.description), 1)) : k("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: z(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (h, v) => (t(), T(S, {
            key: v,
            node: h,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[3] || ($[3] = (m) => r("action", m))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : k("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: z(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (h, v) => (t(), T(S, {
          key: v,
          node: h,
          record: e.record,
          depth: e.depth + 1,
          onAction: $[4] || ($[4] = (m) => r("action", m))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: z(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (h, v) => (t(), a("button", {
            key: v,
            type: "button",
            class: z([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (m) => i.value = v
          }, f(h.label), 11, x2))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (h, v) => me((t(), a("div", {
          key: v,
          class: z(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(h.children ?? [], (m, M) => (t(), T(S, {
            key: M,
            node: m,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[5] || ($[5] = (_) => r("action", _))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Fe, i.value === v]
        ])), 128))
      ], 2)) : k("", !0);
    };
  }
}), y2 = { class: "text-muted-foreground text-sm" }, k2 = { class: "flex items-start gap-3" }, $2 = { class: "min-w-0 flex-1" }, w2 = { class: "flex flex-wrap items-center gap-2" }, C2 = { class: "truncate text-sm font-medium" }, S2 = { class: "text-muted-foreground mt-0.5 text-xs" }, M2 = { class: "text-muted-foreground text-xs" }, B2 = { class: "mt-auto flex items-center gap-2" }, _2 = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), a("div", {
      class: z(["flex flex-col gap-4", x(ka)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", y2, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: z(x(pc))
      }, [
        (t(!0), a(P, null, V(e.gateways, (u) => (t(), a("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", k2, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: le({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            o("div", $2, [
              o("div", w2, [
                o("h3", C2, f(u.label), 1),
                D(ye, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: j(() => [
                    R(f(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), T(ye, {
                  key: 0,
                  status: "offered"
                }, {
                  default: j(() => [...d[0] || (d[0] = [
                    R(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), T(ye, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: j(() => [...d[1] || (d[1] = [
                    R(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : k("", !0),
                u.isDefault ? (t(), T(ye, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...d[2] || (d[2] = [
                    R(" Default ", -1)
                  ])]),
                  _: 1
                })) : k("", !0),
                u.connected && u.mode ? (t(), T(ye, {
                  key: 3,
                  status: u.mode
                }, {
                  default: j(() => [
                    R(f(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : k("", !0)
              ]),
              o("p", S2, f(u.caption), 1)
            ])
          ]),
          o("p", M2, f(u.methods.join(" · ")), 1),
          o("div", B2, [
            D(re, {
              size: "sm",
              variant: "outline",
              onClick: (c) => r("configure", u.key)
            }, {
              default: j(() => [...d[3] || (d[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            D(re, {
              size: "sm",
              variant: "ghost",
              onClick: (c) => r("toggle", u.key)
            }, {
              default: j(() => [
                R(f(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), A2 = { class: "flex flex-col gap-6" }, P2 = { class: "relative" }, z2 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, O2 = ["d"], j2 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, L2 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, V2 = { class: "flex flex-wrap items-center gap-2" }, T2 = { class: "text-muted-foreground text-sm" }, D2 = { class: "flex flex-col gap-1 text-sm" }, F2 = ["value"], E2 = {
  key: 0,
  class: "flex flex-col gap-2"
}, I2 = { class: "flex flex-wrap items-center gap-2" }, N2 = {
  key: 1,
  class: "flex items-center gap-2"
}, E3 = /* @__PURE__ */ O({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Le({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const l = et(e, "gateways"), n = K(null), r = K(""), s = y(
      () => l.value.find((w) => w.key === n.value) ?? null
    ), i = y(() => {
      const w = r.value.trim().toLowerCase();
      return w === "" ? l.value : l.value.filter(($) => [$.key, $.label, $.caption, ...$.methods].join(" ").toLowerCase().includes(w));
    });
    function d(w) {
      return w.connected && w.enabled !== !1;
    }
    function u(w, $) {
      l.value = l.value.map(
        (S) => S.key === w ? { ...S, ...$ } : S
      );
    }
    function c(w) {
      n.value = w;
    }
    function g(w) {
      const $ = l.value.find((h) => h.key === w);
      if (!$)
        return;
      const S = !$.connected;
      u(w, {
        connected: S,
        mode: S ? $.mode ?? "test" : null,
        enabled: S,
        isDefault: !1
      });
    }
    function p(w, $) {
      const S = l.value.find((h) => h.key === w);
      S?.connected && u(w, { enabled: $, isDefault: $ ? S.isDefault : !1 });
    }
    function b(w) {
      const $ = l.value.find((S) => S.key === w);
      !$ || !d($) || (l.value = l.value.map((S) => ({
        ...S,
        isDefault: S.key === w
      })));
    }
    function C(w) {
      const $ = n.value;
      !$ || !l.value.find((h) => h.key === $)?.connected || u($, { mode: w });
    }
    return (w, $) => (t(), a(P, null, [
      o("div", A2, [
        D(Oe, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", P2, [
          (t(), a("svg", z2, [
            o("path", {
              d: x(de)("search")
            }, null, 8, O2)
          ])),
          D(xe, {
            modelValue: r.value,
            "onUpdate:modelValue": $[0] || ($[0] = (S) => r.value = S),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(_2, {
          key: 0,
          gateways: i.value,
          onConfigure: c,
          onToggle: g
        }, null, 8, ["gateways"])) : (t(), a("p", j2, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      D(Ht, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: $[8] || ($[8] = (S) => n.value = null)
      }, {
        footer: j(() => [
          D(re, {
            variant: "outline",
            size: "sm",
            onClick: $[6] || ($[6] = (S) => n.value = null)
          }, {
            default: j(() => [...$[21] || ($[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(re, {
            key: 0,
            size: "sm",
            onClick: $[7] || ($[7] = (S) => g(s.value.key))
          }, {
            default: j(() => [
              R(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : k("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), a("div", L2, [
            o("div", V2, [
              D(ye, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: j(() => [
                  R(f(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), T(ye, {
                key: 0,
                status: "offered"
              }, {
                default: j(() => [...$[9] || ($[9] = [
                  R(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(ye, {
                key: 1,
                status: "disabled"
              }, {
                default: j(() => [...$[10] || ($[10] = [
                  R(" Disabled ", -1)
                ])]),
                _: 1
              })) : k("", !0),
              s.value.isDefault ? (t(), T(ye, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...$[11] || ($[11] = [
                  R(" Default ", -1)
                ])]),
                _: 1
              })) : k("", !0),
              s.value.connected && s.value.mode ? (t(), T(ye, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  R(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : k("", !0)
            ]),
            o("p", T2, f(s.value.caption), 1),
            o("label", D2, [
              $[12] || ($[12] = R(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, F2)
            ]),
            $[20] || ($[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              R(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", E2, [
              $[16] || ($[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              $[17] || ($[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", I2, [
                D(re, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: $[1] || ($[1] = (S) => p(s.value.key, !0))
                }, {
                  default: j(() => [...$[13] || ($[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(re, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: $[2] || ($[2] = (S) => p(s.value.key, !1))
                }, {
                  default: j(() => [...$[14] || ($[14] = [
                    R(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(re, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: $[3] || ($[3] = (S) => b(s.value.key))
                }, {
                  default: j(() => [...$[15] || ($[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : k("", !0),
            s.value.connected ? (t(), a("div", N2, [
              D(re, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: $[4] || ($[4] = (S) => C("test"))
              }, {
                default: j(() => [...$[18] || ($[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              D(re, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: $[5] || ($[5] = (S) => C("live"))
              }, {
                default: j(() => [...$[19] || ($[19] = [
                  R(" Live ", -1)
                ])]),
                _: 1
              }, 8, ["variant"])
            ])) : k("", !0)
          ])) : k("", !0)
        ]),
        _: 1
      }, 8, ["open", "title"])
    ], 64));
  }
});
function na(e) {
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
function I3(e) {
  const l = K(na(e));
  ge(() => {
    l.value = na(e);
  }), ce(
    l,
    (u) => {
      try {
        localStorage.setItem(e, JSON.stringify([...u]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function n(u) {
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
  return { hidden: l, toggle: n, hide: r, show: s, setHidden: i, reset: d };
}
function N3(e) {
  const { config: l, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = K(
    l.driver === "none" ? "off" : "connecting"
  ), c = K(/* @__PURE__ */ new Set());
  let g = /* @__PURE__ */ new Map(), p, b, C, w = (/* @__PURE__ */ new Date()).toISOString(), $ = null;
  function S(G, W) {
    g.set(G, { ...g.get(G) ?? {}, ...W }), !p && (p = setTimeout(() => {
      p = void 0, h();
    }, l.batchMs));
  }
  function h() {
    if (g.size === 0)
      return;
    const G = g;
    g = /* @__PURE__ */ new Map();
    const W = /* @__PURE__ */ new Set();
    for (const [ne, ae] of G) {
      const J = n.value.find((Z) => Z[r] === ne);
      if (!J) {
        d?.(ne, ae);
        continue;
      }
      Object.assign(J, ae), W.add(ne);
    }
    W.size !== 0 && (c.value = /* @__PURE__ */ new Set([...c.value, ...W]), setTimeout(() => {
      const ne = new Set(c.value);
      W.forEach((ae) => ne.delete(ae)), c.value = ne;
    }, 1500));
  }
  async function v() {
    if (!(!s || n.value.length === 0)) {
      C?.abort(), C = new AbortController();
      try {
        const G = n.value.map((ae) => ae[r]), { records: W, at: ne } = await s(G, w);
        w = ne, u.value = "live";
        for (const ae of W)
          S(ae[r], ae);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function m() {
    M(), u.value = "live", b = setInterval(v, l.intervalMs);
  }
  function M() {
    clearInterval(b), b = void 0, C?.abort();
  }
  function _() {
    return window.Echo ?? null;
  }
  function A() {
    const G = _();
    if (!G || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    $ = l.channel;
    const W = G.private(l.channel);
    for (const ne of l.events)
      W.listen(ne, (ae) => {
        ae?.[r] !== void 0 && S(ae[r], ae);
      });
    u.value = "live", G.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), G.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function N() {
    $ && (_()?.leave($), $ = null);
  }
  function E() {
    l.driver === "poll" && m(), l.driver === "broadcast" && A();
  }
  function te() {
    M(), N(), clearTimeout(p), p = void 0, g = /* @__PURE__ */ new Map();
  }
  function U() {
    l.pauseWhenHidden && (document.hidden ? (te(), u.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return ge(() => {
    l.driver !== "none" && (E(), l.pauseWhenHidden && document.addEventListener("visibilitychange", U));
  }), be(() => {
    document.removeEventListener("visibilitychange", U), te();
  }), { status: u, recentlyChanged: c, applyPatch: S, flush: h, pollOnce: v };
}
const R2 = /^[a-z0-9-]+$/, U2 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function R3(e) {
  Ia(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !R2.test(n) || typeof r != "string" || !U2.test(r) || (l[`--${n}`] = r);
    fu(l);
  });
}
const H2 = { class: "flex items-center gap-0.5" }, K2 = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", H2, [
      String(e.value) === "mono" ? (t(), a(P, { key: 0 }, [
        n[0] || (n[0] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        n[1] || (n[1] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        n[2] || (n[2] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), a(P, { key: 1 }, [
        n[3] || (n[3] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        n[4] || (n[4] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        n[5] || (n[5] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), q2 = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), T(Ma, {
      code: "AB-1234",
      style: le(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), G2 = { class: "flex flex-col gap-2" }, W2 = { class: "bg-card rounded-lg border p-4" }, Z2 = { class: "text-muted-foreground truncate text-xs" }, J2 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, Y2 = /* @__PURE__ */ O({
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
    }, r = y(() => ({ ...n, ...l.field.limits ?? {} })), s = y(
      () => String(l.values[l.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = y(
      () => String(l.values[l.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = y(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = y(() => {
      const $ = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return $ === "" ? d.value : `${d.value} › ${$.split("/").join(" › ")}`;
    });
    function c($, S) {
      return $.length <= S ? $ : `${$.slice(0, S - 1).trimEnd()}…`;
    }
    const g = y(() => c(s.value, r.value.titleMax)), p = y(() => c(i.value, r.value.descriptionMax));
    function b($, S, h) {
      return $ === 0 ? { tone: "text-muted-foreground", note: "empty" } : $ > h ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : $ < S ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = y(
      () => b(s.value.length, r.value.titleMin, r.value.titleMax)
    ), w = y(
      () => b(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return ($, S) => (t(), a("div", G2, [
      o("div", W2, [
        o("p", Z2, f(u.value), 1),
        o("p", {
          class: z(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", g.value === "" ? "text-muted-foreground italic" : ""])
        }, f(g.value || "Untitled page"), 3),
        o("p", {
          class: z(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", J2, [
        o("span", {
          class: z(C.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(C.value.note), 3),
        o("span", {
          class: z(w.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(w.value.note), 3)
      ]),
      S[0] || (S[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function Q2() {
  ke("radio", Kf), ke("checkboxlist", Wf), ke("tags", tm), ke("colour", mm), ke("slider", qm), ke("visual-select", op), ke("markdown", Cf), ke("code", zf), ke("map", bm), ke("qrcode", wm), ke("barcode", Pm), ke("diff", jm), ke("seo-preview", Y2), bt("swatch", rp), bt("voucher-code-box", q2), bt("document-colour-mode", K2);
}
function Aa() {
  const e = K(null), l = K(!1);
  let n = null;
  return ge(() => {
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
  }), be(() => n?.disconnect()), { el: e, shown: l };
}
const X2 = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: n } = Aa();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: z(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: le({ transitionDelay: `${e.delay}ms` })
    }, [
      H(r.$slots, "default")
    ], 6));
  }
}), e$ = ["id"], _e = /* @__PURE__ */ O({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, n) => (t(), a("section", {
      id: e.id,
      class: z(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: z(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        D(X2, null, {
          default: j(() => [
            H(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, e$));
  }
}), t$ = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, a$ = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, n$ = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Ne = /* @__PURE__ */ O({
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
      class: z(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", t$, f(e.eyebrow), 1)) : k("", !0),
      e.title ? (t(), a("h2", a$, f(e.title), 1)) : k("", !0),
      e.body ? (t(), a("p", n$, f(e.body), 1)) : k("", !0)
    ], 2)) : k("", !0);
  }
});
function l$() {
  const e = K(null);
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
  return ge(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", n, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), be(() => {
    l?.removeEventListener("pointermove", n), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const o$ = { class: "pk-tilt-inner relative h-full" }, s$ = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = l$();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", o$, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        H(n.$slots, "default")
      ])
    ], 512));
  }
}), r$ = { class: "flex flex-col gap-10" }, i$ = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, d$ = { class: "text-base font-semibold" }, u$ = { class: "text-sm text-pretty text-muted-foreground" }, c$ = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(_e, null, {
      default: j(() => [
        o("div", r$, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", i$, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), T(s$, {
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
                  o("h3", d$, f(s.title), 1),
                  o("p", u$, f(s.body), 1)
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
}), f$ = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, m$ = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, p$ = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, v$ = ["href"], g$ = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, n) => (t(), T(_e, null, {
      default: j(() => [
        o("div", f$, [
          o("h2", m$, f(e.title), 1),
          e.body ? (t(), a("p", p$, f(e.body), 1)) : k("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, v$)) : k("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), h$ = { class: "flex flex-col gap-8" }, b$ = { class: "divide-y rounded-lg border" }, x$ = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, y$ = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, k$ = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), T(_e, { narrow: "" }, {
      default: j(() => [
        o("div", h$, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", b$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              o("summary", x$, [
                R(f(r.question) + " ", 1),
                n[0] || (n[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", y$, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), $$ = { class: "flex flex-col gap-10" }, w$ = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, C$ = { class: "text-sm font-semibold" }, S$ = { class: "text-sm text-pretty text-muted-foreground" }, M$ = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), T(_e, null, {
      default: j(() => [
        o("div", $$, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", w$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", C$, f(r.title), 1),
              o("p", S$, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), B$ = { class: "flex flex-col items-center gap-6 text-center" }, _$ = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, A$ = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, P$ = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, z$ = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, O$ = ["href"], j$ = ["href"], L$ = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, V$ = /* @__PURE__ */ O({
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
    return (l, n) => (t(), T(_e, null, {
      default: j(() => [
        o("div", B$, [
          e.eyebrow ? (t(), a("p", _$, f(e.eyebrow), 1)) : k("", !0),
          o("h1", A$, f(e.title), 1),
          e.body ? (t(), a("p", P$, f(e.body), 1)) : k("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", z$, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, O$)) : k("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, j$)) : k("", !0)
          ])) : k("", !0),
          e.note ? (t(), a("p", L$, f(e.note), 1)) : k("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), T$ = { class: "flex flex-col items-center gap-6" }, D$ = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, F$ = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, E$ = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), T(_e, { muted: "" }, {
      default: j(() => [
        o("div", T$, [
          e.title ? (t(), a("p", D$, f(e.title), 1)) : k("", !0),
          o("ul", F$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), I$ = { class: "flex flex-col gap-10" }, N$ = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, R$ = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, U$ = ["aria-pressed"], H$ = ["aria-pressed"], K$ = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, q$ = { class: "grid gap-4 md:grid-cols-3" }, G$ = { class: "flex flex-col gap-1" }, W$ = { class: "text-sm font-semibold" }, Z$ = { class: "flex items-baseline gap-1" }, J$ = { class: "text-3xl font-semibold tracking-tight" }, Y$ = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, Q$ = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, X$ = { class: "flex flex-col gap-2 text-sm" }, ew = { class: "text-muted-foreground" }, tw = ["href"], aw = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, n = K(!1), r = y(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return n.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), T(_e, { muted: "" }, {
      default: j(() => [
        o("div", I$, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", N$, [
            o("div", R$, [
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: d[0] || (d[0] = (u) => n.value = !1)
              }, " Monthly ", 10, U$),
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: d[1] || (d[1] = (u) => n.value = !0)
              }, " Annual ", 10, H$)
            ]),
            e.annualNote ? (t(), a("p", K$, f(e.annualNote), 1)) : k("", !0)
          ])) : k("", !0),
          o("ul", q$, [
            (t(!0), a(P, null, V(e.items ?? [], (u, c) => (t(), a("li", {
              key: c,
              class: z(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", G$, [
                o("h3", W$, f(u.name), 1),
                o("p", Z$, [
                  o("span", J$, f(s(u)), 1),
                  u.period ? (t(), a("span", Y$, f(u.period), 1)) : k("", !0)
                ]),
                u.body ? (t(), a("p", Q$, f(u.body), 1)) : k("", !0)
              ]),
              o("ul", X$, [
                (t(!0), a(P, null, V(u.features ?? [], (g, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", ew, f(g.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), a("a", {
                key: 0,
                href: u.href ?? "#",
                class: z([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, tw)) : k("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function nw() {
  const e = K(null);
  let l = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const u = l.getBoundingClientRect(), c = u.height + window.innerHeight, g = c <= 0 ? 0 : (window.innerHeight - u.top) / c;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(g, 0), 1)));
  }
  function d() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return ge(() => {
    const u = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, u || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((c) => {
        s = c.some((g) => g.isIntersecting), s && d();
      }), n.observe(l), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), be(() => {
    n?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const lw = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, ow = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, sw = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, rw = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, iw = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, dw = { class: "pk-showcase-stage w-full [perspective:1400px]" }, uw = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, cw = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, fw = { class: "ml-3 truncate text-xs text-muted-foreground" }, mw = { class: "flex" }, pw = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, vw = { class: "min-w-0 flex-1 p-4" }, gw = { class: "flex flex-col divide-y rounded-md border" }, hw = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = nw();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", lw, [
        o("div", ow, [
          o("div", sw, [
            o("h2", rw, f(e.title), 1),
            e.body ? (t(), a("p", iw, f(e.body), 1)) : k("", !0)
          ]),
          o("div", dw, [
            o("div", uw, [
              o("div", cw, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", fw, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", mw, [
                o("div", pw, [
                  (t(), a(P, null, V(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: le({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", vw, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", gw, [
                    (t(!0), a(P, null, V(e.rows, (s) => (t(), a("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: le({ "--pk-row": String(s) })
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
}), bw = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: n, shown: r } = Aa(), s = K(0);
    return ce(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const u = performance.now(), c = (g) => {
        const p = Math.min((g - u) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(c) : s.value = l.to;
      };
      requestAnimationFrame(c);
    }), (i, d) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), xw = { class: "flex flex-col gap-10" }, yw = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, kw = { class: "order-2 text-sm text-muted-foreground" }, $w = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, ww = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(_e, { muted: "" }, {
      default: j(() => [
        o("div", xw, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", yw, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", kw, f(s.label), 1),
              o("dd", $w, [
                l(s.value) ? (t(), T(bw, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), a(P, { key: 1 }, [
                  R(f(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Cw = { class: "flex flex-col gap-10" }, Sw = { class: "grid gap-6 md:grid-cols-3" }, Mw = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, Bw = { class: "text-sm font-semibold" }, _w = { class: "text-sm text-pretty text-muted-foreground" }, Aw = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), T(_e, null, {
      default: j(() => [
        o("div", Cw, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", Sw, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", Mw, f(s + 1), 1),
              o("h3", Bw, f(r.title), 1),
              o("p", _w, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Pw = { class: "flex flex-col gap-10" }, zw = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, Ow = { class: "text-pretty text-sm leading-relaxed" }, jw = { class: "mt-auto flex items-center gap-3" }, Lw = ["src"], Vw = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, Tw = { class: "min-w-0" }, Dw = { class: "block truncate text-sm font-medium" }, Fw = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, Ew = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), T(_e, null, {
      default: j(() => [
        o("div", Pw, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", zw, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", Ow, " “" + f(r.quote) + "” ", 1),
              o("figcaption", jw, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, Lw)) : (t(), a("span", Vw, f((r.name ?? "?").slice(0, 1)), 1)),
                o("span", Tw, [
                  o("span", Dw, f(r.name), 1),
                  r.role ? (t(), a("span", Fw, f(r.role), 1)) : k("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), U3 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const n = e, r = {
      hero: V$,
      logos: E$,
      features: M$,
      bento: c$,
      showcase: hw,
      steps: Aw,
      stats: ww,
      testimonials: Ew,
      pricing: aw,
      faq: k$,
      cta: g$
    }, s = y(
      () => (n.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), a(P, null, V(s.value, (u) => (t(), T($e(u.component), oe({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), Iw = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, H3 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", Iw, [
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
      n[0] || (n[0] = o("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), Nw = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, K3 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", Nw, [...n[0] || (n[0] = [
      At('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), Rw = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, q3 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", Rw, [...n[0] || (n[0] = [
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
Q2();
const G3 = "0.0.1";
export {
  v3 as AdminDirectory,
  rc as Alert,
  ic as AlertDescription,
  dc as AlertTitle,
  e3 as AppPageFooter,
  h4 as AppearanceDrawer,
  g5 as Avatar,
  h5 as AvatarFallback,
  b5 as AvatarImage,
  It as BADGE_VARIANTS,
  m4 as BadgeResolver,
  i3 as BarChart,
  x5 as Breadcrumb,
  y5 as BreadcrumbEllipsis,
  k5 as BreadcrumbItem,
  $5 as BreadcrumbLink,
  w5 as BreadcrumbList,
  C5 as BreadcrumbPage,
  S5 as BreadcrumbSeparator,
  Qw as BulkActions,
  ka as CATALOGUE_CONTAINER,
  pc as CATALOGUE_GRID,
  C4 as CATALOGUE_GRID_TIGHT,
  vc as CATALOGUE_GRID_TILES,
  H5 as Card,
  K5 as CardAction,
  q5 as CardContent,
  G5 as CardDescription,
  W5 as CardFooter,
  Z5 as CardHeader,
  J5 as CardTitle,
  cy as CartPanel,
  C3 as CatalogBrowser,
  D1 as CatalogCard,
  _a as CatalogFilterSheet,
  Ut as CatalogGrid,
  $3 as CatalogInspect,
  e0 as CatalogItemDetail,
  w3 as CatalogItemView,
  S3 as CatalogRegister,
  k3 as CatalogTill,
  ih as ChartCard,
  nt as ChartTooltip,
  pr as Checkbox,
  r4 as CheckboxCell,
  i4 as CodeCell,
  Cd as ColourCell,
  m3 as ComboChart,
  mr as CreateOptionDialog,
  dr as CreateOptionError,
  B3 as DASHBOARD_HIDDEN_STORAGE_KEY,
  V0 as DASHBOARD_HIDE_KEY,
  _3 as DashboardShortcuts,
  jl as DataTable,
  j5 as Dialog,
  L5 as DialogClose,
  V5 as DialogContent,
  T5 as DialogDescription,
  D5 as DialogFooter,
  F5 as DialogHeader,
  Kc as DialogOverlay,
  E5 as DialogScrollContent,
  I5 as DialogTitle,
  N5 as DialogTrigger,
  v3 as DirectoryPage,
  a5 as DropdownMenu,
  n5 as DropdownMenuCheckboxItem,
  l5 as DropdownMenuContent,
  o5 as DropdownMenuGroup,
  s5 as DropdownMenuItem,
  r5 as DropdownMenuLabel,
  J3 as DropdownMenuPortal,
  i5 as DropdownMenuRadioGroup,
  d5 as DropdownMenuRadioItem,
  u5 as DropdownMenuSeparator,
  c5 as DropdownMenuShortcut,
  f5 as DropdownMenuSub,
  m5 as DropdownMenuSubContent,
  p5 as DropdownMenuSubTrigger,
  v5 as DropdownMenuTrigger,
  c4 as EditableCell,
  Ae as FOCUS_RING,
  Xw as FOCUS_RING_SOFT,
  Gt as FOCUS_RING_WITHIN,
  B4 as FORM_MEASURE,
  Ke as FormFieldControl,
  p3 as HeatmapChart,
  vt as ICON_PATHS,
  gd as IconCell,
  xd as ImageCell,
  F3 as InfoNode,
  hc as JPEG_IMAGE_ERROR,
  d4 as KeyValueCell,
  R5 as Label,
  Sv as LineChart,
  Kx as LineItems,
  dt as MiniStatCard,
  M5 as NavigationMenu,
  B5 as NavigationMenuContent,
  _5 as NavigationMenuIndicator,
  A5 as NavigationMenuItem,
  P5 as NavigationMenuLink,
  z5 as NavigationMenuList,
  O5 as NavigationMenuTrigger,
  Uc as NavigationMenuViewport,
  gc as OPAQUE_IMAGE_ERROR,
  Ie as PAGE_SHELL,
  S4 as PAGE_SHELL_COMPACT,
  M4 as PAGE_SHELL_STACK,
  E3 as PaymentGatewaySettings,
  _2 as PaymentGateways,
  d3 as PieChart,
  $4 as PkAlertError,
  H3 as PkAuroraBackdrop,
  Ee as PkBadge,
  Pm as PkBarcode,
  c$ as PkBento,
  b4 as PkBottomNav,
  Y5 as PkBoundary,
  n3 as PkBuilder,
  re as PkButton,
  l3 as PkCalendar,
  Q5 as PkCard,
  Wf as PkCheckboxList,
  Ma as PkCodeBox,
  zf as PkCodeInput,
  mm as PkColourPicker,
  q3 as PkConsoleBackdrop,
  bw as PkCountUp,
  g$ as PkCta,
  t3 as PkDeviceFrame,
  jm as PkDiff,
  Fp as PkDocument,
  He as PkDropdown,
  K3 as PkEditorialBackdrop,
  $t as PkEmptyState,
  k$ as PkFaq,
  M$ as PkFeatureGrid,
  Ce as PkFieldLabel,
  va as PkFileUpload,
  Oe as PkHeading,
  V$ as PkHero,
  Rr as PkKeyValue,
  U3 as PkLandingSections,
  E$ as PkLogoCloud,
  vm as PkMap,
  bm as PkMapField,
  Cf as PkMarkdownInput,
  Xe as PkModal,
  Dt as PkMultiSelect,
  y4 as PkOtpInput,
  k4 as PkPageHeader,
  L3 as PkPasskeyRegister,
  w4 as PkPasswordInput,
  aw as PkPricing,
  wm as PkQrCode,
  Lx as PkQtyStepper,
  To as PkQueryBuilder,
  Kf as PkRadioGroup,
  a3 as PkRepeater,
  X2 as PkReveal,
  Qr as PkRichEditor,
  _e as PkSection,
  Ne as PkSectionHeading,
  hw as PkShowcase,
  v0 as PkSignaturePad,
  Se as PkSkeleton,
  Ht as PkSlideover,
  qm as PkSlider,
  x4 as PkSpinner,
  ww as PkStats,
  ye as PkStatusBadge,
  rr as PkStepIndicator,
  Aw as PkSteps,
  rp as PkSwatchPreview,
  tm as PkTagsInput,
  Ew as PkTestimonials,
  xe as PkTextInput,
  s$ as PkTiltCard,
  op as PkVisualSelect,
  ub as PlanCard,
  y3 as PlanEditor,
  x3 as PlanGrid,
  f3 as PolarAreaChart,
  c3 as RadarChart,
  p4 as RecordActions,
  V3 as RecordForm,
  s4 as RelationCreateDialog,
  t4 as RelationPanel,
  p1 as STATUS_TONES,
  u3 as ScatterChart,
  ga as SchemaNode,
  h3 as SegmentedBar,
  z3 as SelectionBar,
  Fc as Separator,
  P3 as SetupChecklist,
  ya as ShadcnInput,
  Ft as Sheet,
  A4 as SheetClose,
  Et as SheetContent,
  wc as SheetDescription,
  P4 as SheetFooter,
  Cc as SheetHeader,
  Sc as SheetTitle,
  z4 as SheetTrigger,
  Bh as ShortcutsWidget,
  O4 as Sidebar,
  j4 as SidebarContent,
  L4 as SidebarFooter,
  V4 as SidebarGroup,
  T4 as SidebarGroupAction,
  D4 as SidebarGroupContent,
  F4 as SidebarGroupLabel,
  E4 as SidebarHeader,
  I4 as SidebarInput,
  N4 as SidebarInset,
  R4 as SidebarMenu,
  U4 as SidebarMenuAction,
  H4 as SidebarMenuBadge,
  q4 as SidebarMenuButton,
  G4 as SidebarMenuItem,
  W4 as SidebarMenuSkeleton,
  Z4 as SidebarMenuSub,
  J4 as SidebarMenuSubButton,
  Y4 as SidebarMenuSubItem,
  Q4 as SidebarProvider,
  X4 as SidebarRail,
  e5 as SidebarSeparator,
  t5 as SidebarTrigger,
  M3 as SignatureStudio,
  ft as Sparkline,
  U5 as Spinner,
  g3 as StatCard,
  b3 as StatListChart,
  A3 as StatStrip,
  Ue as Switch,
  $a as TRANSPARENT_IMAGE_HELP,
  O3 as TablePagination,
  fo as TableShell,
  j3 as TableTabs,
  Es as TableToolbar,
  u4 as TagsCell,
  r3 as ThemeToggle,
  Vc as Tooltip,
  Tc as TooltipContent,
  K4 as TooltipProvider,
  Dc as TooltipTrigger,
  Ba as TrendBadge,
  T3 as UnsavedBar,
  uc as alertVariants,
  cu as appearanceVars,
  Mt as applyAppearance,
  $c as assertTransparentImage,
  Je as buttonClasses,
  ut as catalogFiltersActive,
  X as cn,
  cr as createOptionActionLabel,
  ur as createOptionTitle,
  F1 as cycleLabel,
  je as emptyCatalogFilters,
  ir as fieldControl,
  o4 as fieldErrorsFromPayload,
  hx as findExactSku,
  E1 as formatPerkValue,
  Id as hasBadgeValue,
  a4 as hasFieldControl,
  o3 as hasOptionPreview,
  de as iconPath,
  yc as imageHasTransparency,
  v4 as initializeAppearance,
  St as isDark,
  Kt as matchCatalogItem,
  Hc as navigationMenuTriggerStyle,
  Gm as optionPreview,
  _4 as packWidgetColumns,
  I1 as perkGranted,
  Rt as readAppearance,
  Q2 as registerBuiltInFieldControls,
  ke as registerFieldControl,
  bt as registerOptionPreview,
  n4 as registeredFieldTypes,
  Wm as registeredOptionPreviews,
  l4 as resetFieldControls,
  s3 as resetOptionPreviews,
  g4 as setAppearancePersister,
  Ec as sidebarMenuButtonVariants,
  b1 as statusBadgeVariant,
  h1 as statusTone,
  e4 as toUrl,
  xa as useAppearance,
  I3 as useColumnVisibility,
  N3 as useLiveUpdates,
  l$ as usePointer,
  Aa as useReveal,
  f4 as useSchemaColumns,
  nw as useScrollProgress,
  X5 as useShellPageFooter,
  ct as useSidebar,
  R3 as useTenantTheme,
  D3 as useUnsavedChanges,
  G3 as version
};
//# sourceMappingURL=index.js.map
