import './ui.css';
import { defineComponent as O, useSlots as _t, openBlock as t, createElementBlock as a, normalizeClass as z, unref as x, renderSlot as H, createElementVNode as o, toDisplayString as f, createCommentVNode as w, computed as y, normalizeStyle as ne, Fragment as A, renderList as j, ref as K, watch as ce, useId as Va, withModifiers as ve, createTextVNode as R, createVNode as D, createStaticVNode as At, createBlock as T, createSlots as Ye, withCtx as V, nextTick as ze, onBeforeUnmount as xe, Teleport as qe, Transition as De, onMounted as ge, withDirectives as me, vModelText as we, resolveDynamicComponent as Ce, resolveComponent as Pt, vModelSelect as Re, vModelDynamic as ja, mergeProps as oe, normalizeProps as Be, guardReactiveProps as Le, defineAsyncComponent as qt, inject as st, vShow as Fe, isRef as La, useTemplateRef as Ta, onErrorCaptured as Da, provide as kt, markRaw as na, withKeys as Fa, reactive as Qe, useModel as et, mergeModels as je, shallowRef as Ea, watchEffect as Ia } from "vue";
import { useForwardPropsEmits as he, DialogRoot as oa, DialogOverlay as zt, DialogPortal as Ot, DialogContent as Vt, DialogClose as Ge, CheckboxRoot as Na, CheckboxIndicator as Ra, SwitchRoot as Ua, SwitchThumb as Ha, DialogDescription as sa, DialogTitle as ra, DialogTrigger as ia, createContext as Ka, Primitive as We, TooltipRoot as qa, TooltipPortal as Ga, TooltipContent as Wa, TooltipArrow as Za, TooltipProvider as da, TooltipTrigger as Ja, Separator as Ya, DropdownMenuRoot as Qa, DropdownMenuCheckboxItem as Xa, DropdownMenuItemIndicator as ua, DropdownMenuPortal as el, DropdownMenuContent as tl, DropdownMenuGroup as al, useForwardProps as _e, DropdownMenuItem as ll, DropdownMenuLabel as nl, DropdownMenuRadioGroup as ol, DropdownMenuRadioItem as sl, DropdownMenuSeparator as rl, DropdownMenuSub as il, DropdownMenuSubContent as dl, DropdownMenuSubTrigger as ul, DropdownMenuTrigger as cl, AvatarRoot as fl, AvatarFallback as ml, AvatarImage as pl, NavigationMenuViewport as vl, NavigationMenuRoot as gl, NavigationMenuContent as hl, NavigationMenuIndicator as bl, NavigationMenuItem as xl, NavigationMenuLink as yl, NavigationMenuList as kl, NavigationMenuTrigger as $l, Label as wl } from "reka-ui";
import { DropdownMenuPortal as bC } from "reka-ui";
import { X as jt, Check as ca, AlertCircle as Cl, EyeOff as Sl, Eye as Ml, PanelLeftOpen as Bl, PanelLeftClose as _l, Circle as Al, ChevronRight as fa, MoreHorizontal as Pl, ChevronDown as zl, Loader2Icon as Ol } from "@lucide/vue";
import { reactiveOmit as ue, useVModel as ma, useMediaQuery as Vl, useEventListener as jl, defaultDocument as Ll } from "@vueuse/core";
import { clsx as Tl } from "clsx";
import { twMerge as Dl } from "tailwind-merge";
import { cva as Lt } from "class-variance-authority";
import { usePage as pa, Link as Fl } from "@inertiajs/vue3";
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
const El = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, Il = ["d"], Nl = { class: "flex max-w-sm flex-col gap-1" }, Rl = {
  key: 0,
  class: "text-sm"
}, Ul = {
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
    const n = _t();
    return (l, r) => (t(), a("div", {
      "data-slot": "empty-state",
      class: z(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      x(n).illustration ? (t(), a("div", El, [
        H(l.$slots, "illustration")
      ])) : (t(), a("div", {
        key: 1,
        class: z(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        H(l.$slots, "icon", {}, () => [
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
            }, null, 8, Il)
          ], 2))
        ])
      ], 2)),
      o("div", Nl, [
        o("p", {
          class: z(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), a("p", Rl, f(e.description), 1)) : w("", !0)
      ]),
      l.$slots.actions ? (t(), a("div", Ul, [
        H(l.$slots, "actions")
      ])) : w("", !0)
    ], 2));
  }
}), Hl = ["aria-label"], Me = /* @__PURE__ */ O({
  __name: "PkSkeleton",
  props: {
    variant: { default: "text" },
    count: { default: 1 },
    height: {},
    label: { default: "Loading" }
  },
  setup(e) {
    const n = e, l = {
      text: "h-4 w-full",
      number: "h-6 w-24",
      badge: "h-4 w-7",
      block: "h-full w-full",
      row: "h-9 w-full",
      circle: "size-8 rounded-full"
    }, r = y(() => l[n.variant] ?? l.text), s = y(() => Math.max(1, Math.min(n.count, 50)));
    function i(d) {
      if (!(n.variant !== "text" || s.value === 1))
        return d === s.value - 1 ? "60%" : void 0;
    }
    return (d, u) => (t(), a("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: ne(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), a(A, null, j(s.value, (c) => (t(), a("span", {
        key: c,
        "aria-hidden": "true",
        class: z(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(c - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Hl));
  }
}), Kl = { class: "w-full border-collapse text-sm" }, ql = { class: "bg-background sticky top-0 z-10" }, Gl = {
  key: 0,
  class: "bg-muted/40"
}, Wl = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, Zl = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, Jl = ["colspan"], Yl = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Ql = { class: "bg-muted/50" }, Xl = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, en = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, tn = ["id", "checked", "indeterminate"], an = ["onClick"], ln = {
  key: 0,
  class: "text-xs"
}, nn = {
  key: 1,
  class: "text-xs opacity-40"
}, on = { key: 1 }, sn = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, rn = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, dn = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, un = {
  key: 1,
  class: "px-3 py-2.5"
}, cn = {
  key: 2,
  class: "px-2 py-2.5"
}, fn = {
  key: 0,
  class: "bg-muted/40"
}, mn = ["colspan"], pn = ["aria-expanded", "dusk", "onClick"], vn = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, gn = {
  key: 1,
  dusk: "group-header"
}, hn = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], bn = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, xn = {
  key: 1,
  class: "px-3 py-2"
}, yn = ["id", "value", "checked", "disabled", "aria-label", "onClick"], kn = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, $n = ["aria-label", "onClick"], wn = { class: "text-xs" }, Cn = {
  key: 1,
  class: "text-muted-foreground"
}, Sn = { key: 2 }, Mn = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Bn = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, _n = { key: 0 }, An = { class: "text-muted-foreground block text-[10px] font-medium" }, Pn = { class: "font-semibold tabular-nums" }, zn = { key: 1 }, On = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e;
    function r(F) {
      if (!F || !l.groupBy)
        return "";
      if (F.__group !== void 0 && F.__group !== null)
        return String(F.__group);
      const ee = F[l.groupBy.key];
      return ee == null || ee === "" ? "" : String(ee);
    }
    function s(F) {
      return l.groupBy ? F === 0 ? !0 : r(l.rows[F]) !== r(l.rows[F - 1]) : !1;
    }
    function i(F) {
      if (F.__groupTitle)
        return String(F.__groupTitle);
      const ee = l.groupBy ? F[l.groupBy.key] : null, Q = ee == null || ee === "" ? "None" : String(ee);
      return !l.groupBy || l.groupBy.titlePrefixed === !1 ? Q : `${l.groupBy.label}: ${Q}`;
    }
    const d = K(/* @__PURE__ */ new Set()), u = K(/* @__PURE__ */ new Set());
    function c(F) {
      return l.groupBy?.collapsible ? d.value.has(F) : !1;
    }
    function v(F) {
      if (!l.groupBy?.collapsible)
        return;
      const ee = new Set(u.value);
      ee.add(F), u.value = ee;
      const Q = new Set(d.value);
      Q.has(F) ? Q.delete(F) : Q.add(F), d.value = Q;
    }
    function p(F) {
      return l.groupBy?.collapsible ? !c(r(l.rows[F])) : !0;
    }
    ce(
      () => l.rows,
      (F) => {
        if (!l.groupBy?.collapsible || !l.collapsedGroupsByDefault)
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
    const h = K(null), C = K(null);
    function k(F, ee) {
      h.value = F, ee.dataTransfer?.setData("text/plain", String(F)), ee.dataTransfer && (ee.dataTransfer.effectAllowed = "move");
    }
    function $() {
      h.value = null, C.value = null;
    }
    function S(F) {
      return h.value === null || C.value !== F ? "" : h.value > F ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function b(F, ee) {
      h.value !== null && (ee.preventDefault(), C.value = F);
    }
    function g(F) {
      const ee = h.value;
      if (h.value = null, C.value = null, ee === null || ee === F)
        return;
      const Q = l.rows.map((ie) => ie[l.rowKey]), [fe] = Q.splice(ee, 1);
      Q.splice(F, 0, fe), m("reorder", Q);
    }
    const m = n;
    function M(F, ee) {
      !l.rowClickable || l.reordering || ee.button !== 0 || ee.metaKey || ee.ctrlKey || ee.shiftKey || ee.altKey || ee.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || m("row-click", F);
    }
    const _ = K(null), P = Va(), N = y(() => l.columns.filter((F) => !l.hidden?.has(F.key))), E = y(() => N.value.some((F) => !!F.group)), te = y(() => {
      const F = [];
      for (const ee of N.value) {
        const Q = ee.group ?? null, fe = F[F.length - 1];
        fe && fe.label === Q ? fe.span += 1 : F.push({ label: Q, span: 1, key: `${Q ?? "loose"}-${ee.key}` });
      }
      return F;
    });
    function U(F) {
      const ee = F[l.rowKey];
      return ee == null || ee === "" ? null : ee;
    }
    function G(F) {
      const ee = U(F);
      return ee !== null && !!l.selected?.has(ee);
    }
    const W = K(null);
    function le(F) {
      return l.rows.findIndex((ee) => {
        const Q = U(ee);
        return Q !== null && Q === F;
      });
    }
    function ae(F, ee) {
      const Q = U(F);
      if (Q === null)
        return;
      const fe = ee.shiftKey, ie = !!l.selected?.has(Q);
      if (fe && W.value !== null && W.value !== Q) {
        const nt = le(W.value), mt = le(Q);
        if (nt !== -1 && mt !== -1) {
          const Pa = Math.min(nt, mt), za = Math.max(nt, mt), Oa = !ie;
          for (let ot = Pa; ot <= za; ot++) {
            if (!p(ot))
              continue;
            const pt = U(l.rows[ot]);
            if (pt === null)
              continue;
            !!l.selected?.has(pt) !== Oa && m("toggle-row", pt);
          }
          W.value = Q;
          return;
        }
      }
      m("toggle-row", Q), W.value = Q;
    }
    const J = y(
      () => l.rows.map((F) => U(F)).filter((F) => F !== null)
    ), Z = y(
      () => J.value.length > 0 && J.value.every((F) => l.selected?.has(F))
    ), B = y(
      () => !Z.value && J.value.some((F) => l.selected?.has(F))
    );
    function I(F) {
      return F.sortKey ?? F.key;
    }
    function L(F) {
      return l.sort === I(F);
    }
    async function Y(F, ee, Q) {
      try {
        await navigator.clipboard.writeText(String(Q)), _.value = `${F}-${ee.key}`, setTimeout(() => _.value = null, 1200);
      } catch {
      }
    }
    const pe = y(
      () => !!l.summaries && !!l.summaryValues && Object.keys(l.summaries).length > 0
    );
    function se(F) {
      return l.summaries?.[F] ?? null;
    }
    function q(F) {
      const ee = l.summaries?.[F], Q = l.summaryValues?.[F];
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
      o("table", Kl, [
        o("thead", ql, [
          E.value ? (t(), a("tr", Gl, [
            e.reordering ? (t(), a("th", Wl)) : w("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Zl)) : w("", !0),
            (t(!0), a(A, null, j(te.value, (Q) => (t(), a("th", {
              key: Q.key,
              colspan: Q.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, f(Q.label ?? ""), 9, Jl))), 128)),
            F.$slots.actions ? (t(), a("th", Yl)) : w("", !0)
          ])) : w("", !0),
          o("tr", Ql, [
            e.reordering ? (t(), a("th", Xl)) : w("", !0),
            e.selectable && !e.reordering ? (t(), a("th", en, [
              o("input", {
                id: `${x(P)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: Z.value,
                indeterminate: B.value,
                "aria-label": "Select all rows on this page",
                onClick: ee[0] || (ee[0] = ve(() => {
                }, ["stop"])),
                onChange: ee[1] || (ee[1] = ve((Q) => m("toggle-page", !Z.value), ["stop"]))
              }, null, 40, tn)
            ])) : w("", !0),
            (t(!0), a(A, null, j(N.value, (Q) => (t(), a("th", {
              key: Q.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              Q.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (fe) => m("sort", I(Q))
              }, [
                R(f(Q.label) + " ", 1),
                L(Q) ? (t(), a("span", ln, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", nn, "↕"))
              ], 8, an)) : (t(), a("span", on, f(Q.label), 1))
            ]))), 128)),
            F.$slots.actions ? (t(), a("th", sn, [...ee[2] || (ee[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : w("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", rn, [
          (t(), a(A, null, j(6, (Q) => o("tr", {
            key: `skel-${Q}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), a("td", dn, [
              D(Me, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
            e.selectable && !e.reordering ? (t(), a("td", un, [
              D(Me, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
            (t(!0), a(A, null, j(N.value, (fe) => (t(), a("td", {
              key: fe.key,
              class: "px-3 py-2.5"
            }, [
              D(Me, { variant: "text" })
            ]))), 128)),
            F.$slots.actions ? (t(), a("td", cn, [
              D(Me, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : w("", !0)
          ])), 64))
        ])) : (t(), a("tbody", {
          key: 1,
          class: z(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(A, null, j(e.rows, (Q, fe) => (t(), a(A, {
            key: U(Q) ?? `row-${fe}`
          }, [
            e.groupBy && s(fe) ? (t(), a("tr", fn, [
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
                  onClick: (ie) => v(r(Q))
                }, [
                  o("span", vn, f(c(r(Q)) ? "▸" : "▾"), 1),
                  R(" " + f(i(Q)), 1)
                ], 8, pn)) : (t(), a("span", gn, f(i(Q)), 1))
              ], 8, mn)
            ])) : w("", !0),
            p(fe) ? (t(), a("tr", {
              key: 1,
              class: z(["group pk-row border-b transition-colors hover:bg-muted/50", [
                G(Q) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && fe % 2 === 1 ? "bg-muted/20" : "",
                h.value === fe ? "opacity-40" : "",
                S(fe),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => k(fe, ie),
              onDragover: (ie) => b(fe, ie),
              onDrop: ve((ie) => g(fe), ["prevent"]),
              onDragend: $,
              onContextmenu: (ie) => m("row-contextmenu", Q, ie),
              onClick: (ie) => M(Q, ie)
            }, [
              e.reordering ? (t(), a("td", bn, [...ee[3] || (ee[3] = [
                At('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-64f5e507><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-64f5e507><circle cx="9" cy="6" r="1.5" data-v-64f5e507></circle><circle cx="15" cy="6" r="1.5" data-v-64f5e507></circle><circle cx="9" cy="12" r="1.5" data-v-64f5e507></circle><circle cx="15" cy="12" r="1.5" data-v-64f5e507></circle><circle cx="9" cy="18" r="1.5" data-v-64f5e507></circle><circle cx="15" cy="18" r="1.5" data-v-64f5e507></circle></svg></span>', 1)
              ])])) : w("", !0),
              e.selectable && !e.reordering ? (t(), a("td", xn, [
                o("input", {
                  id: `${x(P)}-row-${U(Q) ?? fe}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: U(Q) ?? void 0,
                  checked: G(Q),
                  disabled: U(Q) === null,
                  "aria-label": U(Q) === null ? "This row has no id and cannot be selected" : `Select row ${U(Q)}`,
                  onClick: ve((ie) => ae(Q, ie), ["stop"])
                }, null, 8, yn)
              ])) : w("", !0),
              (t(!0), a(A, null, j(N.value, (ie) => (t(), a("td", {
                key: ie.key,
                class: z(["px-3 py-2 whitespace-nowrap", ie.cellClass])
              }, [
                H(F.$slots, `cell:${ie.key}`, {
                  row: Q,
                  value: Q[ie.key],
                  column: ie
                }, () => [
                  ie.copyable ? (t(), a("span", kn, [
                    R(f(Q[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (nt) => Y(String(Q[e.rowKey]), ie, Q[ie.key])
                    }, [
                      o("span", wn, f(_.value === `${Q[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, $n)
                  ])) : Q[ie.key] == null || Q[ie.key] === "" ? (t(), a("span", Cn, "None")) : (t(), a("span", Sn, f(Q[ie.key]), 1))
                ], !0)
              ], 2))), 128)),
              F.$slots.actions ? (t(), a("td", Mn, [
                H(F.$slots, "actions", { row: Q }, void 0, !0)
              ])) : w("", !0)
            ], 42, hn)) : w("", !0)
          ], 64))), 128))
        ], 2)),
        pe.value ? (t(), a("tfoot", Bn, [
          o("tr", null, [
            e.selectable ? (t(), a("td", _n)) : w("", !0),
            (t(!0), a(A, null, j(e.columns, (Q) => (t(), a(A, {
              key: `s-${Q.key}`
            }, [
              e.hidden?.has(Q.key) ? w("", !0) : (t(), a("td", {
                key: 0,
                class: z(["px-3 py-2 align-top text-sm whitespace-nowrap", Q.cellClass])
              }, [
                se(Q.key) ? (t(), a(A, { key: 0 }, [
                  o("span", An, f(se(Q.key).label), 1),
                  o("span", Pn, f(q(Q.key)), 1)
                ], 64)) : w("", !0)
              ], 2))
            ], 64))), 128)),
            F.$slots.actions ? (t(), a("td", zn)) : w("", !0)
          ])
        ])) : w("", !0)
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
          fn: V(() => [
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
          fn: V(() => [
            H(F.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : w("", !0)
    ], 2));
  }
}), Tt = (e, n) => {
  const l = e.__vccOpts || e;
  for (const [r, s] of n)
    l[r] = s;
  return l;
}, Vn = /* @__PURE__ */ Tt(On, [["__scopeId", "data-v-64f5e507"]]), jn = ["aria-label"], Ln = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, Tn = { class: "text-base font-semibold" }, Dn = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Fn = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, En = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, Xe = /* @__PURE__ */ O({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null);
    let i = null;
    const d = K(!1);
    function u(p) {
      d.value = p.target === p.currentTarget;
    }
    function c(p) {
      d.value && p.target === p.currentTarget && !l.busy && r("close"), d.value = !1;
    }
    function v(p) {
      if (!l.open)
        return;
      if (p.key === "Escape" && !l.busy) {
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
    return ce(
      () => l.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", v), ze(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", v), i?.focus(), i = null);
      }
    ), xe(() => document.removeEventListener("keydown", v)), (p, h) => (t(), T(qe, { to: "body" }, [
      D(De, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: V(() => [
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
              o("div", Ln, [
                o("h2", Tn, f(e.title), 1),
                e.description ? (t(), a("p", Dn, f(e.description), 1)) : w("", !0)
              ]),
              o("div", Fn, [
                H(p.$slots, "default")
              ]),
              o("div", En, [
                H(p.$slots, "footer")
              ])
            ], 8, jn)
          ], 32)) : w("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), In = 160, He = /* @__PURE__ */ O({
  __name: "PkDropdown",
  props: {
    align: { default: "end" },
    width: { default: "max-w-sm" },
    offset: { default: 4 },
    placement: { default: "bottom" },
    hoverable: { type: Boolean, default: !1 },
    dismissOnPanelClick: { type: Boolean, default: !0 }
  },
  setup(e, { expose: n }) {
    const l = e, r = K(!1), s = K(null), i = K(null), d = K({ top: 0, left: 0, minWidth: 0 }), u = K(null);
    let c = null;
    function v(M) {
      !l.dismissOnPanelClick || M.target?.closest("input, select, textarea, label, [data-keep-open]") || $();
    }
    async function p() {
      c && (clearTimeout(c), c = null), !r.value && (r.value = !0, await ze(), S());
    }
    function h() {
      c = setTimeout($, 180);
    }
    async function C() {
      u.value = null, r.value = !r.value, r.value && (await ze(), S());
    }
    async function k(M, _) {
      u.value = { x: M, y: _ }, r.value = !0, await ze(), S();
    }
    function $() {
      r.value = !1, u.value = null;
    }
    function S() {
      const M = s.value, _ = i.value;
      if (!M || !_)
        return;
      const P = _.getBoundingClientRect(), N = 8, E = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : M.getBoundingClientRect();
      let te, U;
      if (l.placement === "bottom")
        te = E.bottom + l.offset, te + P.height > window.innerHeight - N && E.top - P.height - l.offset > N && (te = E.top - P.height - l.offset), U = l.align === "end" && !u.value ? E.right - P.width : E.left;
      else {
        te = E.top;
        const G = l.placement === "right", W = E.right + l.offset + P.width < window.innerWidth - N, le = E.left - l.offset - P.width > N;
        U = (G ? W || !le : !le && W) ? E.right + l.offset : E.left - l.offset - P.width;
      }
      U = Math.min(Math.max(N, U), window.innerWidth - P.width - N), te = Math.min(Math.max(N, te), window.innerHeight - P.height - N), d.value = { top: te, left: U, minWidth: Math.max(E.width, In) };
    }
    function b(M) {
      if (!r.value)
        return;
      const _ = M.target;
      s.value?.contains(_) || i.value?.contains(_) || (_ instanceof Element ? _ : _.parentElement)?.closest("[data-pk-overlay]") || $();
    }
    function g(M) {
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
      document.addEventListener("pointerdown", b), document.addEventListener("keydown", g), window.addEventListener("scroll", m, !0), window.addEventListener("resize", m);
    }), xe(() => {
      c && clearTimeout(c), document.removeEventListener("pointerdown", b), document.removeEventListener("keydown", g), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
    }), n({ close: $, openAt: k }), (M, _) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: _[2] || (_[2] = (P) => e.hoverable && p()),
      onPointerleave: _[3] || (_[3] = (P) => e.hoverable && h())
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
          default: V(() => [
            r.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: z([
                "bg-popover text-popover-foreground fixed z-[100] w-max overflow-hidden rounded-md border p-1.5 shadow-lg",
                e.width
              ]),
              style: ne({
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
              onPointerenter: _[0] || (_[0] = (P) => e.hoverable && p()),
              onPointerleave: _[1] || (_[1] = (P) => e.hoverable && h()),
              onClick: v
            }, [
              H(M.$slots, "panel", { close: $ })
            ], 38)) : w("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), Nn = ["disabled"], Rn = { class: "py-0.5" }, Un = ["disabled", "onClick"], Hn = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Kn = ["d"], qn = ["disabled"], Gn = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wn = ["d"], Zn = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, Jn = ["disabled", "onClick"], Yn = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qn = ["d"], Xn = { class: "text-muted-foreground text-sm" }, eo = { class: "text-foreground font-medium tabular-nums" }, to = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, ao = ["disabled"], lo = { class: "text-muted-foreground text-sm" }, no = { class: "text-foreground font-medium tabular-nums" }, oo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, so = ["disabled"], x4 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(!1), d = y(() => l.allMatching ? l.total : l.count), u = y(() => d.value !== void 0), c = y(() => u.value && d.value === 0), v = y(() => l.actions.filter((g) => !g.destructive)), p = y(() => l.actions.filter((g) => g.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function C(g) {
      return h[g.color ?? "gray"] ?? h.gray;
    }
    function k(g) {
      if (g.confirmation) {
        s.value = g;
        return;
      }
      r("run", g.key);
    }
    function $() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function S() {
      i.value = !1, r("export");
    }
    const b = (g) => new Intl.NumberFormat().format(g);
    return (g, m) => (t(), a(A, null, [
      D(He, null, {
        trigger: V(() => [
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
          ])], 8, Nn)
        ]),
        panel: V(() => [
          o("div", Rn, [
            (t(!0), a(A, null, j(v.value, (M) => (t(), a("button", {
              key: M.key,
              type: "button",
              role: "menuitem",
              class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(M)]),
              disabled: e.busy,
              onClick: (_) => k(M)
            }, [
              (t(), a("svg", Hn, [
                o("path", {
                  d: x(de)(M.icon)
                }, null, 8, Kn)
              ])),
              R(" " + f(M.label), 1)
            ], 10, Un))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: m[0] || (m[0] = (M) => i.value = !0)
            }, [
              (t(), a("svg", Gn, [
                o("path", {
                  d: x(de)("download")
                }, null, 8, Wn)
              ])),
              m[6] || (m[6] = R(" Export CSV ", -1))
            ], 8, qn)) : w("", !0),
            p.value.length ? (t(), a("div", Zn, [
              (t(!0), a(A, null, j(p.value, (M) => (t(), a("button", {
                key: M.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (_) => k(M)
              }, [
                (t(), a("svg", Yn, [
                  o("path", {
                    d: x(de)(M.icon ?? "trash")
                  }, null, 8, Qn)
                ])),
                R(" " + f(M.label), 1)
              ], 8, Jn))), 128))
            ])) : w("", !0)
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
        footer: V(() => [
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
        default: V(() => [
          o("p", Xn, [
            m[7] || (m[7] = R(" This will affect ", -1)),
            o("span", eo, [
              u.value ? (t(), a(A, { key: 1 }, [
                R(f(b(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(A, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            m[8] || (m[8] = R(" . ", -1))
          ]),
          c.value ? (t(), a("p", to, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : w("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(Xe, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: m[4] || (m[4] = (M) => i.value = !1)
      }, {
        footer: V(() => [
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
        default: V(() => [
          o("p", lo, [
            m[9] || (m[9] = R(" This will export ", -1)),
            o("span", no, [
              u.value ? (t(), a(A, { key: 1 }, [
                R(f(b(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(A, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            m[10] || (m[10] = R(" . ", -1))
          ]),
          c.value ? (t(), a("p", oo, " Nothing matches the current filters - there is nothing to export. ")) : w("", !0)
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
    return (n, l) => (t(), a("div", ro, [
      n.$slots.tabs ? (t(), a("div", io, [
        H(n.$slots, "tabs")
      ])) : w("", !0),
      n.$slots.title ? (t(), a("div", uo, [
        H(n.$slots, "title")
      ])) : w("", !0),
      n.$slots.toolbar ? (t(), a("div", {
        key: 2,
        class: z(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        H(n.$slots, "toolbar")
      ], 2)) : w("", !0),
      H(n.$slots, "default"),
      n.$slots.pagination ? (t(), a("div", co, [
        H(n.$slots, "pagination")
      ])) : w("", !0)
    ]));
  }
}), $e = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Gt = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", y4 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", mo = ["aria-expanded"], po = ["aria-label", "onClick"], vo = {
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(null), d = K(null), u = K(!1), c = K(""), v = K(0), p = K({ top: 0, left: 0, width: 0 }), h = y(
      () => l.modelValue.map(
        (U) => l.options.find((G) => G.value === U) ?? {
          value: U,
          label: String(U)
        }
      ).filter(Boolean)
    ), C = y(() => l.searchable ?? l.options.length > 6), k = y(() => {
      const U = new Set(l.modelValue), G = c.value.trim().toLowerCase();
      return l.options.filter((W) => !U.has(W.value)).filter((W) => G ? W.label.toLowerCase().includes(G) : !0);
    }), $ = y(() => l.max !== null && l.modelValue.length >= l.max);
    function S() {
      const U = s.value, G = i.value;
      if (!U || !G)
        return;
      const W = U.getBoundingClientRect(), le = G.getBoundingClientRect(), ae = 8;
      let J = W.bottom + 4;
      J + le.height > window.innerHeight - ae && W.top - le.height - 4 > ae && (J = W.top - le.height - 4), p.value = {
        top: J,
        left: Math.min(Math.max(ae, W.left), window.innerWidth - W.width - ae),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: W.width
      };
    }
    async function b() {
      l.disabled || u.value || (u.value = !0, c.value = "", v.value = 0, await ze(), S(), d.value?.focus());
    }
    function g() {
      u.value = !1, c.value = "";
    }
    function m() {
      u.value ? g() : b();
    }
    function M(U) {
      $.value || (r("update:modelValue", [...l.modelValue, U.value]), c.value = "", v.value = 0, ze(() => {
        S(), d.value?.focus();
      }));
    }
    function _(U) {
      r(
        "update:modelValue",
        l.modelValue.filter((G) => G !== U)
      ), ze(S);
    }
    function P() {
      r("update:modelValue", []), ze(S);
    }
    function N(U) {
      if (!l.disabled) {
        if (U.key === "Escape" && u.value) {
          U.stopPropagation(), g();
          return;
        }
        if (U.key === "Backspace" && c.value === "" && l.modelValue.length > 0) {
          _(l.modelValue[l.modelValue.length - 1]);
          return;
        }
        if (!u.value && (U.key === "ArrowDown" || U.key === "Enter")) {
          U.preventDefault(), b();
          return;
        }
        if (u.value) {
          if (U.key === "ArrowDown")
            U.preventDefault(), v.value = Math.min(v.value + 1, k.value.length - 1);
          else if (U.key === "ArrowUp")
            U.preventDefault(), v.value = Math.max(v.value - 1, 0);
          else if (U.key === "Enter") {
            U.preventDefault();
            const G = k.value[v.value];
            G && M(G);
          }
        }
      }
    }
    function E(U) {
      if (!u.value)
        return;
      const G = U.target;
      s.value?.contains(G) || i.value?.contains(G) || g();
    }
    function te() {
      u.value && S();
    }
    return ce(k, (U) => {
      v.value > U.length - 1 && (v.value = Math.max(0, U.length - 1));
    }), ge(() => {
      document.addEventListener("pointerdown", E), window.addEventListener("scroll", te, !0), window.addEventListener("resize", te);
    }), xe(() => {
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
        (t(!0), a(A, null, j(h.value, (W) => (t(), a("span", {
          key: W.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          R(f(W.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${W.label}`,
            onClick: ve((le) => _(W.value), ["stop"])
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
        h.value.length === 0 ? (t(), a("span", vo, f(e.placeholder), 1)) : w("", !0),
        o("span", go, [
          h.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ve(P, ["stop"])
          }, " Clear ")) : w("", !0),
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
          default: V(() => [
            u.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: ne({
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
              ])) : w("", !0),
              o("div", xo, [
                (t(!0), a(A, null, j(k.value, (W, le) => (t(), a("button", {
                  key: W.value,
                  type: "button",
                  class: z(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", le === v.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": le === v.value,
                  onMouseenter: (ae) => v.value = le,
                  onClick: (ae) => M(W)
                }, f(W.label), 43, yo))), 128)),
                k.value.length === 0 ? (t(), a("p", ko, [
                  $.value ? (t(), a(A, { key: 0 }, [
                    R("You have selected the maximum.")
                  ], 64)) : c.value ? (t(), a(A, { key: 1 }, [
                    R("Nothing matches “" + f(c.value) + "”.", 1)
                  ], 64)) : (t(), a(A, { key: 2 }, [
                    R("Everything is selected.")
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
  const n = e.variant ?? "default", l = e.size ?? "default";
  return [$o, wo[n], Co[l], e.class].filter(Boolean).join(" ");
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
    const n = e, l = y(
      () => Je({ variant: n.variant, size: n.size, class: n.class })
    ), r = y(() => n.as === "button" ? n.type : void 0);
    return (s, i) => (t(), T(Ce(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: z(l.value)
    }, {
      default: V(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), So = { class: "flex items-center gap-2" }, Mo = ["onUpdate:modelValue", "onChange"], Bo = ["value"], _o = ["onUpdate:modelValue"], Ao = ["value"], Po = ["onUpdate:modelValue"], zo = ["onUpdate:modelValue", "multiple"], Oo = ["value"], Vo = ["onUpdate:modelValue", "type"], jo = ["aria-label", "onClick"], Lo = { class: "flex items-center gap-2" }, To = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = () => ({ logic: "and", rules: [] }), i = K(l.modelValue ? structuredClone(l.modelValue) : s());
    ce(
      () => l.modelValue,
      (m) => {
        i.value = m ? structuredClone(m) : s();
      }
    );
    const d = (m) => "rules" in m, u = y(() => Object.keys(l.fields));
    function c(m) {
      const M = m ? l.fields[m]?.kind : void 0;
      return M ? l.operators[M] ?? [] : [];
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
    function h() {
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
    function k(m) {
      i.value.rules.splice(m, 1), p();
    }
    function $(m) {
      m.operator = c(m.field)[0], m.value = void 0, p();
    }
    const S = y(() => l.depth + 1 < l.maxDepth);
    function b() {
      i.value = s(), p(), r("apply", null);
    }
    function g() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (m, M) => {
      const _ = Pt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: z(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", So, [
          me(o("select", {
            "onUpdate:modelValue": M[0] || (M[0] = (P) => i.value.logic = P),
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
        (t(!0), a(A, null, j(i.value.rules, (P, N) => (t(), a("div", {
          key: N,
          class: "flex items-start gap-2"
        }, [
          d(P) ? (t(), T(_, {
            key: 0,
            modelValue: i.value.rules[N],
            "onUpdate:modelValue": [(E) => i.value.rules[N] = E, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(A, { key: 1 }, [
            me(o("select", {
              "onUpdate:modelValue": (E) => P.field = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (E) => $(P)
            }, [
              (t(!0), a(A, null, j(u.value, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(e.fields[E].label), 9, Bo))), 128))
            ], 40, Mo), [
              [Re, P.field]
            ]),
            me(o("select", {
              "onUpdate:modelValue": (E) => P.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(A, null, j(c(P.field), (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(v[E] ?? E), 9, Ao))), 128))
            ], 40, _o), [
              [Re, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? me((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (E) => P.value = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...M[3] || (M[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, Po)), [
              [Re, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? me((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (E) => P.value = E,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(A, null, j(e.fields[P.field].options, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(E), 9, Oo))), 128))
            ], 40, zo)), [
              [Re, P.value]
            ]) : me((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (E) => P.value = E,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, Vo)), [
              [ja, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(P) ? "group" : "rule"}`,
            onClick: (E) => k(N)
          }, " × ", 8, jo)
        ]))), 128)),
        o("div", Lo, [
          D(re, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: V(() => [...M[4] || (M[4] = [
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
            default: V(() => [...M[5] || (M[5] = [
              R(" Add group ", -1)
            ])]),
            _: 1
          })) : w("", !0),
          e.root ? (t(), a(A, { key: 1 }, [
            M[8] || (M[8] = o("span", { class: "flex-1" }, null, -1)),
            D(re, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: b
            }, {
              default: V(() => [...M[6] || (M[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            D(re, {
              type: "button",
              size: "sm",
              onClick: g
            }, {
              default: V(() => [...M[7] || (M[7] = [
                R(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : w("", !0)
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
  setup(e, { emit: n }) {
    const s = he(e, n);
    return (i, d) => (t(), T(x(oa), oe({ "data-slot": "sheet" }, x(s)), {
      default: V((u) => [
        H(i.$slots, "default", Be(Le(u)))
      ]),
      _: 3
    }, 16));
  }
});
function X(...e) {
  return Dl(Tl(e));
}
function k4(e) {
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
    const n = e, l = ue(n, "class");
    return (r, s) => (t(), T(x(zt), oe({
      "data-slot": "sheet-overlay",
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        n.class
      )
    }, x(l)), {
      default: V(() => [
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class", "side"), i = he(s, r);
    return (d, u) => (t(), T(x(Ot), null, {
      default: V(() => [
        D(Do),
        D(x(Vt), oe({
          "data-slot": "sheet-content",
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            l.class
          )
        }, { ...d.$attrs, ...x(i) }), {
          default: V(() => [
            H(d.$slots, "default"),
            D(x(Ge), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: V(() => [
                D(x(jt), { class: "size-4" }),
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
}, es = { class: "flex flex-col gap-1" }, ts = ["onClick"], as = { class: "border-t p-4" }, ls = ["disabled"], ns = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, os = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, ss = ["placeholder", "title", "aria-label"], rs = ["aria-label"], is = {
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
}, Ps = ["aria-pressed", "aria-label", "title"], zs = ["aria-label", "title"], Os = { class: "flex flex-col gap-0.5 p-1" }, Vs = ["onClick"], js = ["onClick"], Ls = {
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!1), i = K(l.search);
    ce(
      () => l.search,
      (Z) => {
        Z !== i.value && (i.value = Z);
      }
    );
    let d;
    ce(i, (Z) => {
      clearTimeout(d), d = setTimeout(() => {
        Z !== l.search && r("update:search", Z);
      }, 250);
    });
    const u = K({ ...l.filters });
    ce(
      () => l.filters,
      (Z) => {
        u.value = { ...Z };
      },
      { deep: !0 }
    );
    const c = y(
      () => l.filterSchema.filter(
        (Z) => l.filters[Z.key] !== null && l.filters[Z.key] !== void 0
      ).length
    ), v = y(() => JSON.stringify(u.value) !== JSON.stringify(l.filters)), p = y(() => l.search !== "" || c.value > 0), h = y(() => l.indicators.length ? l.indicators : l.filterSchema.filter((Z) => l.filters[Z.key] !== null && l.filters[Z.key] !== void 0).map((Z) => ({
      key: Z.key,
      label: `${Z.label}: ${String(l.filters[Z.key])}`,
      removable: !0
    })));
    function C(Z) {
      r("group", Z);
    }
    function k(Z) {
      r("clear-filter", Z);
    }
    function $(Z) {
      return Z.type === "multiselect";
    }
    function S(Z) {
      const B = u.value[Z.key];
      return Array.isArray(B) ? B : B == null ? [] : [B];
    }
    function b(Z) {
      return S(Z).filter(
        (B) => typeof B == "string" || typeof B == "number"
      );
    }
    function g(Z) {
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
    function P(Z, B, I) {
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
      u.value = Object.fromEntries(l.filterSchema.map((Z) => [Z.key, null]));
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
    const G = K(new Set(l.hidden));
    ce(
      () => l.hidden,
      (Z) => {
        G.value = new Set(Z);
      },
      { deep: !0 }
    );
    function W(Z) {
      const B = new Set(G.value);
      B.has(Z) ? B.delete(Z) : B.add(Z), G.value = B, r("apply-columns", [...B]);
    }
    function le() {
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
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x($e)])
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
          c.value ? (t(), a("span", Ro, f(c.value), 1)) : w("", !0)
        ]),
        D(Ft, {
          open: s.value,
          "onUpdate:open": B[4] || (B[4] = (I) => s.value = I)
        }, {
          default: V(() => [
            D(Et, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: V(() => [
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
                      (t(!0), a(A, null, j(e.filterSchema, (I) => (t(), a("div", {
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
                          (t(!0), a(A, null, j(U(I), (L) => (t(), a("option", {
                            key: String(L.value),
                            value: L.value
                          }, f(L.label), 9, Wo))), 128))
                        ], 40, Go)) : w("", !0)
                      ]))), 128))
                    ])) : w("", !0),
                    o("div", Zo, [
                      B[14] || (B[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", Jo, [
                        (t(!0), a(A, null, j(e.columns, (I) => (t(), a("button", {
                          key: `mobile-col-${I.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: I.locked,
                          onClick: (L) => W(I.key)
                        }, [
                          o("span", null, f(I.label), 1),
                          G.value.has(I.key) ? w("", !0) : (t(), a("span", Qo, "On"))
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
                        (t(!0), a(A, null, j(e.groups, (I) => (t(), a("button", {
                          key: I.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (L) => {
                            C(I.key), s.value = !1;
                          }
                        }, f(I.label), 9, ts))), 128))
                      ])
                    ])) : w("", !0)
                  ]),
                  o("div", as, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !v.value,
                      onClick: ae
                    }, " Apply filters ", 8, ls)) : w("", !0),
                    p.value ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: B[3] || (B[3] = (I) => {
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
      o("div", ns, [
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
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x($e)])
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
          ])])) : w("", !0)
        ]),
        e.filterSchema.length ? (t(), T(He, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: V(() => [
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
              c.value ? (t(), a("span", is, f(c.value), 1)) : w("", !0)
            ], 10, rs)
          ]),
          panel: V(({ close: I }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              B[20] || (B[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: te
              }, " Reset ")
            ]),
            B[23] || (B[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", ds, [
              (t(!0), a(A, null, j(e.filterSchema, (L) => (t(), a("div", {
                key: L.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", us, f(L.label), 1),
                $(L) ? (t(), T(Dt, {
                  key: 0,
                  "model-value": b(L),
                  options: g(L),
                  placeholder: `Any ${L.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Y) => u.value[L.key] = Y.length ? Y : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : L.type === "querybuilder" ? (t(), T(To, {
                  key: 1,
                  "model-value": u.value[L.key] ?? null,
                  fields: L.fields ?? {},
                  operators: L.operators ?? {},
                  "max-depth": L.maxDepth ?? 5,
                  onApply: (Y) => E(L.key, Y)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : L.type === "daterange" ? (t(), a(A, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[L.key] == "string" && !String(u.value[L.key]).includes("..") ? u.value[L.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Y) => m(L, Y.target.value)
                  }, [
                    B[21] || (B[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(A, null, j(U(L), (Y) => (t(), a("option", {
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
                    onChange: (Y) => P(
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
                    onChange: (Y) => P(
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
                  (t(!0), a(A, null, j(U(L), (Y) => (t(), a("option", {
                    key: String(Y.value),
                    value: Y.value
                  }, f(Y.label), 9, Cs))), 128))
                ], 40, ws))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !v.value,
              onClick: (L) => N(I)
            }, " Apply filters ", 8, Ss)
          ]),
          _: 1
        })) : w("", !0),
        D(He, { "dismiss-on-panel-click": !1 }, {
          trigger: V(() => [...B[24] || (B[24] = [
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
          panel: V(() => [
            B[27] || (B[27] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", Ms, [
              (t(!0), a(A, null, j(e.columns, (I) => (t(), a("button", {
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
                onClick: le
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
        ])], 10, Ps)) : w("", !0),
        e.groups.length ? (t(), T(He, {
          key: 2,
          align: "end"
        }, {
          trigger: V(() => [
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
          panel: V(({ close: I }) => [
            o("div", Os, [
              o("button", {
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (L) => {
                  C(null), I();
                }
              }, " No grouping ", 10, Vs),
              (t(!0), a(A, null, j(e.groups, (L) => (t(), a("button", {
                key: L.key,
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === L.key ? "text-primary font-medium" : ""]),
                onClick: (Y) => {
                  C(L.key), I();
                }
              }, f(L.label), 11, js))), 128))
            ])
          ]),
          _: 1
        })) : w("", !0),
        p.value ? (t(), a("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: J
        }, " Clear ")) : w("", !0),
        e.loading ? (t(), a("span", Ls, "Loading…")) : w("", !0)
      ]),
      h.value.length ? (t(), a("div", Ts, [
        (t(!0), a(A, null, j(h.value, (I) => (t(), a("span", {
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
            onClick: (L) => k(I.key)
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
          ])], 8, Fs)) : w("", !0)
        ], 8, Ds))), 128)),
        h.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: B[8] || (B[8] = (I) => r("clear-filters"))
        }, " Clear all ")) : w("", !0)
      ])) : w("", !0)
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
}, Xs = ["href"], $4 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = _t(), i = y(() => l.columns.filter((C) => C.type !== "image")), d = y(() => !!s.actions), u = y(() => !!l.title || d.value), c = y(() => l.filterSchema.length > 0), v = y(
      () => l.columns.map((C) => ({ key: C.key, label: C.label, locked: !0 }))
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
    return (C, k) => (t(), T(fo, null, Ye({
      default: V(() => [
        e.loading && e.rows.length === 0 ? (t(), a("div", Us, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T($t, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, Ye({ _: 2 }, [
          C.$slots.illustration ? {
            name: "illustration",
            fn: V(() => [
              H(C.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          C.$slots["empty-actions"] ? {
            name: "actions",
            fn: V(() => [
              H(C.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), a("div", Hs, [
          o("table", Ks, [
            o("thead", qs, [
              o("tr", null, [
                (t(!0), a(A, null, j(i.value, ($) => (t(), a("th", {
                  key: $.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f($.label), 1))), 128))
              ])
            ]),
            o("tbody", Gs, [
              (t(!0), a(A, null, j(e.rows, ($, S) => (t(), a("tr", {
                key: $.id ?? S,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), a(A, null, j(i.value, (b) => (t(), a("td", {
                  key: b.key,
                  class: z(["px-3 whitespace-nowrap", [
                    b.mono ? "font-mono text-xs" : "",
                    b.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  H(C.$slots, `cell:${b.key}`, {
                    row: $,
                    value: $[b.key],
                    column: b
                  }, () => [
                    e.recordBase && $.id != null && b === i.value[0] ? (t(), a("a", {
                      key: 0,
                      href: `${e.recordBase}/${$.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, f(p(b, $[b.key])), 9, Ws)) : h($[b.key]) ? (t(), a("span", Zs, " None ")) : (t(), a(A, { key: 2 }, [
                      R(f(p(b, $[b.key])), 1)
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
        fn: V(() => [
          o("div", Is, [
            e.title ? (t(), a("h3", Ns, f(e.title), 1)) : w("", !0)
          ]),
          d.value ? (t(), a("div", Rs, [
            H(C.$slots, "actions")
          ])) : w("", !0)
        ]),
        key: "0"
      } : void 0,
      c.value ? {
        name: "toolbar",
        fn: V(() => [
          D(Es, {
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
        fn: V(() => [
          e.nextCursor ? (t(), a("div", Js, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: k[6] || (k[6] = ($) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, Ys)
          ])) : e.capped ? (t(), a("p", Qs, [
            R(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), a("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Xs)) : (t(), a(A, { key: 1 }, [
              R("Open the full list to search or filter the rest.")
            ], 64))
          ])) : w("", !0)
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
}, lr = { class: "flex flex-col" }, nr = {
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
  setup(e, { emit: n }) {
    const l = e, r = n;
    function s(c) {
      return l.failedStep !== null && c === l.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : l.failedStep !== null && c > l.failedStep ? "" : c < l.activeStep ? "bg-primary text-primary-foreground border-primary" : c === l.activeStep ? "border-primary text-primary" : "";
    }
    function i(c) {
      if (l.failedStep !== null) {
        if (c === l.failedStep)
          return "text-destructive font-medium";
        if (c > l.failedStep)
          return "text-muted-foreground/60";
      }
      return c === l.activeStep ? "text-foreground font-medium" : c < l.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function d(c) {
      return l.failedStep !== null ? c < l.failedStep : c < l.activeStep;
    }
    function u(c) {
      return l.failedStep === c;
    }
    return (c, v) => (t(), a("ol", er, [
      (t(!0), a(A, null, j(e.steps, (p, h) => (t(), a("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(Ce(e.interactive ? "button" : "div"), oe({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(h)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: h > e.activeStep } : {}, {
          onClick: (C) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: V(() => [
            o("span", {
              class: z(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              u(h) ? (t(), a("svg", tr, [...v[0] || (v[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), a("svg", ar, [...v[1] || (v[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(A, { key: 2 }, [
                R(f(h + 1), 1)
              ], 64))
            ], 2),
            o("span", lr, [
              o("span", null, f(p.label), 1),
              p.description ? (t(), a("span", nr, f(p.description), 1)) : w("", !0)
            ]),
            e.hasError(h) ? (t(), a("span", or)) : w("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), a("span", sr)) : w("", !0)
      ]))), 128))
    ]));
  }
}), tt = /* @__PURE__ */ new Map();
function be(e, n) {
  tt.set(e, n);
}
function ir(e) {
  return tt.get(e);
}
function w4(e) {
  return tt.has(e);
}
function C4() {
  return [...tt.keys()].sort();
}
function S4() {
  tt.clear();
}
class dr extends Error {
  fieldErrors;
  constructor(n, l = {}) {
    super(n), this.name = "CreateOptionError", this.fieldErrors = l;
  }
}
function M4(e) {
  if (!e || typeof e != "object")
    return {};
  const n = {};
  for (const [l, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (n[l] = s);
  }
  return n;
}
function ur(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const n = e.label.replace(/\s*id$/i, "").trim();
  return n !== "" ? `Create ${n.toLowerCase()}` : "Create option";
}
function cr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const n = e.label.replace(/\s*id$/i, "").trim();
  return n !== "" ? `Create ${n.toLowerCase()}` : "Create new";
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K({});
    ce(
      () => l.open,
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
      footer: V(() => [
        D(re, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (c) => r("close"))
        }, {
          default: V(() => [...u[2] || (u[2] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(re, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: V(() => [
            R(f(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: V(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: ve(i, ["prevent"])
        }, [
          e.generalError ? (t(), a("p", fr, f(e.generalError), 1)) : w("", !0),
          (t(!0), a(A, null, j(e.fields, (c) => (t(), T(Ke, {
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(Na), oe({ "data-slot": "checkbox" }, x(i), {
      class: x(X)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        l.class
      )
    }), {
      default: V((c) => [
        D(x(Ra), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: V(() => [
            H(d.$slots, "default", Be(Le(c)), () => [
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = he(ue(l, "class"), r);
    return (i, d) => (t(), T(x(Ua), oe({ "data-slot": "switch" }, x(s), {
      class: x(X)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        l.class
      )
    }), {
      default: V(() => [
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(!1), d = K(null), u = K(null), c = K(null), v = y(() => l.accept.map((M) => `.${M}`).join(",")), p = y(() => c.value ?? l.modelValue?.url ?? null), h = y(() => `${l.accept.length ? l.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(l.maxKilobytes * 1024)}`);
    function C(M) {
      if (!M)
        return "";
      const _ = ["B", "KB", "MB", "GB"];
      let P = M, N = 0;
      for (; P >= 1024 && N < _.length - 1; )
        P /= 1024, N++;
      return `${P.toFixed(P < 10 && N > 0 ? 1 : 0)} ${_[N]}`;
    }
    function k(M) {
      return M.split(".").pop()?.toLowerCase() ?? "";
    }
    function $(M) {
      return l.accept.length && !l.accept.includes(k(M.name)) ? `${k(M.name).toUpperCase() || "That"} files are not accepted here.` : M.size > l.maxKilobytes * 1024 ? `That file is ${C(M.size)}; the limit is ${C(l.maxKilobytes * 1024)}.` : null;
    }
    async function S(M) {
      const _ = M?.[0];
      if (!(!_ || l.disabled) && (u.value = $(_), !u.value)) {
        b(), l.image && _.type.startsWith("image/") && (c.value = URL.createObjectURL(_)), d.value = 0;
        try {
          const P = await l.upload(_, (N) => {
            d.value = N;
          });
          r("update:modelValue", P);
        } catch (P) {
          u.value = P instanceof Error ? P.message : "The upload failed.", b();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function b() {
      c.value && URL.revokeObjectURL(c.value), c.value = null;
    }
    async function g() {
      const M = l.modelValue;
      b(), u.value = null, r("update:modelValue", null), M && !M.url && l.discard && await l.discard(M.value).catch(() => {
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
        }, null, 8, $r)) : (t(), a("span", wr, f(k(e.modelValue.name) || "file"), 1)),
        o("span", Cr, [
          o("span", Sr, f(e.modelValue.name), 1),
          o("span", Mr, [
            R(f(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(A, { key: 0 }, [
              _[4] || (_[4] = R(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Br)
            ], 64)) : (t(), a(A, { key: 1 }, [
              R(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? w("", !0) : (t(), a("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: g
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
        onDragover: _[1] || (_[1] = ve((P) => i.value = !0, ["prevent"])),
        onDragleave: _[2] || (_[2] = ve((P) => i.value = !1, ["prevent"])),
        onDrop: ve(m, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: v.value,
          disabled: e.disabled,
          onChange: _[0] || (_[0] = (P) => S(P.target.files))
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
        o("span", xr, f(h.value), 1),
        d.value !== null ? (t(), a("span", yr, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${d.value}%` })
          }, null, 4)
        ])) : w("", !0)
      ], 34)),
      u.value ? (t(), a("p", _r, f(u.value), 1)) : w("", !0)
    ]));
  }
}), Ar = { class: "flex flex-col gap-2" }, Pr = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, zr = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Or = { class: "flex flex-col gap-1" }, Vr = ["onUpdate:modelValue", "disabled", "aria-label"], jr = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Lr = {
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const d = K(u(l.modelValue));
    function u(S) {
      return S ? Object.entries(S).map(([b, g]) => ({
        uid: i++,
        key: b,
        value: g ?? ""
      })) : [];
    }
    ce(
      () => l.modelValue,
      (S) => {
        JSON.stringify(S ?? null) !== JSON.stringify(c()) && (d.value = u(S));
      }
    );
    function c() {
      const S = {};
      for (const b of d.value) {
        const g = b.key.trim();
        g !== "" && (S[g] = b.value);
      }
      return Object.keys(S).length ? S : null;
    }
    function v() {
      r("update:modelValue", c());
    }
    const p = y(() => {
      const S = /* @__PURE__ */ new Map();
      for (const b of d.value) {
        const g = b.key.trim();
        g !== "" && S.set(g, (S.get(g) ?? 0) + 1);
      }
      return new Set([...S.entries()].filter(([, b]) => b > 1).map(([b]) => b));
    }), h = y(
      () => new Set(
        d.value.map((S) => S.key.trim()).filter((S) => S !== "" && !s.test(S))
      )
    ), C = y(() => l.maxPairs !== null && d.value.length >= l.maxPairs);
    function k() {
      C.value || l.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function $(S) {
      d.value = d.value.filter((b) => b.uid !== S), v();
    }
    return (S, b) => (t(), a("div", Ar, [
      d.value.length ? (t(), a("div", Pr, [
        o("div", zr, [
          o("span", null, f(e.keyLabel), 1),
          o("span", null, f(e.valueLabel), 1),
          b[0] || (b[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(A, null, j(d.value, (g) => (t(), a("div", {
          key: g.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", Or, [
            me(o("input", {
              "onUpdate:modelValue": (m) => g.key = m,
              type: "text",
              class: z([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(g.key.trim()) || h.value.has(g.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: v
            }, null, 42, Vr), [
              [we, g.key]
            ]),
            h.value.has(g.key.trim()) ? (t(), a("p", jr, " Letters, numbers, underscores and dashes only. ")) : p.value.has(g.key.trim()) ? (t(), a("p", Lr, " Used twice - only the last value will be saved. ")) : w("", !0)
          ]),
          me(o("input", {
            "onUpdate:modelValue": (m) => g.value = m,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: v
          }, null, 40, Tr), [
            [we, g.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${g.key || "this entry"}`,
            onClick: (m) => $(g.uid)
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
          ])], 8, Dr)
        ]))), 128))
      ])) : (t(), a("p", Fr, " Nothing here yet. ")),
      o("div", Er, [
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
          R(" Add " + f(e.keyLabel.toLowerCase()), 1)
        ], 8, Ir),
        e.maxPairs !== null ? (t(), a("p", Nr, f(d.value.length) + " of " + f(e.maxPairs), 1)) : w("", !0)
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null);
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
    ], u = y(() => d.filter(($) => l.toolbar.includes($.id))), c = y(() => l.toolbar.includes("link")), v = K(0);
    function p() {
      const $ = s.value?.innerHTML ?? "", S = (s.value?.innerText ?? "").trim();
      v.value = S.length;
      const b = S === "" ? null : $;
      i = b, r("update:modelValue", b);
    }
    function h($) {
      l.disabled || (s.value?.focus(), document.execCommand($.command, !1, $.argument), p());
    }
    function C() {
      if (l.disabled)
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
      s.value && (s.value.innerHTML = l.modelValue ?? "", v.value = s.value.innerText.trim().length);
    }), ce(
      () => l.modelValue,
      ($) => {
        $ !== i && s.value && (s.value.innerHTML = $ ?? "", v.value = s.value.innerText.trim().length);
      }
    ), ($, S) => (t(), a("div", Ur, [
      o("div", Hr, [
        (t(!0), a(A, null, j(u.value, (b) => (t(), a("button", {
          key: b.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: b.label,
          "aria-label": b.label,
          onMousedown: S[0] || (S[0] = ve(() => {
          }, ["prevent"])),
          onClick: (g) => h(b)
        }, [
          (t(), a("svg", qr, [
            o("path", {
              d: b.path
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
        ])], 40, Wr)) : w("", !0)
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
        onPaste: k
      }, null, 42, Zr),
      e.maxLength !== null ? (t(), a("div", Jr, f(v.value) + " / " + f(e.maxLength), 1)) : w("", !0)
    ]));
  }
}), Qr = /* @__PURE__ */ Tt(Yr, [["__scopeId", "data-v-32c63bc7"]]), Xr = {
  key: 1,
  class: "flex flex-col gap-2"
}, ei = { class: "flex items-center justify-between gap-2" }, ti = ["for"], ai = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, li = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs leading-snug"
}, ni = ["aria-label", "disabled"], oi = {
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
}, zi = ["aria-label", "disabled"], Oi = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Vi = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, ji = ["aria-label", "disabled"], Li = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ti = {
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
  setup(e, { emit: n }) {
    const l = qt(() => import("./PkRepeater-J84jGe3T.js")), r = qt(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = n, d = K(!1), u = K(""), c = K([]), v = K(!1), p = K(null);
    let h;
    ce(u, (se) => {
      s.searchOptions && (clearTimeout(h), v.value = !0, h = setTimeout(async () => {
        try {
          c.value = await s.searchOptions(se);
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
    function k(se) {
      p.value = se.label, i("change", se.value), d.value = !1, u.value = "";
    }
    function $() {
      p.value = null, i("change", null);
    }
    const S = st("panelPicker", null), b = st("panelCreateOption", null), g = K(!1), m = K(!1), M = K({}), _ = K(null), P = y(() => ur(s.field)), N = y(() => cr(s.field));
    function E() {
      M.value = {}, _.value = null, g.value = !0, d.value = !1;
    }
    function te() {
      m.value || (g.value = !1, M.value = {}, _.value = null);
    }
    async function U(se) {
      if (b) {
        m.value = !0, M.value = {}, _.value = null;
        try {
          const q = await b.run(s.field.key, { ...se });
          k(q), g.value = !1;
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
    }), W = y(() => s.field.morphTo ?? []), le = y(() => {
      const se = s.value;
      return se && typeof se == "object" && !Array.isArray(se) ? se : { type: void 0, id: void 0 };
    });
    function ae(se) {
      i("change", { type: se || null, id: null });
    }
    function J(se) {
      i("change", { type: le.value.type ?? null, id: se });
    }
    function Z(se) {
      p.value = se.label, J(se.value), d.value = !1, u.value = "";
    }
    xe(() => clearTimeout(h));
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
    const Y = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${$e}`;
    function pe(se) {
      const q = document.getElementById(`f-${s.field.key}`);
      if (!(q instanceof HTMLTextAreaElement) && !(q instanceof HTMLInputElement))
        return;
      const F = q.selectionStart ?? q.value.length, ee = q.selectionEnd ?? F;
      q.setRangeText(se, F, ee, "end"), q.dispatchEvent(new Event("input", { bubbles: !0 })), q.focus();
    }
    return (se, q) => (t(), a(A, null, [
      e.field.type === "hidden" ? (t(), a(A, { key: 0 }, [], 64)) : (t(), a("div", Xr, [
        o("div", ei, [
          o("label", {
            for: `f-${e.field.key}`,
            class: z(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            R(f(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", ai, "*")) : w("", !0)
          ], 10, ti),
          e.field.hint ? (t(), a("span", li, [
            R(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: q[0] || (q[0] = (F) => L(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, ni)) : w("", !0)
          ])) : w("", !0)
        ]),
        B.value ? (t(), T(Ce(B.value), {
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
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), T(x(l), {
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
            value: le.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x($e)]),
            onChange: q[8] || (q[8] = (F) => ae(F.target.value))
          }, [
            q[24] || (q[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), a(A, null, j(W.value, (F) => (t(), a("option", {
              key: F.value,
              value: F.value
            }, f(F.label), 9, ri))), 128))
          ], 42, si),
          le.value.type && e.searchOptions ? (t(), a("div", ii, [
            o("button", {
              type: "button",
              class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x($e)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: z(p.value || le.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (le.value.id ? String(le.value.id) : "Search…")), 3)
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
                (t(!0), a(A, null, j(c.value, (F) => (t(), a("button", {
                  key: String(F.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (ee) => Z(F)
                }, f(F.label), 9, fi))), 128))
              ])
            ])) : w("", !0),
            d.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: q[10] || (q[10] = (F) => d.value = !1)
            })) : w("", !0)
          ])) : w("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", mi, [
          o("button", {
            type: "button",
            class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x($e)]),
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
            }, " ✕ ")) : w("", !0)
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
              v.value ? (t(), a("p", hi, " Searching… ")) : c.value.length === 0 ? (t(), a("p", bi, " No matches ")) : w("", !0),
              (t(!0), a(A, null, j(c.value, (F) => (t(), a("button", {
                key: String(F.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (ee) => k(F)
              }, f(F.label), 9, xi))), 128)),
              e.field.createOption && x(b) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: E
              }, [
                q[25] || (q[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                R(" " + f(N.value), 1)
              ])) : w("", !0)
            ])
          ])) : w("", !0),
          d.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: q[12] || (q[12] = (F) => d.value = !1)
          })) : w("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x($e)]),
          onChange: q[13] || (q[13] = (F) => i("change", F.target.value || null))
        }, [
          q[26] || (q[26] = o("option", { value: "" }, "-", -1)),
          (t(!0), a(A, null, j(e.options, (F) => (t(), a("option", {
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
          class: z(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", x($e)]),
          onInput: q[16] || (q[16] = (F) => i("change", F.target.value))
        }, null, 42, Mi)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: z([
            "border-input flex overflow-hidden rounded-md border",
            x(Gt),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Bi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: q[17] || (q[17] = (F) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, _i)) : w("", !0),
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
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Pi, f(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: q[19] || (q[19] = (F) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, zi)) : w("", !0)
        ], 2)) : I.value ? (t(), a("div", {
          key: 15,
          class: z([
            "border-input flex h-9 overflow-hidden rounded-md border",
            x(Gt),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Vi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: q[21] || (q[21] = (F) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, ji)) : w("", !0),
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
          }, null, 40, Li),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Ti, f(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: q[23] || (q[23] = (F) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Di)) : w("", !0)
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
          (t(!0), a(A, null, j(e.field.presets, (F) => (t(), a("button", {
            key: F,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: z([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              x($e),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == F ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == F
            ),
            onClick: (ee) => i("change", String(F))
          }, f(F), 11, Ei))), 128))
        ])) : w("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", Ii, [
          (t(!0), a(A, null, j(e.field.chips, (F, ee) => (t(), a("button", {
            key: ee,
            type: "button",
            title: F,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (Q) => pe(String(ee))
          }, f(ee), 9, Ni))), 128))
        ])) : w("", !0),
        G.value ? (t(), a("a", {
          key: 18,
          href: G.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Ri)) : w("", !0),
        e.error ? (t(), a("p", Ui, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", Hi, f(e.field.help), 1)) : w("", !0)
      ])),
      e.field.createOption && x(b) ? (t(), T(mr, {
        key: 2,
        open: g.value,
        title: P.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: m.value,
        errors: M.value,
        "general-error": _.value,
        onClose: te,
        onSubmit: U
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : w("", !0)
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
}, ld = {
  key: 4,
  class: "min-w-0 space-y-4"
}, nd = {
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!l.node.collapsed), i = K(0), d = K(0), u = y(
      () => (l.node.children ?? []).map((g) => ({
        label: g.label ?? "",
        description: g.description
      }))
    ), c = y(() => l.depth === 0), v = y(() => {
      const g = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, m = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        g[l.node.align ?? "start"] ?? "items-start",
        m[l.node.gap ?? "md"] ?? "gap-4",
        l.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = y(() => {
      const g = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return g[l.node.tone ?? "info"] ?? g.info;
    }), h = y(() => {
      const g = l.node.columns ?? 1;
      return g >= 3 ? "sm:grid-cols-3" : g === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function C(g) {
      const m = g.children?.length ?? 1;
      return m >= 3 ? "md:grid-cols-3" : m === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function k(g = 1) {
      return g >= 4 ? "md:col-span-4" : g === 3 ? "md:col-span-3" : g === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function $(g) {
      const m = [], M = (_) => {
        _.component === "field" && _.key && m.push(_.key), _.children?.forEach(M);
      };
      return M(g), m.some((_) => l.errors[_]);
    }
    function S(g) {
      if (g.hidden)
        return !1;
      const m = g.visibleWhen;
      return m ? l.values[m.field] == m.value : !0;
    }
    function b(g) {
      if (l.upload)
        return (m, M) => l.upload(g, m, M);
    }
    return (g, m) => {
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
        upload: b(e.node.key),
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
            ])) : w("", !0),
            o("div", Ji, [
              o("h3", Yi, f(e.node.label), 1),
              e.node.description ? (t(), a("p", Qi, f(e.node.description), 1)) : w("", !0)
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
          ])], 2)) : w("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [h.value, c.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(A, null, j(e.node.children ?? [], (_, P) => (t(), T(M, {
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
            class: z(_.span && _.span >= 2 ? "sm:col-span-2" : ""),
            onChange: m[3] || (m[3] = (N, E) => r("change", N, E)),
            onAffixAction: m[4] || (m[4] = (N, E) => r("affix-action", N, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "card" && S(e.node) ? (t(), a("section", Xi, [
        o("header", ed, [
          o("h3", td, f(e.node.title), 1),
          e.node.description ? (t(), a("p", ad, f(e.node.description), 1)) : w("", !0)
        ]),
        o("div", {
          class: z(["grid grid-cols-1 gap-4 px-4 py-4", h.value])
        }, [
          (t(!0), a(A, null, j(e.node.children ?? [], (_, P) => (t(), T(M, {
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
            onChange: m[5] || (m[5] = (N, E) => r("change", N, E)),
            onAffixAction: m[6] || (m[6] = (N, E) => r("affix-action", N, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && S(e.node) ? (t(), a("div", {
        key: 3,
        class: z(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), a(A, null, j(e.node.children ?? [], (_, P) => (t(), T(M, {
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
          class: z(_.component === "column" ? k(_.span) : ""),
          onChange: m[7] || (m[7] = (N, E) => r("change", N, E)),
          onAffixAction: m[8] || (m[8] = (N, E) => r("affix-action", N, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && S(e.node) ? (t(), a("div", ld, [
        (t(!0), a(A, null, j(e.node.children ?? [], (_, P) => (t(), T(M, {
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
          onChange: m[9] || (m[9] = (N, E) => r("change", N, E)),
          onAffixAction: m[10] || (m[10] = (N, E) => r("affix-action", N, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), a("div", {
        key: 5,
        class: z(["grid grid-cols-1 gap-4", h.value])
      }, [
        (t(!0), a(A, null, j(e.node.children ?? [], (_, P) => (t(), T(M, {
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
          onChange: m[11] || (m[11] = (N, E) => r("change", N, E)),
          onAffixAction: m[12] || (m[12] = (N, E) => r("affix-action", N, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), a("div", {
        key: 6,
        class: z(["flex", v.value])
      }, [
        (t(!0), a(A, null, j(e.node.children ?? [], (_, P) => (t(), T(M, {
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
          onChange: m[13] || (m[13] = (N, E) => r("change", N, E)),
          onAffixAction: m[14] || (m[14] = (N, E) => r("affix-action", N, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", nd, [
        o("legend", od, f(e.node.label), 1),
        e.node.description ? (t(), a("p", sd, f(e.node.description), 1)) : w("", !0),
        o("div", {
          class: z(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), a(A, null, j(e.node.children ?? [], (_, P) => (t(), T(M, {
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
            onChange: m[15] || (m[15] = (N, E) => r("change", N, E)),
            onAffixAction: m[16] || (m[16] = (N, E) => r("affix-action", N, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), a("div", {
        key: 8,
        role: "note",
        class: z(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), a("p", rd, f(e.node.title), 1)) : w("", !0),
        o("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 9,
        class: z(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", c.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(A, null, j(e.node.children ?? [], (_, P) => (t(), a("button", {
            key: P,
            type: "button",
            class: z([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === P ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (N) => i.value = P
          }, [
            R(f(_.label) + " ", 1),
            $(_) ? (t(), a("span", dd)) : w("", !0)
          ], 10, id))), 128))
        ], 2),
        (t(!0), a(A, null, j(e.node.children ?? [], (_, P) => me((t(), a("div", {
          key: P,
          class: z(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(A, null, j(_.children ?? [], (N, E) => (t(), T(M, {
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
          [Fe, i.value === P]
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
        (t(!0), a(A, null, j(e.node.children ?? [], (_, P) => me((t(), a("div", {
          key: P,
          class: z(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(A, null, j(_.children ?? [], (N, E) => (t(), T(M, {
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
          [Fe, d.value === P]
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
          }, " Next ")) : w("", !0)
        ])
      ], 2)) : w("", !0);
    };
  }
}), B4 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K({});
    ce(
      () => l.open,
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
      footer: V(() => [
        D(re, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (c) => r("close"))
        }, {
          default: V(() => [...u[3] || (u[3] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(re, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: V(() => [
            R(f(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: V(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: ve(i, ["prevent"])
        }, [
          (t(!0), a(A, null, j(e.form?.nodes ?? [], (c, v) => (t(), T(ga, {
            key: v,
            node: c,
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
    const n = e, l = {
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
    }, s = y(() => typeof n.value == "boolean" ? n.value ? "1" : "" : n.value === null || n.value === void 0 ? "" : String(n.value)), i = y(() => n.icons[s.value] ?? n.defaultIcon), d = y(() => l[i.value] ?? l.dot), u = y(() => r[n.colors[s.value] ?? "neutral"] ?? r.neutral), c = y(() => n.labels[s.value] ?? String(n.value ?? "-"));
    return (v, p) => (t(), a("span", {
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
}), hd = ["aria-label"], bd = ["fill"], _4 = /* @__PURE__ */ O({
  __name: "RatingCell",
  props: {
    value: {},
    max: { default: 5 }
  },
  setup(e) {
    const n = e, l = y(() => Math.max(1, Math.min(10, Number(n.max ?? 5)))), r = y(() => {
      const s = Number(n.value);
      return Number.isFinite(s) ? Math.max(0, Math.min(l.value, s)) : 0;
    });
    return (s, i) => (t(), a("span", {
      class: "inline-flex items-center gap-0.5 text-amber-500",
      "aria-label": `${r.value} of ${l.value}`,
      "data-test": "rating-cell"
    }, [
      (t(!0), a(A, null, j(l.value, (d) => (t(), a("svg", {
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
        }, null, 8, bd)
      ]))), 128))
    ], 8, hd));
  }
}), xd = ["src"], yd = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, kd = /* @__PURE__ */ O({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const n = e, l = K(!1);
    ce(
      () => n.src,
      () => l.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = y(() => {
      const d = typeof n.src == "string" ? n.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = y(() => {
      const d = typeof n.fallbackText == "string" ? n.fallbackText.trim() : "";
      return d === "" ? "?" : d.split(/\s+/).slice(0, 2).map((u) => u[0]?.toUpperCase() ?? "").join("");
    });
    return (d, u) => (t(), a("span", {
      class: z(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !l.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (c) => l.value = !0)
      }, null, 40, xd)) : e.fallback === "initials" ? (t(), a(A, { key: 1 }, [
        R(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", yd, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : w("", !0)
    ], 2));
  }
}), $d = {
  key: 0,
  class: "text-muted-foreground"
}, wd = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Cd = {
  key: 0,
  class: "font-mono text-xs"
}, Sd = {
  key: 1,
  class: "sr-only"
}, Md = /* @__PURE__ */ O({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, l = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = y(() => {
      const s = (n.value ?? "").trim();
      return l.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), a("span", $d, "-")) : (t(), a("span", wd, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", Cd, f(r.value), 1)) : (t(), a("span", Sd, f(r.value), 1))
    ]));
  }
}), Bd = { class: "inline-flex items-center" }, _d = ["checked", "aria-label"], Ad = { class: "sr-only" }, A4 = /* @__PURE__ */ O({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const n = e, l = y(() => {
      const s = n.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = y(
      () => l.value ? n.trueLabel ?? "Yes" : n.falseLabel ?? "No"
    );
    return (s, i) => (t(), a("span", Bd, [
      o("input", {
        type: "checkbox",
        checked: l.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, _d),
      o("span", Ad, f(r.value), 1)
    ]));
  }
}), Pd = {
  key: 0,
  class: "text-muted-foreground"
}, zd = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, P4 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const n = e, l = y(
      () => String(n.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => l.value ? (t(), a("code", zd, f(l.value), 1)) : (t(), a("span", Pd, "—"));
  }
}), Od = {
  key: 0,
  class: "font-mono text-xs"
}, Vd = {
  key: 1,
  class: "text-muted-foreground"
}, jd = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, z4 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const n = e, l = y(
      () => n.value && typeof n.value == "object" && !Array.isArray(n.value) ? Object.keys(n.value) : null
    );
    return (r, s) => l.value === null && e.value != null ? (t(), a("span", Od, f(e.value), 1)) : !l.value || l.value.length === 0 ? (t(), a("span", Vd, "—")) : (t(), a("span", jd, f(l.value.length) + " " + f(l.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Ld = ["data-variant"], Td = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ee = /* @__PURE__ */ O({
  __name: "PkBadge",
  props: {
    variant: { default: "default" },
    class: {}
  },
  setup(e) {
    const n = e, l = {
      default: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      destructive: "border-transparent bg-destructive text-white dark:bg-destructive/60",
      outline: "text-foreground",
      success: "border-transparent bg-success text-success-foreground",
      warning: "border-transparent bg-warning text-warning-foreground",
      info: "border-transparent bg-info text-info-foreground"
    }, r = y(
      () => [Td, l[n.variant], n.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: z(r.value)
    }, [
      H(s.$slots, "default")
    ], 10, Ld));
  }
}), Dd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Fd = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, O4 = /* @__PURE__ */ O({
  __name: "TagsCell",
  props: {
    value: {},
    limit: { default: null },
    separator: { default: "," }
  },
  setup(e) {
    const n = e;
    function l(d, u) {
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
              return l(v, u);
          } catch {
          }
        return c.split(u).map((v) => v.trim()).filter((v) => v !== "");
      }
      return [String(d)];
    }
    const r = y(() => l(n.value, n.separator)), s = y(() => n.limit === null || n.limit === void 0 || n.limit < 1 ? r.value : r.value.slice(0, n.limit)), i = y(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), a("span", Dd, "None")) : (t(), a("span", Fd, [
      (t(!0), a(A, null, j(s.value, (c) => (t(), T(Ee, {
        key: c,
        variant: "secondary"
      }, {
        default: V(() => [
          R(f(c), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), T(Ee, {
        key: 0,
        variant: "outline"
      }, {
        default: V(() => [
          R("+" + f(i.value), 1)
        ]),
        _: 1
      })) : w("", !0)
    ]));
  }
}), Ed = ["aria-checked", "aria-label", "title", "disabled"], Id = ["value", "disabled"], Nd = ["value"], V4 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(() => l.value === !0 || l.value === 1 || l.value === "1"), i = y(() => l.busy || l.disabled), d = y(
      () => s.value ? l.onLabel ?? "Enabled" : l.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function c(v) {
      const p = v.target.value;
      p !== String(l.value ?? "") && r("change", p);
    }
    return (v, p) => e.type === "toggle" ? (t(), a("button", {
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
    ], 10, Ed)) : (t(), a("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = ve(() => {
      }, ["stop"])),
      onChange: c
    }, [
      (t(!0), a(A, null, j(e.options, (h, C) => (t(), a("option", {
        key: C,
        value: C
      }, f(h), 9, Nd))), 128))
    ], 40, Id));
  }
}), It = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Rd(e) {
  return e != null && e !== "";
}
function Ud(e) {
  const n = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && n.push("text-right"), e.align === "center" && n.push("text-center"), n.join(" ")) : (e.key === "name" && n.push("font-medium"), e.mono && n.push("font-mono text-xs"), e.muted && n.push("text-muted-foreground"), e.transform === "upper" && n.push("uppercase"), e.transform === "lower" && n.push("lowercase"), e.align === "right" && n.push("text-right"), e.align === "center" && n.push("text-center"), n.join(" "));
}
function j4(e) {
  const n = y(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: Ud(s),
      group: s.group
    }))
  ), l = y(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = l.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), c = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return It[c] ?? "outline";
  }
  return { columns: n, byKey: l, badgeVariant: r };
}
const Hd = ["disabled", "aria-label", "aria-busy"], Kd = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qd = ["d"], Gd = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Wd = ["disabled", "onClick"], Zd = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Jd = ["d"], Yd = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, L4 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(() => l.busy || l.disabled), i = y(() => String(l.value ?? "")), d = y(() => `Select ${(l.label || "value").trim().toLowerCase()}`);
    function u(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function c(h) {
      const C = l.colors[u(h)] ?? l.defaultColor ?? "neutral";
      return It[C] ?? "outline";
    }
    function v(h) {
      return l.options[h] ?? h;
    }
    function p(h, C) {
      if (s.value || h === i.value) {
        C();
        return;
      }
      r("change", h), C();
    }
    return (h, C) => (t(), a("div", {
      onClick: C[0] || (C[0] = ve(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), T(Ee, {
        key: 1,
        variant: c(e.value),
        class: "capitalize"
      }, {
        default: V(() => [
          R(f(v(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(He, {
        key: 0,
        align: "start"
      }, {
        trigger: V(() => [
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
              default: V(() => [
                R(f(v(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", Kd, [
              o("path", {
                d: x(de)("chevron-down")
              }, null, 8, qd)
            ]))
          ], 8, Hd)
        ]),
        panel: V(({ close: k }) => [
          o("div", Gd, f(d.value), 1),
          (t(!0), a(A, null, j(e.options, ($, S) => (t(), a("button", {
            key: S,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (b) => p(String(S), k)
          }, [
            D(Ee, {
              variant: c(S),
              class: "capitalize"
            }, {
              default: V(() => [
                R(f($), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(S) === i.value ? (t(), a("svg", Zd, [
              o("path", {
                d: x(de)("check")
              }, null, 8, Jd)
            ])) : (t(), a("span", Yd))
          ], 8, Wd))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Qd = { class: "flex items-center justify-end" }, Xd = ["aria-label"], eu = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, tu = ["d"], au = ["href"], lu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nu = ["d"], ou = ["disabled", "onClick"], su = ["d"], ru = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, iu = ["disabled", "onClick"], du = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, uu = ["d"], T4 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: n, emit: l }) {
    const r = e, s = l, i = K(null), d = K(null), u = y(() => r.groups.flatMap((b) => b.actions)), c = y(() => u.value.filter((b) => !b.destructive)), v = y(() => u.value.filter((b) => b.destructive)), p = {
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
    const C = y(() => u.value.length === 0);
    function k(b) {
      s("run", b);
    }
    function $(b) {
      C.value || (b.preventDefault(), i.value?.openAt(b.clientX, b.clientY));
    }
    function S(b) {
      if (b.key !== "ArrowDown" && b.key !== "ArrowUp")
        return;
      const g = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (g.length === 0)
        return;
      b.preventDefault();
      const m = g.indexOf(document.activeElement), M = b.key === "ArrowDown" ? 1 : -1, _ = (m + M + g.length) % g.length;
      g[_]?.focus();
    }
    return n({ openContextMenu: $ }), (b, g) => (t(), a("div", Qd, [
      C.value ? w("", !0) : (t(), T(He, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: V(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-label": `Actions for ${e.title}`,
            "aria-haspopup": "menu"
          }, [
            (t(), a("svg", eu, [
              o("path", {
                d: x(de)("more-vertical")
              }, null, 8, tu)
            ]))
          ], 8, Xd)
        ]),
        panel: V(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: S
          }, [
            (t(!0), a(A, null, j(c.value, (m) => (t(), a(A, {
              key: m.key
            }, [
              m.link ? (t(), a("a", {
                key: 0,
                href: m.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(m)])
              }, [
                (t(), a("svg", lu, [
                  o("path", {
                    d: x(de)(m.icon)
                  }, null, 8, nu)
                ])),
                R(" " + f(m.label), 1)
              ], 10, au)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(m)]),
                disabled: e.busy === m.key,
                onClick: (M) => k(m)
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
                  }, null, 8, su)
                ], 2)),
                R(" " + f(m.label), 1)
              ], 10, ou))
            ], 64))), 128)),
            v.value.length ? (t(), a("div", ru, [
              (t(!0), a(A, null, j(v.value, (m) => (t(), a("button", {
                key: m.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === m.key,
                onClick: (M) => k(m)
              }, [
                (t(), a("svg", du, [
                  o("path", {
                    d: x(de)(m.icon ?? "trash")
                  }, null, 8, uu)
                ])),
                R(" " + f(m.label), 1)
              ], 8, iu))), 128))
            ])) : w("", !0)
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
}, rt = 12, it = 20, cu = [0, 0.25, 0.5, 0.75, 1], Nt = "alxtexhpanel.appearance", Pe = {
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
const fu = "alxtexhpanel.appearance.vars";
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
function mu(e) {
  const n = wt[e.primary] ?? wt.slate, l = Ct[e.surface] ?? Ct.neutral, r = l.chroma, s = l.hue, d = St(e) ? {
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
    "--primary": n.value,
    "--primary-foreground": n.foreground,
    "--ring": n.value,
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
    const n = { ...Pe, ...JSON.parse(e) };
    n.theme === "system" && (n.theme = Pe.theme);
    const l = { small: 14, normal: 16, large: 18 };
    return typeof n.fontSize == "string" && (n.fontSize = l[n.fontSize] ?? Pe.fontSize), (typeof n.fontSize != "number" || Number.isNaN(n.fontSize) || n.fontSize < rt || n.fontSize > it) && (n.fontSize = Pe.fontSize), n;
  } catch {
    return { ...Pe };
  }
}
function D4(e) {
  const n = Rt(), l = e ? { ...n, ...e } : n;
  if (Te.value = l, Mt(l), e)
    try {
      localStorage.setItem(Nt, JSON.stringify(l));
    } catch {
    }
}
let ha = null;
function F4(e) {
  ha = e;
}
let ba = {};
function pu(e) {
  if (ba = e, !(typeof document > "u") && !Rt().primaryChosen)
    for (const [n, l] of Object.entries(e))
      document.documentElement.style.setProperty(n, l);
}
function Mt(e) {
  if (typeof document > "u")
    return;
  const n = document.documentElement, l = { ...mu(e), ...e.primaryChosen ? {} : ba };
  n.classList.toggle("dark", St(e));
  for (const [r, s] of Object.entries(l))
    n.style.setProperty(r, s);
  n.dataset.sidebar = e.sidebarSide, n.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      fu,
      JSON.stringify({ dark: St(e), theme: e.theme, vars: l })
    );
  } catch {
  }
}
function xa() {
  function e(r) {
    Mt(r);
  }
  function n(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Te.value = { ...Te.value, ...r, ...s };
    try {
      localStorage.setItem(Nt, JSON.stringify(Te.value));
    } catch {
    }
    e(Te.value), ha?.({ ...r, ...s });
  }
  function l() {
    n({ ...Pe });
  }
  return ge(() => {
    Wt || (Wt = !0, Te.value = Rt(), Mt(Te.value));
  }), {
    appearance: y(() => Te.value),
    set: n,
    reset: l,
    PRIMARY_COLORS: wt,
    SURFACE_TINTS: Ct,
    FONT_SIZE_MIN: rt,
    FONT_SIZE_MAX: it,
    RADIUS_OPTIONS: cu
  };
}
const vu = { class: "flex items-center justify-between border-b px-4 py-3" }, gu = { class: "flex items-center gap-2" }, hu = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, bu = { class: "flex flex-col gap-2" }, xu = { class: "grid grid-cols-8 gap-2" }, yu = ["title", "aria-label", "aria-pressed", "onClick"], ku = { class: "flex flex-col gap-2" }, $u = { class: "grid grid-cols-8 gap-2" }, wu = ["title", "aria-label", "aria-pressed", "onClick"], Cu = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Su = { class: "flex flex-col gap-2" }, Mu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Bu = ["aria-pressed", "aria-label", "onClick"], _u = { class: "text-sm font-semibold" }, Au = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Pu = ["onClick"], zu = { class: "flex flex-col gap-2" }, Ou = { class: "flex items-center justify-between" }, Vu = { class: "text-muted-foreground text-xs tabular-nums" }, ju = { class: "flex items-center gap-2" }, Lu = ["disabled"], Tu = ["min", "max", "value"], Du = ["disabled"], E4 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: n, set: l, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = xa(), u = K(!1), c = y(() => n.value.sidebarSide === "right"), v = [
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
    function S(b, g) {
      return `oklch(0.72 ${g * 3} ${b})`;
    }
    return (b, g) => (t(), a(A, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: g[0] || (g[0] = (m) => u.value = !0)
      }, [...g[7] || (g[7] = [
        At('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(qe, { to: "body" }, [
        D(De, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: V(() => [
            u.value ? (t(), a("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: g[1] || (g[1] = (m) => u.value = !1)
            })) : w("", !0)
          ]),
          _: 1
        }),
        D(De, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": c.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": c.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: V(() => [
            u.value ? (t(), a("aside", {
              key: 0,
              class: z(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", c.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", vu, [
                g[9] || (g[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", gu, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: g[2] || (g[2] = //@ts-ignore
                    (...m) => x(r) && x(r)(...m))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: g[3] || (g[3] = (m) => u.value = !1)
                  }, [...g[8] || (g[8] = [
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
              o("div", hu, [
                o("section", bu, [
                  g[11] || (g[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", xu, [
                    (t(!0), a(A, null, j(x(s), (m, M) => (t(), a("button", {
                      key: M,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: m.value }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": x(n).primary === M,
                      onClick: (_) => x(l)({ primary: M })
                    }, [
                      x(n).primary === M ? (t(), a("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: ne({ color: m.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...g[10] || (g[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : w("", !0)
                    ], 12, yu))), 128))
                  ])
                ]),
                o("section", ku, [
                  g[13] || (g[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", $u, [
                    (t(!0), a(A, null, j(x(i), (m, M) => (t(), a("button", {
                      key: M,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: S(m.hue, m.chroma) }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": x(n).surface === M,
                      onClick: (_) => x(l)({ surface: M })
                    }, [
                      x(n).surface === M ? (t(), a("svg", Cu, [...g[12] || (g[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : w("", !0)
                    ], 12, wu))), 128))
                  ])
                ]),
                o("section", Su, [
                  g[14] || (g[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", Mu, [
                    (t(!0), a(A, null, j(x(d), (m) => (t(), a("button", {
                      key: m,
                      type: "button",
                      class: z([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(n).radius === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": x(n).radius === m,
                      "aria-label": `${m}rem radius`,
                      onClick: (M) => x(l)({ radius: m })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(m, 0.5)}rem` })
                      }, null, 4),
                      R(" " + f(m), 1)
                    ], 10, Bu))), 128))
                  ])
                ]),
                (t(!0), a(A, null, j([
                  { label: "Color scheme", key: "theme", options: v },
                  { label: "Card style", key: "cardStyle", options: h },
                  { label: "Density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: C },
                  { label: "Content layout", key: "contentLayout", options: k },
                  { label: "Menu style", key: "menuStyle", options: $ }
                ], (m) => (t(), a("section", {
                  key: m.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", _u, f(m.label), 1),
                  o("div", Au, [
                    (t(!0), a(A, null, j(m.options, (M) => (t(), a("button", {
                      key: String(M.value),
                      type: "button",
                      class: z([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(n)[m.key] === M.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (_) => x(l)({ [m.key]: M.value })
                    }, f(M.label), 11, Pu))), 128))
                  ])
                ]))), 128)),
                o("section", zu, [
                  o("div", Ou, [
                    g[15] || (g[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", Vu, f(x(n).fontSize) + "px", 1)
                  ]),
                  o("div", ju, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(n).fontSize <= x(rt),
                      "aria-label": "Decrease font size",
                      onClick: g[4] || (g[4] = (m) => x(l)({ fontSize: x(n).fontSize - 1 }))
                    }, " − ", 8, Lu),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: x(rt),
                      max: x(it),
                      value: x(n).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: g[5] || (g[5] = (m) => x(l)({
                        fontSize: Number(m.target.value)
                      }))
                    }, null, 40, Tu),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(n).fontSize >= x(it),
                      "aria-label": "Increase font size",
                      onClick: g[6] || (g[6] = (m) => x(l)({ fontSize: x(n).fontSize + 1 }))
                    }, " + ", 8, Du)
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
}), Fu = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Eu = { class: "flex items-stretch" }, Iu = ["href", "aria-current"], Nu = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ru = ["d"], Uu = { class: "w-full truncate text-center" }, Hu = {
  key: 0,
  class: "flex-1"
}, Ku = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, qu = ["d"], Gu = { class: "w-full truncate text-center" }, gt = 5, I4 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(
      () => l.items.length <= gt ? l.items : l.items.slice(0, gt - 1)
    ), i = y(() => l.items.length > gt);
    function d(u) {
      return u === "/" ? l.current === "/" : l.current === u || l.current.startsWith(`${u}/`);
    }
    return (u, c) => (t(), a("nav", Fu, [
      o("ul", Eu, [
        (t(!0), a(A, null, j(s.value, (v) => (t(), a("li", {
          key: v.key,
          class: "flex-1"
        }, [
          o("a", {
            href: v.href,
            class: z([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(v.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(v.href) ? "page" : void 0
          }, [
            (t(), a("svg", Nu, [
              o("path", {
                d: x(de)(v.icon)
              }, null, 8, Ru)
            ])),
            o("span", Uu, f(v.title), 1)
          ], 10, Iu)
        ]))), 128)),
        i.value ? (t(), a("li", Hu, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: c[0] || (c[0] = (v) => r("more"))
          }, [
            (t(), a("svg", Ku, [
              o("path", {
                d: x(de)("more-horizontal")
              }, null, 8, qu)
            ])),
            o("span", Gu, f(e.moreLabel), 1)
          ])
        ])) : w("", !0)
      ])
    ]));
  }
}), Wu = ["value"], Zu = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", ye = /* @__PURE__ */ O({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n;
    return (s, i) => (t(), a("input", {
      "data-slot": "input",
      value: l.modelValue ?? l.defaultValue,
      class: z([Zu, l.class]),
      onInput: i[0] || (i[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, Wu));
  }
}), Ju = ["for"], Se = /* @__PURE__ */ O({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (n, l) => (t(), a("label", {
      "data-slot": "label",
      for: n.$props.for,
      class: z([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        n.$props.class
      ])
    }, [
      H(n.$slots, "default")
    ], 10, Ju));
  }
}), N4 = /* @__PURE__ */ O({
  __name: "PkSpinner",
  props: {
    class: {}
  },
  setup(e) {
    return (n, l) => (t(), a("svg", {
      role: "status",
      "aria-label": "Loading",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      class: z(["size-4 animate-spin", n.$props.class])
    }, [...l[0] || (l[0] = [
      o("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        class: "opacity-25"
      }, null, -1),
      o("path", { d: "M21 12a9 9 0 0 0-9-9" }, null, -1)
    ])], 2));
  }
}), Yu = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Qu = ["id", "name", "value", "disabled", "maxlength"], Xu = ["data-active"], ec = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, R4 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!1), i = K(null);
    ge(() => {
      l.autofocus && i.value?.focus();
    });
    const d = y(
      () => Array.from({ length: l.length }, (v, p) => l.modelValue[p] ?? "")
    ), u = y(() => Math.min(l.modelValue.length, l.length - 1));
    function c(v) {
      const p = v.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, l.length));
    }
    return (v, p) => (t(), a("div", Yu, [
      o("input", {
        ref_key: "field",
        ref: i,
        id: l.id,
        name: l.name,
        value: l.modelValue,
        disabled: l.disabled,
        inputmode: "numeric",
        autocomplete: "one-time-code",
        maxlength: l.length,
        class: "absolute inset-0 z-10 w-full cursor-default bg-transparent text-transparent caret-transparent outline-none disabled:cursor-not-allowed",
        onInput: c,
        onFocus: p[0] || (p[0] = (h) => s.value = !0),
        onBlur: p[1] || (p[1] = (h) => s.value = !1)
      }, null, 40, Qu),
      (t(!0), a(A, null, j(d.value, (h, C) => (t(), a("div", {
        key: C,
        "data-slot": "input-otp-slot",
        "data-active": s.value && C === u.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        R(f(h) + " ", 1),
        s.value && C === u.value && h === "" ? (t(), a("div", ec, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : w("", !0)
      ], 8, Xu))), 128))
    ]));
  }
}), tc = {
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
    return (n, l) => (t(), a("header", {
      class: z(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: z(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), a("p", tc, f(e.description), 1)) : w("", !0)
    ], 2));
  }
}), ac = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, lc = { class: "min-w-0 space-y-1" }, nc = { class: "flex flex-wrap items-center gap-2.5" }, oc = { class: "text-2xl font-semibold tracking-tight" }, sc = {
  key: 0,
  class: "flex items-center gap-2"
}, rc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, ic = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, U4 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (n, l) => (t(), a("header", ac, [
      o("div", lc, [
        o("div", nc, [
          o("h1", oc, f(e.title), 1),
          n.$slots.status ? (t(), a("div", sc, [
            H(n.$slots, "status")
          ])) : w("", !0)
        ]),
        e.purpose ? (t(), a("p", rc, f(e.purpose), 1)) : w("", !0)
      ]),
      n.$slots.actions ? (t(), a("div", ic, [
        H(n.$slots, "actions")
      ])) : w("", !0)
    ]));
  }
}), dc = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "alert",
      class: z(x(X)(x(fc)({ variant: e.variant }), n.class)),
      role: "alert"
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), uc = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: z(x(X)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), cc = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: z(x(X)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), fc = Lt(
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
), mc = { class: "list-inside list-disc text-sm" }, H4 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const n = e, l = y(() => Array.from(new Set(n.errors)));
    return (r, s) => (t(), T(x(dc), { variant: "destructive" }, {
      default: V(() => [
        D(x(Cl), { class: "size-4" }),
        D(x(cc), null, {
          default: V(() => [
            R(f(e.title), 1)
          ]),
          _: 1
        }),
        D(x(uc), null, {
          default: V(() => [
            o("ul", mc, [
              (t(!0), a(A, null, j(l.value, (i, d) => (t(), a("li", { key: d }, f(i), 1))), 128))
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
  setup(e, { emit: n }) {
    const l = e, s = ma(l, "modelValue", n, {
      passive: !0,
      defaultValue: l.defaultValue
    });
    return (i, d) => me((t(), a("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => La(s) ? s.value = u : null),
      "data-slot": "input",
      class: z(
        x(X)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          l.class
        )
      )
    }, null, 2)), [
      [we, x(s)]
    ]);
  }
}), pc = { class: "relative" }, vc = ["aria-label"], K4 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: n }) {
    const l = e, r = K(!1), s = Ta("inputRef");
    return n({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), a("div", pc, [
      D(x(ya), oe({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: x(X)("pr-10", l.class)
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
        r.value ? (t(), T(x(Sl), {
          key: 0,
          class: "size-4"
        })) : (t(), T(x(Ml), {
          key: 1,
          class: "size-4"
        }))
      ], 10, vc)
    ]));
  }
}), ka = "@container min-w-0", gc = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", q4 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", hc = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3", Ie = "w-full min-w-0 px-4 py-6 sm:px-6", G4 = "w-full min-w-0 p-3 sm:p-4", W4 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", Z4 = "w-full max-w-5xl";
function J4(e, n) {
  const l = Math.max(1, Math.floor(n));
  if (e.length === 0)
    return [];
  if (l === 1)
    return [{ type: "columns", columns: [[...e]] }];
  const r = [];
  let s = [];
  const i = () => {
    if (s.length === 0)
      return;
    const d = Array.from({ length: l }, () => []);
    s.forEach((u, c) => {
      d[c % l].push(u);
    }), r.push({ type: "columns", columns: d }), s = [];
  };
  for (const d of e)
    (d.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
const $a = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", bc = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", xc = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function yc(e) {
  const n = e.name.toLowerCase(), l = e.type.toLowerCase();
  return l === "image/jpeg" || l === "image/jpg" || n.endsWith(".jpg") || n.endsWith(".jpeg");
}
function kc(e) {
  const n = e.name.toLowerCase(), l = e.type.toLowerCase();
  return l === "image/png" || l === "image/webp" || n.endsWith(".png") || n.endsWith(".webp");
}
async function $c(e) {
  const n = URL.createObjectURL(e);
  try {
    const l = await wc(n), r = document.createElement("canvas"), s = Math.max(1, l.naturalWidth), i = Math.max(1, l.naturalHeight);
    r.width = s, r.height = i;
    const d = r.getContext("2d", { willReadFrequently: !0 });
    if (!d)
      return !1;
    d.drawImage(l, 0, 0);
    const { data: u } = d.getImageData(0, 0, s, i);
    for (let c = 3; c < u.length; c += 4)
      if ((u[c] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(n);
  }
}
function wc(e) {
  return new Promise((n, l) => {
    const r = new Image();
    r.onload = () => n(r), r.onerror = () => l(new Error("Could not read that image.")), r.src = e;
  });
}
async function Cc(e) {
  if (yc(e))
    throw new Error(xc);
  if (!kc(e))
    throw new Error($a);
  if (!await $c(e))
    throw new Error(bc);
}
const Y4 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(Ge), oe({ "data-slot": "sheet-close" }, n), {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sc = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class");
    return (r, s) => (t(), T(x(sa), oe({
      "data-slot": "sheet-description",
      class: x(X)("text-muted-foreground text-sm", n.class)
    }, x(l)), {
      default: V(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q4 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: z(x(X)("mt-auto flex flex-col gap-2 p-4", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), Mc = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: z(x(X)("flex flex-col gap-1.5 p-4", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), Bc = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class");
    return (r, s) => (t(), T(x(ra), oe({
      "data-slot": "sheet-title",
      class: x(X)("text-foreground font-semibold", n.class)
    }, x(l)), {
      default: V(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X4 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(ia), oe({ "data-slot": "sheet-trigger" }, n), {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yt = "sidebar_state", _c = 3600 * 24 * 7, Ac = "16rem", Pc = "18rem", zc = "3rem", Oc = "b", [ct, Vc] = Ka("Sidebar"), jc = { class: "flex h-full w-full flex-col" }, Lc = ["data-state", "data-collapsible", "data-variant", "data-side"], Tc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, e5 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, { isMobile: l, state: r, openMobile: s, setOpenMobile: i } = ct();
    return (d, u) => e.collapsible === "none" ? (t(), a("div", oe({
      key: 0,
      "data-slot": "sidebar",
      class: x(X)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        n.class
      )
    }, d.$attrs), [
      H(d.$slots, "default")
    ], 16)) : x(l) ? (t(), T(x(Ft), oe({
      key: 1,
      open: x(s)
    }, d.$attrs, { "onUpdate:open": x(i) }), {
      default: V(() => [
        D(x(Et), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": x(Pc)
          })
        }, {
          default: V(() => [
            D(Mc, { class: "sr-only" }, {
              default: V(() => [
                D(Bc, null, {
                  default: V(() => [...u[0] || (u[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(Sc, null, {
                  default: V(() => [...u[1] || (u[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", jc, [
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
          n.class
        )
      }, d.$attrs), [
        o("div", Tc, [
          H(d.$slots, "default")
        ])
      ], 16)
    ], 8, Lc));
  }
}), t5 = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: z(
        x(X)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          n.class
        )
      )
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), a5 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: z(x(X)("flex flex-col gap-2 p-2", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), l5 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: z(x(X)("relative flex w-full min-w-0 flex-col p-2", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), n5 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(We), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: z(
        x(X)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          n.class
        )
      )
    }, {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), o5 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: z(x(X)("w-full text-sm", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), s5 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(We), {
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
          n.class
        )
      )
    }, {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), r5 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: z(x(X)("flex flex-col gap-2 p-2", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), i5 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(ya), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: z(x(X)("bg-background h-8 w-full shadow-none", n.class))
    }, {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), d5 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("main", {
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
          n.class
        )
      )
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), u5 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: z(x(X)("flex w-full min-w-0 flex-col gap-1", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), c5 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(We), {
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
          n.class
        )
      ),
      as: e.as,
      "as-child": e.asChild
    }, {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), f5 = /* @__PURE__ */ O({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
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
          n.class
        )
      )
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), Dc = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const s = he(e, n);
    return (i, d) => (t(), T(x(qa), oe({ "data-slot": "tooltip" }, x(s)), {
      default: V((u) => [
        H(i.$slots, "default", Be(Le(u)))
      ]),
      _: 3
    }, 16));
  }
}), Fc = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(Ga), null, {
      default: V(() => [
        D(x(Wa), oe({ "data-slot": "tooltip-content" }, { ...x(i), ...d.$attrs }, {
          class: x(X)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            l.class
          )
        }), {
          default: V(() => [
            H(d.$slots, "default"),
            D(x(Za), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), m5 = /* @__PURE__ */ O({
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
    const n = e;
    return (l, r) => (t(), T(x(da), Be(Le(n)), {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ec = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(Ja), oe({ "data-slot": "tooltip-trigger" }, n), {
      default: V(() => [
        H(l.$slots, "default")
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
    const n = e;
    return (l, r) => (t(), T(x(We), oe({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(X)(x(Nc)({ variant: e.variant, size: e.size }), n.class),
      as: e.as,
      "as-child": e.asChild
    }, l.$attrs), {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), p5 = /* @__PURE__ */ O({
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
    const n = e, { isMobile: l, state: r } = ct(), s = ue(n, "tooltip");
    return (i, d) => e.tooltip ? (t(), T(x(Dc), { key: 1 }, {
      default: V(() => [
        D(x(Ec), { "as-child": "" }, {
          default: V(() => [
            D(Qt, Be(Le({ ...x(s), ...i.$attrs })), {
              default: V(() => [
                H(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(x(Fc), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(l)
        }, {
          default: V(() => [
            typeof e.tooltip == "string" ? (t(), a(A, { key: 0 }, [
              R(f(e.tooltip), 1)
            ], 64)) : (t(), T(Ce(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(Qt, Be(oe({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: V(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), v5 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: z(x(X)("group/menu-item relative", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), Xt = "animate-pulse rounded-md bg-primary/10", g5 = /* @__PURE__ */ O({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = y(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), a("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: z(x(X)("flex h-8 items-center gap-2 rounded-md px-2", n.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: z(x(X)(Xt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : w("", !0),
      o("div", {
        class: z(x(X)(Xt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": l.value })
      }, null, 6)
    ], 2));
  }
}), h5 = /* @__PURE__ */ O({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: z(
        x(X)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          n.class
        )
      )
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), b5 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(We), {
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
          n.class
        )
      )
    }, {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), x5 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: z(x(X)("group/menu-sub-item relative", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), y5 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Ll?.cookie.includes(`${Yt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = Vl("(max-width: 767px)"), i = K(!1), d = ma(l, "open", r, {
      defaultValue: l.defaultOpen ?? !1,
      passive: l.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${Yt}=${d.value}; path=/; max-age=${_c}`;
    }
    function c(h) {
      i.value = h;
    }
    function v() {
      return s.value ? c(!i.value) : u(!d.value);
    }
    jl("keydown", (h) => {
      h.key === Oc && (h.metaKey || h.ctrlKey) && (h.preventDefault(), v());
    });
    const p = y(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return Vc({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: c,
      toggleSidebar: v
    }), (h, C) => (t(), T(x(da), { "delay-duration": 0 }, {
      default: V(() => [
        o("div", oe({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(Ac),
            "--sidebar-width-icon": x(zc)
          },
          class: x(X)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            l.class
          )
        }, h.$attrs), [
          H(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), k5 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, { toggleSidebar: l } = ct();
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
          n.class
        )
      ),
      onClick: s[0] || (s[0] = //@ts-ignore
      (...i) => x(l) && x(l)(...i))
    }, [
      H(r.$slots, "default")
    ], 2));
  }
}), Ic = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class");
    return (r, s) => (t(), T(x(Ya), oe({ "data-slot": "separator" }, x(l), {
      class: x(X)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        n.class
      )
    }), null, 16, ["class"]));
  }
}), $5 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(Ic), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: z(x(X)("bg-sidebar-border mx-2 w-auto", n.class))
    }, {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), w5 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, { isMobile: l, state: r, toggleSidebar: s } = ct();
    return (i, d) => (t(), T(re, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: z(x(X)("h-7 w-7", n.class)),
      onClick: x(s)
    }, {
      default: V(() => [
        x(l) || x(r) === "collapsed" ? (t(), T(x(Bl), { key: 0 })) : (t(), T(x(_l), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Nc = Lt(
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
), C5 = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const s = he(e, n);
    return (i, d) => (t(), T(x(Qa), oe({ "data-slot": "dropdown-menu" }, x(s)), {
      default: V((u) => [
        H(i.$slots, "default", Be(Le(u)))
      ]),
      _: 3
    }, 16));
  }
}), Rc = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, S5 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(Xa), oe({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: V(() => [
        o("span", Rc, [
          D(x(ua), null, {
            default: V(() => [
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
}), M5 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(el), null, {
      default: V(() => [
        D(x(tl), oe({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            l.class
          )
        }), {
          default: V(() => [
            H(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), B5 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(al), oe({ "data-slot": "dropdown-menu-group" }, n), {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _5 = /* @__PURE__ */ O({
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
    const n = e, l = ue(n, "inset", "variant", "class"), r = _e(l);
    return (s, i) => (t(), T(x(ll), oe({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, x(r), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: V(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), A5 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const n = e, l = ue(n, "class", "inset"), r = _e(l);
    return (s, i) => (t(), T(x(nl), oe({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(X)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", n.class)
    }), {
      default: V(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), P5 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const s = he(e, n);
    return (i, d) => (t(), T(x(ol), oe({ "data-slot": "dropdown-menu-radio-group" }, x(s)), {
      default: V(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uc = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, z5 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(sl), oe({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: V(() => [
        o("span", Uc, [
          D(x(ua), null, {
            default: V(() => [
              H(d.$slots, "indicator-icon", {}, () => [
                D(x(Al), { class: "size-2 fill-current" })
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
}), O5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class");
    return (r, s) => (t(), T(x(rl), oe({ "data-slot": "dropdown-menu-separator" }, x(l), {
      class: x(X)("bg-border -mx-1 my-1 h-px", n.class)
    }), null, 16, ["class"]));
  }
}), V5 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: z(x(X)("text-muted-foreground ml-auto text-xs tracking-widest", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), j5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const s = he(e, n);
    return (i, d) => (t(), T(x(il), oe({ "data-slot": "dropdown-menu-sub" }, x(s)), {
      default: V((u) => [
        H(i.$slots, "default", Be(Le(u)))
      ]),
      _: 3
    }, 16));
  }
}), L5 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(dl), oe({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(X)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        l.class
      )
    }), {
      default: V(() => [
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), T5 = /* @__PURE__ */ O({
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
    const n = e, l = ue(n, "class", "inset"), r = _e(l);
    return (s, i) => (t(), T(x(ul), oe({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        n.class
      )
    }), {
      default: V(() => [
        H(s.$slots, "default"),
        D(x(fa), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), D5 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = _e(e);
    return (r, s) => (t(), T(x(cl), oe({ "data-slot": "dropdown-menu-trigger" }, x(l)), {
      default: V(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F5 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(fl), {
      "data-slot": "avatar",
      class: z(x(X)("relative flex size-8 shrink-0 overflow-hidden rounded-full", n.class))
    }, {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), E5 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class");
    return (r, s) => (t(), T(x(ml), oe({ "data-slot": "avatar-fallback" }, x(l), {
      class: x(X)("bg-muted flex size-full items-center justify-center rounded-full", n.class)
    }), {
      default: V(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I5 = /* @__PURE__ */ O({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(pl), oe({ "data-slot": "avatar-image" }, n, { class: "aspect-square size-full" }), {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), N5 = /* @__PURE__ */ O({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: z(n.class)
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), R5 = /* @__PURE__ */ O({
  __name: "BreadcrumbEllipsis",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("span", {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      class: z(x(X)("flex size-9 items-center justify-center", n.class))
    }, [
      H(l.$slots, "default", {}, () => [
        D(x(Pl), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), U5 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: z(x(X)("inline-flex items-center gap-1.5", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), H5 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(We), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: z(x(X)("hover:text-foreground transition-colors", n.class))
    }, {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), K5 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: z(
        x(X)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          n.class
        )
      )
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), q5 = /* @__PURE__ */ O({
  __name: "BreadcrumbPage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("span", {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: z(x(X)("text-foreground font-normal", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), G5 = /* @__PURE__ */ O({
  __name: "BreadcrumbSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("li", {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      class: z(x(X)("[&>svg]:size-3.5", n.class))
    }, [
      H(l.$slots, "default", {}, () => [
        D(x(fa))
      ])
    ], 2));
  }
}), Hc = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Kc = /* @__PURE__ */ O({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class"), r = _e(l);
    return (s, i) => (t(), a("div", Hc, [
      D(x(vl), oe({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(X)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          n.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), W5 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class", "viewport"), i = he(s, r);
    return (d, u) => (t(), T(x(gl), oe({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(X)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        l.class
      )
    }), {
      default: V((c) => [
        H(d.$slots, "default", Be(Le(c))),
        e.viewport ? (t(), T(Kc, { key: 0 })) : w("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), Z5 = /* @__PURE__ */ O({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(hl), oe({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(X)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        l.class
      )
    }), {
      default: V(() => [
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J5 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class"), r = _e(l);
    return (s, i) => (t(), T(x(bl), oe({ "data-slot": "navigation-menu-indicator" }, x(r), {
      class: x(X)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        n.class
      )
    }), {
      default: V(() => [...i[0] || (i[0] = [
        o("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), Y5 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class");
    return (r, s) => (t(), T(x(xl), oe({ "data-slot": "navigation-menu-item" }, x(l), {
      class: x(X)("relative", n.class)
    }), {
      default: V(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q5 = /* @__PURE__ */ O({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(yl), oe({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(X)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: V(() => [
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X5 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class"), r = _e(l);
    return (s, i) => (t(), T(x(kl), oe({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(X)("group flex flex-1 list-none items-center justify-center gap-1", n.class)
    }), {
      default: V(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e3 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class"), r = _e(l);
    return (s, i) => (t(), T(x($l), oe({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(X)(x(qc)(), "group", n.class)
    }), {
      default: V(() => [
        H(s.$slots, "default"),
        D(x(zl), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qc = Lt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), t3 = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const s = he(e, n);
    return (i, d) => (t(), T(x(oa), oe({ "data-slot": "dialog" }, x(s)), {
      default: V((u) => [
        H(i.$slots, "default", Be(Le(u)))
      ]),
      _: 3
    }, 16));
  }
}), a3 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(Ge), oe({ "data-slot": "dialog-close" }, n), {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gc = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class");
    return (r, s) => (t(), T(x(zt), oe({ "data-slot": "dialog-overlay" }, x(l), {
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        n.class
      )
    }), {
      default: V(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l3 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(Ot), null, {
      default: V(() => [
        D(Gc),
        D(x(Vt), oe({ "data-slot": "dialog-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            l.class
          )
        }), {
          default: V(() => [
            H(d.$slots, "default"),
            e.showCloseButton ? (t(), T(x(Ge), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: V(() => [
                D(x(jt)),
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
}), n3 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class"), r = _e(l);
    return (s, i) => (t(), T(x(sa), oe({ "data-slot": "dialog-description" }, x(r), {
      class: x(X)("text-muted-foreground text-sm", n.class)
    }), {
      default: V(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o3 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: z(x(X)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", n.class))
    }, [
      H(l.$slots, "default"),
      e.showCloseButton ? (t(), T(x(Ge), {
        key: 0,
        "as-child": ""
      }, {
        default: V(() => [
          D(re, { variant: "outline" }, {
            default: V(() => [...r[0] || (r[0] = [
              R(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : w("", !0)
    ], 2));
  }
}), s3 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: z(x(X)("flex flex-col gap-2 text-center sm:text-left", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), r3 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = ue(l, "class"), i = he(s, r);
    return (d, u) => (t(), T(x(Ot), null, {
      default: V(() => [
        D(x(zt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: V(() => [
            D(x(Vt), oe({
              class: x(X)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                l.class
              )
            }, { ...d.$attrs, ...x(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (c) => {
                const v = c.detail.originalEvent, p = v.target;
                (v.offsetX > p.clientWidth || v.offsetY > p.clientHeight) && c.preventDefault();
              })
            }), {
              default: V(() => [
                H(d.$slots, "default"),
                D(x(Ge), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: V(() => [
                    D(x(jt), { class: "w-4 h-4" }),
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
}), i3 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class"), r = _e(l);
    return (s, i) => (t(), T(x(ra), oe({ "data-slot": "dialog-title" }, x(r), {
      class: x(X)("text-lg leading-none font-semibold", n.class)
    }), {
      default: V(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d3 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(ia), oe({ "data-slot": "dialog-trigger" }, n), {
      default: V(() => [
        H(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u3 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = ue(n, "class");
    return (r, s) => (t(), T(x(wl), oe({ "data-slot": "label" }, x(l), {
      class: x(X)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        n.class
      )
    }), {
      default: V(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c3 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), T(x(Ol), {
      role: "status",
      "aria-label": "Loading",
      class: z(x(X)("size-4 animate-spin", n.class))
    }, null, 8, ["class"]));
  }
}), f3 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "card",
      class: z(
        x(X)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          n.class
        )
      )
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), m3 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: z(x(X)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), p3 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: z(x(X)("px-6", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), v3 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: z(x(X)("text-muted-foreground text-sm", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), g3 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: z(x(X)("flex items-center px-6 [.border-t]:pt-6", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), h3 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: z(
        x(X)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          n.class
        )
      )
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), b3 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: z(x(X)("leading-none font-semibold", n.class))
    }, [
      H(l.$slots, "default")
    ], 2));
  }
}), Wc = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Zc = { class: "flex items-start gap-3" }, Jc = { class: "min-w-0 flex-1" }, Yc = { class: "text-foreground text-sm font-medium" }, Qc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, x3 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: n, emit: l }) {
    const r = e, s = l, i = K(!1), d = K(null), u = K(0);
    Da((v) => (console.error(`[PkBoundary] ${r.label} failed to render`, v), i.value = !0, d.value = v instanceof Error ? v.message : null, s("error", v), !1));
    function c() {
      i.value = !1, d.value = null, u.value++;
    }
    return n({ retry: c }), (v, p) => (t(), a("div", {
      class: z(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", Wc, [
        o("div", Zc, [
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
          o("div", Jc, [
            o("p", Yc, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), a("p", Qc, f(d.value), 1)) : w("", !0),
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
      ])) : i.value ? w("", !0) : H(v.$slots, "default", { key: u.value })
    ], 2));
  }
}), Xc = { class: "bg-card rounded-lg border" }, ef = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, tf = { class: "min-w-0" }, af = {
  key: 0,
  class: "truncate text-sm font-medium"
}, lf = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, nf = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, of = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, y3 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (n, l) => (t(), a("section", Xc, [
      e.title || e.description || n.$slots.header || n.$slots.actions ? (t(), a("header", ef, [
        o("div", tf, [
          H(n.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", af, f(e.title), 1)) : w("", !0),
            e.description ? (t(), a("p", lf, f(e.description), 1)) : w("", !0)
          ])
        ]),
        n.$slots.actions ? (t(), a("div", nf, [
          H(n.$slots, "actions")
        ])) : w("", !0)
      ])) : w("", !0),
      o("div", {
        class: z(e.padded ? "p-4" : "")
      }, [
        H(n.$slots, "default")
      ], 2),
      n.$slots.footer ? (t(), a("footer", of, [
        H(n.$slots, "footer")
      ])) : w("", !0)
    ]));
  }
}), wa = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function k3() {
  const e = pa(), n = y(() => e.props.panel?.pageFooter === !0);
  return kt(wa, n), n;
}
const sf = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, rf = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, df = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, $3 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const n = e, l = pa(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => l.props.panel?.brand || l.props.panelBrand || l.props.name || "Panel"), i = y(() => {
      const c = l.props.panel;
      return Array.isArray(c?.footerLinks) ? c.footerLinks : [];
    }), d = st(wa, y(() => !1)), u = y(() => !n.host && x(d) === !0);
    return (c, v) => u.value ? w("", !0) : (t(), a("footer", sf, [
      o("div", rf, [
        o("p", null, "© " + f(x(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), a("nav", df, [
          (t(!0), a(A, null, j(i.value, (p) => (t(), T(x(Fl), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: V(() => [
              R(f(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : w("", !0)
      ])
    ]));
  }
}), uf = { class: "flex shrink-0 flex-col items-center" }, cf = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, w3 = /* @__PURE__ */ O({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const n = e, l = y(() => n.kind === "laptop"), r = y(
      () => l.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = y(() => l.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), a("div", uf, [
      o("div", {
        class: z(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !l.value ? (t(), a("div", cf)) : w("", !0),
        o("div", {
          class: z(["size-full overflow-hidden bg-white", s.value])
        }, [
          H(i.$slots, "default")
        ], 2)
      ], 6),
      l.value ? (t(), a(A, { key: 0 }, [
        o("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: ne({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        o("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: ne({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : w("", !0)
    ]));
  }
}), ff = { class: "flex flex-col gap-2" }, mf = { class: "min-w-0 flex-1" }, pf = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, vf = ["disabled", "aria-label", "onClick"], gf = ["disabled", "aria-label", "onClick"], hf = ["disabled", "title", "aria-label", "onClick"], bf = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, xf = ["disabled"], C3 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n;
    let s = 0;
    const i = K(d(l.modelValue));
    function d(g) {
      return Array.isArray(g) ? g.map((m) => ({ uid: s++, data: { ...m } })) : [];
    }
    ce(
      () => l.modelValue,
      (g) => {
        JSON.stringify(g ?? null) !== JSON.stringify(u()) && (i.value = d(g));
      }
    );
    function u() {
      const g = [];
      for (const m of i.value) {
        const M = {};
        let _ = !1;
        for (const P of l.children) {
          const N = m.data[P.key] ?? null;
          M[P.key] = N, N !== null && N !== "" && !(Array.isArray(N) && N.length === 0) && (_ = !0);
        }
        _ && g.push(M);
      }
      return g.length ? g : null;
    }
    function c() {
      r("update:modelValue", u());
    }
    const v = y(() => l.maxItems !== null && i.value.length >= l.maxItems), p = y(() => l.minItems !== null && i.value.length <= l.minItems), h = y(() => l.children.length === 1);
    function C() {
      if (v.value || l.disabled)
        return;
      const g = {};
      for (const m of l.children)
        g[m.key] = null;
      i.value.push({ uid: s++, data: g });
    }
    function k(g) {
      i.value = i.value.filter((m) => m.uid !== g), c();
    }
    function $(g, m) {
      const M = g + m;
      if (M < 0 || M >= i.value.length)
        return;
      const _ = [...i.value], [P] = _.splice(g, 1);
      _.splice(M, 0, P), i.value = _, c();
    }
    function S(g, m, M) {
      const _ = i.value.find((P) => P.uid === g);
      _ && (_.data[m] = M, c());
    }
    function b(g, m) {
      return l.errors[`${l.fieldKey}.${g}.${m}`];
    }
    return (g, m) => (t(), a("div", ff, [
      (t(!0), a(A, null, j(i.value, (M, _) => (t(), a("div", {
        key: M.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: z(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(_ + 1), 3),
        o("div", mf, [
          h.value ? (t(), T(Ke, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: M.data[e.children[0].key],
            error: b(_, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (P) => S(M.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", pf, [
            (t(!0), a(A, null, j(e.children, (P) => (t(), T(Ke, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: M.data[P.key],
              error: b(_, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (N) => S(M.uid, P.key, N)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: z(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || _ === 0,
            "aria-label": `Move ${e.itemLabel} ${_ + 1} up`,
            onClick: (P) => $(_, -1)
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
          ])], 8, vf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || _ === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${_ + 1} down`,
            onClick: (P) => $(_, 1)
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
          ])], 8, gf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${_ + 1}`,
            onClick: (P) => k(M.uid)
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
          ])], 8, hf)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", bf, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : w("", !0),
      v.value ? w("", !0) : (t(), a("button", {
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
      ], 8, xf))
    ]));
  }
}), yf = { class: "space-y-1" }, kf = { class: "flex items-center gap-1" }, $f = ["disabled", "title", "aria-label", "onClick"], wf = ["aria-pressed"], Cf = ["id", "value", "rows", "disabled"], Sf = ["innerHTML"], Mf = /* @__PURE__ */ O({
  __name: "PkMarkdownInput",
  props: {
    modelValue: { default: "" },
    rows: { default: 12 },
    toolbar: {},
    disabled: { type: Boolean, default: !1 },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!1), i = y(() => l.modelValue ?? "");
    function d(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = y(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function c(h, C = h) {
      const k = document.getElementById(l.id ?? "");
      if (k === null)
        return;
      const $ = k.selectionStart, S = k.selectionEnd, b = i.value.slice($, S);
      r(
        "update:modelValue",
        `${i.value.slice(0, $)}${h}${b}${C}${i.value.slice(S)}`
      );
    }
    const v = {
      bold: { label: "B", run: () => c("**") },
      italic: { label: "I", run: () => c("*") },
      code: { label: "</>", run: () => c("`") },
      heading: { label: "H", run: () => c("## ", "") },
      list: { label: "•", run: () => c("- ", "") },
      link: { label: "🔗", run: () => c("[", "](https://)") }
    }, p = y(
      () => (l.toolbar ?? Object.keys(v)).filter((h) => h in v)
    );
    return (h, C) => (t(), a("div", yf, [
      o("div", kf, [
        (t(!0), a(A, null, j(p.value, (k) => (t(), a("button", {
          key: k,
          type: "button",
          disabled: e.disabled,
          title: k,
          "aria-label": k,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: ($) => v[k].run()
        }, f(v[k].label), 9, $f))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (k) => s.value = !s.value)
        }, " Preview ", 8, wf)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Sf)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = (k) => r("update:modelValue", k.target.value))
      }, null, 40, Cf))
    ]));
  }
}), Bf = { class: "space-y-1" }, _f = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Af = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Pf = ["id", "value", "rows", "disabled"], zf = { class: "text-muted-foreground text-xs" }, Of = {
  key: 0,
  class: "text-destructive text-xs"
}, Vf = /* @__PURE__ */ O({
  __name: "PkCodeInput",
  props: {
    modelValue: { default: "" },
    language: { default: "plain" },
    rows: { default: 14 },
    disabled: { type: Boolean, default: !1 },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(!0), d = y(() => l.modelValue ?? ""), u = y(() => Math.max(d.value.split(`
`).length, 1)), c = y(() => {
      if (l.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (h) {
        return h instanceof Error ? h.message : "Not valid JSON.";
      }
    });
    function v(h) {
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
    return (h, C) => (t(), a("div", Bf, [
      o("div", _f, [
        o("div", Af, [
          (t(!0), a(A, null, j(u.value, (k) => (t(), a("div", { key: k }, f(k), 1))), 128))
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
          onKeydown: p
        }, null, 40, Pf)
      ]),
      o("p", zf, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      c.value ? (t(), a("p", Of, f(c.value), 1)) : w("", !0)
    ]));
  }
}), jf = { class: "space-y-3" }, Lf = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Tf = { class: "text-sm font-medium" }, Df = { class: "flex items-center gap-1" }, Ff = ["disabled", "onClick"], Ef = ["disabled", "onClick"], If = ["disabled", "onClick"], Nf = { class: "space-y-3 p-3" }, Rf = { class: "flex flex-wrap items-center gap-2" }, Uf = ["disabled", "onClick"], Hf = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, S3 = /* @__PURE__ */ O({
  __name: "PkBuilder",
  props: {
    modelValue: { default: null },
    blocks: { default: () => [] },
    maxBlocks: { default: null },
    disabled: { type: Boolean, default: !1 },
    errors: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(() => l.modelValue ?? []), i = y(
      () => Object.fromEntries(l.blocks.map((C) => [C.type, C]))
    ), d = y(() => l.maxBlocks !== null && s.value.length >= l.maxBlocks);
    function u(C) {
      r("update:modelValue", C);
    }
    function c(C) {
      d.value || u([...s.value, { type: C, data: {} }]);
    }
    function v(C) {
      u(s.value.filter((k, $) => $ !== C));
    }
    function p(C, k) {
      const $ = C + k;
      if ($ < 0 || $ >= s.value.length)
        return;
      const S = [...s.value], [b] = S.splice(C, 1);
      S.splice($, 0, b), u(S);
    }
    function h(C, k, $) {
      u(
        s.value.map(
          (S, b) => b === C ? { ...S, data: { ...S.data, [k]: $ } } : S
        )
      );
    }
    return (C, k) => (t(), a("div", jf, [
      (t(!0), a(A, null, j(s.value, ($, S) => (t(), a("div", {
        key: `${$.type}-${S}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Lf, [
          o("span", Tf, f(i.value[$.type]?.label ?? $.type), 1),
          o("div", Df, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === 0,
              "aria-label": "Move up",
              onClick: (b) => p(S, -1)
            }, " ↑ ", 8, Ff),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (b) => p(S, 1)
            }, " ↓ ", 8, Ef),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (b) => v(S)
            }, " Remove ", 8, If)
          ])
        ]),
        o("div", Nf, [
          (t(!0), a(A, null, j(i.value[$.type]?.fields ?? [], (b) => (t(), T(Ke, {
            key: b.key,
            field: b,
            value: $.data[b.key] ?? null,
            error: e.errors?.[b.key],
            processing: e.disabled,
            onChange: (g) => h(S, b.key, g)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Rf, [
        (t(!0), a(A, null, j(e.blocks, ($) => (t(), a("button", {
          key: $.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (S) => c($.type)
        }, " + " + f($.label), 9, Uf))), 128)),
        d.value ? (t(), a("span", Hf, f(e.maxBlocks) + " is the maximum here. ", 1)) : w("", !0)
      ])
    ]));
  }
}), Kf = ["name", "value", "checked", "disabled", "onChange"], qf = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Gf = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkRadioGroup",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n;
    function s(i) {
      return l.modelValue != null && i.value == l.modelValue;
    }
    return (i, d) => (t(), a("div", {
      role: "radiogroup",
      class: z(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(A, null, j(e.options, (u) => (t(), a("label", {
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
        }, null, 40, Kf),
        R(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", qf, " Nothing to choose from yet. ")) : w("", !0)
    ], 2));
  }
}), Wf = ["value", "checked", "disabled", "onChange"], Zf = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Jf = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkCheckboxList",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(
      () => Array.isArray(l.modelValue) ? l.modelValue : []
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
      () => l.field.columns && l.field.columns > 1 ? { gridTemplateColumns: `repeat(${l.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (c, v) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(u.value)
    }, [
      (t(!0), a(A, null, j(e.options, (p) => (t(), a("label", {
        key: String(p.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (h) => d(p)
        }, null, 40, Wf),
        R(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Zf, " Nothing to choose from yet. ")) : w("", !0)
    ], 4));
  }
}), Yf = { class: "flex flex-col gap-1.5" }, Qf = ["aria-label", "onClick"], Xf = ["placeholder", "disabled", "maxlength"], em = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, tm = ["onClick"], am = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, lm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(""), i = y(
      () => Array.isArray(l.modelValue) ? l.modelValue : []
    ), d = y(() => i.value.length >= (l.field.max ?? 25)), u = y(
      () => (l.field.suggestions ?? []).filter(
        (h) => !i.value.some((C) => C.toLowerCase() === h.toLowerCase())
      )
    );
    function c(h) {
      const C = h.trim().slice(0, l.field.maxLength ?? 40);
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
    function v(h) {
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
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && v(i.value.length - 1);
    }
    return (h, C) => (t(), a("div", Yf, [
      o("div", {
        class: z(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(A, null, j(i.value, (k, $) => (t(), a("span", {
          key: `${k}-${$}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          R(f(k) + " ", 1),
          e.disabled ? w("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${k}`,
            onClick: (S) => v($)
          }, " × ", 8, Qf))
        ]))), 128)),
        me(o("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (k) => s.value = k),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: C[1] || (C[1] = (k) => c(s.value))
        }, null, 40, Xf), [
          [we, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), a("div", em, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(A, null, j(u.value, (k) => (t(), a("button", {
          key: k,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: ($) => c(k)
        }, f(k), 9, tm))), 128))
      ])) : w("", !0),
      d.value ? (t(), a("p", am, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : w("", !0)
    ]));
  }
}), nm = 4.5, ea = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Ca(e) {
  let n = e.replace("#", "");
  return n.length === 3 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}
function ht(e) {
  const n = e / 255;
  return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
}
function Bt(e) {
  const [n, l, r] = Ca(e);
  return 0.2126 * ht(n) + 0.7152 * ht(l) + 0.0722 * ht(r);
}
function Sa(e, n) {
  const l = Bt(e), r = Bt(n);
  return (Math.max(l, r) + 0.05) / (Math.min(l, r) + 0.05);
}
function om(e, n, l) {
  if (!ea.test(e) || !ea.test(n))
    return e;
  const r = Bt(n) > 0.5, s = r ? 0 : 255;
  let i = Ca(e);
  for (let d = 0; d <= 20; d++) {
    const u = sm(i);
    if (Sa(u, n) >= l)
      return u;
    i = i.map((c) => c + (s - c) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function sm(e) {
  return "#" + e.map(
    (n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")
  ).join("");
}
const rm = { class: "flex flex-col gap-2" }, im = { class: "flex items-center gap-2" }, dm = {
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
}, um = ["value", "disabled", "aria-label"], cm = ["value", "disabled", "placeholder"], fm = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, mm = ["aria-label", "title", "onClick"], pm = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, vm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = y(() => typeof l.modelValue == "string" ? l.modelValue : ""), d = y(() => s.test(i.value));
    function u(k) {
      const $ = k.trim();
      if ($ === "")
        return "";
      const S = $.startsWith("#") ? $ : `#${$}`;
      return s.test(S) ? S.toLowerCase() : $;
    }
    function c(k) {
      r("update:modelValue", u(k.target.value));
    }
    const v = y(() => !d.value || !l.field.contrastBackground || !s.test(l.field.contrastBackground) ? null : Sa(i.value, l.field.contrastBackground)), p = y(() => l.field.contrastMinRatio ?? nm), h = y(() => v.value !== null && v.value < p.value);
    function C() {
      l.field.contrastBackground && r(
        "update:modelValue",
        om(i.value, l.field.contrastBackground, p.value)
      );
    }
    return (k, $) => (t(), a("div", rm, [
      o("div", im, [
        d.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: $[0] || ($[0] = (S) => r("update:modelValue", S.target.value))
        }, null, 40, um)) : (t(), a("span", dm)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: c
        }, null, 40, cm)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", fm, [
        (t(!0), a(A, null, j(e.field.presets, (S) => (t(), a("button", {
          key: S,
          type: "button",
          class: z(["size-6 rounded border", i.value.toLowerCase() === S.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: S }),
          "aria-label": S,
          title: S,
          onClick: (b) => r("update:modelValue", S.toLowerCase())
        }, null, 14, mm))), 128))
      ])) : w("", !0),
      h.value ? (t(), a("p", pm, [
        o("span", null, " This fails contrast at " + f(v.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? w("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : w("", !0)
    ]));
  }
}), gm = ["aria-disabled"], hm = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null);
    let i = null, d = null, u = null;
    const c = y(() => {
      const C = l.modelValue?.[l.latKey], k = l.modelValue?.[l.lngKey];
      return typeof C == "number" && typeof k == "number" ? { lat: C, lng: k } : l.center ? l.center : l.markers.length > 0 ? { lat: l.markers[0].lat, lng: l.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function v() {
      if (!s.value || i)
        return;
      const C = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = C, i = C.map(s.value).setView([c.value.lat, c.value.lng], l.zoom), C.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), p(), h(), l.pickable && !l.disabled && i.on("click", (k) => {
        r("update:modelValue", {
          [l.latKey]: Number(k.latlng.lat.toFixed(6)),
          [l.lngKey]: Number(k.latlng.lng.toFixed(6))
        });
      });
    }
    function p() {
      if (!(!i || !u))
        for (const C of l.markers) {
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
      const C = l.modelValue?.[l.latKey], k = l.modelValue?.[l.lngKey];
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
    return ge(() => {
      v();
    }), xe(() => {
      i?.remove(), i = null, d = null;
    }), ce(
      () => l.modelValue,
      () => h(),
      { deep: !0 }
    ), (C, k) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: ne({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, gm));
  }
}), bm = { class: "flex flex-col gap-2" }, xm = { class: "text-muted-foreground text-xs" }, ym = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkMapField",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(() => l.modelValue && typeof l.modelValue == "object" ? l.modelValue : null), i = y(() => l.field.latKey ?? "lat"), d = y(() => l.field.lngKey ?? "lng");
    return (u, c) => (t(), a("div", bm, [
      D(hm, {
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
      o("p", xm, [
        R(" Click the map to set " + f(i.value) + " / " + f(d.value) + " ", 1),
        s.value ? (t(), a(A, { key: 0 }, [
          R(" (" + f(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + f(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : w("", !0)
      ])
    ]));
  }
}), km = { class: "flex flex-col gap-2" }, $m = ["width", "height"], wm = ["value", "disabled"], Cm = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Sm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkQrCode",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    values: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = y(() => {
      if (l.field.from) {
        const c = l.values?.[l.field.from];
        return c == null ? "" : String(c);
      }
      return l.modelValue == null ? "" : String(l.modelValue);
    }), d = y(() => l.field.size ?? 160);
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
    }), (c, v) => (t(), a("div", km, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, $m),
      e.field.from ? (t(), a("p", Cm, "From " + f(e.field.from), 1)) : (t(), a("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: v[0] || (v[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, wm))
    ]));
  }
}), Mm = { class: "flex flex-col gap-2" }, Bm = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, _m = ["aria-label"], Am = {
  key: 0,
  class: "text-destructive text-xs"
}, Pm = ["value", "disabled"], zm = {
  key: 2,
  class: "text-muted-foreground text-xs"
}, Om = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkBarcode",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    values: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(null), d = y(() => {
      if (l.field.from) {
        const v = l.values?.[l.field.from];
        return v == null ? "" : String(v);
      }
      return l.modelValue == null ? "" : String(l.modelValue);
    }), u = y(() => (l.field.format ?? "CODE128").toUpperCase());
    async function c() {
      if (!s.value)
        return;
      const v = d.value.trim();
      for (i.value = null; s.value.firstChild; )
        s.value.removeChild(s.value.firstChild);
      if (v !== "")
        try {
          const h = (await import("jsbarcode")).default;
          h(s.value, v, {
            format: u.value,
            height: l.field.height ?? 80,
            width: l.field.width ?? 2,
            displayValue: l.field.displayValue !== !1,
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
    }), (v, p) => (t(), a("div", Mm, [
      o("div", Bm, [
        (t(), a("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, _m))
      ]),
      i.value ? (t(), a("p", Am, f(i.value), 1)) : w("", !0),
      e.field.from ? (t(), a("p", zm, "From " + f(e.field.from) + " (" + f(u.value) + ")", 1)) : (t(), a("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, Pm))
    ]));
  }
}), Vm = { class: "mr-2 inline-block w-3 opacity-60" }, jm = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Lm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkDiff",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    values: { default: () => ({}) }
  },
  setup(e) {
    const n = e;
    function l(d) {
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
      if (n.field.originalKey)
        return l(n.values?.[n.field.originalKey]);
      const d = n.modelValue;
      return l(d?.original);
    }), s = y(() => {
      if (n.field.modifiedKey)
        return l(n.values?.[n.field.modifiedKey]);
      const d = n.modelValue;
      return l(d?.modified);
    }), i = y(() => {
      const d = r.value.split(`
`), u = s.value.split(`
`), c = Math.max(d.length, u.length), v = [];
      for (let p = 0; p < c; p++) {
        const h = d[p], C = u[p];
        if (h === C) {
          h !== void 0 && v.push({ kind: "same", text: h });
          continue;
        }
        h !== void 0 && v.push({ kind: "del", text: h }), C !== void 0 && v.push({ kind: "add", text: C });
      }
      return v;
    });
    return (d, u) => (t(), a("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: ne({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), a(A, null, j(i.value, (c, v) => (t(), a("div", {
        key: v,
        class: z(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": c.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": c.kind === "add",
          "text-muted-foreground": c.kind === "same"
        }])
      }, [
        o("span", Vm, f(c.kind === "add" ? "+" : c.kind === "del" ? "-" : " "), 1),
        R(" " + f(c.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), a("p", jm, "No differences.")) : w("", !0)
    ], 4));
  }
}), Tm = { class: "flex flex-col gap-3" }, Dm = { class: "flex items-center justify-between gap-2" }, Fm = { class: "text-sm font-medium" }, Em = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, Im = { class: "grid grid-cols-7 gap-1" }, Nm = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, Rm = ["title"], M3 = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const n = e, l = K(/* @__PURE__ */ new Date()), r = y(() => l.value.getFullYear()), s = y(() => l.value.getMonth()), i = y(
      () => l.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = y(() => {
      const p = /* @__PURE__ */ new Map();
      for (const h of n.events ?? []) {
        const C = p.get(h.date) ?? [];
        C.push(h), p.set(h.date, C);
      }
      return p;
    }), u = y(() => {
      const h = new Date(r.value, s.value, 1).getDay(), C = new Date(r.value, s.value + 1, 0).getDate(), k = [];
      for (let $ = 0; $ < h; $++)
        k.push({ day: null, key: `pad-${$}`, events: [] });
      for (let $ = 1; $ <= C; $++) {
        const S = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String($).padStart(2, "0")}`;
        k.push({ day: $, key: S, events: d.value.get(S) ?? [] });
      }
      return k;
    });
    function c() {
      l.value = new Date(r.value, s.value - 1, 1);
    }
    function v() {
      l.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, h) => (t(), a("div", Tm, [
      o("div", Dm, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: c
        }, " Prev "),
        o("p", Fm, f(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: v
        }, " Next ")
      ]),
      o("div", Em, [
        (t(), a(A, null, j(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, f(C), 1)), 64))
      ]),
      o("div", Im, [
        (t(!0), a(A, null, j(u.value, (C) => (t(), a("div", {
          key: C.key,
          class: z(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), a("p", Nm, f(C.day), 1)) : w("", !0),
          (t(!0), a(A, null, j(C.events.slice(0, 3), (k, $) => (t(), a("p", {
            key: `${C.key}-${$}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: k.label
          }, f(k.label), 9, Rm))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Um = { class: "flex items-center gap-3" }, Hm = ["min", "max", "step", "value", "disabled", "aria-label"], Km = { class: "flex shrink-0 items-center gap-1" }, qm = ["min", "max", "step", "value", "disabled"], Gm = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Wm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(() => l.field.min ?? 0), i = y(() => l.field.max ?? 100), d = y(() => l.field.step ?? 1), u = y(() => {
      const p = Number(l.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), c = y(
      () => l.modelValue === null || l.modelValue === void 0 || l.modelValue === ""
    );
    function v(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(p);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (p, h) => (t(), a("div", Um, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (C) => v(C.target.value))
      }, null, 40, Hm),
      o("div", Km, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: c.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (C) => v(C.target.value))
        }, null, 40, qm),
        e.field.unit ? (t(), a("span", Gm, f(e.field.unit), 1)) : w("", !0)
      ])
    ]));
  }
}), at = /* @__PURE__ */ new Map();
function bt(e, n) {
  at.set(e, n);
}
function Zm(e) {
  return at.get(e);
}
function B3(e) {
  return at.has(e);
}
function Jm() {
  return [...at.keys()].sort();
}
function _3() {
  at.clear();
}
const Ym = ["name", "value", "checked", "disabled", "onChange"], Qm = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Xm = { class: "whitespace-nowrap" }, ep = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, tp = ["name", "value", "checked", "disabled", "onChange"], ap = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, lp = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, np = { class: "text-center text-xs font-medium" }, op = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, sp = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, rp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkVisualSelect",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(
      () => l.field.preview ? Zm(l.field.preview) : void 0
    ), i = y(() => !!l.field.preview && !s.value), d = y(() => l.field.layout === "segmented"), u = y(() => {
      switch (l.field.columns ?? 3) {
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
      return l.modelValue != null && v.value == l.modelValue;
    }
    return (v, p) => d.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: z(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(A, null, j(e.options, (h) => (t(), a("label", {
        key: String(h.value),
        class: z(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
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
        }, null, 40, Ym),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", Qm, [
          (t(), T(Ce(s.value), {
            value: h.value,
            label: h.label,
            selected: c(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : w("", !0),
        o("span", Xm, f(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", ep, " Nothing to choose from yet. ")) : w("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: z(["grid gap-3", u.value])
    }, [
      (t(!0), a(A, null, j(e.options, (h) => (t(), a("label", {
        key: String(h.value),
        class: z(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
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
        }, null, 40, tp),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", ap, [
          s.value ? (t(), T(Ce(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: c(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", lp, " no preview ")) : w("", !0)
        ]),
        o("span", np, f(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", op, " Nothing to choose from yet. ")) : w("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", sp, [
        p[2] || (p[2] = R(" No preview registered for ", -1)),
        o("code", null, f(e.field.preview), 1),
        R(". Registered: " + f(x(Jm)().join(", ") || "none") + ". ", 1)
      ])) : w("", !0)
    ], 2));
  }
}), ip = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, dp = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (n, l) => (t(), a("span", ip, [
      o("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), up = { class: "flex flex-col items-center gap-1 text-center" }, cp = {
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
    const n = e, l = y(() => n.mono ? "#000000" : n.accent), r = y(() => {
      switch (n.style) {
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
    return (s, i) => (t(), a("div", up, [
      o("div", {
        class: z(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: l.value, color: l.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", cp, f(e.caption), 1)) : w("", !0)
    ]));
  }
}), fp = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, mp = { class: "flex items-center gap-3" }, pp = ["src"], vp = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, gp = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, hp = {
  key: 0,
  class: "text-right text-sm"
}, bp = { class: "text-neutral-500" }, xp = { class: "tabular-nums" }, yp = { key: 1 }, kp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, $p = { class: "mt-2 font-medium" }, wp = { key: 2 }, Cp = { class: "w-full text-sm" }, Sp = { class: "w-full py-3 pr-2" }, Mp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Bp = { key: 0 }, _p = ["colspan"], Ap = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Pp = { class: "w-64 text-sm" }, zp = { class: "tabular-nums" }, Op = {
  key: 3,
  class: "py-2"
}, Vp = { key: 4 }, jp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Lp = { class: "mt-2 flex flex-col gap-1 text-sm" }, Tp = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Dp = { key: 0 }, Fp = {
  key: 1,
  class: "mt-1"
}, Ep = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Ip = /* @__PURE__ */ O({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const n = e;
    function l() {
      return n.document.branding.mono ? "#000000" : n.document.branding.accent;
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
    return (c, v) => (t(), a("article", fp, [
      o("div", mp, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, pp)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: l() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), a(A, null, j(e.document.blocks, (p, h) => (t(), a(A, { key: h }, [
        p.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ne({ borderColor: l() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ne({ color: l() })
            }, f(p.title), 5),
            p.subtitle ? (t(), a("p", vp, f(p.subtitle), 1)) : w("", !0),
            p.reference ? (t(), a("p", gp, f(p.reference), 1)) : w("", !0)
          ]),
          r(p).length ? (t(), a("dl", hp, [
            (t(!0), a(A, null, j(r(p), (C, k) => (t(), a("div", {
              key: k,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", bp, f(C.label), 1),
              o("dd", xp, f(C.value), 1)
            ]))), 128))
          ])) : w("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", yp, [
          o("h2", kp, f(p.heading), 1),
          o("p", $p, f(p.name), 1),
          (t(!0), a(A, null, j(d(p.lines), (C, k) => (t(), a("p", {
            key: k,
            class: "text-sm text-neutral-600"
          }, f(C), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", wp, [
          o("table", Cp, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: l() })
              }, [
                (t(!0), a(A, null, j(d(p.columns), (C, k) => (t(), a("th", {
                  key: k,
                  class: z(["pb-2 font-medium", k > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), a(A, null, j(s(p), (C, k) => (t(), a("tr", {
                key: k,
                class: "border-b border-neutral-200"
              }, [
                o("td", Sp, [
                  o("p", null, f(C.description), 1),
                  C.detail ? (t(), a("p", Mp, f(C.detail), 1)) : w("", !0)
                ]),
                (t(!0), a(A, null, j(C.cells, ($, S) => (t(), a("td", {
                  key: S,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f($), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", Bp, [
                o("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, _p)
              ])) : w("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", Ap, [
            o("dl", Pp, [
              (t(!0), a(A, null, j(i(p), (C, k) => (t(), a("div", {
                key: k,
                class: z([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ne(C.strong ? { color: l(), borderColor: l() } : void 0)
              }, [
                o("dt", {
                  class: z(C.strong ? "" : "text-neutral-600")
                }, f(C.label), 3),
                o("dd", zp, f(C.value), 1)
              ], 6))), 128))
            ])
          ])) : w("", !0)
        ])) : p.type === "code" ? (t(), a("section", Op, [
          D(Ma, {
            code: u(p.code),
            caption: u(p.caption),
            style: ne(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", Vp, [
          o("h2", jp, f(p.heading), 1),
          o("ol", Lp, [
            (t(!0), a(A, null, j(d(p.items), (C, k) => (t(), a("li", {
              key: k,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: ne({ color: l() })
              }, f(k + 1) + ".", 5),
              o("span", null, f(C), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), a("p", {
          key: 5,
          class: z(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ne(p.emphasis ? { color: l() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), a("footer", Tp, [
          p.text ? (t(), a("p", Dp, f(p.text), 1)) : w("", !0),
          d(p.contacts).length ? (t(), a("p", Fp, f(d(p.contacts).join(" · ")), 1)) : w("", !0)
        ])) : (t(), a("p", Ep, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Np = ["aria-label", "title"], Rp = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Up = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, A3 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: n, set: l } = xa(), r = y(() => n.value.theme === "dark");
    function s() {
      l({ theme: r.value ? "light" : "dark" });
    }
    return (i, d) => (t(), a("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: s
    }, [
      (t(), a("svg", Rp, [
        r.value ? (t(), a(A, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", Up))
      ]))
    ], 8, Np));
  }
}), Hp = ["width", "height"], Kp = { key: 0 }, qp = ["x1", "x2", "y1", "y2"], Gp = ["x", "y"], Wp = ["x1", "x2", "y1", "y2"], Zp = ["x", "y"], Jp = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Yp = ["x", "y", "width", "height", "fill", "fill-opacity"], Qp = ["x", "y"], Xp = ["x", "y"], ev = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, tv = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, av = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, lv = { class: "text-xs font-semibold tabular-nums" }, nv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, ov = { class: "text-muted-foreground" }, ta = 5.6, P3 = /* @__PURE__ */ O({
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
    const n = e, l = {
      danger: "var(--destructive)",
      warning: "var(--chart-4)",
      success: "var(--chart-2)",
      neutral: "var(--muted-foreground)"
    };
    function r(B) {
      return l[B] ?? B;
    }
    function s(B, I) {
      if (!n.thresholds?.length)
        return I;
      const L = n.thresholds.find((Y) => B < Y.max);
      return r(L ? L.color : n.aboveColor);
    }
    const i = K(null), d = K(560), u = K(null);
    let c = null;
    ge(() => {
      c = new ResizeObserver((B) => {
        d.value = Math.max(160, B[0].contentRect.width);
      }), i.value && c.observe(i.value);
    }), xe(() => c?.disconnect());
    const v = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = y(() => (n.series?.length ? n.series : n.data?.length ? [{ name: "", points: n.data }] : []).map((I, L) => ({
      ...I,
      color: I.color ?? v[L % v.length]
    }))), h = y(() => p.value[0]?.points.map((B) => B.label) ?? []), C = y(() => h.value.length), k = y(() => n.orientation === "horizontal"), $ = y(() => Math.max(0, ...h.value.map((B) => B.length))), S = y(() => {
      if (!k.value)
        return n.showAxis ? 44 : 8;
      const B = $.value * ta + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), b = y(() => Math.max(4, Math.floor((S.value - 16) / ta)));
    function g(B) {
      return B.length <= b.value ? B : `${B.slice(0, b.value - 1)}…`;
    }
    const m = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: S.value
    })), M = y(() => ({
      w: Math.max(1, d.value - m.value.left - m.value.right),
      h: Math.max(1, n.height - m.value.top - m.value.bottom)
    })), _ = (B) => n.format ? n.format(B) : P(B);
    function P(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const N = y(() => {
      const B = h.value.map(
        (pe, se) => n.stacked ? p.value.reduce((q, F) => q + Math.max(0, F.points[se]?.value ?? 0), 0) : Math.max(...p.value.map((q) => q.points[se]?.value ?? 0))
      );
      if (n.maxValue)
        return n.maxValue;
      const I = Math.max(...B, 0);
      if (I <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(I));
      return ([1, 2, 2.5, 5, 10].find((pe) => I <= pe * L) ?? 10) * L;
    }), E = y(
      () => (k.value ? M.value.h : M.value.w) / Math.max(1, C.value)
    ), te = y(() => E.value * 0.68), U = y(
      () => n.stacked || p.value.length <= 1 ? te.value : te.value / p.value.length
    ), G = y(() => {
      const B = [], I = new Array(C.value).fill(0);
      return p.value.forEach((L, Y) => {
        L.points.forEach((pe, se) => {
          const F = Math.max(0, pe.value) / N.value * (k.value ? M.value.w : M.value.h), ee = (k.value ? m.value.top : m.value.left) + se * E.value + (E.value - te.value) / 2, Q = n.stacked ? 0 : Y * U.value;
          B.push(
            k.value ? {
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
          ), n.stacked && (I[se] += F);
        });
      }), B;
    }), W = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: N.value * (k.value ? B : 1 - B),
        x: m.value.left + M.value.w * B,
        y: m.value.top + M.value.h * B
      }))
    ), le = y(() => Math.max(1, Math.ceil(C.value / (k.value ? 14 : 10))));
    function ae(B) {
      return B === C.value - 1 || B % le.value === 0;
    }
    function J(B) {
      return (k.value ? m.value.top : m.value.left) + B * E.value + E.value / 2;
    }
    const Z = y(() => u.value === null ? null : {
      label: h.value[u.value],
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
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(A, { key: 1 }, [
        (t(), a("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: I[0] || (I[0] = (L) => u.value = null)
        }, [
          e.showAxis ? (t(), a("g", Kp, [
            k.value ? (t(), a(A, { key: 0 }, [
              (t(!0), a(A, null, j(W.value, (L) => (t(), a("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: m.value.top,
                y2: m.value.top + M.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, qp))), 128)),
              (t(!0), a(A, null, j(W.value, (L) => (t(), a("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(L.value)), 9, Gp))), 128))
            ], 64)) : (t(), a(A, { key: 1 }, [
              (t(!0), a(A, null, j(W.value, (L) => (t(), a("line", {
                key: `g-${L.y}`,
                x1: m.value.left,
                x2: d.value - m.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Wp))), 128)),
              (t(!0), a(A, null, j(W.value, (L) => (t(), a("text", {
                key: `gt-${L.y}`,
                x: m.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(L.value)), 9, Zp))), 128))
            ], 64))
          ])) : w("", !0),
          (t(!0), a(A, null, j(h.value, (L, Y) => (t(), a("rect", {
            key: `hit-${Y}`,
            x: k.value ? m.value.left : m.value.left + Y * E.value,
            y: k.value ? m.value.top + Y * E.value : m.value.top,
            width: k.value ? M.value.w : E.value,
            height: k.value ? E.value : M.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === Y ? 0.4 : 0,
            onMouseenter: (pe) => u.value = Y
          }, null, 40, Jp))), 128)),
          (t(!0), a(A, null, j(G.value, (L, Y) => (t(), a("rect", {
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
          }, null, 8, Yp))), 128)),
          k.value ? (t(!0), a(A, { key: 1 }, j(h.value, (L, Y) => me((t(), a("text", {
            key: `c-${Y}`,
            x: m.value.left - 8,
            y: J(Y) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(f(g(L)) + " ", 1),
            o("title", null, f(L), 1)
          ], 8, Qp)), [
            [Fe, ae(Y)]
          ])), 128)) : (t(!0), a(A, { key: 2 }, j(h.value, (L, Y) => me((t(), a("text", {
            key: `c-${Y}`,
            x: J(Y),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, Xp)), [
            [Fe, ae(Y)]
          ])), 128))
        ], 40, Hp)),
        Z.value ? (t(), a("div", ev, [
          o("p", tv, f(Z.value.label), 1),
          (t(!0), a(A, null, j(Z.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            o("span", av, f(L.name || "Value"), 1),
            o("span", lv, f(_(L.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", nv, [
          (t(!0), a(A, null, j(p.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            o("span", ov, f(L.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), sv = ["width", "height"], rv = ["id"], iv = ["stop-color"], dv = ["stop-color"], uv = { key: 0 }, cv = ["x1", "x2", "y1", "y2"], fv = ["x", "y"], mv = ["x", "y"], pv = ["x1", "x2", "y1", "y2"], vv = ["d", "fill"], gv = ["d", "stroke", "stroke-dasharray"], hv = ["cx", "cy", "fill"], bv = { key: 1 }, xv = ["x1", "x2", "y1", "y2"], yv = ["cx", "cy", "fill"], kv = ["x", "y"], $v = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, wv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Cv = { class: "text-xs font-semibold tabular-nums" }, Sv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Mv = { class: "text-muted-foreground" }, Bv = /* @__PURE__ */ O({
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
    const n = e, l = y(() => v.value.some((B) => B.axis === "right")), r = K(null), s = K(560), i = K(null);
    let d = null;
    ge(() => {
      d = new ResizeObserver((B) => {
        s.value = Math.max(160, B[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), xe(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], c = Math.random().toString(36).slice(2, 9), v = y(() => (n.series?.length ? n.series : n.data?.length ? [{ name: "", points: n.data }] : []).map((I, L) => ({
      ...I,
      color: I.color ?? u[L % u.length]
    }))), p = y(() => v.value[0]?.points.map((B) => B.label) ?? []), h = y(() => p.value.length), C = y(() => ({
      top: 12,
      right: n.showAxis && l.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: n.showAxis ? 44 : 8
    })), k = (B) => n.format ? n.format(B) : $(B);
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
    const b = y(
      () => S(
        v.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((I) => I.value))
      )
    ), g = y(
      () => S(
        v.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((I) => I.value))
      )
    ), m = y(() => ({
      w: Math.max(1, s.value - C.value.left - C.value.right),
      h: Math.max(1, n.height - C.value.top - C.value.bottom)
    }));
    function M(B) {
      return C.value.left + (h.value <= 1 ? 0 : B / (h.value - 1) * m.value.w);
    }
    function _(B, I = "left") {
      const L = I === "right" ? g.value : b.value;
      return C.value.top + m.value.h - B / L * m.value.h;
    }
    const P = y(
      () => v.value.map((B) => {
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
        value: b.value * (1 - B)
      }))
    ), G = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: C.value.top + m.value.h * B,
        value: g.value * (1 - B)
      }))
    ), W = y(() => Math.max(1, Math.ceil(h.value / 8)));
    function le(B) {
      return B === h.value - 1 || B % W.value === 0;
    }
    function ae(B) {
      const I = B.currentTarget.getBoundingClientRect(), L = B.clientX - I.left - C.value.left, Y = h.value <= 1 ? 1 : m.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(L / Y)));
    }
    const J = y(() => {
      if (i.value === null || h.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: M(B),
        label: p.value[B],
        rows: P.value.map((I) => ({
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
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(A, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: ae,
          onMouseleave: I[0] || (I[0] = (L) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), a(A, null, j(P.value, (L, Y) => (t(), a("linearGradient", {
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
              }, null, 8, iv),
              o("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, dv)
            ], 8, rv))), 128))
          ]),
          e.showAxis ? (t(), a("g", uv, [
            (t(!0), a(A, null, j(U.value, (L) => (t(), a("line", {
              key: L.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, cv))), 128)),
            (t(!0), a(A, null, j(U.value, (L) => (t(), a("text", {
              key: `t-${L.y}`,
              x: C.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(L.value)), 9, fv))), 128)),
            l.value ? (t(!0), a(A, { key: 0 }, j(G.value, (L) => (t(), a("text", {
              key: `rt-${L.y}`,
              x: s.value - C.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(L.value)), 9, mv))), 128)) : w("", !0)
          ])) : w("", !0),
          (t(!0), a(A, null, j(p.value, (L, Y) => me((t(), a("line", {
            key: `v-${Y}`,
            x1: M(Y),
            x2: M(Y),
            y1: C.value.top,
            y2: C.value.top + m.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, pv)), [
            [Fe, le(Y)]
          ])), 128)),
          (t(!0), a(A, null, j(P.value, (L, Y) => (t(), a("g", {
            key: `s-${Y}`
          }, [
            L.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${x(c)}-${Y})`
            }, null, 8, vv)) : w("", !0),
            o("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, gv),
            L.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, hv)) : w("", !0)
          ]))), 128)),
          J.value ? (t(), a("g", bv, [
            o("line", {
              x1: J.value.x,
              x2: J.value.x,
              y1: C.value.top,
              y2: C.value.top + m.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, xv),
            (t(!0), a(A, null, j(J.value.rows, (L, Y) => (t(), a("circle", {
              key: `d-${Y}`,
              cx: J.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, yv))), 128))
          ])) : w("", !0),
          (t(!0), a(A, null, j(p.value, (L, Y) => me((t(), a("text", {
            key: `x-${Y}`,
            x: M(Y),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(L), 9, kv)), [
            [Fe, le(Y)]
          ])), 128))
        ], 40, sv)),
        J.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(Z.value)
        }, [
          o("p", $v, f(J.value.label), 1),
          (t(!0), a(A, null, j(J.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            o("span", wv, f(L.name || "Value"), 1),
            o("span", Cv, f(k(L.value)), 1)
          ]))), 128))
        ], 4)) : w("", !0),
        e.showLegend && v.value.length > 1 ? (t(), a("div", Sv, [
          (t(!0), a(A, null, j(P.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            o("span", Mv, f(L.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), _v = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Av = { class: "text-muted-foreground text-[11px] capitalize" }, Pv = { class: "text-sm font-semibold tabular-nums" }, zv = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, lt = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (n, l) => (t(), a("div", _v, [
      o("p", Av, f(e.label), 1),
      o("p", Pv, [
        R(f(e.value) + " ", 1),
        e.share ? (t(), a("span", zv, " (" + f(e.share) + ") ", 1)) : w("", !0)
      ])
    ]));
  }
}), Ov = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Vv = ["width", "height", "viewBox", "aria-label"], jv = ["d", "fill", "fill-opacity", "onMouseenter"], Lv = ["x", "y"], Tv = ["x", "y"], Dv = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Fv = ["onMouseenter"], Ev = { class: "min-w-0 flex-1 truncate capitalize" }, Iv = { class: "tabular-nums font-medium" }, Nv = { class: "text-muted-foreground w-9 text-right tabular-nums" }, z3 = /* @__PURE__ */ O({
  __name: "PieChart",
  props: {
    data: {},
    height: { default: 220 },
    type: { default: "doughnut" },
    format: {}
  },
  setup(e) {
    const n = e, l = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = y(() => n.data.reduce((b, g) => b + g.value, 0)), s = K(null), i = y(() => n.height), d = y(() => i.value / 2 - 4), u = y(() => n.type === "doughnut" ? d.value * 0.62 : 0);
    function c(b) {
      return l[b % l.length];
    }
    function v(b) {
      return 1 - Math.min(0.55, Math.floor(b / l.length) * 0.28);
    }
    const p = y(() => {
      if (r.value <= 0)
        return [];
      const b = i.value / 2;
      let g = -Math.PI / 2;
      return n.data.map((m, M) => {
        const _ = m.value / r.value, P = _ * Math.PI * 2, N = g, E = g + P;
        return g = E, {
          ...m,
          share: _,
          colour: c(M),
          opacity: v(M),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: _ >= 0.9999 ? k(b) : C(b, N, E, d.value, u.value)
        };
      });
    });
    function h(b, g, m) {
      return `${(b + Math.cos(g) * m).toFixed(2)},${(b + Math.sin(g) * m).toFixed(2)}`;
    }
    function C(b, g, m, M, _) {
      const P = m - g > Math.PI ? 1 : 0;
      return _ <= 0 ? `M${b},${b} L${h(b, g, M)} A${M},${M} 0 ${P} 1 ${h(b, m, M)} Z` : [
        `M${h(b, g, M)}`,
        `A${M},${M} 0 ${P} 1 ${h(b, m, M)}`,
        `L${h(b, m, _)}`,
        `A${_},${_} 0 ${P} 0 ${h(b, g, _)}`,
        "Z"
      ].join(" ");
    }
    function k(b) {
      const g = d.value, m = u.value, M = [
        `M${b - g},${b}`,
        `A${g},${g} 0 1 1 ${b + g},${b}`,
        `A${g},${g} 0 1 1 ${b - g},${b}`,
        "Z"
      ];
      return m <= 0 ? M.join(" ") : [
        ...M,
        `M${b - m},${b}`,
        `A${m},${m} 0 1 0 ${b + m},${b}`,
        `A${m},${m} 0 1 0 ${b - m},${b}`,
        "Z"
      ].join(" ");
    }
    const $ = (b) => n.format ? n.format(b) : new Intl.NumberFormat().format(b), S = (b) => `${(b * 100).toFixed(b < 0.01 ? 2 : 0)}%`;
    return (b, g) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Ov, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${$(r.value)}`
      }, [
        (t(!0), a(A, null, j(p.value, (m, M) => (t(), a("path", {
          key: M,
          d: m.path,
          fill: m.colour,
          "fill-opacity": s.value === null || s.value === M ? m.opacity : m.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (_) => s.value = M,
          onMouseleave: g[0] || (g[0] = (_) => s.value = null)
        }, null, 40, jv))), 128)),
        e.type === "doughnut" ? (t(), a(A, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f($(s.value === null ? r.value : p.value[s.value].value)), 9, Lv),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, Tv)
        ], 64)) : w("", !0)
      ], 8, Vv)),
      o("ul", Dv, [
        (t(!0), a(A, null, j(p.value, (m, M) => (t(), a("li", {
          key: M,
          class: z(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === M ? "bg-muted" : ""]),
          onMouseenter: (_) => s.value = M,
          onMouseleave: g[1] || (g[1] = (_) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: m.colour, opacity: m.opacity })
          }, null, 4),
          o("span", Ev, f(m.label), 1),
          o("span", Iv, f($(m.value)), 1),
          o("span", Nv, f(S(m.share)), 1)
        ], 42, Fv))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(lt, {
        key: 0,
        label: p.value[s.value].label,
        value: $(p.value[s.value].value),
        share: S(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), Rv = ["width", "height", "viewBox", "aria-label"], Uv = { class: "text-border" }, Hv = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Kv = { class: "fill-muted-foreground text-[10px]" }, qv = ["x", "y"], Gv = ["x", "y"], Wv = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Zv = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, O3 = /* @__PURE__ */ O({
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
    const n = e, l = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = K(null), s = K(560), i = K(null);
    let d = null;
    ge(() => {
      d = new ResizeObserver((W) => {
        const le = W[0]?.contentRect.width ?? 0;
        le > 0 && (s.value = le);
      }), r.value && d.observe(r.value);
    }), xe(() => d?.disconnect());
    const u = y(
      () => n.series?.length ? n.series : [{ name: "", points: n.data ?? [] }]
    ), c = (W, le) => le.color ?? l[W % l.length], v = y(() => u.value.flatMap((W) => W.points)), p = y(() => v.value.some((W) => typeof W.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, C = y(() => Math.max(10, s.value - h.left - h.right)), k = y(() => Math.max(10, n.height - h.top - h.bottom));
    function $(W) {
      if (W.length === 0)
        return [0, 1];
      const le = Math.min(...W), ae = Math.max(...W), J = ae - le || Math.abs(ae) || 1;
      return [le - J * 0.08, ae + J * 0.08];
    }
    const S = y(() => $(v.value.map((W) => W.x))), b = y(() => $(v.value.map((W) => W.y))), g = (W) => {
      const [le, ae] = S.value;
      return h.left + (W - le) / (ae - le) * C.value;
    }, m = (W) => {
      const [le, ae] = b.value;
      return h.top + k.value - (W - le) / (ae - le) * k.value;
    }, M = y(() => Math.max(...v.value.map((W) => W.r ?? 0), 0));
    function _(W) {
      if (!p.value || !M.value)
        return 4;
      const le = Math.max(0, W.r ?? 0) / M.value;
      return 3 + Math.sqrt(le) * (n.maxRadius - 3);
    }
    function P([W, le]) {
      return Array.from({ length: 5 }, (ae, J) => W + (le - W) / 4 * J);
    }
    const N = y(() => P(S.value)), E = y(() => P(b.value)), te = (W) => n.formatX?.(W) ?? String(Math.round(W * 100) / 100), U = (W) => n.formatY?.(W) ?? String(Math.round(W * 100) / 100), G = y(() => {
      if (!i.value)
        return null;
      const W = u.value[i.value.s], le = W?.points[i.value.p];
      return le ? { series: W, point: le } : null;
    });
    return (W, le) => (t(), a("div", {
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
        o("g", Uv, [
          (t(!0), a(A, null, j(E.value, (ae, J) => (t(), a("line", {
            key: `gy-${J}`,
            x1: h.left,
            x2: h.left + C.value,
            y1: m(ae),
            y2: m(ae),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": J === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Hv))), 128))
        ]),
        o("g", Kv, [
          (t(!0), a(A, null, j(E.value, (ae, J) => (t(), a("text", {
            key: `ty-${J}`,
            x: h.left - 8,
            y: m(ae) + 3,
            "text-anchor": "end"
          }, f(U(ae)), 9, qv))), 128)),
          (t(!0), a(A, null, j(N.value, (ae, J) => (t(), a("text", {
            key: `tx-${J}`,
            x: g(ae),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(te(ae)), 9, Gv))), 128))
        ]),
        (t(!0), a(A, null, j(u.value, (ae, J) => (t(), a("g", {
          key: `s-${J}`
        }, [
          (t(!0), a(A, null, j(ae.points, (Z, B) => (t(), a("circle", {
            key: `p-${J}-${B}`,
            cx: g(Z.x),
            cy: m(Z.y),
            r: _(Z),
            fill: c(J, ae),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: c(J, ae),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== J || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (I) => i.value = { s: J, p: B },
            onMouseleave: le[0] || (le[0] = (I) => i.value = null)
          }, null, 40, Wv))), 128))
        ]))), 128))
      ], 8, Rv)),
      G.value ? (t(), T(lt, {
        key: 0,
        label: G.value.point.label ?? G.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(G.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${U(G.value.point.y)}`,
        share: p.value && G.value.point.r != null ? String(G.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : w("", !0),
      e.showLegend && u.value.length > 1 ? (t(), a("div", Zv, [
        (t(!0), a(A, null, j(u.value, (ae, J) => (t(), a("span", {
          key: `l-${J}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ne({ backgroundColor: c(J, ae) }),
            "aria-hidden": "true"
          }, null, 4),
          R(" " + f(ae.name), 1)
        ]))), 128))
      ])) : w("", !0)
    ], 512));
  }
}), Jv = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Yv = ["width", "height", "viewBox"], Qv = ["points"], Xv = ["x1", "y1", "x2", "y2"], eg = ["points", "fill", "stroke"], tg = ["cx", "cy", "fill", "onMouseenter"], ag = ["x", "y", "text-anchor"], lg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, ng = { class: "truncate" }, V3 = /* @__PURE__ */ O({
  __name: "RadarChart",
  props: {
    series: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, l = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = y(
      () => n.series.map((m, M) => ({
        ...m,
        color: m.color ?? l[M % l.length]
      }))
    ), s = y(() => r.value[0]?.points.map((m) => m.label) ?? []), i = y(() => s.value.length), d = y(() => n.height), u = y(() => d.value / 2), c = y(() => d.value / 2 - 34), v = y(() => {
      const m = Math.max(...r.value.flatMap((P) => P.points.map((N) => N.value)), 0);
      if (m <= 0)
        return 1;
      const M = 10 ** Math.floor(Math.log10(m));
      return ([1, 2, 2.5, 5, 10].find((P) => m <= P * M) ?? 10) * M;
    });
    function p(m) {
      return m / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(m, M) {
      const _ = p(m);
      return {
        x: u.value + Math.cos(_) * c.value * M,
        y: u.value + Math.sin(_) * c.value * M
      };
    }
    function C(m) {
      return Array.from({ length: i.value }, (M, _) => {
        const P = h(_, m);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const k = y(() => [0.25, 0.5, 0.75, 1].map((m) => ({ f: m, points: C(m) }))), $ = y(
      () => r.value.map((m) => {
        const M = m.points.map((_) => Math.max(0, _.value) / v.value);
        return {
          name: m.name,
          color: m.color,
          values: m.points,
          outline: M.map((_, P) => {
            const N = h(P, _);
            return `${N.x.toFixed(2)},${N.y.toFixed(2)}`;
          }).join(" "),
          dots: M.map((_, P) => h(P, _))
        };
      })
    ), S = y(
      () => s.value.map((m, M) => {
        const _ = p(M), P = u.value + Math.cos(_) * (c.value + 14), N = u.value + Math.sin(_) * (c.value + 14), E = Math.cos(_);
        return {
          label: m,
          x: P,
          y: N + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), b = K(null), g = (m) => n.format ? n.format(m) : new Intl.NumberFormat().format(m);
    return (m, M) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", Jv, [
      (t(), a("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(A, null, j(k.value, (_) => (t(), a("polygon", {
          key: _.f,
          points: _.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Qv))), 128)),
        (t(!0), a(A, null, j(s.value, (_, P) => (t(), a("line", {
          key: `spoke-${P}`,
          x1: u.value,
          y1: u.value,
          x2: h(P, 1).x,
          y2: h(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Xv))), 128)),
        (t(!0), a(A, null, j($.value, (_, P) => (t(), a("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: _.outline,
            fill: _.color,
            "fill-opacity": "0.16",
            stroke: _.color,
            "stroke-width": "2"
          }, null, 8, eg),
          (t(!0), a(A, null, j(_.dots, (N, E) => (t(), a("circle", {
            key: E,
            cx: N.x,
            cy: N.y,
            r: "3",
            fill: _.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (te) => b.value = {
              series: _.name,
              axis: s.value[E],
              value: _.values[E]?.value ?? 0
            },
            onMouseleave: M[0] || (M[0] = (te) => b.value = null)
          }, null, 40, tg))), 128))
        ]))), 128)),
        (t(!0), a(A, null, j(S.value, (_, P) => (t(), a("text", {
          key: `l-${P}`,
          x: _.x,
          y: _.y,
          "text-anchor": _.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(_.label), 9, ag))), 128))
      ], 8, Yv)),
      e.showLegend ? (t(), a("ul", lg, [
        (t(!0), a(A, null, j(r.value, (_, P) => (t(), a("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: _.color })
          }, null, 4),
          o("span", ng, f(_.name), 1)
        ]))), 128))
      ])) : w("", !0),
      b.value ? (t(), T(lt, {
        key: 1,
        label: `${b.value.series} — ${b.value.axis}`,
        value: g(b.value.value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), og = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, sg = ["width", "height", "viewBox"], rg = ["cx", "cy", "r"], ig = ["d", "fill", "fill-opacity", "onMouseenter"], dg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, ug = { class: "min-w-0 flex-1 truncate capitalize" }, cg = { class: "font-medium tabular-nums" }, j3 = /* @__PURE__ */ O({
  __name: "PolarAreaChart",
  props: {
    data: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, l = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = K(null), s = y(() => n.height), i = y(() => s.value / 2), d = y(() => s.value / 2 - 6), u = y(() => Math.max(...n.data.map((C) => Math.max(0, C.value)), 0)), c = y(() => {
      const C = n.data.length;
      if (C === 0 || u.value <= 0)
        return [];
      const k = Math.PI * 2 / C;
      return n.data.map(($, S) => {
        const b = Math.sqrt(Math.max(0, $.value) / u.value), g = d.value * b, m = S * k - Math.PI / 2, M = m + k;
        return {
          ...$,
          color: l[S % l.length],
          share: u.value === 0 ? 0 : $.value / u.value,
          path: v(i.value, m, M, g)
        };
      });
    });
    function v(C, k, $, S) {
      if (S <= 0)
        return "";
      if ($ - k >= Math.PI * 2 - 1e-6)
        return `M${C - S},${C} A${S},${S} 0 1 1 ${C + S},${C} A${S},${S} 0 1 1 ${C - S},${C} Z`;
      const b = $ - k > Math.PI ? 1 : 0, g = C + Math.cos(k) * S, m = C + Math.sin(k) * S, M = C + Math.cos($) * S, _ = C + Math.sin($) * S;
      return `M${C},${C} L${g.toFixed(2)},${m.toFixed(2)} A${S.toFixed(2)},${S.toFixed(2)} 0 ${b} 1 ${M.toFixed(2)},${_.toFixed(2)} Z`;
    }
    const p = y(() => [0.5, 0.75, 1].map((C) => d.value * C)), h = (C) => n.format ? n.format(C) : new Intl.NumberFormat().format(C);
    return (C, k) => c.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", og, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(A, null, j(p.value, ($) => (t(), a("circle", {
          key: $,
          cx: i.value,
          cy: i.value,
          r: $,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, rg))), 128)),
        (t(!0), a(A, null, j(c.value, ($, S) => (t(), a("path", {
          key: S,
          d: $.path,
          fill: $.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === S ? 0.75 : 0.3,
          onMouseenter: (b) => r.value = S,
          onMouseleave: k[0] || (k[0] = (b) => r.value = null)
        }, null, 40, ig))), 128))
      ], 8, sg)),
      e.showLegend ? (t(), a("ul", dg, [
        (t(!0), a(A, null, j(c.value, ($, S) => (t(), a("li", {
          key: S,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: $.color })
          }, null, 4),
          o("span", ug, f($.label), 1),
          o("span", cg, f(h($.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      r.value !== null ? (t(), T(lt, {
        key: 1,
        label: c.value[r.value].label,
        value: h(c.value[r.value].value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), fg = ["width", "height"], mg = ["x1", "x2", "y1", "y2"], pg = ["x", "y"], vg = ["x", "y"], gg = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], hg = ["x", "y", "width", "height", "fill", "fill-opacity"], bg = ["d", "stroke"], xg = ["cx", "cy", "fill"], yg = ["x", "y"], kg = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, $g = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, wg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Cg = { class: "text-xs font-semibold tabular-nums" }, Sg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Mg = { class: "text-muted-foreground" }, L3 = /* @__PURE__ */ O({
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
    const n = e, l = K(null), r = K(560), s = K(null);
    let i = null;
    ge(() => {
      i = new ResizeObserver((J) => {
        r.value = Math.max(160, J[0].contentRect.width);
      }), l.value && i.observe(l.value);
    }), xe(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], c = y(
      () => n.bars.map((J, Z) => ({
        ...J,
        color: J.color ?? d[Z % d.length]
      }))
    ), v = y(
      () => n.lines.map((J, Z) => ({
        ...J,
        color: J.color ?? u[Z % u.length]
      }))
    ), p = y(
      () => c.value[0]?.points.map((J) => J.label) ?? v.value[0]?.points.map((J) => J.label) ?? []
    ), h = y(() => p.value.length), C = y(() => n.lineAxis === "right"), k = y(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), $ = y(() => ({
      w: Math.max(1, r.value - k.value.left - k.value.right),
      h: Math.max(1, n.height - k.value.top - k.value.bottom)
    }));
    function S(J) {
      const Z = Math.max(...J, 0);
      if (Z <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((L) => Z <= L * B) ?? 10) * B;
    }
    const b = y(
      () => S([
        ...c.value.flatMap((J) => J.points.map((Z) => Z.value)),
        ...C.value ? [] : v.value.flatMap((J) => J.points.map((Z) => Z.value))
      ])
    ), g = y(
      () => C.value ? S(v.value.flatMap((J) => J.points.map((Z) => Z.value))) : b.value
    ), m = y(() => $.value.w / Math.max(1, h.value)), M = y(() => m.value * 0.6), _ = y(() => M.value / Math.max(1, c.value.length));
    function P(J) {
      return k.value.left + J * m.value + m.value / 2;
    }
    const N = y(
      () => c.value.flatMap(
        (J, Z) => J.points.map((B, I) => {
          const L = Math.max(0, B.value) / b.value * $.value.h;
          return {
            x: P(I) - M.value / 2 + Z * _.value,
            y: k.value.top + $.value.h - L,
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
      () => v.value.map((J) => {
        const Z = J.points.map((B, I) => ({
          x: P(I),
          y: k.value.top + $.value.h - Math.max(0, B.value) / g.value * $.value.h,
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
        y: k.value.top + $.value.h * J,
        left: b.value * (1 - J),
        right: g.value * (1 - J)
      }))
    ), U = y(() => Math.max(1, Math.ceil(h.value / 10)));
    function G(J) {
      return J === h.value - 1 || J % U.value === 0;
    }
    const W = (J) => n.format ? n.format(J) : le(J);
    function le(J) {
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
          ...v.value.map((Z) => ({
            name: Z.name,
            color: Z.color,
            value: Z.points[J]?.value ?? 0
          }))
        ]
      };
    });
    return (J, Z) => (t(), a("div", {
      ref_key: "host",
      ref: l,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(A, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: Z[0] || (Z[0] = (B) => s.value = null)
        }, [
          (t(!0), a(A, null, j(te.value, (B) => (t(), a("line", {
            key: `g-${B.y}`,
            x1: k.value.left,
            x2: r.value - k.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, mg))), 128)),
          (t(!0), a(A, null, j(te.value, (B) => (t(), a("text", {
            key: `lt-${B.y}`,
            x: k.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(le(B.left)), 9, pg))), 128)),
          C.value ? (t(!0), a(A, { key: 0 }, j(te.value, (B) => (t(), a("text", {
            key: `rt-${B.y}`,
            x: r.value - k.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(le(B.right)), 9, vg))), 128)) : w("", !0),
          (t(!0), a(A, null, j(p.value, (B, I) => (t(), a("rect", {
            key: `hit-${I}`,
            x: k.value.left + I * m.value,
            y: k.value.top,
            width: m.value,
            height: $.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === I ? 0.4 : 0,
            onMouseenter: (L) => s.value = I
          }, null, 40, gg))), 128)),
          (t(!0), a(A, null, j(N.value, (B, I) => (t(), a("rect", {
            key: `b-${I}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, hg))), 128)),
          (t(!0), a(A, null, j(E.value, (B, I) => (t(), a("g", {
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
            }, null, 8, bg),
            s.value !== null && B.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, xg)) : w("", !0)
          ]))), 128)),
          (t(!0), a(A, null, j(p.value, (B, I) => me((t(), a("text", {
            key: `x-${I}`,
            x: P(I),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(B), 9, yg)), [
            [Fe, G(I)]
          ])), 128))
        ], 40, fg)),
        ae.value ? (t(), a("div", kg, [
          o("p", $g, f(ae.value.label), 1),
          (t(!0), a(A, null, j(ae.value.rows, (B, I) => (t(), a("div", {
            key: I,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            o("span", wg, f(B.name), 1),
            o("span", Cg, f(W(B.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend ? (t(), a("div", Sg, [
          (t(!0), a(A, null, j([...c.value, ...v.value], (B, I) => (t(), a("span", {
            key: I,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            o("span", Mg, f(B.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Bg = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, _g = { class: "text-muted-foreground" }, Ag = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Pg = ["width", "height"], zg = ["x", "y"], Og = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Vg = ["x", "y"], jg = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Lg = { class: "text-[11px] font-medium capitalize" }, Tg = { class: "text-muted-foreground text-[11px] capitalize" }, Dg = { class: "text-sm font-semibold tabular-nums" }, Fg = { class: "text-muted-foreground text-xs font-normal" }, T3 = /* @__PURE__ */ O({
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
    const n = e, l = K(null), r = K(560), s = K(null);
    let i = null;
    ge(() => {
      i = new ResizeObserver((M) => {
        r.value = Math.max(160, M[0].contentRect.width);
      }), l.value && i.observe(l.value);
    }), xe(() => i?.disconnect());
    const d = y(() => n.series[0]?.points.map((M) => M.label) ?? []), u = y(() => n.series.length), c = y(() => d.value.length), v = y(() => Math.min(140, Math.max(60, r.value * 0.16))), p = y(() => Math.max(1, r.value - v.value - 8)), h = y(() => p.value / Math.max(1, c.value)), C = y(() => Math.max(1, (n.height - 8) / Math.max(1, u.value)));
    function k(M) {
      if (M === 0)
        return "var(--muted)";
      const _ = Math.max(1, n.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(M / _ * 100)}%, var(--muted))`;
    }
    function $(M) {
      for (let _ = 0; _ < n.buckets.length; _++) {
        const P = n.buckets[_].max;
        if (P === void 0 || M < P)
          return _;
      }
      return n.buckets.length - 1;
    }
    const S = y(
      () => n.series.flatMap(
        (M, _) => M.points.map((P, N) => {
          const E = $(P.value);
          return {
            row: _,
            col: N,
            x: v.value + N * h.value,
            y: 4 + _ * C.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, C.value - 4),
            colour: k(E),
            label: P.label,
            value: P.value,
            rowName: M.name,
            bucketLabel: n.buckets[E].label
          };
        })
      )
    ), b = y(() => h.value < 2), g = y(() => s.value ? S.value.find((M) => M.row === s.value.row && M.col === s.value.col) ?? null : null), m = (M) => n.format ? n.format(M) : new Intl.NumberFormat().format(M);
    return (M, _) => (t(), a("div", {
      ref_key: "host",
      ref: l,
      class: "relative w-full"
    }, [
      u.value === 0 || c.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(A, { key: 1 }, [
        o("div", Bg, [
          (t(!0), a(A, null, j(e.buckets, (P, N) => (t(), a("span", {
            key: N,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: k(N) })
            }, null, 4),
            o("span", _g, f(P.label), 1)
          ]))), 128))
        ]),
        b.value ? (t(), a("p", Ag, f(c.value) + " columns - too many to label individually ", 1)) : w("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: _[0] || (_[0] = (P) => s.value = null)
        }, [
          (t(!0), a(A, null, j(e.series, (P, N) => (t(), a("text", {
            key: `r-${N}`,
            x: v.value - 10,
            y: 4 + N * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(P.name), 9, zg))), 128)),
          (t(!0), a(A, null, j(S.value, (P, N) => (t(), a("rect", {
            key: N,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.colour,
            "fill-opacity": s.value === null || s.value.row === P.row && s.value.col === P.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (E) => s.value = { row: P.row, col: P.col }
          }, null, 40, Og))), 128)),
          e.showColumnLabels && !b.value ? (t(!0), a(A, { key: 0 }, j(d.value, (P, N) => (t(), a("text", {
            key: `c-${N}`,
            x: v.value + N * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(P), 9, Vg))), 128)) : w("", !0)
        ], 40, Pg)),
        g.value ? (t(), a("div", jg, [
          o("p", Lg, f(g.value.label), 1),
          o("p", Tg, f(g.value.rowName), 1),
          o("p", Dg, [
            R(f(m(g.value.value)) + " ", 1),
            o("span", Fg, "(" + f(g.value.bucketLabel) + ")", 1)
          ])
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Eg = ["viewBox"], Ig = { key: 0 }, Ng = ["id"], Rg = ["stop-color"], Ug = ["stop-color"], Hg = ["d", "fill"], Kg = ["d", "stroke"], aa = 100, Ze = 30, ft = /* @__PURE__ */ O({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, l = Math.random().toString(36).slice(2, 9), r = y(() => {
      const u = n.data.map((h) => h.value);
      if (u.length < 2)
        return [];
      const c = Math.min(...u), p = Math.max(...u) - c || 1;
      return u.map((h, C) => ({
        x: C / (u.length - 1) * aa,
        y: Ze - (h - c) / p * (Ze - 4) - 2
      }));
    });
    function s(u) {
      const c = u.length;
      if (c < 2)
        return "";
      const v = [], p = [];
      for (let k = 0; k < c - 1; k++)
        v[k] = u[k + 1].x - u[k].x, p[k] = v[k] === 0 ? 0 : (u[k + 1].y - u[k].y) / v[k];
      const h = [p[0]];
      for (let k = 1; k < c - 1; k++)
        if (p[k - 1] * p[k] <= 0)
          h[k] = 0;
        else {
          const $ = 2 * v[k] + v[k - 1], S = v[k] + 2 * v[k - 1];
          h[k] = ($ + S) / ($ / p[k - 1] + S / p[k]);
        }
      h[c - 1] = p[c - 2];
      let C = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let k = 0; k < c - 1; k++) {
        const $ = v[k] / 3;
        C += ` C${(u[k].x + $).toFixed(2)},${(u[k].y + h[k] * $).toFixed(2)} ${(u[k + 1].x - $).toFixed(2)},${(u[k + 1].y - h[k + 1] * $).toFixed(2)} ${u[k + 1].x.toFixed(2)},${u[k + 1].y.toFixed(2)}`;
      }
      return C;
    }
    const i = y(() => {
      const u = r.value;
      return u.length < 2 ? "" : n.smooth ? s(u) : u.map((c, v) => `${v === 0 ? "M" : "L"}${c.x.toFixed(2)},${c.y.toFixed(2)}`).join(" ");
    }), d = y(() => {
      const u = r.value;
      return !n.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${Ze} L${u[0].x.toFixed(2)},${Ze} Z`;
    });
    return (u, c) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${aa} ${Ze}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", Ig, [
        o("linearGradient", {
          id: `pk-spark-${x(l)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, Rg),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Ug)
        ], 8, Ng)
      ])) : w("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${x(l)})`
      }, null, 8, Hg)) : w("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Kg)
    ], 12, Eg)) : w("", !0);
  }
}), qg = { class: "flex items-center gap-1 text-xs" }, Gg = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Wg = {
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
    const n = e, l = y(() => n.direction === "flat" ? null : n.direction === "new" ? !n.inverted : n.inverted ? n.direction === "down" : n.direction === "up"), r = y(
      () => l.value === null ? "text-muted-foreground" : l.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = y(
      () => n.direction === "flat" ? "→" : n.direction === "down" ? "▼" : "▲"
    ), i = y(() => n.direction === "new" ? "New" : n.percentage === null ? "-" : `${Math.abs(n.percentage)}%`);
    return (d, u) => (t(), a("span", qg, [
      o("span", {
        class: z(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Gg, f(s.value), 1),
        R(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", Wg, f(e.comparison), 1)) : w("", !0)
    ]));
  }
}), Zg = ["data-collapsed"], Jg = { class: "flex flex-wrap items-start justify-between gap-2" }, Yg = { class: "flex min-w-0 items-start gap-2" }, Qg = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Xg = ["d"], eh = { class: "min-w-0" }, th = { class: "text-sm font-medium" }, ah = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, lh = { class: "flex shrink-0 items-center gap-1.5" }, nh = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, oh = ["aria-pressed", "onClick"], sh = ["aria-expanded", "aria-label", "title"], rh = ["aria-label"], ih = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, dh = ["d"], uh = /* @__PURE__ */ O({
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
    const n = e, l = _t(), r = K(n.defaultCollapsed), s = y(() => !!n.icon && !l.icon), i = y(() => {
      if (!(n.fitBody && !n.loading && !n.error))
        return { minHeight: `${n.bodyHeight}px` };
    });
    return (d, u) => (t(), a("div", {
      class: z(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Jg, [
        o("div", Yg, [
          H(d.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", Qg, [
              o("path", {
                d: x(de)(e.icon)
              }, null, 8, Xg)
            ])) : w("", !0)
          ]),
          o("div", eh, [
            o("p", th, f(e.label), 1),
            e.description ? (t(), a("p", ah, f(e.description), 1)) : w("", !0),
            H(d.$slots, "trend")
          ])
        ]),
        o("div", lh, [
          H(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", nh, [
            (t(!0), a(A, null, j(e.periods, (c) => (t(), a("button", {
              key: c.value,
              type: "button",
              class: z([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === c.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === c.value,
              onClick: (v) => d.$emit("update:period", c.value)
            }, f(c.label), 11, oh))), 128))
          ])) : w("", !0),
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
          ], 8, sh)) : w("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (c) => d.$emit("hide"))
          }, [
            (t(), a("svg", ih, [
              o("path", {
                d: x(de)("eye-off")
              }, null, 8, dh)
            ]))
          ], 8, rh)) : w("", !0)
        ])
      ]),
      r.value ? w("", !0) : (t(), a("div", {
        key: 0,
        style: ne(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T(Me, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), a("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: ne({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : H(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, Zg));
  }
}), ch = ["aria-pressed", "aria-label", "title"], fh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mh = ["d"], ph = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, vh = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, gh = ["href"], hh = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, bh = ["d"], xh = ["aria-label", "onClick"], yh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, kh = ["d"], $h = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wh = ["d"], Ch = {
  key: 0,
  class: "flex flex-col gap-1"
}, Sh = ["onClick"], Mh = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bh = ["d"], _h = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Ah = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!1), i = K(!1), d = y(
      () => l.catalog.filter((v) => !l.items.some((p) => p.id === v.id))
    );
    function u(v) {
      r(
        "update:items",
        l.items.filter((p) => p.id !== v)
      );
    }
    function c(v) {
      r("update:items", [...l.items, v]), i.value = !1;
    }
    return (v, p) => (t(), a(A, null, [
      D(uh, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (h) => r("hide"))
      }, {
        actions: V(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (h) => s.value = !s.value)
          }, [
            (t(), a("svg", fh, [
              o("path", {
                d: x(de)(s.value ? "check" : "pencil")
              }, null, 8, mh)
            ]))
          ], 8, ch)
        ]),
        default: V(() => [
          e.items.length === 0 ? (t(), a("div", ph, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            D(re, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (h) => i.value = !0)
            }, {
              default: V(() => [...p[6] || (p[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", vh, [
            (t(!0), a(A, null, j(e.items, (h) => (t(), a("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", hh, [
                  o("path", {
                    d: x(de)(h.icon)
                  }, null, 8, bh)
                ])),
                R(" " + f(h.label), 1)
              ], 8, gh),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (C) => u(h.id)
              }, [
                (t(), a("svg", yh, [
                  o("path", {
                    d: x(de)("x")
                  }, null, 8, kh)
                ]))
              ], 8, xh)) : w("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (h) => i.value = !0)
            }, [
              (t(), a("svg", $h, [
                o("path", {
                  d: x(de)("plus")
                }, null, 8, wh)
              ])),
              p[8] || (p[8] = R(" Add ", -1))
            ])) : w("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      D(Xe, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (h) => i.value = !1)
      }, {
        footer: V(() => [
          D(re, {
            variant: "outline",
            onClick: p[4] || (p[4] = (h) => i.value = !1)
          }, {
            default: V(() => [...p[9] || (p[9] = [
              R("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: V(() => [
          d.value.length ? (t(), a("ul", Ch, [
            (t(!0), a(A, null, j(d.value, (h) => (t(), a("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => c(h)
              }, [
                (t(), a("svg", Mh, [
                  o("path", {
                    d: x(de)(h.icon)
                  }, null, 8, Bh)
                ])),
                R(" " + f(h.label), 1)
              ], 8, Sh)
            ]))), 128))
          ])) : (t(), a("p", _h, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Ph = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, zh = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Oh = { class: "relative w-full max-w-xl" }, Vh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jh = ["d"], Lh = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Th = ["data-slot"], Dh = { class: "px-5 py-4" }, Fh = { class: "mb-3 text-sm font-semibold" }, Eh = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Ih = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nh = ["d"], Rh = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, D3 = /* @__PURE__ */ O({
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
    const n = e, l = K(""), r = y(() => {
      const u = n.linkComponent;
      return typeof u == "string" ? u : na(u);
    }), s = Je({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(u) {
      return u.external === !0 || /^https?:\/\//.test(u.href);
    }
    const d = y(() => {
      const u = l.value.trim().toLowerCase();
      return n.sections.map((c) => ({
        ...c,
        links: u ? c.links.filter((v) => v.label.toLowerCase().includes(u)) : c.links
      })).filter((c) => c.links.length > 0);
    });
    return (u, c) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : x(Ie)])
    }, [
      o("header", null, [
        o("h1", Ph, f(e.title), 1),
        e.description ? (t(), a("p", zh, f(e.description), 1)) : w("", !0)
      ]),
      o("div", Oh, [
        (t(), a("svg", Vh, [
          o("path", {
            d: x(de)("search")
          }, null, 8, jh)
        ])),
        D(ye, {
          modelValue: l.value,
          "onUpdate:modelValue": c[0] || (c[0] = (v) => l.value = v),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      d.value.length ? (t(), a("div", Lh, [
        (t(!0), a(A, null, j(d.value, (v) => (t(), a("section", {
          key: v.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${v.key}`
        }, [
          o("div", Dh, [
            o("h2", Fh, f(v.title), 1),
            o("div", Eh, [
              (t(!0), a(A, null, j(v.links, (p) => (t(), T(Ce(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: z(x(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: V(() => [
                  (t(), a("svg", Ih, [
                    o("path", {
                      d: x(de)(p.icon)
                    }, null, 8, Nh)
                  ])),
                  R(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Th))), 128))
      ])) : (t(), a("p", Rh, ' Nothing matches "' + f(l.value) + '". ', 1))
    ], 2));
  }
}), Uh = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Hh = { class: "flex flex-1 flex-col gap-1 p-4" }, Kh = { class: "text-muted-foreground relative text-xs font-medium" }, qh = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Gh = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Wh = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Zh = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, F3 = /* @__PURE__ */ O({
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
    const n = (l) => typeof l == "number" ? new Intl.NumberFormat().format(l) : String(l ?? "-");
    return (l, r) => (t(), a("div", Uh, [
      o("div", Hh, [
        o("p", Kh, f(e.label), 1),
        e.loading ? (t(), T(Me, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", qh, " Could not load ")) : (t(), a("span", Gh, f(n(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Ba, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", Wh, f(e.description), 1)) : w("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", Zh, [
        D(ft, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : w("", !0)
    ]));
  }
}), Jh = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Yh = { class: "flex flex-col gap-1 p-4" }, Qh = { class: "flex items-start justify-between gap-2" }, Xh = { class: "text-sm font-medium" }, eb = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, tb = { class: "mt-1 flex flex-wrap items-center gap-2" }, ab = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, lb = {
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
    const n = e, l = y(() => n.delta === null || n.delta === 0 ? null : n.inverted ? n.delta < 0 : n.delta > 0), r = y(
      () => l.value === null ? "bg-muted text-muted-foreground" : l.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = y(
      () => typeof n.value == "number" ? new Intl.NumberFormat().format(n.value) : n.value
    );
    return (i, d) => (t(), a("div", Jh, [
      o("div", Yh, [
        o("div", Qh, [
          o("p", Xh, f(e.label), 1),
          H(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", eb, f(e.caption), 1)) : w("", !0),
        o("div", tb, [
          e.loading ? (t(), T(Me, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", ab, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: z(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : w("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", lb, [
        D(ft, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : w("", !0)
    ]));
  }
}), nb = { class: "relative flex flex-col gap-2" }, ob = ["aria-label"], sb = ["onMouseenter"], rb = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, ib = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, db = { class: "truncate" }, ub = { class: "text-sm font-semibold tabular-nums" }, E3 = /* @__PURE__ */ O({
  __name: "SegmentedBar",
  props: {
    segments: {},
    total: { default: null },
    format: {},
    showLegend: { type: Boolean, default: !0 },
    height: { default: 8 }
  },
  setup(e) {
    const n = e, l = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = y(() => n.segments.reduce((v, p) => v + Math.max(0, p.value), 0)), s = y(() => Math.max(n.total ?? r.value, r.value, 1)), i = y(
      () => n.segments.map((v, p) => {
        const h = Math.max(0, v.value) / s.value;
        return {
          ...v,
          color: v.color ?? l[p % l.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: v.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (v) => n.format ? n.format(v) : new Intl.NumberFormat().format(v), u = K(null), c = (v) => `${(v * 100).toFixed(v > 0 && v < 0.01 ? 1 : 0)}%`;
    return (v, p) => (t(), a("div", nb, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), a(A, null, j(i.value, (h, C) => (t(), a("span", {
          key: C,
          class: z(["h-full transition-all", [
            C === 0 ? "rounded-l-full" : "",
            C === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: h.width,
            background: h.color,
            opacity: u.value === null || u.value === C ? 1 : 0.4
          }),
          onMouseenter: (k) => u.value = C,
          onMouseleave: p[0] || (p[0] = (k) => u.value = null)
        }, null, 46, sb))), 128))
      ], 12, ob),
      e.showLegend ? (t(), a("div", rb, [
        (t(!0), a(A, null, j(i.value, (h, C) => (t(), a("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", ib, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: h.color })
            }, null, 4),
            o("span", db, f(h.label), 1)
          ]),
          o("span", ub, f(d(h.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      u.value !== null ? (t(), T(lt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: c(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), cb = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, fb = ["data-heading"], mb = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, pb = { class: "text-muted-foreground truncate" }, vb = ["aria-label"], I3 = /* @__PURE__ */ O({
  __name: "StatListChart",
  props: {
    rows: {}
  },
  setup(e) {
    const n = e, l = {
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
      () => n.rows.map((i) => {
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
    return (i, d) => (t(), a("div", cb, [
      (t(!0), a(A, null, j(s.value, (u) => (t(), a("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), a("div", {
          key: 0,
          class: z(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? l[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), a("div", mb, [
          o("span", pb, f(u.label), 1),
          o("span", {
            class: z(["shrink-0 font-medium tabular-nums", u.tone ? l[u.tone] : "text-foreground"])
          }, f(u.value), 3)
        ])),
        u.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((c) => `${c.label} ${c.value}`).join(", ")
        }, [
          (t(!0), a(A, null, j(u.segments, (c, v) => (t(), a("span", {
            key: v,
            class: z(["h-full transition-all", r[c.tone ?? "neutral"]]),
            style: ne({ width: c.width })
          }, null, 6))), 128))
        ], 8, vb)) : w("", !0)
      ], 8, fb))), 128))
    ]));
  }
}), gb = {
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
}, hb = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function bb(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function xb(e, n) {
  return n || (e ? gb[bb(e)] ?? "neutral" : "neutral");
}
function yb(e, n) {
  return hb[xb(e, n)];
}
const ke = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const n = e, l = y(() => yb(n.status, n.tone));
    return (r, s) => (t(), T(Ee, {
      variant: l.value,
      class: z(n.class)
    }, {
      default: V(() => [
        H(r.$slots, "default", {}, () => [
          R(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), kb = ["data-layout"], $b = ["src", "alt"], wb = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Cb = ["src"], Sb = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Mb = ["onMouseenter"], Bb = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, _b = { class: "min-w-0" }, Ab = { class: "truncate text-sm font-medium" }, Pb = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, zb = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Ob = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Vb = { class: "min-w-0" }, jb = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Lb = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, Tb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Db = ["d"], Fb = ["aria-label"], Eb = /* @__PURE__ */ O({
  __name: "CatalogCard",
  props: {
    item: {},
    layout: { default: "grid" }
  },
  emits: ["select", "cart"],
  setup(e, { emit: n }) {
    const l = {
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-destructive",
      info: "bg-info",
      neutral: "bg-muted-foreground/40"
    }, r = e, s = n, i = K(0);
    function d(S) {
      if (typeof S != "string")
        return null;
      const b = S.trim();
      return b === "" ? null : /^(https?:)?\/\//i.test(b) ? b : null;
    }
    const u = y(() => {
      const S = [r.item.image, ...r.item.images ?? []].map(d).filter((b) => b !== null);
      return [...new Set(S)];
    }), c = y(() => u.value[i.value] ?? u.value[0] ?? null), v = y(
      () => r.item.label.split(/\s+/).slice(0, 2).map((S) => S[0]?.toUpperCase() ?? "").join("")
    ), p = y(() => {
      const S = r.item.progress;
      if (!S)
        return null;
      const b = Math.max(S.total ?? 100, S.value, 1);
      return `${Math.min(100, Math.max(0, S.value / b * 100)).toFixed(2)}%`;
    }), h = y(() => u.value.length > 1 ? u.value[1] : null), C = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), k = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function $(S) {
      S.stopPropagation(), s("cart", r.item.key);
    }
    return (S, b) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: z(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: b[0] || (b[0] = (g) => s("select", e.item.key)),
      onKeydown: b[1] || (b[1] = Fa(ve((g) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: b[2] || (b[2] = (g) => i.value = 0)
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
        }, null, 8, $b)) : (t(), a("span", wb, f(v.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Cb)) : w("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), a("div", Sb, [
          (t(!0), a(A, null, j(u.value, (g, m) => (t(), a("span", {
            key: m,
            class: z(["size-1.5 rounded-full", m === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (M) => i.value = m
          }, null, 42, Mb))), 128))
        ])) : w("", !0)
      ], 2),
      o("div", {
        class: z(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Bb, [
          o("div", _b, [
            o("p", Ab, f(e.item.label), 1),
            e.item.caption ? (t(), a("p", Pb, f(e.item.caption), 1)) : w("", !0),
            e.item.facts?.length ? (t(), a("p", zb, f(e.item.facts.join(" · ")), 1)) : w("", !0)
          ]),
          e.item.status ? (t(), T(ke, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : w("", !0)
        ]),
        o("div", Ob, [
          o("div", Vb, [
            e.item.price ? (t(), a("p", jb, f(e.item.price), 1)) : w("", !0),
            k.value ? (t(), a("p", Lb, f(k.value), 1)) : w("", !0)
          ]),
          C.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: $
          }, [
            (t(), a("svg", Tb, [
              o("path", {
                d: x(de)("cart")
              }, null, 8, Db)
            ]))
          ])) : w("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), a("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: z(["block h-full", l[e.item.progress?.tone ?? "neutral"]]),
            style: ne({ width: p.value })
          }, null, 6)
        ], 8, Fb)) : w("", !0)
      ], 2)
    ], 42, kb));
  }
});
function Ib(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Nb(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Rb(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Ub = ["data-featured", "data-recommended"], Hb = { class: "flex flex-col gap-1" }, Kb = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, qb = { key: 0 }, Gb = { key: 1 }, Wb = { key: 2 }, Zb = { key: 3 }, Jb = { class: "text-sm font-semibold" }, Yb = { class: "flex items-baseline gap-1" }, Qb = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Xb = { class: "text-muted-foreground text-sm" }, e1 = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, t1 = { class: "text-muted-foreground mt-1 text-xs" }, a1 = { class: "flex flex-1 flex-col gap-2 text-sm" }, l1 = { class: "flex min-w-0 items-start gap-2" }, n1 = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, o1 = ["d"], s1 = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, r1 = ["d"], i1 = { class: "capitalize" }, d1 = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, u1 = { class: "text-foreground font-medium" }, c1 = { class: "mt-auto flex gap-2 pt-2" }, f1 = /* @__PURE__ */ O({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(
      () => l.plan.priceFormatted ?? String(l.plan.price)
    ), i = y(
      () => !!(l.plan.featured || l.plan.recommended)
    ), d = y(() => {
      const c = l.plan.perks ?? {};
      return Object.entries(c).map(([v, p]) => ({
        key: v,
        label: v.replace(/_/g, " "),
        granted: Rb(p.value),
        display: Nb(p.value)
      }));
    }), u = y(() => l.plan.extraPerks ?? []);
    return (c, v) => (t(), a("article", {
      class: z(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", Hb, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", Kb, [
          e.plan.recommended ? (t(), a("span", qb, "Recommended")) : e.plan.featured ? (t(), a("span", Gb, "Featured")) : w("", !0),
          e.plan.trial ? (t(), a("span", Wb, "Trial")) : w("", !0),
          e.plan.active === !1 ? (t(), a("span", Zb, "Inactive")) : w("", !0)
        ])) : w("", !0),
        o("h3", Jb, f(e.plan.name), 1),
        o("p", Yb, [
          o("span", Qb, f(s.value), 1),
          o("span", Xb, f(x(Ib)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", e1, f(e.plan.shortDescription), 1)) : w("", !0),
        o("p", t1, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", a1, [
        (t(!0), a(A, null, j(d.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", l1, [
            o("span", {
              class: z(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", n1, [
                o("path", {
                  d: x(de)("check")
                }, null, 8, o1)
              ])) : (t(), a("svg", s1, [
                o("path", {
                  d: x(de)("x")
                }, null, 8, r1)
              ]))
            ], 2),
            o("span", i1, f(p.label), 1)
          ]),
          p.display ? (t(), a("span", d1, f(p.display), 1)) : w("", !0)
        ]))), 128)),
        (t(!0), a(A, null, j(u.value, (p, h) => (t(), a("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, f(p.key), 1),
          o("span", u1, f(p.value), 1)
        ]))), 128))
      ]),
      o("footer", c1, [
        D(re, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: v[0] || (v[0] = (p) => r("edit", e.plan.id))
        }, {
          default: V(() => [...v[2] || (v[2] = [
            R(" Edit ", -1)
          ])]),
          _: 1
        }),
        D(re, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: v[1] || (v[1] = (p) => r("delete", e.plan.id))
        }, {
          default: V(() => [...v[3] || (v[3] = [
            R(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, Ub));
  }
}), m1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, p1 = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, v1 = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, g1 = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, h1 = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, N3 = /* @__PURE__ */ O({
  __name: "PlanGrid",
  props: {
    plans: {},
    title: {},
    description: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["create", "edit", "delete"],
  setup(e, { emit: n }) {
    const l = n;
    return (r, s) => (t(), a("div", {
      class: z(["w-full space-y-6", e.embedded ? "" : x(Ie)]),
      "data-slot": "plan-grid"
    }, [
      o("header", m1, [
        o("div", null, [
          e.title ? (t(), a("h1", p1, f(e.title), 1)) : w("", !0),
          e.description ? (t(), a("p", v1, f(e.description), 1)) : w("", !0)
        ]),
        D(re, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => l("create"))
        }, {
          default: V(() => [...s[3] || (s[3] = [
            R("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", g1, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", h1, [
        (t(!0), a(A, null, j(e.plans, (i) => (t(), T(f1, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => l("edit", d)),
          onDelete: s[2] || (s[2] = (d) => l("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), b1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, x1 = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, y1 = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, k1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, $1 = { class: "space-y-1.5" }, w1 = { class: "space-y-1.5" }, C1 = { class: "space-y-1.5" }, S1 = { class: "space-y-1.5" }, M1 = { class: "space-y-1.5" }, B1 = { class: "flex items-center gap-3 text-sm" }, _1 = { class: "flex items-center gap-3 text-sm" }, A1 = { class: "flex items-center gap-3 text-sm" }, P1 = {
  key: 0,
  class: "space-y-1.5"
}, z1 = { class: "flex items-center gap-3 text-sm" }, O1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, V1 = { class: "space-y-1.5" }, j1 = ["value"], L1 = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, T1 = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, D1 = ["id", "value", "onInput"], F1 = { class: "space-y-2" }, E1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, I1 = ["d"], N1 = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", xt = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", R3 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = () => ({
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
    }), r = e, s = n, i = Qe(l());
    function d(b, g) {
      const m = i.perks?.[b]?.value;
      return m ?? g;
    }
    function u(b, g, m) {
      const M = i.perks?.[b];
      i.perks = {
        ...i.perks ?? {},
        [b]: {
          value: g,
          overview: m ?? M?.overview ?? ""
        }
      };
    }
    function c(b, g) {
      const m = i.perks?.[b];
      i.perks = {
        ...i.perks ?? {},
        [b]: {
          value: m?.value ?? (b === "modules" ? [] : 0),
          overview: g
        }
      };
    }
    function v(b) {
      const g = b ? { ...l(), ...b } : l();
      i.id = g.id, i.name = g.name, i.shortDescription = g.shortDescription ?? "", i.description = g.description ?? "", i.days = g.days, i.price = g.price, i.featured = g.featured ?? !1, i.recommended = g.recommended ?? !1, i.trial = g.trial ?? !1, i.trialDays = g.trialDays ?? 0, i.active = g.active ?? !0, i.perks = { ...g.perks ?? {} }, i.extraPerks = [...g.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    v(r.plan), ce(
      () => r.plan,
      (b) => v(b),
      { deep: !0 }
    );
    const p = y({
      get: () => {
        const b = d("modules", []);
        return Array.isArray(b) ? b.map(String) : [];
      },
      set: (b) => {
        u("modules", C(b.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), h = y(
      () => r.modules.map((b) => ({ value: b.key, label: b.label }))
    );
    function C(b) {
      const g = Object.fromEntries(r.modules.map((_) => [_.key, _])), m = new Set(b);
      for (const _ of r.modules)
        if (!m.has(_.key))
          for (const P of _.children ?? [])
            m.delete(P);
      let M = !0;
      for (; M; ) {
        M = !1;
        for (const _ of [...m])
          for (const P of g[_]?.requires ?? [])
            m.has(P) || (m.add(P), M = !0);
      }
      return [...m];
    }
    function k() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function $(b) {
      i.extraPerks = (i.extraPerks ?? []).filter((g, m) => m !== b);
    }
    function S() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((b) => b.key.trim() !== "")
      });
    }
    return (b, g) => (t(), a("form", {
      class: z(["w-full space-y-6", e.embedded ? "" : x(Ie)]),
      "data-slot": "plan-editor",
      onSubmit: ve(S, ["prevent"])
    }, [
      o("header", b1, [
        o("div", null, [
          o("h1", x1, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          g[13] || (g[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        D(re, {
          type: "button",
          variant: "outline",
          onClick: g[0] || (g[0] = (m) => s("cancel"))
        }, {
          default: V(() => [...g[14] || (g[14] = [
            R("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", y1, [
        o("section", k1, [
          g[26] || (g[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", $1, [
            D(Se, { for: "plan-name" }, {
              default: V(() => [...g[15] || (g[15] = [
                R("Plan name", -1)
              ])]),
              _: 1
            }),
            D(ye, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": g[1] || (g[1] = (m) => i.name = m),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", w1, [
            D(Se, { for: "plan-short" }, {
              default: V(() => [...g[16] || (g[16] = [
                R("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            D(ye, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": g[2] || (g[2] = (m) => i.shortDescription = m),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", C1, [
            D(Se, { for: "plan-description" }, {
              default: V(() => [...g[17] || (g[17] = [
                R("Plan description", -1)
              ])]),
              _: 1
            }),
            me(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": g[3] || (g[3] = (m) => i.description = m),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: z(xt)
            }, null, 512), [
              [we, i.description]
            ])
          ]),
          o("div", S1, [
            D(Se, { for: "plan-days" }, {
              default: V(() => [...g[18] || (g[18] = [
                R("Duration", -1)
              ])]),
              _: 1
            }),
            me(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": g[4] || (g[4] = (m) => i.days = m),
              class: z(N1)
            }, [...g[19] || (g[19] = [
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
          o("div", M1, [
            D(Se, { for: "plan-price" }, {
              default: V(() => [...g[20] || (g[20] = [
                R("Price", -1)
              ])]),
              _: 1
            }),
            D(ye, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": g[5] || (g[5] = (m) => i.price = Number(m))
            }, null, 8, ["model-value"])
          ]),
          o("label", B1, [
            D(x(Ue), {
              checked: !!i.featured,
              "onUpdate:checked": g[6] || (g[6] = (m) => i.featured = m)
            }, null, 8, ["checked"]),
            g[21] || (g[21] = R(" Featured ", -1))
          ]),
          o("label", _1, [
            D(x(Ue), {
              checked: !!i.recommended,
              "onUpdate:checked": g[7] || (g[7] = (m) => i.recommended = m)
            }, null, 8, ["checked"]),
            g[22] || (g[22] = R(" Recommended ", -1))
          ]),
          o("label", A1, [
            D(x(Ue), {
              checked: !!i.trial,
              "onUpdate:checked": g[8] || (g[8] = (m) => i.trial = m)
            }, null, 8, ["checked"]),
            g[23] || (g[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", P1, [
            D(Se, { for: "plan-trial-days" }, {
              default: V(() => [...g[24] || (g[24] = [
                R("Trial days", -1)
              ])]),
              _: 1
            }),
            D(ye, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": g[9] || (g[9] = (m) => i.trialDays = Number(m))
            }, null, 8, ["model-value"])
          ])) : w("", !0),
          o("label", z1, [
            D(x(Ue), {
              checked: i.active !== !1,
              "onUpdate:checked": g[10] || (g[10] = (m) => i.active = m)
            }, null, 8, ["checked"]),
            g[25] || (g[25] = R(" Active ", -1))
          ]),
          D(re, {
            type: "submit",
            disabled: e.processing
          }, {
            default: V(() => [
              R(f(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", O1, [
          g[33] || (g[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", V1, [
            D(Se, null, {
              default: V(() => [...g[27] || (g[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Dt, {
              modelValue: p.value,
              "onUpdate:modelValue": g[11] || (g[11] = (m) => p.value = m),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            D(Se, { for: "plan-modules-overview" }, {
              default: V(() => [...g[28] || (g[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: z(xt),
              onInput: g[12] || (g[12] = (m) => c(
                "modules",
                m.target.value
              ))
            }, null, 40, j1)
          ]),
          (t(!0), a(A, null, j(e.limits, (m) => (t(), a("div", {
            key: m.key,
            class: "space-y-1.5"
          }, [
            m.kind === "toggle" ? (t(), a("label", L1, [
              D(x(Ue), {
                checked: !!d(m.key, !1),
                "onUpdate:checked": (M) => u(
                  m.key,
                  M,
                  i.perks?.[m.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              R(" " + f(m.label), 1)
            ])) : (t(), a(A, { key: 1 }, [
              D(Se, {
                for: `plan-limit-${m.key}`
              }, {
                default: V(() => [
                  R(f(m.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              m.hint ? (t(), a("p", T1, f(m.hint), 1)) : w("", !0),
              D(ye, {
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
              g[29] || (g[29] = o("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            D(Se, {
              for: `plan-overview-${m.key}`
            }, {
              default: V(() => [...g[30] || (g[30] = [
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
            }, null, 40, D1)
          ]))), 128)),
          o("div", F1, [
            g[32] || (g[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(A, null, j(i.extraPerks ?? [], (m, M) => (t(), a("div", {
              key: M,
              class: "flex items-center gap-2"
            }, [
              D(ye, {
                modelValue: m.key,
                "onUpdate:modelValue": (_) => m.key = _,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D(ye, {
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
                default: V(() => [
                  (t(), a("svg", E1, [
                    o("path", {
                      d: x(de)("x")
                    }, null, 8, I1)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            D(re, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: k
            }, {
              default: V(() => [...g[31] || (g[31] = [
                R(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), R1 = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, U1 = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, H1 = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, K1 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, q1 = ["d"], G1 = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, W1 = ["aria-pressed"], Z1 = ["aria-pressed"], J1 = {
  key: 0,
  class: "flex flex-col gap-2"
}, Y1 = ["aria-label"], Q1 = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, X1 = ["aria-pressed", "onClick"], ex = ["aria-label"], tx = { class: "text-muted-foreground mr-1 text-xs font-medium" }, ax = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, lx = ["data-slot"], nx = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, ox = { class: "text-muted-foreground text-xs tabular-nums" }, sx = { class: "flex items-center gap-2" }, rx = ["disabled"], ix = ["disabled"], Ut = /* @__PURE__ */ O({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(""), i = et(e, "modelValue"), d = Qe({}), u = Qe({});
    ce(s, () => h());
    function c(E) {
      const te = E.trim();
      if (te === "")
        return null;
      const U = Number(te);
      return Number.isFinite(U) ? U : null;
    }
    function v() {
      const E = {};
      for (const [te, U] of Object.entries(u))
        E[te] = { min: c(U.min), max: c(U.max) };
      return E;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: v() };
    }
    function h() {
      r("filter", p());
    }
    function C(E, te) {
      d[E] = d[E] === te ? null : te, h();
    }
    function k(E) {
      return u[E] ?? { min: "", max: "" };
    }
    function $(E, te, U) {
      const G = u[E] ?? { min: "", max: "" };
      u[E] = { ...G, [te]: U }, h();
    }
    function S(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const b = y(() => l.facets.filter((E) => (E.kind ?? "chips") === "chips")), g = y(() => l.facets.filter((E) => E.kind === "range")), m = y(
      () => l.searchable || l.facets.length > 0 || l.layoutToggle
    ), M = K(1);
    ce(
      () => l.items.map((E) => E.key).join(","),
      () => {
        M.value = 1;
      }
    );
    const _ = y(() => {
      const E = l.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(l.items.length / E));
    }), P = y(() => {
      const E = l.pageSize;
      if (!E || E < 1)
        return l.items;
      const te = (M.value - 1) * E;
      return l.items.slice(te, te + E);
    });
    function N(E) {
      M.value = Math.min(_.value, Math.max(1, E));
    }
    return (E, te) => (t(), a("div", {
      class: z(["flex flex-col gap-4", x(ka)])
    }, [
      m.value ? (t(), a("div", R1, [
        o("div", U1, [
          e.searchable ? (t(), a("div", H1, [
            (t(), a("svg", K1, [
              o("path", {
                d: x(de)("search")
              }, null, 8, q1)
            ])),
            D(ye, {
              modelValue: s.value,
              "onUpdate:modelValue": te[0] || (te[0] = (U) => s.value = U),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: S
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : w("", !0),
          H(E.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", G1, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (U) => i.value = "grid")
            }, " Tiles ", 10, W1),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (U) => i.value = "list")
            }, " List ", 10, Z1)
          ])) : w("", !0)
        ]),
        b.value.length || g.value.length ? (t(), a("div", J1, [
          (t(!0), a(A, null, j(b.value, (U) => (t(), a("div", {
            key: U.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": U.label ?? U.key
          }, [
            U.label ? (t(), a("span", Q1, f(U.label), 1)) : w("", !0),
            (t(!0), a(A, null, j(U.options ?? [], (G) => (t(), a("button", {
              key: G.value,
              type: "button",
              class: z([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[U.key] === G.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[U.key] === G.value ? "true" : "false",
              onClick: (W) => C(U.key, G.value)
            }, f(G.label), 11, X1))), 128))
          ], 8, Y1))), 128)),
          (t(!0), a(A, null, j(g.value, (U) => (t(), a("div", {
            key: U.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": U.label ?? U.key,
            "data-slot": "catalog-range"
          }, [
            o("span", tx, f(U.label ?? U.key), 1),
            D(ye, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${U.label ?? U.key} from`,
              "model-value": k(U.key).min,
              "onUpdate:modelValue": (G) => $(U.key, "min", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            te[7] || (te[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            D(ye, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${U.label ?? U.key} to`,
              "model-value": k(U.key).max,
              "onUpdate:modelValue": (G) => $(U.key, "max", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, ex))), 128))
        ])) : w("", !0)
      ])) : w("", !0),
      e.items.length === 0 ? (t(), a("p", ax, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: z(
          i.value === "list" ? "flex flex-col gap-3" : x(hc)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(A, null, j(P.value, (U) => (t(), T(Eb, {
          key: U.key,
          item: U,
          layout: i.value,
          onSelect: te[3] || (te[3] = (G) => r("select", G)),
          onCart: te[4] || (te[4] = (G) => r("cart", G))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, lx)),
      e.pageSize && _.value > 1 ? (t(), a("div", nx, [
        o("p", ox, " Page " + f(M.value) + " of " + f(_.value), 1),
        o("div", sx, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: M.value <= 1,
            onClick: te[5] || (te[5] = (U) => N(M.value - 1))
          }, " Previous ", 8, rx),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: M.value >= _.value,
            onClick: te[6] || (te[6] = (U) => N(M.value + 1))
          }, " Next ", 8, ix)
        ])
      ])) : w("", !0)
    ], 2));
  }
}), dx = ["aria-label"], ux = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, cx = { class: "min-w-0" }, fx = { class: "text-base font-semibold" }, mx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, px = { class: "flex shrink-0 items-center gap-2" }, vx = { class: "min-h-0 flex-1 overflow-y-auto" }, gx = {
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null);
    let i = null, d = "";
    function u(c) {
      if (!l.open)
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
      const p = v[0], h = v[v.length - 1];
      c.shiftKey && document.activeElement === p ? (c.preventDefault(), h.focus()) : !c.shiftKey && document.activeElement === h && (c.preventDefault(), p.focus());
    }
    return ce(
      () => l.open,
      async (c) => {
        if (c) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", u), await ze(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", u), i?.focus?.();
      }
    ), xe(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = d;
    }), (c, v) => (t(), T(qe, { to: "body" }, [
      D(De, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: V(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: v[0] || (v[0] = (p) => r("close"))
          })) : w("", !0)
        ]),
        _: 1
      }),
      D(De, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: V(() => [
          e.open ? (t(), a("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: z(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", ux, [
              o("div", cx, [
                o("h2", fx, f(e.title), 1),
                e.description ? (t(), a("p", mx, f(e.description), 1)) : w("", !0)
              ]),
              o("div", px, [
                H(c.$slots, "header-actions"),
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
            o("div", vx, [
              H(c.$slots, "default")
            ]),
            c.$slots.footer ? (t(), a("footer", gx, [
              H(c.$slots, "footer")
            ])) : w("", !0)
          ], 10, dx)) : w("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Ve() {
  return { query: "", selected: {}, ranges: {} };
}
function hx(e, n) {
  const l = e.metrics?.[n];
  if (typeof l == "number" && Number.isFinite(l))
    return l;
  const r = e.facets?.[n];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function bx(e, n) {
  return !n || n.min === null && n.max === null ? !0 : !(e === null || n.min !== null && e < n.min || n.max !== null && e > n.max);
}
function Kt(e, n) {
  const l = n.query.trim().toLowerCase();
  if (l !== "" && ![
    e.key,
    e.sku ?? "",
    e.label,
    e.caption ?? "",
    ...e.facts ?? []
  ].join(" ").toLowerCase().includes(l))
    return !1;
  for (const [r, s] of Object.entries(n.selected ?? {}))
    if (s && (e.facets?.[r] ?? null) !== s)
      return !1;
  for (const [r, s] of Object.entries(n.ranges ?? {}))
    if (!bx(hx(e, r), s))
      return !1;
  return !0;
}
function xx(e, n) {
  const l = n.trim().toLowerCase();
  return l === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === l || i === l;
  }) ?? null;
}
function ut(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (n) => n.min !== null || n.max !== null
  );
}
const yx = { class: "flex flex-col gap-6 p-4" }, kx = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, $x = { class: "text-sm font-semibold" }, wx = { class: "flex flex-wrap items-center gap-1.5" }, Cx = ["aria-pressed", "onClick"], Sx = { class: "text-sm font-semibold" }, Mx = { class: "flex flex-wrap items-center gap-1.5" }, Bx = { key: 0 }, _a = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(""), i = Qe({}), d = Qe({}), u = y(
      () => l.facets.filter((_) => (_.kind ?? "chips") === "chips")
    ), c = y(() => l.facets.filter((_) => _.kind === "range"));
    function v(_) {
      return _ == null ? "" : String(_);
    }
    function p() {
      s.value = l.applied.query ?? "";
      for (const _ of Object.keys(i))
        delete i[_];
      for (const [_, P] of Object.entries(l.applied.selected ?? {}))
        i[_] = P;
      for (const _ of Object.keys(d))
        delete d[_];
      for (const [_, P] of Object.entries(l.applied.ranges ?? {}))
        d[_] = { min: v(P.min), max: v(P.max) };
    }
    ce(
      () => l.open,
      (_) => {
        _ && p();
      }
    );
    function h(_) {
      const P = _.trim();
      if (P === "")
        return null;
      const N = Number(P);
      return Number.isFinite(N) ? N : null;
    }
    function C() {
      const _ = {};
      for (const [P, N] of Object.entries(d))
        _[P] = { min: h(N.min), max: h(N.max) };
      return _;
    }
    function k() {
      return {
        query: l.hideSearch ? l.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const $ = y(() => {
      let _ = l.hideSearch || s.value.trim() === "" ? 0 : 1;
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
      return d[_] ?? { min: "", max: "" };
    }
    function g(_, P, N) {
      const E = d[_] ?? { min: "", max: "" };
      d[_] = { ...E, [P]: N };
    }
    function m() {
      r("apply", k());
    }
    function M() {
      s.value = "";
      for (const _ of Object.keys(i))
        i[_] = null;
      for (const _ of Object.keys(d))
        d[_] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        l.hideSearch ? { ...Ve(), query: l.applied.query } : Ve()
      );
    }
    return (_, P) => (t(), T(Ht, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (N) => r("close"))
    }, {
      footer: V(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: M
        }, " Reset all "),
        D(re, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (N) => r("close"))
        }, {
          default: V(() => [...P[5] || (P[5] = [
            R("Cancel", -1)
          ])]),
          _: 1
        }),
        D(re, {
          size: "sm",
          onClick: m
        }, {
          default: V(() => [
            P[6] || (P[6] = R(" Apply", -1)),
            $.value ? (t(), a("span", Bx, " (" + f($.value) + ")", 1)) : w("", !0)
          ]),
          _: 1
        })
      ]),
      default: V(() => [
        o("div", yx, [
          e.hideSearch ? w("", !0) : (t(), a("label", kx, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            D(ye, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (N) => s.value = N),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(A, null, j(u.value, (N) => (t(), a("section", {
            key: N.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", $x, f(N.label ?? N.key), 1),
            o("div", wx, [
              (t(!0), a(A, null, j(N.options ?? [], (E) => (t(), a("button", {
                key: E.value,
                type: "button",
                class: z([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[N.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[N.key] === E.value ? "true" : "false",
                onClick: (te) => S(N.key, E.value)
              }, f(E.label), 11, Cx))), 128))
            ])
          ]))), 128)),
          (t(!0), a(A, null, j(c.value, (N) => (t(), a("section", {
            key: N.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Sx, f(N.label ?? N.key), 1),
            o("div", Mx, [
              D(ye, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${N.label ?? N.key} from`,
                "model-value": b(N.key).min,
                "onUpdate:modelValue": (E) => g(N.key, "min", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              P[4] || (P[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              D(ye, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${N.label ?? N.key} to`,
                "model-value": b(N.key).max,
                "onUpdate:modelValue": (E) => g(N.key, "max", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), _x = ["aria-disabled"], Ax = ["disabled"], Px = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, zx = ["d"], Ox = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Vx = ["disabled"], jx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Lx = ["d"], Tx = /* @__PURE__ */ O({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ je({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ je(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const l = et(e, "modelValue"), r = n, s = y(() => l.value <= e.min), i = y(() => e.max !== null && l.value >= e.max);
    function d(u) {
      if (e.disabled)
        return;
      const c = l.value + u;
      c < e.min || e.max !== null && c > e.max || (l.value = c, u < 0 ? r("decrease", c) : r("increase", c));
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
        onClick: c[0] || (c[0] = (v) => d(-1))
      }, [
        (t(), a("svg", Px, [
          o("path", {
            d: x(de)("minus")
          }, null, 8, zx)
        ]))
      ], 8, Ax),
      o("span", Ox, f(l.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: c[1] || (c[1] = (v) => d(1))
      }, [
        (t(), a("svg", jx, [
          o("path", {
            d: x(de)("plus")
          }, null, 8, Lx)
        ]))
      ], 8, Vx)
    ], 8, _x));
  }
}), Dx = { class: "divide-border flex flex-col divide-y" }, Fx = { class: "min-w-0" }, Ex = { class: "truncate text-sm font-medium" }, Ix = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Nx = { class: "flex shrink-0 items-center gap-2 text-sm" }, Rx = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Ux = {
  key: 2,
  class: "font-medium tabular-nums"
}, Hx = ["aria-label", "onClick"], Kx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, qx = ["d"], Gx = /* @__PURE__ */ O({
  __name: "LineItems",
  props: {
    items: {},
    editable: { type: Boolean, default: !1 }
  },
  emits: ["qty", "remove"],
  setup(e, { emit: n }) {
    const l = n;
    function r(s) {
      const i = s.qty;
      if (typeof i == "number" && Number.isFinite(i))
        return i;
      const d = Number(i);
      return Number.isFinite(d) && d > 0 ? d : 1;
    }
    return (s, i) => (t(), a("div", Dx, [
      (t(!0), a(A, null, j(e.items, (d) => (t(), a("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Fx, [
          o("p", Ex, f(d.label), 1),
          d.detail ? (t(), a("p", Ix, f(d.detail), 1)) : w("", !0)
        ]),
        o("div", Nx, [
          e.editable ? (t(), T(Tx, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => l("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), a("span", Rx, " ×" + f(d.qty), 1)) : w("", !0),
          d.amount ? (t(), a("span", Ux, f(d.amount), 1)) : w("", !0),
          d.status ? (t(), T(ke, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : w("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => l("remove", d.key)
          }, [
            (t(), a("svg", Kx, [
              o("path", {
                d: x(de)("trash")
              }, null, 8, qx)
            ]))
          ], 8, Hx)) : w("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Wx = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Zx = { class: "border-b px-4 py-3" }, Jx = { class: "text-sm font-medium" }, Yx = { class: "flex-1 px-4 py-3" }, Qx = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Xx = { class: "text-foreground block font-medium" }, ey = { class: "mt-1 block" }, ty = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, ay = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, ly = { class: "tabular-nums" }, ny = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, oy = { class: "text-muted-foreground" }, sy = {
  key: 0,
  class: "tabular-nums"
}, ry = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, iy = { class: "text-muted-foreground" }, dy = { class: "tabular-nums" }, uy = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, cy = { class: "tabular-nums" }, fy = {
  key: 4,
  class: "pt-1"
}, my = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = n;
    return (r, s) => (t(), a("aside", Wx, [
      o("header", Zx, [
        o("h2", Jx, f(e.title), 1)
      ]),
      o("div", Yx, [
        e.items.length === 0 ? (t(), a("p", Qx, [
          o("span", Xx, f(e.emptyTitle), 1),
          o("span", ey, f(e.emptyDescription), 1)
        ])) : (t(), T(Gx, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => l("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => l("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", ty, [
        e.subtotal ? (t(), a("div", ay, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", ly, f(e.subtotal), 1)
        ])) : w("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", ny, [
          o("span", oy, f(e.discountLabel), 1),
          e.discount ? (t(), a("span", sy, f(e.discount), 1)) : w("", !0),
          H(r.$slots, "discount")
        ])) : w("", !0),
        e.tax ? (t(), a("div", ry, [
          o("span", iy, f(e.taxLabel), 1),
          o("span", dy, f(e.tax), 1)
        ])) : w("", !0),
        e.total ? (t(), a("div", uy, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", cy, f(e.total), 1)
        ])) : w("", !0),
        r.$slots.pay ? (t(), a("div", fy, [
          H(r.$slots, "pay")
        ])) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), py = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, vy = { class: "flex flex-col gap-4" }, gy = { class: "flex flex-wrap items-start justify-between gap-3" }, hy = { class: "flex items-center gap-2" }, by = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, U3 = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["select", "pay"], ["update:cart"]),
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(Ve()), i = K(!1), d = et(e, "cart"), u = K(!1), c = y(
      () => l.items.filter((U) => Kt(U, s.value))
    );
    function v(U) {
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
    function h(U) {
      return U ? l.parsePrice(U) : 0;
    }
    function C(U, G, W) {
      return {
        ...U,
        qty: G,
        amount: l.formatMoney(W * G)
      };
    }
    function k(U) {
      const G = xx(l.items, U);
      G && $(G.key);
    }
    function $(U) {
      const G = l.items.find((ae) => ae.key === U);
      if (!G || G.status === "out-of-stock")
        return;
      u.value = !1;
      const W = h(G);
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
          amount: l.formatMoney(W)
        }
      ];
    }
    function S(U, G) {
      const W = l.items.find((ae) => ae.key === U), le = h(W);
      d.value = d.value.map(
        (ae) => ae.key === U ? C(ae, G, le) : ae
      );
    }
    function b(U) {
      d.value = d.value.filter((G) => G.key !== U);
    }
    const g = y(
      () => d.value.reduce((U, G) => {
        const W = l.items.find((le) => le.key === G.key);
        return U + h(W) * Number(G.qty ?? 1);
      }, 0)
    ), m = y(
      () => l.discountRate > 0 ? Math.round(g.value * l.discountRate) : 0
    ), M = y(
      () => Math.round((g.value - m.value) * l.taxRate)
    ), _ = y(
      () => d.value.length ? l.formatMoney(g.value) : null
    ), P = y(
      () => d.value.length && m.value > 0 ? `−${l.formatMoney(m.value)}` : null
    ), N = y(
      () => d.value.length && l.taxRate > 0 ? l.formatMoney(M.value) : null
    ), E = y(
      () => d.value.length ? l.formatMoney(
        g.value - m.value + M.value
      ) : null
    );
    function te() {
      u.value = !0, r("pay", d.value);
    }
    return (U, G) => (t(), a(A, null, [
      o("div", py, [
        o("section", vy, [
          o("div", gy, [
            D(Oe, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", hy, [
              x(ut)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: G[0] || (G[0] = (W) => s.value = {
                  ...x(Ve)(),
                  query: s.value.query
                })
              }, " Clear ")) : w("", !0),
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
                x(ut)(s.value) ? (t(), a("span", by, " on ")) : w("", !0)
              ])) : w("", !0)
            ])
          ]),
          D(Ut, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: c.value,
            onFilter: v,
            onSelect: G[2] || (G[2] = (W) => r("select", W)),
            onCart: $,
            onScan: k
          }, null, 8, ["search-placeholder", "items"])
        ]),
        D(my, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: _.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: N.value,
          total: E.value,
          onQty: S,
          onRemove: b
        }, {
          pay: V(() => [
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
                default: V(() => [
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
        onReset: G[4] || (G[4] = (W) => s.value = { ...x(Ve)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), xy = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, yy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, ky = ["src", "alt"], $y = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, wy = ["src"], Cy = { class: "flex items-start justify-between gap-3" }, Sy = { class: "text-lg font-semibold tabular-nums" }, My = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, By = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, _y = { class: "grid grid-cols-2 gap-3" }, Ay = { class: "flex flex-col gap-2" }, Py = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, H3 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: n }) {
    const l = e, r = n;
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
    const d = y(() => l.item?.kind === "unit"), u = y(() => {
      const p = l.item;
      if (!p)
        return [];
      const h = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(p.key) % 7);
    }), c = y(() => {
      const p = l.item;
      if (!p)
        return [];
      const h = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(p.key) % 5 + 1);
    }), v = y(
      () => !!l.item && !d.value && l.item?.status !== "out-of-stock"
    );
    return (p, h) => (t(), T(Ht, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: h[1] || (h[1] = (C) => r("close"))
    }, Ye({
      default: V(() => [
        e.item ? (t(), a("div", xy, [
          o("div", yy, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, ky)) : w("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", $y, [
            (t(!0), a(A, null, j(e.item.images, (C, k) => (t(), a("img", {
              key: k,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, wy))), 128))
          ])) : w("", !0),
          o("div", Cy, [
            o("div", null, [
              o("p", Sy, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", My, f(e.item.stock) + " in stock ", 1)) : w("", !0)
            ]),
            e.item.status ? (t(), T(ke, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", By, f(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("div", _y, [
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
          o("div", Ay, [
            o("p", Py, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(ft, {
              data: d.value ? c.value : u.value,
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
        fn: V(() => [
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
}), zy = { class: "flex flex-col gap-10" }, Oy = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Vy = { class: "flex flex-col gap-3" }, jy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Ly = ["src", "alt"], Ty = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Dy = ["aria-label", "aria-pressed", "onClick"], Fy = ["src"], Ey = { class: "flex flex-col gap-5" }, Iy = { class: "flex flex-wrap items-start justify-between gap-3" }, Ny = { class: "min-w-0" }, Ry = { class: "text-2xl font-semibold tracking-tight" }, Uy = { class: "text-muted-foreground mt-1 text-sm" }, Hy = { class: "text-2xl font-semibold tabular-nums" }, Ky = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, qy = { class: "grid grid-cols-2 gap-3 text-sm" }, Gy = {
  key: 0,
  class: "rounded-lg border p-3"
}, Wy = { class: "mt-1 font-medium" }, Zy = { class: "rounded-lg border p-3" }, Jy = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, Yy = { class: "mt-1 font-medium" }, Qy = { class: "flex flex-col gap-4" }, Xy = { class: "grid gap-4 sm:grid-cols-2" }, e0 = { class: "bg-card rounded-lg border p-4" }, t0 = { class: "mb-3 text-sm font-medium" }, a0 = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: n }) {
    const l = e, r = n;
    function s(k) {
      let $ = 0;
      for (const S of k)
        $ = $ * 31 + S.charCodeAt(0) >>> 0;
      return $;
    }
    function i(k, $) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((b, g) => ({
        label: b,
        value: Math.max(0, Math.round(k + Math.sin(g + $) * k * 0.18))
      }));
    }
    const d = y(() => l.item.kind === "unit"), u = y(() => {
      const k = [l.item.image, ...l.item.images ?? []].filter(
        ($) => typeof $ == "string" && $ !== ""
      );
      return [...new Set(k)];
    }), c = K(0), v = y(() => {
      const k = l.item.stock ?? l.item.progress?.value ?? l.item.metrics?.price ?? l.item.metrics?.rent ?? 12;
      return i(Number(k) || 12, s(l.item.key) % 7);
    }), p = y(() => {
      const k = l.item.progress?.value ?? (l.item.status === "occupied" ? 80 : 20);
      return i(Number(k) || 20, s(l.item.key) % 5 + 1);
    }), h = y(() => d.value ? p.value : v.value), C = y(() => !d.value && l.item.status !== "out-of-stock");
    return (k, $) => (t(), a("div", zy, [
      o("div", Oy, [
        o("div", Vy, [
          o("div", jy, [
            u.value[c.value] ? (t(), a("img", {
              key: 0,
              src: u.value[c.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Ly)) : w("", !0)
          ]),
          u.value.length > 1 ? (t(), a("div", Ty, [
            (t(!0), a(A, null, j(u.value, (S, b) => (t(), a("button", {
              key: S,
              type: "button",
              class: z(["size-16 shrink-0 overflow-hidden rounded-md border", b === c.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${b + 1}`,
              "aria-pressed": b === c.value ? "true" : "false",
              onClick: (g) => c.value = b
            }, [
              o("img", {
                src: S,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, Fy)
            ], 10, Dy))), 128))
          ])) : w("", !0)
        ]),
        o("div", Ey, [
          o("div", Iy, [
            o("div", Ny, [
              o("h1", Ry, f(e.item.label), 1),
              o("p", Uy, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(ke, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          o("p", Hy, f(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", Ky, f(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("dl", qy, [
            e.item.sku ? (t(), a("div", Gy, [
              $[1] || ($[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", Wy, f(e.item.sku), 1)
            ])) : w("", !0),
            o("div", Zy, [
              o("dt", Jy, f(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", Yy, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          C.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: $[0] || ($[0] = (S) => r("cart", e.item.key))
          }, " Add to cart ")) : w("", !0)
        ])
      ]),
      o("section", Qy, [
        $[2] || ($[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", Xy, [
          D(dt, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          D(dt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: v.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", e0, [
          o("p", t0, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(Bv, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), l0 = ["href"], K3 = /* @__PURE__ */ O({
  __name: "CatalogItemView",
  props: {
    item: {},
    catalogHref: { default: "/catalog" },
    backLabel: { default: "Back to catalog" },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["cart"],
  setup(e, { emit: n }) {
    const l = n;
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
      ], 8, l0),
      D(a0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => l("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), n0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, o0 = ["aria-selected", "onClick"], s0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, r0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, i0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, d0 = ["aria-pressed"], u0 = ["aria-pressed"], q3 = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ je({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ je(["select", "cart"], ["update:layout"]),
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(l.tabs[0]?.key ?? ""), i = et(e, "layout"), d = K({}), u = K(!1);
    ce(
      () => l.tabs.map((S) => S.key).join(","),
      (S) => {
        S.split(",").includes(s.value) || (s.value = l.tabs[0]?.key ?? "");
      }
    );
    function c(S) {
      return d.value[S] ?? Ve();
    }
    const v = y(
      () => l.tabs.find((S) => S.key === s.value) ?? l.tabs[0] ?? null
    ), p = y(
      () => v.value ? c(v.value.key) : Ve()
    ), h = y(() => {
      const S = v.value;
      return S ? S.items.filter((b) => Kt(b, c(S.key))) : [];
    });
    function C(S) {
      const b = v.value?.key;
      b && (d.value = {
        ...d.value,
        [b]: { ...c(b), query: S }
      });
    }
    function k() {
      const S = v.value?.key;
      S && (d.value = { ...d.value, [S]: Ve() });
    }
    function $(S) {
      const b = v.value?.key;
      b && (d.value = { ...d.value, [b]: S }, u.value = !1);
    }
    return (S, b) => (t(), a(A, null, [
      o("div", {
        class: z(["flex w-full flex-col gap-8", e.embedded ? "" : x(Ie)])
      }, [
        D(Oe, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", n0, [
          (t(!0), a(A, null, j(e.tabs, (g) => (t(), a("button", {
            key: g.key,
            type: "button",
            class: z([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === g.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === g.key ? "true" : "false",
            onClick: (m) => s.value = g.key
          }, f(g.label), 11, o0))), 128))
        ])) : w("", !0),
        o("div", s0, [
          D(ye, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: v.value?.searchPlaceholder ?? "Search…",
            "aria-label": v.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": b[0] || (b[0] = (g) => C(String(g)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x(ut)(p.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: k
          }, " Clear ")) : w("", !0),
          (v.value?.facets ?? []).length > 0 ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: b[1] || (b[1] = (g) => u.value = !0)
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
            b[9] || (b[9] = R(" Filters ", -1)),
            x(ut)(p.value) ? (t(), a("span", r0, " on ")) : w("", !0)
          ])) : w("", !0),
          o("div", i0, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: b[2] || (b[2] = (g) => i.value = "grid")
            }, " Tiles ", 10, d0),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: b[3] || (b[3] = (g) => i.value = "list")
            }, " List ", 10, u0)
          ])
        ]),
        D(Ut, {
          layout: i.value,
          "onUpdate:layout": b[4] || (b[4] = (g) => i.value = g),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: b[5] || (b[5] = (g) => r("select", g)),
          onCart: b[6] || (b[6] = (g) => r("cart", g))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(_a, {
        open: u.value,
        title: v.value?.filterTitle ?? "Filters",
        "search-placeholder": v.value?.searchPlaceholder ?? "Search…",
        facets: v.value?.facets ?? [],
        applied: p.value,
        onClose: b[7] || (b[7] = (g) => u.value = !1),
        onApply: $,
        onReset: k
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), c0 = { class: "flex flex-col gap-4" }, f0 = { class: "flex flex-col gap-4" }, G3 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(Ve()), i = y(
      () => l.cards.filter((d) => Kt(d, s.value))
    );
    return (d, u) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : x(Ie)])
    }, [
      D(Oe, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", c0, [
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
      o("section", f0, [
        D(Oe, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(Vn, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": V(({ value: c }) => [
            D(ke, {
              status: String(c)
            }, {
              default: V(() => [
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
}), m0 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, p0 = { class: "text-sm font-medium" }, v0 = ["width", "height", "aria-label"], g0 = { class: "flex items-center gap-2" }, h0 = /* @__PURE__ */ O({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(!1);
    let d = null;
    function u() {
      return s.value?.getContext("2d") ?? null;
    }
    function c(S) {
      const b = s.value;
      if (!b)
        return null;
      const g = b.getBoundingClientRect(), m = b.width / g.width, M = b.height / g.height;
      return {
        x: (S.clientX - g.left) * m,
        y: (S.clientY - g.top) * M
      };
    }
    function v(S) {
      l.disabled || (i.value = !0, d = c(S), s.value?.setPointerCapture(S.pointerId));
    }
    function p(S) {
      if (!i.value || l.disabled)
        return;
      const b = u(), g = c(S);
      !b || !g || !d || (b.strokeStyle = "#111827", b.lineWidth = 2.4, b.lineCap = "round", b.lineJoin = "round", b.beginPath(), b.moveTo(d.x, d.y), b.lineTo(g.x, g.y), b.stroke(), d = g);
    }
    function h() {
      i.value = !1, d = null;
    }
    function C() {
      const S = s.value, b = u();
      !S || !b || (b.clearRect(0, 0, S.width, S.height), r("clear"));
    }
    function k() {
      const S = s.value;
      S && r("save", S.toDataURL("image/png"));
    }
    function $() {
      const S = s.value, b = u();
      !S || !b || (b.fillStyle = "#ffffff", b.fillRect(0, 0, S.width, S.height));
    }
    return ge($), xe(() => {
      i.value = !1;
    }), (S, b) => (t(), a("div", m0, [
      o("p", p0, f(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: z(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ve(v, ["prevent"]),
        onPointermove: ve(p, ["prevent"]),
        onPointerup: ve(h, ["prevent"]),
        onPointerleave: ve(h, ["prevent"])
      }, null, 42, v0),
      o("div", g0, [
        D(re, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: V(() => [...b[0] || (b[0] = [
            R(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(re, {
          size: "sm",
          disabled: e.disabled,
          onClick: k
        }, {
          default: V(() => [...b[1] || (b[1] = [
            R("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), b0 = { class: "grid gap-8 lg:grid-cols-2" }, x0 = { class: "flex flex-col gap-3" }, y0 = { class: "text-muted-foreground text-xs" }, k0 = {
  key: 0,
  class: "flex flex-col gap-3"
}, $0 = { class: "flex flex-wrap gap-3" }, w0 = ["onClick"], C0 = ["src", "alt"], S0 = {
  key: 1,
  class: "flex flex-col gap-3"
}, M0 = { class: "flex flex-wrap gap-3" }, B0 = ["onClick"], _0 = ["src", "alt"], A0 = {
  key: 2,
  class: "flex flex-col gap-4"
}, P0 = { class: "flex flex-wrap items-center gap-2" }, z0 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, O0 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, V0 = { class: "flex flex-col gap-2" }, j0 = ["src"], L0 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, T0 = ["src"], W3 = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, l = K([]), r = K([]), s = K(null), i = K(null), d = K(null), u = K(n.documents[0]?.key ?? "");
    function c(S) {
      try {
        const b = localStorage.getItem(S), g = b ? JSON.parse(b) : [];
        return Array.isArray(g) ? g : [];
      } catch {
        return [];
      }
    }
    ge(() => {
      !n.storageKey || typeof localStorage > "u" || (l.value = c(`${n.storageKey}.signatures`), r.value = c(`${n.storageKey}.stamps`), s.value = l.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), ce(
      l,
      (S) => {
        !n.storageKey || typeof localStorage > "u" || localStorage.setItem(`${n.storageKey}.signatures`, JSON.stringify(S));
      },
      { deep: !0 }
    ), ce(
      r,
      (S) => {
        !n.storageKey || typeof localStorage > "u" || localStorage.setItem(`${n.storageKey}.stamps`, JSON.stringify(S));
      },
      { deep: !0 }
    );
    function v(S) {
      const b = {
        id: `sig-${Date.now()}`,
        name: `Signature ${l.value.length + 1}`,
        dataUrl: S
      };
      l.value = [b, ...l.value].slice(0, 8), s.value = b.id;
    }
    async function p(S, b) {
      await Cc(S), b(40);
      const g = await new Promise((m, M) => {
        const _ = new FileReader();
        _.onload = () => m(String(_.result)), _.onerror = () => M(new Error("Could not read the file")), _.readAsDataURL(S);
      });
      return b(100), { value: g, name: S.name, size: S.size, url: g };
    }
    function h() {
      const S = d.value?.url ?? d.value?.value;
      if (!S)
        return;
      const b = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: S
      };
      r.value = [b, ...r.value].slice(0, 8), i.value = b.id;
    }
    const C = y(
      () => l.value.find((S) => S.id === s.value)?.dataUrl ?? null
    ), k = y(
      () => r.value.find((S) => S.id === i.value)?.dataUrl ?? null
    ), $ = y(() => {
      const S = n.documents.find((g) => g.key === u.value)?.document ?? n.documents[0]?.document ?? {}, b = {
        ...S?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...S,
        branding: b
      };
    });
    return (S, b) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : x(Ie)])
    }, [
      D(Oe, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", b0, [
        D(h0, {
          label: "Draw a signature",
          onSave: v
        }),
        o("div", x0, [
          b[2] || (b[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", y0, f(x($a)), 1),
          D(va, {
            modelValue: d.value,
            "onUpdate:modelValue": b[0] || (b[0] = (g) => d.value = g),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          D(re, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: h
          }, {
            default: V(() => [...b[1] || (b[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      l.value.length ? (t(), a("section", k0, [
        D(Oe, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", $0, [
          (t(!0), a(A, null, j(l.value, (g) => (t(), a("button", {
            key: g.id,
            type: "button",
            class: z(["rounded-md border p-2", g.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => s.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, C0)
          ], 10, w0))), 128))
        ])
      ])) : w("", !0),
      r.value.length ? (t(), a("section", S0, [
        D(Oe, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", M0, [
          (t(!0), a(A, null, j(r.value, (g) => (t(), a("button", {
            key: g.id,
            type: "button",
            class: z(["rounded-md border p-2", g.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => i.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, _0)
          ], 10, B0))), 128))
        ])
      ])) : w("", !0),
      e.documents.length ? (t(), a("section", A0, [
        o("div", P0, [
          (t(!0), a(A, null, j(e.documents, (g) => (t(), T(re, {
            key: g.key,
            size: "sm",
            variant: u.value === g.key ? "default" : "outline",
            onClick: (m) => u.value = g.key
          }, {
            default: V(() => [
              R(f(g.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", z0, [
          D(Ip, {
            document: $.value
          }, null, 8, ["document"]),
          o("div", O0, [
            o("div", V0, [
              b[3] || (b[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), a("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, j0)) : (t(), a("p", L0, "Draw and save a signature"))
            ]),
            k.value ? (t(), a("img", {
              key: 0,
              src: k.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, T0)) : w("", !0)
          ])
        ])
      ])) : w("", !0)
    ], 2));
  }
}), Z3 = "panel.dashboard.hiddenWidgets", D0 = /* @__PURE__ */ Symbol("dashboardHide"), F0 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, J3 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const n = e, l = st(D0, null), r = K(
      n.catalog.filter((d) => n.defaults.includes(d.id))
    ), s = K(!1);
    ge(() => {
      if (l?.register("shortcuts", "Shortcuts"), !n.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const d = localStorage.getItem(n.storageKey);
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
        if (!(!s.value || !n.storageKey))
          try {
            localStorage.setItem(n.storageKey, JSON.stringify(d));
          } catch {
          }
      },
      { deep: !0 }
    );
    const i = y(() => l?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? w("", !0) : (t(), a("div", F0, [
      D(Ah, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (c) => r.value = c),
        onHide: u[1] || (u[1] = (c) => x(l)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), E0 = { class: "flex flex-col gap-3" }, I0 = ["data-slot"], N0 = ["aria-pressed", "aria-label", "title"], R0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, U0 = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, H0 = { class: "flex h-8 items-center" }, K0 = ["aria-label", "title", "onClick"], q0 = ["aria-label", "title", "onClick"], G0 = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, W0 = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, Y3 = /* @__PURE__ */ O({
  __name: "StatStrip",
  props: {
    segments: {},
    columns: { default: 4 },
    maskable: { type: Boolean, default: !0 },
    hidden: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["toggle"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(l.maskable ? !l.hidden : !0), i = K(/* @__PURE__ */ new Set());
    function d(m) {
      return l.maskable && (m.sensitive ?? !0);
    }
    function u(m) {
      return d(m) && !s.value && !i.value.has(m.key);
    }
    const c = y(() => l.segments.some(u)), v = y(() => l.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = y(() => p[l.columns] ?? p[4]), C = y(() => {
      const m = l.columns ?? 4, M = Math.floor(l.segments.length / m) * m;
      return l.segments.slice(0, M);
    }), k = y(() => {
      const m = l.columns ?? 4, M = Math.floor(l.segments.length / m) * m;
      return l.segments.slice(M);
    }), $ = y(() => {
      const m = [];
      return C.value.length > 0 && m.push({ key: "packed", joined: !0, segments: C.value }), k.value.length > 0 && m.push({ key: "leftover", joined: !1, segments: k.value }), m;
    });
    function S() {
      const m = c.value === !1;
      s.value = !m, i.value = /* @__PURE__ */ new Set(), r("toggle", m);
    }
    function b(m) {
      if (!d(m))
        return;
      const M = new Set(i.value);
      if (u(m))
        M.add(m.key);
      else if (M.delete(m.key), s.value) {
        s.value = !1;
        for (const _ of l.segments)
          _.key !== m.key && d(_) && M.add(_.key);
      }
      i.value = M, r("toggle", c.value);
    }
    function g(m) {
      return typeof m == "number" ? new Intl.NumberFormat().format(m) : m;
    }
    return (m, M) => (t(), a("div", E0, [
      (t(!0), a(A, null, j($.value, (_) => (t(), a("div", {
        key: _.key,
        class: z(["relative shrink-0", _.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": _.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && v.value && _.key === $.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": c.value,
          "aria-label": c.value ? "Show all values" : "Hide all values",
          title: c.value ? "Show all values" : "Hide all values",
          onClick: S
        }, [
          (t(), a("svg", R0, [
            c.value ? (t(), a(A, { key: 0 }, [
              M[0] || (M[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              M[1] || (M[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              M[2] || (M[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              M[3] || (M[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(A, { key: 1 }, [
              M[4] || (M[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              M[5] || (M[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, N0)) : w("", !0),
        o("div", {
          class: z(["grid", [_.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), a(A, null, j(_.segments, (P) => (t(), a("div", {
            key: P.key,
            class: z(["bg-card flex flex-col gap-2 p-4", _.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", U0, f(P.label), 1),
            o("div", H0, [
              e.loading ? (t(), T(Me, {
                key: 0,
                variant: "number"
              })) : u(P) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (N) => b(P)
              }, [
                (t(), a(A, null, j(5, (N) => o("span", {
                  key: N,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, K0)) : d(P) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${g(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (N) => b(P)
              }, f(g(P.value)), 9, q0)) : (t(), a("span", G0, f(g(P.value)), 1)),
              P.trend && !e.loading && !u(P) ? (t(), T(Ba, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : w("", !0)
            ]),
            P.sparkline?.length && !e.loading && !u(P) ? (t(), T(ft, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : w("", !0),
            P.caption || P.comparison && P.trend ? (t(), a("p", W0, f(P.caption ?? P.comparison), 1)) : w("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, I0))), 128))
    ]));
  }
}), Z0 = ["aria-label"], J0 = ["aria-valuenow", "aria-label"], Y0 = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Q0 = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, X0 = ["title"], ek = { class: "font-medium" }, tk = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, ak = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, lk = { class: "flex items-center justify-between gap-2" }, nk = { class: "text-sm font-semibold" }, ok = { class: "flex items-center gap-3" }, sk = ["href"], rk = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, ik = { class: "flex min-w-0 flex-col gap-0.5" }, dk = { class: "text-sm font-medium" }, uk = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, ck = {
  key: 1,
  class: "flex flex-col gap-2"
}, fk = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, mk = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, pk = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Q3 = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(() => l.items.find(($) => !$.done) ?? null), i = y(() => l.items.filter(($) => $.key !== s.value?.key)), d = y(() => l.items.length), u = y(() => l.items.filter(($) => $.done).length), c = y(() => {
      if (!s.value)
        return d.value;
      const $ = l.items.findIndex((S) => S.key === s.value?.key);
      return $ >= 0 ? $ + 1 : 1;
    }), v = y(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = y(() => {
      const $ = l.linkComponent;
      return typeof $ == "string" ? $ : na($);
    }), h = Je({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = Je({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), k = Je({
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
        "aria-valuenow": v.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${v.value} percent complete`
      }, [
        o("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: ne({ width: `${v.value}%` })
        }, null, 4)
      ], 8, J0),
      o("div", Y0, [
        o("span", Q0, " Step " + f(c.value) + " of " + f(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", ek, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", tk, f(": " + s.value.detail), 1)) : w("", !0)
        ], 8, X0),
        s.value?.href ? (t(), T(Ce(p.value), {
          key: 0,
          href: s.value.href,
          class: z(x(C))
        }, {
          default: V(() => [
            R(f(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : w("", !0),
        e.skipLabel ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: S[0] || (S[0] = (b) => r("skip"))
        }, f(e.skipLabel), 1)) : w("", !0)
      ])
    ], 8, Z0)) : e.items.length ? (t(), a("section", ak, [
      o("div", lk, [
        o("h2", nk, f(e.heading), 1),
        o("div", ok, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: S[1] || (S[1] = (b) => r("skip"))
          }, f(e.skipLabel), 1)) : w("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, sk)) : w("", !0)
        ])
      ]),
      s.value ? (t(), a("div", rk, [
        S[2] || (S[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", ik, [
          o("p", dk, f(s.value.title), 1),
          s.value.detail ? (t(), a("p", uk, f(s.value.detail), 1)) : w("", !0),
          s.value.href ? (t(), T(Ce(p.value), {
            key: 1,
            href: s.value.href,
            class: z(x(h))
          }, {
            default: V(() => [
              R(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : w("", !0)
        ])
      ])) : w("", !0),
      i.value.length ? (t(), a("ul", ck, [
        (t(!0), a(A, null, j(i.value, (b) => (t(), a("li", {
          key: b.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: z([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              b.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            b.done ? (t(), a("svg", fk, [...S[3] || (S[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : w("", !0)
          ], 2),
          o("div", mk, [
            o("p", {
              class: z(["text-sm", b.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(b.title), 3),
            !b.done && b.detail ? (t(), a("p", pk, f(b.detail), 1)) : w("", !0)
          ]),
          !b.done && b.href ? (t(), T(Ce(p.value), {
            key: 0,
            href: b.href,
            class: z(x(k))
          }, {
            default: V(() => [
              R(f(b.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : w("", !0)
        ]))), 128))
      ])) : w("", !0)
    ])) : w("", !0);
  }
}), vk = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, gk = { class: "hidden items-center gap-2 md:flex" }, hk = { class: "md:hidden" }, bk = { class: "border-b px-4 py-3" }, xk = { class: "text-muted-foreground text-xs" }, yk = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, kk = { class: "font-medium tabular-nums" }, $k = { class: "ml-auto flex items-center gap-3" }, X3 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: n }) {
    const l = n, r = K(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), a("div", vk, [
      o("div", gk, [
        H(i.$slots, "actions")
      ]),
      o("div", hk, [
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
          default: V(() => [
            D(Et, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: V(() => [
                o("div", bk, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", xk, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", yk, [
                  H(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", kk, [
        e.allMatching ? (t(), a(A, { key: 0 }, [
          R(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(A, { key: 1 }, [
          R(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", $k, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => l("select-all-matching"))
        }, " Select all " + f(s(e.total)), 1)) : w("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => l("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), wk = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Ck = { class: "text-muted-foreground text-xs tabular-nums" }, Sk = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Mk = ["value"], Bk = ["value"], _k = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Ak = ["disabled"], Pk = ["disabled"], zk = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Ok = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Vk = ["disabled"], eC = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = (c) => new Intl.NumberFormat().format(c), i = y(() => l.rowsOnPage === 0 ? 0 : (l.page - 1) * l.perPage + 1), d = y(() => (l.page - 1) * l.perPage + l.rowsOnPage), u = y(
      () => l.total === void 0 ? null : Math.max(1, Math.ceil(l.total / l.perPage))
    );
    return (c, v) => (t(), a("div", wk, [
      o("p", Ck, [
        R(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(A, { key: 0 }, [
          R("of " + f(s(e.total)), 1)
        ], 64)) : w("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", Sk, [
        v[4] || (v[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: v[0] || (v[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(A, null, j(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, f(p), 9, Bk))), 128))
        ], 40, Mk)
      ])) : w("", !0),
      o("nav", _k, [
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
        ])], 8, Ak),
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
        ])], 8, Pk),
        o("span", zk, f(e.page), 1),
        u.value !== null ? (t(), a("span", Ok, " of " + f(s(u.value)), 1)) : w("", !0),
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
        ])], 8, Vk)
      ])
    ]));
  }
}), jk = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Lk = ["aria-current"], Tk = ["title"], Dk = ["aria-current", "onClick"], Fk = ["title"], Ek = /* @__PURE__ */ O({
  __name: "TableTabs",
  props: {
    tabs: {},
    active: {},
    counts: {}
  },
  emits: ["select"],
  setup(e, { emit: n }) {
    const l = n;
    function r(s) {
      return s >= 1e6 ? (s / 1e6).toFixed(s % 1e6 === 0 ? 0 : 1) + "M" : s >= 1e4 ? Math.round(s / 1e3) + "k" : new Intl.NumberFormat().format(s);
    }
    return (s, i) => (t(), a("div", jk, [
      o("button", {
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => l("select", null))
      }, [
        i[1] || (i[1] = R(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, Tk)) : (t(), T(Me, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Lk),
      (t(!0), a(A, null, j(e.tabs, (d) => (t(), a("button", {
        key: d,
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => l("select", d)
      }, [
        R(f(d) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, Fk)) : (t(), T(Me, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Dk))), 128))
    ]));
  }
}), tC = /* @__PURE__ */ Tt(Ek, [["__scopeId", "data-v-3967c945"]]), Ik = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Nk = { class: "grid gap-2" }, Rk = {
  key: 0,
  class: "text-destructive text-sm"
}, Uk = { class: "flex gap-2" }, aC = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: n }) {
    const l = n, s = K((() => {
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
    })()), i = K(!1), d = Ea(null), u = y(() => d.value?.isLoading.value ?? !1), c = y(() => d.value?.error.value ?? null), v = y(() => d.value?.isSupported.value ?? !1);
    ge(async () => {
      try {
        const { usePasskeyRegister: C } = await import("@laravel/passkeys/vue");
        d.value = C({
          onSuccess: () => {
            s.value = "", i.value = !1, l("success");
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
    return (C, k) => v.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", Nk, [
        k[3] || (k[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        me(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": k[1] || (k[1] = ($) => s.value = $),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [we, s.value]
        ]),
        k[4] || (k[4] = o("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      c.value ? (t(), a("p", Rk, f(c.value), 1)) : w("", !0),
      o("div", Uk, [
        D(re, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: V(() => [
            R(f(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        D(re, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: V(() => [...k[5] || (k[5] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(re, {
      key: 1,
      variant: "outline",
      onClick: k[0] || (k[0] = ($) => i.value = !0)
    }, {
      default: V(() => [...k[2] || (k[2] = [
        R(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", Ik, " Passkeys are not supported in this browser. "));
  }
}), Hk = { class: "pk-form-stack" }, Kk = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, lC = /* @__PURE__ */ O({
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
  setup(e, { emit: n }) {
    const l = e;
    kt("panelPicker", {
      get base() {
        return l.pickerBase ?? "";
      },
      get returnUrl() {
        return l.returnUrl ?? "";
      }
    }), kt("panelCreateOption", {
      run(c, v) {
        return l.createOption ? l.createOption(c, v) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = n, s = y(() => l.nodes.length > 0), i = y(() => l.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = y(() => l.errors._conflict);
    function u(c) {
      if (l.upload)
        return (v, p) => l.upload(c, v, p);
    }
    return (c, v) => (t(), a("div", Hk, [
      d.value ? (t(), a("p", Kk, f(d.value), 1)) : w("", !0),
      s.value ? (t(!0), a(A, { key: 1 }, j(e.nodes, (p, h) => (t(), T(ga, {
        key: h,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: v[0] || (v[0] = (C, k) => r("change", C, k)),
        onAffixAction: v[1] || (v[1] = (C, k) => r("affix-action", C, k))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(A, null, j(e.fields, (p) => (t(), T(Ke, {
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
          class: z(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", p.key, h),
          onAffixAction: (h) => r("affix-action", p.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), qk = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, Gk = { class: "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10" }, Wk = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, Zk = ["disabled"], Jk = ["disabled"], Yk = ["disabled"], nC = /* @__PURE__ */ O({
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
    return (n, l) => (t(), T(qe, { to: "body" }, [
      D(De, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: V(() => [
          e.show ? (t(), a("div", qk, [
            o("div", Gk, [
              l[3] || (l[3] = o("span", {
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
              o("span", Wk, f(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: l[0] || (l[0] = (r) => n.$emit("discard"))
              }, f(e.discardLabel), 9, Zk)) : w("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: l[1] || (l[1] = (r) => n.$emit("cancel"))
              }, f(e.cancelLabel), 9, Jk),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: l[2] || (l[2] = (r) => n.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, Yk)
            ])
          ])) : w("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function oC(e, n = {}) {
  const { warnOnUnload: l = !0 } = n, r = K(yt(e.value)), s = y(() => yt(e.value) !== r.value);
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
    l && window.addEventListener("beforeunload", u);
  }), xe(() => {
    window.removeEventListener("beforeunload", u);
  }), { dirty: s, commit: i, discard: d, baseline: r };
}
function yt(e) {
  return JSON.stringify(e, (n, l) => l === void 0 ? null : l === null || typeof l != "object" || Array.isArray(l) ? l : Object.fromEntries(
    Object.entries(l).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const Qk = {
  key: 0,
  class: "flex flex-col gap-1"
}, Xk = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, e2 = { class: "text-foreground text-sm font-medium" }, t2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, a2 = {
  key: 5,
  class: "max-w-full font-normal"
}, l2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, n2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, o2 = {
  key: 6,
  class: "font-normal"
}, s2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, r2 = { class: "text-muted-foreground truncate font-medium" }, i2 = { class: "text-foreground col-span-2 break-words" }, d2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, u2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, c2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, f2 = ["href"], m2 = { class: "flex min-w-0 items-start gap-2.5" }, p2 = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, v2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, g2 = ["d"], h2 = { class: "min-w-0" }, b2 = { class: "flex flex-wrap items-center gap-2" }, x2 = { class: "text-sm font-semibold" }, y2 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, k2 = ["onClick"], sC = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!l.node.collapsed), i = K(0), d = y(() => l.depth === 0), u = y(() => {
      const k = l.node.columns ?? (l.node.component === "section" ? 2 : 1);
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
    }, v = y(() => l.node.key ? l.record[l.node.key] : null), p = y(() => {
      const k = v.value;
      return k == null || k === "";
    }), h = y(() => {
      if (p.value)
        return "None";
      const k = v.value;
      if (l.node.type === "date" || l.node.type === "datetime")
        return new Date(String(k)).toLocaleDateString(void 0, c[l.node.type]);
      let $ = String(k);
      return l.node.transform === "upper" && ($ = $.toUpperCase()), l.node.transform === "lower" && ($ = $.toLowerCase()), [l.node.prefix, $, l.node.suffix].filter(Boolean).join(" ");
    }), C = y(() => {
      const k = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), $ = l.node.colors?.[k] ?? l.node.defaultColor ?? "neutral";
      return It[$] ?? "outline";
    });
    return (k, $) => {
      const S = Pt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", Qk, [
        o("dt", Xk, f(e.node.label), 1),
        o("dd", e2, [
          e.node.type === "badge" && x(Rd)(v.value) ? (t(), T(Ee, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: V(() => [
              R(f(v.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", t2, "None")) : e.node.type === "icon" ? (t(), T(gd, {
            key: 2,
            value: v.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(kd, {
            key: 3,
            src: v.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Md, {
            key: 4,
            value: typeof v.value == "string" ? v.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", a2, [
            e.node.language ? (t(), a("p", l2, f(e.node.language), 1)) : w("", !0),
            o("pre", n2, [
              o("code", null, f(v.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", o2, [
            v.value && typeof v.value == "object" && !Array.isArray(v.value) && Object.keys(v.value).length ? (t(), a("dl", s2, [
              (t(!0), a(A, null, j(v.value, (b, g) => (t(), a("div", {
                key: g,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", r2, f(g), 1),
                o("dd", i2, f(b), 1)
              ]))), 128))
            ])) : (t(), a("span", d2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", u2, [
            (t(!0), a(A, null, j(Array.isArray(v.value) ? v.value : [], (b, g) => (t(), a("div", {
              key: g,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(A, null, j(e.node.entries ?? [], (m, M) => (t(), T(S, {
                key: M,
                node: m,
                record: b,
                depth: e.depth + 1,
                onAction: $[0] || ($[0] = (_) => r("action", _))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(v.value) || v.value.length === 0 ? (t(), a("span", c2, "None")) : w("", !0)
          ])) : e.node.url && !p.value ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(h.value), 9, f2)) : (t(), a("span", {
            key: 9,
            class: z([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, f(h.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: $[1] || ($[1] = (b) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : w("", !0)
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
          onClick: $[2] || ($[2] = (b) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", m2, [
            e.node.icon ? (t(), a("div", p2, [
              (t(), a("svg", v2, [
                o("path", {
                  d: x(de)(e.node.icon)
                }, null, 8, g2)
              ]))
            ])) : w("", !0),
            o("div", h2, [
              o("div", b2, [
                o("h3", x2, f(e.node.label), 1),
                e.node.status ? (t(), T(ke, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : w("", !0)
              ]),
              e.node.description ? (t(), a("p", y2, f(e.node.description), 1)) : w("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: z(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(A, null, j(e.node.children ?? [], (b, g) => (t(), T(S, {
            key: g,
            node: b,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[3] || ($[3] = (m) => r("action", m))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: z(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), a(A, null, j(e.node.children ?? [], (b, g) => (t(), T(S, {
          key: g,
          node: b,
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
          (t(!0), a(A, null, j(e.node.children ?? [], (b, g) => (t(), a("button", {
            key: g,
            type: "button",
            class: z([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === g ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (m) => i.value = g
          }, f(b.label), 11, k2))), 128))
        ], 2),
        (t(!0), a(A, null, j(e.node.children ?? [], (b, g) => me((t(), a("div", {
          key: g,
          class: z(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), a(A, null, j(b.children ?? [], (m, M) => (t(), T(S, {
            key: M,
            node: m,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[5] || ($[5] = (_) => r("action", _))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Fe, i.value === g]
        ])), 128))
      ], 2)) : w("", !0);
    };
  }
}), $2 = { class: "text-muted-foreground text-sm" }, w2 = { class: "flex items-start gap-3" }, C2 = { class: "min-w-0 flex-1" }, S2 = { class: "flex flex-wrap items-center gap-2" }, M2 = { class: "truncate text-sm font-medium" }, B2 = { class: "text-muted-foreground mt-0.5 text-xs" }, _2 = { class: "text-muted-foreground text-xs" }, A2 = { class: "mt-auto flex items-center gap-2" }, P2 = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(
      () => l.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), a("div", {
      class: z(["flex flex-col gap-4", x(ka)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", $2, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: z(x(gc))
      }, [
        (t(!0), a(A, null, j(e.gateways, (u) => (t(), a("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", w2, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            o("div", C2, [
              o("div", S2, [
                o("h3", M2, f(u.label), 1),
                D(ke, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: V(() => [
                    R(f(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), T(ke, {
                  key: 0,
                  status: "offered"
                }, {
                  default: V(() => [...d[0] || (d[0] = [
                    R(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), T(ke, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: V(() => [...d[1] || (d[1] = [
                    R(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                u.isDefault ? (t(), T(ke, {
                  key: 2,
                  status: "default"
                }, {
                  default: V(() => [...d[2] || (d[2] = [
                    R(" Default ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                u.connected && u.mode ? (t(), T(ke, {
                  key: 3,
                  status: u.mode
                }, {
                  default: V(() => [
                    R(f(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : w("", !0)
              ]),
              o("p", B2, f(u.caption), 1)
            ])
          ]),
          o("p", _2, f(u.methods.join(" · ")), 1),
          o("div", A2, [
            D(re, {
              size: "sm",
              variant: "outline",
              onClick: (c) => r("configure", u.key)
            }, {
              default: V(() => [...d[3] || (d[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            D(re, {
              size: "sm",
              variant: "ghost",
              onClick: (c) => r("toggle", u.key)
            }, {
              default: V(() => [
                R(f(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), z2 = { class: "flex flex-col gap-6" }, O2 = { class: "relative" }, V2 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, j2 = ["d"], L2 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, T2 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, D2 = { class: "flex flex-wrap items-center gap-2" }, F2 = { class: "text-muted-foreground text-sm" }, E2 = { class: "flex flex-col gap-1 text-sm" }, I2 = ["value"], N2 = {
  key: 0,
  class: "flex flex-col gap-2"
}, R2 = { class: "flex flex-wrap items-center gap-2" }, U2 = {
  key: 1,
  class: "flex items-center gap-2"
}, rC = /* @__PURE__ */ O({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ je({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const n = et(e, "gateways"), l = K(null), r = K(""), s = y(
      () => n.value.find((k) => k.key === l.value) ?? null
    ), i = y(() => {
      const k = r.value.trim().toLowerCase();
      return k === "" ? n.value : n.value.filter(($) => [$.key, $.label, $.caption, ...$.methods].join(" ").toLowerCase().includes(k));
    });
    function d(k) {
      return k.connected && k.enabled !== !1;
    }
    function u(k, $) {
      n.value = n.value.map(
        (S) => S.key === k ? { ...S, ...$ } : S
      );
    }
    function c(k) {
      l.value = k;
    }
    function v(k) {
      const $ = n.value.find((b) => b.key === k);
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
      const S = n.value.find((b) => b.key === k);
      S?.connected && u(k, { enabled: $, isDefault: $ ? S.isDefault : !1 });
    }
    function h(k) {
      const $ = n.value.find((S) => S.key === k);
      !$ || !d($) || (n.value = n.value.map((S) => ({
        ...S,
        isDefault: S.key === k
      })));
    }
    function C(k) {
      const $ = l.value;
      !$ || !n.value.find((b) => b.key === $)?.connected || u($, { mode: k });
    }
    return (k, $) => (t(), a(A, null, [
      o("div", z2, [
        D(Oe, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", O2, [
          (t(), a("svg", V2, [
            o("path", {
              d: x(de)("search")
            }, null, 8, j2)
          ])),
          D(ye, {
            modelValue: r.value,
            "onUpdate:modelValue": $[0] || ($[0] = (S) => r.value = S),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(P2, {
          key: 0,
          gateways: i.value,
          onConfigure: c,
          onToggle: v
        }, null, 8, ["gateways"])) : (t(), a("p", L2, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      D(Ht, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: $[8] || ($[8] = (S) => l.value = null)
      }, {
        footer: V(() => [
          D(re, {
            variant: "outline",
            size: "sm",
            onClick: $[6] || ($[6] = (S) => l.value = null)
          }, {
            default: V(() => [...$[21] || ($[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(re, {
            key: 0,
            size: "sm",
            onClick: $[7] || ($[7] = (S) => v(s.value.key))
          }, {
            default: V(() => [
              R(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : w("", !0)
        ]),
        default: V(() => [
          s.value ? (t(), a("div", T2, [
            o("div", D2, [
              D(ke, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: V(() => [
                  R(f(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), T(ke, {
                key: 0,
                status: "offered"
              }, {
                default: V(() => [...$[9] || ($[9] = [
                  R(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(ke, {
                key: 1,
                status: "disabled"
              }, {
                default: V(() => [...$[10] || ($[10] = [
                  R(" Disabled ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.isDefault ? (t(), T(ke, {
                key: 2,
                status: "default"
              }, {
                default: V(() => [...$[11] || ($[11] = [
                  R(" Default ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.connected && s.value.mode ? (t(), T(ke, {
                key: 3,
                status: s.value.mode
              }, {
                default: V(() => [
                  R(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : w("", !0)
            ]),
            o("p", F2, f(s.value.caption), 1),
            o("label", E2, [
              $[12] || ($[12] = R(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, I2)
            ]),
            $[20] || ($[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              R(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", N2, [
              $[16] || ($[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              $[17] || ($[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", R2, [
                D(re, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: $[1] || ($[1] = (S) => p(s.value.key, !0))
                }, {
                  default: V(() => [...$[13] || ($[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(re, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: $[2] || ($[2] = (S) => p(s.value.key, !1))
                }, {
                  default: V(() => [...$[14] || ($[14] = [
                    R(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(re, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: $[3] || ($[3] = (S) => h(s.value.key))
                }, {
                  default: V(() => [...$[15] || ($[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : w("", !0),
            s.value.connected ? (t(), a("div", U2, [
              D(re, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: $[4] || ($[4] = (S) => C("test"))
              }, {
                default: V(() => [...$[18] || ($[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              D(re, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: $[5] || ($[5] = (S) => C("live"))
              }, {
                default: V(() => [...$[19] || ($[19] = [
                  R(" Live ", -1)
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
function la(e) {
  if (typeof localStorage > "u")
    return /* @__PURE__ */ new Set();
  try {
    const n = localStorage.getItem(e);
    if (n)
      return new Set(JSON.parse(n));
  } catch {
  }
  return /* @__PURE__ */ new Set();
}
function iC(e) {
  const n = K(la(e));
  ge(() => {
    n.value = la(e);
  }), ce(
    n,
    (u) => {
      try {
        localStorage.setItem(e, JSON.stringify([...u]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function l(u) {
    const c = new Set(n.value);
    c.has(u) ? c.delete(u) : c.add(u), n.value = c;
  }
  function r(u) {
    const c = new Set(n.value);
    c.add(u), n.value = c;
  }
  function s(u) {
    const c = new Set(n.value);
    c.delete(u), n.value = c;
  }
  function i(u) {
    n.value = new Set(u);
  }
  function d() {
    n.value = /* @__PURE__ */ new Set();
  }
  return { hidden: n, toggle: l, hide: r, show: s, setHidden: i, reset: d };
}
function dC(e) {
  const { config: n, rows: l, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = K(
    n.driver === "none" ? "off" : "connecting"
  ), c = K(/* @__PURE__ */ new Set());
  let v = /* @__PURE__ */ new Map(), p, h, C, k = (/* @__PURE__ */ new Date()).toISOString(), $ = null;
  function S(G, W) {
    v.set(G, { ...v.get(G) ?? {}, ...W }), !p && (p = setTimeout(() => {
      p = void 0, b();
    }, n.batchMs));
  }
  function b() {
    if (v.size === 0)
      return;
    const G = v;
    v = /* @__PURE__ */ new Map();
    const W = /* @__PURE__ */ new Set();
    for (const [le, ae] of G) {
      const J = l.value.find((Z) => Z[r] === le);
      if (!J) {
        d?.(le, ae);
        continue;
      }
      Object.assign(J, ae), W.add(le);
    }
    W.size !== 0 && (c.value = /* @__PURE__ */ new Set([...c.value, ...W]), setTimeout(() => {
      const le = new Set(c.value);
      W.forEach((ae) => le.delete(ae)), c.value = le;
    }, 1500));
  }
  async function g() {
    if (!(!s || l.value.length === 0)) {
      C?.abort(), C = new AbortController();
      try {
        const G = l.value.map((ae) => ae[r]), { records: W, at: le } = await s(G, k);
        k = le, u.value = "live";
        for (const ae of W)
          S(ae[r], ae);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function m() {
    M(), u.value = "live", h = setInterval(g, n.intervalMs);
  }
  function M() {
    clearInterval(h), h = void 0, C?.abort();
  }
  function _() {
    return window.Echo ?? null;
  }
  function P() {
    const G = _();
    if (!G || !n.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    $ = n.channel;
    const W = G.private(n.channel);
    for (const le of n.events)
      W.listen(le, (ae) => {
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
    n.driver === "poll" && m(), n.driver === "broadcast" && P();
  }
  function te() {
    M(), N(), clearTimeout(p), p = void 0, v = /* @__PURE__ */ new Map();
  }
  function U() {
    n.pauseWhenHidden && (document.hidden ? (te(), u.value = "paused") : (k = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return ge(() => {
    n.driver !== "none" && (E(), n.pauseWhenHidden && document.addEventListener("visibilitychange", U));
  }), xe(() => {
    document.removeEventListener("visibilitychange", U), te();
  }), { status: u, recentlyChanged: c, applyPatch: S, flush: b, pollOnce: g };
}
const H2 = /^[a-z0-9-]+$/, K2 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function uC(e) {
  Ia(() => {
    if (typeof document > "u")
      return;
    const n = {};
    for (const [l, r] of Object.entries(e.value ?? {}))
      !H2.test(l) || typeof r != "string" || !K2.test(r) || (n[`--${l}`] = r);
    pu(n);
  });
}
const q2 = { class: "flex items-center gap-0.5" }, G2 = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (n, l) => (t(), a("span", q2, [
      String(e.value) === "mono" ? (t(), a(A, { key: 0 }, [
        l[0] || (l[0] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        l[1] || (l[1] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        l[2] || (l[2] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), a(A, { key: 1 }, [
        l[3] || (l[3] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        l[4] || (l[4] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        l[5] || (l[5] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), W2 = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (n, l) => (t(), T(Ma, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), Z2 = { class: "flex flex-col gap-2" }, J2 = { class: "bg-card rounded-lg border p-4" }, Y2 = { class: "text-muted-foreground truncate text-xs" }, Q2 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, X2 = /* @__PURE__ */ O({
  __name: "PkSeoPreview",
  props: {
    field: {},
    values: { default: () => ({}) }
  },
  setup(e) {
    const n = e, l = {
      titleMax: 60,
      titleMin: 30,
      descriptionMax: 160,
      descriptionMin: 70
    }, r = y(() => ({ ...l, ...n.field.limits ?? {} })), s = y(
      () => String(n.values[n.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = y(
      () => String(n.values[n.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = y(
      () => String(n.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = y(() => {
      const $ = String(n.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return $ === "" ? d.value : `${d.value} › ${$.split("/").join(" › ")}`;
    });
    function c($, S) {
      return $.length <= S ? $ : `${$.slice(0, S - 1).trimEnd()}…`;
    }
    const v = y(() => c(s.value, r.value.titleMax)), p = y(() => c(i.value, r.value.descriptionMax));
    function h($, S, b) {
      return $ === 0 ? { tone: "text-muted-foreground", note: "empty" } : $ > b ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : $ < S ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = y(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), k = y(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return ($, S) => (t(), a("div", Z2, [
      o("div", J2, [
        o("p", Y2, f(u.value), 1),
        o("p", {
          class: z(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", v.value === "" ? "text-muted-foreground italic" : ""])
        }, f(v.value || "Untitled page"), 3),
        o("p", {
          class: z(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", Q2, [
        o("span", {
          class: z(C.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(C.value.note), 3),
        o("span", {
          class: z(k.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(k.value.note), 3)
      ]),
      S[0] || (S[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), e$ = ["value", "placeholder", "disabled"], t$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPhone",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(() => typeof l.modelValue == "string" ? l.modelValue : "");
    function i(d) {
      const u = d.target.value;
      r("update:modelValue", u === "" ? null : u.trim());
    }
    return (d, u) => (t(), a("input", {
      type: "tel",
      inputmode: "tel",
      autocomplete: "tel",
      class: z(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", x($e)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, e$));
  }
}), a$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, l$ = ["aria-selected", "disabled", "title", "onClick"], n$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkIconPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(() => l.field.icons ?? []), i = y(() => typeof l.modelValue == "string" ? l.modelValue : "");
    function d(u) {
      l.disabled || r("update:modelValue", u === i.value ? null : u);
    }
    return (u, c) => (t(), a("div", a$, [
      (t(!0), a(A, null, j(s.value, (v) => (t(), a("button", {
        key: v,
        type: "button",
        role: "option",
        class: z(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [x($e), i.value === v ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === v,
        disabled: e.disabled,
        title: v,
        onClick: (p) => d(v)
      }, f(v), 11, l$))), 128))
    ]));
  }
}), o$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, s$ = ["disabled"], r$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, i$ = ["onClick"], d$ = ["onClick"], u$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(""), i = K(!1), d = y(() => l.field.options ?? []);
    function u(h, C) {
      return !C || h.label.toLowerCase().includes(C) ? !0 : (h.children ?? []).some((k) => u(k, C));
    }
    const c = y(() => {
      const h = s.value.trim().toLowerCase();
      return h ? d.value.filter((C) => u(C, h)) : d.value;
    }), v = y(() => {
      const h = (C) => {
        for (const k of C) {
          if (k.value === l.modelValue)
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
      l.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, C) => (t(), a("div", o$, [
      o("button", {
        type: "button",
        class: z(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x($e)]),
        disabled: e.disabled,
        onClick: C[0] || (C[0] = (k) => i.value = !i.value)
      }, [
        o("span", {
          class: z(v.value ? "" : "text-muted-foreground")
        }, f(v.value ?? "Select…"), 3),
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs" }, "▾", -1))
      ], 10, s$),
      i.value ? (t(), a("div", r$, [
        e.field.searchable ? me((t(), a("input", {
          key: 0,
          "onUpdate:modelValue": C[1] || (C[1] = (k) => s.value = k),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [we, s.value]
        ]) : w("", !0),
        (t(!0), a(A, null, j(c.value, (k) => (t(), a(A, {
          key: String(k.value)
        }, [
          o("button", {
            type: "button",
            class: z(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === k.value ? "bg-accent" : ""]),
            onClick: ($) => p(k.value)
          }, f(k.label), 11, i$),
          (t(!0), a(A, null, j(k.children ?? [], ($) => (t(), a("button", {
            key: String($.value),
            type: "button",
            class: z(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === $.value ? "bg-accent text-foreground" : ""]),
            onClick: (S) => p($.value)
          }, f($.label), 11, d$))), 128))
        ], 64))), 128))
      ])) : w("", !0)
    ]));
  }
}), c$ = ["aria-label"], f$ = ["disabled", "aria-label", "aria-pressed", "onClick"], m$ = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, p$ = { key: 0 }, v$ = ["id"], g$ = ["fill"], h$ = ["disabled"], b$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkRating",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = y(() => Math.max(1, Math.min(10, Number(l.field.max ?? 5)))), i = y(() => !!l.field.allowHalf), d = y(() => {
      const v = Number(l.modelValue);
      return Number.isFinite(v) ? v : 0;
    });
    function u(v) {
      l.disabled || r("update:modelValue", v);
    }
    function c(v) {
      return d.value >= v ? "full" : i.value && d.value >= v - 0.5 ? "half" : "empty";
    }
    return (v, p) => (t(), a("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), a(A, null, j(s.value, (h) => (t(), a("button", {
        key: h,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${h} of ${s.value}`,
        "aria-pressed": d.value >= h,
        onClick: (C) => u(h)
      }, [
        (t(), a("svg", m$, [
          c(h) === "half" ? (t(), a("defs", p$, [
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
            ])], 8, v$)
          ])) : w("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: c(h) === "full" ? "currentColor" : c(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, g$)
        ]))
      ], 8, f$))), 128)),
      d.value > 0 ? (t(), a("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (h) => u(0))
      }, " Clear ", 8, h$)) : w("", !0)
    ], 8, c$));
  }
});
function x$() {
  be("radio", Gf), be("checkboxlist", Jf), be("tags", lm), be("colour", vm), be("slider", Wm), be("rating", b$), be("phone", t$), be("icon-picker", n$), be("tree-select", u$), be("visual-select", rp), be("markdown", Mf), be("code", Vf), be("map", ym), be("qrcode", Sm), be("barcode", Om), be("diff", Lm), be("seo-preview", X2), bt("swatch", dp), bt("voucher-code-box", W2), bt("document-colour-mode", G2);
}
function Aa() {
  const e = K(null), n = K(!1);
  let l = null;
  return ge(() => {
    if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver > "u" || !e.value) {
      n.value = !0;
      return;
    }
    l = new IntersectionObserver(
      (s) => {
        for (const i of s)
          i.isIntersecting && (n.value = !0, l?.disconnect());
      },
      // A little before it arrives, so the motion finishes as it lands
      // rather than starting once the reader is already looking at it.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    ), l.observe(e.value);
  }), xe(() => l?.disconnect()), { el: e, shown: n };
}
const y$ = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: n, shown: l } = Aa();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: n,
      class: z(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(l) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      H(r.$slots, "default")
    ], 6));
  }
}), k$ = ["id"], Ae = /* @__PURE__ */ O({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (n, l) => (t(), a("section", {
      id: e.id,
      class: z(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: z(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        D(y$, null, {
          default: V(() => [
            H(n.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, k$));
  }
}), $$ = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, w$ = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, C$ = {
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
    return (n, l) => e.title || e.body || e.eyebrow ? (t(), a("div", {
      key: 0,
      class: z(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", $$, f(e.eyebrow), 1)) : w("", !0),
      e.title ? (t(), a("h2", w$, f(e.title), 1)) : w("", !0),
      e.body ? (t(), a("p", C$, f(e.body), 1)) : w("", !0)
    ], 2)) : w("", !0);
  }
});
function S$() {
  const e = K(null);
  let n = null;
  function l(s) {
    if (!n)
      return;
    const i = n.getBoundingClientRect();
    n.style.setProperty("--pk-px", String((s.clientX - i.left) / i.width)), n.style.setProperty("--pk-py", String((s.clientY - i.top) / i.height));
  }
  function r() {
    n?.style.setProperty("--pk-px", "0.5"), n?.style.setProperty("--pk-py", "0.5");
  }
  return ge(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (n = e.value, r(), n.addEventListener("pointermove", l, { passive: !0 }), n.addEventListener("pointerleave", r, { passive: !0 }));
  }), xe(() => {
    n?.removeEventListener("pointermove", l), n?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const M$ = { class: "pk-tilt-inner relative h-full" }, B$ = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: n } = S$();
    return (l, r) => (t(), a("div", {
      ref_key: "el",
      ref: n,
      class: "pk-tilt group/tilt"
    }, [
      o("div", M$, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        H(l.$slots, "default")
      ])
    ], 512));
  }
}), _$ = { class: "flex flex-col gap-10" }, A$ = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, P$ = { class: "text-base font-semibold" }, z$ = { class: "text-sm text-pretty text-muted-foreground" }, O$ = /* @__PURE__ */ O({
  __name: "PkBento",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function n(l) {
      return {
        wide: "sm:col-span-2",
        tall: "sm:row-span-2",
        large: "sm:col-span-2 sm:row-span-2"
      }[l ?? ""] ?? "";
    }
    return (l, r) => (t(), T(Ae, null, {
      default: V(() => [
        o("div", _$, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", A$, [
            (t(!0), a(A, null, j(e.items ?? [], (s, i) => (t(), T(B$, {
              key: i,
              class: z(n(s.span))
            }, {
              default: V(() => [
                o("div", {
                  class: z([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", P$, f(s.title), 1),
                  o("p", z$, f(s.body), 1)
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
}), V$ = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, j$ = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, L$ = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, T$ = ["href"], D$ = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (n, l) => (t(), T(Ae, null, {
      default: V(() => [
        o("div", V$, [
          o("h2", j$, f(e.title), 1),
          e.body ? (t(), a("p", L$, f(e.body), 1)) : w("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, T$)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), F$ = { class: "flex flex-col gap-8" }, E$ = { class: "divide-y rounded-lg border" }, I$ = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, N$ = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, R$ = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (n, l) => (t(), T(Ae, { narrow: "" }, {
      default: V(() => [
        o("div", F$, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", E$, [
            (t(!0), a(A, null, j(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              o("summary", I$, [
                R(f(r.question) + " ", 1),
                l[0] || (l[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", N$, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), U$ = { class: "flex flex-col gap-10" }, H$ = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, K$ = { class: "text-sm font-semibold" }, q$ = { class: "text-sm text-pretty text-muted-foreground" }, G$ = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (n, l) => (t(), T(Ae, null, {
      default: V(() => [
        o("div", U$, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", H$, [
            (t(!0), a(A, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", K$, f(r.title), 1),
              o("p", q$, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), W$ = { class: "flex flex-col items-center gap-6 text-center" }, Z$ = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, J$ = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, Y$ = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Q$ = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, X$ = ["href"], ew = ["href"], tw = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, aw = /* @__PURE__ */ O({
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
    return (n, l) => (t(), T(Ae, null, {
      default: V(() => [
        o("div", W$, [
          e.eyebrow ? (t(), a("p", Z$, f(e.eyebrow), 1)) : w("", !0),
          o("h1", J$, f(e.title), 1),
          e.body ? (t(), a("p", Y$, f(e.body), 1)) : w("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", Q$, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, X$)) : w("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, ew)) : w("", !0)
          ])) : w("", !0),
          e.note ? (t(), a("p", tw, f(e.note), 1)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), lw = { class: "flex flex-col items-center gap-6" }, nw = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, ow = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, sw = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (n, l) => (t(), T(Ae, { muted: "" }, {
      default: V(() => [
        o("div", lw, [
          e.title ? (t(), a("p", nw, f(e.title), 1)) : w("", !0),
          o("ul", ow, [
            (t(!0), a(A, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), rw = { class: "flex flex-col gap-10" }, iw = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, dw = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, uw = ["aria-pressed"], cw = ["aria-pressed"], fw = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, mw = { class: "grid gap-4 md:grid-cols-3" }, pw = { class: "flex flex-col gap-1" }, vw = { class: "text-sm font-semibold" }, gw = { class: "flex items-baseline gap-1" }, hw = { class: "text-3xl font-semibold tracking-tight" }, bw = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, xw = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, yw = { class: "flex flex-col gap-2 text-sm" }, kw = { class: "text-muted-foreground" }, $w = ["href"], ww = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const n = e, l = K(!1), r = y(() => (n.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return l.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), T(Ae, { muted: "" }, {
      default: V(() => [
        o("div", rw, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", iw, [
            o("div", dw, [
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  l.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !l.value,
                onClick: d[0] || (d[0] = (u) => l.value = !1)
              }, " Monthly ", 10, uw),
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  l.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": l.value,
                onClick: d[1] || (d[1] = (u) => l.value = !0)
              }, " Annual ", 10, cw)
            ]),
            e.annualNote ? (t(), a("p", fw, f(e.annualNote), 1)) : w("", !0)
          ])) : w("", !0),
          o("ul", mw, [
            (t(!0), a(A, null, j(e.items ?? [], (u, c) => (t(), a("li", {
              key: c,
              class: z(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", pw, [
                o("h3", vw, f(u.name), 1),
                o("p", gw, [
                  o("span", hw, f(s(u)), 1),
                  u.period ? (t(), a("span", bw, f(u.period), 1)) : w("", !0)
                ]),
                u.body ? (t(), a("p", xw, f(u.body), 1)) : w("", !0)
              ]),
              o("ul", yw, [
                (t(!0), a(A, null, j(u.features ?? [], (v, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", kw, f(v.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), a("a", {
                key: 0,
                href: u.href ?? "#",
                class: z([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, $w)) : w("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function Cw() {
  const e = K(null);
  let n = null, l = null, r = !1, s = !1;
  function i() {
    if (r = !1, !n || !s)
      return;
    const u = n.getBoundingClientRect(), c = u.height + window.innerHeight, v = c <= 0 ? 0 : (window.innerHeight - u.top) / c;
    n.style.setProperty("--pk-progress", String(Math.min(Math.max(v, 0), 1)));
  }
  function d() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return ge(() => {
    const u = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (n = e.value, u || typeof IntersectionObserver > "u") {
        n.style.setProperty("--pk-progress", "1");
        return;
      }
      n.style.setProperty("--pk-progress", "0"), l = new IntersectionObserver((c) => {
        s = c.some((v) => v.isIntersecting), s && d();
      }), l.observe(n), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), xe(() => {
    l?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const Sw = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, Mw = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, Bw = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, _w = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Aw = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, Pw = { class: "pk-showcase-stage w-full [perspective:1400px]" }, zw = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, Ow = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, Vw = { class: "ml-3 truncate text-xs text-muted-foreground" }, jw = { class: "flex" }, Lw = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, Tw = { class: "min-w-0 flex-1 p-4" }, Dw = { class: "flex flex-col divide-y rounded-md border" }, Fw = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: n } = Cw();
    return (l, r) => (t(), a("section", {
      ref_key: "el",
      ref: n,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", Sw, [
        o("div", Mw, [
          o("div", Bw, [
            o("h2", _w, f(e.title), 1),
            e.body ? (t(), a("p", Aw, f(e.body), 1)) : w("", !0)
          ]),
          o("div", Pw, [
            o("div", zw, [
              o("div", Ow, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", Vw, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", jw, [
                o("div", Lw, [
                  (t(), a(A, null, j(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", Tw, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", Dw, [
                    (t(!0), a(A, null, j(e.rows, (s) => (t(), a("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: ne({ "--pk-row": String(s) })
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
}), Ew = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const n = e, { el: l, shown: r } = Aa(), s = K(0);
    return ce(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = n.to;
        return;
      }
      const u = performance.now(), c = (v) => {
        const p = Math.min((v - u) / n.duration, 1);
        s.value = n.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(c) : s.value = n.to;
      };
      requestAnimationFrame(c);
    }), (i, d) => (t(), a("span", {
      ref_key: "el",
      ref: l
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), Iw = { class: "flex flex-col gap-10" }, Nw = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, Rw = { class: "order-2 text-sm text-muted-foreground" }, Uw = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, Hw = /* @__PURE__ */ O({
  __name: "PkStats",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function n(l) {
      const r = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/.exec((l ?? "").trim());
      if (!r)
        return null;
      const s = r[2].includes(".") ? r[2].split(".")[1].length : 0;
      return { prefix: r[1], number: Number(r[2]), suffix: r[3], decimals: s };
    }
    return (l, r) => (t(), T(Ae, { muted: "" }, {
      default: V(() => [
        o("div", Iw, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", Nw, [
            (t(!0), a(A, null, j(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", Rw, f(s.label), 1),
              o("dd", Uw, [
                n(s.value) ? (t(), T(Ew, {
                  key: 0,
                  to: n(s.value).number,
                  prefix: n(s.value).prefix,
                  suffix: n(s.value).suffix,
                  decimals: n(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), a(A, { key: 1 }, [
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
}), Kw = { class: "flex flex-col gap-10" }, qw = { class: "grid gap-6 md:grid-cols-3" }, Gw = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, Ww = { class: "text-sm font-semibold" }, Zw = { class: "text-sm text-pretty text-muted-foreground" }, Jw = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (n, l) => (t(), T(Ae, null, {
      default: V(() => [
        o("div", Kw, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", qw, [
            (t(!0), a(A, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", Gw, f(s + 1), 1),
              o("h3", Ww, f(r.title), 1),
              o("p", Zw, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Yw = { class: "flex flex-col gap-10" }, Qw = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, Xw = { class: "text-pretty text-sm leading-relaxed" }, e4 = { class: "mt-auto flex items-center gap-3" }, t4 = ["src"], a4 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, l4 = { class: "min-w-0" }, n4 = { class: "block truncate text-sm font-medium" }, o4 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, s4 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (n, l) => (t(), T(Ae, null, {
      default: V(() => [
        o("div", Yw, [
          D(Ne, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Qw, [
            (t(!0), a(A, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", Xw, " “" + f(r.quote) + "” ", 1),
              o("figcaption", e4, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, t4)) : (t(), a("span", a4, f((r.name ?? "?").slice(0, 1)), 1)),
                o("span", l4, [
                  o("span", n4, f(r.name), 1),
                  r.role ? (t(), a("span", o4, f(r.role), 1)) : w("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), cC = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: n }) {
    const l = e, r = {
      hero: aw,
      logos: sw,
      features: G$,
      bento: O$,
      showcase: Fw,
      steps: Jw,
      stats: Hw,
      testimonials: s4,
      pricing: ww,
      faq: R$,
      cta: D$
    }, s = y(
      () => (l.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && l.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return n({ known: Object.keys(r) }), (i, d) => (t(!0), a(A, null, j(s.value, (u) => (t(), T(Ce(u.component), oe({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), r4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, fC = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (n, l) => (t(), a("div", r4, [
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
      l[0] || (l[0] = o("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), i4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, mC = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (n, l) => (t(), a("div", i4, [...l[0] || (l[0] = [
      At('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), d4 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, pC = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (n, l) => (t(), a("div", d4, [...l[0] || (l[0] = [
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
x$();
const vC = "0.0.1";
export {
  D3 as AdminDirectory,
  dc as Alert,
  uc as AlertDescription,
  cc as AlertTitle,
  $3 as AppPageFooter,
  E4 as AppearanceDrawer,
  F5 as Avatar,
  E5 as AvatarFallback,
  I5 as AvatarImage,
  It as BADGE_VARIANTS,
  L4 as BadgeResolver,
  P3 as BarChart,
  N5 as Breadcrumb,
  R5 as BreadcrumbEllipsis,
  U5 as BreadcrumbItem,
  H5 as BreadcrumbLink,
  K5 as BreadcrumbList,
  q5 as BreadcrumbPage,
  G5 as BreadcrumbSeparator,
  x4 as BulkActions,
  ka as CATALOGUE_CONTAINER,
  gc as CATALOGUE_GRID,
  q4 as CATALOGUE_GRID_TIGHT,
  hc as CATALOGUE_GRID_TILES,
  f3 as Card,
  m3 as CardAction,
  p3 as CardContent,
  v3 as CardDescription,
  g3 as CardFooter,
  h3 as CardHeader,
  b3 as CardTitle,
  my as CartPanel,
  q3 as CatalogBrowser,
  Eb as CatalogCard,
  _a as CatalogFilterSheet,
  Ut as CatalogGrid,
  H3 as CatalogInspect,
  a0 as CatalogItemDetail,
  K3 as CatalogItemView,
  G3 as CatalogRegister,
  U3 as CatalogTill,
  uh as ChartCard,
  lt as ChartTooltip,
  pr as Checkbox,
  A4 as CheckboxCell,
  P4 as CodeCell,
  Md as ColourCell,
  L3 as ComboChart,
  mr as CreateOptionDialog,
  dr as CreateOptionError,
  Z3 as DASHBOARD_HIDDEN_STORAGE_KEY,
  D0 as DASHBOARD_HIDE_KEY,
  J3 as DashboardShortcuts,
  Vn as DataTable,
  t3 as Dialog,
  a3 as DialogClose,
  l3 as DialogContent,
  n3 as DialogDescription,
  o3 as DialogFooter,
  s3 as DialogHeader,
  Gc as DialogOverlay,
  r3 as DialogScrollContent,
  i3 as DialogTitle,
  d3 as DialogTrigger,
  D3 as DirectoryPage,
  C5 as DropdownMenu,
  S5 as DropdownMenuCheckboxItem,
  M5 as DropdownMenuContent,
  B5 as DropdownMenuGroup,
  _5 as DropdownMenuItem,
  A5 as DropdownMenuLabel,
  bC as DropdownMenuPortal,
  P5 as DropdownMenuRadioGroup,
  z5 as DropdownMenuRadioItem,
  O5 as DropdownMenuSeparator,
  V5 as DropdownMenuShortcut,
  j5 as DropdownMenuSub,
  L5 as DropdownMenuSubContent,
  T5 as DropdownMenuSubTrigger,
  D5 as DropdownMenuTrigger,
  V4 as EditableCell,
  $e as FOCUS_RING,
  y4 as FOCUS_RING_SOFT,
  Gt as FOCUS_RING_WITHIN,
  Z4 as FORM_MEASURE,
  Ke as FormFieldControl,
  T3 as HeatmapChart,
  vt as ICON_PATHS,
  gd as IconCell,
  kd as ImageCell,
  sC as InfoNode,
  xc as JPEG_IMAGE_ERROR,
  z4 as KeyValueCell,
  u3 as Label,
  Bv as LineChart,
  Gx as LineItems,
  dt as MiniStatCard,
  W5 as NavigationMenu,
  Z5 as NavigationMenuContent,
  J5 as NavigationMenuIndicator,
  Y5 as NavigationMenuItem,
  Q5 as NavigationMenuLink,
  X5 as NavigationMenuList,
  e3 as NavigationMenuTrigger,
  Kc as NavigationMenuViewport,
  bc as OPAQUE_IMAGE_ERROR,
  Ie as PAGE_SHELL,
  G4 as PAGE_SHELL_COMPACT,
  W4 as PAGE_SHELL_STACK,
  rC as PaymentGatewaySettings,
  P2 as PaymentGateways,
  z3 as PieChart,
  H4 as PkAlertError,
  fC as PkAuroraBackdrop,
  Ee as PkBadge,
  Om as PkBarcode,
  O$ as PkBento,
  I4 as PkBottomNav,
  x3 as PkBoundary,
  S3 as PkBuilder,
  re as PkButton,
  M3 as PkCalendar,
  y3 as PkCard,
  Jf as PkCheckboxList,
  Ma as PkCodeBox,
  Vf as PkCodeInput,
  vm as PkColourPicker,
  pC as PkConsoleBackdrop,
  Ew as PkCountUp,
  D$ as PkCta,
  w3 as PkDeviceFrame,
  Lm as PkDiff,
  Ip as PkDocument,
  He as PkDropdown,
  mC as PkEditorialBackdrop,
  $t as PkEmptyState,
  R$ as PkFaq,
  G$ as PkFeatureGrid,
  Se as PkFieldLabel,
  va as PkFileUpload,
  Oe as PkHeading,
  aw as PkHero,
  Rr as PkKeyValue,
  cC as PkLandingSections,
  sw as PkLogoCloud,
  hm as PkMap,
  ym as PkMapField,
  Mf as PkMarkdownInput,
  Xe as PkModal,
  Dt as PkMultiSelect,
  R4 as PkOtpInput,
  U4 as PkPageHeader,
  aC as PkPasskeyRegister,
  K4 as PkPasswordInput,
  ww as PkPricing,
  Sm as PkQrCode,
  Tx as PkQtyStepper,
  To as PkQueryBuilder,
  Gf as PkRadioGroup,
  C3 as PkRepeater,
  y$ as PkReveal,
  Qr as PkRichEditor,
  Ae as PkSection,
  Ne as PkSectionHeading,
  Fw as PkShowcase,
  h0 as PkSignaturePad,
  Me as PkSkeleton,
  Ht as PkSlideover,
  Wm as PkSlider,
  N4 as PkSpinner,
  Hw as PkStats,
  ke as PkStatusBadge,
  rr as PkStepIndicator,
  Jw as PkSteps,
  dp as PkSwatchPreview,
  lm as PkTagsInput,
  s4 as PkTestimonials,
  ye as PkTextInput,
  B$ as PkTiltCard,
  rp as PkVisualSelect,
  f1 as PlanCard,
  R3 as PlanEditor,
  N3 as PlanGrid,
  j3 as PolarAreaChart,
  V3 as RadarChart,
  _4 as RatingCell,
  T4 as RecordActions,
  lC as RecordForm,
  B4 as RelationCreateDialog,
  $4 as RelationPanel,
  gb as STATUS_TONES,
  O3 as ScatterChart,
  ga as SchemaNode,
  E3 as SegmentedBar,
  X3 as SelectionBar,
  Ic as Separator,
  Q3 as SetupChecklist,
  ya as ShadcnInput,
  Ft as Sheet,
  Y4 as SheetClose,
  Et as SheetContent,
  Sc as SheetDescription,
  Q4 as SheetFooter,
  Mc as SheetHeader,
  Bc as SheetTitle,
  X4 as SheetTrigger,
  Ah as ShortcutsWidget,
  e5 as Sidebar,
  t5 as SidebarContent,
  a5 as SidebarFooter,
  l5 as SidebarGroup,
  n5 as SidebarGroupAction,
  o5 as SidebarGroupContent,
  s5 as SidebarGroupLabel,
  r5 as SidebarHeader,
  i5 as SidebarInput,
  d5 as SidebarInset,
  u5 as SidebarMenu,
  c5 as SidebarMenuAction,
  f5 as SidebarMenuBadge,
  p5 as SidebarMenuButton,
  v5 as SidebarMenuItem,
  g5 as SidebarMenuSkeleton,
  h5 as SidebarMenuSub,
  b5 as SidebarMenuSubButton,
  x5 as SidebarMenuSubItem,
  y5 as SidebarProvider,
  k5 as SidebarRail,
  $5 as SidebarSeparator,
  w5 as SidebarTrigger,
  W3 as SignatureStudio,
  ft as Sparkline,
  c3 as Spinner,
  F3 as StatCard,
  I3 as StatListChart,
  Y3 as StatStrip,
  Ue as Switch,
  $a as TRANSPARENT_IMAGE_HELP,
  eC as TablePagination,
  fo as TableShell,
  tC as TableTabs,
  Es as TableToolbar,
  O4 as TagsCell,
  A3 as ThemeToggle,
  Dc as Tooltip,
  Fc as TooltipContent,
  m5 as TooltipProvider,
  Ec as TooltipTrigger,
  Ba as TrendBadge,
  nC as UnsavedBar,
  fc as alertVariants,
  mu as appearanceVars,
  Mt as applyAppearance,
  Cc as assertTransparentImage,
  Je as buttonClasses,
  ut as catalogFiltersActive,
  X as cn,
  cr as createOptionActionLabel,
  ur as createOptionTitle,
  Ib as cycleLabel,
  Ve as emptyCatalogFilters,
  ir as fieldControl,
  M4 as fieldErrorsFromPayload,
  xx as findExactSku,
  Nb as formatPerkValue,
  Rd as hasBadgeValue,
  w4 as hasFieldControl,
  B3 as hasOptionPreview,
  de as iconPath,
  $c as imageHasTransparency,
  D4 as initializeAppearance,
  St as isDark,
  Kt as matchCatalogItem,
  qc as navigationMenuTriggerStyle,
  Zm as optionPreview,
  J4 as packWidgetColumns,
  Rb as perkGranted,
  Rt as readAppearance,
  x$ as registerBuiltInFieldControls,
  be as registerFieldControl,
  bt as registerOptionPreview,
  C4 as registeredFieldTypes,
  Jm as registeredOptionPreviews,
  S4 as resetFieldControls,
  _3 as resetOptionPreviews,
  F4 as setAppearancePersister,
  Nc as sidebarMenuButtonVariants,
  yb as statusBadgeVariant,
  xb as statusTone,
  k4 as toUrl,
  xa as useAppearance,
  iC as useColumnVisibility,
  dC as useLiveUpdates,
  S$ as usePointer,
  Aa as useReveal,
  j4 as useSchemaColumns,
  Cw as useScrollProgress,
  k3 as useShellPageFooter,
  ct as useSidebar,
  uC as useTenantTheme,
  oC as useUnsavedChanges,
  vC as version
};
//# sourceMappingURL=index.js.map
